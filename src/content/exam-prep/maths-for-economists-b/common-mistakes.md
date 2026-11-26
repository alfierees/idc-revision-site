---
title: "Common Mistakes"
subject: maths-for-economists-b
type: reference
description: "The slips that cost marks on the Maths B final, topic by topic, each with the fix: open ends counted as extrema, logs split over sums, L'Hôpital done with the quotient rule, missed y' factors, D read without f_xx, and dividing by k."
course: Maths for Economists B
instructor: Hever Schulberg
semester: 2
year: 1
order: 5
tags:
  - maths-for-economists-b
  - exam-prep
  - mistakes
---

## Global extrema

| Mistake | Fix |
|---|---|
| Calling the value at an **open** end the maximum ($f \to 2$ at $x \to 1$ on $[0.4, 1)$) | Approached is not attained: "no maximum" |
| Comparing only the critical points | Also the closed ends, and the limits at open ends and $\pm\infty$ |
| Keeping a critical point that lies **outside** the interval ($\tfrac1e$ for $[0.4, 1)$) | Locate it first; outside, the function is monotone on the interval |
| Using the one-extremum rule when there are two extrema | Count first: $x^3 + 3x^2 - 9x - 7$ has two, so no shortcut |
| Saying "max" without the value | Give both the point and $f$ there |

## Logs and exponentials

| Mistake | Fix |
|---|---|
| $\log(b + c) = \log b + \log c$ | No rule for a sum. Only $\log(bc)$ splits |
| Keeping a root outside the domain ($x = -5$ in $\log x + \log(x - 15) = 2$) | Domain **first**, check every root |
| Forgetting the conditions on a variable base | $\log_x(\cdot)$ needs $x > 0$ and $x \ne 1$ too |
| $(a^x)' = xa^{x-1}$ | That is the power rule. $(a^x)' = a^x\ln a$ |
| $(x^x)' = x\cdot x^{x-1}$ | Neither rule applies. Log differentiation: $x^x(\ln x + 1)$ |

## Limits and asymptotes

| Mistake | Fix |
|---|---|
| L'Hôpital with the quotient rule | Differentiate top and bottom **separately** |
| L'Hôpital on a form that is not $\tfrac00$ or $\tfrac\infty\infty$ | Rewrite $0\cdot\infty$ as a quotient first; check the form at every pass |
| "$0^0 = 1$" written as a fact | It is indeterminate. Show $e^{x\ln x}$ and the limit of $x\ln x$ |
| A vertical asymptote at every edge of the domain | Only where the limit is $\pm\infty$. $x^2\ln x \to 0$ at $0^+$: a hole |
| Checking only $+\infty$ for a horizontal asymptote | Also $-\infty$ if the domain allows it ($xe^x$ has $y = 0$ on the left only) |

## Implicit differentiation, slices, domains

| Mistake | Fix |
|---|---|
| $\tfrac{d}{dx}y^2 = 2y$ | $2y\,y'$. And $xy^2$ needs the product rule |
| One slope when there are two points | At $x = 1$ solve for **all** $y$ first |
| $y' = f_x/f_y$ | The minus sign: $y' = -f_x/f_y$ |
| Answering $f_x$ when asked for the slope of a **level curve** | $f_x$ is the slope of the slice; the level curve's slope is $-f_x/f_y$ |
| $\ln u \ge 0$ or $\ln u$ allowed at $u = 0$ | $u > 0$ strictly; dashed boundary |
| One case for $\ln[x(y - x^2)]$ | Two: both factors positive or both negative |

## Partial derivatives and the differential

| Mistake | Fix |
|---|---|
| Forgetting that cost enters profit with a minus | $P = R - C$: expand with the signs |
| "Marginal profit 500 means profit is 500" | It is the **change** from one more unit, the other held fixed |
| Using the partials at the end point in $dP$ | At the starting point |
| $dy = 9$ for the move from 10 to 9 | $dy = -1$: changes, with their sign |
| A sum over $j$ where every term is differentiated | In $\sum_i g(x_i)$ only the $j$-th term depends on $x_j$ |

## Critical points and Lagrange

| Mistake | Fix |
|---|---|
| Dividing $3x(y^2 - 1) = 0$ by $x$ | Factor: $x = 0$ **or** $y = \pm1$, each a case |
| Reading $D > 0$ as "minimum" | $D > 0$ is an extremum; $f_{xx}$ says which |
| $D$ computed once with $x$, $y$ left in it | Evaluate at **each** critical point, in a table |
| Keeping a point outside the domain ($(0, 0)$ with $\ln(x^2 + y^2)$) | Drop it and say why |
| Lagrange candidates with no verdict | Compare $f$ at the candidates, or argue convexity |
| Forgetting the constraint is an equation of the system | $\mathcal L_\lambda = 0$ is $g = c$: you need it to find the point |

## Linear systems

| Mistake | Fix |
|---|---|
| Multiplying a row by 0 | Only by a non-zero number |
| Dividing by $k - 1$ in the general case and forgetting $k = 1$ | Every value that zeroes a pivot is its own case. Check it in the **original** rows: at $k = 1$ two rows can contradict each other |
| "Reduced, so it has a solution" | A row $(0 \cdots 0 \mid 6)$ in reduced form still means no solution |
| "Homogeneous, so only the zero solution" | Free variables give infinitely many |
| Saying "the determinant is 0" | Not in this course: argue with leading entries and free variables |
| Free variables not named | Set them to $s$, $t$ and write every other variable in terms of them |
