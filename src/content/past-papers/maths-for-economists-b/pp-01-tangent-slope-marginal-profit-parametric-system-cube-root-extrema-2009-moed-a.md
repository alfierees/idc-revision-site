---
title: "Tangent Slope, Marginal Profit, Parametric System & Cube-Root Extrema (2009 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2009)"
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
  - marginal-profit
  - global-extrema
  - gauss-jordan
  - parameters
aliases:
  - Math II Moed A 2009
  - Maths for Economists B 2009 Moed A
  - PP01 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Tangent Slope, Marginal Profit, Parametric System & Cube-Root Extrema (2009 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2009)**, Maths for Economists B, Hever Schulberg. 3 hours, non-graphic calculator only (no formula sheet on this early paper), justify every claim. **Three questions** (the cover says "answer all questions"; marks per question are not printed).
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds three typed question pages followed by a **typed (not handwritten) official solution** on pages 4 to 6. Every part below follows that key. The key has no numerical value for the minimal profit in Q2e and only says "So global min"; I added the value and the reason it is global, marked as my addition.

> [!warning] Numbering quirks in the source
> Q1 has two parts labelled "b" in the typed paper; the key treats the second as **c**, and so does this note.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Slope of the tangent to a slice curve, implicit differentiation on a level curve, global extrema of a one-variable function with a cube root | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_01-Global Extrema, Optimization and Summation]] |
| Q2 | Profit from revenue and cost, meaning of marginal profit, sign of a second derivative, minimum profit with the second derivative test | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q3 | Homogeneous system with more unknowns than equations, a system with parameters $a$ and $k$, solving a concrete case | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]] |

> [!tip] Intuition: the moves that recur
> - Fix one variable to get a one-variable curve (a plane slice), then differentiate. The slope is a partial derivative.
> - A level curve $f(x,y)=c$ is differentiated implicitly: treat $y$ as $y(x)$ and use the chain rule.
> - "Global extremum on a closed interval" means compare the critical points **and the endpoints**, and include points where the derivative does not exist.

---

## Q1 — Tangent slope, implicit slope, global extrema

Given $f(x,y)=x^2 e^{x-ky}+y\ln x$ with $k\neq 0$.

### a. Find $k$ if the tangent slope is 4

**Question.** Find $k$ if the slope of the tangent line to the curve that the plane $y=1$ cuts from the surface, at the point $(1,1)$, is 4.

The plane $y=1$ gives the curve $z=f(x,1)$. Its slope at $x=1$ is the partial derivative $f_x(1,1)$ (see [[Lec_06-Partial Derivatives and the Differential]]).

$$
f_x(x,y)=2x\,e^{x-ky}+x^2 e^{x-ky}+\frac{y}{x}
$$

$$
f_x(1,1)=2e^{1-k}+e^{1-k}+1=3e^{1-k}+1
$$

Set the slope equal to 4:

$$
3e^{1-k}+1=4 \;\Rightarrow\; e^{1-k}=1 \;\Rightarrow\; 1-k=0
$$

> [!success] Answer
> $k=1$.

### b. Point on the curve and $dy/dx$

**Question.** Plug $k=-1$. Show that $(1,-1)$ is on the curve $f(x,y)=1$ and find $dy/dx$ there.

With $k=-1$ the function is $f(x,y)=x^2e^{x+y}+y\ln x$.

**On the curve:** $f(1,-1)=1\cdot e^{0}+(-1)\ln 1 = 1+0=1$. So the point lies on $f=1$.

**Slope.** Differentiate $x^2e^{x+y}+y\ln x=1$ with respect to $x$, with $y=y(x)$:

$$
2x e^{x+y}+x^2 e^{x+y}(1+y')+y'\ln x+\frac{y}{x}=0
$$

At $(1,-1)$ every exponential is $e^0=1$, $\ln 1=0$ and $y/x=-1$:

$$
2+(1+y')+0-1=0 \;\Rightarrow\; 2+y'=0
$$

> [!success] Answer
> $\dfrac{dy}{dx}(1,-1)=-2$.

> [!tip] Intuition
> The same number comes from $y'=-f_x/f_y$ on a level curve. Here $f_x(1,-1)=2+1-1=2$ and $f_y=x^2e^{x+y}+\ln x=1$ at $(1,-1)$, so $y'=-2/1=-2$. Both routes agree.

### c. Global extremum on $[-27,8]$

**Question.** Find the global extremum of $f(\sqrt[3]{x},0)$ on $[-27,8]$.

Substituting $y=0$ and $x\to\sqrt[3]{x}$:

$$
h(x)=f(\sqrt[3]{x},0)=\left(\sqrt[3]{x}\right)^2 e^{\sqrt[3]{x}}=x^{2/3}e^{x^{1/3}}
$$

Derivative (product rule):

$$
h'(x)=\tfrac{2}{3}x^{-1/3}e^{x^{1/3}}+x^{2/3}e^{x^{1/3}}\cdot\tfrac{1}{3}x^{-2/3}
=e^{x^{1/3}}\left(\tfrac{2}{3}x^{-1/3}+\tfrac{1}{3}\right)
$$

- $h'=0$ when $\tfrac{2}{3}x^{-1/3}+\tfrac13=0$, so $x^{-1/3}=-\tfrac12$, so $x^{1/3}=-2$, so $x=-8$.
- $h'$ does not exist at $x=0$ (the factor $x^{-1/3}$ blows up), so $x=0$ is also a candidate.
- Endpoints: $x=-27$ and $x=8$.

Compare all candidates:

| $x$ | $h(x)$ | Approximate value |
|---|---|---|
| $-27$ | $9e^{-3}$ | 0.448 |
| $-8$ | $4e^{-2}$ | 0.541 |
| $0$ | $0$ | 0 |
| $8$ | $4e^{2}$ | 29.56 |

> [!success] Answer
> Global minimum $h(0)=0$; global maximum $h(8)=4e^2$.

![[PP01_q1_cuberoot_cusp.png|640]]

The curve has a sharp cusp at the minimum $x=0$: the derivative does not exist there, which is why a "set $h'=0$" approach alone would miss it.

> [!warning] Exam trap
> Do not stop at $h'=0$. The global minimum sits at a point where $h'$ is **undefined**, and the maximum is at an **endpoint**.

---

## Q2 — Two-product profit

A manufacturer sells product A at \$40 per unit ($x$ units) and product B at \$60 per unit ($y$ units). Cost: $C(x,y)=20x+30y+400\sqrt{x}+300\sqrt{y}$.

### a. Profit function

$$
P(x,y)=40x+60y-C(x,y)=20x+30y-400\sqrt{x}-300\sqrt{y}
$$

### b. Marginal profits at (64, 64)

**Question.** Find the marginal profit functions at 64 units of each product and explain what they mean.

$$
P_x=20-\frac{200}{\sqrt{x}},\qquad P_y=30-\frac{150}{\sqrt{y}}
$$

$$
P_x(64,64)=20-\frac{200}{8}=-5,\qquad P_y(64,64)=30-\frac{150}{8}=\frac{45}{4}
$$

> [!success] Answer
> $P_x(64,64)=-5$ and $P_y(64,64)=\tfrac{45}{4}=11.25$.
> At 64 units of each, producing **one more unit of A reduces profit by about \$5**, and one more unit of B **increases profit by about \$45/4**.

### c. Is $P_x$ increasing in $x$?

$$
P_{xx}=100\,x^{-3/2}>0
$$

> [!success] Answer
> Increasing. $P_x=20-200/\sqrt{x}$ visibly rises with $x$, and $P_{xx}>0$ confirms it.

### d. Does $P_y$ depend on $x$?

> [!success] Answer
> No effect. $P_y=30-150/\sqrt{y}$ contains no $x$, so $P_{yx}=0$.

### e. Minimal profit

**Question.** Find the numbers of units that give minimal profit.

Set both partials to zero:

$$
20-\frac{200}{\sqrt{x}}=0\Rightarrow \sqrt{x}=10\Rightarrow x=100,\qquad 30-\frac{150}{\sqrt{y}}=0\Rightarrow\sqrt{y}=5\Rightarrow y=25
$$

Second derivatives:

$$
P_{xx}=100x^{-3/2},\quad P_{yy}=75y^{-3/2},\quad P_{xy}=0
$$

At $(100,25)$: $P_{xx}=\tfrac{100}{1000}=\tfrac1{10}$, $P_{yy}=\tfrac{75}{125}=\tfrac35$, so

$$
\Delta=P_{xx}P_{yy}-P_{xy}^2=\frac{3}{50}-0>0,\qquad P_{xx}>0
$$

> [!success] Answer
> $x=100$, $y=25$: a minimum, which the key calls a global minimum.

> [!tip] Intuition (my addition, not in the key)
> It is global because $P_{xx}>0$ and $P_{yy}>0$ for **every** $x,y>0$ with $P_{xy}=0$, so $P$ is convex on its whole domain and its only critical point must be the global minimum. The minimal profit is $P(100,25)=2000+750-4000-1500=-2750$ (a loss of \$2,750).

---

## Q3 — System with parameters $a$ and $k$

$$
\begin{cases}
x_1-2x_2+x_3+kx_4=2a\\
2x_1-4x_2+kx_3-x_4=a\\
-x_1+2x_2-x_3+(k^2-2)x_4=ka
\end{cases}
$$

### a. How many solutions when $a=0$?

With $a=0$ every right-hand side is 0, so the system is **homogeneous**: it always has the trivial solution, and with 4 unknowns but only 3 equations at least one variable is free.

> [!success] Answer
> Infinitely many solutions (see [[Lec_11-Reduced Echelon Form and Homogeneous Systems]]).

### b. $a=1$: which $k$?

Row operations $R_2\to R_2-2R_1$ and $R_3\to R_3+R_1$ on the augmented matrix:

$$
\left(\begin{array}{cccc|c}
1&-2&1&k&2\\
0&0&k-2&-1-2k&-3\\
0&0&0&k^2+k-2&k+2
\end{array}\right)
$$

Note $k^2+k-2=(k-1)(k+2)$. The last row reads $(k-1)(k+2)\,x_4=k+2$.

- **$k\neq 1$ and $k\neq -2$ and $k\neq 2$:** the last row fixes $x_4=\tfrac1{k-1}$, the second fixes $x_3$, and $x_1,x_2$ stay linked by one equation. Infinitely many solutions.
- **$k=1$:** row 3 becomes $0=3$. No solution.
- **$k=-2$:** row 3 becomes $0=0$, row 2 is $(0,0,-4,3\mid -3)$, so it is consistent with a free $x_2$ and $x_4$. Infinitely many solutions.
- **$k=2$:** row 2 becomes $(0,0,0,-5\mid -3)$ while row 3 becomes $(0,0,0,4\mid 4)$. Inconsistent ($x_4$ would be both $3/5$ and 1). No solution.

> [!success] Answer
> 1. Infinitely many solutions: $k\neq 1,\,2$ (this includes $k=-2$).
> 2. No solution: $k=1$ or $k=2$.

> [!warning] Exam trap
> The key's headline "for $k\neq\pm2,1$ infinitely many" leaves $k=-2$ to a separate case; it too gives infinitely many. A unique solution is impossible: 3 equations, 4 unknowns.

### c. $k=2$, $a=0$

The system is homogeneous. After reduction:

$$
\left(\begin{array}{cccc|c}
1&-2&1&0&0\\
0&0&0&1&0\\
0&0&0&0&0
\end{array}\right)
$$

so $x_4=0$ and $x_1-2x_2+x_3=0$. Let $x_2=s$, $x_3=t$ free.

> [!success] Answer
> $(x_1,x_2,x_3,x_4)=(2s-t,\;s,\;t,\;0)$ for any $s,t$.

---

## Recap

| Part | Tool | Answer |
|---|---|---|
| Q1a | $f_x(1,1)=4$ | $k=1$ |
| Q1b | implicit differentiation | $dy/dx=-2$ |
| Q1c | critical, cusp and endpoints | min $0$ at $x=0$, max $4e^2$ at $x=8$ |
| Q2a | revenue minus cost | $20x+30y-400\sqrt x-300\sqrt y$ |
| Q2b | partials at (64,64) | $-5$ and $45/4$ |
| Q2c | $P_{xx}>0$ | increasing |
| Q2d | $P_y$ has no $x$ | no effect |
| Q2e | second derivative test | $(100,25)$ global min |
| Q3a | homogeneous, 3 eqs, 4 unknowns | infinitely many |
| Q3b | row reduction | infinite for $k\neq1,2$; none for $k=1,2$ |
| Q3c | homogeneous reduction | $(2s-t,s,t,0)$ |

## Related notes

- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_01-Global Extrema and Optimisation]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_07-Applications of Partial Derivatives]], [[PS_08-Local Extrema and Critical Points]], [[PS_11-Reduced Echelon Form and Solutions]], [[PS_12-Systems with Parameters]]
- Hub: [[Maths for Economists B]]
