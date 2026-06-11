---
title: "Lecture 5 — Clustering & Dimensionality Reduction: Finding Hidden Groups"
week: 5
semester: 2
course: Data Science
instructor: "Daniel Karalnik, Liam Tal"
tags:
  - data-science
  - unsupervised-learning
  - clustering
  - k-means
  - dimensionality-reduction
  - pca
  - scikit-learn
  - customer-segmentation
subject: machine-learning
in_scope: true
---

# Lecture 5 — Clustering & Dimensionality Reduction

> Part of: [[Data Science]]
> Previous: [[Lecture 4 - Regression]] | Next: *(to be added)*
> Key concepts: [[Unsupervised Learning]], [[K-Means]], [[Elbow Method]], [[Silhouette Score]], [[PCA]], [[Curse of Dimensionality]], [[Explained Variance]]

---

## 🎯 The Core Idea

**Unsupervised learning** = finding structure in data with **no labels**. There is no "right answer" to optimise against — the algorithm discovers patterns on its own.

> [!info] Running case study
> *StyleNation* — an online fashion retailer with 800 customers and 9 features: `purchase_frequency`, `avg_order_value`, `discount_usage_rate`, `return_rate`, `browsing_time`, `wishlist_adds`, `loyalty_points`, `months_since_first_purchase`, `email_open_rate`. Goal: identify **natural customer segments** to power targeted marketing.

### Supervised vs. unsupervised

| | **Supervised** | **Unsupervised** |
|---|---|---|
| Labels available? | Yes | No |
| Goal | Predict $y$ | Find structure in $X$ |
| Examples | Regression, Classification | Clustering, PCA |
| Evaluation | MAE, accuracy, F1 | Elbow, silhouette (more subjective) |

---

## 👥 What Is Clustering?

==Clustering== = grouping data points so that points in the same group are **more similar to each other** than to points in other groups. The groups (clusters) are not predefined — the algorithm discovers them.

Why it matters in business:
- **Customer segmentation** — different messaging for different groups
- **Anomaly detection** — points far from any cluster = outliers
- **Data summarisation** — compress 1M rows into 10 representative profiles
- **Pre-processing** — use cluster IDs as features in a downstream model

---

## 📐 Euclidean Distance — The Similarity Measure

K-Means (and most clustering methods) measure similarity by distance. ==Euclidean distance== between two points $\mathbf{a}$ and $\mathbf{b}$ in $p$ dimensions:

$$\boxed{d(\mathbf{a}, \mathbf{b}) = \sqrt{\sum_{j=1}^{p} (a_j - b_j)^2}}$$

> [!warning] Scale before clustering
> If `avg_order_value` ranges from 50–500 and `email_open_rate` ranges from 0–1, distance is completely dominated by order value. **Always StandardScale before K-Means.**

```python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(df.drop(columns=["customer_id"]))
```

---

## 🔵 Finding Groups — K-Means

==K-Means== is the most widely used clustering algorithm. It partitions $n$ points into exactly $K$ clusters by minimising **within-cluster sum of squares (WCSS)**:

$$\text{WCSS} = \sum_{k=1}^{K} \sum_{\mathbf{x} \in C_k} \|\mathbf{x} - \boldsymbol{\mu}_k\|^2$$

where $\boldsymbol{\mu}_k$ is the mean (centroid) of cluster $k$.

### The algorithm — Assign → Update → Repeat

1. **Initialise** — randomly place $K$ centroids in feature space.
2. **Assign** — assign each point to the nearest centroid.
3. **Update** — move each centroid to the mean of its assigned points.
4. **Repeat** steps 2–3 until assignments stop changing (convergence).

```
Iteration 1:   ·  ○  ·   ·  ○  ·        ← assign to nearest centroid
               ·  ↓  ·   ·  ↓  ·
               new centroids (means)

Iteration 2:   reassign...              ← some points switch clusters
               recalculate means...

Converged when no point changes cluster assignment.
```

> [!tip] K-Means always converges
> But it may converge to a local optimum, not the global one. Always run with `n_init=10` (sklearn default) so it tries 10 random starts and keeps the best.

### Code

```python
from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=4, n_init=10, random_state=42)
kmeans.fit(X_scaled)

df["cluster"] = kmeans.labels_
print(df["cluster"].value_counts())
```

### Strengths & weaknesses

| ✅ | ❌ |
|---|---|
| Fast and scalable | Must specify $K$ in advance |
| Simple to implement and interpret | Assumes spherical, equal-size clusters |
| Scales to millions of rows | Sensitive to outliers (means get pulled) |
| Deterministic given random seed | Local optima — run multiple times |

---

## 📊 How Many Clusters? — Elbow & Silhouette

Choosing $K$ is the central challenge of K-Means. Two main tools:

### The Elbow Method

Plot WCSS against $K$ from 1 to ~10. Look for the "elbow" — the point where adding another cluster gives diminishing returns.

