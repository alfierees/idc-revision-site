---
title: "Critical Points with Parameters, Lagrange, Implicit dp-dt, x to ln x & Parametric System (2012 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2012)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - critical-points
  - second-derivative-test
  - saddle-point
  - lagrange-multipliers
  - implicit-differentiation
  - logarithmic-differentiation
  - parametric-system
aliases:
  - Math II 2012 Moed A
  - Maths B Moed A 2012
  - PP06 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Critical Points with Parameters, Lagrange, Implicit dp-dt, x to ln x & Parametric System (2012 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2012)**, Maths for Economists B, Hever Schulberg. 3 hours, 3 questions, non-graphic calculator only (no formula sheet mentioned). Marks per part are not printed.
> Builds on: [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]
> Related problem sets: [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (3 pages, titled "Solution for 2012 A"). Every part has an official answer. The paper has only **three** questions. I added short checks of my own where the key is terse; none changes an official answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A [[Critical Point]] used to solve for two parameters, local extrema with the [[Second Derivative Test]], and a [[Lagrange Multiplier Method]] problem | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q2 | A point on a level curve and its slope $dp/dt$ by [[Implicit Differentiation]]; the derivative of $x^{f(0,-x)}=x^{\ln x}$ | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_02-Logarithmic Functions and Inverse Functions]] |
| Q3 | A 3 by 3 [[Parametric System]]: unique, infinitely many, or no solutions | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]] |

> [!tip] Intuition: the one move behind each question
> - Q1: "critical point" means both partial derivatives vanish there, which gives equations for the unknown parameters. With the parameters fixed, you are back to the standard classify-the-points routine.
> - Q2: on a curve $f(t,p)=k$, the slope is $dp/dt=-f_t/f_p$. For $g$, notice that $f(0,-x)$ collapses to $\ln x$.
> - Q3: eliminate, then read which pivots can vanish. The parameter values that kill a pivot are the only candidates for "no solution" or "infinitely many".

---

## Q1 — A cubic-quadratic function with parameters

$$
f(x,y) = -a x^3 - 3y^2 + 6xy + 3bx + by .
$$

### a. Values of $a$ and $b$ if $(5,\,5a)$ is a critical point

> [!success] Answer
> $a=2$, $b=30$.

The first partial derivatives are

$$
f_x = -3ax^2 + 6y + 3b, \qquad f_y = -6y + 6x + b .
$$

At $(5,5a)$ both must vanish:

$$
f_x(5,5a) = -75a + 30a + 3b = -45a+3b = 0 \;\Rightarrow\; b = 15a ,
$$

$$
f_y(5,5a) = -30a + 30 + b = 0 \;\Rightarrow\; b = 30a-30 .
$$

Equate: $15a = 30a-30$, so $a=2$ and then $b=30$.

### b. Relative extrema of $f$ for $a=2$, $b=30$

> [!success] Answer
> $(-4,\,1)$ is a **saddle point**. $(5,\,10)$ is a **local maximum**.

With $a=2$, $b=30$ the function is

$$
f(x,y) = -2x^3 - 3y^2 + 6xy + 90x + 30y .
$$

**First-order conditions.**

$$
f_x = -6x^2 + 6y + 90 = 0 \;\Rightarrow\; y = x^2 - 15, \qquad f_y = -6y + 6x + 30 = 0 \;\Rightarrow\; y = x+5 .
$$

Equate: $x^2-15 = x+5$, so $x^2-x-20=0$, i.e. $(x-5)(x+4)=0$. Hence $x=5$ (with $y=10$) or $x=-4$ (with $y=1$).

**Second derivatives** (see [[Second Partial Derivative]]):

$$
f_{xx} = -12x, \qquad f_{xy} = 6, \qquad f_{yy} = -6 .
$$

| Point | $A=f_{xx}$ | $B=f_{xy}$ | $C=f_{yy}$ | $\Delta=AC-B^2$ | Type |
|---|---|---|---|---|---|
| $(-4,1)$ | $48$ | $6$ | $-6$ | $48(-6)-36=-324<0$ | [[Saddle Point]] |
| $(5,10)$ | $-60$ | $6$ | $-6$ | $(-60)(-6)-36=324>0$ and $A<0$ | local maximum |

