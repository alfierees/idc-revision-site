---
title: "Fabric Profit, Parametric System, Log Surface & x e to the minus x (2022 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II for Economics Final Exam, Moed B (2022)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - profit-maximisation
  - second-derivative-test
  - linear-systems
  - parametric-system
  - implicit-differentiation
  - lhopital
  - global-extrema
aliases:
  - Math II 2022 Moed B
  - Maths B Moed B 2022
  - PP27 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Fabric Profit, Parametric System, Log Surface & x e to the minus x (2022 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II for Economics Final Exam, Moed B (2022)**, Maths for Economists B, Hever Schulberg. 3 hours, 4 questions, non-graphic calculator and formula sheet allowed. Marks on this paper: Q1 20, Q2 25, Q3 30, Q4 25.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (6 pages, every part is solved). The key says Q1 also appeared in the 2010 exam and in 2019 A, and Q2 is from 2016 A. No answer in this note is AI-written.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Build profit from revenue minus cost, solve for a parameter from a [[Marginal Profit]] condition, then maximise with the [[Second Derivative Test]] | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]] |
| Q2 | A 3 by 4 [[Parametric System]] with a non-zero constant: homogeneous or not, how many solutions, the solution at $k=-1$, and a condition on $x_3$ | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |
| Q3 | A log surface: [[Implicit Differentiation]] on a level curve, a missing [[Critical Point]], a Laplace equation check, and a limit with [[L'Hopital's Rule]] | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q4 | $xe^{-x}$: intercept, [[Horizontal Asymptote]], relative maximum, and [[Global Extremum]] on an open interval | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_01-Global Extrema, Optimization and Summation]] |

> [!tip] Intuition: the one move behind each question
> - Q1: profit is revenue minus cost, so every cost term flips sign. A "marginal profit is \$10 lower" statement is just $P_y = P_x - 10$.
> - Q2: the constant in the first equation is $4$, so the system can never be homogeneous. After elimination, everything is decided by the last row.
> - Q3: $f=-\tfrac12\ln(x^2+y^2)$ is a function of the distance to the origin, so its only candidate critical point is the origin, which is not in the domain.
> - Q4: on an open interval, a global extremum must be a critical point, since the endpoints are never reached.

---

## Q1 — Fabric production and profit (20 points)

A manufacturer sells two kinds of fabric: $x$ metres of type A at \$20 per metre and $y$ metres of type B at \$25 per metre. Weekly cost is

$$
C(x,y) = 30x + 40y - 4a\sqrt{x} - (2a+50)\sqrt{y} - 20000, \qquad a \text{ a constant.}
$$

**Profit** is revenue minus cost:

$$
P(x,y) = 20x + 25y - C(x,y) = -10x - 15y + 4a\sqrt{x} + (2a+50)\sqrt{y} + 20000 .
$$

### a. Find $a$

**Question.** At 25 metres of each kind, the marginal weekly profit of one more metre of B is \$10 lower than that of one more metre of A. Find $a$.

> [!success] Answer
> $a = 50$.

Differentiate (see [[Partial Derivative]]):

$$
P_x = -10 + \frac{2a}{\sqrt{x}}, \qquad P_y = -15 + \frac{a+25}{\sqrt{y}} .
$$

The condition is $P_y(25,25) = P_x(25,25) - 10$, with $\sqrt{25}=5$:

$$
-15 + \frac{a+25}{5} = -10 + \frac{2a}{5} - 10 .
$$

Multiply by 5: $-75 + a + 25 = -100 + 2a$, so $-50 + a = -100 + 2a$, hence $a = 50$.

### b. Maximal weekly profit with $a=50$

> [!success] Answer
> Produce **100 metres of A and 25 metres of B**; the maximal profit is **\$21,375**.

With $a=50$: $4a=200$ and $2a+50=150$, so

$$
P(x,y) = -10x - 15y + 200\sqrt{x} + 150\sqrt{y} + 20000 .
$$

**Critical point** ([[Critical Point]]):

