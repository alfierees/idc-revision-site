---
title: "Profit and Lagrange Cost, Parametric System, Domain, Limits & Hyperbolic Ratio (2023 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2023)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - partial-derivatives
  - total-differential
  - saddle-point
  - lagrange-multipliers
  - linear-systems
  - parametric-system
  - implicit-differentiation
  - limits
  - global-extrema
aliases:
  - Math II 2023 Moed A
  - Maths B Moed A 2023
  - PP28 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Profit and Lagrange Cost, Parametric System, Domain, Limits & Hyperbolic Ratio (2023 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2023)**, Maths for Economists B, Hever Schulberg. 3 hours, 4 questions, 25 points each, non-graphic calculator and formula sheet allowed.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (5 pages). The key says Q1 is from 2011 B, Q2 from 2010 A, and refers Q3b and Q3c to problem-set solutions (Exercise 3 Q5.7 and Exercise 4 Q3), where only the final answers are printed. Everything else is fully worked.

> [!info] Every part has an official answer
> The key points Q3b to Exercise 3 Q5 (segment 7) and Q3c to Exercise 4 Q3 (also the 2022 Moed A paper) instead of writing them out. Both exercise sheets print the same question and a final answer, which matches the answers below. The working for Q3b and Q3c was written for this site; the final answers are official.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Profit function, [[Marginal Profit]], the [[Total Differential]] as an estimate, a [[Saddle Point]] from the second derivative test, and a [[Lagrange Multiplier Method]] problem on cost | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q2 | A 3 by 4 [[Parametric System]]: unique solution impossible, then infinitely many or none by $k$, then a particular case with an added condition | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]] |
| Q3 | [[Domain of a Two-Variable Function]] and its graph; a slope $dy/dx$ on a curve cut from a surface; the limit of $x^{\sqrt{x}}$; a tangent line to $x^{\ln x}$ | [[Lec_05-Two Variable Functions]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_02-Logarithmic Functions and Inverse Functions]] |
| Q4 | Domain, rewriting, limits, derivative and [[Global Extremum]] of $\dfrac{e^x+e^{-x}}{e^x-e^{-x}}$ on $[1,\infty)$ | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_01-Global Extrema, Optimization and Summation]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the partial derivatives do three jobs: marginal profit (b), the differential estimate (c), and the first-order conditions (d). Lagrange (e) just adds a constraint multiplier.
> - Q2: eliminate, then read the last row.
> - Q3: differentiate a level curve implicitly (a), and for a variable exponent take logs (b, c).
> - Q4: the derivative is negative everywhere, so on an interval the maximum is at the left end and there is no minimum if the right end is open.

---

## Q1 — Air conditioner importer (25 points)

| | Units sold | Retail price per unit |
|---|---|---|
| Type A | $x$ | \$3000 |
| Type B | $y$ | \$4000 |

The monthly import cost is

$$
C(x,y) = 2000x + 2000y + 5000\ln\left(x^2+y^2\right) .
$$

### a. Monthly profit function

> [!success] Answer
> $$P(x,y) = 1000x + 2000y - 5000\ln\left(x^2+y^2\right)$$

Profit is revenue minus cost:

$$
P = 3000x + 4000y - \left[2000x + 2000y + 5000\ln\left(x^2+y^2\right)\right] = 1000x + 2000y - 5000\ln\left(x^2+y^2\right) .
$$

### b. The two marginal profits at 10 units of each type

> [!success] Answer
> $P_x(10,10) = 500$ and $P_y(10,10) = 1500$ (dollars).

$$
P_x = 1000 - 5000\cdot\frac{2x}{x^2+y^2} = 1000 - \frac{10{,}000\,x}{x^2+y^2} \;\Rightarrow\; P_x(10,10) = 1000 - \frac{100{,}000}{200} = 500 .
$$

$$
P_y = 2000 - \frac{10{,}000\,y}{x^2+y^2} \;\Rightarrow\; P_y(10,10) = 2000 - \frac{100{,}000}{200} = 1500 .
$$

**Meaning** ([[Marginal Profit]]): at an import level of 10 air conditioners of each kind, importing one more Type A unit raises monthly profit by approximately **\$500**, and importing one more Type B unit raises it by approximately **\$1500**.

### c. Differential estimate: from $(10,10)$ to $(11,9)$

> [!success] Answer
> $dP \approx -\$1000$ (profit falls by about \$1000).

Here $\Delta x = +1$ and $\Delta y = -1$. The [[Total Differential]] is

$$
dP = P_x(10,10)\cdot 1 + P_y(10,10)\cdot(-1) = 500 - 1500 = -1000 .
$$

