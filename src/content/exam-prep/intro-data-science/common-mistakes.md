---
title: "Common Mistakes"
subject: intro-data-science
type: reference
description: "The mistakes that cost marks in a data-science project and its Q&A: leakage before the split, accuracy on imbalanced classes, testing on training data, unscaled distance models, deleting outliers and missing rows blindly, reading R² and coefficients wrongly, and an app that builds different columns from the model."
course: Data Science for Entrepreneurs
semester: 1
year: 2
order: 5
tags:
  - intro-data-science
  - exam-prep
  - mistakes
---

## Data and EDA

| Mistake | Why it's wrong | Check |
|---|---|---|
| Treating `NaN` as 0 | missing means **unknown**; a 0 is a real value | Lecture 2 |
| Dropping every row with a missing value | if the missingness is **systematic** (unhappy customers skip the rating), dropping biases the result; 15% of rows gone is a lot | practice quiz Q5 |
| Mean imputation on a skewed column | the mean is pulled by outliers: use the median, and consider a missing flag | Lecture 2 |
| Deleting outliers on sight | an \$18,000 order may be your biggest customer: investigate first | Lecture 2 |
| Trusting summary statistics | four datasets with the same mean, variance and correlation look nothing alike (Anscombe): plot | Lecture 2 |
| A chart titled with the topic | the headline should state the **finding** | Lecture 2 |
| Correlation read as causation | look for a confounder (summer drives ice cream **and** drownings) | Lecture 1 |
| Learning only from survivors | the data you don't have matters (Wald's planes) | practice quiz Q2 |

## Splitting and leakage

| Mistake | Why it's wrong | Check |
|---|---|---|
| Testing on the training data | a memorising model scores 100% there; the test set exists to catch it | Lecture 3 |
| Imputing or scaling the full dataset, then splitting | the test rows shaped the training: **leakage**, an inflated score | practice quiz Q10 |
| `get_dummies` on the full dataset, then splitting | the column structure reveals the test set's categories (small, but the principle) | practice quiz Q11 |
| Scaling before cross-validation | leaks across folds; put the scaler in a **Pipeline** | Lecture 4 |
| No `stratify=y` on imbalanced classes | the test set can end up with almost no positives | Lecture 3 |
| Keeping an ID or a "cancellation date" column | IDs carry no signal; a column that is only known after the outcome is leakage | — |

## Models

| Mistake | Why it's wrong | Check |
|---|---|---|
| KNN, logistic, Ridge, Lasso, K-Means or PCA on unscaled data | the feature with the biggest units dominates the distance or the penalty | Lectures 3–5 |
| Scaling a decision tree "to be safe" | harmless but pointless: trees split on thresholds | practice quiz Q11 |
| An unlimited decision tree | it grows until every leaf is pure: it memorises noise. Use `max_depth` or a forest | Lecture 3 |
| Jumping to deep learning | a simple **baseline is mandatory**; an MLP needs 1,000+ rows and pays in interpretability | Lecture 8 |
| One-hot without `drop_first` in a linear model | a redundant column (the dummy trap) | practice quiz Q12 |
| K-Means $K$ from the elbow alone | the bend is often vague: add the silhouette and business sense | Lecture 5 |
| PCA components named like features | each is a mix of all features; interpretation is hard | Lecture 5 |

## Evaluation

| Mistake | Why it's wrong | Check |
|---|---|---|
| Reporting accuracy with 5% positives | "nobody churns" scores 95%; report precision, recall, F1 | Lecture 3 |
| The default 0.5 threshold | choose it by the cost of a false positive vs a false negative | Lecture 3 |
| Train $R^2$ 0.99 called a great model | with test $R^2$ 0.35 it is **overfitting** | practice quiz Q14 |
| $R^2$ can't be negative | on the test set it can: worse than predicting the mean | Lecture 4 |
| Adding features to raise $R^2$ | training $R^2$ never falls; judge on the test set | Lecture 4 |
| A negative coefficient means a negative effect | it is the effect **holding the others fixed**, and correlated features can flip signs | practice quiz Q16 |
| "MAE 50k" with no context | compare with the scale of $y$ and a baseline's MAE | practice quiz Q17 |
| One lucky split | use K-fold cross-validation for a stable score | Lecture 4 |

## The app and the presentation

| Mistake | Why it's wrong | Check |
|---|---|---|
| The app builds different columns from training | the model gets features in the wrong order or missing: reindex to the training columns | [[Python and scikit-learn Sheet]] |
| Only one person answers the Q&A | each member gets **two questions** and must show they understand the project | [[Final Project Brief]] |
| Generic insights ("the model works well") | the brief asks for insights **specific to your data** | [[Final Project Brief]] |
| Three graphs in the summary | the brief asks for **two**, the ones that best show the key findings | [[Final Project Brief]] |
| A model or term not from class without a reference | the brief requires references | [[Final Project Brief]] |
