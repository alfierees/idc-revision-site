---
title: "PS2"
subject: intro-data-science
tags:
  - data-science
  - intro-data-science
  - regression
  - linear-regression
  - polynomial-regression
  - ridge-lasso
  - cross-validation
  - eda
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Load and inspect the insurance dataset.** Load the insurance dataset using `kagglehub` and explore its basic properties. This is the same EDA workflow you followed in HW1: load, inspect, understand. (Dataset identifier `mirichoi0218/insurance`, file `insurance.csv`. Display the shape, then `df_ins.info()` and `df_ins.describe()`.)

      *Setup cell used for the whole notebook:*

      ```python
      pip install -q kagglehub

      import pandas as pd
      import numpy as np
      import matplotlib.pyplot as plt
      import seaborn as sns
      import kagglehub
      import os
      from sklearn.model_selection import train_test_split, cross_val_score
      from sklearn.linear_model import LinearRegression, Ridge, Lasso
      from sklearn.preprocessing import PolynomialFeatures
      from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
      ```
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!warning] No saved results
      > The saved notebook has **no outputs** apart from a failed setup cell (`ModuleNotFoundError: No module named 'pandas'`), and the dataset is not in the folder. So this page never quotes a computed number that is not written in Alfie's own markdown answers. Where a figure appears (for example "R² about 0.75"), it is Alfie's stated figure. The only other numbers used are ones that follow from arithmetic or from the notebook's own auto-check assertions (shapes, row counts).

      > [!bug] Setup cell failed in the saved file
      > The saved notebook shows `ModuleNotFoundError: No module named 'pandas'` on the setup cell, so it was saved from an environment without the libraries. Nothing downstream has a saved output. The setup code itself is standard, and the cells' auto-checks describe the expected shapes.

      **Approach.** `kagglehub.dataset_download()` returns the *folder* where the data was cached, not the CSV path. So download first, then point `pd.read_csv` at `insurance.csv` inside that folder. `os.path.join` is safer than hard-coding a slash.

      ```python
      # Download dataset: kagglehub returns the path to the folder containing the file
      path = kagglehub.dataset_download("mirichoi0218/insurance")

      # Read the CSV file from that folder
      df_ins = pd.read_csv(os.path.join(path, "insurance.csv"))

      print("Shape:", df_ins.shape)
      df_ins.head()
      ```

      Then `df_ins.info()` (column types and non-null counts) and `df_ins.describe()` (count, mean, spread and quartiles of the numeric columns).

      > [!success] Result
      > The notebook's own auto-check asserts `df_ins.shape == (1338, 7)`: 1,338 rows and 7 columns. The `info()` and `describe()` outputs were not saved, so no further numbers are quoted.

      Teaching: [[Lecture 2 - EDA and Charts]] (the pandas survival kit: `head`, `info`, `describe`), [[DataFrame]], [[Exploratory Data Analysis]].
    related_terms: ["dataframe", "pandas", "exploratory-data-analysis", "summary-statistics"]
  - id: "2"
    text: |
      **Missing values and the target distribution.** Check for missing values and visualise the distribution of `charges` (our target variable). Even when you expect clean data, always verify.

      **Conceptual:** The insurance dataset has zero missing values. Does that mean we can skip the data quality step in real projects? Why is checking for missing values always the first thing you do? (2 to 3 sentences)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Approach.** `.isna().sum()` gives a per-column count, which says *where* any gaps are (more useful than one overall total). For the target, a histogram with 30 bins is enough resolution to spot whether `charges` is symmetric or skewed. Alfie expected right-skew "because of the smoker effect".

      ```python
      # Count missing values column by column
      missing_ins = df_ins.isna().sum()
      print("Missing values per column:")
      print(missing_ins)
      print(f"\nTotal missing: {missing_ins.sum()}")

      # Histogram of the target
      plt.figure(figsize=(8, 5))
      plt.hist(df_ins['charges'], bins=30, edgecolor='black', color='steelblue')
      plt.xlabel('Charges ($)')
      plt.ylabel('Frequency')
      plt.title('Distribution of Insurance Charges')
      plt.tight_layout()
      plt.show()
      ```

      > [!success] Result
      > The auto-check asserts `missing_ins.sum() == 0`, so there are no missing values. The histogram was not saved; the right-skew is Alfie's expectation in his own notes, not a saved result.

      **Conceptual answer.** Even though this dataset came clean, real datasets often hide silent problems: **sentinel values** like `-1` or `999`, empty strings that different loaders import as `NaN` differently, or columns where missingness was already filled in incorrectly. `.isna().sum()` takes seconds and protects every downstream step (encoding, modelling, evaluation), so do it every time. Skipping it only means errors surface later, in places that are much harder to diagnose.

      > [!tip] Intuition
      > `.isna()` only finds *declared* gaps. A sentinel like `999` in `age` is not `NaN`, so a zero count from `.isna().sum()` does not prove the data is clean. That is why Alfie's answer pairs the check with a look at `describe()` (impossible minimums or maximums).

      Teaching: [[Missing Values]], [[Outliers]], [[Histograms]], [[Lecture 2 - EDA and Charts]].
    related_terms: ["missing-values", "sentinel-value", "outliers", "histograms"]
  - id: "3"
    text: |
      **Feature-target relationships.** Create visualisations to understand how each feature relates to charges. This helps you build intuition before modelling: which features will be useful predictors?

      **Conceptual:** Based on these four plots, which feature appears to have the strongest relationship with charges? Do you notice anything unusual in the age-vs-charges scatter plot (look for separate "lanes" or groups of points)? What might explain this pattern? (3 to 4 sentences)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Approach.** A 2 by 2 grid shows all four relationships at once. **Scatter plots** fit the two numeric features (`age`, `bmi`); **box plots** fit the two categoricals (`smoker`, `region`) because they show median, interquartile range and outliers per group. Alpha 0.5 on the scatters stops overlapping points hiding each other.

      ```python
      fig, axes = plt.subplots(2, 2, figsize=(12, 9))

      # Scatter: age vs charges
      axes[0, 0].scatter(df_ins['age'], df_ins['charges'], alpha=0.5, color='steelblue')
      axes[0, 0].set_xlabel('Age'); axes[0, 0].set_ylabel('Charges ($)')
      axes[0, 0].set_title('Age vs Charges')

      # Scatter: bmi vs charges
      axes[0, 1].scatter(df_ins['bmi'], df_ins['charges'], alpha=0.5, color='darkorange')
      axes[0, 1].set_xlabel('BMI'); axes[0, 1].set_ylabel('Charges ($)')
      axes[0, 1].set_title('BMI vs Charges')

      # Box: smoker vs charges
      sns.boxplot(x='smoker', y='charges', data=df_ins, ax=axes[1, 0])
      axes[1, 0].set_title('Smoker vs Charges')

      # Box: region vs charges
      sns.boxplot(x='region', y='charges', data=df_ins, ax=axes[1, 1])
      axes[1, 1].set_title('Region vs Charges')

      plt.tight_layout()
      plt.show()
      ```

      **Conceptual answer.** The strongest relationship is with **`smoker`**. Reading the box plots, Alfie describes non-smokers as clustering around roughly \$5k to \$10k and smokers mostly at \$20k to \$40k, with very little overlap between the two boxes.

      In the age-vs-charges scatter there are **two or three roughly parallel "lanes"** of points, all rising with age. The bottom lane is non-smokers and the upper lane(s) are smokers (split further by BMI). So age affects charges roughly linearly, but **which lane you sit on is set by smoking status**, which is why `smoker` does most of the predictive work. Region looks almost like noise: the box plots are nearly identical across the four regions.

      > [!warning] Figures are Alfie's reading of plots that are not saved
      > The dollar ranges and the "lanes" are his description of the charts as he saw them when he ran the notebook. The saved file has no figure output, so the ranges cannot be confirmed. They are consistent with the story the later modelling cells assume (a large `smoker` effect, a weak `region` effect), but treat the dollar values as approximate.

      > [!tip] Intuition
      > The lanes are a **hidden categorical variable** showing up inside a numeric plot. One straight line through all the points would average across lanes and fit none of them well. A regression with a `smoker` column gives each lane its own intercept, which is exactly what Q8 does.

      Teaching: [[Lecture 2 - EDA and Charts]] (the six chart types, box plots, [[Boxplots]]), and why you plot before modelling.
    related_terms: ["boxplots", "seaborn", "matplotlib", "exploratory-data-analysis", "confounding-variable"]
  - id: "4"
    text: |
      **Correlation analysis.** Compute the correlation matrix for numeric features. Remember: correlation only captures *linear* relationships between *numeric* variables; it can miss important patterns.

      **Conceptual:** Which numeric feature has the highest correlation with charges? Is correlation capturing the full picture? (Hint: think about `smoker`, which is categorical and does not appear in the correlation matrix.) (2 to 3 sentences)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Approach.** `select_dtypes(include='number')` keeps only numeric columns: Pearson correlation is not defined for strings, and `.corr()` on the raw frame would either error or silently drop them depending on the pandas version. The result is a 4 by 4 matrix (`age`, `bmi`, `children`, `charges`).

      ```python
      corr_matrix = df_ins.select_dtypes(include='number').corr()

      plt.figure(figsize=(7, 5))
      sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', fmt='.2f')
      plt.title('Correlation Matrix: Numeric Features')
      plt.tight_layout()
      plt.show()
      ```

      The auto-check asserts `corr_matrix.shape == (4, 4)`.

      **Conceptual answer.** Among the numeric features, **`age` has the highest correlation with charges (Alfie states about 0.30), with `bmi` second**. But correlation only works on numeric columns and only picks up *linear* relationships, so **`smoker`**, which the box plot showed has a much bigger effect than any numeric feature, is **invisible** in the matrix. Relying on the correlation matrix alone would point to the wrong predictor as the most important one.

      > [!warning] The 0.30 is unverified
      > "About 0.30" is the figure in Alfie's own answer; the heatmap output was not saved, so it cannot be checked. The qualitative point (a modest numeric correlation, with the dominant driver being a categorical column the matrix cannot see) is the part that matters.

      > [!tip] Intuition
      > The correlation coefficient is $r = \dfrac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y}$ and measures only straight-line association. A binary feature that shifts the whole level of the target (smoker or not) can matter far more than a numeric feature with a weak slope, and it only enters the matrix once it is encoded as 0 and 1 (Q5).

      Teaching: [[Lecture 2 - EDA and Charts]], [[Lecture 4 - Regression]].
    related_terms: ["seaborn", "matplotlib", "correlation-vs-causation", "multicollinearity", "exploratory-data-analysis"]
  - id: "5"
    text: |
      **Encode categorical variables.** Before we can feed the data into a regression model, we need to convert categorical columns to numbers. You did this in HW1 with `pd.get_dummies()`: same idea here.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Approach.** `pd.get_dummies(..., drop_first=True)` one-hot encodes every object column and **drops one level per variable** to avoid the *dummy-variable trap* (perfect multicollinearity, which makes linear-regression coefficients unidentifiable). `sex` and `smoker` go from 2 categories to 1 binary column each; `region` goes from 4 categories to 3.

      ```python
      # drop_first=True avoids perfect multicollinearity between the dummy columns
      df_ins_encoded = pd.get_dummies(df_ins, drop_first=True)

      print("Columns after encoding:")
      print(df_ins_encoded.columns.tolist())
      print(f"\nShape: {df_ins_encoded.shape}")
      ```

      > [!success] Result
      > The auto-check asserts **9 columns** and no remaining object columns.

      Counting the 9 columns explicitly: `age`, `bmi`, `children`, `charges`, `sex_male`, `smoker_yes`, `region_northwest`, `region_southeast`, `region_southwest`. That is 4 numeric (including the target) + 1 + 1 + 3 = **9**. The **8 feature columns** (everything except `charges`) are what the models see from Q6 onward.

      > [!tip] Intuition
      > With `drop_first=True` the dropped level becomes the **baseline**. Each remaining coefficient then reads as "the change in charges relative to the baseline", for example `smoker_yes` is smoker versus non-smoker, and each `region_*` column is that region versus the dropped one.

      Teaching: [[One-Hot Encoding]], [[Lecture 4 - Regression]] (the multiple-regression section, "handle categorical columns"), [[Lecture 3 - Classification, KNN, Random Tree]] (where encoding was first used).
    related_terms: ["one-hot-encoding", "dummy-variable-trap", "multicollinearity", "pandas"]
  - id: "6"
    text: |
      **Define features and split.** Separate the features (X) from the target (y) and split into training and test sets. Same logic as HW1: we never test on training data. (Use `test_size=0.2`, `random_state=42`.)

      **Conceptual:** Why is it critical to evaluate your model on data it has never seen during training? What would happen if you tested on your training data? (2 to 3 sentences)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Approach.** Drop `charges` from the feature matrix so the model can never see the target as an input (that would be **data leakage**), and fix `random_state=42` so the split is reproducible.

      ```python
      # Features = everything except the target
      X_ins = df_ins_encoded.drop(columns='charges')
      y_ins = df_ins_encoded['charges']

      # 80/20 split, fixed seed for reproducibility
      X_train, X_test, y_train, y_test = train_test_split(
          X_ins, y_ins, test_size=0.2, random_state=42
      )
      ```

      > [!success] Result
      > The auto-check asserts **1,070 training rows and 268 test rows** (an 80/20 split of 1,338; $0.2 \times 1338 = 267.6$, which scikit-learn rounds up to 268 for the test set).

      **Conceptual answer.** Testing on the training data tells you how well the model can **memorise**, not how well it **generalises**, and the whole point of an insurance pricing model is to do well on *new* customers it has never seen. If we evaluated on the training set, an overfit model could look excellent while actually failing in production. A held-out test set gives an honest estimate of real-world performance.

      Teaching: [[Train Test Split]], [[Lecture 3 - Classification, KNN, Random Tree]] and [[Lecture 4 - Regression]].
    related_terms: ["train-test-split", "data-leakage", "overfitting"]
  - id: "7"
    text: |
      **Simple linear regression (one feature).** Start with the simplest possible model: predict charges using only `age`. This gives you a baseline to beat.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Approach.** A one-feature baseline shows whether later, more complex models genuinely add value or just add parameters. Alfie reports three metrics:

      | Metric | Reads as | Why report it |
      |---|---|---|
      | **MAE** | average absolute dollar error | easy to explain to a business |
      | **RMSE** | root of the mean squared error | penalises big errors more; useful when undercharging is costly |
      | **$R^2$** | proportion of variance explained | comparable across models |

      ```python
      simple_model = LinearRegression()
      simple_model.fit(X_train[['age']], y_train)   # double brackets keep it a DataFrame

      y_pred_simple = simple_model.predict(X_test[['age']])

      mae_simple  = float(mean_absolute_error(y_test, y_pred_simple))
      rmse_simple = float(np.sqrt(mean_squared_error(y_test, y_pred_simple)))
      r2_simple   = float(r2_score(y_test, y_pred_simple))
      ```

      > [!success] What the sources support
      > The auto-check asserts `0.0 < r2_simple < 0.3`: a single-feature model is expected to explain only a small share of the variance. Alfie's later answer (Q8) quotes the baseline as "about 0.10". The actual MAE, RMSE and $R^2$ printouts were not saved.

      Teaching: [[Linear Regression]], [[OLS]], [[R-Squared]], [[RMSE]] in [[Lecture 4 - Regression]] (simple linear regression and the error-metrics sections).
    related_terms: ["linear-regression", "ols", "r-squared", "rmse", "mae"]
  - id: "8"
    text: |
      **Multiple linear regression (all features).** Now use all available features. More information should mean better predictions: let's see by how much.

      **Conceptual:** $R^2$ jumped significantly from simple to multiple regression. What does this tell you about the importance of using multiple features? Is an $R^2$ of about 0.75 "good enough" for an insurance pricing model? What are the business implications of prediction errors? (3 to 4 sentences)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Approach.** Same pattern, but pass the whole encoded feature matrix. The expected jump comes from `smoker_yes`: Q3's box plot showed it dominates charges, and now the model can use it.

      ```python
      multi_model = LinearRegression()
      multi_model.fit(X_train, y_train)

      y_pred_multi = multi_model.predict(X_test)

      mae_multi  = float(mean_absolute_error(y_test, y_pred_multi))
      rmse_multi = float(np.sqrt(mean_squared_error(y_test, y_pred_multi)))
      r2_multi   = float(r2_score(y_test, y_pred_multi))
      ```

      The auto-check asserts `r2_multi > r2_simple` and `0.7 <= r2_multi <= 0.85`.

      **Conceptual answer.** The big jump from about 0.10 to about 0.75 shows that **age alone misses most of the signal**: `smoker`, `bmi` and `children` carry most of the explanatory power, and the model can only use that information once those features are included. An $R^2$ of about 0.75 captures the broad patterns but leaves about a quarter of the variance unexplained, which on individual customers means errors of thousands of dollars (the MAE shows this). For a pricing model that is risky both ways: **undercharging** high-cost customers eats directly into HealthFirst's margin, and **overcharging** low-cost customers drives them to a cheaper competitor. So a "decent" $R^2$ can still have material business impact.

      > [!warning] Two claims in the answer to double-check
      > 1. **"`smoker`, `bmi` and `children` carry most of the explanatory power."** Alfie's own Q3 and Q4 answers say `smoker` dominates; `children` is the feature least supported by his earlier analysis (it is not even mentioned as a driver there). Without the fitted coefficients (not saved) it cannot be confirmed. Safer wording: *smoker (plus bmi) carries most of the signal; children and the region dummies add little.*
      > 2. **"The MAE shows this."** The MAE value was not saved, so "errors of thousands of dollars" is an expectation, not a quoted result.
      >
      > The ~0.10 and ~0.75 figures are Alfie's, and sit inside the auto-check ranges (below 0.3 for the baseline, 0.7 to 0.85 for the full model), so they are plausible, but they were not saved.

      > [!tip] Intuition
      > $R^2 = 1 - \dfrac{SS_{res}}{SS_{tot}}$ is the share of the target's variance explained. "0.75" means three quarters of the variation is accounted for and one quarter is residual noise the model cannot predict. For pricing, the *shape* of the errors (who is under- or over-charged) matters as much as the average.

      Teaching: [[Lecture 4 - Regression]] (multiple linear regression, error metrics), [[R-Squared]], [[Linear Regression]].
    related_terms: ["linear-regression", "r-squared", "mae", "rmse", "one-hot-encoding"]
  - id: "9"
    text: |
      **Polynomial regression, power and danger.** Linear regression assumes straight-line relationships. Polynomial features let the model capture curves and interactions, but too much flexibility leads to overfitting.

      **Heads up (from the sheet):** In step 2 (degree 5), the model generates over 1,200 features from only about 1,070 training samples. Don't be alarmed if the test $R^2$ is wildly negative: that means the predictions are worse than guessing the average.

      **Conceptual:** Compare the degree-5 model's $R^2$ on training data versus test data. What do you observe? What is this phenomenon called, and why is it dangerous in a real business setting? (2 to 3 sentences)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Step 1: degree 2.** `PolynomialFeatures` adds squared terms and pairwise interactions (for example `age * bmi`, `bmi^2`) so the linear model can bend and interact. Critically, **`fit_transform` on the training data only, then `transform` (not `fit_transform`) on the test data**, otherwise the test set leaks into feature building.

      ```python
      poly2 = PolynomialFeatures(degree=2, include_bias=False)
      X_train_poly2 = poly2.fit_transform(X_train)   # fit on train only
      X_test_poly2  = poly2.transform(X_test)        # transform test using train's parameters

      poly2_model = LinearRegression()
      poly2_model.fit(X_train_poly2, y_train)

      y_pred_poly2 = poly2_model.predict(X_test_poly2)
      r2_poly2 = float(r2_score(y_test, y_pred_poly2))
      ```

      > [!tip] Feature counts (worked by arithmetic)
      > A degree-$d$ expansion of $p$ original features without the bias column has $\binom{p+d}{d} - 1$ columns. With $p = 8$:
      >
      > $$\text{degree 2: } \binom{10}{2} - 1 = 44, \qquad \text{degree 5: } \binom{13}{5} - 1 = 1286$$
      >
      > So 8 features balloon to 44 at degree 2 and to 1,286 at degree 5, which is the "over 1,200 features" the sheet warns about, against only 1,070 training rows.

      **Step 2: degree 5, the overfitting demo.** Push the degree way too high to see what happens when the model has **more parameters than training rows**. Compute $R^2$ on *both* sets to expose the gap.

      ```python
      poly5 = PolynomialFeatures(degree=5, include_bias=False)
      X_train_poly5 = poly5.fit_transform(X_train)
      X_test_poly5  = poly5.transform(X_test)

      poly5_model = LinearRegression()
      poly5_model.fit(X_train_poly5, y_train)

      r2_poly5_train = float(r2_score(y_train, poly5_model.predict(X_train_poly5)))
      r2_poly5_test  = float(r2_score(y_test,  poly5_model.predict(X_test_poly5)))

      print(f"Degree-5 Polynomial Features: {X_train_poly5.shape[1]}")
      print(f"  Training R²: {r2_poly5_train:.4f}")
      print(f"  Test R²:     {r2_poly5_test:.4f}")
      print(f"  Gap:         {r2_poly5_train - r2_poly5_test:.4f}")
      ```

      The auto-check asserts `r2_poly5_train > r2_poly5_test`.

      **Conceptual answer.** Training $R^2$ is essentially perfect while the test $R^2$ **collapses to a large negative number**: the model has memorised the training rows but predicts nonsense for anything new. This is **overfitting**, made worse here by having more polynomial features than training rows. If HealthFirst deployed it, premiums would look fine for customers who happened to resemble the training set and be absurd for everyone else, leading to lost customers, regulatory exposure and direct financial loss.

      ![](/images/intro-data-science/ps02-q9-overfitting-schematic.png)

      > [!tip] Intuition
      > Figure: a **schematic on made-up toy data**, not the insurance data. More flexibility lets the curve chase every training point (right panel), including the noise, so it swings wildly between and beyond them. That is what a test $R^2$ far below zero looks like in practice.
      >
      > A test $R^2$ below 0 means the model does worse than the constant "always predict the training mean". This follows from $R^2 = 1 - SS_{res}/SS_{tot}$: when the residual sum of squares exceeds the spread around the mean, the ratio is above 1.

      > [!warning] Numbers not saved
      > Neither the degree-2 test $R^2$ nor the degree-5 train and test values were saved, so "essentially perfect" and "large negative" are Alfie's description of what the cell printed, consistent with the sheet's warning. The auto-check only asserts that training exceeds test.

      Teaching: [[Bias-Variance Tradeoff]], polynomial regression and overfitting in [[Lecture 4 - Regression]].
    related_terms: ["polynomial-features", "overfitting", "bias-variance-tradeoff", "r-squared", "curse-of-dimensionality", "data-leakage"]
  - id: "10"
    text: |
      **Ridge and Lasso regularisation.** Regularisation adds a penalty for large coefficients, preventing the model from overfitting. Ridge shrinks all coefficients; Lasso can set some to exactly zero (automatic feature selection). Use the degree-2 polynomial features from Q9.

      **Conceptual:** Compare the two Lasso models. What happened when you increased alpha from 0.01 to 1.0: how did $R^2$ and the number of zero coefficients change? What does Lasso do that Ridge doesn't? Why might automatic feature selection be valuable when you have many features? (3 to 4 sentences)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Approach.** Keep the same degree-2 feature matrix from Q9 so the comparison is purely about the **type of penalty**. Ridge uses an **L2** penalty (sum of squared coefficients) and shrinks everything smoothly towards zero. Lasso uses **L1** (sum of absolute coefficients); the geometry of the L1 ball pushes some coefficients to *exactly* zero. Two alphas (1.0 and 0.01) show the penalty's effect on sparsity.

      ```python
      # Ridge: L2 penalty, shrinks all coefficients but keeps them non-zero
      ridge = Ridge(alpha=1.0)
      ridge.fit(X_train_poly2, y_train)
      r2_ridge = float(r2_score(y_test, ridge.predict(X_test_poly2)))

      # Lasso with strong penalty: L1, zeroes many coefficients
      lasso_strong = Lasso(alpha=1.0, max_iter=10000)
      lasso_strong.fit(X_train_poly2, y_train)
      r2_lasso_strong = float(r2_score(y_test, lasso_strong.predict(X_test_poly2)))
      lasso_zeros_strong = int(np.sum(lasso_strong.coef_ == 0))

      # Lasso with weak penalty: fewer coefficients zeroed, behaves more like OLS
      lasso_weak = Lasso(alpha=0.01, max_iter=10000)
      lasso_weak.fit(X_train_poly2, y_train)
      r2_lasso_weak = float(r2_score(y_test, lasso_weak.predict(X_test_poly2)))
      lasso_zeros_weak = int(np.sum(lasso_weak.coef_ == 0))
      ```

      The penalised objectives behind the two models are:

      $$\text{Ridge: } \min_{\beta}\ \sum_i (y_i - \hat y_i)^2 + \alpha \sum_j \beta_j^2$$

      $$\text{Lasso: } \min_{\beta}\ \sum_i (y_i - \hat y_i)^2 + \alpha \sum_j \lvert \beta_j \rvert$$

      The auto-check asserts every $R^2$ is between 0 and 1, and that `lasso_zeros_strong > lasso_zeros_weak` (a stronger Lasso zeroes more coefficients).

      **Conceptual answer.** Going from alpha = 0.01 to alpha = 1.0 makes the penalty much stronger, so **many more coefficients are pushed to exactly zero** and the **test $R^2$ dips slightly** because the model is less flexible. Lasso (L1) can zero coefficients out entirely, whereas Ridge (L2) only shrinks them towards zero: they never quite get there. With many features (especially after a polynomial expansion that creates lots of redundant interactions) automatic feature selection is valuable: it leaves a **smaller, easier-to-interpret model** and reduces variance from noisy or irrelevant features, which often improves generalisation.

      ![](/images/intro-data-science/ps02-q10-ridge-vs-lasso-geometry.png)

      > [!tip] Intuition
      > Figure: a **schematic** of the standard textbook picture, with no data behind it. The grey ellipses are contours of the training error; the shaded region is what the penalty allows. A round (L2) region is touched somewhere off the axes, so every coefficient stays non-zero. A diamond (L1) region has **corners on the axes**, and the error contours usually first touch a corner, which sets that coefficient to exactly 0.

      > [!warning] Results not saved; scaling caveat
      > 1. The direction of the stated effects (more zeros at alpha 1.0, a slightly lower test $R^2$) is guaranteed in part by the notebook's assertion about zero counts, but the **"dips slightly" claim about $R^2$ is unverified**, since the printouts were not saved.
      > 2. **Scaling.** The code fits Ridge and Lasso on the *unscaled* polynomial features. [[Lecture 4 - Regression]] says scaling is mandatory for regularisation, because the penalty treats all coefficients equally and so punishes features measured on small scales unfairly (for example `age * bmi` or `bmi^2` are on very different scales from the 0/1 dummies). The question's hint did not ask for scaling, so Alfie's code follows the brief, but the zero counts and $R^2$ values here would change with a `StandardScaler` step (ideally inside a [[Scikit-Learn Pipeline]]).

      Teaching: [[Ridge Regression]], [[Lasso Regression]], [[Feature Scaling]], [[Bias-Variance Tradeoff]] in [[Lecture 4 - Regression]].
    related_terms: ["ridge-regression", "lasso-regression", "l1-and-l2-penalty", "polynomial-features", "feature-scaling", "scikit-learn-pipeline", "bias-variance-tradeoff"]
  - id: "11"
    text: |
      **Cross-validation.** A single train/test split can be lucky or unlucky. Cross-validation gives you a more reliable estimate by testing on multiple different splits. (Use the multiple linear regression model, not the polynomial one; pass the full dataset, `cv=5`, `scoring='r2'`.)

      **Conceptual:** Why is the cross-validation $R^2$ more trustworthy than a single train/test split $R^2$? What does a low standard deviation across folds tell you about your model? (2 to 3 sentences)
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Approach.** `cross_val_score` with `cv=5` splits the data into five folds and trains and evaluates five times, using a different fold as the test set each time. Pass the **full** `X_ins` and `y_ins` (not just the training set), because cross-validation does the splitting itself. Report the mean and the standard deviation together: the average performance and how stable it is.

      ```python
      multi_cv_model = LinearRegression()

      # 5-fold CV: sklearn handles the splits internally, so pass the full data
      cv_scores = cross_val_score(multi_cv_model, X_ins, y_ins, cv=5, scoring='r2')

      cv_mean_r2 = cv_scores.mean()
      cv_std_r2  = cv_scores.std()

      print(f"5-Fold Cross-Validation R² Scores: {cv_scores}")
      print(f"Mean R²: {cv_mean_r2:.4f}")
      print(f"Std R²:  {cv_std_r2:.4f}")
      ```

      The auto-check asserts 5 fold scores, a mean between 0.5 and 0.9, and a standard deviation below 0.15.

      **Conceptual answer.** A single train/test split is just **one random partition**: you may have got a particularly easy or hard test set, so the resulting $R^2$ is a noisy estimate of true performance. Cross-validation runs five different splits and averages the scores, smoothing out that randomness. A **low standard deviation across folds** means the model performs consistently whichever slice it sees, which suggests the mean $R^2$ is a reliable estimate rather than a fluke.

      > [!tip] Intuition
      > Each of the five folds is used exactly once as the test set (fit on four fifths, score on one fifth), so *every* row is tested once and trained on four times. The mean is the headline estimate and the spread is its error bar. The mean and standard deviation values were not saved, so none are quoted here.

      Teaching: [[Cross-Validation]], [[Lecture 4 - Regression]] (the "Trust But Verify" section).
    related_terms: ["cross-validation", "train-test-split", "r-squared", "linear-regression"]
  - id: "12"
    text: |
      **Model comparison.** Put all your models side by side to see which one performs best on the test set. (Poly-2, Ridge and Lasso all use the same degree-2 polynomial features: Ridge and Lasso are regularised versions of the polynomial model, not entirely independent models. Simple LR uses only age, and Multiple LR uses the original encoded features. Build a DataFrame with columns `Model` and `Test R²` for all five, using the better Lasso, alpha 0.01, then a bar chart.)
    solution: TODO
    related_terms: ["r-squared", "ridge-regression", "lasso-regression", "polynomial-features", "cross-validation"]
---

*Related: [[Lecture 4 - Regression]], [[Lecture 2 - EDA and Charts]], [[Lecture 3 - Classification, KNN, Random Tree]], [[Lecture 5 - Clustering and Dimensionality Reduction]]*
