---
title: "Marginal Profit, Rational Function Graph, Cusp, Euler Limits, Continuity Parameter (2015 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, 2015 (Moed B)"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - marginal-profit
  - asymptotes
  - increase-decrease
  - horizontal-translation
  - cusp
  - euler-limit
  - continuity
  - differentiability
  - absolute-value
aliases:
  - Maths A Moed B 2015
  - PP14 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Marginal Profit, Rational Function Graph, Cusp, Euler Limits, Continuity Parameter (2015 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, 2015 (Moed B)**, 3 hours, 4 questions of 25 points each. Questions 3 and 4 each have two unconnected segments.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_03-Composition, Transformations and Exponential Graphs]], [[PS_04-Limits and Continuity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> Answers follow **the key (author unclear)**: a handwritten, unsigned solution, 7 pages. Terse working is expanded into steps. Where the key conflicts with the lecture terminology it is kept and a `> [!warning]` explains (one spot: Q3a2).

> [!warning] Parts with no key
> None. Every part has a handwritten answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A given [[Marginal Function]] of profit: meaning of its value, where it increases, where *total* profit is maximal, estimating the next unit's effect | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |
| Q2 | Full look at $\frac{x^2}{(x+2)^4}+1$: [[Vertical Asymptote]], [[Horizontal Asymptote]], increase and decrease, graph, asymptote as tangent line, horizontal shift $f(x-3)$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]] |
| Q3 | Root function $\sqrt[3]{(x-1)^2}$: tangent lines at a given height, the non-smooth point; two [[Euler Limit]] type limits | [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]] |
| Q4 | A parameter that makes a piecewise function continuous (see [[Continuity]]), then differentiability by the definition; graph of an absolute value | [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]], [[PS_04-Limits and Continuity]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the printed function is the **marginal** profit. Total profit is its antiderivative, so total profit's slope is the printed function.
> - Q2: even powers in the denominator make the asymptote blow up on both sides, and the "+1" lifts everything onto the line $y=1$.
> - Q3: a limit of the form $(1+\text{small})^{1/\text{small}}$ is $e$; with base $2+\text{small}$ it is not.
> - Q4: a removable-looking hole is fixed by setting $a$ to the limit.

---

## Q1 — A factory's marginal profit (25 points)

**Question.** The **marginal** profit function for a factory is $f(x)=-x^{3}+30x^{2}$ dollars, where $x$ is the weekly production level (number of products produced and sold weekly), in the domain $1<x<40$.

a. Find $f(6)$ and $f(29)$. Choose one of the results and explain its meaning.
b. Find the interval (in the given domain) in which the **marginal** profit increases.
c. Find (in the given domain) the number of products the factory should produce and sell in order to achieve maximum **total** profit.
d. Given that the total profit from producing and selling $20$ products weekly is $\$20{,}000$, find the approximate total profit from producing and selling $21$ products weekly.

### a. Values and meaning

> [!success] Answer
> $f(6)=864$ and $f(29)=841$.

$$
f(6)=-6^{3}+30\cdot6^{2}=-216+1080=864,
\qquad
f(29)=-29^{3}+30\cdot29^{2}=-24{,}389+25{,}230=841 .
$$

**Meaning (taking $f(6)$).** At a production level of $6$ products per week, producing one more unit (the $7$th) would **increase the weekly profit by approximately $\$864$**. (For $f(29)$: producing the $30$th unit would add about $\$841$.)

### b. Where the marginal profit increases

> [!success] Answer
> $1<x<20$

The marginal profit $f$ increases where its own derivative is positive:

$$
f'(x)=-3x^{2}+60x=3x\,(20-x) .
$$

- $f'$ is defined everywhere, so there is nothing to exclude.
- $f'(x)=0$ at $x=0$ (outside the domain) and $x=20$.

| $x$ | $1<x<20$ | $20<x<40$ |
|---|---|---|
| $f'(x)$ | $+$ | $-$ |
| $f(x)$ (marginal profit) | increasing | decreasing |

So the marginal profit increases on $1<x<20$.

### c. Production level for maximum total profit

> [!success] Answer
> **$30$ units per week.**

Let $P(x)$ be total profit. Since $f$ is the marginal profit, $P'(x)=f(x)=-x^{3}+30x^{2}$. Set it to zero:

$$
-x^{3}+30x^{2}=x^{2}(30-x)=0 .
$$

$x=0$ is outside the domain, leaving $x=30$. For $1<x<30$, $x^{2}>0$ and $30-x>0$ so $P'>0$ (profit rising). For $30<x<40$, $P'<0$ (profit falling).

| $x$ | $1<x<30$ | $30<x<40$ |
|---|---|---|
| $P'(x)=f(x)$ | $+$ | $-$ |
| $P(x)$ | increasing | decreasing |

Total profit is maximal at $x=30$: **produce and sell $30$ units weekly**.

> [!tip] Intuition
> Part b and part c ask about different functions. Part b asks where the marginal profit *itself* rises (look at $f'$). Part c asks where *total* profit peaks (look at where the marginal profit $f$ crosses zero from positive to negative). Mixing them up is the classic trap here.

### d. Approximate total profit at 21 units

> [!success] Answer
>
> $$
> \approx\$24{,}000
> $$

Total profit at $21$ units is approximately the profit at $20$ plus the marginal profit of the $21$st unit, $f(20)$:

$$
f(20)=-20^{3}+30\cdot20^{2}=-8000+12{,}000=4000 .
$$

$$
P(21)\approx P(20)+f(20)=20{,}000+4000=24{,}000 .
$$

---

## Q2 — Investigating $f(x)=\dfrac{x^{2}}{(x+2)^{4}}+1$ (25 points)

**Question.** Given $f(x)=\dfrac{x^{2}}{(x+2)^{4}}+1$.

a. Find vertical and horizontal asymptotes using the appropriate limits.
b. Find the increase and decrease intervals and draw the graph of the function.
c. Is the horizontal asymptote also a tangent line to the function's graph? Explain.
d. Find increase and decrease intervals for the function $y=f(x-3)$.

### a. Asymptotes

> [!success] Answer
> **Vertical asymptote $x=-2$. Horizontal asymptote $y=1$** (in both directions).

**Vertical.** The only value outside the domain is $x=-2$. Near it the numerator tends to $4$ and $(x+2)^{4}$ tends to $0^{+}$ from both sides (an even power):

$$
\lim_{x\to-2}\left(\frac{x^{2}}{(x+2)^{4}}+1\right)=\frac{4}{0^{+}}+1=\infty .
$$

The limit is infinite, so $x=-2$ is a vertical asymptote.

**Horizontal.** Factor $x$ out of $(x+2)$:

$$
\lim_{x\to\pm\infty}\left(\frac{x^{2}}{x^{4}\left(1+\frac2x\right)^{4}}+1\right)
=\lim_{x\to\pm\infty}\left(\frac{1}{x^{2}\left(1+\frac2x\right)^{4}}+1\right)
=\frac{1}{\infty\cdot(1+0)^{4}}+1=0+1=1 .
$$

So $y=1$ is a horizontal asymptote at both ends.

### b. Increase and decrease, and the graph

Use the [[Quotient Rule]] on $\dfrac{x^{2}}{(x+2)^{4}}$ (the $+1$ disappears):

$$
f'(x)=\frac{2x(x+2)^{4}-4(x+2)^{3}\,x^{2}}{(x+2)^{8}}
=\frac{2x(x+2)^{3}\left[(x+2)-2x\right]}{(x+2)^{8}}
=\frac{2x\,(2-x)}{(x+2)^{5}} .
$$

- $f'(x)=0$ at $x=0$ and $x=2$.
- $f'$ is undefined at $x=-2$, which is not in the domain.

Signs of numerator $2x(2-x)$ and denominator $(x+2)^{5}$ (odd power, so it keeps the sign of $x+2$):

| $x$ | $x<-2$ | $-2<x<0$ | $0<x<2$ | $x>2$ |
|---|---|---|---|---|
| $2x(2-x)$ | $-$ | $-$ | $+$ | $-$ |
| $(x+2)^{5}$ | $-$ | $+$ | $+$ | $+$ |
| $f'(x)$ | $+$ | $-$ | $+$ | $-$ |
| $f(x)$ | increasing | decreasing | increasing | decreasing |

> [!success] Answer
> - **Increasing:** $x<-2$ and $0<x<2$.
> - **Decreasing:** $-2<x<0$ and $x>2$.
> - **Relative minimum at $(0,\ 1)$**, **relative maximum at $\left(2,\ 1\tfrac{1}{64}\right)$**, since $f(2)=\dfrac{4}{256}+1=1+\dfrac{1}{64}$.

![[PP14_q2_graph.png]]

The top panel shows the shape: the curve comes in from the left along $y=1$, shoots up to $+\infty$ at $x=-2$, comes down on the other side and just touches $y=1$ at $(0,1)$, then makes a small hump at $x=2$ before returning to $y=1$. The bottom panel zooms in on the right-hand branch, because the hump is only $\frac1{64}$ high (the key's sketch exaggerates it so it can be seen).

### c. Is the horizontal asymptote also a tangent line?

> [!success] Answer
> **Yes.** The line $y=1$ is tangent to the graph at $(0,1)$.

The graph meets the line $y=1$ only where $\dfrac{x^{2}}{(x+2)^{4}}+1=1$, i.e. $\dfrac{x^{2}}{(x+2)^{4}}=0$, which gives $x=0$ alone. At that point $f(0)=1$ and the slope is $f'(0)=0$. A line through $(0,1)$ with slope $0$ is $y=1$, which is exactly the horizontal asymptote, so it is the tangent line there.

### d. Increase and decrease of $y=f(x-3)$

> [!success] Answer
> - **Increasing:** $x<1$ and $3<x<5$.
> - **Decreasing:** $1<x<3$ and $x>5$.

The graph of $f(x-3)$ is the graph of $f$ shifted **3 units to the right**. Every interval from part b moves right by $3$ (add $3$ to each boundary): $-2\to1$, $0\to3$, $2\to5$. The vertical asymptote also moves to $x=1$, the minimum to $x=3$ and the maximum to $x=5$.

---

## Q3 — A root function and two limits (25 points)

There is no connection between the two segments.

### a. The function $f(x)=\sqrt[3]{(x-1)^{2}}$

**Question.** 1. Find the equations of the tangent lines to the graph of the function at the points where $y=4$. 2. Does $f(x)$ have a corner point? If so, find it and explain.

#### a1. Tangent lines where $y=4$

> [!success] Answer
>
> $$
> y=\tfrac13x+1\ \text{ at }(9,4),
> \qquad
> y=-\tfrac13x+\tfrac53\ \text{ at }(-7,4).
> $$

**Find the points.** Solve $\sqrt[3]{(x-1)^{2}}=4$. Cube both sides: $(x-1)^{2}=64$. Then $x-1=8$ or $x-1=-8$, so $x=9$ or $x=-7$.

**Slope.** Write $f(x)=(x-1)^{2/3}$:

$$
f'(x)=\frac23(x-1)^{-1/3}=\frac{2}{3\sqrt[3]{x-1}} .
$$

- At $x=9$: $f'(9)=\dfrac{2}{3\sqrt[3]{8}}=\dfrac{2}{3\cdot2}=\dfrac13$. Line: $y-4=\tfrac13(x-9)$, so $y=\tfrac13x+1$.
- At $x=-7$: $f'(-7)=\dfrac{2}{3\sqrt[3]{-8}}=\dfrac{2}{3\cdot(-2)}=-\dfrac13$. Line: $y-4=-\tfrac13(x+7)$, so $y=-\tfrac13x+\tfrac53$.

#### a2. Corner point

> [!success] Answer (the key)
> **Yes. $x=1$ is a corner point.**

The derivative $f'(x)=\dfrac{2}{3\sqrt[3]{x-1}}$ is undefined only at $x=1$. The one-sided limits there:

$$
\lim_{x\to1^{+}}f'(x)=\frac{2}{0^{+}}=+\infty,
\qquad
\lim_{x\to1^{-}}f'(x)=\frac{2}{0^{-}}=-\infty .
$$

The one-sided slopes are different, so the key concludes that $x=1$ is a corner point (and notes that the definition of the derivative also works).

> [!warning] Terminology conflict with the lectures
> In [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] a **corner** has two different *finite* one-sided slopes, while slopes $+\infty$ and $-\infty$ on the two sides make a [[Cusp]] (see also [[Lec_07-The Derivative, Differentiability and Rules]], section 3.3). By that rule $x=1$ is a cusp (the graph has a sharp tip at its minimum $(1,0)$), not a corner. The key's conclusion that $f$ is **not differentiable at $x=1$** is right either way, and its answer $x=1$ is kept. The same function appears in [[PP_12-Domain, Extrema, Vertical Tangent, Car Value Piecewise (2014 Moed B)]] Q2b, where that key calls $x=1$ a vertical tangent instead.

### b. Two limits

#### b1. Find $a$ such that $\displaystyle\lim_{x\to a}\left(1+(x-5)\right)^{\frac{1}{x-5}}=e$

> [!success] Answer
>
> $$
> a=5
> $$

The limit has the [[Euler Limit]] form

$$
\lim_{f(x)\to0}\bigl(1+f(x)\bigr)^{1/f(x)}=e,
$$

here with $f(x)=x-5$. That form equals $e$ only when the "small" quantity really tends to $0$, i.e. $x-5\to0$, which means $x\to5$. So $a=5$.

#### b2. Find $\displaystyle\lim_{x\to6}\left(2+(x-6)\right)^{\frac{1}{x-6}}$ (if it exists)

> [!success] Answer
> **The limit does not exist** (the one-sided limits are $\infty$ and $0$).

Here the base tends to $2$, not $1$, so this is not the Euler form. The exponent $\frac{1}{x-6}$ blows up, with a sign that depends on the side:

- $x\to6^{+}$: exponent $\frac{1}{0^{+}}=+\infty$, so $2^{+\infty}=\infty$.
- $x\to6^{-}$: exponent $\frac{1}{0^{-}}=-\infty$, so $2^{-\infty}=0$.

The two [[One-Sided Limit]]s differ, so the limit does not exist.

---

## Q4 — Continuity parameter and an absolute value graph (25 points)

There is no connection between the two segments.

### a. The function $f(x)=\begin{cases}\dfrac{2x^{2}-10x+12}{x-2} & x\neq2\\[8pt] a & x=2\end{cases}$

**Question.** 1. Find the domain. 2. Find the value of $a$ so that $f(x)$ is continuous for all $x$. 3. For the value of $a$ you found, use the definition of the derivative to find if the function is differentiable at $x=2$.

#### a1. Domain

> [!success] Answer
> **All $x$.**

For $x\neq2$ the fraction is defined (its denominator $x-2\neq0$), and at $x=2$ the function is simply given the value $a$. So every real number has a value.

#### a2. The value of $a$ for continuity

> [!success] Answer
>
> $$
> a=-2
> $$

For continuity at $x=2$ we need $f(2)=\lim_{x\to2}f(x)$. Factor the numerator: $2x^{2}-10x+12=2(x-2)(x-3)$.

$$
f(2)=a=\lim_{x\to2}\frac{2(x-3)(x-2)}{x-2}=\lim_{x\to2}2(x-3)=2(2-3)=-2 .
$$

So $a=-2$.

#### a3. Differentiability at $x=2$

> [!success] Answer
> **Differentiable at $x=2$, with $f'(2)=2$.**

With $a=-2$ we have $f(2)=-2$. For $h\neq0$, $f(2+h)=2\,(2+h-3)=2h-2$ (the cancelled form from part a2). By the [[Definition of the Derivative]]:

$$
f'(2)=\lim_{h\to0}\frac{f(2+h)-f(2)}{h}=\lim_{h\to0}\frac{2(2+h-3)-(-2)}{h}=\lim_{h\to0}\frac{2h-2+2}{h}=\lim_{h\to0}\frac{2h}{h}=2 .
$$

The limit exists (and is the same from both sides), so $f$ is differentiable at $x=2$.

### b. Graph of $y=|f(x)|$ where $f(x)=\begin{cases}x & 0\le x<2\\ 3 & 2\le x\le3\end{cases}$

> [!success] Answer
> Because $f$ is never negative, $y=|f(x)|$ has the **same graph as $f$**.

On $0\le x<2$ the values $x$ are $\ge0$; on $2\le x\le3$ the value is $3>0$. There is no negative part to reflect, so taking the absolute value changes nothing. The graph: the segment from $(0,0)$ up to an **open circle** at $(2,2)$, then a horizontal segment at height $3$ from $x=2$ to $x=3$, with **filled** points at $(2,3)$ and $(3,3)$.

![[PP14_q4b_abs_f_graph.png]]
