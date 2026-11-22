---
title: "Lec 13 - Exam Review Session 2"
semester: 2
year: 1
course: "Statistics B"
lecture: 13
tags:
  - statistics-b
  - exam-review
  - statistical-power
  - linear-regression
  - correlation
  - simulation
  - consistency
  - maximum-likelihood
  - hypothesis-testing
subject: statistics-b
in_scope: true
---

# Lec 13: Exam Review Session 2

> Part of: [[Statistics B]]
> Key concepts: [[Statistical Power]], [[Two-Tailed Test]], [[Single Sample t Test]], [[Two Independent Samples t Test]], [[F Test for Equality of Variances]], [[Confidence Interval]], [[Chi-Squared Test for Goodness of Fit]], [[Unbiased Estimator]], [[Consistent Estimator]], [[Maximum Likelihood Estimator]]

> [!info] Source
> Class 13 (44 slides). This is the second **exam-review session**, so there is almost no new theory. Almost every slide is an image of a question; the question text and the bold answer on the "answer" slide were read from those images. Slides 9, 12, 17, 20, 23 and 28 are figure-only memes with no content, and slide 5 lists exam logistics (see section 2). About 28 slides repeat the practice-exam questions already reviewed in Lec_12 (the review session 1 note), so those get a one-line recap each. The practice-exam and Moed B 2023 notes do not exist yet, so they are mentioned in plain text rather than linked.

## 1. Plan for the session

1. **Exercise 11 question 4**: simulating datasets that have a chosen prediction line.
2. **Exam details** (logistics and what you are given).
3. **Practice exam questions** 6 to 8 and 13 to 20 (repeats of Lec_12).
4. **Moed B 2023** questions 1, 2, 4 and 5 (new in this session).

