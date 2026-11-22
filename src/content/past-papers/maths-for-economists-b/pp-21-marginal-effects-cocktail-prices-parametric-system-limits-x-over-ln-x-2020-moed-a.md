---
title: "Marginal Effects, Cocktail Prices, Parametric System, Limits & x over ln x (2020 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2020)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - partial-derivatives
  - profit-maximisation
  - linear-systems
  - lagrange-multipliers
  - global-extrema
aliases:
  - Math II Moed A 2020
  - Maths for Economists B 2020 Moed A
  - PP21 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Marginal Effects, Cocktail Prices, Parametric System, Limits & x over ln x (2020 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2020)**, Maths for Economists B, Hever Schulberg. 3 hours, 4 questions worth 20, 25, 30 and 25 points. "Justify anything you claim, and explain all your calculations."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 2 and 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 10). Every part follows that key. Nothing in this note is AI-solved. All final answers were re-checked symbolically and match the key.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (20) | Meaning of partial derivatives in a business setting; profit maximisation with prices as the choice variables | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q2 (25) | A 3x3 system with parameter $k$: unique, infinite, none, then particular values | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]] |
| Q3 (30) | Slope on a level curve, two limits, Lagrange multipliers on a circle | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q4 (25) | Full study of $x/\ln x$: domain, relative extremum, global extrema on two intervals, second derivative | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |

Related practice: [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_07-Applications of Partial Derivatives]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]].

---

## Q1 — Marginal effects and cocktail prices (20 points)

The two segments are unrelated.

### a. $f(x,y) = 4x^2e^{x^2-y} + y^2$: find $f_x'(2,4)$ and $f_y'(2,4)$ and interpret

Here $x$ is minutes of radio advertising and $y$ minutes of television advertising per month, and $f$ is monthly units sold.

**Partial derivative in $x$** (product rule on $4x^2$ and $e^{x^2-y}$, whose derivative in $x$ is $2x\,e^{x^2-y}$):

$$
f_x = 8x\,e^{x^2-y} + 4x^2e^{x^2-y}\cdot2x
$$

At $(2,4)$ the exponent is $x^2 - y = 0$, so $e^0 = 1$:

$$
f_x(2,4) = 16 + 16\cdot4 = 80
$$

**Partial derivative in $y$** (the exponent has derivative $-1$ in $y$):

$$
f_y = 4x^2e^{x^2-y}\cdot(-1) + 2y \quad\Longrightarrow\quad f_y(2,4) = -16 + 8 = -8
$$

> [!success] Answer and meaning
> - $f_x'(2,4) = 80$: at 2 monthly minutes on the radio and 4 on television, **one more monthly minute on the radio raises sales by about 80 units**.
> - $f_y'(2,4) = -8$: at the same level, **one more monthly minute on television lowers sales by about 8 units**.

### b. The bar: maximise monthly profit by choosing the two prices

Sales: $x = 30 - p$ (first cocktail) and $y = 20 + p - q$ (second). Unit costs are \$7 and \$10. The two cocktails are linked: a higher price $p$ on the first pushes customers to the second.

**Step 1: write prices in terms of quantities.**

$$
p = 30 - x, \qquad q = 20 + p - y = 20 + (30-x) - y = 50 - x - y
$$

**Step 2: profit** is revenue minus cost:

$$
P(x,y) = x(30-x) + y(50-x-y) - 7x - 10y
$$

$$
P(x,y) = -x^2 - y^2 - xy + 23x + 40y
$$

**Step 3: first-order conditions.**

$$
P_x = -2x - y + 23 = 0, \qquad P_y = -2y - x + 40 = 0
$$

These say $2x + y = 23$ and $x + 2y = 40$. Double the second to get $2x + 4y = 80$ and subtract the first: $3y = 57$, so $y = 19$ and then $x = 2$.

**Step 4: second-order test.** $P_{xx} = -2$, $P_{xy} = -1$, $P_{yy} = -2$, so $\Delta = 4 - 1 = 3 > 0$ and $P_{xx} < 0$: a **maximum**.

**Step 5: convert back to prices.**

$$
p = 30 - 2 = 28, \qquad q = 50 - 2 - 19 = 29
$$

