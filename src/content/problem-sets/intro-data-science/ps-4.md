---
title: "PS4"
subject: intro-data-science
source_doc: /papers/intro-data-science/ps-4-recitation-4.ipynb
tags:
  - data-science
  - intro-data-science
  - recitation
  - regression
  - linear-regression
  - ridge
  - lasso
  - cross-validation
ai_drafted: true
questions:
  - id: "1"
    text: |
      A seller has a **7-year-old car**. Using the simple model's equation (slope and intercept from above):
      1. Calculate the predicted price **by hand**.
      2. Verify with `simple_model.predict([[7]])`.
      3. The actual listing price is ₪82K. What is the residual? Did the model over- or underestimate?
      4. Is R² good enough for Dana's pricing engine? Why or why not?
    solution: |
      > [!info] Source
      > Official solution in the notebook (cell 20). The notebook did not save the fitted slope and intercept, so no numeric prediction is given here.

      **Part 1 and 2: manual vs model.** The simple model is a straight line, so the prediction is

      $$
      \hat{y} = \beta_0 + \beta_1 \times 7
      $$

      where $\beta_0$ is `intercept_` and $\beta_1$ is `coef_[0]`. The two routes must agree.

      ```python
      # Manual: intercept + slope * 7
      manual_pred = simple_model.intercept_ + simple_model.coef_[0] * 7
      print(f"Manual prediction: ₪{manual_pred:.1f}K")

      # Verify
      model_pred = simple_model.predict([[7]])[0]
      print(f"Model prediction:  ₪{model_pred:.1f}K")
      ```

      **Part 3: residual.** The residual is actual minus predicted:

      $$
      e = y - \hat{y} = 82 - \hat{y}
      $$

      A **positive** residual means the model **under**estimated (the car sold for more than predicted); a negative one means it overestimated.

      ```python
      actual = 82
      residual = actual - model_pred
      print(f"Residual: {residual:+.1f}K ({'underestimated' if residual > 0 else 'overestimated'})")
      ```

      > [!tip] Intuition
      > The sign convention trips people up. Residual = actual minus predicted, so "model too low" gives a positive residual.

      **Part 4: is R² good enough?** No. The solution's own comments put the simple model at **R² about 0.55** and **RMSE about ₪34K**.

      ```python
      # R² ~ 0.55 means 45% of price variation is unexplained.
      # RMSE ~ ₪34K means typical errors are huge — not reliable enough for a pricing tool.
      print(f"\nR² = {r2_simple:.2f} — too rough for a pricing engine. Need more features.")
      ```

      > [!success] Answer
      > Age alone explains about half of the price variation (R² about 0.55); a typical error of ₪30K or more would make sellers misprice badly. Dana needs more features, which is what multiple regression adds.
    related_terms: ["linear-regression", "ols", "r-squared", "rmse"]
  - id: "2"
    text: |
      - Compare the `car_age_years` and `km_driven_thousands` coefficients for Ridge and Lasso (both trained on standardised features, so they are directly comparable).
      - Which model shrinks coefficients more aggressively?
      - Why does regularisation help with multicollinearity?
    solution: |
      > [!info] Source
      > Official solution in the notebook (cell 49). No saved outputs, so the coefficient values are not stated in the source.

      ```python
      ridge_coefs = pd.Series(ridge_model.coef_, index=X_train_sc.columns)
      # lasso_coefs was built earlier: pd.Series(lasso_model.coef_, index=X_train_sc.columns)

      print(f"{'Model':<15} {'car_age':>10} {'km_driven':>12}")
      print("-" * 37)
      print(f"{'Ridge':<15} {ridge_coefs['car_age_years']:>10.2f} {ridge_coefs['km_driven_thousands']:>12.2f}")
      print(f"{'Lasso':<15} {lasso_coefs['car_age_years']:>10.2f} {lasso_coefs['km_driven_thousands']:>12.2f}")
      ```

      The solution's reasoning, step by step:

      1. Because the features were standardised, a coefficient is "change in price per one standard deviation of the feature", so Ridge and Lasso values sit on the same scale.
      2. **Ridge shrinks both** coefficients and **distributes the shared effect more evenly** between the two correlated features.
      3. Without regularisation, correlated features "fight for credit": the split between age and km is ambiguous, so the coefficients can bounce wildly with small changes in the data.
      4. The penalty on large values removes that ambiguity.

      > [!success] Answer
      > Both models shrink the coefficients; Ridge spreads the shared age/km effect across both, so it gives stable values. Regularisation helps with multicollinearity because the penalty on coefficient size stops correlated features trading large offsetting coefficients.

      > [!warning] Source is not explicit on "more aggressive"
      > The solution comment does not name a single winner for "which shrinks more aggressively". The lecture-level fact is that **Lasso can zero a coefficient out entirely** while Ridge never does (see [[Lasso Regression]] and [[Ridge Regression]]). I did not add a numeric claim the source does not give.
    related_terms: ["ridge-regression", "lasso-regression", "multicollinearity", "feature-scaling", "l1-and-l2-penalty"]
---

## Recitation walkthrough

#### Setup, EDA and split

