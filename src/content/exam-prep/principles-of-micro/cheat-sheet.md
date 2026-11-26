---
title: "Cheat Sheet (Lec 1–14)"
subject: principles-of-micro
type: reference
description: "Every key idea, formula, method and worked example from the 14 lectures, in exam order. Each topic: what it is, when the question wants it, and a worked example from the course."
course: Principles of Microeconomics
instructor: Dr. Yael Hadass
semester: 1
year: 1
order: 1
pinned: true
tags:
  - principles-of-micro
  - exam-prep
  - cheat-sheet
aliases:
  - Micro Cheat Sheet
  - Principles of Micro Cheat Sheet
---

> **The exam:** 20 multiple-choice questions, 5 points each, formula sheet allowed. Questions 1 to 5 are always **one linear market** (equilibrium, surplus, a tax or subsidy, deadweight loss, a price control). Solve that market once and reuse the numbers. The other 15 are mixed: elasticity, costs and the firm, shifts, externalities, trade, types of goods.
>
> **Convention everywhere:** price $P$ on the vertical axis, quantity $Q$ on the horizontal ("Ps before Qs"). Costs are **economic** costs (explicit plus implicit) unless told otherwise.

---

## 0. Method picker: what does this question want?

| You see in the question… | Do this | Section |
|---|---|---|
| Two equations $P = a - bQ$ and $P = c + dQ$ | Set them equal: $Q^*$, then $P^*$ | §8 |
| "Consumer / producer surplus" | Triangles: $\tfrac12 \times Q^* \times$ height | §8 |
| "Tax of $T$ on sellers / buyers" | Shift supply **up** by $T$ (or demand down), re-solve, $P_B - P_S = T$ | §10 |
| "Subsidy of $s$" | Shift supply **down** by $s$, $P_S - P_B = s$ | §10 |
| "Deadweight loss" | $\tfrac12 \times T \times (Q^* - Q_T)$ | §10 |
| "Price ceiling / floor at…" | Binding? Ceiling below $P^*$, floor above. Plug the price into both curves | §9 |
| "Elasticity is −1.2, find the new price" | Midpoint method, solve for $P_2$ | §6 |
| "Raised the price and revenue rose / fell" | $TR = P \times Q$, compare with old TR (elastic vs inelastic) | §6 |
| MPB, MPC, MSC (or MSB) equations | Market: MPB = MPC. Optimum: MSB = MSC. Subtract | §11 |
| "Pigouvian tax to bring Q down to…" | Tax = demand price minus supply price **at the target Q** | §11 |
| "Hours needed per unit" table, two countries/people | Absolute: fewer hours. Comparative: lower opportunity cost | §2 |
| Three worker types, build a PPF | Rank by opportunity cost, switch the cheapest first (bow-shaped) | §2 |
| "Left a job paying… to start a business" | Economic profit = accounting profit − implicit costs | §4 |
| ATC, AVC, FC, find output or AFC | $TC = FC + VC$, $ATC = AFC + AVC$, divide by $Q$ | §4 |
| Competitive firm, price given, cost table | Produce where $P = MC$ (rising MC); check $P \ge \min AVC$ | §7 |
| "Long-run equilibrium" of a competitive firm | $P = MR = MC = \min ATC$, zero economic profit | §7 |
| Two events at once (and maybe starting equations) | One of $P$, $Q$ is certain, the other ambiguous | §5 |
| Subsidy only for some producers/buyers (south, young couples) | Three markets: the subsidised group, the rest, the total | §10 |
| "What type of good is…" | Excludable? Rival? Four-cell table | §12 |

---

## 1. Lec 01 — Ten principles and thinking at the margin

**Economics** is how society manages **scarce** resources. **Micro** studies households, firms and markets; **macro** studies the economy as a whole.

| # | Principle | Exam use |
|---|---|---|
| 1 | People face tradeoffs (efficiency vs equality) | Redistribution shrinks the pie |
| 2 | Cost = what you give up: [[Opportunity Cost]] | The **best forgone** alternative, not the sum of all |
| 3 | Rational people think **at the margin** | Act if $MB > MC$. **Sunk costs are irrelevant** |
| 4 | People respond to [[Incentive]]s | Change costs/benefits, behaviour changes |
| 5 | Trade can make everyone better off | Gains from trade (§2) |
| 6 | Markets usually organise activity well | Prices and the [[Invisible Hand]] |
| 7 | Governments can sometimes improve outcomes | [[Market Failure]]: externalities, market power |
| 8–10 | Macro | Productivity, money printing → inflation, inflation–unemployment tradeoff |

