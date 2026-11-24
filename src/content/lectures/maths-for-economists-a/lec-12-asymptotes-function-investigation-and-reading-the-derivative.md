---
title: "Lec 12: Asymptotes, Function Investigation and Reading the Derivative"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 12
tags:
  - maths-for-economists-a
  - asymptotes
  - vertical-asymptote
  - horizontal-asymptote
  - oblique-asymptote
  - function-investigation
  - continuity
  - differentiability
  - extreme-points
  - inflection-points
  - concavity
  - tangent-line
subject: maths-for-economists-a
in_scope: true
---

# Asymptotes, Function Investigation and Reading the Derivative

> Part of: [[Maths for Economists A]]
> Key concepts: [[Vertical Asymptote]], [[Horizontal Asymptote]], [[Oblique Asymptote]], [[Removable Discontinuity]], [[Function Investigation]], [[Relative Extremum]], [[Inflection Point]], [[Concavity]], [[Continuity]], [[Differentiability]], [[Tangent Line]], [[Chain Rule]], [[Product Rule]]
> Builds on: [[Lec_04-Limits and Continuity]] (continuity), [[Lec_05-Infinite Limits]] (limits at infinity, asymptotes), [[Lec_07-The Derivative, Differentiability and Rules]] (differentiability), [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (chain rule)

> [!note] How to read this note
> Lesson 12 is a two-page worksheet. Page 1 prints five exercises with blank space under each for the lecturer's working; page 2 is blank graph paper. **Only the exercise statements are source** (including the graph of $f'$ in exercise 5). Every method, step and answer below is my reconstruction, inside a **Reconstructed from the slides** callout. Check it against your class notes.

## Toolkit: what you need before the exercises

> [!note] Reconstructed from the slides
> | Feature | How to find it |
> | --- | --- |
> | [[Vertical Asymptote]] $x=c$ | A point where the function is undefined and $\lim_{x\to c^\pm} f(x)=\pm\infty$ (check each side separately) |
> | [[Horizontal Asymptote]] $y=L$ | $\lim_{x\to\infty} f(x)=L$ or $\lim_{x\to-\infty} f(x)=L$ (check both ends) |
> | [[Oblique Asymptote]] $y=mx+b$ | If the function grows like a line: divide polynomials, the quotient is the line and the remainder fraction tends to $0$ |
> | [[Removable Discontinuity]] (hole) | A factor cancels top and bottom: not an asymptote, just a missing point |
> | Increase / decrease, [[Relative Extremum]] | Sign of $f'$; extremum where $f'$ changes sign |
> | [[Concavity]], [[Inflection Point]] | Sign of $f''$; inflection where $f''$ changes sign |
>
> A function can have a horizontal asymptote on one side and an oblique one on the other, but never a horizontal and an oblique asymptote on the same side.

## 1. Asymptotes of a rational function

**Printed:** "Find asymptotes for" $f(x)=\dfrac{x^3-3x^2+2x}{(x-1)(x+2)}$.

> [!note] Reconstructed from the slides
> **Step 1: factor the numerator.** $x^3-3x^2+2x=x(x^2-3x+2)=x(x-1)(x-2)$. So
>
> $$
> f(x)=\frac{x(x-1)(x-2)}{(x-1)(x+2)}.
> $$
>
> **Step 2: cancel common factors.** The factor $(x-1)$ cancels, so $f(x)=\dfrac{x(x-2)}{x+2}$ for $x\neq1$.
>
> - At $x=1$ the function is undefined, but the limit is finite: $\frac{1\cdot(-1)}{3}=-\frac13$. This is a **hole** at $(1,-\tfrac13)$, **not** a vertical asymptote.
>
> **Step 3: vertical asymptote.** The factor $(x+2)$ stays in the denominator and the numerator $x(x-2)=8\neq0$ at $x=-2$. So $x=-2$ is a vertical asymptote. (One-sided: $x\to-2^+$ gives $\frac{8}{0^+}=+\infty$, $x\to-2^-$ gives $-\infty$.)
>
> **Step 4: horizontal or oblique?** The numerator has degree 2 and the denominator degree 1, so there is no horizontal asymptote ($f\to\pm\infty$). Divide:
>
> $$
> \frac{x^2-2x}{x+2}=x-4+\frac{8}{x+2}.
> $$
>
> Check: $(x+2)(x-4)=x^2-2x-8$, remainder $8$. As $x\to\pm\infty$, $\frac{8}{x+2}\to0$, so $f$ approaches the line $\boxed{y=x-4}$, an oblique asymptote at both ends.
>
> **Answer:** vertical $x=-2$; oblique $y=x-4$; no horizontal; a hole at $(1,-\tfrac13)$.

![[Lec12_oblique_asymptote.png]]

