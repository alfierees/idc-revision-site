---
title: "Rational Function Investigation, Revenue and Profit, Absolute Quotient, Exponentials (2016 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, 2016 (Moed A)"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - asymptotes
  - relative-extremum
  - profit-maximisation
  - marginal-profit
  - absolute-value
  - corner-point
  - exponential-functions
  - limits
aliases:
  - Maths A Moed A 2016
  - PP15 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Rational Function Investigation, Revenue and Profit, Absolute Quotient, Exponentials (2016 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, 2016 (Moed A)**, 3 hours, 4 questions worth 30 / 25 / 25 / 20 points. Answer all, justify every claim.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_03-Composition, Transformations and Exponential Graphs]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> Answers follow **the key (author unclear)**: a handwritten, unsigned solution, 9 pages. Terse working is expanded into steps. Nothing in the key is changed.

> [!warning] Parts with no key
> None. Every part has a handwritten answer. The key does not give the $y$-values of the extreme points in Q1d. They are added below and marked as mine.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (30) | Full [[Function Investigation]] of $\frac{(x+2)^2}{(x-1)^3}$: domain, intercepts, asymptotes, extrema, graph, then the sign of $f'$ as a new function | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]] |
| Q2 (25) | A demand equation to [[Revenue Function]], [[Marginal Function]] of profit (meaning), and maximal [[Profit Function]] with a square root | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |
| Q3 (25) | $\frac{|4-x^2|}{x}$: continuity, vertical asymptote, differentiability at an excluded point, rewriting as a [[Piecewise Function]], and corner points | [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_04-Limits and Continuity]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]] |
| Q4 (20) | Three [[Exponential Function]]s: common point, increase and decrease, three limits | [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[PS_03-Composition, Transformations and Exponential Graphs]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the investigation is a fixed recipe: domain, intercepts, asymptotes, then a [[Sign Table]] for $f'$. Part f is free once you have the table for $f'$.
> - Q2: marginal profit is the derivative of profit. Setting it to zero here gives an equation with a square root, so check the answers for extraneous roots.
> - Q3: an absolute value splits the function into pieces; the corners are where the pieces meet with different slopes.
> - Q4: every $a^{x}$ goes through $(0,1)$; the base decides growth or decay.

---

## Q1 — Investigating $f(x)=\dfrac{(x+2)^{2}}{(x-1)^{3}}$ (30 points)

**Question.** Given $f(x)=\dfrac{(x+2)^{2}}{(x-1)^{3}}$.

a. What is the function's domain? Explain.
b. Find axes intercepts.
c. Find asymptotes (if there are any) using the appropriate limits.
d. Find relative extreme points.
e. Draw the graph.

$g(x)$ is another function which satisfies $g(x)=f'(x)$.

f. Find the intervals at which $g(x)$ is positive and the intervals at which $g(x)$ is negative.

### a. Domain

> [!success] Answer
>
> $$
> x\neq1
> $$

It is a fraction, and the denominator $(x-1)^{3}$ is zero only at $x=1$.

### b. Axes intercepts

> [!success] Answer
> **$y$-intercept $(0,-4)$. $x$-intercept $(-2,0)$.**

- $y$-intercept: $f(0)=\dfrac{(0+2)^{2}}{(0-1)^{3}}=\dfrac{4}{-1}=-4$.
- $x$-intercept: $f(x)=0$ when the numerator is zero, $(x+2)^{2}=0$, so $x=-2$.

### c. Asymptotes

> [!success] Answer
> **Horizontal asymptote $y=0$** (both ends). **Vertical asymptote $x=1$.**

**Horizontal.** Factor $x$ out of each bracket:

$$
\lim_{x\to\infty}\frac{(x+2)^{2}}{(x-1)^{3}}
=\lim_{x\to\infty}\frac{x^{2}\left(1+\frac2x\right)^{2}}{x^{3}\left(1-\frac1x\right)^{3}}
=\lim_{x\to\infty}\frac{\left(1+\frac2x\right)^{2}}{x\left(1-\frac1x\right)^{3}}
=\frac{(1+0)^{2}}{\infty\cdot(1-0)^{3}}=0 .
$$

The same steps for $x\to-\infty$ give $\dfrac{(1+0)^{2}}{-\infty\cdot(1-0)^{3}}=0$. So $y=0$ at both ends.

**Vertical.** The only value outside the domain is $x=1$. The numerator tends to $(1+2)^{2}=9$:

$$
\lim_{x\to1^{+}}\frac{(x+2)^{2}}{(x-1)^{3}}=\frac{9}{0^{+}}=+\infty,
\qquad
\lim_{x\to1^{-}}\frac{(x+2)^{2}}{(x-1)^{3}}=\frac{9}{0^{-}}=-\infty .
$$

So $x=1$ is a vertical asymptote (with opposite infinities on the two sides, since the exponent $3$ is odd).

### d. Relative extreme points

> [!success] Answer
> **Relative minimum at $x=-8$. Relative maximum at $x=-2$.**

Differentiate with the [[Quotient Rule]]:

$$
f'(x)=\frac{2(x+2)(x-1)^{3}-(x+2)^{2}\cdot3(x-1)^{2}}{(x-1)^{6}} .
$$

Factor $(x+2)(x-1)^{2}$ from the numerator and cancel against the denominator:

$$
f'(x)=\frac{(x+2)(x-1)^{2}\left[2(x-1)-3(x+2)\right]}{(x-1)^{6}}
=\frac{(x+2)(-x-8)}{(x-1)^{4}} .
$$

- $f'(x)=0$ at $x=-2$ and $x=-8$.
- $f'$ is undefined at $x=1$, which is not in the domain.

The denominator $(x-1)^{4}$ is positive, so the sign of $f'$ is the sign of $(x+2)(-x-8)=-(x+2)(x+8)$.

| $x$ | $x<-8$ | $-8<x<-2$ | $-2<x<1$ | $x>1$ |
|---|---|---|---|---|
| $f'(x)$ | $-$ | $+$ | $-$ | $-$ |
| $f(x)$ | decreasing | increasing | decreasing | decreasing |

$f'$ changes from $-$ to $+$ at $x=-8$ (a minimum) and from $+$ to $-$ at $x=-2$ (a maximum).

> [!tip] Intuition
> The key gives only the $x$-values. The heights (my addition, plain substitution): $f(-2)=0$, so the maximum is $(-2,0)$, which is also the $x$-intercept, and $f(-8)=\dfrac{36}{-729}=-\dfrac{4}{81}\approx-0.05$, so the minimum is a very shallow dip.

### e. The graph

![[PP15_q1_graph.png]]

*The vertical axis is clipped to show the small features near $y=0$; the curve plunges toward $-\infty$ just left of $x=1$ and comes down from $+\infty$ just right of it.*

Reading the graph from left to right:

- From far left the curve sits just below the $x$-axis ($y=0$ is the asymptote) and dips to its minimum at $x=-8$.
- It then rises to touch the $x$-axis at the maximum $x=-2$.
- It falls through the $y$-intercept $(0,-4)$ and goes down toward $-\infty$ at the vertical asymptote $x=1$.
- On the right of $x=1$ it comes down from $+\infty$ and flattens toward $y=0$.

### f. Where is $g(x)=f'(x)$ positive and negative?

> [!success] Answer
> - **$g>0$:** $-8<x<-2$.
> - **$g<0$:** $x<-8$ and $x>-2$ with $x\neq1$.

Since $g=f'$, the sign table in part d is exactly the sign table of $g$. ($x=1$ is not in the domain of $f'$, so it is excluded.)

