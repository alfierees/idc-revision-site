---
title: Statistics B Concepts
description: Single glossary of every concept used across the Statistics B notes. All [[wiki-links]] in lectures, problem sets and past papers resolve to a heading here.
tags:
  - meta
  - glossary
  - index
  - statistics-b
aliases:
  - Statistics B Glossary
subject: statistics-b
in_scope: true
---

# Statistics B Concepts

> One-stop glossary for Statistics B (Year 1, Semester 2). Each entry: a one-line definition and the note where it is taught. Use the outline panel or Cmd/Ctrl-F to jump.
>
> Tracker of which links exist: [[_Wiki-Link Registry]]. Subject hub: [[Statistics B]].

---

## Probability and sampling

### Population
The entire set of items we want to describe. Seen in: Statistics A. → [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]

### Random Sample
$n$ independent, identically distributed observations randomly drawn from the population. → [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]

### Parameter
A number that describes the population. → [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]

### Statistic
A function $T(X)$ of the sample vector. → [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]

### Sampling Distribution
The distribution of a statistic across repeated samples. Also in [[PS_06-Statistical Power and Simulation|PS 06]], [[PP_07-Estimators, Correlation, Z and t Tests, Power, F Test, Intervals & Chi-Squared (Practice Exam)|PP 07]]. → [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]

### Sampling Distribution of the Average
The distribution of the sample mean, $N(\mu, \sigma^2/n)$. Also in [[PP_03-Estimators, Z and t Tests, Power, F Test and Chi-Squared Tests (2024 Moed A)|PP 03]]. → [[Lec_08-Confidence Intervals|Lec 08]]

### Standard Error
The standard deviation of a statistic's sampling distribution, for example $\sigma/\sqrt{n}$ for the sample mean. Also in [[PS_08-Confidence Intervals|PS 08]], [[PP_05-Estimators, Z and t Tests, Power, Confidence Intervals & Chi-Squared (2025 Moed A)|PP 05]]. → [[Lec_08-Confidence Intervals|Lec 08]]

### Variance of the Sample Mean
$\sigma^2/n$, so it shrinks as the sample grows. Also in [[Lec_08-Confidence Intervals|Lec 08]]. → [[PS_01-Unbiased and Consistent Estimators|PS 01]]

### Normal Distribution
The bell-shaped distribution $N(\mu, \sigma^2)$, standardised with $Z=(x-\mu)/\sigma$ so a Z table can be used. Also in [[Lec_03-Maximum Likelihood Estimation|Lec 03]]. Seen in: Statistics A. → [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]

### Normal Distribution CDF
Has no closed form; $P(X<t)=\Phi(Z(t))$ with $Z=(t-\mu)/\sigma$ read from the Z table. Also in [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]. → [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]

### Central Limit Theorem
For i.i.d. draws, the sum is approximately $N(n\mu, n\sigma^2)$ and the average $N(\mu, \sigma^2/n)$; rule of thumb $n \ge 30$. Also in [[PS_04-Single Sample Z Tests and One vs Two Tailed Tests|PS 04]], [[Lec_07-Tests for Proportions and Variances|Lec 07]]. Seen in: Statistics A. → [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]

### Law of Large Numbers
The sample average gets closer to $\mu$ as $n$ grows. Also in [[PS_06-Statistical Power and Simulation|PS 06]]. Seen in: Statistics A. → [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]

### Binomial Distribution
The sum of $n$ Bernoulli flips. Also in [[PS_03-Maximum Likelihood Estimators|PS 03]], [[Lec_03-Maximum Likelihood Estimation|Lec 03]]. Seen in: Statistics A. → [[PS_01-Unbiased and Consistent Estimators|PS 01]]

### Hypergeometric Distribution
Sampling without replacement: $P(X=k)=\binom{D}{k}\binom{N-D}{n-k}/\binom{N}{n}$. Seen in: Statistics A. → [[PS_03-Maximum Likelihood Estimators|PS 03]]

### Discrete Uniform Distribution
Equal probability on the integers $a$ to $b$; variance $((b-a+1)^2-1)/12$. → [[PS_01-Unbiased and Consistent Estimators|PS 01]]

### Monte Carlo Simulation
Repeated random sampling (for example with NORM.INV(RAND(),...)) to estimate a probability as a long-run frequency. Also in [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]], [[PS_11-Correlation, Regression and Simulation|PS 11]]. → [[PS_06-Statistical Power and Simulation|PS 06]]

### Data Cleaning
Checking that every value is in its valid range and removing missing-value codes before computing statistics. → [[Lec_10-Extra Credit Project and Test Selection Recap|Lec 10]]