(The key writes $\Delta=48(-6)-36<0$ and $\Delta=(-60)(-6)-36>0$ without the final numbers, which are $-324$ and $324$.)

### c. Extremum for $a=0$, $b=6$ under $x+y=14$

> [!success] Answer
> The extremum is at $(10,\,4)$ and it is a **maximum**, with $f(10,4)=396$.

With $a=0$, $b=6$:

$$
f(x,y) = -3y^2 + 6xy + 18x + 6y .
$$

The Lagrangian (see [[Lagrangian]]) is

$$
L(x,y,\lambda) = -3y^2 + 6xy + 18x + 6y - \lambda\,(x+y-14) .
$$

First-order conditions:

$$
L_x = 6y + 18 - \lambda = 0, \qquad L_y = -6y + 6x + 6 - \lambda = 0, \qquad L_\lambda = -(x+y-14)=0 .
$$

Subtract the first from the second to remove $\lambda$:

$$
(-6y+6x+6)-(6y+18) = 0 \;\Rightarrow\; 6x - 12y - 12 = 0 \;\Rightarrow\; x = 2y+2 .
$$

Plug into the constraint: $2y+2+y=14$, so $y=4$ and $x=10$.

**Why it is a maximum.** The key compares the value with an arbitrary point on the line:

$$
f(10,4) = -48 + 240 + 180 + 24 = 396 > f(7,7) = -147 + 294 + 126 + 42 = 315 .
$$

I checked the whole line. Substitute $y=14-x$:

$$
f(x,\,14-x) = -9x^2 + 180x - 504 ,
$$

a downward parabola with vertex at $x=10$ and value $-900+1800-504=396$. So $(10,4)$ is the maximum along the constraint, not only better than one other point.

![[PP06_q1c_f_on_constraint.png|600]]

*The function $f$ along the line $x+y=14$. It peaks at $x=10$ (value 396), and the key's comparison point $(7,7)$ lies lower at 315.*

---

## Q2 — Level curve and a derivative of $x^{\ln x}$

$$
f(t,p) = t\,e^{\,p-t} + \ln(2t-p) .
$$

### a. The point $(e,e)$ is on the curve $f(t,p)=e+1$; find $dp/dt$ there

> [!success] Answer
> $\displaystyle \frac{dp}{dt}\bigg|_{(e,e)} = \frac{e-2}{e-1} \approx 0.42$.

**On the curve.**

$$
f(e,e) = e\cdot e^{0} + \ln(2e-e) = e + \ln e = e+1 . \checkmark
$$

**Differentiate** $e+1 = t\,e^{\,p-t} + \ln(2t-p)$ with respect to $t$, treating $p=p(t)$ (see [[Implicit Differentiation]]). The product rule on the first term and the chain rule on the second give:

$$
0 = e^{\,p-t} + t\,e^{\,p-t}\,(p'-1) + \frac{2-p'}{2t-p} .
$$

**Plug in** $t=p=e$, so $e^{p-t}=1$ and $2t-p=e$:

$$
0 = 1 + e\,(p'-1) + \frac{2-p'}{e} .
$$

Multiply through by $e$ and collect the $p'$ terms:

$$
0 = e + e^2 p' - e^2 + 2 - p' \;\Rightarrow\; p'\,(e^2-1) = e^2 - e - 2 .
$$

Factor: $e^2-e-2=(e+1)(e-2)$ and $e^2-1=(e+1)(e-1)$, so

$$
p' = \frac{(e+1)(e-2)}{(e+1)(e-1)} = \frac{e-2}{e-1} .
$$

> [!tip] Check by the formula
> $dp/dt=-f_t/f_p$. At $(e,e)$: $f_t = 1-e+\tfrac2e$ and $f_p = e-\tfrac1e$. Then $-\dfrac{1-e+2/e}{e-1/e} = \dfrac{e^2-e-2}{e^2-1}$, the same.

### b. Derivative of $g(x)=x^{f(0,-x)}$ at $x=e$

> [!success] Answer
> $g'(e)=2$.

First simplify the exponent: $f(0,-x) = 0\cdot e^{-x} + \ln\!\left(0-(-x)\right) = \ln x$. So

$$
g(x) = x^{\ln x} .
$$

