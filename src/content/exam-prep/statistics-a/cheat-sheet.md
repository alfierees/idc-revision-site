---
title: "Cheat Sheet (Lec 1–13)"
subject: statistics-a
type: reference
description: "Every rule, formula, distribution and method from the 13 lectures, in exam order, each with when the question wants it and a worked example from the course."
course: Statistics A
instructor: Asael Sklar
semester: 1
year: 1
order: 1
pinned: true
tags:
  - statistics-a
  - exam-prep
  - cheat-sheet
aliases:
  - Stats A Cheat Sheet
  - Statistics A Cheat Sheet
---

> **The exam:** 20 multiple-choice questions, 4 options, 5 points each, **3 hours** (9 minutes a question), formula sheet and Z table allowed. The slots barely move from year to year:
>
> | Questions | Topic | Section |
> |---|---|---|
> | Q1 to Q5 | Probability: unions, bounds, conditional, total probability, Bayes, independence | §1 to §3 |
> | Q6 | Combinatorics (one counting question) | §4 |
> | Q7 to Q8 | Discrete random variables: tables, CDF, $E$, $Var$, linear transformations | §5 |
> | Q9 to Q12 | Known distributions and sums of variables (Q12 is sometimes Markov or Chebyshev, outside the material) | §6 |
> | Q13 to Q15 | Joint tables, conditional distributions, independence, covariance, correlation | §7 to §8 |
> | Q16 to Q17 | Continuous variables: density, CDF, percentiles, continuous uniform | §9 |
> | Q18 to Q20 | Normal, CLT for a sum and an average, normal approximation of a count or proportion | §10 to §11 |
>
> **Notation:** $P(A)$, $\Omega$ (sample space), $\bar A$ (complement), $P(A \mid B)$, $E(X)$, $Var(X)$, $SD(X)$, $Cov(X,Y)$, $\rho(X,Y)$, $\Phi(z)$. $N(\mu, \sigma^2)$ takes the **variance**.

---

## 0. Method picker: what does this question want?

| You see in the question… | Do this | Section |
|---|---|---|
| $P(A)$, $P(B)$ and $P(A \cap B)$ or $P(A \cup B)$ | Union rule, rearranged for the missing one | §1 |
| "Which must be true about $P(B)$", bounds | Venn diagram: push $B$ to its smallest and largest | §1 |
| Percentages of a population split two ways | 2×2 table, fill by subtraction | §1 |
| "Of those who…, x% …" | That is a **conditional** probability: $P(\text{later} \mid \text{of those})$ | §2 |
| Groups with different rates, overall rate asked | Law of total probability (tree) | §2 |
| "Given the result, what is the chance of the cause?" | Bayes: flip the conditional | §2 |
| "Disjoint? Independent?" | Disjoint: $P(A \cap B) = 0$. Independent: $P(A \cap B) = P(A)P(B)$. Test separately | §3 |
| Cards, committees, race orders, passwords | Order matters? Replacement? Pick the formula | §4 |
| A table of values and probabilities, one unknown | Probabilities sum to 1, or use the given $E(X)$ | §5 |
| A CDF table $P(X \le x_i)$ | $P(X = x_i)$ = jump of the CDF | §5 |
| "You pay $c$ and win $b$ times…" | Earnings $Y = bX - c$: $E(Y) = bE(X) - c$, $Var(Y) = b^2 Var(X)$ | §5 |
| "Number of successes in $n$ tries" | Binomial $B(n,p)$ | §6 |
| "Tries until the first success" | Geometric $G(p)$ | §6 |
| "Draw $n$ without replacement from $N$, $D$ are…" | Hypergeometric $HG(N, D, n)$ | §6 |
| "Rate of … per hour / year", count in a window | Poisson $P(\lambda)$, **rescale $\lambda$** to the window | §6 |
| A fair die with $k$ faces, the number shown | Discrete uniform $U(1, k)$ | §6 |
| Total of two independent prizes or wheels | $Var(aX + bY) = a^2Var(X) + b^2Var(Y)$ | §6 |
| A joint table | Marginals = row and column sums; conditional = divide by the margin | §7 |
| $Var(X)$, $Var(Y)$ and $Var(X+Y)$ given | $Cov = \tfrac12\,[Var(X+Y) - Var(X) - Var(Y)]$, then $\rho$ | §8 |
| Correlation after rescaling a variable | Same size, sign flips if $b \cdot d < 0$ | §8 |
| A density with an unknown constant | Total area = 1 | §9 |
| "$x$-th percentile" of a continuous variable | Solve $F(C) = x/100$ | §9 |
| Normal, "what percent are above / below…" | Standardize, $\Phi$, complement for "above" | §10 |
| Normal, "what score / cut-off…" | Look **inside** the Z table, then $t = \mu + z\sigma$ | §10 |
| Sum of $n$ independent values (weights, steps) | CLT: $S \sim N(n\mu, n\sigma^2)$ | §11 |
| **Average** of $n$ | CLT: $\bar X \sim N(\mu, \sigma^2/n)$ | §11 |
| "$x$% of …, in a sample of $n$, more than $y$%" | Proportion: $\hat P \sim N\!\left(p, \tfrac{p(1-p)}{n}\right)$ | §11 |