Moving one unit from the high-margin Type B product to Type A loses more than it gains.

### d. Critical point and its type

> [!success] Answer
> Critical point $(2,4)$, a **saddle point** ($\Delta = -250{,}000 < 0$).

**First-order conditions** (both partials zero; see [[Critical Point]]):

$$
P_x = 0 \;\Rightarrow\; 1000 = \frac{10{,}000x}{x^2+y^2} \;\Rightarrow\; x^2+y^2 = 10x ,
$$

$$
P_y = 0 \;\Rightarrow\; 2000 = \frac{10{,}000y}{x^2+y^2} \;\Rightarrow\; x^2+y^2 = 5y .
$$

So $10x = 5y$, i.e. $y = 2x$. Substitute into $x^2+y^2=10x$:

$$
x^2 + 4x^2 = 10x \;\Rightarrow\; 5x(x-2) = 0 \;\Rightarrow\; x=0 \text{ or } x=2 .
$$

$x=0$ gives $y=0$, and $(0,0)$ is **not in the domain** because $\ln(0)$ is undefined. So the only critical point is $(2,4)$.

**Second derivatives.**

$$
P_{xx} = \frac{10{,}000\,(x^2-y^2)}{(x^2+y^2)^2}, \qquad P_{xy} = \frac{20{,}000\,xy}{(x^2+y^2)^2}, \qquad P_{yy} = \frac{10{,}000\,(y^2-x^2)}{(x^2+y^2)^2} .
$$

At $(2,4)$ we have $x^2+y^2 = 20$, so $(x^2+y^2)^2 = 400$:

$$
A = P_{xx}(2,4) = \frac{10{,}000\cdot(4-16)}{400} = -300, \quad B = P_{xy}(2,4) = \frac{20{,}000\cdot 8}{400} = 400, \quad C = P_{yy}(2,4) = \frac{10{,}000\cdot 12}{400} = 300 .
$$

$$
\Delta = AC - B^2 = (-300)(300) - 400^2 = -90{,}000 - 160{,}000 = -250{,}000 < 0 \;\Rightarrow\; \text{saddle point.}
$$

(See [[Second Derivative Test]].) Profit has no local maximum or minimum, so the importer cannot find an optimal mix by setting marginal profits to zero.

### e. Extremum of the **cost** under $x^2+y^2 = 200$

> [!success] Answer
> $x = y = 10$: import **10 units of each type**.

**Setup** ([[Lagrange Multiplier Method]], [[Constrained Optimization]]):

$$
L(x,y,\lambda) = 2000x + 2000y + 5000\ln(x^2+y^2) - \lambda\left(x^2+y^2-200\right) .
$$

The key notes that on the constraint $x^2+y^2 = 200$, so the term $\ln(x^2+y^2)$ **can be replaced by the constant $\ln 200$**. The official working keeps the logarithm anyway:

$$
L_x = 2000 + 5000\cdot\frac{2x}{x^2+y^2} - 2x\lambda = 0, \qquad L_y = 2000 + 5000\cdot\frac{2y}{x^2+y^2} - 2y\lambda = 0 .
$$

Multiply the first by $y$ and the second by $x$, then subtract. The $\lambda$ terms and the logarithm-derivative terms ($\tfrac{10{,}000\,xy}{x^2+y^2}$) cancel:

$$
2000y - 2000x = 0 \;\Rightarrow\; x = y .
$$

Substitute in the constraint: $2x^2 = 200$, so $x = \pm 10$ and $y = \pm 10$. Since $x$ and $y$ are numbers of units sold, the meaningful point is $x=y=10$.

> [!tip] A shortcut that gives the same answer
> Using the constant replacement, $L = 2000x + 2000y + \text{const} - \lambda(x^2+y^2-200)$. Then $2000 = 2\lambda x$ and $2000 = 2\lambda y$, which gives $x=y$ immediately. This is my shortcut, following the key's side note. The question says no classification of the extreme point is needed.

---

## Q2 — A parametric linear system (25 points)

$$
\begin{cases}
x_1 + kx_2 + 2x_3 + x_4 = 1 \\
(k-1)x_2 + 3kx_3 - 3x_3 + 2x_4 = k^2 + 11 - 2kx_4 \\
x_1 + kx_2 + (k^2+1)x_3 - 3k - 3 = -(k^2+k+1)x_4
\end{cases}
$$

where $k$ is a constant.

Collect the unknowns on the left and constants on the right:

