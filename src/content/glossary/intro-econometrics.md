---
title: Intro Econometrics Concepts
description: Single glossary of every concept used across the Intro Econometrics notes. All [[wiki-links]] in lectures, assignments and past papers resolve to a heading here.
tags:
  - meta
  - glossary
  - index
  - intro-econometrics
aliases:
  - Intro Econometrics Glossary
subject: intro-econometrics
in_scope: true
---

# Intro Econometrics Concepts

> One-stop glossary for Intro Econometrics (Year 2, Semester 1). Each entry: a one-line definition and the note that teaches it. Tracker of links: [[_Wiki-Link Registry]]. Subject hub: [[Intro Econometrics]].

---

### R-squared
Share of the variation in $y$ explained by the regression, $R^2 = 1 - SSR/TSS$; never falls when a regressor is added. Taught in [[Lec_08-Goodness of Fit & Multicollinearity]].

### Adjusted R-squared
$R^2$ penalised for the number of regressors, so it can fall when a useless variable is added. Taught in [[Lec_08-Goodness of Fit & Multicollinearity]].

### Total Sum of Squares
$TSS=\sum (y_i-\bar y)^2$, the total variation in $y$ that $R^2$ is measured against. Taught in [[Lec_08-Goodness of Fit & Multicollinearity]].

### Multicollinearity
Regressors that are highly (but not perfectly) correlated, inflating standard errors and shrinking t-stats while OLS stays unbiased. Taught in [[Lec_08-Goodness of Fit & Multicollinearity]].

### Variance of the OLS Estimator
The sampling variance of $\hat\beta$, $\sigma^2/\sum(x_i-\bar x)^2$ in the simple model, larger when regressors are collinear. Taught in [[Lec_08-Goodness of Fit & Multicollinearity]]. (Aliases: Variance of Estimator, Variance Inflation Factor.)

### F-test
Joint test that several coefficients are zero (or that a restricted model fits as well), built from the change in $R^2$ or SSR. Taught in [[Lec_08-Goodness of Fit & Multicollinearity]]. Seen in: [[Econometrics]].

### OLS Estimation
Ordinary least squares: picks the coefficients that minimise the sum of squared residuals. Taught in [[Lec_13-Exam Review]]. Seen in: [[Econometrics]].

### Gauss-Markov Theorem
Under the classical assumptions OLS is the best linear unbiased estimator (BLUE). Taught in [[Lec_08-Goodness of Fit & Multicollinearity]].

### Dummy Variable
A 0/1 regressor marking membership of a category, shifting the intercept for that group. Taught in [[Lec_10-Dummy Variables]]. Seen in: [[Econometrics]]. (Alias: Dummy Variables.)

### Base Category
The omitted group whose mean is the intercept; every dummy coefficient is measured relative to it. Taught in [[Lec_10-Dummy Variables]].

### Categorical Variables
A variable whose values are categories (e.g. family status); $K$ categories enter as $K-1$ dummies relative to a base category, tested jointly with an F-test. Taught in [[Lec_10-Dummy Variables]].

### Dummy Variable Trap
Including a dummy for every category plus an intercept, which makes the regressors perfectly collinear. Taught in [[Lec_10-Dummy Variables]].

### Perfect Multicollinearity
An exact linear relation among regressors, so OLS cannot be computed. Taught in [[Lec_10-Dummy Variables]].

### Model Misspecification
Wrong functional form, omitted relevant variables or included irrelevant ones, biasing or weakening estimates. Taught in [[Lec_10-Dummy Variables]].

### Omitted Variable Bias
Bias in $\hat\beta$ when a relevant variable correlated with the included regressor is left out. Taught in [[Lec_12-Heteroskedasticity]]. Seen in: [[Econometrics]].

### Interaction Term
Product of two regressors letting the effect of one depend on the level of the other (different slopes per group). Taught in [[Lec_11-Interaction Terms]].

### Quadratic Model
Regression with $x$ and $x^2$, giving a marginal effect that changes with $x$ and a turning point at $-\beta_1/(2\beta_2)$. Taught in [[Assign_04-Omitted Variables, F-tests & Multicollinearity (Birthweight & Soda Prices)]].

