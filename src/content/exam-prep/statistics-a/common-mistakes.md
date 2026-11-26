---
title: "Common Mistakes"
subject: statistics-a
type: reference
description: "The slips that cost marks in this course, most of them built into the wrong options of past papers. Read before every practice paper."
course: Statistics A
semester: 1
year: 1
order: 5
tags:
  - statistics-a
  - exam-prep
  - common-mistakes
---

> The wrong options in this exam are usually one specific slip away from the right one: the conditional read backwards, the opposite tail, $\sigma$ where $\sigma/\sqrt n$ belongs. If your number matches an option, still run the check in the right-hand column.

## Probability (Q1 to Q5)

| Mistake | Why it's wrong | Check |
|---|---|---|
| Adding $P(A) + P(B)$ for overlapping events | Double counts the overlap, can exceed 1 | Subtract $P(A \cap B)$ unless told disjoint |
| Reading $P(A \mid B)$ as $P(B \mid A)$ | Different denominators | "Of those who **X**, …": X goes on the right of the bar. Bayes traps are the reversed answers (2023 B Q3) |
| $P(A \mid \bar B) = 1 - P(A \mid B)$ | The complement works on the **left** of the bar only | $P(\bar A \mid B) = 1 - P(A \mid B)$ |
| Averaging group rates | Groups have different sizes | Total probability weights each rate by its group |
| "20% of non-lovers are **not** clever" used as 0.2 | The tree needs $P(\text{clever} \mid \cdot)$ | Convert to 0.8 first (2023 A Q4) |
| Thinking disjoint means independent | Disjoint with positive probabilities ⇒ **dependent** | Test $P(A \cap B) = 0$ and $P(A \cap B) = P(A)P(B)$ separately |
| Assuming independence that isn't given | The product rule needs it | Only multiply when the question says independent or you checked it |
| Union bound "at most $P(A) + P(B)$" above 1 | Probabilities cap at 1 | $\min(1, P(A) + P(B))$ |

## Counting (Q6)

| Mistake | Fix |
|---|---|
| Ordered count on top, unordered on the bottom | Use the **same** method for the event and the sample space |
| $\binom{n}{k}$ for race places or passwords | Order matters there: $(n)_k$ or $n^k$ |
| Overcounting "at least one" by fixing one item | All minus none: $10^4 - 9^4$, not $4 \cdot 10^3$ |
| Treating combinations with replacement as equally likely | They aren't (and aren't examined) |

## Random variables (Q7 to Q12)

| Mistake | Fix |
|---|---|
| Using CDF values as probabilities | $P(X = x_i)$ is the **jump** of the CDF |
| $Var(a + bX) = bVar(X)$ or $a + b^2Var(X)$ | $b^2Var(X)$, and the constant disappears |
| Squaring an SD that was already a variance | Read whether the question gives SD or variance (2024 B Q19 gives a variance) |
| Forgetting the entry cost in earnings | Earnings = payout − cost: $E$ moves, $Var$ doesn't |
| $Var(X - Y) = Var(X) - Var(Y)$ | Independent: $Var(X) + Var(Y)$. In general: $+\,Var(Y) - 2Cov$ |
| $Var(aX + bY) = aVar(X) + bVar(Y)$ | Square the coefficients: $a^2$, $b^2$ |
| Geometric $P(X > k) = (1-p)^{k-1}p$ | That is $P(X = k)$. The tail is $(1-p)^k$ |
| "At least 3 tries" as $P(X > 3)$ | At least 3 ⇒ $P(X \ge 3) = P(X > 2)$ |
| Poisson with the per-hour $\lambda$ for a 15-minute window | Rescale: $\lambda \times \tfrac{15}{60}$ |
| Binomial for sampling people without replacement | Finite group, no replacement ⇒ hypergeometric |
| Discrete uniform variance $(b-a)^2/12$ | That is the **continuous** one. Discrete: $\frac{(b-a+1)^2 - 1}{12}$ |
| Spending time on Markov or Chebyshev | Outside the material in this course's years: skip |

## Joint distributions (Q13 to Q15)

| Mistake | Fix |
|---|---|
| Dividing by the wrong margin | Given $Y = y$: divide by $P(Y = y)$, the margin of what you **know** |
| Reporting the cell instead of the conditional | A conditional is cell ÷ margin |
| Checking independence in one cell only and saying "independent" | Every cell must pass; one failure proves dependence |
| $Cov = 0$ ⇒ independent | Only rules out a **linear** relationship |
| Reading a big covariance as a strong relationship | Covariance has units. Judge strength with $\rho$ |
| $\rho(X, -2Y) = -0.6$ when $\rho(X,Y) = 0.3$ | The scale cancels: $\rho = -0.3$ (2023 A Q15) |
| Using $E(X)$, $E(Y)$ in $\rho$ from covariance | Means are distractors: $\rho = Cov/(SD_X SD_Y)$ |

## Continuous and normal (Q16 to Q20)

| Mistake | Fix |
|---|---|
| A density value above 1 "isn't valid" | Heights can exceed 1; only the **area** must be 1 |
| Percentile = $q \times (b - a)$ | Add the start: $a + q(b - a)$ (2023 A Q17 trap 2.8) |
| Median = mean for every density | Only for symmetric ones (triangle densities differ) |
| $N(50, 25)$ read as SD 25 | The second parameter is the **variance**: SD 5 |
| Taking $\Phi(z)$ for "more than" | Right tail is $1 - \Phi(z)$. The opposite-tail number is always an option |
| Negative $z$ looked up as positive | $\Phi(-z) = 1 - \Phi(z)$ |
| Using $\sigma$ for an average | $SD(\bar X) = \sigma/\sqrt n$ |
| Using $\sigma/\sqrt n$ for a **sum** | $SD(S) = \sqrt n\,\sigma$ |
| Dividing the variance by $\sqrt n$ | Variance divides by $n$; SD divides by $\sqrt n$ |
| "80% score higher than $C$" read as $\Phi = 0.8$ | Convert to "20% below": $\Phi(z) = 0.2$, $C$ below the mean |
| Continuity correction | The course doesn't use one: follow the lecture method (2024 B Q20) |
| Hunting for an exact match on "closest value" questions | Options are rounded. $z > 3.5$ ⇒ pick the smallest option (2023 B Q19) |