---

## 1. Lec 01 and 02 — Sets, axioms and the probability rules

**Random experiment** → **sample space** $\Omega$ (all outcomes) → **events** (subsets of $\Omega$) → **probability function** $P$.

| Set idea | Symbol | Meaning |
|---|---|---|
| Union | $A \cup B$ | $A$ **or** $B$ (or both) |
| Intersection | $A \cap B$ | $A$ **and** $B$ |
| Complement | $\bar A$ | not $A$ |
| Difference | $A \setminus B = A \cap \bar B$ | $A$ but not $B$ |
| Disjoint | $A \cap B = \varnothing$ | cannot happen together |
| Subset | $A \subseteq B$ | every $A$ outcome is in $B$ |

**Three axioms:** $P(A) \ge 0$; $P(\Omega) = 1$; if $A$, $B$ disjoint, $P(A \cup B) = P(A) + P(B)$.

**Rules that follow** (all on the formula sheet):

| Rule | Formula |
|---|---|
| Complement | $P(\bar A) = 1 - P(A)$ |
| Impossible event | $P(\varnothing) = 0$ |
| Monotonicity | $A \subseteq B \Rightarrow P(A) \le P(B)$ |
| Limits | $0 \le P(A) \le 1$ |
| Union | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Intersection | $P(A \cap B) = P(A) + P(B) - P(A \cup B)$ |
| Difference | $P(A \setminus B) = P(A) - P(A \cap B)$ |
| Disjoint | $P(A \cup B) = P(A) + P(B)$ |

**Bounds questions.** The intersection is at most the smaller event and at least $P(A) + P(B) - 1$. The union is at least the larger event and at most $\min(1, P(A) + P(B))$.

$$
\max(0,\ P(A) + P(B) - 1) \le P(A \cap B) \le \min(P(A), P(B))
$$

$$
\max(P(A), P(B)) \le P(A \cup B) \le \min(1,\ P(A) + P(B))
$$

> [!example] Bounds on $P(B)$, 2023 Moed B Q1
> $P(A) = 0.4$, $P(A \cap B) = 0.2$. Smallest $B$ is just the overlap: $0.2$. Largest $B$ takes everything except the part of $A$ outside the overlap ($0.4 - 0.2 = 0.2$): $1 - 0.2 = 0.8$. Answer: $0.2 \le P(B) \le 0.8$.

**The 2×2 table.** Rows $A$, $\bar A$; columns $B$, $\bar B$. Each cell is an intersection; margins are $P(A)$, $P(\bar A)$, $P(B)$, $P(\bar B)$; everything sums to 1. Fill the missing cells **by subtraction** from the margins.

|  | $B$ | $\bar B$ | total |
|---|---|---|---|
| $A$ | $P(A \cap B)$ | $P(A \cap \bar B)$ | $P(A)$ |
| $\bar A$ | $P(\bar A \cap B)$ | $P(\bar A \cap \bar B)$ | $P(\bar A)$ |
| total | $P(B)$ | $P(\bar B)$ | 1 |

