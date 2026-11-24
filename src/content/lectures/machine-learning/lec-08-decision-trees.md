---
title: Decision Trees
week: 8
semester: 2
year: 2
course: Machine Learning
lecture: "Lecture 08 — Decision Trees"
instructor: Royee Guy
date: 2026-05-25
tags:
  - machine-learning
  - decision-trees
  - entropy
  - information-gain
  - gini-impurity
  - overfitting
  - classification
  - regression
aliases:
  - ML Lecture 8
  - Decision Trees
subject: machine-learning
in_scope: true
---

# Decision Trees

> Part of: [[Machine Learning]]
> **Lecture 08** — Machine Learning (decision-tree lecture, 25 May). Slides: *Decision Trees* teaching deck.
> Key concepts: [[Decision Tree]], [[Entropy]], [[Information Gain]], [[Gini Impurity]], [[Overfitting]], [[Missing Values]], [[Outliers]]

> [!warning] Numbering and date are inferred
> The slides carry no lecture number or date. "Lecture 08" and 25 May follow the course order (Lecture 7 was 20 May) and the Moodle title "lecture 25/5". Everything below is taken from the slides unless marked *AI-written*.

---

## Agenda

1. Motivation: why trees are a useful first model
2. How a tree is built
3. Information theory: entropy and information gain
4. Worked example: Play Tennis
5. Other split metrics: Gini, variance, training error
6. Practical risks: missing values, overfitting, outliers, bias
7. Limitations
8. Practical use and discussion

---

## 1. Motivation and basic idea

The slides' running example: **should we buy the watermelon?** Ask simple questions (is the colour dark green? does it sound hollow?) until you reach a leaf: *buy* / *do not buy*.

A **decision tree** is a model made of rules:

- each **internal (decision) node** is a question about a feature
- each **branch** is an answer
- each **leaf** is a prediction
- prediction = follow a path from the **root** to a leaf

### Classification vs regression trees

| | Classification tree | Regression tree |
| --- | --- | --- |
| Predicts | A category (yes/no, class A/B/C) | A number (price, demand, risk score) |
| Leaf output | Most common class | Mean or median value |
| Quality metric | Impurity or classification error | Variance, MSE or MAE |

Same mechanism for both: **split the data until each leaf is useful**.

### Feature types

| Categorical | Continuous |
| --- | --- |
| Fixed set of values (Outlook = Sunny / Rain / Overcast) | A number (age, temperature, price) |
| A split can create one branch per value; some libraries need encoding | The split becomes a **threshold**, e.g. `Temperature < 24` |

---

## 2. How a tree is built

1. Start with **all observations at the root**.
2. Choose the **feature that creates the best split**.
3. **Repeat** for each child node.
4. **Stop** when the node is pure, features run out, data runs out, or limits are reached.

> [!tip] What makes a split "good"?
> A good split produces child nodes that are **cleaner than the parent**. The goal is to reduce uncertainty.

---

## 3. Entropy and information gain

### Entropy

**Entropy** measures how mixed (uncertain) a node is.

- **Low entropy**: most examples share a label.
- **High entropy**: labels are mixed and hard to predict.
- In binary classification, entropy is **maximal near 50/50**.

$$H(X) = -\sum_x p(x)\,\log_2 p(x)$$

$p(x)$ is the probability of each class; log base 2 gives the unit, **bits**. The slide's advice: understand the direction, do not memorise; use the library.

### Information gain

**Information gain** is the reduction in entropy after a split.

$$\text{Gain} = \text{Entropy(parent)} - \text{Weighted Entropy(children)}$$

Higher gain means the split helped more. The algorithm compares candidate features and the best one becomes the next decision node (slide example: feature A with gain 0.24 beats feature B with 0.15).

> [!example] AI-written illustration (not from the slides)
> A node with 9 "Yes" and 5 "No" has $p = 9/14$ and $5/14$, so
> $$H = -\tfrac{9}{14}\log_2\tfrac{9}{14} - \tfrac{5}{14}\log_2\tfrac{5}{14} \approx 0.940 \text{ bits}$$
> A perfectly pure node (all Yes) has entropy 0; a 50/50 node has entropy 1.

---

## 4. Worked example: Play Tennis

Target: play tennis or not. Features: Outlook, Temperature, Humidity, Wind.

The slide's table (it shows only days D1 to D9):

| Day | Outlook | Temp | Humidity | Wind | Play |
| --- | --- | --- | --- | --- | --- |
| D1 | Sunny | Hot | High | Weak | No |
| D2 | Sunny | Hot | High | Strong | No |
| D3 | Overcast | Hot | High | Weak | Yes |
| D4 | Rain | Mild | High | Weak | Yes |
| D5 | Rain | Cool | Normal | Weak | Yes |
| D6 | Rain | Cool | Normal | Strong | No |
| D7 | Overcast | Cool | Normal | Strong | Yes |
| D8 | Sunny | Mild | High | Weak | No |
| D9 | Sunny | Cool | Normal | Weak | Yes |

**Choosing the root.** The slide quotes the information gain per feature from "the original example" (the full dataset, not just the nine rows shown):

| Feature | Information gain |
| --- | --- |
| **Outlook** | **0.247** |
| Humidity | 0.151 |
| Wind | 0.048 |
| Temperature | 0.029 |

Highest gain wins, so **Outlook** is the root, with branches Sunny, Overcast, Rain.

