---
title: "Lec 12 - Systems with Parameters"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 12
tags:
  - maths-for-economists-b
  - linear-algebra
  - parametric-systems
  - gauss-jordan
  - systems-of-equations
subject: maths-for-economists-b
in_scope: true
---

# Lec 12: Systems with Parameters (Equations with Arbitrary Constants)

> Part of: [[Maths for Economists B]]
> Key concepts: [[Parametric System]], [[Gauss-Jordan Elimination]], [[Augmented Matrix]], [[Dependent Variable]], [[Independent Variable]], [[Reduced Echelon Form]]

> [!note] About this note
> The source is a 2-page skeleton (Lesson 12 framework; page 2 is blank graph paper). It has two unsolved examples. All working below is written for this note and marked *Reconstructed from the slides*, because the class working is not in the source.

## 1. The idea

In a [[Parametric System]] some coefficients or constants contain a letter ($a$ or $k$). The question is no longer "what is the solution?" but "**for which values of the parameter** is there no solution / a unique solution / infinitely many?"

> [!info] Strategy
> 1. Reduce the [[Augmented Matrix]] with [[Gauss-Jordan Elimination]], carrying the parameter along.
> 2. **Never divide by an expression that might be zero.** Find the parameter values that make a pivot zero and treat them as separate cases.
> 3. Read off the verdict in each case:
>    - a row $(0\ \dots\ 0 \mid c)$ with $c \ne 0$: **no solution**;
>    - every variable has a leading entry and no contradiction: **unique solution**;
>    - some variable has no leading entry and no contradiction: **infinitely many solutions**.

> [!warning] The classic error
> Dividing a row by $a$ (or $k$) without checking $a = 0$ loses a case. The special values are exactly where the answer changes.

## 2. Example 1: find the values of $a$

> [!example] Slide problem
> Given the augmented matrix
>
> $$
> \left(\begin{array}{ccc|c} a & a+1 & 1 & a \\ a & 2a+1 & a+2 & 2a \\ 2a & 3a+2 & 2a+2 & 4a+1 \end{array}\right)
> $$
>
> find the values of $a$ for which there is (1) no solution, (2) a unique solution, (3) infinitely many solutions.

> [!note] Reconstructed from the slides
> Eliminate below the first column using $R_2 \to R_2 - R_1$ and $R_3 \to R_3 - 2R_1$ (no division, so no case split yet):
>
> $$
> \left(\begin{array}{ccc|c} a & a+1 & 1 & a \\ 0 & a & a+1 & a \\ 0 & a & 2a & 2a+1 \end{array}\right)
> $$
>
> Now $R_3 \to R_3 - R_2$:
>
> $$
> \left(\begin{array}{ccc|c} a & a+1 & 1 & a \\ 0 & a & a+1 & a \\ 0 & 0 & a-1 & a+1 \end{array}\right)
> $$
>
> This triangular form has pivots $a$, $a$ and $a-1$. It fails only when a pivot is zero.
>
> - **$a = 0$.** Row 1 becomes $(0,\,1,\,1 \mid 0)$, row 2 $(0,\,0,\,1 \mid 0)$, row 3 $(0,\,0,\,-1 \mid 1)$. Adding row 2 to row 3 gives $(0,0,0 \mid 1)$, i.e. $0 = 1$. **No solution.**
> - **$a = 1$.** Row 3 is $(0,\,0,\,0 \mid 2)$, i.e. $0 = 2$. **No solution.**
> - **$a \neq 0$ and $a \neq 1$.** All three pivots are non-zero, so each variable gets a leading entry. **Unique solution** (for example $z = \dfrac{a+1}{a-1}$ from the last row, then back-substitute).
>
> | Case | Verdict |
> | --- | --- |
> | $a \in \{0,\,1\}$ | No solution |
> | $a \notin \{0,\,1\}$ | Unique solution |
> | (none) | Infinitely many solutions never occurs |
>
> Check at $a=1$ directly: the matrix is $(1,2,1 \mid 1)$, $(1,3,3 \mid 2)$, $(2,5,4 \mid 5)$; $R_2 - R_1 = (0,1,2 \mid 1)$ and $R_3 - 2R_1 = (0,1,2 \mid 3)$, which contradict each other. Consistent with the result.

Step through Example 1, then move $a$ yourself:

```graph
type: mathsb-parameter-system
```

## 3. Example 2: a system with $k$ and four unknowns

> [!example] Slide problem
> Given the system
>
> $$
> \begin{cases}
> x_1 + 2x_2 + kx_3 + 3x_4 - 4 = 0 \\
> x_2 - kx_3 - x_3 - k = 0 \\
> (k^2 - 5k)\,x_3 = -k^2 + 6k - 5
> \end{cases}
> $$
>
> a. Write it in matrix form.
> b. Using the terms "dependent variable" and "independent variable", explain why there is no value of $k$ for which the system has a unique solution.
> c. Find the values of $k$ for which there are infinitely many solutions, and those for which there is none.
> d. Find the solutions for $k = 5$.
> e. Find the solution for $k = 5$ and $x_1 = x_2 = 0$.

