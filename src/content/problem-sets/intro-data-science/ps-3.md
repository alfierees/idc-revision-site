---
title: "PS3"
subject: intro-data-science
tags:
  - data-science
  - intro-data-science
  - clustering
  - k-means
  - elbow-method
  - silhouette-score
  - pca
  - customer-segmentation
  - feature-scaling
  - unsupervised-learning
ai_drafted: true
questions:
  - id: "1"
    text: |
      Load the Mall customers dataset (200 rows) and explore it. The `Gender` column stays in the DataFrame for profiling later, but is **not** used as a clustering feature: K-Means uses [[Euclidean Distance]], which does not work meaningfully on categorical variables, and one-hot encoding a single binary feature adds little at this scale. Hint: `kagglehub.dataset_download(...)`, dataset `vjchoudhary7/customer-segmentation-tutorial-in-python`, file `Mall_Customers.csv`. After loading, drop `CustomerID` (it is just a row number).
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      path = kagglehub.dataset_download("vjchoudhary7/customer-segmentation-tutorial-in-python")
      df_mall = pd.read_csv(os.path.join(path, "Mall_Customers.csv"))
      df_mall = df_mall.drop(columns=['CustomerID'])

      print("Shape:", df_mall.shape)
      print(df_mall.info())
      df_mall.head()
      df_mall.describe()
      ```

      **Line by line**

      - `kagglehub.dataset_download(...)` downloads the dataset and returns the local folder path.
      - `pd.read_csv(os.path.join(path, "Mall_Customers.csv"))` joins the folder and filename and loads the CSV into a [[DataFrame]].
      - `.drop(columns=['CustomerID'])` removes the row-number column, since an ID carries no behavioural signal and would distort distances.
      - `.shape`, `.info()`, `.head()` and `.describe()` are the standard first look from [[Exploratory Data Analysis]]: size, types and missing values, first rows, summary statistics.

      **What the notebook's own sanity check expects:** 200 rows, no `CustomerID` column, and the columns `Gender`, `Age`, `Annual Income (k$)` and `Spending Score (1-100)`. Those are the three numeric features plus `Gender`.
    related_terms: ["dataframe", "euclidean-distance", "exploratory-data-analysis", "pandas"]
  - id: "2a"
    text: |
      Explore the data visually before clustering. Look for natural groupings.

      (a) Plot histograms of the three numeric features in one row.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Q2a: histograms of the three numeric features** (see [[Histograms]])

      ```python
      fig, axes = plt.subplots(1, 3, figsize=(14, 4))
      numeric_cols = ['Age', 'Annual Income (k$)', 'Spending Score (1-100)']
      for i, col in enumerate(numeric_cols):
          axes[i].hist(df_mall[col], bins=20, color='steelblue', edgecolor='black')
          axes[i].set_title(col)
          axes[i].set_xlabel(col)
          axes[i].set_ylabel('Count')
      plt.suptitle('Distributions of Numeric Features', fontsize=13)
      plt.tight_layout()
      plt.show()
      ```

      `plt.subplots(1, 3)` makes one row of three panels; the loop draws one 20-bin histogram per feature into its own panel.
    related_terms: ["histograms", "exploratory-data-analysis", "matplotlib"]
  - id: "2b"
    text: |
      (b) Scatter plot of Income vs Spending Score.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Q2b: income vs spending scatter**

      ```python
      plt.figure(figsize=(8, 6))
      plt.scatter(df_mall['Annual Income (k$)'], df_mall['Spending Score (1-100)'],
                  alpha=0.6, color='steelblue', edgecolors='black', linewidths=0.4, s=50)
      plt.xlabel('Annual Income (k$)')
      plt.ylabel('Spending Score (1-100)')
      plt.title('Annual Income vs Spending Score')
      plt.show()
      ```

      `alpha=0.6` makes points semi-transparent so overlapping points show up as darker areas.
    related_terms: ["histograms", "exploratory-data-analysis", "matplotlib"]
  - id: "2c"
    text: |
      (c) Conceptual: can you visually spot natural groupings? Roughly how many? Describe in 2 to 3 sentences.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Q2c: conceptual answer (Alfie)**

      > Yes, you can clearly see around 5 natural groupings. There are clusters in each of the four corners (high income/high spending, high income/low spending, low income/high spending, low income/low spending) and a central blob of average customers sitting in the middle. The four corner groups are quite well separated, which strongly suggests that K=5 will be a good choice.

      > [!tip] Intuition
      > This is the "eyeball first" step: if a 2D scatter already shows blobs, the algorithm has something to find, and your eye gives a prior for $K$. A visual guess is only a hypothesis, so Q5 and Q6 test it numerically. The scatter only shows two of the three clustering features (Age is hidden), which is why Part B revisits the picture.
    related_terms: ["histograms", "exploratory-data-analysis", "matplotlib"]
  - id: "3"
    text: |
      Select the 3 numeric columns for clustering and scale them with `StandardScaler`; convert the result back to a DataFrame. Conceptual: why is scaling mandatory before K-Means? What would happen if Annual Income (in thousands), Spending Score (1 to 100) and Age (18 to 70) stayed on their original scales? Which feature would dominate and why? (2 to 3 sentences.)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      features = ['Age', 'Annual Income (k$)', 'Spending Score (1-100)']
      X = df_mall[features]
      scaler = StandardScaler()
      X_scaled = pd.DataFrame(scaler.fit_transform(X), columns=features)

      X_scaled.describe()      # means near 0, stds near 1
      ```

      **Line by line**

      - `X` keeps only the three numeric columns. `Gender` is excluded (see Q1).
      - `StandardScaler` rescales each column to $z = \dfrac{x - \mu}{\sigma}$, so every feature has mean 0 and standard deviation 1. See [[Feature Scaling]].
      - `fit_transform` learns $\mu$ and $\sigma$ from the data and applies them. It returns a bare NumPy array, so it is wrapped in `pd.DataFrame(..., columns=features)` to keep the column names.
      - The notebook's check asserts shape $(200, 3)$ and column means below 0.01 in absolute value.

      **Conceptual answer (Alfie)**

      > K-Means calculates Euclidean distance between points, so features with larger numerical ranges contribute much more to that distance than features with smaller ranges. Without scaling, Annual Income (which can exceed 100k$) would completely dominate the distance calculation compared to Age (18 to 70) or Spending Score (1 to 100), so the algorithm would essentially cluster on income alone and largely ignore the other two features. StandardScaler fixes this by transforming each feature to have mean 0 and standard deviation 1, giving all three equal influence.

      > [!warning] Overstated, correct core idea
      > The principle (distance-based methods are dominated by large-spread features, and scaling gives each feature equal weight) is right. But the example is overdone. The question's own ranges are Age 18 to 70, Spending Score 1 to 100 and Income in **thousands**, which are the same order of magnitude, so income would **not** "completely dominate" or make the algorithm "cluster on income alone". The honest statement is that the features have *different* spreads, so the one with the widest spread (and Spending Score is close behind Income) pulls harder than Age, and the clustering becomes an artefact of units. The dramatic version is only true when one feature is in much larger units (say income in raw dollars next to age in years). I could not check the actual spreads, since no outputs were saved.

      > [!tip] Intuition
      > $\text{distance}^2 = (\Delta \text{age})^2 + (\Delta \text{income})^2 + (\Delta \text{spending})^2$. Whichever term has the biggest typical differences decides who is "close". After scaling, a difference of "one standard deviation" counts the same in every feature.
    related_terms: ["feature-scaling", "k-means", "euclidean-distance"]
  - id: "4"
    text: |
      Run K-Means with $K=3$ (`KMeans(n_clusters=3, random_state=42, n_init=10)`) and store the labels in a new column of `df_mall`. The notebook then plots a 2D Income vs Spending scatter coloured by cluster, noting that the Age dimension is not shown.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      kmeans3 = KMeans(n_clusters=3, random_state=42, n_init=10)
      df_mall['Cluster_3'] = kmeans3.fit_predict(X_scaled)
      ```

      **Line by line**

      - `n_clusters=3` is the number of centroids to find. `n_init=10` runs 10 random initialisations and keeps the best (lowest inertia), which guards against bad starts. `random_state=42` makes it reproducible.
      - `fit_predict(X_scaled)` fits K-Means on the **scaled** features and returns one label (0, 1 or 2) per customer. Fitting on `X_scaled`, not the raw `X`, is what makes Q3 matter.
      - The labels are stored as a column so they can be used for colouring and profiling.

      > [!tip] Intuition
      > The cluster labels 0, 1, 2 are **arbitrary names**, not an ordering. K-Means has no notion of "cluster 0 is the cheap one".
    related_terms: ["k-means", "n-init", "centroid"]
  - id: "5"
    text: |
      $K=3$ was a guess. Loop over $K = 2$ to $10$, run K-Means for each (`random_state=42`, `n_init=10`) and save `.inertia_`. Plot inertia (within-cluster sum of squares) against $K$ and look for the "elbow" where adding clusters stops helping much. The notebook checks that you have 9 values and that inertia is monotonically decreasing.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      K_range = range(2, 11)
      inertias = []
      for k in K_range:
          km = KMeans(n_clusters=k, random_state=42, n_init=10)
          km.fit(X_scaled)
          inertias.append(km.inertia_)

      plt.plot(list(K_range), inertias, 'bo-', markersize=8)
      plt.xlabel('Number of Clusters (K)')
      plt.ylabel('Inertia')
      plt.title('Elbow Method — Choosing K')
      plt.xticks(list(K_range))
      plt.show()
      ```

      **Line by line**

      - `range(2, 11)` gives $K = 2, 3, \dots, 10$ (nine values, hence the `len == 9` check).
      - `km.inertia_` is the **within-cluster sum of squares**, the total squared distance from each point to its own centroid:

      $$
      \text{inertia} = \sum_{k=1}^{K} \sum_{x_i \in C_k} \lVert x_i - \mu_k \rVert^2
      $$

      - Inertia can only fall as $K$ grows (more centroids means points are never farther from their nearest one), so you do not look for the minimum. You look for the **bend**, where the drop becomes small.

      > [!warning] Result not in the source
      > The notebook has no saved output, so the shape of the elbow curve is not recorded here. Alfie's Q6 answer *claims* a clear elbow at $K=5$ (see Q6); that is his reading, not something I could confirm.
    related_terms: ["elbow-method", "inertia", "k-means"]
  - id: "6"
    text: |
      For each $K$ from 2 to 10 compute `silhouette_score(X_scaled, labels)`. Higher is better; the best $K$ has the highest silhouette. Assign it to `best_k`. Conceptual: based on both the elbow plot and the silhouette scores, what $K$ do you recommend? Do the methods agree? If not, how do you decide? (2 to 3 sentences.)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      K_range = range(2, 11)
      silhouette_scores = []
      for k in K_range:
          km = KMeans(n_clusters=k, random_state=42, n_init=10)
          labels = km.fit_predict(X_scaled)
          score = silhouette_score(X_scaled, labels)
          silhouette_scores.append(score)
      best_k = list(K_range)[silhouette_scores.index(max(silhouette_scores))]

      print(f"Best K (highest silhouette score): {best_k}")
      ```

      **Line by line**

      - Silhouette needs the **labels**, so it uses `fit_predict`, whereas the elbow only needed `.inertia_`.
      - `silhouette_score` averages, over all points, $s(i) = \dfrac{b(i) - a(i)}{\max\{a(i), b(i)\}}$, where $a(i)$ is the mean distance to other points in the point's own cluster and $b(i)$ the mean distance to the nearest other cluster. It lies between $-1$ and $1$; near 1 means tight and well separated. See [[Silhouette Score]].
      - `silhouette_scores.index(max(silhouette_scores))` finds the position of the highest score, and indexing `K_range` with it converts the position back into a $K$ value. (The scores start at $K=2$, so position 0 is $K=2$.)
      - The silhouette is undefined for $K=1$, which is why the loop starts at 2.

      **Conceptual answer (Alfie)**

      > Both the elbow method and the silhouette score agree on K=5 — the inertia curve has a clear elbow at that point and the silhouette score peaks there too. When both methods agree it makes the decision straightforward, but if they disagreed I would lean towards the silhouette score since it gives a more interpretable measure of actual cluster quality (how compact and well-separated the clusters are), rather than just tracking how much inertia decreases.

      > [!warning] Unverified claim, and everything downstream depends on it
      > No outputs were saved, so I cannot confirm that `best_k` was 5 or that both plots agree. This matters because the notebook sets `best_k` **programmatically** (highest silhouette), while Q8 and Q12 hard-code **five** named segments. If the highest silhouette were at a different $K$, the Q7 clusters would not match the five names. When re-running, print `best_k` and the nine scores before trusting Q8 and Q12. The reasoning about preferring silhouette over a gentle elbow is sound and matches [[Lecture 5 - Clustering and Dimensionality Reduction]], which warns that the elbow is often ambiguous.
    related_terms: ["silhouette-score", "k-means"]
  - id: "7"
    text: |
      Run K-Means with the best $K$ (`n_clusters=best_k`, `random_state=42`, `n_init=10`), assign the labels to `df_mall['Cluster']`, and plot the result with the cluster centres marked.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      kmeans_final = KMeans(n_clusters=best_k, random_state=42, n_init=10)
      df_mall['Cluster'] = kmeans_final.fit_predict(X_scaled)

      # Provided plotting code: centres are in scaled space, so convert back
      centers_original = scaler.inverse_transform(kmeans_final.cluster_centers_)
      plt.scatter(centers_original[:, 1], centers_original[:, 2],
                  c='red', marker='X', s=200, edgecolors='black', linewidths=1.5, label='Centers')
      ```

      **Line by line**

      - Same call as Q4, but with `best_k` instead of the guess of 3.
      - `kmeans_final.cluster_centers_` are the centroids in **scaled** units (around 0), which are meaningless on an axis labelled in k$. `scaler.inverse_transform` undoes the standardisation to get centroids in the original units.
      - Columns of the centre array follow the order of `features`: column 0 is Age, 1 is Income, 2 is Spending, so `[:, 1]` and `[:, 2]` are the x and y of the plot.
    related_terms: ["k-means", "centroid"]
  - id: "8a"
    text: |
      Numbers alone do not help marketing. (a) Profile each cluster with `groupby('Cluster')[...].mean()` and cluster sizes.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Q8a: profile table** (see [[Groupby]])

      ```python
      cluster_profiles = df_mall.groupby('Cluster')[['Age', 'Annual Income (k$)', 'Spending Score (1-100)']].mean()
      print(cluster_profiles.round(1))
      print(df_mall['Cluster'].value_counts().sort_index())
      ```

      `groupby('Cluster')` splits the customers by cluster label, `.mean()` averages Age, Income and Spending inside each, and `value_counts().sort_index()` gives how many customers each cluster holds, ordered by label.
    related_terms: ["customer-segmentation", "k-means"]
  - id: "8b"
    text: |
      (b) Show the gender breakdown per cluster, as counts and as proportions.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Q8b: gender breakdown**

      ```python
      gender_counts = df_mall.groupby(['Cluster', 'Gender']).size().unstack(fill_value=0)
      gender_prop = gender_counts.div(gender_counts.sum(axis=1), axis=0)
      ```

      - `groupby(['Cluster', 'Gender']).size()` counts customers per (cluster, gender) pair.
      - `.unstack(fill_value=0)` pivots Gender into columns (and fills empty combinations with 0), giving a Cluster by Gender table.
      - `.div(gender_counts.sum(axis=1), axis=0)` divides each row by its row total, turning counts into within-cluster proportions. The notebook plots counts as grouped bars and proportions as stacked bars.
    related_terms: ["customer-segmentation", "k-means"]
  - id: "8c"
    text: |
      (c) Conceptual: give each cluster a marketing-friendly name and one specific marketing action (1 to 2 sentences each). Also: are the clusters distributed similarly between male and female customers? What might that mean for marketing? (1 to 2 sentences.)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Q8c: conceptual answer (Alfie)**

      | Segment name | Profile | Marketing action |
      | --- | --- | --- |
      | **Budget Shoppers** | Low income, low spending. Price-sensitive, spend carefully. | Discount promotions and double-points loyalty events to encourage more frequent visits. |
      | **Impulsive Buyers** | Low income, high spending. Spend more than income suggests; Alfie guesses younger and trend-driven. | Social media, flash sales and limited-time offers that create urgency. |
      | **Average Shoppers** | Medium income, medium spending. The largest, most general group (his claim). | Cross-selling and upselling, with loyalty perks rewarding slightly higher spend per visit. |
      | **Careful Earners** | High income, low spending. Not convinced the mall is worth spending more at. | Premium brand partnerships and exclusive member events to show quality and value. |
      | **Premium Loyalists** | High income, high spending. The most valuable segment. | VIP programme with personal shopping and early access to new collections. |

      ![](/images/intro-data-science/ps03-q8-segment-map.png)

      **Gender (Alfie):** Some clusters skew more female, particularly the higher-spending ones. KenionPlus could tailor creative content by cluster, using fashion and lifestyle-oriented messaging for the female-skewing high spenders and a more gender-neutral tone for the average and budget segments.

      > [!warning] Claims I could not check, and a gap in the profiling
      > - **The names are not mapped to cluster numbers.** The answer writes "Cluster — Low Income, Low Spending" and so on, but never says which label (0 to 4) is which. Because K-Means labels are arbitrary, the reader has to look at `cluster_profiles` to match them.
      > - The statements "likely younger" (Impulsive Buyers), "largest group" (Average Shoppers) and "higher-spending clusters skew more female" depend on the profile table and gender plots, which were not saved. They are Alfie's reading of the outputs.
      > - Every name uses only Income and Spending, although the clustering used **three** features. A good profile also uses the Age column of `cluster_profiles` (for example, an age-based split of two segments with similar Income and Spending).
      > - A gender skew seen in a cluster of a few dozen customers can be noise; the marketing suggestion on gender is reasonable, but weakly supported without sizes.
    related_terms: ["customer-segmentation", "k-means"]
  - id: "9"
    text: |
      Fit `PCA(n_components=2)` on `X_scaled` and read `.explained_variance_ratio_`. Conceptual: how much of the total variance do the two components capture together? Is any important information lost? If KenionPlus had 15 behavioural features instead of 3, why would PCA become essential? (2 to 3 sentences.) The notebook checks the total is between 0.5 and 1.0.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      pca = PCA(n_components=2)
      pca.fit(X_scaled)
      explained_var = pca.explained_variance_ratio_

      print(f"Variance explained by PC1: {explained_var[0]:.4f} ({explained_var[0]*100:.1f}%)")
      print(f"Variance explained by PC2: {explained_var[1]:.4f} ({explained_var[1]*100:.1f}%)")
      print(f"Total variance explained:  {sum(explained_var):.4f} ({sum(explained_var)*100:.1f}%)")
      ```

      **Line by line**

      - `PCA(n_components=2)` keeps the two directions of greatest variance. PCA is fitted on the **scaled** data, for the same reason as K-Means (otherwise the widest-spread feature dominates the components).
      - `explained_variance_ratio_` is the fraction of total variance each component carries. See [[Explained Variance]].
      - `sum(explained_var)` adds PC1 and PC2 to give the total kept.

      **Conceptual answer (Alfie)**

      > The two principal components together capture roughly 65 to 70 percent of the total variance, meaning a small amount of information (mainly from the third component) is lost in the compression. For a dataset with only 3 features this is acceptable, since the 2D view still captures most of the structure. If KenionPlus had 15 behavioural features, PCA would become essential because many features would likely be correlated (e.g. multiple spending-related measures), you cannot visualise 15 dimensions directly, and reducing to 2 or 3 components would reveal cluster structure while removing noise from redundant features.

      > [!warning] Check: the lower bound is 2/3, so "65 percent" cannot be exact
      > After standardising, the three features each have variance 1, so the total variance is 3 and the three component variances (eigenvalues) add to 3. The two largest eigenvalues must average at least the overall average of 1, so together they carry at least $\tfrac{2}{3} \approx 66.7$ percent of the total:
      >
      > $$
      > \text{PC1} + \text{PC2} \;\ge\; \frac{2}{3} \quad (\text{three standardised features})
      > $$
      >
      > So "roughly 65 to 70 percent" is consistent only if the true value is just above 66.7 percent; a result of 65 percent would be impossible. I could not verify the actual number, since no output was saved. The reasoning in the answer (a third component is dropped; correlated features and un-plottable dimensions make PCA essential at 15 features) is correct.

      > [!tip] Intuition
      > "Lost information" means the variance along PC3 is thrown away. If PC3 were tiny, the 2D picture would be nearly lossless; if the three features are nearly uncorrelated, PCA cannot compress much and the total would sit near the 2/3 floor.
    related_terms: ["pca", "explained-variance", "principal-component", "feature-scaling"]
  - id: "10"
    text: |
      Project the data into PCA space with `pca.transform(X_scaled)` and scatter plot it coloured by the Q7 cluster labels. Conceptual: compare this to the Income-vs-Spending plot from Q7. Do the clusters look cleaner or messier in the PCA view? Why? What did PCA incorporate that the original 2D plot missed? (2 to 3 sentences.)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      X_pca = pca.transform(X_scaled)

      plt.scatter(X_pca[:, 0], X_pca[:, 1], c=df_mall['Cluster'], cmap='viridis', alpha=0.6, s=40)
      plt.xlabel('Principal Component 1')
      plt.ylabel('Principal Component 2')
      plt.title('PCA Visualization of Customer Clusters')
      plt.show()
      ```

      `pca.transform` projects each scaled customer onto the two fitted component axes (shape $(200, 2)$), and the scatter reuses the K-Means labels from Q7 so you can see whether the clusters stay separated in the compressed view.

      **Conceptual answer (Alfie)**

      > The PCA plot tends to look slightly different from the Income-vs-Spending plot because it incorporates the Age dimension that was completely hidden in Q7. The original scatter looked very clean with 5 well-separated corner blobs, but that was partly because Age naturally adds separation along a third axis that the 2D plot ignored. PCA gives a more honest picture of the full 3D structure — both axes are linear combinations of all three features, so any overlap or messiness in the PCA view reflects real ambiguity in the data.

      > [!warning] The core point is right, two statements are shaky
      > Right: PCA axes are linear combinations of **all three** features, so Age is included, which the Income-vs-Spending scatter ignores.
      > - The sentence "the original scatter looked clean because Age adds separation along a third axis that the 2D plot ignored" runs the logic backwards. The clusters were fitted in 3D. Separation that comes from Age is *invisible* in the 2D Income-Spending view, so it would make clusters look **more overlapping** there, not cleaner. A clean-looking 2D plot means Income and Spending already separate the groups well.
      > - "Any messiness in the PCA view reflects real ambiguity" is too strong: PCA keeps only about two thirds of the variance or more (see Q9) and discards PC3, so some overlap can come from the information that PCA dropped, not from real ambiguity.
      > I could not compare the two plots, since the outputs were not saved.
    related_terms: ["pca", "principal-component"]
  - id: "11"
    text: |
      Compare the supervised (regression) and unsupervised (clustering) approaches. (a) What is the fundamental difference, and when do you use each? (b) Regression has R-squared; in clustering there is no R-squared, so how did you evaluate whether the clusters were "good"? (c) Could you use clustering on the insurance dataset from the regression project? What might it reveal, and would it replace or complement a regression model? (4 to 6 sentences in total.)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **(a)** Supervised learning requires labelled data with a known target variable; you use it to predict a specific outcome, for example insurance charges ([[Linear Regression]] from [[Lecture 4 - Regression]]). Unsupervised learning has no labels and no target; you use it to discover hidden structure, such as natural customer groups you did not know in advance.

      **(b)** With no ground truth to compare against, the clusters were judged with the elbow method (watching inertia fall as $K$ increases) and silhouette scores (how compact and well separated the clusters are). A high silhouette is a reasonable proxy for meaningful groupings.

      **(c)** Yes. Clustering the insurance data might reveal groups like "young healthy non-smokers" versus "older smokers with high BMI" with very different cost profiles. It would **complement** regression rather than replace it: the clusters could inform feature engineering or motivate fitting separate regression models per group, potentially improving prediction.

      > [!warning] Minor imprecision in (b)
      > "Points sit close to their own cluster centre and far from neighbouring clusters" is a loose paraphrase. The silhouette compares a point's **mean distance to the other points** in its cluster against its mean distance to the **nearest other cluster**, not to a centroid. Also, both measures are *internal* checks of geometry; whether the segments are useful is judged by profiling them (Q8), which Alfie does not mention in (b). Compare R-squared on a held-out set ([[R-Squared]]) with the lack of any such external benchmark here.

      > [!tip] Intuition
      > Supervised = a teacher with the answers ("predict charges"). Unsupervised = no teacher, so "good" has to be defined by internal geometry plus whether the result is *useful*.
    related_terms: ["supervised-learning", "unsupervised-learning", "r-squared", "linear-regression", "silhouette-score", "elbow-method"]
  - id: "12"
    text: |
      Write a short summary paragraph for KenionPlus (5 to 8 sentences): how many customer segments did you find, describe them with your names, which segments are the biggest business opportunity, and what is your number-one marketing recommendation?
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > Our analysis of the KenionPlus loyalty data identified 5 distinct customer segments using K-Means clustering. These are: Budget Shoppers (low income, low spending), Impulsive Buyers (low income, surprisingly high spending), Average Shoppers (medium income, medium spending), Careful Earners (high income, low spending), and Premium Loyalists (high income, high spending). The biggest immediate opportunity lies in the Premium Loyalists: they already have both the means and the willingness to spend, so a VIP loyalty programme would deepen this relationship and protect KenionPlus's most valuable revenue stream. However, the Careful Earners represent a significant untapped opportunity: they earn well but currently spend little, suggesting the mall has not yet demonstrated enough value for them. Our #1 recommendation is to launch a tiered loyalty programme that rewards Premium Loyalists with exclusive perks while using targeted premium-brand events to convert Careful Earners into higher spenders. These two high-income groups together represent the largest revenue upside available to KenionPlus.

      > [!tip] Intuition
      > A good client summary answers four things in plain language: how many segments, who they are, where the value is, what to do first. The answer does each, and it names one action rather than five.

      > [!warning] Evidence gap
      > The final claim ("largest revenue upside") is not backed by any number: no segment sizes or average spend are quoted, and the outputs were not saved. The paragraph is five sentences, at the bottom of the 5 to 8 range. Its "5 segments" rests on the unverified `best_k` from Q6.
    related_terms: ["customer-segmentation", "k-means"]