```python
import matplotlib.pyplot as plt

wcss = []
K_range = range(1, 11)
for k in K_range:
    km = KMeans(n_clusters=k, n_init=10, random_state=42)
    km.fit(X_scaled)
    wcss.append(km.inertia_)

plt.plot(K_range, wcss, marker="o")
plt.xlabel("Number of clusters K")
plt.ylabel("WCSS (Inertia)")
plt.title("Elbow Method")
plt.xticks(K_range)
plt.show()
```

> [!warning] The elbow is often ambiguous
> The "bend" is frequently a gentle curve rather than a sharp elbow. Use the elbow method together with silhouette score and domain knowledge.

### Silhouette Score

For each point $i$, the silhouette score measures how similar it is to its own cluster vs. the nearest other cluster:

$$s(i) = \frac{b(i) - a(i)}{\max\{a(i),\ b(i)\}}$$

where $a(i)$ = mean distance to other points in the **same cluster**, $b(i)$ = mean distance to points in the **nearest other cluster**.

- $s = 1$: point is well-matched to its cluster and far from others → ideal
- $s = 0$: point is on the boundary between two clusters
- $s = -1$: point would fit better in a neighbouring cluster

```python
from sklearn.metrics import silhouette_score

sil_scores = []
for k in range(2, 11):
    km = KMeans(n_clusters=k, n_init=10, random_state=42)
    labels = km.fit_predict(X_scaled)
    sil_scores.append(silhouette_score(X_scaled, labels))

plt.plot(range(2, 11), sil_scores, marker="o")
plt.xlabel("Number of clusters K")
plt.ylabel("Silhouette Score")
plt.title("Silhouette Scores by K")
plt.show()
```

**Pick $K$ where the silhouette score is maximised** (all else equal).

### StyleNation result: $K = 4$

Both methods pointed to 4 clusters for StyleNation. The elbow bent sharply at $K = 4$ and silhouette was highest there.

---

## 🏷️ Making Sense of Clusters — Profiling

Raw cluster labels (0, 1, 2, 3) are meaningless. You need to **profile** each cluster to understand what it represents.

```python
# Mean of each feature per cluster
profile = df.groupby("cluster").mean(numeric_only=True)
print(profile.round(2))

# Cluster sizes
print(df["cluster"].value_counts().sort_index())
```

Compare each cluster's mean to the dataset mean — features that deviate most define the cluster's character.

### StyleNation segments

| Cluster | Name | Key traits |
|---|---|---|
| 0 | **VIP Loyalists** | High `purchase_frequency`, high `avg_order_value`, high `loyalty_points`, low `return_rate` |
| 1 | **Bargain Hunters** | High `discount_usage_rate`, moderate frequency, very price-sensitive |
| 2 | **Window Shoppers** | High `browsing_time` + `wishlist_adds`, low `purchase_frequency` |
| 3 | **New Enthusiasts** | Low `months_since_first_purchase`, high `email_open_rate`, growing engagement |

> [!tip] Naming clusters
> Names should describe **who these people are and what they do**, not just statistical summaries. Good names help stakeholders act on the analysis — "call the VIP Loyalists first" is more actionable than "focus on cluster 0."

### Business actions per segment

```python
# Tag customers and export
df["segment"] = df["cluster"].map({
    0: "VIP Loyalists",
    1: "Bargain Hunters",
    2: "Window Shoppers",
    3: "New Enthusiasts"
})
df[["customer_id", "segment"]].to_csv("styled_segments.csv", index=False)
```

---

## 🌐 Too Many Dimensions — The Curse of Dimensionality

As the number of features grows, something strange happens to distances:

> [!warning] The Curse of Dimensionality
> In high-dimensional spaces, **all points become almost equally distant from each other**. The "nearest neighbour" is hardly closer than the "farthest neighbour." Distance-based methods (K-Means, KNN) degrade badly. Clustering on 50+ raw features is often unreliable.

Formally: in $p$ dimensions with uniformly distributed points, the ratio of max to min distance converges to 1 as $p \to \infty$.

**Consequences:**
- Distances lose discriminative power — clusters become indistinct
- Models need exponentially more data to stay reliable
- Visualisation becomes impossible

**Solution:** reduce dimensions before clustering.

---

## 🔻 Simplify with PCA

==Principal Component Analysis (PCA)== finds a new coordinate system — the **principal components** — that captures the maximum variance in the data.

### Intuition

Imagine data as a cloud in 3D space. PCA finds the axes along which the cloud is most "spread out":
- **PC1** — the direction of greatest variance
- **PC2** — the direction of second-greatest variance, orthogonal to PC1
- **PC3** — third, orthogonal to both

By keeping only the top $m$ components (where $m \ll p$), we compress the data while retaining most of the information.

### The maths

PCA solves an eigenvalue decomposition of the covariance matrix $\Sigma$:

$$\Sigma \mathbf{v}_k = \lambda_k \mathbf{v}_k$$

- $\mathbf{v}_k$ = eigenvector = direction of principal component $k$ (the **loading vector**)
- $\lambda_k$ = eigenvalue = variance explained by PC $k$

**Explained variance ratio** for component $k$:

$$\text{EVR}_k = \frac{\lambda_k}{\sum_j \lambda_j}$$

**Cumulative explained variance** tells you how many components to keep:

$$\text{Cumulative EVR}(m) = \sum_{k=1}^{m} \text{EVR}_k$$

A common rule: keep enough components to explain **80–95% of total variance**.

```python
from sklearn.decomposition import PCA
import numpy as np

pca = PCA()
pca.fit(X_scaled)

# Scree plot
plt.plot(range(1, len(pca.explained_variance_ratio_) + 1),
         np.cumsum(pca.explained_variance_ratio_), marker="o")
plt.axhline(0.85, linestyle="--", color="red", label="85% threshold")
plt.xlabel("Number of components")
plt.ylabel("Cumulative explained variance")
plt.title("PCA — Scree Plot")
plt.legend()
plt.show()

print(pca.explained_variance_ratio_.round(3))
```

### Applying PCA to reduce dimensions

```python
pca = PCA(n_components=3)     # keep top 3 components
X_pca = pca.fit_transform(X_scaled)
print(f"Shape: {X_pca.shape}")   # (800, 3)
print(f"Variance retained: {pca.explained_variance_ratio_.sum():.1%}")
```

### Interpreting loadings

Each principal component is a **weighted combination of original features**. The loadings matrix tells you how much each original feature contributes to each PC:

```python
loadings = pd.DataFrame(
    pca.components_.T,
    index=feature_names,
    columns=[f"PC{i+1}" for i in range(pca.n_components_)]
)
print(loadings.round(2))
```

Large absolute loadings → that feature strongly defines the component. Sign tells direction (positive = higher feature value → higher PC score).

> [!example] StyleNation PCA interpretation
> - **PC1** had high loadings on `purchase_frequency`, `loyalty_points`, `avg_order_value` → summarises "overall customer value / engagement"
> - **PC2** had high loadings on `discount_usage_rate` and `-avg_order_value` → contrasts discount-seekers against full-price buyers
> - PC1 + PC2 + PC3 explained ~82% of total variance

---

## 🔗 PCA + Clustering in Action

The standard workflow when features are high-dimensional:

```python
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. Scale
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 2. Reduce with PCA
pca = PCA(n_components=3)
X_pca = pca.fit_transform(X_scaled)

# 3. Cluster in reduced space
kmeans = KMeans(n_clusters=4, n_init=10, random_state=42)
df["cluster"] = kmeans.fit_predict(X_pca)

# 4. Visualise in 2D (first two PCs)
import matplotlib.pyplot as plt
plt.scatter(X_pca[:, 0], X_pca[:, 1],
            c=df["cluster"], cmap="tab10", alpha=0.7)
plt.xlabel("PC1")
plt.ylabel("PC2")
plt.title("Clusters in PCA space")
plt.colorbar(label="Cluster")
plt.show()
```

> [!tip] Why cluster on PCA scores rather than raw features?
> 1. Removes noise dimensions that would dilute distance measures.
> 2. Removes multicollinearity — PCA components are orthogonal by construction.
> 3. Enables 2D/3D visualisation (scatter on PC1 vs PC2).

### PCA as a visualisation tool

Even if you cluster on raw features, you can **project into 2D with PCA to visualise** whether clusters are well-separated:

```python
pca_viz = PCA(n_components=2)
coords = pca_viz.fit_transform(X_scaled)
plt.scatter(coords[:, 0], coords[:, 1], c=df["cluster"], cmap="tab10")
```

---

## ⚠️ When PCA Breaks

PCA assumes linear relationships. It fails when:

| Scenario | Why PCA struggles | Alternative |
|---|---|---|
| Clusters on a curved manifold (spiral, ring) | Linear projections can't separate them | UMAP, t-SNE |
| Clusters of very different sizes/densities | Variance maximisation is misleading | DBSCAN |
| Categorical features | PCA uses Euclidean distances — meaningless for categories | MCA, FAMD |
| Outliers dominate | A single extreme point pulls PC1 towards it | Robust PCA, remove outliers first |

> [!warning] PCA does not guarantee cluster separability
> PCA maximises variance globally — it has no knowledge of your cluster structure. The top 2 PCs might happen to separate clusters beautifully, or they might not. Always check.

---

## 🎯 Summary — The Clustering & Dimensionality Reduction Workflow

1. **Frame the problem** — what groups are you looking for? What action will each segment drive?
2. **Scale features** — `StandardScaler` before any distance-based method.
3. **Optionally reduce dimensions** — PCA if you have many features or want to visualise.
4. **Choose K** — Elbow method + silhouette score + domain knowledge.
5. **Run K-Means** — `n_init=10`, `random_state=42`.
6. **Profile clusters** — compute per-cluster means; compare to dataset mean.
7. **Name segments** — descriptive names that translate to business actions.
8. **Validate** — do the segments make intuitive sense? Are they stable across random seeds?

---

## 📎 Related Notes

- Previous: [[Lecture 4 - Regression]]
- Foundational: [[Unsupervised Learning]], [[Feature Scaling]], [[Euclidean Distance]]
- Related: [[K-Means]], [[Elbow Method]], [[Silhouette Score]], [[PCA]], [[Explained Variance]], [[Curse of Dimensionality]], [[Customer Segmentation]]
