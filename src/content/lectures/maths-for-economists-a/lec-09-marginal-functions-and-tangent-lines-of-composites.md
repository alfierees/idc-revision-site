---
title: "Lec 09: Marginal Functions and Tangent Lines of Composites"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 9
tags:
  - maths-for-economists-a
  - marginal-function
  - marginal-cost
  - rate-of-change
  - chain-rule
  - tangent-line
  - inequalities
  - continuity
subject: maths-for-economists-a
in_scope: true
---

# Marginal Functions and Tangent Lines of Composites

> Part of: [[Maths for Economists A]]
> Key concepts: [[Marginal Function]], [[Marginal Cost]], [[Chain Rule]], [[Tangent Line]], [[Sign of a Continuous Function]], [[Derivative]]
> Builds on: [[Lec_07-The Derivative, Differentiability and Rules]] (derivative rules) and [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (chain rule); tangent slopes first appeared in [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]]

> [!note] How to read this note
> Lesson 09 is a two-page worksheet. Page 1 prints the problems, the marginal-function rule and the chain rule formula, with blank space where the lecturer worked in class. Page 2 is blank graph paper. Only the printed items are source. Every explanation and answer here is my reconstruction, inside a **Reconstructed from the slides** callout. Check it against your class notes.

## 1. The derivative as a rate of change ("marginal function")

**Printed rule:** if $f$ is differentiable at $x$, then $f'(x)$ is an **estimate** of the change in $y$ when $x$ rises by one unit, from $x$ to $x+1$. We say $f'(x)$ is the "marginal function of $f(x)$", or "the rate of change of $f(x)$ with respect to $x$".

> [!note] Reconstructed from the slides
> Why it works: the true change is $f(x+1)-f(x)=\dfrac{f(x+h)-f(x)}{h}$ with $h=1$. The derivative is the same fraction in the limit $h\to 0$. If $f$ is smooth, the slope of the tangent at $x$ is close to the slope of the secant over one unit, so $f'(x)\approx f(x+1)-f(x)$. The approximation is good when $f$ is nearly straight over that one unit, and worse when it bends sharply.

### Worked example: marginal cost

**Printed:** a manufacturer's total daily cost of producing $x$ units is $C(x)=300+100x-x^2$, domain $0\le x\le 50$.

**(a)** Production rises from 30 to 31 units. What is the change in cost?

**(b)** Find $C'(30)$ and compare to (a).

> [!note] Reconstructed from the slides
> **(a)** Exact change:
>
> $$
> C(31)-C(30)=\big(300+3100-961\big)-\big(300+3000-900\big)=2439-2400=39.
> $$
>
> **(b)** $C'(x)=100-2x$, so
>
> $$
> C'(30)=100-60=40.
> $$
>
> The estimate (40) is close to the exact change (39). It overshoots by 1 because $C$ is concave (its slope is falling), so the tangent line lies above the curve and over-estimates the next unit.

**See it move.** Compare the true cost of one more unit with the marginal cost estimate.

```graph
type: calc-marginal-cost
```

### Worked example: advertising

**Printed:** investing $x$ thousand dollars in advertising a new product gives $N(x)=60x-x^2$ units sold, with $5\le x\le 30$. Find $N'(10)$ and explain its meaning.