---

## Q2 — Revenue and profit of a company (25 points)

**Question.** A company's price demand equation is

$$
p=\frac{40\,(x+6)^{3/2}}{x}+400,
$$

where $x$ is the monthly demand and $p$ is the price per unit in dollars. The monthly cost of production is $C(x)=30x^{2}+40x$ dollars.

a. Find the company's monthly revenue at a production level of $3$ units per month.
b. Find the marginal monthly profit at a production level of $3$ units per month, and explain the meaning of the result.
c. Find the maximal monthly profit.

### a. Monthly revenue at $x=3$

> [!success] Answer
>
> $$
> R(3)=\$2280
> $$

Revenue is price times quantity, $R(x)=x\cdot p$:

$$
R(x)=x\left(\frac{40(x+6)^{3/2}}{x}+400\right)=40\,(x+6)^{3/2}+400x .
$$

$$
R(3)=40\,(9)^{3/2}+400\cdot3=40\cdot27+1200=1080+1200=2280 .
$$

### b. Marginal monthly profit at $x=3$

> [!success] Answer
>
> $$
> P'(3)=\$360
> $$

Profit is revenue minus cost:

$$
P(x)=R(x)-C(x)=40(x+6)^{3/2}+400x-30x^{2}-40x=40(x+6)^{3/2}+360x-30x^{2}.
$$

