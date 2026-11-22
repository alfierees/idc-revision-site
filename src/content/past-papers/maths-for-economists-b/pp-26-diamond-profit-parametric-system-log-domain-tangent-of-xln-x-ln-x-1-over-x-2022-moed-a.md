---
title: "Diamond Profit, Parametric System, Log Domain, Tangent of x^ln x & ln x + 1 over x (2022 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II for Economics Final Exam, Moed A (2022)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - partial-derivatives
  - tangent-line
  - linear-systems
  - parametric-system
  - domain
  - implicit-differentiation
  - second-derivative-test
  - lhopital
  - global-extrema
aliases:
  - Math II 2022 Moed A
  - Maths B Moed A 2022
  - PP26 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Diamond Profit, Parametric System, Log Domain, Tangent of x^ln x & ln x + 1 over x (2022 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II for Economics Final Exam, Moed A (2022)**, Maths for Economists B, Hever Schulberg. 3 hours, 4 questions. Marks on this paper: Q1 20, Q2 25, Q3 30, Q4 25.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official solution** (7 pages: handwritten for Q1, Q3 and Q4, a typed worked solution for Q2). The key says Q1 is taken from 2013 A, Q2 from 2009 A (and part d from 2014 A), and Q3d from homework exercise 5 question 4. Every part is solved in the key; no answer in this note is AI-written.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A [[Partial Derivative]] read as a marginal profit; the [[Tangent Line]] to a cross section; equating two marginal profits | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q2 | A 3 by 4 [[Parametric System]] with $a$ and $k$: homogeneous case, which $k$ give infinitely many or no solutions, then a true/false on systems | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |
| Q3 | A sum of logs: [[Domain of a Two-Variable Function]] and its graph, [[Implicit Differentiation]] on a level curve, the extremum by the [[Second Derivative Test]], and a tangent line by [[Logarithmic Differentiation]] | [[Lec_05-Two Variable Functions]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q4 | $\ln x + 1/x$: domain, limits with [[L'Hopital's Rule]], relative extremum, [[Global Extremum]] on $[\tfrac12,\infty)$ | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_01-Global Extrema, Optimization and Summation]] |

> [!tip] Intuition: the one move behind each question
> - Q1: a partial derivative of a profit function is "profit from one more unit, other quantity fixed". The tangent line to a cross section only needs one partial derivative.
> - Q2: after the first elimination the question is decided by the last row, $(k-1)(k+2)\,x_4=k+2$.
> - Q3: the three log terms force $x>0$, $y>0$ and $3-x-y>0$; the critical point sits in the middle of that triangle.
> - Q4: on $[\tfrac12,\infty)$ there is one critical point, and the function tends to infinity, so the critical point is the minimum and there is no maximum.

---

## Q1 — Diamond dealer (20 points)

Monthly profit in thousands of \$:

$$
f(x,y) = x\,e^{-x+y^2} + y^2,
$$

where $x$ is the number of type A diamonds sold and $y$ the number of type B diamonds sold.

### a. $f_y(0,5)$ and its meaning

> [!success] Answer
> $f_y(0,5)=10$. When no type A diamonds are sold, selling a 6th type B diamond raises monthly profit by about \$10,000.

$$
f_y = x\,e^{-x+y^2}\cdot 2y + 2y .
$$

At $(0,5)$ the first term has $x=0$, so $f_y(0,5) = 0 + 2\cdot5 = 10$. Profit is in thousands of dollars, so this is about \$10,000 (see [[Marginal Profit]]).

### b. $f_x(1,0)$, its meaning, and the tangent line

> [!success] Answer
> $f_x(1,0)=0$. When no type B diamonds are sold, selling a second type A diamond does not change profit (approximately). The tangent line is $z=e^{-1}$, $y=0$.

$$
f_x = e^{-x+y^2} + x\,e^{-x+y^2}(-1) = e^{-x+y^2}(1-x) .
$$

At $(1,0)$: $f_x = e^{-1}\cdot 0 = 0$. The key writes it as $e^{-1}-e^{-1}=0$.

**Tangent line.** The slope $f_x(1,0)$ belongs to the cross section $y=0$, the curve $z=f(x,0)=xe^{-x}$. This is a [[Cross Section of a Surface]]. Its height at $x=1$ is $f(1,0)=e^{-1}$. With slope $0$ the tangent is horizontal:

$$
z = e^{-1}, \qquad y = 0 .
$$

### c. Equal marginal profits when only type A is sold

> [!success] Answer
> $1$ diamond of type A.

Only type A means $y=0$. Equal marginal profits means $f_x = f_y$. At $y=0$: $f_y = 0\cdot\ldots + 2\cdot 0 = 0$ and $f_x = e^{-x}(1-x)$. So