## Point estimation

### Point Estimation
Estimating an unknown population parameter by a single number computed from a sample. Also in [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]], [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]]. → [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]]

### Estimator
A formula applied to a sample to estimate a parameter. Also in [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]]. → [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]]

### Unbiased Estimator
An estimator whose expected value equals the parameter, $E(\hat\theta)=\theta$. Also in [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]], [[PS_01-Unbiased and Consistent Estimators|PS 01]], [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]]. → [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]]

### Bias
The expected value of the estimator minus the parameter. → [[PS_01-Unbiased and Consistent Estimators|PS 01]]

### Consistent Estimator
An estimator whose variance goes to 0 as $n$ grows, following the course's definition. Also in [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]], [[PS_01-Unbiased and Consistent Estimators|PS 01]], [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]]. → [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]]

### Sample Variance
$S^2=\sum(X_i-\bar X)^2/(n-1)$; dividing by $n$ instead gives $(n-1)/n \cdot \sigma^2$, so $n-1$ removes the bias. Also in [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]]. → [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]]

### Sample Standard Deviation
$S=\sqrt{S^2}$; slightly biased low but asymptotically unbiased. → [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]]

### Maximum Estimator for a Uniform Distribution
For $X \sim U(0,M)$ the sample maximum is biased low, while $2\bar X$ is unbiased. → [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]]

### Linearly Biased Estimator
An estimator with $E=a+b\theta$, corrected by $(\text{estimator}-a)/b$. → [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]]

### Biased Variance Estimator
The variance estimator that divides by $n$; its expectation is $(n-1)/n \cdot \sigma^2$. Also in [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]]. → [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]]

## Maximum likelihood

### Likelihood
The probability of the observed sample given a parameter value, $L(\theta, X)=P(X \mid \theta)$, read as a function of $\theta$. Also in [[PS_03-Maximum Likelihood Estimators|PS 03]]. → [[Lec_03-Maximum Likelihood Estimation|Lec 03]]

### Likelihood vs Probability
Likelihoods attach to parameter values (hypotheses), not outcomes, and do not sum to 1. → [[Lec_03-Maximum Likelihood Estimation|Lec 03]]

### Maximum Likelihood Estimator
The parameter value that maximises the likelihood of the observed sample. Also in [[PS_03-Maximum Likelihood Estimators|PS 03]], [[PP_04-Estimators, Z and t Tests, F Test, Confidence Intervals & Chi-Squared (2024 Moed B)|PP 04]], [[Lec_12-Exam Review 1|Lec 12]]. → [[Lec_03-Maximum Likelihood Estimation|Lec 03]]

### Log-Likelihood
$\ln L$, which has the same maximiser as $L$ and turns products into sums. Also in [[PS_03-Maximum Likelihood Estimators|PS 03]]. → [[Lec_03-Maximum Likelihood Estimation|Lec 03]]

### MLE Invariance
If $\hat\theta$ is the MLE of $\theta$, then $g(\hat\theta)$ is the MLE of $g(\theta)$ for one-to-one $g$. Also in [[PS_03-Maximum Likelihood Estimators|PS 03]]. → [[Lec_03-Maximum Likelihood Estimation|Lec 03]]

### Likelihood Table
A table of the likelihood of each $\theta$ for each observed $X$; the MLE is the largest entry in each column. Also in [[PP_04-Estimators, Z and t Tests, F Test, Confidence Intervals & Chi-Squared (2024 Moed B)|PP 04]]. → [[PP_03-Estimators, Z and t Tests, Power, F Test and Chi-Squared Tests (2024 Moed A)|PP 03]]

## Hypothesis testing logic

### Hypothesis Testing Procedure
A yes/no question, the parameter, H0 and H1, the test and $\alpha$, then data; reject H0 if the statistic's probability under H0 is below $\alpha$. Also in [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]. → [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]

### Null Hypothesis
The default claim, fixing a specific parameter value; probabilities are computed assuming it is true. → [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]

### Alternative Hypothesis
The complement of H0, supported if H0 is rejected. → [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]

### Significance Level
The predefined probability $\alpha$ below which a result counts as unlikely enough to reject H0. Also in [[PS_04-Single Sample Z Tests and One vs Two Tailed Tests|PS 04]]. → [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]

### Critical Value
The cut-off on the test statistic's H0 distribution with area $\alpha$ beyond it. Also in [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]], [[Lec_06-Two Sample Tests, Error Types and Power|Lec 06]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

### Critical Region
The tail area of total probability $\alpha$ where H0 is rejected. Also in [[PS_04-Single Sample Z Tests and One vs Two Tailed Tests|PS 04]]. → [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]

