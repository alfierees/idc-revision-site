---
title: "Level Curve Slope, Constrained Profit, Parametric System, Domain & Contours (2020 Moed C)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed C (2020)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - implicit-differentiation
  - lagrange-multipliers
  - linear-systems
  - domains
  - contour-lines
  - differential
aliases:
  - Math II Moed C 2020
  - Maths for Economists B 2020 Moed C
  - PP23 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Level Curve Slope, Constrained Profit, Parametric System, Domain & Contours (2020 Moed C)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed C (2020)**, Maths for Economists B, Hever Schulberg. 4 questions, 25 points each. "Justify anything you claim, and explain all your calculations." Only techniques covered in the course are allowed.
> Builds on: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 2 and 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 11). Every part below follows that key. Nothing in this note is AI-solved. Working is expanded and a few extra checks are added, always marked as mine.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A level curve $f(x,y)=k$: find $k$, the slope by implicit differentiation, why that is **not** $f_x$, a one-variable slice, and a limit | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]] |
| Q2 | Profit from prices and a cost function, constrained maximum with Lagrange, then an unrelated local-extrema problem | [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q3 | A 3x3 system with a parameter $a$: none, infinitely many, unique; parametric solution; true or false | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]] |
| Q4 | Domain with a square root and a log, contour lines of $\ln(xy)$, estimate a change with the differential | [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]] |

Related practice: [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_05-Domains and Contour Lines of Two-Variable Functions]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]].

> [!tip] Intuition: the moves that recur
> - On a **curve** $f(x,y)=k$ the slope $dy/dx$ is $-f_x/f_y$, never $f_x$ alone (Q1a).
> - Substituting a constraint into the Lagrange conditions, then checking the answer really is a maximum (Q2b).
> - A system whose parameter sits in the coefficients: reduce, then ask which pivot or which last row can vanish (Q3).

---

## Q1 — Level curve of $f(x,y)=y\ln(x+y^2-1)-2xe$ (25 points)

> [!note] Note from the paper
> Answers may be left with $e$ or given as decimals rounded to two digits.

### a1. The value of $k$ if $(1,e)$ is on the curve $f(x,y)=k$

Plug the point in:

$$
k = e\ln\left(1+e^2-1\right) - 2e = e\ln e^2 - 2e = 2e - 2e = 0
$$

> [!success] Answer
> $k = 0$.

### a2. Slope of the tangent line to the curve at $(1,e)$

The curve is $y\ln(x+y^2-1) - 2xe = 0$. Differentiate both sides with respect to $x$, treating $y$ as a function of $x$ (product rule on the first term, chain rule inside the log):

$$
y'\ln(x+y^2-1) + y\cdot\frac{1+2y\,y'}{x+y^2-1} - 2e = 0
$$

At $(1,e)$ we have $x+y^2-1 = e^2$ and $\ln e^2 = 2$:

$$
2y' + e\cdot\frac{1+2e\,y'}{e^2} - 2e = 0
$$

$$
2y' + \frac{1+2e\,y'}{e} - 2e = 0
$$

Multiply by $e$:

$$
2e\,y' + 1 + 2e\,y' - 2e^2 = 0 \quad\Longrightarrow\quad 4e\,y' = 2e^2 - 1
$$

> [!success] Answer
> $$y'(1,e) = \frac{2e^2-1}{4e} \approx 1.27$$

> [!info] Cross-check (mine, not on the key)
> Using $y' = -f_x/f_y$: $f_x = \dfrac{y}{x+y^2-1} - 2e$, so $f_x(1,e) = \dfrac{e}{e^2} - 2e = \dfrac1e - 2e$. And $f_y = \ln(x+y^2-1) + \dfrac{2y^2}{x+y^2-1}$, so $f_y(1,e) = 2 + 2 = 4$. Then $y' = \dfrac{2e - 1/e}{4} = \dfrac{2e^2-1}{4e}$. Same answer.

### a3. True or false: "the slope found above can also be found using $f_x'(1,e)$"

> [!success] Answer
> **False.** A partial derivative $f_x$ is the derivative with respect to $x$ **holding $y$ constant**, but on the curve $y$ changes as $x$ changes (the official key puts it as "here $z$ is a constant"). The slope along the curve is $y' = -f_x/f_y$.

> [!warning] The numbers show it
> $f_x(1,e) = \tfrac1e - 2e \approx -5.30$, which is not the slope $1.27$. The partial derivative is the slope of the surface in the pure $x$ direction. The curve moves in $x$ and $y$ together.

