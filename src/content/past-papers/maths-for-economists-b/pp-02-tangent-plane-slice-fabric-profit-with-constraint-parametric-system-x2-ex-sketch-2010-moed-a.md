---
title: "Tangent Plane Slice, Fabric Profit with Constraint, Parametric System & x² eˣ Sketch (2010 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2010)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - partial-derivatives
  - profit-maximisation
  - lagrange-multipliers
  - global-extrema
  - gauss-jordan
  - curve-sketching
aliases:
  - Math II Moed A 2010
  - Maths for Economists B 2010 Moed A
  - PP02 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Tangent Plane Slice, Fabric Profit with Constraint, Parametric System & x² eˣ Sketch (2010 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2010)**, Maths for Economists B, Hever Schulberg. 3 hours, non-graphic calculator only, justify every claim. 4 questions (marks not printed).
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 2 to 3) and the lecturer's **handwritten solutions** (pages 4 to 7). Q1 to Q3 follow that key. For **Q4** the key says only "the question is in ex-5 from the homework ex". I opened `ex5.pdf`: it covers domains and contour lines and does **not** contain $x^2e^x$, so the pointer does not match. Q4 is therefore AI-solved.

> [!warning] AI-solved parts in this note
> **Q4 (all parts, 1 to 5)** has no official working. Solved by hand and checked symbolically. Check before relying on it.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Tangent to a slice curve, global extrema of $g(x)=f(x,x^2)-x$ on an interval, a limit along a cube-root path | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q2 | Profit with square-root costs, solving for a parameter, unconstrained maximum, then a constraint $x=y$ and Lagrange | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q3 | System with parameter $k$ (3 equations, 4 unknowns) and an extra side condition | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]] |
| Q4 | Full study of $x^2e^x$: domain, intercepts, asymptotes, extrema, graph | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_01-Global Extrema, Optimization and Summation]] |

> [!tip] Intuition: the moves that recur
> - A constraint can only **lower or keep** a maximum: any constrained maximum is at most the unconstrained one (Q2d).
> - Substituting a curve into a two-variable function, $f(x,x^2)$ or $f(x,\sqrt[3]{x})$, turns it into a one-variable problem (Q1b, Q1c).
> - Rewrite $0\cdot\infty$ as a fraction before using L'Hopital.

---

## Q1 — Slice tangent, global extrema, limit

Given $f(x,y)=x\,e^{x^2-y}+y\ln x-1$.

### a. Tangent line to the curve cut by the plane $y=1$ at $(1,1)$

The plane $y=1$ cuts the curve $z=f(x,1)$. Its slope at $x=1$ is $f_x(1,1)$:

$$
f_x=e^{x^2-y}+x\cdot 2x\,e^{x^2-y}+\frac{y}{x}=e^{x^2-y}(1+2x^2)+\frac{y}{x}
$$

$$
f_x(1,1)=e^{0}(1+2)+1=4
$$

The point of tangency: $z=f(1,1)=1\cdot e^0+1\cdot\ln 1-1=0$, so $(x,z)=(1,0)$. Line: $z-0=4(x-1)$.

> [!success] Answer
> $z=4x-4$ (in the plane $y=1$).

### b. Global extremum of $g(x)=f(x,x^2)-x$ on $[1/e,\,e^3]$

Substituting $y=x^2$ makes the exponent $x^2-x^2=0$:

$$
g(x)=x\,e^{0}+x^2\ln x-1-x=x^2\ln x-1
$$

$$
g'(x)=2x\ln x+x^2\cdot\frac1x=x\,(2\ln x+1)
$$

$g'=0$ gives $x=0$ (outside the interval) or $\ln x=-\tfrac12$, so $x=e^{-1/2}$. Compare with the endpoints:

| $x$ | $g(x)$ | Approximate value |
|---|---|---|
| $e^{-1/2}$ | $-\dfrac{1}{2e}-1$ | $-1.18$ |
| $e^{-1}$ (left endpoint) | $-\dfrac{1}{e^2}-1$ | $-1.14$ |
| $e^{3}$ (right endpoint) | $3e^6-1$ | $1209.3$ |

> [!success] Answer
> Global minimum $-\tfrac{1}{2e}-1\approx-1.18$ at $x=e^{-1/2}$; global maximum $3e^6-1\approx 1209$ at $x=e^3$.

![[PP02_q1_g_on_interval.png|640]]

The left panel shows the whole interval (the maximum is the right endpoint); the right panel zooms in near the minimum, which sits just inside the left endpoint.

### c. $\displaystyle\lim_{x\to0^+} f(x,\sqrt[3]{x})$

$$
f(x,\sqrt[3]{x})=x\,e^{x^2-\sqrt[3]{x}}+\sqrt[3]{x}\,\ln x-1
$$

