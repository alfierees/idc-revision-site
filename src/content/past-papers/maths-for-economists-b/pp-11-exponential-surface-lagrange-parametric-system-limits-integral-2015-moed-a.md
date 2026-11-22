---
title: "Exponential Surface, Lagrange, Parametric System, Limits & Integral (2015 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2015)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - partial-derivatives
  - implicit-differentiation
  - lagrange-multipliers
  - global-extrema
  - limits
  - integration
  - parametric-system
aliases:
  - Math II 2015 Moed A
  - Maths B Moed A 2015
  - PP11 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Exponential Surface, Lagrange, Parametric System, Limits & Integral (2015 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2015)**, Maths for Economists B, Hever Schulberg. 3 hours, 3 questions, non-graphic calculator, no other material. (Only three questions are printed on this paper.)
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (5 pages, every part solved). The paper has **three** questions, not four, and Q1 and Q3 chain their parts. No question is AI-solved; my own extra checks are marked as tips.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Partial derivatives of $e^{x^2-y^2}+6x+ky$ to find $k$; a level curve and its horizontal tangent ([[Cross Section of a Surface]], [[Implicit Differentiation]]); a [[Lagrange Multiplier Method]] problem | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q2 | Meaning of $y'$ on a profit contour; a [[Global Extremum]] on $[3,8]$; a limit as $x\to-\infty$; a rational integral | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q3 | A 3 by 3 [[Parametric System]]: unique or no solution by $k$, a condition $x_1=x_3$, and a true/false on eliminating rows | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the two partials of the exponent are $2x$ and $-2y$, so every part is the chain rule applied to $e^{x^2-y^2}$.
> - Q2: ignore the setting, spot the technique (contour slope, endpoints, kill the exponential, split the fraction).
> - Q3: row-reduce once with $k$ in place, then ask which $k$ makes a pivot vanish.

---

## Q1 — The surface $f(x,y)=e^{x^2-y^2}+6x+ky$

### a. Find $k$ from $f_x(2,1)=-2f_y(2,1)$

> [!success] Answer
> $k=-3$.

$$
f_x = e^{x^2-y^2}\cdot 2x + 6, \qquad f_y = e^{x^2-y^2}\cdot(-2y) + k .
$$

At $(2,1)$ the exponent is $4-1=3$:

$$
f_x(2,1) = 4e^{3}+6, \qquad f_y(2,1) = -2e^{3}+k .
$$

The condition $f_x = -2f_y$ gives

$$
4e^{3}+6 = -2\left(-2e^{3}+k\right) = 4e^{3}-2k \;\Rightarrow\; 6=-2k \;\Rightarrow\; k=-3 .
$$

The $e^3$ terms cancel, so the answer is a clean number.

### b. Tangent line(s) with slope $0$ to the curve $z=-8$ at points where $x=-3$

> [!success] Answer
> The only such point is $(-3,-3)$, and the tangent line is $y=-3$ (in the plane $z=-8$).

With $k=-3$ the curve is the level curve

$$
-8 = e^{x^2-y^2} + 6x - 3y .
$$

Differentiate implicitly with respect to $x$ (see [[Implicit Differentiation]]):

