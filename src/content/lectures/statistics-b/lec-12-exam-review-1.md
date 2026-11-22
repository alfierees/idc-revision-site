---
title: "Lec 12 - Exam Review 1"
semester: 2
year: 1
course: "Statistics B"
lecture: 12
tags:
  - statistics-b
  - exam-review
  - unbiased-estimator
  - consistent-estimator
  - maximum-likelihood
  - hypothesis-testing
  - statistical-power
  - confidence-interval
  - chi-squared-test
  - correlation
  - linear-regression
subject: statistics-b
in_scope: true
---

# Lec 12: Exam Review 1

> Part of: [[Statistics B]]
> Reviews: [[Point Estimation]], [[Unbiased Estimator]], [[Consistent Estimator]], [[Maximum Likelihood Estimate]], [[Single Sample Z Test]], [[Two Samples Z Test]], [[Single Sample t Test]], [[Two Independent Samples t Test]], [[Statistical Power]], [[Confidence Interval]], [[Chi-Squared Test for Goodness of Fit]]

> [!info] Source
> Class 12, 46 slides (animation builds collapsed). This is the first of two exam-review sessions. The lecturer works through multiple-choice questions numbered 1 to 20 in the order he chose, **not** in numerical order: Q1 to Q5 (estimation), then Q9 to Q20 (testing, power, intervals, chi-squared), then Q6 to Q8 (correlation and regression) last. The questions are the practice exam, which becomes the note PP_07 (Practice Exam) in the Past Papers folder; this note keeps each solution short and gives the **method** the lecturer used. The question text and options sit on slide images, so they were read from the rendered pictures.

## 1. Exam details (slide 5)

The lecturer's wording was "to the best of my current knowledge", so treat these as provisional:

| Item | Detail |
|---|---|
| Date and time | Tuesday 15.7, 15:45 |
| Format | In person, Zoom or hybrid: still to be decided |
| Provided | A **formula sheet** and **Z, t, F and chi-squared tables** |
| Formula sheet issues | Tell the lecturer by 1.7.2025 if you spot a mistake |

> [!tip] What this means for revision
> Nothing has to be memorised from the tables, but you must know **which table and which row** to use (degrees of freedom, one or two tails). Several answers below are a table lookup after a short calculation.

## 2. Subjects list (slide 4)

The lecturer's checklist of what the semester covered, with the lecture where each topic lives:

| Block | Topics | Where |
|---|---|---|
| Point estimation | Law of large numbers, sampling distributions, point estimates, bias and bias correction, consistency, maximum likelihood estimation | [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]], [[Lec_03-Maximum Likelihood Estimation]] |
| Z and t tests | Z test for an expected value, for a proportion, for differences in expected values and proportions; single sample t test; two samples t test | [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], [[Lec_07-Tests for Proportions and Variances]] |
| Error and power | Statistical power, Type I and II errors, effect size (Cohen's d) | [[Lec_06-Two Sample Tests, Error Types and Power]] |
| Variances and intervals | F test for equality of variances, confidence intervals | [[Lec_07-Tests for Proportions and Variances]], [[Lec_08-Confidence Intervals]] |
| Chi-squared tests | Goodness of fit, independence | Class 9 notes (chi-squared tests) |
| Association | Pearson correlation, linear regression | Classes 10 and 11 notes |

## 3. Estimation questions (Q1 to Q5)

### Q1: sum of observations as $n$ grows (answer c)

**Method.** Write the sum as a sum of $n$ independent observations, so by the normal approximation:

$$
Sum = \sum_{i=1}^{n} X_i \sim N\left(n \cdot \mu,\; n \cdot \sigma^2\right)
$$

Both the mean $n\mu$ and the variance $n\sigma^2$ grow with $n$. Answer **c: increases; increases**. (Contrast the *average*, whose variance $\sigma^2/n$ shrinks.)

### Q2: unbiased estimator for $a$ (answer a)

$X$ takes the values $a$, $2a$, $3a$ with probabilities 0.4, 0.2, 0.4. The lecturer first computes the expected value of one observation:

$$
E(X_1) = 0.4a + 0.4a + 1.2a = 2a
$$

An [[Unbiased Estimator]] has expected value equal to the parameter, so we need a function of $X_1$ with expectation $a$. Dividing by 2 gives $E(X_1/2) = a$. Answer **a: $\hat{\theta} = X_1/2$**. The other options give $2a/3$, $4a$ and $6a$.

### Q3: unbiasedness after adding or multiplying (answer b)

$E(\hat\theta_1) = \mu - \sigma^2$ and $E(\hat\theta_2) = \mu/\sigma^2$. The slide labels the two cases **linear transformation** and **non-linear transformation**.

- Adding $S^2$ (a sum): expectation is linear, and $S^2$ is unbiased for $\sigma^2$:

$$
E(\hat\theta_1 + S^2) = E(\hat\theta_1) + E(S^2) = \mu - \sigma^2 + \sigma^2 = \mu
$$

So it is **necessarily** unbiased.

- Multiplying by $S^2$ (a product): in general $E(\hat\theta_2 \cdot S^2) \neq E(\hat\theta_2) \cdot E(S^2)$, because the two statistics need not be independent. So **not necessarily** unbiased.

Answer **b: necessarily; not necessarily**.

### Q4: consistency from the variances (answer a)

Both estimators have variances that shrink to zero:

$$
Var(\hat\theta_1) = \frac{\sigma^2}{n} + \frac{1}{n-1} \xrightarrow{n \to \infty} 0, \qquad Var(\hat\theta_2) = \frac{\sigma^2}{(n-2)^2} \xrightarrow{n \to \infty} 0
$$

The slide concludes both are consistent, so the answer is **a: a consistent; a consistent**. A [[Consistent Estimator]] needs its bias and variance to vanish as $n$ grows; the question gives only variances, so the lecturer's reading assumes no lasting bias.

### Q5: maximum likelihood from a likelihood table (answer b)

The likelihood table (slide 14):

| | $X=0$ | $X=1$ |
|---|---|---|
| $\theta=-1$ | 0 | 1 |
| $\theta=0$ | 0.5 | 0.5 |
| $\theta=1$ | 1 | 0 |

**Method.** For each observed value of $X$, read down that column and pick the $\theta$ with the largest likelihood, as in [[Lec_03-Maximum Likelihood Estimation]]. For $X=0$ the largest entry is 1 at $\theta=1$. For $X=1$ it is 1 at $\theta=-1$. So:

$$
\hat\theta = \begin{cases} 1 & X = 0 \\ -1 & X = 1 \end{cases}
$$

Answer **b**.

## 4. Testing questions (Q9 to Q17)

### Q9: single sample Z statistic (answer d)

$n=64$, $\bar X = 82$, $\sigma = 20$, $\mu_{H_0} = 74$:

$$
Z_{\bar X} = \frac{\bar X - \mu_{H_0}}{\sigma / \sqrt{n}} = \frac{82 - 74}{20/\sqrt{64}} = 3.2
$$

### Q10: two samples Z statistic (answer c)

Economics $n=100$, $\bar X = 75$; law $n=80$, $\bar Y = 70$; both $\sigma = 10$; null of equal expected values:

$$
Z_{\bar X - \bar Y} = \frac{\bar X - \bar Y - (\mu_X - \mu_Y)_{H_0}}{\sqrt{\dfrac{\sigma_X^2}{n_X} + \dfrac{\sigma_Y^2}{n_Y}}} = \frac{75 - 70 - 0}{\sqrt{\dfrac{100}{100} + \dfrac{100}{80}}} = 3.33
$$

### Q11: which test is allowed (answer d: cannot; cannot)

Ben has 35 dog walkers and 35 engineers, a non-normal distribution, and he computed **sample** standard deviations. The lecturer compares the requirements of each test (slide 21):

| Test | Requirements |
|---|---|
| Two samples Z | **Known** $\sigma_X^2, \sigma_Y^2$, and $\bar X, \bar Y \sim N$ |
| Two samples t | $\sigma_X^2 = \sigma_Y^2$ and $X, Y \sim N$ |

The variances are not known, so Z is out. The salaries are not normal, so t is out. Answer **d: cannot; cannot**. The sample size of 35 would rescue normality of the *averages* but not the "known variance" condition for Z. See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]].

