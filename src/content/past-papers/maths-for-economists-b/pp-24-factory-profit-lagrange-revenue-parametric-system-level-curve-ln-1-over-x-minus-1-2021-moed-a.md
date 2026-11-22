---
title: "Factory Profit & Lagrange Revenue, Parametric System, Level Curve & ln(1 over x minus 1) (2021 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II for Economics Final Exam, Moed A (2021)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - profit-maximisation
  - saddle-point
  - lagrange-multipliers
  - linear-systems
  - parametric-system
  - implicit-differentiation
  - global-extrema
  - lhopital
aliases:
  - Math II 2021 Moed A
  - Maths B Moed A 2021
  - PP24 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Factory Profit & Lagrange Revenue, Parametric System, Level Curve & ln(1 over x minus 1) (2021 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II for Economics Final Exam, Moed A (2021)**, Maths for Economists B, Hever Schulberg. 3 hours, 4 questions, non-graphic calculator and formula sheet allowed. Marks on this paper: Q1 30, Q2 25, Q3 25, Q4 20.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (6 pages, every part is solved). No answer in this note is AI-written.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Revenue and profit from a price table and a log cost; two [[Marginal Profit]] values; a critical point that is a [[Saddle Point]]; then a revenue maximum under a circle constraint with the [[Lagrange Multiplier Method]] | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q2 | A $3\times3$ [[Parametric System]] where the first two columns coincide: unique, infinitely many, none; the solution at $k=0$ | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |
| Q3 | [[Implicit Differentiation]] on $e^{xy}-e^{2y}-x+3+\ln x=0$; the relation $-f_x/f_y=\ln2/3$; global extremum of a slice on a half-open interval | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_01-Global Extrema, Optimization and Summation]] |
| Q4 | $\ln\left(\frac1x-1\right)$: domain by a sign table, intercept, and two limits with [[L'Hopital's Rule]] | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_05-Two Variable Functions]] |

> [!tip] Intuition: the one move behind each question
> - Q1: with a log cost the marginal profits are $2-\frac{10x}{x^2+y^2}$ and $1-\frac{10y}{x^2+y^2}$. Setting both to zero gives $x=2y$ quickly. Revenue is linear, so under a circle constraint it is maximised where the revenue line just touches the circle.
> - Q2: the first two columns are equal, so $x$ and $y$ always appear as $x+y$. That means there can never be a unique solution.
> - Q3: fixing $x=1$ turns the surface into a one-variable function of $y$, which is easy to solve for the point on the curve.
> - Q4: the log needs $\frac1x-1>0$, which is $\frac{1-x}{x}>0$; a sign table gives $0<x<1$.

---

## Q1 — Factory profit (30 points)

A factory sells $x$ units of type A at \$4 thousand each and $y$ units of type B at \$3 thousand each. Cost in thousands of \$ is

$$
C(x,y) = 2x + 2y + 5\ln\left(x^2+y^2\right).
$$

### a. Revenue and profit

> [!success] Answer
> $R(x,y)=4x+3y$ and $P(x,y)=2x+y-5\ln(x^2+y^2)$ (thousand \$).

Revenue is price times quantity: $R=4x+3y$. Profit is revenue minus cost:

$$
P = 4x + 3y - 2x - 2y - 5\ln(x^2+y^2) = 2x + y - 5\ln(x^2+y^2) .
$$

### b. Marginal profits at 10 units of each, and their meaning

> [!success] Answer
> $P_y(10,10)=0.5$ and $P_x(10,10)=1.5$. At 10 units of each kind, selling one more type B unit raises monthly profit by about \$500; one more type A unit raises it by about \$1,500.

$$
P_y = 1 - 5\cdot\frac{2y}{x^2+y^2} = 1 - \frac{10y}{x^2+y^2} \;\Rightarrow\; P_y(10,10) = 1 - \frac{100}{200} = 0.5 ,
$$

