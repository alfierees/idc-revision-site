---
title: "Formula Sheet"
subject: statistics-a
type: reference
description: "Every formula in the course on one page, grouped by topic and in exam order. Formulas only: the cheat sheet has the explanations and worked examples."
course: Statistics A
semester: 1
year: 1
order: 2
pinned: true
tags:
  - statistics-a
  - exam-prep
  - formula-sheet
---

> The course formula sheet (2024-2025) and the Z table are allowed in the exam. This page follows the same notation, so you can practise with the symbols you will see on the day.

## Probability rules (Lec 01 to 03)

| Rule | Formula |
|---|---|
| Axioms | $P(A) \ge 0$, $P(\Omega) = 1$, disjoint: $P(A \cup B) = P(A) + P(B)$ |
| Complement | $P(\bar A) = 1 - P(A)$, $P(\varnothing) = 0$ |
| Monotonicity | $A \subseteq B \Rightarrow P(A) \le P(B)$ |
| Union | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Intersection | $P(A \cap B) = P(A) + P(B) - P(A \cup B)$ |
| Difference | $P(A \cap \bar B) = P(A) - P(A \cap B)$ |
| De Morgan | $P(\bar A \cap \bar B) = 1 - P(A \cup B)$ |
| Intersection bounds | $\max(0, P(A) + P(B) - 1) \le P(A \cap B) \le \min(P(A), P(B))$ |
| Union bounds | $\max(P(A), P(B)) \le P(A \cup B) \le \min(1, P(A) + P(B))$ |
| Conditional | $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$, and $P(\bar A \mid B) = 1 - P(A \mid B)$ |
| Multiplication | $P(A \cap B) = P(A \mid B)P(B) = P(B \mid A)P(A)$ |
| Total probability | $P(A) = P(A \mid B)P(B) + P(A \mid \bar B)P(\bar B)$ |
| Bayes | $P(B \mid A) = \dfrac{P(A \mid B)P(B)}{P(A)}$ |
| Independence | $P(A \cap B) = P(A)P(B) \iff P(A \mid B) = P(A)$ |
| Symmetrical space | $P(A) = \lvert A \rvert / \lvert \Omega \rvert$, $P(A \mid B) = \lvert A \cap B \rvert / \lvert B \rvert$ |

## Counting (Lec 04)

| Case | Count |
|---|---|
| Multiplication principle | $n_1 \cdot n_2 \cdots n_m$ |
| Order matters, with replacement | $n^k$ |
| Order matters, without replacement | $(n)_k = \dfrac{n!}{(n-k)!}$, and $n!$ for all $n$ |
| Order doesn't matter, without replacement | $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ |
| Order doesn't matter, with replacement (not examined) | $\dbinom{n+k-1}{k}$ |
| Special values | $0! = 1$, $\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{1} = n$, $\binom{n}{k} = \binom{n}{n-k}$ |

## Discrete random variables (Lec 05, 06)

| Item | Formula |
|---|---|
| PMF | $\sum_i P(X = x_i) = 1$ |
| CDF | $F(x) = P(X \le x)$, $P(X = x_i) = F(x_i) - F(x_{i-1})$ |
| Expected value | $E(X) = \sum_i x_i P(X = x_i)$ |
| Variance | $Var(X) = \sum_i (x_i - E(X))^2 P(X = x_i) = E(X^2) - E(X)^2$ |
| SD | $SD(X) = \sqrt{Var(X)}$ |
| Linear transformation | $E(a + bX) = a + bE(X)$, $Var(a + bX) = b^2Var(X)$, $SD(a + bX) = \lvert b \rvert SD(X)$ |
| Sums | $E(X + Y) = E(X) + E(Y)$, $Var(X + Y) = Var(X) + Var(Y) + 2Cov(X,Y)$ |
| Difference | $Var(X - Y) = Var(X) + Var(Y) - 2Cov(X,Y)$ |
| Independent sums | $Var(aX + bY) = a^2Var(X) + b^2Var(Y)$ |

## Known discrete distributions (Lec 06, 07)

| $X \sim$ | $P(X = k)$ | $E(X)$ | $Var(X)$ |
|---|---|---|---|
| $U(a,b)$, integers | $\dfrac{1}{b - a + 1}$ | $\dfrac{a + b}{2}$ | $\dfrac{(b - a + 1)^2 - 1}{12}$ |
| Bernoulli$(p)$ | $P(1) = p$, $P(0) = 1 - p$ | $p$ | $p(1 - p)$ |
| $B(n,p)$ | $\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| $G(p)$, $k \ge 1$ | $(1-p)^{k-1}p$, tail $P(X > k) = (1-p)^k$ | $\dfrac1p$ | $\dfrac{1-p}{p^2}$ |
| $HG(N, D, n)$ | $\dfrac{\binom{D}{k}\binom{N-D}{n-k}}{\binom{N}{n}}$ | $n\dfrac{D}{N}$ | $\dfrac{N-n}{N-1} \cdot n\dfrac{D}{N}\left(1 - \dfrac{D}{N}\right)$ |
| $P(\lambda)$, $k \ge 0$ | $e^{-\lambda}\dfrac{\lambda^k}{k!}$ | $\lambda$ | $\lambda$ |