### P-Value
The probability, given H0, of the observed statistic or one more extreme; doubled for a two-tailed test. Also in [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]. → [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]

### Directional Hypothesis
A one-sided H1 ($\mu <$ or $\mu >$), giving a one-tailed test with all of $\alpha$ in one tail. Also in [[PS_04-Single Sample Z Tests and One vs Two Tailed Tests|PS 04]], [[PP_03-Estimators, Z and t Tests, Power, F Test and Chi-Squared Tests (2024 Moed A)|PP 03]]. → [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]

### Non-Directional Hypothesis
An H1 with $\ne$, giving a two-tailed test with $\alpha$ split across both tails. Also in [[PS_04-Single Sample Z Tests and One vs Two Tailed Tests|PS 04]], [[Lec_07-Tests for Proportions and Variances|Lec 07]]. → [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]

## Z and t tests

### Z Test
A test whose statistic follows $N(0,1)$ under H0, used when the variance is known. Also in [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]], [[PP_02-Estimation, Regression, Z and t Tests, Power & Chi-Squared (2023 Moed B)|PP 02]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

### t Test
A test whose statistic follows a t distribution under H0, used when the variance is estimated from the sample. Also in [[PP_02-Estimation, Regression, Z and t Tests, Power & Chi-Squared (2023 Moed B)|PP 02]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

### Single Sample Z Test
Test of one mean with known variance, $Z \sim N(0,1)$. Also in [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]], [[PS_04-Single Sample Z Tests and One vs Two Tailed Tests|PS 04]]. → [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]]