$$
P_x = -10 + \frac{100}{\sqrt{x}} = 0 \Rightarrow \sqrt{x} = 10,\ x = 100, \qquad P_y = -15 + \frac{75}{\sqrt{y}} = 0 \Rightarrow \sqrt{y} = 5,\ y = 25 .
$$

**Type** ([[Second Derivative Test]]): write $P_x = -10 + 100x^{-1/2}$ and $P_y = -15 + 75y^{-1/2}$. Then

$$
A = P_{xx} = -50\,x^{-3/2} = -\frac{50}{1000} = -0.05, \qquad B = P_{xy} = 0, \qquad C = P_{yy} = -37.5\,y^{-3/2} = -\frac{37.5}{125} = -0.3 .
$$

$$
\Delta = AC - B^2 = (-0.05)(-0.3) - 0 = 0.015 > 0, \qquad A < 0 \;\Rightarrow\; \text{maximum.}
$$

**Value.**

$$
P(100,25) = -1000 - 375 + 200\cdot 10 + 150\cdot 5 + 20000 = -1375 + 2000 + 750 + 20000 = 21{,}375 .
$$

> [!tip] Intuition
> $P_{xx}<0$ and $P_{yy}<0$ everywhere for $x,y>0$ (square roots are concave), so this critical point is the global maximum, not just a local one. This remark is mine.

---

## Q2 — A parametric linear system (25 points)

$$
\begin{cases}
x_1 + 2x_2 + kx_3 + 3x_4 - 4 = 0 \\
2x_1 + kx_2 + 4x_3 + 6x_4 - 3 = 2k \\
x_1 + 3x_2 - x_3 + 3x_4 - 4 = k
\end{cases}
\qquad (k \text{ constant})
$$

Move the constants to the right-hand side first. The system is

$$
\begin{cases}
x_1 + 2x_2 + kx_3 + 3x_4 = 4 \\
2x_1 + kx_2 + 4x_3 + 6x_4 = 2k+3 \\
x_1 + 3x_2 - x_3 + 3x_4 = k+4
\end{cases}
$$

### a. Can the system be homogeneous?

> [!success] Answer
> **No.** The first equation already has the constant $4$ whatever $k$ is.

A [[Homogeneous System]] has all right-hand sides equal to 0. Equation 1 has right-hand side $4$, which does not depend on $k$.

### b. Unique, infinitely many, or no solution

> [!success] Answer
> 1. **Unique solution:** no value of $k$.
> 2. **Infinitely many solutions:** $k \neq 0$.
> 3. **No solution:** $k = 0$.

> [!info] Working written for this site; the final answer is from the official sheet.

[[Augmented Matrix]], then $-2R_1 + R_2 \to R_2$ and $-R_1 + R_3 \to R_3$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{cccc|c}
1 & 2 & k & 3 & 4 \\
2 & k & 4 & 6 & 2k+3 \\
1 & 3 & -1 & 3 & k+4
\end{array}\right)
\longrightarrow
\left(\begin{array}{cccc|c}
1 & 2 & k & 3 & 4 \\
0 & k-4 & 4-2k & 0 & 2k-5 \\
0 & 1 & -k-1 & 0 & k
\end{array}\right)
$$

Swap $R_2 \leftrightarrow R_3$ to get a leading 1 in column 2, then $-(k-4)R_2 + R_3 \to R_3$:

$$
\left(\begin{array}{cccc|c}
1 & 2 & k & 3 & 4 \\
0 & 1 & -k-1 & 0 & k \\
0 & 0 & k^2-5k & 0 & -k^2+6k-5
\end{array}\right)
$$

The bottom-row entries: $4-2k+(k-4)(k+1) = k^2-5k$ and $2k-5-(k-4)k = -k^2+6k-5$. Note $k^2-5k = k(k-5)$ and $-k^2+6k-5 = -(k-1)(k-5)$.

