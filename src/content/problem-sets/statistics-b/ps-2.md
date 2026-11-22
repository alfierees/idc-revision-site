---
title: "PS2"
subject: statistics-b
source_doc: /papers/statistics-b/ps-2.pdf
tags:
  - statistics-b
  - problem-set
  - point-estimation
  - unbiased-estimator
  - consistent-estimator
  - sample-variance
  - excel-simulation
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Question 1.** Variable $X$ has the following distribution table.

      | $x_i$ | 1 | 3 | 5 |
      | --- | --- | --- | --- |
      | $p(x_i)$ | $a$ | $2a$ | $1-3a$ |

      **(i)** Create an unbiased estimator for $a$ based on $\bar{X}$ (the average of $n$ observations of variable $X$).
    solution: |
      > [!info] Lecture link
      > This is the "fix a linearly biased estimator" recipe from [[Lec_02-Point Estimation and the Variance Estimator]] (section 2) and Example 4 of [[Lec_01-Point Estimation and Sampling Distributions]]. If $E(\hat{\theta}_{bias})=a+b\theta$, then $\frac{\hat{\theta}_{bias}-a}{b}$ is unbiased.

      **Step 1: find $E(X)$.** The expected value of the average equals the expected value of $X$ (shown in lecture), so first compute $E(X)$:

      $$
      E(X)=1\cdot a+3\cdot(2a)+5\cdot(1-3a)=a+6a+5-15a=5-8a
      $$

      Therefore

      $$
      E(\bar{X})=E(X)=5-8a
      $$

      **Step 2: invert the linear relationship.** $\bar{X}$ is a biased estimator of $a$, but its expected value is a linear function of $a$ (intercept 5, slope $-8$). Apply the inverse linear transformation so the new estimator has expected value $a$:

      $$
      \hat{\theta}=\frac{\bar{X}-5}{-8}=\frac{5-\bar{X}}{8}
      $$

      **Step 3: check it is unbiased.**

      $$
      E(\hat{\theta})=E\!\left(\frac{5-\bar{X}}{8}\right)=\frac{5-E(\bar{X})}{8}=\frac{5-(5-8a)}{8}=\frac{5-5+8a}{8}=\frac{8a}{8}=a
      $$

      ![](/images/statistics-b/ps02-q1-linear-correction.png)

      *Left: $E(\bar{X})=5-8a$ is a straight line in $a$ (for $0\le a\le \frac13$ so that all three probabilities are valid). Right: the corrective estimator $\frac{5-\bar{X}}{8}$ is the inverse of that line, so its average value is $a$.*

      > [!tip] Intuition
      > $\bar{X}$ does not estimate $a$ directly: it estimates $5-8a$. Rearranging $5-8a$ for $a$ gives $\frac{5-\bar{X}}{8}$. Larger $a$ puts more weight on the small value 1 and the middle value 3, so the average falls as $a$ rises, which is why the slope is negative.

      > [!success] Answer
      > $\hat{\theta}=\dfrac{5-\bar{X}}{8}$ is an unbiased estimator of $a$, since $E(\hat{\theta})=a$.
    related_terms: ["unbiased-estimator", "linearly-biased-estimator", "estimator", "sampling-distribution-of-the-average"]
    source_doc_page: 1
  - id: "1b"
    text: |
      **Question 1.** Variable $X$ has the following distribution table.

      | $x_i$ | 1 | 3 | 5 |
      | --- | --- | --- | --- |
      | $p(x_i)$ | $a$ | $2a$ | $1-3a$ |

      **(ii)** Check if your estimator is consistent.
    solution: |
      Find the variance of the estimator. Constants come out of a variance squared, so $Var\!\left(\frac{5-\bar{X}}{8}\right)=\frac{Var(\bar{X})}{64}$, and $Var(\bar{X})=\frac{\sigma^2}{n}$:

      $$
      Var(\hat{\theta})=Var\!\left(\frac{5-\bar{X}}{8}\right)=\frac{Var(\bar{X})}{64}=\frac{\sigma^2/n}{64}=\frac{\sigma^2}{64\,n}
      $$

      Because $n$ is in the denominator, the variance shrinks to zero as the sample grows:

      $$
      \lim_{n\to\infty}\frac{\sigma^2}{64\,n}=0
      $$

      > [!success] Answer
      > Yes, $\hat{\theta}$ is a **consistent** estimator of $a$: its variance goes to 0 as $n\to\infty$.

      > [!tip] Intuition (my addition, not in the solution)
      > Here $\sigma^2=Var(X)$ is itself a function of $a$. Using $E(X^2)=a+18a+25(1-3a)=25-56a$, we get $Var(X)=25-56a-(5-8a)^2=8a(3-8a)$, a finite number for any valid $a$. All that matters for consistency is that it is a constant that does not grow with $n$. Check: at $a=\tfrac14$ the table is $(\tfrac14,\tfrac12,\tfrac14)$, the variance is 2, and $8\cdot\tfrac14\cdot(3-2)=2$.
    related_terms: ["consistent-estimator", "variance-of-the-sample-mean", "sampling-distribution-of-the-average"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Question 2 (based on a previous exam question).** $\hat{\theta}_1$ and $\hat{\theta}_2$ are two estimators for parameter $\theta$. Their variances are

      $$
      Var(\hat{\theta}_1)=\sigma^2\cdot\frac{n}{\sqrt{n}},\qquad Var(\hat{\theta}_2)=\sigma^2\cdot\frac{\sqrt{n}}{n}
      $$

      **(i)** Is $\hat{\theta}_1$ a consistent estimator?
    solution: |
      > [!info] Lecture link
      > Consistency test from [[Lec_01-Point Estimation and Sampling Distributions]]: $Var(\hat{\theta})\to 0$ as $n\to\infty$. The trick is to simplify the square roots first, then take the limit.

      Simplify, writing $n=\sqrt{n}\cdot\sqrt{n}$:

      $$
      Var(\hat{\theta}_1)=\sigma^2\cdot\frac{n}{\sqrt{n}}=\sigma^2\cdot\frac{\sqrt{n}\cdot\sqrt{n}}{\sqrt{n}}=\sigma^2\sqrt{n}
      $$

      As $n$ increases the variance **increases**:

      $$
      \lim_{n\to\infty}\sigma^2\sqrt{n}=\infty
      $$

      > [!success] Answer
      > $\hat{\theta}_1$ is **not** a consistent estimator.
    related_terms: ["consistent-estimator", "estimator"]
    source_doc_page: 1
  - id: "2b"
    text: |
      **Question 2 (based on a previous exam question).** $\hat{\theta}_1$ and $\hat{\theta}_2$ are two estimators for parameter $\theta$. Their variances are

      $$
      Var(\hat{\theta}_1)=\sigma^2\cdot\frac{n}{\sqrt{n}},\qquad Var(\hat{\theta}_2)=\sigma^2\cdot\frac{\sqrt{n}}{n}
      $$

      **(ii)** Is $\hat{\theta}_2$ a consistent estimator?
    solution: |
      Simplify:

      $$
      Var(\hat{\theta}_2)=\sigma^2\cdot\frac{\sqrt{n}}{n}=\sigma^2\cdot\frac{\sqrt{n}}{\sqrt{n}\cdot\sqrt{n}}=\frac{\sigma^2}{\sqrt{n}}
      $$

      As $n$ increases the variance **decreases**:

      $$
      \lim_{n\to\infty}\frac{\sigma^2}{\sqrt{n}}=0
      $$

      > [!success] Answer
      > $\hat{\theta}_2$ **is** a consistent estimator.

      ![](/images/statistics-b/ps02-q2-variance-paths.png)

      *Both curves start at $\sigma^2$ when $n=1$. Estimator 1's variance grows like $\sqrt{n}$; estimator 2's shrinks like $\frac{1}{\sqrt{n}}$. Plotted in units of $\sigma^2$.*

      > [!tip] Intuition
      > Compare the powers of $n$: $\frac{n}{\sqrt{n}}=n^{1/2}$ has a **positive** power so it blows up, while $\frac{\sqrt{n}}{n}=n^{-1/2}$ has a **negative** power so it vanishes. A quick rule for exam questions: simplify to $n^{p}$ and look at the sign of $p$. Only $p<0$ gives a consistent estimator.
    related_terms: ["consistent-estimator", "estimator"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Question 3.** `=NORM.INV(PROBABILITY, MEAN, STANDARD DEVIATION)` returns a number from a normal distribution with an expected value equal to MEAN and a standard deviation equal to STANDARD DEVIATION, for which the distribution's CDF is equal to PROBABILITY. Combining this function with `=RAND()` we can generate random numbers from a normal distribution. For example, `=NORM.INV(RAND(),5,3)` generates random numbers from the distribution $X\sim N(5,3^2)$.

      **(i)** Using this function, generate 250 samples with $n=5$ from the distribution $X\sim N(4,4)$.
    solution: |
      The official file has 250 rows and five columns of draws ($X_1,\dots,X_5$ in columns B to F). Each cell is

      ```
      =NORM.INV(RAND(),4,2)
      ```

      > [!warning] Notation: $N(4,4)$ means variance 4
      > The question writes $X\sim N(4,4)$, mean 4 and **variance** 4, so $\sigma^2=4$ and the standard deviation is $\sigma=2$. This is why the formula's third argument is **2** (the standard deviation), not 4. The solution then uses $\sigma^2=4$ in part (ii).

      Each row is one sample of $n=5$ observations, so there are 250 samples.

      > [!note] Simulated run, not a fixed answer
      > `RAND()` redraws every time the sheet recalculates, so the Excel numbers in parts (iii) and (v) are **one simulated run** from the official file. Re-running gives slightly different averages. The expected values in parts (ii) and (iv) are exact and do not change.
    related_terms: ["monte-carlo-simulation", "simulating-a-dataset", "normal-distribution"]
    source_doc_page: 1
  - id: "3b"
    text: |
      **Question 3.** `=NORM.INV(PROBABILITY, MEAN, STANDARD DEVIATION)` returns a number from a normal distribution with an expected value equal to MEAN and a standard deviation equal to STANDARD DEVIATION, for which the distribution's CDF is equal to PROBABILITY. Combining this function with `=RAND()` we can generate random numbers from a normal distribution. For example, `=NORM.INV(RAND(),5,3)` generates random numbers from the distribution $X\sim N(5,3^2)$.

      **(ii)** What are the expected values of the biased and unbiased estimates for the variance in these samples?
    solution: |
      > [!info] Lecture link
      > The biased versus unbiased variance estimator, and the case where $\mu$ is known, are derived in [[Lec_02-Point Estimation and the Variance Estimator]] (section 3).

      We generated samples with $n=5$ and $\sigma^2=4$.

      **Biased estimate** (divide by $n$): from [[Lec_02-Point Estimation and the Variance Estimator]], $E\!\left(\frac{\sum(X_i-\bar{X})^2}{n}\right)=\frac{n-1}{n}\sigma^2$, so

      $$
      E\!\left(\frac{\sum_{i=1}^{n}(X_i-\bar{X})^2}{n}\right)=\frac{n-1}{n}\,\sigma^2=\frac{5-1}{5}\cdot 4=\frac{16}{5}=3.2
      $$

      **Unbiased estimate** (divide by $n-1$):

      $$
      E\!\left(\frac{\sum_{i=1}^{n}(X_i-\bar{X})^2}{n-1}\right)=\sigma^2=4
      $$

      > [!success] Answer
      > Expected value of the biased estimate **3.2**; of the unbiased estimate **4**.

      > [!tip] Intuition
      > The biased estimator is too small by the factor $\frac{n-1}{n}=\frac45$, so it averages 80% of the true variance 4. With a small sample ($n=5$) the effect is large, which is what makes this simulation a good demonstration. It uses $\bar{X}$, which is itself chosen to sit in the middle of the sample, so deviations from $\bar{X}$ are systematically smaller than deviations from the true mean.
    related_terms: ["biased-variance-estimator", "sample-variance", "unbiased-estimator", "bias"]
    source_doc_page: 1
  - id: "3c"
    text: |
      **Question 3.** `=NORM.INV(PROBABILITY, MEAN, STANDARD DEVIATION)` returns a number from a normal distribution with an expected value equal to MEAN and a standard deviation equal to STANDARD DEVIATION, for which the distribution's CDF is equal to PROBABILITY. Combining this function with `=RAND()` we can generate random numbers from a normal distribution. For example, `=NORM.INV(RAND(),5,3)` generates random numbers from the distribution $X\sim N(5,3^2)$.

      **(iii)** Calculate the biased and unbiased estimates for the variance for each of the 250 samples, then calculate the average for each type of estimate. Are the results similar to the expected values you calculated?
    solution: |
      The Excel functions `VAR.P` ($\div n$) and `VAR.S` ($\div(n-1)$) are in [[Lec_02-Point Estimation and the Variance Estimator]]. For each row, Excel computes

      - `=VAR.P(B2:F2)` in column I: divides by $n$, the **biased** estimate;
      - `=VAR.S(B2:F2)` in column J: divides by $n-1$, the **unbiased** estimate;

      then averages each column over the 250 rows (`=AVERAGE(I2:I251)` and `=AVERAGE(J2:J251)`).

      | Estimate | Expected value (part ii) | Average over 250 samples (one run) |
      | --- | --- | --- |
      | Biased (`VAR.P`, divide by $n$) | 3.2 | **3.24** |
      | Unbiased (`VAR.S`, divide by $n-1$) | 4 | **4.05** |

      > [!success] Answer
      > Yes, the results are similar to the expected values: 3.24 is close to 3.2 and 4.05 is close to 4. In this run the biased average sits clearly below the unbiased average, by roughly the factor $\frac{4}{5}$.
    related_terms: ["biased-variance-estimator", "sample-variance", "monte-carlo-simulation", "unbiased-estimator"]
    source_doc_page: 1
  - id: "3d"
    text: |
      **Question 3.** `=NORM.INV(PROBABILITY, MEAN, STANDARD DEVIATION)` returns a number from a normal distribution with an expected value equal to MEAN and a standard deviation equal to STANDARD DEVIATION, for which the distribution's CDF is equal to PROBABILITY. Combining this function with `=RAND()` we can generate random numbers from a normal distribution. For example, `=NORM.INV(RAND(),5,3)` generates random numbers from the distribution $X\sim N(5,3^2)$.

      **(iv)** In this example, we know the expected value of the distribution is 4. Using this known expected value, we calculate an estimate for the variance in each sample based on the formula

      $$
      \frac{\sum_{i=1}^{n}(X_i-\mu)^2}{n}
      $$

      What is the expected value of this variance estimate?
    solution: |
      Since $\mu=4$ is known, estimate the variance in each sample with

      $$
      \hat{\sigma}^2_{\mu}=\frac{\sum_{i=1}^{n}(X_i-\mu)^2}{n}
      $$

      As proved in class ([[Lec_02-Point Estimation and the Variance Estimator]], section 3, case $\mu$ known), this is an **unbiased** estimator of the variance $\sigma^2$, so its expected value is the true variance.

      > [!success] Answer
      > Expected value $=\sigma^2=\mathbf{4}$.

      > [!tip] Intuition
      > Dividing by $n$ is only a problem when we use $\bar{X}$, because estimating the mean "uses up" one degree of freedom. If $\mu$ is known there is nothing to estimate, so all $n$ deviations are free and $\div n$ is exactly right.
    related_terms: ["unbiased-estimator", "sample-variance", "degrees-of-freedom"]
    source_doc_page: 2
  - id: "3e"
    text: |
      **Question 3.** `=NORM.INV(PROBABILITY, MEAN, STANDARD DEVIATION)` returns a number from a normal distribution with an expected value equal to MEAN and a standard deviation equal to STANDARD DEVIATION, for which the distribution's CDF is equal to PROBABILITY. Combining this function with `=RAND()` we can generate random numbers from a normal distribution. For example, `=NORM.INV(RAND(),5,3)` generates random numbers from the distribution $X\sim N(5,3^2)$.

      **(v)** Calculate this variance estimate (the known-mean estimate from part iv) for each of the 250 samples, then calculate the average of the estimates. Are the results similar to the expected values you calculated?
    solution: |
      In the official file, columns O to S hold the squared deviations $(X_i-4)^2$ and column U holds their sum divided by 5 (`=SUM(O2:S2)/5`). Averaging column U over the 250 samples (`=AVERAGE(U2:U251)`) gives:

      | Estimate | Expected value (part iv) | Average over 250 samples (one run) |
      | --- | --- | --- |
      | Known-mean estimate (divide by $n$ around $\mu=4$) | 4 | **4.06** |

      > [!success] Answer
      > Yes, similar: 4.06 is close to the expected value 4. This is the same unbiased behaviour as `VAR.S`, but without needing to divide by $n-1$.

      ![](/images/statistics-b/ps02-q3-simulated-estimates.png)

      *One simulated run of 250 samples with $n=5$ from the official Excel file, redrawn from its cached values. Black dashed line: expected value from the theory; orange line: this run's average. The two lines almost coincide in each panel, and the left panel (biased) sits clearly left of the other two. Individual estimates are very spread out and skewed, but the averages land on target.*

      > [!tip] Intuition
      > Three different estimators, but only the biased one misses its target on average. Notice how widely single estimates vary (many below 1, a few above 15) while the averages are stable: **unbiased means right on average over many samples, not right in any one sample.**
    related_terms: ["unbiased-estimator", "monte-carlo-simulation", "sample-variance"]
    source_doc_page: 2
---

*Related: [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]]*
