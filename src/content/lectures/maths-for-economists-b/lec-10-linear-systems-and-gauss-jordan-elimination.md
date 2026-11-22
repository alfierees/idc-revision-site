---
title: "Lec 10 - Linear Systems and Gauss-Jordan Elimination"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 10
tags:
  - maths-for-economists-b
  - linear-algebra
  - gauss-jordan
  - systems-of-equations
  - echelon-form
subject: maths-for-economists-b
in_scope: true
---

# Lec 10: Linear Systems and Gauss-Jordan Elimination

> Part of: [[Maths for Economists B]]
> Key concepts: [[System of Linear Equations]], [[Elementary Row Operations]], [[Gauss-Jordan Elimination]], [[Augmented Matrix]], [[Reduced Echelon Form]], [[Leading Entry]], [[Dependent Variable]], [[Independent Variable]]

> [!note] About this note
> The source is a 2-page skeleton (Lesson 10 framework): definitions, rules and unsolved examples, with the class working left blank. All worked solutions below are written for this note and marked *Reconstructed from the slides*. The slides' second page repeats material that also opens Lesson 11 (reduced-form questions and homogeneous systems); the full treatment of those is in [[Lec_11-Reduced Echelon Form and Homogeneous Systems]].

## 1. Three possible outcomes for a linear system

A [[System of Linear Equations]] can have **exactly one solution**, **no solution** or **infinitely many solutions**. The slides show this with three 2-variable systems.

> [!example] Slide examples
> 1. $x - y = 7$ and $x + y = 5$
> 2. $2x - 2y = 13$ and $x - y = 7$
> 3. $2x - 2y = 14$ and $x - y = 7$

> [!note] Reconstructed from the slides
> **1. Unique solution.** Add the equations: $2x = 12$, so $x = 6$, and $y = 5 - 6 = -1$. Check: $6-(-1) = 7$ and $6+(-1) = 5$. The two lines cross at one point $(6,-1)$.
>
> **2. No solution.** Multiply the second equation by 2: $2x - 2y = 14$. This contradicts the first equation $2x - 2y = 13$. The lines are parallel and never meet.
>
> **3. Infinitely many solutions.** Multiply the second equation by 2 and you get the first equation exactly. Only one independent equation remains: $x = 7 + y$ with $y$ free. Every point on the line is a solution.

| Case | Geometry (2 variables) | Sign during elimination |
| --- | --- | --- |
| Unique solution | Two lines cross at one point | Every variable gets a pivot |
| No solution | Parallel lines | A row like $0 = 6$ |
| Infinitely many | Same line twice | A variable with no pivot, no contradiction |

The three slide examples as lines:

```graph
type: mathsb-linear-systems
```

## 2. Elementary operations

These three operations change the *form* of a system without changing its solutions:

1. **Add equations** (add a multiple of one equation to another).
2. **Multiply** one equation by a **non-zero** constant.
3. **Interchange** two equations.

> [!warning] Non-zero only
> Multiplying by $0$ destroys an equation, and can add false solutions. Rule 2 explicitly requires a non-zero constant.

Applied to the [[Augmented Matrix]] (coefficients on the left of a bar, constants on the right), these are the [[Elementary Row Operations]].

## 3. The Gauss-Jordan elimination method

> [!info] Steps (from the slides)
> 1. Turn the $x$ coefficient in the first equation into $1$.
> 2. Cancel $x$ in the other equations.
> 3. Go back to step 1, but with the **next variable** and the **next equation**.

> [!example] Slide example
> $$
> \begin{cases}
> 2x + 8y + 6z = 20 \\
> 4x + 2y - 2z = -2 \\
> 3x - y + z = 11
> \end{cases}
> $$

> [!note] Reconstructed from the slides
> Augmented matrix, with $R_1,R_2,R_3$ the rows:
>
> $$
> \left(\begin{array}{ccc|c} 2 & 8 & 6 & 20 \\ 4 & 2 & -2 & -2 \\ 3 & -1 & 1 & 11 \end{array}\right)
> $$
>
> **Variable $x$.** $R_1 \to \tfrac12 R_1$ gives $(1,\,4,\,3 \mid 10)$. Then $R_2 \to R_2 - 4R_1$ and $R_3 \to R_3 - 3R_1$:
>
> $$
> \left(\begin{array}{ccc|c} 1 & 4 & 3 & 10 \\ 0 & -14 & -14 & -42 \\ 0 & -13 & -8 & -19 \end{array}\right)
> $$
>
> **Variable $y$.** $R_2 \to -\tfrac{1}{14} R_2$ gives $(0,1,1 \mid 3)$. Then $R_1 \to R_1 - 4R_2$ and $R_3 \to R_3 + 13R_2$:
>
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & -1 & -2 \\ 0 & 1 & 1 & 3 \\ 0 & 0 & 5 & 20 \end{array}\right)
> $$
>
> **Variable $z$.** $R_3 \to \tfrac15 R_3$ gives $(0,0,1 \mid 4)$. Then $R_1 \to R_1 + R_3$ and $R_2 \to R_2 - R_3$:
>
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & 4 \end{array}\right)
> $$
>
> So $\boxed{(x,y,z) = (2,\,-1,\,4)}$. Check in the original equations: $4-8+24 = 20$, $8-2-8=-2$, $6+1+4=11$.

The slide example, one row operation at a time:

```graph
type: mathsb-row-reduction
```

## 4. How do we know when to stop?

The method ends when the matrix is in **[[Reduced Echelon Form]]**. This holds when:

1. In every row that is not all zeros, the first non-zero entry (the [[Leading Entry]]) equals $1$, and **all other entries in that column are zero**.
2. The leading entry of each row is **to the right** of the leading entry of the row above it.
3. Rows that are entirely zeros are at the **bottom**.

> [!example] Slide example: is this finished?
> The slide shows the system $x + z = 3$, $y - 3z = -3$, $3z = 1$, written as
>
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & -3 & -3 \\ 0 & 0 & 3 & 1 \end{array}\right)
> $$

> [!note] Reconstructed from the slides
> Not yet reduced: the leading entry of row 3 is $3$ (not $1$), and column 3 has non-zero entries above it. Continue: $R_3 \to \tfrac13 R_3$ gives $z = \tfrac13$; $R_1 \to R_1 - R_3$ gives $x = 3 - \tfrac13 = \tfrac83$; $R_2 \to R_2 + 3R_3$ gives $y = -3 + 1 = -2$.
>
> Solution: $(x,y,z) = \left(\tfrac83,\,-2,\,\tfrac13\right)$.

## 5. Reading a reduced matrix

> [!info] Dependent and independent variables
> Every column that has a **leading entry** corresponds to a [[Dependent Variable]] (determined by the others). Every column **without** a leading entry corresponds to an [[Independent Variable]] (free: it can take any value).

> [!example] Slide task
> For each matrix: (a) is it reduced? (b) if not, which elementary operations reduce it? (c) if it is reduced, what solution does it represent?

> [!note] Reconstructed from the slides
> **Matrix A**, variables $x_1,\dots,x_4$:
>
> $$
> \left(\begin{array}{cccc|c} 1 & 2 & 0 & 0 & 6 \\ 0 & 0 & 1 & 0 & 2 \\ 0 & 0 & 0 & 1 & 5 \end{array}\right)
> $$
>
> Reduced: leading entries in columns 1, 3, 4, each the only non-zero entry in its column, moving rightwards. Column 2 has no leading entry, so $x_2 = t$ is free: $x_1 = 6 - 2t$, $x_3 = 2$, $x_4 = 5$. Infinitely many solutions.
>
> **Matrix B**, variables $x,y,z$:
>
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 4 \\ 0 & 1 & 0 & 7 \end{array}\right)
> $$
>
> Not reduced: the leading entry of row 3 (column 2) is left of that of row 2 (column 3). **Swap rows 2 and 3.** Now it is the identity part with constants $2, 7, 4$: $x = 2$, $y = 7$, $z = 4$.
>
> **Matrix C**, variables $x_1,\dots,x_5$:
>
> $$
> \left(\begin{array}{ccccc|c} 1 & 0 & 0 & 2 & 3 & -4 \\ 0 & 1 & 0 & 0 & 4 & 2 \\ 0 & 0 & 1 & 0 & 5 & 6 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right)
> $$
>
> Reduced (zero row at the bottom). Columns 1, 2, 3 have leading entries; columns 4 and 5 are free: $x_4 = s$, $x_5 = t$. Then $x_1 = -4 - 2s - 3t$, $x_2 = 2 - 4t$, $x_3 = 6 - 5t$. Infinitely many solutions (two free parameters).
>
> **Matrix D**, variables $x,y,z$:
>
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 0 & 6 \end{array}\right)
> $$
>
> Reduced in form, but the last row reads $0 = 6$, a contradiction. **No solution.**

> [!tip] Reading the verdict off a reduced matrix
> - A row $(0\ \dots\ 0 \mid c)$ with $c \neq 0$ means **no solution**.
> - Otherwise, if every variable column has a leading entry: **unique solution**.
> - Otherwise (some free column and no contradiction): **infinitely many solutions**.

## 6. Homogeneous systems

> [!info] Definition
> A [[Homogeneous System]] is a system where **all constant terms are zero**. It always has at least one solution, the **[[Zero Solution]]**, obtained by setting every variable to $0$.

> [!example] Slide example
> $$
> \begin{cases} x + y - z = 0 \\ 4x - 2y + 7z = 0 \end{cases}
> $$

> [!note] Reconstructed from the slides
> $$
> \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \\ 4 & -2 & 7 & 0 \end{array}\right)
> \xrightarrow{R_2 - 4R_1}
> \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \\ 0 & -6 & 11 & 0 \end{array}\right)
> $$
>
> $R_2 \to -\tfrac16 R_2$ gives $(0,\,1,\,-\tfrac{11}{6} \mid 0)$. Then $R_1 \to R_1 - R_2$ gives $(1,\,0,\,\tfrac56 \mid 0)$. So $z$ is free, and
>
> $$
> x = -\tfrac56 z, \qquad y = \tfrac{11}{6} z .
> $$
>
> Setting $z = 6t$: $(x,y,z) = (-5t,\, 11t,\, 6t)$. The zero solution is $t=0$. With fewer equations than unknowns, there must be a free variable, so there are infinitely many solutions.

## Summary

- A linear system has **no**, **one** or **infinitely many** solutions.
- The three allowed operations: add equations, multiply by a non-zero constant, swap equations.
- [[Gauss-Jordan Elimination]]: clear one variable at a time (pivot to $1$, cancel it elsewhere) until the matrix is in [[Reduced Echelon Form]].
- Leading-entry columns give dependent variables; the other columns give independent (free) variables.
- Homogeneous systems always have the zero solution.
- Slide results: $(6,-1)$; $(2,-1,4)$ for the $3\times3$ example; $\left(\tfrac83,-2,\tfrac13\right)$ for the partly reduced example.

## Related notes

- [[Maths for Economists B]]
- [[Lec_11-Reduced Echelon Form and Homogeneous Systems]]
- [[Lec_12-Systems with Parameters]]