> [!tip] De Morgan
> $\overline{A \cup B} = \bar A \cap \bar B$ ("neither") and $\overline{A \cap B} = \bar A \cup \bar B$ ("not both"). "Neither" is the bottom-right cell of the 2×2 table: $1 - P(A \cup B)$.

---

## 2. Lec 02 and 03 — Conditional probability, trees, total probability, Bayes

**Conditional probability.** Knowing $B$ happened shrinks the sample space to $B$:

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \qquad P(B) > 0
$$

In a 2×2 table: a cell over its **row or column margin**. A conditional probability is a probability, so the complement rule works inside it: $P(\bar A \mid B) = 1 - P(A \mid B)$. But $P(A \mid \bar B) \ne 1 - P(A \mid B)$ in general.

**Multiplication rule.** $P(A \cap B) = P(B \mid A)\,P(A) = P(A \mid B)\,P(B)$.

**Tree diagrams.** First branch: the groups ($B$, $\bar B$) with their probabilities. Second branch: conditional probabilities of the outcome. **Multiply along a path, add across paths.**

**Law of total probability.** If $B_1, \dots, B_k$ split $\Omega$ into disjoint pieces:

$$
P(A) = P(A \mid B)P(B) + P(A \mid \bar B)P(\bar B) = \sum_i P(A \mid B_i)\,P(B_i)
$$

**Bayes' theorem.** Flips the conditional:

$$
P(B \mid A) = \frac{P(A \mid B)\,P(B)}{P(A)} = \frac{P(A \mid B)\,P(B)}{P(A \mid B)P(B) + P(A \mid \bar B)P(\bar B)}
$$

> [!example] Bayes with the denominator given, 2023 Moed B Q3
> $A$ = default, $B$ = high risk. $P(A \mid B) = 0.5$, $P(B \mid A) = 0.8$, $P(B) = 0.1$. Bayes: $0.5 = \frac{0.8\,P(A)}{0.1}$, so $P(A) = 0.05/0.8 = 0.0625$. The wrong options ($0.125$, $0.03125$) come from reading a conditional backwards.

> [!example] Total probability with an unknown, 2023 Moed B Q4
> 40% of painters are abstract. Of those who sell well, 30% are abstract; of those who don't, 50%. Let $X = P(\text{sell well})$: $0.3X + 0.5(1 - X) = 0.4$, so $X = 0.5$.

> [!example] Same numerator, compare the denominators, 2023 Moed B Q2
> $P(A) = 0.7$, $P(B) = 0.5$. $P(A \mid B) = \frac{P(A \cap B)}{0.5}$ and $P(B \mid A) = \frac{P(A \cap B)}{0.7}$, so $P(A \mid B) = 1.4\,P(B \mid A)$. Strictly bigger because $0.7 + 0.5 > 1$ forces $P(A \cap B) \ge 0.2 > 0$.

> [!warning] Base rate
> A test that is 98% accurate can still give mostly false positives if the condition is rare. Always weight by $P(B)$ (the base rate) before comparing.

---

## 3. Lec 03 — Independence, and the symmetrical space

$A$ and $B$ are **independent** if knowing one does not change the other:

$$
P(A \mid B) = P(A) \iff P(A \cap B) = P(A)\,P(B)
$$

- Independence is mutual, and carries over to complements: $A$, $\bar B$ independent; $\bar A$, $\bar B$ independent.
- Independent events with positive probability are **never disjoint** (disjoint gives $P(A \cap B) = 0 \ne P(A)P(B)$).
- With independence, "at least one" is easiest through the complement: $P(A \cup B) = 1 - P(\bar A)P(\bar B)$.

> [!example] Disjoint and independent? 2023 Moed B Q5
> $P(A) = 0.2$, $P(B) = 0.5$, $P(A \cup B) = 0.6$. Union rule: $P(A \cap B) = 0.2 + 0.5 - 0.6 = 0.1$. Not 0, so **not disjoint**. $0.2 \times 0.5 = 0.1$, so **independent**.

**Symmetrical probability space** (every outcome equally likely: fair die, shuffled deck, random person):

$$
P(A) = \frac{\lvert A \rvert}{\lvert \Omega \rvert}, \qquad P(A \mid B) = \frac{\lvert A \cap B \rvert}{\lvert B \rvert}
$$

