---
title: "Lec 11: Concavity, Inflection Points and Asymptotes"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 11
tags:
  - maths-for-economists-a
  - concavity
  - inflection-point
  - second-derivative-test
  - relative-extremum
  - marginal-revenue
  - asymptotes
  - rational-functions
subject: maths-for-economists-a
in_scope: true
---

# Concavity, Inflection Points and Asymptotes

> Part of: [[Maths for Economists A]]
> Key concepts: [[Concavity]], [[Concavity Intervals]], [[Inflection Point]], [[Second Derivative Test]], [[Relative Extremum]], [[Revenue Function]], [[Marginal Revenue]], [[Vertical Asymptote]], [[Horizontal Asymptote]]
> Builds on: [[Lec_07-The Derivative, Differentiability and Rules]] (derivative rules) and [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]]. Limits at infinity come from [[Lec_05-Infinite Limits]]; piecewise functions from [[Lec_02-Piecewise Functions and Business Applications]].

> [!note] How to read this note
> Lesson 11 is a two-page worksheet titled "Concavity intervals". Page 1 prints a few exercises, seven small curve sketches, a graph with asymptotes and two half-finished statements, with large blank gaps for the lecturer's working. Page 2 is blank graph paper. **Printed (source):** the exercise statements, the sketches, the two-line inflection definition, the headings "The second derivative Test..." and the asymptote graph. **Everything else** (definitions, solutions, sign tables) is my reconstruction inside callouts. Check it against your class notes.

## 1. Concavity intervals

**Printed exercise:** find the concavity intervals of

$$f(x)=\frac{-2}{15x^5}+\frac{1}{12x^3}=\frac{-2}{15}x^{-5}+\frac{1}{12}x^{-3}.$$

> [!note] Reconstructed from the slides
> **Idea.** [[Concavity]] describes how the slope changes. If $f''(x)>0$ on an interval the slope is increasing and the graph is **concave up** (bends like a cup). If $f''(x)<0$ the slope is decreasing and the graph is **concave down** (bends like a cap). The [[Concavity Intervals]] are found by locating where $f''$ is zero or undefined and checking the sign of $f''$ between those points.
>
> | Sign of $f''$ | Slope $f'$ | Shape |
> | --- | --- | --- |
> | $f''>0$ | increasing | concave up |
> | $f''<0$ | decreasing | concave down |
>
> **Domain.** $x\neq 0$ (the function has $x$ in the denominator).
>
> **Derivatives** (power rule on the printed power form):
>
> $$
> f'(x)=\frac{2}{3}x^{-6}-\frac14 x^{-4}
> $$
>
> $$
> f''(x)=-4x^{-7}+x^{-5}=\frac{x^2-4}{x^7}.
> $$
>
> **Critical values of $f''$:** the numerator is zero at $x=\pm2$; the denominator is zero at $x=0$, which is outside the domain.
>
> **Sign table** (numerator $x^2-4$, denominator $x^7$ has the sign of $x$):
>
> | Interval | $x^2-4$ | $x^7$ | $f''$ | Shape |
> | --- | --- | --- | --- | --- |
> | $x<-2$ | $+$ | $-$ | $-$ | concave down |
> | $-2<x<0$ | $-$ | $-$ | $+$ | concave up |
> | $0<x<2$ | $-$ | $+$ | $-$ | concave down |
> | $x>2$ | $+$ | $+$ | $+$ | concave up |
>
> So $f$ is concave up on $(-2,0)$ and $(2,\infty)$ and concave down on $(-\infty,-2)$ and $(0,2)$.
>
> **Inflection points.** The sign of $f''$ changes at $x=-2$ and $x=2$, and both are in the domain, so these are inflection points: $f(2)=-\tfrac{2}{480}+\tfrac1{96}=\tfrac1{160}$ and $f(-2)=-\tfrac1{160}$ (the function is odd). The sign also changes across $x=0$, but $0$ is not in the domain, so there is **no** inflection point there.

> [!warning] Common mistake
> Do not draw a sign table that treats $x=0$ as a normal point. Excluded values of the domain split the intervals but can never be inflection points.

**See it move.** Roll the tangent along the curve and watch it switch sides at the inflection point.

```graph
type: calc-concavity
fn: cubic
```

## 2. Inflection points

**Printed definition (two conditions):**

1. $f(x)$ is continuous (at the point)
2. $f''(x)$ changes its sign

