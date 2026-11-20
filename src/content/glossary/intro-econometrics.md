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

> One-stop glossary for Intro Econometrics (Year 2, Semester 1). Each entry: a one-line definition and the lecture that first teaches it. Tracker of links: [[_Wiki-Link Registry]]. Subject hub: [[Intro Econometrics]].

## Causality & the regression model

### Causal Effect
The change in $y$ from a one-unit change in $x$ with everything else held fixed; a counterfactual quantity that is never directly observed. → [[Lec_01-Introduction & Causal Inference|Lec 1]]

### Causality vs Correlation
A regression slope shows association; a causal reading needs the other factors held fixed, since $\mathrm{Cor}(x,y)$ can be zero, strong or even opposite in sign to the causal effect. → [[Lec_01-Introduction & Causal Inference|Lec 1]]

### Confounding Factor
A third variable linked to both $x$ and $y$ that creates, hides or reverses an apparent relationship between them. → [[Lec_01-Introduction & Causal Inference|Lec 1]]

### Randomised Experiment
Random assignment of $x$, which makes $x$ independent of the error $u$ so that differences in outcomes are causal. → [[Lec_01-Introduction & Causal Inference|Lec 1]]

### Population Regression Function
The true (unobserved) model $y=\beta_0+\beta_1 x+u$ whose parameters regression tries to estimate. → [[Lec_01-Introduction & Causal Inference|Lec 1]]

### Error Term
$u$: all the factors other than $x$ that affect $y$; unobserved and assumed uncorrelated with $x$ for OLS to work. → [[Lec_01-Introduction & Causal Inference|Lec 1]]

### Data Generating Process
The assumed true mechanism $y_i=\beta_0+\beta_1 x_i+u_i$ that produces the data, used in simulations and proofs. → [[Lec_01-Introduction & Causal Inference|Lec 1]]

## Statistics review

### Expected Value
The probability-weighted mean of a random variable, $E[X]$; it is linear, so $E[aX+b]=aE[X]+b$. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### Variance
The expected squared distance from the mean, $\mathrm{Var}(X)=E[(X-E[X])^2]$; the variance of a sum needs covariance terms. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### Covariance
Joint variation of two variables, $\mathrm{Cov}(X,Y)=E[XY]-E[X]E[Y]$; its sign shows whether they move together. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### Statistical Independence
Joint density equals the product of the marginals; implies zero covariance, but zero covariance does not imply independence. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### IID Sample
Independent draws from one common distribution, the sampling assumption behind the standard OLS results. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### Estimator
A function of the sample used to estimate a population parameter; it is itself a random variable. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### Correlation
Strength and sign of the linear association between two variables, between $-1$ and $1$. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### Conditional Mean
$E(y\mid x)$, the average of $y$ given $x$, which regression estimates. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

## OLS estimation

### Simple Linear Regression
One regressor: $y=\beta_0+\beta_1 x+u$, fitted by OLS. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### OLS Estimation
Ordinary least squares: picks the coefficients that minimise the sum of squared residuals, from the first-order conditions. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### Sample Regression Function
The estimated line $\hat y=\hat\beta_0+\hat\beta_1 x$, the sample counterpart of the unobserved population regression function. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

### Residuals
$\hat u_i=y_i-\hat y_i$, the gap between observed and fitted values; an estimate of the error $u_i$, and sums to zero when there is an intercept. → [[Lec_02-Statistics Review & OLS Estimation|Lec 2]]

## Functional form & logs

### Functional Form
The shape chosen for the relationship (level, log, quadratic), which sets how coefficients are interpreted. → [[Lec_03-Nonlinear Models with OLS|Lec 3]]

### Linear in Parameters
A model linear in the $\beta$s after transforming the variables (logs, squares), so OLS still applies. → [[Lec_03-Nonlinear Models with OLS|Lec 3]]

### Marginal Effect
Change in $y$ from a one-unit change in $x$; constant in levels, varies with $x$ in quadratic or interaction models. → [[Lec_03-Nonlinear Models with OLS|Lec 3]]