> [!tip] Monty Hall
> Switching wins with probability $\tfrac23$: your first pick is right only $\tfrac13$ of the time, and the host's door gives you the other $\tfrac23$.

---

## 4. Lec 04 — Combinatorics

Two questions pick the formula: **does order matter?** and **is there replacement?** $n$ = options at the first stage, $k$ = stages (draws).

|  | Order matters | Order does not matter |
|---|---|---|
| **With replacement** | $n^k$ | $\binom{n+k-1}{k}$ (not examined, not symmetrical) |
| **Without replacement** | $(n)_k = \dfrac{n!}{(n-k)!}$ | $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ |

- **Multiplication principle:** stages multiply, $n_1 \cdot n_2 \cdots n_m$. Every formula above is this principle.
- **Addition rule:** mutually exclusive ways add.
- $0! = 1$, $\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{1} = n$, $\binom{n}{k} = \binom{n}{n-k}$.
- "At least one" is usually all minus none: $10^4 - 9^4$ four-digit codes contain a 1.
- Signals: race places, passwords, shelf order ⇒ order matters. Hand, committee, group ⇒ order doesn't. Digits, coin flips ⇒ replacement. Cards, people ⇒ no replacement.

> [!example] A finishing order, 2023 Moed B Q6
> 5 runners. $\lvert \Omega \rvert = 5! = 120$. Shirts 2 and 3 fixed in places 1 and 2, the other three arranged: $3! = 6$. $P = 6/120 = 1/20$.

> [!example] Choosing a specific group
> Committee of 3 from 50: $\binom{50}{3} = 19{,}600$. With Sharon on it: fix her, choose 2 of the other 49: $\binom{49}{2} = 1176$, $P = 0.06$.

> [!example] Poker flush, practice exam Q6
> Pick the suit (4), then 5 of its 13 cards: $P = \dfrac{4\binom{13}{5}}{\binom{52}{5}} \approx 0.00198$.

---

## 5. Lec 05 and 06 — Discrete random variables, $E$, $Var$, linear transformations

A **random variable** $X$ assigns a number to each outcome. Its **distribution** lists every value and its probability (the **PMF** $P(X = x_i)$, which sums to 1). The **CDF** is the running total $F(x) = P(X \le x)$; it never decreases and ends at 1. $P(X = x_i)$ is the **jump** of the CDF at $x_i$ (a CDF value that repeats means probability 0 there).

$$
E(X) = \sum_i x_i\, P(X = x_i), \qquad Var(X) = E\big[(X - E(X))^2\big] = E(X^2) - E(X)^2, \qquad SD(X) = \sqrt{Var(X)}
$$

| Rule | Formula |
|---|---|
| Linear transformation | $E(a + bX) = a + bE(X)$, $Var(a + bX) = b^2 Var(X)$, $SD(a + bX) = \lvert b \rvert SD(X)$ |
| Sum (always) | $E(X + Y) = E(X) + E(Y)$ |
| Sum (always) | $Var(X + Y) = Var(X) + Var(Y) + 2\,Cov(X, Y)$ |
| Difference (always) | $Var(X - Y) = Var(X) + Var(Y) - 2\,Cov(X, Y)$ |
| Sum, independent | $Var(X \pm Y) = Var(X) + Var(Y)$ (variances **add** even for a difference) |
| Constant | $E(c) = c$, $Var(c) = 0$ |

> [!example] A bet as a linear transformation, 2023 Moed B Q8
> Pay 20, get twice the roulette number ($E = 18$, $Var = 16$). Earnings $Y = 2X - 20$: $E(Y) = 36 - 20 = 16$, $Var(Y) = 4 \cdot 16 = 64$. The $-20$ moves the mean, never the variance.

> [!example] Unknown value from the mean, 2024 Moed B Q7
> Values 1, 2, $a$ with probabilities 0.25, 0.3, 0.45 and $E(X) = 4$: $0.25 + 0.6 + 0.45a = 4$, so $a = 7$.

> [!tip] Adding observations
> Adding values **equal to the mean** keeps the mean and **lowers** the variance (2023 Moed A Q7). Adding two values further from the mean than one SD **raises** it (2024 Moed A Q8).

