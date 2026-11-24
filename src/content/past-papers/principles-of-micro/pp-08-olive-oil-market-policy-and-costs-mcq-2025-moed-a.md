---
title: "PP 08: 2025 Moed A — Worked Solutions"
topics: "Olive oil market, surplus, tax on sellers, deadweight loss, costs MCQs"
type: past-paper
status: worked-solution
exam: "Principles of Microeconomics, 2025 Moed A (March 2025)"
semester: 1
year: 1
course: "Principles of Micro"
instructor: Dr. Yael Hadass
tags:
  - principles-of-micro
  - past-paper
  - worked-solution
  - equilibrium
  - taxes
  - subsidies
  - price-controls
  - elasticity
  - externalities
  - ppf
  - costs-of-production
aliases:
  - PP08 Micro
  - Principles of Micro 2025 Moed A
  - March 2025 Moed A
subject: principles-of-micro
in_scope: true
---

# PP 08: 2025 Moed A — Worked Solutions

> Part of: [[Principles of Micro]]
> **Exam in Principles of Microeconomics, Moed A, March 2025** — Principles of Micro, Dr. Yael Hadass
> Builds on: [[Lec_02-PPF and Gains from Trade]], [[Lec_03-Perfect Competition and Demand]], [[Lec_04-Supply and Market Equilibrium]], [[Lec_05-Supply and Costs of Production]], [[Lec_06-Firms in Competitive Markets]], [[Lec_07-Comparative Statics]], [[Lec_08-Elasticity]], [[Lec_09-Welfare Consumer and Producer Surplus]], [[Lec_10-Price Controls]], [[Lec_11-Taxes]], [[Lec_12-Externalities]], [[Lec_13-Public Goods and International Trade]]

> [!info] Answer source
> This paper has an **official key**: the correct option is highlighted in the solution file, and I read each mark from the rendered pages. All 20 answers are the official ones, with the working expanded from the question data. Short official explanations exist for Q7, Q8, Q15 and Q18. This is **not** a tofes 0 paper. Nothing here is AI-solved. Two caveats are flagged: the official working for **Q18** contains an inverted figure (the answer still stands), and **Q3** and **Q6** have wording quirks.

> [!note] Money
> The paper writes some amounts with a dollar sign and others in NIS. They are plain currency units, so this note writes them as numbers or "USD" and "NIS".

## What this paper tests

20 multiple-choice questions, 5 points each, formula sheet allowed (notation: $TC = FC + VC$, $ATC = TC/Q$, $MC = \Delta TC / \Delta Q$, $AR = TR/Q = P$, midpoint method). The question groups:

1. **Q1 to Q5**: one linear market (olive oil, demand $P = 60 - 0.5Q$, supply $P = 30 + 0.25Q$). Equilibrium, surplus, a tax on sellers, deadweight loss, a price ceiling. **Solve it once and reuse it.** The exam says so itself.
2. **Q14, Q16**: taxes and subsidies on a market with linear curves (a Pigouvian tax for an externality, then a subsidy and its deadweight loss).
3. **Q6, Q8, Q11**: qualitative policy effects (subsidy, who bears a tax, loosening rent control).
4. **Q9, Q10, Q19**: shifts of supply and demand (substitutes, intermediate goods, two simultaneous shocks).
5. **Q12, Q17, Q20**: costs and the competitive firm (long-run zero profit, economic profit, naming the cost curves).
6. **Q13**: elasticity by the midpoint method and what it says about revenue.
7. **Q15, Q18**: comparative advantage and the bow-shaped PPF.
8. **Q7**: public goods (non-excludable and non-rival).

> [!tip] Intuition
> Every numerical question here is "set two lines equal, then read off prices": a tax or subsidy **shifts the supply curve by the per-unit amount**, and the buyer and seller prices differ by exactly that amount.

---

## The olive oil market (Q1 to Q5)

$$
\text{Demand: } P = 60 - 0.5Q \qquad \text{Supply: } P = 30 + 0.25Q
$$

## Q1 — Equilibrium

