---
title: "Implicit Slope, Diamond Profit, Parametric System & Sum Constant (2013 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2013)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - implicit-differentiation
  - global-extrema
  - limits
  - partial-derivatives
  - lagrange-multipliers
  - parametric-system
  - summation
aliases:
  - Math II 2013 Moed A
  - Maths B Moed A 2013
  - PP07 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Implicit Slope, Diamond Profit, Parametric System & Sum Constant (2013 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2013)**, Maths for Economists B, Hever Schulberg. 3 hours, 3 questions, non-graphic calculator only (no formula sheet mentioned). Marks per part are not printed.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]
> Related problem sets: [[PS_01-Global Extrema and Optimisation]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_07-Applications of Partial Derivatives]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (6 pages, titled "Solution to 2013 A"). Every part has a worked official answer, so nothing in this note is AI-solved. The paper has only **three** questions. Where the key is terse I expanded the steps without changing any answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Domain of a log, [[Implicit Differentiation]] at a point, rewriting an implicit curve as a function and finding its [[Global Extremum]] on a closed interval, and a limit of the form $0^0$ | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q2 | Slope of a cross-section curve with its economic meaning ([[Marginal Profit]]), equal marginal profits when one product is not sold, and a three-variable [[Lagrange Multiplier Method]] problem | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q3 | A 3 by 3 [[Parametric System]]: can it be homogeneous, is the zero vector a solution, which $c$ gives infinitely many solutions, the solution set, and a summation that turns out constant | [[Lec_12-Systems with Parameters]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_01-Global Extrema, Optimization and Summation]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the same curve is given twice (implicitly, then explicitly). Use whichever form makes the step easy. On a closed interval with no interior critical point, the extrema sit at the two ends.
> - Q2: "sold only type A" means $y=0$. "Marginal profits are equal" means $f_x=f_y$. Both are one-line conditions.
> - Q3: the constant term $-1$ in the second equation kills homogeneity, so the zero vector can never solve it. Everything else is reading the last row of the echelon form.

---

## Q1 — Domain, implicit slope, extrema and a limit

### a. Domain of $y=\ln(-x)$

> [!success] Answer
> $x<0$.

A logarithm needs a strictly positive argument, so $-x>0$, i.e. $x<0$.

### b. Slope of the tangent line to $1-xy+x\ln(-x)=0$ at $x=-\tfrac1e$

> [!success] Answer
> $y'\!\left(-\tfrac1e,\,-1-e\right) = -e-e^2 \approx -10.11$.

The key offers two routes ("first find the explicit form, or use the given implicit one") and carries out the implicit one. See [[Implicit Differentiation]] and [[Tangent Line]].

**Step 1: find $y$ at $x=-1/e$.** Substitute into the curve. Here $\ln(-x)=\ln(1/e)=-1$:

$$
1 - \left(-\tfrac1e\right)y + \left(-\tfrac1e\right)(-1) = 0 \;\Rightarrow\; 1 + \tfrac{y}{e} + \tfrac1e = 0 \;\Rightarrow\; y = -1-e .
$$

**Step 2: differentiate the equation with respect to $x$**, treating $y$ as a function of $x$. The product rule on $-xy$ gives $-y - xy'$, and on $x\ln(-x)$ gives $\ln(-x) + x\cdot\frac{1}{-x}\cdot(-1) = \ln(-x)+1$:

$$
-y - xy' + \ln(-x) + 1 = 0 .
$$

**Step 3: plug in $x=-1/e$, $y=-1-e$, $\ln(-x)=-1$:**

$$
(1+e) + \tfrac1e\,y' - 1 + 1 = 0 \;\Rightarrow\; \tfrac1e\,y' = -(1+e) \;\Rightarrow\; y' = -e-e^2 \approx -10.11 .
$$

> [!tip] Intuition
> The slope is steeply negative because the point $x=-1/e$ is the right-hand end of the interval used in part c, where the curve plunges toward its minimum (see the figure below).

### c. The same curve as an explicit function, and its global extrema on $\left[-5,-\tfrac1e\right]$

> [!success] Answer
> The curve is $y=\dfrac1x+\ln(-x)$. Global **maximum** $y(-5)=-\tfrac15+\ln5\approx1.41$. Global **minimum** $y\!\left(-\tfrac1e\right)=-1-e\approx-3.72$.

**Show it is identical.** On the domain, $x\neq0$ (from part a, $x<0$), so we may divide $1-xy+x\ln(-x)=0$ by $x$:

$$
\frac1x - y + \ln(-x) = 0 \;\Rightarrow\; y = \frac1x + \ln(-x) .
$$

**Find the extrema** (see [[Closed Interval Rule]]). Differentiate; recall $\frac{d}{dx}\ln(-x)=\frac1x$:

$$
y' = -\frac1{x^2} + \frac1x = \frac{x-1}{x^2} .
$$

