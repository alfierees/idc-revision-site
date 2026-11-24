---
title: "Cost Surface, x to the x & Linear Systems (2014 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2014)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - implicit-differentiation
  - critical-points
  - second-derivative-test
  - logarithmic-differentiation
  - limits
  - linear-systems
  - reduced-echelon-form
aliases:
  - Math II 2014 Moed B
  - Maths B Moed B 2014
  - PP10 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Cost Surface, x to the x & Linear Systems (2014 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2014)**, Maths for Economists B, Hever Schulberg. 3 hours, 3 questions (this paper prints only three), non-graphic calculator.
> Builds on: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]]

> [!info] Source
> Answers follow the **official handwritten solution** (6 pages, every part solved). The paper has **three** questions. Nothing is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A cost surface: its level curve, the slope $dx/dy$ by [[Implicit Differentiation]], [[Critical Point]]s with the [[Second Derivative Test]], then a constraint $x=y$ | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]] |
| Q2 | $x^x=e^{x\ln x}$: rewrite, find the global minimum, take the limit at $0^+$ | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Logarithmic Differentiation]] |
| Q3 | Linear systems: a true/false on counting equations, an infinite-solution system, and recognising [[Reduced Echelon Form]] | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the level curve is a plane slice; find its slope with implicit differentiation, find the cost-minimising output with both partials equal to zero.
> - Q2: a variable exponent means "rewrite with $e$ and a logarithm".
> - Q3: reduced echelon form makes the free variables obvious: a column with no leading $1$ is free.

---

## Q1 — The cost surface $f(x,y)=2x^3+2y^3-36xy+500$

### a. Curve from the plane $z=468$

> [!success] Answer
> $468=2x^3+2y^3-36xy+500$, equivalently $0=2x^3+2y^3-36xy+32$.

Set $f(x,y)=468$ and move everything to one side: $500-468=32$. This is the [[Cross Section of a Surface]] at height $468$.

### b. $x'=dx/dy$ at $(1,1)$

> [!success] Answer
> $x'(1,1)=-1$.

First check $(1,1)$ is on the curve: $2+2-36+32=0$. Yes.

Differentiate the curve equation with respect to $y$, treating $x$ as a function of $y$ (product rule on $36xy$):

$$
0 = 6x^2x' + 6y^2 - \left(36x'y + 36x\right) .
$$

At $(1,1)$:

$$
0 = 6x'+6-36x'-36 \;\Rightarrow\; -30x'=30 \;\Rightarrow\; x'=-1 .
$$

### c. Weekly production that minimises cost

> [!success] Answer
> $x=6,\;y=6$ (a local minimum with $f=68$).

First-order conditions (both partials zero):

$$
f_x = 6x^2-36y=0 \;\Rightarrow\; y=\frac{x^2}{6}, \qquad f_y = 6y^2-36x=0 \;\Rightarrow\; y^2=6x .
$$

Substitute $y=x^2/6$ into $y^2=6x$:

$$
\frac{x^4}{36}=6x \;\Rightarrow\; x^4-216x=0 \;\Rightarrow\; x\left(x^3-216\right)=0 .
$$

So $x=0$ (then $y=0$) or $x=6$ (then $y=6$). Critical points: $(0,0)$ and $(6,6)$.

Second derivatives: $f_{xx}=12x$, $f_{xy}=-36$, $f_{yy}=12y$. Write $A=f_{xx}$, $B=f_{xy}$, $C=f_{yy}$, $\Delta=AC-B^2$.

| Point | $A$ | $B$ | $C$ | $\Delta$ | Type |
|---|---|---|---|---|---|
| $(0,0)$ | $0$ | $-36$ | $0$ | $0-1296<0$ | [[Saddle Point]] |
| $(6,6)$ | $72$ | $-36$ | $72$ | $5184-1296=3888>0$, $A>0$ | local minimum |

So production of $6$ units of each product minimises weekly cost.

> [!tip] Intuition
> The key calls $(6,6)$ "the minimum", which is a **local** minimum. $f$ is not bounded below overall (take $x=y=-t$ with $t$ large: $4(-t)^3\to-\infty$), but for sensible non-negative production levels it is the cost-minimising point.

### d. Does the minimum satisfy $x=y$?

> [!success] Answer
> **Yes**, since $x=6=y$.

### e. Minimal weekly cost under $x=y$

> [!success] Answer
> \$68.

Because the unconstrained minimum $(6,6)$ already satisfies the constraint, it is also the minimum under the constraint, so there is no need for Lagrange (see [[Constrained Optimization]]):

$$
f(6,6) = 2\cdot216+2\cdot216-36\cdot36+500 = 432+432-1296+500 = 68 .
$$

> [!example] Cross-check by substitution (my check)
> With $x=y=t$ the cost is $4t^3-36t^2+500$, whose derivative $12t^2-72t=0$ gives $t=6$ and value $68$. For $t\ge0$ this is the minimum (at $t=0$ cost is $500$). Same answer.

---

## Q2 — $f(x)=x^x$ on $x>0$

### a. Show $f(x)=e^{x\ln x}$

> [!success] Answer
> $x^x=e^{\ln(x^x)}=e^{x\ln x}$.

Any positive number equals $e$ to its own logarithm, so $x^x=e^{\ln x^x}$, and the log rule $\ln x^x=x\ln x$ finishes it.