---

## 6. Lec 06 and 07 — The known discrete distributions

| Distribution | When | Values | $P(X = k)$ | $E(X)$ | $Var(X)$ |
|---|---|---|---|---|---|
| Uniform $U(a,b)$ | equally likely integers $a..b$ (a fair die) | $a, \dots, b$ | $\frac{1}{b-a+1}$ | $\frac{a+b}{2}$ | $\frac{(b-a+1)^2 - 1}{12}$ |
| Bernoulli$(p)$ | one try, success = 1 | 0, 1 | $P(1) = p$ | $p$ | $p(1-p)$ |
| Binomial $B(n,p)$ | successes in $n$ independent tries | $0..n$ | $\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| Geometric $G(p)$ | tries until the **first** success, counting it | $1, 2, \dots$ | $(1-p)^{k-1}p$ | $\frac1p$ | $\frac{1-p}{p^2}$ |
| Hypergeometric $HG(N,D,n)$ | successes in $n$ drawn **without** replacement from $N$ with $D$ successes | | $\frac{\binom{D}{k}\binom{N-D}{n-k}}{\binom{N}{n}}$ | $n\frac{D}{N}$ | $\frac{N-n}{N-1}\,n\frac DN\left(1 - \frac DN\right)$ |
| Poisson $P(\lambda)$ | count of independent events in a fixed interval | $0, 1, 2, \dots$ | $e^{-\lambda}\frac{\lambda^k}{k!}$ | $\lambda$ | $\lambda$ |

- **Geometric tail:** $P(X > k) = (1-p)^k$, the first $k$ tries all fail. "At least 3 applications" is $P(X > 2)$.
- **Poisson rescaling:** $\lambda$ is proportional to the interval. 3 taxis an hour ⇒ $\lambda = 0.75$ for 15 minutes. 15 people an hour ⇒ $\lambda = 1.25$ for 5 minutes.
- **Binomial vs hypergeometric:** same question ("how many successes in $n$"), but with replacement / infinite population vs **without replacement from a finite group**. The hypergeometric variance is smaller by the factor $\frac{N-n}{N-1}$.
- **Binomial vs geometric:** binomial fixes the tries and counts successes; geometric counts tries until one success.
- **"At least one"** is almost always $1 - P(X = 0)$.

> [!example] Poisson, 2023 Moed B Q9
> 3 taxis an hour, 15 minutes: $\lambda = 0.75$. $P(X \ge 1) = 1 - e^{-0.75} = 0.5276$.

> [!example] Hypergeometric, 2024 Moed B Q11
> 50 cars, 10 damaged, inspect 10: $P(X = 3) = \dfrac{\binom{10}{3}\binom{40}{7}}{\binom{50}{10}} \approx 0.22$.

> [!example] Uniform die variance, 2023 Moed B Q10
> 20-sided die: $Var = \frac{20^2 - 1}{12} = \frac{399}{12} = 33\tfrac14$.

> [!example] Two independent prizes, 2023 Moed B Q11
> Win 5 with $p = 0.1$, win 8 with $p = 0.2$. $Var(5X + 8Y) = 25(0.09) + 64(0.16) = 2.25 + 10.24 = 12.49$.

> [!example] Matching two means, practice exam Q11
> A geometric wait $E = 1/p$ equals a binomial count $E = 100p$: $1/p = 100p$, $p = 0.1$.

---

## 7. Lec 08 — Joint, marginal and conditional distributions

The **joint table** gives $P(X = x_i, Y = y_j)$ for every pair; all cells sum to 1.

| Idea | How |
|---|---|
| Marginal of $X$ | **row sums**: $P(X = x_i) = \sum_j P(X = x_i, Y = y_j)$ |
| Marginal of $Y$ | **column sums** |
| Conditional of $X$ given $Y = y_j$ | divide that **column** by its total: $P(X = x_i \mid Y = y_j) = \frac{P(X = x_i, Y = y_j)}{P(Y = y_j)}$ |
| Conditional expected value | $E(X \mid Y = y_j) = \sum_i x_i\, P(X = x_i \mid Y = y_j)$ |
| Independence | $P(X = x_i, Y = y_j) = P(X = x_i)P(Y = y_j)$ in **every** cell |
| $E(XY)$ | $\sum_i \sum_j x_i\, y_j\, P(X = x_i, Y = y_j)$ |

