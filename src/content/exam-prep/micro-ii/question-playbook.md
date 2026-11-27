---
title: "Exam Question Playbook"
subject: micro-ii
type: reference
description: "Every question type the final asks, with the steps that earn the points and a model answer from a real past paper: the market with a price control, the production economy, the exchange economy, cost functions, the planner, externalities, public goods and the true/false part."
course: Micro-Economics II
semester: 1
year: 2
order: 4
tags:
  - micro-ii
  - exam-prep
  - playbook
---

> **Game plan (3 hours).** Start with the market question (25 points, always the same shape, 20 minutes), then the production economy (25 points, a recipe). Spend what is left on the true/false part: about 6 minutes per claim. Every claim needs a written argument: a one-line proof if true, a **concrete counterexample with numbers** if false. On 4-question papers, do the market and the cost-function question first.

---

## A · The market with a price control (every paper)

**Steps**
1. **Cost function.** For $f = l^{1/4}k^{1/4}$: $RTS = k/l = p_l/p_k$, so with equal prices $k = l$; the isoquant gives $l = k = x^2$; $C = (p_l + p_k)x^2$.
2. **Supply** $P^S = C'(x)$. **Demand** $P^D = MU_x$ (quasi-linear). Say why in one line each: "a price-taking firm produces until $p = MC$"; "with money linear in utility, the consumer buys until $MU = p$".
3. **Equilibrium** $P^D = P^S$. Compute $CS$, $FS$, $W$ as integrals (or triangles) and check $CS + FS = W$.
4. **The policy.** Is it binding? Which side is short? Ceiling: supply. Floor: demand. Fixed price: whichever quantity is smaller.
5. Recompute $CS$, $FS$, $W$ at the traded quantity. State the change in each, and the deadweight loss.
6. **Explain**: price effect vs quantity effect, who gains, and why welfare falls (units valued above their cost are no longer traded).

> [!example] 2024 Moed B Q3: $U = 180x - x^2 + y$, $p_l = p_k = 1$, cap at 80
> $C = 2x^2$, $MC = 4x$, $180 - 2x = 4x$: $x = 30$, $p = 120$, $CS = 900$, $FS = 1800$, $W = 2700$. Cap 80 binds; supply is short: $4x = 80$, $x = 20$. $CS = 180\cdot 20 - 400 - 1600 = 1600$, $FS = 1600 - 800 = 800$, $W = 2400$. Consumers gain because the lower price outweighs the lost units; the firm loses on both price and quantity; welfare falls by the triangle between 20 and 30 units.

**Follow-ups and how to answer them**

| Follow-up | Answer |
|---|---|
| Demand rises under a binding cap | quantity fixed by $MC = $ cap: FS unchanged, CS up by $\Delta A\cdot x$ |
| Input prices fall under a binding cap | MC falls, quantity rises: both CS and FS up |
| "Find the CS-maximising ceiling" | $x = \bar p/(2c)$, $CS(\bar p) = (A - \bar p)x - x^2$, differentiate |
| "Find the FS-maximising floor" | $x = (A - \underline p)/2$, $FS = \underline px - cx^2$, differentiate |
| "When is the firm worse off than at equilibrium?" | set $FS(\underline p) = FS^e$, solve the quadratic (2024 A: above 52) |
| Subsidy vs cap | welfare with subsidy $= $ gains $-$ bill; with cap $= \int_0^{x}(P^D - MC)$ |
| A government weighting $a\cdot CS + b\cdot FS$ | $a = b$: do nothing. Only CS: best ceiling. Only FS: best floor. Mixed: rule out the side that hurts the heavier group |

---

## B · The production economy (2023 A, 2023 B, 2023 example, 2025 A, 2025 B, 2026 A)