$$
\begin{cases}
x_1 + kx_2 + 2x_3 + x_4 = 1 \\
(k-1)x_2 + 3(k-1)x_3 + 2(k+1)x_4 = k^2 + 11 \\
x_1 + kx_2 + (k^2+1)x_3 + (k^2+k+1)x_4 = 3k+3
\end{cases}
$$

### a. Why no value of $k$ gives a unique solution

> [!success] Answer
> There are **more unknowns (4) than equations (3)**.

A unique solution needs a pivot in every column. With 3 equations there are at most 3 pivots, so at least one variable is free (if the system is consistent) or the system has no solution at all. Either way, never exactly one.

### b. Values of $k$ for infinitely many solutions and for none

> [!success] Answer
> 1. **Infinitely many solutions:** $k \neq 1$ and $k \neq -1$.
> 2. **No solution:** $k = 1$ or $k = -1$.

> [!info] Working written for this site; the final answer is from the official sheet.

[[Augmented Matrix]] and the first step, $R_3 \to R_3 - R_1$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{cccc|c}
1 & k & 2 & 1 & 1 \\
0 & k-1 & 3k-3 & 2k+2 & k^2+11 \\
1 & k & k^2+1 & k^2+k+1 & 3k+3
\end{array}\right)
\longrightarrow
\left(\begin{array}{cccc|c}
1 & k & 2 & 1 & 1 \\
0 & k-1 & 3k-3 & 2k+2 & k^2+11 \\
0 & 0 & k^2-1 & k^2+k & 3k+2
\end{array}\right)
$$

**Generic $k$ ($k\neq1$, $k\neq-1$).** Divide $R_2$ by $k-1$ and $R_3$ by $k^2-1$:

$$
\left(\begin{array}{cccc|c}
1 & k & 2 & 1 & 1 \\
0 & 1 & 3 & \dfrac{2k+2}{k-1} & \dfrac{k^2+11}{k-1} \\
0 & 0 & 1 & * & *
\end{array}\right)
$$

Pivots in columns 1, 2, 3 (dependent variables $x_1,x_2,x_3$); column 4 has no pivot, so $x_4$ is free: **infinitely many solutions**.

**$k = 1$.** Row 2 becomes $(0,0,0,4\mid 12)$ and row 3 becomes $(0,0,0,2\mid 5)$:

$$
\left(\begin{array}{cccc|c}
1 & 1 & 2 & 1 & 1 \\
0 & 0 & 0 & 4 & 12 \\
0 & 0 & 0 & 2 & 5
\end{array}\right)
\xrightarrow{\tfrac14R_2,\; -2R_2+R_3}
\left(\begin{array}{cccc|c}
1 & 1 & 2 & 1 & 1 \\
0 & 0 & 0 & 1 & 3 \\
0 & 0 & 0 & 0 & -1
\end{array}\right)
$$

The last row is $0=-1$: **no solution**.

**$k = -1$.** After dividing row 2 by $k-1 = -2$:

$$
\left(\begin{array}{cccc|c}
1 & -1 & 2 & 1 & 1 \\
0 & 1 & 3 & 0 & -6 \\
0 & 0 & 0 & 0 & -1
\end{array}\right)
$$

The last row is again $0=-1$: **no solution**.

### c. $k=2$: is there a solution with $x_1 + x_3 = x_4$?

> [!success] Answer
> **No solution.**

At $k=2$ the matrix is

$$
\left(\begin{array}{cccc|c}
1 & 2 & 2 & 1 & 1 \\
0 & 1 & 3 & 6 & 15 \\
0 & 0 & 3 & 6 & 8
\end{array}\right)
$$

Reduce fully ($R_1 - 2R_2$, then $\tfrac13R_3$, then clear above the third pivot):

$$
\left(\begin{array}{cccc|c}
1 & 0 & 0 & -3 & -\dfrac{55}{3} \\
0 & 1 & 0 & 0 & 7 \\
0 & 0 & 1 & 2 & \dfrac{8}{3}
\end{array}\right)
$$

With $x_4 = t$ free, the general solution is

$$
(x_1,x_2,x_3,x_4) = \left(3t - 18\tfrac13,\; 7,\; \tfrac83 - 2t,\; t\right) .
$$

Impose $x_1 + x_3 = x_4$:

$$
\left(3t - \tfrac{55}{3}\right) + \left(\tfrac83 - 2t\right) = t \;\Rightarrow\; t - \tfrac{47}{3} = t \;\Rightarrow\; -15\tfrac23 = 0 ,
$$

which is false for every $t$. So **no solution** satisfies the extra condition.

---

## Q3 — Four unrelated segments (25 points)

### a. The surface $z = f(x,y) = x\,e^{x-y} + \ln(y-2x)$

#### a1. Domain and its graph

