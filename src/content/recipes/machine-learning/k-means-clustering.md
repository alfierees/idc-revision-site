---
title: "K-Means Clustering — Assign → Update → Repeat"
subject: machine-learning
related_terms: ["k-means", "euclidean-distance", "unsupervised-learning", "elbow-method", "silhouette-score", "customer-segmentation"]
source_folder: machine-learning
ai_drafted: true
---

Use [[K-Means]] to partition $n$ unlabelled points into exactly $K$ clusters by minimising the within-cluster sum of squares (WCSS). It's the default choice for [[Customer Segmentation]] and other [[Unsupervised Learning]] grouping tasks.

1. **Initialise** — randomly place $K$ centroids in feature space.
2. **Assign** — assign each point to the nearest centroid (by [[Euclidean Distance]]).
3. **Update** — move each centroid to the mean of its assigned points.
4. **Repeat** steps 2–3 until assignments stop changing (convergence).

## Common pitfalls

- **You must choose $K$ in advance** — use the [[Elbow Method]] and [[Silhouette Score]] to pick it.
- **Local optima:** K-Means always converges but may land on a local, not global, optimum — run with `n_init=10` (the sklearn default) so it tries 10 random starts and keeps the best.
- **Assumes spherical, equal-size clusters** and is **sensitive to outliers** (means get pulled), so scale features first.

## Worked example

From DS Lecture 5 (the StyleNation segmentation, which lands on $K = 4$):

```python
from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=4, n_init=10, random_state=42)
kmeans.fit(X_scaled)

df["cluster"] = kmeans.labels_
print(df["cluster"].value_counts())
```

See [[Lecture 5 - Clustering and Dimensionality Reduction]] for the full walkthrough.