### b. Global minimum

> [!success] Answer
> Global minimum at $x=\dfrac1e$, value $\left(\dfrac1e\right)^{1/e}\approx0.69$.

Differentiate $f=e^{x\ln x}$ with the chain rule (see [[Logarithmic Differentiation]]; the key also shows taking $\ln$ of both sides):

$$
f'(x)=e^{x\ln x}\left(\ln x+x\cdot\frac1x\right)=x^x(\ln x+1) .
$$

$x^x>0$ always, so $f'=0$ only when $\ln x+1=0$, i.e. $\ln x=-1$, $x=e^{-1}=\dfrac1e$.

Sign check: $f'<0$ for $x<1/e$ (decreasing) and $f'>0$ for $x>1/e$ (increasing), so $x=1/e$ is a global minimum on $x>0$:

$$
f\left(\tfrac1e\right)=\left(\tfrac1e\right)^{1/e}=e^{-1/e}\approx0.69 .
$$

![[PP10_q2_x_to_the_x.png|600]]

*The curve falls to a single minimum at $x=1/e$ then rises. At the left edge it approaches $1$ without reaching it.*

### c. $\displaystyle\lim_{x\to0^+}x^x$

> [!success] Answer
> $1$.

$$
\lim_{x\to0^+}x^x=\lim_{x\to0^+}e^{x\ln x}=e^{\,\lim x\ln x} .
$$

The exponent is $0^+\cdot(-\infty)$, an [[Indeterminate Form]]. Rewrite it as a fraction and use [[L'Hopital's Rule]]:

$$
\lim_{x\to0^+}x\ln x=\lim_{x\to0^+}\frac{\ln x}{x^{-1}}=\lim_{x\to0^+}\frac{1/x}{-x^{-2}}=\lim_{x\to0^+}(-x)=0 .
$$

So the limit is $e^0=1$. The key says "as shown in ex 4" but also works the limit in full, so the working above is official. The same method ($\lim x\ln x$ and $0^0$ forms) appears in [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]].

---

## Q3 — Linear systems

### a. True or false: more equations than variables means never infinitely many solutions

> [!success] Answer
> **False.**

With more equations than variables we cannot tell the number of solutions from the counts alone, because some equations can turn into true statements ($0=0$) during elimination and drop out. After that, the leftover system can have infinitely many solutions.

> [!example] Example (mine)
> $x+y=2,\;2x+2y=4,\;3x+3y=6$ has three equations and two unknowns, and every point on $x+y=2$ is a solution.

### b. Solve $\;2x-3y=3,\;-0.25x+0.375y=-0.375$

> [!success] Answer
> Infinitely many solutions: $(t,\;\tfrac23t-1)$, or equivalently $(1.5+1.5m,\;m)$.

Multiply the second equation by $-8$:

$$
(-0.25)(-8)x+(0.375)(-8)y=(-0.375)(-8) \;\Rightarrow\; 2x-3y=3 .
$$

It is the **same equation** as the first, so one equation in two unknowns remains and $y$ (or $x$) is free. Set $x=t$:

$$
2t-3y=3 \;\Rightarrow\; y=\tfrac23t-1 .
$$

Or set $y=m$, giving $x=1.5+1.5m$.

### c. Reduced echelon form?

> [!success] Answer
> Both matrices are in [[Reduced Echelon Form]].
> 1. $(t,\,3,\,2)$.
> 2. $(2-t,\,t,\,0)$.

Both satisfy the conditions from class: each leading entry is a $1$, it is the only non-zero entry in its column, leading entries move right going down, and zero rows are at the bottom.

**Matrix 1.**

$$
\left(\begin{array}{ccc|c}0&1&0&3\\0&0&1&2\\0&0&0&0\end{array}\right)
$$

Column 1 has no leading $1$, so $x$ is the **free variable**. The rows say $y=3$ and $z=2$. Solution: $x=t$, $y=3$, $z=2$, i.e. $(t,3,2)$.

**Matrix 2.**

$$
\left(\begin{array}{ccc|c}1&1&0&2\\0&0&1&0\end{array}\right)
$$

Columns 1 and 3 hold the leading $1$s, so $y$ is free. Let $y=t$. Row 1: $x+t=2$, so $x=2-t$. Row 2: $z=0$. Solution: $(2-t,\,t,\,0)$.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | level curve | $0=2x^3+2y^3-36xy+32$ |
| Q1b | implicit differentiation | $x'(1,1)=-1$ |
| Q1c | $f_x=f_y=0$, $\Delta$ | $(6,6)$ local min; $(0,0)$ saddle |
| Q1d | compare with $x=y$ | yes |
| Q1e | evaluate | \$68 |
| Q2a | rewrite with $e$ and $\ln$ | $x^x=e^{x\ln x}$ |
| Q2b | derivative, sign | min at $x=1/e$, $\approx0.69$ |
| Q2c | L'Hopital | $1$ |
| Q3a | redundant equations | False |
| Q3b | scale by $-8$ | $(t,\tfrac23t-1)$ |
| Q3c | read free variables | $(t,3,2)$ and $(2-t,t,0)$ |

## Related notes

[[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[PS_08-Local Extrema and Critical Points]], [[PS_11-Reduced Echelon Form and Solutions]], [[Maths for Economists B]]