### Single Sample t Test
Test of one mean with unknown variance and a normal population, $t \sim t(n-1)$. Also in [[PS_05-Single Sample t Test and Two Sample Z and t Tests|PS 05]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

### Chi-Squared Distribution
The distribution of a sum of $k$ independent squared standard normals. Also in [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

### t Distribution
A standard normal over a chi-squared-based term; heavier tails than the normal, tending to $N(0,1)$ as df grows. Also in [[Lec_08-Confidence Intervals|Lec 08]], [[PS_05-Single Sample t Test and Two Sample Z and t Tests|PS 05]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

### Degrees of Freedom
The number of independent pieces summed or free to vary. Also in [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]], [[PS_05-Single Sample t Test and Two Sample Z and t Tests|PS 05]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

### Two Samples Z Test
Test of $\mu_X-\mu_Y$ with known variances. Also in [[PS_05-Single Sample t Test and Two Sample Z and t Tests|PS 05]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

### Two Independent Samples t Test
Test of $\mu_X-\mu_Y$ with unknown equal variances; $df=n_X+n_Y-2$. Also in [[Lec_06-Two Sample Tests, Error Types and Power|Lec 06]], [[PS_05-Single Sample t Test and Two Sample Z and t Tests|PS 05]], [[PS_07-Proportion Tests and Two Sample t Test|PS 07]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

### Pooled Variance
The df-weighted average of $S_X^2$ and $S_Y^2$ used as one estimate of the common variance. Also in [[Lec_06-Two Sample Tests, Error Types and Power|Lec 06]], [[Lec_08-Confidence Intervals|Lec 08]], [[PS_05-Single Sample t Test and Two Sample Z and t Tests|PS 05]]. → [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]]

## Errors and power

### Type I Error
Rejecting H0 when it is true; its probability is $\alpha$. Also in [[PS_06-Statistical Power and Simulation|PS 06]]. → [[Lec_06-Two Sample Tests, Error Types and Power|Lec 06]]

### Type II Error
Not rejecting H0 when H1 is true; its probability is $\beta$. Also in [[PS_06-Statistical Power and Simulation|PS 06]]. → [[Lec_06-Two Sample Tests, Error Types and Power|Lec 06]]

### Statistical Power
$1-\beta$, the probability of correctly rejecting a false H0. Also in [[PS_06-Statistical Power and Simulation|PS 06]], [[Lec_12-Exam Review 1|Lec 12]]. → [[Lec_06-Two Sample Tests, Error Types and Power|Lec 06]]

### Cohen's d
$(\mu_{H_1}-\mu_{H_0})/SD$, the effect size in standard-deviation units. Also in [[PS_06-Statistical Power and Simulation|PS 06]], [[Lec_10-Extra Credit Project and Test Selection Recap|Lec 10]]. → [[Lec_06-Two Sample Tests, Error Types and Power|Lec 06]]

## Proportions and variances

### Sample Proportion
The share of successes $\hat p=\sum X_i/n$; unbiased with variance $p(1-p)/n$. Also in [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]]. Seen in: Statistics A. → [[Lec_07-Tests for Proportions and Variances|Lec 07]]

### Single Sample Z Test for Proportion
Z test of $p=p_{H_0}$, using $p_{H_0}$ in the standard error. Also in [[PS_07-Proportion Tests and Two Sample t Test|PS 07]]. → [[Lec_07-Tests for Proportions and Variances|Lec 07]]

### Two Samples Z Test for Proportions
Z test of $p_1=p_2$, using the pooled $\hat p$ in the standard error. Also in [[PS_07-Proportion Tests and Two Sample t Test|PS 07]]. → [[Lec_07-Tests for Proportions and Variances|Lec 07]]

### Pooled Proportion
Total successes over total observations, the estimate of the common $p$ under H0. Also in [[PS_07-Proportion Tests and Two Sample t Test|PS 07]]. → [[Lec_07-Tests for Proportions and Variances|Lec 07]]

### Success-Failure Condition
$n\hat p \ge 5$ and $n(1-\hat p) \ge 5$; the check for the normal approximation. Also in [[PS_07-Proportion Tests and Two Sample t Test|PS 07]]. → [[Lec_07-Tests for Proportions and Variances|Lec 07]]

### F Distribution
The ratio of two independent chi-squared variables, $F(n,m)$ with numerator and denominator df; right-skewed. → [[Lec_07-Tests for Proportions and Variances|Lec 07]]

### F Test for Equality of Variances
Tests $\sigma_X^2/\sigma_Y^2=1$ with $S_X^2/S_Y^2$, larger variance on top. Also in [[PS_07-Proportion Tests and Two Sample t Test|PS 07]]. → [[Lec_07-Tests for Proportions and Variances|Lec 07]]

## Confidence intervals

### Confidence Interval
A range estimated from a sample in which a parameter lies with a stated confidence: estimate $\pm$ critical value $\times$ standard error. Also in [[PS_08-Confidence Intervals|PS 08]]. → [[Lec_08-Confidence Intervals|Lec 08]]

### Confidence Level
$1-\alpha$, the share of the sampling distribution the interval is built to cover. Also in [[PS_08-Confidence Intervals|PS 08]]. → [[Lec_08-Confidence Intervals|Lec 08]]

### Margin of Error
The critical value times the standard error, half the width of the interval. → [[PS_08-Confidence Intervals|PS 08]]

### Sample Size for a Confidence Interval
Solve width $\le$ target for $n$ and round up. → [[PS_08-Confidence Intervals|PS 08]]

### Duality of Confidence Intervals and Hypothesis Tests
The interval is the set of null values that are not rejected. Also in [[PS_08-Confidence Intervals|PS 08]]. → [[Lec_08-Confidence Intervals|Lec 08]]

## Chi-squared tests

### Non-Parametric Test
A test that makes no assumption about the distribution shape; used for categorical data or shape questions. Also in [[PS_09-Chi-Squared Tests for Goodness of Fit and Independence|PS 09]]. → [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]]

### Chi-Squared Statistic
$\sum (O-E)^2/E$ over the categories. → [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]]

### Observed and Expected Frequencies
$O$ is the actual count; $E=n$ times $p$ under H0. Also in [[PS_09-Chi-Squared Tests for Goodness of Fit and Independence|PS 09]]. → [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]]

### Chi-Squared Test for Goodness of Fit
Tests whether one categorical variable follows a stated distribution; $df=$ categories $-1$. Also in [[PS_09-Chi-Squared Tests for Goodness of Fit and Independence|PS 09]]. → [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]]

### Chi-Squared Test for Independence
Tests whether two categorical variables are independent; $df=(r-1)(c-1)$. Also in [[PS_09-Chi-Squared Tests for Goodness of Fit and Independence|PS 09]]. → [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]]

### Contingency Table
A table of joint counts for two categorical variables. Also in [[PS_09-Chi-Squared Tests for Goodness of Fit and Independence|PS 09]]. → [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]]

### Joint Probability
The probability of a pair of outcomes, $p(X_i,Y_j)$; under independence it equals the product of the marginals. → [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]]

### Marginal Probability
The probability of one variable's category alone, estimated from the table's margins. Also in [[PS_09-Chi-Squared Tests for Goodness of Fit and Independence|PS 09]]. → [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]]

## Joint distributions, correlation and regression

