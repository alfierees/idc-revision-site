---
title: "Implicit dp-dt, x ln squared x, Cost Critical Point & Parametric System (2011 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2011)"
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
  - critical-points
  - lagrange-multipliers
  - parametric-system
aliases:
  - Math II 2011 Moed A
  - Maths B Moed A 2011
  - PP04 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Implicit dp-dt, x ln squared x, Cost Critical Point & Parametric System (2011 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2011)**, Maths for Economists B, Hever Schulberg. 3 hours, 3 questions, non-graphic calculator only (no formula sheet mentioned). Marks per part are not printed.
> Builds on: [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]]
> Related problem sets: [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (6 pages, titled "Solution to 2011 A"). Every part has an official worked answer. The paper has only **three** questions. Where the key has a slip (a sign in the multiplier, an omitted case) I say so and keep the official final answers.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Slope $dp/dt$ on a level curve by [[Implicit Differentiation]]; [[Global Extremum]] of $f(x,x)\ln x$ on a closed interval; the limits $e^{f(x,x)}$ and $x^x$ at $0^+$ | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q2 | A cost function with a given [[Critical Point]]: find parameters, classify the points, then a [[Lagrange Multiplier Method]] problem | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q3 | A $3\times3$ [[Parametric System]] whose last two columns coincide up to scaling: no unique solution is possible | [[Lec_12-Systems with Parameters]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the diagonal $f(x,x)$ collapses a long expression to $x\ln x$, which is exactly the exponent in $x^x=e^{x\ln x}$. Parts b and c reuse that one simplification.
> - Q2: a critical point gives two linear equations in the parameters. A word of caution: production quantities are positive, so a critical point with a negative coordinate is not a feasible answer.
> - Q3: $x_2$ and $x_3$ always appear together as $x_2+x_3$ in equations 2 and 3, so at least one variable is always free. A unique solution is therefore impossible.

---

## Q1 — A level curve, a global extremum and two limits

$$
f(t,p) = t\,e^{p} + p\ln t - p\,e^{t} + 2p - 2t .
$$

### a. $(1,1)$ lies on $f(t,p)=0$; find $dp/dt$ there

> [!success] Answer
> $\dfrac{dp}{dt}\bigg|_{(1,1)} = \dfrac12$.

**On the curve.**

$$
f(1,1) = e + 0 - e + 2 - 2 = 0 . \checkmark
$$

**Differentiate** $0 = t\,e^{p} + p\ln t - p\,e^{t} + 2p - 2t$ with respect to $t$, with $p=p(t)$ (see [[Implicit Differentiation]]):

$$
0 = e^{p} + t\,e^{p}\,p' + p'\ln t + \frac{p}{t} - p'e^{t} - p\,e^{t} + 2p' - 2 .
$$

**Plug in** $t=p=1$, so $\ln t=0$ and $e^{p}=e^{t}=e$:

$$
0 = e + e\,p' + 0 + 1 - e\,p' - e + 2p' - 2 = 2p' - 1 \;\Rightarrow\; p' = \tfrac12 .
$$

(The $e$ terms cancel, as the key's crossed-out terms show.)

> [!tip] Check by the formula
> $dp/dt=-f_t/f_p$. At $(1,1)$: $f_t = e + 1 - e - 2 = -1$ and $f_p = e + 0 - e + 2 = 2$, so $dp/dt = -(-1)/2 = \tfrac12$.

### b. Global extremum of $y=f(x,x)\ln x$ on $[1,e^3]$

> [!success] Answer
> Global **minimum** $(1,\,0)$. Global **maximum** $(e^3,\,9e^3)$, with $9e^3\approx180.8$, at the end of the interval.

Put $t=p=x$ in $f$:

$$
f(x,x) = x e^{x} + x\ln x - x e^{x} + 2x - 2x = x\ln x .
$$

So

$$
y = x\ln x\cdot\ln x = x\,(\ln x)^2 .
$$

Differentiate with the product rule and the chain rule:

$$
y' = (\ln x)^2 + x\cdot 2\ln x\cdot\frac1x = (\ln x)^2 + 2\ln x = \ln x\,(\ln x + 2) .
$$

Set $y'=0$ (see [[Closed Interval Rule]]):

- $\ln x = 0$ gives $x = e^0 = 1$, the **left endpoint**, where $y=0$.
- $\ln x = -2$ gives $x=e^{-2}=1/e^2$, which is **outside** $[1,e^3]$, so the key discards it (it writes the point $(1/e^2,\,4/e^2)$ and crosses it out).

For $x>1$ both $\ln x>0$ and $\ln x+2>0$, so $y'>0$: the function is increasing on the whole interval. Hence the extrema are at the ends:

| $x$ | $y=x(\ln x)^2$ | Verdict |
|---|---|---|
| $1$ | $0$ | global minimum |
| $e^3$ | $e^3\cdot3^2 = 9e^3\approx180.8$ | global maximum |

![[PP04_q1b_x_ln2x.png|600]]

*The function climbs steadily from 0 at $x=1$ to $9e^3\approx180.8$ at $x=e^3$, so both global extrema are endpoints.*

### c. $\displaystyle\lim_{x\to0^+}e^{f(x,x)}$ and then $\displaystyle\lim_{x\to0^+}x^x$

> [!success] Answer
> $\displaystyle\lim_{x\to0^+}e^{f(x,x)}=1$ and $\displaystyle\lim_{x\to0^+}x^{x}=1$.

From part b, $f(x,x)=x\ln x$. This is a $0\cdot(-\infty)$ [[Indeterminate Form]]; write it as a fraction and use [[L'Hopital's Rule]]:

$$
\lim_{x\to0^+}x\ln x = \lim_{x\to0^+}\frac{\ln x}{x^{-1}} = \lim_{x\to0^+}\frac{1/x}{-x^{-2}} = \lim_{x\to0^+}(-x) = 0 .
$$

Therefore

$$
\lim_{x\to0^+}e^{f(x,x)} = e^{0} = 1 .
$$

**Use it for $x^x$.** Rewrite $x^x = e^{\ln x^{x}} = e^{x\ln x} = e^{f(x,x)}$, so

$$
\lim_{x\to0^+}x^{x} = \lim_{x\to0^+}e^{f(x,x)} = 1 .
$$

---

## Q2 — A two-product cost function

$$
f(x,y) = a x^3 - b\,xy - 12x + y^2 + 4y + 109 ,
$$

the monthly cost of producing $x$ units of A and $y$ units of B, with a critical point at $(x,y)=(6,16)$.

### a. Values of $a$ and $b$

> [!success] Answer
> $a=1$, $b=6$.

The partial derivatives are

$$
f_x = 3ax^2 - by - 12, \qquad f_y = -bx + 2y + 4 .
$$

At the critical point $(6,16)$ both vanish:

$$
f_x(6,16) = 108a - 16b - 12 = 0 \;\Rightarrow\; 27a - 4b = 3 ,
$$

$$
f_y(6,16) = -6b + 32 + 4 = 0 \;\Rightarrow\; b = 6 .
$$

Then $27a = 3 + 24 = 27$, so $a=1$.

### b. Local extrema with $a=1$, $b=6$

> [!success] Answer
> $(6,16)$ is a local **minimum** ($A=36>0$, $\Delta=36>0$). The key crosses out the other critical point $(0,-2)$ because it is not a valid production level ($y<0$); as a pure maths point it is a saddle.

Now $f(x,y)=x^3-6xy-12x+y^2+4y+109$.

**First-order conditions.**

$$
f_x = 3x^2 - 6y - 12 = 0 \;\Rightarrow\; 2y = x^2-4 , \qquad f_y = -6x + 2y + 4 = 0 .
$$

Substitute $2y=x^2-4$ into $f_y$: $-6x + x^2 - 4 + 4 = 0$, so $x(x-6)=0$. Hence $x=0$ (then $y=-2$) or $x=6$ (then $y=16$).

**Second derivatives:**

$$
f_{xx}=6x, \qquad f_{xy}=-6, \qquad f_{yy}=2 .
$$

| Point | $A=f_{xx}$ | $B=f_{xy}$ | $C=f_{yy}$ | $\Delta=AC-B^2$ | Type |
|---|---|---|---|---|---|
| $(0,-2)$ | $0$ | $-6$ | $2$ | $-36<0$ | [[Saddle Point]] (not feasible, crossed out in the key) |
| $(6,16)$ | $36$ | $-6$ | $2$ | $72-36=36>0$, $A>0$ | local minimum |

(See [[Second Derivative Test]].) The key writes "$x,y>0$" next to the crossed-out point: quantities of products cannot be negative, so the cost function has a single relevant local extremum, a minimum at 6 units of A and 16 of B.

### c. $a=0$, $b=1$: extremum with $x+y=44$

> [!success] Answer
> $x=37$ units of product A and $y=7$ units of product B.

With $a=0$, $b=1$:

$$
f(x,y) = -xy - 12x + y^2 + 4y + 109, \qquad \text{constraint } x+y=44 .
$$

The Lagrangian (see [[Lagrangian]]) is

$$
L(x,y,\lambda) = -xy - 12x + y^2 + 4y + 109 - \lambda\,(x+y-44) .
$$

First-order conditions:

$$
L_x = -y - 12 - \lambda = 0 \;\Rightarrow\; -\lambda = y+12 , \qquad L_y = -x + 2y + 4 - \lambda = 0 , \qquad L_\lambda = -(x+y-44) = 0 .
$$

Substitute $-\lambda = y+12$ into $L_y$:

$$
-x + 2y + 4 + y + 12 = 0 \;\Rightarrow\; 3y = x - 16 \;\Rightarrow\; y = \tfrac13(x-16) .
$$

Plug into the constraint:

$$
x + \tfrac13(x-16) = 44 \;\Rightarrow\; 3x + x - 16 = 132 \;\Rightarrow\; x = 37, \qquad y = 7 .
$$

> [!warning] A sign slip in the key
> The key boxes "$\lambda = y+12$", but $L_x=0$ gives $\lambda=-(y+12)$. The very next line uses the correct $-\lambda=y+12$, so the final answer is unaffected. With the correct sign, $\lambda=-19$ at the solution.

> [!tip] Check
> Substituting $y=44-x$ gives $f = 2x^2 - 148x + 2221$, an upward parabola with vertex at $x=37$ and value $f(37,7)=-517$. So the point is in fact a minimum on the line (the question says there is no need to decide).

---

## Q3 — System with parameter $a$

$$
\begin{cases}
a x_1 + a x_2 + a x_3 = a \\
a x_1 + x_2 + x_3 = 3 \\
2a x_1 + 4x_2 + 4x_3 = 3a+12
\end{cases}
$$

### a. For which $a$ is there (1) a unique solution, (2) infinitely many solutions, (3) no solution?

> [!success] Answer
> (1) Unique solution: **no value of $a$**. (2) Infinitely many: $a=0$ and $a=-\tfrac13$. (3) No solution: every other $a$, including $a=1$.

Columns 2 and 3 of the coefficient matrix are identical, so $x_2$ and $x_3$ only enter as $x_2+x_3$ and the coefficient matrix can never have rank 3. **A unique solution is impossible for every $a$.** (The key never states this outright; it follows from its case analysis, where no case ends with three pivots.)

**Case $a\neq0$ and $a\neq1$.** Divide $R_1$ by $a$. Then $R_2\to-aR_1+R_2$ and $R_3\to-2aR_1+R_3$ (see [[Elementary Row Operations]] and [[Augmented Matrix]]):

$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 1 \\
0 & 1-a & 1-a & 3-a \\
0 & 4-2a & 4-2a & a+12
\end{array}\right)
$$

Divide $R_2$ by $1-a$ (allowed as $a\neq1$), then eliminate $R_3$ with $(2a-4)R_2+R_3\to R_3$:

$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 1 \\
0 & 1 & 1 & \dfrac{3-a}{1-a} \\
0 & 0 & 0 & (2a-4)\dfrac{3-a}{1-a} + a + 12
\end{array}\right)
$$

Simplify the last entry over the common denominator $1-a$:

$$
\frac{(2a-4)(3-a) + (a+12)(1-a)}{1-a} = \frac{-2a^2 + 10a - 12 - a^2 - 11a + 12}{1-a} = \frac{-3a^2 - a}{1-a} .
$$

The last row says $0 = \dfrac{-3a^2-a}{1-a}$. It is a true statement only if the numerator is zero:

$$
-3a^2 - a = 0 \;\Rightarrow\; a(3a+1)=0 \;\Rightarrow\; a=0 \text{ or } a=-\tfrac13 .
$$

Since we assumed $a\neq0$, this case leaves $a=-\tfrac13$: **infinitely many solutions** (rank 2, three unknowns). For all other $a\neq0,1$ the last row is a false statement: **no solution**.

**Case $a=1$.** The matrix becomes

$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 1 \\
0 & 0 & 0 & 3 \\
0 & 2 & 2 & 13
\end{array}\right)
$$

