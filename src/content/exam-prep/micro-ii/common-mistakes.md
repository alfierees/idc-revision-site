---
title: "Common Mistakes"
subject: micro-ii
type: reference
description: "The slips that cost points in Micro II: the wrong short side under a price control, forgetting the subsidy bill, tangency at a corner, a PPF that moves with tastes, planner preference read as Pareto dominance, and the true/false traps."
course: Micro-Economics II
semester: 1
year: 2
order: 5
tags:
  - micro-ii
  - exam-prep
  - mistakes
---

## The firm and cost functions

| Mistake | Why it's wrong | Check |
|---|---|---|
| "Convex technology, so MC rises" | $MC = w/f'(l)$; convex $f$ means $f'$ rises, so MC **falls** | concave $f$ is the rising-MC case |
| "Multiplying $w$ by $t$ multiplies profit by $t$" | homogeneity needs $p$ **and** $w$ scaled | $f = \sqrt l$: $\Pi^* = p^2/4w$ is **divided** by $t$ |
| Setting $RTS = p_l/p_k$ for $al + bk$ | the RTS is a constant: there is no tangency | compare $a/b$ with $p_l/p_k$, pick a corner |
| One formula for $g(l) + k$ | the cost is **kinked** at $q = g(l^*)$ | write it piecewise; above the kink $MC = p_k$ |
| Inverting the RTS: $MP_k/MP_l$ | RTS is the slope of the isoquant with $l$ on the horizontal axis | $RTS = MP_l/MP_k$ |
| "Higher $p_l/p_k$, so necessarily less labour" | at a corner, or below the kink, the bundle does not move | one counterexample is enough |
| Forgetting that the bundle depends only on the ratio | scaling both input prices changes cost, not the bundle | same $(l, k)$, $t$ times the cost |
| $C'(0) > p$ but solving $p = C'(q)$ anyway | with rising MC there is no profitable unit | $q^* = 0$ |

## The market

| Mistake | Why it's wrong | Check |
|---|---|---|
| Using the demand quantity under a ceiling | below $p^e$ firms only supply where $MC = \bar p$ | ceiling: **supply** is short |
| Using the supply quantity under a floor | above $p^e$ consumers only buy where $MU = \underline p$ | floor: **demand** is short |
| A non-binding control treated as binding | a ceiling above $p^e$ or a floor below it changes nothing | compare with $p^e$ first |
| Computing CS with the old price after a control | CS is between demand and the **new** price, only up to the traded quantity | redraw the shapes |
| Leaving out the government's bill for a subsidy | CS and FS both rise, so the net looks positive | $W = CS + FS - s\cdot x$ |
| Shifting demand **down** for a consumer subsidy | consumers will pay $s$ more for each unit | $P^D(x) + s = P^S(x)$ |
| "A higher price helps the firm" | with rising MC a high floor loses more on quantity than it gains on price | 2023 example: FS 425 < 625 at $p = 90$ |
| Different welfare for two prices with the same quantity | welfare depends only on the quantity traded | 2023 B: 90 and 60 both give 1125 |
| Treating CS as exact welfare with income effects | only true with quasi-linear utility | say "quasi-linear, so CS + FS is welfare" |

## Pareto efficiency and the planner

| Mistake | Why it's wrong | Check |
|---|---|---|
| "The planner prefers $A$, so $A$ dominates $B$" | a welfare function can trade one person's loss for another's gain | $(1,2)$/$(19,18)$ vs $(10,10)$ with $W = U_1U_2$ |
| "Efficient beats inefficient for everyone" | an efficient allocation can be terrible for one agent | $(100, 0)$ is efficient but agent 2 prefers $(9, 9)$ |
| Calling an allocation that wastes resources efficient | in the Edgeworth box the two agents' points must coincide | leftovers can always be handed out |
| Confusing efficiency with fairness | the origins $0_1$ and $0_2$ are efficient | efficiency says nothing about the split |

## The exchange economy

| Mistake | Why it's wrong | Check |
|---|---|---|
| Solving two market-clearing equations | Walras' law: they are the same equation | clear one, normalise $p_y = 1$ |
| Finding $p_x$ and $p_y$ separately | only the ratio is determined | $(tp_x, tp_y)$ is also an equilibrium |
| Forgetting agent 2's flipped coordinates | her bundle is measured from $0_2$ | $x_2 = X - x_1$, $y_2 = Y - y_1$ |
| Letting a utility constant change the curve | $A\cdot U$ has the same MRS | the factor cancels |
| "Equal endowments mean the midpoint is efficient" | only if the shares are equal | $a \ne b$: $MRS_1 \ne MRS_2$ at the midpoint |
| An equilibrium outside the lens | each agent can always keep her endowment | equilibrium utility $\ge$ endowment utility |

## The production economy

| Mistake | Why it's wrong | Check |
|---|---|---|
| Moving the PPF when preferences change | the PPF comes from technology and resources only | tastes move the **point** on it |
| Setting $MRS = $ the input price ratio | the consumer's condition is $MRS = RPT = p_x/p_y$ | firms: $RTS = p_l/p_k$ |
| Interior solution with a linear consumer | MRS is constant, so it cannot equal the RPT except by a fluke | compare $c$ with the RPT, corner |
| Forgetting the factor $b$ cancels in the RTS | the efficiency locus does not depend on $b$, the PPF does | $y = b(D - x)$ |
| Reading $MRS > RPT$ as "too much $x$" | the consumer values $x$ above its cost, so produce **more** $x$ | move along the PPF towards $x$ |
| Input prices without the level | the RTS gives only the ratio $p_l/p_k$ | use $p_x = C_1'(x^*)$ |
| Not checking incomes | with constant returns, $p_l\bar L + p_k\bar K = p_xx + p_yy$ | a quick check catches arithmetic slips |

## Externalities and public goods

| Mistake | Why it's wrong | Check |
|---|---|---|
| Letting the polluter's FOC include the damage in equilibrium | the polluter treats the other's cost as not its own | that term is the planner's addition |
| A lump-sum tax as the fix | it does not change any margin | per-unit tax = marginal damage |
| Tax at the equilibrium damage | the Pigouvian tax is the marginal damage **at the optimum** | evaluate at the planner's quantities |
| A price rise that hurts others called an externality | it works through the price system | an externality bypasses prices |
| "Identical agents give a unique symmetric Nash equilibrium" | every split of $g^o$ is an equilibrium | infinitely many |
| Planner condition $V_i' = 1$ | the planner adds the benefits | $V_1' + V_2' = 1$ |
| Saying both agents contribute when tastes differ | the agent who wants less is already satisfied | only the keener agent pays |
| "More agents, more public good in equilibrium" | the Nash total stays at $g^o$ | the planner's total rises with $N$ |