> [!success] Answer
> Domain: $y > 2x$. The graph is the open half-plane above the dashed line $y=2x$.

$\ln(y-2x)$ needs $y - 2x > 0$. The exponential term has no restriction. The boundary line $y=2x$ is **not** included (dashed).

![[PP28_q3_domain.png|480]]

*Shaded: the points $(x,y)$ with $y>2x$. The line itself is excluded.*

#### a2. Find $x$ for which $y' = dy/dx = 2$ on the curve $z=0$

> [!success] Answer
> $x = 1$.

The curve is $x\,e^{x-y} + \ln(y-2x) = 0$ (see [[Cross Section of a Surface]]). Differentiate with respect to $x$, treating $y$ as a function of $x$ (see [[Implicit Differentiation]]):

$$
0 = e^{x-y} + x\,e^{x-y}\,(1 - y') + \frac{1}{y-2x}\,(y' - 2) .
$$

Set $y' = 2$. The last term vanishes since $y'-2=0$:

$$
0 = e^{x-y} + x\,e^{x-y}(1-2) = e^{x-y}\,(1 - x) .
$$

Since $e^{x-y}>0$, we get $1-x=0$, so $x=1$.

> [!tip] Does a point with $x=1$ exist on the curve?
> At $x=1$ the curve needs $e^{1-y} + \ln(y-2) = 0$ with $y>2$. As $y\to 2^+$ the log tends to $-\infty$, and at $y=3$ the expression is positive ($e^{-2}+0>0$), so by continuity a solution $y\in(2,3)$ exists. My check; the key does not discuss it.

### b. $\displaystyle\lim_{x\to 0^+} x^{\sqrt{x}}$

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 3 Q5.7, answer 1).
> The 2023 Moed A key says "from ex-3 question 5 segment 7 (see solution)". The exercise sheet asks the same limit and prints the answer $1$.

> [!success] Answer
> $1$.

This has the form $0^0$, an [[Indeterminate Form]]. Rewrite with $e$ and logs:

$$
x^{\sqrt{x}} = e^{\sqrt{x}\,\ln x} .
$$

Now the exponent: $\sqrt{x}\ln x$ is $0\cdot(-\infty)$ as $x\to0^+$. Use L'Hopital on $\dfrac{\ln x}{x^{-1/2}}$ ($\tfrac{-\infty}{\infty}$):

$$
\lim_{x\to0^+}\frac{\ln x}{x^{-1/2}} = \lim_{x\to0^+}\frac{1/x}{-\tfrac12 x^{-3/2}} = \lim_{x\to0^+}\left(-2\sqrt{x}\right) = 0 .
$$

By continuity of $e^{(\cdot)}$:

$$
\lim_{x\to0^+} x^{\sqrt{x}} = e^{0} = 1 .
$$

### c. Tangent line to $y = x^{\ln x}$ at $x = e$

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 4 Q3, answer $y=2x-e$).
> The 2023 Moed A key says "from ex-4 question 3 and also from 2022 A (see solution)". The exercise sheet asks the same tangent line and prints $y=2x-e$.

> [!success] Answer
> $$y = 2x - e$$

**Point.** At $x=e$: $\ln e = 1$, so $y = e^{1} = e$. The point is $(e,\,e)$.

**Slope.** Take logs of both sides (see [[Logarithmic Differentiation]]): $\ln y = (\ln x)^2$. Differentiate implicitly:

$$
\frac{y'}{y} = 2\ln x\cdot\frac1x \;\Rightarrow\; y' = y\cdot\frac{2\ln x}{x} = x^{\ln x}\cdot\frac{2\ln x}{x} .
$$

At $x=e$: $y' = e\cdot\dfrac{2\cdot1}{e} = 2$.

**Tangent line** ([[Tangent Line]]): $y - e = 2(x - e)$, so $y = 2x - e$.

---

## Q4 — The function $f(x) = \dfrac{e^x + e^{-x}}{e^x - e^{-x}}$ (25 points)

### a. Domain

> [!success] Answer
> $x \neq 0$.

The only restriction is a zero denominator. $e^x - e^{-x} = 0$ means $e^x = e^{-x}$, so $x = -x$, so $x=0$. The domain is all real $x\neq0$.

### b. Show that $f(x) = \dfrac{e^{2x}+1}{e^{2x}-1}$

> [!success] Answer
> Shown by multiplying numerator and denominator by $e^x$.

Write $e^{-x} = \dfrac{1}{e^x}$ and combine inside numerator and denominator:

$$
f(x) = \frac{e^x + \dfrac{1}{e^x}}{e^x - \dfrac{1}{e^x}} = \frac{\dfrac{e^{2x}+1}{e^x}}{\dfrac{e^{2x}-1}{e^x}} = \frac{e^{2x}+1}{e^{2x}-1} .
$$

### c. $\displaystyle\lim_{x\to-\infty} f(x)$

> [!success] Answer
> $-1$.

As $x\to-\infty$, $e^{2x}\to 0$:

$$
\frac{e^{2x}+1}{e^{2x}-1} \to \frac{0+1}{0-1} = -1 .
$$

So $y=-1$ is a [[Horizontal Asymptote]] on the left.

### d. $\displaystyle\lim_{x\to\infty} f(x)$

> [!success] Answer
> $1$.

The form is $\tfrac{\infty}{\infty}$, so L'Hopital gives

$$
\lim_{x\to\infty}\frac{e^{2x}+1}{e^{2x}-1} = \lim_{x\to\infty}\frac{2e^{2x}}{2e^{2x}} = 1 .
$$

So $y=1$ is the horizontal asymptote on the right. (Also at $x=0$ there is a [[Vertical Asymptote]].)

### e. Show that $f'(x) = -\dfrac{4e^{2x}}{\left(e^{2x}-1\right)^2}$

> [!success] Answer
> Shown with the quotient rule.

Use $f = \dfrac{e^{2x}+1}{e^{2x}-1}$, with the chain rule giving $(e^{2x})' = 2e^{2x}$:

$$
f'(x) = \frac{2e^{2x}\,(e^{2x}-1) - (e^{2x}+1)\,2e^{2x}}{(e^{2x}-1)^2} = \frac{2e^{2x}\left[(e^{2x}-1)-(e^{2x}+1)\right]}{(e^{2x}-1)^2} = \frac{2e^{2x}\cdot(-2)}{(e^{2x}-1)^2} = -\frac{4e^{2x}}{(e^{2x}-1)^2} .
$$

### f. Global extreme points on $[1,\infty)$

> [!success] Answer
> **Global maximum** at $x=1$. **No global minimum.**

- **No relative extrema.** $f'(x) = -\dfrac{4e^{2x}}{(e^{2x}-1)^2}$ is never 0 (the numerator is always positive) and the denominator is positive on the domain, so $f'(x)<0$ for every $x\neq0$.
- So $f$ is **decreasing** on the interval $[1,\infty)$. The left end is closed, so the largest value is at $x=1$.
- On the right, $f(x)\to 1$ as $x\to\infty$ but never reaches it (for $x>0$, $e^{2x}+1>e^{2x}-1>0$, so $f>1$). The interval is open on the right, so there is **no global minimum**.

Value at the maximum (my addition, not in the key): $f(1) = \dfrac{e^2+1}{e^2-1}\approx 1.313$.

![[PP28_q4_decreasing_branches.png|560]]

*On each side of the vertical asymptote $x=0$ the function decreases. On $[1,\infty)$ (red) it starts at $f(1)\approx1.313$ and approaches 1 from above without reaching it.*

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | revenue minus cost | $P=1000x+2000y-5000\ln(x^2+y^2)$ |
| Q1b | partial derivatives at $(10,10)$ | \$500 per extra A, \$1500 per extra B |
| Q1c | total differential, $\Delta x=1$, $\Delta y=-1$ | $dP\approx-\$1000$ |
| Q1d | FOC plus second derivative test | $(2,4)$, saddle ($\Delta=-250{,}000$) |
| Q1e | Lagrange with $x^2+y^2=200$ | $x=y=10$ |
| Q2a | unknowns exceed equations | No unique solution possible |
| Q2b | row reduction | Infinitely many for $k\neq\pm1$; none for $k=\pm1$ |
| Q2c | $k=2$ plus $x_1+x_3=x_4$ | No solution |
| Q3a1 | log argument positive | $y>2x$ |
| Q3a2 | implicit differentiation, $y'=2$ | $x=1$ |
| Q3b | exponent log plus L'Hopital | $1$ |
| Q3c | logarithmic differentiation | $y=2x-e$ |
| Q4a | denominator not 0 | $x\neq0$ |
| Q4b | multiply by $e^x$ | $\dfrac{e^{2x}+1}{e^{2x}-1}$ |
| Q4c | $e^{2x}\to0$ | $-1$ |
| Q4d | L'Hopital | $1$ |
| Q4e | quotient rule | $-\dfrac{4e^{2x}}{(e^{2x}-1)^2}$ |
| Q4f | monotonic decreasing, closed left end | Max at $x=1$; no min |

## Related Notes

- Hub: [[Maths for Economists B]]
- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]
