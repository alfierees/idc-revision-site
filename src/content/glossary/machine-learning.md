---
title: Machine Learning Concepts
description: Single glossary of every concept used across the Machine Learning and Data Science notes. All [[wiki-links]] in lectures resolve to a heading here.
tags:
  - meta
  - glossary
  - index
  - machine-learning
aliases:
  - Machine Learning Glossary
  - ML Glossary
  - Concept Glossary
subject: machine-learning
in_scope: true
---

# Machine Learning Concepts

> One-stop glossary spanning the Machine Learning and Data Science lectures (the two halves of this subject's material). Every concept link points to a heading here (format `[[_Machine Learning Concepts#Term|Term]]`). Each entry: a one-line definition + the lecture where it's taught. Use the outline panel or ⌘/Ctrl-F to jump.
>
> Tracker of which links exist: [[_Wiki-Link Registry]]. Subject hub: [[Machine Learning]].

---

## Supervised learning & regression

### Supervised Learning
Learning a mapping from labelled $(x, y)$ pairs. → [[Lec_02-Linear Regression|ML Lec 2]]

### Linear Regression
An OLS model predicting a continuous target as a linear function of the features. → [[Lecture 4 - Regression|DS Lec 4]]

### OLS
Ordinary Least Squares — the estimator that minimises the sum of squared residuals. → [[Lecture 4 - Regression|DS Lec 4]]

### Cost Function
A scalar measure of model error (e.g. MSE) that training minimises. → [[Lec_02-Linear Regression|ML Lec 2]]

### Gradient Descent
Iterative first-order optimisation that steps the parameters downhill on the [[Cost Function]]. → [[Lec_02-Linear Regression|ML Lec 2]]

### Normal Equation
The closed-form OLS solution $(\mathbf{X}^\top\mathbf{X})^{-1}\mathbf{X}^\top\mathbf{y}$. → [[Lec_02-Linear Regression|ML Lec 2]]

### Polynomial Regression
A linear model fit on engineered polynomial features. → [[Lec_02-Linear Regression|ML Lec 2]]

### Feature Scaling
Putting features on a comparable scale (min-max scaling, standardisation). → [[Lec_02-Linear Regression|ML Lec 2]]

### Regularization
Penalising model complexity — L1 (Lasso), L2 (Ridge), Elastic Net, early stopping. → [[Lec_02-Linear Regression|ML Lec 2]]

### Ridge Regression
L2-regularised linear regression. → [[Lecture 4 - Regression|DS Lec 4]]

### Lasso Regression
L1-regularised regression that performs automatic [[Feature Selection]]. → [[Lecture 4 - Regression|DS Lec 4]]

### Overfitting
A large generalisation gap — the model fits noise; the heart of the bias-variance trade-off. → [[Lec_02-Linear Regression|ML Lec 2]]

### Bias-Variance Tradeoff
The trade-off between underfitting (high bias) and overfitting (high variance). → [[Lecture 4 - Regression|DS Lec 4]]

### RMSE
Root Mean Squared Error — a regression error metric in the target's units. → [[Lecture 4 - Regression|DS Lec 4]]

### R-Squared
The coefficient of determination — the proportion of target variance the model explains. → [[Lecture 4 - Regression|DS Lec 4]]

---

## Classification

### Classification
A supervised task mapping inputs to discrete labels (binary, multiclass, multilabel). → [[Lec_05-Model Selection & KNN|ML Lec 5]]

### KNN
K-Nearest Neighbours — a lazy classifier using a majority vote among the $k$ closest training points. → [[Lec_05-Model Selection & KNN|ML Lec 5]]

### Decision Tree
A flowchart classifier that splits on features via if/else rules. → [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]]

### Random Forest
An ensemble of decision trees with bagging plus feature randomness. → [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]]

### Logistic Regression
A probabilistic binary classifier using the [[Sigmoid Function]]. → [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]]

### Sigmoid Function
Maps real values to $[0,1]$, giving logistic regression its probability output. → [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]]

### Gini Impurity
A node-purity measure used to choose decision-tree splits. → [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]]

### Ensemble Methods
Combining multiple models to lower variance (e.g. bagging in a [[Random Forest]]). → [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]]

### Distance Function
The similarity measure KNN relies on (Euclidean, Manhattan, Minkowski). → [[Lec_05-Model Selection & KNN|ML Lec 5]]

