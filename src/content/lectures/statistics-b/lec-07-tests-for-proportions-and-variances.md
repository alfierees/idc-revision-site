---
title: "Lec 07: Tests for Proportions and Variances"
semester: 2
year: 1
course: "Statistics B"
lecture: 7
instructor: Asael Sklar
tags:
  - statistics-b
  - hypothesis-testing
  - z-test
  - proportion
  - two-sample-test
  - variance
  - f-distribution
  - f-test
subject: statistics-b
in_scope: true
---

# Lec 07: Tests for Proportions and Variances

> Part of: [[Statistics B]]
> Key concepts: [[Sample Proportion]], [[Single Sample Z Test for Proportion]], [[Two Samples Z Test for Proportions]], [[Pooled Proportion]], [[Success-Failure Condition]], [[F Distribution]], [[F Test for Equality of Variances]], [[Hypothesis Testing Procedure]], [[Two-Tailed Test]], [[P-Value]], [[Sample Variance]]

Statistics for Economists II, Class 7 (lecturer: Asael Sklar). Until now the course tested **expected values** (a single mean, or a difference of two means). Today the same five-step logic is applied to two new parameters: a **proportion** $p$ (single population, and difference between two populations) and a **variance** $\sigma^2$ (equality of two variances). The lecture ends with a summary table of every test learned so far, and previews confidence intervals for next week.

## 1. Recap: the testing procedure and the tests so far

Slides 4 to 7 and 112 repeat earlier lectures (Lec_05 and Lec_06), so only a one-line recap here.

> [!info] The five steps (same as before)
> 1. Turn the yes/no question about the world into a question about a **parameter** in one or two populations.
> 2. Define $H_0$ and $H_1$ as values of that parameter, and choose the significance level $\alpha$.
> 3. Select the appropriate test.
> 4. Collect data and compute the test statistic.
> 5. If the observed value is unlikely (probability below $\alpha$) in its distribution **given $H_0$**, reject $H_0$ and conclude $H_1$ is supported.