- To show **dependence**, one failing cell is enough. To show independence, every cell must pass.
- The marginals can be recovered from the joint table, but **not** the other way round.
- If a table is independent, every conditional distribution of $X$ equals its marginal.

> [!example] Conditional expectation, 2024 Moed B Q13
> Cells $(X=1, Y=1) = 0.3$, $(X=2, Y=1) = 0.1$. $P(Y=1) = 0.4$, so $P(X=1 \mid Y=1) = 0.75$, $P(X=2 \mid Y=1) = 0.25$, and $E(X \mid Y=1) = 0.75 + 0.5 = 1.25$.

---

## 8. Lec 08 and 09 — Covariance and correlation

$$
Cov(X,Y) = E\big[(X - E(X))(Y - E(Y))\big] = E(XY) - E(X)E(Y)
$$

$$
\rho(X,Y) = \frac{Cov(X,Y)}{SD(X)\,SD(Y)}, \qquad -1 \le \rho \le 1
$$

| Rule | Formula |
|---|---|
| With itself | $Cov(X, X) = Var(X)$, $\rho(X, X) = 1$, $\rho(X, -X) = -1$ |
| Linear transformation | $Cov(a + bX,\ c + dY) = bd\,Cov(X,Y)$ |
| Correlation after rescaling | $\rho(a + bX,\ c + dY) = \rho(X,Y)$ if $bd > 0$, $-\rho(X,Y)$ if $bd < 0$ |
| Exact line | $Y = a + bX \Rightarrow \rho = +1$ ($b > 0$) or $-1$ ($b < 0$) |
| Symmetric | $\rho(X,Y) = \rho(Y,X)$ |
| From the variance of a sum | $Cov(X,Y) = \tfrac12\,[Var(X+Y) - Var(X) - Var(Y)]$ |

- **Sign** = direction of the linear relationship. The **size** of a covariance means little (it depends on units); judge strength by $\rho$: about 0.2 weak, 0.5 medium, 0.8 strong.
- **Independent ⇒ $Cov = 0$. The reverse is false**: $Cov = 0$ only rules out a *linear* relationship (an upside-down U has $\rho = 0$).
- Scatter plots: tight line ⇒ $\lvert \rho \rvert$ near 1; wide band ⇒ smaller $\lvert \rho \rvert$; slope gives the sign.
- Correlation is not causation.

> [!example] Covariance from correlation, 2023 Moed B Q14
> $Var(X) = 4$, $Var(Y) = 9$, $\rho = 0.5$: $Cov = 0.5 \times 2 \times 3 = 3$. The means are distractors.

> [!example] Correlation from the variance of a sum, 2024 Moed B Q15
> $Var(X) = 16$, $Var(Y) = 25$, $Var(X+Y) = 51$: $51 = 41 + 2Cov$, $Cov = 5$, $\rho = \frac{5}{4 \cdot 5} = 0.25$.

> [!example] Standardized and independent, 2023 Moed B Q15
> Standardized: $E = 0$, $Var = 1$. Independent: $Cov = 0$. So $Cov(X,Y) = E(X)E(Y) = 0$ is the one that must hold.

---

## 9. Lec 10 — Continuous random variables and the continuous uniform

For a continuous variable $P(X = x) = 0$ for every single $x$: probability lives on **intervals**, as **area under the density** $f(x)$.

| Object | Formula |
|---|---|
| CDF | $F(t) = P(X \le t) = \int_{-\infty}^{t} f(x)\,dx$ |
| Density | $f(x) = F'(x) \ge 0$, total area $\int f(x)\,dx = 1$ (a density **can** exceed 1) |
| Interval | $P(a \le X \le b) = \int_a^b f(x)\,dx = F(b) - F(a)$; endpoints don't matter |
| Expected value | $E(X) = \int x\, f(x)\,dx$ |
| Variance | $Var(X) = E(X^2) - E(X)^2$, $E(X^2) = \int x^2 f(x)\,dx$ |
| Percentile | $C_q$ solves $F(C_q) = q$; median $Md = C_{0.5}$ |