> [!example] The Mustang (marginal thinking)
> Already spent 1,000 on repairs (sunk). Transmission repair costs 600. **A:** value 6,500 repaired vs 5,700 not → MB = 800 > 600, **repair**. **B:** 6,000 vs 5,500 → MB = 500 < 600, **don't**. The 1,000 never enters.

---

## 2. Lec 02 — PPF, opportunity cost, comparative advantage

**PPF** = all combinations of two goods an economy can make using all its resources. **On** the line: feasible and efficient. **Inside**: feasible, inefficient. **Outside**: infeasible.

$$
\text{Linear PPF: } Y = b - aX, \qquad \lvert \text{slope} \rvert = \text{OC of one more unit of the } X\text{-axis good}
$$

| Concept | Question it answers | Test |
|---|---|---|
| [[Absolute Advantage]] | Who is more productive? | Fewer **hours per unit** |
| [[Comparative Advantage]] | Who should specialise? | Lower **opportunity cost** |

- One producer can have absolute advantage in **both** goods, but (with two goods) comparative advantage in only **one**: the two OCs are reciprocals.
- **Gains from trade:** each specialises in its comparative advantage. The **terms of trade** must lie strictly **between** the two opportunity costs, or one side gains nothing.

> [!example] Home and Foreign (10 hours each)
> Home: 1 hour per orange, ½ hour per pear → OC(orange) = 2 pears, OC(pear) = ½ orange. Foreign: ½ hour per orange, 1 hour per pear → OC(orange) = ½ pear. Foreign specialises in oranges (20), Home in pears (20). Trade at 1:1 (between ½ and 2): both consume outside their PPFs.

> [!warning] Hour versus unit
> "One more **hour** on pears" costs Home 1 orange. "One more **pear**" costs ½ orange. Read which one the question asks.

### Bow-shaped PPF (workers differ)

1. Compute each worker's OC of the $X$ good (in $Y$ given up).
2. Endpoints: everyone on $X$, everyone on $Y$.
3. Move workers into $X$ **lowest OC first**. The slope gets steeper: **increasing opportunity cost**, so the PPF bows out.

> [!example] Exam 2022 Moed B, Q9
> C: 15 X or 30 Y (OC 2). A: 20 X or 60 Y (OC 3). B: 30 X or 150 Y (OC 5). Max X = 65, max Y = 240. Put the two **least efficient in X** (highest OC: B and A) on Y and C on X: **X = 15, Y = 210**. Not linear (three different slopes).

**Economic growth** = PPF shifts **out**. Better technology in one good only: the frontier **pivots** on that good's axis.

---

## 3. Lec 03 & 04 — Demand, supply, equilibrium

**Law of demand:** $P \uparrow \Rightarrow Q^d \downarrow$, ceteris paribus. Why it slopes down: substitution effect, income effect, diminishing marginal utility.
**Law of supply:** $P \uparrow \Rightarrow Q^s \uparrow$. Supply slopes up because cost per extra unit rises ([[Diminishing Marginal Product]]).

| | Movement **along** the curve | **Shift** of the curve |
|---|---|---|
| Cause | The good's **own price** only | Any non-price determinant |
| Name | Change in quantity demanded/supplied | Change in demand/supply |

| Demand shifters | Effect |
|---|---|
| Income, [[Normal Good]] | $I \uparrow \Rightarrow D \uparrow$ (right) |
| Income, [[Inferior Good]] | $I \uparrow \Rightarrow D \downarrow$ (left) |
| Price of a **substitute** rises | $D \uparrow$ |
| Price of a **complement** rises | $D \downarrow$ |
| Tastes, expectations (expect a price rise → buy now), number of buyers | as stated |

| Supply shifters | Effect |
|---|---|
| Input price falls (wages, raw materials) | $S \uparrow$ (right / down) |
| Better technology | $S \uparrow$ |
| Expect higher price later | sellers hold back now: $S \downarrow$ |
| Number of sellers | more sellers, $S \uparrow$ |

- **Market demand/supply** = **horizontal** sum: add quantities at each price, never prices.
- Exceptions that slope up: **Giffen** (poor household, inferior staple: potatoes, rice) and **Veblen** (luxury, status: diamonds).
- **Perfect competition:** many buyers and sellers, identical product, perfect information, everyone is a **price taker**, free entry and exit.