### Q12: statistical power (answer c)

$n=49$, $\sigma^2 = 16$ (so $\sigma = 4$), $H_0: \mu = 30$, $\alpha = 0.05$, true $\mu = 32$. **Method:** find the critical value of $\bar X$ under $H_0$, then find the probability of landing beyond it when the truth is $\mu = 32$.

$$
\bar X_{crit} = Z_{crit} \cdot \frac{\sigma}{\sqrt{n}} + \mu_{H_0} = 1.96 \cdot \frac{4}{7} + 30 = 31.12
$$

Standardise that critical value around the **true** mean:

$$
Z_{\bar X_{crit}} = \frac{31.12 - 32}{4/7} = -1.54
$$

$$
1 - \beta = 1 - \Phi(Z_{\bar X_{crit}}) = 1 - 0.0618 = 0.9382
$$

Answer **c: 0.938**. The lecturer works only with the right-hand critical value; the left-hand tail contributes a negligible amount of power here.

![[Lec12_power_q12.png]]

*The critical value is fixed by $H_0$ (top). The part of the true distribution (bottom) that falls on the rejection side is the power. This is a theory diagram redrawn from the lecturer's two-curve picture.*

### Q13: one-tailed versus two-tailed power (answer c)

Same population and sample size. Tommy tests $H_0: \mu = 10$ (two tailed, $\alpha/2$ in each tail). Gerard tests $H_0: \mu \le 10$ (one tailed, all of $\alpha$ in the right tail).

- If the truth is $\mu > 10$: Gerard's critical value (1.645) is closer to $H_0$ than Tommy's (1.96), so more of the true distribution is rejected. **Tommy has less power.**
- If the truth is $\mu < 10$: Gerard's rejection region is on the wrong side, so his power is close to zero. Tommy still has a left-tail rejection region, so **Tommy has more power**.

Answer **c: less; more**.

![[Lec12_one_vs_two_tailed_power_q13.png]]

*Theory diagram on the z-scale (centre of $H_0$ at 0). Red lines are Tommy's two critical values, the green line is Gerard's single right-tail critical value.*

### Q14: replacing Z with t (answer c)

Poly used a t test where a Z test was possible (known variance). The lecturer's slide key points:

- The probability of a Type I error is **always** $\alpha$ so long as the test requirements are met, so $\alpha$ **did not change**.
- For the same sample, the Z test is **more powerful** than the t test (t has fatter tails and larger critical values), so using t raises $\beta$: it **increased**.

Answer **c: did not change; increased**. Note that options a and c are printed identically on the slide, and the lecturer marks c.

### Q15: single sample t test (answer d)

$n=12$, $\bar X = 8.4$, $SD = 1.3$, $\mu_{H_0} = 10$, $\alpha = 0.05$, directional ("decreases anxiety", so a left-tail test):

$$
t_{\bar X} = \frac{\bar X - \mu_{H_0}}{S_{\bar X}/\sqrt{n}} = \frac{8.4 - 10}{1.3/\sqrt{12}} = -4.26
$$

Critical value $t^{0.05}_{11} = 1.796$ (degrees of freedom $n-1 = 11$). Since $-4.26 < -1.796$, the result is **significant**. Answer **d**. See [[Single Sample t Test]].

### Q16: two samples t test (answer a)

Extra recitations: $n=25$, $\bar X = 83$, $SD = 8$. Control: $n=25$, $\bar Y = 79$, $SD = 12$. The lecturer pools and then tests:

$$
S^2_{pooled} = \frac{(n_X - 1) S_X^2 + (n_Y - 1) S_Y^2}{n_X + n_Y - 2}
$$

