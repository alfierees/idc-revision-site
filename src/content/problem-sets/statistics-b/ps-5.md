---
title: "PS5"
subject: statistics-b
source_doc: /papers/statistics-b/ps-5.pdf
tags:
  - statistics-b
  - hypothesis-testing
  - t-test
  - z-test
  - two-sample-test
  - pooled-variance
  - critical-value
  - p-value
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Single sample t test.** A sample of 15 observations showed the following results: $\bar X = 24$, $S = 5.17$. Assume the population is normally distributed.

      The three parts below test different hypotheses on this same sample (1a, 1b, 1c).
    solution: |
      Three tests from the same recipe: pick the test from what is known about the variance, state $H_1$ and $H_0$, compute the test statistic, then compare with a critical value (or a p-value).

      > [!tip] Intuition
      > Replacing a known $\sigma$ with an estimate $S$ adds uncertainty, so the statistic is compared against the fatter-tailed [[t Distribution]] instead of the normal.

      **Shared work for all three parts.**

      1. **Check the population distribution.** Normal: given in the question.
      2. **Hypotheses.** Set by each part.
      3. **Test statistic.** The variance is unknown, so this is a [[Single Sample t Test]]:

      $$
      t_{\bar X} = \frac{\bar X - \mu_{H_0}}{S_X/\sqrt{n}} = \frac{24 - 27}{5.17/\sqrt{15}} = -2.247
      $$

      4. **Compare with the $t_{n-1} = t_{14}$ critical value** (parts below).

      ![](/images/statistics-b/ps05-q1-t14-rejection-regions.png)

      *The same observed $t = -2.247$ (blue line) against three rejection regions (red). It falls inside the region in (i) and (iii) and outside it in (ii).*

      *Related: [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]*
    related_terms: ["single-sample-t-test", "t-distribution", "degrees-of-freedom"]
    source_doc_page: 1
  - id: "1a"
    text: |
      Test the hypothesis $H_1: \mu < 27$ with a significance level of $\alpha = 0.05$.
    solution: |
      $H_1: \mu < 27$ and $H_0: \mu \geq 27$.

      The table gives 1.761 as the $\alpha = 0.05$ critical value of $t_{14}$. The hypothesis is left-tailed, so we need the value below which 5% of the distribution lies. The $t$ distribution is symmetric around 0, like $Z$, so that value is $-1.761$.

      > [!success] Answer
      > $t_{\bar X} = -2.247 < -1.761$, so **reject $H_0$**.
    related_terms: ["single-sample-t-test", "directional-hypothesis", "critical-value", "significance-level", "t-distribution"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Test the hypothesis $H_1: \mu < 27$ with a significance level of $\alpha = 0.01$.
    solution: |
      Parts 1 to 3 are as in 1a, but now $\alpha = 0.01$. The $t_{14}$ critical value for $\alpha = 0.01$ is 2.624, so the left-tail critical value is $-2.624$.

      > [!success] Answer
      > $t_{\bar X} = -2.247$ is not smaller than $-2.624$, so **do not reject $H_0$**.

      > [!tip] Intuition
      > Lowering $\alpha$ pushes the critical value further into the tail. Demanding stronger evidence turned a rejection into a non-rejection with the same data.
    related_terms: ["single-sample-t-test", "directional-hypothesis", "critical-value", "significance-level"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Test the hypothesis $H_1: \mu \neq 27$ with a significance level of $\alpha = 0.05$.
    solution: |
      $H_1: \mu \neq 27$ and $H_0: \mu = 27$.

      The hypothesis is non-directional, so the critical region is split between both tails. The left-tail critical value is the one for $\alpha/2 = 0.025$. The $t_{14}$ table value for 0.025 is 2.145, so the critical values are $\pm 2.145$.

      > [!success] Answer
      > $t_{\bar X} = -2.247 < -2.145$, so **reject $H_0$**.

      > [!warning] Exam trap
      > In two-sided tests use the **$\alpha/2$** column of the table. Using the one-tailed 1.761 for a two-sided test would be wrong.
    related_terms: ["single-sample-t-test", "non-directional-hypothesis", "critical-value", "significance-level"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Two samples Z test.** Timmothy is interested in figuring out whether the length of a telemarketer's sales calls depends on the telemarketer's gender. He randomly sampled 10 male telemarketers and 10 female marketers and measured their average call length (in minutes) over a month. He found the following results:

      | Male | 8 | 9 | 9 | 11 | 11 | 11 | 13 | 14 | 14 | 15 |
      |---|---|---|---|---|---|---|---|---|---|---|
      | **Female** | 5 | 5 | 7 | 7 | 7 | 10 | 10 | 15 | 16 | 16 |

      From previous data, he knows that the standard deviation of male telemarketers' call length is 2.5 and the standard deviation of female telemarketers' call length is 4.

      Conduct a hypothesis test. Can Timmothy conclude there is a significant difference in call length depending on gender?
    solution: |
      The question is about a difference of two means and the **variances are known**, so use a [[Two Samples Z Test]].

      1. **Normality of the averages under $H_0$.** Each observation is an average over a month. Assuming a telemarketer makes more than 30 calls a month, the averages are approximately normal.
      2. **Hypotheses.** $H_1: \mu_X - \mu_Y \neq 0$, $H_0: \mu_X - \mu_Y = 0$, $\alpha = 0.05$.
      3. **Test statistic.** The group averages are $\bar X = 11.5$ and $\bar Y = 9.8$ (the official solution takes them from an Excel file; confirmed from the table).

      $$
      Z_{\bar X - \bar Y} = \frac{(\bar X - \bar Y) - (\mu_X - \mu_Y)_{H_0}}{\sqrt{\dfrac{\sigma_X^2}{n_X} + \dfrac{\sigma_Y^2}{n_Y}}} = \frac{(11.5 - 9.8) - 0}{\sqrt{\dfrac{2.5^2}{10} + \dfrac{4^2}{10}}} = 1.14
      $$

      4. **Compare the probability with $\alpha$.** $p(Z > 1.14) = 0.1271$. The hypothesis is non-directional, so double it: $p = 0.2542$.

      ![](/images/statistics-b/ps05-q2-z-two-sided-p-value.png)

      *The two-sided p-value is the shaded area beyond $Z = \pm 1.14$, far above $\alpha = 0.05$.*

      > [!success] Answer
      > $p = 0.2542 > \alpha = 0.05$, so **do not reject $H_0$**. Timmothy has no statistical evidence that call length depends on gender.

      > [!warning] Exam trap
      > The question gives **standard deviations** (2.5 and 4). The formula needs variances, so square them: $2.5^2 = 6.25$ and $4^2 = 16$. Using 2.5 and 4 directly as variances would give $Z \approx 2.11$ and the wrong conclusion.

      *Related: [[Lec_06-Two Sample Tests, Error Types and Power]], recapping the [[Two Samples Z Test]] from [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]*
    related_terms: ["two-samples-z-test", "non-directional-hypothesis", "p-value", "significance-level", "standard-error"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Two independent samples t test.** Tanya is interested in the same question as Timmothy (see Question 2). She asked him for his data and conducted her own hypothesis test, but did not know the population standard deviations, and so assumed they will be equal and that as the observations are averages over a month, they are distributed normally.

      Conduct the hypothesis test Tanya should use. Is the conclusion the same as Timmothy's?
    solution: |
      The question is about a difference of two means with **unknown variances**, so use a [[Two Independent Samples t Test]].

      1. **Assumptions.** Normal populations (averages over a month, more than 30 calls) and equal variances (Tanya's assumption).
      2. **Hypotheses.** $H_1: \mu_X - \mu_Y \neq 0$, $H_0: \mu_X - \mu_Y = 0$, $\alpha = 0.05$.
      3. **Test statistic.** The group standard deviations are $S_X = 2.42$ and $S_Y = 4.39$ (from the Excel file in the official solution; recomputed from the table as 2.415 and 4.392). First pool the variance:

      $$
      S^2_{pooled} = \frac{(n_X - 1) S_X^2 + (n_Y - 1) S_Y^2}{n_X + n_Y - 2} = \frac{(10-1) \cdot 2.42^2 + (10-1) \cdot 4.39^2}{10 + 10 - 2} = 12.56
      $$

      Then the statistic:

      $$
      t_{\bar X - \bar Y} = \frac{\bar X - \bar Y - (\mu_X - \mu_Y)_{H_0}}{\sqrt{S^2_{pooled} \left(\dfrac{1}{n_X} + \dfrac{1}{n_Y}\right)}} = \frac{11.5 - 9.8 - 0}{\sqrt{12.56 \left(\dfrac{1}{10} + \dfrac{1}{10}\right)}} = 1.07
      $$

      4. **Critical value.** The test is non-directional, so split $\alpha$ across the tails and use $t^{0.025}_{18}$, with $df = 10 + 10 - 2 = 18$. From the table, $t^{0.025}_{18} = 2.101$.

      ![](/images/statistics-b/ps05-q3-t18-rejection-regions.png)

      *The observed $t = 1.07$ lies well inside the non-rejection region between $\pm 2.101$.*

      > [!success] Answer
      > $t_{\bar X - \bar Y} = 1.07 < 2.101$, so Tanya **cannot reject $H_0$** and has no evidence that call length depends on gender. **The conclusion is the same as Timmothy's.**

      > [!tip] Intuition
      > Both tests do not reject, but the $t$ statistic (1.07) is smaller than the $Z$ statistic (1.14) and its critical value (2.101) is larger than the $Z$ one (1.96). Not knowing the variances costs power on both counts.

      *Related: [[Lec_06-Two Sample Tests, Error Types and Power]] (section on Exercise 5 question 3), with [[Pooled Variance]] built there.*
    related_terms: ["two-independent-samples-t-test", "pooled-variance", "t-distribution", "degrees-of-freedom", "critical-value", "non-directional-hypothesis"]
    source_doc_page: 1
---
