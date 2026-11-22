---
title: "Parametric System, Lagrange Profit, Surface Slice & Log Power (2019 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2019)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - linear-systems
  - lagrange-multipliers
  - implicit-differentiation
  - local-extrema
  - global-extrema
  - log-differentiation
aliases:
  - Math II Moed B 2019
  - Maths for Economists B 2019 Moed B
  - PP20 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Parametric System, Lagrange Profit, Surface Slice & Log Power (2019 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2019)**, Maths for Economists B, Hever Schulberg. 3 hours, non-graphic calculator and formula sheet allowed. 4 questions worth 25, 25, 30 and 20 points. "Justify anything you claim, and explain all your calculations."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 2 and 3) followed by the lecturer's **handwritten and typeset official solutions** (pages 4 to 12). Every part follows that key. Nothing in this note is AI-solved. All final answers were also re-checked symbolically and match the key.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (25) | A 3x3 system in four unknowns with parameter $k$: unique, infinite, none, and particular solutions | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]] |
| Q2 (25) | Implicit slope $dx/dy$ on a cost curve and its business meaning; Lagrange profit maximisation with price-demand equations | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q3 (30) | Slope of a slice, a one-variable function built from a surface, a limit, local extrema of a cubic | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q4 (20) | Log differentiation of $(\sqrt x)^{\ln x}$, tangent line, limit at $0^+$ | [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |

Related practice: [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]].

---

## Q1 — The system with parameter $k$ (25 points)

$$
\begin{cases}
x_1 + 2x_2 + kx_3 - 3x_4 - 4 = 0\\
x_2 - kx_3 - x_3 = k\\
k^2x_3 - 3kx_3 + k^2 = 4k - 3
\end{cases}
$$

Collect the unknowns on the left (the second equation is $x_2 - (k+1)x_3 = k$, the third is $(k^2-3k)x_3 = -k^2+4k-3$). The augmented matrix, with columns $x_1, x_2, x_3, x_4$, is

$$
\left(\begin{array}{cccc|c} 1 & 2 & k & -3 & 4\\ 0 & 1 & -k-1 & 0 & k\\ 0 & 0 & k^2-3k & 0 & -k^2+4k-3 \end{array}\right)
$$

It is already in echelon form, so no row operations are needed to read it.

### a. Can the set have a unique solution?

> [!success] Answer
> **No.** There are four unknowns but only three equations (more columns than rows). A unique solution needs a pivot in every unknown's column, and with only three rows at most three columns can have one. So at least one variable is always free ($x_4$ appears only in the first equation, so it is free whenever the system is consistent).

### b. Infinitely many solutions, or none

Look at the last row: $(k^2-3k)x_3 = -k^2+4k-3$, i.e. $k(k-3)\,x_3 = -(k-1)(k-3)$.

- **$k \neq 0$ and $k \neq 3$.** Divide by $k^2-3k$: $x_3 = \dfrac{-k^2+4k-3}{k^2-3k} = \dfrac{1-k}{k}$. The system is consistent and $x_4$ is free: **infinitely many solutions**.
- **$k = 0$.** The last row is $0 = -3$ (since $-k^2+4k-3 = -3$): a contradiction. **No solution.**
- **$k = 3$.** The last row is $0 = 0$ (since $-9+12-3 = 0$). The system is consistent with $x_3$ and $x_4$ both free: **infinitely many solutions**.

> [!success] Answer
> **Infinitely many solutions:** $k \neq 0$ (this includes $k=3$). **No solution:** $k = 0$.

> [!warning] Trap
> Dividing by $k^2-3k$ excludes both $k=0$ and $k=3$, so those two cases must be checked separately. $k=3$ turns out to be harmless, which is why the final answer says "all $k\neq0$".

### c. Solve for $k = 3$

The matrix is

$$
\left(\begin{array}{cccc|c} 1 & 2 & 3 & -3 & 4\\ 0 & 1 & -4 & 0 & 3\\ 0 & 0 & 0 & 0 & 0 \end{array}\right)
$$

Clear the entry above the second pivot with $R_1 \to R_1 - 2R_2$:

$$
\left(\begin{array}{cccc|c} 1 & 0 & 11 & -3 & -2\\ 0 & 1 & -4 & 0 & 3\\ 0 & 0 & 0 & 0 & 0 \end{array}\right)
$$