### Euclidean Distance
The standard straight-line distance used by K-Means and KNN. → [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]]

### One-Hot Encoding
Encoding a categorical variable as a set of binary columns. → [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]]

---

## Model selection & evaluation

### Model Selection
Choosing the model type and tuning hyperparameters for a given task. → [[Lec_05-Model Selection & KNN|ML Lec 5]]

### Train-Test Split
Partitioning data into a training set and a held-out test set for honest evaluation. → [[Lec_05-Model Selection & KNN|ML Lec 5]]

### Validation Set
A third partition used to compare models and tune hyperparameters without touching the test set. → [[Lec_05-Model Selection & KNN|ML Lec 5]]

### Hyperparameter Tuning
Selecting hyperparameter values (e.g. $k$) via a validation-set search. → [[Lec_05-Model Selection & KNN|ML Lec 5]]

### Cross-Validation
K-fold resampling for unbiased model comparison and hyperparameter tuning. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### Accuracy
The fraction of correct predictions on the test set. → [[Lec_05-Model Selection & KNN|ML Lec 5]]

### Confusion Matrix
A table of TP, TN, FP (Type I) and FN (Type II) classification outcomes. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### Precision
$TP / (TP + FP)$ — minimises false positives. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### Recall
$TP / (TP + FN)$ — minimises false negatives; also called TPR / sensitivity. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### Precision and Recall
The paired evaluation metrics for imbalanced classification — see [[Precision]] and [[Recall]]. → [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]]

### ROC Curve
TPR vs FPR across all thresholds — measures classifier separability. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### AUC
Area under the ROC curve — the probability the model ranks a random positive above a random negative. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### Data Leakage
Using test-set information during training, which invalidates the evaluation. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### Scikit-Learn Pipeline
Chaining preprocessing and model into one object to prevent [[Data Leakage]]. → [[Lecture 4 - Regression|DS Lec 4]]

---

## Unsupervised learning & dimensionality reduction

### Unsupervised Learning
Finding structure in unlabelled data. → [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]]

### K-Means
A centroid-based clustering algorithm. → [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]]

### Elbow Method
Plotting within-cluster sum of squares vs $K$ to pick the number of clusters. → [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]]

### Silhouette Score
Measures how well each point fits its assigned cluster. → [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]]

### PCA
Principal Component Analysis — unsupervised feature extraction via a variance-maximising rotation. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### Explained Variance
The proportion of total variance captured by the PCA components. → [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]]

### Curse of Dimensionality
Exponential data sparsity (and degrading distances) in high-dimensional spaces, motivating dimensionality reduction. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### Customer Segmentation
A business application of clustering to group customers. → [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]]

### Feature Selection
Choosing a subset of the original features (wrappers and filters). → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

### Pearson Correlation
A linear-dependency measure $\rho = \sigma_{xy}/(\sigma_x \sigma_y)$, used as a filter criterion. → [[Lec_07-Performance Measures & Data Processing|ML Lec 7]]

---

## Exploratory data analysis & data wrangling

### Exploratory Data Analysis
The workflow of summarising, visualising, and sanity-checking a dataset before modelling. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Pandas
The Python library for tabular data manipulation — the [[DataFrame]] toolkit. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### DataFrame
Pandas' 2-D labelled table (rows × named columns), the core EDA data structure. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Groupby
The split-apply-combine pattern: split rows by a key, apply an aggregation, combine the results. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Summary Statistics
Measures of central tendency (mean, median, mode) and spread (standard deviation, quartiles) describing a column. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Distributions
The shape of a variable's values (symmetric, skewed), read from a histogram. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Histograms
A chart that bins a numeric variable to show its distribution. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Boxplots
A chart showing the median, quartiles, and outliers via the IQR. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Missing Values
Absent entries (`NaN`) that must be detected and handled (drop or impute) before modelling. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Outliers
Extreme values — flagged by the IQR rule — that can distort summaries and models. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Matplotlib
The foundational Python plotting library. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Seaborn
A higher-level statistical plotting library built on [[Matplotlib]]. → [[Lecture 2 - EDA and Charts|DS Lec 2]]

### Correlation vs Causation
The caution that a statistical association does not by itself imply a causal effect. → [[Lecture 2 - EDA and Charts|DS Lec 2]]
