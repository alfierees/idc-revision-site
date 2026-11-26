---
title: "Formula Sheet"
subject: maths-for-economists-a
type: reference
description: "Every rule and formula in one place: domains, limits, Euler, continuity, the derivative rules, tangent lines, the tests for extrema and inflection, asymptotes, economics and integrals."
course: Maths for Economists A
instructor: Hever Schulberg
semester: 1
year: 1
order: 2
pinned: true
tags:
  - maths-for-economists-a
  - exam-prep
  - formula-sheet
aliases:
  - Maths A Formula Sheet
---

> The exam lets you bring the course formula sheet, so this page is for **knowing what each formula is for**, not memorising it. The explanations and worked examples are in the [[Cheat Sheet (Lec 1–12)|cheat sheet]].

## Domains

| Expression | Condition |
|---|---|
| $\dfrac{p}{q}$ | $q \neq 0$ |
| $\sqrt[\text{even}]{u}$ | $u \ge 0$ |
| $\sqrt[\text{odd}]{u}$ | any $u$ |
| $\ln u$, $\log_a u$ | $u > 0$ |
| $a^u$ | any $u$ ($a > 0$) |

## Algebra you keep using

$$
a^2-b^2=(a-b)(a+b),\qquad (a\pm b)^2=a^2\pm2ab+b^2,\qquad x^2+bx+c=(x-x_1)(x-x_2)
$$

$$
x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a},\qquad \sqrt{x^2}=\lvert x\rvert,\qquad x^{m/n}=\sqrt[n]{x^m},\qquad a^{-k}=\frac1{a^k}
$$

$$
\ln(ab)=\ln a+\ln b,\qquad \ln\frac ab=\ln a-\ln b,\qquad \ln a^k=k\ln a,\qquad a^x=e^{x\ln a}
$$

## Limits

| Situation | Result |
|---|---|
| $\dfrac{c}{0^+}$, $c > 0$ | $+\infty$ |
| $\dfrac{c}{0^-}$, $c > 0$ | $-\infty$ |
| $\dfrac{c}{\pm\infty}$ | $0$ |
| $\dfrac00$ | simplify: factor, conjugate, common denominator |
| $\lim_{x\to a}f$ exists | $\lim_{x\to a^-}f=\lim_{x\to a^+}f$ |
| $\dfrac{a_nx^n+\dots}{b_mx^m+\dots}$ at $\pm\infty$ | $0$ if $n<m$; $\tfrac{a_n}{b_m}$ if $n=m$; $\pm\infty$ if $n>m$ |
| $\sqrt{x^2+\dots}$ at $-\infty$ | $\lvert x\rvert\sqrt{1+\dots}=-x\sqrt{1+\dots}$ |
| $a^x$, $a>1$ | $\to\infty$ at $+\infty$, $\to0$ at $-\infty$ |
| $a^x$, $0<a<1$ | $\to0$ at $+\infty$, $\to\infty$ at $-\infty$ |

**Euler and $e$:**

$$
\lim_{u\to0}(1+u)^{1/u}=e,\qquad \lim_{x\to\infty}\left(1+\frac kx\right)^x=e^k,\qquad \lim\,(1+f)^g=e^{\lim f\cdot g}\ \ (f\to0,\ g\to\infty)
$$

$$
\lim_{x\to0}\frac{e^x-1}{x}=1,\qquad \lim_{x\to0^+}e^{1/x}=\infty,\qquad \lim_{x\to0^-}e^{1/x}=0
$$

## Continuity

$$
f \text{ continuous at } x_0 \iff f(x_0)=\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)
$$

## The derivative

$$
f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h},\qquad \text{tangent line: } y-f(x_0)=f'(x_0)(x-x_0)
$$

| Function | Derivative |
|---|---|
| $c$ | $0$ |
| $x^n$ (any real $n$) | $nx^{n-1}$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt x}$ |
| $\sqrt[3]{x}$ | $\dfrac{1}{3\sqrt[3]{x^2}}$ |
| $\dfrac1x$ | $-\dfrac1{x^2}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x\ln a$ |
| $\ln x$ | $\dfrac1x$ |
| $\lvert x\rvert$ | $1$ for $x>0$, $-1$ for $x<0$, none at $0$ |

