---
title: "Loan Pipeline — Code Walkthrough & Defect Catalogue"
subject: machine-learning
type: reference
description: "Line-by-line reading of loan_pipeline.ipynb — what each cell does, and the fifteen planted defects the exam is built on."
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
> 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb) · 📄 [Problem brief + 15 prep questions](/papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf) · 📄 [The review report](/papers/machine-learning/loan-pipeline-review-report.md) · 📝 [[pp-01-sample-exam-25-questions|Sample exam — 25 questions]]

## The situation in one paragraph

A retail bank issues personal loans of 8,000–300,000 shekels, currently underwritten by humans against fixed rules. About **14% default**. The data team was asked to *"build a model that tells us which applications to approve and which to reject"* — a decision about a **new applicant**, on **one day**, using only what the bank knows **on that day**. A regulator additionally requires that any rejection be explainable in plain terms.

The team delivered a six-step pipeline reporting ~98% accuracy and recommending the neural network *"because deep learning is the more advanced technology"*.

> [!danger] The one sentence to carry into the exam
> **Everything the notebook reports is measured wrong, and the model does not answer the question that was asked.**
>
> The bank asked: *should we approve this **new applicant**, today, using only what we know today?* The pipeline answers: *is this **existing loan**, months into repayment, going bad — given how its repayments have been going?* The second question is easy (the repayment behaviour almost *is* the answer) and useless (a new applicant has no repayment history with the bank). Every defect below feeds this one.

---

## The notebook, cell by cell — complete code

