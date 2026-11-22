---
title: "Estimators, Z and t Tests, F Test, Confidence Intervals & Chi-Squared (2024 Moed B)"
type: past-paper
status: worked-solution
exam: "Moed B 2024"
semester: 2
year: 1
course: "Statistics B"
instructor: unknown
tags:
  - statistics-b
  - past-paper
  - worked-solution
  - multiple-choice
  - estimators
  - hypothesis-testing
  - confidence-interval
  - chi-squared
aliases:
  - Statistics B Moed B 2024
  - PP04 Statistics B
subject: statistics-b
in_scope: true
---

# Moed B 2024: Worked Solutions

> Part of: [[Statistics B]]
> **Moed B 2024**, Statistics B, 20 multiple-choice questions, official letter key printed at the end of the paper.
> Builds on: [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]], [[Lec_03-Maximum Likelihood Estimation]], [[Lec_04-Hypothesis Testing and the Z Test]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], [[Lec_06-Two Sample Tests, Error Types and Power]], [[Lec_07-Tests for Proportions and Variances]], [[Lec_08-Confidence Intervals]], [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]], [[Lec_11-Joint Distributions, Correlation and Linear Regression]]
> Key concepts: [[Unbiased Estimator]], [[Consistent Estimator]], [[Maximum Likelihood Estimator]], [[Correlation Coefficient]], [[Linear Regression]], [[Single Sample Z Test]], [[Two Samples Z Test]], [[Two Samples Z Test for Proportions]], [[Single Sample t Test]], [[Two Independent Samples t Test]], [[Statistical Power]], [[Cohen's d]], [[F Test for Equality of Variances]], [[Confidence Interval]], [[Chi-Squared Test for Goodness of Fit]], [[Chi-Squared Test for Independence]]

> [!info] Answer provenance
> The paper prints a letter-only key. For every question the working below was done independently and **reaches the keyed letter**. All 20 answers are official, no question is AI-solved, and no official answer is in doubt. Where the official letter hides a convention (Q9 sign, Q11 reading), a callout says so.

> [!note] Source details
> Marks per question are not printed. The key is the last page of the paper. Critical values that are not on the question page (Q14, Q16, Q19, Q20) are standard table values, checked numerically.

---

## What this paper tests

> [!info] One paper, the whole course in the lecture order
> 1. **Q1 to Q4**: sums and averages of random variables, and what makes an estimator [[Unbiased Estimator|unbiased]] or [[Consistent Estimator|consistent]] (Lec 1, 2).
> 2. **Q5**: [[Maximum Likelihood Estimator|maximum likelihood]] read off a likelihood table (Lec 3).
> 3. **Q6, Q7**: correlation under rescaling, and what a correlation of zero means for the regression line (Lec 11).
> 4. **Q8 to Q11, Q14, Q15**: choosing and computing the right test statistic for one or two means or proportions (Lec 4 to 7).
> 5. **Q12, Q13**: power and effect size (Lec 6).
> 6. **Q16**: the F test for equal variances (Lec 7).
> 7. **Q17, Q18**: confidence intervals and required sample size (Lec 8).
> 8. **Q19, Q20**: the two chi-squared tests (Lec 9).
>
> The paper is mostly **plug into the formula sheet** (Formula sheet extended 2025). Speed comes from recognising the test type first: how many samples, mean or proportion, variance known or not.

---

# Part A: Multiple choice

## Q1 — Sum of 15 butterflies, average of 10 collections

**Question.** One butterfly has expected weight 5 g and variance 4. A show has 10 collections of 15 butterflies each. The association reports each collection's **total** weight. John averages those 10 totals. The expected value of what John calculates is ___ and its variance is ___. (a. 5, 6; b. 5, 60; c. 75, 6; d. 75, 60)

**Step 1: one collection total.** A total of 15 independent butterflies, $S = X_1 + \dots + X_{15}$:

$$
E(S) = 15 \cdot 5 = 75, \qquad Var(S) = 15 \cdot 4 = 60
$$

**Step 2: average of 10 totals.** With $\bar S = \frac{1}{10}\sum S_j$ and independent collections:

$$
E(\bar S) = 75, \qquad Var(\bar S) = \frac{Var(S)}{10} = \frac{60}{10} = 6
$$

> [!success] Answer: **C. 75, 6** (official key: C)

> [!warning] Traps
> Option **a** (5, 6) forgets that John averages *totals*, not single butterflies. Option **d** (75, 60) forgets to divide the variance by 10 for the average. Option **b** gets both wrong. Variances of sums add, the variance of an average divides by the number of items averaged ([[Sampling Distribution of the Average]]).

---

## Q2 — Unbiased estimator for a

**Question.** $P(X=1) = 1-3a$, $P(X=2) = a$, $P(X=3) = 2a$. $\bar X$ is the average of 30 observations. Which is an unbiased estimator for $a$? (a. $\bar X - 5$; b. $5(\bar X - 1)$; c. $5\bar X$; d. $\frac{\bar X - 1}{5}$)

**Step 1: expected value of $X$ in terms of $a$.**

$$
E(X) = 1(1-3a) + 2(a) + 3(2a) = 1 - 3a + 2a + 6a = 1 + 5a
$$

**Step 2: solve for $a$ and replace $E(X)$ by $\bar X$.** Since $E(\bar X) = E(X) = 1 + 5a$:

$$
a = \frac{E(X) - 1}{5} \quad\Rightarrow\quad \hat a = \frac{\bar X - 1}{5}
$$

**Check.** $E(\hat a) = \frac{E(\bar X) - 1}{5} = \frac{1 + 5a - 1}{5} = a$, so it is unbiased.

> [!success] Answer: **D** (official key: D)

> [!tip] Intuition
> This is the method-of-moments idea: write the mean as a function of the unknown parameter, invert it, and plug the sample average in. The same pattern appears in [[Lec_01-Point Estimation and Sampling Distributions]].

Why the others fail: **a** gives $E = 1 + 5a - 5 = 5a - 4$; **b** gives $5(5a) = 25a$; **c** gives $5 + 25a$. None equals $a$.

---

## Q3 — Unbiased estimator from a scaled one

**Question.** $E(\hat\theta) = 5\theta$ and $Var(\hat\theta) = \theta/2$. Which is unbiased for $\theta$? (a. $\hat\theta/5$; b. $\hat\theta/2$; c. $5\hat\theta$; d. $2\hat\theta$)

Unbiased means the expected value equals the parameter. Dividing by 5:

$$
E\left(\frac{\hat\theta}{5}\right) = \frac{5\theta}{5} = \theta
$$

> [!success] Answer: **A** (official key: A)

The variance, $\theta/2$, is a distraction: bias depends only on the expected value. Option b gives $2.5\theta$, c gives $25\theta$, d gives $10\theta$.

---

## Q4 — Biased but consistent

**Question.** $E(\hat\theta) = \theta/2$ and $Var(\hat\theta) = \theta/n$. The estimator is ___ and ___ for $\theta$. (a. unbiased, consistent; b. unbiased, not consistent; c. biased, consistent; d. biased, not consistent)

- **Bias.** $E(\hat\theta) = \theta/2 \neq \theta$, so the estimator is **biased**.
- **Consistency** (formula sheet: variance goes to zero as $n \to \infty$).

$$
Var(\hat\theta) = \frac{\theta}{n} \xrightarrow[n\to\infty]{} 0
$$

so it is **consistent** by the lecture's definition.

> [!success] Answer: **C. A biased; consistent** (official key: C)

> [!warning] Course definition of consistency
> The formula sheet defines consistent as $Var(\hat\theta) \to 0$, so under the course's working definition the question is decided by the variance alone. That is why the keyed answer is **c** and not d. The estimator concentrates tightly around the wrong number, $\theta/2$.

---

## Q5 — Maximum likelihood from a table

**Question.** Likelihood table. For $X=0$: $L(\theta=0)=0.5$, $L(\theta=1)=0.6$, $L(\theta=2)=0.8$. For $X=1$: $L(\theta=0)=0.5$, $L(\theta=1)=0.4$, $L(\theta=2)=0.2$. Which $\hat\theta$ is the MLE?

The MLE picks, for each observed value of $X$, the $\theta$ with the **largest likelihood in that column**.

- $X=0$: the largest is 0.8, at $\theta=2$.
- $X=1$: the largest is 0.5, at $\theta=0$.

So $\hat\theta = 2$ if $X=0$ and $\hat\theta = 0$ if $X=1$.

![[PP04_q5_likelihood_max_per_column.png|640]]

*Each panel is one observed value of X. The red bar is the likelihood-maximising candidate.*

> [!success] Answer: **A** (official key: A)

> [!warning] Compare down the column, not across the row
> Likelihood is read for a **fixed observed X**, varying $\theta$. Comparing across a row (as in option b, which picks the middle likelihoods) mixes different data. See [[Lec_03-Maximum Likelihood Estimation]] ([[Likelihood]]).

---

## Q6 — Changing currency

**Question.** The correlation between salary (USD) and IQ is $r = 0.25$. David converts salaries to shekels (multiplying by about 3.6) and recomputes. The SD of salaries will ___ and $r$ will ___. (a. increase, stay the same; b. increase, decrease; c. stay the same, stay the same; d. stay the same, decrease)

- **SD.** $SD(bX) = |b|\,SD(X)$ with $b = 3.6$, so the SD is multiplied by 3.6: it **increases**.
- **Correlation.** From the formula sheet, $\rho(bX + a, dY + c) = \pm\rho(X,Y)$, with the sign given by $b \cdot d$. Here $b = 3.6$ and $d = 1$, so $b \cdot d > 0$ and $r$ is unchanged: **stays the same**.

> [!success] Answer: **A. Increase; stay the same** (official key: A)

> [!tip] Intuition
> Correlation is built on standardised values: $\rho = E(Z_X Z_Y)$. Changing units changes the scale but standardising removes it again. Correlation is **unit-free**. See [[Correlation Coefficient]] and [[Lec_11-Joint Distributions, Correlation and Linear Regression]].

---

## Q7 — Zero correlation and predicted happiness

**Question.** The correlation between happiness and height is 0. Mean happiness 5.7, mean height 1.7 m. Yonatan is 1.8 m, Avi is 1.5 m. A regression line is fitted. Yonatan's predicted happiness is ___ Avi's. (a. higher than; b. equal to; c. lower than; d. not enough information)

The slope is

$$
b = r_{x,y}\cdot\frac{s_y}{s_x} = 0 \cdot \frac{s_y}{s_x} = 0
$$

and the intercept is $a = \bar Y - b\bar X = 5.7$. Hence $\hat Y = 5.7$ for **every** height, so both predictions equal 5.7.

![[PP04_q7_flat_regression_line.png|640]]

*With r = 0 the best linear prediction is the sample mean of happiness, whatever the height.*

> [!success] Answer: **B. Equal to** (official key: B)

Option d is tempting because $s_y$ and $s_x$ are not given, but they are not needed: anything finite times zero is zero ([[Linear Regression]]).

---

## Q8 — Z statistic for the scooter initiative

**Question.** Commute time: mean 27 min, SD 14 min (population values, so known). 50 residents get scooters, average 24 min. Z test of whether scooters reduce commute time. Z = ?

The population SD is known and $n = 50 \ge 30$, so use the [[Single Sample Z Test]]:

$$
Z_{\bar X} = \frac{\bar X - \mu_{H_0}}{\sigma/\sqrt{n}} = \frac{24 - 27}{14/\sqrt{50}} = \frac{-3}{1.980} = -1.515 \approx -1.52
$$

> [!success] Answer: **B. Z = -1.52** (official key: B)

The sign is negative because the sample average is below the null mean, which is the direction of the research hypothesis. The standard error is $14/\sqrt{50} = 1.98$. Dividing by the raw SD of 14 instead would give only $-0.21$, so the wrong options are not obtainable by simple slips; compute the standard error first.

---

## Q9 — Mechanical vs electrical engineers (two-sample Z)

**Question.** Mechanical: $n = 40$, mean 68,000, $\sigma = 13{,}000$. Electrical: $n = 50$, mean 72,000, $\sigma = 18{,}000$. Z test of equal means. Z = ?

Known variances, so the [[Two Samples Z Test]]:

$$
Z = \frac{(\bar X - \bar Y) - 0}{\sqrt{\frac{\sigma_X^2}{n_X} + \frac{\sigma_Y^2}{n_Y}}}
$$

**Standard error.**

$$
\sqrt{\frac{13000^2}{40} + \frac{18000^2}{50}} = \sqrt{4{,}225{,}000 + 6{,}480{,}000} = \sqrt{10{,}705{,}000} \approx 3272
$$

**Statistic.** The gap is 4,000, so $|Z| = 4000/3272 = 1.22$.

> [!success] Answer: **B. Z = 1.22** (official key: B)

> [!warning] Sign convention
> Writing the mechanical group first gives $Z = -1.22$; writing the electrical group first gives $+1.22$. The paper lists only the positive value, so the key uses electrical minus mechanical. Magnitude is what matters for a two-sided test of equal means.

---

## Q10 — Two proportions: retail workers vs mechanics

**Question.** Retail: $n = 150$, 38% happy. Mechanics: $n = 100$, 48% happy. Test of no difference in proportions. Which Z, and is it significant?

Use the [[Two Samples Z Test for Proportions]] with the **pooled proportion**, because $H_0$ says the proportions are equal.

**Pooled proportion.**

$$
\hat p = \frac{0.38 \cdot 150 + 0.48 \cdot 100}{250} = \frac{57 + 48}{250} = 0.42
$$

**Standard error and statistic.**

$$
SE = \sqrt{0.42 \cdot 0.58 \left(\frac{1}{150} + \frac{1}{100}\right)} = \sqrt{0.2436 \cdot 0.016667} = 0.0637
$$

$$
Z = \frac{0.48 - 0.38}{0.0637} = 1.57
$$

**Decision.** A two-sided test at $\alpha = 0.05$ needs $|Z| > 1.96$. Since $1.57 < 1.96$ the result is **not significant** (two-sided p-value about 0.116).

> [!success] Answer: **A. Z = 1.57, not significant** (official key: A)

Option c and d (2.57) come from not pooling or mis-computing the standard error. The check on the requirements holds: $n_1\hat p_1$, $n_1(1-\hat p_1)$ and the same for group 2 are all at least 5.

---

## Q11 — Z test versus t test with a non-normal population

**Question.** Babies' sleep duration has a **known** SD of 150 minutes but is **not normally distributed**. Two samples of 50. Aron ___ a two-samples Z test and ___ a two-samples t test. (a. can, can; b. can, cannot; c. cannot, can; d. cannot, cannot)

**Z test: can.** Requirements for the [[Two Samples Z Test]]: known variances, and the two averages must be normal. With $n = 50 \ge 30$ per group, the [[Central Limit Theorem]] makes each average approximately normal, even though the raw data are not.

**t test: cannot.** Requirements for the [[Two Independent Samples t Test]] on the formula sheet: $X, Y \sim N$ (the data themselves normal) and equal variances. Sleep duration is not normal, so this requirement fails. In addition, the t test exists for the case of **unknown** variance, and here the variance is known, so the Z test is the right tool.

> [!success] Answer: **B. Can; Cannot** (official key: B)

> [!tip] Intuition
> Large samples rescue the Z test through the CLT because the statistic is about the average. The t test's t-distribution is derived assuming normal data, and the course's requirement list for it says the variable itself must be normal.

---

## Q12 — Bigger sample, more power, larger t

**Question.** Gila repeats an experiment with 1,000 instead of 100 participants, same test, same $\alpha$. She has ___ power. With equal sample averages and SDs, the t statistic is ___ in the second experiment. (a. less, larger; b. less, smaller; c. more, larger; d. more, smaller)

- **Power.** A larger $n$ shrinks the standard error $\sigma/\sqrt{n}$, which narrows the sampling distribution under both hypotheses. They overlap less, so $\beta$ falls and power $1-\beta$ rises: **more**. See [[Statistical Power]].
- **t statistic.**

$$
t = \frac{\bar X - \mu_{H_0}}{S/\sqrt{n}}
$$

With the same $\bar X$ and $S$, the denominator shrinks, so $|t|$ grows by a factor of $\sqrt{1000/100} = \sqrt{10} \approx 3.16$: **larger**.

> [!success] Answer: **C. More; larger** (official key: C)

---

## Q13 — Effect size and error probabilities

**Question.** Anna's method has Cohen's $d = 0.5$, Robin's $d = 0.2$. Both use 30 treated vs 30 control engines, same test and $\alpha$. Which is true? (a. $\alpha$ larger for Anna; b. $\alpha$ smaller for Anna; c. $\beta$ larger for Anna; d. $\beta$ smaller for Anna)

- **$\alpha$** is chosen by the researcher: "same significance level" means it is the same, so a and b are false.
- **$\beta$.** A bigger effect size means the true distribution under $H_1$ sits further from the null distribution (the formula sheet defines $d = \frac{\mu_{H_1} - \mu_{H_0}}{\sigma_X}$). With the same $n$ and $\alpha$, the further apart they are the less they overlap, so Anna's power is higher and her $\beta$ is **smaller**.

> [!success] Answer: **D** (official key: D)

> [!warning] $\alpha$ is a choice, $\beta$ is a consequence
> Type I error probability is fixed by the researcher's chosen level and does not depend on the true effect. Type II error depends on effect size, sample size, $\alpha$ and the variance ([[Lec_06-Two Sample Tests, Error Types and Power]]).

---

## Q14 — Single sample t test on machine oil

**Question.** New oil on 8 machines: $\bar X = 2.7$ breakdowns per month, $SD = 0.8$. Standard oil is normally distributed with mean 3. Single sample t test, $\alpha = 0.05$. Test statistic and significant?

Variance unknown and the population is normal, so the [[Single Sample t Test]]:

$$
t = \frac{\bar X - \mu_{H_0}}{S/\sqrt{n}} = \frac{2.7 - 3}{0.8/\sqrt{8}} = \frac{-0.3}{0.2828} = -1.06
$$

**Decision.** Degrees of freedom $n - 1 = 7$. "Works better" means fewer breakdowns, a left-tailed test: reject if $t < -t_{7,\,0.95} = -1.895$. Since $-1.06 > -1.895$, **not significant**. (Even a two-tailed test, critical value $\pm 2.365$, gives the same decision.)

> [!success] Answer: **A. t = -1.06, not significant** (official key: A)

Options c and d (t = -3) forget to divide $\sqrt{8}$ out of $0.8$, treating the SD as if it were the standard error.

---

## Q15 — Two-sample t test, extra recitations

**Question.** Extra recitations: $n = 25$, mean 78, SD 5. Control: $n = 25$, mean 72, SD 11. Two-sample t test, $\alpha = 0.05$. Test statistic?

Variances unknown, assumed equal: the [[Two Independent Samples t Test]] with [[Pooled Variance]].

$$
S^2_{pooled} = \frac{(n_X - 1)S_X^2 + (n_Y - 1)S_Y^2}{n_X + n_Y - 2} = \frac{24 \cdot 25 + 24 \cdot 121}{48} = \frac{25 + 121}{2} = 73
$$

$$
t = \frac{78 - 72}{\sqrt{73\left(\frac{1}{25} + \frac{1}{25}\right)}} = \frac{6}{\sqrt{5.84}} = \frac{6}{2.417} = 2.48
$$

> [!success] Answer: **C. t = 2.48** (official key: C)

> [!tip] Equal group sizes
> With $n_X = n_Y$ the pooled variance is just the plain average of the two sample variances, which makes the calculation quick. Degrees of freedom are 48; the two-tailed critical value is about 2.01, so this result would be significant, though the question only asks for the statistic.

---

## Q16 — F test for equality of variances

**Question.** Group 1: $n = 13$, $SD = 5.5$. Group 2: $n = 17$, $SD = 5.2$. F test for equal variances. Which F, and was $H_0$ rejected?

Per the formula sheet, label the variable with the **larger variance as X** (numerator):

$$
F = \frac{S_X^2}{S_Y^2} = \frac{5.5^2}{5.2^2} = \frac{30.25}{27.04} = 1.12
$$

Degrees of freedom: $(n_X - 1,\ n_Y - 1) = (12, 16)$. The upper-tail critical value is about 2.42 at 5% one-tailed and 2.89 for a strict two-tailed test at 5%. Either way $1.12$ is far below it, so $H_0$ is **not rejected**.

![[PP04_q16_f_test_not_rejected.png|640]]

*The observed F sits near the middle of the F(12, 16) distribution, nowhere near the rejection tail. The 2.89 cutoff is the 97.5th percentile (computed numerically).*

> [!success] Answer: **A. F = 1.12, H0 not rejected** (official key: A)

> [!warning] Trap
> Remember to **square** the SDs: $5.5/5.2$ is only 1.06 and squaring gives 1.12. F = 2.62 (options c, d) is not what these numbers produce; both groups have almost the same spread. See [[F Test for Equality of Variances]].

---

## Q17 — Sample size for a confidence interval

**Question.** 95% CI for the mean throw distance, at most 2 m wide, population SD 10 m (normal). How many 14-year-olds?

Width $= 2 \cdot Z_{0.975}\cdot\frac{\sigma}{\sqrt{n}} \le 2$, so the half-width must be at most 1:

$$
1.96 \cdot \frac{10}{\sqrt{n}} \le 1 \quad\Rightarrow\quad \sqrt{n} \ge 19.6 \quad\Rightarrow\quad n \ge 384.16
$$

Round **up** (a smaller $n$ would give a wider interval): $n = 385$. Of the options, the smallest sample that works is 385.

> [!success] Answer: **D. 385** (official key: D)

> [!warning] Always round up
> The nearest option to 384.16 is 385, and the other options are all too small or far too large (285 gives a width of about 2.32, which is too wide). Compare [[Lec_08-Confidence Intervals]] on what sets the width ([[Standard Error]], confidence level, $n$).

---

## Q18 — CI for a proportion

**Question.** 50 people surveyed, 60% willing to pay more than 300 USD. 95% CI for the population proportion?

From the formula sheet's CI for a proportion, using $\hat p$ in the standard error:

$$
SE = \sqrt{\frac{\hat p(1 - \hat p)}{n}} = \sqrt{\frac{0.6 \cdot 0.4}{50}} = \sqrt{0.0048} = 0.0693
$$

$$
\text{margin} = 1.96 \cdot 0.0693 = 0.136
$$

$$
0.6 \pm 0.136 \quad\Rightarrow\quad 0.46 \le p \le 0.74
$$

(The success-failure rule holds: $50 \cdot 0.6 = 30$ and $50 \cdot 0.4 = 20$, both at least 5.)

> [!success] Answer: **C. 0.46 ≤ p ≤ 0.74** (official key: C)

Option b (0.36 to 0.84) is a margin of 0.24, about twice too wide. Option d (0.56 to 0.64) is far too narrow, as if $n$ were in the thousands.

---

## Q19 — Chi-squared goodness of fit: graduates' incomes

**Question.** Census: 53% earn under 7,500, 34% earn 7,501 to 12,000, 13% earn over 12,000. Sample of 200 graduates: 64, 86, 70. Goodness-of-fit test at $\alpha = 0.05$.

**Expected counts** under $H_0$ ($E_i = N \cdot p_i$ with $N = 200$): $106$, $68$ and $26$. All are at least 5.

| Group | Observed | Expected | $(O-E)^2/E$ |
|---|---|---|---|
| Under 7,500 | 64 | 106 | $42^2/106 = 16.64$ |
| 7,501 to 12,000 | 86 | 68 | $18^2/68 = 4.76$ |
| Over 12,000 | 70 | 26 | $44^2/26 = 74.46$ |

$$
\chi^2 = 16.64 + 4.76 + 74.46 = 95.87
$$

**Decision.** Degrees of freedom $= k - 1 = 3 - 1 = 2$, critical value $5.99$ at 5%. Since $95.87 \gg 5.99$, **reject** $H_0$: these graduates do not match the national distribution (many more high earners than expected).

![[PP04_q19_q20_chi_squared_regions.png|640]]

*Left panel: Q19, the statistic is far beyond the chi-squared (df = 2) cutoff. Right panel: Q20, the statistic is below the cutoff.*

> [!success] Answer: **D. chi-squared = 95.87, rejected H0** (official key: D)

See [[Chi-Squared Test for Goodness of Fit]] and [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]].

---

## Q20 — Chi-squared independence: gender and liking lemons

**Question.** 80 people: 32 men like lemons, 8 men do not, 26 women like lemons, 14 women do not. Test independence at $\alpha = 0.05$.

**Observed table with totals.**

| | Likes lemons | Does not like | Total |
|---|---|---|---|
| Men | 32 | 8 | 40 |
| Women | 26 | 14 | 40 |
| Total | 58 | 22 | 80 |

**Expected counts** under independence, $E_{ij} = N\cdot p(X_i)\cdot p(Y_j)$, equivalently (row total times column total) over $N$:

| | Likes lemons | Does not like |
|---|---|---|
| Men | $40 \cdot 58/80 = 29$ | $40 \cdot 22/80 = 11$ |
| Women | $29$ | $11$ |

All expected counts are at least 5. Each cell is off by $|O - E| = 3$:

$$
\chi^2 = \frac{3^2}{29} + \frac{3^2}{11} + \frac{3^2}{29} + \frac{3^2}{11} = 0.310 + 0.818 + 0.310 + 0.818 = 2.26
$$

**Decision.** Degrees of freedom $(2-1)(2-1) = 1$, critical value $3.84$. Since $2.26 < 3.84$, **do not reject** $H_0$: no significant evidence of dependence between gender and liking lemons.

> [!success] Answer: **C. chi-squared = 2.26, did not reject H0** (official key: C)

> [!warning] Trap
> The statistic is the same for any cell labelling, so the only real choices are 12.26 vs 2.26 (an arithmetic slip) and reject vs not. Always compare with the df = $(rows-1)(columns-1)$ critical value, not the df of a goodness-of-fit test. See [[Chi-Squared Test for Independence]].

---

# Recap table

| Q | Topic | Key tool | Answer (official) |
|---|---|---|---|
| 1 | Sum and average of independent variables | $Var(\text{sum})$ adds, $Var(\bar S)$ divides by 10 | C (75, 6) |
| 2 | Unbiased estimator for a | $E(X) = 1 + 5a$, invert | D |
| 3 | Rescale to unbiased | $E(\hat\theta/5) = \theta$ | A |
| 4 | Bias and consistency | bias $\ne 0$, variance $\to 0$ | C |
| 5 | MLE from table | max of each column | A |
| 6 | Unit change | SD scales, $r$ unchanged | A |
| 7 | Zero correlation | slope 0, flat line | B |
| 8 | One-sample Z | $-1.52$ | B |
| 9 | Two-sample Z | $1.22$ | B |
| 10 | Two proportions, pooled | $1.57$, not significant | A |
| 11 | Z vs t requirements | CLT rescues Z, t needs normality | B |
| 12 | Power and t vs $n$ | more power, larger t | C |
| 13 | Cohen's d | $\beta$ smaller, $\alpha$ the same | D |
| 14 | One-sample t | $-1.06$, not significant | A |
| 15 | Two-sample t (pooled) | $2.48$ | C |
| 16 | F test | $1.12$, not rejected | A |
| 17 | CI sample size | $n \ge 384.16 \to 385$ | D |
| 18 | CI for proportion | $0.46 \le p \le 0.74$ | C |
| 19 | Chi-squared GOF | $95.87$, reject | D |
| 20 | Chi-squared independence | $2.26$, do not reject | C |

---

## Related notes

[[Statistics B]] · [[Lec_01-Point Estimation and Sampling Distributions]] · [[Lec_02-Point Estimation and the Variance Estimator]] · [[Lec_03-Maximum Likelihood Estimation]] · [[Lec_04-Hypothesis Testing and the Z Test]] · [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] · [[Lec_06-Two Sample Tests, Error Types and Power]] · [[Lec_07-Tests for Proportions and Variances]] · [[Lec_08-Confidence Intervals]] · [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]] · [[Lec_11-Joint Distributions, Correlation and Linear Regression]]