$$
e^{x^2-y^2}\left(2x-2y\,y'\right) + 6 - 3y' = 0 .
$$

A horizontal tangent means $y'=0$. At $x=-3$ this becomes

$$
e^{9-y^2}(-6) + 6 = 0 \;\Rightarrow\; e^{9-y^2}=1=e^0 \;\Rightarrow\; 9-y^2=0 \;\Rightarrow\; y=\pm3 .
$$

So the candidates are $(-3,3)$ and $(-3,-3)$. But a point must also lie **on the curve**, so check it in $-8 = e^{x^2-y^2}+6x-3y$:

- $(-3,-3)$: $e^{0} - 18 + 9 = 1-9 = -8$. True.
- $(-3,3)$: $e^{0} - 18 - 9 = -26 \neq -8$. False.

Only $(-3,-3)$ is on the curve. The tangent has slope $0$ through $(-3,-3)$: $y-(-3)=0\cdot(x+3)$, so $y=-3$.

> [!warning] Exam trap
> Solving $y'=0$ gave two $y$ values, but one is not on the curve. Always plug candidates back into the curve equation. The key does exactly this.

### c. Lagrange: extreme points of $f$ under $2x+\frac{k}{3}y=30$

> [!success] Answer
> The only critical point is $(20,10)$, and it is the **maximum** (the key compares it with another point on the constraint, $(0,-30)$).

With $k=-3$ the constraint is $2x-y=30$ and $f=e^{x^2-y^2}+6x-3y$. The Lagrangian is

$$
L(x,y,\lambda) = e^{x^2-y^2}+6x-3y-\lambda\,(2x-y-30) .
$$

First-order conditions:

$$
L_x = 2x\,e^{x^2-y^2}+6-2\lambda=0 \;\Rightarrow\; \lambda = x\,e^{x^2-y^2}+3 ,
$$

$$
L_y = -2y\,e^{x^2-y^2}-3+\lambda=0 \;\Rightarrow\; \lambda = 2y\,e^{x^2-y^2}+3 ,
$$

$$
L_\lambda = -(2x-y-30)=0 .
$$

Equating the two expressions for $\lambda$ cancels the $+3$ and the exponential (which is never zero):

$$
x\,e^{x^2-y^2} = 2y\,e^{x^2-y^2} \;\Rightarrow\; x=2y .
$$

Substitute into $2x-y=30$: $4y-y=30$, so $y=10$ and $x=20$. The critical point is $(20,10)$.

**Which type?** The key evaluates $f$ at $(20,10)$ and at a second point of the constraint, $(0,-30)$:

$$
f(0,-30)=e^{-900}+90\approx 90, \qquad f(20,10)=e^{300}+90 .
$$

Since $e^{300}$ is enormous, $(20,10)$ gives the larger value, so it is the **maximum**.

> [!tip] Intuition: why it is the maximum (my check)
> On the constraint $y=2x-30$ we have $6x-3y = 6x-6x+90=90$, a constant, and
> $$x^2-y^2 = x^2-(2x-30)^2 = -3x^2+120x-900 .$$
> So along the constraint $f = e^{-3x^2+120x-900}+90$. The exponent is a downward parabola with vertex at $x=20$ (value $300$), so the maximum is at $x=20$, $y=10$. As $x\to\pm\infty$ the exponential tends to $0$ and $f\to 90$ from above without reaching it, so there is **no minimum** (only an infimum of $90$). This agrees with the key.

---

## Q2 — Four unconnected parts

### a. Meaning of $y'(10,10)=-1.3$ on the profit curve $P(x,y)=3$

> [!success] Answer
> The farmer sells $10$ pounds of fruit and $10$ pounds of vegetables weekly and earns \$3,000. If he raises fruit sales by $1$ pound per week (from $10$ to $11$) and still wants a profit of \$3,000, he can **cut vegetable sales by about $1.3$ pounds**.

$P$ is in thousands of dollars, so $P=3$ is \$3,000. The curve $P(x,y)=3$ is a profit contour (see [[Cross Section of a Surface]]), and $y'=dy/dx$ is how much $y$ must change per extra unit of $x$ to stay on it. A slope of $-1.3$ means $y$ falls by about $1.3$ when $x$ rises by $1$. This is a linear approximation, hence "approximately".

### b. Global extremum of $y=\ln\!\left(\dfrac{x^x}{8^x}\right)$ on $[3,8]$

> [!success] Answer
> Global **minimum at $x=3$** (value $\approx-2.94$) and global **maximum at $x=8$** (value $0$).

Simplify with log rules first:

$$
y=\ln x^x-\ln 8^x = x\ln x - x\ln 8 .
$$

Differentiate (product rule on $x\ln x$):

$$
y' = \ln x + x\cdot\frac1x - \ln 8 = \ln x + 1 - \ln 8 .
$$

Set $y'=0$: $\ln x = \ln 8 - 1$, so $x = 8/e \approx 2.94$. This is **outside** $[3,8]$, so there is no interior critical point and the extrema are at the endpoints (the [[Closed Interval Rule]]):

$$
y(3) = 3\ln 3-3\ln 8 = 3\ln\tfrac38\approx -2.94, \qquad y(8) = 8\ln 8 - 8\ln 8 = 0 .
$$

For $x>8/e$ we have $y'>0$, so $y$ is increasing on all of $[3,8]$: smallest at the left end, largest at the right end.

![[PP11_q2b_x_ln_x_minus_x_ln_8.png|600]]

*The curve rises across the whole interval. The turning point $x=8/e$ falls just left of $x=3$.*

### c. $\displaystyle\lim_{x\to-\infty}\frac{(x+1)e^{2x}-\ln(x^2)}{x}$

> [!success] Answer
> $0$.

Direct substitution gives $\dfrac{-\infty\cdot 0-\infty}{-\infty}$, an [[Indeterminate Form]]. Split the fraction:

$$
\frac{(x+1)e^{2x}-\ln(x^2)}{x} = e^{2x}+\frac{e^{2x}}{x}-\frac{\ln(x^2)}{x} .
$$

- $e^{2x}\to e^{-\infty}=0$.
- $\dfrac{e^{2x}}{x}\to\dfrac{0}{-\infty}=0$.
- For $\dfrac{\ln(x^2)}{x}$ it is $\dfrac{\infty}{-\infty}$, so use [[L'Hopital's Rule]]: the derivative of $\ln(x^2)$ is $\dfrac{2x}{x^2}=\dfrac2x$, and the derivative of $x$ is $1$. So the limit is $\displaystyle\lim_{x\to-\infty}\frac2x = 0$.

(Note $\ln(x^2)$ is defined for negative $x$ because $x^2>0$.) The total is $0+0-0=0$.

### d. $\displaystyle\int\left(\frac{x+3}{x}\right)^2dx$

> [!success] Answer
> $x+6\ln|x|-\dfrac9x+C$.

Rewrite and expand:

$$
\left(\frac{x+3}{x}\right)^2=\left(1+\frac3x\right)^2 = 1+\frac6x+\frac9{x^2}=1+\frac6x+9x^{-2} .
$$

Integrate term by term:

$$
\int\left(1+\frac6x+9x^{-2}\right)dx = x+6\ln|x|+9\cdot\frac{x^{-1}}{-1}+C = x+6\ln|x|-\frac9x+C .
$$

---

## Q3 — The system with parameter $k$

$$
\begin{cases}
kx_1+x_2+(k+1)x_3=6\\
x_1+x_2+(k+1)x_3=5\\
3x_1+3x_2+3x_3=9
\end{cases}
$$

### a. Unique solution, and no solution

> [!success] Answer
> Unique solution: $k\neq0$ and $k\neq1$. No solution: $k=0$ and $k=1$. (Infinitely many: never.)

Write the [[Augmented Matrix]] and swap $R_1\leftrightarrow R_2$ to get a leading $1$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{ccc|c}1&1&k+1&5\\k&1&k+1&6\\3&3&3&9\end{array}\right)
$$

