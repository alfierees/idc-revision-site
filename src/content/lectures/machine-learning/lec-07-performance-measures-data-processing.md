---
title: Performance Measures & Data Processing
week: 7
semester: 2
year: 2
academic_year: "2024-25"
course: Machine Learning
lecture: "Lecture 07 — Performance Measures & Data Processing"
instructor: Royee Guy
date: 2026-05-20
tags:
  - machine-learning
  - performance-measures
  - confusion-matrix
  - precision-recall
  - roc-curve
  - auc
  - feature-selection
  - data-preprocessing
  - cross-validation
aliases:
  - ML Lecture 7
  - Performance Metrics ML
  - Experiment Setup
subject: machine-learning
in_scope: true
---

# Performance Measures & Data Processing

> Part of: [[Machine Learning]]
> **Lecture 07** — Machine Learning, Royee Guy
> Key concepts: [[Confusion Matrix]], [[Precision]], [[Recall]], [[ROC Curve]], [[AUC]], [[Cross-Validation]], [[Data Leakage]], [[Feature Selection]], [[Pearson Correlation]], [[PCA]]

---

## Agenda

- Performance Measures: confusion matrix, accuracy, precision, recall, F1
- Confidence scores, ROC/PR curves, AUROC
- Data Processing: train/test/validation splits, feature scaling order
- Feature Selection: filtering vs wrapping, Pearson correlation
- Feature Extraction: PCA
- Missing values

---

## The Data Science Process

Machine learning follows an iterative loop: data collection → preprocessing → model selection → training → evaluation → iteration. A crucial (and often underestimated) step is **experiment setup** — correctly defining how you measure success before you start training.

> [!tip] Why this matters
> A model with 99% accuracy can be completely useless. Choosing the wrong metric hides real problems. Experiment setup is not bureaucratic overhead — it is the difference between a model that works and one that merely *looks* like it works.

---

## Comparing Classifiers & Cross-Validation

### The problem with training accuracy

Given two classifiers $C_1$ and $C_2$, we want to pick the better one for *future* data. Training accuracy is a biased estimator: the model has already seen the training set, so it tells us how well the model memorises, not how well it generalises.

### $k$-Fold Cross-Validation

Instead of a single train/test split, ==k-fold cross-validation== partitions the data into $k$ equally-sized folds, then trains and tests $k$ times — each time holding out a different fold as the test set.

$$\text{CV Score} = \frac{1}{k} \sum_{i=1}^{k} \text{Score}_i$$

> [!info] Why k-fold?
> - Every example is used for testing exactly once — no data is wasted.
> - Gives a **lower-variance** estimate of generalisation performance than a single split.
> - Essential for **hyperparameter tuning** and **model selection**: test each candidate on the *same* splits so comparisons are fair.

**Learning Curves** — plotting performance as a function of training-set size helps diagnose whether you are in a high-bias (underfitting) or high-variance (overfitting) regime, and whether collecting more data would help.

---

## Performance Measures

### Why accuracy alone is not enough

So far we have used loss functions (MSE, Gini, SVM score, accuracy) to compare models. In practice, richer metrics are needed because different types of errors have different costs.

---

### Confusion Matrix

The ==confusion matrix== is a 2×2 table (for binary classification) that breaks predictions into four categories:

|                    | **Predicted Positive** | **Predicted Negative** |
| ------------------ | ---------------------- | ---------------------- |
| **Actual Positive** | True Positive (TP)     | False Negative (FN)    |
| **Actual Negative** | False Positive (FP)    | True Negative (TN)     |

- **True Positive (TP):** Predicted positive, actually positive ✓
- **True Negative (TN):** Predicted negative, actually negative ✓
- **False Positive (FP) — Type I Error:** Predicted positive, actually negative ✗
- **False Negative (FN) — Type II Error:** Predicted negative, actually positive ✗ ^confusion-matrix-def

> [!warning] Type I vs Type II errors
> In medicine: a **false positive** means treating a healthy patient (costly but not catastrophic). A **false negative** means missing a disease (potentially fatal). The asymmetry in error costs drives which metric to optimise.

---

### Accuracy

