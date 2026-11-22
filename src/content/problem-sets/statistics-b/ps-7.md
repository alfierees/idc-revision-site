---
title: "PS7"
subject: statistics-b
source_doc: /papers/statistics-b/ps-7.pdf
tags:
  - statistics-b
  - problem-set
  - hypothesis-testing
  - z-test
  - proportion
  - two-sample-test
  - t-test
  - f-test
ai_drafted: true
questions:
  - id: "1"
    text: |
      Tony is worried that his gambling partner is using a "loaded" (unfair) six-sided die, which is more likely to come up 6. To test this, he rolled the die 120 times, and counted the number of times the die came up 6. He found that the die came up 6 on 34 out of 120 rolls.

      Does Tony have statistical evidence that the die is "loaded"?
    solution: |
      *Taught in [[Lec_07-Tests for Proportions and Variances]] (section on the single sample Z test for a proportion).*

      **Test selection.** Tony asks about a **single proportion** (the probability of a 6), so the test is a [[Single Sample Z Test for Proportion]].

      **Step 1: hypotheses and $\alpha$.** A fair die gives $p = \tfrac16$. Tony's worry is **directional** (more likely to come up 6), so the alternative is one-sided:

      $$
      H_0: p \le \frac{1}{6}
      $$

      $$
      H_1: p > \frac{1}{6}
      $$

      $$
      \alpha = 0.05
      $$

      **Step 2: check the conditions.** We need $n \cdot p_{H_0} \ge 5$ and $n(1-p_{H_0}) \ge 5$, with $p_{H_0} = \tfrac16$ and $n = 120$:

      $$
      n \cdot p_{H_0} = 120 \cdot \frac{1}{6} = 20 > 5
      $$

      $$
      n(1-p_{H_0}) = 120 \cdot \frac{5}{6} = 100 > 5
      $$

      Both hold, so $\hat p$ is approximately normal under $H_0$.

      **Step 3: test statistic.**

      $$
      Z_{\hat p} = \frac{\hat p - p_{H_0}}{\sqrt{\dfrac{p_{H_0}(1-p_{H_0})}{n}}}
      $$

      With $\hat p = 34/120$:

      $$
      Z_{\hat p} = \frac{\dfrac{34}{120} - \dfrac{1}{6}}{\sqrt{\dfrac{\frac{1}{6}\cdot\frac{5}{6}}{120}}} = 3.43
      $$

      > [!tip] Intuition
      > Under a fair die you expect 20 sixes in 120 rolls. Tony saw 34. The standard error of the count is about $\sqrt{120\cdot\frac16\cdot\frac56}\approx 4.08$, so 34 is roughly $14/4.08\approx 3.4$ standard errors above expectation.

      **Step 4: decision.**

      $$
      P(Z \ge 3.43) = 0.0003 < 0.05
      $$

      ![](/images/statistics-b/ps07-q1-one-tailed-z-loaded-die.png)

      > [!success] Answer
      > Reject $H_0$. If the die were fair, getting this many sixes would have probability below 5%, so Tony has statistical evidence that the die is loaded.
    related_terms: ["single-sample-z-test-for-proportion", "hypothesis-testing-procedure", "success-failure-condition", "null-hypothesis", "alternative-hypothesis", "directional-hypothesis", "z-score", "p-value", "sample-proportion", "significance-level"]
    source_doc_page: 1
  - id: "2"
    text: |
      As part of an extra credit assignment, a student conducted a survey of 100 Reichman students. His sample included 53 men and 47 women. Based on university records, at the time 67% of Reichman university students were man.

      Was the student sampling procedure random?
    solution: |
      *Taught in [[Lec_07-Tests for Proportions and Variances]].*

      **Test selection.** Again one proportion (the share of men), so a [[Single Sample Z Test for Proportion]].

      **Step 1: hypotheses and $\alpha$.** If sampling was random, each sampled student is a man with probability $0.67$. The question names no direction, so the test is **two-tailed**:

      $$
      H_0: p = 0.67
      $$

      $$
      H_1: p \ne 0.67
      $$

      $$
      \alpha = 0.05
      $$

      **Step 2: conditions.**

      $$
      n \cdot p_{H_0} = 100 \cdot 0.67 = 67 > 5
      $$

      $$
      n(1-p_{H_0}) = 100 \cdot 0.33 = 33 > 5
      $$

      **Step 3: test statistic.**

      $$
      Z_{\hat p} = \frac{\dfrac{53}{100} - 0.67}{\sqrt{\dfrac{0.67\cdot 0.33}{100}}} = -2.98
      $$

      **Step 4: decision.** The lower-tail probability is

      $$
      P(Z \le -2.98) = 0.0014
      $$

      and because the hypothesis is non-directional the p-value doubles it:

      $$
      p\text{-value} = 2\cdot P(Z \le -2.98) = 0.0028 < 0.05
      $$

      ![](/images/statistics-b/ps07-q2-two-tailed-z-sampling.png)

      > [!success] Answer
      > Reject $H_0$. If sampling had been random, a sample this far from 67% men would occur with probability below 5%, so there is evidence the sampling was **not** random.

      > [!tip] Intuition
      > A single non-significant or significant result does not say *why* the sample is unbalanced; it only says pure random sampling from a 67% male population is an unlikely explanation. Under-representing men (53% against 67%) points to some selection effect, such as surveying people who were easy to approach.
    related_terms: ["single-sample-z-test-for-proportion", "hypothesis-testing-procedure", "success-failure-condition", "non-directional-hypothesis", "null-hypothesis", "alternative-hypothesis", "z-score", "p-value", "sample-proportion", "significance-level"]
    source_doc_page: 1
  - id: "3"
    text: |
      A survey of education levels among inmates was conducted twice, once in 1990 and once in 2010. Each time, an independent random sample of 700 inmates were asked about their education level. In 1990, 3.4% of inmates had a higher degree. In 2010, 7.9% of inmates had a higher degree.

      Is there evidence of a difference in inmates' education level between the years?
    solution: |
      *Taught in [[Lec_07-Tests for Proportions and Variances]] (difference between two proportions, with the [[Pooled Proportion]]).*

      **Test selection.** Two independent samples, each summarised by a proportion, and the question is about their difference: a [[Two Samples Z Test for Proportions]].

      **Step 1: hypotheses and $\alpha$.**

      $$
      H_0: p_{2010} - p_{1990} = 0
      $$

      $$
      H_1: p_{2010} - p_{1990} \ne 0
      $$

      $$
      \alpha = 0.05
      $$

      **Step 2: conditions.** Here the check uses the **observed** proportions in each sample. The solution labels the 2010 sample as group 1, so $\hat p_1 = 0.079$ and $\hat p_2 = 0.034$, with $n_1 = n_2 = 700$:

      | Check | Value |
      |---|---|
      | $n_1\hat p_1$ | $700 \cdot 0.079 = 55.3 > 5$ |
      | $n_2\hat p_2$ | $700 \cdot 0.034 = 23.8 > 5$ |
      | $n_1(1-\hat p_1)$ | $700 \cdot 0.921 = 644.7 > 5$ |
      | $n_2(1-\hat p_2)$ | $700 \cdot 0.966 = 676.2 > 5$ |

      **Step 3: test statistic.** Under $H_0$ the two populations share one proportion, so we estimate it with the **pooled proportion**:

      $$
      \hat p = \frac{\hat p_1 n_1 + \hat p_2 n_2}{n_1+n_2} = \frac{700\cdot 0.079 + 700\cdot 0.034}{1400} = 0.0565
      $$

      Then

      $$
      Z_{\hat p_1-\hat p_2} = \frac{\hat p_1 - \hat p_2}{\sqrt{\hat p(1-\hat p)\left(\dfrac{1}{n_1}+\dfrac{1}{n_2}\right)}} = \frac{0.079-0.034}{\sqrt{0.0565\cdot(1-0.0565)\left(\dfrac{1}{700}+\dfrac{1}{700}\right)}} = 3.65
      $$

      **Step 4: decision.** The solution uses the table value for $3.5$ as an approximation for the tail beyond $3.65$:

      $$
      P(Z \ge 3.65) \approx P(Z \ge 3.5) = 0.000233
      $$

      $$
      p\text{-value} = 2\cdot 0.000233 = 0.000466 < 0.05
      $$

      ![](/images/statistics-b/ps07-q3-two-proportion-z.png)

      > [!success] Answer
      > Reject $H_0$. If the proportion with a higher degree were the same in both years, a gap this large would have probability far below 5%, so there is evidence that the share of inmates with a higher degree changed between 1990 and 2010.

      > [!note] Exact tail (my check)
      > The table in the course stops near 3.5, so the solution rounds. The exact value is $P(Z\ge 3.65)\approx 0.00013$, giving a two-tailed p-value of about $0.00026$. The conclusion is identical.
    related_terms: ["two-samples-z-test-for-proportions", "pooled-proportion", "success-failure-condition", "hypothesis-testing-procedure", "non-directional-hypothesis", "z-score", "p-value", "sample-proportion"]
    source_doc_page: 1
  - id: "4"
    text: |
      A company is testing possible versions for an advertisement campaign. They recruited two groups of randomly sampled people, with 15 people in each group. People in one group were exposed to version A of the campaign and people in the other group were exposed to version B of the campaign. After seeing the campaign, all participants were asked to rate the degree to which they would want to buy the company's product ("intention to buy"). Assume "intention to buy" is normally distributed.

      The results showed the average "intention to buy" in group A was 15, with SD=7, and the average "intention to buy" in group B was 20, with SD=10.

      Is there evidence that version B of the campaign is different than version A?
    solution: |
      *Taught in [[Lec_06-Two Sample Tests, Error Types and Power]] (two independent samples t test) and [[Lec_07-Tests for Proportions and Variances]] (F test).*

      **Test selection.** The company compares **expected values** of two populations and does not know the variances, so the test is a [[Two Independent Samples t Test]]. That test assumes (a) normal populations, given in the question, and (b) **equal variances**, which is not given. We check (b) first with an [[F Test for Equality of Variances]].

      In the solution, group B is labelled $X$ (SD 10, mean 20) and group A is labelled $Y$ (SD 7, mean 15).

      **Part 1: F test for equal variances.**

      *Conditions.* Both populations are normal and the samples are independent (both given in the question).

      *Hypotheses.*

      $$
      H_0: \frac{\sigma_X^2}{\sigma_Y^2} = 1
      $$

      $$
      H_1: \frac{\sigma_X^2}{\sigma_Y^2} \ne 1
      $$

      $$
      \alpha = 0.05
      $$

      *Test statistic* (larger variance on top):

      $$
      F_{observed} = \frac{S_X^2}{S_Y^2} = \frac{10^2}{7^2} = 2.04
      $$

      *Critical value.* The degrees of freedom are $n_X - 1 = n_Y - 1 = 14$, but $F(14,14)_{crit}$ is not in the table. The solution takes the more conservative neighbour:

      $$
      F(12,14)_{crit} = 2.53
      $$

      $$
      F_{observed} = 2.04 < 2.53
      $$

      ![](/images/statistics-b/ps07-q4-f-test-equal-variances.png)

      > [!success] Part 1 result
      > Do not reject $H_0$ for equal variances, so we continue with the t test and keep the **equal variances** assumption. (The solution's wording says "do not reject the null hypothesis that the variances are different", which is a slip: the null is that they are *equal*. The conclusion it draws is the right one.)

      **Part 2: the two independent samples t test.**

      *Hypotheses.*

      $$
      H_1: \mu_X - \mu_Y \ne 0
      $$

      $$
      H_0: \mu_X - \mu_Y = 0
      $$

      $$
      \alpha = 0.05
      $$

      *Pooled variance* (a weighted average of the two sample variances, weights are the degrees of freedom; see [[Pooled Variance]]):

      $$
      S_{pooled}^2 = \frac{(n_X-1)S_X^2 + (n_Y-1)S_Y^2}{n_X+n_Y-2} = \frac{14\cdot 10^2 + 14\cdot 7^2}{28} = 74.5
      $$

      *Test statistic.*

      $$
      t_{\bar X-\bar Y} = \frac{\bar X - \bar Y - 0}{\sqrt{S_{pooled}^2\left(\dfrac{1}{n_X}+\dfrac{1}{n_Y}\right)}} = \frac{20-15}{\sqrt{74.5\left(\dfrac{1}{15}+\dfrac{1}{15}\right)}} = 1.59
      $$

      *Decision.* Degrees of freedom: $15+15-2 = 28$. The hypothesis is non-directional, so $\alpha$ is split between the two tails and we need $t^{0.025}_{28}$:

      $$
      t^{0.025}_{28} = 2.048
      $$

      $$
      t_{\bar X-\bar Y} = 1.59 < 2.048
      $$

      ![](/images/statistics-b/ps07-q4-two-sample-t.png)

      > [!success] Answer
      > Do not reject $H_0$. The company does not have evidence that the two campaign versions differ in effectiveness.

      > [!tip] Intuition
      > Version B scored 5 points higher, which looks large, but with only 15 people per group and SDs of 7 and 10 the standard error of the difference is about $3.15$, so a 5-point gap is only about 1.6 standard errors. "Not significant" is not proof the versions are equal; it may just mean the sample is too small to tell (low [[Statistical Power]]).

      > [!warning] Table caveat (my check)
      > The solution's $F(12,14)$ value of 2.53 is the **one-tailed 5%** point. For a two-tailed test at $\alpha=0.05$ the correct upper critical value is the 2.5% point, which for $F(14,14)$ is about $2.98$ and for $F(12,14)$ about $3.05$. A larger critical value only makes rejection harder, so $2.04<2.53$ still implies $2.04<2.98$ and the conclusion (do not reject) stands. The two-tailed p-value for $F=2.04$ is about $0.19$.
    related_terms: ["two-independent-samples-t-test", "pooled-variance", "f-test-for-equality-of-variances", "f-distribution", "t-distribution", "degrees-of-freedom", "critical-value", "non-directional-hypothesis", "statistical-power", "sample-variance"]
    source_doc_page: 1
---
*Related: [[Lec_07-Tests for Proportions and Variances]], [[Lec_06-Two Sample Tests, Error Types and Power]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]*
