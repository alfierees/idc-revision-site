---
title: "Partial Derivative Identity, Critical Points, Parametric System, Contours & Bundled Profit (2018 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2018)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - partial-derivatives
  - critical-points
  - lagrange-multipliers
  - linear-systems
  - contour-lines
aliases:
  - Math II Moed B 2018
  - Maths for Economists B 2018 Moed B
  - PP18 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Partial Derivative Identity, Critical Points, Parametric System, Contours & Bundled Profit (2018 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2018)**, Maths for Economists B, Hever Schulberg. 3 hours, formula sheet and non-graphic calculator allowed, 4 questions, 25 points each. "Justify anything you claim and explain all your calculations."
> Builds on: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 2 and 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 10, headed "Solution to 2018 B"). Every part below follows that key. One part needs a flag: Q2c, where the key stops at the critical points. I added a classification there and marked it.

> [!warning] AI additions in this note
> **Q2c**: the key lists the two critical points only. The classification (local minimum and local maximum) and the values are my own, checked symbolically. Nothing else is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A homogeneity-type identity $xf_x+yf_y=0$, a tangent line to an implicit curve, a limit by L'Hopital | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q2 | Critical points with unknown coefficients, second derivative test, a constrained problem with a square root | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q3 | Parameter system, homogeneous solution, contour lines of $\max\{x,y\}$ | [[Lec_12-Systems with Parameters]], [[Lec_05-Two Variable Functions]] |
| Q4 | Unknown constant from a marginal-cost condition, profit maximisation, then the same with a constraint $y=4x$ | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |

---

## Q1 — The function $f(x,y)=\frac{x}{y}-\frac{y}{x}$ (25 points)

### a. The value of $x f_x+y f_y$

> [!note] Official solution: handwritten key, page 4

Write $f=xy^{-1}-yx^{-1}$. Then

$$
f_x=\frac{1}{y}+\frac{y}{x^2},\qquad f_y=-\frac{x}{y^2}-\frac{1}{x}
$$

$$
xf_x+yf_y=x\left(\frac{1}{y}+\frac{y}{x^2}\right)+y\left(-\frac{x}{y^2}-\frac{1}{x}\right)=\frac{x}{y}+\frac{y}{x}-\frac{x}{y}-\frac{y}{x}
$$

> [!success] Answer
> $$xf_x+yf_y=0$$
> a constant, with no $x$ or $y$ left.

> [!tip] Intuition
> $f$ depends only on the ratio $x/y$: scaling $x$ and $y$ by the same factor leaves it unchanged. That is why the weighted sum of the partials vanishes. (This is the degree-0 case of Euler's identity.)

### b. Tangent to the curve $f\!\left(x,e^{y/x}\right)=0$ at $(1,0)$

> [!note] Official solution: handwritten key, page 4

Substitute the second argument:

$$
f\!\left(x,e^{y/x}\right)=\frac{x}{e^{y/x}}-\frac{e^{y/x}}{x}=0
$$

First check that $(1,0)$ lies on the curve: $\frac{1}{e^0}-\frac{e^0}{1}=1-1=0$. It does.

Differentiate implicitly in $x$ with $y=y(x)$ (the key uses the quotient rule on both terms). Plugging in $(1,0)$ gives

$$
1-y'-y'+1=0\ \Rightarrow\ y'=1
$$

The tangent line is $y-0=1\cdot(x-1)$.

> [!success] Answer
> $$y=x-1$$

> [!info] Check by solving for $y$
> The equation $\frac{x}{e^{y/x}}=\frac{e^{y/x}}{x}$ gives $x^2=e^{2y/x}$, so $x=e^{y/x}$ for $x>0$, so $y=x\ln x$. Then $y'=\ln x+1$, which is 1 at $x=1$. This agrees with the key.

### c. The limit $\displaystyle\lim_{x\to0}\frac{f\!\left(e^x,e^{2x}\right)}{x}$

> [!note] Official solution: handwritten key, page 5

$$
f\!\left(e^x,e^{2x}\right)=\frac{e^x}{e^{2x}}-\frac{e^{2x}}{e^x}=e^{-x}-e^{x}
$$

so the limit is $\frac{0}{0}$ and L'Hopital applies:

$$
\lim_{x\to0}\frac{e^{-x}-e^{x}}{x}=\lim_{x\to0}\frac{-e^{-x}-e^{x}}{1}=-1-1
$$

> [!success] Answer
> $$-2$$

See also [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]].

