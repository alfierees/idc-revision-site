---
title: "PS8"
subject: statistics-b
source_doc: /papers/statistics-b/ps-8.pdf
tags:
  - statistics-b
  - confidence-interval
  - sample-size
  - critical-value
  - difference-in-proportions
  - difference-in-means
ai_drafted: true
questions:
  - id: "1a"
    text: |
      A random sample of 100 cars in Israel shows that on average, cars traveled 14,500 km in a year, with a SD of 2,400.

      Build a 99% confidence interval for the expected value of kilometers a car in Israel travels in a year.
    solution: |
      We want a single expected value and the population variance is **not** known (only the sample SD), so the interval uses the [[t Distribution]]:

      $$
      \bar{X} - t^{1-\alpha/2}_{n-1} \frac{S_x}{\sqrt{n}} \le \mu \le \bar{X} + t^{1-\alpha/2}_{n-1} \frac{S_x}{\sqrt{n}}
      $$

      Values: $\bar{X} = 14{,}500$, $S_x = 2{,}400$, $n = 100$. With $1 - \alpha/2 = 0.995$ and $n - 1 = 99$ degrees of freedom, the table has no row for 99, so the solution uses the nearest row below, $t^{0.995}_{80} = 2.639$.

      > [!example] Working
      > Standard error: $2400 / \sqrt{100} = 240$.
      > Margin: $2.639 \times 240 = 633.36$.
      > Interval: $14{,}500 \pm 633.36$.

      > [!success] Answer
      > $13{,}866.64 \le \mu \le 15{,}133.36$

      > [!warning] Table row, my check
      > The official solution reads $t_{99}$ as $t_{80} = 2.639$, a standard table convention (use the closest smaller df, which is slightly conservative). The exact $t_{99}$ value is about 2.626, which would give roughly 13,870 to 15,130. The printed answer is kept; the difference does not change any conclusion below.

      ![](/images/statistics-b/ps08-q1-ci-vs-null-value.png)

      The 99% interval and the null value 13,000. The null value sits well to the left of the interval, which is what drives parts (ii) and (iii).
    related_terms: ["confidence-interval", "t-distribution", "standard-error", "critical-value", "margin-of-error", "degrees-of-freedom", "confidence-level", "sample-standard-deviation"]
    source_doc_page: 1
  - id: "1b"
    text: |
      A random sample of 100 cars in Israel shows that on average, cars traveled 14,500 km in a year, with a SD of 2,400.

      What would be the result of a hypothesis test testing $H_0: \mu = 13{,}000$ km with $\alpha = 0.01$? Explain.
    solution: |
      > [!success] Answer
      > Reject $H_0: \mu = 13{,}000$.

      13,000 lies outside the 99% interval. A confidence interval is exactly the set of null values that the matching two-sided test at that level would **not** reject ([[Lec_08-Confidence Intervals]], section 9). A value outside the set is rejected.
    related_terms: ["duality-of-confidence-intervals-and-hypothesis-tests", "confidence-interval", "significance-level", "null-hypothesis"]
    source_doc_page: 1
  - id: "1c"
    text: |
      A random sample of 100 cars in Israel shows that on average, cars traveled 14,500 km in a year, with a SD of 2,400.

      What would be the result of a hypothesis test testing $H_0: \mu = 13{,}000$ km with $\alpha = 0.05$? Explain.
    solution: |
      > [!success] Answer
      > Reject $H_0: \mu = 13{,}000$.

      We already reject at the stricter level $\alpha = 0.01$. A significance level of 0.05 is less strict (rejects more easily), so we must also reject at 0.05.

      > [!tip] Intuition
      > The 95% interval is narrower than the 99% one, so it is nested inside it. If 13,000 is outside the wide interval it is certainly outside the narrow one.
    related_terms: ["duality-of-confidence-intervals-and-hypothesis-tests", "confidence-interval", "significance-level", "confidence-level", "null-hypothesis"]
    source_doc_page: 1
  - id: "2a"
    text: |
      A factory produces cans of ground coffee powder. The automatic machine that pours coffee powder into the cans is known to have a SD of 10 grams in the amount of coffee poured into the cans.

      Calculate a 95% confidence interval for the expected value of the weight of coffee poured into each can, if a sample of 36 cans contained on average 198 grams of coffee in each can.
    solution: |
      One expected value, and the population SD **is known** ($\sigma = 10$), so use the $Z$ interval:

      $$
      \bar{X} - Z_{1-\alpha/2} \frac{\sigma}{\sqrt{n}} \le \mu \le \bar{X} + Z_{1-\alpha/2} \frac{\sigma}{\sqrt{n}}
      $$

      Values: $\bar{X} = 198$, $Z_{0.975} = 1.96$, $\sigma = 10$, $n = 36$.

      > [!example] Working
      > Standard error: $10 / \sqrt{36} = 10/6 = 1.667$.
      > Margin: $1.96 \times 1.667 = 3.267$.
      > Interval: $198 \pm 3.267$.

      > [!success] Answer
      > $194.73 \le \mu \le 201.27$
    related_terms: ["confidence-interval", "standard-error", "critical-value", "margin-of-error", "confidence-level"]
    source_doc_page: 1
  - id: "2b"
    text: |
      A factory produces cans of ground coffee powder. The automatic machine that pours coffee powder into the cans is known to have a SD of 10 grams in the amount of coffee poured into the cans.

      What sample size would you need in order to make sure the width of a 95% confidence interval was at most 6 grams?
    solution: |
      The width is the upper end minus the lower end, so the $\bar{X}$ cancels and only twice the margin is left:

      $$
      2 \times 1.96 \times \frac{10}{\sqrt{n}} \le 6
      $$

      > [!example] Working
      > $\dfrac{39.2}{\sqrt{n}} \le 6$, so $\sqrt{n} \ge \dfrac{39.2}{6} = 6.53$.
      > Square: $n \ge 42.64$ in the printed solution. Sample sizes are whole numbers and must round **up**.

      > [!success] Answer
      > At least **43 cans**.

      > [!warning] Rounding, my check
      > $39.2 / 6 = 6.5333$ and $6.5333^2 = 42.68$, not 42.64. The printed 42.64 is a small slip (likely from squaring the rounded 6.53, which gives 42.64). Either way the answer rounds up to 43, so nothing changes. Always round up: rounding down would make the interval wider than 6.
    related_terms: ["sample-size-for-a-confidence-interval", "margin-of-error", "confidence-level", "critical-value"]
    source_doc_page: 1
  - id: "3"
    text: |
      An experiment testing the effectiveness of a new vaccine in preventing disease X examined 1000 patients. 500 patients received the new vaccine and 500 received a placebo. Over the following year, 98 of the vaccinated patients caught disease X, while 120 of the patients who received the placebo caught disease X.

      Create a 95% confidence interval for the difference in the proportion of patients who catch disease X between those who receive the vaccine and those who receive a placebo.
    solution: |
      Difference between two proportions:

      $$
      (\hat{p}_1 - \hat{p}_2) \pm Z_{1-\alpha/2} \sqrt{\frac{\hat{p}_1(1-\hat{p}_1)}{n_1} + \frac{\hat{p}_2(1-\hat{p}_2)}{n_2}}
      $$

      The solution labels the **placebo** group as group 1 and the **vaccine** group as group 2:

      - $\hat{p}_1 = 120/500 = 0.24$ (placebo)
      - $\hat{p}_2 = 98/500 = 0.196$ (vaccine)
      - $n_1 = n_2 = 500$, $Z_{0.975} = 1.96$

      > [!example] Working
      > Point estimate: $0.24 - 0.196 = 0.044$.
      > Standard error: $\sqrt{\dfrac{0.24 \times 0.76}{500} + \dfrac{0.196 \times 0.804}{500}} = \sqrt{0.000365 + 0.000315} \approx 0.02608$.
      > Margin: $1.96 \times 0.02608 \approx 0.0511$.

      > [!success] Answer
      > $-0.0071 \le p_1 - p_2 \le 0.0951$ (placebo minus vaccine)

      ![](/images/statistics-b/ps08-q3-difference-in-proportions-ci.png)

      The interval is centred on 0.044 and just reaches below zero.

      > [!warning] Direction of the difference
      > The question words the difference as vaccine minus placebo, but the solution computes **placebo minus vaccine**. Flip the sign and the interval for vaccine minus placebo is $-0.0951 \le p_{\text{vaccine}} - p_{\text{placebo}} \le 0.0071$ (my reading, same numbers). Either way the interval **contains 0**.

      > [!tip] Intuition
      > Because 0 is inside the interval, a matching two-sided test at 5% would not reject "no difference". The data are consistent with the vaccine having no effect, even though 98 is lower than 120. The solution itself stops at the interval and does not state this conclusion.
    related_terms: ["confidence-interval", "standard-error", "critical-value", "sample-proportion", "duality-of-confidence-intervals-and-hypothesis-tests"]
    source_doc_page: 1
  - id: "4"
    text: |
      The salaries of docks workers are distributed normally with a SD of 600 Shekels. The salaries of sailors are distributed normally with a SD of 900 Shekels. In a random sample of 21 docks workers the average salary was 5,500 shekels. In a random sample of 11 sailors the average salary was 4,900.

      Calculate a 95% confidence interval for the difference between the expected values of the salaries of docks workers and sailors.
    solution: |
      Difference between two means, **both population variances known**, so $Z$ with each variance over its own sample size (no pooling):

      $$
      (\bar{X}_1 - \bar{X}_2) \pm Z_{1-\alpha/2} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}
      $$

      Values: $\bar{X}_1 = 5{,}500$, $\bar{X}_2 = 4{,}900$, $\sigma_1 = 600$, $\sigma_2 = 900$, $n_1 = 21$, $n_2 = 11$, $Z_{0.975} = 1.96$.

      > [!example] Working
      > Point estimate: $5500 - 4900 = 600$.
      > Standard error: $\sqrt{\dfrac{600^2}{21} + \dfrac{900^2}{11}} = \sqrt{17142.9 + 73636.4} = \sqrt{90779.2} \approx 301.30$.
      > Margin: $1.96 \times 301.30 \approx 590.54$.

      > [!success] Answer
      > $9.46 \le \mu_1 - \mu_2 \le 1190.54$

      ![](/images/statistics-b/ps08-q4-difference-in-means-ci.png)

      The interval lies entirely above 0 (barely), so dock workers are estimated to earn more on average at the 95% level.

      > [!tip] Intuition
      > Because the salaries are normal and the variances known, $Z$ is exact even with small samples (21 and 11). If only sample SDs were given we would need a $t$ interval instead ([[Lec_08-Confidence Intervals]], section 7).
    related_terms: ["confidence-interval", "standard-error", "critical-value", "margin-of-error", "normal-distribution"]
    source_doc_page: 2
  - id: "5"
    text: |
      A medical services company wants to estimate the portion of people in a given city who are interested in a new medical insurance expansion. How many people do they need to sample if they want the width of a 99% confidence interval to be at most 2%?
    solution: |
      Single proportion interval: $\hat{p} \pm Z_{1-\alpha/2}\sqrt{\hat{p}(1-\hat{p})/n}$. The width is twice the margin:

      $$
      \text{width} = 2 \, Z_{1-\alpha/2} \frac{\sqrt{\hat{p}(1-\hat{p})}}{\sqrt{n}}
      $$

      For 99%, $Z_{0.995} = 2.58$. We do not know $\hat{p}$ before sampling, so we use the **worst case**: the value of $\hat{p}$ that makes $\sqrt{\hat{p}(1-\hat{p})}$ (and so the width) largest, which is $\hat{p} = 0.5$.

      ![](/images/statistics-b/ps08-q5-worst-case-proportion.png)

      The curve $\sqrt{\hat{p}(1-\hat{p})}$ peaks at 0.5, so assuming 0.5 guarantees the width target is met whatever the true proportion turns out to be.

      > [!example] Working
      > Maximum width: $\dfrac{2 \times 2.58 \times \sqrt{0.5 \times 0.5}}{\sqrt{n}} = \dfrac{2.58}{\sqrt{n}}$.
      > Require $\dfrac{2.58}{\sqrt{n}} \le 0.02$, so $\sqrt{n} \ge \dfrac{2.58}{0.02} = 129$.
      > Square: $n \ge 129^2 = 16{,}641$.

      > [!success] Answer
      > At least **16,641 people**.
    related_terms: ["sample-size-for-a-confidence-interval", "sample-proportion", "margin-of-error", "critical-value", "confidence-level"]
    source_doc_page: 2
---
*Related: [[Lec_08-Confidence Intervals]], [[Lec_07-Tests for Proportions and Variances]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]*
