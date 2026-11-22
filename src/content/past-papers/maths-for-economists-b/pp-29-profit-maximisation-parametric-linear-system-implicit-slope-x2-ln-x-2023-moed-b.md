---
title: "Profit Maximisation, Parametric Linear System, Implicit Slope & x² ln x (2023 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II for Economics Final Exam, Moed B (2023)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - partial-derivatives
  - profit-maximisation
  - second-derivative-test
  - linear-systems
  - parametric-system
  - implicit-differentiation
  - global-extrema
  - lhopital
aliases:
  - Math II 2023 Moed B
  - Maths B Moed B 2023
  - PP29 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Profit Maximisation, Parametric Linear System, Implicit Slope & x² ln x (2023 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II for Economics Final Exam, Moed B (2023)**, Maths for Economists B, Hever Schulberg. 3 hours, 4 questions, 25 points each, non-graphic calculator and formula sheet allowed.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (6 pages, every part is solved). Where the handwriting has a slip, the official answer is kept and a `> [!warning]` callout shows the check. Question 4 is marked in the key as "from ex3, question 6b", but the full working is written out.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A cross section of a cost surface and its [[Tangent Line]]; reading a partial derivative; [[Marginal Profit]] equations; unconstrained profit maximum with the [[Second Derivative Test]] | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]] |
| Q2 | A 3 by 4 [[Parametric System]]: which parameter values give infinitely many solutions or none, then a homogeneous case, then a true/false on systems | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |
| Q3 | [[Implicit Differentiation]] on a level curve of $e^x+e^y+e^{1-x-y}$, then its critical point and type | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]] |
| Q4 | Domain, intercept and limits of $x^2\ln x$ (with [[L'Hopital's Rule]]), then [[Global Extremum]] on a half-open interval | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_01-Global Extrema, Optimization and Summation]] |

> [!tip] Intuition: the one move behind each question
> - Q1: fixing $x=9$ turns the surface into a curve in $(y,z)$, so its slope is just the partial derivative $f_y$. Marginal profit equations are first-order conditions with a number on the right instead of 0.
> - Q2: eliminate once, then look at the **last row**. A row $0=\text{nonzero}$ kills the system; a row of zeros leaves a free variable.
> - Q3: when a curve is cut out of a surface, differentiate the level equation with the other variable treated as a function of the one you want.
> - Q4: on an interval, compare the critical point with the **endpoints**, and use the limit where an endpoint is not allowed.

---

## Q1 — Cost surface, tangent line and profit (25 points)

A factory produces $x$ tables and $y$ chairs weekly. The weekly **cost** of production is

$$
f(x,y) = 24x\sqrt{x} + 10y^2 .
$$

### a. Tangent line to the cross section $x=9$ at $y=3$

**Question.** A curve is created from the intersection of $f(x,y)$ with the plane $x=9$. Find the equation of the tangent line to this curve at the point where $y=3$.

> [!success] Answer
> $$z = 60y + 558, \qquad x = 9$$

Substitute $x=9$ (so $\sqrt{x}=3$ and $24\cdot 9\cdot 3 = 648$). This is a [[Cross Section of a Surface]]:

$$
z = 24\cdot 9\cdot 3 + 10y^2 = 648 + 10y^2 .
$$

Differentiate in $y$ and evaluate at $y=3$:

$$
z' = 20y \quad\Rightarrow\quad z'(y=3) = 60 .
$$

The height of the curve at $y=3$ is $z = 648 + 10\cdot 9 = 738$. The tangent line is $z - 738 = 60\,(y-3)$, which simplifies to

$$
z = 60y + 558 .
$$

The line lies in the plane $x=9$, so the answer is stated together with $x=9$.

### b. Meaning of the slope

> [!success] Answer (official)
> At a weekly production level of 9 tables and 3 chairs, producing and selling one more chair changes the weekly figure by approximately \$60.

The slope $60$ is $\dfrac{\partial f}{\partial y}(9,3)$, the marginal change in $f$ per extra chair with tables held at 9.