$$
e^{-x}(1-x) = 0 \;\Rightarrow\; 1-x=0 \;\Rightarrow\; x = 1 ,
$$

since $e^{-x}>0$.

---

## Q2 — A parametric linear system (25 points)

$$
\begin{cases}
x_1 - 2x_2 + x_3 + kx_4 = 2a \\
2x_1 - 4x_2 + kx_3 - x_4 = a \\
-x_1 + 2x_2 - x_3 + k^2x_4 - 2x_4 = ka
\end{cases}
\qquad (a,k \text{ constants})
$$

### a. How many solutions when $a=0$ and $k$ is any number?

> [!success] Answer
> **Infinitely many.**

With $a=0$ all right-hand sides are 0, so it is a [[Homogeneous System]] with more variables (4) than equations (3). It always has the [[Zero Solution]], and with at most 3 pivots there is at least one free variable: infinitely many solutions.

### b. $a=1$: values of $k$

> [!success] Answer
> 1. **Infinitely many solutions:** $k \neq 1,\ 2$.
> 2. **No solution:** $k = 1$ or $k = 2$.

Official working, with the steps spelled out. [[Augmented Matrix]] for $a=1$; then $-2R_1+R_2\to R_2$ and $R_1+R_3\to R_3$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & k & 2 \\
2 & -4 & k & -1 & 1 \\
-1 & 2 & -1 & k^2-2 & k
\end{array}\right)
\longrightarrow
\left(\begin{array}{cccc|c}
1 & -2 & 1 & k & 2 \\
0 & 0 & k-2 & -1-2k & -3 \\
0 & 0 & 0 & k^2+k-2 & k+2
\end{array}\right)
$$

The bottom row factors: $k^2+k-2=(k-1)(k+2)$.

**Generic $k$ ($k\neq 2,1,-2$).** Divide $R_2$ by $k-2$ and $R_3$ by $(k-1)(k+2)$:

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & k & 2 \\
0 & 0 & 1 & -\dfrac{1+2k}{k-2} & -\dfrac{3}{k-2} \\
0 & 0 & 0 & 1 & \dfrac{1}{k-1}
\end{array}\right)
$$

Three pivots, four unknowns, so $x_2$ is free: **infinitely many solutions**.

**$k=1$.**

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & 1 & 2 \\
0 & 0 & 1 & 3 & 3 \\
0 & 0 & 0 & 0 & 3
\end{array}\right)
$$

The last row reads $0=3$: **no solution**.

**$k=-2$.**

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & -2 & 2 \\
0 & 0 & 1 & -\tfrac34 & \tfrac34 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)
$$

A zero row, so consistent with two free variables: **infinitely many solutions** (included in "$k\neq1,2$").

**$k=2$.** Row 2 becomes $(0,0,0,-5\mid-3)$ and row 3 becomes $(0,0,0,4\mid 4)$. Swap $R_2\leftrightarrow R_3$, scale $\tfrac14R_2\to R_2$, then $5R_2+R_3\to R_3$:

$$
\left(\begin{array}{cccc|c}
1 & -2 & 1 & 2 & 2 \\
0 & 0 & 0 & 1 & 1 \\
0 & 0 & 0 & -5 & -3
\end{array}\right)
\longrightarrow
\left(\begin{array}{cccc|c}
1 & -2 & 1 & 2 & 2 \\
0 & 0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0 & 2
\end{array}\right)
$$

The last row reads $0=2$: **no solution**.

> [!warning] Typo in the key's generic case
> The key writes "for $k\neq\pm2,1$ infinitely many solutions" on the generic case, which would exclude $k=-2$. Its own matrix for $k=-2$ gives infinitely many, and its final box says "$k\neq1,2$". I follow the final box.

> [!tip] Shortcut
> After the first elimination the whole question sits in the last row, $(k-1)(k+2)x_4=k+2$. At $k=1$ the coefficient is 0 and the right side is not, so no solution. At $k=-2$ both sides are 0, so it is on the "infinitely many" side. At $k=2$ the two remaining rows give incompatible equations for $x_4$ ($-5x_4=-3$ and $4x_4=4$).

### c. $k=2$, $a=0$

> [!success] Answer
> $(x_1,x_2,x_3,x_4)=(2s-t,\; s,\; t,\; 0)$ for any real $s,t$.

At $k=2$, $a=0$:

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

So $x_4=0$ and $x_1-2x_2+x_3=0$. Take $x_2=s$ and $x_3=t$ free: $x_1=2s-t$.

### d. True or false: "more equations than variables can never give a unique solution"