$$\boxed{\text{Accuracy} = \frac{TP + TN}{TP + FP + FN + TN}}$$

$$\text{Error Rate} = \frac{FP + FN}{TP + FP + FN + TN} = 1 - \text{Accuracy}$$

**Accuracy Paradox:** with a ==class imbalance== of 1:100, a model that *always* predicts the majority class achieves 99% accuracy while being completely useless for detecting the minority class. Most ML algorithms assume balanced classes — violating this assumption silently destroys performance.

> [!example] Imbalanced dataset trap
> A fraud-detection model on data with 1% fraud rate:
> - Naive classifier (always "no fraud"): **99% accuracy**, **0% fraud detected**.
> - The accuracy metric hides the complete failure.

---

### Precision

==Precision== asks: *of all the samples I predicted positive, how many were actually positive?*

$$\boxed{\text{Precision} = \frac{TP}{TP + FP}}$$

Low precision → many **false positives** (spam filter catches real emails; too many ads shown to disinterested users).

---

### Recall (True Positive Rate)

==Recall== asks: *of all the actual positives, how many did I correctly identify?*

$$\boxed{\text{Recall} = \frac{TP}{TP + FN}}$$

Also called the **True Positive Rate (TPR)** or *sensitivity* — it measures the probability of detecting a positive. Low recall → many **false negatives** (disease missed by a diagnostic test; fraud escapes detection).

---

### Worked Example — Confusion Matrix

|            | Predicted + | Predicted − |
| ---------- | ----------- | ----------- |
| Actual +   | 76          | 14          |
| Actual −   | 15          | 83          |

$$\text{Accuracy} = \frac{76 + 83}{76 + 14 + 15 + 83} = \frac{159}{188} \approx 96.7\%$$

$$\text{Precision} = \frac{76}{76 + 15} \approx 82.9\%$$

$$\text{Recall} = \frac{76}{76 + 14} \approx 83.6\%$$

---

### Precision–Recall Trade-off

Precision and recall are **in tension**: raising the classification threshold increases precision (fewer false positives) but reduces recall (more false negatives), and vice versa. Choosing a threshold is a business decision.

| Scenario | Priority |
| -------- | -------- |
| Fraud detection (loss is huge) | High recall — catch everything |
| Spam filter (missing real email is bad) | High precision — avoid false positives |
| Medical screening | Context-dependent; often high recall |

---

### F1 Score

The ==F1 score== combines precision and recall via their **harmonic mean**, which punishes extreme imbalances between the two:

$$\boxed{F_1 = 2 \cdot \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}}$$

> [!info] Why harmonic mean?
> The harmonic mean of $(a, b)$ is lower than the arithmetic mean whenever $a \neq b$. This means a model with precision 0.99 and recall 0.01 gets $F_1 \approx 0.02$, not 0.50 — correctly penalising the useless extreme.

**Caveat:** F1 weights precision and recall equally, which may not reflect the real cost structure. Use $F_\beta$ to weight recall $\beta$ times more than precision.

---

## Confidence Scores & ROC Curves

### Probability-based classifiers

Many classifiers (logistic regression, Naive Bayes, random forests) output a **probability** $\hat{p} \in [0,1]$ of belonging to the positive class. The final class label depends on a chosen **threshold** $\tau$: predict positive if $\hat{p} \geq \tau$.

Different thresholds yield different confusion matrices — and hence different (precision, recall) and (TPR, FPR) pairs.

### TPR and FPR

$$\boxed{TPR = \text{Recall} = \frac{TP}{TP + FN}} \qquad \boxed{FPR = \frac{FP}{FP + TN}}$$

- **TPR** (y-axis of ROC): fraction of true positives correctly detected.
- **FPR** (x-axis of ROC): fraction of true negatives incorrectly flagged as positive ($= 1 - \text{specificity}$).

### The ROC Curve

The ==ROC curve== (Receiver Operating Characteristic) traces the (FPR, TPR) pair as the threshold $\tau$ is swept from 1 down to 0. Each point on the curve corresponds to one threshold value.

```
TPR (Recall)
100%|          /‾‾‾‾‾‾‾
   |         /   Good classifier
   |        /
   |       /  Chance line (AUC=50%)
   |      /
  0%|____/________________
    0%                   100%
                        FPR
```

