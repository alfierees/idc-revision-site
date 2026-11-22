---
title: "PS1"
subject: statistics-b
source_doc: /papers/statistics-b/ps-1.pdf
tags:
  - statistics-b
  - problem-set
  - point-estimation
  - unbiased-estimator
  - consistent-estimator
  - bias
  - sampling-distribution
  - excel-simulation
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Question 1.** Variable $X$ has the following distribution, which depends on a parameter $\theta$.

      | $x_i$ | 1 | 2 | 3 |
      |---|---|---|---|
      | $P(X = x_i)$ | $\dfrac{1}{6}$ | $\dfrac{1}{3} - \theta$ | $\dfrac{1}{2} + \theta$ |

      We propose the first observation in a sample as an estimator for $\theta$:

      $$
      \hat\theta_1 = X_1
      $$

      Is $\hat\theta_1$ an unbiased estimator of $\theta$?
    solution: |
      > [!note] Check that it is a valid distribution
      > The probabilities sum to $\tfrac16 + \tfrac13 - \theta + \tfrac12 + \theta = 1$ for every $\theta$, so the $\theta$ terms cancel. Each must also be non-negative, which restricts $\theta$ to $-\tfrac12 \le \theta \le \tfrac13$.

      Use the definition of expected value of a discrete variable, $E(X_1) = \sum x_i \, P(X = x_i)$:

      $$
      E(\hat\theta_1) = E(X_1) = 1 \cdot \frac{1}{6} + 2\left(\frac{1}{3} - \theta\right) + 3\left(\frac{1}{2} + \theta\right)
      $$

      Expand and collect constants and $\theta$ terms separately:

      $$
      E(\hat\theta_1) = \frac{1}{6} + \frac{2}{3} + \frac{3}{2} - 2\theta + 3\theta = \frac{1}{6} + \frac{4}{6} + \frac{9}{6} + \theta = \frac{14}{6} + \theta = \frac{7}{3} + \theta
      $$

      Since $E(\hat\theta_1) = \tfrac73 + \theta \neq \theta$, **$\hat\theta_1$ is a biased estimator of $\theta$**, with bias $E(\hat\theta_1) - \theta = \tfrac73$.

      ![](/images/statistics-b/ps01-q1-bias-line.png)

      > [!info] Figure (theory diagram)
      > The expected value of $\hat\theta_1$ is the line $\tfrac73 + \theta$. It sits a constant $\tfrac73$ above the dashed line $E(\hat\theta) = \theta$ that an unbiased estimator would follow. The horizontal axis is limited to the valid range of $\theta$.
    related_terms: ["unbiased-estimator", "bias", "estimator"]
    source_doc_page: 1
  - id: "1b"
    text: |
      **Question 1.** Variable $X$ has the following distribution, which depends on a parameter $\theta$.

      | $x_i$ | 1 | 2 | 3 |
      |---|---|---|---|
      | $P(X = x_i)$ | $\dfrac{1}{6}$ | $\dfrac{1}{3} - \theta$ | $\dfrac{1}{2} + \theta$ |

      We propose the first observation in a sample as an estimator for $\theta$:

      $$
      \hat\theta_1 = X_1
      $$

      If $\hat\theta_1$ is biased, propose an adjusted estimator $\hat\theta_2$ that is an unbiased estimator of $\theta$.
    solution: |
      The bias is a **constant** ($\tfrac73$, free of $\theta$), so a linear shift removes it. Subtract the constant:

      $$
      \hat\theta_2 = \hat\theta_1 - \frac{7}{3}
      $$

      Check, using $E(aX + b) = aE(X) + b$ (here $a = 1$):

      $$
      E(\hat\theta_2) = E\left(\hat\theta_1 - \frac{7}{3}\right) = E(\hat\theta_1) - \frac{7}{3} = \frac{7}{3} + \theta - \frac{7}{3} = \theta
      $$

      **$\hat\theta_2 = X_1 - \tfrac73$ is an unbiased estimator of $\theta$.**

      > [!tip] Intuition
      > This is the standard fix from [[Lec_01-Point Estimation and Sampling Distributions]]: when $E(\hat\theta) = a + b\theta$, the estimator $(\hat\theta - a)/b$ is unbiased. Here $a = \tfrac73$ and $b = 1$, so only the shift is needed. (The same idea gives the divisor fix for the variance in [[Lec_02-Point Estimation and the Variance Estimator]].)
    related_terms: ["unbiased-estimator", "linearly-biased-estimator", "bias", "estimator"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Question 2.** We want to estimate the probability $p$ of heads for a coin that is not necessarily fair. We flip it $n$ times and record $X_i = 1$ for heads and $X_i = 0$ for tails. Three estimators of $p$:

      - $\hat p_1 = X_1$ (the result of the first flip)
      - $\hat p_2 = \dfrac{\sum X_i}{n}$ (the proportion of heads in the sample)
      - $\hat p_3 = 0.5$

      Check whether each is unbiased and consistent.

      **(i)** $\hat p_1 = X_1$.
    solution: |
      A single flip is Bernoulli, $X_1 \sim B(1, p)$, so $E(X_1) = 1 \cdot p = p$:

      $$
      E(\hat p_1) = E(X_1) = p
      $$

      **$\hat p_1$ is unbiased.**

      For the variance:

      $$
      Var(\hat p_1) = Var(X_1) = 1 \cdot p(1-p) = p(1-p)
      $$

      This does not depend on $n$, so it does **not** decrease as the sample grows. **$\hat p_1$ is not consistent.**

      > [!tip] Intuition
      > $\hat p_1$ throws away every flip except the first. More data never helps it: it is always either 0 or 1, whatever $n$ is.

      ![](/images/statistics-b/ps01-q2-variance-vs-n.png)

      > [!info] Figure (theory diagram)
      > Variance of each estimator against $n$, in units of $p(1-p)$. $\hat p_1$ stays flat, $\hat p_2$ falls like $1/n$, and $\hat p_3$ sits at zero. All three curves come directly from the variance formulas worked out in parts (i) to (iii).
    related_terms: ["unbiased-estimator", "consistent-estimator", "binomial-distribution", "sample-proportion"]
    source_doc_page: 1
  - id: "2b"
    text: |
      **Question 2.** We want to estimate the probability $p$ of heads for a coin that is not necessarily fair. We flip it $n$ times and record $X_i = 1$ for heads and $X_i = 0$ for tails. Three estimators of $p$:

      - $\hat p_1 = X_1$ (the result of the first flip)
      - $\hat p_2 = \dfrac{\sum X_i}{n}$ (the proportion of heads in the sample)
      - $\hat p_3 = 0.5$

      Check whether each is unbiased and consistent.

      **(ii)** $\hat p_2 = \dfrac{\sum X_i}{n}$.
    solution: |
      The number of heads is binomial, $\sum X_i \sim B(n, p)$, with $E(\sum X_i) = np$. Therefore:

      $$
      E(\hat p_2) = E\left(\frac{\sum X_i}{n}\right) = \frac{E(\sum X_i)}{n} = \frac{np}{n} = p
      $$

      **$\hat p_2$ is unbiased.**

      For the variance, a constant $1/n$ comes out of the variance squared:

      $$
      Var(\hat p_2) = Var\left(\frac{\sum X_i}{n}\right) = \frac{Var(\sum X_i)}{n^2}
      $$

      The flips are independent, so the variance of the sum is $np(1-p)$:

      $$
      \frac{Var(\sum X_i)}{n^2} = \frac{np(1-p)}{n^2} = \frac{p(1-p)}{n}
      $$

      The variance is divided by $n$, so it shrinks to $0$ as $n$ grows. **$\hat p_2$ is consistent.**
    related_terms: ["unbiased-estimator", "consistent-estimator", "binomial-distribution", "sample-proportion", "variance-of-the-sample-mean"]
    source_doc_page: 1
  - id: "2c"
    text: |
      **Question 2.** We want to estimate the probability $p$ of heads for a coin that is not necessarily fair. We flip it $n$ times and record $X_i = 1$ for heads and $X_i = 0$ for tails. Three estimators of $p$:

      - $\hat p_1 = X_1$ (the result of the first flip)
      - $\hat p_2 = \dfrac{\sum X_i}{n}$ (the proportion of heads in the sample)
      - $\hat p_3 = 0.5$

      Check whether each is unbiased and consistent.

      **(iii)** $\hat p_3 = 0.5$.
    solution: |
      $$
      E(\hat p_3) = E(0.5) = 0.5 \neq p
      $$

      in general, so **$\hat p_3$ is biased** (it is only right if the coin happens to be fair). Because it is a constant, its variance is $0$ for every sample size, so the official solution calls it **meaningless to ask whether it is consistent**.

      > [!tip] Intuition
      > A constant ignores the data entirely. It has zero spread, yet it never moves toward $p$, so it fails the reason we care about consistency (converging to the true value). Some textbooks would simply say it is not consistent, since it converges to $0.5$ rather than to $p$. Keep the official wording in this course, and mention the point if asked.

      **Summary of Question 2**

      | Estimator | Unbiased? | Variance | Consistent? |
      |---|---|---|---|
      | $\hat p_1 = X_1$ | Yes | $p(1-p)$, constant in $n$ | No |
      | $\hat p_2 = \sum X_i / n$ | Yes | $\dfrac{p(1-p)}{n}$, falls with $n$ | **Yes** |
      | $\hat p_3 = 0.5$ | No | $0$ | Not meaningful (official) |

      $\hat p_2$ is the only good estimator of the three. This is the proportion estimator from [[Lec_02-Point Estimation and the Variance Estimator]].
    related_terms: ["unbiased-estimator", "consistent-estimator", "bias"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Question 3.** In Excel, `=RANDBETWEEN(0,10)` selects a random integer (whole number) between 0 and 10.

      **(i)** What is the variance of the numbers generated by this function?
    solution: |
      Call the generated number $X$. It is a **discrete uniform** variable on the integers $0, 1, \dots, 10$, so $X \sim U(0, 10)$ with $a = 0$ and $b = 10$ (11 equally likely values). The variance of a discrete uniform on integers $a, \dots, b$ is

      $$
      Var(X) = \frac{(b - a + 1)^2 - 1}{12}
      $$

      Substitute:

      $$
      Var(X) = \frac{11^2 - 1}{12} = \frac{120}{12} = 10
      $$

      > [!warning] Do not use the continuous formula
      > The continuous uniform variance $(b-a)^2/12$ would give $100/12 \approx 8.33$. Because the function returns **whole numbers**, the discrete formula with the $+1$ and the $-1$ is the right one.
    related_terms: ["discrete-uniform-distribution"]
    source_doc_page: 2
  - id: "3b"
    text: |
      **Question 3.** In Excel, `=RANDBETWEEN(0,10)` selects a random integer (whole number) between 0 and 10.

      **(ii)** How many instances of this function would you need to average so that the variance is equal to 1?
    solution: |
      The variance of the sample mean of $n$ independent draws is $\sigma^2/n$ (from [[Lec_01-Point Estimation and Sampling Distributions]]). Set it to 1:

      $$
      \frac{10}{n} = 1
      $$

      so

      $$
      n = \frac{10}{1} = 10
      $$

      **We need to average 10 instances** of `=RANDBETWEEN(0,10)`.
    related_terms: ["variance-of-the-sample-mean", "sampling-distribution-of-the-average", "discrete-uniform-distribution"]
    source_doc_page: 2
  - id: "3c"
    text: |
      **Question 3.** In Excel, `=RANDBETWEEN(0,10)` selects a random integer (whole number) between 0 and 10.

      Create a simulation in Excel.

      **(iii)** Generate 50 instances of `=RANDBETWEEN(0,10)` and check their variance using the function `=VAR.S()`. What is the variance you find in the simulation? Is it similar to the variance you calculated in part (i)?
    solution: |
      The official Excel file holds 50 draws in `A2:A51` and applies `=VAR.S(A2:A51)` in `C3`.

      > [!note] One simulated run
      > `RANDBETWEEN` recalculates every time the sheet changes, so the numbers below are **one run** of the official file. Your own run will differ slightly.

      | Quantity | Value |
      |---|---|
      | Theoretical variance (part i) | $10$ |
      | Simulated sample variance, 50 draws (`VAR.S`) | $10.3776$ |
      | Mean of the 50 draws | $5.3$ |

      **The simulated variance of about 10.38 is very close to the theoretical 10.** The sample mean of 5.3 is also near the true mean of 5.
    related_terms: ["monte-carlo-simulation", "sample-variance", "discrete-uniform-distribution"]
    source_doc_page: 2
  - id: "3d"
    text: |
      **Question 3.** In Excel, `=RANDBETWEEN(0,10)` selects a random integer (whole number) between 0 and 10.

      Create a simulation in Excel.

      **(iv)** Generate 50 samples with as many instances of `=RANDBETWEEN(0,10)` as you calculated you would need in part (ii). For each sample, calculate the average using the function `=AVERAGE` and check whether the variance is indeed approximately 1.
    solution: |
      The second sheet has 50 rows. Each row holds $X_1, \dots, X_{10}$ (columns `A` to `J`) and its average `=AVERAGE(A:J)` in column `L`. The variance of the 50 averages is `=VAR.S(L2:L51)` in `N4`.

      | Quantity | Value |
      |---|---|
      | Theoretical variance of an average of 10 (part ii) | $1$ |
      | Simulated variance of the 50 averages | $0.9381$ |
      | Mean of the 50 averages | $5.19$ |

      **The simulated variance of about 0.94 is approximately 1, as predicted.**

      ![](/images/statistics-b/ps01-q3-simulation-histograms.png)

      > [!info] Figure (real data, one simulated run)
      > Left: the 50 single draws from sheet 1, spread across all of $0, \dots, 10$ with sample variance 10.38. Right: the 50 averages of 10 draws from sheet 2, bunched around 5 with sample variance 0.94. Both histograms are built from the cached values in the official Excel file. The 50 averages are about ten times less spread out than single draws.

      > [!tip] Intuition
      > Averaging cancels noise: a high draw is usually offset by a low one. That is why $Var(\bar X) = \sigma^2/n$ shrinks with $n$, and it is the same mechanism that makes $\hat p_2$ consistent in Question 2.

      > [!warning] Watch out
      > Do not read a simulated variance of 0.94 as a contradiction: a sample of only 50 averages gives an approximation, not exactly 1.
    related_terms: ["monte-carlo-simulation", "variance-of-the-sample-mean", "sampling-distribution-of-the-average", "sample-variance"]
    source_doc_page: 2
---

*Related: [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]], [[Lec_03-Maximum Likelihood Estimation]]*