### b1. Tangent line to $z = f(x,e^2)$ at $x=1$

Fix $y = e^2$, so $z$ depends on $x$ only:

$$
z = e^2\ln\left(x + e^4 - 1\right) - 2xe
$$

$$
z' = \frac{e^2}{x+e^4-1} - 2e
$$

At $x=1$: $z'(1) = \dfrac{e^2}{e^4} - 2e = \dfrac1{e^2} - 2e \approx -5.3$. The point has height $z(1) = e^2\ln e^4 - 2e = 4e^2 - 2e$.

Tangent: $z - (4e^2-2e) = \left(\tfrac1{e^2}-2e\right)(x-1)$, which simplifies to

> [!success] Answer
> $$z = \left(\frac1{e^2} - 2e\right)x + 4e^2 - \frac1{e^2} \approx -5.3x + 29.42$$

### b2. Is $z'$ increasing or decreasing with $x$?

$z' = \dfrac{e^2}{x+e^4-1} - 2e$ has $x$ in the denominator, so as $x$ rises $z'$ falls. Formally

$$
z'' = -\frac{e^2}{\left(x+e^4-1\right)^2} < 0
$$

> [!success] Answer
> **Decreasing**: $z''<0$, so the slope $z'$ shrinks as $x$ grows (the slice is concave).

### c. $\displaystyle\lim_{t\to0^+} f(1,t)$

$f(1,t) = t\ln\left(1+t^2-1\right) - 2e = t\ln t^2 - 2e = 2t\ln t - 2e$. The term $t\ln t$ is "$0\cdot(-\infty)$". Rewrite as a fraction and apply L'Hopital:

$$
\lim_{t\to0^+}\frac{2\ln t}{t^{-1}} = \lim_{t\to0^+}\frac{2\cdot\frac1t}{-t^{-2}} = \lim_{t\to0^+}(-2t) = 0
$$

> [!success] Answer
> The limit is $0 - 2e = \mathbf{-2e}$.

---

## Q2 — Two products, a total-output constraint, and an extrema problem (25 points)

A company makes $x$ units of A (price \$320) and $y$ units of B (price \$420) per day. Cost: $C(x,y) = 4x^2 + xy + 3y^2 + 160x + 210y$.

### a. The daily profit function

Profit is revenue minus cost:

$$
P(x,y) = 320x + 420y - \left(4x^2+xy+3y^2+160x+210y\right)
$$

> [!success] Answer
> $$P(x,y) = 160x + 210y - 4x^2 - xy - 3y^2$$

### b. Maximal profit when exactly 22 units are made per day

Constraint: $x + y = 22$. Lagrangian:

$$
L(x,y,\lambda) = 160x + 210y - 4x^2 - xy - 3y^2 + \lambda(x+y-22)
$$

$$
L_x = 160 - 8x - y + \lambda = 0, \qquad L_y = 210 - 6y - x + \lambda = 0
$$

Subtract the second equation from the first to remove $\lambda$:

$$
-50 - 7x + 5y = 0
$$

Substitute $y = 22 - x$: $-50 - 7x + 110 - 5x = 0$, so $12x = 60$ and $x = 5$, $y = 17$.

Profit there: $P(5,17) = 800 + 3570 - 100 - 85 - 867 = 3318$.

**Is it a maximum?** The key tests one other point on the constraint, $(11,11)$, and finds $P(11,11) = 3102 < 3318$.

> [!info] Extra check (mine, not on the key)
> One comparison point does not prove a maximum. A cleaner argument: put $y = 22-x$ into $P$. The result is a quadratic in $x$ whose $x^2$ coefficient is $-4 + 1 - 3 = -6$, so it opens downward and its single stationary point ($x=5$) is the **global maximum** on the line.

> [!success] Answer
> Produce **5 units of A and 17 units of B**, for a maximal daily profit of **\$3,318**.

### c. Extreme points of $f(x,y) = xy\,e^{x-y}$ (unrelated to the above)

**First derivatives.** Using the product rule, with $\dfrac{\partial}{\partial x}e^{x-y} = e^{x-y}$ and $\dfrac{\partial}{\partial y}e^{x-y} = -e^{x-y}$:

$$
f_x = y\,e^{x-y} + xy\,e^{x-y} = y\,e^{x-y}(1+x)
$$

$$
f_y = x\,e^{x-y} - xy\,e^{x-y} = x\,e^{x-y}(1-y)
$$