**Equilibrium:** $Q^d = Q^s$. Above $P^*$: surplus (excess supply) pushes price down. Below $P^*$: shortage pushes price up.

---

## 4. Lec 05 & 14 — Costs of production

$$
\text{Economic profit} = TR - (\text{explicit} + \text{implicit costs}), \qquad \text{Accounting profit} = TR - \text{explicit costs}
$$

So **accounting − economic profit = implicit costs** (forgone salary, forgone rent on your own property, forgone interest on your own money).

> [!example] Exam 2022 Moed A, Q3 (Mel)
> Leaves a 60,000 job; uses her own studio that could rent for 6,000/month. Implicit costs = 60,000 + 12 × 6,000 = **132,000** = the gap between the two profits.

> [!example] Caroline's cookies (Lec 05)
> Needs 100,000; savings earn 5%. All from savings: accounting cost 100,000, economic 105,000. Half loan at 5%: accounting 102,500, economic still **105,000**. The economic cost doesn't depend on financing.

**Production:** [[Marginal Product]] $MP = \Delta Q / \Delta L$. With fixed capital it eventually **falls** (diminishing marginal product: 50, 40, 30, 20, 10 in the factory table). Diminishing MP is why MC rises.

| Measure | Formula | Shape |
|---|---|---|
| Total cost | $TC = FC + VC$ | rising |
| AFC | $FC/Q$ | always falling |
| AVC | $VC/Q$ | U or rising |
| ATC | $TC/Q = AFC + AVC$ | **U-shaped** |
| MC | $\Delta TC / \Delta Q$ | eventually rising |

> [!tip] The three rules (true for all firms)
> MC < ATC → ATC falling. MC > ATC → ATC rising. **MC crosses ATC (and AVC) at their minimum.** GPA analogy: your next grade (MC) pulls your average (ATC). ATC − AVC = AFC, so the two curves converge as Q grows.

> [!example] AFC from partial data (Exam 2023 Moed A, Q14)
> At Q = 20: ATC = 250, VC = 4,000. TC = 20 × 250 = 5,000, so FC = 1,000. AFC at Q = 30 = 1,000/30 ≈ **33**. FC never changes with Q: find it once.

**Long run:** everything variable. LRATC falling = **economies of scale**; flat = constant returns; rising = diseconomies.

---

## 5. Lec 07 — Comparative statics (shifts)

**Four steps:** (1) draw the start, (2) which curve does the event hit, (3) shift it (one at a time), (4) read the new $P$ and $Q$. The price change that follows is a **movement along the other curve**.

| Event | Shift | $P$ | $Q$ |
|---|---|---|---|
| Supply falls (input cost up, drought, worker ban) | S left (up) | ↑ | ↓ |
| Supply rises (tech, cheaper inputs) | S right (down) | ↓ | ↑ |
| Demand falls (cheaper substitute, bad news) | D left | ↓ | ↓ |
| Demand rises (health study, income up for a normal good) | D right | ↑ | ↑ |

**Both curves shift:** one variable is certain, the other is ambiguous (depends on the sizes).

| Shifts | $P$ | $Q$ |
|---|---|---|
| D right, S left | ↑ certain | ambiguous |
| D left, S right | ↓ certain | ambiguous |
| D right, S right | ambiguous | ↑ certain |
| D left, S left | ambiguous | ↓ certain |

> [!example] Exam 2022 Moed A, Q10 (coffee)
> $Q_s = -4 + 8P$, $Q_d = 26 - 2P$ → $30 = 10P$, $P^* = 3$, $Q^* = 20$. Hurricane (S left) + income up for a normal good (D right) → price **> 3** for sure, quantity ambiguous. With equations, the answer is "price above/below the old $P^*$" or "quantity above/below the old $Q^*$", so always solve the starting equilibrium first.

> [!warning] Inferior goods flip the income effect
> Potatoes (inferior) + income falls → demand **rises**. Add better picking machines (S right) → quantity certain ↑, price ambiguous (Exam 2023 Moed A, Q6).

---

## 6. Lec 08 — Elasticity

$$
E_d = \frac{\%\Delta Q^d}{\%\Delta P}, \qquad \text{midpoint: } \%\Delta Q = \frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}, \quad \%\Delta P = \frac{P_2 - P_1}{(P_1 + P_2)/2}
$$

The midpoint method gives the **same answer in both directions** (A→B and B→A). Use it unless told otherwise.

