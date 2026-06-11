---
title: "Lecture 4 — Regression: Predicting Numbers"
week: 4
semester: 2
course: Data Science
instructor: "Daniel Karalnik, Liam Tal"
tags:
  - data-science
  - regression
  - supervised-learning
  - linear-regression
  - polynomial-regression
  - regularization
  - cross-validation
  - scikit-learn
  - bias-variance-tradeoff
subject: machine-learning
in_scope: true
---

# Lecture 4 — Regression

> Part of: [[Data Science]]
> Previous: [[Lecture 3 - Classification, KNN, Random Tree]] | Next: [[Lecture 5 - Clustering and Dimensionality Reduction]]
> Key concepts: [[Linear Regression]], [[OLS]], [[RMSE]], [[R-Squared]], [[Bias-Variance Tradeoff]], [[Ridge Regression]], [[Lasso Regression]], [[Cross-Validation]]

---

## 🎯 The Core Idea

**Regression** = predicting a **continuous number** from features. Where classification asks "which category?", regression asks "how much?".

> [!info] Running case study
> *Galil Ventures* — 200 startups, 9 features (funding raised, team size, market size, revenue, product stage, etc.). Goal: predict **valuation (in millions)** for new startups. Target = `valuation_millions` (continuous).

### When to use regression vs. classification

| Task | Output | Algorithm family |
|---|---|---|
| Predict house price | Continuous number | **Regression** |
| Predict churn | Binary label | Classification |
| Predict product category | Discrete class | Classification |
| Predict revenue growth | Continuous number | **Regression** |

---

## 📐 What Is Regression?

The goal is to find a function $f(X)$ that maps input features to a number as accurately as possible:

$$\hat{y} = f(X) = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_k x_k$$

- $\hat{y}$: predicted value
- $\beta_0$: **intercept** — predicted value when all features = 0
- $\beta_1, \dots, \beta_k$: **coefficients** — how much $y$ changes per unit increase in each feature
- **Residual** = actual − predicted: $e_i = y_i - \hat{y}_i$

> [!tip] Interpreting coefficients
> A coefficient of $\beta_{\text{funding}} = 0.42$ means: *holding all other features constant, each additional \$1M in funding is associated with a \$0.42M increase in predicted valuation.* Regression does not imply causation — it quantifies association.

### Ordinary Least Squares (OLS)

==OLS== finds the line (or hyperplane) that **minimises the sum of squared residuals**:

$$\text{RSS} = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

The closed-form solution is:

$$\boxed{\hat{\boldsymbol{\beta}} = (X^\top X)^{-1} X^\top \mathbf{y}}$$

In practice, sklearn uses numerical optimisation rather than inverting $X^\top X$ directly (numerically unstable for large $p$).

---

## 📊 Meet the Data — Galil Ventures

```python
import pandas as pd
df = pd.read_csv("galil_ventures.csv")
print(df.shape)     # (200, 9)
print(df.head())
```

Key columns: `funding_raised_M`, `team_size`, `market_size_B`, `revenue_M`, `product_stage`, `years_operating`, `num_investors`, `country_risk_score`, `valuation_millions` (target).

**Always explore before modelling:**
```python
print(df.describe())
print(df.isnull().sum())
import matplotlib.pyplot as plt
df["valuation_millions"].hist(bins=30)
plt.title("Distribution of startup valuations")
plt.show()
```

> [!warning] Check for skew
> Startup valuations are typically right-skewed (a few unicorns, many modest outcomes). Consider `np.log1p(y)` transformation if residuals are severely non-normal, then back-transform predictions with `np.expm1`.

---

## 📏 Simple Linear Regression

One feature → one coefficient + intercept. Useful for building intuition.

$$\hat{y} = \beta_0 + \beta_1 \cdot \text{funding\_raised\_M}$$

```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

X = df[["funding_raised_M"]]
y = df["valuation_millions"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

print(f"Intercept: {model.intercept_:.2f}")
print(f"Coefficient: {model.coef_[0]:.2f}")
```

**Drawing the regression line:**
```python
import numpy as np
x_range = np.linspace(X["funding_raised_M"].min(), X["funding_raised_M"].max(), 100)
y_pred_line = model.predict(x_range.reshape(-1, 1))

plt.scatter(X_train, y_train, alpha=0.5, label="Training data")
plt.plot(x_range, y_pred_line, color="red", label="Regression line")
plt.xlabel("Funding Raised ($M)")
plt.ylabel("Valuation ($M)")
plt.legend()
plt.show()
```

---

## 🔢 Multiple Linear Regression

Using all available features gives a much more powerful model:

$$\hat{y} = \beta_0 + \beta_1 \cdot \text{funding} + \beta_2 \cdot \text{team\_size} + \beta_3 \cdot \text{market\_size} + \dots$$

