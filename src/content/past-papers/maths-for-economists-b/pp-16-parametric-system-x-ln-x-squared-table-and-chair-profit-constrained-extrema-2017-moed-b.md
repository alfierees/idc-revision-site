---
title: "Parametric System, x(ln x)^2, Table and Chair Profit & Constrained Extrema (2017 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2017)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - linear-systems
  - curve-sketching
  - profit-maximisation
  - lagrange-multipliers
  - domain
aliases:
  - Math II Moed B 2017
  - Maths for Economists B 2017 Moed B
  - PP16 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Parametric System, x(ln x)^2, Table and Chair Profit & Constrained Extrema (2017 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2017)**, Maths for Economists B, Hever Schulberg. 3 hours, formula sheet and non-graphic calculator allowed, 4 questions, 25 points each. "Justify anything you claim and explain all your calculations."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 2 and 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 11). Every part below follows that key, including one place where I think the key's wording is wrong (Q3b, flagged). The file title page says only "Moed B"; the year 2017 comes from the file name.

> [!warning] Possible error in the official key
> **Q3b.** The key says one more chair raises the weekly **profit** by about \$60. The function $f$ in that part is the **cost** function, so the slope \$60 is the extra **cost**, not extra profit. The official wording is kept below and my check is shown at the part.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Is a system homogeneous, is the zero vector a solution, parameter value for infinitely many solutions and the solution set | [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]] |
| Q2 | Full study of $x(\ln x)^2$: domain, intercepts, limits, monotonicity, graph, global minimum | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q3 | Tangent of a section curve and its meaning, marginal profit, unconstrained maximum | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q4 | Implicit $dx/dt$ at a point, a constrained extremum, a domain with a product inequality | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |

---

## Q1 — A system with a constant $c$ (25 points)

$$
\begin{cases}
cx_1+cx_2+x_3-c=0\\
-cx_1-x_2+cx_3-2x_3+1=0\\
cx_1+2cx_2-x_2+2cx_3-x_3-c=0
\end{cases}
\qquad (c \text{ is a constant})
$$

> [!note] Official solution: handwritten key, pages 4 and 5

Collect the unknowns on the left and constants on the right. The system is

$$
\left(\begin{array}{ccc|c}
c&c&1&c\\
-c&-1&c-2&-1\\
c&2c-1&2c-1&c
\end{array}\right)
$$

### a. Can the system be homogeneous for some value of $c$?

A homogeneous system has all right-hand sides equal to $0$. The second equation has right side $-1$ whatever $c$ is, since $-1$ does not contain $c$.

> [!success] Answer
> **No.** The second equation always has right side $-1$, so the system is never homogeneous.

### b. Is $(0,0,0)$ a possible solution?

Plug $x_1=x_2=x_3=0$ into the second equation: $0-0+0-0+1=0$ gives $1=0$, which is false.

> [!success] Answer
> **No.** Only a homogeneous system must accept the zero vector. Here the second equation becomes the false statement $1=0$.

### c. The value of $c$ with infinitely many solutions

**Case $c\neq0$.** Divide $R_1$ by $c$. Eliminate with $R_2\to R_2+R_1$ and $R_3\to R_3-R_1$:

$$
\left(\begin{array}{ccc|c}
c&c&1&c\\
0&c-1&c-1&c-1\\
0&c-1&2c-2&0
\end{array}\right)
$$

Then $R_3\to R_3-R_2$:

$$
\left(\begin{array}{ccc|c}
c&c&1&c\\
0&c-1&c-1&c-1\\
0&0&c-1&1-c
\end{array}\right)
$$

If also $c\neq1$, divide $R_2$ and $R_3$ by $c-1$ and every row has a pivot: a **unique solution** (the key stops there: not asked).

**Case $c=1$.** Every entry of the $c-1$ rows becomes $0$, and the right sides are $0$ too, so rows 2 and 3 vanish. Only $x_1+x_2+x_3=1$ remains: two free variables, **infinitely many solutions**.

**Case $c=0$.** The matrix is

$$
\left(\begin{array}{ccc|c}
0&0&1&0\\
0&-1&-1&-1\\
0&-1&-2&0
\end{array}\right)
$$

