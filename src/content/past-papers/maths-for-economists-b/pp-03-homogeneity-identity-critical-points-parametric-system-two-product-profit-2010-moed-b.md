---
title: "Homogeneity Identity, Critical Points, Parametric System & Two-Product Profit (2010 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2010)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - partial-derivatives
  - implicit-differentiation
  - critical-points
  - lagrange-multipliers
  - gauss-jordan
  - profit-maximisation
aliases:
  - Math II Moed B 2010
  - Maths for Economists B 2010 Moed B
  - PP03 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Homogeneity Identity, Critical Points, Parametric System & Two-Product Profit (2010 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2010)**, Maths for Economists B, Hever Schulberg. 3 hours, non-graphic calculator only, justify every claim. 4 questions (marks not printed).
> Builds on: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (page 2) and the lecturer's **handwritten official solutions** headed "Solution to 2010B" (pages 3 to 7). All four questions have a key. Two places go beyond it: Q2c (the key stops at the critical points) and my cross-check in Q1b; both are marked.

> [!warning] Source quirk
> The typed cover page of this file reads "Moed A" (a template header carried over), but the solution page is headed "2010B" and the file is named for Moed B. I treat it as the 2010 Moed B paper.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A homogeneity-type identity $xf_x+yf_y$, tangent to an implicitly defined curve, a limit with L'Hopital | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q2 | Critical point gives parameters, classify critical points, Lagrange with a square root | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q3 | Parametric $3\times3$ system and a homogeneous case | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]] |
| Q4 | Two-product profit: build $P$, maximise, evaluate | [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |

> [!tip] Intuition: the moves that recur
> - A square root of a function has the same critical points as the function itself (where the function is positive), so a Lagrange problem can drop the root.
> - To classify a critical point use $\Delta=AC-B^2$: $\Delta<0$ saddle; $\Delta>0$ with $A>0$ minimum, $A<0$ maximum.
> - For a parametric system, divide only by quantities you have ruled out being zero, then test those values separately.

---

## Q1 — Identity, tangent and limit

Given $f(x,y)=\dfrac{x}{y}-\dfrac{y}{x}$.

### a. Find $x f_x+y f_y$

Write $f=xy^{-1}-yx^{-1}$.

$$
f_x=\frac1y+\frac{y}{x^2},\qquad f_y=-\frac{x}{y^2}-\frac1x
$$

$$
xf_x+yf_y=\frac{x}{y}+\frac{y}{x}-\frac{x}{y}-\frac{y}{x}=0
$$

> [!success] Answer
> $x f_x+y f_y=0$.

> [!tip] Intuition
> Scaling both $x$ and $y$ by the same factor leaves $x/y$ and $y/x$ unchanged, so $f$ is homogeneous of degree 0. The expression $xf_x+yf_y$ is exactly the degree times $f$ (Euler), here $0\cdot f=0$.

### b. Tangent to the curve $f(x,e^{y/x})=0$ at $(1,0)$

Substituting the second slot: $f(x,e^{y/x})=\dfrac{x}{e^{y/x}}-\dfrac{e^{y/x}}{x}=0$.

**Check the point:** at $(1,0)$, $\dfrac{1}{e^0}-\dfrac{e^0}{1}=1-1=0$.

**Differentiate implicitly** (with $y=y(x)$). The first term $xe^{-y/x}$ has derivative $e^{-y/x}-xe^{-y/x}\cdot\dfrac{y'x-y}{x^2}$; the second term $\dfrac{e^{y/x}}{x}$ has derivative $\dfrac{e^{y/x}\frac{y'x-y}{x^2}\,x-e^{y/x}}{x^2}$. At $(1,0)$ all exponentials are 1 and $y'x-y=y'$:

$$
(1-y')-(y'-1)=0\;\Rightarrow\;2-2y'=0\;\Rightarrow\;y'=1
$$

Tangent line: $y-0=1\cdot(x-1)$.

> [!success] Answer
> $y=x-1$.

> [!tip] Intuition: cross-check (my addition)
> The curve equation $\frac{x}{u}=\frac{u}{x}$ with $u=e^{y/x}>0$ means $u=x$ (for $x>0$), so $e^{y/x}=x$ and $y=x\ln x$. Then $y'=\ln x+1=1$ at $x=1$, matching the key.

### c. $\displaystyle\lim_{x\to0}\frac{f(e^x,e^{2x})}{x}$