| Reference point | Meaning |
| --------------- | ------- |
| Top-left corner (0, 1) | Perfect classifier — TPR=100%, FPR=0% |
| Diagonal (chance line) | Random classifier — AUC = 50% |
| Bottom-right corner (1, 0) | Worst possible — always wrong |

> [!tip] Intuition for the ROC curve
> A curve bowing toward the **top-left** means the model finds many true positives before accumulating false positives — a good model. A curve hugging the **diagonal** is no better than random guessing.

---

### Area Under the ROC Curve (AUROC / AUC)

The ==AUC== summarises the entire ROC curve into a single number — the probability that the model ranks a random positive example higher than a random negative example.

| AUC | Interpretation |
| --- | -------------- |
| 1.0 | Perfect classifier |
| 0.9 | Excellent |
| 0.65 | Mediocre |
| 0.5 | Random (chance) |
| < 0.5 | Worse than random (flip predictions) |

> [!warning] AUC is not the only consideration
> A model with AUC = 0.9 might still have terrible precision at the operating threshold your application requires. AUC is good for **model selection** but you still need to choose an appropriate threshold for deployment.

---

### PR Curves

The ==PR curve== plots **Precision** (y-axis) against **Recall** (x-axis) across all thresholds. It is more informative than ROC when the **class distribution is heavily imbalanced**, because it focuses on the positive class and is not influenced by the large number of true negatives.

> [!warning] PR curves are sensitive to label noise
> The first few high-confidence samples dominate the shape of the PR curve. Flipping the label of even one or two top-scoring samples can dramatically change the AUC. Apply **binning** (rounding scores) to smooth a noisy PR curve.

| PR curve property | Implication |
| ----------------- | ----------- |
| High area under curve | Good precision and recall across thresholds |
| "Bumpy" curve | Score granularity is too fine; apply binning |
| Low starting precision | Many false positives among top-ranked samples |

---

### Choosing a Model Comparison Metric

| Business constraint | Recommended metric |
| ------------------- | ------------------ |
| Need highest overall separability | AUC (ROC or PR) |
| Must achieve recall ≥ 90% | Required Recall threshold on ROC |
| Can only process 100 cases/day | Precision @ K |
| Need balance of precision and recall | Max F1 |

> [!note] Practical note
> AUC helps **reject bad models**; it does not tell you what threshold to deploy. Always validate performance at the *specific* operating point your system will use.

---

## Data Processing

### Splitting Data

The **test set** estimates performance on *unseen* data — the key proxy for generalisation. Rules:

- There is no universal formula for the train/test ratio — it depends on dataset size. Common splits: 70/30, 80/20, 90/10.
- **Never tune hyperparameters on the test set.** Use a separate validation set (or k-fold CV) for tuning, and reserve the test set for the final evaluation only.

### Splitting Before Scaling

> [!warning] Scale after splitting — never before
> ==Data leakage== occurs when information from the test set influences model training. If you fit a scaler on the full dataset (train + test), the mean and variance used to normalise the training data contain information from the test set. This biases the evaluation.

**Correct procedure:**
1. Split → train / test.
2. Fit scaler **only** on the training set → obtain $\mu_{\text{train}}$, $\sigma_{\text{train}}$.
3. Apply those same parameters to normalise *both* train and test sets.

### Temporal Data

In time-series data, randomly shuffling before splitting is ==cheating== — it allows the model to use *future* information to predict the *past*. Always use a **chronological split**: train on past, test on future.

> [!example] Temporal leakage
> Predicting tomorrow's stock price using a model trained on a random 80% sample of daily returns — many "training" days will be *after* many "test" days. The model effectively looks into the future.

### Data Leakage — Summary

==Data leakage== invalidates performance estimates and produces falsely optimistic results. Sources:

- Scaling or normalisation before splitting.
- Feature engineering using future information (temporal).
- Target-encoded features computed on the full dataset.

**Solution:** treat train and test as completely isolated worlds. Every transformation is fitted on train data only.

---

## Feature Selection

### Why reduce features?