> [!warning] Official wording says "profit", but $f$ is the cost
> The question defines $f$ as the weekly **cost** of production, so the slope $60$ is the approximate increase in weekly **cost** from one more chair (the marginal cost of a chair at this level). The handwritten key says "profit". Revenue is not part of $f$, so I read it as a wording slip and keep the official number, \$60.

### c. Quantities from marginal profits (tables sell at \$900, chairs at \$1,000)

**Question.** In a specific week the marginal profit from an additional table is \$540 and from an additional chair is \$760. How many tables and chairs were produced and sold?

> [!success] Answer
> $x = 100$ tables and $y = 12$ chairs.

Profit is revenue minus cost:

$$
P(x,y) = 900x + 1000y - 24x\sqrt{x} - 10y^2 .
$$

Table: $24x^{3/2}$ has derivative $24\cdot\tfrac32 x^{1/2} = 36\sqrt{x}$.

$$
P_x = 900 - 36\sqrt{x} = 540 \;\Rightarrow\; \sqrt{x} = 10 \;\Rightarrow\; x = 100 .
$$

$$
P_y = 1000 - 20y = 760 \;\Rightarrow\; y = 12 .
$$

> [!warning] Handwriting slip in the key
> The key writes "$=700$" on the $P_y$ line, but the question says \$760 and the key's answer $y=12$ only follows from 760: $1000 - 20\cdot 12 = 760$. The answer $y=12$ is kept.

### d. Maximal profit

> [!success] Answer
> Maximum at $(625, 50)$, maximal profit $\$212{,}500$.

**Critical point.** Set both partials to zero:

$$
900 - 36\sqrt{x} = 0 \;\Rightarrow\; \sqrt{x} = 25 \;\Rightarrow\; x = 625, \qquad 1000 - 20y = 0 \;\Rightarrow\; y = 50 .
$$

**Type** (second derivative test, see [[Lec_08-Second Derivative Test and Lagrange Multipliers]]):

$$
A = P_{xx} = -36\cdot\tfrac12 x^{-1/2} = -\frac{18}{\sqrt{x}} = -\frac{18}{25} = -0.72, \qquad B = P_{xy} = 0, \qquad C = P_{yy} = -20 .
$$

$$
\Delta = AC - B^2 = (-0.72)(-20) - 0 = 14.4 > 0, \qquad A < 0 \;\Rightarrow\; \text{maximum.}
$$

**Value.**

$$
P(625,50) = 900\cdot 625 + 1000\cdot 50 - 24\cdot 625\cdot 25 - 10\cdot 2500 = 562{,}500 + 50{,}000 - 375{,}000 - 25{,}000 = 212{,}500 .
$$

> [!tip] Why "maximal profit" is the answer
> $P_{xx}<0$ and $P_{yy}<0$ everywhere on the domain, so profit is concave: the only critical point is the global maximum, not just a local one. (This is my remark. The key only needs the second derivative test.)

---

## Q2 — A parametric linear system (25 points)

$$
\begin{cases}
x_1 - 2x_2 + x_3 + kx_4 = 2a \\
2x_1 - 4x_2 + kx_3 - x_4 = a \\
-x_1 + 2x_2 - x_3 + (k^2-2)x_4 = ka
\end{cases}
\qquad (a, k \text{ constants})
$$

### a. How many solutions when $a=0$ and $k$ is any number?

> [!success] Answer
> **Infinitely many.**

With $a=0$ every right-hand side is 0, so this is a [[Homogeneous System]]. It always has the zero solution (so it is consistent). It has 3 equations and 4 unknowns, so at most 3 pivots, hence at least one free variable: infinitely many solutions.

### b. $a=1$: values of $k$ for infinitely many solutions and for none

> [!success] Answer
> 1. **Infinitely many solutions:** $k \neq 1$ and $k \neq 2$.
> 2. **No solution:** $k = 1$ or $k = 2$.

> [!info] Working written for this site; the final answer is from the official sheet.