**Continuous uniform** $U(a,b)$: flat density on $[a,b]$.

$$
f(x) = \frac{1}{b-a}, \quad F(x) = \frac{x-a}{b-a}, \quad E(X) = Md = \frac{a+b}{2}, \quad Var(X) = \frac{(b-a)^2}{12}
$$

Percentile shortcut: $C_q = a + q\,(b - a)$.

> [!example] Constant of a density, 2023 Moed B Q16
> $f(x) = x/4.5$ on $[0, a]$: $\int_0^a \frac{x}{4.5}dx = \frac{a^2}{9} = 1$, so $a = 3$.

> [!example] Uniform percentile, 2023 Moed B Q17
> $U(1, 21)$, 35th percentile: $1 + 0.35 \times 20 = 8$.

> [!example] Area under a density, 2024 Moed B Q16
> $f(x) = 3x^2$ on $[0,1]$: $P(X < 0.7) = 0.7^3 = 0.343$.

> [!warning] Discrete vs continuous uniform
> Discrete $U(a,b)$: $Var = \frac{(b-a+1)^2 - 1}{12}$. Continuous $U(a,b)$: $Var = \frac{(b-a)^2}{12}$. "Non-integers allowed" or "a random number between" means continuous.

**Which graph can be a CDF?** It starts at 0, never decreases, and levels off at 1 (practice exam Q16).

---

## 10. Lec 11 — The normal distribution and the Z table

$X \sim N(\mu, \sigma^2)$: symmetric bell, $E(X) = Md = \mu$, $Var(X) = \sigma^2$. $\mu$ moves the bell, $\sigma$ widens it.

**68-95-99.7:** $P(\mu \pm \sigma) \approx 0.68$, $P(\mu \pm 2\sigma) \approx 0.95$, $P(\mu \pm 3\sigma) \approx 0.997$.

**Linear transformation:** $bX + a \sim N(b\mu + a,\ b^2\sigma^2)$. Still normal.

**Standardize, then read the table.** $\Phi(z) = P(Z \le z)$ is the area to the **left**.

$$
Z = \frac{X - \mu}{\sigma} \sim N(0,1), \qquad P(X < t) = \Phi\!\left(\frac{t - \mu}{\sigma}\right)
$$

| You want | Use |
|---|---|
| $P(X < t)$ | $\Phi(z)$ |
| $P(X > t)$ | $1 - \Phi(z)$ |
| $P(s < X < t)$ | $\Phi(z_t) - \Phi(z_s)$ |
| negative $z$ | $\Phi(-z) = 1 - \Phi(z)$ |
| a cut-off from a probability | find the area **inside** the table, read $z$, then $t = \mu + z\sigma$ |

> [!example] A normal tail, 2023 Moed B Q18
> $N(20, 5^2)$, more than 26: $z = 6/5 = 1.2$, $\Phi(1.2) = 0.8849$, $P = 0.1151 \approx 11.5\%$.

> [!example] A cut-off, Lec 11
> 2,000 applicants, 80 places, scores $N(527, 88^2)$. Top 4% ⇒ area to the left 0.96 ⇒ $z = 1.75$ ⇒ cut-off $527 + 1.75 \times 88 = 681$.

> [!tip] "Higher than" cut-offs
> "80% score higher than $C$" means 20% are below: $\Phi(z) = 0.2$, $z = -0.84$, so $C$ sits **below** the mean.

---

## 11. Lec 12 — CLT, law of large numbers, normal approximations

For $X_1, \dots, X_n$ i.i.d. with mean $\mu$ and variance $\sigma^2$, for large $n$ (rule of thumb $n \ge 30$):

| Quantity | Mean | Variance | SD | Approximately |
|---|---|---|---|---|
| One observation $X_i$ | $\mu$ | $\sigma^2$ | $\sigma$ | (any shape) |
| Sum $S = \sum X_i$ | $n\mu$ | $n\sigma^2$ | $\sqrt n\,\sigma$ | $N(n\mu,\ n\sigma^2)$ |
| Average $\bar X = S/n$ | $\mu$ | $\sigma^2/n$ | $\sigma/\sqrt n$ | $N(\mu,\ \sigma^2/n)$ |
| Binomial count $X$ | $np$ | $np(1-p)$ | $\sqrt{np(1-p)}$ | $N(np,\ np(1-p))$ |
| Proportion $\hat P = X/n$ | $p$ | $p(1-p)/n$ | $\sqrt{p(1-p)/n}$ | $N\!\left(p,\ \frac{p(1-p)}{n}\right)$ |