**Case $k \neq 0, 5$.** Divide $R_3$ by $k^2-5k$. Row 3 becomes $x_3 = \dfrac{-k^2+6k-5}{k^2-5k}$. The pivots are in columns 1, 2, 3 and $x_4$ is free: **infinitely many solutions**.

**Case $k = 0$.** The last row is $(0\ 0\ 0\ 0 \mid -5)$, which reads $0=-5$: **no solution**. (The handwritten key shows this row with a constant that looks like $5$; the sign does not matter, it is non-zero.)

**Case $k = 5$.** The last row becomes $(0\ 0\ 0\ 0\mid 0)$, since $-25+30-5=0$. The remaining matrix is

$$
\left(\begin{array}{cccc|c}
1 & 2 & 5 & 3 & 4 \\
0 & 1 & -6 & 0 & 5 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)
$$

Two pivots and two free variables ($x_3$ and $x_4$): **infinitely many solutions**.

Conclusion: infinitely many for $k \neq 0$ (including $k=5$), none for $k=0$, and never a unique solution (there are always at most 3 pivots for 4 unknowns).

> [!tip] Shortcut
> For a system with more unknowns than equations, "unique" is impossible, so only "none" or "infinitely many" is possible. Look at when the last row becomes $0=\text{non-zero}$.

### c. Solve for $k=-1$

> [!success] Answer
> $(x_1,x_2,x_3,x_4) = (4-3t,\; -1,\; -2,\; t)$ for any real $t$.

At $k=-1$ the matrix after elimination is

$$
\left(\begin{array}{cccc|c}
1 & 2 & -1 & 3 & 4 \\
0 & 1 & 0 & 0 & -1 \\
0 & 0 & 1 & 0 & -2
\end{array}\right)
$$

(Check: $x_3 = \dfrac{-1-6-5}{1+5} = -2$ and $R_2$ gives $x_2 = k = -1$.) Clear the entries above the pivots: $-2R_2 + R_1 \to R_1$, then $R_3 + R_1 \to R_1$:

$$
\left(\begin{array}{cccc|c}
1 & 0 & 0 & 3 & 4 \\
0 & 1 & 0 & 0 & -1 \\
0 & 0 & 1 & 0 & -2
\end{array}\right)
$$

Let $x_4 = t$ be the free variable. Then $x_1 + 3t = 4$, so $x_1 = 4-3t$, $x_2=-1$, $x_3=-2$.

> [!example] Check in the original system
> $x_1+2x_2+kx_3+3x_4 = (4-3t) - 2 + 2 + 3t = 4$ ✓. $2x_1+kx_2+4x_3+6x_4 = 8-6t+1-8+6t = 1 = 2k+3$ ✓. $x_1+3x_2-x_3+3x_4 = 4-3t-3+2+3t = 3 = k+4$ ✓.

### d. Can $x_3 = 1$ be a solution value?

> [!success] Answer
> **Yes**, for $k=5$ and for $k=\tfrac12$.

- **$k=5$:** $x_3$ is a free variable, so it can be set to 1.
- **$k \neq 0,5$:** $x_3$ is determined: $x_3 = \dfrac{-k^2+6k-5}{k^2-5k}$. Set this equal to 1:

$$
-k^2 + 6k - 5 = k^2 - 5k \;\Rightarrow\; 2k^2 - 11k + 5 = 0 \;\Rightarrow\; k = \frac{11 \pm 9}{4} \in \{5,\ \tfrac12\} .
$$

The root $k=5$ is excluded from this formula (it divides by zero) but is already covered above. The new value is $k=\tfrac12$.

> [!tip] Simplification
> Cancelling $(k-5)$ gives $x_3 = \dfrac{-(k-1)}{k} = \dfrac{1-k}{k}$ for $k\neq 0,5$. Then $x_3=1$ means $1-k=k$, so $k=\tfrac12$ at once. This simplification is mine.

---

## Q3 — The surface $f(x,y)=\ln\!\dfrac{1}{\sqrt{x^2+y^2}}$ (30 points)

Rewrite the surface first:

