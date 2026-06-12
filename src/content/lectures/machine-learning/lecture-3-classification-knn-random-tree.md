---
title: "Lecture 3 — Classification: Decision Trees, Logistic Regression, KNN, Random Forest"
week: 3
semester: 2
course: Data Science
instructor: "Daniel Karalnik, Liam Tal"
tags:
  - data-science
  - classification
  - supervised-learning
  - decision-tree
  - logistic-regression
  - knn
  - random-forest
  - scikit-learn
  - evaluation-metrics
subject: machine-learning
in_scope: true
---

# Lecture 3 — Classification

> Part of: [[Data Science]]
> Previous: [[Lecture 2 - EDA and Charts]] | Next: [[Lecture 4 - Regression]]
> Key concepts: [[Supervised Learning]], [[Decision Tree]], [[Logistic Regression]], [[KNN]], [[Random Forest]], [[Confusion Matrix]], [[Precision and Recall]]

---

## 🎯 The Core Idea

**Classification** = predicting a **discrete label** from features. Regression predicts a number; classification predicts a category.

> [!info] Running case study
> *Yalla Fitness* — 300 members, 30% churn. Goal: predict **which members will cancel next month** from age, visit frequency, tenure, membership type, etc. Each row = one member; label = `churn` ∈ {0, 1}.

### Binary vs. multiclass

| Type | Labels | Example |
|---|---|---|
| **Binary** | 2 classes | Churn / not, spam / not |
| **Multiclass** | 3+ classes | Product category, disease type |

### The vocabulary

- **Features (X):** the inputs — age, visits, tenure, price paid…
- **Label (y):** the thing being predicted — `churn`.
- **Decision boundary:** the surface in feature space that separates classes.
- **Training set:** data the model learns from.
- **Test set:** held-out data used to measure honest performance.

---

## 🔀 The Supervised-Learning Pipeline

$$\text{Data} \to \text{Split} \to \text{Train} \to \text{Predict} \to \text{Evaluate}$$

```python
from sklearn.model_selection import train_test_split

X = df.drop(columns=["churn"])
y = df["churn"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
```

> [!warning] Never test on training data
> A model that memorises the training set can score 100% there but fail on new members. The **test set** exists to catch this.

`stratify=y` keeps the churn rate the same in both splits — crucial when classes are imbalanced.

---

## 🌳 Algorithm 1 — Decision Tree

### Intuition

A flowchart of **if/else** splits. At each node, pick the feature + threshold that best separates the classes.

```
              visits_per_month < 4 ?
                /              \
              yes              no
              /                  \
         tenure < 3m ?         churn = 0
          /        \
        yes        no
        /            \
     churn=1       churn=0
```

### How a split is chosen — Gini impurity

$$\text{Gini}(S) = 1 - \sum_{k} p_k^2$$

where $p_k$ is the proportion of class $k$ in node $S$. Gini = 0 for a pure node, 0.5 at maximum impurity (binary). The tree picks the split that **minimises weighted Gini** of the children.

### Code

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(max_depth=4, random_state=42)
clf.fit(X_train, y_train)
preds = clf.predict(X_test)
```

### Strengths & weaknesses

| ✅ | ❌ |
|---|---|
| Interpretable — you can draw it | Unstable — small data change → different tree |
| Handles numeric + categorical | Overfits without depth limit |
| No scaling needed | Can miss smooth relationships |

> [!warning] Overfitting
> An unrestricted tree grows until every leaf is pure — it memorises noise. Use `max_depth`, `min_samples_leaf`, or ensemble it (→ Random Forest).

### Handling categoricals — one-hot encoding

```python
X = pd.get_dummies(df, columns=["membership_type"])
```

Turns `membership_type ∈ {basic, premium, student}` into three 0/1 columns.

---

## 📈 Algorithm 2 — Logistic Regression

### The sigmoid

Linear regression outputs any real number; we need a **probability in [0, 1]**. Pass a linear score through the sigmoid:

$$\sigma(z) = \frac{1}{1 + e^{-z}}, \qquad z = \beta_0 + \beta_1 x_1 + \dots + \beta_k x_k$$

$P(\text{churn} = 1 \mid X) = \sigma(z)$. Classify as 1 if $P > 0.5$ (threshold tunable).

### Code

```python
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s  = scaler.transform(X_test)