```python
import pandas as pd, numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import PolynomialFeatures, StandardScaler
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

df = pd.read_csv("autobid_used_cars.csv")

X = df.drop(columns=["listing_price_thousands", "listing_id"])
y = df["listing_price_thousands"]

# One-hot encode categoricals; drop_first=True makes BMW (brand) and Diesel (fuel) the baselines
X = pd.get_dummies(X, columns=["fuel_type", "car_brand", "city"], drop_first=True)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

What the EDA showed (the notebook's words): price is **right-skewed** (mean above median, a tail of luxury and electric cars); age vs price is clearly **linear and downward**; engine size vs price is **curved** (steep then flat); and `car_age_years` and `km_driven_thousands` are strongly correlated (r about 0.75), which is [[Multicollinearity]].

#### Simple regression: one feature

```python
simple_model = LinearRegression()
simple_model.fit(X_train[["car_age_years"]], y_train)
print(simple_model.coef_[0], simple_model.intercept_)   # slope = depreciation per year, intercept = price at age 0
```

The slope is read as **depreciation per year** and the intercept as the predicted price of a brand-new car. Because `km_driven` is missing, the age slope soaks up the km effect too.

#### Multiple regression: every feature gets a "price tag"

```python
full_model = LinearRegression().fit(X_train, y_train)
r2_full = r2_score(y_test, full_model.predict(X_test))
```

Read each coefficient as "all else equal, this feature changes the predicted price by this much". Examples quoted in the notebook: `car_brand_Hyundai` is about **−₪44K** against the BMW baseline, and `fuel_type_Electric` is about **+₪35K** against Diesel.

> [!warning] Why the age coefficient shrinks
> When `km_driven_thousands` joins the model, `car_age_years` shrinks, because the two share information and the shared effect is now split between them. Remove km and age grows back toward its simple-regression value.

#### Polynomial term on one feature

```python
poly = PolynomialFeatures(degree=2, include_bias=False)
engine_train = poly.fit_transform(X_train[["engine_size_cc"]])   # columns: engine_cc, engine_cc^2
```

The notebook adds `engine_size_cc²` **only** to the one feature that visibly curves. It then shows the over-the-top version: polynomial features on all numeric columns at degree 1, 2 and 3. Training R² keeps climbing but test R² **drops at degree 3**: classic overfitting (see [[Bias-Variance Tradeoff]]).

#### Regularisation: Ridge and Lasso

```python
scaler = StandardScaler()
X_train_sc = pd.DataFrame(scaler.fit_transform(X_train), columns=X_train.columns, index=X_train.index)
X_test_sc  = pd.DataFrame(scaler.transform(X_test),      columns=X_test.columns,  index=X_test.index)

ridge_model = Ridge(alpha=1.0).fit(X_train_sc, y_train)
lasso_model = Lasso(alpha=0.5).fit(X_train_sc, y_train)
```

- **Ridge (L2)** shrinks all coefficients towards zero; none vanish.
- **Lasso (L1)** can shrink some coefficients exactly to zero, which is automatic feature selection. In the notebook Lasso dropped `has_sunroof` among others.
- You **must standardise first**: the penalty is on coefficient size, so a feature measured in thousands of cc (1000 to 3500) would be penalised unfairly next to a 0/1 feature.

#### Cross-validation and the grand comparison

```python
cv_scores = cross_val_score(LinearRegression(), X, y, cv=5, scoring="r2")

from sklearn.pipeline import make_pipeline
models = {
    "Linear Regression": LinearRegression(),
    "Ridge (α=1.0)": make_pipeline(StandardScaler(), Ridge(alpha=1.0)),
    "Lasso (α=0.5)": make_pipeline(StandardScaler(), Lasso(alpha=0.5)),
}
```

Putting the scaler inside a `make_pipeline` means each CV fold fits the scaler on its own training part only, which prevents leakage (see [[Scikit-Learn Pipeline]]). The notebook's recommendation for Dana: **Ridge for production** (stable, accurate, interpretable, copes with correlated features), Lasso as a side analysis of which features matter. Its quoted figure is a CV R² of about **0.76** with a std of about 0.03.

*Related: [[Lecture 4 - Regression]], [[Lecture 3 - Classification, KNN, Random Tree]]*

> [!info] Source
> Official course notebook `recitation4.ipynb` (Recitation 4, Spring 2026). The two exercises and their solutions come straight from the notebook. The notebook had **no saved outputs** and its CSV is not available, so numbers below are only those the notebook's own text states.

## What this problem set is about

Recitation 3 predicted **labels** (churn). Here you predict a **number**: the listing price of a used car for the marketplace AutoBid. The pattern is the same, `create → .fit() → .predict()`, but accuracy is replaced by MAE, [[RMSE]] and [[R-Squared]].

> [!example] The AutoBid case
> Dana (AutoBid's product lead) wants a **price prediction engine**: sellers who overprice get no offers, sellers who underprice lose money. The data has 350 listings with `car_age_years`, `km_driven_thousands`, `engine_size_cc`, `num_previous_owners`, `has_sunroof`, `fuel_type`, `car_brand`, `city` and the target `listing_price_thousands` (in ₪K).

## Recap

| Item | Tool | Takeaway |
|---|---|---|
| Q1 | `LinearRegression`, `predict`, residual | Prediction = intercept + slope × 7; residual = actual − predicted; R² about 0.55 is too low for a pricing tool |
| Q2 | `Ridge`, `Lasso` on standardised data | Regularisation stabilises correlated features; Lasso can also drop them |