---

## Q2 — $f(x,y)=x^3+y^2-ay-bxy+3ax$ (25 points)

### a. Find $a$ and $b$ if $(0,2)$ is a critical point

> [!note] Official solution: handwritten key, page 5

$$
f_x=3x^2-by+3a,\qquad f_y=2y-a-bx
$$

A critical point has both partials zero. At $(0,2)$:

$$
f_x(0,2)=-2b+3a=0,\qquad f_y(0,2)=4-a=0
$$

The second gives $a=4$, then the first gives $-2b+12=0$.

> [!success] Answer
> $$a=4,\qquad b=6$$

### b. Relative extrema of $f(x,y)=x^3+y^2-4y-6xy+12x$

> [!note] Official solution: handwritten key, page 5

$$
f_x=3x^2-6y+12=0\ \Rightarrow\ x^2-2y+4=0,\qquad f_y=2y-4-6x=0
$$

Add the two equations: $x^2-6x=0$, so $x=0$ or $x=6$. From $f_y=0$: $y=3x+2$, so the critical points are $(0,2)$ and $(6,20)$.

Second derivatives: $f_{xx}=6x$, $f_{xy}=-6$, $f_{yy}=2$.

| Point | $A=f_{xx}$ | $B=f_{xy}$ | $C=f_{yy}$ | $\Delta=AC-B^2$ | Type |
|---|---|---|---|---|---|
| $(0,2)$ | $0$ | $-6$ | $2$ | $-36<0$ | saddle |
| $(6,20)$ | $36$ | $-6$ | $2$ | $36>0$, $A>0$ | minimum |

> [!success] Answer
> $(0,2)$ is a **saddle point** (not an extremum). $(6,20)$ is a **relative minimum**, with $f(6,20)=216+400-80-720+72=-112$.

> [!info] Value not in the key
> The key classifies the points but does not compute $f(6,20)$. The value $-112$ is my own arithmetic, checked symbolically.

### c. Extremum of $\sqrt{f(x,y)}$ with $a=b=0$ under $x+y=8$

> [!note] Official solution: handwritten key, page 6 (critical points only)

With $a=b=0$, $f(x,y)=x^3+y^2$. Set up the Lagrangian for $\sqrt{x^3+y^2}$:

$$
L(x,y,\lambda)=\sqrt{x^3+y^2}+\lambda(x+y-8)
$$

$$
L_x=\frac{3x^2}{2\sqrt{x^3+y^2}}+\lambda=0,\qquad L_y=\frac{2y}{2\sqrt{x^3+y^2}}+\lambda=0
$$

Both equal $-\lambda$, so

$$
\frac{3x^2}{2\sqrt{x^3+y^2}}=\frac{2y}{2\sqrt{x^3+y^2}}\ \Rightarrow\ y=1.5x^2
$$

Put this in the constraint: $x+1.5x^2-8=0$, which is $3x^2+2x-16=0$, so $x=2$ or $x=-\frac{8}{3}$.