$$
P_x = 2 - \frac{10x}{x^2+y^2} \;\Rightarrow\; P_x(10,10) = 2 - \frac{100}{200} = 1.5 .
$$

Profit is in thousands of dollars, so $0.5$ means about \$500 and $1.5$ means about \$1,500 (see [[Partial Derivative]]).

### c. Critical point and its type

> [!success] Answer
> Critical point $(4,2)$, a **saddle point**.

**First-order conditions** ([[Critical Point]]):

$$
P_y = 0 \Rightarrow x^2+y^2 = 10y, \qquad P_x = 0 \Rightarrow x^2+y^2 = 5x .
$$

So $10y=5x$, i.e. $x=2y$. Substitute into $x^2+y^2=10y$: $4y^2+y^2=10y$, so $5y^2=10y$, giving $y=0$ or $y=2$.

$y=0$ would give $x=0$, and $(0,0)$ is not in the domain ($\ln0$). So $y=2$ and $x=4$: the critical point is $(4,2)$.

**Second-order test** ([[Second Derivative Test]]). From $P_x=2-\dfrac{10x}{x^2+y^2}$:

$$
A = P_{xx} = \frac{-10(x^2+y^2)+10x\cdot2x}{(x^2+y^2)^2} = \frac{10(x^2-y^2)}{(x^2+y^2)^2},
\qquad
B = P_{xy} = \frac{20xy}{(x^2+y^2)^2},
\qquad
C = P_{yy} = \frac{10(y^2-x^2)}{(x^2+y^2)^2}.
$$

At $(4,2)$, $x^2+y^2=20$ and $(x^2+y^2)^2=400$:

$$
A = \frac{10\cdot12}{400} = 0.3, \qquad B = \frac{20\cdot8}{400}=0.4, \qquad C=-0.3 .
$$

$$
\Delta = AC - B^2 = -0.09 - 0.16 = -0.25 < 0 \;\Rightarrow\; \text{saddle point.}
$$

> [!tip] Intuition
> A saddle means the profit surface curves up in one direction and down in another there: the critical point is not a profit maximum. The value is $P(4,2)=10-5\ln20\approx-4.98$ thousand \$. Both the value and this remark are mine.

### d. Maximum revenue on the circle $x^2+y^2=100$

> [!success] Answer
> $x=8$ units of A and $y=6$ units of B; maximal revenue $R(8,6)=50$ thousand \$.

Use the [[Lagrangian]] for $R=4x+3y$ subject to $x^2+y^2=100$ (see [[Lagrange Multiplier Method]]):

$$
L(x,y,\lambda) = 4x + 3y - \lambda\,(x^2+y^2-100) .
$$

$$
L_x = 4 - 2\lambda x = 0 \Rightarrow x=\frac{2}{\lambda}, \qquad L_y = 3 - 2\lambda y = 0 \Rightarrow y=\frac{3}{2\lambda}, \qquad L_\lambda:\ x^2+y^2=100 .
$$

Substitute into the constraint:

$$
\frac{4}{\lambda^2}+\frac{9}{4\lambda^2} = 100 \;\Rightarrow\; 16+9 = 400\lambda^2 \;\Rightarrow\; \lambda^2=\frac1{16} \;\Rightarrow\; \lambda=\frac14
$$

(the positive root, since units are positive). Then $x=\dfrac{2}{1/4}=8$ and $y=\dfrac{3}{2\cdot\frac14}=6$.

**Check it is the maximum.** $R(8,6)=4\cdot8+3\cdot6=50$. Compare with a boundary point of the quarter circle, $R(10,0)=40$. Since $50>40$, $(8,6)$ is the maximum.

![[PP24_q1_revenue_tangent_circle.png|520]]

*The revenue line $4x+3y=50$ touches the circle at exactly $(8,6)$, so no point of the circle gets higher revenue. The lower dotted line, through $(10,0)$, has $R=40$.*