> [!question] Question
> Demand $P = 60 - 0.5Q$, supply $P = 30 + 0.25Q$ (P in NIS per bottle, Q in bottles). What are the equilibrium price and quantity?
> a. P = 40 NIS, Q = 40 bottles. b. P = 80, Q = 80. c. P = 36, Q = 42. d. All the other answers are wrong.

> [!success] Answer: a
> P = 40 NIS, Q = 40 bottles.

Set demand equal to supply:

$$
60 - 0.5Q = 30 + 0.25Q \;\Rightarrow\; 30 = 0.75Q \;\Rightarrow\; Q = 40
$$

$$
P = 60 - 0.5(40) = 40
$$

Check with supply: $30 + 0.25(40) = 40$. Option b has P = 80, which is above the demand intercept of 60, so no one would buy. Option c fails the check: demand at Q = 42 is 39, not 36. See [[Lec_04-Supply and Market Equilibrium]] and [[PS_04-Supply]].

![[PP08_q1_olive_oil_equilibrium_surplus.png|640]]

*The equilibrium at (40, 40). The blue triangle above the price line is consumer surplus, the red triangle below it is producer surplus (Q2).*

## Q2 — Consumer and producer surplus

> [!question] Question
> Which statement about consumer surplus (CS) and producer surplus (PS) is correct?
> a. CS = 400 and PS = 200. b. CS = 800 and PS = 400. c. PS equals CS. d. All the other answers are wrong.

> [!success] Answer: a
> CS = 400, PS = 200.

Each surplus is a triangle with base $Q = 40$ and height equal to the gap between the intercept and the equilibrium price.

> [!example] Working
> - Consumer surplus: demand intercept 60, price 40, height 20. $CS = \tfrac{1}{2} \times 40 \times (60 - 40) = 400$.
> - Producer surplus: price 40, supply intercept 30, height 10. $PS = \tfrac{1}{2} \times 40 \times (40 - 30) = 200$.

Option b doubles both (it forgets the one half). Option c is false because the two curves have different slopes: the steeper demand curve (slope 0.5 against 0.25) gives consumers the taller triangle. See [[Lec_09-Welfare Consumer and Producer Surplus]] and [[PS_09-Welfare]].

## Q3 — Tax on sellers: the post-tax prices

> [!question] Question
> The government taxes sellers 2 per bottle. Find the supply curve after the tax. Which statement is correct?
> a. Buyer pays 41.333, quantity 333.37, seller receives 39.333. b. Buyer pays 39.333, quantity 333.37, seller receives 41.333. c. Buyer pays 42.333, quantity 38.888, seller receives 39.33. d. All the other answers are wrong.

> [!success] Answer: d
> The correct values are buyer pays 41.33, seller receives 39.33, quantity 37.33, so none of a, b or c is fully right.

A tax of 2 on sellers raises the price they must **charge** by 2 at every quantity, so the supply curve shifts up:

$$
P = 30 + 0.25Q + 2 = 32 + 0.25Q
$$

Equate to demand:

$$
60 - 0.5Q = 32 + 0.25Q \;\Rightarrow\; 28 = 0.75Q \;\Rightarrow\; Q = 37.33
$$

$$
P_{\text{buyer}} = 60 - 0.5(37.33) = 41.33
$$

$$
P_{\text{seller}} = 41.33 - 2 = 39.33
$$

> [!warning] Why a, b and c fail
> Options a and b print the quantity as 333.37 (a typo for 37.33, but as written it is wrong; it is also far above the pre-tax quantity of 40, which is impossible after a tax). Option a also has the right prices but the wrong quantity, and b swaps buyer and seller prices (the buyer always pays **more** after a tax). Option c has the wrong buyer price (42.333) and the wrong quantity (38.888). So the answer is d.

> [!tip] Intuition
> Buyer price minus seller price equals the tax: $41.33 - 39.33 = 2$. Check this first on any tax question. The buyer bears 1.33 of the tax and the seller 0.67, because demand is steeper than supply in this market.

See [[Lec_11-Taxes]] and [[PS_11-Taxes]].

## Q4 — Deadweight loss of the tax

