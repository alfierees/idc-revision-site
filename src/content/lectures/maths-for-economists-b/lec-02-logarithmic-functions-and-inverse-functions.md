---
title: "Lec 02: Logarithmic Functions and Inverse Functions"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 2
tags:
  - maths-for-economists-b
  - logarithms
  - inverse-functions
  - limits
  - lhopitals-rule
subject: maths-for-economists-b
in_scope: true
---

# Lec 02: Logarithmic Functions and Inverse Functions

> Part of: [[Maths for Economists B]]
> Key concepts: [[Logarithm]], [[Logarithm Rules]], [[Change of Base]], [[Inverse Function]], [[L'Hopital's Rule]], [[Global Extremum]]

> [!note] How to read this note
> The lesson slides are a skeleton with unsolved examples. All examples are worked below and the working is marked as reconstructed. Where the slide leaves a rule or graph blank, the standard content is filled in and flagged.

## 1. Optimization warm-up: the apple orchard

> [!example] Slide problem
> A farmer plants 20 apple trees on one acre and each tree yields 60 kg a year. Each additional tree (between 20 and 35 trees) reduces the yield of **every** tree by 2 kg. (a) How many trees maximise the orchard's total produce? (b) What is the maximal produce?

> [!note] Reconstructed from the slides
> With $n$ trees, yield per tree is $60-2(n-20)=100-2n$ kg. Total produce:
>
> $$T(n)=n(100-2n)=100n-2n^2,\qquad 20\le n\le35.$$
>
> $T'(n)=100-4n=0\Rightarrow n=25$, which is inside $[20,35]$. $T''=-4<0$, so it is a maximum (and the only one, hence global).
>
> $$T(25)=25\cdot50=\boxed{1250\ \text{kg}}.$$
>
> Endpoint check: $T(20)=1200$ and $T(35)=35\cdot30=1050$, both below 1250.
>
> ![[Lec02_orchard_produce.png]]
>
> **(a)** 25 trees. **(b)** 1250 kg.

> [!tip] Why not plant more?
> Each extra tree adds one more producing tree but lowers the yield of all the others. Up to 25 trees the first effect wins; beyond that the second does. This "extra revenue versus lost yield" trade-off is the same shape as marginal revenue equals marginal cost.

## 2. Logarithmic functions

**Definition.** For $a>0$, $a\neq1$ and $b>0$:

$$a^n=b\iff\log_a b=n.$$

The logarithm answers "which power of $a$ gives $b$?". Special bases: $\log=\log_{10}$ (assumed on the slides; check against the equation below) and $\ln=\log_e$.

### Domain

> [!info] Domain of a logarithmic function
> $\log_a(\text{argument})$ needs **argument $>0$** (and base $a>0$, $a\ne1$). Always find the domain first: solutions of log equations that violate it must be rejected.

### Rules of logarithms

| # | Rule | Formula |
|---|------|---------|
| 1 | Inverse | $a^{\log_a b}=b$ |
| 2 | Product | $\log_a(b\cdot c)=\log_a b+\log_a c$ |
| 3 | Quotient | $\log_a\!\left(\dfrac{b}{c}\right)=\log_a b-\log_a c$ |
| 4 | Power | $\log_a b^n=n\cdot\log_a b$ |
| 5 | Change of base | $\log_a c=\dfrac{\log_b c}{\log_b a}$ |

> [!warning] Common mistakes
> $\log(b+c)\neq\log b+\log c$, and $\dfrac{\log b}{\log c}\neq\log b-\log c$. Rules 2 and 3 apply to the log of a product or quotient only.

### Worked examples (slide equations)

> [!note] Reconstructed from the slides
> **(i) $e^{2x}=10$.** Take $\ln$ of both sides: $2x=\ln 10$, so $x=\dfrac{\ln10}{2}\approx1.151$.
>
> **(ii) $3\cdot5^x=21$.** Divide by 3: $5^x=7$, so $x=\dfrac{\ln7}{\ln5}=\log_5 7\approx1.209$ (change of base).
>
> **(iii) $\log x+\log(x-15)=2$.** Domain: $x>15$. Product rule: $\log\big(x(x-15)\big)=2$, so (base 10) $x(x-15)=100$, giving $x^2-15x-100=0$, so $x=\dfrac{15\pm25}{2}=20$ or $-5$. Reject $-5$ (outside the domain). **$x=20$.** Check: $\log20+\log5=\log100=2$.
>
> **(iv) $\log(x+1)=-\log x$.** Domain: $x>0$. Move to one side: $\log(x+1)+\log x=0$, so $x(x+1)=1$, i.e. $x^2+x-1=0$, so $x=\dfrac{-1\pm\sqrt5}{2}$. Reject the negative root. **$x=\dfrac{\sqrt5-1}{2}\approx0.618$.**
>
> **(v) $\log_{\sqrt3}x-\log_3(x-6)=3$.** Domain: $x>6$. Since $\sqrt3=3^{1/2}$, $\log_{\sqrt3}x=2\log_3x$ (change of base). So $2\log_3x-\log_3(x-6)=3$, i.e. $\log_3\dfrac{x^2}{x-6}=3$, so $x^2=27(x-6)$, so $x^2-27x+162=0$, so $x=\dfrac{27\pm9}{2}=18$ or $9$. Both exceed 6, so **both are valid**. Check $x=9$: $2\log_39-\log_33=4-1=3$.