$$
t_{\bar X - \bar Y} = \frac{83 - 79}{\sqrt{10^2 \cdot \left(\dfrac{1}{25} + \dfrac{1}{25}\right)}} = 1.41
$$

Compared with $t^{0.05}_{48} = 1.684$, it is **not significant**. Answer **a: $t = 1.41$, not significant**.

> [!warning] The slide's pooling step is loose
> The slide writes the pooled quantity as $(24 \cdot 8 + 24 \cdot 12)/48 = 10$, which averages the **standard deviations** and then squares the result to get $10^2 = 100$. The correct pooled **variance** is $(24 \cdot 64 + 24 \cdot 144)/48 = 104$, giving $t = 4/\sqrt{104 \cdot 0.08} \approx 1.39$. The keyed option (1.41, not significant) and the conclusion are the same either way, but in your own working pool the **variances**. Also, a test of "different" is two tailed, so the strictly correct critical value is $t^{0.025}_{48} \approx 2.01$; the conclusion again does not change. See [[Pooled Variance]].

### Q17: F test for equality of variances (answer c)

Group 1: $n=16$, $SD = 2.5$. Group 2: $n=10$, $SD = 1.2$. Put the larger variance on top:

$$
F_{observed} = \frac{S_X^2}{S_Y^2} = \frac{2.5^2}{1.2^2} = 4.34
$$

The slide compares it with $F^{crit}_{15,9} = 3.01$ (numerator degrees of freedom 15, denominator 9). $4.34 > 3.01$, so $H_0$ (equal variances) is **rejected**. Answer **c: $F = 4.34$, $H_0$ rejected**. See [[Lec_07-Tests for Proportions and Variances]].

## 5. Intervals and chi-squared (Q18 to Q20)

### Q18: confidence interval for an expected value (answer d)

$n=51$, $\bar X = 44.27$, $S = 8.7$, 95% level, so $t^{1-0.025}_{50} = 2.009$:

$$
\bar X - t^{1-\alpha/2}_{n-1} \cdot \frac{S_X}{\sqrt{n}} \le \mu \le \bar X + t^{1-\alpha/2}_{n-1} \cdot \frac{S_X}{\sqrt{n}}
$$

$$
44.27 - 2.009 \cdot \frac{8.7}{\sqrt{51}} = 41.82 \le \mu \le 46.72 = 44.27 + 2.009 \cdot \frac{8.7}{\sqrt{51}}
$$

Answer **d: $41.82 \le \mu \le 46.72$**. The wrong options come from using $\sigma$ in place of $S$ or the wrong critical value. See [[Lec_08-Confidence Intervals]].

### Q19: sample size for a proportion interval (answer d)

A 95% interval for a proportion of width at most 3% (full width, not half-width). With the worst case $p = 0.5$:

$$
2 \cdot Z_{1-\alpha/2} \cdot \sqrt{\frac{p(1-p)}{n}} = \frac{2 \cdot 1.96 \cdot 0.5}{\sqrt{n}} = \frac{1.96}{\sqrt{n}} \le 0.03
$$

$$
\sqrt{n} \ge \frac{1.96}{0.03} = 65.33 \quad\Rightarrow\quad n \ge 4268.44
$$

Round **up** to $n = 4269$. Answer **d**.

> [!tip] Why $p = 0.5$
> No estimate of $p$ is given, and $p(1-p)$ is largest at 0.5, so it gives a sample size that is enough whatever the true proportion is.

### Q20: chi-squared goodness of fit (answer a)

Claimed shares: 6% widowed, 58% married, 34% single. With $n = 100$ the expected counts are 6, 58 and 34. Observed counts used on the slide are 13, 50 and 37.

> [!warning] Typo in the question
> The printed question says "13 were widowed, 50 were single and 37 were single". The working on the slide uses 13, 50 and 37 against the expected 6, 58 and 34, so the middle count of 50 must be the **married** group. That is the assumption used here.