> [!question] Question
> What is the deadweight loss of the 2 tax? a. 2.6667 b. 1.3333 c. 3 d. All the other answers are wrong.

> [!success] Answer: a
> DWL = 2.6667.

The deadweight loss is the triangle between the demand and supply curves over the quantity lost to the tax. Its base is the tax (2) and its height is the fall in quantity, from 40 to 37.33.

> [!example] Working
> $$
> DWL = \tfrac{1}{2} \times \text{tax} \times \Delta Q = \tfrac{1}{2} \times 2 \times (40 - 37.33) = 2.667
> $$

![[PP08_q3_olive_oil_tax_dwl.png|640]]

*A 2 tax on sellers shifts supply up by 2. Quantity falls from 40 to 37.33. Buyers pay 41.33, sellers keep 39.33, and the shaded sliver is the deadweight loss.*

Option b (1.3333) is half the right answer: it divides by two a second time. Option c is not what the formula gives.

## Q5 — Price ceiling at 35

> [!question] Question
> No tax. The government sets a price ceiling P = 35. What are quantity demanded, quantity supplied, and is there a shortage or surplus?
> a. Qd = 50, Qs = 20, shortage of 30. b. Qd = 20, Qs = 50, surplus of 30. c. Qd = 30, Qs = 50, surplus of 20. d. All the other answers are wrong.

> [!success] Answer: a
> Qd = 50, Qs = 20, shortage of 30.

The ceiling (35) is below the equilibrium price (40), so it is **binding**. Plug P = 35 into each curve, solving for Q:

> [!example] Working
> - Demand: $35 = 60 - 0.5Q \Rightarrow Q_d = 50$.
> - Supply: $35 = 30 + 0.25Q \Rightarrow Q_s = 20$.
> - Quantity demanded exceeds quantity supplied: shortage $= 50 - 20 = 30$.

A ceiling below equilibrium always causes a shortage, never a surplus, so b and c are ruled out at once. See [[Lec_10-Price Controls]] and [[PS_10-Price Controls]].

![[PP08_q5_olive_oil_price_ceiling.png|640]]

*At the ceiling of 35, buyers want 50 bottles but sellers offer only 20, so 30 bottles are short.*

---

## Q6 — Subsidy to wheat farmers

> [!question] Question
> The government subsidises farmers per unit of wheat. Which best describes the likely effects?
> a. Lower price for consumers, higher quantity supplied, higher total revenue for farmers.
> b. Higher price for consumers, lower quantity supplied, higher total revenue for farmers.
> c. Higher price for consumers, lower quantity supplied, lower total revenue for farmers.
> d. All the other answers are wrong.

> [!success] Answer: a

A per-unit subsidy lowers producers' marginal cost, so the supply curve shifts **down (right)**. Along the demand curve this means a **lower market price** and a **higher quantity**. Farmers sell more units and receive the market price plus the subsidy on each, so their revenue rises. Options b and c have the price rising and the quantity falling, which is what a **tax** does, not a subsidy.

> [!warning] Wording
> "Total revenue for farmers" is only unambiguously higher if it includes the subsidy payment. Revenue from consumers alone (price times quantity) could rise or fall depending on the elasticity of demand. The key treats farmers' revenue as rising.

See [[Lec_11-Taxes]] (the subsidy section) and [[PS_11-Taxes]].

## Q7 — Non-excludable and non-rival goods

> [!question] Question
> Which good is non-excludable and non-rival? a. Public radio. b. Pizza at a restaurant. c. Cable television subscription. d. All the other answers are wrong.

> [!success] Answer: a
> Public radio.

A **public good** is both non-excludable (you cannot stop people using it) and non-rival (one person's use does not reduce another's).

> [!example] Test each option
> | Good | Excludable? | Rival? | Type |
> |---|---|---|---|
> | Public radio | No, a broadcast cannot be withheld from a listener | No, extra listeners cost nothing | Public good |
> | Pizza at a restaurant | Yes, you must pay | Yes, a slice eaten is gone | Private good |
> | Cable subscription | Yes, no payment means no access | No | Club good |

