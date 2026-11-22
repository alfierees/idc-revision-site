---
title: "Cube Root Investigation, Piecewise Differentiability, Marginal Profit & Limits (2012 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed A 2012"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - tangent-line
  - vertical-tangent
  - piecewise-function
  - differentiability
  - marginal-function
  - euler-limit
aliases:
  - Maths A Moed A 2012
  - PP07 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Cube Root Investigation, Piecewise Differentiability, Marginal Profit & Limits (2012 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed A 2012**, 3 hours, 3 questions (35 / 35 / 30 points). Non-graphic calculator only, no other material.
> Builds on: [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
> Practice: [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]]

> [!info] Source
> The questions and the handwritten solution share one PDF (questions on pages 1 to 3, solution on pages 4 to 8). Answers follow **the key (author unclear)**: handwritten and unsigned. Terse working is expanded into steps.

> [!warning] Parts with no key
> None. Every part has a handwritten answer. No key answer needed changing. One handwritten label on the key's graph is a slip, see Q1a step 8.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (35) | [[Function Investigation]] of a cube-root function (substitution $t=\sqrt[3]{x}$ for the roots), tangent lines at extrema and inflection points including a [[Vertical Tangent]], then extrema of $g$ from $g'=f\cdot f'$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]] |
| Q2 (35) | [[Piecewise Function]] with a parameter $k$: [[Continuity]], [[Definition of the Derivative]], a tangent line that cannot exist, a limit at infinity | [[Lec_07-The Derivative, Differentiability and Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] |
| Q3 (30) | [[Marginal Function]] meaning, an [[Euler Limit]] of type $1^\infty$, the [[Chain Rule]] with a product | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]] |

> [!tip] Intuition: the one move behind each question
> - Q1: a cube root exists for negative numbers too, so the domain is all of $\mathbb{R}$, and the sharp point at $x=0$ is where the slope blows up.
> - Q1c: $g'=f\cdot f'$ changes sign when **either** factor does. Stack the two sign rows and multiply.
> - Q2: a parameter is pinned down by matching one-sided limits (continuity) or one-sided slopes (differentiability). A tangent line needs both point and slope to match, and one $k$ rarely does both.
> - Q3b: a limit $\frac{f(x)}{x}\to3$ with a finite value forces $f(0)=0$.

---

## Q1 — Investigating $f(x)=\sqrt[3]{x^2}-2\sqrt[3]{x}-3$ (35 points)

**Question.** Given $f(x)=\sqrt[3]{x^{2}}-2\cdot\sqrt[3]{x}-3$.

**a.** Investigate the function by these criteria: 1) Domain; 2) Axis intersections; 3) Asymptotes (show the relevant limits); 4) Intervals of increase and decrease; 5) Points of relative extremum; 6) Intervals of concavity (upward or downward); 7) Inflection points; 8) Draw the function's graph.

**b.** Find the equations of the tangent lines to the graph of the function at all extremum and inflection points, and add them to the graph.

**c.** Given the function $g(x)$ so that its derivative $g'(x)$ satisfies $g'(x)=f(x)\cdot f'(x)$. Find the values of $x$ at which $g(x)$ has relative extremum and characterize them as minimum or maximum.

### a. Investigation

Write $f(x)=x^{2/3}-2x^{1/3}-3$.

**1. Domain.** A cube root is defined for every real number: **all $x$**.

**2. Axis intersections.**

- $y$-axis: $f(0)=-3$, the point **$(0,-3)$**.
- $x$-axis: set $f(x)=0$ and substitute $t=x^{1/3}$, so $x^{2/3}=t^2$:

$$
t^2-2t-3=0\ \Longrightarrow\ (t-3)(t+1)=0\ \Longrightarrow\ t=3\ \text{or}\ t=-1 .
$$

Undo the substitution: $x=t^3$ gives $x=27$ and $x=-1$. The points are **$(-1,0)$** and **$(27,0)$**.

**3. Asymptotes.**

- **[[Vertical Asymptote]]: none.** The function is defined and continuous everywhere, with no point of discontinuity.
- **[[Horizontal Asymptote]]: none.** Factor out the leading term:

$$
\lim_{x\to\infty}\Big(x^{2/3}-2x^{1/3}-3\Big)=\lim_{x\to\infty}x^{2/3}\Big(1-\frac{2}{x^{1/3}}-\frac{3}{x^{2/3}}\Big)=\infty\cdot(1-0-0)=\infty .
$$

$$
\lim_{x\to-\infty}\Big(\sqrt[3]{x^2}-2\sqrt[3]{x}-3\Big)=\infty-2(-\infty)-3=\infty .
$$

