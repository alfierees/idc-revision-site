---
title: "Data Science Cheat Sheet"
subject: intro-data-science
type: reference
description: "The whole course on one page, aimed at the final project and its Q&A: the lifecycle, EDA and cleaning, a model picker by task, every algorithm in one line, the metrics and when each one matters, overfitting and leakage, clustering and PCA, recommenders, text and images, and when deep learning is worth it."
course: Data Science for Entrepreneurs
instructor: Daniel Karalnik, Liam Tal
semester: 1
year: 2
order: 2
pinned: true
tags:
  - intro-data-science
  - exam-prep
  - cheat-sheet
aliases:
  - Data Science Cheat Sheet
  - Intro to Data Science Cheat Sheet
---

> **There is no exam.** The grade is the [[Final Project Brief|final project]]: 40% implementation, 60% oral presentation (a demo of up to 7 minutes, then **two questions for each team member**). This page is what you need to justify every choice in that Q&A. The step-by-step plan is the [[Final Project Playbook]]; the code is on the [[Python and scikit-learn Sheet]].

---

## 0. Model picker

| Your target | Task | Start with | Then try | Judge by |
|---|---|---|---|---|
| A category (churn yes/no, plan type) | **classification** (Lecture 3) | logistic regression or a decision tree | KNN, **random forest** | confusion matrix, precision, recall, F1 |
| A number (price, valuation, demand) | **regression** (Lecture 4) | linear regression | polynomial, Ridge, Lasso | MAE, RMSE, R² on the **test set** |
| No target: find groups | **clustering** (Lecture 5) | K-Means on scaled features | PCA first if many features | elbow, silhouette, cluster profiles |
| What a user will like | **recommendation** (Lecture 6) | popular items, content-based | collaborative filtering, hybrid | RMSE, Precision@K |
| Text or images | **features first** (Lecture 7) | Bag-of-Words / TF-IDF; filters | then any model above | as for the model |
| Many rows, complex interactions | **deep learning** (Lecture 8) | only after a simple baseline | an MLP | the baseline's metric |

---

## 1. The lifecycle (Lecture 1)

$$
\text{Ask} \to \text{Collect} \to \text{Clean} \to \text{Explore} \to \text{Model} \to \text{Communicate} \to \text{Decide}
$$

Iterative, not linear: EDA often sends you back to cleaning. **Ask** a specific, actionable question ("is the drop concentrated in one category?"), not a vague one.

| Analytics type | Question | Example |
|---|---|---|
| Descriptive | what happened? | Q2 revenue 2.3M, up 12% |
| Diagnostic | why? | the top sales rep quit |
| Predictive | what will happen? | Q3 about 2.6M |
| Prescriptive | what should we do? | hire 2 reps, raise ads 20% |

