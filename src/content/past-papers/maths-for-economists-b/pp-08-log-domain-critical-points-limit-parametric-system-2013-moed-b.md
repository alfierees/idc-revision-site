---
title: "Log Domain, Critical Points, Limit & Parametric System (2013 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2013)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - domain
  - tangent-line
  - global-extrema
  - second-derivative-test
  - implicit-differentiation
  - limits
  - parametric-system
aliases:
  - Math II 2013 Moed B
  - Maths B Moed B 2013
  - PP08 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Log Domain, Critical Points, Limit & Parametric System (2013 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2013)**, Maths for Economists B, Hever Schulberg. 3 hours, 3 questions (this paper prints only three).
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (7 pages including the typed question pages, every part solved). The paper has **three** questions. Nothing is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Domain of $\ln(xe^x)$, the identity $\ln(xe^x)=x+\ln x$, a [[Tangent Line]], and a [[Global Extremum]] of $-x^3$ on $x\le3$ | [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_01-Global Extrema, Optimization and Summation]] |
| Q2 | A harmonic-style function: $f_{xx}+f_{yy}=0$, [[Critical Point]]s and the [[Second Derivative Test]], slopes on the curve $f=0$, and a limit | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q3 | A 3 by 3 [[Parametric System]] in $a$: when is there a solution, and what is it | [[Lec_12-Systems with Parameters]] |

> [!tip] Intuition: the one move behind each question
> - Q1: simplify with log rules before differentiating.
> - Q2: only points where **both** partials vanish are critical; test all four candidates rather than assuming.
> - Q3: one row reduction leaves a last row $0=a^2+a$, so the answer is just "when is $a^2+a=0$".

---

## Q1 — $f(x)=\ln\!\left(xe^x\right)$

### a. Domain

> [!success] Answer
> $x>0$.

A logarithm needs a positive argument: $xe^x>0$. Because $e^x>0$ for every $x$, this holds exactly when $x>0$.

### b. Is $g(x)=x+\ln x$ equal to $f(x)$?

> [!success] Answer
> **Yes**, for all $x$ in the domain.

$$
f(x)=\ln\left(xe^x\right)=\ln x+\ln e^x=\ln x+x\ln e=\ln x+x=g(x) .
$$

The two functions are identical (and $g$ has the same domain $x>0$ because of its $\ln x$).

### c. Tangent line to $f$ at $x=e$

> [!success] Answer
> $y=\left(1+\dfrac1e\right)x$.

Work with the simpler form $g$:

$$
g'(x)=1+\frac1x, \qquad g(e)=e+\ln e=e+1, \qquad g'(e)=1+\frac1e .
$$

The tangent line is $y-(e+1)=\left(1+\tfrac1e\right)(x-e)$. Expand the right side: $\left(1+\tfrac1e\right)x-e-1$. So

$$
y=\left(1+\frac1e\right)x .
$$

(The line passes through the origin, which the cancellation of $e+1$ makes visible.)

### d. Global extremum of $y=-x^3$ on $x\le3$

> [!success] Answer
> Global **minimum** at $(3,-27)$. No global maximum.

$y'=-3x^2=0$ gives $x=0$, a critical point, but $y'\le0$ everywhere (negative on both sides of $0$), so the function is **decreasing on the whole domain** and $x=0$ is not an extremum. A decreasing function on $(-\infty,3]$ is smallest at the right end $x=3$: $y(3)=-27$. As $x\to-\infty$, $y\to+\infty$, so there is no maximum.

![[PP08_q1d_minus_x_cubed.png|600]]

*The curve never turns round. The flat spot at $x=0$ is an inflection, not an extremum, and the minimum sits at the closed right end.*

---

## Q2 — $f(x,y)=\ln\left(x^2+y^2\right)-xy$

### a. Show $f_{xx}+f_{yy}=0$

> [!success] Answer
> The sum is $0$.

First derivatives:

$$
f_x=\frac{2x}{x^2+y^2}-y, \qquad f_y=\frac{2y}{x^2+y^2}-x .
$$