$$
(cf)'=cf',\qquad (f\pm g)'=f'\pm g',\qquad (fg)'=f'g+fg',\qquad \left(\frac fg\right)'=\frac{f'g-fg'}{g^2}
$$

$$
\left[f(g(x))\right]'=f'(g(x))\,g'(x),\qquad \left[u^n\right]'=nu^{n-1}u',\qquad \left[e^u\right]'=e^uu',\qquad \left[\ln u\right]'=\frac{u'}u
$$

**At a point $x_0$ where $f$ is continuous**, with $L$ and $R$ the one-sided slopes:

| $L$, $R$ | Verdict |
|---|---|
| $L=R$, finite | differentiable, $f'(x_0)=L$ |
| $L\neq R$, both finite (or one infinite) | corner point |
| $L=-\infty$, $R=+\infty$ (or the reverse) | cusp |
| $L=R=\pm\infty$ | vertical tangent $x=x_0$ |

## Shape of the graph

| Condition | Meaning |
|---|---|
| $f'>0$ on an interval | increasing |
| $f'<0$ | decreasing |
| $f'(x_0)=0$ or undefined, $x_0$ in the domain | critical point |
| $f'$ changes $+\to-$ | relative maximum |
| $f'$ changes $-\to+$ | relative minimum |
| $f''>0$ | concave up $\cup$ |
| $f''<0$ | concave down $\cap$ |
| $f$ continuous, $f''$ changes sign | inflection point |
| $f'(x_0)=0$, $f''(x_0)<0$ / $>0$ | max / min (second derivative test) |

## Asymptotes

$$
\text{vertical } x=a:\ \lim_{x\to a^-}f=\pm\infty \text{ or } \lim_{x\to a^+}f=\pm\infty
$$

$$
\text{horizontal } y=L:\ \lim_{x\to\infty}f=L \text{ or } \lim_{x\to-\infty}f=L
$$

$$
\text{oblique } y=mx+b:\ m=\lim\frac{f(x)}{x},\quad b=\lim\left(f(x)-mx\right)
$$

## Economics

$$
R(x)=x\cdot p(x),\qquad P(x)=R(x)-C(x),\qquad \bar C(x)=\frac{C(x)}{x}
$$

$$
C'(x)\approx C(x+1)-C(x),\qquad \text{max profit: } P'(x)=0 \iff R'(x)=C'(x),\ P''(x)<0
$$

$$
\text{linear demand through } (p_1,x_1),(p_2,x_2):\quad x-x_1=\frac{x_2-x_1}{p_2-p_1}\,(p-p_1)
$$

## Integrals

| $f(x)$ | $\int f\,dx$ |
|---|---|
| $x^n$, $n\neq-1$ | $\dfrac{x^{n+1}}{n+1}+C$ |
| $\dfrac1x$ | $\ln\lvert x\rvert+C$ |
| $e^x$ | $e^x+C$ |
| $a^x$ | $\dfrac{a^x}{\ln a}+C$ |
| $f(ax+b)$ | $\dfrac1aF(ax+b)+C$ |
| $\dfrac{1}{(ax+b)^2}$ | $-\dfrac{1}{a(ax+b)}+C$ |

$$
\int_a^bf(x)\,dx=F(b)-F(a),\qquad \int_a^bf=\int_a^cf+\int_c^bf,\qquad \int_a^bcf=c\int_a^bf
$$

## Sigma notation (Lec 01)

A sum of products does not split: $\sum a_ib_i \neq \sum a_i \cdot \sum b_i$.

$$
\sum_{i=1}^{n}c=nc,\qquad \sum_{i=1}^{n}(a_i\pm b_i)=\sum a_i\pm\sum b_i,\qquad \sum_{i=1}^{n}\alpha a_i=\alpha\sum a_i
$$