$$
f(e^x,e^{2x})=\frac{e^x}{e^{2x}}-\frac{e^{2x}}{e^x}=e^{-x}-e^{x}
$$

The limit is $\tfrac00$, so L'Hopital applies:

$$
\lim_{x\to0}\frac{e^{-x}-e^{x}}{x}=\lim_{x\to0}\frac{-e^{-x}-e^{x}}{1}=-1-1
$$

> [!success] Answer
> $-2$.

---

## Q2 — Critical points

Given $f(x,y)=x^3+y^2-ay-bxy+3ax$.

### a. Find $a$ and $b$ if $(0,2)$ is a critical point

$$
f_x=3x^2-by+3a,\qquad f_y=2y-a-bx
$$

At $(0,2)$:

$$
f_x(0,2)=-2b+3a=0,\qquad f_y(0,2)=4-a=0
$$

So $a=4$, then $-2b+12=0$ gives $b=6$.

> [!success] Answer
> $a=4$, $b=6$.

### b. Relative extrema for those values

Now $f=x^3+y^2-4y-6xy+12x$:

$$
f_x=3x^2-6y+12=0\;\Rightarrow\;x^2-2y+4=0,\qquad f_y=2y-4-6x=0\;\Rightarrow\;y=3x+2
$$

Substitute $y=3x+2$: $x^2-6x-4+4=x^2-6x=0$, so $x=0$ or $x=6$. The critical points are $(0,2)$ and $(6,20)$.

Second derivatives: $f_{xx}=6x$, $f_{xy}=-6$, $f_{yy}=2$.

| Point | $A=f_{xx}$ | $B=f_{xy}$ | $C=f_{yy}$ | $\Delta=AC-B^2$ | Type |
|---|---|---|---|---|---|
| $(0,2)$ | 0 | $-6$ | 2 | $-36$ | saddle |
| $(6,20)$ | 36 | $-6$ | 2 | $36$ | minimum ($\Delta>0$, $A>0$) |

> [!success] Answer
> $(0,2)$ is a saddle point; $(6,20)$ is a relative minimum, with $f(6,20)=-112$.

### c. Extremum of $\sqrt{f}$ with $a=b=0$ under $x+y=8$

With $a=b=0$: $f=x^3+y^2$. Lagrangian:

$$
L=\sqrt{x^3+y^2}+\lambda(x+y-8)
$$

$$
L_x=\frac{3x^2}{2\sqrt{x^3+y^2}}+\lambda=0,\qquad L_y=\frac{2y}{2\sqrt{x^3+y^2}}+\lambda=0,\qquad L_\lambda=x+y-8=0
$$

Subtract the first two equations: $\dfrac{3x^2}{2\sqrt{\cdot}}=\dfrac{2y}{2\sqrt{\cdot}}$, so $y=1.5x^2$. Into the constraint:

$$
x+1.5x^2-8=0\;\Rightarrow\;x=2\;\text{ or }\;x=-\tfrac83
$$

> [!success] Answer
> Candidate extreme points $(2,6)$ and $\left(-2\tfrac23,\,10\tfrac23\right)$.

> [!warning] My addition: classification (the key stops at the points)
> On the line $y=8-x$ let $g(x)=x^3+(8-x)^2$. Then $g'=3x^2+2x-16$ (roots $2$ and $-\tfrac83$, matching the key) and $g''=6x+2$. At $x=2$, $g''=14>0$: a **local minimum** of $g$, so of $\sqrt g$, value $\sqrt{44}\approx6.63$. At $x=-\tfrac83$, $g''=-14<0$: a **local maximum**, value $\sqrt{2560/27}\approx9.74$. Neither is global: $g\to\infty$ as $x\to\infty$, and $g$ reaches 0 near $x\approx-5.7$ where $\sqrt g=0$. Checked symbolically.

---

## Q3 — Parametric system

### a. Number of solutions

$$
\left(\begin{array}{ccc|c}
k&2&1&k\\
3&k+1&3&1\\
1&1&1&k+2
\end{array}\right)
$$

Swap $R_1\leftrightarrow R_3$, then $R_2\to R_2-3R_1$ and $R_3\to R_3-kR_1$:

$$
\left(\begin{array}{ccc|c}
1&1&1&k+2\\
0&k-2&0&-3k-5\\
0&2-k&1-k&-k^2-k
\end{array}\right)
$$

For $k\neq2$ divide row 2 by $k-2$, then $R_3\to R_3+(k-2)R_2$:

$$
\left(\begin{array}{ccc|c}
1&1&1&k+2\\
0&1&0&\dfrac{-3k-5}{k-2}\\
0&0&1-k&-k^2-4k-5
\end{array}\right)
$$

For $k\neq1$ as well, the third row gives $z$, then $y$ and $x$ follow: a unique solution. As a cross-check, the coefficient determinant is $(k-1)(k-2)$ (checked symbolically), nonzero exactly when $k\neq1,2$. The special values are then checked directly.

- **$k\neq1,2$:** unique solution.
- **$k=2$:** equations 2 and 3 become $3x+3y+3z=1$ and $x+y+z=4$. The first says $x+y+z=\tfrac13$, contradicting the second (the key reaches $0=-11$). No solution.
- **$k=1$:** equations 1 and 3 give $y=-2$ (subtract: $x+2y+z=1$ minus $x+y+z=3$), while equation 2 minus $3\times$equation 3 gives $-y=-8$, so $y=8$. Contradiction (the key reaches $0=-10$). No solution.

> [!success] Answer
> 1. Infinitely many solutions: **none** (no value of $k$).
> 2. No solution: $k=1$ and $k=2$.
> 3. Unique solution: $k\neq1$ and $k\neq2$.

### b. Homogeneous system at $k=2$

$$
\left(\begin{array}{ccc|c}
2&2&1&0\\
3&3&3&0\\
1&1&1&0
\end{array}\right)
$$

Rows 2 and 3 are proportional. Subtracting $2R_3$ from $R_1$ gives $-z=0$, so $z=0$. The remaining equation is $x+y=0$. Let $y=t$.

> [!success] Answer
> $(x,y,z)=(-t,\;t,\;0)$ for any real $t$.

---

## Q4 — Two-product profit

A company sells $x$ units of A and $y$ units of B per year. Cost: $C=\tfrac12x^2+3y^2+100x+100y$ thousand \$. The retail price of A is $110-\tfrac12x+2y$ and of B is $120-y+x$ (thousand \$ per unit).

### a. Profit function

$$
P=x\left(110-\tfrac12x+2y\right)+y\left(120-y+x\right)-\tfrac12x^2-3y^2-100x-100y
$$

Expand: revenue is $110x-\tfrac12x^2+2xy+120y-y^2+xy$. Subtract cost:

$$
P(x,y)=-x^2-4y^2+3xy+10x+20y\quad\text{(thousand \$)}
$$

### b. Maximising quantities

$$
P_x=-2x+3y+10=0,\qquad P_y=-8y+3x+20=0
$$

From the first, $x=\dfrac{3y+10}{2}$. Substitute: $-8y+\dfrac{9y+30}{2}+20=0$, so $-16y+9y+30+40=0$ and $y=10$, $x=20$.

Second-order test: $A=P_{xx}=-2$, $B=P_{xy}=3$, $C=P_{yy}=-8$:

$$
\Delta=AC-B^2=16-9=7>0,\qquad A<0
$$

> [!success] Answer
> $x=20$ units of A and $y=10$ units of B: a maximum.

### c. Maximal annual profit

$$
P(20,10)=-400-400+600+200+200=200
$$

> [!success] Answer
> **200 thousand \$**, i.e. \$200,000 per year.

---

## Recap

| Part | Tool | Answer |
|---|---|---|
| Q1a | partial derivatives | $xf_x+yf_y=0$ |
| Q1b | implicit differentiation | $y=x-1$ |
| Q1c | L'Hopital | $-2$ |
| Q2a | $f_x=f_y=0$ at $(0,2)$ | $a=4$, $b=6$ |
| Q2b | $\Delta=AC-B^2$ | $(0,2)$ saddle, $(6,20)$ min |
| Q2c | Lagrange | $(2,6)$ and $(-8/3,32/3)$ |
| Q3a | row reduction, determinant | unique for $k\neq1,2$; none for $k=1,2$ |
| Q3b | homogeneous reduction | $(-t,t,0)$ |
| Q4a | revenue minus cost | $-x^2-4y^2+3xy+10x+20y$ |
| Q4b | second derivative test | $(20,10)$ max |
| Q4c | evaluate | \$200,000 |

## Related notes

- Lectures: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_11-Reduced Echelon Form and Solutions]], [[PS_12-Systems with Parameters]]
- Hub: [[Maths for Economists B]]
