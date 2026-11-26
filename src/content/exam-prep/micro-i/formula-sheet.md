---
title: "Consumer Theory Formula Sheet"
subject: micro-i
type: reference
description: "Every formula of the course on one page: the budget line, MRS for each utility family, the ready-made demands, Slutsky and Hicks, endowments, labor supply and the two-period budget with the real interest rate."
course: Micro-Economics I
instructor: Ido Eisdorfer and Yosi Ganel
semester: 2
year: 1
order: 2
pinned: true
tags:
  - micro-i
  - exam-prep
  - formula-sheet
aliases:
  - Micro I Formula Sheet
---

> The exam allows four A4 pages of your own notes. This page is built to be copied onto one of them. The reasoning behind each line is in the [[Cheat Sheet (Lec 1–9)]].

## Budget line

| Item | Formula |
|---|---|
| Budget line | $p_1x_1 + p_2x_2 = m$ |
| Solved for $x_2$ | $x_2 = \dfrac{m}{p_2} - \dfrac{p_1}{p_2}x_1$ |
| Intercepts | $m/p_1$ on the $x_1$ axis, $m/p_2$ on the $x_2$ axis |
| Slope | $-p_1/p_2$ |
| Unchanged line | $(tp_1, tp_2, tm)$ for any $t > 0$ |
| Kink after $\bar x$ units at a discount $d$ | slope $p_1/p_2$ up to $\bar x$, then $(1-d)\,p_1/p_2$ |

## Utility and the MRS

| Item | Formula |
|---|---|
| Marginal utility | $MU_i = \partial U / \partial x_i$ |
| MRS (slope of the indifference curve) | $MRS = -\dfrac{MU_1}{MU_2}$ |
| Same preferences | $V = f(U)$, $f$ strictly increasing; MRS unchanged |
| Convex (well-behaved) | $\lvert MRS\rvert$ falls as $x_1$ rises |

| Utility | $\lvert MRS\rvert$ | Optimum |
|---|---|---|
| $x_1^a x_2^b$ | $\dfrac{a x_2}{b x_1}$ | $x_1 = \dfrac{a}{a+b}\dfrac{m}{p_1}$, $x_2 = \dfrac{b}{a+b}\dfrac{m}{p_2}$ |
| $ax_1 + bx_2$ | $a/b$ | all on good 1 if $a/p_1 > b/p_2$, all on good 2 if less |
| $\min\{ax_1, x_2\}$ | kink | $x_1 = \dfrac{m}{p_1 + ap_2}$, $x_2 = ax_1$ |
| $\min\{ax_1, bx_2\}$ | kink | $ax_1 = bx_2$ and the budget |
| $f(x_1) + x_2$ | $f'(x_1)$ | $f'(x_1) = p_1/p_2$; rest of income on $x_2$ (if positive) |
| $\ln x_1 + x_2$ | $1/x_1$ | $x_1 = p_2/p_1$ |
| $\sqrt{x_1} + x_2$ | $\dfrac{1}{2\sqrt{x_1}}$ | $x_1 = \left(\dfrac{p_2}{2p_1}\right)^2$ |
| $\sqrt{x_1} + \sqrt{x_2}$ | $\sqrt{x_2/x_1}$ | $x_2 = (p_1/p_2)^2\,x_1$ |
| $x_1^a + x_2^a$, $a > 1$ | rises along the curve | corner: the cheaper good only |

## Optimum condition (convex, interior)

$$
\frac{MU_1}{MU_2} = \frac{p_1}{p_2} \qquad\Longleftrightarrow\qquad \frac{MU_1}{p_1} = \frac{MU_2}{p_2}
$$

## Slutsky and Hicks

| Item | Formula |
|---|---|
| Decomposition | $\Delta x_1 = \Delta x_1^{s} + \Delta x_1^{n}$ (substitution + income) |
| Slutsky income (old bundle $A$ at new prices) | $m' = p_1'x_1^A + p_2x_2^A$ |
| Slutsky compensation | $m' - m = (p_1' - p_1)\,x_1^A$ |
| Hicks income | the $m^H$ with $U\big(x(p', m^H)\big) = U(A)$ |
| Ordering | $m^H \le m'$ |
| Cobb-Douglas $U = xy$, Hicks income for $p_2 \to p_2'$ | $m^H = m\sqrt{p_2'/p_2}$ |

## Endowments

| Item | Formula |
|---|---|
| Budget | $p_1x_1 + p_2x_2 = p_1\omega_1 + p_2\omega_2$ |
| Net demand | $x_i - \omega_i$ (positive buys, negative sells) |
| Net demands balance | $p_1(x_1 - \omega_1) + p_2(x_2 - \omega_2) = 0$ |
| Three effects | substitution + ordinary income + endowment income |

## Labor supply

| Item | Formula |
|---|---|
| Time | $L + H = T$ |
| Budget | $P_YY = W(T - L) + W_0$, or $P_YY + WL = WT + W_0$ |
| Slope | $-W/P_Y$ (the real wage) |
| Optimum | $\dfrac{MU_L}{MU_Y} = \dfrac{W}{P_Y}$ |
| Cobb-Douglas $L^aY^b$ | $L = \dfrac{a}{a+b}\cdot\dfrac{WT + W_0}{W}$ |
| Quasilinear $f(L) + Y$ | $f'(L) = W$ (no $W_0$ in it) |
| No-work corner | $H = 0$ when $W \le MRS$ at $(L, Y) = (T, W_0)$ (the reservation wage) |

## Two periods

| Item | Formula |
|---|---|
| Real interest rate | $1 + \rho = \dfrac{1 + r}{1 + \pi}$ (approximately $\rho \approx r - \pi$) |
| Budget (present value) | $C_1 + \dfrac{C_2}{1+\rho} = I_1 + \dfrac{I_2}{1+\rho}$ |
| Budget (future value) | $(1+\rho)C_1 + C_2 = (1+\rho)I_1 + I_2$ |
| Slope | $-(1+\rho)$ |
| Intercepts | $C_1$: $I_1 + \dfrac{I_2}{1+\rho}$, $C_2$: $I_2 + (1+\rho)I_1$ |
| Savings | $S = I_1 - C_1$ (negative = borrowing) |
| Optimum | $\lvert MRS_{C_1,C_2}\rvert = 1 + \rho$ |
| Cobb-Douglas $C_1^aC_2^b$ | $C_1 = \dfrac{a}{a+b}\left(I_1 + \dfrac{I_2}{1+\rho}\right)$ |

## Effects tables to memorise

| Price of good 1 falls | Normal | Inferior | Giffen |
|---|---|---|---|
| Substitution on $x_1$ | $+$ | $+$ | $+$ |
| Income on $x_1$ | $+$ | $-$ | $-$, larger |
| Total on $x_1$ | $+$ | $+$ | $-$ |

| Real rate rises | Saver | Borrower |
|---|---|---|
| Utility | up | down |
| $C_1$ | ? | down |
| $C_2$ | up | ? |

| Real rate falls | Saver | Borrower |
|---|---|---|
| Utility | down | up |
| $C_1$ | ? | up |
| $C_2$ | down | ? |