> [!note] Oblique asymptote (mine, the key does not mention it)
> $f$ grows like $x^{2/3}$, slower than a line, so $\dfrac{f(x)}{x}\to0$ while $f\to\infty$. There is no [[Oblique Asymptote]] either.

**4. Increase and decrease.** By the [[Power Rule]]:

$$
f'(x)=\frac23x^{-1/3}-\frac23x^{-2/3}=\frac{2x^{1/3}-2}{3x^{2/3}}=\frac{2\sqrt[3]{x}-2}{3\sqrt[3]{x^2}} .
$$

- $f'(x)=0$ at $x=1$.
- $f'$ is undefined at $x=0$, though $f$ is defined there: a [[Critical Point]].

The denominator $3\sqrt[3]{x^2}$ is positive for $x\neq0$, so the sign of $f'$ is the sign of $\sqrt[3]{x}-1$.

| $x$ | $x<0$ | $0<x<1$ | $x>1$ |
|---|---|---|---|
| $f'(x)$ | $-$ | $-$ | $+$ |
| $f(x)$ | decreasing | decreasing | increasing |

- **Decreasing** for $x<1$ (with the sharp point at $0$); **increasing** for $x>1$.

**5. Relative extremum.** Only $x=1$ changes the sign of $f'$ ($-$ to $+$): a relative **minimum** at $f(1)=1-2-3=-4$, the point **$(1,-4)$**. At $x=0$ the sign does not change, so no extremum.

**6. Concavity.** Differentiate $f'$:

$$
f''(x)=-\frac29x^{-4/3}+\frac49x^{-5/3}=\frac{-2x^{1/3}+4}{9x^{5/3}}=\frac{4-2\sqrt[3]{x}}{9\sqrt[3]{x^5}} .
$$

- $f''(x)=0$: $\sqrt[3]{x}=2$, so $x=8$.
- $f''$ is undefined at $x=0$.

| $x$ | $x<0$ | $0<x<8$ | $x>8$ |
|---|---|---|---|
| numerator $4-2\sqrt[3]{x}$ | $+$ | $+$ | $-$ |
| denominator $9\sqrt[3]{x^5}$ | $-$ | $+$ | $+$ |
| $f''(x)$ | $-$ | $+$ | $-$ |
| $f(x)$ | concave down | concave up | concave down |

- **Concave down** for $x<0$ and $x>8$; **concave up** for $0<x<8$.

**7. Inflection points.** $f''$ changes sign at $x=0$ and at $x=8$, and $f$ is defined at both: [[Inflection Point]]s **$(0,-3)$** and **$(8,-3)$** (since $f(8)=4-4-3=-3$).

**8. Graph** (with the tangent lines of part b):

![[PP07_q1_cube_root_with_tangents.png]]

> [!note] A slip on the key's graph
> The key's sketch labels the $y$-intercept "$(0,3)$". It should read $(0,-3)$, as in its own step 2 and its inflection table. Nothing else depends on it.

> [!tip] Intuition
> The graph falls from the upper left through $(-1,0)$, drops almost vertically through $(0,-3)$, bottoms out at $(1,-4)$, then climbs slowly through $(8,-3)$ to $(27,0)$ and keeps rising.

### b. Tangent lines at the extremum and inflection points

The special points are $(0,-3)$, $(1,-4)$ and $(8,-3)$.

- **At $(0,-3)$:** the slope is infinite on **both** sides with the same sign:

$$
\lim_{x\to0}\frac{2\sqrt[3]{x}-2}{3\sqrt[3]{x^2}}=\frac{-2}{0^+}=-\infty .
$$

The cube root in the denominator is $\sqrt[3]{x^2}\ge0$ on both sides. Same sign on both sides means a **vertical tangent**, the line **$x=0$** (not a [[Cusp]]).

- **At $(1,-4)$:** $f'(1)=0$, a horizontal tangent: **$y=-4$**.
- **At $(8,-3)$:** $f'(8)=\dfrac{2\cdot2-2}{3\cdot4}=\dfrac{2}{12}=\dfrac16$. Use $y-y_0=m(x-x_0)$:

$$
y+3=\frac16(x-8)\ \Longrightarrow\ y=\frac16x-\frac43-3=\frac16x-4\tfrac13 .
$$

> [!success] Answer
> Vertical tangent **$x=0$** at $(0,-3)$; horizontal tangent **$y=-4$** at $(1,-4)$; tangent **$y=\tfrac16x-4\tfrac13$** at $(8,-3)$.

### c. Extrema of $g$ where $g'=f\cdot f'$