### Bad Control
A control that is itself affected by the variable of interest (a mediator), so including it distorts the effect you want. Taught in [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]].

### Chow Test
F-test of whether one regression pools two groups or the coefficients differ across groups. Taught in [[Lec_11-Interaction Terms]].

### Chow-Fisher Test
The Chow test written as a joint F-test on a group dummy and all its interactions. Taught in [[Lec_11-Interaction Terms]].

### Hedonic Pricing
Regressing a product's price on its characteristics to value each attribute (e.g. computer prices). Taught in [[Lec_11-Interaction Terms]].

### Heteroskedasticity
Non-constant error variance: OLS stays unbiased but the usual standard errors are wrong. Taught in [[Lec_12-Heteroskedasticity]]. Seen in: [[Econometrics]].

### Weighted Least Squares
OLS after weighting observations by the inverse of their error variance, restoring efficiency under heteroskedasticity. Taught in [[Lec_12-Heteroskedasticity]].

### White Correction
Heteroskedasticity-robust standard errors that keep the OLS estimates and fix inference. Taught in [[Lec_12-Heteroskedasticity]].

### Robust Standard Errors
Standard errors valid under heteroskedasticity (White); coefficients unchanged. Taught in [[Lec_12-Heteroskedasticity]]. Seen in: [[Econometrics]].

### Generalized Least Squares
Transforms the model so errors are homoskedastic; WLS is the special case with known variance weights. Taught in [[Lec_12-Heteroskedasticity]].

### Classical Assumptions
The linearity, random sampling, no perfect collinearity, zero conditional mean and homoskedasticity conditions behind OLS properties. Taught in [[Lec_13-Exam Review]].

### t-test
Tests one coefficient, $t=\hat\beta/se(\hat\beta)$ against a critical value or p-value. Taught in [[Lec_13-Exam Review]].

### Confidence Interval
Range $\hat\beta \pm t_{crit}\,se(\hat\beta)$ that covers the true coefficient with stated probability. Taught in [[Lec_13-Exam Review]].

### p-value
Probability of a result at least as extreme as observed if the null were true; reject when below the significance level. Taught in [[Lec_13-Exam Review]].

### Elasticity
Percentage change in $y$ for a 1% change in $x$; the slope of a log-log model. Taught in [[Lec_13-Exam Review]].

### Regression Through the Origin
A model with no intercept, forcing the line through $(0,0)$; $R^2$ is then not comparable. Taught in [[Lec_13-Exam Review]].

### Correlation
Strength and sign of the linear association between two variables, between $-1$ and $1$. Taught in [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]].

### Simple Linear Regression
One regressor: $y=\beta_0+\beta_1 x+u$, fitted by OLS. Taught in [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]].

### Prediction
Plugging values of the regressors into the fitted equation to get $\hat y$. Taught in [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]].

### Residuals
$\hat u_i=y_i-\hat y_i$, the gap between observed and fitted values. Taught in [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]].

### Causality vs Correlation
A regression slope shows association; causal reading needs the other factors held fixed. Taught in [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]].

### Conditional Mean
$E(y\mid x)$, the average of $y$ given $x$, which regression estimates. Taught in [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]].

### Functional Form
The shape chosen for the relationship (level, log, quadratic), which sets how coefficients are interpreted. Taught in [[Assign_02-Functional Form & the Money-Supply Log-Log Model]].

### Log-Level Model
$\ln y$ on $x$: a one-unit rise in $x$ changes $y$ by about $100\beta$ percent. Taught in [[Assign_02-Functional Form & the Money-Supply Log-Log Model]].

### Log-Log Model
$\ln y$ on $\ln x$: the slope is an elasticity. Taught in [[Assign_02-Functional Form & the Money-Supply Log-Log Model]].

### Marginal Effect
Change in $y$ from a one-unit change in $x$; constant in levels, varies with $x$ in quadratic or interaction models. Taught in [[Assign_02-Functional Form & the Money-Supply Log-Log Model]].

### Change of Variables
How coefficients and intercepts transform when a variable is rescaled or its units/currency change. Taught in [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]].

### Hypothesis Testing
Framework of null and alternative hypotheses, a test statistic and a significance level (5%). Taught in [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]]. Seen in: [[Econometrics]].

