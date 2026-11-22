---
title: "PS4"
subject: statistics-b
source_doc: /papers/statistics-b/ps-4.pdf
tags:
  - statistics-b
  - hypothesis-testing
  - z-test
  - central-limit-theorem
  - p-value
  - critical-value
  - directional-hypothesis
ai_drafted: true
questions:
  - id: "1i"
    text: |
      Job market research shows that the expected value of the salary of a junior product manager in the US is USD 90,000, with a standard deviation of USD 25,000. A senior manager at a large company claims that the company pays their junior product managers more than the general market does.

      To test this claim, she randomly chose a sample of 40 junior product managers from the company and checked their current salary. She got the following results:

      | Employee # | Salary | Employee # | Salary |
      | --- | --- | --- | --- |
      | 1 | 130000 | 21 | 140000 |
      | 2 | 140000 | 22 | 90000 |
      | 3 | 60000 | 23 | 110000 |
      | 4 | 120000 | 24 | 110000 |
      | 5 | 70000 | 25 | 110000 |
      | 6 | 60000 | 26 | 90000 |
      | 7 | 60000 | 27 | 70000 |
      | 8 | 130000 | 28 | 80000 |
      | 9 | 70000 | 29 | 120000 |
      | 10 | 110000 | 30 | 140000 |
      | 11 | 110000 | 31 | 60000 |
      | 12 | 90000 | 32 | 70000 |
      | 13 | 110000 | 33 | 70000 |
      | 14 | 80000 | 34 | 130000 |
      | 15 | 110000 | 35 | 60000 |
      | 16 | 60000 | 36 | 140000 |
      | 17 | 70000 | 37 | 140000 |
      | 18 | 140000 | 38 | 70000 |
      | 19 | 60000 | 39 | 130000 |
      | 20 | 90000 | 40 | 140000 |

      i. Can she use a Z test to check her hypothesis? Explain. Note that the salary distribution is known to not be normal.
    solution: |
      > [!success] Answer
      > **Yes.** The salaries are not normal, but $n = 40 > 30$, so the sample mean is approximately normal.

      The Z test needs the **sample mean** $\bar{X}$ to be (approximately) normal, not the individual salaries. By the [[Central Limit Theorem]], for a large enough sample the distribution of $\bar{X}$ is approximately normal whatever the shape of the population. The usual rule of thumb is $n > 30$ (see [[Lec_01-Point Estimation and Sampling Distributions]]). Here $\sigma$ is also known from the market research, which is the other requirement of a [[Single Sample Z Test]].

      > [!tip] Intuition
      > Normality of the data is a fix for small samples. With 40 observations, averaging smooths out the odd shape of the salary distribution, so the question is answered by the sample size, not by the shape.
    related_terms: ["central-limit-theorem", "single-sample-z-test", "sampling-distribution-of-the-average", "normal-distribution"]
    source_doc_page: 1
  - id: "1ii"
    text: |
      (Same setup as part i: market mean salary USD 90,000, standard deviation USD 25,000, a random sample of 40 of the company's junior product managers, and the salary distribution is not normal.)

      ii. Test her hypothesis at a 0.05 significance level. Is her claim that the company pays more than market rate to its junior product managers supported?
    solution: |
      > [!success] Answer
      > $Z_{\bar{x}} = 2.15$, $p = 0.0158 < 0.05$. **Reject $H_0$**: there is evidence that the company pays its junior product managers more than the market does.

      **1. Parameter.** $\mu$ = the expected salary of the company's junior product managers.

      **2. Hypotheses.** She wants to show the company pays *more*, so $H_1$ is directional ([[Directional Hypothesis]]):

      $$
      H_1: \mu > 90{,}000, \qquad H_0: \mu \le 90{,}000
      $$

      **3. Test statistic.**

      $$
      Z_{\bar{x}} = \frac{\bar{x} - \mu_{H_0}}{\sigma / \sqrt{n}} \sim N(0,1)
      $$

      **4. Data.** From the official spreadsheet, $\bar{x} = 98{,}500$.

      **5. Compute.** The standard error is $\dfrac{25{,}000}{\sqrt{40}} = 3{,}952.84$. Then

      $$
      Z_{\bar{x}} = \frac{98{,}500 - 90{,}000}{25{,}000/\sqrt{40}} = \frac{8{,}500}{3{,}952.84} = 2.15
      $$

      $$
      p(Z \ge 2.15) = 1 - 0.9842 = 0.0158
      $$

      ![](/images/statistics-b/ps04-q1-p-value-right-tail.png)

      The shaded right tail is the [[P-Value]]: the probability of a sample mean at least this far above 90,000 if $H_0$ were true.

      **6. Conclusion.** The p-value, $0.0158$, is smaller than $\alpha = 0.05$, so we reject $H_0$. The data support the claim that this company's junior product managers are paid more than junior product managers in general.

      > [!warning] Assumption worth stating
      > The test uses the **market** standard deviation, $\sigma = 25{,}000$, as the known $\sigma$ for the company too. The solution does this without comment, so the working assumes the company's salaries have the same spread as the market's.

      > [!tip] Intuition
      > A mean of 98,500 is $8{,}500$ above 90,000, about 2.15 standard errors. That is rare enough under $H_0$ (about 1.6% of the time) to count as evidence.

      *Related: [[Lec_04-Hypothesis Testing and the Z Test]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]*
    related_terms: ["single-sample-z-test", "hypothesis-testing-procedure", "directional-hypothesis", "null-hypothesis", "alternative-hypothesis", "p-value", "significance-level", "standard-error", "z-score"]
    source_doc_page: 2
  - id: "2"
    text: |
      An accounting professor decided that his course needs updating as the average score in the course for many years has been 50, with a standard deviation of 12. He decided to check if a new computerized teaching method will improve students' scores. He found that in a random sample of 81 taught in the new method the average score was 52.7. What should he conclude about the new method?
    solution: |
      > [!success] Answer
      > $Z = 2.025 > Z_{critical} = 1.65$. **Reject $H_0$**: there is evidence to support adopting the new method.

      **Parameter.** $\mu$ = the expected score under the new method.

      **Hypotheses.** The professor wants to know whether the method *improves* scores, so the alternative is directional:

      $$
      H_1: \mu > 50, \qquad H_0: \mu \le 50
      $$

      **Significance level.** Not given, so use the conventional $\alpha = 0.05$.

      **Test selection.** The parameter is an expected value, $\sigma = 12$ is known and $n = 81 > 30$, so $\bar{X}$ is approximately normal. Use a [[Single Sample Z Test]].

      **Test statistic.**

      $$
      Z_{\bar{X}} = \frac{\bar{X} - \mu_{H_0}}{\sigma / \sqrt{n}} = \frac{52.7 - 50}{12/\sqrt{81}} = \frac{2.7}{4/3} = 2.025
      $$

      **Decision.** The alternative is right-tailed, so the critical value at $\alpha = 0.05$ is $Z_{critical} = 1.65$ ([[Critical Value]]). Since $2.025 > 1.65$, the statistic falls in the [[Critical Region]], so $H_0$ is rejected.

      > [!tip] Intuition
      > The standard error is $12/9 = 4/3$, so the sample mean is $2.7$ above the old average, roughly two standard errors. Only 5% of the time would a sample mean land beyond 1.65 standard errors if the method did nothing.

      *Related: [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] works the same question through with the critical-value picture.*
    related_terms: ["single-sample-z-test", "directional-hypothesis", "critical-value", "critical-region", "significance-level", "standard-error"]
    source_doc_page: 2
  - id: "3i"
    text: |
      Two statisticians are testing hypotheses on the same large database.

      Statistician A tested the hypothesis $H_1: \mu > 10$. Statistician B tested the hypothesis $H_1: \mu \neq 10$.

      i. Both statisticians used the same significance level ($\alpha$). Statistician A rejected the null hypothesis. Will statistician B necessarily reject the null hypothesis? Explain.
    solution: |
      A puts the whole significance level $\alpha$ in the right tail ([[Directional Hypothesis]]). B splits it, $\alpha/2$ in each tail ([[Non-Directional Hypothesis]]).

      ![](/images/statistics-b/ps04-q3-same-alpha-critical-regions.png)

      *Schematic only (no numbers are read off it): at the same $\alpha$, A's critical value is closer to the centre than B's right-hand critical value, and B has an extra critical region on the left.*

      > [!success] Answer
      > **Not necessarily.**

      A's critical value on the right is **smaller** than B's critical value on the right, because A puts all of $\alpha$ in that one tail while B puts only $\alpha/2$ there. A test statistic can therefore be larger than A's critical value (A rejects) but smaller than B's right critical value (B does not reject).

      > [!warning] Wording slip in the official solution
      > The solution says "A's critical value is smaller than B's critical value on the left tail". Read literally that is wrong: A has no left tail. The argument only works for the **right** tail, where A's cut-off sits below B's. I have explained it that way. The answer (not necessarily) is unchanged.
    related_terms: ["directional-hypothesis", "non-directional-hypothesis", "critical-region", "critical-value", "significance-level"]
    source_doc_page: 2
  - id: "3ii"
    text: |
      Two statisticians are testing hypotheses on the same large database.

      Statistician A tested the hypothesis $H_1: \mu > 10$. Statistician B tested the hypothesis $H_1: \mu \neq 10$.

      ii. Both statisticians used the same significance level ($\alpha$). Statistician B rejected the null hypothesis. Will statistician A necessarily reject the null hypothesis? Explain.
    solution: |
      > [!success] Answer
      > **Not necessarily.**

      B might reject because the statistic fell below B's **left** critical value. A has no critical region on the left, so A would not reject in that case.

      > [!tip] Intuition
      > Neither test is "stricter" in every direction. A is easier to pass on the right, B is the only one that can reject on the left.
    related_terms: ["directional-hypothesis", "non-directional-hypothesis", "critical-region", "significance-level"]
    source_doc_page: 2
  - id: "3iii"
    text: |
      Two statisticians are testing hypotheses on the same large database.

      Statistician A tested the hypothesis $H_1: \mu > 10$. Statistician B tested the hypothesis $H_1: \mu \neq 10$.

      iii. Statistician A rejected his null hypothesis at a significance level of $\alpha = 0.05$. Will statistician B necessarily reject the null hypothesis if he chooses a significance level of $\alpha = 0.1$? Explain.
    solution: |
      > [!success] Answer
      > **Yes.**

      If A rejected, the statistic lies in A's critical region (the right tail with area $0.05$). With $\alpha = 0.1$, B's critical region has area $0.1/2 = 0.05$ in **each** tail. So B's right-tail critical region is exactly A's critical region. Anything A rejects on, B rejects on too.

      ![](/images/statistics-b/ps04-q3-iii-alpha-overlap.png)

      The same right-hand cut-off appears in both panels, so A's critical region is contained in B's (B's has an extra left tail).
    related_terms: ["directional-hypothesis", "non-directional-hypothesis", "critical-region", "critical-value", "significance-level"]
    source_doc_page: 2
---