> [!success] Answer
> **False.**

During elimination some equations can turn into true statements $0=0$ (they were redundant), so the system may still have a unique solution. The key says this was seen in examples along the course.

> [!example] An example (mine, not from the key)
> $x+y=2$, $x-y=0$, $2x+y=3$: 3 equations, 2 unknowns. The first two give $x=y=1$, and the third holds too ($2+1=3$). The solution $(1,1)$ is unique.

> [!tip] What is true
> With **more unknowns than equations**, a system cannot have a *unique* solution. The statement in the question swaps the two cases.

---

## Q3 — $z=\ln x+\ln y+\ln(3-x-y)$ (30 points)

### a. Domain and its graph

> [!success] Answer
> $x>0,\ y>0,\ y<3-x$ (an open triangle).

Each log needs a positive argument: $x>0$, $y>0$, $3-x-y>0$ (equivalently $y<3-x$). This is the open triangle with vertices $(0,0)$, $(3,0)$, $(0,3)$; the boundary is **not** included (dashed in the figure). See [[Domain of a Two-Variable Function]].

![[PP26_q3_domain.png|480]]

*The domain is the interior of the triangle cut off by the axes and the line $y=3-x$.*

### b. Slope of the level curve $z=\ln\frac49$ at $x=2$, $y>\frac12$

> [!success] Answer
> $$y'\left(2,\tfrac23\right) = -\frac53$$

**The point.** On the curve, $\ln\dfrac49 = \ln x + \ln y + \ln(3-x-y)$. Put $x=2$ and combine logs:

$$
\ln\tfrac49 = \ln 2 + \ln y + \ln(1-y) = \ln\big(2y(1-y)\big) \;\Rightarrow\; \frac49 = 2y(1-y) .
$$

So $2 = 9y - 9y^2$, i.e. $9y^2-9y+2=0$, giving $y=\tfrac13$ or $y=\tfrac23$. With $y>\tfrac12$: $y=\tfrac23$. The point is $\left(2,\tfrac23\right)$.

**The slope.** Differentiate the curve equation with respect to $x$, treating $y$ as a function of $x$ ([[Implicit Differentiation]]):

$$
0 = \frac1x + \frac{y'}{y} + \frac{-1-y'}{3-x-y} .
$$

At $\left(2,\tfrac23\right)$: $3-x-y=\tfrac13$, so

$$
0 = \frac12 + \frac{3}{2}\,y' + 3\,(-1-y') .
$$

Multiply by 2: $0 = 1 + 3y' - 6 - 6y'$, so $3y'=-5$ and $y'=-\tfrac53$.

### c. Extreme point and its type

> [!success] Answer
> Critical point $(1,1)$, a **maximum** (value $f(1,1)=0$).

**First-order conditions** ([[Critical Point]]):

$$
z_x = \frac1x - \frac{1}{3-x-y} = 0 \Rightarrow 3-x-y = x \Rightarrow y = 3-2x,
$$

$$
z_y = \frac1y - \frac{1}{3-x-y} = 0 \Rightarrow 3-x-y = y \Rightarrow x = 3-2y .
$$

Substitute $y=3-2x$ into $x=3-2y$: $x = 3-2(3-2x) = -3+4x$, so $3x=3$, $x=1$, $y=1$. The point $(1,1)$ is inside the domain ($1+1<3$).

**Second-order test** ([[Second Derivative Test]]):

$$
A = z_{xx} = -\frac1{x^2} - \frac{1}{(3-x-y)^2} = -1-1=-2, \qquad B = z_{xy} = -\frac{1}{(3-x-y)^2} = -1, \qquad C = z_{yy} = -\frac1{y^2}-\frac1{(3-x-y)^2} = -2 .
$$

$$
\Delta = AC - B^2 = 4-1 = 3 > 0, \qquad A<0 \;\Rightarrow\; \text{maximum.}
$$

> [!tip] Intuition
> The three arguments $x$, $y$ and $3-x-y$ add to 3, and $\ln$ rewards balance: the product $x\cdot y\cdot(3-x-y)$ is largest when all three equal 1. That is exactly $(1,1)$, where $z=\ln1=0$. This remark is mine.

### d. Tangent line to $y=x^{\ln x}$ at $x=e$

> [!success] Answer
> $$y = 2x - e$$

The key says this question is from homework exercise 5, question 4.

**The point.** $y(e)=e^{\ln e}=e^{1}=e$, so the point is $(e,e)$.

**The slope** by [[Logarithmic Differentiation]]. Take logs: $\ln y=\ln x\cdot\ln x=(\ln x)^2$. Differentiate:

$$
\frac{y'}{y} = 2\ln x\cdot\frac1x \;\Rightarrow\; y' = y\cdot\frac{2\ln x}{x} .
$$

At $x=e$: $y'=e\cdot\dfrac{2\cdot1}{e}=2$.

**The line.** $y-e=2(x-e)$, so $y=2x-e$.

---

## Q4 — The function $f(x)=\ln x+\dfrac1x$ (25 points)

### a. Domain

> [!success] Answer
> $x>0$.

$\ln x$ needs $x>0$, and $\dfrac1x$ needs $x\neq0$. Together: $x>0$.

### b. $\displaystyle\lim_{x\to0^+}x\ln x$

> [!success] Answer
> $0$.

This is $0\cdot(-\infty)$, an [[Indeterminate Form]]. The key notes it was solved in class. Rewrite as a fraction and use [[L'Hopital's Rule]]:

$$
\lim_{x\to0^+}\frac{\ln x}{x^{-1}} = \lim_{x\to0^+}\frac{1/x}{-1/x^{2}} = \lim_{x\to0^+}(-x) = 0 .
$$

### c. $\displaystyle\lim_{x\to0^+}f(x)$

> [!success] Answer
> $\infty$.

Put the terms over $x$ and use part b:

$$
\ln x + \frac1x = \frac{x\ln x + 1}{x} \;\xrightarrow{\,x\to0^+\,}\; \frac{0+1}{0^+} = \infty .
$$

So $x=0$ is a [[Vertical Asymptote]]. (The $\tfrac1x$ term beats $\ln x$ because $x\ln x\to0$.)

### d. Relative extreme points

> [!success] Answer
> A relative **minimum** at $x=1$ (value $f(1)=1$).

$$
f'(x) = \frac1x - \frac1{x^2} = \frac{x-1}{x^2} = 0 \;\Rightarrow\; x=1 .
$$

$$
f''(x) = -\frac1{x^2}+\frac{2}{x^3} \;\Rightarrow\; f''(1) = -1+2 = 1 > 0 \;\Rightarrow\; \text{minimum.}
$$

### e. Global extreme points on $[\tfrac12,\infty)$

> [!success] Answer
> **Global minimum** at $x=1$ (value $1$). **No global maximum.**

The interval $[\tfrac12,\infty)$ contains $x=1$, the only relative extremum, and it is a minimum, so it is the global minimum. Compare it with the left endpoint:

$$
f\!\left(\tfrac12\right)=\ln\tfrac12+2\approx1.3069 > f(1)=1 .
$$

For the maximum: $\displaystyle\lim_{x\to\infty}\left(\ln x+\frac1x\right)=\infty$, so $f$ is unbounded above and there is **no global maximum** (the left endpoint value $1.3069$ is only a local maximum on the interval).

![[PP26_q4_ln_x_plus_1_over_x.png|560]]

*The curve falls from $f(\tfrac12)\approx1.31$ to the minimum at $(1,1)$, then rises without bound.*

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | $f_y$ at $(0,5)$ | $10$: 6th type B diamond adds about \$10,000 |
| Q1b | $f_x$ and cross section $y=0$ | $f_x(1,0)=0$; tangent $z=e^{-1}$, $y=0$ |
| Q1c | $f_x=f_y$ at $y=0$ | $x=1$ |
| Q2a | homogeneous, 3 eq, 4 unknowns | Infinitely many |
| Q2b | last row of the echelon form | Infinitely many for $k\neq1,2$; none for $k=1,2$ |
| Q2c | $k=2$, $a=0$ | $(2s-t,\,s,\,t,\,0)$ |
| Q2d | redundant equations | False |
| Q3a | three log arguments positive | Open triangle $x>0$, $y>0$, $y<3-x$ |
| Q3b | solve for $y$, implicit differentiation | $y=\tfrac23$, $y'=-\tfrac53$ |
| Q3c | first-order conditions, second derivative test | $(1,1)$ is a maximum |
| Q3d | logarithmic differentiation | $y=2x-e$ |
| Q4a | log and denominator | $x>0$ |
| Q4b | L'Hopital | $0$ |
| Q4c | $(x\ln x+1)/x$ | $\infty$ |
| Q4d | $f'=0$, $f''(1)>0$ | Relative min at $x=1$ |
| Q4e | one critical point, unbounded above | Global min at $x=1$; no global max |

## Related Notes

- Hub: [[Maths for Economists B]]
- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_05-Domains and Contour Lines of Two-Variable Functions]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_07-Applications of Partial Derivatives]], [[PS_08-Local Extrema and Critical Points]], [[PS_12-Systems with Parameters]]