After row operations the key reaches the row $(0,0,0\,|\,1)$, which is a contradiction: **no solution**.

> [!success] Answer
> Infinitely many solutions exactly when $c=1$. (For $c=0$ there is no solution; for every other $c$ the solution is unique.)

### d. Solutions for $c=1$

> [!note] Official solution: handwritten key, page 5

With $c=1$ the three equations all say $x_1+x_2+x_3=1$. Let $x_2=t$ and $x_3=m$:

> [!success] Answer
> $$(x_1,x_2,x_3)=(1-t-m,\ t,\ m),\quad t,m\in\mathbb{R}$$

> [!info] Check
> Equation 2 with $c=1$: $-x_1-x_2+(1-2)x_3+1=0$, so $x_1+x_2+x_3=1$. Same equation. Equation 3: $x_1+x_2+x_3=1$. Same again.

> [!tip] Intuition
> Three equations with $c=1$ collapse into one equation in three unknowns, a plane, hence two free parameters. A determinant check agrees: $\det=c(c-1)^2$, so the matrix is singular at $c=0$ and $c=1$ only, and at $c=0$ the right side is inconsistent.

See also [[Lec_12-Systems with Parameters]] and [[PS_12-Systems with Parameters]].

---

## Q2 — The function $f(x)=x(\ln x)^2$ (25 points)

> [!note] Official solution: handwritten key, pages 6 and 7

### a. Study of the function

**1. Domain.** The logarithm needs $x>0$.

**2. Axis intersections.** There is no $y$-axis intercept ($x=0$ is not in the domain). For the $x$-axis solve $x(\ln x)^2=0$. Since $x>0$, we need $\ln x=0$, so $x=1$. The only intercept is $(1,0)$.

**3. Asymptotes.** At the left end:

$$
\lim_{x\to0^+}x(\ln x)^2=\lim_{x\to0^+}\frac{(\ln x)^2}{x^{-1}}
$$

This is $\frac{\infty}{\infty}$, so apply L'Hopital:

$$
\lim_{x\to0^+}\frac{2\ln x\cdot\frac1x}{-x^{-2}}=\lim_{x\to0^+}(-2x\ln x)=\lim_{x\to0^+}\frac{-2\ln x}{x^{-1}}
$$

Apply L'Hopital again:

$$
\lim_{x\to0^+}\frac{-2\cdot\frac1x}{-x^{-2}}=\lim_{x\to0^+}2x=0
$$

The limit is finite, so **no vertical asymptote**. The graph ends at an open point $(0,0)$. At the right end $x\to\infty$ we have $x\to\infty$ and $(\ln x)^2\to\infty$, so $f\to\infty$: **no horizontal asymptote**.

**4. Increase and decrease.** By the product rule:

$$
f'(x)=(\ln x)^2+x\cdot2\ln x\cdot\frac1x=(\ln x)^2+2\ln x=\ln x\,(\ln x+2)
$$

Zeros: $\ln x=0$ gives $x=1$ and $\ln x=-2$ gives $x=e^{-2}$. Sign table:

| Interval | $(0,e^{-2})$ | $(e^{-2},1)$ | $(1,\infty)$ |
|---|---|---|---|
| $f'$ | $+$ | $-$ | $+$ |
| $f$ | increasing | decreasing | increasing |

So $x=e^{-2}$ is a **local maximum** with $f(e^{-2})=e^{-2}\cdot(-2)^2=4e^{-2}\approx0.54$, and $x=1$ is a **local minimum** with $f(1)=0$.

> [!success] Answer (1 to 4)
> Domain $x>0$. Intercept $(1,0)$ only. No asymptotes (open point at $(0,0)$). Increasing on $(0,e^{-2})$ and $(1,\infty)$, decreasing on $(e^{-2},1)$. Local maximum $(e^{-2},\approx0.54)$, local minimum $(1,0)$.

**5. Graph.**

![[PP16_q2_x_ln_squared_x.png|560]]

*The curve starts at the open point $(0,0)$, climbs to the local maximum near $(0.14,0.54)$, falls to the minimum $(1,0)$, then rises without bound.*

### b. The $x$-coordinate of the global minimum