so $x_1 + 11x_3 - 3x_4 = -2$ and $x_2 - 4x_3 = 3$. Let $x_3 = t$ and $x_4 = m$ be free:

> [!success] Answer
> $(x_1,x_2,x_3,x_4) = (-2 - 11t + 3m,\ 3 + 4t,\ t,\ m)$ for any real $t, m$.

### d. Solve for $k=3$ with $x_4 = x_2 = 1$

$x_4 = m = 1$. Then $x_2 = 3 + 4t = 1$ gives $t = -\tfrac12$. Finally

$$
x_1 = -2 - 11\left(-\tfrac12\right) + 3\cdot1 = -2 + 5.5 + 3 = 6.5
$$

> [!success] Answer
> $\left(6\tfrac12,\ 1,\ -\tfrac12,\ 1\right)$.

---

## Q2 — A factory with two interdependent products (25 points)

Annual sales: $x$ units of A at price $p$ and $y$ units of B at price $q$ (prices in thousand dollars). Price-demand equations: $p = 110 - \tfrac12x + 2y$ and $q = 120 - y + x$. Annual cost (thousand \$): $C(x,y) = \tfrac12x^2 + 3y^2 + 100x + 100y$.

### a. Show $(10,20)$ is on $C = 4250$ and find $x' = dx/dy$ there

**On the curve:**

$$
C(10,20) = \tfrac12\cdot100 + 3\cdot400 + 1000 + 2000 = 50 + 1200 + 1000 + 2000 = 4250 \checkmark
$$

**Slope.** Treat $x$ as a function of $y$ on the curve $C = 4250$ and differentiate with respect to $y$:

$$
0 = x\,x' + 6y + 100x' + 100
$$

At $(10,20)$:

$$
0 = 10x' + 120 + 100x' + 100 \quad\Longrightarrow\quad 110x' = -220 \quad\Longrightarrow\quad x' = -2
$$

> [!success] Answer
> $x'(10,20) = -2$.
> **Meaning:** at 10 units of A and 20 of B, producing **one more unit of B** while keeping the annual cost at 4,250 thousand dollars (\$4,250,000) requires **producing about 2 fewer units of A**.

### b. Lagrange multipliers: the profit-maximising prices when $x + y = 30$

**Profit** is revenue minus cost, with revenue $xp + yq$:

$$
P(x,y) = x\left(110 - \tfrac12x + 2y\right) + y\left(120 - y + x\right) - \left(\tfrac12x^2 + 3y^2 + 100x + 100y\right)
$$

Collect terms: $x^2$ gives $-\tfrac12 - \tfrac12 = -1$; $y^2$ gives $-1 - 3 = -4$; the cross terms $2xy + xy = 3xy$; and $110x - 100x = 10x$, $120y - 100y = 20y$:

$$
P(x,y) = -x^2 - 4y^2 + 3xy + 10x + 20y
$$

**Lagrangian** with constraint $x + y = 30$:

$$
L = -x^2 - 4y^2 + 3xy + 10x + 20y - \lambda(x + y - 30)
$$

$$
L_x = -2x + 3y + 10 - \lambda = 0, \qquad L_y = -8y + 3x + 20 - \lambda = 0
$$

Both equal $\lambda$, so set them equal:

$$
-2x + 3y + 10 = -8y + 3x + 20 \quad\Longrightarrow\quad 11y - 5x = 10
$$

Combine with $x + y = 30$: substituting $x = 30 - y$ gives $11y - 150 + 5y = 10$, so $16y = 160$, $y = 10$ and $x = 20$.

**Check it is a maximum.** $P(20,10) = -400 - 400 + 600 + 200 + 200 = 200$. The key compares with the arbitrary point $(0,30)$, where $P = -3600 + 600 = -3000 < 200$.

> [!info] Extra check (mine, not on the key)
> A stronger argument: along the constraint $y = 30 - x$, the $x^2$ coefficient of $P$ is $-1 - 4 - 3 = -8 < 0$ (from $-x^2$, $-4(30-x)^2$ and $3x(30-x)$), so the profit is a downward-opening parabola in $x$ and its single stationary point $x=20$ is the global maximum.

**Prices** (the question asks for these, not the quantities):

