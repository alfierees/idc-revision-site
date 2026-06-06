---
title: Problem Set 1
subject: econometrics
questions:
  - id: "Q1"
    text: "State the Gauss–Markov assumptions."
    solution: "Linearity in parameters, random sampling, no perfect multicollinearity, zero conditional mean of errors, [[Heteroskedasticity|homoskedasticity]] (constant error variance), no serial correlation."
    related_terms: ["heteroskedasticity", "ols-estimator"]
  - id: "Q2"
    text: "Derive $\\hat{\\beta}$ for the simple linear regression $y_i = \\beta_0 + \\beta_1 x_i + u_i$ by minimising the sum of squared residuals."
    solution: "Take partial derivatives of $\\sum (y_i - \\beta_0 - \\beta_1 x_i)^2$ with respect to $\\beta_0$ and $\\beta_1$, set to zero, solve: $\\hat{\\beta}_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}$ and $\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$. See [[OLS Estimator]]."
    related_terms: ["ols-estimator"]
ai_drafted: false
---

Sample problem set for Plan 1 scaffolding.
