---
title: Model Selection & KNN
semester: 2
year: 2
course: Machine Learning
lecture: 5
tags:
  - machine-learning
  - model-selection
  - knn
  - classification
  - hyperparameter-tuning
  - train-test-split
  - distance-metrics
  - overfitting
subject: machine-learning
in_scope: true
---

# Model Selection & KNN

> Part of: [[Machine Learning]]
> **Recitation 5** — Machine Learning
> Key concepts: [[Model Selection]], [[Train-Test Split]], [[Validation Set]], [[KNN]], [[Classification]], [[Distance Function]], [[Hyperparameter Tuning]], [[Accuracy]]

---

## Agenda

1. Model selection (overview)
2. Train-test split
3. Train-test-validation split
4. The classification problem
5. KNN theory & distance functions
6. Evaluation
7. Choosing K
8. Feature weighting & Weighted KNN
9. KNN pros & cons

---

## Model Selection

### What is Model Selection?

==Model selection== is the process of choosing the most suitable ML model for a given dataset or problem. It has two distinct parts:

1. **Choosing the model type** — e.g. linear regression vs KNN vs neural network
2. **Tuning hyperparameters** — finding the best settings within a chosen model (e.g. choosing $k$ in KNN)

> [!info] Definition
> **Model selection** = picking the right algorithm + the right hyperparameters for your specific problem and dataset.

### Why Does Model Selection Matter?

- **Performance** — the right model produces significantly more accurate predictions than a poorly chosen one.
- **Avoiding overfitting and underfitting** — a well-chosen model balances specificity (fitting training data) with generality (fitting unseen data). A model that is too specific memorises noise; one that is too general misses real patterns.
- **Efficiency** — we don't need to fully train every possible model. Smart selection avoids wasting compute on models that are obviously too simple or too complex for the task.

### Key Considerations When Choosing a Model

| Consideration | Details |
| ------------- | ------- |
| **Model complexity** | Simple models (linear regression) are easy to train but may miss patterns. Complex models (neural networks) capture more detail but can overfit. |
| **Interpretability** | Decision trees are easy to explain. Neural networks are a "black box." |
| **Computational cost** | KNN is expensive at inference time (calculates distances over all training points). Polynomial regression is lean. |
| **Data size** | Complex models need much more data. The more parameters, the more training examples required. |

> [!tip] Complexity ≠ better
> A neural network won't outperform linear regression if the true relationship really is linear — it'll just overfit noisily and take longer to train.

### Coming Soon

The lecture flags three tools for rigorous model selection that will be covered in later sessions:

- **Bias-Variance Tradeoff** — formalising the over/underfitting balance
- **Cross-Validation** — more robust model evaluation than a single train-test split
- **Grid Search** — systematic hyperparameter tuning

---

## Train-Test Split

### Why Split the Data?

When evaluating a model, testing it on the same data it was trained on is meaningless — the model has already "seen" those examples and can memorise them. We need to evaluate on **unseen data** to measure true generalization.

> [!info] Definition
> **Train-test split**: divide the dataset into two non-overlapping subsets:
> - **Training set** — used to fit (train) the model.
> - **Test set** — held back; used only to evaluate the trained model's performance on unseen data.

A typical split is **80/20** (training/test) or **90/10** for larger datasets.

> [!warning] Never train on test data
> Evaluating on data used during training (or tuning based on test-set results) inflates performance estimates and gives a false picture of generalization. The test set must remain untouched until the very end.

> [!tip] Why this mimics the real world
> In production, a model always receives data it has never seen before. Train-test split replicates this scenario — if a model performs well on training data but poorly on the test set, it's overfitting and won't be useful in practice.

---

## Train-Test-Validation Split

### The Problem with Just Two Sets

If we use the test set to *compare* multiple models and pick the best one, we've introduced a subtle form of bias: we've effectively "trained" our model-selection decision on the test set. The winning model may just be lucky on that particular split, not genuinely better.

### Solution: Three-Way Split

Add a third partition — the **validation set**:

| Set | Purpose |
| --- | ------- |
| **Training** | Fit the model parameters |
| **Validation** | Compare models and tune hyperparameters |
| **Test** | Final unbiased evaluation — used *once*, at the very end |

A typical three-way split is **75 / 15 / 10** (train / val / test).

> [!warning] The test set is sacred
> Use the validation set for all model comparisons and hyperparameter tuning. Reserve the test set for the single final evaluation. Peeking at the test set during development re-introduces the bias you were trying to avoid.

```
All data
├── Training set  (75%) ← model learns here
├── Validation set (15%) ← model selection & hyperparameter tuning happen here
└── Test set       (10%) ← final, one-time performance report
```