> [!success] Answer (the key's critical points)
> $(2,6)$ and $\left(-2\tfrac{2}{3},\ 10\tfrac{2}{3}\right)$.

> [!warning] AI-written classification, not official. Check before relying on it.
> The key stops here. To classify, substitute $y=8-x$ into $f$: $g(x)=x^3+(8-x)^2$, with $g'(x)=3x^2+2x-16$ (zero at the same two points) and $g''(x)=6x+2$.
> - At $x=2$: $g''=14>0$, a **local minimum**, with $f=44$ so $\sqrt f\approx6.63$.
> - At $x=-\frac{8}{3}$: $g''=-14<0$, a **local maximum**, with $f=\frac{2560}{27}$ so $\sqrt f\approx9.74$.
>
> Square root is increasing, so $\sqrt f$ has the same extrema as $f$. Both are only **local**: the function is only defined where $g\ge0$ (that is, $x\gtrsim-5.74$), it equals 0 at that edge, and $g\to\infty$ as $x\to\infty$.

See also [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[PS_08-Local Extrema and Critical Points]] and [[PS_09-Lagrange Multipliers]].

---

## Q3 — A parameter system, a homogeneous system, contour lines (25 points)

### a. The system $\left(\begin{array}{ccc|c}k&2&1&k\\3&k+1&3&1\\1&1&1&k+2\end{array}\right)$

> [!note] Official solution: handwritten key, pages 6 and 7

Swap $R_1\leftrightarrow R_3$ to start with a 1, then eliminate:

$$
\left(\begin{array}{ccc|c}
1&1&1&k+2\\
3&k+1&3&1\\
k&2&1&k
\end{array}\right)
\xrightarrow{\ R_2-3R_1,\ R_3-kR_1\ }
\left(\begin{array}{ccc|c}
1&1&1&k+2\\
0&k-2&0&-3k-5\\
0&2-k&1-k&-k^2-k
\end{array}\right)
$$

Divide $R_2$ by $k-2$ (needs $k\neq2$), then add $(k-2)R_2$ to $R_3$:

$$
\left(\begin{array}{ccc|c}
1&1&1&k+2\\
0&1&0&\frac{-3k-5}{k-2}\\
0&0&1-k&-k^2-4k-5
\end{array}\right)
$$

Divide $R_3$ by $1-k$ (needs $k\neq1$). If $k\neq1,2$ every row has a pivot: **unique solution**. Check the two bad values:

- **$k=2$:** the matrix gives $R_2=(0,0,0\,|\,-11)$ (from $-3k-5=-11$), a contradiction: **no solution**.
- **$k=1$:** the third row is $(0,0,0\,|\,-10)$ (from $-k^2-4k-5=-10$), a contradiction: **no solution**.

> [!success] Answer
> 1. Infinitely many solutions: **none** (no value of $k$ works).
> 2. No solution: $k=1$ or $k=2$.
> 3. Unique solution: $k\neq1$ and $k\neq2$.

> [!tip] Intuition
> Both bad values zero out a pivot but leave a non-zero right side. No bad value leaves a zero right side, so the system never has a free variable. That is why "infinitely many" is empty. This is a usual exam trap: do not assume every special value gives infinitely many solutions.

### b. The homogeneous system for $k=2$

> [!note] Official solution: handwritten key, page 7

$$
\left(\begin{array}{ccc|c}
2&2&1&0\\
3&3&3&0\\
1&1&1&0
\end{array}\right)
$$

The second and third rows are multiples of $(1,1,1)$. Subtract: from $(2,2,1)$ and $(1,1,1)$ we get the row $(0,0,-1)$, so $z=0$, and then $x+y=0$. Let $y=t$:

> [!success] Answer
> $$(x,y,z)=(-t,\ t,\ 0),\quad t\in\mathbb{R}$$

> [!tip] Intuition
> A homogeneous system always has the zero solution, so "no solution" never happens. At $k=2$ the three equations carry only two independent conditions, which leaves one free variable.

See also [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]] and [[PS_12-Systems with Parameters]].

### c. Contour lines of $z=\max\{x,y\}$ for $x,y\ge0$

> [!note] Official solution: handwritten key, page 8

$$
z=\begin{cases}x&x\ge y\\y&x<y\end{cases}
$$

For a level $z=c$ the maximum of the two equals $c$ exactly when one of them equals $c$ and the other is no bigger:

- $x=c$ and $y\le c$, or
- $y=c$ and $x<c$.

So each contour is an **L-shaped corner** with its corner at $(c,c)$: a vertical piece from $(c,0)$ up to $(c,c)$ and a horizontal piece from $(0,c)$ across to $(c,c)$. The key draws $z=3$, $z=5$ and $z=8$.

![[PP18_q3_max_contours.png|480]]

*Contours of $\max\{x,y\}$ for $z=3,5,8$. Larger $z$ gives a larger nested corner.*

> [!success] Answer
> Contour lines are nested right-angle corners with vertex $(c,c)$ on the line $y=x$.

See also [[Lec_05-Two Variable Functions]] and [[PS_05-Domains and Contour Lines of Two-Variable Functions]].

---

## Q4 — A company with a cost function and a bundling rule (25 points)

A company makes $x$ units of A and $y$ units of B per week and sells them at \$20 and \$60 per unit. The cost is

$$
C(x,y)=ax+2ay-300\ln x-2000\ln y+7000
$$