The second row says $0=3$: **no solution**.

**Case $a=0$.** The first equation is $0=0$, and the others give $x_2+x_3=3$ and $4x_2+4x_3=12$, which are the same equation:

$$
\left(\begin{array}{ccc|c}
0 & 1 & 1 & 3 \\
0 & 0 & 0 & 0
\end{array}\right)
$$

One equation in three unknowns: **infinitely many solutions**.

| $a$ | Outcome |
|---|---|
| $a=0$ | infinitely many solutions |
| $a=-\tfrac13$ | infinitely many solutions |
| any other $a$ (including $a=1$) | no solution |
| none | unique solution |

> [!tip] Reading the key
> The key's closing summary lists "$a=0,-\tfrac13$: infinitely many; $a\neq0,-\tfrac13$: no solution", which covers $a=1$ too. I checked each case by computing the ranks of the coefficient and augmented matrices: $a=-\tfrac13$ has equal ranks of $2$, while for example $a=2$ has ranks $2$ and $3$.

### b. $a=0$

**1. The solution.**

> [!success] Answer
> $(x_1,x_2,x_3)=(m,\;3-t,\;t)$ for any real $m$ and $t$.

With $a=0$ the only surviving equation is $x_2+x_3=3$. Take $x_1=m$ and $x_3=t$ as free variables; then $x_2=3-t$.

**2. A solution with $x_1=x_2=x_3$?**

> [!success] Answer
> Yes: $(1.5,\,1.5,\,1.5)$.

Require $m = 3-t = t$. From $3-t=t$ we get $t=1.5$, and then $m=1.5$. So $x_1=x_2=x_3=1.5$.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | implicit differentiation at $(1,1)$ | $dp/dt=\tfrac12$ |
| Q1b | $f(x,x)=x\ln x$, so $y=x\ln^2x$ on $[1,e^3]$ | min $(1,0)$, max $(e^3,9e^3)$ |
| Q1c | $x\ln x\to0$ by L'Hopital | $e^{f(x,x)}\to1$ and $x^x\to1$ |
| Q2a | $f_x=f_y=0$ at $(6,16)$ | $a=1$, $b=6$ |
| Q2b | $\Delta$ test | $(6,16)$ local min; $(0,-2)$ saddle, infeasible |
| Q2c | Lagrange with $x+y=44$ | $x=37$, $y=7$ |
| Q3a | row reduction | unique: none; infinite: $a=0,-\tfrac13$; none: otherwise |
| Q3b | $a=0$ | $(m,3-t,t)$; $(1.5,1.5,1.5)$ |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