> [!note] Reconstructed from the slides
> **a. Matrix form.** Move constants to the right and collect $x_3$ terms:
>
> $$
> \begin{cases}
> x_1 + 2x_2 + kx_3 + 3x_4 = 4 \\
> x_2 - (k+1)x_3 = k \\
> (k^2-5k)\,x_3 = -k^2+6k-5
> \end{cases}
> $$
>
> $$
> \left(\begin{array}{cccc|c} 1 & 2 & k & 3 & 4 \\ 0 & 1 & -(k+1) & 0 & k \\ 0 & 0 & k^2-5k & 0 & -k^2+6k-5 \end{array}\right)
> $$
>
> It is already in echelon (staircase) form.
>
> **b. Never a unique solution.** There are 4 unknowns but only 3 equations, so at most 3 columns can have a leading entry. Column 4 (for $x_4$) is $(3,0,0)^T$: the only non-zero entry is in row 1, whose leading entry is in column 1. So $x_4$ can never be a [[Dependent Variable]]; it is always an [[Independent Variable]] (free). A free variable means that whenever a solution exists there are infinitely many. So no $k$ gives a unique solution.
>
> **c. Infinitely many vs none.** Factor row 3: $k(k-5)\,x_3 = -(k-1)(k-5)$, since $-k^2+6k-5 = -(k^2 - 6k + 5) = -(k-1)(k-5)$.
>
> - **$k = 5$:** both sides are $0$, so row 3 reads $0 = 0$. No contradiction: **infinitely many solutions**.
> - **$k = 0$:** the left side is $0$ and the right side is $-5$: $0 = -5$. **No solution.**
> - **$k \neq 0$ and $k \neq 5$:** divide by $k(k-5)$ to get $x_3 = -\dfrac{k-1}{k}$, then $x_2$ and $x_1$ follow in terms of $x_4$, which stays free: **infinitely many solutions**.
>
> | $k$ | Verdict |
> | --- | --- |
> | $k = 0$ | No solution |
> | $k \neq 0$ (including $k = 5$) | Infinitely many solutions |
> | any $k$ | Never a unique solution |
>
> **d. $k = 5$.** The system becomes
>
> $$
> \left(\begin{array}{cccc|c} 1 & 2 & 5 & 3 & 4 \\ 0 & 1 & -6 & 0 & 5 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right).
> $$
>
> Clear column 2 with $R_1 \to R_1 - 2R_2$:
>
> $$
> \left(\begin{array}{cccc|c} 1 & 0 & 17 & 3 & -6 \\ 0 & 1 & -6 & 0 & 5 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right).
> $$
>
> Leading columns: 1 and 2. Free: $x_3 = s$, $x_4 = t$. Solution:
>
> $$
> x_1 = -6 - 17s - 3t, \qquad x_2 = 5 + 6s, \qquad x_3 = s, \qquad x_4 = t .
> $$
>
> **e. $k = 5$ and $x_1 = x_2 = 0$.** From $x_2 = 0$: $5 + 6s = 0$, so $s = -\tfrac56$. From $x_1 = 0$: $-6 + \tfrac{85}{6} - 3t = 0$, so $3t = \tfrac{49}{6}$, $t = \tfrac{49}{18}$. Therefore
>
> $$
> x_3 = -\tfrac56, \qquad x_4 = \tfrac{49}{18}.
> $$
>
> Check in the original first equation ($k=5$): $0 + 0 + 5\left(-\tfrac56\right) + 3\cdot\tfrac{49}{18} = -\tfrac{25}{6} + \tfrac{49}{6} = 4$. Correct.

> [!tip] Counting rule
> Number of free variables $=$ (number of unknowns) $-$ (number of leading entries). With $n$ unknowns and fewer than $n$ pivots there are free variables, so a *consistent* system cannot have a unique solution.

## Summary

- For parametric systems, reduce first, then find the parameter values that make a pivot vanish and check each separately.
- Verdict from the reduced rows: contradiction row means none; all variables pivoted means unique; a free variable without contradiction means infinitely many.
- Example 1: no solution for $a = 0$ or $a = 1$, unique for all other $a$.
- Example 2: no solution only for $k = 0$, otherwise infinitely many; never unique because $x_4$ is always free.
- At $k = 5$: $x_1 = -6-17s-3t$, $x_2 = 5+6s$, $x_3 = s$, $x_4 = t$.

## Related notes

- [[Maths for Economists B]]
- [[Lec_10-Linear Systems and Gauss-Jordan Elimination]]
- [[Lec_11-Reduced Echelon Form and Homogeneous Systems]]
