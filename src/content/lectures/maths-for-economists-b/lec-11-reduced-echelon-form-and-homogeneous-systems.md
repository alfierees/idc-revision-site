---
title: "Lec 11 - Reduced Echelon Form and Homogeneous Systems"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 11
tags:
  - maths-for-economists-b
  - linear-algebra
  - echelon-form
  - homogeneous-systems
  - systems-of-equations
subject: maths-for-economists-b
in_scope: true
---

# Lec 11: Reduced Echelon Form and Homogeneous Systems

> Part of: [[Maths for Economists B]]
> Key concepts: [[Reduced Echelon Form]], [[Leading Entry]], [[Augmented Matrix]], [[Dependent Variable]], [[Independent Variable]], [[Homogeneous System]], [[Zero Solution]]

> [!note] About this note
> The source is a 2-page skeleton (Lesson 11 framework) with the class working left blank. It revisits the end of the previous lesson (see [[Lec_10-Linear Systems and Gauss-Jordan Elimination]] for the elimination method itself) and then states the homogeneous system. All worked solutions are written for this note and marked *Reconstructed from the slides*.

## 1. From a system to a matrix

A system is stored as an [[Augmented Matrix]]: coefficients to the left of the bar, constants to the right, one row per equation, one column per variable.

> [!example] Slide example
> $$
> \begin{cases} x + z = 3 \\ y - 3z = -3 \\ 3z = 1 \end{cases}
> \;\longrightarrow\;
> \left(\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & -3 & -3 \\ 0 & 0 & 3 & 1 \end{array}\right)
> $$

## 2. How do we know Gauss-Jordan has finished?

We stop when the matrix is in **[[Reduced Echelon Form]]**:

1. If a row is not entirely zeros, its first non-zero entry (the [[Leading Entry]]) is $1$, and all other entries in the column containing that $1$ are $0$.
2. The leading entry of each row is **to the right** of the leading entry of the row above.
3. Rows of all zeros are at the **bottom**.

| Rule | What it forbids | Typical fix |
| --- | --- | --- |
| 1 | A leading entry that is not $1$, or other non-zero numbers in its column | Divide the row; subtract multiples of it from other rows |
| 2 | Leading entries out of staircase order | Swap rows |
| 3 | A zero row above a non-zero row | Swap rows |

> [!note] Reconstructed from the slides
> Apply to the matrix above. Rule 1 fails (leading entry $3$ in row 3, and non-zero entries above it in column 3). $R_3 \to \tfrac13 R_3$ makes it $1$; $R_1 \to R_1 - R_3$ and $R_2 \to R_2 + 3R_3$ clear column 3:
>
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & 0 & \tfrac83 \\ 0 & 1 & 0 & -2 \\ 0 & 0 & 1 & \tfrac13 \end{array}\right)
> $$
>
> Solution $(x,y,z) = \left(\tfrac83, -2, \tfrac13\right)$.

## 3. Reading the solution off a reduced matrix

> [!info] Dependent vs independent variables
> Every column with a leading entry represents a [[Dependent Variable]]. Every column **without** a leading entry represents an [[Independent Variable]]: it is free and can take any value, and the dependent variables are expressed in terms of it.

> [!example] Slide task
> For each matrix below: (a) determine if it is reduced; (b) if not, what elementary operations reduce it; (c) if it is reduced, what solution does it represent?