### Joint Distribution
The probabilities of every pair of values of $X$ and $Y$. Also in [[PS_11-Correlation, Regression and Simulation|PS 11]]. Seen in: Statistics A. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Marginal Distribution
The distribution of one variable ignoring the other, found by summing rows or columns. Also in [[PS_11-Correlation, Regression and Simulation|PS 11]]. Seen in: Statistics A. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Conditional Distribution
The distribution of $Y$ for a given $X=k$, a row rescaled by its total. Seen in: Statistics A. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Conditional Expected Value
The mean of a conditional distribution, $E(Y \mid X=k)$. Seen in: Statistics A. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Independence of Random Variables
$p(X,Y)=p(X)p(Y)$ for all cells. Also in [[PS_11-Correlation, Regression and Simulation|PS 11]]. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Covariance
$E((X-E(X))(Y-E(Y)))$; measures linear association and depends on units. Also in [[PS_11-Correlation, Regression and Simulation|PS 11]]. Seen in: Statistics A. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Correlation Coefficient
Population: $\rho=Cov/(SD(X)SD(Y))$, between $-1$ and $1$. Sample: Pearson's $r=Cov/(S(X)S(Y))$, which is biased but consistent; measures only linear association. Also in [[Lec_13-Exam Review Session 2|Lec 13]], [[PS_11-Correlation, Regression and Simulation|PS 11]]. Seen in: Statistics A. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Prediction
Estimating a single observation rather than a parameter. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Least Squares
The prediction that minimises expected squared error. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Linear Regression
The line $\hat Y=bX+a$ with $b=r\,s_Y/s_X$ (population $\rho\sigma_y/\sigma_x$) and $a=\bar Y-b\bar X$; passes through $(\bar X,\bar Y)$. Also in [[Lec_13-Exam Review Session 2|Lec 13]], [[PS_11-Correlation, Regression and Simulation|PS 11]], [[PP_07-Estimators, Correlation, Z and t Tests, Power, F Test, Intervals & Chi-Squared (Practice Exam)|PP 07]]. → [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]

### Outlier
A point with a large residual; it can flatten the fitted slope. → [[PP_03-Estimators, Z and t Tests, Power, F Test and Chi-Squared Tests (2024 Moed A)|PP 03]]

### Extrapolation
Predicting far outside the sampled $X$ range; the risk grows with the distance. → [[PS_11-Correlation, Regression and Simulation|PS 11]]

### Z Score
$(x-\text{mean})/SD$. → [[PS_11-Correlation, Regression and Simulation|PS 11]]

### Simulating a Dataset
Build $X$ from NORM.INV(RAND(),0,1), then $Y$ from the target line plus small normal noise. Also in [[PS_11-Correlation, Regression and Simulation|PS 11]]. → [[Lec_13-Exam Review Session 2|Lec 13]]

## Aliases & Shorthands

### CLT
See [[#Central Limit Theorem]].

### LLN
See [[#Law of Large Numbers]].

### SE
See [[#Standard Error]].

### df
See [[#Degrees of Freedom]].

### CI
See [[#Confidence Interval]].

### MLE
See [[#Maximum Likelihood Estimator]].

### Maximum Likelihood Estimate
See [[#Maximum Likelihood Estimator]].

### Invariance of MLE
See [[#MLE Invariance]].

### H0
See [[#Null Hypothesis]].

### H1
See [[#Alternative Hypothesis]].

### Power
See [[#Statistical Power]].

### Student's t Distribution
See [[#t Distribution]].

### Two-Sample t Test
See [[#Two Independent Samples t Test]].

### Two-Sample Z Test
See [[#Two Samples Z Test]].

### Proportion Z Test
See [[#Single Sample Z Test for Proportion]].

### Z Test for a Proportion
See [[#Single Sample Z Test for Proportion]].

### Two-Proportion Z Test
See [[#Two Samples Z Test for Proportions]].

### Chi-Squared Test of Independence
See [[#Chi-Squared Test for Independence]].

### Chi-Squared Goodness of Fit
See [[#Chi-Squared Test for Goodness of Fit]].

### Observed Count
See [[#Observed and Expected Frequencies]].

### Expected Count
See [[#Observed and Expected Frequencies]].

### Effect Size
See [[#Cohen's d]].

### Proportion Estimator
See [[#Sample Proportion]].

### Sampling Distribution of the Mean
See [[#Sampling Distribution of the Average]].

### One-Tailed Test
See [[#Directional Hypothesis]].

### Two-Tailed Test
See [[#Non-Directional Hypothesis]].

### Pearson's r
See [[#Correlation Coefficient]].

### Pearson Correlation
See [[#Correlation Coefficient]].

### Correlation
See [[#Correlation Coefficient]].

### Regression Line
See [[#Linear Regression]].

### Linear Regression Line
See [[#Linear Regression]].

### Prediction Line
See [[#Linear Regression]].

### Prediction Equation
See [[#Linear Regression]].

### Regression Slope
See [[#Linear Regression]].
