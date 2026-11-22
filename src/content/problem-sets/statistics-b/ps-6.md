---
title: "PS6"
subject: statistics-b
source_doc: /papers/statistics-b/ps-6.pdf
tags:
  - statistics-b
  - problem-set
  - statistical-power
  - effect-size
  - cohens-d
  - z-test
  - simulation
  - excel
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Power of the scooter test.** The number of people a canvasser interviews in a day is distributed normally with an expected value of 23 and a standard deviation of 5. Benny wants to test the hypothesis that giving canvassers scooters will increase the number of people they interview in a day, at a $\alpha = 0.05$ significance level.

      Parts 1a to 1d ask for his statistical power under four combinations of sample size and effect size.
    solution: |
      Exercise 6 is about **statistical power**, the probability that a test correctly rejects a false $H_0$. Question 1 computes it by hand for four combinations of $n$ and $d$. Question 2 then checks the hand calculation by brute force simulation.

      > [!info] The two-step recipe for power
      > **Step 1: translate the critical value into a sample mean using the $H_0$ distribution.**
      >
      > $$
      > \bar X_{crit}=Z_{crit}\cdot\frac{\sigma}{\sqrt n}+\mu_{H_0}
      > $$
      >
      > **Step 2: standardise that sample mean using the $H_1$ distribution and take the area to its right.**
      >
      > $$
      > Z_{\bar X_{crit}}=\frac{\bar X_{crit}-\mu_{H_1}}{\sigma/\sqrt n},\qquad \text{power}=1-\beta=p\left(Z>Z_{\bar X_{crit}}\right)
      > $$
      >
      > The value of $\mu_{H_1}$ is not given directly. It comes from the effect size through [[Cohen's d]]:
      >
      > $$
      > d=\frac{\mu_{H_1}-\mu_{H_0}}{\sigma_X}\quad\Longrightarrow\quad \mu_{H_1}=\mu_{H_0}+d\cdot\sigma_X
      > $$

      **Setting up (common to all four parts)**

      | Item | Value | Where it comes from |
      |---|---|---|
      | $\mu_{H_0}$ | 23 | the known expected value without scooters |
      | $\sigma_X$ | 5 | the known population standard deviation |
      | Hypotheses | $H_0:\mu\leq 23$ against $H_1:\mu>23$ | scooters should **increase** interviews, so the test is right-tailed |
      | $\alpha$ | 0.05 | given |
      | $Z_{crit}$ | 1.65 | one-tailed, $\alpha=0.05$ (the official solution rounds the table value to 1.65) |

      > [!tip] Intuition
      > The "increase" wording makes it a [[Directional Hypothesis]], so all of $\alpha$ sits in the right tail and one critical value $Z_{crit}=1.65$ is enough. Because the population is normal and $\sigma$ is known, the [[Single Sample Z Test]] is right for any $n$.

      Two distributions matter, both with the same spread $\sigma/\sqrt n$ but different centres:

      - Under $H_0$ the sample mean is $\bar X\sim N\left(23,\ \sigma^2/n\right)$.
      - Under $H_1$ the sample mean is $\bar X\sim N\left(\mu_{H_1},\ \sigma^2/n\right)$.

      *Related: [[Lec_06-Two Sample Tests, Error Types and Power]], [[Lec_04-Hypothesis Testing and the Z Test]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]*
    related_terms: ["statistical-power", "cohens-d", "critical-value", "significance-level", "directional-hypothesis", "single-sample-z-test", "sampling-distribution-of-the-average"]
    source_doc_page: 1
  - id: "1a"
    text: |
      What is his statistical power assuming he has a sample of 10 canvassers, and the effect size of giving a canvasser a scooter is $d = 0.2$?
    solution: |
      **Step 1: find $\mu_{H_1}$ from the effect size.**

      $$
      d=\frac{\mu_{H_1}-23}{5}=0.2\quad\Longrightarrow\quad \mu_{H_1}=0.2\cdot 5+23=24
      $$

      **Step 2: translate the critical value into a sample mean (under $H_0$).**

      $$
      \bar X_{crit}=1.65\cdot\frac{5}{\sqrt{10}}+23=25.61
      $$

      So Benny rejects $H_0$ only if the sample of 10 canvassers averages **more than 25.61** interviews a day.

      **Step 3: standardise that value under $H_1$.**

      $$
      Z_{\bar X_{crit}}=\frac{25.61-24}{5/\sqrt{10}}=1.02
      $$

      **Step 4: read the area to the right from the Z table.**

      $$
      p(Z>1.02)=0.1539
      $$

      > [!success] Answer
      > Statistical power is **15.39%**. If scooters really raise the mean by 0.2 standard deviations, a sample of 10 canvassers detects it only about 15 times in 100.

      ![](/images/statistics-b/ps06-q1-power-part-i.png)

      *Theory diagram. Blue: sampling distribution of the mean under $H_0$ (centre 23). Red: under $H_1$ (centre 24). Dashed line: critical mean 25.61. Pink area right of the line: power, 0.1539. Orange area left of the line: $\beta$, which is $1-0.1539=0.8461$. The blue sliver right of the line is $\alpha=0.05$.*

      > [!tip] Intuition
      > The two curves overlap almost completely because the effect (1 interview a day) is small next to the noise of a 10-person average (standard error $5/\sqrt{10}=1.58$). The critical mean sits far to the right of the $H_1$ centre, so most of the $H_1$ curve lies on the "do not reject" side. That is a low-power test.
    related_terms: ["statistical-power", "cohens-d", "critical-value", "type-ii-error", "standard-error", "normal-distribution-cdf"]
    source_doc_page: 1
  - id: "1b"
    text: |
      What is his statistical power assuming he has a sample of 100 canvassers, and the effect size of giving a canvasser a scooter is $d = 0.2$?
    solution: |
      The effect size is unchanged, so $\mu_{H_1}=24$ again. Only the sample size changes, which shrinks the standard error from $1.58$ to $5/\sqrt{100}=0.5$.

      $$
      \bar X_{crit}=1.65\cdot\frac{5}{\sqrt{100}}+23=23.825
      $$

      $$
      Z_{\bar X_{crit}}=\frac{23.825-24}{5/\sqrt{100}}=-0.35
      $$

      $$
      p(Z>-0.35)=0.6368
      $$

      > [!success] Answer
      > Statistical power is **63.68%**.

      > [!tip] Intuition
      > Ten times the sample squeezes both curves to a third of their width ($\sqrt{10}\approx 3.2$). The critical mean moves left to 23.825, which is now **below** the $H_1$ centre of 24, so more than half of the $H_1$ curve is in the rejection region. Compare 1a and 1b: **same effect, more data, more power**. See "what affects power" in [[Lec_06-Two Sample Tests, Error Types and Power]].
    related_terms: ["statistical-power", "standard-error", "critical-value", "sampling-distribution-of-the-average", "normal-distribution-cdf"]
    source_doc_page: 1
  - id: "1c"
    text: |
      What is his statistical power assuming he has a sample of 10 canvassers, and the effect size of giving a canvasser a scooter is $d = 1$?
    solution: |
      Now the effect is five times larger.

      $$
      d=\frac{\mu_{H_1}-23}{5}=1\quad\Longrightarrow\quad \mu_{H_1}=5+23=28
      $$

      The critical mean is the same as in 1a, because $n$, $\sigma$, $\mu_{H_0}$ and $\alpha$ have not changed:

      $$
      \bar X_{crit}=1.65\cdot\frac{5}{\sqrt{10}}+23=25.61
      $$

      $$
      Z_{\bar X_{crit}}=\frac{25.61-28}{5/\sqrt{10}}=-1.51
      $$

      $$
      p(Z>-1.51)=0.9345
      $$

      > [!success] Answer
      > Statistical power is **93.45%**.

      > [!tip] Intuition
      > The $H_1$ curve has slid far to the right (centre 28), so nearly all of it lies beyond the unchanged critical mean 25.61. A big effect is easy to detect even with 10 people. This is why [[Cohen's d]] is called an effect size: it measures how far apart the two worlds are in standard-deviation units.
    related_terms: ["statistical-power", "cohens-d", "critical-value", "normal-distribution-cdf"]
    source_doc_page: 1
  - id: "1d"
    text: |
      What is his statistical power assuming he has a sample of 10 canvassers, and the effect size of giving a canvasser a scooter is $d = 0$?
    solution: |
      $$
      d=\frac{\mu_{H_1}-23}{5}=0\quad\Longrightarrow\quad \mu_{H_1}=\mu_{H_0}=23
      $$

      > [!warning] Power is not defined here
      > With $d=0$ there is no effect, so $H_0$ is actually true and the "alternative" distribution is the same curve as the null. **Statistical power, the probability of detecting an effect given that there is one, is meaningless in this case.** What you can still compute is the probability of **rejecting $H_0$ anyway**, and the official solution shows that it equals $\alpha$.

      $$
      \bar X_{crit}=1.65\cdot\frac{5}{\sqrt{10}}+23=25.61
      $$

      $$
      Z_{\bar X_{crit}}=\frac{25.61-23}{5/\sqrt{10}}=1.65
      $$

      $$
      p(Z>1.65)=0.05
      $$

      > [!success] Answer
      > Power is undefined. The probability of rejecting $H_0$ is exactly $\alpha=0.05$, which is the [[Type I Error]] rate.

      > [!tip] Intuition
      > Standardising $\bar X_{crit}$ under the "alternative" gives back $Z_{crit}=1.65$ itself, because the two distributions coincide. Any test falsely rejects a true $H_0$ with probability $\alpha$, by the very definition of the [[Significance Level]].

      **Side by side (all four parts)**

      | Part | $n$ | $d$ | $\mu_{H_1}$ | Standard error | $\bar X_{crit}$ | $Z_{\bar X_{crit}}$ | Power |
      |---|---|---|---|---|---|---|---|
      | 1a | 10 | 0.2 | 24 | 1.58 | 25.61 | 1.02 | 0.1539 |
      | 1b | 100 | 0.2 | 24 | 0.50 | 23.825 | -0.35 | 0.6368 |
      | 1c | 10 | 1 | 28 | 1.58 | 25.61 | -1.51 | 0.9345 |
      | 1d | 10 | 0 | 23 | 1.58 | 25.61 | 1.65 | undefined (rejection rate equals 0.05) |

      ![](/images/statistics-b/ps06-q1-four-scenarios.png)

      *Theory diagram. The four scenarios on one page. Pink is the part of the $H_1$ curve beyond the dashed critical mean, which is the power. Panel (ii) is narrower because $n=100$. Panel (iii) has the $H_1$ curve far to the right. In panel (iv) the two curves are identical.*

      > [!tip] Intuition
      > Two levers move power: **how far apart the curves are** (effect size $d$, part 1c) and **how narrow each curve is** (sample size $n$, part 1b). Comparing the rows against 1a shows both.

      > [!note] Check of the rounding
      > The official solution rounds $Z_{crit}$ to 1.65. With the unrounded 1.645 the answers shift slightly (about 0.156, 0.639, 0.935 and exactly 0.05). The answers kept above are the official ones.
    related_terms: ["statistical-power", "type-i-error", "significance-level", "cohens-d", "null-hypothesis"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Excel simulation of the power calculation.** Parts 2a to 2g below build a simulation that checks the Question 1 answers.
    solution: |
      The simulation checks the hand calculations of Question 1 by **brute force**: draw 500 fake samples in Excel, run the Z test on each, and count how often $H_0$ is rejected. If the theory is right, the rejection rate should land close to the power computed in Question 1.

      > [!warning] One simulated run
      > Excel recalculates `RAND()` every time the sheet changes, so a different run gives slightly different counts. The numbers below come from the **cached values of the official workbook**, which is a single run. What generalises is the **method** and the fact that each fraction lands near its theoretical power, not the exact counts.

      The workbook sets up the inputs in a small block and then builds one row per simulated sample.

      | Cell | Content | Value in the file |
      |---|---|---|
      | `C1` | population standard deviation $\sigma$ | 5 |
      | `F1` | sample size $n$ | 10 |
      | `C2` | $\mu_{H_0}$ | 23 |
      | `C3` | effect size $d$ | changed per scenario |
      | `C4` | $\mu_{H_1}$, computed as `=C2+C3*C1` | 24, 23 or 28 |

      > [!tip] Intuition
      > The simulation is the definition of power turned into code. Power is "the probability that a sample drawn from the $H_1$ world leads to a rejection of $H_0$". Draw 500 such samples, count the rejections, divide by 500. By the [[Law of Large Numbers]] that fraction should approach the true power as the number of repetitions grows. This is a [[Monte Carlo Simulation]].
    related_terms: ["monte-carlo-simulation", "law-of-large-numbers", "statistical-power", "simulating-a-dataset"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Create an Excel simulation of 500 repetitions of Question 1 part i: 500 rows with 10 cells, 1 for each observation in the sample, where each observation is randomly drawn from a normal distribution with the appropriate expected value and standard deviation.

      Reminder: use the function `=Norm.inv(rand(),[EV],[SD])` to randomly generate a value from a normal distribution in which the expected value is [EV] and the standard deviation is [SD].
    solution: |
      Each of the 500 rows has 10 cells. Every cell draws one canvasser's daily interviews from the world where the effect is real:

      ```
      =NORM.INV(RAND(), $C$4, $C$1)
      ```

      The mean is the **$H_1$ mean** (`C4`), not the $H_0$ mean. We are simulating Benny running his experiment when the effect exists, and asking how often the test notices.
    related_terms: ["simulating-a-dataset", "monte-carlo-simulation", "normal-distribution"]
    source_doc_page: 1
  - id: "2b"
    text: |
      For each sample, calculate the Z test statistic $Z_{\bar X}=\dfrac{\bar X-\mu_{H_0}}{\sigma_X/\sqrt{n}}$ based on the average of the sample in this row.
    solution: |
      The average of the row is taken, then standardised **against $H_0$**, exactly as the test would do:

      ```
      Average:  =AVERAGE(C6:L6)
      Z:        =(N6-$C$2)/($C$1/SQRT($F$1))
      ```
    related_terms: ["single-sample-z-test", "z-score", "standard-error"]
    source_doc_page: 1
  - id: "2c"
    text: |
      Compare the Z test statistic of each sample to the appropriate critical value using cell comparison.

      Cell comparison: in Excel, the formula `=A1<B1` returns TRUE if the value in cell A1 is smaller than the value in cell B1, and FALSE otherwise.
    solution: |
      ```
      Significant?:  =O6>1.65
      ```

      The comparison is `>` because the test is right-tailed.
    related_terms: ["critical-value", "directional-hypothesis"]
    source_doc_page: 1
  - id: "2d"
    text: |
      Count the number of samples on which the null hypothesis was rejected.

      Note: you can count the number of TRUE cells by first, in a new column, multiplying each TRUE or FALSE by 1 and then summing this new column with the function `=sum()`. For example, if you placed the comparison `=A1<B1` in cell C1, place the formula `=C1*1` in cell D1, then in a new cell place the function `=sum(D1:D501)` to count the number of significant samples.
    solution: |
      ```
      Times 1:  =P6*1
      Count:    =SUM(Q6:Q505)
      Fraction: =S3/500
      ```
    related_terms: ["monte-carlo-simulation", "statistical-power"]
    source_doc_page: 1
  - id: "2e"
    text: |
      Consider the number of significant results as a fraction of the 500 repetitions of the simulation. Is it approximately what you expected based on your computation in Question 1 part i?
    solution: |
      In this run 81 of 500 samples were significant, a fraction of **0.162**. The hand calculation gave 0.1539. Close: the simulation is an estimate with sampling noise.

      | Part | Scenario | Effect size $d$ | $\mu_{H_1}$ used in the draws | Rejections out of 500 | Fraction | Q1 answer to compare |
      |---|---|---|---|---|---|---|
      | 2e | Q1 part i ($n=10$) | 0.2 | 24 | 81 | 0.162 | power 0.1539 |
      | 2f | Q1 part iii ($n=10$) | 1 | 28 | 475 | 0.950 | power 0.9345 |
      | 2g | Q1 part iv ($n=10$) | 0 | 23 | 17 | 0.034 | rejection rate 0.05 |

      ![](/images/statistics-b/ps06-q2-simulated-z-one-run.png)

      *Real data from the official workbook (one simulated run), not a theory diagram. Each histogram shows the 500 Z statistics of one scenario. Pink bars are samples where $Z>1.65$ and $H_0$ was rejected. The distribution slides right as $d$ grows, and more of it crosses the dashed critical value. For $d=0$ the histogram is centred near 0, as a standard normal should be.*

      > [!note] The workbook gives the numbers, not the wording
      > The official solution file contains the three fractions but no written sentences for these parts. The comparisons are read off those numbers next to the Question 1 answers.
    related_terms: ["statistical-power", "monte-carlo-simulation", "law-of-large-numbers"]
    source_doc_page: 2
  - id: "2f"
    text: |
      Change the simulation to fit the conditions of Question 1 part iii and consider the number of significant results as a fraction of the 500 repetitions of the simulation. Is it approximately what you expected based on your computation in Question 1 part iii?
    solution: |
      Set $d=1$, so $\mu_{H_1}=28$ in `C4`. In this run 475 of 500 samples were significant, a fraction of **0.950**, against the hand-calculated 0.9345. Close again.
    related_terms: ["statistical-power", "cohens-d", "monte-carlo-simulation"]
    source_doc_page: 2
  - id: "2g"
    text: |
      Change the simulation to fit the conditions of Question 1 part iv and consider the number of significant results as a fraction of the 500 repetitions of the simulation. Is it approximately what you expected based on your computation in Question 1 part iv?
    solution: |
      Set $d=0$, so $\mu_{H_1}=23$. In this run 17 of 500 samples were significant, a fraction of **0.034**, against $\alpha=0.05$ (about 25 of 500 expected). The Q1 part iv logic says that when $d=0$ the rejection rate should equal $\alpha$.

      > [!tip] Intuition
      > Why is this the furthest off in relative terms? A fraction estimated from 500 repetitions has a standard error of about $\sqrt{p(1-p)/500}$. For $p=0.05$ that is $\approx 0.0097$, so 0.034 is about 1.6 standard errors below 0.05. That is ordinary noise, not a contradiction. For $p=0.95$ the noise is similar, about 0.010, and 0.950 against 0.9345 is within 1.6 standard errors too. Re-pressing `F9` in Excel would give new counts each time, scattered around 0.05, 0.154 and 0.935.

      > [!info] What the simulation teaches
      > Power is not an abstract number from a table. It is a **long-run frequency**: if the effect is real and you repeat the study again and again, the test fires in that proportion of studies. When the effect is truly zero, the same machinery fires in exactly $\alpha$ of studies, which is the false-positive rate.
    related_terms: ["type-i-error", "significance-level", "monte-carlo-simulation", "standard-error"]
    source_doc_page: 2
---