The sign of $g'$ is the sign of $f$ times the sign of $f'$. So $g'$ can change sign only where $f$ changes sign (at $x=-1$ and $x=27$) or where $f'$ does (at $x=1$). Build the table from part a:

| $x$ | $x<-1$ | $-1<x<1$ | $1<x<27$ | $x>27$ |
|---|---|---|---|---|
| sign of $f$ | $+$ | $-$ | $-$ | $+$ |
| sign of $f'$ | $-$ | $-$ | $+$ | $+$ |
| sign of $g'=f\cdot f'$ | $-$ | $+$ | $-$ | $+$ |
| $g$ | decreasing | increasing | decreasing | increasing |

At $x=0$, $f'$ is undefined and tends to $-\infty$ on both sides, so $g'=f\cdot f'$ keeps the same sign there: no extremum at $0$.

> [!success] Answer
> $g$ has a relative **minimum at $x=-1$**, a relative **maximum at $x=1$**, and a relative **minimum at $x=27$**.

---

## Q2 — A piecewise function with a parameter $k$ (35 points)

**Question.** Given

$$
f(x)=\begin{cases}e^{x} & x\ge 0\\[4pt] 1+k\,(x^2-x) & x<0\end{cases}
\qquad(\text{"}k\text{" is a parameter}).
$$

**a.** Find the domain and the interval of continuity of the function.

**b.** Use the definition of the derivative to find if there is a value of $k$ for which the function is differentiable at $x=0$. If such a value does not exist, explain why, and if it does exist, find the equation of the tangent line at that point.

**c.** Regardless of part b: find if there is a value of $k$ for which the line $y=-7x+12$ will be a tangent line to the graph of the function at $x=-3$.

**d.** Find $\displaystyle\lim_{x\to\infty}\frac{f(x)-1}{2\cdot3^{-x}-3^{x}}$.

### a. Domain and continuity

Both branches are defined for every $x$ in their region, so the domain is **all real $x$**. Each branch is continuous on its own (an exponential, a polynomial), so the only possible break is the joint at $x=0$:

1. $f(0)=e^0=1$.
2. From the left: $\lim_{x\to0^-}\big(1+k(0^2-0)\big)=1$. From the right: $\lim_{x\to0^+}e^x=1$.

Both equal $f(0)=1$ for **every** $k$.

> [!success] Answer
> Domain: all $x$. The function is continuous for all $x$, whatever $k$ is.

### b. Differentiability at $x=0$ from the definition

Compute the one-sided slopes of $\dfrac{f(0+h)-f(0)}{h}$, with $f(0)=1$.

**Right ($h\to0^+$):**

$$
\lim_{h\to0^+}\frac{e^h-1}{h}=1 \qquad(\text{standard exponential limit}).
$$

**Left ($h\to0^-$):**

$$
\lim_{h\to0^-}\frac{1+k(h^2-h)-1}{h}=\lim_{h\to0^-}\frac{k\,h\,(h-1)}{h}=\lim_{h\to0^-}k(h-1)=-k .
$$

Differentiable at $0$ needs the two one-sided slopes to be equal: $1=-k$.

$$
k=-1 .
$$

The slope at the point $(0,1)$ is then $1$, so the tangent line is $y-1=1\cdot(x-0)$.

> [!success] Answer
> Yes: **$k=-1$**, and the tangent line is **$y=x+1$**.

### c. Can $y=-7x+12$ be tangent at $x=-3$?

For the line to be tangent at $x=-3$, two things must hold at the same $k$: the point must be on the graph, and the slopes must match.

**Point.** The line gives $y=-7(-3)+12=33$ at $x=-3$, so $(-3,33)$ must lie on the graph. Since $-3<0$, use the lower branch:

$$
1+k\big((-3)^2-(-3)\big)=33\ \Longrightarrow\ 1+12k=33\ \Longrightarrow\ 12k=32\ \Longrightarrow\ k=\frac83 .
$$

**Slope.** For $x<0$, $f'(x)=k(2x-1)$, so $f'(-3)=-7k$. With $k=\frac83$:

$$
f'(-3)=\frac83\cdot(-7)=-18\tfrac23\ \neq\ -7 .
$$

> [!success] Answer
> **No such $k$ exists.** The point condition forces $k=\frac83$, which gives slope $-18\frac23$, not $-7$.

> [!tip] Intuition
> The slope condition alone would give $-7k=-7$, so $k=1$. The point condition says $k=\frac83$. One $k$ cannot be both $1$ and $\frac83$, so no value works.

### d. A limit at infinity