---

*Related: [[Lecture 5 - Clustering and Dimensionality Reduction]], [[Lecture 2 - EDA and Charts]], [[Lecture 4 - Regression]], [[Lecture 3 - Classification, KNN, Random Tree]]*

> [!info] Source
> Questions: **HW3, Clustering & Dimensionality Reduction** (Spring 2026), notebook `alfie.rees_hw3.ipynb`. The worked solution is **Alfie's own submitted answers**, *not* an official answer key. The notebook was saved **without any cell outputs**, so no numeric result (cluster sizes, silhouette values, variance ratios) is quoted below unless Alfie wrote it in his own answer. Where a result is only claimed in his prose, it is marked as his claim.

## What This Problem Set Is About

A retail chain with shopping malls has 200 loyalty-card holders and asks: *who are our customer types, and how should we market to each?* There is **no target variable**, so this is [[Unsupervised Learning]]: the algorithm finds structure and you give it meaning.

![](/images/intro-data-science/ps03-q12-workflow.png)

> [!info] The recipe
> 1. **Explore** the data and look for visible groups (Q1, Q2).
> 2. **Scale** the features, because K-Means is distance based (Q3).
> 3. **Cluster** with [[K-Means]], first with a guess of $K=3$, then with a $K$ chosen by the [[Elbow Method]] and [[Silhouette Score]] (Q4 to Q7).
> 4. **Profile** each cluster in business terms (Q8).
> 5. **Compress with [[PCA]]** to get an honest 2D picture of all three features (Q9, Q10).
> 6. **Reflect** and write the client summary (Q11, Q12).

**Setup cell** (given, not to be modified):

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import kagglehub
import os
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.decomposition import PCA
```

**Grading split:** Part A (Q1 to Q8, clustering) 65 percent, Part B (Q9 to Q12, PCA and reflection) 35 percent.

## Part B: PCA, Reflection and Synthesis

In Q4 and Q7 the 2D scatter shows Income and Spending, but the clustering used **three** features. [[PCA]] compresses all three into two new axes that capture as much of the variance as possible, giving an honest 2D picture.

## Quick Revision Checklist

- [ ] Why scale before K-Means and PCA? (distance and variance are unit-dependent)
- [ ] Exclude `Gender` from K-Means (categorical, Euclidean distance)
- [ ] Elbow uses `.inertia_` (from `fit`); silhouette needs labels (from `fit_predict`) and starts at $K=2$
- [ ] Centroids from `cluster_centers_` are in scaled units: `inverse_transform` before plotting
- [ ] Cluster labels are arbitrary: profile with `groupby('Cluster').mean()` to name them
- [ ] PCA on 3 standardised features keeps at least $2/3$ of variance with 2 components
- [ ] Clustering **complements** regression (segments, feature engineering), it does not replace it