**Critical points.** $e^{x-y} > 0$, so $f_x = 0$ gives $y = 0$ or $x = -1$, and $f_y = 0$ gives $x = 0$ or $y = 1$. The compatible pairs:

- $y = 0$ with $x = 0$ gives $(0,0)$.
- $x = -1$ with $y = 1$ gives $(-1,1)$.

(The pairs $y=0,\ y=1$ and $x=-1,\ x=0$ contradict each other.)

**Second derivatives:**

$$
f_{xx} = y\,e^{x-y}(2+x), \qquad f_{xy} = e^{x-y}(1+x)(1-y), \qquad f_{yy} = -x\,e^{x-y}(2-y)
$$

| Point | $A=f_{xx}$ | $B=f_{xy}$ | $C=f_{yy}$ | $\Delta = AC - B^2$ | Type |
|---|---|---|---|---|---|
| $(-1,1)$ | $e^{-2}$ | $0$ | $e^{-2}$ | $e^{-4} > 0$, $A>0$ | **local minimum** |
| $(0,0)$ | $0$ | $1$ | $0$ | $-1 < 0$ | **saddle point** |

> [!success] Answer
> $(-1,1)$ is a local **minimum** (value $f(-1,1) = -e^{-2}$) and $(0,0)$ is a **saddle point**. There is no maximum.

> [!warning] Trap
> At $(0,0)$ both $A$ and $C$ are zero, so the sign test on $A$ is useless. $\Delta = -B^2 = -1 < 0$ alone is enough to call it a saddle.

---

## Q3 — A system with a parameter $a$ (25 points)

$$
\begin{cases}
a(x+y+z) = a\\
a(x+y+z) + z = 2a+1\\
2a(x+y+z) + z = 2a+1
\end{cases}
$$

Expand to the augmented matrix (columns $x, y, z$, then the right side):

$$
\left(\begin{array}{ccc|c} a & a & a & a\\ a & a & a+1 & 2a+1\\ 2a & 2a & 2a+1 & 2a+1 \end{array}\right)
$$

### a. Values of $a$ for no solution, infinitely many, or a unique solution

Row operations $R_2 \to R_2 - R_1$ and $R_3 \to R_3 - 2R_1$:

$$
\left(\begin{array}{ccc|c} a & a & a & a\\ 0 & 0 & 1 & a+1\\ 0 & 0 & 1 & 1 \end{array}\right)
$$

**Case $a \ne 0$.** Divide $R_1$ by $a$ (allowed because $a\neq0$), then $R_3 \to R_3 - R_2$:

$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1\\ 0 & 0 & 1 & a+1\\ 0 & 0 & 0 & -a \end{array}\right)
$$

The last row says $0 = -a$, which is false because $a \ne 0$. **No solution.**

**Case $a = 0$.** $R_1$ is all zeros and $R_2$, $R_3$ both say $z = 1$. After deleting the zero row and subtracting one copy of $z=1$ we keep one equation in three unknowns, so $x$ and $y$ are free. **Infinitely many solutions.**

> [!success] Answer
> - **Unique solution:** no value of $a$ (there are only two independent equations for three unknowns, so a free variable always remains).
> - **No solution:** $a \ne 0$.
> - **Infinitely many solutions:** $a = 0$.

> [!tip] Intuition
> The sum $x+y+z$ only ever appears together, so $x$ and $y$ cannot be told apart: the system can never pin down all three unknowns. Write $s = x+y+z$. Equation 3 minus equation 2 gives $as = 0$, while equation 1 says $as = a$. Both hold only if $a = 0$.

### b. All solutions when there are infinitely many ($a = 0$)

With $a = 0$ the system collapses to $z = 1$. Let $x = t$ and $y = m$ be free.

> [!success] Answer
> $(x, y, z) = (t,\ m,\ 1)$ for any real $t, m$.

### c. A solution with $x = y$?

> [!success] Answer
> **Yes.** With $a = 0$ choose $t = m$, for example $(0,0,1)$ or $(5,5,1)$.

### d. True or false

**d1. "If $z = 0$ there is no value of $a$ for which the system has a solution."**

> [!success] Answer
> **True.** The system has a solution only for $a = 0$, and then it forces $z = 1$. So $z = 0$ is impossible for every $a$.

**d2. "When $a = 1$ the set $a(x+y+z)=0,\ a(x+y+z)+z = 0,\ 2a(x+y+z)+z = 0$ has no solution."**

> [!success] Answer
> **False.** All right-hand sides are zero, so this is a **homogeneous** system, and $x=y=z=0$ always solves it.