> [!warning] Common mistake
> Do not call $x=1$ a vertical asymptote just because $(x-1)$ is in the original denominator. Cancel first, then look at what is left.

## 2. Asymptotes of a piecewise function

**Printed:** "Find asymptotes for" $f(x)=\begin{cases} e^{1/x} & x\neq0\\ 3 & x=0\end{cases}$

> [!note] Reconstructed from the slides
> The value $f(0)=3$ does not matter for asymptotes: asymptotes depend only on limits. Look at the three places the function can misbehave.
>
> **At $x=0$ (vertical candidate).**
>
> - $x\to0^+$: $\frac1x\to+\infty$, so $e^{1/x}\to+\infty$.
> - $x\to0^-$: $\frac1x\to-\infty$, so $e^{1/x}\to0$.
>
> The right-hand limit is infinite, so $x=0$ **is** a vertical asymptote (one-sided: the curve blows up only on the right). On the left the curve heads to $0$ and the point $(0,3)$ sits apart from both branches.
>
> **As $x\to\pm\infty$.** $\frac1x\to0$, so $e^{1/x}\to e^0=1$ from both sides. So $y=1$ is a horizontal asymptote at both ends.
>
> **Answer:** vertical $x=0$ (right side only); horizontal $y=1$ (both ends).

> [!tip] Intuition
> $e^{u}$ explodes as $u\to+\infty$ but flattens to $0$ as $u\to-\infty$. The sign of $\frac1x$ near $0$ decides which happens.

## 3. Full investigation of $f(x)=\left(1+\frac2x\right)^2$

**Printed:** "Given the function $f(x)=\left(1+\frac{2}{x}\right)^2$. a. Investigate by finding: 1. Domain / interval of continuity; 2. Asymptotes; 3. Axes intercepts; 4. Relative extreme points and intervals of increase and decrease; 5. Inflection points and concavity intervals; 6. Graph." Then: b. the point where the function intersects its horizontal asymptote; c. the point on the interval $x<0$ where the rate of change of $f$ is at its most negative value; d. the interval where $f$ is decreasing but the rate of change of $f$ is increasing.

> [!note] Reconstructed from the slides
> Useful rewrite: $f(x)=\dfrac{(x+2)^2}{x^2}$.
>
> **a1. Domain and continuity.** Only $x=0$ is excluded. Domain $x\neq0$; $f$ is continuous on $(-\infty,0)$ and on $(0,\infty)$ (a composition of continuous pieces).
>
> **a2. Asymptotes.**
>
> - $x\to0^\pm$: $\frac2x\to\pm\infty$, and squaring gives $+\infty$ on both sides. Vertical asymptote $x=0$.
> - $x\to\pm\infty$: $\frac2x\to0$, so $f\to1$. Horizontal asymptote $y=1$.
>
> **a3. Intercepts.** No $y$-intercept (the function is undefined at $x=0$). For the $x$-intercept, $1+\frac2x=0\Rightarrow x=-2$: the point $(-2,0)$.
>
> **a4. First derivative** (chain rule, outside $u^2$, inside $1+2x^{-1}$):
>
> $$
> f'(x)=2\left(1+\frac2x\right)\cdot\left(-\frac{2}{x^2}\right)=-\frac{4(x+2)}{x^3}.
> $$
>
> Critical value: $f'=0$ at $x=-2$ ($f'$ is undefined at $x=0$, outside the domain). Sign table:
>
> | Interval | $x+2$ | $x^3$ | $f'$ | $f$ |
> | --- | --- | --- | --- | --- |
> | $x<-2$ | $-$ | $-$ | $-$ | decreasing |
> | $-2<x<0$ | $+$ | $-$ | $+$ | increasing |
> | $x>0$ | $+$ | $+$ | $-$ | decreasing |
>
> So $f$ has a relative **minimum** at $(-2,0)$. Decreasing on $(-\infty,-2)$ and $(0,\infty)$; increasing on $(-2,0)$.
>
> **a5. Second derivative.** Write $f'(x)=-4x^{-2}-8x^{-3}$, so
>
> $$
> f''(x)=8x^{-3}+24x^{-4}=\frac{8x+24}{x^4}=\frac{8(x+3)}{x^4}.
> $$
>
> $x^4>0$ for $x\neq0$, so the sign of $f''$ is the sign of $x+3$. $f''=0$ at $x=-3$ and changes sign there:
>
> - $x<-3$: $f''<0$, concave down.
> - $-3<x<0$ and $x>0$: $f''>0$, concave up.
>
> Inflection point at $x=-3$, with $f(-3)=\left(1-\frac23\right)^2=\frac19$: the point $(-3,\tfrac19)$.
>
> **a6. Graph.** Below. Left of the asymptote $x=0$ the curve comes down from near $y=1$, touches $0$ at $x=-2$, then shoots up to $+\infty$. Right of it, the curve comes down from $+\infty$ towards $y=1$.