clf = LogisticRegression(max_iter=1000)
clf.fit(X_train_s, y_train)
probs = clf.predict_proba(X_test_s)[:, 1]
```

### Strengths & weaknesses

| ✅ | ❌ |
|---|---|
| Outputs **probabilities**, not just labels | Assumes linear decision boundary |
| Coefficients interpretable (log-odds) | Sensitive to feature scale |
| Fast, works with small data | Struggles with complex interactions |

> [!tip] Why probabilities matter
> "80% chance to churn" lets the business prioritise who to call. A hard 0/1 prediction loses this nuance.

---

## 📍 Algorithm 3 — K-Nearest Neighbours (KNN)

### Intuition

**"Tell me who your neighbours are and I'll tell you who you are."** To classify a new member, find the $K$ closest members in feature space and take a **majority vote**.

Distance (Euclidean):
$$d(\mathbf{a}, \mathbf{b}) = \sqrt{\sum_i (a_i - b_i)^2}$$

### Code

```python
from sklearn.neighbors import KNeighborsClassifier
clf = KNeighborsClassifier(n_neighbors=5)
clf.fit(X_train_s, y_train)   # use scaled features!
```

### Choosing K

| $K$ | Effect |
|---|---|
| Very small (1–3) | Overfits — sensitive to noise |
| Very large | Underfits — smooths away real structure |
| Rule of thumb | $K \approx \sqrt{n}$, odd to avoid ties |

> [!warning] Always scale first
> KNN uses raw distance — a feature measured in thousands of shekels will dominate a feature measured in visits per week. **StandardScaler or MinMaxScaler before KNN.** (Same is true for logistic regression with regularisation.)

### Strengths & weaknesses

| ✅ | ❌ |
|---|---|
| Simple, no training step | Slow at prediction time (searches all data) |
| Captures non-linear boundaries | Curse of dimensionality — distances lose meaning |
| No assumptions on data shape | Needs scaling + is memory-hungry |

---

## 🌲 Algorithm 4 — Random Forest

### Intuition

One tree is unstable. **A forest of many different trees, each trained on a random sample of data + features, then voting** is far more robust. This is an **ensemble**.

### Recipe

1. Take $B$ bootstrap samples of the training set.
2. On each, grow a tree using a random subset of features at each split.
3. For prediction, let every tree vote — majority wins (or average probabilities).

### Code

```python
from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier(n_estimators=200, max_depth=8, random_state=42)
clf.fit(X_train, y_train)
importances = pd.Series(clf.feature_importances_, index=X.columns).sort_values(ascending=False)
```

### Strengths & weaknesses

| ✅ | ❌ |
|---|---|
| Usually the **best off-the-shelf** classifier | Less interpretable than a single tree |
| Resistant to overfitting | Slower to train and predict |
| Gives feature-importance ranking | Many hyperparameters |

> [!success] Why ensembles win
> Each tree makes *different* mistakes. Averaging cancels the noise while preserving the signal — the bias stays roughly the same but variance drops.

---

## 📏 Evaluating a Classifier

### Accuracy — and why it lies

$$\text{Accuracy} = \frac{\text{correct predictions}}{\text{total predictions}}$$

> [!warning] The imbalance trap
> If only 5% of members churn, predicting "no one churns" gets **95% accuracy** — and is completely useless. Accuracy is safe only when classes are roughly balanced.

### Confusion matrix

|  | Predicted 0 | Predicted 1 |
|---|---|---|
| **Actual 0** | TN | FP |
| **Actual 1** | FN | TP |

```python
from sklearn.metrics import confusion_matrix, classification_report
print(confusion_matrix(y_test, preds))
print(classification_report(y_test, preds))
```

### Precision, recall, F1

$$\text{Precision} = \frac{TP}{TP + FP} \qquad \text{Recall} = \frac{TP}{TP + FN}$$

$$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

| Metric | Question it answers | When it matters |
|---|---|---|
| **Precision** | Of those I flagged, how many really churn? | Costly action per alarm (ad spend, calls) |
| **Recall** | Of actual churners, how many did I catch? | Missing one is very costly (cancer, fraud) |
| **F1** | Balanced single number | Imbalanced classes, no strong preference |

> [!tip] Precision–recall trade-off
> Lower the threshold → more positives → recall ↑, precision ↓. Raise it → the opposite. Pick the threshold that matches the **business cost** of each error.

---

## 🏆 Model Comparison (Yalla Fitness results)

| Model | Accuracy | Churn Precision | Churn Recall | Churn F1 |
|---|---|---|---|---|
| Decision Tree | 78% | 0.63 | 0.55 | 0.59 |
| Logistic Regression | 80% | 0.66 | 0.60 | 0.63 |
| KNN ($K=7$) | 77% | 0.61 | 0.58 | 0.59 |
| **Random Forest** | **85%** | **0.75** | **0.70** | **0.72** |

Random Forest wins overall — but if calling members is cheap, you might pick the model with highest **recall** even at lower precision.

---

## 🧰 The scikit-learn API — One Shape

Every classifier in sklearn uses the same three calls:

```python
model = SomeClassifier(...)      # 1. create
model.fit(X_train, y_train)      # 2. train
preds  = model.predict(X_test)   # 3. predict
probs  = model.predict_proba(X_test)   # (if supported)
```

Swapping models = changing one line. **Build the pipeline first; iterate on the model later.**

---

## 🎯 Summary — The Classification Workflow

1. **Define the label** — binary or multiclass; check class balance.
2. **Prep features** — one-hot categoricals, scale numerics for KNN / logistic regression.
3. **Split** — `train_test_split(..., stratify=y)`.
4. **Train several models** — Tree, Logistic, KNN, Random Forest.
5. **Evaluate** — confusion matrix, precision, recall, F1 (not just accuracy).
6. **Tune threshold** to match the business cost of FP vs FN.
7. **Pick the winner** — usually Random Forest, but match to the decision problem.

---

## 📎 Related Notes

- Previous: [[Lecture 2 - EDA and Charts]]
- Next: [[Lecture 4 - Regression]]
- Foundational: [[Supervised Learning]], [[Train Test Split]], [[One-Hot Encoding]], [[Feature Scaling]]
- Related: [[Gini Impurity]], [[Sigmoid Function]], [[Ensemble Methods]], [[Bias-Variance Tradeoff]]
