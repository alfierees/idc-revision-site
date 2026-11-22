---
title: "Lec 05: Z Tests, t Tests and Two-Sample Tests"
semester: 2
year: 1
course: "Statistics B"
lecture: 5
tags:
  - statistics-b
  - hypothesis-testing
  - z-test
  - t-test
  - critical-value
  - chi-squared
  - students-t-distribution
  - two-sample-test
subject: statistics-b
in_scope: true
---

# Lec 05: Z Tests, t Tests and Two-Sample Tests

> Part of: [[Statistics B]]
> Key concepts: [[Hypothesis Testing Procedure]], [[Critical Value]], [[Single Sample Z Test]], [[Single Sample t Test]], [[Chi-Squared Distribution]], [[Student's t Distribution]], [[Degrees of Freedom]], [[Two Samples Z Test]], [[Two Independent Samples t Test]], [[Pooled Variance]], [[P-Value]]

Source: `Class 05.pptx` (186 slides, animation builds collapsed). The lecture walks through Exercise 4 questions 2 and 3, introduces **critical values**, then builds the family of tests for an expected value: first for **one population** (Z test when the variance is known, t test when it is not), then for the **difference between two populations**.

> [!info] Recap from earlier lectures (about 23 slides)
> The "Hypothesis testing procedure" slide appears over and over as a progress marker, repeated from Lecture 4. One line: start from a yes/no question, name the parameter, write $H_0$ and $H_1$ as values of the parameter, choose a test and significance level $\alpha$, collect data, and reject $H_0$ if the observed statistic is unlikely (probability below $\alpha$) in its distribution given $H_0$.

---

## 1. Exercise 4 walk-through

### Question 2: did the new teaching method help?

> [!example] The problem
> An accounting course has had an average score of 50 with standard deviation 12 for many years. A random sample of **81** students taught with a new computerised method averages **52.7**. What should the professor conclude?

Following the procedure step by step:

1. **Parameter:** $\mu$, the mean score under the new method.
2. **Hypotheses:** the professor wants to know if scores *improve*, so $H_1$ is directional.

$$
H_1: \mu > 50 \qquad H_0: \mu \le 50
$$

3. **Test:** a [[Single Sample Z Test]]. Conditions: the distribution of the average under $H_0$ is normal (here $n = 81 \ge 30$, so the central limit theorem gives this) and the standard deviation is known ($\sigma = 12$).
4. **Statistic:**

$$
Z_{\bar X} = \frac{\bar X - \mu_{H_0}}{\sigma_X / \sqrt{n}} = \frac{52.7 - 50}{12 / \sqrt{81}} = \frac{2.7}{4/3} = 2.025
$$

5. **Compare with the critical value** $Z_{crit} = 1.65$ (for $\alpha = 0.05$, one-tailed, see section 2): $2.025 > 1.65$.

> [!tip] Conclusion
> Reject $H_0$. There is evidence that the new method is better.

Note that $H_0$ is written as $\mu \le 50$ (the complement of $H_1$), but the test is run at the boundary value $\mu_{H_0} = 50$, which is the most favourable case for $H_0$.

### Question 3: directional vs non-directional tests

> [!example] The problem
> Two statisticians test the same large database. **A** tests $H_1: \mu > 10$ (directional). **B** tests $H_1: \mu \ne 10$ (non-directional).

The key picture: A puts the whole rejection probability $\alpha$ in the right tail. B splits it, $\alpha/2$ in each tail, so B's right-hand critical value sits further out.

![[Lec05_one_vs_two_tailed.png]]

| Part | Setup | Answer | Why |
|---|---|---|---|
| i | Same $\alpha$. A rejected. Must B reject? | **No** | A's critical region starts closer to the centre. A statistic between A's and B's critical values rejects for A but not for B. |
| ii | Same $\alpha$. B rejected. Must A reject? | **No** | B may have rejected through the **left** tail, which A's right-tailed test ignores. |
| iii | A rejected at $\alpha = 0.05$. B uses $\alpha = 0.1$. Must B reject? | **Yes** | B's right tail has area $0.1/2 = 0.05$, which is exactly A's critical region, so anything A rejected, B rejects too. |

> [!warning] Common mistake
> Parts i and ii both ask whether a rejection "carries over". It does not, in either direction, when $\alpha$ is equal. Only when B's $\alpha$ is doubled does B's right tail match A's.

> [!note] Reconstructed from the slides
> The answers and the shaded regions are on the slides. The one-sentence reasons in the table (especially the left-tail argument for part ii) are my wording of what the diagrams show.

---

## 2. Critical values

A **critical value** is the cut-off on the test statistic's distribution (given $H_0$) beyond which the statistic is "unlikely enough" to reject $H_0$. The area beyond it is $\alpha$, and the region beyond it is the **critical region**.

For $\alpha = 0.05$ and $H_1: \mu > \mu_0$:

$$
P\big(Z > Z_{critical}\big) = 0.05 \quad\Rightarrow\quad Z_{critical} = 1.65
$$

![[Lec05_critical_value_one_tailed.png]]

If the observed statistic falls inside the critical region, reject $H_0$. This is equivalent to the p-value rule "reject if $p < \alpha$", but needs only a table lookup, so it is the **manual method**.

| Hypothesis type | Critical value(s) for $\alpha = 0.05$ (Z) | Rule |
|---|---|---|
| Directional, $H_1: \mu > \mu_0$ | $1.65$ | reject if $Z > 1.65$ |
| Non-directional, $H_1: \mu \ne \mu_0$ | $\pm 1.96$ (area $\alpha/2 = 0.025$ in each tail) | reject if $Z < -1.96$ or $Z > 1.96$ |

> [!warning] Two-tailed tests use $\alpha/2$
> For a non-directional hypothesis look up the critical value for $\alpha/2$, not $\alpha$. The slides stress this again in the t-test examples.

---

## 3. Single sample Z test

Answers questions about the **expected value of one population** when the **variance is known**.

**Requirements:** the distribution of the average under $H_0$ is normal (the population is normal, or $n \ge 30$), and $\sigma_X$ is known.

**Test statistic and distribution given $H_0$:**

$$
Z_{\bar X} = \frac{\bar X - \mu_{H_0}}{\sigma_X/\sqrt{n}} \sim N(0,1)
$$

**Procedure:**

1. Verify the requirements.
2. Define $H_1$ and the complementary $H_0$, select $\alpha$.
3. Compute $Z_{\bar X}$.
4. Check the $Z$ distribution: reject $H_0$ if $p(Z \ge Z_{\bar X}) < \alpha$ (or the statistic passes the critical value).

The worked example is Exercise 4 question 2 above.

> [!question] What if the variance is not known?
> That is the motivating question for the t test. The slides point out that the Z test needs *both* a normal average *and* a known variance.

---

## 4. Building up to the t test

If $\sigma_X$ is unknown, replace it with the sample standard deviation:

$$
t_{\bar X} = \frac{\bar X - \mu_{H_0}}{S_X/\sqrt{n}}, \qquad S_X = \sqrt{\frac{\sum (X_i - \bar X)^2}{n-1}}
$$

**Is $t_{\bar X} \sim N(0,1)$? No.** The numerator is a normal variable and the denominator now contains a random quantity, $S_X$, instead of a constant. The slides lay this out as three ingredients:

| Piece | Distribution |
|---|---|
| $\bar X$ (numerator) | normal |
| $\sigma_X$ and $\sqrt{n}$ | constants |
| $S_X$ (new, random) | related to a [[Chi-Squared Distribution]] with $n-1$ degrees of freedom |

The fraction of a normal variable over a chi-squared based variable has a new distribution, the [[Student's t Distribution]] with $n-1$ degrees of freedom. To see why, we first need chi-squared.

### Chi-squared distribution (briefly)

> [!info] Definition
> If $Z_1, \dots, Z_n$ are **independent** standard normal variables, then
> $$
> Q = \sum_{i=1}^{n} Z_i^2 \sim \chi^2_n
> $$
> The parameter $n$ is the **[[Degrees of Freedom]]**: the number of independent variables summed.

![[Lec05_chi_squared.png]]

Because it is a sum of squares it is never negative and is right-skewed for small df.

**Link to $S_X$.** $S_X^2$ is built from squared deviations $(X_i - \bar X)^2$, so it is a sum of squared (roughly normal) terms and the chi-squared family fits. The slides write this as $S_X \sim \chi^2_{n-1}$ and ask "why $n-1$?". The answer is that the deviations from $\bar X$ are not independent: they must sum to zero, so only $n-1$ of them are free. One degree of freedom is "used up" estimating $\mu$ by $\bar X$.

> [!note] Reconstructed from the slides
> The slides write $S_X \sim \chi^2_{n-1}$ as shorthand. Strictly, the quantity that is chi-squared is the scaled variance $(n-1)S_X^2/\sigma^2 \sim \chi^2_{n-1}$. I have kept the lecturer's shorthand where quoting the slides, and the "deviations sum to zero" explanation of $n-1$ is my wording of the slides' "Why n-1?" slide, whose answer was in a picture I could not read.

### Student's t distribution

$t_{df}$ is a distribution with a **similar shape to the normal** but **heavier tails** when df is small. As $df \to \infty$, $t_{df} \to N(0,1)$.

![[Lec05_t_vs_normal.png]]

> [!tip] Intuition
> Not knowing $\sigma$ adds extra uncertainty. The t distribution pays for that with fatter tails, so the critical values are larger than the Z ones. With many df the uncertainty about $S_X$ vanishes and we are back to Z.

---

## 5. Single sample t test

**Type of question:** the expected value of a single population, **variance unknown**.

**Requirement:** the population distribution of $X$ is **normal** (so $S_X$ behaves like a chi-squared variable).

**Test statistic and distribution given $H_0$:**

$$
t_{\bar X} = \frac{\bar X - \mu_{H_0}}{S_X/\sqrt{n}} \sim t_{n-1}
$$

**Procedure:**

1. Verify $X$ is normal.
2. Define $H_1$ and complementary $H_0$, select $\alpha$.
3. Compute $t_{\bar X}$.
4. Check the $t_{n-1}$ distribution: reject $H_0$ if $p(t \ge t_{\bar X}) < \alpha$. Use the critical value if calculating manually (look up the **t table**: critical value for each combination of df and $\alpha$).

### Example 1: Jason and the work method (directional)

> [!example] The problem
> Daily output per worker is normal with $\mu = 25$ devices. Jason tries a new organisation method on 5 workers: **23, 25, 27, 29, 31**. Is the new method better?

- $H_1: \mu > 25$, $H_0: \mu \le 25$, $\alpha = 0.05$.
- $\bar X = 27$, $n = 5$, $\mu_{H_0} = 25$.

$$
S_X = \sqrt{\frac{(23-27)^2 + (25-27)^2 + (27-27)^2 + (29-27)^2 + (31-27)^2}{5-1}} = \sqrt{\frac{40}{4}} = 3.16
$$

$$
t_{\bar X} = \frac{27 - 25}{3.16/\sqrt{5}} = 1.41
$$

- $df = 5 - 1 = 4$. From the t table at $\alpha = 0.05$ (one-tailed): $t_{crit} = 2.132$.
- $1.41 < 2.132$, so the statistic is outside the critical region.

> [!tip] Conclusion
> $H_0$ not rejected. No evidence the new method is better.

### Example 2: Yuri and the fuel additive (non-directional)

> [!example] The problem
> Yuri wants to know whether a new additive **changes** fuel usage across 40 cars. Without it, the mean is $13$ km per litre. He records the fleet average for 8 weeks with the additive: **12, 13, 14, 14, 15, 15, 16, 17**.

- $H_1: \mu \ne 13$, $H_0: \mu = 13$, $\alpha = 0.05$. (Each observation is a weekly average, assumed normal.)
- $\bar X = 14.5$, $S_X = 1.6$, $n = 8$, $\mu_{H_0} = 13$.

$$
t_{\bar X} = \frac{14.5 - 13}{1.6/\sqrt{8}} = 2.652
$$

> [!note] Rounding
> With the unrounded $S_X = \sqrt{18/7} = 1.604$ the statistic is $\approx 2.645$. The slide rounds $S_X$ to 1.6 and gets 2.652. The conclusion is unaffected.

- The hypothesis is **two-tailed**, so use $\alpha/2 = 0.05/2 = 0.025$, with $df = n - 1 = 8 - 1 = 7$. The table gives $t_{crit} = 2.365$.
- $2.652 > 2.365$.

> [!tip] Conclusion
> Reject $H_0$. There is evidence the additive changes fuel usage. (The slide words it as "decreases fuel usage": it reads the direction from the sample mean, but the test itself was two-tailed. Strictly, a non-directional test only supports "changes".)

> [!warning] Note on the slide's wording
> The slide's conclusion says "decreases fuel usage". The statistic is positive, meaning kilometres per litre went up, which would mean fuel usage per distance decreased. The test, however, only established *a difference*.

### Which test? Z or t

| | Single sample Z test | Single sample t test |
|---|---|---|
| Question | expected value of one population | expected value of one population |
| Variance | **known** | **unknown** |
| Statistic | $\dfrac{\bar X - \mu_{H_0}}{\sigma_X/\sqrt{n}}$ | $\dfrac{\bar X - \mu_{H_0}}{S_X/\sqrt{n}}$ |
| Distribution given $H_0$ | $N(0,1)$ | $t_{n-1}$ |
| Requirement | average normal ($n \ge 30$ or normal population), $\sigma$ known | population normal |

---

## 6. A new type of question: two populations

The tests so far concern the expected value of **a single** population. Questions such as these do not fit:

- Are men paid more than women?
- Does paracetamol reduce headaches more than a placebo?
- Are developed nations less bureaucratically convoluted than developing nations?

These ask about the **difference in expected value between two populations**.

- **Parameter:** $\mu_X - \mu_Y$ (e.g. men's mean salary minus women's).
- **Data:** two samples, an $X$ sample to estimate $\mu_X$ and a $Y$ sample to estimate $\mu_Y$.
- **Natural null:** no difference.

| | Directional | Non-directional |
|---|---|---|
| $H_1$ | $\mu_X - \mu_Y > 0$ (same as $\mu_X > \mu_Y$) | $\mu_X - \mu_Y \ne 0$ |
| $H_0$ | $\mu_X - \mu_Y \le 0$ | $\mu_X - \mu_Y = 0$ |

---

## 7. Two samples Z test

**Question:** difference in expected value between two populations. **Requirements:** the averages under $H_0$ are normal, and both variances are known.

**Deriving the distribution of the estimator.** The estimator of $\mu_X - \mu_Y$ is $\bar X - \bar Y$. A combination of independent normal variables is normal. Its mean and variance:

$$
E(\bar X - \bar Y) = E(\bar X) - E(\bar Y) = \mu_X - \mu_Y
$$

$$
Var(\bar X - \bar Y) = Var(\bar X) + Var(\bar Y) = \frac{\sigma_X^2}{n_X} + \frac{\sigma_Y^2}{n_Y}
$$

The variance step uses $Var(X - Y) = Var(X) + (-1)^2 Var(Y) - 2\,Cov(X,Y)$, and independence makes $Cov(X,Y) = 0$. Note that **variances add even though we subtract the means**.

$$
\bar X - \bar Y \sim N\!\left(\mu_X - \mu_Y,\; \frac{\sigma_X^2}{n_X} + \frac{\sigma_Y^2}{n_Y}\right)
$$

Standardising under $H_0$ gives the test statistic:

$$
Z_{\bar X - \bar Y} = \frac{(\bar X - \bar Y) - (\mu_X - \mu_Y)_{H_0}}{\sqrt{\dfrac{\sigma_X^2}{n_X} + \dfrac{\sigma_Y^2}{n_Y}}} \sim N(0,1)
$$

### Example: known variances

> [!example] The problem
> $\sigma_X = 4$, $\sigma_Y = 5$, two independent samples with $n_X = n_Y = 30$, $\bar X = 12$, $\bar Y = 15$. Test $H_1: \mu_X - \mu_Y \ne 0$ at $\alpha = 0.05$.

$$
Z = \frac{(12 - 15) - 0}{\sqrt{\dfrac{4^2}{30} + \dfrac{5^2}{30}}} = -2.57
$$

- Non-directional, so the critical values are $\pm 1.96$ (area $0.025$ in each tail). $-2.57 < -1.96$: **reject $H_0$**.

**P-value version.** $p(Z < -2.57) = 0.0051$ in one tail. For a non-directional hypothesis, **multiply the one-tail probability by 2** (both tails count as "at least as extreme"). We would reject $H_0$ for any $\alpha$ at or above that p-value.

> [!warning] Check the slide's final number
> The slide states the doubled value as $0.012$. Doubling $0.0051$ gives about $0.0102$ (and $2\,P(Z<-2.566) \approx 0.0103$ from the unrounded statistic). I think $0.012$ is a slip on the slide. The decision at $\alpha = 0.05$ is the same either way.

---

## 8. Two independent samples t test

When the variances are **unknown**, we use the t version.

**Requirements:**

- both populations are normal, $X, Y \sim N$;
- all observations are independent (i.i.d. within and across samples);
- **equal variances**, $\sigma_X^2 = \sigma_Y^2 = \sigma^2$ (a variant exists that does not need this, not covered here).

**Why a pooled estimator.** With equal variances the distribution of the estimator becomes

$$
\bar X - \bar Y \sim N\!\left(\mu_X - \mu_Y,\; \sigma^2\left(\frac{1}{n_X} + \frac{1}{n_Y}\right)\right)
$$

but $\sigma^2$ is unknown. We have **two independent estimators of the same variance**, $S_X^2$ and $S_Y^2$. Combine them as a weighted average, weighting by degrees of freedom:

$$
S^2_{pooled} = \frac{(n_X - 1) S_X^2 + (n_Y - 1) S_Y^2}{n_X + n_Y - 2}
$$

$S^2_{pooled}$ follows a chi-squared based distribution with $n_X + n_Y - 2$ degrees of freedom (two df lost, one per estimated mean). A normal variable over a chi-squared based one is again a t:

$$
t_{\bar X - \bar Y} = \frac{(\bar X - \bar Y) - (\mu_X - \mu_Y)_{H_0}}{\sqrt{S^2_{pooled}\left(\dfrac{1}{n_X} + \dfrac{1}{n_Y}\right)}} \sim t_{n_X + n_Y - 2}
$$

**Procedure:** verify normality and equal variances; define $H_1$, $H_0$, $\alpha$; compute the statistic; check $t_{n_X+n_Y-2}$ and reject $H_0$ if the statistic exceeds $t_{critical}$ for the chosen $\alpha$.

### Example: pizza and programmers

> [!example] The problem
> A manager randomly assigns 30 programmers to a **pizza lunch** group ($X$) and 30 to a normal lunch control ($Y$), then counts lines of code. Results: $\bar X = 27,\ S_X = 10$; $\bar Y = 24,\ S_Y = 8$. Assume normality and equal variances. Does pizza improve productivity?

- $H_1: \mu_X - \mu_Y > 0$, $H_0: \mu_X - \mu_Y \le 0$, $\alpha = 0.05$.

$$
S^2_{pooled} = \frac{29 \cdot 10^2 + 29 \cdot 8^2}{30 + 30 - 2} = 82
$$

$$
t = \frac{27 - 24 - 0}{\sqrt{82\left(\dfrac{1}{30} + \dfrac{1}{30}\right)}} = 1.283
$$

- Directional, so use $\alpha = 0.05$ one-tailed. $df = n_X + n_Y - 2 = 58$. The slide's critical value is $t_{crit} = 1.676$.
- $1.283 < 1.676$.

> [!tip] Conclusion
> $H_0$ not rejected. No evidence pizza improves programming output.

> [!note] Table detail
> A software value for $df = 58$ is about $1.672$. The slide's $1.676$ is what a printed t table gives for a nearby df row. Either way $1.283$ is well below it.

---

## 9. Summary of the tests

| Question | Variance | Test | Statistic | Distribution given $H_0$ |
|---|---|---|---|---|
| Expected value, **one** population | known | [[Single Sample Z Test]] | $\dfrac{\bar X - \mu_{H_0}}{\sigma_X/\sqrt{n}}$ | $N(0,1)$ |
| Expected value, **one** population | unknown | [[Single Sample t Test]] | $\dfrac{\bar X - \mu_{H_0}}{S_X/\sqrt{n}}$ | $t_{n-1}$ |
| Difference, **two** populations | known | [[Two Samples Z Test]] | $\dfrac{(\bar X - \bar Y) - (\mu_X - \mu_Y)_{H_0}}{\sqrt{\sigma_X^2/n_X + \sigma_Y^2/n_Y}}$ | $N(0,1)$ |
| Difference, **two** populations | unknown, equal | [[Two Independent Samples t Test]] | $\dfrac{(\bar X - \bar Y) - (\mu_X - \mu_Y)_{H_0}}{\sqrt{S^2_{pooled}(1/n_X + 1/n_Y)}}$ | $t_{n_X+n_Y-2}$ |

### Key points

- **Critical value** = the cut-off beyond which area $= \alpha$. For two-tailed tests look up $\alpha/2$.
- **Z vs t** is decided by whether the variance is known. Unknown variance means $S$ replaces $\sigma$, and the distribution becomes $t$ with heavier tails.
- **Degrees of freedom** count free pieces of information: $n-1$ for one sample, $n_X + n_Y - 2$ for two (one lost per estimated mean).
- $\chi^2_n$ is the distribution of a sum of $n$ independent squared standard normals. A normal divided by a chi-squared based quantity gives $t$.
- Two-sample variance: **variances add** when subtracting independent averages.
- For a non-directional test the p-value is **twice** the one-tail probability.

> [!info] Next week
> Error types in hypothesis testing, statistical power, effect size.

---

## Related notes

- [[Statistics B]] (course hub)
- [[Hypothesis Testing Procedure]]
- [[Critical Value]] · [[P-Value]] · [[Degrees of Freedom]]
- [[Single Sample Z Test]] · [[Single Sample t Test]] · [[Two Samples Z Test]] · [[Two Independent Samples t Test]]
- [[Chi-Squared Distribution]] · [[Student's t Distribution]] · [[Pooled Variance]]
