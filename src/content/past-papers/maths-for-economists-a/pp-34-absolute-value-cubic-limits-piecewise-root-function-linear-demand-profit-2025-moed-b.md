---
title: "Absolute Value Cubic, Limits, Piecewise Root Function & Linear Demand Profit (2025 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2025 Moed B"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - absolute-value
  - transformations
  - limits
  - euler-limit
  - asymptotes
  - piecewise-functions
  - definition-of-derivative
  - definite-integral
  - price-demand
  - profit-maximisation
aliases:
  - Math I 2025 Moed B
  - PP34 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Absolute Value Cubic, Limits, Piecewise Root Function & Linear Demand Profit (2025 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2025 (Moed B)**, Hever Schulberg. 4 questions (25, 20, 30, 25 points), 3 hours.
> Builds on: [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF (page 1 is the cover sheet). Page 4 is **not a worked key**: it is only an index saying which earlier exam or exercise each question comes from (a typed list, not handwritten). There is nothing else after it. Every answer below is therefore taken from the **key (author unclear)** of the exam or exercise that page 4 names, after checking that the wording and numbers match. The match is word for word in every case except Q2a, where the exercise covers only one side of the limit (see the note there). Each part says where its answer comes from.

> [!info] What the index on page 4 says
> | This paper | Comes from |
> |---|---|
> | Q1 | 2019 Moed A, question 2 |
> | Q2a | Exercise 5, question 1, segment 4 |
> | Q2b | Exercise 6, question 3, segment b |
> | Q2c | Exercise 12, question 2, segment c |
> | Q3 | 2022 Moed A, question 1 |
> | Q4 | 2019 Moed A, question 3 |

> [!warning] AI-written parts
> No part of this paper is solved from scratch. Two things are mine: the **right-hand check in Q2a** (the exercise it points to covers only $x\to0^-$) and the **convention note in Q3c** (why the key says "yes" to a corner when one slope is infinite). Neither changes a key answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | $f(x)=\left|(x-3)^2x\right|$: extremes of an absolute value, then two transformations ($f(x+2)$, $f(-x)$), then a one-sided limit | [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q2 | Three limits and asymptotes: an absolute value, a near-Euler limit with base $\to2$, and $e^{1/(x-4)}+2$ | [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |
| Q3 | Full investigation of $x^2+2x$ / $\sqrt x$, a vertical-tangent and corner question, and an integral equal to $0$ | [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q4 | Linear demand, revenue, cost, profit and its maximum | [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |

> [!tip] Intuition: the one move behind each question
> - Q1: graph the function **inside** the absolute value first, then flip its negative part up. Transformations just move the extreme points.
> - Q2: a limit only becomes an Euler limit when the base tends to $1$.
> - Q3: $\sqrt x$ has a vertical tangent at $0$, but only on the right; the left side has slope $2$. That one fact answers differentiability, vertical tangent and corner.
> - Q4: profit is a downward parabola; its top is at marginal revenue $=$ marginal cost.

---

## Q1 — Investigating $f(x)=\left|(x-3)^2\cdot x\right|$ (25 points)

**Question.** Given $f(x)=\left|(x-3)^2\cdot x\right|$.

a. Find the interval of continuity of $f(x)$.
b. Find relative extreme points for $f(x)$.
c. Find relative extreme points for the function $y_1=f(x+2)$.
d. Find relative extreme points for the function $y_2=f(-x)$.
e. Find the limit $\displaystyle\lim_{x\to0^-}\frac{f(x)}{x}$.

All five parts are 2019 Moed A, question 2 (same function, same parts); the answers are that key's, expanded into steps.

### a. Interval of continuity

> [!success] Answer (the key via 2019 Moed A Q2)
> $f$ is **not piecewise**, so its interval of continuity equals its domain: **all $x$**. (A polynomial and an absolute value are both continuous.)

### b. Extreme points

An absolute value graph is easy to get: graph the function inside it, then **reflect the negative part** about the $x$-axis. So first study $y=(x-3)^2x$.

- **Zeros:** $x=3$ (double) and $x=0$.
- **Derivative** (product rule): $y'=2(x-3)x+(x-3)^2=(x-3)(2x+x-3)=(x-3)(3x-3)=3(x-3)(x-1)$, which is $0$ at $x=1$ and $x=3$.

| Interval | $y'$ | $y$ |
|---|---|---|
| $x<1$ | $+$ | increasing |
| $1<x<3$ | $-$ | decreasing |
| $x>3$ | $+$ | increasing |

So the inner function has a maximum at $x=1$, with $y(1)=(1-3)^2\cdot1=4$, and a minimum at $x=3$ with $y(3)=0$. For $x<0$ the inner function is negative (it passes below the axis at $0$), and the absolute value reflects that part upward. The reflected part comes down to $0$ at $x=0$, which makes $x=0$ a minimum of $f$ (a corner, since the curve arrives there at a slant).

> [!success] Answer (the key via 2019 Moed A Q2)
> Minimum at $x=0$ (point $(0,0)$), **maximum at $x=1$ (point $(1,4)$)**, minimum at $x=3$ (point $(3,0)$).

### c. $y_1=f(x+2)$

Replacing $x$ by $x+2$ is a **horizontal translation of $2$ to the left** (see [[Horizontal Translation]]). Every extreme point moves $2$ to the left and keeps its height.

> [!success] Answer (the key via 2019 Moed A Q2)
> Minimum at $x=-2$, maximum at $x=-1$ (height $4$), minimum at $x=1$.

### d. $y_2=f(-x)$

Replacing $x$ by $-x$ is a **reflection around the $y$-axis** (see [[Reflection of a Graph]]). Each extreme point $x_0$ goes to $-x_0$, and maxima stay maxima.

> [!success] Answer (the key via 2019 Moed A Q2)
> Minimum at $x=-3$, maximum at $x=-1$ (height $4$), minimum at $x=0$.

### e. $\displaystyle\lim_{x\to0^-}\frac{f(x)}{x}$

For $x\to0^-$ the expression inside the absolute value is **negative** ($x<0$ and $(x-3)^2>0$), so the absolute value changes its sign: $f(x)=-x(x-3)^2$. Then

$$
\frac{f(x)}{x}=\frac{-x(x-3)^2}{x}=-(x-3)^2\;\longrightarrow\;-(0-3)^2=-9
$$

> [!success] Answer (the key via 2019 Moed A Q2)
> $-9$.

---

## Q2 — Three unrelated segments (20 points)

### a. $\displaystyle\lim_{x\to0}\frac{x-1}{\left|-x^2+x\right|}$

Factor: $-x^2+x=x(1-x)$. The numerator tends to $-1$. Near $0$ the absolute value is a small positive number:

- **$x\to0^-$:** $x(1-x)<0$, so $\left|x(1-x)\right|=x^2-x\to0^+$. The limit is $\dfrac{-1}{0^+}=-\infty$ (this is Exercise 5 Q1(4), [[PS_05-Limits, Infinite Limits and Limits at Infinity]]).
- **$x\to0^+$** (my check): $0<x<1$ gives $x(1-x)>0$, so the absolute value is $x(1-x)\to0^+$ and the limit is again $\dfrac{-1}{0^+}=-\infty$.

$$
\lim_{x\to0}\frac{x-1}{\left|-x^2+x\right|}=-\infty
$$

> [!success] Answer (the key via Exercise 5 Q1(4))
> $-\infty$. The identical two-sided limit is in [[PP_16-Derivative Graph Reading, Marginal Cost, Piecewise Tangents & Absolute Value Limits (2016 Moed B)]] (Q4a), with the same answer.

> [!note] Note on the index
> Page 4 says "question 1 segment 4 from exercise 5". Exercise 5 question 1(4) is the **one-sided** limit $x\to0^-$. This paper asks the two-sided limit, which needs the right-hand side too, shown above.

### b. $\displaystyle\lim_{x\to\infty}\left(1+\frac{x^2}{x^2+1}\right)^{\frac{2x}{x-1}}$

This is **not** an Euler limit, because the base does not tend to $1$:

- Base: $\dfrac{x^2}{x^2+1}\to1$, so the base $1+\dfrac{x^2}{x^2+1}\to1+1=2$.
- Exponent: $\dfrac{2x}{x-1}\to2$.

Substitute both separately:

$$
\lim_{x\to\infty}\left(1+\frac{x^2}{x^2+1}\right)^{\frac{2x}{x-1}}=2^2=4
$$

> [!success] Answer (the key via Exercise 6 Q3(b))
> $4$. See [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]] (Q3b).

> [!tip] Intuition
> Before reaching for the Euler formula, ask what the base tends to. Only a base tending to $1$ gives a $1^\infty$ form. A base tending to $2$ with an exponent tending to $2$ is just $2^2$.

### c. Asymptotes of $f(x)=e^{\frac1{x-4}}+2$

**Vertical.** The suspect point is $x=4$ (zero denominator in the exponent).

- From the right, $x\to4^+$: $\dfrac1{x-4}\to+\infty$, so $e^{\frac1{x-4}}\to\infty$ and $f\to\infty$.
- From the left, $x\to4^-$: $\dfrac1{x-4}\to-\infty$, so $e^{\frac1{x-4}}\to0$ and $f\to2$ (finite).

One side is infinite, which is enough for a vertical asymptote (it exists from the right only).

**Horizontal.** As $x\to\pm\infty$, $\dfrac1{x-4}\to0$, so $f\to e^0+2=3$.

> [!success] Answer (the key via Exercise 12 Q2(c) and 2019 Moed A Q4b2)
> **Vertical asymptote $x=4$** (from the right), **horizontal asymptote $y=3$** (both at $\infty$ and at $-\infty$). See [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]] (Q2c). The same function is worked in the 2019 Moed A key (Q4b, second function).

---

## Q3 — A piecewise root function (30 points)

**Question.** Given

$$
f(x)=\begin{cases}x^2+2x&x<0\\ \sqrt x&x\ge0\end{cases}
$$

a. Investigate the function by the following criteria:
 1. Domain. 2. Interval of continuity. 3. Axes intercept points (if any). 4. Asymptotes (if any) using the appropriate limits. 5. Show using the definition of the derivative that the function is not differentiable at $x=0$. 6. Find relative extreme points (if any) and increase and decrease intervals. 7. Find inflection points (if any) and concavity intervals. 8. Draw the graph.

b. Does the function have a vertical tangent line? If so, find its equation, and if not, explain why.
c. Does the function have a corner point? Explain.
d. Find the value of $a$ ($a>0$) which satisfies $\displaystyle\int_{-1}^{a}f(x)\,dx=0$.

This is 2022 Moed A, question 1, word for word. The answers are that key's, expanded into steps.

### a1. Domain

The top piece $x^2+2x$ is defined for all $x<0$ and $\sqrt x$ for all $x\ge0$.

> [!success] Answer (the key via 2022 Moed A Q1)
> All $x$.

### a2. Interval of continuity

Check the seam $x=0$: $f(0)=\sqrt0=0$; the limit from the right is $\sqrt0=0$; the limit from the left is $0^2+2\cdot0=0$. The three agree.

> [!success] Answer (the key via 2022 Moed A Q1)
> Continuous for **all $x$**.

### a3. Axes intercepts

- Top piece, $x<0$: $x^2+2x=x(x+2)=0$ gives $x=0$ (rejected, because this piece needs $x<0$) or $x=-2$. The point $(-2,0)$.
- Bottom piece, $x\ge0$: $\sqrt x=0$ gives $x=0$, the point $(0,0)$, which is also the $y$-intercept ($f(0)=0$).

> [!success] Answer (the key via 2022 Moed A Q1)
> $x$-intercepts $(-2,\,0)$ and $(0,\,0)$; $y$-intercept $(0,\,0)$.

### a4. Asymptotes

$$
\lim_{x\to\infty}\sqrt x=\infty,\qquad \lim_{x\to-\infty}x(x+2)=(-\infty)(-\infty)=\infty
$$

> [!success] Answer (the key via 2022 Moed A Q1)
> **No horizontal asymptote** (both limits are infinite). **No vertical asymptote**, since $f$ is continuous for all $x$.

### a5. Not differentiable at $x=0$

$$
f'(0)=\lim_{h\to0}\frac{f(h)-f(0)}{h}=\lim_{h\to0}\frac{f(h)}{h}
$$

- Right ($h\to0^+$): $\displaystyle\lim_{h\to0^+}\frac{\sqrt h}{h}=\lim_{h\to0^+}\frac1{\sqrt h}=\frac1{0^+}=\infty$.
- Left ($h\to0^-$): $\displaystyle\lim_{h\to0^-}\frac{h^2+2h}{h}=\lim_{h\to0^-}(h+2)=2$.

> [!success] Answer (the key via 2022 Moed A Q1)
> The one-sided limits are $\infty$ and $2$, so the limit **does not exist**: $f$ is not differentiable at $x=0$.

### a6. Extreme points and increase / decrease

$$
f'(x)=\begin{cases}2x+2&x<0\\[4pt] \dfrac1{2\sqrt x}&x>0\end{cases}
$$

$f'=0$ at $x=-1$; $f'$ is undefined at $x=0$. Sign table:

| Interval | $f'$ | $f$ |
|---|---|---|
| $x<-1$ | $-$ | decreasing |
| $-1<x<0$ | $+$ | increasing |
| $x>0$ | $+$ | increasing |

> [!success] Answer (the key via 2022 Moed A Q1)
> **Minimum at $(-1,\,-1)$** ($f(-1)=1-2=-1$). Increasing for $x>-1$; decreasing for $x<-1$. No extremum at $x=0$ (the sign does not change).

### a7. Inflection points and concavity

$$
f''(x)=\begin{cases}2&x<0\\[4pt] -\dfrac1{4\sqrt{x^3}}&x>0\end{cases}
$$

$f''$ is never $0$ and is undefined at $x=0$. For $x<0$, $f''=2>0$ (concave up); for $x>0$, $f''<0$ (concave down).

> [!success] Answer (the key via 2022 Moed A Q1)
> Concave up ($\cup$) for $x<0$, concave down ($\cap$) for $x>0$. The concavity changes at $x=0$ where $f$ is continuous, so **$(0,\,0)$ is an inflection point**.

### a8. The graph

![[PP34_q3_piecewise_graph.png]]

> [!success] Answer (the key via 2022 Moed A Q1)
> A parabola branch through $(-2,0)$ with its minimum at $(-1,-1)$, joined at the origin to the square-root branch that rises steeply and then flattens.

### b. Vertical tangent line?

> [!success] Answer (the key via 2022 Moed A Q1)
> **No.** The only place where the derivative is undefined is $x=0$, but the slope does not tend to $\pm\infty$ from **both** sides: it is $\infty$ from the right and $2$ from the left.

> [!tip] Intuition
> A vertical tangent needs the curve to be steep on both sides. At $0$ the right branch is steep (like $\sqrt x$) but the left branch is an ordinary slope-$2$ curve.

### c. Corner point?

> [!success] Answer (the key via 2022 Moed A Q1)
> **Yes.** At $x=0$ the function is continuous and the slopes from the two sides approach two different results ($2$ and $\infty$).

> [!warning] A convention note (mine, not a change to the key)
> The formula sheet defines a corner point as one where the function is continuous and the secant slopes from each side "converge to different limits". The key counts the right-hand slope $\infty$ as a limit, so the answer is yes. Some textbooks reserve "corner" for two **finite** different slopes, and would call this a one-sided vertical tangent instead. In this course, follow the formula-sheet definition and the key: yes.

### d. The value of $a$ with $\displaystyle\int_{-1}^{a}f(x)\,dx=0$

Split at $x=0$, where the formula changes ($a>0$):

$$
\int_{-1}^{a}f(x)\,dx=\int_{-1}^{0}(x^2+2x)\,dx+\int_{0}^{a}\sqrt x\,dx
$$

$$
=\left[\frac{x^3}{3}+x^2\right]_{-1}^{0}+\left[\frac{x^{3/2}}{3/2}\right]_0^{a}=0-\left(-\frac13+1\right)+\frac23\sqrt{a^3}=-\frac23+\frac23\sqrt{a^3}
$$

Set equal to $0$:

$$
\frac23\sqrt{a^3}=\frac23\;\Longrightarrow\;\sqrt{a^3}=1\;\Longrightarrow\;a^3=1
$$

> [!success] Answer (the key via 2022 Moed A Q1)
> $a=1$.

> [!tip] Intuition
> From $-1$ to $0$ the curve lies below the axis and gives a signed area of $-\tfrac23$. The square-root branch above the axis must give $+\tfrac23$ to cancel it, which happens at $a=1$ (the area under $\sqrt x$ on $[0,1]$ is $\tfrac23$).

---

## Q4 — Linear demand, revenue, cost and profit (25 points)

**Question.** A factory has found that when the price per unit of its product is set at $\$45$ the daily demand for this product is $200$ units, whereas when the price is set at $\$40$ the daily demand is $300$ units.

a. Assuming the price-demand equation is linear, find its equation, that is, find $x(p)$, where $x$ is the daily demand and $p$ the price per unit.
b. Find the daily revenue function $R(x)$, find $R'(30)$ and explain the meaning of the result.
c. Assuming the cost of producing each unit is $\$25$, find the daily cost function $C(x)$, find $C'(30)$ and explain the meaning of the result.
d. Find the daily profit function $P(x)$ and find the maximal daily profit for this factory.

This is 2019 Moed A, question 3, word for word. The same numbers appear in [[PP_32-Linear Demand and Profit, Limits, Tangent Slopes & Composite Tangent Lines (2024 Moed B)]] (Q1), where the working is written out in full. Summary of the key's answers:

### a. The demand line

Slope $\dfrac{300-200}{40-45}=-20$. Through $(p,x)=(40,300)$: $x-300=-20(p-40)$, so $x=-20p+1100$.

> [!success] Answer (the key via 2019 Moed A Q3)
> $x(p)=-20p+1100$.

### b. Revenue

From the demand line, $p=\dfrac{1100-x}{20}$, so

$$
R(x)=x\cdot p=x\cdot\frac{1100-x}{20}=-\frac1{20}x^2+55x,\qquad R'(x)=-\frac1{10}x+55,\qquad R'(30)=52
$$

> [!success] Answer (the key via 2019 Moed A Q3)
> $R'(30)=52$. At a production level of $30$ units, producing and selling the $31$st unit raises revenue by about **$\$52$**.

### c. Cost

$C(x)=25x$, so $C'(x)=25$ and $C'(30)=25$.

> [!success] Answer (the key via 2019 Moed A Q3)
> $C'(30)=25$. Each unit costs **$\$25$** to produce, including the $31$st unit.

### d. Profit

$$
P(x)=R(x)-C(x)=-\frac1{20}x^2+30x,\qquad P'(x)=-\frac1{10}x+30=0\;\Longrightarrow\;x=300
$$

The parabola opens downward, so $x=300$ is a maximum:

$$
P(300)=-4500+9000=4500
$$

> [!success] Answer (the key via 2019 Moed A Q3)
> The maximal daily profit is **$\$4{,}500$**, at $300$ units a day.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result | Source |
> |---|---|---|
> | Q1a | continuous for all $x$ | key via 2019 Moed A Q2 |
> | Q1b | min $x=0$, max $x=1$ (height $4$), min $x=3$ | key via 2019 Moed A Q2 |
> | Q1c | min $x=-2$, max $x=-1$, min $x=1$ | key via 2019 Moed A Q2 |
> | Q1d | min $x=-3$, max $x=-1$, min $x=0$ | key via 2019 Moed A Q2 |
> | Q1e | $-9$ | key via 2019 Moed A Q2 |
> | Q2a | $-\infty$ | key via Exercise 5 Q1(4) |
> | Q2b | $4$ | key via Exercise 6 Q3(b) |
> | Q2c | vertical $x=4$ (right only), horizontal $y=3$ | key via Exercise 12 Q2(c) |
> | Q3a | all $x$; continuous; intercepts $(-2,0)$, $(0,0)$; no asymptotes; not differentiable at $0$; min $(-1,-1)$; inflection $(0,0)$ | key via 2022 Moed A Q1 |
> | Q3b-c | no vertical tangent; yes, a corner (by the course's definition) | key via 2022 Moed A Q1 |
> | Q3d | $a=1$ | key via 2022 Moed A Q1 |
> | Q4 | $x=-20p+1100$; $R'(30)=52$; $C'(30)=25$; max profit $\$4{,}500$ | key via 2019 Moed A Q3 |