Set $y'=0$: $x=1$. That is **outside** the interval $\left[-5,-\tfrac1e\right]$, so there is no critical point inside it. Since $x-1<0$ for every $x<0$, $y'<0$ throughout: the function is **decreasing**, so the extrema are at the endpoints:

| Endpoint | Value | Verdict |
|---|---|---|
| $x=-\tfrac1e$ | $-1-e\approx-3.72$ | global minimum |
| $x=-5$ | $-\tfrac15+\ln5\approx1.41$ | global maximum |

![[PP07_q1_decreasing_on_interval.png|600]]

*The curve falls from the left end $x=-5$ to the right end $x=-1/e$, so the maximum is at the left end and the minimum at the right end.*

> [!warning] Reading the key
> The handwritten key writes the slope box as "$e-e^2$" but the number beside it is $-10.11$, and $-e-e^2=-2.718-7.389=-10.107$. So the answer is $-e-e^2$. Check: $y'(-1/e)=-e^2+(-e)$ from the explicit formula $\frac{x-1}{x^2}$ gives $(-1/e-1)\cdot e^2=-e-e^2$, which agrees.

### d. $\displaystyle\lim_{x\to0^+}\left(x^x+1\right)$

> [!success] Answer
> $2$.

Write $x^x=e^{x\ln x}$ (see [[Logarithmic Differentiation]]). The exponent is a $0\cdot(-\infty)$ [[Indeterminate Form]]; rewrite it as a fraction and apply [[L'Hopital's Rule]]:

$$
\lim_{x\to0^+} x\ln x = \lim_{x\to0^+}\frac{\ln x}{x^{-1}} = \lim_{x\to0^+}\frac{1/x}{-x^{-2}} = \lim_{x\to0^+}(-x) = 0 .
$$

Therefore

$$
\lim_{x\to0^+}\left(x^x+1\right) = e^{0}+1 = 2 .
$$

---

## Q2 — Diamond dealer

Monthly profit (in thousands of dollars) from $x$ diamonds of type A and $y$ of type B:

$$
z = f(x,y) = x\,e^{-x+y^2} + y^2 .
$$

### a. Slope of the curve $z=f(0,y)$ at $y=5$

> [!success] Answer
> $z'(5)=f_y(0,5)=10$. When no type A diamonds are sold, the 6th type B diamond raises profit by about **\$10,000**.

Fixing $x=0$ gives the curve

$$
z = f(0,y) = 0 + y^2 = y^2 \;\Rightarrow\; z' = 2y \;\Rightarrow\; z'(5) = 10 .
$$

This is also the partial derivative $f_y(0,5)=10$, a [[Marginal Profit]]. Profit is measured in thousands, so the meaning is: starting from 5 type B diamonds and no type A, selling one more type B diamond adds roughly $10$ thousand dollars, that is \$10,000. (The key words it as "the 6th type B diamond".)

### b. A month with only type A diamonds and $f_x=f_y$

> [!success] Answer
> $x=1$ diamond of type A.

"Only type A sold" means $y=0$. The two marginal profits are

$$
f_x = e^{-x+y^2}(1-x), \qquad f_y = 2xy\,e^{-x+y^2} + 2y .
$$

The key differentiates by the product rule: $f_x = 1\cdot e^{-x+y^2} + x\,e^{-x+y^2}(-1)$, and $f_y = x\,e^{-x+y^2}\cdot2y + 2y$. Setting $f_x=f_y$ and plugging $y=0$:

$$
e^{-x}(1-x) = 0 \;\Rightarrow\; x=1 .
$$

(The factor $e^{-x}$ is never zero, so only $1-x$ can vanish. At $y=0$ we have $f_y=0$, so the condition says the type A marginal profit is also zero.)

### c. Extremum of $f(x,y,z)=x+y+z$ under $xy+z=1$

> [!success] Answer
> Extremum value $2$, at $(x,y,z)=(1,1,0)$.

Build the Lagrangian (see [[Lagrangian]] and [[Lagrange Multiplier Method]]):

$$
L(x,y,z,\lambda) = x+y+z-\lambda\,(xy+z-1) .
$$

The first-order conditions are:

$$
L_x = 1-\lambda y = 0, \qquad L_y = 1-\lambda x = 0, \qquad L_z = 1-\lambda = 0, \qquad L_\lambda = -(xy+z-1) = 0 .
$$

- $L_z=0$ gives $\lambda=1$.
- Then $L_x=0$ gives $y=1$ and $L_y=0$ gives $x=1$.
- The constraint gives $1\cdot1+z=1$, so $z=0$.

$$
f(1,1,0) = 1+1+0 = 2 .
$$

The question says we need not decide whether it is a minimum or maximum.

---

## Q3 — A system with a parameter $c$

$$
\begin{cases}
c\,x_1 + c\,x_2 + x_3 - c = 0 \\
-c\,x_1 - x_2 + c\,x_3 - 2x_3 + 1 = 0 \\
c\,x_1 + 2c\,x_2 - x_2 + 2c\,x_3 - x_3 - c = 0
\end{cases}
$$

