---
title: "Lec 06: Exponential Limits, Tangent Slopes and Logarithms"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 6
tags:
  - maths-for-economists-a
  - exponential-limits
  - euler-limits
  - tangent-line
  - logarithms
  - log-rules
subject: maths-for-economists-a
in_scope: true
---

# Exponential Limits, Tangent Slopes and Logarithms

> Part of: [[Maths for Economists A]]
> Key concepts: [[Exponential Function]], [[Euler's Number]], [[Euler Limit]], [[Indeterminate Form]], [[Tangent Line]], [[Slope of a Tangent]], [[Logarithm]], [[Natural Logarithm]], [[Logarithm Rules]], [[Change of Base]]

> [!note] How to read this note
> Lesson 06 is a two-page worksheet. Page 1 holds the printed examples (section 5 "Exponential Limits", then "Applications of Limits" and "Logarithmic functions"); page 2 is blank graph paper. The lecturer worked the answers in class on the blank space. Everything inside a **Reconstructed from the slides** callout is my working, not the lecturer's words. Check it against your class notes. It builds on [[Lec_03-Composition, Transformations, Exponentials and Limits]] (exponential graphs, limits at infinity) and [[Lec_04-Limits and Continuity]] (limits as one-sided approach).

## 1. Exponential limits at infinity

**Printed graph:** $y=a^x$ for two cases, $a>1$ (rises to the right, flattens to $0$ on the left) and $0<a<1$ (the mirror image: it falls towards $0$ on the right and blows up on the left).

| Base | $x\to+\infty$ | $x\to-\infty$ |
| --- | --- | --- |
| $a>1$ | $a^x\to\infty$ | $a^x\to 0$ |
| $0<a<1$ | $a^x\to 0$ | $a^x\to\infty$ |

The graph is the same family drawn in [[Lec_03-Composition, Transformations, Exponentials and Limits]].

> [!tip] Strategy
> When two exponentials compete, **factor out the fastest-growing one**. What remains inside the bracket is a constant plus terms like $(\text{base}<1)^x\to0$.

**Printed:** $\displaystyle\lim_{x\to\infty}\left(2\cdot 3^x-4^x\right)$

> [!note] Reconstructed from the slides
> Both terms go to infinity, so this is $\infty-\infty$, which is not an answer by itself. Factor out the larger base $4^x$:
>
> $$
> 2\cdot 3^x-4^x=4^x\left(2\left(\tfrac{3}{4}\right)^x-1\right)
> $$
>
> As $x\to\infty$: $(3/4)^x\to0$ (base between 0 and 1), so the bracket $\to 2\cdot0-1=-1$, while $4^x\to\infty$. Product: $\infty\cdot(-1)$.
>
> $$
> \lim_{x\to\infty}\left(2\cdot 3^x-4^x\right)=-\infty
> $$
>
> Sense check: $4^x$ outgrows $3^x$, and it has the minus sign.

**Printed (twice, once with $x\to\infty$ and once with $x\to-\infty$):** $\displaystyle\lim \frac{e^x}{e^x+e^{-x}}$

> [!note] Reconstructed from the slides
> Multiply top and bottom by $e^x$ (allowed, it is a non-zero factor that cancels):
>
> $$
> \frac{e^x}{e^x+e^{-x}}=\frac{e^{2x}}{e^{2x}+1}
> $$
>
> - $x\to\infty$: $e^{2x}\to\infty$, so divide top and bottom by $e^{2x}$ to get $\frac{1}{1+e^{-2x}}\to\frac{1}{1+0}=1$.
> - $x\to-\infty$: $e^{2x}\to0$, so $\frac{0}{0+1}=0$.
>
> $$
> \lim_{x\to\infty}\frac{e^x}{e^x+e^{-x}}=1,\qquad \lim_{x\to-\infty}\frac{e^x}{e^x+e^{-x}}=0
> $$
>
> (I read the second printed copy as $x\to-\infty$; check the subscript on your sheet.)

## 2. Euler limits: the "$1^\infty$" form

The base tends to $1$ while the power tends to $\infty$. This is an [[Indeterminate Form]]: $1^\infty$ is **not** automatically $1$, because the base is only *almost* 1 and the huge power amplifies the gap.

**Printed:** $\displaystyle\lim_{x\to\infty}\left(1+\frac1x\right)^x$, which is the definition of [[Euler's Number]] $e$, and the general form

$$\lim_{f(x)\to0}\bigl(1+f(x)\bigr)^{\frac{1}{f(x)}}=e$$

> [!info] Euler limit recipe
> 1. Check the base is $1+(\text{something}\to0)$ and the power is infinite: the $1^\infty$ form.
> 2. Call the "something" $f(x)$.
> 3. Rewrite the power as $\dfrac{1}{f(x)}\times(\text{leftover})$.
> 4. Then $\bigl(1+f\bigr)^{1/f}\to e$, and the answer is $e^{\lim(\text{leftover})}$.

**Printed examples** (all to be solved in class):

> [!note] Reconstructed from the slides
> **(a)** $\displaystyle\lim_{x\to\infty}\left(1+\frac2x\right)^x$. Here $f=\frac2x$. Write $x=\frac{1}{f}\cdot 2$:
>
> $$
> \left(1+\tfrac2x\right)^x=\left[\left(1+\tfrac2x\right)^{x/2}\right]^2\to e^2
> $$
>
> **(b)** $\displaystyle\lim_{x\to0}(1-3x)^{\frac1x}$. Here $f=-3x\to0$ and the power is $\frac1x=\frac{1}{f}\cdot(-3)$:
>
> $$
> (1-3x)^{1/x}=\left[(1-3x)^{\frac{1}{-3x}}\right]^{-3}\to e^{-3}
> $$
>
> **(c)** $\displaystyle\lim_{x\to\infty}\left(1+\frac{4}{x-1}\right)^x$. Here $f=\frac{4}{x-1}$, so $\frac1f=\frac{x-1}{4}$. Write the power as $x=\frac{x-1}{4}\cdot\frac{4x}{x-1}$:
>
> $$
> \left[\left(1+\tfrac{4}{x-1}\right)^{\frac{x-1}{4}}\right]^{\frac{4x}{x-1}}\to e^{\lim \frac{4x}{x-1}}=e^4
> $$
>
> **(d)** $\displaystyle\lim_{x\to\infty}\left(\frac{x+3}{x-1}\right)^x$. Split the fraction: $\frac{x+3}{x-1}=1+\frac{4}{x-1}$. This is exactly (c), so the answer is $e^4$.
>
> **(e)** $\displaystyle\lim_{x\to\infty}\left(\frac{2x+3}{x-1}\right)^x$. Check the base first: $\frac{2x+3}{x-1}\to2$, **not** 1. So this is not a $1^\infty$ form at all, it is $2^\infty$:
>
> $$
> \lim_{x\to\infty}\left(\frac{2x+3}{x-1}\right)^x=\infty
> $$
>
> **(f)** $\displaystyle\lim_{x\to0}\frac{e^x-1}{2x}$. This is $\frac00$. Pull out the constant: $\frac12\cdot\frac{e^x-1}{x}$. The standard limit $\lim_{x\to0}\frac{e^x-1}{x}=1$ (the slope of $e^x$ at $0$) gives
>
> $$
> \lim_{x\to0}\frac{e^x-1}{2x}=\frac12
> $$
>
> I am quoting $\frac{e^x-1}{x}\to1$ as a known result: the worksheet does not prove it. Check your class notes for how the lecturer justified it.

> [!warning] Common mistake
> Always test the base before reaching for $e$. In (e) the base tends to 2, so the Euler limit does not apply. Compare (d) and (e): the numerators differ only by the coefficient of $x$, but the answers are $e^4$ and $\infty$.

**See it move.** Watch the 1^∞ form settle on e.

```graph
type: calc-euler-limit
```

## 3. Application: slope of the tangent line

**Printed:** Given $f(x)=x^2+1$.

a. Find the slope of the tangent line to the graph at the point where $x=1$.
b. Find the slope of the tangent line at a general point $x$.
c. Find the equation of the tangent line at the point where $x=-3$.

> [!info] Tangent slope as a limit
> The slope of the secant line through $(x,f(x))$ and $(x+h,f(x+h))$ is $\frac{f(x+h)-f(x)}{h}$. Letting $h\to0$ makes the secant become the [[Tangent Line]]:
>
> $$
> m(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
> $$
>
> This limit is the [[Slope of a Tangent]], which is the idea behind the derivative.

> [!note] Reconstructed from the slides
> **(a)** At $x=1$: $f(1)=2$ and $f(1+h)=(1+h)^2+1=2+2h+h^2$.
>
> $$
> m(1)=\lim_{h\to0}\frac{2+2h+h^2-2}{h}=\lim_{h\to0}(2+h)=2
> $$
>
> **(b)** General $x$: $f(x+h)-f(x)=(x+h)^2-x^2=2xh+h^2$.
>
> $$
> m(x)=\lim_{h\to0}\frac{2xh+h^2}{h}=\lim_{h\to0}(2x+h)=2x
> $$
>
> Check: $m(1)=2$, matching (a).
>
> **(c)** At $x=-3$: the point is $(-3,\,f(-3))=(-3,10)$ and the slope is $m(-3)=2(-3)=-6$. Point-slope form:
>
> $$
> y-10=-6(x+3)\;\Rightarrow\; y=-6x-8
> $$

![[Lec06_tangent_at_minus3.png]]

*The tangent at $(-3,10)$ touches the parabola and slopes downward, matching $m=-6<0$ on the left of the vertex.*

**See it move.** Shrink h and watch the secant become the tangent to x² + 1 at x = -3.

```graph
type: calc-tangent-slope
fn: parabola
at: -3
```

## 4. Logarithmic functions

**Printed warm-up:** solve $e^{2x}=10$.

> [!note] Reconstructed from the slides
> Take the [[Natural Logarithm]] of both sides (the inverse of $e^{\,\cdot}$ is $\ln$):
>
> $$
> \ln\!\left(e^{2x}\right)=\ln 10\;\Rightarrow\;2x=\ln 10\;\Rightarrow\;x=\frac{\ln 10}{2}\approx1.151
> $$

**Printed rules** (the sheet numbers them from 2; the first rule on the page is not legible or not printed, so I have not guessed it):

| # | Rule | Formula |
| --- | --- | --- |
| 2 | Product | $\log_a(b\cdot c)=\log_a b+\log_a c$ |
| 3 | Quotient | $\log_a\!\left(\dfrac bc\right)=\log_a b-\log_a c$ |
| 4 | Power | $\log_a b^{\,n}=n\cdot\log_a b$ |
| 5 | [[Change of Base]] | $\log_a c=\dfrac{\log_b c}{\log_b a}$ |

> [!tip] Why these work
> A logarithm is an exponent: $\log_a b$ is the power you raise $a$ to in order to get $b$. Multiplying numbers adds their exponents (rule 2), dividing subtracts them (rule 3), and raising to a power multiplies the exponent (rule 4). Change of base lets you compute any log on a calculator that only has $\ln$ or $\log_{10}$: $\log_a c=\frac{\ln c}{\ln a}$.

> [!warning] Common mistakes
> - $\log(b+c)$ does **not** equal $\log b+\log c$. Only products split.
> - $\log_a b^n=n\log_a b$ applies to the argument's power, not to $(\log_a b)^n$.
> - Logs are only defined for positive arguments, so check the answer's domain.

**See it move.** Compare logarithm bases and shifts.

```graph
type: calc-function-family
family: logarithm
```

## Summary

- Competing exponentials: factor out the biggest base; smaller-base terms vanish as $x\to\infty$.
- $1^\infty$ forms: rewrite as $(1+f)^{1/f}\cdot$leftover to get $e^{\text{leftover limit}}$. Always confirm the base really tends to 1.
- Tangent slope $=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$; for $x^2+1$ it is $2x$, and the tangent line comes from point-slope form.
- Logs turn products into sums, quotients into differences and powers into multipliers; $\ln$ undoes $e^{\,\cdot}$.

## Related notes

- [[Maths for Economists A]]
- [[Lec_03-Composition, Transformations, Exponentials and Limits]]
- [[Lec_04-Limits and Continuity]]
- [[Lec_01-Functions, Domain and Sigma Notation]]
