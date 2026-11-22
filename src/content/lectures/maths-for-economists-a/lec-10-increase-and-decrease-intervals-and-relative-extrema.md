---
title: "Lec 10: Increase and Decrease Intervals and Relative Extrema"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 10
tags:
  - maths-for-economists-a
  - increasing-decreasing-intervals
  - critical-point
  - relative-extremum
  - first-derivative-test
  - cusp
  - vertical-tangent
  - piecewise-functions
subject: maths-for-economists-a
in_scope: true
---

# Increase and Decrease Intervals and Relative Extrema

> Part of: [[Maths for Economists A]]
> Key concepts: [[Increasing and Decreasing Intervals]], [[Critical Point]], [[Relative Extremum]], [[Sign Table]], [[Tangent Line]], [[Cusp]], [[Vertical Tangent]]
> Builds on: [[Lec_07-The Derivative, Differentiability and Rules]] (derivative, differentiability, cusp, vertical tangent), [[Lec_04-Limits and Continuity]] (continuity) and [[Lec_02-Piecewise Functions and Business Applications]] ([[Piecewise Function]]s)

> [!note] How to read this note
> Lesson 10 is a two-page worksheet. Page 1 prints the "practical tool", the definition of a critical point, seven exercises and one picture with highlighted points, all with blank space for the lecturer's working. Page 2 is blank graph paper. Only the printed items are source. Every explanation, derivation and answer below is my reconstruction, inside a **Reconstructed from the slides** callout. Check it against your class notes.

## 1. The practical tool

**Printed:**

- $f(x)$ is **increasing** on intervals where $f'(x)$ is positive.
- $f(x)$ is **decreasing** on intervals where $f'(x)$ is negative.

> [!note] Reconstructed from the slides
> The method that follows from the tool, used in every exercise:
> 1. Find the **domain** and compute $f'(x)$, simplifying to a single fraction or a factored product.
> 2. Find the points where $f'(x)=0$ or $f'(x)$ is undefined, but $f$ itself is defined and continuous. These split the real line into intervals.
> 3. Pick a test value in each interval and record the **sign** of $f'$ (a [[Sign Table]]).
> 4. Positive means increasing, negative means decreasing. At a split point, a change **from increasing to decreasing** is a relative maximum, a change **from decreasing to increasing** is a relative minimum, and **no change** is no extremum.
>
> Points where $f$ is not defined (for example $x=0$ in $\frac{1}{x}$) split the line too, but they are never critical points or extrema.

**See it move.** See how the sign of f′ identifies each maximum and minimum.

```graph
type: calc-extrema
fn: quartic
```

## 2. Critical points

**Printed:** "At critical points (suspected as extreme points): (a) $f(x)$ is continuous, (b) $f'(x)$ is equal to 0 or undefined."

> [!note] Reconstructed from the slides
> A [[Critical Point]] is an $x$ in the domain where **both** hold: $f$ is continuous there, and $f'(x)=0$ or $f'(x)$ does not exist. It is only a **suspect**: a critical point is an extremum only if $f'$ changes sign there. The relation is one way:
>
> - every relative extremum is a critical point (assuming it is in the domain and $f$ is continuous);
> - not every critical point is an extremum.
>
> Ways $f'$ can be undefined while $f$ is continuous: a [[Cusp]] (slopes $+\infty$ and $-\infty$ either side), a **corner** (two different finite one-sided slopes), or a [[Vertical Tangent]] (slopes $+\infty$ on both sides or $-\infty$ on both).

## 3. Increase and decrease intervals

### Exercise 1: $f(x)=\sqrt[3]{(x-1)^2}$

> [!note] Reconstructed from the slides
> Rewrite with fractional exponents: $f(x)=(x-1)^{2/3}$, defined for all real $x$.
>
> $$
> f'(x)=\tfrac{2}{3}(x-1)^{-1/3}=\frac{2}{3\sqrt[3]{x-1}}
> $$
>
> $f'$ is never 0 and is undefined at $x=1$, where $f$ is continuous, so $x=1$ is the only critical point.
>
> | Interval | Sign of $\sqrt[3]{x-1}$ | Sign of $f'$ | Behaviour |
> |---|---|---|---|
> | $x<1$ | negative | negative | decreasing |
> | $x>1$ | positive | positive | increasing |
>
> **Answer:** decreasing on $(-\infty,1)$, increasing on $(1,\infty)$. Decreasing then increasing means a relative (here also absolute) **minimum** at $(1,0)$. The slopes tend to $-\infty$ on the left and $+\infty$ on the right, so it is a [[Cusp]].

### Exercise 2: $f(x)=\sqrt[3]{x-1}$

