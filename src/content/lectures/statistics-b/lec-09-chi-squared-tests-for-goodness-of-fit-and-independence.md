---
title: "Lec 09: Chi-Squared Tests for Goodness of Fit and Independence"
semester: 2
year: 1
course: "Statistics B"
lecture: 9
tags:
  - statistics-b
  - non-parametric-test
  - chi-squared-test
  - goodness-of-fit
  - test-of-independence
  - contingency-table
  - hypothesis-testing
subject: statistics-b
in_scope: true
---

# Lec 09: Chi-Squared Tests for Goodness of Fit and Independence

> Part of: [[Statistics B]]
> Key concepts: [[Non-Parametric Test]], [[Chi-Squared Test for Goodness of Fit]], [[Chi-Squared Test for Independence]], [[Chi-Squared Statistic]], [[Chi-Squared Distribution]], [[Observed and Expected Frequencies]], [[Degrees of Freedom]], [[Critical Value]], [[Significance Level]], [[Contingency Table]], [[Joint Probability]], [[Marginal Probability]]

This is the source deck `Class 09` (119 slides, many of them animation builds). Every test so far was a question about a **parameter** (a mean, a proportion). This lecture handles questions that are about the **shape of a distribution** or about **categorical variables**. It builds one statistic, $\chi^2$, shows why it follows a chi-squared distribution, and uses it twice: a **goodness of fit test** (is a distribution what we claim?) and a **test of independence** (are two categorical variables unrelated?).

> [!info] Recap (slides 3 and 4, repeated from Lec 07)
> **Procedure of every hypothesis test:** pose a yes/no question about the world, turn it into a question about population parameters, define $H_0$ and $H_1$ as values of the parameters, choose a test and $\alpha$, collect data, and reject $H_0$ if the observed data is unlikely (probability below $\alpha$) given $H_0$.

## 1. Non-parametric tests

Some questions cannot be written as "is this parameter equal to that value". Slide examples:

- Is a die unfair (is its distribution different from the uniform distribution)?
- Is the distribution of salaries normal?
- Is the distribution of marital status different between Israel and the US?

A **non-parametric test** is a test that does not rely on assumptions about the shape of the distribution.

> [!tip] When do we need one?
> - The distribution shape is **unknown or unusual** (not normal).
> - The distribution shape **is the question** itself.
> - The variable is **categorical** (marital status, job title, preferred brand), so there is no mean to test.

## 2. Goodness of fit: the fair die

> [!example] Is my 6-sided die fair? (slides 8 to 15)
> I rolled the die 60 times and recorded how often each face came up.
>
> | Face | 1 | 2 | 3 | 4 | 5 | 6 | Total |
> |---|---|---|---|---|---|---|---|
> | Frequency | 4 | 6 | 17 | 16 | 8 | 9 | 60 |

**Hypotheses.** A fair die gives every face probability $1/6$:

$$
H_0: p_1 = p_2 = p_3 = p_4 = p_5 = p_6 = \tfrac{1}{6}, \qquad H_1: \text{anything else}
$$

In a parametric test $H_0$ named a parameter value and we used it to make a prediction. **A non-parametric $H_0$ can still make a prediction**: with 60 rolls, a fair die should show each face $\tfrac16 \cdot 60 = 10$ times. These predicted counts are the **expected frequencies** $E_i$; the counts we actually saw are the **observed frequencies** $O_i$.

![[Lec09_die_observed_vs_expected.png]]

### Building one number out of the deviations

We need a single statistic that summarises how far the observed counts are from the expected ones (slides 16 to 31). The slides get there by trying simple ideas and fixing each problem.

| Attempt | Formula | Problem |
|---|---|---|
| Raw deviations | $O_i - E_i$ | Six numbers: $-6, -4, 7, 6, -2, -1$. We want one. |
| Sum of deviations | $\sum_i (O_i - E_i)$ | Always $0$, because observed and expected both total $n_{sample}$. Positives cancel negatives. |
| Sum of squared deviations | $\sum_i (O_i - E_i)^2 = 36+16+49+36+4+1 = 142$ | Grows with the sample size: the same unfairness in 600 rolls gives a bigger number. |
| Squared deviations divided by $E_i$ | $\sum_i \dfrac{(O_i - E_i)^2}{E_i}$ | Scale-free. This is the **chi-squared statistic**. |

Dividing each squared deviation by its expected count gives $3.6,\ 1.6,\ 4.9,\ 3.6,\ 0.4,\ 0.1$, and