**Steps**
1. **Efficiency locus:** compute both RTS, set equal, substitute $l_2 = \bar L - l_1$, $k_2 = \bar K - k_1$. Cross-multiply; the $k_1l_1$ terms cancel. With matching exponents and $\bar L = \bar K$: $k_1 = l_1$.
2. **PPF:** put the locus into $f_1$ to get $x(l_1)$ and into $f_2$ to get $y(l_1)$; eliminate $l_1$.
3. **RPT** $= -dy/dx$ along the PPF (a constant if the PPF is straight).
4. **Optimum:** $MRS = RPT$ plus the PPF. Then back out $l_1, k_1, l_2, k_2$.
5. **Output prices:** $p_y = 1$, $p_x = MRS(x^*, y^*)$.
6. **Input prices:** firm 1's $RTS = p_l/p_k$ gives the ratio; firm 1's cost function and $p_x = C_1'(x^*)$ give the level. Check $p_l\bar L + p_k\bar K = p_xx^* + p_yy^*$.
7. **Statics:** say whether the PPF moves (technology, resources) or only the point on it (tastes). Give the direction of $x^*/y^*$ and $p_x/p_y$.

> [!example] 2026 Moed A Q3: $f_1 = l^ak^{1-a}$, $f_2 = b\,l^ak^{1-a}$, $\bar L = \bar K = 50$, $U = x^\alpha y^{1-\alpha}$
> 1. $RTS_1 = \tfrac{a k_1}{(1-a)l_1}$, and the $b$ cancels in $RTS_2$, so $k_1 = l_1$.
> 2. $x = l_1$, $y = b(50 - l_1)$: PPF $y = b(50 - x)$, $RPT = b$.
> 3. Welfare rises with $b$: the frontier moves out at every $x < 50$ and the old bundle is still feasible.
> 4. $\alpha = \tfrac12$, $b = 1$: $\tfrac yx = 1$, so $(25, 25)$, inputs all 25, $p_x = 1$, $p_l = p_k = \tfrac12$.
> 5. $p_x/p_y = b$ rises with $b$; $x^*/y^* = \tfrac{\alpha}{(1-\alpha)b}$ falls with $b$.

> [!tip] Corner cases with a linear consumer
> With $U = cx + y$ the MRS is the constant $c$. Compare it with the RPT: $c > RPT$ puts all resources into $x$, $c < RPT$ into $y$ (2025 A Q2). With $U = \sqrt x + y$ the optimum is interior and $x$ does not change when resources double: quasi-linear, no income effect.

---

## C · The exchange economy (2024 A Q2, 2024 B Q2, many T/F items)