[[Augmented Matrix]] for $a=1$, then $R_2 \to R_2 - 2R_1$ and $R_3 \to R_3 + R_1$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & k & 2 \\
2 & -4 & k & -1 & 1 \\
-1 & 2 & -1 & k^2-2 & k
\end{array}\right)
\;\longrightarrow\;
\left(\begin{array}{cccc|c}
1 & -2 & 1 & k & 2 \\
0 & 0 & k-2 & -1-2k & -3 \\
0 & 0 & 0 & k^2+k-2 & k+2
\end{array}\right)
$$

The bottom row factors: $k^2+k-2 = (k-1)(k+2)$. Now go through the cases that change the shape of the last two rows.

**Generic $k$ ($k\neq 2, 1, -2$).** The pivots are in columns 1, 3 and 4 (the key divides by $k-2$ and by $(k-1)(k+2)$), giving the echelon form

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & k & 2 \\
0 & 0 & 1 & -\dfrac{1+2k}{k-2} & -\dfrac{3}{k-2} \\
0 & 0 & 0 & 1 & \dfrac{1}{k-1}
\end{array}\right)
$$

Three pivots, four unknowns, $x_2$ is free: **infinitely many solutions**.

**$k=1$.**

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & 1 & 2 \\
0 & 0 & 1 & 3 & 3 \\
0 & 0 & 0 & 0 & 3
\end{array}\right)
$$

The last row reads $0 = 3$: **no solution**.

**$k=-2$.**

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & -2 & 2 \\
0 & 0 & 1 & -\tfrac34 & \tfrac34 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)
$$

A zero row, consistent, two free variables: **infinitely many solutions** (this is included in "$k\neq1,2$").

**$k=2$.** Row 2 becomes $(0,0,0,-5\mid -3)$ and row 3 becomes $(0,0,0,4\mid 4)$. Swap, scale and eliminate:

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & 2 & 2 \\
0 & 0 & 0 & 1 & 1 \\
0 & 0 & 0 & -5 & -3
\end{array}\right)
\xrightarrow{5R_2+R_3\to R_3}
\left(\begin{array}{cccc|c}
1 & -2 & 1 & 2 & 2 \\
0 & 0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0 & 2
\end{array}\right)
$$

The last row reads $0 = 2$: **no solution**.

> [!tip] Shortcut for this type of question
> After the first elimination the whole question sits in the last row, $(k-1)(k+2)\,x_4 = k+2$. It is contradictory only if the coefficient is 0 and the right side is not ($k=1$). For the other special value $k=2$ the pivot moves to column 4 in **both** remaining rows, giving two incompatible equations for $x_4$ ($-5x_4=-3$ and $4x_4=4$). When $k=-2$ both sides vanish, which is why it is on the "infinitely many" side. This is my summary of the key's case analysis.

### c. $k=2$, $a=0$: find the solution

> [!success] Answer
> $(x_1,x_2,x_3,x_4) = (2s-t,\; s,\; t,\; 0)$ for any real $s,t$.

With $k=2$, $a=0$ the augmented matrix has the same coefficient part as in (b) at $k=2$, right-hand sides all 0. After elimination (see the key):

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & 2 & 0 \\
0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)
\xrightarrow{-2R_2+R_1\to R_1}
\left(\begin{array}{cccc|c}
1 & -2 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)
$$

So $x_4 = 0$ and $x_1 - 2x_2 + x_3 = 0$. Take $x_2 = s$ and $x_3 = t$ as free variables: $x_1 = 2s - t$.

### d. True or false: "A linear system with more equations than variables can never have a unique solution."

> [!success] Answer
> **False.**

More equations than unknowns does not stop a system from being consistent. During elimination some equations may turn out to be redundant (they reduce to $0=0$), leaving as many independent equations as unknowns, which gives exactly one solution. The key says the same, referring to examples seen in the course.

> [!example] My own example (not from the key)
> $x+y=2$, $x-y=0$, $2x+y=3$ has 3 equations and 2 unknowns. The first two give $x=y=1$, and the third, $2+1=3$, holds too. So the solution $(1,1)$ is unique.

> [!tip] What is true
> With **more unknowns than equations** a system can never have a *unique* solution (it has none or infinitely many). The statement in the question swaps the two cases.