![[Lec12_investigation_graph.png]]

> [!note] Reconstructed from the slides
> **b. Intersection with the horizontal asymptote $y=1$.**
>
> $$
> \left(1+\frac2x\right)^2=1\;\Rightarrow\;1+\frac2x=\pm1.
> $$
>
> - $+1$: $\frac2x=0$, no solution.
> - $-1$: $\frac2x=-2\Rightarrow x=-1$.
>
> The curve crosses its horizontal asymptote at $(-1,1)$. (A graph may cross a horizontal asymptote; it just must approach it at the far ends.)
>
> **c. Where is the rate of change of $f$ most negative on $x<0$?** The rate of change is $f'$, so minimise $f'$ on $x<0$. A minimum of $f'$ is where $f''$ changes from $-$ to $+$: that is $x=-3$.
>
> - For $x<-3$, $f''<0$, so $f'$ is falling; for $-3<x<0$, $f''>0$, so $f'$ is rising. So $x=-3$ is a minimum of $f'$.
> - Value: $f'(-3)=-\dfrac{4(-1)}{-27}=-\dfrac{4}{27}$.
> - As $x\to-\infty$, $f'\to0^-$; as $x\to0^-$, $f'\to+\infty$. Neither end is lower, so $-\frac4{27}$ is the global minimum of $f'$ on $x<0$.
>
> The point on the graph is $(-3,\tfrac19)$, which is the inflection point: the **steepest descent** of $f$ happens at its inflection point.
>
> **d. $f$ decreasing and $f'$ increasing.** Need $f'<0$ and $f''>0$.
>
> - $f'<0$ on $(-\infty,-2)\cup(0,\infty)$.
> - $f''>0$ on $x>-3$, $x\neq0$.
>
> Intersection: $\boxed{(-3,-2)\cup(0,\infty)}$. Meaning: on these intervals $f$ falls, but ever more slowly (the slope is negative and rising towards $0$).

> [!tip] Reading "rate of change of the rate"
> "Rate of change of $f$" means $f'$. "Rate of change of $f'$" means $f''$. Parts c and d just translate these phrases.

## 4. Continuity with a parameter, and differentiability

**Printed:** "Given the function $f(x)=\begin{cases}\sqrt[3]{x+1} & x\geq-1\\ \dfrac1x+a & x<-1\end{cases}$. Find the value of the constant $a$ for which the function is continuous for all $x$. Is $f(x)$ differentiable at $x=-1$? Is there a tangent line at this point?"

> [!note] Reconstructed from the slides
> **Continuity.** Away from $x=-1$ each piece is continuous ($\sqrt[3]{x+1}$ everywhere, $\frac1x+a$ for $x<-1$, where $x\neq0$). Only the join at $x=-1$ needs checking: left limit = right limit = value.
>
> - Value and right limit: $f(-1)=\sqrt[3]{0}=0$, and $\lim_{x\to-1^+}\sqrt[3]{x+1}=0$.
> - Left limit: $\lim_{x\to-1^-}\left(\frac1x+a\right)=-1+a$.
>
> Set equal: $-1+a=0\Rightarrow\boxed{a=1}$.
>
> **Differentiability at $x=-1$ (with $a=1$).** Compare the one-sided derivatives.
>
> - Left ($x<-1$): $f'(x)=-\dfrac1{x^2}$, so $f'(-1^-)=-1$.
> - Right ($x>-1$): $f'(x)=\dfrac13(x+1)^{-2/3}=\dfrac{1}{3\sqrt[3]{(x+1)^2}}\to+\infty$ as $x\to-1^+$.
>
> The one-sided slopes differ (one finite, one infinite), so $f$ is **not differentiable** at $x=-1$.
>
> **Tangent line?** Continuity does not give a tangent. The right-hand branch has a vertical tangent, but the left-hand branch has slope $-1$, not vertical. For a tangent line to exist the curve must settle on one direction from both sides, and here it does not. So there is **no tangent line** at $x=-1$.

> [!warning] Continuous does not mean differentiable
> With $a=1$ the graph is joined up at $(-1,0)$ but has a sharp change of direction there. Also remember that the cube root alone has a vertical tangent at $-1$ (infinite slope), which is also a failure of differentiability even though a vertical tangent line exists; here the left piece spoils even that.

**See it move.** Slide a to close the gap, then see why the join still is not differentiable.

```graph
type: calc-continuity-join
```

## 5. Reading $f'$ from a graph