Second derivatives (quotient rule on each fraction):

$$
f_{xx}=\frac{2(x^2+y^2)-2x\cdot2x}{(x^2+y^2)^2}=\frac{2y^2-2x^2}{(x^2+y^2)^2},
$$

$$
f_{yy}=\frac{2(x^2+y^2)-2y\cdot2y}{(x^2+y^2)^2}=\frac{2x^2-2y^2}{(x^2+y^2)^2} .
$$

Adding, the numerators cancel:

$$
f_{xx}+f_{yy}=\frac{2y^2-2x^2+2x^2-2y^2}{(x^2+y^2)^2}=0 .
$$

For later, the mixed derivative is $f_{xy}=\dfrac{-4xy}{(x^2+y^2)^2}-1$ (and $f_{yx}$ is the same).

### b. Which of $(1,1),(1,-1),(-1,1),(-1,-1)$ are critical, and of what type?

> [!success] Answer
> $(1,1)$ and $(-1,-1)$ are critical and both are **saddle points**. $(1,-1)$ and $(-1,1)$ are not critical.

A critical point needs **both** $f_x=0$ and $f_y=0$.

| Point | $f_x$ | $f_y$ | Critical? |
|---|---|---|---|
| $(1,1)$ | $\frac22-1=0$ | $\frac22-1=0$ | yes |
| $(1,-1)$ | $\frac22-(-1)=2$ | (not needed) | no |
| $(-1,1)$ | $\frac{-2}{2}-1=-2$ | (not needed) | no |
| $(-1,-1)$ | $\frac{-2}{2}-(-1)=0$ | $\frac{-2}2-(-1)=0$ | yes |

**Second derivative test** at the two critical points. At both, $x^2+y^2=2$ so $(x^2+y^2)^2=4$, and

$$
A=f_{xx}=\frac{2y^2-2x^2}{4}=0, \qquad C=f_{yy}=0, \qquad B=f_{xy}=\frac{-4xy}{4}-1=-xy-1=-2 \;(\text{since }xy=1).
$$

$$
\Delta=AC-B^2=0-4=-4<0 .
$$

$\Delta<0$ means a [[Saddle Point]] at both $(1,1)$ and $(-1,-1)$.

> [!tip] Intuition
> $f_{xx}+f_{yy}=0$ from part a means $f_{xx}$ and $f_{yy}$ always have opposite signs (or are both zero), so $AC\le0$ and a true minimum or maximum is only possible if $B$ vanishes. Here $B\neq0$, so every critical point is a saddle.

### c. Slopes of the tangent lines to $f(x,y)=0$ at its $y$-intercepts

> [!success] Answer
> The $y$-intercepts are $(0,1)$ and $(0,-1)$, and the slope $dy/dx$ at both is $\dfrac12$.

On the curve $0=\ln(x^2+y^2)-xy$, a $y$-intercept has $x=0$:

$$
0=\ln\left(y^2\right) \;\Rightarrow\; y^2=e^0=1 \;\Rightarrow\; y=\pm1 .
$$

Differentiate the curve implicitly with respect to $x$ (see [[Implicit Differentiation]]):

$$
0=\frac{1}{x^2+y^2}\left(2x+2y\,y'\right)-\left(y+x\,y'\right) .
$$

- At $(0,1)$: $x^2+y^2=1$, so $0=2y'-1$, giving $y'=\dfrac12$.
- At $(0,-1)$: $0=-2y'+1$, giving $y'=\dfrac12$.

> [!example] Check with partials (my check)
> Slope $=-f_x/f_y$. At $(0,1)$: $f_x=0-1=-1$, $f_y=2-0=2$, slope $=\tfrac12$. At $(0,-1)$: $f_x=+1$, $f_y=-2$, slope $=\tfrac12$.

### d. $\displaystyle\lim_{x\to\infty}\frac{x\ln x}{x^2}$

> [!success] Answer
> $0$.

Cancel an $x$: the expression is $\dfrac{\ln x}{x}$, of the form $\dfrac\infty\infty$. By [[L'Hopital's Rule]]:

$$
\lim_{x\to\infty}\frac{\ln x}{x}=\lim_{x\to\infty}\frac{1/x}{1}=\frac1\infty=0 .
$$

(Intuition: $x$ outgrows $\ln x$.)

---

## Q3 — The system with parameter $a$

$$
\begin{cases}
ax+y+(1+a)z=a\\
2ax+2y+2z=a(a+1)\\
-ax-y+(a-1)z=a
\end{cases}
$$

### a. Values of $a$ for which a solution exists

> [!success] Answer
> $a=0$ and $a=-1$ (in both cases infinitely many solutions).

Form the [[Augmented Matrix]] and apply $-2R_1+R_2\to R_2$ and $R_1+R_3\to R_3$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{ccc|c}a&1&1+a&a\\0&0&-2a&a^2-a\\0&0&2a&2a\end{array}\right)
$$

(Check the middle row: $2-2(1+a)=-2a$ and $a(a+1)-2a=a^2-a$. Third row: $1+a+(a-1)=2a$.)

The pivot in column 1 requires $a\neq0$, so **$a=0$ is examined separately**. For $a\neq0$, divide $R_1$ by $a$ and add $R_2$ to $R_3$:

$$
\left(\begin{array}{ccc|c}1&\frac1a&\frac{1+a}{a}&1\\0&0&-2a&a^2-a\\0&0&0&a^2+a\end{array}\right)
$$

The last row says $0=a^2+a$. This is a false statement unless $a^2+a=a(a+1)=0$. With $a\neq0$ the only possibility is $a=-1$.

**Case $a=0$.** Substitute directly:

$$
\left(\begin{array}{ccc|c}0&1&1&0\\0&0&0&0\\0&0&0&0\end{array}\right)
$$

All rows are consistent ($0=0$), so $a=0$ also gives solutions.

So solutions exist for $a=0$ and $a=-1$ only.

### b. The solutions for each such $a$

> [!success] Answer
> $a=-1$: $(1+t,\;t,\;1)$. $a=0$: $(t,\;-m,\;m)$.

**$a=-1$.** The reduced matrix is

$$
\left(\begin{array}{ccc|c}1&-1&0&1\\0&0&2&2\end{array}\right)\xrightarrow{\frac12R_2\to R_2}\left(\begin{array}{ccc|c}1&-1&0&1\\0&0&1&1\end{array}\right)
$$

so $z=1$ and $x-y=1$. Column 2 has no pivot, so $y$ is free. Let $y=t$: $x=1+t$. Solution $(1+t,\,t,\,1)$.

> [!example] Check at $a=-1$
> Eq. 1: $-x+y+0\cdot z=-1$ gives $-(1+t)+t=-1$. Eq. 2: $-2x+2y+2z=0$ gives $-2-2t+2t+2=0$. Eq. 3: $x-y-2z=-1$ gives $1+t-t-2=-1$. All hold.

**$a=0$.** The only equation left is $y+z=0$. Let $z=m$ and $x=t$ (both free), then $y=-m$. Solution $(t,\,-m,\,m)$, a **plane** of solutions with two free parameters.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | argument $>0$ | $x>0$ |
| Q1b | log rules | identical |
| Q1c | tangent to $x+\ln x$ | $y=(1+1/e)x$ |
| Q1d | monotonic on $x\le3$ | min $(3,-27)$ |
| Q2a | second derivatives | sum is $0$ |
| Q2b | $f_x=f_y=0$, $\Delta$ | $(1,1)$ and $(-1,-1)$ saddles |
| Q2c | implicit differentiation | slope $\frac12$ at $(0,\pm1)$ |
| Q2d | L'Hopital | $0$ |
| Q3a | last row $0=a^2+a$ | $a=0$ or $a=-1$ |
| Q3b | read free variables | $(1+t,t,1)$ for $a=-1$; $(t,-m,m)$ for $a=0$ |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]], [[PS_08-Local Extrema and Critical Points]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