The key shows two methods ([[Logarithmic Differentiation]]).

**Method A (rewrite with $e$).** $g(x) = e^{\ln x\cdot\ln x} = e^{(\ln x)^2}$, hence

$$
g'(x) = e^{(\ln x)^2}\cdot 2\ln x\cdot\frac1x \;\Rightarrow\; g'(e) = e\cdot2\cdot\frac1e = 2 .
$$

**Method B (take logs).** Let $y=x^{\ln x}$. Then $\ln y = (\ln x)^2$, so

$$
\frac{y'}{y} = \frac{2\ln x}{x} \;\Rightarrow\; y' = x^{\ln x}\cdot\frac{2\ln x}{x} \;\Rightarrow\; y'(e) = e\cdot\frac{2}{e} = 2 .
$$

---

## Q3 — System with parameter $k$

$$
\begin{cases}
k x_1 - 3x_1 + x_2 + k x_3 - k = -1 \\
x_1 + x_2 + k x_3 = k \\
3x_1 + 3x_2 + 6x_3 - k = 4
\end{cases}
$$

Move constants to the right and collect terms (the key's first matrix):

$$
\left(\begin{array}{ccc|c}
k-3 & 1 & k & k-1 \\
1 & 1 & k & k \\
3 & 3 & 6 & k+4
\end{array}\right)
$$

**Elimination.** Swap $R_1\leftrightarrow R_2$, then use $R_2\to-(k-3)R_1+R_2$ and $R_3\to-3R_1+R_3$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{ccc|c}
1 & 1 & k & k \\
0 & 4-k & 4k-k^2 & 4k-k^2-1 \\
0 & 0 & 6-3k & 4-2k
\end{array}\right)
$$

(Row 3: $k+4-3k = 4-2k$ and $6-3k$.) The two pivots that can vanish are $4-k$ and $6-3k$, so the special values are $k=4$ and $k=2$.

### a. Unique solution

> [!success] Answer
> $k\neq2$ and $k\neq4$.

If $k\neq4$, divide $R_2$ by $4-k$; if $k\neq2$, divide $R_3$ by $-3k+6$. Both pivots are then nonzero, so the third row gives $x_3=\dfrac{-2k+4}{-3k+6}=\dfrac23$ and the system has a unique solution. (The determinant of the coefficient matrix is $-3(k-4)(k-2)$, zero exactly at $k=2$ and $k=4$.)

### b. Infinitely many solutions

> [!success] Answer
> $k=2$.

For $k=2$, $R_2$ is $\left(0\;2\;4\mid3\right)$ and $R_3$ is $\left(0\;0\;0\mid0\right)$. After scaling $R_2$:

$$
\left(\begin{array}{ccc|c}
1 & 1 & 2 & 2 \\
0 & 1 & 2 & 1.5 \\
0 & 0 & 0 & 0
\end{array}\right)
$$

There are two pivots and three unknowns, so one free variable and infinitely many solutions. (Writing $x_3=t$: $x_2=1.5-2t$ and $x_1=0.5$.)

### c. No solution

> [!success] Answer
> $k=4$.

For $k=4$, the second row becomes $\left(0\;0\;0\mid-1\right)$ (since $4k-k^2-1=16-16-1=-1$), which says $0=-1$: a contradiction, so there is **no solution**. The third row $\left(0\;0\;-6\mid-4\right)$ is harmless; the second row alone rules the system out.

| $k$ | Outcome |
|---|---|
| $k\neq2,\,4$ | unique solution |
| $k=2$ | infinitely many solutions |
| $k=4$ | no solution |

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | $f_x=f_y=0$ at $(5,5a)$ | $a=2$, $b=30$ |
| Q1b | $\Delta$ test | $(-4,1)$ saddle, $(5,10)$ local max |
| Q1c | Lagrange | $(10,4)$ max, $f=396$ |
| Q2a | $-f_t/f_p$ | $\dfrac{e-2}{e-1}$ |
| Q2b | $f(0,-x)=\ln x$, then log differentiation | $2$ |
| Q3a | pivots nonzero | $k\neq2,4$ |
| Q3b | one zero row | $k=2$ |
| Q3c | row $0=-1$ | $k=4$ |

## Related notes

[[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