> [!note] Reconstructed from the slides
> $f(x)=(x-1)^{1/3}$, defined for all real $x$ (a cube root accepts negative inputs).
>
> $$
> f'(x)=\tfrac{1}{3}(x-1)^{-2/3}=\frac{1}{3\sqrt[3]{(x-1)^2}}
> $$
>
> The denominator is positive for every $x\neq1$, so $f'>0$ on both sides. At $x=1$, $f'$ is undefined and $f$ is continuous, so $x=1$ is a critical point.
>
> **Answer:** increasing on $(-\infty,\infty)$ (increasing through $x=1$ too, since $f$ is continuous there). Because the sign of $f'$ does not change, $x=1$ is a critical point but **not** an extremum. The slope tends to $+\infty$ from both sides: a vertical tangent.

![[Lec10_cusp_vs_vertical_tangent.png]]

The same critical point $x=1$ gives an extremum in Exercise 1 (sign changes) and none in Exercise 2 (sign stays positive).

## 4. Relative extreme points

### Exercise 3: $f(x)=\dfrac{2}{3x^6}-\dfrac{1}{4x^4}$

> [!note] Reconstructed from the slides
> Rewrite as powers: $f(x)=\tfrac{2}{3}x^{-6}-\tfrac{1}{4}x^{-4}$. The domain is $x\neq0$.
>
> $$
> f'(x)=-4x^{-7}+x^{-5}=\frac{x^2-4}{x^7}
> $$
>
> $f'=0$ at $x=\pm2$. $f'$ is undefined at $x=0$, but $0$ is **not in the domain**, so it is not a critical point. The line is split at $-2,\,0,\,2$:
>
> | Interval | $x^2-4$ | $x^7$ | Sign of $f'$ | Behaviour |
> |---|---|---|---|---|
> | $x<-2$ | $+$ | $-$ | $-$ | decreasing |
> | $-2<x<0$ | $-$ | $-$ | $+$ | increasing |
> | $0<x<2$ | $-$ | $+$ | $-$ | decreasing |
> | $x>2$ | $+$ | $+$ | $+$ | increasing |
>
> **Answer:** relative **minima** at $x=-2$ and $x=2$. Since $f$ is even, both values are the same:
>
> $$
> f(\pm2)=\frac{2}{3\cdot64}-\frac{1}{4\cdot16}=\frac{1}{96}-\frac{1}{64}=-\frac{1}{192}
> $$
>
> There is no maximum: as $x\to0$ the $x^{-6}$ term dominates and $f\to+\infty$.

### Exercise 4: $f(x)=3\sqrt[3]{x^5}-15\sqrt[3]{x^2}=3x^{5/3}-15x^{2/3}$

**Printed:** (a) find all critical points and all relative extreme points; (b) find the equations of the tangent lines at the extreme points.

> [!note] Reconstructed from the slides
> **(a)** Domain: all real $x$ (cube roots), $f$ continuous.
>
> $$
> f'(x)=5x^{2/3}-10x^{-1/3}=5x^{-1/3}(x-2)=\frac{5(x-2)}{\sqrt[3]{x}}
> $$
>
> $f'=0$ at $x=2$; $f'$ is undefined at $x=0$ where $f$ is continuous. **Critical points: $x=0$ and $x=2$.**
>
> | Interval | $x-2$ | $\sqrt[3]{x}$ | Sign of $f'$ | Behaviour |
> |---|---|---|---|---|
> | $x<0$ | $-$ | $-$ | $+$ | increasing |
> | $0<x<2$ | $-$ | $+$ | $-$ | decreasing |
> | $x>2$ | $+$ | $+$ | $+$ | increasing |
>
> - $x=0$: increasing then decreasing, so a relative **maximum**, $f(0)=0$.
> - $x=2$: decreasing then increasing, so a relative **minimum**, $f(2)=3\cdot2^{5/3}-15\cdot2^{2/3}=2^{2/3}(6-15)=-9\cdot2^{2/3}\approx-14.29$.
>
> **(b)** At $x=2$, $f'(2)=0$, so the tangent is horizontal: $y=-9\cdot2^{2/3}\approx-14.29$.
>
> At $x=0$, $f'$ is undefined. For $x\to0^-$, $f'(x)=\frac{5(x-2)}{\sqrt[3]{x}}\to+\infty$; for $x\to0^+$, $f'(x)\to-\infty$. The slopes blow up with **opposite signs**, so this is a cusp and there is no ordinary tangent line. If the course counts the vertical line through a cusp as its "tangent", it would be $x=0$.