$$
\chi^2 = \sum_{i=1}^{n} \frac{(O_i - E_i)^2}{E_i} = \frac{(13-6)^2}{6} + \frac{(50-58)^2}{58} + \frac{(37-34)^2}{34} = 9.53
$$

The critical value has $k - 1 = 2$ degrees of freedom: $\chi^2_{2} = 5.991$. Since $9.53 > 5.991$, **reject** $H_0$ (the claim). Answer **a: $\chi^2 = 9.53$, $H_0$ rejected**. See [[Chi-Squared Test for Goodness of Fit]].

## 6. Correlation and regression (Q6 to Q8)

These three come last in the session. Slides 40 to 45.

### Q6: adding an observation to a perfect correlation (answer b)

16 observations gave $r_{x,y} = 1$ (all points exactly on an upward line). A 17th observation is added.

- $r_{x,y} = 1$ **could** still hold: if the new point lies on the same line.
- $r_{x,y} = -1$ **could not** hold: that would need all 17 points on a downward line, but the first 16 already lie on an upward one.

Answer **b: could; could not**.

### Q7: mean of $Y$ from the regression line (answer b)

Slope 34, intercept 56, average fertilizer bags $\bar X = 50$. The fitted line always passes through $(\bar X, \bar Y)$, so:

$$
\bar Y = 34 \cdot 50 + 56 = 1756
$$

### Q8: zero correlation and the regression line (answer c)

With $r_{x,y} = 0$, the slope is

$$
b = r_{x,y} \cdot \frac{S_Y}{S_X} = 0 \cdot \frac{S_Y}{S_X} = 0
$$

so the slope is **necessarily** 0. The intercept is then

$$
a = \bar Y - 0 \cdot \bar X = \bar Y
$$

which equals 0 only if $\bar Y = 0$, so the intercept is **not necessarily** 0. Answer **c: not necessarily; necessarily** (the first blank is the intercept, the second the slope).

## 7. Answer key and method summary

| Q | Topic | Answer | Method in one line |
|---|---|---|---|
| 1 | Sum of observations | c | Mean $n\mu$ and variance $n\sigma^2$ both grow |
| 2 | Unbiased estimator | a | $E(X_1) = 2a$, so halve it |
| 3 | Unbiasedness | b | Sum is linear (fine), product is not |
| 4 | Consistency | a | Both variances go to 0 |
| 5 | Maximum likelihood | b | Largest likelihood in each column |
| 6 | Perfect correlation | b | $+1$ possible, $-1$ impossible |
| 7 | Regression mean | b | Line passes through the means |
| 8 | Zero correlation | c | Slope $= r \cdot S_Y/S_X = 0$, intercept $= \bar Y$ |
| 9 | Z statistic | d | $(82-74)/(20/8) = 3.2$ |
| 10 | Two samples Z | c | Standard error $\sqrt{\sigma_X^2/n_X + \sigma_Y^2/n_Y}$ |
| 11 | Test requirements | d | Z needs known variance, t needs normality |
| 12 | Power | c | Critical $\bar X$ then standardise at true mean: 0.938 |
| 13 | One- vs two-tailed power | c | Compare critical values and rejection side |
| 14 | Z vs t | c | $\alpha$ fixed; $\beta$ up |
| 15 | Single sample t | d | $t = -4.26$ vs $-1.796$ |
| 16 | Two samples t | a | $t \approx 1.41$ vs 1.684 |
| 17 | F test | c | $F = 4.34$ vs 3.01 |
| 18 | Confidence interval | d | $\bar X \pm t \cdot S/\sqrt{n}$ |
| 19 | Sample size | d | Width $= 1.96/\sqrt{n} \le 0.03$, round up |
| 20 | Chi-squared | a | $9.53$ vs 5.991 |

> [!note] Reconstructed from the slides
> Where the slide shows only the final numbers (Q4's variance limits, Q11's requirement boxes, Q13's three pictures), the explanation of *why* is reconstructed from the figures and from the earlier lectures, not from spoken commentary. The answer letters are the ones the lecturer bolded on the final build of each slide.