> [!note] Reconstructed from the slides
> **Matrix 1** (variables $x_1,\dots,x_4$):
>
> $$
> \left(\begin{array}{cccc|c} 1 & 2 & 0 & 0 & 6 \\ 0 & 0 & 1 & 0 & 2 \\ 0 & 0 & 0 & 1 & 5 \end{array}\right)
> $$
>
> (a) Reduced. (c) Leading columns 1, 3, 4; column 2 is free, $x_2 = t$. Solution: $x_1 = 6 - 2t$, $x_3 = 2$, $x_4 = 5$.
>
> **Matrix 2** (variables $x,y,z$):
>
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 4 \\ 0 & 1 & 0 & 7 \end{array}\right)
> $$
>
> (a) Not reduced: the leading entry of row 3 is left of the one in row 2 (rule 2). (b) Swap rows 2 and 3. (c) Then $x = 2$, $y = 7$, $z = 4$.
>
> **Matrix 3** (variables $x_1,\dots,x_5$):
>
> $$
> \left(\begin{array}{ccccc|c} 1 & 0 & 0 & 2 & 3 & -4 \\ 0 & 1 & 0 & 0 & 4 & 2 \\ 0 & 0 & 1 & 0 & 5 & 6 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right)
> $$
>
> (a) Reduced. (c) Free: $x_4 = s$, $x_5 = t$. Solution: $x_1 = -4 - 2s - 3t$, $x_2 = 2 - 4t$, $x_3 = 6 - 5t$.
>
> **Matrix 4** (variables $x,y,z$):
>
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 0 & 6 \end{array}\right)
> $$
>
> (a) Reduced in form, but row 3 says $0 = 6$. (c) **No solution.**

> [!warning] Reduced does not mean solvable
> Matrix 4 meets all three rules, yet the system has no solution. Always read the rows: $(0\ \dots\ 0 \mid c)$ with $c \ne 0$ is a contradiction.

| Matrix | Reduced? | Free variables | Outcome |
| --- | --- | --- | --- |
| 1 | Yes | 1 ($x_2$) | Infinitely many |
| 2 | No (swap R2, R3) | 0 | Unique: $(2,7,4)$ |
| 3 | Yes | 2 ($x_4, x_5$) | Infinitely many |
| 4 | Yes | 0 | None |

## 4. Homogeneous systems

> [!info] Definition
> A [[Homogeneous System]] is one in which **all constant terms are zero**. It has at least one solution, the **[[Zero Solution]]**, obtained by assigning the value $0$ to each variable. (Setting everything to zero always satisfies $\text{(coefficients)} \cdot 0 = 0$.) So a homogeneous system can never have *no* solution: it has either only the zero solution, or infinitely many.

> [!example] Slide example
> $$
> \begin{cases} x + y - z = 0 \\ 4x - 2y + 7z = 0 \end{cases}
> $$

> [!note] Reconstructed from the slides
> Matrix and reduction:
>
> $$
> \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \\ 4 & -2 & 7 & 0 \end{array}\right)
> \xrightarrow{R_2 \to R_2 - 4R_1}
> \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \\ 0 & -6 & 11 & 0 \end{array}\right)
> \xrightarrow{R_2 \to -\frac16 R_2}
> \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \\ 0 & 1 & -\tfrac{11}{6} & 0 \end{array}\right)
> $$
>
> Then $R_1 \to R_1 - R_2$:
>
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & \tfrac56 & 0 \\ 0 & 1 & -\tfrac{11}{6} & 0 \end{array}\right)
> $$
>
> Column 3 has no leading entry, so $z$ is free. With $z = 6t$:
>
> $$
> (x,y,z) = (-5t,\; 11t,\; 6t), \quad t \in \mathbb{R}.
> $$
>
> Check with $t=1$: $-5 + 11 - 6 = 0$ and $-20 - 22 + 42 = 0$. The zero solution is $t = 0$.

> [!tip] Why infinitely many here
> Two equations, three unknowns: at most two leading entries, so at least one free variable. A homogeneous system with **more unknowns than equations** always has infinitely many solutions.

## Summary

- A matrix is in [[Reduced Echelon Form]] when leading entries are $1$ and alone in their column, step to the right going down, and zero rows sit at the bottom.
- Leading-entry columns are dependent variables; the rest are free parameters.
- A reduced matrix can still be contradictory (a row $0 = c$, $c\neq 0$).
- A [[Homogeneous System]] always has the [[Zero Solution]]; if free variables exist it has infinitely many solutions.

## Related notes

- [[Maths for Economists B]]
- [[Lec_10-Linear Systems and Gauss-Jordan Elimination]]
- [[Lec_12-Systems with Parameters]]