> [!warning] Check the cusp convention
> Whether the lecturer calls $x=0$ a vertical tangent or says "no tangent exists" is not on the worksheet. Compare with [[Lec_07-The Derivative, Differentiability and Rules]], where the [[Cusp]] and [[Vertical Tangent]] were distinguished, and use that rule.

### Exercise 5: $f(x)=\begin{cases}x^3-3x^2 & x\ge0\\ x^2 & x<0\end{cases}$

> [!note] Reconstructed from the slides
> **Continuity at 0:** the left limit is $0^2=0$, the right limit and value are $0^3-3\cdot0^2=0$. Continuous.
>
> $$
> f'(x)=\begin{cases}3x^2-6x=3x(x-2) & x>0\\ 2x & x<0\end{cases}
> $$
>
> At $x=0$ both one-sided derivatives equal $0$, so $f'(0)=0$ and $f$ is differentiable there. **Critical points: $x=0$ and $x=2$.**
>
> | Interval | Sign of $f'$ | Behaviour |
> |---|---|---|
> | $x<0$ | $2x<0$ | decreasing |
> | $0<x<2$ | $3x(x-2)<0$ | decreasing |
> | $x>2$ | $+$ | increasing |
>
> - $x=0$: decreasing on both sides, so a critical point but **not** an extremum (a flat spot on the way down).
> - $x=2$: decreasing then increasing, a relative **minimum**, $f(2)=8-12=-4$.

### Exercise 6: $f(x)=\begin{cases}x^2-3 & x\le2\\ -3x+7 & x>2\end{cases}$

> [!note] Reconstructed from the slides
> **Continuity at 2:** the left value is $2^2-3=1$, the right limit is $-3\cdot2+7=1$. Continuous.
>
> $$
> f'(x)=\begin{cases}2x & x<2\\ -3 & x>2\end{cases}
> $$
>
> At $x=2$ the one-sided slopes are $4$ (left) and $-3$ (right): different, so $f'(2)$ does not exist (a corner). $f'=0$ at $x=0$. **Critical points: $x=0$ and $x=2$.**
>
> | Interval | Sign of $f'$ | Behaviour |
> |---|---|---|
> | $x<0$ | $2x<0$ | decreasing |
> | $0<x<2$ | $2x>0$ | increasing |
> | $x>2$ | $-3<0$ | decreasing |
>
> - $x=0$: relative **minimum**, $f(0)=-3$.
> - $x=2$: increasing then decreasing, relative **maximum**, $f(2)=1$, even though $f'$ does not exist there.

![[Lec10_piecewise_extrema.png]]

## 5. Reading critical and extreme points from a graph

**Printed:** a sketched curve with seven highlighted points, and the task: "For each highlighted point determine whether (a) it's a critical point, (b) it's an extreme point."

![[Lec10_slide_highlighted_points.png]]

> [!note] Reconstructed from the slides
> Points are listed left to right and named by colour. Each verdict follows the two tests: is $f$ defined and continuous there, and is the slope 0 or undefined?
>
> | Point | What the picture shows | (a) Critical? | (b) Extreme? |
> |---|---|---|---|
> | Magenta | bottom of a sharp V (cusp), slope undefined | yes | yes, relative minimum |
> | Orange | smooth peak, horizontal tangent | yes ($f'=0$) | yes, relative maximum |
> | Green | steep point with a vertical tangent drawn, curve keeps falling | yes ($f'$ undefined) | no, still decreasing on both sides |
> | Cyan | horizontal tangent drawn, curve keeps falling | yes ($f'=0$) | no, a pause on the way down |
> | Lavender | top of the dashed vertical line (asymptote) | no, $f$ is not defined there | no |
> | Blue (circled, filled dot) | end of a branch, with a jump (open circle at a lower height) | no, $f$ is not continuous there | no: values just left are higher, values just right are lower |
> | Purple (circled, open dot) | the peak of the last hump, drawn as a hole | no, the point is excluded from the graph | no, the peak value is not attained |

> [!warning] Reading of the picture
> The lavender dot sits on the dashed asymptote, so I read it as not in the domain. If the lecturer intended the dot as a point of the graph, the answer would change. Colours are as printed; I did not have the lecturer's spoken explanation.

## 6. Summary

| Situation at $x=c$ | Critical? | Extremum? |
|---|---|---|
| $f'(c)=0$, sign changes | yes | yes |
| $f'(c)=0$, no sign change | yes | no |
| $f'(c)$ undefined, $f$ continuous, sign changes (cusp, corner) | yes | yes |
| $f'(c)$ undefined, $f$ continuous, no sign change (vertical tangent) | yes | no |
| $f$ not defined or not continuous at $c$ | no | no |
