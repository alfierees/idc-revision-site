---
title: Econometrics Concepts
description: Single glossary of every concept used across the Econometrics notes. All [[wiki-links]] in lectures, problem sets, and past papers resolve to a heading here.
tags:
  - meta
  - glossary
  - index
  - econometrics
aliases:
  - Econometrics Glossary
  - Concept Glossary
subject: econometrics
in_scope: true
---

# Econometrics Concepts

> One-stop glossary. Every concept link across the subject points to a heading in this file (format `[[_Econometrics Concepts#Term|Term]]`). Each entry: a one-line definition + the lecture where it's taught. Use the outline panel or ⌘/Ctrl-F to jump.
>
> Tracker of which links exist: [[_Wiki-Link Registry]]. Subject hub: [[Econometrics]].

---

## Foundations, OLS & inference

### OLS Estimation
Ordinary Least Squares: chooses coefficients that minimise the sum of squared residuals. Unbiased and BLUE under the classical assumptions. → [[Lec_01-Introduction & Treatment Effects|Lec 1]]

### Hypothesis Testing
Framework for testing claims about parameters via a test statistic, a null/alternative, and a significance level (5% throughout). → [[Lec_01-Introduction & Treatment Effects|Lec 1]]

### F-test
Joint-significance test comparing **nested** models; built from the residual sum of squares of the restricted vs unrestricted model. Large $F$ (small $p$) ⇒ reject that the dropped regressors are jointly zero. → [[PP_01-Emotions & Risky Choice (Practice Exam)|PP1 Q1a]]

### Classical Assumptions A1-A5
Gauss–Markov conditions: linearity, random sampling, no perfect collinearity, zero conditional mean $E[u\mid X]=0$, and homoskedasticity. Under them OLS is BLUE. → [[Lec_02-Linear Probability Model (LPM)|Lec 2]]

### Heteroskedasticity
Error variance depends on $x$ (Var$(u\mid x)$ not constant); violates A5, so classical SEs are wrong (usually too small). → [[Lec_02-Linear Probability Model (LPM)|Lec 2]]

### Robust Standard Errors
Heteroskedasticity-consistent ("sandwich"/HC) standard errors; give correct inference when errors are heteroskedastic — mandatory for the LPM. → [[Lec_02-Linear Probability Model (LPM)|Lec 2]]

### Consistency
An estimator converges in probability to the true value as $n\to\infty$. Weaker than unbiasedness. → [[Lec_05-Sample Selection & Heckman Correction|Lec 5]]

### Endogeneity
A regressor is correlated with the error, Cov$(x,u)\neq0$, making OLS biased and inconsistent. Sources: omitted variables, simultaneity, measurement error. → [[Lec_04-Instrumental Variables|Lec 4]]

### Omitted Variable Bias
Bias from leaving out a variable that both affects $y$ and correlates with an included regressor; the omitted effect loads onto the included coefficient. → [[PS_04-Seatbelt Laws & Traffic Fatalities|PS4]]

### Causal Inference
Estimating the effect of a cause — the counterfactual change in $y$ from changing $x$ — as opposed to mere correlation. → [[Lec_01-Introduction & Treatment Effects|Lec 1]]

### Causal Diagram
Directed acyclic graph (DAG) of assumed causal relationships; used to spot confounders and backdoor paths. → [[PS_02-Fertility & Education|PS2]]

### Dummy Variables
Binary 0/1 indicator for a category; its coefficient is the mean difference versus the omitted base group. → [[Lec_02-Linear Probability Model (LPM)|Lec 2]]

### Game Theory
Study of strategic decision-making; here the backdrop for binary-choice experiments. → [[Lec_02-Linear Probability Model (LPM)|Lec 2]]

### Ultimatum Game
Proposer offers a split, responder accepts/rejects; rejecting "unfair" offers violates pure self-interest. The motivating LPM example (Andersen et al. 2011). → [[Lec_02-Linear Probability Model (LPM)|Lec 2]]

---

## Treatment effects & potential outcomes

### Treatment Effect
Difference between a unit's outcome with vs without treatment, $(Y\mid T=1)-(Y\mid T=0)$; never observable for one unit (the fundamental problem of causal inference). → [[Lec_10-Difference-in-Differences|Lec 10]]

### Counterfactual
The unobserved potential outcome — what would have happened under the other treatment status. The central missing quantity in causal inference. → [[Lec_10-Difference-in-Differences|Lec 10]]

### Average Treatment Effect on the Treated
ATT: the mean treatment effect among treated units; the estimand that difference-in-differences recovers. → [[Lec_10-Difference-in-Differences|Lec 10]]

### Local Average Treatment Effect
LATE: IV identifies the effect only for "compliers" — units whose treatment status responds to the instrument. → [[Lec_04-Instrumental Variables|Lec 4]]

---

## Binary outcomes — LPM, logit & probit

### Linear Probability Model
OLS on a binary outcome; the fitted value is $P(y=1\mid x)$ and coefficients are marginal effects in **percentage points**. Drawbacks: predictions can leave $[0,1]$, and errors are inherently heteroskedastic. → [[Lec_02-Linear Probability Model (LPM)|Lec 2]]