### Rate of Change
$(dy/dx)/y$: the proportional change in $y$ per unit of $x$, which is the slope of a log-level model. → [[Lec_03-Nonlinear Models with OLS|Lec 3]]

### Log-Level Model
$\ln y$ on $x$: a one-unit rise in $x$ changes $y$ by about $100\beta$ percent. → [[Lec_03-Nonlinear Models with OLS|Lec 3]]

### Log-Log Model
$\ln y$ on $\ln x$: the slope is an elasticity. → [[Lec_03-Nonlinear Models with OLS|Lec 3]]

### Level-Log Model
$y$ on $\ln x$: the slope divided by 100 is the change in $y$ (in its own units) for a 1% rise in $x$. → [[Lec_03-Nonlinear Models with OLS|Lec 3]]

### Elasticity
Percentage change in $y$ for a 1% change in $x$; the slope of a log-log model. → [[Lec_03-Nonlinear Models with OLS|Lec 3]]

### Prediction
Plugging values of the regressors into the fitted equation to get $\hat y$. → [[Lec_03-Nonlinear Models with OLS|Lec 3]]

## Properties of OLS & the classical assumptions

### Classical Assumptions
A0 to A4: linearity, random sampling, no perfect collinearity, zero conditional mean and homoskedasticity (plus normality, A5, for exact tests); they underpin the OLS properties. → [[Lec_04-OLS Estimator Properties|Lec 4]]

### Zero Conditional Mean
Assumption A2, $E[u\mid x]=0$: the error is unrelated to the regressor, which implies $\mathrm{Cov}(x,u)=0$ and drives unbiasedness. → [[Lec_04-OLS Estimator Properties|Lec 4]]

### Homoskedasticity
Assumption A4, $\mathrm{Var}(u\mid x)=\sigma^2$ for every $x$: constant error variance, needed for the usual variance formula. → [[Lec_04-OLS Estimator Properties|Lec 4]]

### Serial Correlation
Correlation between the errors of different observations; assumption A3 rules it out. → [[Lec_04-OLS Estimator Properties|Lec 4]]

### Sampling Distribution
The distribution of an estimator's values across repeated samples of size $N$. → [[Lec_04-OLS Estimator Properties|Lec 4]]

### Unbiasedness
The mean of the estimator's sampling distribution equals the true parameter, $E[\hat\theta]=\theta$. → [[Lec_04-OLS Estimator Properties|Lec 4]]

### Efficiency
Minimum variance among all unbiased estimators of the parameter. → [[Lec_04-OLS Estimator Properties|Lec 4]]

### Gauss-Markov Theorem
Under assumptions A1 to A4 the OLS estimator is the best linear unbiased estimator (BLUE). → [[Lec_04-OLS Estimator Properties|Lec 4]]

### Variance of the OLS Estimator
The sampling variance of $\hat\beta$, $\sigma^2/\sum(x_i-\bar x)^2$ in the simple model: smaller with more data and more spread in $x$, larger when regressors are collinear. → [[Lec_04-OLS Estimator Properties|Lec 4]]

## Confidence intervals & units

### Standard Error
The square root of the estimated variance of an estimator, $se(\hat\beta)$; the yardstick for tests and intervals. → [[Lec_05-Confidence Intervals & Change of Units|Lec 5]]

### Degrees of Freedom
Observations left free to vary once the parameters are estimated; $N-K-1$ in OLS with $K$ regressors. → [[Lec_05-Confidence Intervals & Change of Units|Lec 5]]

### Normality of Errors (A5)
Assumption $u_i\sim N(0,\sigma^2)$, which makes the OLS estimators normal and gives exact t and F tests. → [[Lec_05-Confidence Intervals & Change of Units|Lec 5]]

### t-Distribution
The distribution of an estimator standardised with the estimated variance; fatter tails than the normal, converging to it as $N$ grows. → [[Lec_05-Confidence Intervals & Change of Units|Lec 5]]

### Critical Value
The cutoff $t_{\alpha/2}[N-K-1]$ leaving $\alpha/2$ in each tail; used to reject a null and to build confidence intervals. → [[Lec_05-Confidence Intervals & Change of Units|Lec 5]]