Every cell below is **verbatim** from `loan_pipeline.ipynb` — nothing trimmed. The exam shows you the whole notebook, including the innocent-looking parts, so revise it the same way: read each cell in full, then check yourself against the dissection underneath it. The defect numbers (**#1–#15**) refer to [the catalogue](#the-defect-catalogue) further down.

### Cell 0 (markdown) — the pitch

> # Loan Default Prediction — Standard ML Pipeline
> **Prepared by the data team** (working with an AI coding assistant).
> **For:** the go/no-go decision meeting.
> **Recommendation:** deploy the neural network (accuracy ~98%).
> Runs as-is in **Google Colab**: `Runtime → Run all`.

**What to notice.** The recommendation is stated *before* you have seen a single line of evidence, and the headline number (~98%) is planted in your head from the first sentence. The brief's whole framing — "the pipeline runs cleanly and reports an impressive number; neither fact is evidence that it works" — is aimed at this cell.

### Cell 1 — Setup

```python
# Setup
# In Colab, torch / keras / plotly / sklearn / pandas are preinstalled.
# If running locally, first:  pip install torch keras plotly scikit-learn pandas
import os
os.environ["KERAS_BACKEND"] = "torch"

import numpy as np
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import keras
from keras import layers

rng = np.random.default_rng(7)
keras.utils.set_random_seed(7)
```

**What it does.** Imports, and fixes both random seeds.

**Problems here: none.** This cell is clean — and that matters for two reasons. First, fixed seeds make the notebook *reproducible*: the ~98% is stable across runs, so it is **consistently wrong**, not a fluke you could re-roll away. Second, look at what is imported from `sklearn.metrics`: **only `accuracy_score`**. The evaluation strategy of the entire pipeline is already visible in the import list — no confusion matrix, no recall, no ROC. That is defect **#10** announcing itself in line 13.

### Cell 2 (markdown) — the data's origin

> ## 1. Load data
> Monthly snapshots of the bank's loans, exported from the warehouse.
> *(The warehouse stores approved loans only.)*

**What to notice.** Two of the paper's biggest problems are stated in plain sight, in italics, in a cell most readers skim. "Monthly snapshots" = one row per customer-month, not per application (**#2**, **#8**). "Approved loans only" = the riskiest applicants never enter the data at all (**#13**) — the one defect no code change can fix.

### Cell 3 — `load_data()`: what the data actually is

```python
def load_data(n_customers=1200):
    rows = []
    for cid in range(n_customers):
        self_emp = rng.random() < 0.25
        income_m = np.exp(rng.normal(9.1, 0.45))                 # monthly income
        income = income_m * 12 if rng.random() < 0.3 else income_m  # some systems store it annually
        score = np.clip(rng.normal(680, 70), 300, 850)
        loan = np.clip(rng.normal(70000, 30000), 8000, 300000)

        risk = -3.1 - 0.011 * (score - 680) + 1.6 * loan / (income_m * 12) \
               - 0.5 * (not self_emp) + rng.normal(0, 0.4)
        default = int(rng.random() < 1 / (1 + np.exp(-risk)))

        days_late = rng.uniform(2, 35) if default else rng.exponential(2.5)
        collections = int((default and rng.random() < 0.65) or rng.random() < 0.05)

        income = np.nan if rng.random() < (0.30 if self_emp else 0.05) else round(income)
        score = np.nan if rng.random() < 0.08 else round(score)

        for month in range(1, int(rng.integers(3, 9)) + 1):
            rows.append({
                "customer_id": cid,
                "month": month,
                "income": income,
                "self_employed": int(self_emp),
                "credit_score": score,
                "loan_amount": round(loan),
                "avg_days_late": round(max(0, days_late + rng.normal(0, 2)), 1),
                "collections_flag": collections,
                "default": default,
            })
    return pd.DataFrame(rows)


df = load_data()
df.to_csv("loans.csv", index=False)
print("Data:", df.shape, "| default rate: {:.1%}".format(df["default"].mean()))
df.head()
```

**What it does.** Simulates the warehouse export: 1,200 customers → 6,557 rows of `loans.csv`. In the exam fiction this cell *is* the bank's data, so read it as a description of reality — the traps planted here are properties of the data that the later cells then step on.

**Problems here — walk the lines in order:**

- **Line 6 — mixed units (#7).** `income = income_m * 12 if rng.random() < 0.3 else income_m`: ~30% of records store income **annually**, ~70% **monthly**, under one column name. This is why the histogram in Cell 4 is bimodal with peaks a factor of ~12 apart.
- **Lines 10–12 — the true risk model.** Risk falls with credit score, rises with loan-to-income, is higher for the self-employed. Note it uses `income_m * 12` — the *correct* annualised income, which the `income` column does not reliably contain. `default` is drawn once per **customer**, from a latent score with **no fixed observation window** (**#14**).
- **Lines 14–15 — the fatal lines (#1).** `days_late` and `collections` both **branch on `default`**. They are consequences of the outcome, generated *from* the label. No applicant can have them on decision day, and any model given them is being handed the answer. This is the single source of the fake ~98%.
- **Lines 17–18 — informative missingness (#6).** Income goes missing at **30% for the self-employed vs 5% for salaried**. The gap correlates with a genuine risk driver, so the *pattern* of missingness is itself signal — which Cell 6 will destroy.
- **Lines 20–31 — the panel structure (#2, #8).** Each customer emits **3–8 near-identical rows** (`rng.integers(3, 9)`), all carrying the same `default`, `income`, `credit_score`, `loan_amount` and `collections_flag`. Only `month` and a jittered `avg_days_late` move within a customer.

**What breaks downstream.** Every later cell inherits these: the clean step imputes with corrupted statistics, the split scatters each customer across both sides, both models feast on the two leaked columns, and the evaluation certifies the result.

**The fix.** You cannot "fix" this cell — it is the world as the warehouse recorded it. The fixes live in what you *do* with it: rebuild one row per application from decision-day columns only (drop `avg_days_late`, `collections_flag`, `month`), trace `income` to its source system and unify the unit, define a fixed default horizon, split by customer — and fund a controlled experiment to observe the rejected population (**#13**).

**See it for yourself** — every column placed at the moment the bank first knows it. Drag "today" back to the application day and watch the model's two favourite columns fall off the knowable side of the line:

```graph
type: leakage-timeline
```

### Cell 4 — the histogram

```python
px.histogram(df, x="income", nbins=80, title="Income distribution").show()
```

**What it does.** The notebook's one and only piece of [[exploratory-data-analysis|EDA]].

**Problems here.** Not the code — the **non-response**. This chart, when you run it, shows two clean peaks about twelve times apart: the mixed-units defect (**#7**) in plain sight. The team plotted it, put it in the deck, and continued as if it were normal. The lesson the exam draws from this cell: plotting your data only helps if you *react* to what the plot shows. This is also why the brief insists you actually run the notebook — the defect is invisible in the code summary and unmissable in the chart.

**See it** — the histogram the team plotted and then ignored. Colour it by source system and watch where the "average" falls:

```graph
type: income-mixup
```

### Cell 5 (markdown) + Cell 6 — "Clean"

> ## 2. Clean

```python
df["income"] = df["income"].fillna(df["income"].mean())
df["credit_score"] = df["credit_score"].fillna(0)

X = df.drop(columns=["default", "customer_id"])
y = df["default"]
X = StandardScaler().fit_transform(X)
```

**What it does.** Fills the gaps, chooses the feature set, standardises. Five lines, four defects — the densest cell in the notebook.

**Problems here, line by line:**

- **Line 1 (#4, #6, #7).** The fill value is the **mean of the whole table** — computed *before* the split, so test-set information leaks into training. Worse, it is the mean of a **bimodal mixed-unit column**, a number that describes neither population. And overwriting the gaps destroys the informative 30%-vs-5% missingness pattern.
- **Line 2 (#5).** Missing credit scores become **0** — impossible on a 300–850 scale. Zero is not a low score; it is not a score. After standardisation those zeros land around **z ≈ −3.2**, a manufactured cluster of extreme outliers that any model will happily learn as "mystery segment", encoding the *artefact*, not the risk.
- **Line 4 (#1, #8).** Look at what `drop` does **not** remove: `avg_days_late` and `collections_flag` — the two post-outcome columns — sail straight into `X`, and so does `month`, a warehouse artefact that is not a property of any applicant.
- **Line 6 (#3).** `StandardScaler().fit_transform(X)` is fitted on **all** rows, test rows included, before any split exists. A second, quieter leak: the test set's mean and spread shape the training features.

**What breaks downstream.** The models in Cells 10 and 12 train on leaked features scaled with leaked statistics, and the imputation noise is baked in before any honest measurement is possible.

**The fix.** Split **first**. Then, inside a [[scikit-learn-pipeline|Pipeline]] so nothing can be fitted out of order: impute with the **training median** plus a missing-indicator column, and let the scaler learn from training folds only. And note the deeper principle behind line 4: choose an **explicit application-day feature list** (income, `self_employed`, `credit_score`, `loan_amount`, plus the missingness flags) rather than "everything except the target" — a drop-list has to remember every bad column; an allow-list only has to know the good ones. (Scaling itself is harmless to the forest — trees are scale-invariant — the sin is *when* it is fitted, not *that* it is; the binary flags never needed scaling at all.)

**See it** — sixty customers' credit scores, and what each fill-in choice does to the five that are missing:

```graph
type: zero-fill
```

### Cell 7 (markdown) + Cell 8 — Split

> ## 3. Split

```python
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print("train:", len(y_train), "| test:", len(y_test))
```

**What it does.** An 80/20 random **row-level** split: ~5,245 training rows, ~1,312 test rows.

**Problems here:**

- **Row-level, not customer-level (#2).** With 3–8 near-identical rows per customer, a random row split puts nearly **every customer on both sides**. The model memorises a customer's rows in training and recognises the same customer's remaining rows in test. The reported score measures *recognition*, not prediction.
- **No `stratify=y`.** With ~14% positives, an unstratified split lets the class balance drift between train and test — sloppy, though dwarfed by the grouping problem.
- **Two sets, not three (#9).** No validation set exists anywhere in the notebook, so every later choice — epochs, architecture, and ultimately *which model to ship* — can only be made by peeking at the test set.

**The fix.** `GroupShuffleSplit` (or `StratifiedGroupKFold`) with `groups=customer_id`, `stratify` on the label, and a three-way split: train / validation / test, with test touched exactly once at the end. Or collapse to one row per customer *first*, after which a plain split is safe. (The duplication also quietly **over-weights long-observed loans** — an eight-month customer counts nearly three times as much as a three-month one.)

**See it** — twelve customers' monthly rows sliding into Train and Test. Toggle how the split is done and watch who ends up on both sides:

```graph
type: split-shuffler
```

### Cell 9 (markdown) + Cell 10 — Model 1: Random Forest

> ## 4. Model 1: Random Forest
> *(model parameters: `n_estimators=100`, default settings are fine)*

```python
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
acc_rf = accuracy_score(y_test, rf.predict(X_test))
print("Random Forest accuracy: {:.4f}".format(acc_rf))
```

**What it does.** Trains 100 trees and reports one number.

**Problems here:**

- **The comment, not the code (#12).** `n_estimators=100` is a **hyperparameter** — chosen by a human, learned by nothing. Calling it a "model parameter" and adding "default settings are fine" tells you that nobody justified any choice: there was no validation set to justify it *on*.
- **One metric (#10).** `accuracy_score` on a ~14% default rate, where "approve everyone" scores ~86% free. Of the customers who default, how many does the forest catch? The notebook never asks.
- The model itself is a perfectly reasonable choice for small tabular data — it is being **fed garbage and measured wrong**, which is a different failure than being the wrong model.

**The fix.** Report a [[confusion-matrix]], [[recall]], [[precision]] and [[auc|AUC]] against the 86% baseline; then tune *and regularise* on a validation set — `min_samples_leaf`, `max_depth` — *after* the data is fixed, and not before (tuning a broken measurement only optimises the leak).

**See it** — one hundred applicants, three rules. Check what "no model at all" already scores before being impressed by 98%:

```graph
type: baseline-machine
```

### Cell 11 (markdown) + Cell 12 — Model 2: Neural Network

> ## 5. Model 2: Neural Network
> *(model parameters: 3 layers, 30 epochs, no tuning needed)*

```python
nn = keras.Sequential([
    layers.Input(shape=(X.shape[1],)),
    layers.Dense(256, activation="relu"),
    layers.Dense(256, activation="relu"),
    layers.Dense(256, activation="relu"),
    layers.Dense(1, activation="sigmoid"),
])
nn.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
nn.fit(X_train, y_train, epochs=30, batch_size=64, verbose=0)
acc_nn = accuracy_score(y_test, (nn.predict(X_test, verbose=0) > 0.5).astype(int))
print("Neural Network accuracy: {:.4f}".format(acc_nn))
```

**What it does.** Three 256-unit hidden layers ending in a [[sigmoid-function|sigmoid]], trained for a fixed 30 epochs.

**Problems here:**

- **Capacity vs data.** Count the weights: 7×256+256 + 256×256+256 (twice) + 256+1 = **133,889 parameters**, fitted to ~5,245 rows of **7 features**. That is heavy machinery pointed at a small tabular problem — an [[overfitting]] engine with nothing watching it.
- **Nothing is watching it (#9).** `fit` receives no `validation_data` and no `callbacks`: no early stopping, no learning curve, no way to know whether 30 epochs is too few, too many, or accidentally fine. "No tuning needed" in the comment above is not a finding — with no validation set, no tuning was *possible* (#12).
- **`> 0.5` (#11).** The sigmoid outputs a probability, which is immediately crushed through a threshold nobody chose. With a missed defaulter costing ~10× a wrong rejection, 0.5 is a library default standing where a business decision should be.
- Same single-metric evaluation as the forest (**#10**).

**The fix.** For this data, honestly: a smaller network, or no network at all. The review report's candidate is [[logistic-regression|logistic regression]] — on ~6,500 rows and four real features it performs on par with the complex models, and its coefficients read directly as the plain-language rejection reasons the regulator demands. Whatever the model: handle the imbalance explicitly (`class_weight="balanced"` or resampling), keep a validation split with early stopping, and compare at a **cost-derived threshold** on recall/precision, not accuracy at 0.5.

**See it** — what training with nothing watching looks like. Drag the epochs and find the turning point the notebook couldn't see:

```graph
type: overfit-curves
```

**And the threshold** — drag the rejection line and watch the money. The cheapest point is nowhere near the 0.5 the notebook used:

```graph
type: threshold-money
```

### Cells 13–15 — Compare and decide

> ## 6. Compare and decide

```python
print("Random Forest  accuracy: {:.4f}".format(acc_rf))
print("Neural Network accuracy: {:.4f}".format(acc_nn))

fig = go.Figure(go.Bar(x=["Random Forest", "Neural Network"], y=[acc_rf, acc_nn]))
fig.update_yaxes(range=[0.90, 1.00])
fig.update_layout(title="Model comparison — test accuracy")
fig.show()
```

```python
print("Both models are around 98% - far better than a 50/50 coin flip.")
print("Decision: deploy the NEURAL NETWORK (deep learning is the more advanced technology).")
```

**What it does.** Prints two accuracies, draws a bar chart, recommends a model.

**Problems here:**

- **`range=[0.90, 1.00]` (#15).** The y-axis starts at 0.90, so a ~1-point gap fills a tenth of the chart. A bar chart implies a zero baseline; truncating it silently is the classic way to make noise look like a finding. There are also no error bars — with one split and one seed, a 1-point difference is well inside random variation.
- **The wrong baseline.** "Far better than a 50/50 coin flip" — a coin flip is the baseline for a *balanced* problem. The honest baseline is **~86%** (approve everyone), which would sit just below the truncated axis, embarrassingly close to both bars.
- **The recommendation contradicts the evidence (#15).** The team's own printout ranks the forest at least as high, and they recommend the network anyway, for a reason — "more advanced technology" — that is not a criterion. A process that overrides its own numbers has told you how much to trust its other numbers.

**The fix.** Full-axis chart (or state the baseline on it), confusion matrices per model, comparison at the cost-derived threshold — and criteria (defaulters caught, cost per error type, explainability to the regulator, running cost, segment stability) agreed **before** the numbers are read, so the decision applies the criteria instead of rationalising a preference.

**See it** — the notebook's own chart with a draggable axis. Pull the start of the axis down to zero and watch the drama evaporate:

```graph
type: axis-truncation
```
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
8. **Handle the imbalance and set the threshold from costs** — `class_weight="balanced"` (or resampling) at training time, then an operating threshold derived from the 70,000-vs-7,000 cost asymmetry, not the 0.5 default; compare models *at that threshold*.
9. **Choose on the agreed criteria** — defaulters caught, money per error type, explainability, running cost, segment stability. The review report's candidate on those criteria: [[logistic-regression|logistic regression]], the only model that satisfies the regulator out of the box.
10. **Deploy carefully, if at all** — shadow mode alongside the human underwriters first; a small **randomised approval slice** of borderline applications to start correcting the approved-only bias; calibration checked and **drift monitored** after go-live.

> [!tip] What the honest rebuild should expect
> Accuracy near the **~86% baseline**, defaulter-recall in the mid-30s at the corrected threshold, and ROC-AUC roughly in the **0.70s** — much less flattering, and real. That is normal for application-day credit data: a modest signal from income, score, loan size and employment type is all that genuinely exists on submission day. Run the fixes and land at 98% again and you have not built a brilliant model — **you have found another leak.**

## Flawed vs corrected, side by side

The review report's summary table — worth memorising as pairs:

| Design choice | The notebook | The rebuild |
|---|---|---|
| Unit of analysis | one row per customer-month (3–8× duplication) | one row per applicant |
| Features | everything except the target — leaky columns ride along | explicit application-day list + missingness indicators |
| Income units | mixed monthly and annual, ignored | one documented unit, fixed at the source system |
| Imputation | whole-table mean; scores filled with 0 | training-set median + missing-indicator columns |
| Scaling | fitted on all data before the split | fitted on train only, inside a `Pipeline` |
| Split | random by row | by customer, stratified on the label |
| Validation | none | validation set / cross-validation for all tuning |
| Class imbalance | ignored | `class_weight="balanced"`; threshold set from costs |
| Metrics | accuracy alone, against a "50/50" baseline | confusion matrix, recall and precision on defaults, ROC-AUC, cost-weighted — against 86% |
| Chart | y-axis 0.90–1.00, no baseline drawn | full axis, baseline line, several metrics |
| Model choice | neural network, "because more advanced" | [[logistic-regression\|logistic regression]]: comparable performance, regulator-explainable |
| Reported result | ~98–99% "accuracy" | accuracy near the baseline, ROC-AUC ≈ 0.70s — honest |

**Why the numbers collapse, in one breath:** remove the leaked columns and the score drops sharply (the model loses its answer sheet); split by customer and it drops again (the test set stops being memorised training rows); switch from accuracy to defaulter-recall and what remains stops flattering itself against a 14% base rate. The modest number left over is the *real* predictive content of application-day data — and a genuine 98% would itself be a red flag for leakage.

> [!note] The ordering is the exam
> Steps 4 and 5 being the wrong way round in the notebook is defect #3 and #4. Step 6 done on test is Q18's wrong answer. Step 8 skipped is Q24. Almost every question maps onto a step in this list being done out of order or skipped.

---

## Related

- [[data-leakage]] · [[train-test-split]] · [[validation-set]] · [[cross-validation]]
- [[confusion-matrix]] · [[precision-and-recall]] · [[accuracy]] · [[roc-curve]] · [[auc]]
- [[missing-values]] · [[feature-scaling]] · [[scikit-learn-pipeline]]
- [[overfitting]] · [[bias-variance-tradeoff]] · [[hyperparameter-tuning]]
- [[random-forest]] · [[decision-tree]] · [[ensemble-methods]]