For $x\to\infty$ the branch is $f(x)=e^x$. In the denominator, $2\cdot3^{-x}\to0$, so the denominator behaves like $-3^x$:

$$
\lim_{x\to\infty}\frac{e^x-1}{2\cdot3^{-x}-3^x}
=\lim_{x\to\infty}\frac{e^x\big(1-\frac{1}{e^x}\big)}{-3^x}
=\lim_{x\to\infty}-\Big(\frac e3\Big)^x\cdot1=0 .
$$

The base $\frac e3<1$ (since $e\approx2.718<3$), so $\big(\frac e3\big)^x\to0$.

> [!success] Answer
> **$0$.**

---

## Q3 — Marginal profit, an Euler limit and a chain-rule product (30 points)

**Question.**

**a.** The profit (in thousands of dollars) of an ice-cream machines rental company is $P(x)=x^2-4\sqrt{(x+4)^3}$, where $x$ is the number of rented machines. Find the value of $x$ for which $P'(x)=28$ and explain the marginal meaning of the results.

Regardless of part a:

**b.** Given the function $f(x)$ which satisfies $f(2)=4$ and $\displaystyle\lim_{x\to0}\frac{f(x)}{x}=3$.

1. Find $\displaystyle\lim_{x\to0}\big(1-2f(x)\big)^{3/x}$.
2. Let $g(x)=\sqrt{5+x\cdot f(2x)}$ and $g'(1)=0$. Find $f'(2)$.

### a. Where is marginal profit 28?

Write $P(x)=x^2-4(x+4)^{3/2}$. By the [[Power Rule]] and chain rule:

$$
P'(x)=2x-4\cdot\frac32(x+4)^{1/2}=2x-6\sqrt{x+4}.
$$

Set $P'(x)=28$ and isolate the root:

$$
2x-6\sqrt{x+4}=28\ \Longrightarrow\ x-14=3\sqrt{x+4}.
$$

Square both sides (this can add a false root, so check at the end):

$$
x^2-28x+196=9(x+4)\ \Longrightarrow\ x^2-37x+160=0\ \Longrightarrow\ (x-32)(x-5)=0 .
$$

**Check by substitution.** For $x=32$: left side $18$, right side $3\sqrt{36}=18$. Works. For $x=5$: left side $-9$, right side $3\sqrt9=9$. Fails (it only solves the squared equation), so reject it.

> [!success] Answer
> **$x=32$.** Meaning: [[Marginal Function]] reading. Renting the **33rd machine** will increase profit by approximately **28,000 dollars** (profit is in thousands).

### b.1) The limit of $\big(1-2f(x)\big)^{3/x}$

Since $\displaystyle\lim_{x\to0}\frac{f(x)}{x}=3$ is a finite number and $x\to0$, the numerator must tend to $0$ too: $\lim_{x\to0}f(x)=0$. So the base $1-2f(x)\to1$ while the exponent $\frac3x\to\pm\infty$: a $1^\infty$ form, the [[Euler Limit]] pattern $(1+u)^{1/u}\to e$ with $u=-2f(x)\to0$.

$$
\lim_{x\to0}\Big[1+\big(-2f(x)\big)\Big]^{3/x}
=\lim_{x\to0}\left[\Big(1+\big(-2f(x)\big)\Big)^{\frac{1}{-2f(x)}}\right]^{\frac{-2f(x)\cdot3}{x}}
=e^{\lim\left(-6\,\frac{f(x)}{x}\right)}=e^{-6\cdot3}=e^{-18}.
$$

> [!success] Answer
> **$e^{-18}$.**

### b.2) $f'(2)$ from $g'(1)=0$

Write $g(x)=\big(5+x\,f(2x)\big)^{1/2}$. Chain rule on the outside, product rule on $x\,f(2x)$, and the chain rule again for $f(2x)$ (the extra factor $2$):

$$
g'(x)=\frac12\big(5+x f(2x)\big)^{-1/2}\cdot\Big(f(2x)+x\cdot f'(2x)\cdot2\Big)=\frac{f(2x)+2x\,f'(2x)}{2\sqrt{5+x\,f(2x)}} .
$$

At $x=1$, with $f(2)=4$:

$$
0=g'(1)=\frac{f(2)+2f'(2)}{2\sqrt{5+f(2)}}=\frac{4+2f'(2)}{2\sqrt9}.
$$

The denominator is $6$, not zero, so the numerator is zero: $f(2)+2f'(2)=0$, hence

$$
f'(2)=-\frac12f(2)=-\frac12\cdot4=-2 .
$$

> [!success] Answer
> **$f'(2)=-2$.**
