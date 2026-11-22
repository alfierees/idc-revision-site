---
title: "Lec 03: Exponential and Logarithmic Limits and Asymptotes"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 3
tags:
  - maths-for-economists-b
  - limits
  - lhopitals-rule
  - asymptotes
  - differentiation
  - indeterminate-forms
subject: maths-for-economists-b
in_scope: true
---

# Lec 03: Exponential and Logarithmic Limits and Asymptotes

> Part of: [[Maths for Economists B]]
> Key concepts: [[L'Hopital's Rule]], [[Indeterminate Form]], [[Horizontal Asymptote]], [[Vertical Asymptote]], [[Derivative of Exponential and Logarithmic Functions]], [[Logarithm]]

> [!note] How to read this note
> This lesson is a skeleton: the big "Differentiation of exponential and logarithmic functions" area is blank in the source. The standard rules are filled in below and flagged. The limits repeat from [[Lec_02-Logarithmic Functions and Inverse Functions]] and are summarised, then new items (asymptotes, $0^0$) are worked.

## 1. Differentiation of exponential and logarithmic functions

> [!note] Slide area blank, standard rules supplied
> Not written on the slide; these are the standard results that the limits and later lessons rely on.

| Function | Derivative |
|---|---|
| $e^x$ | $e^x$ |
| $a^x$ | $a^x\ln a$ |
| $\ln x$ | $\dfrac1x$ |
| $\log_a x$ | $\dfrac{1}{x\ln a}$ |

With the chain rule: $\dfrac{d}{dx}e^{g(x)}=g'(x)e^{g(x)}$ and $\dfrac{d}{dx}\ln g(x)=\dfrac{g'(x)}{g(x)}$.

> [!tip] Logarithmic differentiation
> For $y=f(x)^{g(x)}$ take $\ln y=g(x)\ln f(x)$ and differentiate both sides. See [[Lec_04-Implicit Differentiation and Two-Variable Functions]].

## 2. Exponential and logarithmic limits

### L'Hopital's rule (recap)

> [!info] Rule
> If $\lim_{x\to a}\dfrac{f(x)}{g(x)}$ is $\dfrac00$ or $\dfrac{\pm\infty}{\pm\infty}$:
>
> $$\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}.$$

> [!note] Reconstructed from the slides
> **$\displaystyle\lim_{x\to\infty}\frac{e^x}{\ln x}$:** $\infty/\infty$; L'Hopital gives $xe^x\to\infty$.
>
> **$\displaystyle\lim_{x\to0}\frac{x^2+5x}{2x^2+3x}$:** $0/0$; cancel $x$ (or L'Hopital): $\dfrac{x+5}{2x+3}\to\dfrac53$.

## 3. Asymptotes

**Vertical asymptote at $x=c$:** $f(x)\to\pm\infty$ as $x\to c$ (from one or both sides).
**Horizontal asymptote $y=L$:** $\lim_{x\to\pm\infty}f(x)=L$ is a finite number.

> [!example] Slide: find asymptotes for $f(x)=x^2\ln x$
> **Domain:** $x>0$.
>
> **Vertical, at the boundary $x=0^+$:** $x^2\ln x$ has form $0\cdot(-\infty)$. Rewrite as a quotient:
>
> $$\lim_{x\to0^+}\frac{\ln x}{x^{-2}}\;\overset{\text{L'H}}{=}\;\lim_{x\to0^+}\frac{1/x}{-2x^{-3}}=\lim_{x\to0^+}\left(-\frac{x^2}{2}\right)=0.$$
>
> The function tends to a finite value, so **there is no vertical asymptote** (the graph just stops at an open point $(0,0)$).
>
> **Horizontal, $x\to\infty$:** $x^2\ln x\to\infty$, so no horizontal asymptote.
>
> **Conclusion:** none.

> [!example] Slide: find horizontal asymptotes for $y=\ln^2x-x$
> **Domain:** $x>0$. At $+\infty$: factor out $x$:
>
> $$\ln^2x-x=x\left(\frac{\ln^2x}{x}-1\right).$$
>
> We know $\dfrac{\ln^2x}{x}\to0$ (L'Hopital twice), so the bracket tends to $-1$ and the whole expression $\to-\infty$. There is **no horizontal asymptote**. (The domain stops at 0, so there is no limit at $-\infty$.)
>
> As a side result, $x\to0^+$: $\ln^2x\to\infty$ and $-x\to0$, so $y\to\infty$ and **$x=0$ is a vertical asymptote**.
>
> ![[Lec03_asymptote_examples.png]]

> [!note] Reconstructed from the slides
> The class working for these two is not in the source; the conclusions above are derived from the limits.

## 4. The indeterminate form $0^0$

> [!info] Why "$0^0$" is not a number
> $\text{"}0\text{"}^{\text{"}0\text{"}}$ arises as a limit form, where base $\to0$ and exponent $\to0$. It is **indeterminate**: the answer depends on how fast each tends to 0. Take logs: if $y=f^g$, then $\ln y=g\ln f$, a $0\cdot\infty$ product, which you rewrite as a quotient and handle with L'Hopital.

> [!example] Slide: $\displaystyle\lim_{x\to0^+}\left(x^{x^2}\right)$
> Let $y=x^{x^2}$, so $\ln y=x^2\ln x$. From section 3, $x^2\ln x\to0$ as $x\to0^+$. Therefore
>
> $$y=e^{\ln y}\to e^0=\boxed{1}.$$

> [!note] Reconstructed from the slides
> The slide's exponent is read as $x^{x^{2}}$. The same method gives $\lim_{x\to0^+}x^x=1$ (since $x\ln x\to0$), the standard case behind the slide's "$0^0=?$" question. Other $0^0$ limit forms can give different values, which is why the form is called indeterminate.

## Summary

- Rules to know: $(e^x)'=e^x$, $(a^x)'=a^x\ln a$, $(\ln x)'=1/x$, $(\log_a x)'=1/(x\ln a)$ (supplied; slide area blank).
- L'Hopital for $0/0$ and $\infty/\infty$; rewrite $0\cdot\infty$ as a quotient first.
- Asymptotes: check the domain boundaries and $\pm\infty$. $x^2\ln x$ has none; $\ln^2x-x$ has a vertical asymptote at $x=0$ and no horizontal one.
- $0^0$ is indeterminate; use $\ln$ to evaluate. $x^{x^2}\to1$ as $x\to0^+$.

## Related notes

- [[Maths for Economists B]]
- Previous: [[Lec_02-Logarithmic Functions and Inverse Functions]]
- Next: [[Lec_04-Implicit Differentiation and Two-Variable Functions]]