The lecturer also lists every topic of the semester: point estimation (law of large numbers, sampling distributions, bias and bias correction, consistency, maximum likelihood), hypothesis testing (Z tests for an expected value, a proportion and differences of both, single and two-sample t tests, power, type I and II errors, Cohen's d, the F test for equality of variances), confidence intervals, chi-squared tests (goodness of fit, independence), Pearson correlation and linear regression.

## 2. Exam details

- Exam on a Tuesday afternoon (15.7 at 15:45 on the slide), in person; Zoom only for students who are **out of the country**.
- **Bring a calculator.**
- Provided: the **formula sheet**, the **Z, t, F and chi-squared tables**, and an extra-notes sheet written by two students.
- Spot a mistake on the formula page? Tell the lecturer by Thursday.

> [!tip] Use the formula sheet as your checklist
> Every test statistic in this course (single and two-sample Z, t, F, chi-squared) and the confidence-interval forms are on the sheet, so exam time goes on choosing the right test and reading the tables, not on memorising.

## 3. Exercise 11, question 4: simulating a chosen prediction line

**Task.** Using `=NORM.INV(PROBABILITY, MEAN, STANDARD DEVIATION)`, simulate datasets of **n = 300** observations whose prediction equation is approximately (i) $\hat{Y} = X + 2$, (ii) $\hat{Y} = -2X + 2$, (iii) $\hat{Y} = 5X$, (iv) $\hat{Y} = 10$, and (v) a dataset where X and Y are related but **not only linearly**. For each, fit the line (to check the simulation worked) and draw a scatterplot with a linear trendline.

**Method (from the official Excel solution).** Draw X as standard normal, then build Y from the target line plus a small normal noise term:

$$
X = \text{NORM.INV}(\text{RAND}(), 0, 1), \qquad Y = b \cdot X + a + \text{NORM.INV}(\text{RAND}(), 0, 0.2)
$$

| Part | Formula for Y | Fitted check (one Excel run) |
|---|---|---|
| i | $X + 2 + \text{noise}$ | slope 1.01, intercept 2.00 |
| ii | $-2X + 2 + \text{noise}$ | slope -1.99, intercept 2.00 |
| iii | $5X + \text{noise}$ | slope 5.01, intercept 0.005 |
| iv | $10 + \text{noise}$ (does not use X) | slope -0.006, intercept 10.01 |
| v | $(2X)^2 + \text{noise}$ | slope -0.13, intercept 3.93 |

> [!note] One simulated run
> `RAND()` changes every time the sheet recalculates, so the fitted numbers above are one run of the lecturer's workbook. They land close to the targets, not on them, because of the noise term. The figure below is a separate illustrative simulation of the same recipe.

![[Lec13_ex11_q4_simulated_scatter.png]]

**What each part teaches.**

- **i to iii**: the slope and intercept come back close to the ones you built in. A larger noise would loosen the fit, and the correlation would drop below 1 in size.
- **iv**: $Y$ is built from a constant, so the best prediction line is flat. The slope is about 0 and the correlation about 0: X carries no information about Y.
- **v**: Y depends on X **exactly through a curve**, yet the fitted straight line has a slope near 0 and a weak correlation. This is the key warning: [[Correlation Coefficient]] and the regression line only measure **linear** association, so zero correlation does not mean independence.

> [!note] Reconstructed from the slides
> Slide 4 holds only the question title. The task wording, method and numbers come from the Exercise 11 solution PDF and its Excel workbook (sheets "Q4 part i" to "Q4 part v"), not from the slides.

## 4. Practice-exam questions, one-line recaps (repeats of Lec_12)

Each answer was marked in bold on the answer slide; the working is a quick check against the formula sheet.

| Practice Q | Topic | One-line working | Answer |
|---|---|---|---|
| 13 | Power: two-sided H0 vs one-sided H0 | See section 5 | **c** (less; more) |
| 14 | Z vs t power | The slide states the point: for the same sample, a Z test is more powerful than a t test, because a known $\sigma$ avoids the extra uncertainty from estimating it. | (statement only) |
| 15 | Single-sample t test, kittens | $t = (8.4 - 10)/(1.3/\sqrt{12}) = -4.26$; one-tailed, $t_{11}$ critical value $-1.796$, so significant | **d** |
| 16 | Two-sample t test, recitations | $n_X = n_Y = 25$, $s_X = 8$, $s_Y = 12$, so $S^2_{pooled} = 104$ and $SE = \sqrt{104 \cdot (2/25)} = 2.88$; $t = 4/2.88$; critical value about 2.01, so not significant | **a** (t = 1.41, not significant); see flag below |
| 17 | F test for variances | Larger variance on top: $F = 2.5^2 / 1.2^2 = 4.34$ with $(15, 9)$ degrees of freedom; critical value about 3.77, so $H_0$ rejected | **c** |
| 18 | 95% CI for a mean, cod weights | $44.27 \pm 2.009 \cdot 8.7/\sqrt{51}$ gives 41.82 to 46.72 | **d** |
| 19 | Sample size for a proportion CI | Width 3% means half-width 0.015: $n = 1.96^2 \cdot 0.25 / 0.015^2 = 4268.4$, round up to 4269 | **d** (4269) |
| 20 | Chi-squared goodness of fit | Expected 6, 58, 34; observed 13, 50, 37: $\chi^2 = 8.17 + 1.10 + 0.26 = 9.53$; 2 degrees of freedom, critical value 5.99, so rejected | **a** |
| 6 | Correlation after adding a point | $r = 1$ needs all points on a rising line; a 17th point can keep them on it, but a perfect $r = -1$ is impossible once 16 points lie on a rising line | **b** (could; could not) |
| 7 | Regression line passes through the means | $\bar{Y} = a + b\bar{X} = 56 + 34 \cdot 50 = 1756$ | **b** |
| 8 | $r = 0$ and the regression line | $b = r \cdot s_Y / s_X = 0$ necessarily, but $a = \bar{Y} - b\bar{X} = \bar{Y}$, which is not necessarily 0 | **c** (not necessarily; necessarily) |

> [!warning] Q16: key and arithmetic differ slightly
> The deck marks "t = 1.41, not significant" as correct. Recomputing from the stated data gives $t = 4/2.884 = 1.39$ (and 1.36 if a divisor of $n - 1$ is used). Neither equals 1.41. The option **t = 1.41, not significant** is still the only consistent choice, since 1.39 is not significant at 5% either, so the letter is safe even if the quoted number is off.

> [!note] Q20 source typo
> The question text reads "50 were single and 37 were single". The marked key (9.53, rejected) matches the reading **13 widowed, 50 married, 37 single**, since the claimed shares are 6%, 58%, 34%. That is the assumption used above.

### Q6 and Q8 in detail (the two conceptual regression questions)

For Q8 the regression line has slope and intercept

$$
b = r_{x,y} \cdot \frac{s_Y}{s_X}, \qquad a = \bar{Y} - b \cdot \bar{X}
$$

With $r_{x,y} = 0$ the slope is exactly 0, so the fitted line is flat at $\bar{Y}$. The intercept is then $\bar{Y}$, which is 0 only if the average of Y happens to be 0.

## 5. Q13: why one-sided and two-sided tests differ in power

Tommy tests $H_0: \mu = 10$ (two-tailed) and Gerard tests $H_0: \mu \le 10$ (right-tailed), same population, sample size and $\alpha = 0.05$.

- If in truth **$\mu > 10$**, Gerard puts all 5% of his rejection area in the correct (right) tail, so his critical value is closer to $\mu_{H_0}$ ($Z = 1.645$) than Tommy's ($Z = 1.96$). Tommy has **less** power.
- If in truth **$\mu < 10$**, Gerard's rejection region is on the wrong side, so he almost never rejects. Tommy still has a left rejection region, so he has **more** power.

The answer is c: **less; more**. This is the slides' sequence of three diagrams (right-tailed, left-tailed and two-tailed rejection regions with the $\beta$ and $1 - \beta$ areas) condensed into one picture.

![[Lec13_power_one_vs_two_tailed.png]]

> [!example] Numbers behind the picture
> Take a true mean that sits 2 standard errors from $\mu_{H_0}$. Above it: Gerard's power $= 1 - \Phi(1.645 - 2) = 0.64$, Tommy's $\approx 0.52$. Below it: Gerard's power is about 0, Tommy's is again about 0.52. The "2 standard errors" is an illustrative choice, not a value from the slides.

For the full definition of $\alpha$, $\beta$ and power see [[Lec_06-Two Sample Tests, Error Types and Power]].

## 6. Moed B 2023: questions 1, 2, 4 and 5

These are the first four multiple-choice questions on the Moed B 2023 paper that the lecturer reviewed. The matching past-paper note does not exist yet, so see it later in the past-papers folder rather than here.

### Q1: what stays the same when only n changes

Kim samples 10 poodles and Beth samples 100; both compute the sample average of friendliness. Which of the following is **necessarily the same** for both?

| Option | Same for both? | Why |
|---|---|---|
| Expected value of the average | **Yes (key)** | $E(\bar{X}) = \mu$ for any n |
| Variance of the average | No | $\sigma^2/n$ shrinks with n |
| Standard deviation of the average | No | $\sigma/\sqrt{n}$ shrinks with n |
| Shape of the distribution | No | It approaches normal as n grows (Central Limit Theorem) |

Reference: [[Lec_01-Point Estimation and Sampling Distributions]]. Answer: **the expected value** ([[Unbiased Estimator]] logic: the average is centred on $\mu$ at every sample size).

### Q2: which estimator is unbiased for a

$X$ takes the value 0 or $a$, each with probability 0.5. Which is an unbiased estimator of $a$, using only the first observation $X_1$?

$$
E(X_1) = 0 \cdot 0.5 + a \cdot 0.5 = 0.5a
$$

So $E(2 X_1) = a$. Options: $X_1/2$ gives $0.25a$, $X_1$ gives $0.5a$, $3X_1$ gives $1.5a$, so only **$2X_1$** (option c) is unbiased.

### Q4: consistency from the variance

Two estimators have $Var(\hat{\theta}_1) = \sigma^2/10$ and $Var(\hat{\theta}_2) = \sigma^2 \cdot n$. By the formula-sheet definition, $\hat{\theta}$ is consistent if its variance goes to 0 as $n \to \infty$:

$$
\lim_{n \to \infty} \frac{\sigma^2}{10} = \frac{\sigma^2}{10} \neq 0, \qquad \lim_{n \to \infty} \sigma^2 n = \infty
$$

Neither variance goes to 0, so **both are inconsistent** (option d). The slide animates these two limits.

> [!note] Reconstructed from the slides
> The deck shows the two limits but I could not find the bolded key text on slides 39 and 40. Option d follows directly from the definition above. See [[Lec_02-Point Estimation and the Variance Estimator]] for consistency.

### Q5: reading the maximum of the log-likelihood

The first and second derivatives of $\ln L(\theta \mid x)$ give two critical points: a **maximum** at $\theta = 3x$ and a **minimum** at $\theta = x - 1$. The maximum likelihood estimator is the **maximiser**, so

$$
\hat{\theta} = 3x
$$

(option a). The second critical point is a minimum, so it is not the estimator, and combining the two (options c and d) has no basis. See [[Lec_03-Maximum Likelihood Estimation]].

## 7. Exam strategy reminders from the session

- **Decide the test first**: known or unknown $\sigma$ (Z vs t), one or two samples, means vs proportions vs variances vs counts.
- **One-sided vs two-sided** changes the critical value and the power, so read the wording ("decreases", "different", "at most").
- **Estimator properties**: unbiased means $E(\hat{\theta}) = \theta$; consistent means $Var(\hat{\theta}) \to 0$; they are separate checks.
- **Correlation and regression** only see linear patterns (section 3, part v).
- A running joke of the deck is "I can only fail to reject": a non-significant result is **failure to reject** $H_0$, never proof that it is true.

## Quick link-up

- Hypothesis-test selection and CI recap: [[Lec_10-Extra Credit Project and Test Selection Recap]]
- Confidence intervals: [[Lec_08-Confidence Intervals]]
- Chi-squared tests: [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]]
- F tests and proportions: [[Lec_07-Tests for Proportions and Variances]]
