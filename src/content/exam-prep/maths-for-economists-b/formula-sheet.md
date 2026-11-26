---
title: "Calculus and Systems Formula Sheet"
subject: maths-for-economists-b
type: reference
description: "Every rule and formula on one page: derivatives, log rules, L'Hôpital and the limit forms, asymptotes, log differentiation, implicit slopes, partial derivatives, the differential, the D test, Lagrange, and how to read a reduced matrix."
course: Maths for Economists B
instructor: Hever Schulberg
semester: 2
year: 1
order: 2
pinned: true
tags:
  - maths-for-economists-b
  - exam-prep
  - formula-sheet
aliases:
  - Maths B Formula Sheet
---

> You get the course formula sheet in the exam, so this page is for **knowing what to do with it**: every formula, the condition it needs, and the one line that goes with it. Worked examples are on the [[Cheat Sheet (Lec 1–12)]].

## One variable

| Function | Derivative |
|---|---|
| $e^x$ | $e^x$ |
| $a^x$ | $a^x\ln a$ |
| $e^{g(x)}$ | $g'(x)\,e^{g(x)}$ |
| $\ln x$ | $\dfrac1x$ |
| $\log_a x$ | $\dfrac{1}{x\ln a}$ |
| $\ln g(x)$ | $\dfrac{g'(x)}{g(x)}$ |
| $f^{g}$ (log differentiation) | $f^g\left(g'\ln f + g\,\dfrac{f'}{f}\right)$ |
| $x^x$ | $x^x(\ln x + 1)$ |
| $x^{\ln x}$ | $x^{\ln x}\cdot\dfrac{2\ln x}{x}$ |

**Tangent line** at $x_0$: $y - f(x_0) = f'(x_0)(x - x_0)$.

## Logs

| Rule | Formula | Needs |
|---|---|---|
| Definition | $\log_a b = n \iff a^n = b$ | $a > 0$, $a \ne 1$, $b > 0$ |
| Product | $\log(bc) = \log b + \log c$ | $b, c > 0$ |
| Quotient | $\log\frac bc = \log b - \log c$ | $b, c > 0$ |
| Power | $\log b^n = n\log b$ | $b > 0$ |
| Change of base | $\log_a c = \dfrac{\ln c}{\ln a}$ | |
| Inverse | $a^{\log_a b} = b$, $\;f^g = e^{g\ln f}$ | $f > 0$ |

$\log(b + c)$ has **no** rule. $\dfrac{\log b}{\log c}$ is not $\log b - \log c$.

## Limits

| Form | What to do |
|---|---|
| $\dfrac00$, $\dfrac{\infty}{\infty}$ | L'Hôpital: $\lim\dfrac fg = \lim\dfrac{f'}{g'}$, top and bottom separately, repeat if needed |
| $0\cdot\infty$ | $f\cdot g = \dfrac{f}{1/g}$, then L'Hôpital |
| $\infty - \infty$ | Factor out the dominant term |
| $0^0$, $1^\infty$, $\infty^0$ | $f^g = e^{g\ln f}$: find $\lim g\ln f$ |
| $\dfrac{c}{0^+}$, $c > 0$ | $+\infty$ (and $-\infty$ for $0^-$) |

**Growth order** ($x \to \infty$): $\ln x \ll x^p \ll e^x$. **Standard limits:** $x\ln x \to 0$ and $x^x \to 1$ as $x \to 0^+$; $\dfrac{\ln x}{x} \to 0$ and $x e^{-x} \to 0$ as $x \to \infty$.

**Asymptotes.** Vertical $x = c$: $\lim_{x\to c^\pm} f = \pm\infty$ (check domain edges, zeros of denominators). Horizontal $y = L$: $\lim_{x\to\pm\infty} f = L$ finite. A finite limit at an edge is a hole.

## Global extrema on an interval

Candidates: critical points ($f' = 0$ or undefined) inside the interval, values at **closed** ends. Limits at open ends and $\pm\infty$ are compared but can never be the answer. Closed interval: both exist. Exactly one relative extremum: it is global.

## Two variables

| Object | Formula |
|---|---|
| Partial derivative | $f_x$: differentiate in $x$, $y$ constant |
| Slope of the slice $y = y_0$ | $f_x(x_0, y_0)$ |
| Slope of the slice $x = x_0$ | $f_y(x_0, y_0)$ |
| Slope of the level curve $f = c$ | $y' = \dfrac{dy}{dx} = -\dfrac{f_x}{f_y}$ |
| Differential | $dz = f_x\,dx + f_y\,dy$ |
| Linear estimate | $f(a + dx, b + dy) \approx f(a, b) + dz$ |
| Mixed partials | $f_{xy} = f_{yx}$ |
| Sum over $n$ variables | $\dfrac{\partial}{\partial x_j}\sum_i g(x_i) = g'(x_j)$ |
| Homogeneous of degree $r$ | $\sum_j x_j\,\dfrac{\partial f}{\partial x_j} = r\,f$ |

**Domain of $f(x, y)$:** $\ln u$ needs $u > 0$ (dashed boundary), $\sqrt u$ needs $u \ge 0$ (solid), a denominator $\ne 0$.

## Critical points and the D test

$$
f_x = 0,\quad f_y = 0, \qquad D = f_{xx}f_{yy} - f_{xy}^2
$$

| $D > 0$, $f_{xx} > 0$ | $D > 0$, $f_{xx} < 0$ | $D < 0$ | $D = 0$ |
|---|---|---|---|
| local min | local max | saddle | no conclusion |

## Lagrange

$$
\mathcal L = f - \lambda_1(g_1 - c_1) - \dots - \lambda_m(g_m - c_m)
$$

Set $\mathcal L_{x_i} = 0$ for every variable and keep every constraint. $\lambda$ = change in the optimal value per unit of $c$. Results to recognise: $\min\sum x_i^2$ with $\sum x_i = s$ is at $x_i = \tfrac sn$, value $\tfrac{s^2}{n}$; a linear $f$ on a sphere reaches $\pm$ its coefficient vector's length.

## Linear systems

| Reduced matrix shows | Verdict |
|---|---|
| a row $(0 \cdots 0 \mid c \ne 0)$ | no solution |
| a leading 1 in every variable column | unique solution |
| a variable column without a leading 1 (and no contradiction) | infinitely many; free variables $=$ unknowns $-$ leading 1s |

Homogeneous system: always the zero solution. Fewer equations than unknowns: never unique. Parameter: never divide by a pivot that can be 0; test those values one at a time.