$$
p = 110 - \tfrac12\cdot20 + 2\cdot10 = 120, \qquad q = 120 - 10 + 20 = 130
$$

> [!success] Answer
> Price A at **\$120 thousand** per unit and B at **\$130 thousand** per unit (producing 20 units of A and 10 of B, for an annual profit of 200 thousand dollars).

> [!warning] Trap
> Lagrange gives the quantities $(20,10)$. The final step, substituting back into the price-demand equations, is where marks are easily lost.

---

## Q3 — Surface $f(x,y) = x\,e^{x^2-y} + y\ln x - 1$ (30 points)

### a. Slope of the curve cut by the plane $y=1$, at $x=1$

On the plane $y = 1$ the curve is a function of $x$ alone, so its slope is the partial derivative $f_x$:

$$
f_x = e^{x^2-y} + x\,e^{x^2-y}\cdot2x + \frac yx
$$

$$
f_x(1,1) = e^0 + 1\cdot e^0\cdot2 + 1 = 1 + 2 + 1 = 4
$$

> [!success] Answer
> The slope is $4$.

### b. Global extrema of $g(x) = f\left(x,x^2\right) - x$ on $\left[\tfrac1e, e^3\right]$

Put $y = x^2$. The exponent becomes $x^2 - x^2 = 0$:

$$
g(x) = x\,e^0 + x^2\ln x - 1 - x = x^2\ln x - 1
$$

$$
g'(x) = 2x\ln x + x^2\cdot\frac1x = x(2\ln x + 1) = 0
$$

$x>0$ on the interval, so $\ln x = -\tfrac12$ and $x = e^{-1/2} \approx 0.607$, which lies inside $\left[e^{-1}, e^{3}\right] \approx [0.368, 20.09]$.

Compare the critical value with the two endpoints:

| $x$ | $g(x)$ | Value |
|---|---|---|
| $e^{-1/2}$ (critical) | $e^{-1}\cdot\left(-\tfrac12\right) - 1 = -\dfrac{1}{2e} - 1$ | $\approx -1.184$ |
| $\tfrac1e$ (left end) | $e^{-2}\cdot(-1) - 1 = -\dfrac1{e^2} - 1$ | $\approx -1.135$ |
| $e^3$ (right end) | $e^6\cdot3 - 1 = 3e^6 - 1$ | $\approx 1209.29$ |

> [!success] Answer
> **Global minimum** at $x = e^{-1/2}$, value $-\dfrac1{2e} - 1 \approx -1.184$. **Global maximum** at $x = e^3$, value $3e^6 - 1 \approx 1209.29$.

![[PP20_q3b_x2lnx_minus1.png|700]]

*Left: $g$ over the whole interval, climbing to its maximum at the right end. Right: zoom near the minimum, which lies a little to the right of the left endpoint.*

### c. $\displaystyle\lim_{x\to0^+} f\left(x, x^2\right)$

From part b, $f(x,x^2) = x + x^2\ln x - 1$. The term $x^2\ln x$ is "$0\cdot(-\infty)$", so write it as $\dfrac{\ln x}{x^{-2}}$ and apply L'Hopital:

$$
\lim_{x\to0^+}\frac{\ln x}{x^{-2}} = \lim_{x\to0^+}\frac{\frac1x}{-2x^{-3}} = \lim_{x\to0^+}\left(-\frac{x^2}{2}\right) = 0
$$

So $f(x,x^2) \to 0 + 0 - 1$.

> [!success] Answer
> The limit is $-1$.

### d. Relative extrema of $f(x,y) = 2x^3 + 6xy^2 - 3y^3 - 150x$ (unrelated)

**Derivatives:**

$$
f_x = 6x^2 + 6y^2 - 150, \quad f_y = 12xy - 9y^2
$$

$$
f_{xx} = 12x, \quad f_{xy} = 12y, \quad f_{yy} = 12x - 18y
$$

**Critical points.** $f_y = 3y(4x - 3y) = 0$ gives $y = 0$ or $y = \tfrac43x$.

- $y = 0$: $f_x = 0$ becomes $x^2 = 25$, so $x = \pm5$. Points $(5,0)$ and $(-5,0)$.
- $y = \tfrac43x$: $x^2 + \tfrac{16}{9}x^2 = 25$ gives $\tfrac{25}{9}x^2 = 25$, so $x = \pm3$. Points $(3,4)$ and $(-3,-4)$.