---

## Q2 — A parametric linear system (25 points)

$$
\begin{cases}
x + y + z = 1 \\
x + y + kz = 3 \\
4x + 4y + 2kz = 3k + 12
\end{cases}
\qquad (k \text{ constant})
$$

### a. Unique, infinitely many, or no solution

> [!success] Answer
> 1. **Unique solution:** no value of $k$.
> 2. **Infinitely many solutions:** $k=0$ and $k=-\tfrac13$.
> 3. **No solution:** every other $k$ (that is, $k\neq0,-\tfrac13$, including $k=1$).

> [!note] The official key writes this out by hand; the steps below follow it.

[[Augmented Matrix]], then $-R_1+R_2\to R_2$ and $-4R_1+R_3\to R_3$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 1 \\
1 & 1 & k & 3 \\
4 & 4 & 2k & 3k+12
\end{array}\right)
\longrightarrow
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 1 \\
0 & 0 & k-1 & 2 \\
0 & 0 & 2k-4 & 3k+8
\end{array}\right)
$$

The $x$ and $y$ columns are identical, so there is never a pivot in column 2: **$y$ is always free, and a unique solution is impossible.**

**Case $k\neq1$.** Divide $R_2$ by $k-1$, then $-(2k-4)R_2+R_3\to R_3$:

$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 1 \\
0 & 0 & 1 & \dfrac{2}{k-1} \\
0 & 0 & 0 & \dfrac{3k^2+k}{k-1}
\end{array}\right)
$$

The last entry is $3k+8-(2k-4)\dfrac{2}{k-1}=\dfrac{(3k+8)(k-1)-4k+8}{k-1}=\dfrac{3k^2+k}{k-1}$.

The last row reads $0=\dfrac{3k^2+k}{k-1}$, which is true only if $3k^2+k=0$, i.e. $k(3k+1)=0$, so $k=0$ or $k=-\tfrac13$. For those values the system is consistent with a free variable: **infinitely many solutions**. For any other $k\neq1$ the last row is false: **no solution**.

**Case $k=1$.**

$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 1 \\
0 & 0 & 0 & 2 \\
0 & 0 & -2 & 11
\end{array}\right)
$$

Row 2 reads $0=2$: **no solution**.

> [!warning] Reading the key's final box
> The key's last box says "infinitely many solutions: $k=0,-\tfrac13$" and "no solution: $k\neq0,-\tfrac13$" (the handwriting on page 7 puts the second line as "$k\ne 0,-\tfrac13$"). That matches my case split, with $k=1$ handled separately and also giving no solution.

### b. Solve for $k=0$

> [!success] Answer
> $(x,y,z)=(3-t,\; t,\; -2)$ for any real $t$.

At $k=0$ the system is $x+y+z=1$, $x+y=3$, $4x+4y=12$. The matrix reduces to $\left(\begin{array}{ccc|c}1&1&1&1\\0&0&1&-2\end{array}\right)$ (row 3 is $0=0$ after elimination). Then $-R_2+R_1\to R_1$:

$$
\left(\begin{array}{ccc|c}
1 & 1 & 0 & 3 \\
0 & 0 & 1 & -2
\end{array}\right)
$$

So $z=-2$ and $x+y=3$. Take $y=t$ free: $x=3-t$.

> [!example] Check
> $x+y+z=(3-t)+t-2=1$ ✓. $x+y+kz=3$ with $k=0$ ✓. $4x+4y+2kz=12=3k+12$ ✓.

---

## Q3 — The surface $f(x,y)=e^{xy}-e^{2y}-x+3+\ln x$ (25 points)

### a. $x'=\dfrac{dx}{dy}$ on the curve $z=0$ at $x=1$

> [!success] Answer
> $$x'(1,\ln2) = \frac{3}{\ln2}$$

**The point.** The curve is $0=e^{xy}-e^{2y}-x+3+\ln x$. Put $x=1$ ($\ln1=0$):