$$
f(x,y) = \ln\left(x^2+y^2\right)^{-1/2} = -\frac12\ln\left(x^2+y^2\right).
$$

Its domain is every $(x,y)\neq(0,0)$.

### a. Slope of the level curve $z=-1$ at $x=1$, $y>0$

> [!success] Answer
> $$y'\left(1,\sqrt{e^2-1}\right) = -\frac{1}{\sqrt{e^2-1}}$$

The curve: $-1 = -\tfrac12\ln(x^2+y^2)$, so $\ln(x^2+y^2) = 2$, i.e. $x^2+y^2=e^2$ (a circle of radius $e$).

**The point.** At $x=1$: $1+y^2=e^2$, so $y^2=e^2-1$, and $y>0$ gives $y=\sqrt{e^2-1}$.

**The slope.** Differentiate $\ln(x^2+y^2)=2$ with respect to $x$, treating $y$ as a function of $x$ (see [[Implicit Differentiation]]):

$$
0 = \frac{1}{x^2+y^2}\,(2x + 2y\,y') \;\Rightarrow\; y' = -\frac{x}{y} .
$$

At the point: $y' = -\dfrac{1}{\sqrt{e^2-1}}$.

> [!tip] Intuition
> The level curve is a circle, so the slope of the tangent is $-x/y$, the same as for any circle centred at the origin. Moving right along the circle at $x=1$ the curve falls, hence the negative sign.

### b. Does the function have a critical point?

> [!success] Answer
> **No.**

$$
f_x = -\frac12\cdot\frac{2x}{x^2+y^2} = -\frac{x}{x^2+y^2} = 0 \Rightarrow x=0, \qquad f_y = -\frac{y}{x^2+y^2} = 0 \Rightarrow y=0 .
$$

Both partial derivatives vanish only at $(0,0)$. But $(0,0)$ is not in the domain: $f$ would involve $\ln 0$ and division by zero. So there is no [[Critical Point]].

### c. Show that $f_{xx}+f_{yy}=0$

From $f_x = -\dfrac{x}{x^2+y^2}$, use the quotient rule:

$$
f_{xx} = -\frac{(x^2+y^2) - x\cdot 2x}{(x^2+y^2)^2} = \frac{x^2-y^2}{(x^2+y^2)^2}.
$$

By the same steps from $f_y = -\dfrac{y}{x^2+y^2}$:

$$
f_{yy} = -\frac{(x^2+y^2) - y\cdot 2y}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}.
$$

Add them (see [[Second Partial Derivative]]):

$$
f_{xx}+f_{yy} = \frac{x^2-y^2+y^2-x^2}{(x^2+y^2)^2} = 0 . \qquad\blacksquare
$$

### d. $\displaystyle\lim_{x\to0^+} x\cdot f(x,x)$

> [!success] Answer
> $0$.

Substitute $y=x$: $f(x,x) = -\tfrac12\ln(2x^2)$, so

$$
x\,f(x,x) = -\frac12\,x\ln(2x^2) = -\frac12\cdot\frac{\ln(2x^2)}{x^{-1}} .
$$

As $x\to0^+$ this is $\tfrac{-\infty}{\infty}$, so apply [[L'Hopital's Rule]]. The derivative of the top is $\dfrac{4x}{2x^2}=\dfrac{2}{x}$ and of the bottom is $-x^{-2}$:

$$
\lim_{x\to0^+}\frac{2/x}{-1/x^{2}} = \lim_{x\to0^+}(-2x) = 0 .
$$

So the limit is $-\tfrac12\cdot 0 = 0$.

> [!warning] Handwriting in the key
> The key writes the middle step as "$\frac{4x/2x^2}{-1/x^2}$" and then $\lim -\tfrac12\cdot(-2x)=0$. The final value $0$ is the same as mine; I only wrote the simplification $\frac{4x}{2x^2}=\frac2x$ out.

---

## Q4 — The function $f(x)=xe^{-x}$ (25 points)

### a. Domain

