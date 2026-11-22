---
title: "Implicit Curve, Tree Planting, Lagrange on a Circle, x ln x, Tangent Area & Parametric System (2016 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, 2016 (file labelled Moed A)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - implicit-differentiation
  - saddle-point
  - lagrange-multipliers
  - asymptotes
  - parametric-systems
aliases:
  - Math II Moed A 2016
  - Maths for Economists B 2016 Moed A
  - PP13 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Implicit Curve, Tree Planting, Lagrange on a Circle, x ln x, Tangent Area & Parametric System (2016 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, 2016 (Moed A)**, Maths for Economists B, Hever Schulberg. 3 hours, non-graphic calculator only (no formula sheet in this sitting), 4 questions. "Justify anything you claim and explain all your calculations." The typed paper does not print point values per question.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 1 to 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 14). Every part follows that key. **Labelling quirk:** the typed paper has no moed or year on its title page, and the solution pages are headed "Solution to 2016C" although the file is named "2016 - A". The questions and the key match each other part by part, so this note treats them as one paper and files it as 2016 Moed A, as the file name says. No part needed an AI-written answer.

> [!note] Two flags on the key
> - **Q2b** labels $(-6,18)$ "max" and $(-6,-2)$ "min" without a second-order test. The labels are right (see the circle argument below); the key just does not show why.
> - **Q3b** is an **area by definite integral**, which the lectures here do not teach (assumed from Maths A), so there is no lecture link for that step.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A level curve of a two-variable function: membership test, tangent line, finding an exponent $n$, $dx/dy$, then critical points and the second derivative test | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]] |
| Q2 | Linear model of a farm and a domain-restricted maximum, Lagrange on a circle | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q3 | Full study of $x\ln x$, area between a power curve and its tangent | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q4 | A system with a parameter $k$ and four unknowns: no solution, unique, infinitely many | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]] |

> [!tip] Intuition: the moves that recur
> - "The curve where the surface meets $z=c$" is the **level curve** $F(x,y)=c$; check a point by substituting (Q1a1), then differentiate implicitly (Q1a2 to a4).
> - A linear change in output per tree means revenue is a **quadratic**; if the vertex is outside the allowed domain, the maximum is at an **endpoint** (Q2a).
> - On a closed constraint curve (a circle) a continuous function must attain both a maximum and a minimum, and the two Lagrange points are exactly them (Q2b).
> - A system with a parameter: do Gauss-Jordan once, **dividing only by expressions you then rule out**, and test those values separately (Q4).

---

## Q1 — A level curve and a critical point

Given $f(x,y)=y^n\sqrt x-8x-y$.

### a. The curve where the surface meets the plane $z=-8$

The curve is $-8=y^n\sqrt x-8x-y$.

**1. Show that $\left(\frac{49}{64},1\right)$ is not on the curve.**

Substitute $x=\frac{49}{64}$, $y=1$ (so $\sqrt x=\frac78$ and the power of $y$ is 1 whatever $n$ is):

$$
1^n\cdot\frac78 - 8\cdot\frac{49}{64} - 1 = \frac78-\frac{49}{8}-1 = -\frac{25}{4}
$$

and $-\frac{25}{4}\neq -8$.

> [!success] Answer
> **Not on the curve**, because $f\!\left(\frac{49}{64},1\right)=-\frac{25}{4}\ne-8$ (for every $n$).

**2. Tangent line at the point of the curve with $y=1$, given $\dfrac{dy}{dx}=7.5$ there.**

First find that point: put $y=1$ into the curve equation:

$$
-8=\sqrt x-8x-1 \;\Rightarrow\; 8x-7=\sqrt x
$$

Square both sides:

$$
64x^2-112x+49=x \;\Rightarrow\; 64x^2-113x+49=0 \;\Rightarrow\; x=\frac{49}{64}\ \text{or}\ x=1
$$

The root $x=\frac{49}{64}$ is **extraneous** (squaring introduced it; part 1 showed that point is not on the curve). So $x=1$ and the point is $(1,1)$.

Tangent line with slope $7.5$:

$$
y-1=7.5(x-1) \;\Rightarrow\; y=7.5x-6.5, \qquad z=-8
$$

> [!success] Answer
> **$y=7.5x-6.5$, with $z=-8$.** (A tangent line to a curve in 3D lies in its plane, so we give $z=-8$ as well.)

**3. Find $n$.** Differentiate the curve equation implicitly with $x$ as the independent variable ($y=y(x)$):

$$
0 = n y^{n-1}y'\sqrt x + y^n\cdot\frac{1}{2\sqrt x} - 8 - y'
$$

