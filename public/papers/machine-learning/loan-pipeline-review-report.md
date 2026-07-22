# Loan Pipeline Review — Mistakes, Fixes, and the Honest Numbers

**Reviewed:** `loan_pipeline.ipynb` (the data team's notebook)
**Verdict:** No-go on deployment. The reported ~98% accuracy is an artefact of three compounding errors — leaked outcome columns, customer duplication across train/test, and accuracy measured against a 14% base rate. Rebuilt correctly, the models will score far lower, and that lower number is the true state of knowledge.

---

## Part 1 — The headline problem

The pipeline answers the wrong question. The bank asked: *"should we approve this **new applicant**, today, using only what we know today?"* The pipeline answers: *"is this **existing loan**, which has been running for months, going to default — given how its repayments have been going?"* The second question is easy (the repayment behaviour almost *is* the answer) and useless (a new applicant has no repayment behaviour with the bank). Every specific mistake below feeds this one.

---

## Part 2 — Cell-by-cell mistakes and fixes

### Cell: Load data (`load_data` → `loans.csv`)

| # | Mistake | Why it's wrong | Fix |
|---|---------|----------------|-----|
| 1 | Data covers **approved loans only** | The model learns patterns among people who passed the old rules, but will be applied to *all* applicants — including the kind the old rules rejected, whom it has never seen. This is **selection (survivorship) bias**. | Cannot be fixed in code. Options: shadow-mode pilot, approve a small randomised slice of borderline applications to collect unbiased outcomes, reject-inference techniques. |
| 2 | **Mixed income units** — ~30% of incomes stored annually, the rest monthly | Two identical earners can differ 12× in the feature. Any statistic computed on the raw column (mean, scaler parameters) is garbage. | Detect the split (the log-income histogram separates cleanly) and convert everything to one unit before any modelling. In production, fix per source system upstream. |
| 3 | **Outcome-derived columns created as features**: `avg_days_late`, `collections_flag` | They are generated *from* the default label (defaulters are drawn 2–35 days late; collections fires 65% of the time for defaulters). They describe what happened *after* the loan was granted — a new applicant has neither. This is **target leakage**, and it is the single biggest driver of the 98%. | Exclude them (plus `month`). Features must be knowable on application day: income, self_employed, credit_score, loan_amount. |
| 4 | **Panel structure ignored** — each customer appears 3–8 times with identical features and label | One row ≠ one applicant. It sets up the train/test contamination below and over-weights long-lived loans. | Collapse to one row per customer (or use group-aware splitting). |

### Cell: Income histogram

| # | Mistake | Why it's wrong | Fix |
|---|---------|----------------|-----|
| 5 | Chart drawn, **evidence ignored** | The histogram clearly shows two peaks ~12× apart — the units problem in plain sight. EDA that doesn't change your behaviour is decoration. | Diagnose the bimodality, fix the units, re-plot to confirm one clean distribution. |

### Cell: Clean

| # | Mistake | Why it's wrong | Fix |
|---|---------|----------------|-----|
| 6 | `income.fillna(income.mean())` — mean computed on the **whole table before splitting** | Test-set values influence the number used to fill training rows: **preprocessing leakage**. The test estimate becomes optimistic. | Split first; learn imputation values from the training set only — inside an sklearn `Pipeline` so it cannot be done in the wrong order. |
| 7 | The mean itself is meaningless | It averages monthly and annual figures (mistake 2) over a right-skewed distribution. | Fix units first; impute with the **median**, which is robust to skew. |
| 8 | Missingness treated as noise | Income is missing for ~30% of self-employed vs ~5% of salaried — it is **not missing at random**; the fact of being missing is itself predictive. Mean-filling erases that signal. | Add `income_missing` / `score_missing` indicator columns alongside imputation. |
| 9 | `credit_score.fillna(0)` | 0 is impossible on a 300–850 scale. The model reads missing-score customers as catastrophically bad credit, and the fake zeros drag the scaler's mean/std. | Training-set median + missing indicator. |
| 10 | `X = df.drop(columns=["default","customer_id"])` keeps `month`, `avg_days_late`, `collections_flag` | This is where the target leakage (mistake 3) actually enters the model. | Select an explicit application-time feature list rather than "everything except the target". |
| 11 | `StandardScaler().fit_transform(X)` on **all** data before the split | Same leakage class as mistake 6: the scaler's mean/std contain test-set information. | Fit the scaler on train only, transform test — inside the `Pipeline`. (Minor: binary flags don't need scaling at all.) |

### Cell: Split

| # | Mistake | Why it's wrong | Fix |
|---|---------|----------------|-----|
| 12 | **Random row-level split with duplicated customers** | A customer's month-3 row lands in train and their month-5 row — identical features, same label — lands in test. With 3–8 rows each and an 80/20 split, most customers end up on **both sides**, so the test set largely "tests" rows the model has memorised. | Split by customer (`GroupShuffleSplit` on `customer_id`) — or collapse to one row per customer first, after which a plain split is safe. |
| 13 | No stratification | With a ~14% positive class, an unlucky split skews the class balance between portions. | `stratify=y`. |
| 14 | **No validation set** | Hyperparameters ("100 trees", "3 layers, 30 epochs, no tuning needed") were chosen with nothing to choose against; tuning against the test set would burn the only honest estimate. | Train/validation/test split or cross-validation for tuning; touch the test set once, at the end. |