## 3. The graph of the basic logarithmic function and inverse functions

> [!note] Slide left blank
> The slide's "graph of the basic logarithmic function" space is empty in the source. The picture below is the standard one, matching the slide's second diagram.

> [!info] Inverse function
> An inverse function is one where the roles of $x$ and $y$ are reversed. Its graph is the **reflection of the original across the line $y=x$**.

$y=\log_a x$ is the inverse of $y=a^x$.

![[Lec02_log_exp_inverse.png]]

| | $a>1$ | $0<a<1$ |
|---|---|---|
| Behaviour of $\log_a x$ | increasing | decreasing |
| Passes through | $(1,0)$ | $(1,0)$ |
| Vertical asymptote | $x=0$ ($\to-\infty$ as $x\to0^+$) | $x=0$ ($\to+\infty$ as $x\to0^+$) |
| Domain / range | $x>0$ / all reals | $x>0$ / all reals |

The point $(1,0)$ is common to all logarithms because $a^0=1$. The slide colours $a>1$ magenta and $0<a<1$ orange.

## 4. Exponential and logarithmic limits

### L'Hopital's rule

> [!info] L'Hopital's rule
> If $\lim_{x\to a}\dfrac{f(x)}{g(x)}$ has the form $\dfrac{0}{0}$ or $\dfrac{\pm\infty}{\pm\infty}$, then
>
> $$\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)},$$
>
> provided the right-hand limit exists. It may be applied repeatedly.

Differentiate numerator and denominator **separately** (not the quotient rule).

### Slide examples

> [!note] Reconstructed from the slides
> **(1) $\displaystyle\lim_{x\to\infty}\frac{e^x}{\ln x}$.** Form $\infty/\infty$. L'Hopital: $\dfrac{e^x}{1/x}=xe^x\to\boxed{\infty}$. The exponential beats the logarithm.
>
> **(2) $\displaystyle\lim_{x\to0}\frac{x^2+5x}{2x^2+3x}$.** Form $0/0$. Factor $x$: $\dfrac{x+5}{2x+3}\to\boxed{\tfrac53}$. (L'Hopital agrees: $\frac{2x+5}{4x+3}\to\frac53$.)
>
> **(3) $\displaystyle\lim_{x\to0}\frac{e^{5x}-5x-1}{x^2}$.** Form $0/0$. First pass: $\dfrac{5e^{5x}-5}{2x}$, still $0/0$. Second pass: $\dfrac{25e^{5x}}{2}\to\boxed{\tfrac{25}{2}}$.
>
> **(4) $\displaystyle\lim_{x\to\infty}\frac{(\ln x)^3}{x}$.** Form $\infty/\infty$. Pass 1: $\dfrac{3(\ln x)^2}{x}$. Pass 2: $\dfrac{6\ln x}{x}$. Pass 3: $\dfrac{6}{x}\to\boxed{0}$. Any power of $x$ beats any power of $\ln x$.

> [!tip] Growth hierarchy
> As $x\to\infty$: $\ln x\ll x^p\ll e^x$. L'Hopital is the mechanical proof of this ordering.

## Summary

- Orchard: total produce $T(n)=n(100-2n)$, maximised at 25 trees giving 1250 kg.
- $\log_a b=n\iff a^n=b$; the argument must be positive. Five rules: inverse, product, quotient, power, change of base.
- Solve log equations by combining into a single log, converting to a power, then **checking the domain**.
- $\log_a x$ and $a^x$ are inverses (reflect across $y=x$); both pass through $(1,0)$ for the log, increasing if $a>1$, decreasing if $0<a<1$.
- L'Hopital's rule handles $0/0$ and $\infty/\infty$ limits; exponentials outgrow powers, powers outgrow logs.

## Related notes

- [[Maths for Economists B]]
- Previous: [[Lec_01-Global Extrema, Optimization and Summation]]
- Next: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]]