See [[Lec_13-Public Goods and International Trade]] and [[PS_13-Public Goods and International Trade]].

## Q8 — Who bears a tax on chocolate bars

> [!question] Question
> The tax on chocolate bars rises. Which is true?
> a. A bigger share of the burden falls on producers. b. A bigger share falls on consumers. c. There is no burden on consumers. d. All the answers are wrong.

> [!success] Answer: a

The burden falls mostly on the side of the market that is **less elastic** (the side that finds it harder to walk away). Chocolate is not a necessity and has many substitutes among snacks, so demand is elastic (above 1). Consumers can easily switch away; producers cannot easily lay off workers and sell machines. With demand more elastic than supply, **producers bear the bigger share**.

> [!warning] Reading the question
> The answer rests on the assumption (from the key) that demand is more elastic than supply. Option c is wrong in any case: with a downward-sloping demand curve and an upward-sloping supply curve, the burden is always shared.

See [[Lec_11-Taxes]], [[Lec_08-Elasticity]] and [[PS_11-Taxes]].

## Q9 — Hot chocolate, tea and water

> [!question] Question
> Tea and hot chocolate are substitutes. Water is an intermediate good in both. Which event causes a **definite decrease** in the equilibrium price of hot chocolate?
> a. Water price falls, tea price falls. b. Water price rises, tea price falls. c. Water price falls, tea price rises. d. All answers are wrong.

> [!success] Answer: a

Trace each event to a curve:

> [!example] Working
> - **Water price falls**: input cost of hot chocolate falls, so **supply shifts right**. Price falls.
> - **Tea price falls**: tea becomes cheaper, so some consumers switch away from hot chocolate. **Demand for hot chocolate shifts left**. Price falls.
> - Both shifts push the price **down**, so the fall is certain. (Quantity is ambiguous: supply right raises it, demand left lowers it.)

For the others, the two effects pull in opposite directions or both push the price up:

| Option | Supply effect on price | Demand effect on price | Net |
|---|---|---|---|
| a | down (water cheaper) | down (tea cheaper) | **definite fall** |
| b | up (water dearer) | down (tea cheaper) | ambiguous |
| c | down (water cheaper) | up (tea dearer) | ambiguous |

See [[Lec_07-Comparative Statics]] and [[PS_07-Comparative Statics]].

## Q10 — Avocados: two shocks at once

> [!question] Question
> April 2024 avocado market: demand $P = 50 - 0.25Q$, supply $P = \tfrac{1}{3}Q - 10$. In May: (I) a drought hits California avocado farms; (II) new studies publicise the health benefits of avocados. Which is correct?
> a. The price is now higher than 24. b. The price is now lower than 24. c. The quantity is higher than 102. d. All the other answers are wrong.

> [!success] Answer: a

First the starting point:

$$
50 - 0.25Q = \tfrac{1}{3}Q - 10 \;\Rightarrow\; 60 = \tfrac{7}{12}Q \;\Rightarrow\; Q \approx 102.86,\quad P \approx 24.29
$$

Then the shocks:

> [!example] Working
> - Drought: supply **shifts left**. Price up, quantity down.
> - Health news: demand **shifts right**. Price up, quantity up.
> - **Price** rises under both, so it is definitely above the old 24.29 and therefore above 24.
> - **Quantity** falls under the first shock and rises under the second, so it is ambiguous. That rules out c, which claims a definite quantity.

Option b is the opposite of the certain price rise. The whole question is the classic rule: when two shocks move one variable the same way it is certain, and when they oppose each other the other variable is ambiguous. See [[Lec_07-Comparative Statics]].

## Q11 — Easing rent control

> [!question] Question
> A city has rent control. After owners complain, the municipality sets the rent control price **closer to the market price**. What results?
> a. A smaller shortage. b. A bigger shortage. c. A surplus. d. All the answers are wrong.

> [!success] Answer: a