---

## Q3 — Implicit slope and extremum of $e^x+e^y+e^{1-x-y}$ (25 points)

$$
z = f(x,y) = e^{x} + e^{y} + e^{1-x-y}
$$

### a. Slope $x' = \dfrac{dx}{dy}$ on the curve $z = 1 + 2\sqrt{e}$, at the point where $x = 0$

> [!success] Answer
> $$x'(0,\tfrac12) = 0$$

**Step 1: find $y$ at $x=0$.** The curve is $e^x + e^y + e^{1-x-y} = 1 + 2\sqrt{e}$. Put $x=0$, so $e^0 = 1$ cancels the 1:

$$
e^{y} + e^{1-y} = 2\sqrt{e} \;\Rightarrow\; e^{y} + \frac{e}{e^{y}} = 2\sqrt{e} .
$$

Let $t = e^y > 0$. Multiply by $t$:

$$
t^2 - 2\sqrt{e}\,t + e = 0 \;\Rightarrow\; t = \frac{2\sqrt{e} \pm \sqrt{4e - 4e}}{2} = \sqrt{e} .
$$

So $e^y = e^{1/2}$ and $y = \tfrac12$. The point is $(0,\tfrac12)$.

**Step 2: differentiate** the curve equation with respect to $y$, treating $x$ as a function of $y$ (see [[Implicit Differentiation]]):

$$
0 = e^{x}\,x' + e^{y} + e^{1-x-y}\,(-x' - 1) .
$$

At $(0,\tfrac12)$: $e^x = 1$, $e^y = \sqrt{e}$ and $e^{1-x-y} = e^{1/2} = \sqrt{e}$:

$$
0 = x' + \sqrt{e} - \sqrt{e}\,x' - \sqrt{e} = x'\,(1 - \sqrt{e}) \;\Rightarrow\; x' = 0 \quad (\text{since } 1-\sqrt{e}\neq 0).
$$

> [!tip] Intuition
> The quadratic has a **double root** ($4e-4e=0$), so at $x=0$ the level curve passes through exactly one $y$. That makes $x=0$ the leftmost point of the curve, where its tangent is vertical in the $xy$-plane, which is exactly $dx/dy = 0$. This is my reading, consistent with the key's answer.

### b. The extreme point and its type

> [!success] Answer
> Critical point $\left(\tfrac13,\tfrac13\right)$, a **minimum**.

**First-order conditions** ([[Critical Point]]):

$$
f_x = e^{x} - e^{1-x-y} = 0 \;\Rightarrow\; x = 1-x-y \;\Rightarrow\; 2x = 1-y ,
$$

$$
f_y = e^{y} - e^{1-x-y} = 0 \;\Rightarrow\; y = 1-x-y \;\Rightarrow\; 2y = 1-x .
$$

From the first, $y = 1-2x$. Substituting into the second: $2(1-2x) = 1 - x \Rightarrow 2 - 4x = 1 - x \Rightarrow x = \tfrac13$, and $y = \tfrac13$.

**Second-order test** ([[Second Derivative Test]]): at $x=y=\tfrac13$ we have $1-x-y=\tfrac13$, so all three exponentials equal $e^{1/3}$.

$$
A = f_{xx} = e^{x} + e^{1-x-y} = 2e^{1/3}, \quad B = f_{xy} = e^{1-x-y} = e^{1/3}, \quad C = f_{yy} = e^{y} + e^{1-x-y} = 2e^{1/3} .
$$

$$
\Delta = AC - B^2 = 4e^{2/3} - e^{2/3} = 3e^{2/3} > 0, \qquad A > 0 \;\Rightarrow\; \text{minimum.}
$$

The minimum value is $f(\tfrac13,\tfrac13) = 3e^{1/3}$.