### Confidence Interval
Range $\hat\beta \pm t_{crit}\,se(\hat\beta)$ that covers the true coefficient with stated probability. → [[Lec_05-Confidence Intervals & Change of Units|Lec 5]]

### Change of Variables
How coefficients and intercepts transform when a variable is rescaled or its units or currency change ($y+c$ shifts the intercept; $cx$ divides the slope by $c$). → [[Lec_05-Confidence Intervals & Change of Units|Lec 5]]

## t-tests & p-values

### Hypothesis Testing
Framework of a null and an alternative hypothesis, a test statistic and a significance level (5%). → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

### Null Hypothesis
The claim $\beta=b$ that a test tries to reject, against an alternative $H_1$. → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

### t-statistic
$(\hat\beta-b)/se(\hat\beta)$: how many standard errors the estimate is from the null value. → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

### t-test
Tests one coefficient, $t=\hat\beta/se(\hat\beta)$ against a critical value or p-value. → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

### Significance Level
$\alpha$, the probability of rejecting a true null (5% by default). → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

### Statistical Significance
$H_0:\beta_k=0$ is rejected at the chosen level, read from the `t value` or `Pr(>|t|)` column of the output. → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

### p-value
Probability of a result at least as extreme as observed if the null were true; reject when below the significance level. → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

### One-Sided Test
A test that puts all of $\alpha$ in one tail, used when the alternative has a direction ($\beta>b$ or $\beta<b$). → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

### P-hacking
Trying specifications until some $p<0.05$ appears, which makes the reported significance misleading. → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

### Regression Through the Origin
A model with no intercept, forcing the line through $(0,0)$; $R^2$ is then not comparable. → [[Lec_06-Hypothesis Tests & p-values|Lec 6]]

## Joint tests & the F-test

### F-test
Joint test that several coefficients are zero (or that a restricted model fits as well), built from the change in $R^2$ or SSR. → [[Lec_07-Multiple Hypothesis Tests|Lec 7]]

### Joint Hypothesis Test
A test that several coefficient restrictions hold simultaneously; $H_1$ is true if any one of them fails. → [[Lec_07-Multiple Hypothesis Tests|Lec 7]]

### Restricted Model
The original regression with the null hypothesis imposed, so it has fewer free coefficients. → [[Lec_07-Multiple Hypothesis Tests|Lec 7]]

### Unrestricted Model
The original regression with all coefficients free; it always fits at least as well as the restricted model. → [[Lec_07-Multiple Hypothesis Tests|Lec 7]]

### Residual Sum of Squares
$RSS=\sum\hat u_i^2$, the sum of squared OLS residuals; $RSS_{UR}\le RSS_R$, and the F-test compares the two. → [[Lec_07-Multiple Hypothesis Tests|Lec 7]]

### Returns to Scale
How output or cost scales with inputs; in a log-log Cobb-Douglas model an output elasticity below 1 means increasing returns (a natural monopoly). → [[Lec_07-Multiple Hypothesis Tests|Lec 7]]

### Cobb-Douglas Function
A multiplicative cost or production function made linear in parameters by taking logs, so the slopes are elasticities. → [[Lec_07-Multiple Hypothesis Tests|Lec 7]]

## Goodness of fit & multicollinearity

### R-squared
Share of the variation in $y$ explained by the regression, $R^2 = 1 - SSR/TSS$; never falls when a regressor is added. → [[Lec_08-Goodness of Fit & Multicollinearity|Lec 8]]

### Adjusted R-squared
$R^2$ penalised for the number of regressors, so it can fall when a useless variable is added. → [[Lec_08-Goodness of Fit & Multicollinearity|Lec 8]]

### Total Sum of Squares
$TSS=\sum (y_i-\bar y)^2$, the total variation in $y$ that $R^2$ is measured against. → [[Lec_08-Goodness of Fit & Multicollinearity|Lec 8]]

### Multicollinearity
Regressors that are highly (but not perfectly) correlated, inflating standard errors and shrinking t-stats while OLS stays unbiased. → [[Lec_08-Goodness of Fit & Multicollinearity|Lec 8]]