Plug in $(1,1)$ and $y'=7.5$:

$$
0 = 7.5n + \frac12 - 8 - 7.5 \;\Rightarrow\; 7.5n=15
$$

> [!success] Answer
> **$n=2$.**

**4. Find $\dfrac{dx}{dy}$ at that point for $n=2$.** Now $y$ is the independent variable and $x=x(y)$. Differentiate $-8=y^2\sqrt x-8x-y$ with respect to $y$:

$$
0 = 2y\sqrt x + y^2\cdot\frac{1}{2\sqrt x}\,x' - 8x' - 1
$$

At $(1,1)$: $0=2+\frac12x'-8x'-1$, so $7.5x'=1$.

$$
x'=\frac{1}{7.5}=\frac{2}{15}\approx0.133
$$

> [!success] Answer
> **$\dfrac{dx}{dy}=\dfrac{2}{15}\approx 0.133$**, the reciprocal of $\dfrac{dy}{dx}=7.5$, as it must be.

### b. For $n=2$: relative extreme points of $f$

$$
f(x,y)=y^2\sqrt x-8x-y
$$

First-order conditions:

$$
f_x = \frac{y^2}{2\sqrt x}-8=0 \;\Rightarrow\; \sqrt x=\frac{y^2}{16}, \qquad
f_y = 2y\sqrt x-1=0 \;\Rightarrow\; \sqrt x=\frac1{2y}
$$

Equate the two expressions for $\sqrt x$: $\dfrac{y^2}{16}=\dfrac{1}{2y}$, so $y^3=8$ and $y=2$. Then $\sqrt x=\frac14$, so $x=\frac1{16}$.

Critical point: $\left(\frac1{16},2\right)$.

Second derivatives:

$$
f_{xx} = -\frac{y^2}{4x^{3/2}} \Rightarrow A=-64, \qquad
f_{xy} = \frac{y}{\sqrt x} \Rightarrow B=8, \qquad
f_{yy}=2\sqrt x \Rightarrow C=\frac12
$$

$$
\Delta = AC-B^2 = -64\cdot\frac12-8^2 = -96<0
$$

> [!success] Answer
> The only critical point is $\left(\frac1{16},2\right)$ and it is a **saddle point** ($\Delta=-96<0$).

---

## Q2 — Apple trees and a Lagrange problem

### a. How many trees to plant for maximal total production

Let $x$ be the **total** number of trees. The farmer has 20 and may add up to 130, so the domain is $20\le x\le150$.

Let $y$ be the produce (kg) of each tree. The table (20 trees give 60, 21 trees give 59.8, 22 give 59.6) shows $y$ is linear in $x$ with slope $\frac{60-59.8}{20-21}=-0.2$:

$$
y-60=-0.2(x-20) \;\Rightarrow\; y=-0.2x+64
$$

Total annual production:

$$
f(x)=x\cdot y=x(-0.2x+64)=-0.2x^2+64x
$$

$$
f'(x)=-0.4x+64=0 \;\Rightarrow\; x=160
$$

But $160$ is **not in the domain** ($x\le150$). A downward parabola with its vertex to the right of the domain is increasing across the whole domain, so the maximum is at the right-hand end. Compare the endpoints:

$$
f(20)=-0.2(400)+64(20)=1200, \qquad f(150)=-0.2(22500)+64(150)=5100
$$

> [!success] Answer
> **Plant 130 additional trees (150 in total), for a maximal annual production of 5100 kg.**

> [!tip] Intuition
> Each extra tree costs the others 0.2 kg per tree, but a new tree also adds its own produce. As long as the number of trees is below 160, adding one still raises the total. The farmer's cap of 150 stops them before the peak.

### b. Lagrange: extremes of $f(x,y)=e^y$ under $x^2+y^2+12x-16y=0$

$$
L(x,y,\lambda)=e^y-\lambda\left(x^2+y^2+12x-16y\right)
$$

$$
L_x=-\lambda(2x+12)=0, \qquad L_y=e^y-\lambda(2y-16)=0, \qquad L_\lambda=-\left(x^2+y^2+12x-16y\right)=0
$$

From $L_x$: either $\lambda=0$ or $x=-6$. If $\lambda=0$, then $L_y=e^y=0$, which is impossible. So **$x=-6$**.

Substitute $x=-6$ into the constraint:

$$
36+y^2-72-16y=0 \;\Rightarrow\; y^2-16y-36=0 \;\Rightarrow\; y=18\ \text{or}\ y=-2
$$

Values: $f(-6,18)=e^{18}$ and $f(-6,-2)=e^{-2}$.