- Binomial and proportion approximations need $np \ge 5$ **and** $n(1-p) \ge 5$. The course uses **no continuity correction**.
- **Law of large numbers:** $\bar X \to \mu$ as $n \to \infty$, because $\sigma^2/n \to 0$.
- A count and a proportion give the same answer: "at most 74 of 100" is "at most 74%".

> [!example] CLT for a sum, the elevator (Lec 12)
> 30 people, each $\mu = 80$, $\sigma = 20$. $S \sim N(2400,\ 30 \cdot 400)$, $SD = 109.54$. $P(S > 2600)$: $z = 1.83$, $1 - 0.9664 = 0.0336$.

> [!example] CLT for an average, 2023 Moed B Q20
> $\mu = 8900$, $\sigma = 2500$, $n = 100$: $SD(\bar X) = 250$. $P(\bar X > 9000)$: $z = 0.4$, $1 - 0.6554 = 0.3446$. The option 0.6554 is the opposite tail.

> [!example] Proportion, 2024 Moed B Q20
> 85% break, 100 phones, more than 90%: $SD(\hat P) = \sqrt{0.85 \cdot 0.15/100} = 0.0357$, $z = 1.4$, $1 - 0.9192 \approx 0.08$.

> [!tip] Five-step checklist
> 1. Name it: one value, a sum, an average, a count, a proportion. 2. Mean and **variance** (then take the root). 3. Check $n \ge 30$ or $np, n(1-p) \ge 5$. 4. Standardize. 5. "More than" ⇒ $1 - \Phi$.

---

## 12. Lec 13 — Exam technique

- **Name the events first** ($A$ = default, $B$ = high risk), then translate every sentence into a probability statement. "Of those who …" is the condition.
- **Formula, substitute, solve**, one change per line.
- **"Closest value"** options are rounded. If $z > 3.5$, the probability is essentially 0: pick the smallest option.
- Questions on Markov's or Chebyshev's inequality (Q12 in some years) were **outside the material**: skip them and come back.
- "Replacement, order doesn't matter" is **not examined**.
- With 9 minutes each, plug your answer back in.

---

## 13. One-box summary

$$
\begin{aligned}
&P(A \cup B) = P(A) + P(B) - P(A \cap B) \qquad P(A \mid B) = \frac{P(A \cap B)}{P(B)} \\
&P(A) = \sum_i P(A \mid B_i)P(B_i) \qquad P(B \mid A) = \frac{P(A \mid B)P(B)}{P(A)} \qquad \text{indep: } P(A \cap B) = P(A)P(B) \\
&n^k \qquad (n)_k = \frac{n!}{(n-k)!} \qquad \binom{n}{k} = \frac{n!}{k!(n-k)!} \\
&E(a + bX) = a + bE(X) \qquad Var(a + bX) = b^2Var(X) \qquad Var(X) = E(X^2) - E(X)^2 \\
&Var(X + Y) = Var(X) + Var(Y) + 2Cov(X,Y) \qquad Cov = E(XY) - E(X)E(Y) \qquad \rho = \frac{Cov}{SD_X SD_Y} \\
&B(n,p): np,\ np(1-p) \quad G(p): \tfrac1p,\ \tfrac{1-p}{p^2} \quad P(\lambda): \lambda,\ \lambda \quad HG: n\tfrac DN \\
&U(a,b) \text{ cont.}: \tfrac{a+b}{2},\ \tfrac{(b-a)^2}{12} \qquad Z = \frac{X - \mu}{\sigma} \\
&S \sim N(n\mu, n\sigma^2) \qquad \bar X \sim N\!\left(\mu, \tfrac{\sigma^2}{n}\right) \qquad \hat P \sim N\!\left(p, \tfrac{p(1-p)}{n}\right)
\end{aligned}
$$