### Binary Outcomes
Outcome coded 0/1 (accept/reject, chose B/A); modelled with the LPM, logit, or probit. → [[Lec_02-Linear Probability Model (LPM)|Lec 2]]

### Logit Model
Binary model using the logistic CDF to keep $P(y=1)$ in $(0,1)$; estimated by maximum likelihood. → [[Lec_03-Logit & Probit Models|Lec 3]]

### Probit Model
Binary model using the normal CDF $\Phi(\cdot)$; coefficients give **sign and significance**, not the marginal effect. → [[Lec_03-Logit & Probit Models|Lec 3]]

### Marginal Effects
The partial derivative $\partial P(y=1)/\partial x$. In the LPM it equals the coefficient (constant); in logit/probit it is $\beta\cdot\text{density}(\mathbf{x}'\beta)$ and varies with $x$. → [[Lec_03-Logit & Probit Models|Lec 3]]

### Maximum Likelihood Estimation
Estimates parameters by maximising the likelihood of the observed data; used for logit/probit. Consistent and asymptotically normal. → [[Lec_03-Logit & Probit Models|Lec 3]]

### Likelihood Ratio Test
Tests restrictions in MLE models by comparing log-likelihoods of restricted vs unrestricted models — the MLE analogue of the F-test. → [[Lec_03-Logit & Probit Models|Lec 3]]

---

## Instrumental variables

### Instrumental Variables
IV: uses an instrument $z$ to isolate exogenous variation in an endogenous regressor, restoring consistency when Cov$(x,u)\neq0$. → [[Lec_04-Instrumental Variables|Lec 4]]

### Two Stage Least Squares
2SLS: regress $x$ on $z$ (first stage), then $y$ on the fitted $\hat x$ (second stage); the practical IV estimator. → [[Lec_04-Instrumental Variables|Lec 4]]

### First Stage
Regression of the endogenous regressor on the instrument(s) and exogenous controls; its strength gauges relevance. → [[Lec_04-Instrumental Variables|Lec 4]]

### Second Stage
Regression of the outcome on the first-stage fitted values, giving the IV/2SLS estimate. → [[Lec_04-Instrumental Variables|Lec 4]]

### Instrument Relevance
The instrument must be correlated with the endogenous regressor, Cov$(z,x)\neq0$ (testable, e.g. first-stage $F$). → [[Lec_04-Instrumental Variables|Lec 4]]

### Instrument Validity
The exclusion restriction: the instrument affects $y$ only through $x$, Cov$(z,u)=0$ (untestable; argued conceptually). → [[Lec_04-Instrumental Variables|Lec 4]]

### Weak Instruments
Instruments only weakly correlated with $x$ (first-stage $F<10$); produce biased, imprecise IV estimates. → [[Lec_04-Instrumental Variables|Lec 4]]

### Wu-Hausman Test
Tests for endogeneity; rejection ⇒ OLS is inconsistent and IV is needed. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

---

## Sample selection (Heckman)

### Sample Selection Bias
Bias from non-random inclusion in the estimation sample when selection depends on unobservables that affect $y$, Cov(selection, $u)\neq0$. → [[Lec_05-Sample Selection & Heckman Correction|Lec 5]]

### Heckman Selection Model
Two-step estimator: model selection (probit), then add the inverse Mills ratio to the outcome regression to correct selection bias. → [[Lec_05-Sample Selection & Heckman Correction|Lec 5]]

### Inverse Mills Ratio
Correction term $\lambda$ added in Heckman step 2; a significant $\lambda$ confirms selection bias. → [[Lec_05-Sample Selection & Heckman Correction|Lec 5]]

### Endogenous Selection
When who appears in the sample depends on unobservables that also drive the outcome. → [[Lec_05-Sample Selection & Heckman Correction|Lec 5]]

### Mincer Wage Equation
Standard log-wage model: $\log(\text{wage})=f(\text{educ},\text{exper},\text{exper}^2)$; a common setting for selection corrections. → [[Lec_05-Sample Selection & Heckman Correction|Lec 5]]

---

## Simultaneous equations & time series

### Simultaneous Equations Model
System where variables are jointly determined (e.g. supply & demand), creating simultaneity bias. → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

### Serial Correlation
Errors correlated over time, Cov$(u_t,u_{t-1})\neq0$; biases classical SEs in time series. → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

### HAC Standard Errors
Newey–West standard errors, robust to heteroskedasticity and autocorrelation. → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

### Time Series
Observations indexed by time, where the past can influence the future. → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

### Static Model
$x$ affects $y$ only contemporaneously (no lags). → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

### Strict Exogeneity
$E[u_t\mid X]=0$ for **all** time periods (stronger than contemporaneous exogeneity). → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

### Distributed Lag Model
$y_t$ depends on current and past values of $x$; the lag coefficients trace the dynamic response. → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

### Autoregressive Model
$y_t$ depends on its own lagged values; consistent but not unbiased. → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

### Seasonality
Regular calendar-driven patterns in a series, controlled with seasonal dummy variables. → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

### Seasonal Controls
Seasonal dummy variables added to absorb predictable calendar effects. → [[Lec_06-Simultaneous Equations & Time Series|Lec 6]]

---

## Time trends & event studies

### Deterministic Time Trend
Predictable systematic drift over time; linear ($\alpha_1 t$) or exponential (linear in logs). → [[Lec_07-Time Trends and Event Studies|Lec 7]]

### Spurious Regression
Two trending series look correlated in OLS purely from common drift, not a genuine relationship. → [[Lec_07-Time Trends and Event Studies|Lec 7]]

### Detrending
Removing a trend by regressing on $t$ and using the residuals (equivalently, adding $t$ as a regressor — FWL theorem). → [[Lec_07-Time Trends and Event Studies|Lec 7]]

### Event Study
Measures the effect of a discrete event by comparing actual vs model-predicted outcomes around it. → [[Lec_07-Time Trends and Event Studies|Lec 7]]

### Abnormal Returns
Actual return minus model-predicted return; the event-study measure of surprise. → [[Lec_07-Time Trends and Event Studies|Lec 7]]

### Estimation Period
The pre-event window used to fit the baseline model. → [[Lec_07-Time Trends and Event Studies|Lec 7]]

### Observation Period
The event window in which abnormal outcomes are computed. → [[Lec_07-Time Trends and Event Studies|Lec 7]]

---

## Panel data & fixed effects

### Panel Data
Repeated observations on the same units over time. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Fixed Effects
Unit/group dummies (intercepts) that absorb **all** time-invariant characteristics of that unit. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Within Estimator
OLS on demeaned data; identifies $\beta$ from within-unit variation only. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Demeaning
Subtracting each unit's own mean from every variable; annihilates anything constant within the unit (so fixed effects vanish). → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Between Variation
Variation in unit averages across units; contaminated by cross-unit confounders. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Within Variation
Variation within a unit over time; the variation fixed effects exploit. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Individual Fixed Effect
$a_i$: a per-individual intercept capturing all of that individual's time-invariant traits. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Time Fixed Effects
Per-period dummies absorbing shocks common to all units in that period. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Two-Way Fixed Effects
Unit **and** time fixed effects together; the panel form of difference-in-differences. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Clustered Standard Errors
SEs allowing arbitrary correlation within groups; cluster at the level of the fixed effect. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

### Pooled OLS
OLS on all panel rows ignoring the $i$/$t$ structure; biased when fixed unit traits correlate with the regressor. → [[Lec_08-Fixed Effects in Panel Data|Lec 8]]

---

## Regression discontinuity

### Regression Discontinuity
Exploits a treatment cutoff in a running variable; the jump in the outcome at the cutoff is the effect. → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

### Running Variable
The forcing variable whose value relative to the cutoff determines treatment. → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

### Cutoff
Threshold of the running variable that switches treatment on/off. → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

### Bandwidth
Window around the cutoff used for estimation; a bias–variance trade-off. → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

### Continuity Assumption
Absent treatment, the outcome would vary smoothly through the cutoff. → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

### Sharp RDD
Treatment probability jumps cleanly $0\to1$ at the cutoff. → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

### Fuzzy RDD
Crossing the cutoff only changes the *probability* of treatment; estimated by IV (the Wald estimator). → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

### McCrary Density Test
Checks that the density of the running variable is smooth at the cutoff (no manipulation/sorting). → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

### Placebo Test
Checks that predetermined covariates (or pre-periods) show no jump/effect where none should exist. → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

### Wald Estimator
(Jump in outcome) ÷ (jump in treatment probability); the fuzzy-RDD / IV ratio. → [[Lec_09-Regression Discontinuity Design (RDD)|Lec 9]]

---

## Difference-in-differences

### Difference-in-Differences
(Treatment change) − (control change); nets out common time trends and fixed group gaps to estimate the ATT. → [[Lec_10-Difference-in-Differences|Lec 10]]

### Parallel Trends Assumption
Absent treatment, treated and control groups would have followed the same trend; the key DiD identifying assumption. → [[Lec_10-Difference-in-Differences|Lec 10]]

### Repeated Cross Sections
Fresh samples at each period (same individuals not required); sufficient for DiD. → [[Lec_10-Difference-in-Differences|Lec 10]]

### Bacon Decomposition
Diagnoses two-way-FE DiD under staggered timing as a weighted average of all 2×2 comparisons. → [[Lec_10-Difference-in-Differences|Lec 10]]

### Triple Differences
DDD: adds a third difference to net out a confounding trend. → [[Lec_10-Difference-in-Differences|Lec 10]]

---

## Aliases & shorthands

These shorthands appear in some notes; they point to the canonical entries above.

### LPM
See [[#Linear Probability Model]].

### OLS
See [[#OLS Estimation]].

### Treatment Effects
See [[#Treatment Effect]].

### Time Trend
See [[#Deterministic Time Trend]].

### Distributed Lag
See [[#Distributed Lag Model]].