> [!success] Answer
> All real $x$.

### b. Axis intercepts

> [!success] Answer
> $(0,0)$ only.

$xe^{-x}=0$: either $x=0$ or $e^{-x}=0$, and $e^{-x}$ is never 0. So the only intercept is $(0,0)$ (it is both the $x$- and the $y$-intercept).

### c. Horizontal asymptotes

> [!success] Answer
> $y=0$ as $x\to\infty$. **No** horizontal asymptote as $x\to-\infty$.

- **$x\to-\infty$:** $x\to-\infty$ and $e^{-x}\to\infty$, so $xe^{-x}\to-\infty$. No horizontal asymptote on the left.
- **$x\to\infty$:** this is $\infty\cdot 0$. Rewrite as a fraction and use [[L'Hopital's Rule]]:

$$
\lim_{x\to\infty}\frac{x}{e^{x}} = \lim_{x\to\infty}\frac{1}{e^{x}} = 0 .
$$

So $y=0$ is a [[Horizontal Asymptote]] on the right.

### d. Relative extreme points

> [!success] Answer
> A relative **maximum** at $x=1$, with value $f(1)=\dfrac1e$.

$$
f'(x) = e^{-x} + x e^{-x}(-1) = e^{-x}(1-x) .
$$

$e^{-x}>0$, so the sign of $f'$ is the sign of $1-x$: positive for $x<1$ (increasing), negative for $x>1$ (decreasing). The function switches from increasing to decreasing at $x=1$: a relative maximum.

### e. Global extreme points on $(0,\infty)$

> [!success] Answer
> **Global maximum** at $x=1$ (unique). **No global minimum.**

The interval $(0,\infty)$ is open at both ends, so neither end is a candidate: $f$ never reaches the value it approaches as $x\to0^+$ (which is $0$) or as $x\to\infty$ (also $0$). The only interior critical point is $x=1$.

On $(0,\infty)$ the function rises from near 0 up to $f(1)=1/e\approx0.368$ and then falls back towards 0. So $x=1$ is the global maximum. Every value is strictly greater than 0, but 0 is never attained, so there is **no global minimum**.

![[PP27_q4_x_exp_minus_x.png|560]]

*The curve passes through the origin, peaks at $(1,1/e)$ and decays to the asymptote $y=0$. On $(0,\infty)$ it never reaches 0 again, so there is a maximum but no minimum.*

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | marginal profit condition $P_y=P_x-10$ | $a=50$ |
| Q1b | first-order conditions and second derivative test | $(100,25)$, maximum, profit \$21,375 |
| Q2a | constant term in equation 1 | Not homogeneous for any $k$ |
| Q2b | row reduction, last row | Infinitely many for $k\neq0$; none for $k=0$; never unique |
| Q2c | $k=-1$, reduced echelon form | $(4-3t,\,-1,\,-2,\,t)$ |
| Q2d | $x_3$ free at $k=5$; formula for $k\neq0,5$ | $k=5$ or $k=\tfrac12$ |
| Q3a | implicit differentiation of a circle | $y'=-1/\sqrt{e^2-1}$ |
| Q3b | $f_x=f_y=0$ only at the excluded origin | No critical point |
| Q3c | quotient rule twice | $f_{xx}+f_{yy}=0$ |
| Q3d | L'Hopital | $0$ |
| Q4a | no restriction | All $x$ |
| Q4b | $xe^{-x}=0$ | $(0,0)$ |
| Q4c | $\lim x/e^x$ by L'Hopital | $y=0$ on the right only |
| Q4d | sign of $e^{-x}(1-x)$ | Relative max at $x=1$ |
| Q4e | open interval | Global max at $x=1$; no global min |

## Related Notes

- Hub: [[Maths for Economists B]]
- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_01-Global Extrema and Optimisation]], [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_07-Applications of Partial Derivatives]], [[PS_08-Local Extrema and Critical Points]], [[PS_11-Reduced Echelon Form and Solutions]], [[PS_12-Systems with Parameters]]