Poisson rate scales with the interval: $\lambda_{\text{new}} = \lambda \times \dfrac{\text{new interval}}{\text{old interval}}$.

## Joint distributions, covariance, correlation (Lec 08, 09)

| Item | Formula |
|---|---|
| Marginals | $P(X = x_i) = \sum_j P(X = x_i, Y = y_j)$ (row sum); columns for $Y$ |
| Conditional | $P(X = x_i \mid Y = y_j) = \dfrac{P(X = x_i, Y = y_j)}{P(Y = y_j)}$ |
| Conditional expectation | $E(X \mid Y = y_j) = \sum_i x_i P(X = x_i \mid Y = y_j)$ |
| Independence | $P(X = x_i, Y = y_j) = P(X = x_i)P(Y = y_j)$ for every $i, j$ |
| $E(XY)$ | $\sum_i \sum_j x_i y_j P(X = x_i, Y = y_j)$ |
| Covariance | $Cov(X,Y) = E\big[(X - E(X))(Y - E(Y))\big] = E(XY) - E(X)E(Y)$ |
| Covariance rules | $Cov(X,X) = Var(X)$, $Cov(a + bX, c + dY) = bd\,Cov(X,Y)$, independent ⇒ $Cov = 0$ |
| Correlation | $\rho(X,Y) = \dfrac{Cov(X,Y)}{SD(X)SD(Y)}$, $-1 \le \rho \le 1$ |
| Correlation rules | $\rho(a + bX, c + dY) = \pm\rho(X,Y)$ (+ if $bd > 0$), $Y = a + bX \Rightarrow \rho = \pm 1$ |

## Continuous random variables (Lec 10, 11)

| Item | Formula |
|---|---|
| CDF and density | $F(t) = P(X \le t) = \int_{-\infty}^t f(x)\,dx$, $f = F'$, $\int f = 1$ |
| Interval | $P(a \le X \le b) = F(b) - F(a) = \int_a^b f(x)\,dx$, $P(X = x) = 0$ |
| Expected value | $E(X) = \int x f(x)\,dx$ |
| Variance | $Var(X) = \int x^2 f(x)\,dx - E(X)^2$ |
| Percentile | $F(C_q) = q$, median $F(Md) = 0.5$ |
| Continuous $U(a,b)$ | $f = \dfrac{1}{b-a}$, $F(x) = \dfrac{x - a}{b - a}$, $E = Md = \dfrac{a+b}{2}$, $Var = \dfrac{(b-a)^2}{12}$, $C_q = a + q(b-a)$ |

## Normal distribution (Lec 11)

| Item | Formula |
|---|---|
| Density | $f(x) = \dfrac{1}{\sqrt{2\pi\sigma^2}}\, e^{-\frac{(x - \mu)^2}{2\sigma^2}}$, $E = \mu$, $Var = \sigma^2$ |
| Empirical rule | $\mu \pm \sigma$: 0.6827, $\mu \pm 2\sigma$: 0.9545, $\mu \pm 3\sigma$: 0.9973 |
| Linear transformation | $bX + a \sim N(b\mu + a,\ b^2\sigma^2)$ |
| Standardize | $Z = \dfrac{X - \mu}{\sigma} \sim N(0,1)$, $P(X < t) = \Phi\!\left(\dfrac{t - \mu}{\sigma}\right)$ |
| Table rules | $P(Z > t) = 1 - \Phi(t)$, $P(s < Z < t) = \Phi(t) - \Phi(s)$, $\Phi(-t) = 1 - \Phi(t)$ |
| Quantiles | $\Phi(Z_a) = a$, $Z_a = -Z_{1-a}$, cut-off $t = \mu + Z_a\sigma$ |

Useful table values: $\Phi(1) = 0.8413$, $\Phi(1.28) = 0.8997$, $\Phi(1.645) \approx 0.95$, $\Phi(1.96) = 0.975$, $\Phi(2) = 0.9772$, $\Phi(2.33) = 0.9901$.

## CLT and approximations (Lec 12)

| Quantity ($n \ge 30$) | Distribution |
|---|---|
| Sum $S = \sum_{i=1}^n X_i$ | $N(n\mu,\ n\sigma^2)$ |
| Average $\bar X$ | $N\!\left(\mu,\ \dfrac{\sigma^2}{n}\right)$, $SD = \dfrac{\sigma}{\sqrt n}$ |
| Binomial count ($np \ge 5$, $n(1-p) \ge 5$) | $N(np,\ np(1-p))$ |
| Proportion $\hat P = X/n$ (same condition) | $N\!\left(p,\ \dfrac{p(1-p)}{n}\right)$ |
| Law of large numbers | $\bar X \to \mu$ as $n \to \infty$ |