> [!success] Answer
> Set the first cocktail at **\$28** and the second at **\$29**.

> [!warning] Trap
> The first-order conditions give **quantities** ($x=2$, $y=19$), not prices. The question asks for prices, so convert at the end. A common slip is to write $q = 20 + p - y$ and forget that $p = 30 - x$ is also a function of $x$.

---

## Q2 — The system with parameter $k$ (25 points)

$$
\begin{cases}
x + y + kz = 1\\
kx + y + z = 3\\
2kx + 4y + 4z = 3k + 12
\end{cases}
$$

### a. Unique, infinitely many, or no solutions

Augmented matrix, then $R_2 \to R_2 - kR_1$ and $R_3 \to R_3 - 2kR_1$:

$$
\left(\begin{array}{ccc|c} 1 & 1 & k & 1\\ 0 & 1-k & 1-k^2 & 3-k\\ 0 & 4-2k & 4-2k^2 & k+12 \end{array}\right)
$$

**Assume $k \ne 1$** and divide $R_2$ by $1-k$ (note $1-k^2 = (1-k)(1+k)$):

$$
\left(\begin{array}{ccc|c} 1 & 1 & k & 1\\ 0 & 1 & 1+k & \dfrac{3-k}{1-k}\\ 0 & 4-2k & 4-2k^2 & k+12 \end{array}\right)
$$

Now $R_3 \to R_3 - (4-2k)R_2$. The $z$-coefficient is

$$
4 - 2k^2 - (4-2k)(1+k) = 4 - 2k^2 - 4 - 2k + 2k^2 = -2k
$$

and the right side is $k+12 - (4-2k)\dfrac{3-k}{1-k} = \dfrac{-3k^2-k}{1-k}$:

$$
\left(\begin{array}{ccc|c} 1 & 1 & k & 1\\ 0 & 1 & 1+k & \dfrac{3-k}{1-k}\\ 0 & 0 & -2k & \dfrac{-3k^2-k}{1-k} \end{array}\right)
$$

**Assume $k\neq0$** and divide $R_3$ by $-2k$: $z = \dfrac{3k+1}{2(1-k)}$. Every column has a pivot: a **unique solution**.

**Case $k = 0$:** the matrix is $\left(\begin{array}{ccc|c}1&1&0&1\\0&1&1&3\\0&0&0&0\end{array}\right)$, a zero row and a free variable: **infinitely many solutions**.

**Case $k = 1$:** the first two equations read $x+y+z = 1$ and $x+y+z = 3$. That is a contradiction (the reduced row is $0\;0\;0\mid2$): **no solution**.

> [!success] Answer
> 1. **Unique solution:** $k \ne 0$ and $k \ne 1$.
> 2. **Infinitely many solutions:** $k = 0$.
> 3. **No solution:** $k = 1$.

### b. Solve for $k = -5$

From the reduced form, $z = \dfrac{3k+1}{2(1-k)} = \dfrac{-14}{12} = -\dfrac76$. Back-substitute:

$$
y = \frac{3-k}{1-k} - (1+k)z = \frac86 - (-4)\left(-\frac76\right) = \frac43 - \frac{14}{3} = -\frac{10}{3}
$$

$$
x = 1 - y - kz = 1 + \frac{10}{3} - (-5)\left(-\frac76\right) = \frac{13}{3} - \frac{35}{6} = -\frac32
$$

> [!success] Answer
> $(x,y,z) = \left(-\tfrac32,\ -\tfrac{10}3,\ -\tfrac76\right)$.

> [!info] Check
> $x+y-5z = -1.5 - 3.33 + 5.83 = 1$ and $-5x+y+z = 7.5 - 3.33 - 1.17 = 3$, matching the first two equations.

### c. Solve for $k = 0$

The reduced matrix has rows $x + y = 1$ and $y + z = 3$. Let $z = t$ be free. Then $y = 3 - t$ and $x = 1 - y = t - 2$. (The key does this as $R_1 - R_2$, giving $x - z = -2$ and $y + z = 3$.)

> [!success] Answer
> $(x,y,z) = (t-2,\ 3-t,\ t)$ for any real $t$.