Collect the unknowns on the left and constants on the right. The augmented matrix is (this is what the key writes first):

$$
\left(\begin{array}{ccc|c}
c & c & 1 & c \\
-c & -1 & c-2 & -1 \\
c & 2c-1 & 2c-1 & c
\end{array}\right)
$$

### a. Can the system ever be homogeneous?

> [!success] Answer
> No, for no value of $c$.

A [[Homogeneous System]] has all right-hand sides equal to $0$. The right-hand side of the second equation is $-1$, whatever $c$ is, so the system is **never homogeneous**.

### b. Is $(0,0,0)$ a solution?

> [!success] Answer
> No.

Because the system is not homogeneous, substituting $x_1=x_2=x_3=0$ into the second equation gives $1=0$, a false statement. (Equivalently, the zero vector solves a system only if all constants are $0$.)

### c. Value of $c$ with infinitely many solutions

> [!success] Answer
> $c=1$. (For $c=0$ there is no solution, and for every other $c$ the solution is unique.)

Reduce with [[Elementary Row Operations]] (see [[Gauss-Jordan Elimination]] and [[Augmented Matrix]]). Using $R_2\to R_1+R_2$ and $R_3\to -R_1+R_3$:

$$
\left(\begin{array}{ccc|c}
c & c & 1 & c \\
0 & c-1 & c-1 & c-1 \\
0 & c-1 & 2c-2 & 0
\end{array}\right)
$$

**Case $c\neq0$ and $c\neq1$.** Divide $R_1$ by $c$, then $R_2$ by $c-1$, then eliminate:

$$
\left(\begin{array}{ccc|c}
1 & 1 & \tfrac1c & 1 \\
0 & 1 & 1 & 1 \\
0 & 0 & c-1 & 1-c
\end{array}\right)
$$

The last pivot $c-1$ is nonzero, so there is a **unique solution** (the key notes this is not what was asked).

**Case $c=0$.** The matrix becomes $\left(\begin{smallmatrix}0&0&1&|&0\\0&-1&-1&|&-1\\0&-1&-2&|&0\end{smallmatrix}\right)$. Row operations lead to a row $\left(0\;0\;0\mid1\right)$, which says $0=1$: **no solution**.

**Case $c=1$.** The matrix collapses to

$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{array}\right)
$$

Only one equation survives, with three unknowns, so there are **infinitely many solutions**. (A [[Parametric System]] check: the determinant of the coefficient matrix is $c(c-1)^2$, which vanishes at exactly $c=0$ and $c=1$.)

| $c$ | Outcome |
|---|---|
| $c\neq0,\,1$ | unique solution |
| $c=0$ | no solution |
| $c=1$ | infinitely many solutions |

### d. The solutions for $c=1$

> [!success] Answer
> $(x_1,x_2,x_3)=(1-t-m,\;t,\;m)$ for any real $t$ and $m$.

The only equation is $x_1+x_2+x_3=1$. Choose the two free variables $x_2=t$ and $x_3=m$ (the [[Reduced Echelon Form]] has one leading entry, in column 1). Then $x_1=1-t-m$.

### e. Show $\displaystyle\sum_{j=2}^{4}2\,(x_{j-1}+j)$ is constant and find it

> [!success] Answer
> The sum equals $20$ for every solution.

Expand the sum (see [[Lec_01-Global Extrema, Optimization and Summation]]):

$$
\sum_{j=2}^{4}2\,(x_{j-1}+j) = 2\Big[(x_1+2)+(x_2+3)+(x_3+4)\Big] = 2\,(x_1+x_2+x_3+9) .
$$

Use the solution from part d: $x_1+x_2+x_3=(1-t-m)+t+m=1$. The parameters cancel, so

$$
2\,(1+9) = 20 .
$$

> [!tip] Intuition
> Every solution lies on the plane $x_1+x_2+x_3=1$, and the sum only depends on $x_1+x_2+x_3$. Any such quantity is automatically constant.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | log argument positive | $x<0$ |
| Q1b | implicit differentiation | $-e-e^2\approx-10.11$ |
| Q1c | divide by $x$, closed-interval rule | $y=\tfrac1x+\ln(-x)$; max $1.41$ at $x=-5$, min $-1-e$ at $x=-1/e$ |
| Q1d | $e^{x\ln x}$, L'Hopital | $2$ |
| Q2a | $f_y(0,5)$ | $10$ (about \$10,000 per extra type B) |
| Q2b | $y=0$, $f_x=f_y$ | $x=1$ |
| Q2c | Lagrange | $(1,1,0)$, value $2$ |
| Q3a | constant $-1$ in eq. 2 | never homogeneous |
| Q3b | substitute zero vector | not a solution |
| Q3c | row reduction | $c=1$ |
| Q3d | one free equation | $(1-t-m,\,t,\,m)$ |
| Q3e | expand sum, use $x_1+x_2+x_3=1$ | $20$ |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