```python
X = df.drop(columns=["valuation_millions"])
y = df["valuation_millions"]

# Handle categorical columns
X = pd.get_dummies(X, drop_first=True)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

# Inspect coefficients
coef_df = pd.DataFrame({
    "feature": X_train.columns,
    "coefficient": model.coef_
}).sort_values("coefficient", ascending=False)
print(coef_df)
```

> [!tip] Feature scaling doesn't change OLS predictions
> Unlike KNN or logistic regression, OLS predictions are the same regardless of scaling because the maths adjusts coefficients accordingly. **However, scaling is essential if you use regularisation** (Ridge/Lasso), so build the habit early.

---

## 📉 Is the Prediction Any Good? — Error Metrics

### Mean Absolute Error (MAE)

$$\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$$

Interpretable in the same units as $y$. Less sensitive to outliers than RMSE.

### Root Mean Squared Error (RMSE)

$$\text{RMSE} = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$$

Also in the units of $y$. **Penalises large errors more heavily** — if a \$200M prediction error is much worse than two \$100M errors, prefer RMSE.

### R² — Coefficient of Determination

$$\boxed{R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}}$$

- $R^2 = 1$: perfect fit
- $R^2 = 0$: model is no better than predicting the mean $\bar{y}$ for every observation
- $R^2 < 0$: model is worse than predicting the mean (possible on the test set)

> [!warning] R² can be misleading
> Adding any feature (even random noise) increases $R^2$ on training data. **Adjusted $R^2$** penalises for extra features; better to evaluate on the test set.

```python
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

y_pred = model.predict(X_test)

print(f"MAE:  {mean_absolute_error(y_test, y_pred):.2f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.2f}")
print(f"R²:   {r2_score(y_test, y_pred):.4f}")
```

### Metric comparison

| Metric | Units | Sensitive to outliers? | Use when |
|---|---|---|---|
| **MAE** | Same as $y$ | No | Outliers exist; interpretability key |
| **RMSE** | Same as $y$ | Yes | Large errors are disproportionately bad |
| **R²** | Unitless [0, 1] | Moderate | Comparing models on same dataset |

---

## 🌀 Polynomial Regression

Linear regression draws straight lines. If the true relationship is curved, a linear model **underfits**. ==Polynomial regression== adds higher-order terms to capture curvature:

$$\hat{y} = \beta_0 + \beta_1 x + \beta_2 x^2 + \beta_3 x^3 + \dots$$

This is still a *linear* model — linear in the coefficients, not in $x$.

```python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline

poly_model = Pipeline([
    ("poly", PolynomialFeatures(degree=3, include_bias=False)),
    ("lr",   LinearRegression())
])

poly_model.fit(X_train[["funding_raised_M"]], y_train)
y_pred_poly = poly_model.predict(X_test[["funding_raised_M"]])
print(f"Poly RMSE: {np.sqrt(mean_squared_error(y_test, y_pred_poly)):.2f}")
```

> [!warning] High-degree polynomials overfit badly
> Degree 10+ will snake through every training point and blow up on test data. Polynomial regression is mainly useful at degree 2–3 and when you have a specific reason to expect curvature.

---

## ⚖️ Bias–Variance Trade-off

Every model lives on a spectrum between two failure modes:

| | **High Bias (Underfitting)** | **High Variance (Overfitting)** |
|---|---|---|
| What it is | Model too simple to capture real patterns | Model memorises noise in training data |
| Training error | High | Low |
| Test error | High | High |
| Example | Linear model on curved data | Degree-10 polynomial on 30 data points |
| Fix | More complex model / more features | Regularise, get more data, simplify |

$$\text{Expected Test Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Noise}$$

> [!tip] The sweet spot
> You want a model complex enough to capture the signal but simple enough not to memorise the noise. Regularisation is the main tool for dialling variance down without sacrificing too much bias.

```
Train Error ──────────────────────────────────
                                              \
Test Error  ─────────────────╮               ↑ high variance
                             │  sweet spot
                             ╰──────────── high bias
               Model Complexity →
```

---

## 🔒 Keeping the Model Honest — Regularisation

==Regularisation== shrinks coefficients towards zero to reduce overfitting. Two main flavours:

### Ridge Regression (L2)

$$\text{Loss} = \text{RSS} + \lambda \sum_{j=1}^{k} \beta_j^2$$

Adds a penalty proportional to the **squared** magnitude of coefficients. All coefficients shrink but none reach exactly zero.

```python
from sklearn.linear_model import Ridge

ridge = Ridge(alpha=1.0)   # alpha = λ
ridge.fit(X_train_scaled, y_train)
```

### Lasso Regression (L1)