**Printed:** "$f(x)$ is a function which satisfies $f(3)=0$ and $f(0)=-1$. Its derivative $f'(x)$ is sketched in the following graph" (a downward parabola, labelled $9$ at the peak on the $y$-axis and crossing the $x$-axis at $-3$ and $3$). Then: a. the $x$ values of the relative extreme points and the increase/decrease intervals; b. the $x$ value of the inflection points and the concavity intervals; c. given $g(x)=f(2x)\cdot f(x)$, find $g'(1.5)$; d. the tangent line to $f$ at $x=0$; e. the tangent line to $f'$ at $x=0$.

![[Lec12_derivative_sketch.png]]

> [!note] Reconstructed from the slides
> **Reading the graph.** The sketch of $f'$ has its peak at $(0,9)$ and crosses the axis at $\pm3$. It is a sketch, so no formula for $f'$ is assumed. Only readings from the graph are used below: $f'(\pm3)=0$, $f'(0)=9$, the sign of $f'$, and where $f'$ rises or falls.
>
> **a. Extreme points and monotonicity.** Extremes of $f$ occur where $f'=0$ and changes sign: $x=-3$ and $x=3$.
>
> | Interval | Sign of $f'$ (graph) | $f$ |
> | --- | --- | --- |
> | $x<-3$ | below the axis, $-$ | decreasing |
> | $-3<x<3$ | above the axis, $+$ | increasing |
> | $x>3$ | below the axis, $-$ | decreasing |
>
> So $f$ has a relative **minimum at $x=-3$** and a relative **maximum at $x=3$**.
>
> **b. Inflection and concavity.** $f''$ is the slope of the $f'$ graph. $f'$ rises for $x<0$ and falls for $x>0$, so $f''>0$ for $x<0$ and $f''<0$ for $x>0$. The sign changes at $x=0$, where $f'$ peaks: inflection point at $x=0$. $f$ is concave up on $(-\infty,0)$ and concave down on $(0,\infty)$.
>
> **c. $g'(1.5)$.** Product rule plus chain rule on $f(2x)$:
>
> $$
> g'(x)=2f'(2x)\,f(x)+f(2x)\,f'(x).
> $$
>
> At $x=1.5$, $2x=3$:
>
> $$
> g'(1.5)=2f'(3)\,f(1.5)+f(3)\,f'(1.5)=2\cdot0\cdot f(1.5)+0\cdot f'(1.5)=\boxed{0}.
> $$
>
> Both terms vanish because $f'(3)=0$ and $f(3)=0$, so we do not need $f(1.5)$ or $f'(1.5)$.
>
> **d. Tangent to $f$ at $x=0$.** Point: $f(0)=-1$. Slope: $f'(0)=9$. So
>
> $$
> y=9x-1.
> $$
>
> **e. Tangent to $f'$ at $x=0$.** The curve is $y=f'(x)$. Point: $(0,f'(0))=(0,9)$. Slope: $f''(0)=0$ (the peak). So the tangent is the horizontal line
>
> $$
> y=9.
> $$

> [!warning] Don't read the sketch as exactly $f'(x)=9-x^2$
> If $f'$ were exactly $9-x^2$, then $f(3)-f(0)=\int_0^3(9-x^2)\,dx=18$, but the printed values give $f(3)-f(0)=0-(-1)=1$. So the curve can only be a rough sketch, or the printed values were not chosen to match it. Parts a to e are unaffected, because they use only $f(3)$, $f(0)$ and what the graph shows about $f'$.

**See it move.** Practise reading f from f′: rising above the axis, falling below it, flat at a crossing.

```graph
type: calc-derivative-graph
fn: cubic
```

## Summary

- **Asymptotes:** factor and cancel first (a cancelled factor gives a hole). Vertical: denominator zero with an infinite limit. Horizontal: limit at $\pm\infty$. Oblique: polynomial division when the degree of the top is one more than the bottom. Check each side separately.
- **Piecewise functions:** the value at the split point is irrelevant to asymptotes; only limits count.
- **Full investigation:** domain, asymptotes, intercepts, $f'$ sign table (extremes, monotonicity), $f''$ sign table (inflection, concavity), then sketch.
- **Special points:** the steepest slope of $f$ occurs at an inflection point ($f'$ extremal, $f''=0$).
- **Parameters for continuity:** equate left limit, right limit and value at the join. Continuity does not guarantee differentiability: compare one-sided derivatives.
- **Reading $f'$ graphs:** zeros of $f'$ are candidate extremes of $f$; the sign of $f'$ gives increase and decrease; where the $f'$ graph peaks or dips, $f$ has an inflection.

## Related notes

[[Maths for Economists A]] | [[Lec_04-Limits and Continuity]] | [[Lec_05-Infinite Limits]] | [[Lec_07-The Derivative, Differentiability and Rules]] | [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]]