Apply $-kR_1+R_2\to R_2$ and $-3R_1+R_3\to R_3$:

$$
\left(\begin{array}{ccc|c}1&1&k+1&5\\0&1-k&(k+1)(1-k)&6-5k\\0&0&-3k&-6\end{array}\right)
$$

The last row says $-3k\,x_3=-6$, and the middle row needs $1-k\neq0$ to give $x_2$. The key divides by $1-k$ and by $-3k$ to reach

$$
\left(\begin{array}{ccc|c}1&1&k+1&5\\0&1&1+k&\frac{6-5k}{1-k}\\0&0&1&\frac2k\end{array}\right)
$$

which is a full set of pivots when $k\neq1$ and $k\neq0$: a **unique solution**. The two excluded values must be checked separately:

- $k=0$: last row is $(0\;0\;0\,|\,-6)$, i.e. $0=-6$. **No solution.**
- $k=1$: the middle row is $(0\;0\;0\,|\,1)$, i.e. $0=1$. **No solution.**

### b. Unique solution with $x_1=x_3$

> [!success] Answer
> $k=2$.

Continue the reduction for $k\neq0,1$ with $-R_2+R_1\to R_1$ (the key shows $x_3$ in the last row and $x_1$ in the first):

$$
x_3=\frac2k, \qquad x_1=\frac{-1}{1-k} .
$$

(Check of $x_1$: $5-\dfrac{6-5k}{1-k}=\dfrac{5-5k-6+5k}{1-k}=\dfrac{-1}{1-k}$.) Setting $x_1=x_3$:

$$
\frac{-1}{1-k}=\frac2k \;\Rightarrow\; -k = 2(1-k) = 2-2k \;\Rightarrow\; k=2 .
$$

> [!example] Check at $k=2$
> $x_1=\dfrac{-1}{1-2}=1$ and $x_3=\dfrac22=1$. Then $x_2=\dfrac{6-10}{1-2}-(1+2)\cdot1=4-3=1$. The first equation: $2\cdot1+1+3\cdot1=6$. True.

### c. True or false: a true statement ($0=0$) during elimination means infinitely many solutions

> [!success] Answer
> **False.**

A row $0=0$ only says that one equation was redundant. If the system started with **more equations than variables**, removing a redundant equation can still leave a unique solution, or a different row may give a false statement like $0=1$ (no solution). So a $0=0$ row does not by itself imply infinitely many solutions.

> [!tip] Intuition
> Infinitely many solutions need *fewer pivots than variables*, not just a zero row. Count pivots after reducing.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | partials, equate | $k=-3$ |
| Q1b | implicit differentiation, check on curve | tangent $y=-3$ at $(-3,-3)$ |
| Q1c | Lagrange | $(20,10)$, maximum |
| Q2a | contour slope | cut vegetables by about $1.3$ lb |
| Q2b | log rules, closed interval | min at $x=3$ ($\approx-2.94$), max at $x=8$ ($0$) |
| Q2c | split, L'Hopital | $0$ |
| Q2d | expand, integrate | $x+6\ln\lvert x\rvert-9/x+C$ |
| Q3a | row reduction | unique if $k\ne0,1$; none if $k=0,1$ |
| Q3b | solve for $x_1,x_3$ | $k=2$ |
| Q3c | pivot count | False |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