> [!info] Extra detail (mine)
> With $a=1$ the second and third equations give $z = 0$ and then $x + y = 0$, so there are in fact infinitely many solutions $(s,-s,0)$. The key only needs "at least one solution" to refute the claim.

---

## Q4 — Three independent segments (25 points)

### a. Domain of $f(x,y) = \dfrac{x}{\sqrt{x^2+3-y}} + \ln(x+2y)$, and its graph

Two conditions:

- The square root is in a denominator, so $x^2+3-y > 0$ (strictly: positive for the root, and non-zero for the division). That gives $y < x^2 + 3$.
- The log needs $x + 2y > 0$, which gives $y > -\tfrac12 x$.

> [!success] Answer
> Domain: $\left\{(x,y):\ -\tfrac12 x < y < x^2+3\right\}$, the region **above the line** $y = -x/2$ and **below the parabola** $y = x^2+3$. Both boundaries are dashed (not included).

![[PP23_q4a_domain.png|600]]

*The shaded region lies between the line and the parabola. The parabola meets the $y$-axis at 3 and the line passes through the origin.*

### b. Several contour lines of $z = \ln(xy)$

Set $z$ equal to a constant: $\ln(xy) = z$, so $xy = e^z$ and

$$
y = \frac{e^z}{x}
$$

Each contour is a **hyperbola** with the axes as asymptotes. Since $xy = e^z > 0$, $x$ and $y$ must have the **same sign**, so every contour has one branch in the first quadrant and one in the third. A larger $z$ pushes the hyperbola further from the origin.

> [!success] Answer
> Hyperbolas $y = e^z/x$: for $z = 0$ it is $y = 1/x$, for $z = 1$ it is $y = e/x$, for $z=-1$ it is $y = 1/(ex)$. Branches only in quadrants I and III.

![[PP23_q4b_contours_ln_xy.png|600]]

*Contours of $z=\ln(xy)$ for $z=-1$, $0$ and $1$.*

### c. Estimate the change of $f(x,y)=\sqrt{x^2-y^4}$ between $(5,2)$ and $(4.95,2.04)$

Use the differential $dz = f_x\,dx + f_y\,dy$ with $dx = 4.95 - 5 = -0.05$ and $dy = 2.04 - 2 = 0.04$.

$$
f_x = \frac{x}{\sqrt{x^2-y^4}}, \qquad f_y = \frac{-2y^3}{\sqrt{x^2-y^4}}
$$

At $(5,2)$: $x^2 - y^4 = 25 - 16 = 9$, so the root is $3$:

$$
f_x(5,2) = \frac53, \qquad f_y(5,2) = \frac{-16}{3}
$$

$$
dz = \frac53(-0.05) - \frac{16}{3}(0.04) \approx -0.083 - 0.213 = -0.297
$$

> [!success] Answer
> $dz \approx -0.297$, so the function **falls by about 0.3**.

> [!tip] Intuition
> The true change is $f(4.95,2.04) - 3 \approx 2.680 - 3 = -0.320$. The differential, a straight-line approximation, is close.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a1 | substitute the point | $k = 0$ |
| Q1a2 | implicit differentiation on $f=0$ | $y' = (2e^2-1)/(4e) \approx 1.27$ |
| Q1a3 | partial vs total slope | False: $f_x$ holds $y$ fixed; slope is $-f_x/f_y$ |
| Q1b1 | fix $y=e^2$, tangent | $z \approx -5.3x + 29.42$ |
| Q1b2 | sign of $z''$ | $z'$ decreasing |
| Q1c | rewrite, L'Hopital | $-2e$ |
| Q2a | revenue minus cost | $P = 160x+210y-4x^2-xy-3y^2$ |
| Q2b | Lagrange with $x+y=22$ | $(5,17)$, profit \$3,318 |
| Q2c | critical points, $\Delta$ | $(-1,1)$ min, $(0,0)$ saddle |
| Q3a | row-reduce with parameter | unique: none; none: $a\neq0$; infinite: $a=0$ |
| Q3b | free variables | $(t,m,1)$ |
| Q3c | choose $t=m$ | yes, e.g. $(5,5,1)$ |
| Q3d | solution set, homogeneous | d1 true, d2 false |
| Q4a | root and log conditions | $-x/2 < y < x^2+3$ |
| Q4b | $y=e^z/x$ | hyperbolas in quadrants I and III |
| Q4c | differential | $dz \approx -0.297$ |

## Related notes

[[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