$$
\boxed{\chi^2 = \sum_{i=1}^{n} \frac{(O_i - E_i)^2}{E_i}} = 14.2
$$

where $n$ is the **number of categories** (not the sample size). $\chi^2 = 0$ means a perfect match with $H_0$; the larger it is, the worse the fit.

> [!warning] Use counts, not proportions
> $O_i$ and $E_i$ must be **absolute frequencies** (number of observations), never relative ones (percentages). $O_i$ is always an integer; $E_i = n_{sample} \cdot p_{i \mid H_0}$ need not be.

## 3. Why $\chi^2$ follows a chi-squared distribution

Is $14.2$ unlikely if $H_0$ is true? To answer that we need the distribution of $\chi^2$ under $H_0$ (slides 32 to 46).

> [!note] Reconstructed from the slides
> The slides skip some algebra ("Skipping some algebra", slide 39). The steps below fill the two-category case in, and I corrected a sign that is garbled on slide 38.

**Step 1: each count is approximately normal.** If $H_0$ is true, the count in category $i$ is binomial, $O_i \sim B(n_{sample}, p_i)$. With a normal approximation (valid if $n_{sample}\, p_i \geq 5$ and $n_{sample}(1-p_i) \geq 5$):

$$
O_i \sim N\big(n_s p_i,\ n_s p_i (1-p_i)\big) \quad\Rightarrow\quad \frac{O_i - n_s p_i}{\sqrt{n_s p_i (1-p_i)}} \sim N(0,1)
$$

(short-hand $n_s = n_{sample}$, $p_i = p_{i \mid H_0}$).

**Step 2: two categories.** Here $E_1 = n_s p_1$, $E_2 = n_s(1-p_1)$ and $O_2 = n_s - O_1$, so $O_2 - E_2 = -(O_1 - E_1)$. Then

$$
\chi^2 = \frac{(O_1 - E_1)^2}{E_1} + \frac{(O_1 - E_1)^2}{E_2}
= (O_1 - E_1)^2 \cdot \frac{1}{n_s p_1 (1-p_1)}
= \left(\frac{O_1 - n_s p_1}{\sqrt{n_s p_1 (1-p_1)}}\right)^2
$$

which is **one standard normal variable squared**.

**Step 3: the chi-squared distribution.** If $Z_1, \dots, Z_k$ are i.i.d. $N(0,1)$, then $Q = \sum_{i=1}^{k} Z_i^2 \sim \chi^2_k$. So with two categories $\chi^2 \sim \chi^2_1$.

**With $n$ categories** the statistic behaves like a sum of squares with $n-1$ free pieces (the counts must add up to $n_{sample}$, so one category is determined by the rest):

$$
\chi^2 = \sum_{i=1}^{n} \frac{(O_i - E_i)^2}{E_i} \sim \chi^2_{n-1} \quad \text{only if } H_0 \text{ is true}
$$

> [!info] Degrees of freedom (goodness of fit)
> $df = \text{number of categories} - 1$.

## 4. The die example, finished

$df = 6 - 1 = 5$ and $\alpha = 0.05$. The $\chi^2$ table (slides 49 to 52) gives $\chi^2_{critical} = 11.070$. Since $14.2 > 11.070$, we **reject $H_0$**: the results are unlikely to come from a fair die.

![[Lec09_chi_squared_df5_rejection.png]]

> [!tip] Chi-squared tests are one-sided
> Deviations in either direction add to $\chi^2$ (they are squared), so only a **large** value is evidence against $H_0$. The rejection region is the upper tail only. (For reference, $P(\chi^2_5 > 14.2) \approx 0.014$, below $0.05$. The slides use the critical value, not the p-value.)

## 5. The goodness of fit procedure

> [!info] $\chi^2$ test for goodness of fit
> 1. Define $E_i$ given $H_0$ and select $\alpha$.
> 2. **Verify that all $E_i \geq 5$** (this is what makes the normal approximation in section 3 valid).
> 3. Calculate $\chi^2 = \sum_i \dfrac{(O_i - E_i)^2}{E_i}$.
> 4. Compare with the critical value of $\chi^2_{n-1}$; if $\chi^2 >$ critical value, reject $H_0$.

Notes from slide 55:

- The distribution given $H_0$ can be **any discrete distribution**, not just uniform.
- A **continuous** distribution (e.g. "are salaries normal?") can be tested by **dividing it into categories** and computing $E_i$ as the probability of each interval times $n_{sample}$.
- With **two categories**, the $\chi^2$ test is equivalent to the single proportion Z test.