---

## The Classification Problem

### Definition

==Classification== is a **supervised learning** task where the goal is to assign a discrete **label** to an input:

$$\text{Given } \mathbf{x} = (x_1, x_2, \ldots, x_n), \text{ predict } y \in \mathcal{Y}$$

where $\mathcal{Y}$ is a finite set of predefined class labels.

> [!example] Ham vs spam
> Gmail classifies each incoming email as spam or not-spam by looking at its features (words, sender, links, etc.) and assigning a binary label.

### Types of Classification

| Type | Description | Example |
| ---- | ----------- | ------- |
| **Binary** | Two possible labels | Spam / not spam; Sick / healthy |
| **Multiclass** | More than two mutually exclusive labels | Cat / dog / bird |
| **Multilabel** | A single point can belong to multiple classes simultaneously | Email tagged as both "urgent" and "work" |

---

## KNN Theory

### Intuition

==K-Nearest Neighbours (KNN)== is a **lazy learner** — it does no explicit training. Instead, at prediction time it looks at the $k$ most similar training points (the "nearest neighbours") and takes a majority vote.

> [!tip] Mental model
> KNN is like asking your $k$ closest friends what they would do in your situation, and going with the majority opinion.

### The KNN Algorithm

Given a query point $\mathbf{x}$:

**Stage 1 — Compute distances:** calculate the distance from $\mathbf{x}$ to every point in the training set.

**Stage 2 — Sort and select:** rank all training points by distance (ascending); keep the $k$ closest.

**Stage 3 — Vote:** for classification, each of the $k$ neighbours casts one vote for its label. Predict the majority class:

$$\hat{y} = \arg\max_{c \in \mathcal{Y}} \sum_{i \in \mathcal{N}_k(\mathbf{x})} \mathbf{1}[y_i = c]$$

where $\mathcal{N}_k(\mathbf{x})$ is the set of $k$ nearest neighbours of $\mathbf{x}$.

### Distance Functions

The core of KNN is the **distance** (also called a similarity measure) used in Stage 1. The choice of distance function determines what "close" means.

> [!info] Minkowski distance (general form)
> $$\boxed{d_q(\mathbf{x}, \mathbf{z}) = \left(\sum_{j=1}^{n} |x_j - z_j|^q\right)^{1/q}}$$
> Minkowski is a **generalisation** — different values of $q$ recover the familiar special cases.

| $q$ | Name | Formula | Character |
| --- | ---- | ------- | --------- |
| $q = 1$ | **Manhattan** (L1) | $\sum_j \|x_j - z_j\|$ | Moves along grid axes; robust to large individual differences |
| $q = 2$ | **Euclidean** (L2) | $\sqrt{\sum_j (x_j - z_j)^2}$ | Straight-line distance; most commonly used |
| $q \to \infty$ | **Chebyshev** | $\max_j \|x_j - z_j\|$ | Only the single largest difference matters |

