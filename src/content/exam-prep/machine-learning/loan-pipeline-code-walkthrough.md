---
title: "Loan Pipeline — Code Walkthrough & Defect Catalogue"
subject: machine-learning
type: reference
description: "Line-by-line reading of loan_pipeline.ipynb — what each cell does, and the fourteen planted defects the exam is built on."
course: "Machine Learning — Economics Track"
semester: 2
year: 2
source_doc: /papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf
tags:
  - machine-learning
  - exam-prep
  - loan-pipeline
  - data-leakage
  - code-walkthrough
aliases:
  - Loan Pipeline Walkthrough
  - Loan Pipeline Defects
  - ML Code Walkthrough
pinned: true
order: 1
in_scope: true
---

> [!info] Why this document exists
> The exam gives you **one notebook**, released in advance, and asks 25 questions about it. Like the econometrics exam, the code is not a surprise — the marks are for knowing it cold. This walks the notebook cell by cell and catalogues every planted defect.
>
> 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb) · 📄 [Problem brief + 15 prep questions](/papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf) · 📝 [[pp-01-sample-exam-25-questions|Sample exam — 25 questions]]

## The situation in one paragraph

A retail bank issues personal loans of 8,000–300,000 shekels, currently underwritten by humans against fixed rules. About **14% default**. The data team was asked to *"build a model that tells us which applications to approve and which to reject"* — a decision about a **new applicant**, on **one day**, using only what the bank knows **on that day**. A regulator additionally requires that any rejection be explainable in plain terms.

The team delivered a six-step pipeline reporting ~98% accuracy and recommending the neural network *"because deep learning is the more advanced technology"*.

> [!danger] The one sentence to carry into the exam
> **Everything the notebook reports is measured wrong, and the model does not answer the question that was asked.**

---

## Cell-by-cell

### Setup

```python
rng = np.random.default_rng(7)
keras.utils.set_random_seed(7)
```

Seeds are fixed, so the notebook is reproducible. Worth noting only because it means the ~98% is stable, not a fluke — it is *consistently* wrong.

### Cell 3 — `load_data()`: where every defect is born

This is the cell that matters. Read it more carefully than the rest of the notebook combined.

```python
self_emp = rng.random() < 0.25
income_m = np.exp(rng.normal(9.1, 0.45))                    # monthly income
income = income_m * 12 if rng.random() < 0.3 else income_m  # ⚠️ mixed units
score = np.clip(rng.normal(680, 70), 300, 850)
loan = np.clip(rng.normal(70000, 30000), 8000, 300000)
```

The `income` line silently produces **two populations**: 30% annual, 70% monthly, in one column. This is what makes the histogram bimodal with peaks a factor of ~12 apart.

```python
risk = -3.1 - 0.011 * (score - 680) + 1.6 * loan / (income_m * 12) \
       - 0.5 * (not self_emp) + rng.normal(0, 0.4)
default = int(rng.random() < 1 / (1 + np.exp(-risk)))
```

The true data-generating process: risk falls with credit score, rises with loan-to-income, and is higher for the self-employed. Note it uses `income_m * 12` — the *correct* annualised income, which the `income` column does not reliably contain.

```python
days_late   = rng.uniform(2, 35) if default else rng.exponential(2.5)   # ⚠️⚠️ leak
collections = int((default and rng.random() < 0.65) or rng.random() < 0.05)  # ⚠️⚠️ leak
```

> [!danger] The fatal lines
> Both features are computed **from `default`**. They are consequences of the outcome, not predictors of it, and neither exists for an applicant who does not yet have a loan. This is where the 98% comes from.

```python
income = np.nan if rng.random() < (0.30 if self_emp else 0.05) else round(income)
score  = np.nan if rng.random() < 0.08 else round(score)
```

Missingness is **not random**: self-employed borrowers are missing income at 30% vs 5% for salaried. The gap correlates with a genuine risk factor, so the pattern of missingness is itself informative — and the cleaning step destroys it.

```python
for month in range(1, int(rng.integers(3, 9)) + 1):
    rows.append({...})
```

Each customer emits **3–8 near-identical rows**, all carrying the same `default`. 1,200 customers become ~6,600 rows. Only `month` and a jittered `avg_days_late` vary within a customer.

### Cell 6 — "Clean"

```python
df["income"] = df["income"].fillna(df["income"].mean())   # ⚠️ mean of a bimodal column, pre-split
df["credit_score"] = df["credit_score"].fillna(0)         # ⚠️ 0 is off-scale (300–850)
X = df.drop(columns=["default", "customer_id"])           # ⚠️ `month` survives as a feature
y = df["default"]
X = StandardScaler().fit_transform(X)                     # ⚠️ fitted on ALL data, pre-split
```

Four defects in five lines. Note also what `drop` does *not* remove: `month` stays in the feature matrix, and `avg_days_late` / `collections_flag` stay in too.

### Cell 8 — Split