Rent control is a price ceiling set below equilibrium, which produces a shortage. The shortage is the gap between quantity demanded and quantity supplied at the controlled price. As the ceiling rises toward the equilibrium price, demand falls and supply rises, so **the gap narrows**. If the ceiling reached the market price, the shortage would vanish. It can never turn into a surplus, because the ceiling still sits at or below equilibrium. (Compare Q5, where the same logic gives a shortage of 30 at a ceiling of 35.) See [[Lec_10-Price Controls]].

## Q12 — Competitive firm in long-run equilibrium

> [!question] Question
> A firm is perfectly competitive in output and factor markets and in long-run equilibrium (profit is zero). Output is 100 units, total revenue is 600, fixed costs are 50. Which is true?
> a. MC = 6.00 and AVC = 5.50. b. MC = 5.50 and ATC = 5.50. c. MC = 6.00 and ATC = 5.50. d. All the answers are wrong.

> [!success] Answer: a
> MC = 6.00 and AVC = 5.50.

> [!example] Working
> - Price $= TR / Q = 600 / 100 = 6$.
> - A competitive firm maximises profit at $P = MC$, so $MC = 6$.
> - Zero profit means $TC = TR = 600$, so $ATC = 600 / 100 = 6$.
> - Variable cost $= TC - FC = 600 - 50 = 550$, so $AVC = 550 / 100 = 5.50$.