- First term: $x\to0$ and the exponential tends to $e^0=1$, so it tends to $0$.
- Second term is $0\cdot(-\infty)$. Rewrite it as a fraction and use L'Hopital:

$$
\lim_{x\to0^+}\frac{\ln x}{x^{-1/3}}=\lim_{x\to0^+}\frac{1/x}{-\tfrac13x^{-4/3}}=\lim_{x\to0^+}\left(-3\sqrt[3]{x}\right)=0
$$

Total: $0+0-1$.

> [!success] Answer
> $-1$.

---

## Q2 — Fabric profit

Fabric A sells for \$20 per metre ($x$ metres), fabric B for \$25 per metre ($y$ metres). Cost:

$$
C(x,y)=30x+40y-4a\sqrt{x}-(2a+50)\sqrt{y}-20000
$$

### a. Profit function

$$
P(x,y)=20x+25y-C=-10x-15y+4a\sqrt{x}+(2a+50)\sqrt{y}+20000
$$

### b. Find $a$

**Question.** At $x=y=25$, the marginal profit of one more metre of A is \$10 higher than that of B.

$$
P_x=-10+\frac{2a}{\sqrt{x}},\qquad P_y=-15+\frac{a+25}{\sqrt{y}}
$$

At $(25,25)$ we need $P_x=P_y+10$:

$$
-10+\frac{2a}{5}=-15+\frac{a+25}{5}+10
$$

The right side simplifies to $-5+\dfrac{a}{5}+5=\dfrac a5$, so $-10+\dfrac{2a}{5}=\dfrac a5$, which gives $\dfrac a5=10$.

> [!success] Answer
> $a=50$.

### c. Maximal profit with $a=50$

$$
P(x,y)=-10x-15y+200\sqrt{x}+150\sqrt{y}+20000
$$

$$
P_x=-10+\frac{100}{\sqrt{x}}=0\Rightarrow x=100,\qquad P_y=-15+\frac{75}{\sqrt{y}}=0\Rightarrow y=25
$$

Second derivatives: $A=P_{xx}=-50x^{-3/2}=-0.05$, $B=P_{xy}=0$, $C=P_{yy}=-37.5y^{-3/2}=-0.3$. Then $\Delta=AC-B^2=0.015>0$ and $A<0$, so a maximum.

$$
P(100,25)=-1000-375+2000+750+20000=21375
$$

> [!success] Answer
> Make 100 metres of A and 25 metres of B; maximal profit **\$21,375**.

> [!warning] Handwriting
> The key's final figure is hard to read (it looks like 21,335 or 21,375). Direct substitution gives 21,375, which is what I use.

### d. Equal lengths $x=y$

**1. Without calculation.** The maximum in c was found over **all** $(x,y)$ and is unique, so it is the global maximum. Forcing $x=y$ restricts the choices, and the restricted point cannot beat it. Since the unique maximum has $x\neq y$, the constrained maximum is **lower**.

**2. Lagrange.** $L=P(x,y)+\lambda(x-y)$:

$$
L_x=-10+\frac{100}{\sqrt{x}}+\lambda=0,\qquad L_y=-15+\frac{75}{\sqrt{y}}-\lambda=0,\qquad L_\lambda=x-y=0
$$

Add the first two equations and use $y=x$:

$$
-25+\frac{175}{\sqrt{x}}=0\Rightarrow\sqrt{x}=7\Rightarrow x=y=49
$$

$$
P(49,49)=-490-735+1400+1050+20000=21225
$$

> [!success] Answer
> 1. Lower than the c result (strictly, since the unconstrained optimum has $x\neq y$).
> 2. $x=y=49$, maximal profit **\$21,225**. Check: an arbitrary equal point $(25,25)$ gives \$21,125, also below 21,375.

---

## Q3 — Parametric system

$$
\begin{cases}
x_1+kx_2+2x_3+x_4=1\\
(k-1)x_2+3kx_3-3x_3+2x_4=k^2+11-2kx_4\\
x_1+kx_2+(k^2+1)x_3-3k-3=-(k^2+k+1)x_4
\end{cases}
$$