At $(60,200)$ the marginal cost of one more unit of B is \$35 more than the marginal cost of one more unit of A.

> [!note] Official solution: handwritten key, pages 9 and 10

**Find $a$.** $C_x=a-\frac{300}{x}$ and $C_y=2a-\frac{2000}{y}$. At $(60,200)$ the condition $C_y=35+C_x$ gives

$$
2a-\frac{2000}{200}=35+a-\frac{300}{60}\ \Rightarrow\ 2a-10=35+a-5\ \Rightarrow\ a=40
$$

### a. Maximal weekly profit

Profit is revenue minus cost:

$$
P(x,y)=20x+60y-40x-80y+300\ln x+2000\ln y-7000
$$

$$
P(x,y)=-20x-20y+300\ln x+2000\ln y-7000
$$

**Critical point:**

$$
P_x=-20+\frac{300}{x}=0\Rightarrow x=15,\qquad P_y=-20+\frac{2000}{y}=0\Rightarrow y=100
$$

**Second derivative test:**

$$
A=P_{xx}=-\frac{300}{x^2}=-\frac{300}{225}=-\frac{4}{3},\quad B=P_{xy}=0,\quad C=P_{yy}=-\frac{2000}{y^2}=-\frac{1}{5}
$$

$$
\Delta=AC-B^2=\frac{4}{15}>0,\quad A<0
$$

so it is a maximum.

> [!success] Answer
> Produce 15 units of A and 100 units of B. Maximal weekly profit $P(15,100)\approx\$722$ (exactly $-9300+300\ln15+2000\ln100\approx722.76$; the key rounds down to 722).

> [!info] Check
> $-300-2000-7000=-9300$, $300\ln15\approx812.4$ and $2000\ln100\approx9210.3$, summing to $722.8$.

### b. Sold as a bundle: one A with 4 B

Each unit of A is sold with 4 units of B, so the constraint is $y=4x$. Use Lagrange with $L=P(x,y)-\lambda(y-4x)$:

$$
L_x=-20+\frac{300}{x}+4\lambda=0,\qquad L_y=-20+\frac{2000}{y}-\lambda=0
$$

From $L_y$: $\lambda=\frac{2000}{y}-20$. Substitute into $L_x$:

$$
-20+\frac{300}{x}+\frac{8000}{y}-80=0\ \Rightarrow\ \frac{300}{x}+\frac{8000}{y}=100
$$

With $y=4x$: $\frac{300}{x}+\frac{2000}{x}=100$, so $\frac{2300}{x}=100$ and $x=23$, $y=92$.

> [!success] Answer
> $x=23$, $y=92$, maximal weekly profit $P(23,92)\approx\$684$ (exactly $\approx684.23$). The key compares with $P(1,4)\approx-4327$ and takes $(23,92)$ as the maximum.

> [!tip] Intuition
> The profit with the bundling rule (\$684) is **lower** than the unconstrained maximum (\$722). A constraint can only lower the best achievable value or leave it unchanged. The unconstrained optimum $(15,100)$ has $y/x\approx6.7$, not 4, so the rule binds.

> [!warning] Wording quirk in the source
> The question calls $C$ the **annual** cost but asks for **weekly** profit. The key treats both as the same weekly figure. I followed the key.

See also [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] and [[PS_09-Lagrange Multipliers]].

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | Partial derivatives | $xf_x+yf_y=0$ |
| Q1b | Implicit differentiation | $y=x-1$ |
| Q1c | L'Hopital | $-2$ |
| Q2a | Critical point conditions | $a=4$, $b=6$ |
| Q2b | Second derivative test | $(0,2)$ saddle, $(6,20)$ minimum |
| Q2c | Lagrange | critical points $(2,6)$ and $\left(-\frac83,\frac{32}3\right)$ (classification is AI-written) |
| Q3a | Gauss-Jordan with parameter | Unique: $k\neq1,2$. None: $k=1,2$. Infinite: never |
| Q3b | Homogeneous system | $(-t,t,0)$ |
| Q3c | Contours | Nested corners at $(c,c)$ |
| Q4 | Marginal condition then max | $a=40$; $(15,100)$, \$722; bundled $(23,92)$, \$684 |

## Related notes

- Lectures: [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]
- Hub: [[Maths for Economists B]]