$$\text{Loss} = \text{RSS} + \lambda \sum_{j=1}^{k} |\beta_j|$$

Adds a penalty proportional to the **absolute** magnitude. Can shrink coefficients to **exactly zero** — performs **automatic feature selection**.

```python
from sklearn.linear_model import Lasso

lasso = Lasso(alpha=0.5)
lasso.fit(X_train_scaled, y_train)

# See which features were zeroed out
pd.Series(lasso.coef_, index=X_train.columns)[lasso.coef_ != 0]
```

### Ridge vs. Lasso comparison

| | **Ridge** | **Lasso** |
|---|---|---|
| Penalty | L2 (squared) | L1 (absolute) |
| Coefficient zeroing | No — all shrink smoothly | Yes — can zero out features |
| Best when | All features relevant | Many irrelevant features |
| Unique solution? | Always | Not always (correlated features) |

> [!tip] Choosing λ (alpha)
> Too small → barely regularises. Too large → all coefficients → 0 → underfits. Use cross-validation to find the optimal value.

### Scaling is mandatory for regularisation

```python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled  = scaler.transform(X_test)   # fit only on train!
```

---

## 🔁 Trust But Verify — Cross-Validation

A single train/test split can be lucky or unlucky depending on which rows end up in the test set. ==K-Fold Cross-Validation== uses the data more efficiently:

1. Split data into $K$ equal folds.
2. In each round, hold one fold out as the test set and train on the rest.
3. Average the $K$ test scores.

$$\text{CV Score} = \frac{1}{K} \sum_{k=1}^{K} \text{score}(\text{fold}_k)$$

```python
from sklearn.model_selection import cross_val_score

model = Ridge(alpha=1.0)

# Negative MSE is convention (sklearn maximises scores)
scores = cross_val_score(model, X_scaled, y,
                         cv=5, scoring="neg_root_mean_squared_error")
print(f"CV RMSE: {-scores.mean():.2f} ± {scores.std():.2f}")
```

> [!warning] Never fit the scaler on the full dataset before cross-validation
> This leaks test information into training. Use a **Pipeline** so scaling is re-fitted fresh for each fold:

```python
from sklearn.pipeline import Pipeline

pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("model",  Ridge(alpha=1.0))
])

scores = cross_val_score(pipe, X, y, cv=5, scoring="neg_root_mean_squared_error")
```

### Choosing K

| $K$ | Trade-off |
|---|---|
| 5 | Fast, slightly higher variance in estimate |
| 10 | Standard default — good balance |
| $n$ (Leave-One-Out) | Very low bias, very slow, high variance |

---

## 🛠️ The Full Regression Pipeline

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, PolynomialFeatures
from sklearn.linear_model import Ridge
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# 1. Prepare data
X = pd.get_dummies(df.drop(columns=["valuation_millions"]), drop_first=True)
y = df["valuation_millions"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. Build pipeline
pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("model",  Ridge(alpha=1.0))
])

# 3. Cross-validate
cv_rmse = -cross_val_score(pipe, X_train, y_train,
                            cv=5, scoring="neg_root_mean_squared_error").mean()
print(f"CV RMSE: {cv_rmse:.2f}")

# 4. Final evaluation on held-out test set
pipe.fit(X_train, y_train)
y_pred = pipe.predict(X_test)
print(f"Test RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.2f}")
print(f"Test R²:   {r2_score(y_test, y_pred):.4f}")
```

---

## 🎯 Summary — The Regression Workflow

1. **Understand the target** — continuous? skewed? need log transform?
2. **Explore and clean** — check `describe()`, nulls, distributions, outliers.
3. **Feature prep** — one-hot categoricals; scale numerics if using regularisation.
4. **Split** — `train_test_split(test_size=0.2, random_state=42)`.
5. **Start simple** — plain `LinearRegression` as a baseline.
6. **Evaluate properly** — MAE, RMSE, R² on the test set; plot residuals.
7. **Add complexity** — Polynomial features if curvature is needed.
8. **Regularise** — Ridge (keep all features) or Lasso (auto feature selection).
9. **Cross-validate** — use a Pipeline so scaling is honest.
10. **Report RMSE with units** — "our model predicts valuation within ±$X M".

---

## 📎 Related Notes

- Previous: [[Lecture 3 - Classification, KNN, Random Tree]]
- Next: [[Lecture 5 - Clustering and Dimensionality Reduction]]
- Foundational: [[Supervised Learning]], [[Train Test Split]], [[Feature Scaling]], [[Scikit-Learn Pipeline]]
- Related: [[Bias-Variance Tradeoff]], [[OLS]], [[Ridge Regression]], [[Lasso Regression]], [[Cross-Validation]], [[R-Squared]]