Differentiate ([[Chain Rule]] on the first term: $40\cdot\tfrac32=60$):

$$
P'(x)=60\,(x+6)^{1/2}+360-60x .
$$

$$
P'(3)=60\cdot3+360-180=360 .
$$

**Meaning.** At a production level of $3$ units per month, producing **one more unit** (the $4$th) would increase the monthly profit by approximately **$\$360$**.

### c. Maximal monthly profit

> [!success] Answer
>
> $$
> P(10)=\$3160\quad\text{(at }x=10\text{ units per month)}
> $$

Set $P'(x)=0$:

$$
60\sqrt{x+6}+360-60x=0 .
$$

Divide by $60$ and move terms:

$$
\sqrt{x+6}+6-x=0\quad\Longrightarrow\quad\sqrt{x+6}=x-6 .
$$

Square both sides (this can introduce a false solution, so we must check):

$$
x+6=x^{2}-12x+36\quad\Longrightarrow\quad x^{2}-13x+30=0\quad\Longrightarrow\quad(x-3)(x-10)=0 .
$$

- **$x=3$ is rejected.** Check: $\sqrt{3+6}=3$ but $x-6=-3$, and $3\neq-3$. (Indeed $P'(3)=360\neq0$.)
- **$x=10$ is accepted.** Check: $\sqrt{16}=4=10-6$.

**It is a maximum.** The key's table shows $P'>0$ before $x=10$ and $P'<0$ after. For example $P'(3)=360>0$, and $P'(20)=60\sqrt{26}+360-1200<0$. So profit rises then falls, with its peak at $x=10$.

$$
P(10)=40\cdot16^{3/2}+360\cdot10-30\cdot10^{2}=40\cdot64+3600-3000=2560+600=3160 .
$$

---

## Q3 — The function $f(x)=\dfrac{|4-x^{2}|}{x}$ (25 points)

**Question.** Given $f(x)=\dfrac{\left|4-x^{2}\right|}{x}$.

a. Find the function's interval of continuity. Explain.
b. Does $f(x)$ have vertical asymptotes? If so, find them.
c. Is $f(x)$ differentiable at $x=0$? Explain.
d. Write $f(x)$ as a compound function.
e. Find $f'(x)$. Does $f(x)$ have corner points? If so, find them.

### a. Interval of continuity

> [!success] Answer
> **All $x\neq0$** (the domain).

The key: the function is not written as a compound function, so its interval of continuity is its domain. The only excluded value is $x=0$ (division by zero).

### b. Vertical asymptotes

> [!success] Answer
> **Yes: $x=0$.**

At $x=0$ the numerator tends to $|4-0|=4$ and the denominator to $0$:

$$
\lim_{x\to0^{+}}\frac{|4-x^{2}|}{x}=\frac{4}{0^{+}}=+\infty,
\qquad
\lim_{x\to0^{-}}\frac{|4-x^{2}|}{x}=\frac{4}{0^{-}}=-\infty .
$$

$x=0$ is the only place the function is not continuous, so it is the only candidate, and it is a vertical asymptote.

### c. Differentiable at $x=0$?

> [!success] Answer
> **No.**

As taught in class: if a function is discontinuous at a point, it is also not differentiable there. $f$ is not even defined at $x=0$ (and has a vertical asymptote there), so it cannot be differentiable at $0$.

### d. As a compound function

The expression $4-x^{2}$ is non-negative when $-2\le x\le2$ and negative otherwise (it is a downward parabola with roots $\pm2$). So $|4-x^{2}|=4-x^{2}$ on $[-2,2]$ and $-(4-x^{2})$ outside:

> [!success] Answer
>
> $$
> f(x)=\begin{cases}
> \dfrac{4-x^{2}}{x} & -2\le x\le2,\ x\neq0\\[8pt]
> -\dfrac{4-x^{2}}{x} & x<-2\ \text{ or }\ x>2
> \end{cases}
> $$

### e. The derivative and the corner points

Split each piece into powers of $x$:

$$
f(x)=\begin{cases}4x^{-1}-x & -2\le x\le2,\ x\neq0\\[4pt] -4x^{-1}+x & x<-2\ \text{ or }\ x>2\end{cases}
$$

$$
f'(x)=\begin{cases}-\dfrac{4}{x^{2}}-1 & -2<x<2,\ x\neq0\\[8pt] \dfrac{4}{x^{2}}+1 & x<-2\ \text{ or }\ x>2\end{cases}
$$

The pieces can only fail to join smoothly at the seams $x=-2$ and $x=2$ (the function is continuous there, since $f(\pm2)=0$ on both pieces). Compare the one-sided slopes:

| Point | slope from the left | slope from the right |
|---|---|---|
| $x=2$ | $-\dfrac{4}{4}-1=-2$ | $\dfrac{4}{4}+1=2$ |
| $x=-2$ | $\dfrac{4}{4}+1=2$ | $-\dfrac{4}{4}-1=-2$ |

> [!success] Answer
> The one-sided slopes differ at both seams, so $f$ has **two corner points: $x=-2$ and $x=2$**.

---

## Q4 — Three exponential functions (20 points)

**Question.** Given $f(x)=2^{x}$, $g(x)=0.2^{x}$ and $h(x)=e^{x}$.

a. Find the point at which the graphs of the three functions intersect one another.
b. Find increase and decrease intervals for the functions.
c. Find the limits: 1. $\displaystyle\lim_{x\to\infty}\left[f(x)+g(x)\right]$, 2. $\displaystyle\lim_{x\to\infty}\left[f(x)\cdot g(x)\right]$, 3. $\displaystyle\lim_{x\to0}\frac{h(x)-1}{2x}$.

### a. The common point

> [!success] Answer
>
> $$
> (0,\,1)
> $$

Every basic exponential function $a^{x}$ passes through $(0,1)$, because $a^{0}=1$ for any base. The key's sketch shows the two cases: $a>1$ rises through $(0,1)$ and $0<a<1$ falls through it. Here $2$ and $e$ are bases above $1$, and $0.2$ is a base between $0$ and $1$.

> [!tip] Intuition
> It is the only common point. If two different bases $a\neq b$ gave $a^{x}=b^{x}$, then $\left(\tfrac ab\right)^{x}=1$ with $\tfrac ab\neq1$, which forces $x=0$. This extra check is mine, not the key's.

### b. Increase and decrease

> [!success] Answer
> $f(x)=2^{x}$ and $h(x)=e^{x}$ are **increasing for all $x$**. $g(x)=0.2^{x}$ is **decreasing for all $x$**.

For $y=a^{x}$: when $a>1$ the function is always increasing; when $0<a<1$ it is always decreasing. The bases $2$ and $e\approx2.72$ exceed $1$; $0.2$ lies between $0$ and $1$.

### c. The limits

**c1.** $\displaystyle\lim_{x\to\infty}\left[2^{x}+0.2^{x}\right]=2^{\infty}+0.2^{\infty}=\infty+0=\infty$.

> [!success] Answer: $\infty$

**c2.** Direct substitution gives $\infty\cdot0$, which is undetermined. Combine the powers: $a^{x}b^{x}=(ab)^{x}$.

$$
\lim_{x\to\infty}\left[2^{x}\cdot0.2^{x}\right]=\lim_{x\to\infty}(2\cdot0.2)^{x}=\lim_{x\to\infty}0.4^{x}=0 ,
$$

because the base $0.4$ is between $0$ and $1$.

> [!success] Answer: $0$

**c3.** $\displaystyle\lim_{x\to0}\frac{e^{x}-1}{2x}$ is of the form $\frac00$.

The key rewrites $e^{x}$ using the Euler limit, $e=\lim(1+x)^{1/x}$, so $e^{x}\approx\left[(1+x)^{1/x}\right]^{x}=1+x$ near $0$. Then the numerator is about $x$:

$$
\lim_{x\to0}\frac{e^{x}-1}{2x}=\lim_{x\to0}\frac{(1+x)-1}{2x}=\lim_{x\to0}\frac{x}{2x}=\frac12 .
$$

> [!success] Answer: $\dfrac12$

> [!tip] Intuition
> The cleaner way to say the same thing is the standard limit $\displaystyle\lim_{x\to0}\frac{e^{x}-1}{x}=1$ (the slope of $e^{x}$ at $0$, see [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]]): $\dfrac{e^{x}-1}{2x}=\tfrac12\cdot\dfrac{e^{x}-1}{x}\to\tfrac12\cdot1$. The key's substitution is a shorthand for that fact.