Option b gets MC wrong (it must equal the price) and option c says ATC is 5.50 (it is 6, equal to the price). In long-run competitive equilibrium $P = MC = ATC$, which is the check to remember. See [[Lec_06-Firms in Competitive Markets]], [[Lec_05-Supply and Costs of Production]] and [[PS_06-Firms in the Competitive Market]]. Cost definitions: [[_Principles of Micro Concepts#Average Total Cost|ATC]], [[_Principles of Micro Concepts#Average Variable Cost|AVC]], [[_Principles of Micro Concepts#Marginal Cost|MC]].

## Q13 — Elasticity by the midpoint method

> [!question] Question
> The price rises from USD 20 to USD 24, and quantity demanded falls from 150 to 120. Using the midpoint method, find the price elasticity of demand and say whether revenue rose, fell or stayed the same.
> a. Revenue decreased. b. Revenue increased. c. Revenue did not change. d. All the answers are wrong.

> [!success] Answer: a
> Revenue decreased.

Percentage changes with midpoint averages (formula sheet):

> [!example] Working
> - $\%\Delta Q = \dfrac{120 - 150}{(120 + 150)/2} = \dfrac{-30}{135} = -22.2\%$
> - $\%\Delta P = \dfrac{24 - 20}{(24 + 20)/2} = \dfrac{4}{22} = 18.2\%$
> - $|E_d| = 22.2 / 18.2 \approx 1.22$, which is **greater than 1 (elastic)**.

When demand is elastic, a price **rise** makes quantity fall proportionally more, so revenue falls. Check directly: before $20 \times 150 = 3000$, after $24 \times 120 = 2880$ (both in USD). Revenue fell by 120. See [[Lec_08-Elasticity]] and [[PS_08-Elasticity]].

## Q14 — Steel, pollution and a Pigouvian tax

> [!question] Question
> Steel demand $P = 200 - Q$, supply $P = Q - 20$. Pollution imposes an external cost of 30 per unit. The government taxes producers to internalise it. What is the new quantity, the buyer price and the seller price?
> a. Pbuyer = 105, Pseller = 75, Q = 95. b. 90, 70, 90. c. 90, 60, 85. d. All the answers are wrong.

> [!success] Answer: a
> Q = 95, Pbuyer = 105, Pseller = 75.

A tax equal to the external cost makes producers pay the full social cost, so the supply curve shifts up by 30:

$$
P = Q - 20 + 30 = Q + 10
$$

Equate to demand:

$$
200 - Q = Q + 10 \;\Rightarrow\; 190 = 2Q \;\Rightarrow\; Q = 95
$$

$$
P_{\text{buyer}} = 200 - 95 = 105, \qquad P_{\text{seller}} = 105 - 30 = 75
$$

> [!example] Check against the options
> The buyer-minus-seller gap must equal the tax of 30. Option b has a gap of only 20 (90 minus 70), so it fails. Options a and c both have a gap of 30, and c fails because at Q = 85 demand says P = 115, not 90. The no-tax equilibrium is $200 - Q = Q - 20$, so $Q = 110$, $P = 90$: the tax reduces quantity from 110 to 95.

![[PP08_q14_steel_externality_tax.png|640]]

*The tax lifts supply by 30. Quantity falls from 110 to 95, buyers pay 105 and sellers keep 75.*

See [[Lec_12-Externalities]] and [[PS_12-Externalities]].

## Q15 — Absolute and comparative advantage

> [!question] Question
> Output in one hour of work: Country A makes 12 kg of tomatoes or 4 kg of cucumbers; Country B makes 10 kg of tomatoes or 2 kg of cucumbers. Which statement is correct?
> a. B has both comparative and absolute advantage in tomatoes. b. A has a comparative advantage in tomatoes. c. B has both comparative and absolute advantage in cucumbers. d. All other answers are wrong.

> [!success] Answer: d

> [!example] Working
> - **Absolute advantage** (more output per hour): A beats B in both goods (12 > 10 and 4 > 2). B has an absolute advantage in neither.
> - **Opportunity cost of 1 kg of tomatoes**: A gives up $4/12 = 1/3$ kg of cucumbers. B gives up $2/10 = 1/5$ kg. B's is lower, so **B has the comparative advantage in tomatoes**.
> - Therefore **A has the comparative advantage in cucumbers** (the opportunity cost of one good is the inverse of the other).

Check the options: a is false (B has no absolute advantage). b is false (the comparative advantage in tomatoes is B's). c is false (B has no absolute advantage, and the comparative advantage in cucumbers is A's). So d. The trap is to assume the country with the comparative advantage must also be the more productive one. See [[Lec_02-PPF and Gains from Trade]] and [[PS_02-Interdependence and Trade]].

## Q16 — Subsidy on electric cars

> [!question] Question
> Demand $P = 100 - 2Q$, supply $P = Q + 20$. The government subsidises producers 30 per unit sold. Which is correct?
> a. Q = 36.67, Pconsumers = 26.67, Pproducers = 56.67, DWL = 150. b. Q = 16.67, 66.67, 36.67, DWL = 300. c. Q = 20, 60, 30, DWL = 100. d. All the other answers are wrong.

> [!success] Answer: a

The subsidy lowers producers' costs by 30 at every quantity, so supply shifts down:

$$
P = Q + 20 - 30 = Q - 10
$$

$$
100 - 2Q = Q - 10 \;\Rightarrow\; 110 = 3Q \;\Rightarrow\; Q = 36.67
$$

$$
P_{\text{consumers}} = 100 - 2(36.67) = 26.67, \qquad P_{\text{producers}} = 26.67 + 30 = 56.67
$$

Deadweight loss: without the subsidy $100 - 2Q = Q + 20$, so $Q = 26.67$ and $P = 46.67$. The subsidy pushes quantity past the efficient level by $36.67 - 26.67 = 10$ units.

$$
DWL = \tfrac{1}{2} \times 30 \times (36.67 - 26.67) = \tfrac{1}{2} \times 30 \times 10 = 150
$$

Option b has the wrong quantity (16.67 is below the no-subsidy level, as if a tax) and c is not the solution of the shifted equations. The check that settles it: the producer price minus the consumer price must equal the subsidy, $56.67 - 26.67 = 30$.

![[PP08_q16_electric_car_subsidy_dwl.png|640]]

*The subsidy shifts supply down by 30. Consumers pay 26.67 and producers receive 56.67 on 36.67 cars. The shaded triangle is the deadweight loss of 150.*

See [[Lec_11-Taxes]] and [[PS_11-Taxes]].

## Q17 — Economic profit

> [!question] Question
> Samantha leaves a marketing job paying USD 15,000 a year and starts a printing firm in a building she owns, which she could have rented out for USD 10,000 a year. Her costs for workers, materials, advertising and energy are USD 130,000. Total yearly revenue is USD 155,000. What is her economic profit?
> a. 0 b. 5,000 c. 20,000 d. All the other answers are wrong.

> [!success] Answer: a
> Economic profit is 0.

Economic profit subtracts **all opportunity costs**, explicit and implicit (formula sheet).

> [!example] Working
> - Explicit costs: 130,000.
> - Implicit costs: forgone salary 15,000 plus forgone rent 10,000 = 25,000.
> - Economic profit $= 155{,}000 - 130{,}000 - 25{,}000 = 0$.

> [!warning] Wording
> The question text says the revenue is of "her marketing company", but the numbers only work if 155,000 is the printing firm's revenue. Reading it as the printing firm's revenue gives the official 0.

Accounting profit (explicit costs only) would be $155{,}000 - 130{,}000 = 25{,}000$, which is why b and c look tempting. See [[Lec_05-Supply and Costs of Production]].

## Q18 — Bow-shaped PPF with three workers

> [!question] Question
> Type A makes 2 units of X or 3 units of Y; Type B makes 6 X or 3 Y; Type C makes 4 X or 12 Y. For a bow-shaped (efficient) PPF, starting from all three producing Y, in what order are workers moved to X?
> a. B, A, C. b. C, B, A. c. B, C, A. d. All the other answers are wrong.

> [!success] Answer: a
> Worker B, then Worker A, then Worker C.

Move first the worker with the **lowest opportunity cost of X** (the least Y given up per unit of X):

> [!example] Opportunity cost of one unit of X
> | Worker | X or Y | Y given up per X | Rank |
> |---|---|---|---|
> | A | 2 X or 3 Y | $3/2 = 1.5$ | second |
> | B | 6 X or 3 Y | $3/6 = 0.5$ | **first** |
> | C | 4 X or 12 Y | $12/4 = 3$ | third |

The resulting PPF points (all three on Y gives 18 units of Y):

| Workers on X | X | Y |
|---|---|---|
| none | 0 | 18 |
| B | 6 | 15 |
| B and A | 8 | 12 |
| B, A and C | 12 | 0 |

The slope (opportunity cost) steepens at each step, 0.5 then 1.5 then 3, which is what makes the frontier bow outward.

![[PP08_q18_three_worker_ppf.png|640]]

*Each kink is one worker switching from Y to X. The segments get steeper, so the frontier is bow shaped.*

> [!warning] The official explanation has an inverted figure for C
> The key says C gives up "4/12 = 1/3" of Y per unit of X. That divides X by Y, the wrong way round. C makes 12 Y or 4 X, so per unit of X C gives up $12/4 = 3$ units of Y. With the key's 1/3, C would go first and the order would be C, B, A (option b). The **official answer B, A, C is the one consistent with the correct arithmetic** (0.5, 1.5, 3), so I kept it. Do not copy the 1/3 figure in an exam.

See [[Lec_02-PPF and Gains from Trade]] and [[PS_02-Interdependence and Trade]].

## Q19 — Coffee demand after the tea price rises

> [!question] Question
> Coffee demand is $P = 50 - 0.5Q$ with tea at USD 4 and coffee at USD 20. Tea (a substitute) rises to USD 6. Which curve shows the effect on coffee demand?
> a. $P = 55 - 0.5Q$ b. $P = 25 - 0.5Q$ c. $P = 35 - 0.5Q$ d. All the other answers are wrong.

> [!success] Answer: a
> $P = 55 - 0.5Q$.

Tea and coffee are **substitutes**, so a rise in the price of tea **increases** demand for coffee: the curve shifts **right (up)**. The slope stays at $-0.5$ and only the intercept changes. A higher demand curve has a larger intercept than the original 50, which is only true of option a (55). Options b (25) and c (35) have lower intercepts, a **decrease** in demand, which is what a rise in the price of a *complement* would do.

> [!warning] Reading the question
> The question gives no cross-price elasticity, so the size of the shift (5 here) cannot be derived. Only the **direction** is testable, and that is what picks a.

See [[Lec_03-Perfect Competition and Demand]] and [[PS_03-Demand]].

## Q20 — Naming the cost curves

> [!question] Question
> The figure shows cost curves for Cynthia's flower shop. Which option names each curve correctly?
> a. V = marginal cost, W = average total cost, X = average variable cost, Y = average fixed cost.
> b. V = marginal cost, W = average variable cost, X = average total cost, Y = average fixed cost.
> c. V = average total cost, W = marginal cost, X = variable cost, Y = average fixed cost.
> d. All the answers are wrong.

> [!success] Answer: a

The figure is a standard cost-curve diagram from the source (not reproduced here). Identify each curve by its shape:

> [!example] Working
> - **V** is the curve that rises steeply and cuts through the bottoms of the two U-shaped curves: **marginal cost**. MC crosses ATC and AVC at their minimum points.
> - **Y** falls continuously and never turns up: **average fixed cost** ($FC / Q$ shrinks as output grows).
> - **W** and **X** are the two U-shaped curves. Because $ATC = AFC + AVC$, ATC always lies **above** AVC, and the gap between them is AFC, which shrinks as Q rises, so the two converge. The upper one, W, is **average total cost**, and the lower one, X, is **average variable cost**.

Option b swaps W and X. Option c labels V as ATC (it is MC) and X as "variable cost", which is a total, not an average, so it cannot be a U-shaped curve in this diagram. See [[Lec_05-Supply and Costs of Production]], [[Lec_06-Firms in Competitive Markets]] and [[Lec_14-Production Costs Worksheet]]. Definitions: [[_Principles of Micro Concepts#Marginal Cost|MC]], [[_Principles of Micro Concepts#Average Total Cost|ATC]], [[_Principles of Micro Concepts#Average Variable Cost|AVC]], [[_Principles of Micro Concepts#Average Fixed Cost|AFC]].

---

## Recap

| Q | Topic | Answer | One-line reason |
|---|---|---|---|
| 1 | Equilibrium | a | $60 - 0.5Q = 30 + 0.25Q$ gives Q = 40, P = 40 |
| 2 | CS and PS | a | CS = 400, PS = 200 (triangles) |
| 3 | Tax on sellers | d | Buyer 41.33, seller 39.33, Q = 37.33; no option matches |
| 4 | DWL of tax | a | $\tfrac{1}{2} \times 2 \times 2.67 = 2.67$ |
| 5 | Price ceiling 35 | a | Qd = 50, Qs = 20, shortage 30 |
| 6 | Subsidy | a | Supply shifts right: price down, quantity up |
| 7 | Public good | a | Public radio is non-excludable and non-rival |
| 8 | Tax burden | a | Elastic demand, so producers bear more |
| 9 | Hot chocolate price | a | Cheaper water and cheaper tea both push price down |
| 10 | Avocados | a | Supply left and demand right: price up, quantity ambiguous |
| 11 | Rent control eased | a | Ceiling nearer equilibrium means a smaller shortage |
| 12 | Long-run firm | a | P = MC = 6, ATC = 6, AVC = 5.50 |
| 13 | Elasticity | a | Elasticity about 1.22 (elastic), so revenue falls |
| 14 | Steel Pigouvian tax | a | Supply + 30: Q = 95, buyer 105, seller 75 |
| 15 | Comparative advantage | d | A has absolute advantage in both; B has comparative advantage in tomatoes |
| 16 | Subsidy | a | Q = 36.67, 26.67 and 56.67, DWL = 150 |
| 17 | Economic profit | a | 155,000 - 130,000 - 25,000 = 0 |
| 18 | PPF order | a | Opportunity costs 0.5, 1.5, 3: B, A, C |
| 19 | Substitute price rise | a | Demand shifts right: intercept 55 |
| 20 | Cost curves | a | V = MC, W = ATC, X = AVC, Y = AFC |

## Related notes

[[Principles of Micro]] · [[Lec_04-Supply and Market Equilibrium]] · [[Lec_09-Welfare Consumer and Producer Surplus]] · [[Lec_10-Price Controls]] · [[Lec_11-Taxes]] · [[Lec_12-Externalities]] · [[PS_10-Price Controls]] · [[PS_11-Taxes]]
