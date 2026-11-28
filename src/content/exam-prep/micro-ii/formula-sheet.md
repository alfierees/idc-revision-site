---
title: "Micro II Formula Sheet"
subject: micro-ii
type: reference
description: "Every formula of the course on one page: cost functions for each technology, demand and supply in partial equilibrium, surpluses and price controls, the Cobb-Douglas contract curve and Walrasian price, the production-economy recipe, Pigouvian taxes and the public-good conditions."
course: Micro-Economics II
instructor: Dr. Boaz Zik
semester: 1
year: 2
order: 2
pinned: true
tags:
  - micro-ii
  - exam-prep
  - formula-sheet
aliases:
  - Micro 2 Formula Sheet
---

> Built to be copied onto one page of notes. The reasoning behind each line is in the [[Micro II Cheat Sheet]].

## The firm

| Item | Formula |
|---|---|
| Profit maximum | $MR(q^*) = MC(q^*)$; price taker: $p = C'(q^*)$ |
| One input | $C(q) = w\,f^{-1}(q)$, $MC = \dfrac{w}{f'(l)}$ |
| $f = \sqrt l$ | $C = wq^2$, $q^* = \dfrac{p}{2w}$, $\Pi^* = \dfrac{p^2}{4w}$ |
| $f = l^{1/3}$ | $C = wq^3$, $q^* = \sqrt{\dfrac{p}{3w}}$ |
| Profit function | $\Pi^*(tp, tw) = t\,\Pi^*(p,w)$; increasing in $p$, decreasing in $w$ |
| No production | $C'' > 0$ and $C'(0) > p$ |

## Cost minimisation

| Item | Formula |
|---|---|
| Interior condition | $RTS = \dfrac{MP_l}{MP_k} = \dfrac{p_l}{p_k}$ |
| $l^\alpha k^\beta$ | $RTS = \dfrac{\alpha k}{\beta l}$, so $\dfrac{k}{l} = \dfrac{\beta p_l}{\alpha p_k}$ |
| $l^{1/2}k^{1/2}$ | $k = l\,\dfrac{p_l}{p_k}$, $C(q) = 2q\sqrt{p_lp_k}$ |
| $l^{1/4}k^{1/4}$, $p_l = p_k = p$ | $l = k = q^2$, $C = 2pq^2$, $MC = 4pq$ |
| $l^{1/4}k^{1/4}$, $p_l = p_k = \tfrac12$ | $C = q^2$, $MC = 2q$ |
| $s\cdot l^ak^{1-a}$ (constant returns) | $C = \dfrac{q}{s}\left(\dfrac{p_l}{a}\right)^a\left(\dfrac{p_k}{1-a}\right)^{1-a}$, $MC$ constant |
| $al + bk$ | $\dfrac{a}{b} > \dfrac{p_l}{p_k}$: $l = \dfrac{q}{a}$. $<$: $k = \dfrac{q}{b}$. $C = q\min\left\{\dfrac{p_l}{a}, \dfrac{p_k}{b}\right\}$ |
| $g(l) + k$ | $g'(l^*) = \dfrac{p_l}{p_k}$. $q \le g(l^*)$: $C = p_l\,g^{-1}(q)$. $q > g(l^*)$: $C = p_ll^* + p_k\big(q - g(l^*)\big)$ |
| $\sqrt l + k$ | $l^* = \left(\dfrac{p_k}{2p_l}\right)^2$, kink at $q = \dfrac{p_k}{2p_l}$ |
| Cost function | homogeneous of degree 1 in $(p_l, p_k)$; the bundle depends only on $p_l/p_k$ |

## Partial equilibrium

| Item | Formula |
|---|---|
| Quasi-linear demand | $U = v(x) + y$: $P^D(x) = v'(x)$; $Ax - x^2 + y$: $P^D = A - 2x$ |
| Supply | $P^S(x) = C'(x)$ |
| Equilibrium | $P^D(x^e) = P^S(x^e)$; $A - 2x = 2cx$: $x^e = \dfrac{A}{2 + 2c}$ |
| Surpluses | $CS = v(x) - px$, $FS = px - C(x)$, $W = v(x) - C(x)$ |
| Linear areas | $CS = \tfrac12(A - p)x$ when $x$ is on demand; $FS = \tfrac12 px$ when $C = cx^2$ and $p = MC$ |
| Ceiling $\bar p < p^e$ | $x = (C')^{-1}(\bar p)$, then $CS = (A - \bar p)x - x^2$ |
| Floor $\underline p > p^e$ | $x = \dfrac{A - \underline p}{2}$, then $FS = \underline p\,x - C(x)$ |
| CS-maximising ceiling ($C = cx^2$) | $\bar p = \dfrac{cA}{1 + 2c}$ |
| FS-maximising floor ($C = cx^2$) | $\underline p = \dfrac{A(1 + c)}{2 + c}$ |
| Consumer subsidy $s$ | $P^D(x) + s = P^S(x)$; government cost $s\cdot x$; $\Delta W = -\,DWL$ |
| Deadweight loss | area between $P^D$ and $P^S$ from the traded $x$ to $x^e$ |

## Exchange economy

| Item | Formula |
|---|---|
| Feasible | $x_1 + x_2 = X$, $y_1 + y_2 = Y$ |
| Contract curve | $MRS_1(x_1, y_1) = MRS_2(X - x_1, Y - y_1)$ |
| Cobb-Douglas MRS | $x^ay^{1-a}$: $MRS = \dfrac{a}{1-a}\cdot\dfrac{y}{x}$ |
| Cobb-Douglas contract curve | $y_1 = \dfrac{mYx_1}{kX + (m-k)x_1}$, $k = \dfrac{a}{1-a}$, $m = \dfrac{b}{1-b}$ |
| Same shares ($a = b$) | $y_1 = \dfrac{Y}{X}x_1$ (the diagonal) |
| Income | $I_i = p_x\omega^i_x + p_y\omega^i_y$, set $p_y = 1$ |
| Cobb-Douglas demand | $x_i = \dfrac{a_iI_i}{p_x}$, $y_i = (1 - a_i)I_i$ |
| Walrasian price | $p_x^* = \dfrac{a\omega^1_y + b\omega^2_y}{X - a\omega^1_x - b\omega^2_x}$ |
| Walras' law | $p_x(x_1 + x_2 - X) + p_y(y_1 + y_2 - Y) = 0$ |
| On the diagonal ($a = b$) | $p_x^* = \dfrac{a}{1-a}\cdot\dfrac{Y}{X}$ |
| Planner | maximise $W(U_1, U_2)$ along the utility frontier: $MRS_W = $ frontier slope |
| $W = U_1^aU_2^{1-a}$ | $MRS_W = \dfrac{a}{1-a}\cdot\dfrac{U_2}{U_1}$ |

## Production economy

| Item | Formula |
|---|---|
| Efficiency locus | $RTS_1(l_1, k_1) = RTS_2(\bar L - l_1, \bar K - k_1)$ |
| Same exponents | $k_1/l_1 = k_2/l_2 = \bar K/\bar L$; with $\bar L = \bar K$: $k_1 = l_1$ |
| $f_1 = l^ak^{1-a}$, $f_2 = b\,l^ak^{1-a}$, $\bar L = \bar K = D$ | PPF $y = b(D - x)$, $RPT = b$ |
| $f_1 = s_1l^ak^{1-a}$, $f_2 = s_2l^ak^{1-a}$ | PPF $y = s_2D - \dfrac{s_2}{s_1}x$, $RPT = \dfrac{s_2}{s_1}$ |
| RPT | $-\dfrac{dy}{dx}\Big\vert_{PPF} = \dfrac{MC_x}{MC_y}$ |
| Optimum | $MRS = RPT$; then $p_x/p_y = MRS = RPT$ |
| Cobb-Douglas consumer, linear PPF | $x^* = c\cdot(\text{max } x)$, $y^* = (1 - c)\cdot(\text{max } y)$ |
| Linear consumer $cx + y$ | $c > RPT$: only $x$; $c < RPT$: only $y$ |
| Input prices | $RTS_1 = p_l/p_k$ and $p_x = C_1'(x^*)$ |
| Check | $p_xx + p_yy = p_l\bar L + p_k\bar K$ (constant returns, zero profit) |

## Externalities

| Item | Formula |
|---|---|
| Equilibrium (polluter) | $\dfrac{\partial C_S}{\partial x} = 0$: ignores the damage |
| Optimum | $-\dfrac{\partial C_S}{\partial x} = \dfrac{\partial C_F}{\partial x}$ |
| Pigouvian tax | $t^* = \dfrac{\partial C_F}{\partial x}$ at the optimum (marginal external damage) |
| Linear damage $\theta\cdot e$ | tax $= \theta$ |
| Coase | rights tradeable at price $q$: $q = -\dfrac{\partial C_S}{\partial x} = \dfrac{\partial C_F}{\partial x}$ |

## Public goods

| Item | Formula |
|---|---|
| Utility | $U_i = V_i(g_1 + g_2) + I_i - g_i$ |
| Planner | $V_1'(g^*) + V_2'(g^*) = 1$; $N$ identical: $V'(g^*) = \dfrac1N$ |
| Stand-alone | $V_i'(g_i^o) = 1$ |
| Best response | $BR_i(g_j) = \max\{0, g_i^o - g_j\}$ |
| Nash total | $\max\{g_1^o, g_2^o\}$; $N$ identical: $g^o$, each gives $g^o/N$ |
| $V_i = a_i\sqrt g$ | $g_i^o = \dfrac{a_i^2}{4}$, $g^* = \dfrac{(a_1 + a_2)^2}{4}$ |
| Altruism | $V_1' + \alpha V_2' = 1$; $\alpha = 1$ gives $g^*$ |