> [!note] Reconstructed from the slides
> An [[Inflection Point]] is a point where the graph switches between concave up and concave down. Both printed conditions are needed. $f''(c)=0$ is **not** required: $f''$ may also be undefined at $c$ (a vertical tangent, for example), and $f''(c)=0$ alone is not enough, because $f''$ must actually change sign (for $y=x^4$, $f''(0)=0$ but $f''\ge 0$ on both sides, so there is no inflection).

### The seven printed sketches

![[Lec11_slide_inflection_shapes.png]]

> [!note] Reconstructed from the slides
> The worksheet prints seven sketches with a marked point and no labels. My reading of each, left to right (check it against your class notes):
>
> | # | What the sketch shows | Inflection point? |
> | --- | --- | --- |
> | 1 | S-shaped curve, horizontal tangent at the marked point | Yes: concavity switches from down to up (and $f'=0$ there) |
> | 2 | Falling curve with a vertical tangent at the marked point | Yes: concavity switches although $f'$ is undefined |
> | 3 | Rising then falling arc with a sharp corner at the top-left end | No: concave down on both sides of the corner |
> | 4 | Curve with a corner and a vertical dashed line at the marked point | Unclear from the sketch; apply the two conditions to decide |
> | 5 | Cusp (sharp peak) with a vertical dashed line | No: both sides bend the same way, even though $f'$ does not exist |
> | 6 | Falling curve, sloped tangent at the marked point | Yes: concavity switches while the tangent is sloped |
> | 7 | Parabola with horizontal tangent at its minimum | No: concave up throughout, so this is an extremum instead |
>
> The lesson of the row: a flat tangent, a corner or a vertical tangent are **not** the test. Only "continuous and $f''$ changes sign" is.

## 3. Relative extreme points and inflection of a piecewise function

**Printed exercise:**

$$f(x)=\begin{cases}x^2 & x<0\\ \sqrt{x} & x\ge 0\end{cases}$$

Find the relative extreme points, and find the inflection points.

> [!note] Reconstructed from the slides
> **Continuity at 0.** $\lim_{x\to0^-}x^2=0=\sqrt0=f(0)$, so $f$ is continuous at $0$.
>
> **First derivative.**
>
> $$
> f'(x)=\begin{cases}2x & x<0\\ \dfrac{1}{2\sqrt{x}} & x>0\end{cases}
> $$
>
> At $x=0$ the left derivative is $0$ and the right derivative tends to $+\infty$, so $f'(0)$ does not exist, yet $0$ is still a critical point (the derivative fails to exist there).
>
> **Sign of $f'$:** negative for $x<0$ (decreasing), positive for $x>0$ (increasing). The derivative changes from negative to positive at $0$, so $(0,0)$ is a **relative minimum** (and in fact the absolute minimum, since $f\ge0$). There are no other critical points: $2x=0$ only at $0$, and $\frac1{2\sqrt x}$ is never $0$.
>
> **Second derivative.**
>
> $$
> f''(x)=\begin{cases}2 & x<0\\ -\dfrac{1}{4\,x^{3/2}} & x>0\end{cases}
> $$
>
> $f''>0$ for $x<0$ (concave up) and $f''<0$ for $x>0$ (concave down). Since $f$ is continuous at $0$ and $f''$ changes sign there, the two printed conditions hold: $(0,0)$ is an **inflection point**.

> [!warning] Check with the lecturer
> $(0,0)$ is both the relative minimum and, by the two printed conditions, an inflection point. That looks odd but is consistent: the curve bends the way a cup would on the left and the way a cap would on the right, with a vertical tangent on the right side. If your course requires $f'$ to exist at an inflection point, the answer to "find the inflection points" would be "none"; my answer follows the printed definition.

## 4. The second derivative test

**Printed (incomplete):** "The second derivative Test for critical points at which $f'(x)=0$. If at a given point, $f'(x)=0$, and also at this point:" followed by blank space.

> [!note] Reconstructed from the slides
> The unfinished line is the standard [[Second Derivative Test]]. Suppose $f'(c)=0$. Then:
>
> | At $c$ | Conclusion |
> | --- | --- |
> | $f''(c)>0$ | relative **minimum** (concave up) |
> | $f''(c)<0$ | relative **maximum** (concave down) |
> | $f''(c)=0$ | test fails: use the sign of $f'$ around $c$ (first derivative test) |
>
> It applies only where $f'(c)=0$, so it would not help at the point $x=0$ in Section 3, where $f'$ does not exist.

## 5. Application: maximal revenue

**Printed exercise:** the price-demand equation for a product is $p=1296-0.12x^2$, where $p$ is the retail price per unit and $x$ is the number of units sold. (a) Find the maximal possible revenue.

**Printed statement:** "Since $R''(x)<0$ for every $x$ in the domain, $R'(x)$, the marginal revenue, is decreasing when production level $(x)$ is increased."

> [!note] Reconstructed from the slides
> [[Revenue Function]] = price times quantity:
>
> $$
> R(x)=x\,p=1296x-0.12x^3.
> $$
>
> [[Marginal Revenue]]:
>
> $$
> R'(x)=1296-0.36x^2.
> $$
>
> Set $R'(x)=0$: $x^2=3600$, so $x=60$ (reject $-60$, since $x\ge0$ units).
>
> $$
> R''(x)=-0.72x<0\ \text{for all}\ x>0,
> $$
>
> which is exactly the printed statement: on the whole domain $x>0$ the revenue curve is concave down and marginal revenue falls as output rises. In particular $R''(60)=-43.2<0$, so by the [[Second Derivative Test]] $x=60$ is a maximum.
>
> $$
> R(60)=1296(60)-0.12(60)^3=77\,760-25\,920=51\,840.
> $$
>
> Check: price at 60 units is $p=1296-0.12(3600)=864$, and $864\times60=51\,840$.
>
> **Maximal possible revenue: 51,840** (at 60 units, price 864). The price stays non-negative up to $x=\sqrt{10800}\approx103.9$, so $x=60$ lies inside the domain.

## 6. Asymptotes

**Printed graph:** a curve with two vertical asymptotes at $x=-3$ and $x=2$ and two horizontal asymptotes, $y=1$ on the right and $y=-1$ on the left, with the marked points $(-3,0)$, $(0,0)$, $(2,0)$ and $(0,1)$ labelled.

![[Lec11_slide_asymptote_graph.png]]

> [!note] Reconstructed from the slides
> | Type | Meaning | How to find it |
> | --- | --- | --- |
> | [[Vertical Asymptote]] $x=a$ | the graph shoots to $\pm\infty$ as $x\to a$ | a value where the denominator is $0$ (and the numerator is not), checked with one-sided limits |
> | [[Horizontal Asymptote]] $y=L$ | the graph levels off as $x\to\pm\infty$ | $\lim_{x\to\infty}f(x)=L$ and/or $\lim_{x\to-\infty}f(x)=L$; the two ends can differ, as in the printed graph ($y=1$ on the right, $y=-1$ on the left) |

**Printed exercise:** find the asymptotes of $f(x)=\dfrac{3x-1}{x-2}$.

> [!note] Reconstructed from the slides
> **Vertical.** The denominator is $0$ at $x=2$, where the numerator is $3(2)-1=5\neq0$, so $x=2$ is a vertical asymptote:
>
> $$
> \lim_{x\to2^+}\frac{3x-1}{x-2}=+\infty,\qquad \lim_{x\to2^-}\frac{3x-1}{x-2}=-\infty.
> $$
>
> **Horizontal.** Divide numerator and denominator by $x$:
>
> $$
> \lim_{x\to\pm\infty}\frac{3x-1}{x-2}=\lim_{x\to\pm\infty}\frac{3-1/x}{1-2/x}=3,
> $$
>
> so $y=3$ is a horizontal asymptote at both ends. (Equivalently, $f(x)=3+\dfrac{5}{x-2}$.)
>
> ![[Lec11_asymptote_example.png]]

**See it move.** Move a and b to see how the asymptotes respond.

```graph
type: calc-asymptotes
```

## Summary

- **Concavity:** $f''>0$ is concave up, $f''<0$ is concave down. Build a sign table from the zeros of $f''$ and the excluded domain points.
- **Inflection point:** $f$ continuous and $f''$ changes sign. A flat tangent is neither necessary nor sufficient.
- **Second derivative test:** at $f'(c)=0$, $f''>0$ gives a minimum, $f''<0$ a maximum, $f''=0$ is inconclusive.
- **Revenue example:** $R=1296x-0.12x^3$ peaks at $x=60$ with $R=51\,840$; $R''<0$ means marginal revenue always falls.
- **Asymptotes:** vertical where the denominator vanishes, horizontal from limits at $\pm\infty$; $\frac{3x-1}{x-2}$ has $x=2$ and $y=3$.

## Related notes

[[Maths for Economists A]] · [[Lec_07-The Derivative, Differentiability and Rules]] · [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] · [[Lec_05-Infinite Limits]] · [[Lec_02-Piecewise Functions and Business Applications]]