```python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

Row-level, so customers land on both sides. No `stratify=y` despite ~14% imbalance. No validation set — two sets out, not three.

### Cells 10 & 12 — The two models

```python
rf = RandomForestClassifier(n_estimators=100, random_state=42)
```
Comment claims *"model parameters: `n_estimators=100`, default settings are fine"*. `n_estimators` is a **hyperparameter**, and nothing justified 100.

```python
nn.fit(X_train, y_train, epochs=30, batch_size=64, verbose=0)
```
Comment claims *"3 layers, 30 epochs, no tuning needed"*. No `validation_data`, no `callbacks`, no early stopping — a fixed 30 epochs with nothing monitoring for overfitting. Three 256-unit layers is also heavy machinery for seven tabular features.

### Cells 14 & 15 — Compare and decide

```python
fig.update_yaxes(range=[0.90, 1.00])   # ⚠️ truncated axis exaggerates a tiny gap
```

```
"Both models are around 98% - far better than a 50/50 coin flip."
"Decision: deploy the NEURAL NETWORK (deep learning is the more advanced technology)."
```

Two rhetorical failures in the closing lines. The baseline is **not** a 50/50 coin flip — it is the ~86% you get by predicting "no default" for everyone. And the recommendation contradicts the team's own printout while citing a reason that is not a criterion.

---

## The defect catalogue

| # | Defect | Where | Why it matters | Q |
|---|---|---|---|---|
| 1 | **Target leakage** — `avg_days_late`, `collections_flag` derived from `default` | `load_data` | The model is handed the answer; source of the fake 98% | 1, 12 |
| 2 | **Grouped rows, row-level split** — 3–8 rows per customer | `load_data` + split | Measures recognition, not prediction | 2, 11 |
| 3 | **Scaler fitted before split** | `fit_transform(X)` | Test statistics leak into training | 7, 13 |
| 4 | **Mean imputation before split** | `fillna(mean)` | Same leak, plus a meaningless value | 13 |
| 5 | **`credit_score` filled with 0** | `fillna(0)` | Off-scale; becomes an extreme outlier after scaling | 14 |
| 6 | **Informative missingness destroyed** | `fillna` both | Self-employed 30% vs salaried 5% missing — a real signal, overwritten | 14 |
| 7 | **Mixed units in `income`** | `income_m * 12 if ...` | Bimodal column; the feature is uninterpretable | 5, 17 |
| 8 | **`month` kept as a feature** | `drop(columns=[...])` | A warehouse artefact, not a property of the applicant | 16 |
| 9 | **No validation set** | split + `fit` | Nothing chose the hyperparameters or the stopping point | 6, 18 |
| 10 | **Accuracy on imbalanced data** | `accuracy_score` | ~86% is free; no recall, precision, or confusion matrix | 9, 19 |
| 11 | **Threshold fixed at 0.5** | `> 0.5` | Ignores that the two errors cost very different amounts | 24 |
| 12 | **Hyperparameters mislabelled** | markdown cells | "model parameters", "no tuning needed" — nothing was justified | 8 |
| 13 | **Selection bias** — approved loans only | the warehouse | The riskiest applicants never appear; **not fixable in code** | 4, 20 |
| 14 | **Unanchored label** — no fixed outcome window | brief | Loans observed 3–8 months judged by one rule | 3, 15 |
| 15 | **Non-sequitur recommendation** | closing cell | Contradicts its own numbers, cites a non-criterion | 22 |

> [!tip] Two of these are not code bugs
> **#13 (selection bias)** and **#14 (label definition)** cannot be fixed by editing the notebook — one needs new data collected by experiment, the other needs a business decision about what "default" means. The exam separates these deliberately: knowing which defects code can fix is part of what is being marked.

---

## The number that anchors everything

| Rule | Accuracy | Defaulters caught |
|---|---|---|
| "Approve everyone" (do nothing) | **~86%** | **0%** |
| The notebook's models | ~98% | unknown — never measured |
| Corrected evaluation (per Q25) | not reported | **36–37%** |

The gap between 86% and 98% is almost entirely leakage. Once the leak is removed and the split fixed, recall lands in the mid-30s — which may still be a good business outcome, but is a different conversation from "98%, far better than a coin flip".

> [!warning] The trap in "far better than a 50/50 coin flip"
> A coin flip is the baseline for a **balanced** problem. Here the majority-class rule scores 86% while catching nobody. Any claim about model quality that does not name the right baseline is not a claim about model quality.

---

## The correct pipeline, in order

1. **Define the label** — fix one horizon (e.g. default within 24 months of origination), document it, exclude loans not yet observed that long.
2. **Fix the unit** — one row per *application*, not per customer-month.
3. **Fix the columns** — drop everything not knowable on submission day; trace `income` to its source system and convert to one documented unit.
4. **Split first** — by **customer**, stratified on the label, into train / validation / test.
5. **Then clean** — impute from *training* statistics only (median + missing-indicator), scale inside a `Pipeline` so the fit never sees validation or test.
6. **Tune on validation** — never on test.
7. **Evaluate properly** — confusion matrix, recall, precision, [[roc-curve|ROC]]/[[auc|AUC]], against the majority-class baseline.
8. **Set the threshold from costs**, not from the 0.5 default, and compare models *at that threshold*.
9. **Choose on the agreed criteria** — defaulters caught, money per error type, explainability, running cost, segment stability.

> [!note] The ordering is the exam
> Steps 4 and 5 being the wrong way round in the notebook is defect #3 and #4. Step 6 done on test is Q18's wrong answer. Step 8 skipped is Q24. Almost every question maps onto a step in this list being done out of order or skipped.

---

## Related

- [[data-leakage]] · [[train-test-split]] · [[validation-set]] · [[cross-validation]]
- [[confusion-matrix]] · [[precision-and-recall]] · [[accuracy]] · [[roc-curve]] · [[auc]]
- [[missing-values]] · [[feature-scaling]] · [[scikit-learn-pipeline]]
- [[overfitting]] · [[bias-variance-tradeoff]] · [[hyperparameter-tuning]]
- [[random-forest]] · [[decision-tree]] · [[ensemble-methods]]