Collect unknowns on the left (the key's matrix):

$$
\left(\begin{array}{cccc|c}
1&k&2&1&1\\
0&k-1&3k-3&2k+2&k^2+11\\
1&k&k^2+1&k^2+k+1&3k+3
\end{array}\right)
$$

### a. Values of $k$

There are **3 equations and 4 unknowns**, so a **unique** solution is impossible. Apply $R_3\to R_3-R_1$:

$$
\left(\begin{array}{cccc|c}
1&k&2&1&1\\
0&k-1&3(k-1)&2k+2&k^2+11\\
0&0&k^2-1&k^2+k&3k+2
\end{array}\right)
$$

- **$k\neq\pm1$:** dividing by $k-1$ and $k^2-1$ gives three pivots (columns 1, 2, 3) and $x_4$ free. Infinitely many solutions.
- **$k=1$:** row 2 becomes $(0,0,0,4\mid12)$ so $x_4=3$, while row 3 becomes $(0,0,0,2\mid5)$ so $x_4=\tfrac52$. Contradiction, no solution.
- **$k=-1$:** row 2 reduces to $(0,1,3,0\mid-6)$ and row 3 becomes $(0,0,0,0\mid-1)$, i.e. $0=-1$. No solution.

> [!success] Answer
> 1. Infinitely many: $k\neq 1$ and $k\neq-1$.
> 2. No solution: $k=1$ and $k=-1$.
> 3. Unique solution: never.

### b. $k=2$ with $x_1+x_3=x_4$

For $k=2$ the system reduces to

$$
\left(\begin{array}{cccc|c}
1&0&0&-3&-\tfrac{55}{3}\\
0&1&0&0&7\\
0&0&1&2&\tfrac83
\end{array}\right)
$$

so $x_4=t$ is free and

$$
(x_1,x_2,x_3,x_4)=\left(3t-18\tfrac13,\;7,\;\tfrac83-2t,\;t\right)
$$

Impose $x_1+x_3=x_4$:

$$
\left(3t-\tfrac{55}{3}\right)+\left(\tfrac83-2t\right)=t\;\Rightarrow\; t-\tfrac{47}{3}=t\;\Rightarrow\;-15\tfrac23=0
$$

> [!success] Answer
> The extra condition is impossible: **no solution** satisfies $x_1+x_3=x_4$.

> [!tip] Intuition
> The extra condition is a fourth equation, and the augmented system turns out inconsistent. The terms in $t$ cancel, which is why the contradiction does not depend on which $t$ you try.

---

## Q4 — Study of $f(x)=x^2e^x$

> [!warning] AI-written answer, not official. Check before relying on it.
> The key points to "ex-5 from the homework ex", but `ex5.pdf` has no such question (it has domains and contour lines). Solved here from [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] and [[Lec_01-Global Extrema, Optimization and Summation]].

**1. Domain.** $x^2$ and $e^x$ are defined everywhere: all real $x$.

**2. Axis intercepts.** $f(0)=0$. And $x^2e^x=0$ only for $x=0$ because $e^x>0$. So the only intercept is the origin.

**3. Asymptotes.**
- $x\to+\infty$: $x^2e^x\to+\infty$ and $f(x)/x=xe^x\to\infty$, so there is no horizontal and no oblique asymptote.
- $x\to-\infty$: $\;x^2e^x=\dfrac{x^2}{e^{-x}}$ is $\tfrac\infty\infty$. L'Hopital twice: $\dfrac{2x}{-e^{-x}}\to\dfrac{2}{e^{-x}}\to0$. So **$y=0$ is a horizontal asymptote on the left**.
- No vertical asymptotes (continuous everywhere).

**4. Relative extreme points.**

$$
f'(x)=2xe^x+x^2e^x=x(x+2)e^x
$$

Critical points $x=-2$ and $x=0$ (since $e^x>0$). Sign of $f'$: positive for $x<-2$, negative on $(-2,0)$, positive for $x>0$.

- $x=-2$: local **maximum**, $f(-2)=4e^{-2}\approx0.54$.
- $x=0$: local **minimum**, $f(0)=0$. It is also the global minimum because $f\ge0$ everywhere.

For the shape, $f''(x)=(x^2+4x+2)e^x$, which is zero at $x=-2\pm\sqrt2$ (inflection points, about $-3.41$ and $-0.59$).

**5. Graph.**

![[PP02_q4_x2ex_graph.png|640]]

The curve hugs the $x$-axis from the left, rises to a small bump at $x=-2$, dips back to touch the axis at the origin, then shoots up with no upper bound.

---

## Recap

| Part | Tool | Answer |
|---|---|---|
| Q1a | $f_x(1,1)$ | $z=4x-4$ |
| Q1b | substitute, then critical points and endpoints | min $-\tfrac1{2e}-1$, max $3e^6-1$ |
| Q1c | L'Hopital | $-1$ |
| Q2a | revenue minus cost | $-10x-15y+4a\sqrt x+(2a+50)\sqrt y+20000$ |
| Q2b | $P_x=P_y+10$ at (25,25) | $a=50$ |
| Q2c | second derivative test | $(100,25)$, \$21,375 |
| Q2d | constraint lowers the maximum; Lagrange | lower; $x=y=49$, \$21,225 |
| Q3a | row reduction | infinite for $k\neq\pm1$; none for $k=\pm1$ |
| Q3b | impose $x_1+x_3=x_4$ | no solution |
| Q4 (AI) | limits and first derivative | min $(0,0)$, local max $(-2,4e^{-2})$, asymptote $y=0$ at $-\infty$ |

## Related notes

- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_07-Applications of Partial Derivatives]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]
- Hub: [[Maths for Economists B]]