### Perfect Multicollinearity
An exact linear relation among regressors, so OLS cannot be computed. → [[Lec_08-Goodness of Fit & Multicollinearity|Lec 8]]

## Misspecification & quadratics

### Model Misspecification
Wrong functional form, omitted relevant variables or included irrelevant ones, biasing or weakening estimates. → [[Lec_09-Model Misspecification & Quadratics|Lec 9]]

### Omitted Variable Bias
Bias in $\hat\beta$ when a relevant variable correlated with the included regressor is left out. → [[Lec_09-Model Misspecification & Quadratics|Lec 9]]

### Irrelevant Variable
A regressor whose true coefficient is zero; including it keeps OLS unbiased but raises the variance. → [[Lec_09-Model Misspecification & Quadratics|Lec 9]]

### Quadratic Model
Regression with $x$ and $x^2$, giving a marginal effect that changes with $x$ and a turning point at $-\beta_1/(2\beta_2)$. → [[Lec_09-Model Misspecification & Quadratics|Lec 9]]

### Turning Point
The $x$ where a quadratic's slope is zero, $-\beta_1/(2\beta_2)$: a peak if $\beta_2<0$, a trough if $\beta_2>0$. → [[Lec_09-Model Misspecification & Quadratics|Lec 9]]

### Bad Control
A control that is itself affected by the variable of interest (a mediator), so including it distorts the effect you want. → [[Lec_09-Model Misspecification & Quadratics|Lec 9]]

## Dummy variables & interactions

### Dummy Variable
A 0/1 regressor marking membership of a category, shifting the intercept for that group. (Alias: Dummy Variables.) → [[Lec_10-Dummy Variables|Lec 10]]

### Base Category
The omitted group whose mean is the intercept; every dummy coefficient is measured relative to it. → [[Lec_10-Dummy Variables|Lec 10]]

### Categorical Variables
A variable whose values are categories (e.g. family status); $K$ categories enter as $K-1$ dummies relative to a base category, tested jointly with an F-test. → [[Lec_10-Dummy Variables|Lec 10]]

### Dummy Variable Trap
Including a dummy for every category plus an intercept, which makes the regressors perfectly collinear. → [[Lec_10-Dummy Variables|Lec 10]]

### Interaction Term
Product of two regressors letting the effect of one depend on the level of the other (different slopes per group). → [[Lec_11-Interaction Terms|Lec 11]]

### Chow Test
F-test of whether one regression pools two groups or the coefficients differ across groups. → [[Lec_11-Interaction Terms|Lec 11]]

### Chow-Fisher Test
The Chow test written as a joint F-test on a group dummy and all its interactions. → [[Lec_11-Interaction Terms|Lec 11]]

### Hedonic Pricing
Regressing a product's price on its characteristics to value each attribute (e.g. computer prices). → [[Lec_11-Interaction Terms|Lec 11]]

## Heteroskedasticity

### Heteroskedasticity
Non-constant error variance: OLS stays unbiased but the usual standard errors are wrong. → [[Lec_12-Heteroskedasticity|Lec 12]]

### Weighted Least Squares
OLS after weighting observations by the inverse of their error variance, restoring efficiency under heteroskedasticity. → [[Lec_12-Heteroskedasticity|Lec 12]]

### White Correction
Heteroskedasticity-robust standard errors that keep the OLS estimates and fix inference. → [[Lec_12-Heteroskedasticity|Lec 12]]

### Robust Standard Errors
Standard errors valid under heteroskedasticity (White); coefficients unchanged. → [[Lec_12-Heteroskedasticity|Lec 12]]

### Generalized Least Squares
Transforms the model so errors are homoskedastic; WLS is the special case with known variance weights. → [[Lec_12-Heteroskedasticity|Lec 12]]

## Aliases & shorthands

These names appear in some notes; they point to the canonical entries above.

### Variance of Estimator
See [[#Variance of the OLS Estimator]].

### Variance Inflation Factor
See [[#Variance of the OLS Estimator]].

### Dummy Variables
See [[#Dummy Variable]].

### Residual
See [[#Residuals]].

### Correlation vs Causation
See [[#Causality vs Correlation]].

### Change of Units
See [[#Change of Variables]].