- Remove irrelevant or noisy features that mislead the model.
- Improve generalisation performance — fewer features, less overfitting.
- Reduce training time and memory.
- Simpler models are easier to interpret and debug.

### Curse of Dimensionality

In high-dimensional spaces:
- The volume of the space grows **exponentially** with dimensionality — data becomes extremely sparse.
- All points become roughly **equidistant** — distance-based methods (KNN) break down.
- Models need **exponentially more data** to cover the space adequately.

> [!tip] Dimensionality vs model complexity
> - Complex, overfitting-prone models (KNN, Decision Trees): **reduce dimensions aggressively**.
> - Simple, generalising models (linear classifiers, Naïve Bayes): can tolerate high dimensions.
> - The Kernel Trick connects these: a simple classifier in high dimensions ≡ a complex classifier in low dimensions.

### Feature Selection vs Feature Extraction

| Method | What it does | Result |
| ------ | ------------ | ------ |
| ==Feature Selection== | Chooses a subset $M$ of the original $N$ features | $[x_{i_1}, \ldots, x_{i_M}] \subseteq [x_1, \ldots, x_N]$ |
| ==Feature Extraction== | Constructs $M$ *new* features via a transformation | $[x'_1, \ldots, x'_M] = f([x_1, \ldots, x_N])$ |

Feature selection preserves interpretability (features retain original meaning). Feature extraction (e.g. PCA) can achieve greater compression but produces abstract components.

---

### Feature Selection Methods

With $N$ features, there are $2^N$ possible subsets — exhaustive search is intractable. Two heuristic approaches:

#### Wrapper Methods

Wrappers use **model performance** as the criterion for feature subset quality — they find the best features *for a specific classifier*.

**Forward Selection:**
1. Start with an empty set $S = \{\}$.
2. Add the feature that most improves accuracy on a validation set.
3. Repeat until target accuracy or feature count is reached.

**Backward Elimination:**
1. Start with all features $S = \{x_1, \ldots, x_N\}$.
2. Remove the feature whose absence least hurts accuracy.
3. Repeat until stopping criterion.

> [!warning] Wrappers are expensive
> Each candidate subset requires training a full model. For $N = 20$ features, there are $2^{20} \approx 10^6$ subsets — even forward selection requires $O(N^2)$ model fits.

#### Filter Methods

Filters score features **independently** of the learning model — they are fast and model-agnostic.

Filtering criteria:
- Remove features with **low variance** (near-constant features carry no information).
- Remove features with **high correlation to another feature** (redundancy).
- Remove features with **low correlation to the target** (irrelevant features).

---

### Pearson Correlation

The ==Pearson correlation coefficient== measures linear dependency between a feature $x_k$ and the target $y$:

$$\boxed{\rho = \frac{\sum_{i=1}^{n}(x_k^{(i)} - \mu_k)(y^{(i)} - \mu_y)}{\sqrt{\sum_{i=1}^{n}(x_k^{(i)} - \mu_k)^2} \cdot \sqrt{\sum_{i=1}^{n}(y^{(i)} - \mu_y)^2}} = \frac{\sigma_{x_k y}}{\sigma_{x_k} \sigma_y}}$$

- $\rho \in [-1, 1]$
- $|\rho| \approx 1$: strong linear relationship → keep the feature.
- $|\rho| \approx 0$: no linear relationship → candidate for removal.
- Sign indicates direction: $\rho > 0$ → positive linear relation, $\rho < 0$ → negative.

> [!warning] Pearson only captures *linear* relationships
> Two variables can have a strong nonlinear relationship with $\rho \approx 0$. For example, $y = x^2$ over a symmetric range gives $\rho = 0$, but the features are perfectly predictive. Use Pearson as a first-pass filter, not as a final verdict.

> [!example] Pearson correlation worked example
> Given features and targets:
>
> | $y$ | $x_k$ | $y - \mu_y$ | $x_k - \mu_k$ |
> |-----|--------|------------|--------------|
> | 0 | 0.5377 | −0.5 | −0.0866 |
> | 0 | 1.8339 | −0.5 | 1.2096 |
> | 1 | −2.2588 | 0.5 | −2.8831 |
> | ... | ... | ... | ... |
>
> With $\mu_k = 0.6243$, $\mu_y = 0.5$, the result is $\rho = 0.2587$ — weak positive linear correlation.