> [!success] Answer
> $x_{\min}=1$.

The function is a positive $x$ times a square, so $f(x)\ge0$ everywhere on the domain, and $f(1)=0$ attains that lower bound. The key reads it off the graph. The local maximum at $e^{-2}$ is not the minimum, and near $x=0$ the value tends to $0$ but is never reached.

See also [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] and [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]].

---

## Q3 — A factory making tables and chairs (25 points)

A factory makes $x$ tables and $y$ chairs a week at weekly cost

$$
f(x,y)=24x\sqrt{x}+10y^2
$$

> [!note] Official solution: handwritten key, pages 8 and 9

### a. Tangent line of the curve $f(x,y)$ with the plane $x=9$, at $y=3$

On the plane $x=9$ the curve is $z=24\cdot9\sqrt9+10y^2=648+10y^2$. This is a curve in the $(y,z)$ plane.

$$
z(3)=24\cdot9\cdot3+10\cdot9=648+90=738
$$

$$
z'(y)=20y\ \Rightarrow\ z'(3)=60
$$

The tangent line is $z-738=60(y-3)$, so $z=60y+558$ (in the plane $x=9$).

> [!success] Answer
> $$z=60y+558,\qquad x=9$$

### b. Financial meaning of the slope of this tangent line

> [!success] Answer (official wording)
> The key writes: "At a weekly production level of 9 tables and 3 chairs, producing and selling one more chair will increase the weekly **profit** by approx. \$60."

> [!warning] Wording looks wrong: it should be cost, not profit
> The function $f$ is given as the factory's weekly **cost of production**. Its slope with respect to $y$, $f_y(9,3)=20\cdot3=60$, is the **marginal cost of a chair**: making one more chair raises the weekly production cost by about \$60. The key's word "profit" appears to be a slip. (The selling prices only appear in the next part, so profit cannot be read from $f$ alone.) I keep the key's number, \$60, and flag the word.

### c. A week with marginal profit \$540 for a table and \$760 for a chair

The factory sells a table for \$900 and a chair for \$1000. Profit is revenue minus cost:

$$
P(x,y)=900x+1000y-24x\sqrt{x}-10y^2
$$

$$
P_x=900-24\cdot\tfrac32\sqrt{x}=900-36\sqrt{x},\qquad P_y=1000-20y
$$

Set $P_x=540$: $36\sqrt{x}=360$, so $\sqrt x=10$ and $x=100$. Set $P_y=760$: $20y=240$, so $y=12$.

> [!success] Answer
> $100$ tables and $12$ chairs.

### d. Maximal profit

Set both marginal profits to zero:

$$
900-36\sqrt{x}=0\Rightarrow\sqrt{x}=25,\ x=625,\qquad 1000-20y=0\Rightarrow y=50
$$

Second derivatives: $A=P_{xx}=-\frac{18}{\sqrt x}=-\frac{18}{25}=-0.72$, $B=P_{xy}=0$, $C=P_{yy}=-20$. Then $\Delta=(-0.72)(-20)-0=14.4>0$ and $A<0$, so it is a **maximum**.

$$
P(625,50)=562500+50000-375000-25000=212500
$$

> [!success] Answer
> Maximal weekly profit **\$212,500**, at 625 tables and 50 chairs.

> [!tip] Intuition
> Profit is revenue (linear in quantities) minus a **convex** cost ($x^{3/2}$ and $y^2$ both curve upwards). Rising marginal cost eventually catches the constant price, and that is where the marginal profit hits zero: \$900 at the margin for tables when $36\sqrt x=900$.

See also [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] and [[PS_07-Applications of Partial Derivatives]].

---

## Q4 — Three unrelated parts (25 points)

*There is no connection between the parts.*

### a. Is $(-1,1)$ on the curve $f(t,x)=-5$, and what is $\dfrac{dx}{dt}$ there?

Here $f(t,x)=\dfrac{3t^3}{x^2}+\dfrac{2x^2}{t}$, and the point $(-1,1)$ means $t=-1$, $x=1$.

> [!note] Official solution: handwritten key, page 10

**On the curve?** $\frac{3(-1)^3}{1^2}+\frac{2\cdot1^2}{-1}=-3-2=-5$. Yes.

