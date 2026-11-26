---
title: "Exam Question Playbook"
subject: principles-of-micro
type: reference
description: "Every question type the exam asks, with the steps to answer it and a worked model answer from a real past paper."
course: Principles of Microeconomics
semester: 1
year: 1
order: 4
tags:
  - principles-of-micro
  - exam-prep
  - playbook
---

> **Game plan for the 20 MCQs.** Solve the market block (Q1 to Q5) in one go on scrap paper: $Q^*$, $P^*$, CS, PS, then the tax. Write the numbers in a box and reuse them. Then do the short conceptual questions, and leave the long word problems (economic profit, PPF from three workers) for last. Many options are built from a single slip (forgetting the ½, swapping buyer and seller prices), so after you get a number, check it against the trap list.

---

## A · Equilibrium and surplus from two lines

**Steps**
1. Write both curves as $P = \dots$ (rearrange if given as $Q = \dots$).
2. Set equal, solve $Q^*$; substitute for $P^*$.
3. $CS = \tfrac12 Q^*(\text{demand intercept} - P^*)$, $PS = \tfrac12 Q^*(P^* - \text{supply intercept})$.

> [!example] Olive oil, 2025 Moed A Q1–Q2
> $60 - 0.5Q = 30 + 0.25Q$ → $Q^* = 40$, $P^* = 40$. $CS = \tfrac12(40)(20) = 400$. $PS = \tfrac12(40)(10) = 200$. Answer (a).

---

## B · Per-unit tax: new prices, burden, DWL, revenue

**Steps**
1. Tax on sellers: add $T$ to the supply intercept. Tax on buyers: subtract $T$ from the demand intercept. (Either gives the same answer.)
2. Solve the new intersection → $Q_T$.
3. $P_B$ = demand at $Q_T$. $P_S = P_B - T$.
4. Check $P_B > P^* > P_S$ and $P_B - P_S = T$.
5. $DWL = \tfrac12 \, T \, (Q^* - Q_T)$. Revenue $= T \cdot Q_T$. New $CS$, $PS$ use $P_B$ and $P_S$ as the heights.

> [!example] Olive oil, 2025 Moed A Q3–Q4
> $60 - 0.5Q = 32 + 0.25Q$ → $Q_T = 37.33$, $P_B = 41.33$, $P_S = 39.33$. $DWL = \tfrac12(2)(2.67) = 2.67$. None of the printed options matched all three numbers exactly, so the answer was "all wrong": don't be afraid to pick it once your numbers check out.

> [!example] Apples, 2023 Moed A Q5: surplus after a tax
> After the tax, CS is the triangle from the demand intercept down to $P_B$, PS from $P_S$ down to the supply intercept, both with base $Q_T$. Revenue is the rectangle $T \cdot Q_T$. Check: before-total − after-total (CS + PS + revenue) = DWL.

---

## C · Subsidy on the market, or for one group only

**On the whole market:** subtract $s$ from the supply intercept, re-solve. $P_S - P_B = s$, quantity rises, cost to government $= s \cdot Q_s$.

**For one group (the "three markets" question)**
1. Draw three panels: the subsidised group, the unsubsidised group, the total market.
2. The subsidised group's curve shifts (supply right for producers, demand right for buyers).
3. Total market curve shifts the same way → move the market price.
4. Unsubsidised group: faces the new market price only.
5. Subsidised group: pays (or receives) the market price **net of the subsidy**.

> [!example] Young couples' apartment subsidy (2023 Moed B Q20, 2022 Moed A Q13)
> Couples' demand shifts right → market demand right → market price **up**, total sold **up**. Other buyers pay the higher price and buy **less**. Couples pay market price − subsidy (lower than before) and buy **more**.

---

## D · Price ceiling or floor

**Steps**
1. Binding? Ceiling must be **below** $P^*$, floor **above**. If not binding, the answer is the free-market equilibrium.
2. Plug $\bar P$ into demand and supply to get $Q_d$ and $Q_s$.
3. Ceiling → shortage $Q_d - Q_s$. Floor → surplus $Q_s - Q_d$. Quantity traded = the smaller one.