### Cell: Random Forest

| # | Mistake | Why it's wrong | Fix |
|---|---------|----------------|-----|
| 15 | **Accuracy as the only metric** | With 14% defaults, predicting "no default" for everyone scores ~86% while catching zero defaulters. 98% is impressive against a coin flip but only ~12 points above the do-nothing baseline — and even that gap is inflated by mistakes 3 and 12. | Confusion matrix, precision/recall on the default class, ROC-AUC / PR-AUC, and cost-weighted evaluation. |
| 16 | "Default settings are fine" | An untested assertion; no validation set existed to test it. | Validate; regularise (`min_samples_leaf`, max depth). |

### Cell: Neural network

| # | Mistake | Why it's wrong | Fix |
|---|---------|----------------|-----|
| 17 | 3×256 hidden units (~140k parameters) for ~5,200 training rows, 7 features | Severely oversized for small tabular data, where tree ensembles and logistic regression are the standard winners. | If a NN is kept at all: small (e.g. 32→16) with regularisation. |
| 18 | No `validation_split`, no early stopping | 30 epochs picked blind; the train-vs-validation curves that would reveal overfitting were never even generated. | Validation split + early stopping; plot learning curves. |
| 19 | Fixed 0.5 threshold, no class weighting | Ignores both the imbalance and the cost asymmetry the brief explicitly flags (a missed default costs far more than a lost customer). | `class_weight="balanced"` or resampling; choose the operating threshold by expected business cost, not 0.5. |
| 20 | **Unexplainable model under an explainability constraint** | The regulator requires plain-language rejection reasons. A dense NN is the hardest option to explain — this alone disqualifies it regardless of accuracy. | Logistic regression (coefficients read directly as reasons) or a constrained tree model with SHAP-style explanations. |

### Cell: Comparison chart

| # | Mistake | Why it's wrong | Fix |
|---|---------|----------------|-----|
| 21 | **Y-axis clipped to 0.90–1.00** | A ~1-point difference fills the whole chart and looks decisive. Classic misleading visualisation. | Axis from 0; compare on the metrics that matter, not accuracy alone. |
| 22 | No baseline shown | Without an "approve everyone = 86%" bar, 98% has no context. | Always plot the naive baseline. |

### Cell: Conclusion

| # | Mistake | Why it's wrong | Fix |
|---|---------|----------------|-----|
| 23 | "Far better than a 50/50 coin flip" | Wrong baseline. The honest comparator is ~86%, not 50%. | Compare to the majority-class baseline. |
| 24 | "Deploy the NN — deep learning is the more advanced technology" | Technology fashion is not a selection criterion — and the RF actually scored slightly *higher*. Real criteria: cost-weighted performance, explainability, calibration, robustness, maintainability. | Choose on criteria. Here they point to logistic regression — and to a pilot, not deployment. |

---

## Part 3 — Flawed vs corrected, side by side

| Design choice | Flawed pipeline | Corrected pipeline |
|---|---|---|
| Unit of analysis | Loan-month row (customers duplicated 3–8×) | One row per customer |
| Features | Everything incl. `avg_days_late`, `collections_flag`, `month` (leaky) | Application-time only: income (unit-fixed), self_employed, credit_score, loan_amount, + missingness indicators |
| Income units | Mixed monthly/annual, ignored | Converted to one unit before modelling |
| Imputation | Whole-table mean (income), 0 (credit_score) | Training-set median + missing-indicator columns |
| Scaling | Fit on all data before split | Fit on train only, inside a `Pipeline` |
| Split | Random by row → same customers in train and test | By customer, stratified on the label |
| Validation | None | Validation/CV for any tuning |
| Class imbalance | Ignored | `class_weight="balanced"`, threshold chosen by cost |
| Metrics | Accuracy only, vs 50% "baseline" | Confusion matrix, precision/recall on defaults, ROC-AUC, cost-weighted, vs 86% baseline |
| Chart | Accuracy bars, y-axis 0.90–1.00 | Full axis, baseline line, multiple metrics |
| Model choice | NN, "because more advanced" | Logistic regression: comparable performance, regulator-explainable |
| Reported result | ~98–99% "accuracy" | Expect accuracy near the ~86% baseline and ROC-AUC roughly in the 0.70s — much less flattering, and honest |

**Why the numbers collapse:** remove the leaked columns and the score drops sharply (the model loses its answer sheet); de-duplicate customers and it drops again (the test set stops being memorised training rows); switch from accuracy to defaulter-recall and the remaining number stops flattering itself against a 14% base rate. What's left — a modest AUC from income, score, loan size and employment type — is the real predictive content of application-day data. That is normal for credit scoring; genuine 98% would itself be a red flag for leakage.

---

## Part 4 — Decision recommendation

1. **No-go** on deploying either model. The 98% is not a measurement of anything real.
2. Rebuild with: application-time features only, one row per customer, train-only preprocessing in a `Pipeline`, cost-aware evaluation.
3. **Candidate model: logistic regression** — on ~6,500 rows and 4 real features it will perform on par with the complex models, and it is the only one that satisfies the regulator's explainability requirement out of the box.
4. Before any production use: **shadow mode** alongside human underwriters; a small **randomised approval slice** of borderline applications to start correcting the approved-only selection bias; the decision threshold set from the bank's **real cost numbers** for missed defaults vs lost customers; calibration and drift monitoring after go-live.