### Filters vs Wrappers — Comparison

| Property | Filter | Wrapper |
| -------- | ------ | ------- |
| Speed | Fast | Slow |
| Model-dependent | No | Yes |
| Optimises the real problem? | No — proxy criterion | Yes — directly maximises model performance |
| Risk of overfitting to model | Low | Higher |
| Suitable for large $N$ | Yes | Expensive |

Both are **heuristics** — neither guarantees finding the optimal subset.

---

## Feature Extraction — PCA

==Principal Component Analysis (PCA)== transforms the original feature space into a new orthogonal coordinate system aligned with the **directions of maximum variance** in the data.

**Key idea:** represent $N$-dimensional data in a new $M$-dimensional space ($M < N$) where:
- The first axis (PC1) points in the direction of greatest variance.
- The second axis (PC2) is orthogonal to PC1 and captures the next most variance.
- …and so on.

After the rotation, dimensions with **very low variance** in the new space can be discarded — they contribute little to distinguishing data points.

> [!example] PCA intuition
> Suppose two correlated features both have equal variance in the original space — you cannot drop either. After PCA rotation, one axis captures most of the combined variance while the other captures very little. You can safely discard the low-variance axis.

$$\text{Feature Selection: } [x_1, \ldots, x_N] \rightarrow [x_{i_1}, \ldots, x_{i_M}] \quad \text{(subset of originals)}$$
$$\text{Feature Extraction (PCA): } [x_1, \ldots, x_N] \rightarrow [x'_1, \ldots, x'_M] \quad \text{(new linear combinations)}$$

> [!tip] When to use PCA
> Use PCA when features are correlated (linear redundancy), when you need to visualise high-dimensional data (reduce to 2–3 PCs), or when training is too slow due to high dimensionality. PCA does **not** use labels — it is unsupervised.

---

## Missing Values

There is no single "correct" approach to missing data. Options and their trade-offs:

| Strategy | How | Caveat |
| -------- | --- | ------ |
| **Drop rows** | Remove any example with a missing value | Introduces bias if data is not missing at random (e.g. high earners omit salary) |
| **Mean / Median / Mode imputation** | Replace with central tendency statistic | Fast but **reduces variance** and ignores structure |
| **Separate category** (for categoricals) | Add an "unknown" label | Preserves the information that data is missing |
| **KNN imputation** | Estimate from $k$ most similar samples | More accurate but expensive and can leak test information if not done post-split |

> [!warning] Always impute after splitting
> Fit your imputer (compute means, build KNN index) **only on the training set**. Apply the same parameters to the test set. Imputing before splitting is another form of data leakage.

---

## Summary

- **Confusion matrix** decomposes classification errors into TP, TN, FP (Type I), FN (Type II).
- **Accuracy** is misleading on imbalanced data — use precision, recall, or F1.
- **Precision** minimises false positives; **Recall** minimises false negatives. They trade off against each other via the classification threshold.
- **ROC curve** and **AUC** compare models across all thresholds; **PR curves** are preferred for heavily imbalanced data.
- Always **scale after splitting** and **split temporal data chronologically** to prevent data leakage.
- **Feature selection** (wrappers, filters) removes irrelevant/redundant features; **PCA** extracts new lower-dimensional representations. Use dimensionality reduction to fight the **curse of dimensionality**.
- **Missing value treatment** must be fitted on training data only, applied consistently to test data.

---

## Related Notes

- [[Machine Learning]] — subject hub
- [[Lec_02-Linear Regression]] — feature scaling, overfitting, regularization
- [[Lec_05-Model Selection & KNN]] — train/test splits, validation, hyperparameter tuning, KNN
- [[Confusion Matrix]]
- [[Precision]]
- [[Recall]]
- [[ROC Curve]]
- [[AUC]]
- [[Cross-Validation]]
- [[Data Leakage]]
- [[Feature Selection]]
- [[Pearson Correlation]]
- [[PCA]]
- [[Curse of Dimensionality]]