The tests already known, organised by "question type" (the lecturer's summary grid, repeated on slides 5, 7 and 112):

| Parameter in question | Variance known? | Test | Distribution under $H_0$ |
| --- | --- | --- | --- |
| $\mu$ (one population) | known | single sample Z test | $N(0,1)$ |
| $\mu$ (one population) | unknown | single sample t test | $t_{n-1}$ |
| $\mu_X-\mu_Y$ (two populations) | known | two samples Z test | $N(0,1)$ |
| $\mu_X-\mu_Y$ (two populations) | unknown | two independent samples t test | $t_{n_X+n_Y-2}$ |

Test statistics for reference:

$$
Z_{\bar X}=\frac{\bar X-\mu_{H_0}}{\sigma_X/\sqrt{n}},\qquad
t_{\bar X}=\frac{\bar X-\mu_{H_0}}{S_X/\sqrt{n}}
$$

$$
Z_{\bar X-\bar Y}=\frac{(\bar X-\bar Y)-(\mu_X-\mu_Y)_{H_0}}{\sqrt{\sigma_X^2/n_X+\sigma_Y^2/n_Y}},\qquad
t_{\bar X-\bar Y}=\frac{(\bar X-\bar Y)-(\mu_X-\mu_Y)_{H_0}}{\sqrt{S_{pooled}^2\left(\frac{1}{n_X}+\frac{1}{n_Y}\right)}}
$$

> [!tip] Where today fits
> Slide 8 asks "what other parameters can we ask questions about?" Answer: the **proportion** $p$ and the **variance** $\sigma^2$. The summary grid gets two more rows.

## 2. Testing a proportion: which questions?

The kinds of yes/no questions are the same as for expected values (one-tailed or two-tailed).

**Proportion in a single population** (slide 9):

- Is the proportion of female students different from 50%?
- Is the proportion of disappointed customers greater than 3%?
- Is the proportion of patients who recover from a surgery smaller than 90%?

**Difference in proportion between two populations** (slide 10):

- Is the proportion of female students in economics different from business?
- Does an advertisement increase the proportion of customers who buy a warranty?
- Does a new treatment decrease the proportion of patients who die compared to the old treatment?

## 3. The sampling distribution of a sample proportion

Slides 11 to 26 build this up step by step. It is the foundation of both proportion tests, so it is worth being able to reproduce.

**Setup.** Each observation is a Bernoulli variable $X_i$: "success" $X_i=1$, "failure" $X_i=0$. The estimator of the population proportion is the share of successes:

$$
\hat p=\frac{\sum X_i}{n}
$$

**Step 1: the count of successes is binomial.**

$$
\sum X_i\sim B(n,p),\qquad E\Big(\sum X_i\Big)=np,\qquad Var\Big(\sum X_i\Big)=np(1-p)
$$

**Step 2: mean of $\hat p$** (divide by $n$):

$$
E(\hat p)=\frac{E\left(\sum X_i\right)}{n}=\frac{np}{n}=p
$$

So $\hat p$ is an **unbiased** estimator of $p$.

**Step 3: variance of $\hat p$** (dividing by $n$ divides the variance by $n^2$):

$$
Var(\hat p)=\frac{Var\left(\sum X_i\right)}{n^2}=\frac{np(1-p)}{n^2}=\frac{p(1-p)}{n}
$$

**Step 4: shape.** When $np>5$ and $n(1-p)>5$, the binomial count is well approximated by a normal (the same [[Central Limit Theorem]] idea as in Statistics A):

$$
\sum X_i\approx N\big(np,\ np(1-p)\big)\ \Longrightarrow\ \hat p\sim N\!\left(p,\ \frac{p(1-p)}{n}\right)
$$

**Step 5: standardise** (slide 24, "Can we standardize?"):

$$
\frac{\hat p-p}{\sqrt{\dfrac{p(1-p)}{n}}}\sim N(0,1)
$$

Under $H_0:\ p=p_{H_0}$ we know the value of $p$, so the unknown in the denominator is replaced by the hypothesised value and we get the test statistic of the next section.

> [!tip] Why a proportion test is easier than a mean test
> For a mean you need the variance $\sigma^2$ separately (known) or estimate it (so the t test). For a proportion the variance is a function of $p$, so **given $H_0$ the variance is pinned down automatically**: $Var(\hat p)=p_{H_0}(1-p_{H_0})/n$. No separate, unlikely knowledge of the variance is needed, and no t distribution (slide 52).

## 4. Single sample Z test for a proportion

> [!info] Procedure (slide 27)
> 1. **Verify** the normal approximation: $n\,p_{H_0}\ge 5$ and $n(1-p_{H_0})\ge 5$.
> 2. Define $H_1$ and the complementary $H_0$ ($H_0:\ p=p_{H_0}$); select $\alpha$.
> 3. Calculate the test statistic:
>
> $$
> Z_{\hat p}=\frac{\hat p-p_{H_0}}{\sqrt{\dfrac{p_{H_0}(1-p_{H_0})}{n}}}
> $$
>
> 4. Check the $Z$ distribution: if the probability of a value at least this extreme is below $\alpha$ (the lecturer writes $P(Z\ge Z_{\hat p})<\alpha$ for the upper-tail case), reject $H_0$.

> [!warning] Which $p$ goes in the formula?
> The check and the standard error use **$p_{H_0}$** (the hypothesised value), not $\hat p$. This is the single biggest difference from the two-sample test below, where $p$ is unknown and has to be estimated by pooling.

### Worked example: Katy and the economics students

> [!example] Slides 28 to 51
> Katy is testing whether the proportion of female economics students differs from 50%. In a random sample of 100 economics students, 30 were women. What should she conclude?

**Check conditions.**

$$
n\,p_{H_0}=0.5\cdot 100=50>5,\qquad n(1-p_{H_0})=0.5\cdot 100=50>5
$$

**Hypotheses and level.**

$$
H_1:\ p\neq 0.5,\qquad H_0:\ p=0.5,\qquad \alpha=0.05
$$

**Test statistic.** Here $p_{H_0}=0.5$, $\hat p=30/100=0.3$, $n=100$:

$$
Z_{\hat p}=\frac{0.3-0.5}{\sqrt{\dfrac{0.5\,(1-0.5)}{100}}}=\frac{-0.2}{0.05}=-4
$$

**P-value.** $P(Z<-4)=0.0000317$. The hypothesis is two-tailed, so double it:

$$
p_{value}=2\cdot P(Z<-4)=0.0000634<0.05
$$

![[Lec07_katy_z_test.png]]

**Conclusion.** Reject $H_0$: there is evidence that the proportion is significantly **smaller** than 50%. (The test was two-tailed, but the sign of $Z$ tells you which direction the difference goes.)

> [!note] Reconstructed from the slides
> The standard error $\sqrt{0.5\cdot0.5/100}=0.05$ and the intermediate step $-0.2/0.05=-4$ are my arithmetic filling the gap between slide 42 (the expression) and slide 43 (the answer $-4$). They are consistent with the slides' final value.

## 5. Testing a difference between two proportions

Slides 53 to 55. Two independent samples, each giving a proportion estimate: $\hat p_1$ (sample 1) and $\hat p_2$ (sample 2). The question: do the underlying proportions differ?

**Null hypothesis.** $H_0:\ p_1=p_2=p$, i.e. both populations share one common proportion (equivalently $p_1-p_2=0$).

**Distribution given $H_0$.** Each estimate is approximately normal with the same mean and variance formula:

$$
\hat p_1,\ \hat p_2\sim N\!\left(p,\ \frac{p(1-p)}{n}\right)\quad(\text{with } n=n_1,\ n_2\text{ respectively})
$$

The test statistic is built the same way as the two samples Z test for means (difference of two independent normals, variances add):

$$
Z_{\hat p_1-\hat p_2}=\frac{\hat p_1-\hat p_2}{\sqrt{\hat p\,(1-\hat p)\left(\dfrac{1}{n_1}+\dfrac{1}{n_2}\right)}}\sim N(0,1)
$$

**Which $\hat p$?** Under $H_0$ both samples estimate the same $p$, so the best estimate uses **all the data together**: the pooled proportion.

$$
\hat p=\frac{\hat p_1 n_1+\hat p_2 n_2}{n_1+n_2}=\frac{\text{successes}_{sample\,1}+\text{successes}_{sample\,2}}{\text{size}_{sample\,1}+\text{size}_{sample\,2}}
$$

> [!tip] Pooling intuition
> Pooling is the "weighted average of the two proportions, weighted by sample size" or, equivalently, "total successes over total observations". It only makes sense because $H_0$ says the two populations are the same.

> [!info] Procedure (slide 56)
> 1. **Verify** four conditions: $n_1\hat p_1\ge5$, $n_1(1-\hat p_1)\ge5$, $n_2\hat p_2\ge5$, $n_2(1-\hat p_2)\ge5$.
> 2. Define $H_1$ and the complementary $H_0$; select $\alpha$.
> 3. Calculate $Z_{\hat p_1-\hat p_2}$ using the pooled $\hat p$.
> 4. Check the probability under $N(0,1)$ given $H_0$; reject $H_0$ if it is below $\alpha$.

> [!warning] Different condition-check than the single-sample test
> Single-sample: check with the hypothesised $p_{H_0}$. Two-sample: check with each sample's own $\hat p_i$ (the slides do this with the observed counts, see the example below).

### Worked example: Tom's ad font colour

> [!example] Slides 57 to 77
> Tom wants to know whether changing the font colour of his ad influences the clickthrough rate (the proportion of people who click out of those who see it).
> - 1.8% of the 1000 people who saw the **blue** ad clicked it.
> - 3% of the 700 people who saw the **green** ad clicked it.
> Does font colour influence clickthrough rate?

**Check conditions.**

| Group | $n\hat p$ (successes) | $n(1-\hat p)$ (failures) |
| --- | --- | --- |
| Blue | $1.8\%\cdot1000=18$ | $1000-18=982$ |
| Green | $3\%\cdot700=21$ | $700-21=679$ |

All four are at least 5, so the normal approximation is fine.

**Hypotheses and level.** "Influences" means two-tailed:

$$
H_1:\ p_1-p_2\neq0,\qquad H_0:\ p_1-p_2=0,\qquad \alpha=0.05
$$

**Pooled proportion.**

$$
\hat p=\frac{1.8\%\cdot1000+3\%\cdot700}{1000+700}=\frac{18+21}{1700}=0.023
$$

**Test statistic.**

$$
Z_{\hat p_1-\hat p_2}=\frac{0.03-0.018}{\sqrt{0.023\,(1-0.023)\left(\dfrac{1}{1000}+\dfrac{1}{700}\right)}}=1.62
$$

**P-value.** $P(Z>1.62)=0.0526$. Two-tailed, so double it:

$$
p_{value}=2\cdot P(Z>1.62)=0.105>0.05
$$

![[Lec07_ad_font_z_test.png]]

**Conclusion.** Do not reject $H_0$: there is **no evidence that font colour influences clickthrough rate**.

> [!warning] "No evidence" is not "no effect"
> 3% against 1.8% looks like a big gap, but with only 39 clicks in total the difference is within what sampling noise could produce. Failing to reject is not proof the colours perform equally.

> [!note] Reconstructed from the slides
> The slide writes the numerator as $0.03-0.018$ (green minus blue), so the sign of $Z$ is positive; the sign does not matter for a two-tailed test. I checked the arithmetic: $0.023\cdot0.977\cdot(1/1000+1/700)\approx5.46\times10^{-5}$, square root $\approx0.00739$, and $0.012/0.00739\approx1.62$.

## 6. Testing a difference in variances

### Why test variances?

Slide 79 (repeated as slides 110 and 111 under "In practice"):

- To **check the equal-variances assumption** that sits inside the [[Two Independent Samples T Test]] (the pooled variance only makes sense if $\sigma_X^2=\sigma_Y^2$).
- Advanced procedures, not covered in this course: **ANOVA** (difference between expected values of more than two groups) and tests of **explained variance** ($R^2$) in regression.
- In practice, the equal-variances check is done with **Levene's test, Bartlett's test**, etc. (slide 111). The F test below is taught for the logic, not for practical use (see the summary slide, marked "not for practical use").

### Setup (slides 80 to 82)

Question: are the variances of two populations different? Data: two **independent** samples, an $X$ sample from the $X$ population and a $Y$ sample from the $Y$ population. Parameters: $\sigma_X^2$ and $\sigma_Y^2$; hypothesis $H_0:\ \sigma_X^2=\sigma_Y^2$. Estimators are the sample variances:

$$
S_X^2=\frac{\sum (X_i-\bar X)^2}{n_X-1},\qquad S_Y^2=\frac{\sum (Y_i-\bar Y)^2}{n_Y-1}
$$

> [!warning] Why a ratio, not a difference
> The difference $S_X^2-S_Y^2$ **does not have a workable distribution**. The lecturer's solution (slide 82) is to look at the **ratio** $S_X^2/S_Y^2$ instead. If the variances are equal the ratio should be near 1.

### From chi-squared to F (slides 83 to 88)

1. For normal data, each sample variance follows a [[Chi-Squared Distribution]]: $S_X^2\sim\chi^2_{n_X-1}$ and $S_Y^2\sim\chi^2_{n_Y-1}$ (the lecturer's shorthand, see the note below).
2. The two samples are independent, so the two variances are independent.
3. The **ratio of two independent chi-squared variables** with $n$ and $m$ degrees of freedom (numerator and denominator) follows an $F(n,m)$ distribution.

$$
\frac{S_X^2}{S_Y^2}\sim F(n_X-1,\ n_Y-1)
$$

> [!note] Reconstructed from the slides
> The slides write $S_X^2\sim\chi^2_{n_X-1}$ as shorthand. Precisely, $(n_X-1)S_X^2/\sigma_X^2\sim\chi^2_{n_X-1}$, and an $F(n,m)$ variable is $(\chi^2_n/n)\big/(\chi^2_m/m)$. Under $H_0$ the $\sigma^2$ terms cancel and the degrees-of-freedom divisions cancel against the $n-1$ and $m-1$ factors, which leaves exactly $S_X^2/S_Y^2\sim F(n_X-1,n_Y-1)$. The slides state only the result, so treat this algebra as my filling-in.

**Hypothesis in terms of the ratio** (slide 89). If $S_X^2/S_Y^2$ is the test statistic, the parameter being hypothesised about is $\sigma_X^2/\sigma_Y^2$, and

$$
H_0:\ \sigma_X^2=\sigma_Y^2\quad\Longleftrightarrow\quad H_0:\ \frac{\sigma_X^2}{\sigma_Y^2}=1
$$

### The F distribution (slide 87)

![[Lec07_f_distribution_shapes.png]]

- Defined by **two parameters**: $F(n,m)$ where $n$ is the **numerator** degrees of freedom and $m$ is the **denominator** degrees of freedom. Order matters: $F(30,40)\neq F(40,30)$.
- Takes only **positive** values and is **positively (right-)skewed**. The slide shows the standard family of density curves; the figure above is my own plot of the same idea with the degrees of freedom used in this lecture.
- With large degrees of freedom the density concentrates around 1, which is where the ratio of two equal variances should land.

## 7. F test for equality of variances

> [!info] Procedure (slide 90)
> 1. **Verify**: $X,Y$ are normally distributed and independent.
> 2. Define $H_1$ and the complementary $H_0$; select $\alpha$.
> 3. Calculate $F_{observed}=\dfrac{S_X^2}{S_Y^2}$.
> 4. Compare with the critical value from the $F(n_X-1,\ n_Y-1)$ distribution for the desired $\alpha$. Reject $H_0$ if $F_{observed}>F_{crit}$.

> [!tip] Trick: which sample is X?
> Put the **larger sample variance on top** (variable $X$, numerator) and the smaller on the bottom (variable $Y$). Then $F_{observed}\ge1$ always, and you only ever have to look at the right tail of the $F$ table. The numerator degrees of freedom then come from the sample that has the larger variance.

> [!warning] Normality really matters here
> Unlike the t test for a mean (which leans on the CLT for large samples), this test needs the **data to be normal**. That is one reason it is "not for practical use".

### Worked example: Mike and the heights

> [!example] Slides 91 to 109
> Height is normally distributed. Mike samples:
> - **41** 5th graders: $\bar X_{5th}=120$ cm, $SD_{5th}=7$.
> - **31** 10th graders: $\bar X_{10th}=150$ cm, $SD_{10th}=15$.
> Can he assume the variances are equal? (He needs this for a two independent samples t test.)

> [!note] Source slip
> Slide 91 reads "Mike is testing the hypothesis that 10th graders are taller than 5th graders" and labels the 10th graders' SD with the subscript "5th". Both are leftovers: the question being answered is whether the **variances** are equal, and the SD of 15 belongs to the 10th graders.

**Hypotheses and level.**

$$
H_0:\ \frac{\sigma_X^2}{\sigma_Y^2}=1,\qquad H_1:\ \frac{\sigma_X^2}{\sigma_Y^2}\neq1,\qquad \alpha=0.05
$$

**Test statistic.** The 10th graders have the larger variance, so they are $X$ (numerator):

$$
F_{observed}=\frac{S_X^2}{S_Y^2}=\frac{15^2}{7^2}=\frac{225}{49}=4.59
$$

**Degrees of freedom.** $n_X-1=31-1=30$ (10th graders, numerator) and $n_Y-1=41-1=40$ (5th graders, denominator), so the reference distribution is $F(30,40)$.

**Critical value.** From the F table for $\alpha=0.05$ (the slide shows a table with columns $d_1$, rows $d_2$; the value in the $d_1=30$, $d_2=40$ cell is):

$$
F(30,40)_{crit}=1.74
$$

![[Lec07_f_test_rejection.png]]

**Conclusion.** $4.59>1.74$, so reject $H_0$: the variances are significantly different and **equality of variance cannot be assumed** (so Mike should not use the pooled-variance t test).

> [!note] Reconstructed from the slides
> The slide's critical value 1.74 is the **upper-tail 5%** point of $F(30,40)$ (I confirmed this numerically: the 95th percentile is 1.744). Since $H_1$ is two-sided, a strict two-tailed test with the larger variance on top would use the **2.5% upper-tail** point, 1.94. Mike's $F=4.59$ is above both, so the conclusion does not change, but be aware that the lecturer used the one-tail $\alpha=0.05$ table value here. The slides do not discuss this point.

> [!example] Sanity check on the size of the evidence
> The probability of getting $F\ge4.59$ in $F(30,40)$ under $H_0$ is about $5\times10^{-6}$ (my computation, not on the slides), so the rejection is not borderline.

## 8. Summary: the full grid of tests

Slides 112 to 114 put everything in one table, organised by **question type** (which parameter is in question):

| Question type | Parameter | Test | Test statistic | Distribution given $H_0$ |
| --- | --- | --- | --- | --- |
| Expected value, one population, known variance | $\mu$ | Single sample Z test | $\dfrac{\bar X-\mu_{H_0}}{\sigma_X/\sqrt n}$ | $N(0,1)$ |
| Expected value, one population, unknown variance | $\mu$ | Single sample t test | $\dfrac{\bar X-\mu_{H_0}}{S_X/\sqrt n}$ | $t_{n-1}$ |
| Difference of expected values, known variances | $\mu_X-\mu_Y$ | Two samples Z test | see Section 1 | $N(0,1)$ |
| Difference of expected values, unknown variances | $\mu_X-\mu_Y$ | Two independent samples t test | see Section 1 | $t_{n_X+n_Y-2}$ |
| Proportion, one population | $p$ | Single sample Z test for proportion | $\dfrac{\hat p-p_{H_0}}{\sqrt{p_{H_0}(1-p_{H_0})/n}}$ | $N(0,1)$ |
| Difference of proportions | $p_1-p_2$ | Two samples Z test for proportions | $\dfrac{\hat p_1-\hat p_2}{\sqrt{\hat p(1-\hat p)(1/n_1+1/n_2)}}$ | $N(0,1)$ |
| Equality of variances | $\sigma_X^2/\sigma_Y^2$ | F test (not for practical use) | $S_X^2/S_Y^2$ | $F(n_X-1,\,n_Y-1)$ |

Comparison of the two proportion tests:

| | Single sample, proportion | Two samples, proportions |
| --- | --- | --- |
| $H_0$ | $p=p_{H_0}$ | $p_1=p_2$ |
| Proportion used in the standard error | hypothesised $p_{H_0}$ | pooled $\hat p$ (all successes over all observations) |
| Conditions to check | $np_{H_0}\ge5$, $n(1-p_{H_0})\ge5$ | $n_i\hat p_i\ge5$ and $n_i(1-\hat p_i)\ge5$ for both samples |
| Reference distribution | $N(0,1)$ | $N(0,1)$ |

## Summary

- A **proportion** is the mean of a Bernoulli variable. $\hat p$ is unbiased with $Var(\hat p)=p(1-p)/n$, and approximately normal when $np>5$ and $n(1-p)>5$.
- **Single sample Z test for a proportion:** standardise with the hypothesised $p_{H_0}$, which fixes the variance too (no t distribution, no separate variance). Katy: $Z=-4$, $p_{value}=0.0000634$, proportion significantly below 50%.
- **Two samples Z test for proportions:** pool the two samples into $\hat p$ because $H_0$ says they share one $p$. Tom: $\hat p=0.023$, $Z=1.62$, $p_{value}=0.105$, no evidence that font colour matters.
- **Variances:** the difference $S_X^2-S_Y^2$ has no usable distribution, so use the **ratio**. For normal independent samples, $S_X^2/S_Y^2\sim F(n_X-1,n_Y-1)$ under $H_0:\sigma_X^2=\sigma_Y^2$.
- **F test:** put the larger variance on top, compare $F_{observed}$ with the table value. Mike: $F=4.59>1.74$, equality of variances rejected.
- The F test needs normality and is not used in practice for checking the equal-variance assumption (Levene, Bartlett instead).
- **Next week:** confidence intervals.

## Related notes

- [[Statistics B]] (course hub)
- Earlier in the course: Lec_05 and Lec_06 cover the hypothesis testing procedure, the Z and t tests for expected values, and the chi-squared distribution.
- For the central limit theorem and the normal approximation to the binomial see [[Statistics A]] (Central Limit Theorem lecture).