> [!note] Reconstructed from the slides
> $N'(x)=60-2x$, so $N'(10)=60-20=40$.
>
> **Meaning:** at an advertising level of \$10,000, spending another \$1,000 will raise sales by approximately 40 units. (The worksheet's handwritten caption states this too.) Units: $x$ is in thousands of dollars, so one unit of $x$ is \$1,000, and $N'$ is measured in units of product per thousand dollars.

> [!tip] Units are part of the answer
> "The marginal function" always carries the units of $y$ per unit of $x$. In an exam, state the meaning in words and name the "+1 unit" step explicitly.

## 2. Marginal cost: increasing or decreasing?

**Printed:** the cost of producing $x$ units is

$$C(x)=10x-\frac{20}{\sqrt{x^2+1}}.$$

(a) Find the marginal cost function $C'(x)$. (b) Is the cost $C(x)$ increasing or decreasing with $x$? (c) Is the marginal cost $C'(x)$ increasing or decreasing with $x$?

> [!note] Reconstructed from the slides
> Write $C(x)=10x-20(x^2+1)^{-1/2}$ and use the chain rule on the second term.
>
> **(a)**
>
> $$
> C'(x)=10-20\cdot\left(-\tfrac12\right)(x^2+1)^{-3/2}\cdot 2x=10+\frac{20x}{(x^2+1)^{3/2}}.
> $$
>
> **(b)** $C$ is increasing where $C'(x)>0$. For $x\ge 0$ (the sensible range for output) both terms are non-negative and the 10 is positive, so $C'(x)>0$ and cost always rises with output. The domain is not printed; I assumed $x\ge 0$.
>
> **(c)** $C'$ is increasing where its derivative $C''$ is positive. Differentiate with the product and chain rules:
>
> $$
> C''(x)=20\left[(x^2+1)^{-3/2}-3x^2(x^2+1)^{-5/2}\right]=\frac{20\,(1-2x^2)}{(x^2+1)^{5/2}}.
> $$
>
> The denominator is always positive, so the sign is the sign of $1-2x^2$:
>
> | Range of $x$ (with $x\ge0$) | Sign of $C''$ | Marginal cost $C'$ |
> | --- | --- | --- |
> | $0\le x<\frac{1}{\sqrt2}$ | positive | increasing |
> | $x>\frac{1}{\sqrt2}$ | negative | decreasing |
>
> So marginal cost rises at first, peaks at $x=1/\sqrt2\approx0.71$, then falls towards 10 as $x$ grows (the fraction term shrinks to 0).

> [!warning] Increasing cost vs increasing marginal cost
> $C'>0$ says the cost curve slopes upward. $C''>0$ says it slopes upward ever more steeply. These are different questions and need different derivatives.

## 3. The chain rule and tangent lines

**Printed:** the chain rule

$$[g(f(x))]'=g'(f(x))\cdot f'(x).$$

See [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] for the derivation idea.

**Printed problem:** the function $g(x)$ intersects the $y$-axis at $y=0.5$ and the slope of the tangent line to its graph at that point is 2.

**(a)** Write this data using mathematical notation.

**(b)** Given the new function $y=g(3x)$, find the slope of the tangent line to its graph at $x=0$.

**(c)** Given $y_2=[g(3x)]^4$, find the slope of the tangent line to the new graph at $x=0$.

> [!note] Reconstructed from the slides
> **(a)** The $y$-axis is $x=0$, so $g(0)=0.5$. The tangent slope there is the derivative, so $g'(0)=2$.
>
> **(b)** Outer function $g$, inner function $3x$ (derivative 3):
>
> $$
> y'=g'(3x)\cdot 3,\qquad y'(0)=g'(0)\cdot 3=2\cdot 3=6.
> $$
>
> The point on this graph is $(0,\,g(0))=(0,0.5)$, so the tangent line is $y=6x+0.5$.
>
> **(c)** Three layers: power 4, then $g$, then $3x$:
>
> $$
> y_2'=4\,[g(3x)]^3\cdot g'(3x)\cdot 3=12\,[g(3x)]^3\,g'(3x).
> $$
>
> At $x=0$: $g(0)=0.5$ and $g'(0)=2$, so
>
> $$
> y_2'(0)=12\cdot(0.5)^3\cdot 2=12\cdot 0.125\cdot 2=3.
> $$
>
> The point is $(0,\,0.5^4)=(0,\,0.0625)$, so the tangent line is $y=3x+\tfrac1{16}$.

> [!tip] Evaluate inner functions first
> At $x=0$, $3x=0$ too, which is why only $g(0)$ and $g'(0)$ are needed. Always check which point the inner function sends your $x$ to.

## 4. Solving inequalities using continuity

**Printed rule:** if $f$ is continuous on an interval and does not intersect the $x$-axis there (no zero), then it has a **constant sign** throughout that interval. So to solve an inequality: move everything to one side, find the zeros and the points where the function is undefined, then test one point in each interval between them.

**Printed examples:**

$$\frac{10x-1}{x^2-6x+5}\le -1 \qquad\text{and}\qquad 0.2^{x}<0.04.$$

> [!note] Reconstructed from the slides
> **Example 1.** Bring $-1$ across and combine:
>
> $$
> \frac{10x-1}{x^2-6x+5}+1\le 0\;\Longrightarrow\;\frac{x^2+4x+4}{x^2-6x+5}\le 0\;\Longrightarrow\;\frac{(x+2)^2}{(x-1)(x-5)}\le 0.
> $$
>
> The function is undefined at $x=1$ and $x=5$ (exclude them) and equals zero at $x=-2$. Test each interval:
>
> | Interval | $(x+2)^2$ | $(x-1)(x-5)$ | Quotient |
> | --- | --- | --- | --- |
> | $x<1$, $x\ne-2$ | positive | positive | positive |
> | $1<x<5$ | positive | negative | negative |
> | $x>5$ | positive | positive | positive |
>
> The quotient is $\le0$ on $(1,5)$, and also at the single zero $x=-2$ (check: $\frac{-21}{21}=-1$, which satisfies $\le -1$).
>
> $$
> \boxed{x\in\{-2\}\cup(1,5)}
> $$
>
> **Example 2.** Let $f(x)=0.2^x-0.04$, continuous everywhere. Since $0.04=0.2^2$, its only zero is $x=2$. Test $x=0$: $1-0.04>0$. Test $x=3$: $0.008-0.04<0$. So $f<0$ exactly to the right of 2:
>
> $$
> \boxed{x>2}
> $$
>
> Equivalently, a base between 0 and 1 gives a decreasing function, so $0.2^x<0.2^2$ means $x>2$.

> [!warning] Do not multiply across by an expression of unknown sign
> In Example 1, multiplying both sides by $x^2-6x+5$ would flip the inequality on part of the line and not on the rest. Moving everything to one side and using a sign table avoids this. Also watch the isolated solution $x=-2$, which a sign table alone can miss.

## Summary

- $f'(x)$ approximates the change in $f$ for a one-unit rise in $x$: the **marginal function**. For $C(x)=300+100x-x^2$, exact change 39 vs $C'(30)=40$.
- Marginal cost sign tells whether cost rises; the second derivative tells whether marginal cost rises.
- Tangent slope of a composite uses the chain rule: $g(3x)$ gives $3g'(0)=6$; $[g(3x)]^4$ gives $12\,g(0)^3g'(0)=3$.
- Continuity plus no zeros means constant sign: solve inequalities with a sign table.

## Related notes

- [[Maths for Economists A]]
- [[Lec_07-The Derivative, Differentiability and Rules]]
- [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]]
- [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]]