**Steps**
1. Totals $X$, $Y$; write $x_2 = X - x_1$, $y_2 = Y - y_1$.
2. **Contract curve:** $MRS_1 = MRS_2$; solve for $y_1(x_1)$.
3. **Equilibrium:** set $p_y = 1$; incomes $I_i = p_x\omega^i_x + \omega^i_y$; Cobb-Douglas demands $x_i = a_iI_i/p_x$.
4. Clear **one** market (say why: Walras' law), solve for $p_x$, back out the allocation.
5. Check: the allocation is on the contract curve (first welfare theorem).

> [!example] 2024 Moed A Q2: $U_1 = x^{2/3}y^{1/3}$, $U_2 = x^{1/3}y^{2/3}$, $\omega^1 = \omega^2 = (50, 70)$
> $MRS_1 = \tfrac{2y_1}{x_1}$, $MRS_2 = \tfrac{y_2}{2x_2}$, so $4y_1(100 - x_1) = x_1(140 - y_1)$: $y_1 = \tfrac{140x_1}{400 - 3x_1}$. Demands: $x_1 = \tfrac{100}{3} + \tfrac{140}{3p_x}$, $x_2 = \tfrac{50}{3} + \tfrac{70}{3p_x}$. Clearing: $50 + \tfrac{70}{p_x} = 100$, $p_x = \tfrac75$. Agent 1 gets $(\tfrac{200}{3}, \tfrac{140}{3})$; check: $\tfrac{140\cdot 200/3}{400 - 200} = \tfrac{140}{3}$. ✓

**Shape questions** ("what can you say about $a$ and $b$?"): the curve is the diagonal iff $a = b$; above the centre at $x_1 = X/2$ means agent 1 values $y$ more ($a < b$); a constant multiplying a utility changes nothing.

---

## D · Cost functions (2024 A Q1, 2024 B Q1, PS3)

**Steps**
1. Write $MP_l$, $MP_k$ and $RTS$.
2. If the RTS is a constant (linear technology), compare it with $p_l/p_k$: corner.
3. If the RTS depends on $l$ only ($g(l) + k$), solve $g'(l^*) = p_l/p_k$: below $g(l^*)$ labour only, above it capital tops up.
4. Otherwise solve $RTS = p_l/p_k$ with the isoquant.
5. Write $C(q)$ **piecewise** where needed and state $MC$.
6. Comparative statics: say what changes **and what does not** (a small price change at a corner changes nothing).

> [!example] 2024 Moed A Q1: $f = al + bk$
> Any convex combination of two points on an isoquant is on the same isoquant (the isoquant is a line). If $\tfrac ab > \tfrac{p_l}{p_k}$: $l = \tfrac{q}{a}$, $C = \tfrac{p_lq}{a}$. A fall in $p_k$: nothing changes until $\tfrac{p_l}{p_k}$ passes $\tfrac ab$, then the firm jumps to capital only and cost falls to $\tfrac{p_kq}{b}$. Supply is flat at $\tfrac{p_l}{a}$, so profit is zero.

---

## E · The planner on a utility frontier (2024 A Q4)

1. Find the contract curve.
2. Along it, write $U_1$ and $U_2$ as functions of $x_1$; eliminate $x_1$ to get the frontier $U_2(U_1)$.
3. Set the planner's $MRS_W = \dfrac{\partial W/\partial U_1}{\partial W/\partial U_2}$ equal to the frontier's slope.
4. Solve, then translate back into goods.

---

## F · Externalities (2026 A Q4, PS10 Q1)

1. **Equilibrium:** write each firm's profit; differentiate with respect to its **own** choices only; the other firm's actions are constants.
2. **Planner:** write the **sum** of profits; differentiate with respect to everything.
3. Compare the first-order conditions: the extra term in the planner's FOC is the marginal external damage.
4. **Pigouvian tax** = that term at the optimum. Check that the taxed firm's FOC now matches the planner's.
5. Explain: the polluter ignores the cost it imposes; the planner internalises it. If output falls but profits rise, it is a mutual externality: both firms overused the harmful action.

> [!example] PS10 Q1: $C_A = a^2$, $C_B = b^2 + ab$, $p_a = 40$, $p_b = 80$
> Equilibrium: $40 = 2a$, $a = 20$; $80 - 2b - a = 0$, $b = 30$; profits 400 and 900. Planner adds $-b$ to A's FOC: $40 - 2a - b = 0$ with $80 - 2b - a = 0$ gives $b = 40$, $a = 0$, joint profit 1600 > 1300.

---

## G · Public goods (2024 B Q4, 2026 A Q1.5, PS10)

1. **Stand-alone** level: $V_i'(g_i^o) = 1$.
2. **Planner**: $\sum V_i'(g^*) = 1$.
3. **Best responses** $BR_i = \max\{0, g_i^o - g_j\}$; draw them in the $(g_1, g_2)$ plane.
4. **Equilibria:** equal $g^o$: the whole line $g_1 + g_2 = g^o$. Unequal: only the keener agent contributes. Prove uniqueness by showing that any $g_1 > 0$ forces a contradiction.
5. **Explain:** each agent compares her **own** benefit with the cost and ignores the benefit to the other (a positive externality): under-provision and free riding.

---

## H · The true/false part

| Claim pattern | How to attack it |
|---|---|
| "**Necessarily**", "always", "at any output level" | look for one corner or kink that breaks it (perfect substitutes, $g(l) + k$) |
| "Prices multiplied by $t$" | does the claim scale **all** prices? Homogeneity needs all of them |
| "The planner prefers… so… dominates" | the $(1,2)$/$(19,18)$ vs $(10,10)$ table |
| "The contract curve is the same / is the diagonal" | write $MRS_1 = MRS_2$; do the share factors cancel? |
| "The PPF shifts when tastes change" | false: the PPF is technology and resources only |
| "A ceiling raises CS" | false: a ceiling near zero kills the quantity |
| "A lump-sum tax fixes it" | false: it does not change any margin |
| "Equilibrium utility vs endowment" | the endowment is always affordable |
| Anything about the Edgeworth box picture | check the two agents' points coincide (resources fully used) and the MRS |

> [!warning] Explain, do not just answer
> "An answer without a written argument scores zero." For a false claim, give **specific** numbers. For a true one, a three-line argument is enough.