![[PP13_q2b_circle_constraint.png|520]]

*The constraint is the circle $(x+6)^2+(y-8)^2=100$ (centre $(-6,8)$, radius 10). Since $e^y$ increases with $y$, the highest point of the circle is the maximum and the lowest point is the minimum.*

> [!success] Answer
> **Maximum at $(-6,18)$ with $f=e^{18}$; minimum at $(-6,-2)$ with $f=e^{-2}$.**

---

## Q3 — $x\ln x$ and a tangent area

### a. Study $f(x)=x\ln x$

**1. Domain.** $x>0$.

**2. Axes intersections.** There is no $y$-intercept (0 is not in the domain). For the $x$-axis: $x\ln x=0$ needs $x=0$ (excluded) or $\ln x=0\Rightarrow x=1$. The point is **$(1,0)$**.

**3. Asymptotes.**

- As $x\to\infty$: $x\ln x\to\infty\cdot\infty=\infty$, so there is **no horizontal asymptote**.
- At the boundary $x\to0^+$: this is a $0\cdot(-\infty)$ form. Rewrite as a fraction and use L'Hopital:

$$
\lim_{x\to0^+}x\ln x=\lim_{x\to0^+}\frac{\ln x}{x^{-1}}\stackrel{L'H}{=}\lim_{x\to0^+}\frac{1/x}{-x^{-2}}=\lim_{x\to0^+}(-x)=0
$$

The limit is finite, so there is **no vertical asymptote** (the graph just ends at an open circle at the origin).

**4. Relative extreme points.**

$$
f'(x)=\ln x+x\cdot\frac1x=\ln x+1=0 \;\Rightarrow\; \ln x=-1 \;\Rightarrow\; x=\frac1e
$$

$f'<0$ for $0<x<\frac1e$ and $f'>0$ for $x>\frac1e$, so the function decreases and then increases: a **minimum** at $\left(\frac1e,-\frac1e\right)$.

**5. Graph.**

![[PP13_q3_x_ln_x.png|560]]

*Starts at an open circle at the origin, dips to the minimum $(1/e,-1/e)$, crosses the axis at $(1,0)$ and keeps growing.*

> [!success] Answer
> Domain $x>0$; intercept $(1,0)$; no asymptotes; relative (and global) minimum at $\left(\frac1e,-\frac1e\right)$.

### b. Area between $f(x)=x^n$, its tangent at $x=t$, and the $y$-axis

Regardless of part a. Here $n>1$ is an integer and $t>0$.

**Tangent line at $x=t$.** The slope is $f'(t)=nt^{n-1}$ and the point is $(t,t^n)$:

$$
y-t^n=nt^{n-1}(x-t) \;\Rightarrow\; y=nt^{n-1}x+t^n(1-n)
$$

**Area.** Between $x=0$ and $x=t$ the curve $x^n$ lies above its tangent (it is convex for $n>1$), so integrate curve minus tangent:

$$
S=\int_0^t\left(x^n-nt^{n-1}x-t^n(1-n)\right)dx
=\left[\frac{x^{n+1}}{n+1}-\frac{nt^{n-1}x^2}{2}-t^n(1-n)x\right]_0^t
$$

$$
S=\frac{t^{n+1}}{n+1}-\frac{n\,t^{n+1}}{2}-(1-n)\,t^{n+1}
$$

Take the common factor $t^{n+1}$ and a common denominator $2(n+1)$:

$$
S=t^{n+1}\cdot\frac{2-n(n+1)-2(n+1)(1-n)}{2(n+1)}
=t^{n+1}\cdot\frac{n^2-n}{2(n+1)}
$$

> [!success] Answer
> **$S=\dfrac{n(n-1)\,t^{n+1}}{2(n+1)}$**, as required.

> [!warning] Sanity check
> For $n=2$ the curve is $x^2$ and the area is $\frac{t^3}{3}$. The formula gives $\frac{2\cdot1\cdot t^3}{2\cdot3}=\frac{t^3}{3}$. Correct.

---

## Q4 — A system with a parameter $k$

$$
\begin{cases}
x_1+2x_2+kx_3+3x_4-4=0\\
2x_1+kx_2+4x_3+6x_4-3=2k\\
x_1+3x_2-x_3+3x_4-4=k
\end{cases}
$$

Moving the constants to the right gives the augmented matrix

$$
\left(\begin{array}{cccc|c} 1&2&k&3&4\\ 2&k&4&6&2k+3\\ 1&3&-1&3&k+4 \end{array}\right)
$$

### a. Can the system be homogeneous?

> [!success] Answer
> **No.** A homogeneous system has all constants equal to 0. Already the first equation has the constant 4, which does not depend on $k$, so no value of $k$ makes it homogeneous.

### b. Number of solutions as a function of $k$

> [!note] Reconstructed from the key
> The handwritten working is compressed; the steps below spell it out.

$R_2\to R_2-2R_1$ and $R_3\to R_3-R_1$:

$$
\left(\begin{array}{cccc|c} 1&2&k&3&4\\ 0&k-4&4-2k&0&2k-5\\ 0&1&-k-1&0&k \end{array}\right)
$$

Swap $R_2\leftrightarrow R_3$, then $R_3\to R_3-(k-4)R_2$:

$$
\left(\begin{array}{cccc|c} 1&2&k&3&4\\ 0&1&-k-1&0&k\\ 0&0&k^2-5k&0&-k^2+6k-5 \end{array}\right)
$$

(The entries come from $(4-2k)+(k-4)(k+1)=k^2-5k$ and $(2k-5)-(k-4)k=-k^2+6k-5$.)

The last row is $k(k-5)\,x_3=-k^2+6k-5$. Column 4 has the entries $3,0,0$ and no pivot of its own in rows 2 and 3, so **$x_4$ is always a free variable**. That is why a unique solution is never possible.

- **$k\neq0$ and $k\neq5$:** divide $R_3$ by $k^2-5k$; there are 3 pivots (columns 1, 2, 3) and $x_4$ is free: **infinitely many solutions**.
- **$k=0$:** last row is $(0\ 0\ 0\ 0\mid -5)$, i.e. $0=-5$: **no solution**.
- **$k=5$:** last row is $(0\ 0\ 0\ 0\mid 0)$ (since $-25+30-5=0$): the system is consistent, with two pivots and two free variables, so **infinitely many solutions**.

> [!success] Answer
> 1. **Unique solution:** no value of $k$.
> 2. **Infinitely many solutions:** every $k\neq0$.
> 3. **No solution:** $k=0$.

> [!warning] Exam trap
> Dividing by $k^2-5k$ is only legal when $k\neq0,5$. The values $0$ and $5$ must be checked separately, and they do **not** behave alike: $k=0$ kills the system, $k=5$ does not.

### c. The solutions for $k=-1$

With $k=-1$ the matrix reduces to

$$
\left(\begin{array}{cccc|c} 1&2&-1&3&4\\ 0&1&0&0&-1\\ 0&0&1&0&-2 \end{array}\right)
$$

(Row 3: $k^2-5k=6$ and $-k^2+6k-5=-12$, so $x_3=-2$. Row 2: $x_2+(-k-1)x_3=k$, and $-k-1=0$, so $x_2=-1$.)

$R_1\to R_1-2R_2$, then $R_1\to R_1+R_3$:

$$
\left(\begin{array}{cccc|c} 1&0&0&3&4\\ 0&1&0&0&-1\\ 0&0&1&0&-2 \end{array}\right)
$$

Let $x_4=t$: then $x_1+3t=4$, $x_2=-1$, $x_3=-2$.

> [!success] Answer
> **$(x_1,x_2,x_3,x_4)=(4-3t,\,-1,\,-2,\,t)$** for any real $t$.

---

## Recap

| Part | Tool | Answer |
|---|---|---|
| Q1a1 | Substitute into level curve | Not on curve ($-25/4\ne-8$) |
| Q1a2 | Solve for $x$, point slope | $y=7.5x-6.5$, $z=-8$ |
| Q1a3 | Implicit differentiation | $n=2$ |
| Q1a4 | Implicit differentiation in $y$ | $dx/dy=2/15$ |
| Q1b | Critical point, $\Delta$ | $(1/16,2)$, saddle |
| Q2a | Linear model, endpoints | 150 trees, 5100 kg |
| Q2b | Lagrange on a circle | Max $e^{18}$ at $(-6,18)$; min $e^{-2}$ at $(-6,-2)$ |
| Q3a | Limits, first derivative | $x>0$; $(1,0)$; no asymptotes; min $(1/e,-1/e)$ |
| Q3b | Tangent line, integral | $\frac{n(n-1)t^{n+1}}{2(n+1)}$ |
| Q4a | Constants | Never homogeneous |
| Q4b | Gauss-Jordan with parameter | Unique: none; infinite: $k\ne0$; none: $k=0$ |
| Q4c | Reduce at $k=-1$ | $(4-3t,-1,-2,t)$ |

## Related notes

- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_01-Global Extrema and Optimisation]], [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]
- Hub: [[Maths for Economists B]]