$$
0 = e^{y} - e^{2y} + 2 .
$$

Let $t=e^y>0$: $0=t-t^2+2$, i.e. $t^2-t-2=0$, so $t=2$ or $t=-1$. Since $e^y>0$, $t=2$, so $y=\ln2$. The point is $(1,\ln2)$.

**The slope.** Differentiate with respect to $y$, treating $x$ as a function of $y$ ([[Implicit Differentiation]]):

$$
0 = e^{xy}\,(x'y + x) - 2e^{2y} - x' + \frac1x\,x' .
$$

At $(1,\ln2)$: $e^{xy}=e^{\ln2}=2$, $e^{2y}=e^{2\ln2}=4$, $x=1$, so $-x'+\frac1x x'=-x'+x'=0$:

$$
0 = 2\,(\ln2\cdot x'+1) - 8 \;\Rightarrow\; 2\ln2\cdot x' = 6 \;\Rightarrow\; x' = \frac{3}{\ln2}.
$$

### b. Show that $-\dfrac{f_x(1,\ln2)}{f_y(1,\ln2)}=\dfrac{\ln2}{3}$

$$
f_y = x\,e^{xy} - 2e^{2y} \;\Rightarrow\; f_y(1,\ln2) = 2 - 8 = -6 ,
$$

$$
f_x = y\,e^{xy} - 1 + \frac1x \;\Rightarrow\; f_x(1,\ln2) = 2\ln2 - 1 + 1 = 2\ln2 .
$$

$$
-\frac{f_x}{f_y} = -\frac{2\ln2}{-6} = \frac{\ln2}{3} . \qquad\blacksquare
$$

> [!tip] How this connects to part a
> $-f_x/f_y$ is the slope $dy/dx$ of the level curve. Part a computed $dx/dy=3/\ln2$. These are reciprocals, as they must be: $\dfrac{dy}{dx}=\dfrac{\ln2}{3}=\dfrac{1}{3/\ln2}$. This remark is mine.

### c. Global extremes of $f(1,x)$ on $[-1,1)$

> [!success] Answer
> **Global maximum** at $x=\ln\tfrac12=-\ln2\approx-0.693$ (value $\tfrac94$). **No global minimum.**

Fixing the first variable at 1:

$$
f(1,x) = e^{x} - e^{2x} - 1 + 3 + \ln1 = e^{x}-e^{2x}+2, \qquad -1\le x<1 .
$$

$$
f' = e^{x} - 2e^{2x} = e^{x}\,(1-2e^{x}) = 0 \;\Rightarrow\; e^{x}=\tfrac12 \;\Rightarrow\; x=\ln\tfrac12\approx-0.693 .
$$

$f'>0$ before this point and $f'<0$ after it, so $f$ rises and then falls: a maximum, with value $f=\tfrac12-\tfrac14+2=\tfrac94=2.25$.

**Endpoints.**

$$
f(-1) = e^{-1}-e^{-2}+2 \approx 2.23 < 2.25, \qquad \lim_{x\to1^-}f(1,x) = e - e^2 + 2 \approx -2.67 .
$$

The right end $x=1$ is **not** in the interval, so the value $-2.67$ is approached but never reached. Every value on the interval is greater than $-2.67$, but no point attains the smallest value: **no global minimum**.

![[PP24_q3_slice_open_interval.png|560]]

*The slice rises to its maximum at $x=-\ln2$, then falls towards $-2.67$ as $x\to1$, but the point $x=1$ is not included (open circle).*

---

## Q4 — The function $f(x)=\ln\!\left(\dfrac1x-1\right)$ (20 points)

### a. Domain

> [!success] Answer
> $0<x<1$.

Two conditions: $x\neq0$ (denominator), and the log needs $\dfrac1x-1>0$:

$$
\frac1x-1 = \frac{1-x}{x} > 0 .
$$

Sign table: $1-x$ changes sign at $1$ and $x$ at $0$. The quotient is negative for $x<0$, positive for $0<x<1$ and negative for $x>1$. So the domain is $0<x<1$.

### b. Axis intercepts

> [!success] Answer
> $x$-intercept $\left(\tfrac12,0\right)$. No $y$-intercept.

**$x$-intercept:** $\ln\left(\dfrac1x-1\right)=0\Rightarrow\dfrac1x-1=1\Rightarrow x=\dfrac12$, in the domain. **$y$-intercept:** it would need $x=0$, which is outside the domain, so there is none.

### c. $\displaystyle\lim_{x\to0^+}f(x)$

> [!success] Answer
> $\infty$.

As $x\to0^+$, $\dfrac1x\to\infty$, so $\dfrac1x-1\to\infty$ and $\ln(\infty)=\infty$. Thus $x=0$ is a [[Vertical Asymptote]].

### d. $\displaystyle\lim_{x\to0^+}x\cdot f(x)$

> [!success] Answer
> $0$.

This is $0\cdot\infty$, an [[Indeterminate Form]]. Rewrite as a fraction ($\tfrac{\infty}{\infty}$) and use [[L'Hopital's Rule]]:

$$
\lim_{x\to0^+}\frac{\ln\left(\frac1x-1\right)}{x^{-1}} .
$$

Derivative of the top, with $\ln(u)$ and $u=\frac1x-1=\frac{1-x}{x}$:

$$
\frac{u'}{u} = \frac{-1/x^2}{(1-x)/x} = -\frac{1}{x(1-x)} .
$$

Derivative of the bottom: $-x^{-2}$. So

$$
\lim_{x\to0^+}\frac{-\dfrac{1}{x(1-x)}}{-\dfrac{1}{x^2}} = \lim_{x\to0^+}\frac{x}{1-x} = \frac{0}{1-0} = 0 .
$$

![[PP24_q4_ln_one_over_x_minus_1.png|560]]

*The curve lives only between the dashed lines $x=0$ and $x=1$. It crosses the axis at $(\tfrac12,0)$ and tends to $+\infty$ at the left edge and $-\infty$ at the right edge.*

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | revenue minus cost | $R=4x+3y$; $P=2x+y-5\ln(x^2+y^2)$ |
| Q1b | partial derivatives at $(10,10)$ | $P_y=0.5$ (\$500), $P_x=1.5$ (\$1,500) |
| Q1c | first-order conditions, second derivative test | $(4,2)$, $\Delta=-0.25$: saddle |
| Q1d | Lagrange multiplier | $(8,6)$, $\lambda=\tfrac14$, $R=50$ |
| Q2a | last row after elimination | Never unique; infinitely many for $k=0,-\tfrac13$; otherwise none |
| Q2b | $k=0$ | $(3-t,\,t,\,-2)$ |
| Q3a | implicit differentiation at $(1,\ln2)$ | $x'=\dfrac{3}{\ln2}$ |
| Q3b | $-f_x/f_y$ | $\dfrac{\ln2}{3}$ (check: $-\dfrac{2\ln2}{-6}$) |
| Q3c | critical point, open endpoint | Max at $x=-\ln2$ ($\tfrac94$); no min |
| Q4a | sign table of $\tfrac{1-x}{x}$ | $0<x<1$ |
| Q4b | $\ln(\ldots)=0$ | $(\tfrac12,0)$ only |
| Q4c | $\ln\infty$ | $\infty$ |
| Q4d | L'Hopital | $0$ |

## Related Notes

- Hub: [[Maths for Economists B]]
- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_01-Global Extrema and Optimisation]], [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_05-Domains and Contour Lines of Two-Variable Functions]], [[PS_07-Applications of Partial Derivatives]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_10-Lagrange Applications and Gauss-Jordan]], [[PS_12-Systems with Parameters]]