### d. Solve for $k=0$ and $y=6$

From part c, $y = 3 - t = 6$ so $t = -3$.

> [!success] Answer
> $(x,y,z) = (-5,\ 6,\ -3)$.

---

## Q3 — Three independent segments (30 points)

### a. Slope on the curve $z=-2$ of $z = f(x,y) = x\ln\left(\tfrac1y\right) + \tfrac1{x^2} - 1$ at $x=1$

Since $\ln(1/y) = -\ln y$, the curve is

$$
-2 = -x\ln y + \frac1{x^2} - 1
$$

**Find the point.** At $x=1$: $-2 = -\ln y + 1 - 1$, so $\ln y = 2$ and $y = e^2$. The point is $(1, e^2)$.

**Differentiate with respect to $x$** (product rule on $x\ln y$ with $y=y(x)$):

$$
0 = -\ln y - x\cdot\frac{y'}{y} - \frac{2}{x^3}
$$

At $(1,e^2)$:

$$
0 = -2 - \frac{y'}{e^2} - 2 \quad\Longrightarrow\quad \frac{y'}{e^2} = -4
$$

> [!success] Answer
> $y' = -4e^2$.

> [!info] Cross-check (mine)
> With $F = -x\ln y + x^{-2} - 1$: $F_x = -\ln y - 2x^{-3} = -4$ and $F_y = -x/y = -e^{-2}$ at the point, so $y' = -F_x/F_y = -(-4)/(-e^{-2}) = -4e^2$.

### b. $\displaystyle\lim_{x\to0^-}x^2\ln(-x)$

A "$0\cdot(-\infty)$" form. Write it as $\dfrac{\ln(-x)}{x^{-2}}$, which is $\dfrac{-\infty}{\infty}$, and apply L'Hopital:

$$
\lim_{x\to0^-}\frac{\frac{-1}{-x}}{-2x^{-3}} = \lim_{x\to0^-}\frac{\frac1x}{-2x^{-3}} = \lim_{x\to0^-}\left(-\frac{x^2}{2}\right) = 0
$$

> [!success] Answer
> The limit is $0$.

### c. $\displaystyle\lim_{x\to\infty}\left(\frac{x^x}{x} + 3\right)$

Simplify first: $\dfrac{x^x}{x} = x^{x-1}$, which grows without bound as $x\to\infty$.

> [!success] Answer
> The limit is $\infty$.

### d. Extrema of $f(x,y) = y + e\,x$ under $x^2 + y^2 = e^2 + 1$

Lagrangian: $L = y + ex - \lambda\left(x^2+y^2-e^2-1\right)$.

$$
L_x = e - 2\lambda x = 0 \;\Rightarrow\; x = \frac{e}{2\lambda}, \qquad L_y = 1 - 2\lambda y = 0 \;\Rightarrow\; y = \frac{1}{2\lambda}
$$

Substitute into the constraint:

$$
\frac{e^2}{4\lambda^2} + \frac{1}{4\lambda^2} = e^2 + 1 \quad\Longrightarrow\quad \frac{e^2+1}{4\lambda^2} = e^2 + 1 \quad\Longrightarrow\quad \lambda = \pm\frac12
$$

- $\lambda = \tfrac12$ gives $(x,y) = (e,\ 1)$, with $f = 1 + e^2$.
- $\lambda = -\tfrac12$ gives $(x,y) = (-e,\ -1)$, with $f = -1 - e^2$.

> [!success] Answer
> **Maximum** at $(e, 1)$ with value $1 + e^2$. **Minimum** at $(-e, -1)$ with value $-1 - e^2$.

> [!info] Note on the key
> The key's last line writes "$f(e,-1)$" for the minimum, which is a slip for $f(-e,-1)$. The value $-1-e^2$ matches the point $(-e,-1)$.

> [!tip] Intuition
> The constraint is a circle (closed and bounded), so a max and a min must exist. $f = ex + y$ is a linear function whose level lines are perpendicular to the direction $(e,1)$. The extremes sit where the circle is farthest along $+(e,1)$ and $-(e,1)$, exactly the two points found.

---

## Q4 — Study of $f(x) = \dfrac{x}{\ln x}$ (25 points)

### a. Domain

The log needs $x > 0$ and the denominator must not be zero: $\ln x = 0$ at $x = 1$.

> [!success] Answer
> $x > 0$ and $x \neq 1$.

### b. Relative extreme points

Quotient rule:

$$
f'(x) = \frac{\ln x - x\cdot\frac1x}{(\ln x)^2} = \frac{\ln x - 1}{(\ln x)^2}
$$

$f' = 0$ at $\ln x = 1$, so $x = e$. The denominator is positive, so the sign of $f'$ is the sign of $\ln x - 1$: **negative** on $(0,1)$ and on $(1,e)$, **positive** on $(e,\infty)$.

> [!success] Answer
> A single relative **minimum** at $x = e$, with $f(e) = e$. No relative maximum.

### c. Global extrema on $\left(0, \tfrac12\right]$

On this interval $f' < 0$, so $f$ is **decreasing**. The smallest value is at the right-hand end.

> [!success] Answer
> **Global minimum** at $x = \tfrac12$, with $f\left(\tfrac12\right) = \dfrac{1/2}{\ln(1/2)} \approx -0.72$. **No global maximum**: the function rises towards $0$ as $x\to0^+$ but $x=0$ is not in the interval (open end).

### d. Global extrema on $[1.7, \infty)$

This interval contains $e\approx2.718$ and avoids $x=1$. There is exactly one critical point, the minimum at $x = e$, so it is the **global minimum**. For a maximum, check the limit:

$$
\lim_{x\to\infty}\frac{x}{\ln x} = \lim_{x\to\infty}\frac{1}{\frac1x} = \lim_{x\to\infty}x = \infty
$$

> [!success] Answer
> **Global minimum** at $x = e$ (value $e$). **No global maximum** because $f\to\infty$.

![[PP21_q4_x_over_ln_x.png|700]]

*Left: the graph, with the vertical asymptote at $x=1$ and the relative minimum $(e,e)$. Right: zoom on $(0,\tfrac12]$, where $f$ decreases to its smallest value at the right end.*

### e. Is it true that $f''(x) = \dfrac{2-\ln x}{x\ln^3x}$?

Write $f' = \dfrac{1}{\ln x} - \dfrac{1}{\ln^2x}$ and differentiate each piece:

$$
f'' = -\frac{1}{x\ln^2x} + \frac{2}{x\ln^3x} = \frac{-\ln x + 2}{x\ln^3x}
$$

> [!success] Answer
> **True.** $f''(x) = \dfrac{2-\ln x}{x\,\ln^3x}$.

> [!tip] Intuition
> The sign of $f''$ confirms the minimum at $x=e$: there $\ln e = 1$, so $f''(e) = \dfrac{1}{e}>0$ (concave up).

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | $f_x$, $f_y$ at $(2,4)$ | $80$ and $-8$: radio minute adds about 80 units, TV minute loses about 8 |
| Q1b | prices to quantities, optimise, back | $p=\$28$, $q=\$29$ |
| Q2a | row-reduce with parameter | unique: $k\neq0,1$; infinite: $k=0$; none: $k=1$ |
| Q2b | back-substitution | $(-\tfrac32,-\tfrac{10}3,-\tfrac76)$ |
| Q2c | $k=0$, one free variable | $(t-2,\ 3-t,\ t)$ |
| Q2d | $y=6$ so $t=-3$ | $(-5,\ 6,\ -3)$ |
| Q3a | implicit differentiation | $y'=-4e^2$ |
| Q3b | L'Hopital | $0$ |
| Q3c | simplify | $\infty$ |
| Q3d | Lagrange on a circle | max $(e,1)$ value $1+e^2$; min $(-e,-1)$ value $-1-e^2$ |
| Q4a | log and denominator | $x>0$, $x\neq1$ |
| Q4b | $f'$ sign | relative min at $x=e$ |
| Q4c | decreasing on the interval | min at $x=\tfrac12$, no max |
| Q4d | single critical point, limit | min at $x=e$, no max |
| Q4e | differentiate $f'$ | true |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]], [[PS_07-Applications of Partial Derivatives]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