| $\lvert E_d \rvert$ | Name | Curve | Price ↓ → TR | Price ↑ → TR |
|---|---|---|---|---|
| 0 | perfectly inelastic | vertical | ↓ | ↑ |
| < 1 | inelastic | steep | ↓ | ↑ |
| = 1 | unit elastic | | unchanged | unchanged |
| > 1 | elastic | flat | ↑ | ↓ |
| ∞ | perfectly elastic | horizontal | | |

> [!tip] Revenue rule
> **Elastic:** price and TR move in **opposite** directions. **Inelastic:** the **same** direction. To raise revenue by raising the price, you want **inelastic** demand.

**Finding a new price from an elasticity** (asked in 7 of 8 papers). Let $x = \%\Delta P$ (midpoint, as a decimal). Then:

$$
P_2 = P_1 \cdot \frac{2 + x}{2 - x}, \qquad \text{and likewise } Q_2 = Q_1 \cdot \frac{2 + y}{2 - y} \text{ for } y = \%\Delta Q
$$

> [!example] Exam 2021 Moed A, Q15
> $P = 15$, $Q = 350$, $E = -1.2$, want $Q$ up 75. $y = 75/387.5 = 0.1935$. $x = 0.1935/(-1.2) = -0.1613$. $P_2 = 15 \times 1.8387/2.1613 = 12.76 \approx$ **13**. (The simple-percentage method gives 12, which wasn't an option: check which method the options fit.)

> [!example] "Raised price, revenue rose" (Exam 2022 Moed A, Q7)
> Old TR = 100,000 × 100 = 10,000,000. New price 200,000. TR rose ⇒ $200{,}000 \cdot Q > 10{,}000{,}000$ ⇒ $Q > 50$.

- **Along a straight demand line** the slope is constant but elasticity is not: elastic at the top, unit at the midpoint, inelastic at the bottom (5.0, 1.0, 0.2 in the lecture).
- **More elastic when:** close substitutes, luxury, narrowly defined market, large budget share, long time horizon.

| Other elasticity | Formula | Sign |
|---|---|---|
| Income | $\%\Delta Q^d / \%\Delta I$ | + normal, − inferior |
| Cross-price | $\%\Delta Q_A / \%\Delta P_B$ | + substitutes, − complements |
| Supply | $\%\Delta Q^s / \%\Delta P$ | always +; more elastic in the long run |

---

## 7. Lec 06 — The competitive firm

Price taker: firm demand is **horizontal**, so $P = AR = MR$.

$$
\text{Profit} = TR - TC = (P - ATC)\times Q, \qquad \text{maximised where } MR = MC \;\Rightarrow\; P = MC \text{ (rising part of MC)}
$$

| Decision | Rule | Why |
|---|---|---|
| Short run: produce or **shut down** | Produce if $P \ge \min AVC$ | FC is sunk, only cover VC |
| Long run: stay or **exit** | Stay if $P \ge \min ATC$ | All costs avoidable |
| Entry | Enter if $P > ATC$ | Positive economic profit |

- **Short-run supply** = MC above min AVC. **Long-run firm supply** = MC above min ATC.
- With $\min AVC < P < ATC$, the firm **loses money but keeps producing**: the loss $(ATC - P)Q$ is smaller than FC.
- **Long-run market:** entry/exit pushes $P$ to $\min ATC$, economic profit to **zero** (accounting profit can still be positive). Long-run market supply is horizontal at $\min ATC$; demand up → short-run price ↑, then entry, price back down, **only quantity rises**.

> [!example] Long-run equilibrium (Exam 2022 Moed B, Q17)
> Q = 200, TR = 1,200, FC = 100. $P = 6 = MR = MC$. Long run: $ATC = P = 6$. $AFC = 100/200 = 0.5$, so $AVC = 5.5$. Answer: MC = 6, AVC = 5.5.

> [!example] Profit-max from a table (Lec 06)
> P = 12: MC runs 10, 8, 7, 6, 8, 9, 10, 11.9, 13.1… Produce while $MC \le P$: **Q = 8** (profit 11.1). If MC crosses P twice, take the crossing where MC is **rising**.

---

## 8. Lec 09 — Consumer and producer surplus

$$
CS = \tfrac12 \times Q^* \times \big(P_{\text{demand intercept}} - P^*\big), \qquad PS = \tfrac12 \times Q^* \times \big(P^* - P_{\text{supply intercept}}\big)
$$

- CS per buyer = WTP − price. PS per seller = price − MC. The last unit traded earns zero surplus.
- **Total surplus** = CS + PS = area between D and S out to $Q$. The price only **splits** it.
- Free-market equilibrium **maximises** total surplus: efficient production (lowest-cost sellers), efficient allocation (highest-WTP buyers), efficient quantity ($MB = MC$). Efficient ≠ fair.
- When price rises, CS falls for **two** reasons: remaining buyers pay more (rectangle) and some buyers leave (triangle).

> [!example] Olive oil (Exam 2025 Moed A, Q1–Q2)
> $D: P = 60 - 0.5Q$, $S: P = 30 + 0.25Q$. $30 = 0.75Q$ → $Q^* = 40$, $P^* = 40$. $CS = \tfrac12 \times 40 \times 20 = 400$, $PS = \tfrac12 \times 40 \times 10 = 200$. The steeper side (demand here) gets the taller triangle.

---

## 9. Lec 10 — Price controls

| | Ceiling (legal max) | Floor (legal min) |
|---|---|---|
| Binding when | **below** $P^*$ | **above** $P^*$ |
| Result | **Shortage**, $Q_D > Q_S$ | **Surplus**, $Q_S > Q_D$ |
| Quantity traded | $Q_S$ (short side) | $Q_D$ (short side) |
| Example | rent control | minimum wage → unemployment |
| Long run | shortage **grows** (curves more elastic) | surplus grows |

- Binding control → **DWL** (lost trades). A rectangle is **transferred** (ceiling: sellers → buyers; floor: buyers → sellers). One side can gain, total surplus always falls.
- Side effects of rent ceilings: less maintenance/renovation, black markets, queues.

> [!example] Olive oil ceiling at 35 (Exam 2025 Moed A, Q5)
> 35 < 40, binding. Demand: $35 = 60 - 0.5Q$ → $Q_d = 50$. Supply: $35 = 30 + 0.25Q$ → $Q_s = 20$. **Shortage of 30.**

---

## 10. Lec 11 — Taxes and subsidies

A per-unit tax $T$ drives a **wedge**: buyers pay $P_B$, sellers keep $P_S$, and $P_B - P_S = T$.

**Recipe (tax on sellers):**
1. New supply: $P = c + dQ + T$ (shift up by $T$).
2. Set equal to demand → $Q_T$.
3. $P_B$ from **demand** at $Q_T$; $P_S = P_B - T$ (or from the **original** supply at $Q_T$).
4. Burden: buyers $P_B - P^*$, sellers $P^* - P_S$.

$$
\text{Revenue} = T \times Q_T, \qquad DWL = \tfrac12 \times T \times (Q^* - Q_T)
$$

> [!example] Olive oil, tax of 2 on sellers (Exam 2025 Moed A, Q3–Q4)
> $60 - 0.5Q = 32 + 0.25Q$ → $Q_T = 37.33$. $P_B = 41.33$, $P_S = 39.33$ (gap = 2 ✓). Buyers bear 1.33, sellers 0.67 (demand is steeper). Revenue = 74.67. $DWL = \tfrac12 \times 2 \times 2.67 = 2.67$.

| Welfare with a tax | Before | After |
|---|---|---|
| CS | A + B + C | A |
| PS | D + E + F | F |
| Tax revenue | 0 | B + D |
| Total | A…F | A + B + D + F → **DWL = C + E** |

- **Statutory incidence doesn't matter:** taxing buyers or sellers gives the same $Q_T$, $P_B$, $P_S$.
- **Economic incidence:** the **less elastic** side bears more. Perfectly inelastic demand → buyers pay all of it and there is no DWL.
- **DWL is bigger when demand or supply is more elastic.** To raise revenue with little DWL, tax inelastic goods (cigarettes, antibiotics, gasoline). To cut consumption the most, tax elastic ones. DWL grows faster than the tax (both sides of the triangle grow), so many small taxes beat one big one.
- **Laffer curve:** past some rate, higher tax rates **lower** revenue.

**Subsidy** = negative tax. Supply shifts **down** by $s$: $P = c + dQ - s$. Then $P_S - P_B = s$, $Q$ rises. The less elastic side captures more of it. A subsidy also creates DWL (units whose cost exceeds their value), unless it corrects a positive externality.

> [!example] Subsidy for one group only (Exam 2022 Moed B, Q6)
> Subsidy to **southern** pepper farmers. Three markets: national supply shifts right, **market price falls**, total quantity **rises**. Unsubsidised farmers see only the lower price: produce **less**. Southern farmers receive market price + subsidy (higher than before): produce **more**. Same logic for buyer-side subsidies (young couples, new immigrants): the subsidised group buys more at a lower net price, everyone else faces a **higher** market price and buys less.

---

## 11. Lec 12 — Externalities

An **externality** is the uncompensated effect of a transaction on a bystander.

$$
MSC = MPC + \text{external cost}, \qquad MSB = MPB + \text{external benefit}
$$

| | Negative (pollution, smoking) | Positive (education, vaccines, R&D) |
|---|---|---|
| Social curve | MSC above MPC (supply side) | MSB above MPB (demand side) |
| Market vs optimum | $Q_{market} > Q_{opt}$: **overproduced** | $Q_{market} < Q_{opt}$: **underproduced** |
| Fix | **Pigouvian tax** = external cost | **Corrective subsidy** = external benefit |

> [!example] Market vs optimum gap (Exam 2022 Moed A, Q6)
> MPB: $P = 80 - 10Q$, MPC: $P = 10Q$, MSC: $P = 10Q + 20$. Market: $80 - 10Q = 10Q$ → $Q = 4$. Optimum: $80 - 10Q = 10Q + 20$ → $Q = 3$. **Gap = 1.**

> [!example] Tax or subsidy to hit a target quantity (Exam 2022 Moed A, Q18)
> Want $Q = 1300$. Demand price there: $675 - 0.5(1300) = 25$. Supply price: $-225 + 0.25(1300) = 100$. Gap 75: sellers need more than buyers pay, so it's a **subsidy of 75**. For a Pigouvian tax it's the other way round (buyers' price above sellers').

| Policy tool | Government fixes | Notes |
|---|---|---|
| Command-and-control | quantity or technology, firm by firm | needs detailed industry knowledge; no reward for extra cuts |
| Corrective tax | the **price** of pollution | cuts happen where cheapest; ongoing incentive to innovate |
| Tradable permits | the **quantity** of pollution | market sets the price; better when the right tax is unknown |

Tax and permits are **equivalent** when set consistently. **Coase theorem:** with costless bargaining, private parties reach the efficient outcome **whatever the initial rights**; fails with transaction costs and many parties (free riders).

---

## 12. Lec 13 — Public goods and international trade

| | **Rival** | **Not rival** |
|---|---|---|
| **Excludable** | Private goods (pizza, cars) | Club goods (cable TV, toll roads, ATC funded by user fees) |
| **Not excludable** | Common resources (fish, clean air) | Public goods (defence, tsunami siren, fireworks/air show) |

- **Public goods:** free-rider problem → **under-provided**. Government provides if benefit > cost, funded by tax. Hard part: measuring the benefit.
- **Common resources:** tragedy of the commons → **over-used**. Government limits use.

**Trade (world price $P_W$):**

| | Exporter ($P_W > P_{domestic}$) | Importer ($P_W < P_{domestic}$) |
|---|---|---|
| Trade | exports $= Q^S - Q^D$ | imports $= Q^D - Q^S$ |
| Consumers | lose | gain |
| Producers | gain | lose |
| Total surplus | **rises** | **rises** |

- **Tariff:** domestic price rises by the tariff, imports fall, producers gain, government gets revenue (imports × tariff), consumers lose more: **DWL = two triangles** (overproduction + underconsumption).
- **Import quota:** same price, quantity and DWL as the equivalent tariff, but the revenue rectangle goes to **licence holders**, not the government.

---

## 13. The one-page formula box

| | |
|---|---|
| Equilibrium | $a - bQ = c + dQ \Rightarrow Q^* = \dfrac{a - c}{b + d}$ |
| CS / PS | $\tfrac12 Q^*(a - P^*)$ / $\tfrac12 Q^*(P^* - c)$ |
| Tax $T$ on sellers | $Q_T = \dfrac{a - c - T}{b + d}$, $P_B - P_S = T$ |
| DWL of a tax | $\tfrac12 \, T \, (Q^* - Q_T)$ |
| Buyers' share of $T$ | $\dfrac{b}{b + d}$ (steeper demand → bigger share) |
| Midpoint % change | $\dfrac{x_2 - x_1}{(x_1 + x_2)/2}$ |
| New price from $E$ | $P_2 = P_1 \dfrac{2 + x}{2 - x}$ |
| Profit | $TR - TC = (P - ATC)Q$ |
| Costs | $TC = FC + VC$, $ATC = AFC + AVC$, $MC = \Delta TC/\Delta Q$ |
| Shutdown / exit | $P < \min AVC$ / $P < \min ATC$ |
| Econ vs acc. profit | difference = implicit costs |