**Classification** with $\Delta = f_{xx}f_{yy} - f_{xy}^2$:

| Point | $A=f_{xx}$ | $C=f_{yy}$ | $B=f_{xy}$ | $\Delta$ | Type |
|---|---|---|---|---|---|
| $(5,0)$ | $60$ | $60$ | $0$ | $3600 > 0$, $A>0$ | **local minimum** |
| $(-5,0)$ | $-60$ | $-60$ | $0$ | $3600 > 0$, $A<0$ | **local maximum** |
| $(3,4)$ | $36$ | $-36$ | $48$ | $-1296 - 2304 = -3600 < 0$ | **saddle point** |
| $(-3,-4)$ | $-36$ | $36$ | $-48$ | $-1296 - 2304 = -3600 < 0$ | **saddle point** |

> [!success] Answer
> $(5,0)$ local **minimum**; $(-5,0)$ local **maximum**; $(3,4)$ and $(-3,-4)$ are **saddle points**.

---

## Q4 — $f(x) = \left(\sqrt x\right)^{\ln x}$ (20 points)

### a. Tangent line at $x = e^{-2}$

Rewrite with a half power: $\ln f = \ln x\cdot\ln\sqrt x = \tfrac12\left(\ln x\right)^2$. Differentiate both sides (logarithmic differentiation):

$$
\frac{f'}{f} = \ln x\cdot\frac1x \quad\Longrightarrow\quad f'(x) = f(x)\cdot\frac{\ln x}{x}
$$

**The point.** $f\left(e^{-2}\right) = \left(\sqrt{e^{-2}}\right)^{\ln e^{-2}} = \left(e^{-1}\right)^{-2} = e^2$.

**The slope.**

$$
f'\left(e^{-2}\right) = e^2\cdot\frac{\ln e^{-2}}{e^{-2}} = e^2\cdot\frac{-2}{e^{-2}} = -2e^4
$$

**The line:** $y - e^2 = -2e^4\left(x - e^{-2}\right)$, which expands to $y = -2e^4x + 2e^2 + e^2$.

> [!success] Answer
> $y = -2e^4x + 3e^2$.

### b. $\displaystyle\lim_{x\to0^+}f(x)$

Since $f = e^{\frac12(\ln x)^2}$ and $\left(\ln x\right)^2 \to +\infty$ as $x\to0^+$, the exponent goes to $+\infty$. (The key reads it as $\left(0^+\right)^{-\infty} = \dfrac{1}{(0^+)^{\infty}} = \dfrac{1}{0^+}$.)

> [!success] Answer
> The limit is $\infty$.

> [!tip] Intuition
> $\sqrt x$ is a small number below 1 near zero, and it is raised to a very negative power ($\ln x \to -\infty$). A number below 1 to a hugely negative power is huge. Both views agree: $\infty$.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | rows versus columns | no unique solution possible (4 unknowns, 3 equations) |
| Q1b | last row $k(k-3)x_3=-(k-1)(k-3)$ | infinite: $k\ne0$; none: $k=0$ |
| Q1c | $k=3$, two free variables | $(-2-11t+3m,\ 3+4t,\ t,\ m)$ |
| Q1d | $x_4=x_2=1$ | $(6\tfrac12,\ 1,\ -\tfrac12,\ 1)$ |
| Q2a | implicit differentiation of $C=4250$ | $x'=-2$: one more B means about 2 fewer A at equal cost |
| Q2b | Lagrange, then back to prices | $(x,y)=(20,10)$; $p=\$120$k, $q=\$130$k |
| Q3a | partial derivative $f_x(1,1)$ | $4$ |
| Q3b | $g=x^2\ln x-1$, compare endpoints | min at $e^{-1/2}$ ($\approx-1.184$), max at $e^3$ ($\approx1209.29$) |
| Q3c | L'Hopital on $x^2\ln x$ | $-1$ |
| Q3d | critical points, $\Delta$ | $(5,0)$ min, $(-5,0)$ max, $(3,4)$ and $(-3,-4)$ saddles |
| Q4a | log differentiation | $y=-2e^4x+3e^2$ |
| Q4b | exponent $\tfrac12\ln^2x\to\infty$ | $\infty$ |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