**Final tree** (as drawn): Outlook at the root; the **Overcast** branch is a leaf = Yes; the **Sunny** branch tests **Humidity** (High: No, Normal: Yes); the **Rain** branch tests **Wind** (Strong: No, Weak: Yes). *(Branch labels follow the standard Play Tennis tree; the slide's drawing shows the node names and leaf values.)* The result is human-readable: a sequence of rules.

---

## 5. Other split metrics

### Gini impurity

Gini measures how often two randomly chosen items would have **different labels**.

$$\text{Gini} = 1 - \sum_i p_i^2$$

- Low Gini: node mostly one class, stable prediction, the preferred outcome of a split.
- High Gini: very mixed node, uncertain prediction; keep splitting if allowed.
- Goal: **minimise the weighted Gini after the split**.

> [!example] AI-written illustration (not from the slides)
> For 9 Yes / 5 No: $\text{Gini} = 1 - (9/14)^2 - (5/14)^2 \approx 0.459$. A pure node has Gini 0; a 50/50 binary node has Gini 0.5.

### Variation vs variance

**Variation** is the general idea that points differ (categories or numbers). **Variance** is one mathematical measure of spread, used mainly for **numeric targets**. Lower variance means a more predictable leaf. A useful split **reduces variation inside the child nodes**.

$$\text{Variance} = \frac{\sum (x - \bar{x})^2}{n}$$

### Train error minimisation

Choose the split that directly reduces **training error**: misclassification rate for classification, MSE or MAE for regression. It is useful but can **overfit** if the tree grows too much. Good training fit is not enough: always check validation data.

$$\text{Classification error} = \frac{\text{wrong predictions}}{\text{all predictions}}$$

---

## 6. Practical risks

### Missing values

Missing data can reflect a real process issue. Common handling:

- ignore missing values for the current split
- treat "missing" as its own category
- impute before training
- follow multiple branches and combine probabilities

Check: how much is missing per feature, whether missingness is random, whether it depends on a group or workflow, and whether the model learns "missing" as a shortcut. **Report missingness before trusting the tree.**

### Overfitting

A tree can **memorise** the training set with too many small leaves.

| Warning signs | Controls |
| --- | --- |
| Training accuracy keeps rising | `max_depth` |
| Validation accuracy stops improving | `min_samples_split` |
| Many leaves with very few samples | `min_samples_leaf` |
| Rules become too specific | `max_leaf_nodes`, post-pruning |

> [!tip] Slide motto
> A good-enough tree beats a perfect training tree.

### Outliers

Outliers may be errors, rare cases or important edge cases. A deep tree may build a branch for one rare point; mislabelled examples cause needless splits; extreme targets distort regression leaves. **Do not delete automatically**: inspect leaves with very few samples, use `min_samples_leaf` and `max_depth`, and decide whether each is an error or a real edge case.

### Bias

Bias can enter before training: **data bias** (groups underrepresented), **label bias** (historical decisions already biased), **feature bias** (proxies for sensitive attributes), **measurement bias** (inconsistent sensors or forms), and **split bias** (some criteria favour features with many values). Evaluate by subgroup, inspect the important splits, question the target.

### Model review checklist

Missing data (how much and why), overfitting (train vs validation gap), variation (are the groups cleaner?), outliers (errors or edge cases?), biases (does performance differ by subgroup?), interpretability (can a human explain the top rules?). *Decision-ready = accurate + understandable + reviewed.*

---

## 7. Limitations

- **Rectilinear decision boundaries.** Splits are axis-aligned thresholds, so decision regions are rectangles. Good for naturally threshold-based rules, weak for diagonal or smooth boundaries.
- **Poor extrapolation.** A regression tree predicts leaf averages, so outside the training range it cannot follow a new trend: predictions go flat. Check train/validation coverage; use models that extrapolate when trend matters; use ensembles carefully.
- **Interpretability is not automatic.** Small trees are easy to explain; large trees are not. Feature importance can hide correlated-feature effects; a path is local logic, not always global truth.

---

## 8. Practical use

The slide's minimal scikit-learn flow:

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y)

model = DecisionTreeClassifier(
    max_depth=4,
    min_samples_leaf=20,
    random_state=42
)
model.fit(X_train, y_train)
print(model.score(X_train, y_train))
print(model.score(X_test, y_test))
```

Start with a shallow tree, compare train and test scores, increase complexity only if needed, and always review missingness and bias risks.

### Discussion questions from the slides

- What are the main hyperparameters?
- Can the tree handle multi-class data?
- How are categorical features represented?
- How does it handle missing data?
- Is it sensitive to outliers?
- What happens when features are correlated?
- Is it prone to overfitting?
- Is it interpretable enough for this use case?

---

## Summary

- A tree turns data into a **sequence of questions**; the best split makes child nodes **cleaner**.
- **Entropy**, **Gini** and **variance** are different ways to measure "cleaner"; **information gain** = parent entropy minus weighted child entropy.
- Trees are intuitive but **overfit**; control depth and leaf size, and check missing values, outliers and bias.
- Weak spots: axis-aligned boundaries and extrapolation.

---

## Related Notes

- [[Machine Learning]] — subject hub
- [[Lec_05-Model Selection & KNN]] — train/validation split and hyperparameter tuning
- [[Lec_07-Performance Measures & Data Processing]] — overfitting, missing values, evaluation

**Slides (PDF):** [Decision Trees deck](/papers/machine-learning/lec-08-decision-trees-slides.pdf)