> [!tip] Consistency check with part (a)
> The level $1+2\sqrt{e}\approx 4.30$ lies above the minimum value $3e^{1/3}\approx 4.19$, so the level curve is a closed loop around the minimum. That is why it can have a leftmost point (where $x'=0$). My check.

---

## Q4 — The function $f(x) = x^2\ln x$ (25 points)

### a. Domain

> [!success] Answer
> $x > 0$.

$\ln x$ needs $x>0$, and $x^2$ imposes nothing.

### b. $x$-intercept

> [!success] Answer
> $(1, 0)$.

Set $0 = x^2\ln x$. Since $x>0$, $x^2\neq 0$, so $\ln x = 0$ and $x = e^0 = 1$.

### c. $\displaystyle\lim_{x\to\infty} f(x)$

> [!success] Answer
> $\infty$.

Both factors grow without bound: $x^2\to\infty$ and $\ln x\to\infty$, and $\infty\cdot\infty = \infty$.

### d. $\displaystyle\lim_{x\to 0^+} f(x)$

> [!success] Answer
> $0$.

This is $0\cdot(-\infty)$, an [[Indeterminate Form]]. Rewrite as a fraction and use [[L'Hopital's Rule]] ($\tfrac{-\infty}{\infty}$):

$$
\lim_{x\to 0^+} \frac{\ln x}{x^{-2}} = \lim_{x\to 0^+} \frac{1/x}{-2x^{-3}} = \lim_{x\to 0^+} \left(-\frac{x^{2}}{2}\right) = 0 .
$$

### e. Global extreme points on $(0, 1]$

> [!success] Answer
> **Global maximum** at $x=1$ (value $0$). **Global minimum** at $x = e^{-1/2}\approx 0.607$ (value $-\dfrac{1}{2e}$).

**Critical points.** By the product rule:

$$
f'(x) = 2x\ln x + x^2\cdot\frac1x = x\,(2\ln x + 1) .
$$

$f'=0$ requires $x=0$ (not in the interval) or $\ln x = -\tfrac12$, so $x = e^{-1/2} \approx 0.607$, which is inside $(0,1]$.

**Compare candidates** (see [[Closed Interval Rule]] and [[Global Extremum]]):

$$
f(1) = 1^2\ln 1 = 0, \qquad f\!\left(e^{-1/2}\right) = e^{-1}\cdot\left(-\tfrac12\right) = -\frac{1}{2e}, \qquad \lim_{x\to 0^+} f(x) = 0 \text{ (not attained)}.
$$

- The left end, $x\to 0^+$, is open: $f$ approaches $0$ but never reaches it, and $0$ is not larger than $f(1)=0$, so it changes nothing.
- The largest value taken is $f(1)=0$: **global maximum** at $x=1$.
- The smallest value is $-\dfrac{1}{2e}\approx-0.184$ at $x = e^{-1/2}$: **global minimum**.

![[PP29_q4_x2lnx_interval.png|560]]

*The curve starts at 0 (not reached), dips to the minimum at $x\approx0.607$, and returns to 0 at $x=1$.*

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | cross section, derivative in $y$ | Tangent: $z=60y+558$ in the plane $x=9$ |
| Q1b | meaning of $f_y$ | One more chair changes weekly cost by about \$60 at $(9,3)$ |
| Q1c | marginal profit equations | $x=100$, $y=12$ |
| Q1d | FOC plus second derivative test | $(625,50)$, maximum, profit \$212,500 |
| Q2a | homogeneous, 3 eq in 4 unknowns | Infinitely many |
| Q2b | row reduction, last row | Infinitely many for $k\neq1,2$; none for $k=1,2$ |
| Q2c | $k=2$, $a=0$ | $(2s-t,\,s,\,t,\,0)$ |
| Q2d | redundant equations | False |
| Q3a | quadratic in $e^y$, implicit differentiation | $y=\tfrac12$, $x'=0$ |
| Q3b | FOC plus second derivative test | $(\tfrac13,\tfrac13)$ is a minimum |
| Q4a | log domain | $x>0$ |
| Q4b | $\ln x=0$ | $(1,0)$ |
| Q4c | product of growing terms | $\infty$ |
| Q4d | L'Hopital | $0$ |
| Q4e | critical point and endpoints | max at $x=1$, min at $x=e^{-1/2}$ |

## Related Notes

- Hub: [[Maths for Economists B]]
- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]