**Slope.** Differentiate $-5=f(t,x(t))$ with respect to $t$:

$$
0=\frac{9t^2x^2-3t^3\cdot2x\,x'}{x^4}+\frac{4x\,x'\,t-2x^2}{t^2}
$$

At $(-1,1)$ this is $0=9+6x'-4x'-2$, so $2x'=-7$.

> [!success] Answer
> Yes, $(-1,1)$ is on the curve, and $\dfrac{dx}{dt}=-3.5$.

> [!info] Check with partial derivatives
> $f_t=\frac{9t^2}{x^2}-\frac{2x^2}{t^2}=7$ and $f_x=-\frac{6t^3}{x^3}+\frac{4x}{t}=2$ at $(-1,1)$. Then $\frac{dx}{dt}=-\frac{f_t}{f_x}=-\frac72$.

### b. Extreme points of $f(x,y)=x^2y+xy^2-20$ under $x+y=6$

> [!note] Official solution: handwritten key, page 10

$$
L(x,y,\lambda)=x^2y+xy^2-20-\lambda(x+y-6)
$$

$$
L_x=2xy+y^2-\lambda=0,\qquad L_y=x^2+2xy-\lambda=0
$$

Subtract: $y^2-x^2=0$, so $y=\pm x$.

- $y=x$: the constraint gives $2x=6$, so $(3,3)$.
- $y=-x$: the constraint gives $x-x=6$, that is $0=6$, impossible. No point.

At $(3,3)$: $f=27+27-20=34$. The key compares with the constraint-line corner point $f(0,6)=-20$ and concludes a maximum.

> [!success] Answer
> The only constrained extreme point is $(3,3)$, a **maximum** with $f=34$.

> [!info] Check
> Substitute $y=6-x$: $f=x(6-x)\big(x+(6-x)\big)-20=6x(6-x)-20=-6x^2+36x-20$. This is a downward parabola with its peak at $x=3$ and value $34$. So $(3,3)$ is the **global** maximum on the line (no minimum exists).

### c. Domain of $f(x,y)=\ln\!\left[x\,(y-x^2)\right]$

> [!note] Official solution: handwritten key, page 11

The logarithm needs a positive argument: $x(y-x^2)>0$. A product is positive when the factors have the same sign:

- both positive: $x>0$ and $y>x^2$, or
- both negative: $x<0$ and $y<x^2$.

> [!success] Answer
> $(x>0\ \text{and}\ y>x^2)$ or $(x<0\ \text{and}\ y<x^2)$.

![[PP16_q4_log_domain.png|480]]

*On the right of the $y$-axis the domain is the part above the parabola; on the left it is the part below the parabola. The parabola and the $y$-axis are dashed because they are excluded.*

See also [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] and [[PS_05-Domains and Contour Lines of Two-Variable Functions]].

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | Definition | Never homogeneous: equation 2 has right side $-1$ |
| Q1b | Substitution | No: $0,0,0$ gives $1=0$ |
| Q1c | Gauss-Jordan | $c=1$ (and $c=0$: none) |
| Q1d | Reduced form | $(1-t-m,\ t,\ m)$ |
| Q2a | Limits and $f'$ | Domain $x>0$; intercept $(1,0)$; no asymptotes; max at $e^{-2}$, min at $1$ |
| Q2b | Non-negativity | $x_{\min}=1$ |
| Q3a | Section curve | $z=60y+558$ on $x=9$ |
| Q3b | Marginal cost | About \$60 per extra chair (key says "profit": flagged) |
| Q3c | Marginal profit | $100$ tables, $12$ chairs |
| Q3d | Second derivative test | \$212,500 at $(625,50)$ |
| Q4a | Implicit differentiation | On the curve; $dx/dt=-3.5$ |
| Q4b | Lagrange | $(3,3)$ maximum, $f=34$ |
| Q4c | Product sign rule | $x>0,y>x^2$ or $x<0,y<x^2$ |

## Related notes

- Lectures: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_05-Domains and Contour Lines of Two-Variable Functions]], [[PS_07-Applications of Partial Derivatives]], [[PS_12-Systems with Parameters]]
- Hub: [[Maths for Economists B]]
