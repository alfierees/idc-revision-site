---
title: "Graph Gallery"
subject: intro-data-science
type: reference
description: "Every interactive graph in the course on one page, in project order: Anscombe's quartet (always plot), precision and recall as the threshold moves, the KNN classifier, bias and variance, cross-validation, K-Means and PCA, plus the project pipeline as a diagram."
course: Data Science for Entrepreneurs
semester: 1
year: 2
order: 7
tags:
  - intro-data-science
  - exam-prep
  - graphs
---

> Step through each explorer with the arrows (or press play), then use the last step to change the data. Each one answers a question the project Q&A tends to ask; the question is in the heading.

## 0. The project pipeline

```mermaid
flowchart TD
    A["Ask: the business problem"] --> B["Collect: Kaggle or UCI"]
    B --> C["Split train / test"]
    C --> D["Clean and encode: fit on train only"]
    D --> E["Baseline, then 2 or 3 models"]
    E --> F["Evaluate: the metric that fits the cost of errors"]
    F --> G["Deploy: Gradio app"]
    G --> H["Communicate: 2 graphs, 7-minute demo"]
    F -. EDA or results send you back .-> D
```

## 1. Why plot before you model? (Lecture 2)

Four datasets with the same mean, variance, correlation and regression line.

```graph
type: anscombe-quartet
```

## 2. Why not just report accuracy? (Lecture 3)

Five churners among fifty members: "nobody churns" scores 90%. Move the threshold and watch precision and recall trade off.

```graph
type: ds-precision-recall
```

## 3. How does KNN decide, and what does K do? (Lecture 3)

```graph
type: knn-classifier
```

## 4. How do you know the model isn't overfitting? (Lecture 4)

Too simple misses the pattern; too complex fits the noise. The test error is the judge.

```graph
type: bias-variance
```

## 5. Why cross-validate instead of one split? (Lecture 4)

```graph
type: cross-validation
```

## 6. How does K-Means find the segments? (Lecture 5)

```graph
type: k-means
```

## 7. What does PCA keep? (Lecture 5)

```graph
type: pca-projection
```