**Traps:** correlation is not causation (look for a **confounder**: ice cream and drownings both follow the weather); **survivorship bias** (Wald's planes: armour where the returning planes have **no** holes); biased historical data.

**Data types:** numerical (continuous, discrete) and categorical (nominal, ordinal). Categorical features need encoding before a model.

---

## 2. EDA and cleaning (Lecture 2)

| Step | How | Watch out |
|---|---|---|
| First look | `df.shape`, `df.info()`, `df.describe()`, `df.head()` | types read wrong (a number stored as text) |
| Centre and spread | mean vs **median**; std, IQR | the mean is dragged by outliers and skew |
| Missing values | `df.isnull().sum()`; drop, fill (median), or add an `is_missing` flag | `NaN` is unknown, not 0; **systematic** missingness is the most dangerous |
| Duplicates | `df.duplicated().sum()`, `drop_duplicates()` | |
| Outliers | IQR rule: below $Q_1 - 1.5\,\text{IQR}$ or above $Q_3 + 1.5\,\text{IQR}$; boxplot | **investigate before deleting**: it may be your biggest customer |
| Groups | `df.groupby("col")["x"].mean()` | split, apply, combine |
| Charts | histogram (distribution), box (spread, outliers), bar (categories), line (time), scatter (two numbers), heatmap (correlations) | **always plot** (Anscombe's quartet: same statistics, different data) |

**The chart audit (Lecture 2):** a headline that states the **finding**, labelled axes with units, bar charts starting at 0, a legend for several series, an honest date range (no cherry-picking), **one message per chart**, a colourblind-friendly palette.

---

## 3. Classification (Lecture 3)

**Pipeline:** data → **split** → train → predict → evaluate. Split first, with `stratify=y` when classes are imbalanced. Never test on the training data.

| Algorithm | Idea | Needs scaling? | Note |
|---|---|---|---|
| Decision tree | a sequence of yes/no splits | no | readable; overfits if deep (limit `max_depth`) |
| Logistic regression | a probability from a weighted sum, through a sigmoid | yes | coefficients explain direction |
| KNN | the majority label of the $K$ nearest points | **yes** (distance) | small $K$ overfits, large $K$ underfits |
| Random forest | many trees on bootstrap samples, majority vote | no | usually the best of the four; feature importances |

**Metrics**

$$
\text{Precision} = \frac{TP}{TP + FP} \qquad \text{Recall} = \frac{TP}{TP + FN} \qquad F_1 = 2\cdot\frac{P \cdot R}{P + R}
$$

| Metric | Asks | Matters when |
|---|---|---|
| Accuracy | share correct | classes roughly **balanced** only (5% churn: "nobody churns" scores 95%) |
| Precision | of those flagged, how many are real? | each alarm costs money (ad spend, calls) |
| Recall | of the real ones, how many caught? | a miss is costly (fraud, disease) |
| F1 | one balanced number | imbalanced classes, no strong preference |

**Threshold:** lower it → more positives → recall up, precision down. Choose it by the **business cost** of a false positive versus a false negative.

---

## 4. Regression (Lecture 4)

| Metric | Formula | Use |
|---|---|---|
| MAE | $\frac{1}{n}\sum \lvert y_i - \hat y_i \rvert$ | same units as $y$; robust to outliers |
| RMSE | $\sqrt{\frac{1}{n}\sum (y_i - \hat y_i)^2}$ | same units; punishes big errors |
| $R^2$ | $1 - \frac{\sum (y_i - \hat y_i)^2}{\sum (y_i - \bar y)^2}$ | share of variance explained; 0 = no better than the mean; can be **negative** on the test set |

- A coefficient: the change in $y$ for a one-unit change in $x$, **holding the others fixed**. A negative sign can come from correlated features, not a real negative effect.
- **One-hot encode** categoricals with `drop_first=True` (avoids a redundant column).
- **Bias–variance:** too simple underfits (high error everywhere); too complex overfits (train $R^2$ 0.99, test 0.35). Polynomial degree is the dial.
- **Regularisation** (scale first): **Ridge** (L2) shrinks every coefficient; **Lasso** (L1) can set some to **exactly zero** (feature selection). Choose $\lambda$ (`alpha`) by cross-validation.
- **K-fold cross-validation:** train on $K-1$ folds, test on the last, average the $K$ scores. Use a **Pipeline** so the scaler is refitted inside each fold.

---

## 5. Clustering and PCA (Lecture 5)

1. **Scale** (`StandardScaler`): K-Means uses Euclidean distance, so a feature in shekels swamps one in years.
2. **K-Means:** pick $K$ centres, assign each point to the nearest, move centres to the means, repeat. `n_init=10`, `random_state=42`.
3. **Choose $K$:** the **elbow** in inertia, the **silhouette** score (−1 to 1, higher is better), and business sense.
4. **Profile** each cluster (means against the overall mean), **name** it, give each segment its own action. A tiny cluster may be outliers.
5. **PCA:** new axes in the directions of greatest variance; keep enough components for, say, 85% of the variance. Use it to visualise or to beat the **curse of dimensionality**. It breaks on unscaled data and on non-linear structure, and the components are hard to interpret.

---

## 6. Recommendation systems (Lecture 6)

| | Content-based | Collaborative filtering | Hybrid |
|---|---|---|---|
| Uses | item features | the user-item rating matrix | both |
| Idea | what items **are** | what similar **people do** | weighted blend |
| Weakness | narrow ("more of the same") | **cold start**, sparsity | complexity |

**Cold start:** a new user or item has no ratings. Seret+ answer: popular items, then content-based after 3 ratings, then the hybrid after 10. **Evaluate** by hiding 20% of known ratings: RMSE (lower is better), **Precision@K** = relevant in the top $K$ / $K$ (homepage), Recall@K (search).

---

## 7. Text and images (Lecture 7)

- About 80% of business data is **unstructured**; every model needs a **numeric matrix**.
- **Text:** lowercase → strip punctuation → tokenise → remove stopwords → stem or lemmatise → **Bag-of-Words** → a document-term matrix. **TF-IDF** down-weights common words. BoW misses word order, negation, synonyms and context.
- **Images** are already numbers: greyscale is 2D (0 to 255), RGB is $H \times W \times 3$. A **convolution** slides a small filter over the image to make a feature map (edges, blur, sharpen). A **CNN** learns its own filters.

---

## 8. Deep learning (Lecture 8)

- A **perceptron**: a weighted sum plus a bias, through an activation. An **MLP** stacks layers, so it learns **interactions** a linear model cannot see.
- Training: forward pass → loss → adjust the weights (backpropagation, gradient descent) → repeat for epochs.
- **Use it when:** lots of data (1,000+ rows for an MLP, 10,000+ images for a CNN), complex interactions, and interpretability matters less. **Always start with a simple baseline.** The business question: does the gain justify the cost and the black box?
