---
title: "PS5"
subject: intro-data-science
source_doc: /papers/intro-data-science/ps-5-recitation-5.ipynb
tags:
  - data-science
  - intro-data-science
  - recitation
  - clustering
  - k-means
  - pca
  - unsupervised-learning
  - customer-segmentation
ai_drafted: true
questions:
  - id: "1"
    text: |
      **The full pipeline.**

      Write the complete clustering + PCA pipeline as a single code block (do not run K-selection; assume K=4). It should:
      1. scale features,
      2. run K-Means with K=4,
      3. run PCA with 2 components,
      4. create the scatter plot (coloured by cluster, labelled axes).

      This is the "recipe" you would reuse on any new dataset.
    solution: |
      ```python
      # --- Full Clustering + PCA Pipeline ---

      # Step 1: Scale features
      scaler = StandardScaler()
      X_scaled = scaler.fit_transform(X)

      # Step 2: K-Means clustering
      kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
      labels = kmeans.fit_predict(X_scaled)

      # Step 3: PCA for visualization
      pca = PCA(n_components=2)
      X_pca = pca.fit_transform(X_scaled)

      # Step 4: Scatter plot
      plt.figure(figsize=(10, 7))
      plt.scatter(X_pca[:, 0], X_pca[:, 1],
                  c=labels, cmap="Set2", alpha=0.6,
                  edgecolor="gray", s=50)
      plt.xlabel(f"PC1 ({pca.explained_variance_ratio_[0]:.0%} variance)")
      plt.ylabel(f"PC2 ({pca.explained_variance_ratio_[1]:.0%} variance)")
      plt.title("Customer Segments in PCA Space")
      plt.colorbar(label="Cluster")
      plt.show()
      ```

      What each step does:

      1. **Scale** so no feature dominates the distance.
      2. **K-Means on the scaled data** (not on the PCA output): the clusters come from all 8 features.
      3. **PCA** is only used to squash the same scaled data into 2 coordinates for plotting.
      4. **Scatter** the 2 PCA coordinates, colour by the K-Means label, and put the explained-variance share in each axis label so readers know how much was compressed away.

      > [!tip] Intuition
      > Clustering and PCA are independent. Clustering decides *who belongs together*; PCA only decides *where to draw them on paper*. That is why PCA overlap does not mean the clusters are wrong.

      > [!success] Answer
      > Scale, then `KMeans(n_clusters=4)`, then `PCA(n_components=2)`, then scatter PC1 vs PC2 coloured by the K-Means labels. The recipe is `scaler.fit_transform`, `fit_predict`, `fit_transform`, plot.
    related_terms: ["k-means", "pca", "feature-scaling", "explained-variance", "unsupervised-learning", "scikit-learn-pipeline", "matplotlib"]
---

## Recitation walkthrough

### Scale first (mandatory)

```python
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from sklearn.metrics import silhouette_score

X = df.drop(columns="subscriber_id")
scaler = StandardScaler()
X_scaled = pd.DataFrame(scaler.fit_transform(X), columns=X.columns, index=X.index)
```

`monthly_data_gb` has a much wider range than the others; unscaled, it would dominate every distance calculation in [[K-Means]]. After scaling every feature has mean about 0 and standard deviation about 1.

### K-Means

```python
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
df["cluster"] = kmeans.fit_predict(X_scaled)
print(kmeans.inertia_)     # within-cluster sum of squared distances
```

K-Means repeats: assign each point to the nearest centroid, move each centroid to its group's mean, until stable. **You** choose K.

### Choosing K: elbow and silhouette

```python
inertias, sil_scores = [], []
for k in range(2, 11):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = km.fit_predict(X_scaled)
    inertias.append(km.inertia_)
    sil_scores.append(silhouette_score(X_scaled, labels))
```

The notebook's takeaway: **both methods point to K=4**: the [[Elbow Method]] curve bends at 4 and the [[Silhouette Score]] peaks at 4. If the marketing team can only run 3 campaigns, K=3 is mathematically worse but you can merge the two most similar segments: **business constraints override the maths**, but document the trade-off. K is a business decision aided by maths.

### Profiling and naming clusters

```python
profiles = df.groupby("cluster")[X.columns.tolist()].mean().round(1)   # on the ORIGINAL scale
profiles["size"] = df["cluster"].value_counts().sort_index()
```

| Segment | Profile (notebook's takeaway) | Marketing action |
|---|---|---|
| **Data Junkies** (~130) | High data, high app sessions, low voice and SMS | Unlimited data upgrade, streaming partnerships |
| **Traditional Callers** (~120) | High voice, international and SMS; low data and app; long tenure | International bundles, family plans |
| **Budget Minimalists** (~150) | Low everything, lowest bills, short tenure, most support calls | Simple cheap plans, less support friction, loyalty rewards |
| **Power Users** (~100) | High across the board, highest bills, long tenure, fewest support calls | VIP support, early access, "thank you" perks |

### PCA: 8 features to 2 axes

```python
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
print(pca.explained_variance_ratio_)

pca_full = PCA().fit(X_scaled)
cumvar = pca_full.explained_variance_ratio_.cumsum()        # how many components do we need?

loadings = pd.DataFrame(pca.components_, columns=X.columns, index=["PC1", "PC2"]).round(2)
```

- **PC1** loads positively on minutes, SMS, bill, account age and international minutes, and negatively on support calls: an **"Overall Usage / Value"** axis.
- **PC2** loads positively on data and app sessions: a **"Digital vs Traditional"** axis.
- Two components are fine for **visualisation**; for analysis use the cumulative-variance plot (the notebook draws an 80% line) to choose more. See [[Explained Variance]].

> [!warning] Caveats the notebook stresses
> - If two clusters overlap on the 2D PCA plot they may still be separated in the full 8D space, because 2 components do not explain 100% of the variance. Use the 2D plot for **visualisation, not decisions**; go back to the profile table.
> - K-Means will **always** find K groups, even in random noise. The segments are a starting hypothesis, not ground truth.

*Related: [[Lecture 5 - Clustering and Dimensionality Reduction]] | [[Lecture 4 - Regression]] | [[Data Science]]*