### Example: women in the US Senate (slides 56 to 72)

> [!example] Is the share of women in the Senate different from 50%?
> There were 25 women among the 100 senators in 2023. Is that significantly different from the population proportion of 50%?
>
> - $H_0: p_w = p_m = 0.5$. So $E_w = 0.5 \cdot 100 = 50$ and $E_m = 50$ (both $\geq 5$).
> - Observed: $O_w = 25$, $O_m = 75$.
>
> $$
> \chi^2 = \frac{(25-50)^2}{50} + \frac{(75-50)^2}{50} = 12.5 + 12.5 = 25
> $$
>
> - $df = 2 - 1 = 1$, $\alpha = 0.05$, so $\chi^2_{critical} = 3.841$.
> - $25 > 3.841$: **reject $H_0$**. The proportion of women in the Senate is significantly different from 50%.

> [!tip] Cross-check with the Z test (slide 72)
> The single proportion Z test gives $Z = 5$ against $Z_{critical} = 1.96$, the same conclusion. Indeed $Z^2 = 25 = \chi^2$ and $1.96^2 \approx 3.841$: with two categories the $\chi^2$ test **is** the squared Z test.

## 6. Test of independence

A different type of non-parametric question (slides 73 to 75): are two categorical variables $X$ and $Y$ unrelated?

**Reminder.** $X$ and $Y$ are independent if for every pair of values $k, l$:

$$
p(X=k, Y=l) = p(X=k)\, p(Y=l)
$$

The left side is the **joint probability**, the two factors on the right are **marginal probabilities**. So:

$$
H_0: p(X=k, Y=l) = p(X=k)\, p(Y=l) \text{ for all } k, l, \qquad H_1: \text{anything else}
$$

The data sit in a **contingency table** (rows are values of one variable, columns the other), with row and column totals as the margins.

### Expected counts under independence

Under $H_0$, the expected count in cell $(i,j)$ is the marginal probability of row $i$ times the marginal probability of column $j$ times the total $N$. The marginals are estimated from the table:

$$
E_{i,j} = p(X_i)\, p(Y_j)\, N
$$

### Example: degree and work position (slides 76 to 97)

> [!example] Are having a degree and work position independent?
> Observed counts ($N = 2237$):
>
> | Position \ degree | Yes degree | No degree | Total |
> |---|---|---|---|
> | Upper manag. | 20 | 8 | 28 |
> | Middle manag. | 113 | 92 | 205 |
> | Worker | 934 | 1070 | 2004 |
> | Total | 1067 | 1170 | 2237 |
>
> **Column proportions:** $\hat p(\text{yes}) = 1067/2237 = 0.477$, $\hat p(\text{no}) = 1170/2237 = 0.523$.
>
> **Expected counts** (e.g. upper management, yes degree: $0.477 \cdot 28 = 13.36$):
>
> | Position \ degree | Yes degree | No degree |
> |---|---|---|
> | Upper manag. | 13.36 | 14.64 |
> | Middle manag. | 97.78 | 107.22 |
> | Worker | 955.9 | 1048.1 |
>
> The slides multiply the column proportion by the row total, which is the same as $p(\text{yes})\, p(\text{upper})\, N$.

The statistic is the same as before, summed over **all cells** ($n$ rows, $m$ columns):

$$
\chi^2 = \sum_{i=1}^{n} \sum_{j=1}^{m} \frac{(O_{i,j} - E_{i,j})^2}{E_{i,j}}
$$

$$
\chi^2 = \frac{(20-13.36)^2}{13.36} + \frac{(8-14.64)^2}{14.64} + \frac{(113-97.78)^2}{97.78} + \frac{(92-107.22)^2}{107.22} + \frac{(934-955.9)^2}{955.9} + \frac{(1070-1048.1)^2}{1048.1} = 11.8
$$

**Degrees of freedom:**

$$
df = (n-1)(m-1) = (3-1)(2-1) = 2
$$

> [!info] Why $(n-1)(m-1)$?
> Once the row and column totals are fixed, only $(n-1)(m-1)$ cells can be chosen freely; the rest are forced by the margins. (This explanation is added here, the slides only state the formula.)

With $\alpha = 0.05$ and $df = 2$, $\chi^2_{critical} = 5.991$. Since $11.8 > 5.991$, **reject $H_0$**: position and having a degree are **not independent**.

### Example: gender and party in the US Senate (slides 99 to 115)