> [!example] Worked example — 2D points
> Let $\mathbf{x} = (1, 3)$ and $\mathbf{z} = (4, 7)$.
>
> **Euclidean ($q=2$):**
> $$d_2 = \sqrt{(4-1)^2 + (7-3)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$
>
> **Manhattan ($q=1$):**
> $$d_1 = |4-1| + |7-3| = 3 + 4 = 7$$

> [!warning] Scale sensitivity
> Distance-based methods are sensitive to feature scale. If one feature ranges over $[0, 1000]$ and another over $[0, 1]$, the large-scale feature will dominate the distance calculation. **Always normalise or standardise features before applying KNN.**

---

## Evaluation

### Accuracy

For classification, the most straightforward metric is **accuracy** — the proportion of test-set predictions that are correct:

$$\boxed{\text{Accuracy} = \frac{\text{Number of correct predictions}}{\text{Total number of predictions}}}$$

> [!example]
> Test set of 100 samples: 70 correct, 30 incorrect → Accuracy = 70%.

Accuracy is easy to interpret but can be misleading on imbalanced datasets (e.g. if 95% of emails are not-spam, a model that always predicts "not spam" achieves 95% accuracy while being useless).

---

## Choosing K — Hyperparameter Tuning

The choice of $k$ is the central **hyperparameter** of KNN, and it directly controls the bias-variance tradeoff.

| $k$ value | Effect | Problem |
| --------- | ------ | ------- |
| **Too small** (e.g. $k=1$) | Decision boundary hugs training data tightly | Sensitive to noisy/outlier points; **overfits** |
| **Too large** (e.g. $k=m$) | Every prediction is the global majority class | Ignores local structure; **underfits** |
| **Just right** | Smooth but responsive boundary | Good generalisation |

> [!example] K = 1 (overfit)
> A single outlier in the training data creates a "bubble" of the wrong class in the decision boundary. Any query point near that outlier gets misclassified.

> [!example] K = 12 (underfit)
> With too many neighbours, the prediction is dominated by the overall class distribution rather than the local neighbourhood — the model misses real local patterns.

> [!tip] How to choose K
> Use the **validation set**: train (store) the data, then sweep over candidate values of $k$ and pick the one with the best validation accuracy. This is an instance of **hyperparameter tuning via grid search**.

Common heuristics: try odd values of $k$ (to avoid ties in binary classification), and start with $k \approx \sqrt{m}$ where $m$ is the number of training examples.

---

## Feature Weighting

In standard KNN, all features contribute equally to the distance. If we have **prior knowledge** about which features are more informative, we can assign them higher weights:

$$d_{\mathbf{w}}(\mathbf{x}, \mathbf{z}) = \left(\sum_{j=1}^{n} w_j |x_j - z_j|^q\right)^{1/q}$$

where $w_j \ge 0$ is the weight for feature $j$.

> [!tip] ML vs Data Science distinction
> The lecture flags this as a key differentiator: in pure data science you might assign feature weights based on domain knowledge or manual inspection. In ML, you can **learn the weights from data** using techniques like Cross-Validation — letting the data tell you which features matter most.

---

## Weighted KNN

Standard KNN gives every neighbour one equal vote. ==Weighted KNN== instead weights each neighbour's vote by the **inverse of its distance** from the query point — closer neighbours count for more.

$$\hat{y} = \arg\max_{c \in \mathcal{Y}} \sum_{i \in \mathcal{N}_k(\mathbf{x})} \frac{1}{d(\mathbf{x}_i, \mathbf{x})} \cdot \mathbf{1}[y_i = c]$$

> [!example] Intuition
> If three neighbours vote "+", "−", "+" with distances 1, 1, 10, a standard vote gives +2/−1 → predicted "+". But the two close neighbours contribute much more than the distant one. Weighted KNN captures this.

### Advantages of Weighted KNN

| Advantage | Explanation |
| --------- | ----------- |
| **Improved accuracy** | More accurate especially when data density varies across regions |
| **Robustness to outliers** | A distant outlier has very little influence on the prediction |
| **Reduced class imbalance bias** | Downweights distant majority-class neighbours |
| **Flexibility** | Choice of weighting scheme (linear, inverse, exponential) is itself a hyperparameter |

---

## KNN Pros & Cons

| | Pros | Cons |
|---|------|------|
| **Simplicity** | Easy to understand and implement | — |
| **Training** | No training phase ("lazy learner") — just store the data | — |
| **Flexibility** | Works for both classification and regression | — |
| **Inference cost** | — | Must compute distance to all $m$ training points per query: $O(mn)$ |
| **K sensitivity** | — | A poor choice of $k$ can fatally hurt performance |
| **Scale sensitivity** | — | Features must be normalised before use; otherwise large-scale features dominate |

> [!warning] Lazy ≠ free
> The "no training" property means all computation is deferred to inference time. For large datasets, this makes KNN very slow at prediction — the opposite of most models.

---

## Summary

- **Model selection** means choosing the right model type *and* the right hyperparameters. It matters for performance, generalization, and efficiency.
- **Train-test split** gives an unbiased estimate of how well a model generalizes to unseen data.
- **Validation set** prevents "overfitting" to the test set during model comparison; the test set should be used only once at the very end.
- **Classification** maps an input $\mathbf{x}$ to a discrete label $y \in \mathcal{Y}$; types include binary, multiclass, and multilabel.
- **KNN** classifies a query point by majority vote among its $k$ nearest training neighbours, with distance measured by a chosen metric (Euclidean, Manhattan, Minkowski).
- **Choosing K** is the key hyperparameter decision: small $k$ → overfit; large $k$ → underfit. Use validation-set accuracy to select $k$.
- **Weighted KNN** down-weights distant neighbours, improving robustness and accuracy.
- KNN's main weakness is **computational cost at inference** and **sensitivity to scale** — always normalise features.

---

## Related Notes

- [[Machine Learning]] — subject hub
- [[Lec_02-Linear Regression]] — covers overfitting, regularization, gradient descent
- [[Model Selection]]
- [[Train-Test Split]]
- [[Validation Set]]
- [[KNN]]
- [[Classification]]
- [[Distance Function]]
- [[Hyperparameter Tuning]]
- [[Accuracy]]
- [[Overfitting]]
- [[Feature Scaling]]