> [!example] Olive oil ceiling 35, 2025 Moed A Q5
> $Q_d = 50$, $Q_s = 20$, shortage 30 → (a).

> [!example] Rent ceiling, 2022 Moed A Q12
> "Apartments are less likely to be renovated" is right: landlords get a lower price and the shortage means they can still rent out a run-down flat. A binding ceiling **does** create black-market pressure, so "no reason for a black market" is wrong.

---

## E · Externality: market vs optimum, and the corrective tax

**Steps**
1. Market quantity: $MPB = MPC$.
2. Optimal quantity: $MSB = MSC$ (replace whichever curve the question gives a social version of).
3. Difference = the answer to "what is the gap".
4. Tax or subsidy to reach a target $Q$: evaluate demand and supply **at that Q**; the gap is the per-unit tax (demand above supply) or subsidy (supply above demand).

> [!example] Jeans Pigouvian tax, 2022 Moed B Q5
> Target $Q = 15$ (thousand). $P_D(15) = 350 - 30 = 320$, $P_S(15) = 250 + 30 = 280$. Tax = **40**.

> [!example] Vaccination, 2023 Moed B Q13
> MPB $120 - 20Q$, MPC $20Q$ → $Q_m = 3$. MSB $160 - 20Q$ = MPC → $Q_o = 4$. Gap = **1** (underproduced; fix with a subsidy).

**Qualitative externality MCQs**: negative → overproduced → tax / permits / regulation; positive → underproduced → subsidy. Tariffs or sales taxes on polluting goods (fashion, 2023 Moed A Q17) also reduce the quantity, and vouchers for second-hand clothes cut new production: "all of the above" can be right.

---

## F · Elasticity: find the new price or quantity

**Steps**
1. Compute the known percentage change by the **midpoint** method.
2. Divide or multiply by $E$ to get the other percentage change.
3. Solve for the unknown endpoint: $P_2 = P_1 \cdot \dfrac{2 + x}{2 - x}$.
4. Sanity check: demand slopes down, so more quantity needs a **lower** price.

> [!example] 2022 Moed A Q2
> $P = 25$, $Q = 450$, $E = -0.8$, raise $Q$ by 25. $y = 25/462.5 = 0.0541$. $x = 0.0541/(-0.8) = -0.0676$. $P_2 = 25 \times 1.9324/2.0676 = 23.37 \approx 23$ → option 1 (23). The question asked for the **new price**; if it asks "by how much must price change", the answer is about 2.

> [!example] Unit elastic, 2023 Moed A Q10
> $E = -1$, $P$: 6 → 4. Midpoint $x = -2/5 = -0.4$, so $y = 0.4$. $Q_2 = 8000 \times 2.4/1.6 = 12{,}000$. Check: $TR$ = 48,000 both times (unit elastic keeps TR fixed).

---

## G · Elasticity and revenue

**"Raised the price, revenue rose (fell). Possible new quantity?"**
Old $TR = P_1 Q_1$. New $TR = P_2 Q_2$. Rose: $Q_2 > P_1Q_1/P_2$. Fell: $Q_2 < P_1Q_1/P_2$.

> [!example] Milk, 2022 Moed B Q15
> $20 \times 200 = 4000$. New price 27, revenue fell → $Q_2 < 4000/27 = 148.1$. Any option below 148.

**"Wants to raise revenue by raising price"**: works only if demand is **inelastic** ($\lvert E\rvert < 1$). With $\lvert E\rvert = 1.5$ (2023 Moed A Q18) the plan fails because the quantity falls by **more** (in %) than the price rises.

---

## H · Which tax gives the smallest (largest) DWL?

The more **inelastic** the good, the smaller the DWL. Necessity with no substitutes (antibiotics, insulin, gasoline in the short run, cigarettes) → small DWL. Narrow market with many substitutes (one soda brand, luxury handbags) → large DWL.

---

## I · Shifts: single events and event sequences

**Steps**
1. For each event ask: own price (movement) or other factor (shift)? Which curve?
2. Direction: for supply, input costs ↑ / expected future price ↑ → left; technology ↑ → right. For demand, substitute price ↑ / income ↑ (normal) / expected future price ↑ → right.
3. Track the point step by step on the grid the question gives.