> [!example] Are party and gender independent in the Senate?
> | Gender \ party | Democrat | Republican | Total |
> |---|---|---|---|
> | Male | 35 | 40 | 75 |
> | Female | 16 | 9 | 25 |
> | Total | 51 | 49 | 100 |
>
> Row and column proportions: male $0.75$, female $0.25$; Democrat $0.51$, Republican $0.49$.
>
> **Expected counts**, $E_{i,j} = p(X_i)\,p(Y_j)\,N$:
>
> | Gender \ party | Democrat | Republican |
> |---|---|---|
> | Male | $0.75 \cdot 0.51 \cdot 100 = 38.25$ | $0.75 \cdot 0.49 \cdot 100 = 36.75$ |
> | Female | $0.25 \cdot 0.51 \cdot 100 = 12.75$ | $0.25 \cdot 0.49 \cdot 100 = 12.25$ |
>
> All $E_{i,j} \geq 5$, so the test is valid.
>
> $$
> \chi^2 = \frac{(35-38.25)^2}{38.25} + \frac{(40-36.75)^2}{36.75} + \frac{(16-12.75)^2}{12.75} + \frac{(9-12.25)^2}{12.25} = 2.25
> $$
>
> $df = (2-1)(2-1) = 1$, so $\chi^2_{critical} = 3.841$. Since $2.25 < 3.841$, **do not reject $H_0$**: there is no evidence that a senator's gender depends on party.

> [!warning] "Do not reject" is not "proven independent"
> A non-significant result only says the data do not contradict independence at this $\alpha$ (here with only 100 senators, and the smallest cell is 9).

## 7. The two tests side by side

| | Goodness of fit | Independence |
|---|---|---|
| Question | Does one categorical variable follow a stated distribution? | Are two categorical variables independent? |
| $H_0$ | $p_i = p_{i \mid H_0}$ for each category | $p(X=k, Y=l) = p(X=k)\,p(Y=l)$ |
| Expected count | $E_i = n_{sample}\, p_{i \mid H_0}$ | $E_{i,j} = p(X_i)\, p(Y_j)\, N$ |
| Statistic | $\sum_i \frac{(O_i-E_i)^2}{E_i}$ | $\sum_i \sum_j \frac{(O_{i,j}-E_{i,j})^2}{E_{i,j}}$ |
| Distribution under $H_0$ | $\chi^2_{n-1}$ | $\chi^2_{(n-1)(m-1)}$ |
| Condition | all $E_i \geq 5$ | all $E_{i,j} \geq 5$ |
| Reject when | $\chi^2 >$ critical value (upper tail) | $\chi^2 >$ critical value (upper tail) |

Critical values used in this lecture at $\alpha = 0.05$:

| $df$ | 1 | 2 | 5 |
|---|---|---|---|
| $\chi^2_{critical}$ | 3.841 | 5.991 | 11.070 |

> [!tip] Exam checklist
> 1. State $H_0$ (what proportions or independence claim).
> 2. Build the expected counts and check they are all $\geq 5$.
> 3. Sum $(O-E)^2/E$ over every category or cell.
> 4. Get $df$ right: categories minus 1, or (rows minus 1)(columns minus 1).
> 5. Compare with the table value and state the conclusion in words.

## Summary

- **Non-parametric tests** make no assumption about the distribution shape and suit categorical data and questions about shape.
- $\chi^2 = \sum \frac{(O-E)^2}{E}$ measures total deviation from the counts $H_0$ predicts. Squaring stops cancelling; dividing by $E$ removes the dependence on sample size.
- Under $H_0$ (and $E \geq 5$) it follows a **chi-squared distribution**: a sum of squared standard normals. Goodness of fit has $df = n-1$; independence has $df = (n-1)(m-1)$.
- Rejection is always in the **upper tail**.
- Examples: fair die ($\chi^2 = 14.2 > 11.070$, reject), women in the Senate ($25 > 3.841$, reject, equals $Z^2$ with $Z=5$), degree and position ($11.8 > 5.991$, reject), gender and party in the Senate ($2.25 < 3.841$, do not reject).
- Slide 117 and 118 are admin: Exercise 7 session on Thursday, recitation 9 (a chi-square exercise) on Monday, and an extra-credit in-class assignment on Tuesday.

## Related notes

- [[Statistics B]]
- [[Lec_06-Two Sample Tests, Error Types and Power]]
- [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]
- [[Chi-Squared Test for Goodness of Fit]], [[Chi-Squared Test for Independence]], [[Chi-Squared Distribution]]