> [!example] Gasoline supply, 2023 Moed A Q7
> (1) technology ↑ → supply shifts **right** one line; (2) gasoline price ↑ → move **along** up one point; (3) producers expect prices to **fall** → sell more now, supply right; (4) input price ↑ → supply left. Net: one line right and one point up from A.

---

## J · Two shocks at once (with starting equations)

**Steps**
1. Solve the starting equilibrium ($P^*$, $Q^*$). The options are phrased relative to these.
2. Direction of each shift (watch inferior goods and complements).
3. Same-direction shifts: $Q$ certain. Opposite: $P$ certain.

> [!example] Peanut butter, 2022 Moed B Q11
> $Q_s = -10 + 16P$, $Q_d = 30 - 4P$ → $P^* = 2$, $Q^* = 22$. Raw peanuts dearer → S left. Jelly (complement) cheaper → D right. Price certainly **> 2**; quantity ambiguous.

---

## K · Comparative advantage and the PPF

**Steps**
1. Convert to **opportunity costs**: OC(X) = hours per X ÷ hours per Y (from an hours table) or Y-max ÷ X-max (from an output table).
2. Absolute advantage: fewer hours (or more output). Comparative: lower OC.
3. Three or more workers: rank by OC(X), assign the lowest-OC ones to X first. Different OCs → bow-shaped, not linear.

> [!example] China vs Russia, 2022 Moed B Q12
> Hours per table / chair: China 8 / 3, Russia 4 / 2. Russia has absolute advantage in **both**. OC(table): China 8/3 = 2.67 chairs, Russia 4/2 = 2 chairs → Russia has comparative advantage in **tables**, China in **chairs**.

---

## L · Economic vs accounting profit

**Steps**
1. Revenue: price × quantity over the **period asked** (watch months vs years: 52 weeks, 12 months).
2. Explicit costs = cash paid. Implicit = forgone salary + forgone rent on own property + forgone interest.
3. Difference between the two profits = implicit costs. Zero economic profit ⇔ revenue = explicit + implicit.

> [!example] David's tutoring, 2023 Moed A Q9
> Implicit: 12 × 4,000 salary + 12 × 1,500 rent = 66,000. Explicit: 50,000. Zero economic profit: $200h = 116{,}000$ → $h = 580$ hours. Answer (A).

---

## M · Cost arithmetic (AFC, ATC, AVC)

**Steps:** $TC = ATC \times Q$, $VC = AVC \times Q$, $FC = TC - VC$ (and FC is the same at every Q). Then $AFC = FC/Q$ at the new Q.

> [!example] 2023 Moed B Q8
> At Q = 4: TC = 1000, AVC = 50 → VC = 200, FC = 800. AFC at Q = 10 = **80**.

---

## N · Competitive firm: output, shutdown, long run

- **From a table:** compute MC; produce up to the last unit with $MC \le P$.
- **From a diagram with downward-sloping demand** (2022 Moed B Q14): MR = MC gives Q, read P off demand, compare P with ATC (profit) and AVC (shutdown).
- **Long-run equilibrium:** $P = MR = MC = \min ATC$, zero economic profit; use $AFC = FC/Q$ and $AVC = ATC - AFC$.
- **Demand rises in a competitive industry** (toilet paper, 2022 Moed A Q19): short-run price ↑; firms enter; long-run price back to min ATC; long-run **quantity ↑**.

---

## O · Types of goods

Ask (1) can non-payers be kept out? (2) does my use leave less for you?

| Example from past papers | Type |
|---|---|
| Covid vaccine (2022 A Q1) | Private good (excludable, rival), with a positive externality |
| Air Force show over the beach (2024 A Q8) | Public good |
| Air traffic control funded by user fees (2021 A Q18) | Becomes excludable, non-rival: club good |
| US health care not state-provided (2023 A Q15) | Excludable and rival: private good |
| Food handed out free by a government (2022 B Q8) | Still rival (one meal, one person); being free doesn't make it a public good |
