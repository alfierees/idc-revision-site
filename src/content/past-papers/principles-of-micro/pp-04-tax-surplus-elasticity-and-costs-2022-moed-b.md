---
title: "PP 04: 2022 Moed B — Worked Solutions"
topics: "Market equilibrium, surplus, a tax on producers, elasticity, costs"
type: past-paper
status: worked-solution
exam: "Principles of Microeconomics, 2022 Moed B (March 2022)"
semester: 1
year: 1
course: "Principles of Micro"
instructor: Dr. Yael Hadass
tags:
  - principles-of-micro
  - past-paper
  - worked-solution
  - taxes
  - surplus
  - elasticity
  - externalities
  - costs-of-production
  - ppf
aliases:
  - PP04 Micro
  - Principles of Micro 2022 Moed B
  - March 2022 Moed B
subject: principles-of-micro
in_scope: true
---

# PP 04: 2022 Moed B — Worked Solutions

> Part of: [[Principles of Micro]]
> **Exam in Principles of Microeconomics, Moed B, March 2022** — Principles of Micro, Dr. Yael Hadass
> Builds on: [[Lec_02-PPF and Gains from Trade]], [[Lec_03-Perfect Competition and Demand]], [[Lec_04-Supply and Market Equilibrium]], [[Lec_05-Supply and Costs of Production]], [[Lec_06-Firms in Competitive Markets]], [[Lec_07-Comparative Statics]], [[Lec_08-Elasticity]], [[Lec_09-Welfare Consumer and Producer Surplus]], [[Lec_10-Price Controls]], [[Lec_11-Taxes]], [[Lec_12-Externalities]], [[Lec_13-Public Goods and International Trade]]

> [!info] Answer source
> This paper has an **official key**: the correct option is highlighted in the solution file. All 20 answers below are the official ones, and the working is expanded from the question data. The options are shuffled on this page, so the position of the correct answer gives nothing away. Where an official answer needs a caveat (Q4 units, Q6 wording, Q19 tie) a `> [!warning]` says so. This is not a tofes 0 paper. Nothing here is AI-solved.

## What this paper tests

20 multiple-choice questions, one per topic, sweeping the whole course. The question groups:

1. **Q1 to Q5**: one linear market (blue jeans, supply $P=250+2Q$, demand $P=350-2Q$, $Q$ in thousands). Equilibrium, surplus, a 20 NIS tax, deadweight loss, Pigouvian tax. Solve it once and reuse it.
2. **Q6, Q10, Q20**: policy on a market (subsidy to one region, minimum wage, removing a price floor). Shift the right curve, read the new price and quantity.
3. **Q7, Q15**: price elasticity of demand as arithmetic (percentage change in Q over percentage change in P, and revenue).
4. **Q9, Q12**: the PPF and comparative advantage, both driven by opportunity cost.
5. **Q11, Q18**: shifts of supply and demand (complements, substitutes).
6. **Q13, Q5, Q8**: externalities and types of goods.
7. **Q14, Q16, Q17, Q19**: costs and the competitive firm (shut down vs exit, economic vs accounting profit, long-run equilibrium, profit maximisation from a table).

> [!tip] Intuition
> Almost every question is a one-line principle plus two lines of arithmetic: **opportunity cost** decides comparative advantage and implicit costs, **MR = MC** decides output, and **the side of the market that is taxed or subsidised** only changes who is shifted, not who ends up paying.

---

# Part A: The blue jeans market (Q1 to Q5)

Shared data for Q1 to Q4: supply $P = 250 + 2Q$, demand $P = 350 - 2Q$, with $P$ in NIS and $Q$ in thousands of pairs (so $Q=5$ means 5,000 pairs).

![[PP04_q1_jeans_market_tax.png|640]]

The figure puts Q1 to Q4 in one picture: the free-market equilibrium E, the two surplus triangles, the supply curve after the tax, and the deadweight loss.

## Q1 — Equilibrium

> **Question.** Assume the diagram and equations represent the market for blue jeans. $P$ is the price of one unit in NIS, $Q$ is the number sold in thousands. What is the equilibrium price and quantity?
> A) Equilibrium quantity is 90000 and the equilibrium price is 100 NIS.
> B) Equilibrium quantity is 25,000 and the equilibrium price is 300 NIS.
> C) Equilibrium quantity is 24000 and the equilibrium price is 150 NIS.
> D) Equilibrium quantity is 900 and the equilibrium price is 50 NIS.

Set supply equal to demand.

$$
250 + 2Q = 350 - 2Q \quad\Rightarrow\quad 4Q = 100 \quad\Rightarrow\quad Q = 25
$$

$$
P = 350 - 2(25) = 300
$$

Because $Q$ is in thousands, $Q=25$ means 25,000 pairs.

> [!success] Answer: **B**
> Equilibrium quantity 25,000 and price 300 NIS.

Why the others are wrong: A, C and D do not satisfy both curves. Prices of 150, 50 or 100 are all below the supply intercept of 250, so nobody would supply at those prices (the supply equation would need a negative $Q$).

## Q2 — Consumer and producer surplus

> **Question.** Same market. What is the consumer surplus and the producer's surplus?
> A) The producer's surplus is 250,000 and the consumer's surplus is 750,000.
> B) The consumer's surplus is 750,000 and the producer's surplus is 250,000.
> C) The producer's surplus is 1,250,000 and the consumer's surplus is 1,250,000.
> D) The consumer's surplus is 625,000 and the producer's surplus is 625,000.

Consumer surplus is the triangle between the demand curve and the price, up to the equilibrium quantity. The demand intercept is 350 and the price is 300.

$$
CS = \tfrac{1}{2}\,(350-300)\,(25) = 625
$$

Producer surplus is the triangle between the price and the supply curve. The supply intercept is 250.

$$
PS = \tfrac{1}{2}\,(300-250)\,(25) = 625
$$

The units are NIS times thousands of pairs, so each is 625 thousand NIS, i.e. 625,000.

> [!success] Answer: **D**
> CS = 625,000 and PS = 625,000.

The slopes of demand and supply have the same size (2), so the two triangles are mirror images and the surpluses are equal. That alone rules out A and B. C is double the true value (it forgets the one half in the triangle area).

## Q3 — A 20 NIS tax on producers

> **Question.** The government taxes producers of jeans by 20 NIS per unit. Find the supply curve after the tax algebraically and solve the new equilibrium. Which is correct?
> A) The price that the buyer pays is 320, the quantity is 15 and the price that the seller receives is 250.
> B) The price that the buyer pays is 290, the quantity is 25 and the price that the seller receives is 310.
> C) The price that the buyer pays is 310, the quantity is 20 and the price that the seller receives is 290.
> D) All the answers a, b, c are wrong.

A tax on sellers shifts supply **up** by the tax: sellers need 20 NIS more from the buyer for each pair to keep the same amount.

$$
P_{S,\text{after tax}} = 250 + 2Q + 20 = 270 + 2Q
$$

Equate with demand.

$$
270 + 2Q = 350 - 2Q \quad\Rightarrow\quad Q = 20
$$

The buyer pays $350 - 2(20) = 310$. The seller keeps $310 - 20 = 290$ (check with the old supply: $250 + 2(20) = 290$).

> [!success] Answer: **C**
> Buyer pays 310, quantity 20 (thousand), seller receives 290.

Why the others are wrong: B swaps the two prices (the buyer pays more than the seller receives, not less). A has a quantity of 15 and a seller price of 250 that do not lie on the curves. The tax is split 10 and 10 between buyers (300 to 310) and sellers (300 to 290) because the slopes are equal.

## Q4 — Deadweight loss

> **Question.** After the same tax, which is correct about the deadweight loss?
> a) The deadweight loss is 50 b) The deadweight loss is 200. c) The deadweight loss is 100. d) All the other answers are wrong.

Deadweight loss is the triangle with the tax as its height (20) and the lost quantity as its base ($25 - 20 = 5$).

$$
DWL = \tfrac{1}{2}\,(20)\,(5) = 50
$$

> [!success] Answer: **a**
> The deadweight loss is 50.

> [!warning] Units
> Because $Q$ is in thousands the triangle is 50 thousand NIS, i.e. 50,000 NIS. The official option says just "50", so it is in the same thousands units as the surplus options would be if written compactly. The relative size is the point: 50 against 625 + 625 is a small loss, 4 percent of total surplus.

Option c (100) is the rectangle of tax times lost quantity, forgetting the one half of the triangle. Option b (200) does not match any natural calculation here.

## Q5 — Pigouvian tax

> **Question.** Blue jeans were discovered to have a negative externality. A Pigouvian tax would decrease production to 15,000 units. What is the required tax?
> a) 80 NIS b) 40 NIS c) 100 NIS d) All the answers a, b and c are wrong.

A Pigouvian tax closes the wedge at the target quantity $Q = 15$ between what buyers are willing to pay (demand) and what sellers need (supply).

$$
P_D(15) = 350 - 2(15) = 320, \qquad P_S(15) = 250 + 2(15) = 280
$$

$$
t = 320 - 280 = 40
$$

> [!success] Answer: **b**
> The tax is 40 NIS per pair.

Why not 80 or 100: in this market a per-unit tax $t$ cuts quantity by $t/4$ thousand, so 80 or 100 would cut output to 5 or 0, far below the 15 target. Compare Q3, where a tax of 20 cut output by 5, from 25 to 20. Related: [[Lec_12-Externalities]], [[Lec_11-Taxes]].

---

# Part B: Policy and market shifts

## Q6 — A subsidy for farmers in the south

> **Question.** The government decides to help farmers producing yellow peppers in the south of Israel with a subsidy of 100 NIS per KG. How will this affect prices of yellow peppers in Israel? (Analyse three markets: the other regions, the south, and all of Israel. Prices are compared with before the subsidy.)
> A) South: lower price, lower quantity. Other regions: lower price, lower quantity. Total will decrease.
> B) South: higher price, lower quantity. Other regions: lower price, higher quantity. Total will decrease.
> C) The farmers in the south will sell at a higher price and produce a higher quantity. The farmers in other regions will sell at a lower price and produce a lower quantity. The total amount produced in Israel will increase.
> D) All other answers are wrong.

A per-unit subsidy to southern producers shifts the **southern supply curve right (down)**. Walk the chain:

1. The national supply is the sum of southern and other-region supply, so it shifts right and the **national price falls**, while the **national quantity rises**.
2. Other-region farmers receive no subsidy, so they only see the lower price and move down their own supply curve: **lower price, lower quantity**.
3. Southern farmers get the lower market price plus 100 per KG. The subsidy is larger than the price fall, so what they actually receive per KG is higher and they **produce more**.

> [!success] Answer: **C**
> South: higher price received and higher quantity. Other regions: lower price and lower quantity. Total quantity increases.

> [!warning] Wording
> "Sell at a higher price" for the south means the price the farmer **receives**, market price plus the 100 subsidy. The buyers' market price itself falls. Read the option that way and C is the only consistent one. A fails because the total must rise when supply shifts right. B fails because a subsidised producer cannot reduce quantity.

See [[Lec_07-Comparative Statics]] for the shift-and-read method and [[Lec_11-Taxes]] for subsidies.

## Q7 — Finding a new price from an elasticity

> **Question.** If the price is USD 20 and quantity demanded is 350, calculate the new price that will increase the quantity demanded by 25 units, if the price elasticity is -0.5. (Round to the nearest whole number.)
> 1) 17  2) 6  3) 18  4) All the answers a, b, c are wrong

Use the definition of elasticity.

$$
E_d = \frac{\%\Delta Q}{\%\Delta P}
$$

The quantity change is $25/350 = 7.14\%$. Solve for the price change.

$$
\%\Delta P = \frac{7.14\%}{-0.5} = -14.29\%
$$

$$
P_{\text{new}} = 20\,(1 - 0.1429) = 17.14 \approx 17
$$

> [!success] Answer: **1) 17**
> Demand is inelastic ($|E_d| = 0.5 < 1$), so a large price cut of about 14 percent is needed to raise quantity by only 7 percent.

Why not 18: that would be a price cut of 10 percent, which would raise quantity by only 5 percent (about 17.5 units). Why not 6: that would treat the 25 as a price change. Using the midpoint formula instead also gives about 17.4, which rounds to 17. See [[Lec_08-Elasticity]].

## Q8 — Food given by the government of Ukraine

> **Question.** The government of Ukraine gave food to the public. Which is correct?
> 1) club good 2) public good 3) common resource 4) private good

Test the two properties of a good.

| Property | Food handed to citizens |
|---|---|
| **Rival** (one person eating it stops another) | Yes, a loaf eaten is gone |
| **Excludable** (can be denied to non-recipients) | Yes, it is handed to specific people |

Rival and excludable is a **private good**. That the government pays for it does not change the nature of the good, only who finances it.

> [!success] Answer: **4) private good**

Why the others are wrong: a public good would be non-rival and non-excludable (national defence). A common resource is rival but non-excludable (fish in the sea). A club good is non-rival but excludable (a cable channel). See [[Lec_13-Public Goods and International Trade]].

## Q9 — Building a PPF from three worker types

> **Question.** Build a PPF. Type C can produce 15 units of X or 30 units of Y. Type B can produce 30 units of X or 150 units of Y. Type A can produce 20 units of X or 60 units of Y. Which is true?
> 1. The PPF is linear, the maximum amount of X is 65, the maximum amount of Y is 210.
> 2. When the two least efficient workers in producing X are allocated to produce Y, there would be 15 units of X produced, and 210 units of Y produced.
> 3. Same, but 60 units of X and 180 units of Y.
> 4. All the answers are incorrect.

First the **opportunity cost of one unit of X** for each worker, in units of Y given up.

| Worker | X | Y | Opp. cost of 1 X (in Y) |
|---|---|---|---|
| C | 15 | 30 | $30/15 = 2$ |
| A | 20 | 60 | $60/20 = 3$ |
| B | 30 | 150 | $150/30 = 5$ |

The **least efficient in X** are the ones with the highest opportunity cost of X: B (5) and A (3). Put them on Y, leave C on X.

$$
X = 15, \qquad Y = 150 + 60 = 210
$$

![[PP04_q9_ppf.png|640]]

The PPF starts at (0, 240) where everyone makes Y, and workers switch to X in order of lowest opportunity cost (C, then A, then B). The slopes 2, 3 and 5 get steeper, so the frontier is **bowed out**, not linear. The point (15, 210) is exactly "C on X, A and B on Y".

> [!success] Answer: **2**
> 15 units of X and 210 units of Y.

Why the others are wrong: option 3 swaps the roles of the workers. Option 1 is wrong twice: the PPF is not linear (three different opportunity costs), and the maximum of Y is $30+150+60 = 240$, not 210 (max X of 65 is right: $15+30+20$). See [[Lec_02-PPF and Gains from Trade]].

## Q10 — Raising the minimum wage

> **Question.** The government announced that the minimum wage will increase by the end of the year. Which is expected?
> a. Unemployment will increase. b. No effect on employment. c. Employment will increase. d. All the other answers are wrong.

A minimum wage is a **price floor in the labour market**. If it is set above the equilibrium wage, firms demand fewer workers while more people want to work, so there is a surplus of labour, which is unemployment.

> [!success] Answer: **a**
> Unemployment increases.

> [!tip] Intuition
> Read it as the same picture as any price floor: the price (wage) is held above equilibrium, quantity traded (employment) falls to the short side (demand), and the leftover on the supply side is unemployed. Option c has the sign backwards, b assumes the floor does not bind. See [[Lec_10-Price Controls]].

## Q11 — Peanut butter, peanuts and jelly

> **Question.** Peanut butter and jelly are complements. October 2019: $Q_s = -10 + 16P$, $Q_d = 30 - 4P$. March 2020: the price of raw peanuts increased and there was a sudden decrease in the price of jelly. Which claim can be made about the March 2020 equilibrium?
> a) Equilibrium quantity is less than 22. b) Equilibrium price is greater than 2. c) Equilibrium price is less than 2. d) All other answers are wrong.

First the starting point.

$$
-10 + 16P = 30 - 4P \quad\Rightarrow\quad 20P = 40 \quad\Rightarrow\quad P = 2, \quad Q = 22
$$

Then the two shocks.

| Shock | Curve | Effect on price | Effect on quantity |
|---|---|---|---|
| Raw peanuts (an input) get dearer | Supply shifts **left** | Up | Down |
| Jelly (a complement) gets cheaper | Demand shifts **right** | Up | Up |

Both shocks push the price **up**, so the new price is above 2. For quantity the two effects oppose each other (supply shift cuts it, demand shift raises it), so quantity could be above, below, or equal to 22.

> [!success] Answer: **b**
> The equilibrium price is greater than 2.

Why the others are wrong: c is the opposite of the sure price effect. a claims a definite quantity fall, but the quantity direction is ambiguous without the size of the shifts. See [[Lec_07-Comparative Statics]].

## Q12 — Absolute and comparative advantage

> **Question.** Hours needed to produce 1 table / 1 chair: China 8 / 3, Russia 4 / 2. Which statements are correct?
> a) China has the absolute advantage in both goods and the comparative advantage in chairs.
> b) China has the absolute advantage in both goods and the comparative advantage in tables.
> c) Russia has the absolute advantage in both goods and the comparative advantage in chairs.
> d) Russia has the absolute advantage in both goods and the comparative advantage in tables.

**Absolute advantage** is fewer hours for the same good: Russia needs 4 against 8 hours for a table and 2 against 3 for a chair, so Russia has it in both.

**Comparative advantage** is the lower opportunity cost. Express the table's cost in chairs.

| Country | Opp. cost of 1 table (chairs) | Opp. cost of 1 chair (tables) |
|---|---|---|
| China | $8/3 = 2.67$ | $3/8 = 0.375$ |
| Russia | $4/2 = 2$ | $2/4 = 0.5$ |

Russia gives up fewer chairs per table (2 against 2.67), so it has the comparative advantage in **tables**. China gives up fewer tables per chair (0.375 against 0.5), so China has it in chairs.

> [!success] Answer: **d**
> Russia: absolute advantage in both, comparative advantage in tables.

Options a and b claim China has absolute advantage, which is wrong because China needs more hours for both. Option c gets absolute advantage right but gives the comparative advantage to the wrong good. Note that the country with the absolute advantage in both still has a comparative advantage in only one. See [[Lec_02-PPF and Gains from Trade]].

## Q13 — Education and the externality gap

> **Question.** Marginal private benefit $P = 60 - 10Q$, marginal private cost $P = 10Q$, marginal social benefit $P = 80 - 10Q$. What is the difference between the free-market equilibrium quantity and the socially optimal quantity?
> A) 3  B) 4  C) 1  D) 2

The market sets marginal private benefit equal to marginal cost.

$$
60 - 10Q = 10Q \quad\Rightarrow\quad Q_{\text{market}} = 3
$$

Society sets marginal social benefit equal to marginal cost.

$$
80 - 10Q = 10Q \quad\Rightarrow\quad Q_{\text{social}} = 4
$$

The gap is $4 - 3 = 1$.

![[PP04_q13_education_externality.png|640]]

The social benefit curve lies above the private one (by 20), so the market **under-provides** education: this is a **positive externality**.

> [!success] Answer: **C**
> The difference is 1.

Why not 2, 3 or 4: those would arise by mixing up curves, for example setting MSB equal to MPB (no solution) or reading the intercept as the quantity. See [[Lec_12-Externalities]].

---

# Part C: Costs and the firm

## Q14 — Reading the cost graph

> **Question.** (Graph: marginal cost, average total cost, average variable cost, a downward-sloping demand curve and marginal revenue, with price P and quantity Q marked where MR meets MC.) The profit-maximising firm depicted should:
> a) Increase price to maximise profits b) Exit if conditions do not improve in the long run c) Shut down in the short run d) Not enough information.

The firm produces the quantity Q where **MR = MC**, and charges the price P read from the demand curve at Q. At that quantity the graph shows:

- price P is **below** average total cost (the firm makes a loss),
- price P is **above** average variable cost (revenue covers variable costs).

> [!success] Answer: **b**
> Exit in the long run if conditions do not improve.

Reasoning: covering AVC means producing beats shutting down now, because the loss from producing is smaller than the fixed cost it would lose anyway by closing. But P below [[_Principles of Micro Concepts#Average Total Cost|Average Total Cost]] cannot last once fixed costs become avoidable, so the firm leaves in the long run. Option c is wrong because $P > AVC$. Option a is wrong because the price is read off demand at the profit-maximising quantity; it is not a free choice. See [[Lec_06-Firms in Competitive Markets]].

> [!tip] Intuition
> Shut-down is about the short run and compares P with AVC. Exit is about the long run and compares P with ATC.

## Q15 — Milk price up, revenue down

> **Question.** Sellers of milk raised the price due to increased costs and saw a decrease in revenue. Original price 20 NIS, original quantity 200, new price 27. What is a possible new quantity?
> a) Q = 129 b) Q = 180 c) Q = 150 d) Not enough information.

Original revenue is $20 \times 200 = 4000$ NIS. Revenue fell, so the new quantity must satisfy

$$
27\,Q < 4000 \quad\Rightarrow\quad Q < 148.1
$$

Only 129 passes: its revenue is $27 \times 129 = 3483 < 4000$. The other options give $27 \times 150 = 4050$ and $27 \times 180 = 4860$, both above 4000 (revenue would have risen).

> [!success] Answer: **a**
> Q = 129.

Link to elasticity: a revenue fall after a price rise means demand is **elastic** at these prices. See [[Lec_08-Elasticity]].

## Q16 — Economic profit against accounting profit

> **Question.** Instead of a school job at 80,000 NIS per year, Ryan starts a tutoring business: 16 hours per week, 150 NIS per session, 52 weeks per year. He uses his own car instead of renting it out for 2,500 NIS per month. Advertising, gas and materials cost 10,000 NIS per year. What is the difference between annual economic and accounting profit?
> A) 22,700 B) 115,200 C) 82,500 D) 110,000

Accounting profit subtracts only **explicit** costs. Economic profit also subtracts **implicit** costs (opportunity costs). So the difference is the implicit costs.

| Implicit cost | Amount per year |
|---|---|
| Forgone salary | 80,000 |
| Forgone car rental (2,500 per month times 12) | 30,000 |
| **Total implicit costs** | **110,000** |

The 10,000 of advertising, gas and materials is an explicit cost that appears in both profits, so it does not enter the difference. The revenue and hours are also irrelevant to the difference.

> [!success] Answer: **D**
> 110,000 NIS.

Why the others are wrong: none of them equals the sum of the two implicit costs (80,000 plus 30,000). The tutoring revenue and the 10,000 of explicit costs cancel out of the difference. See [[Lec_05-Supply and Costs of Production]].

## Q17 — Long-run equilibrium of a competitive firm

> **Question.** A profit-maximising perfectly competitive firm is in long-run equilibrium. Output is 200 units, total revenue is USD 1200 and fixed cost is USD 100. Which is true? (Hint: calculate ATC and AVC. In any equilibrium P = MR, and MR = MC.)
> a) MC is 6.00 and average fixed cost is 5.50. b) MC is 7 and ATC is 6. c) MC is USD 6.00 and AVC is USD 5.50. d) MC is 5.50 and ATC is 5.50.

Price is revenue per unit.

$$
P = \frac{1200}{200} = 6
$$

In a competitive market $P = MR = MC$, so $MC = 6$. In **long-run** equilibrium there are zero economic profits, so $P = ATC = 6$. Now split ATC.

$$
AFC = \frac{100}{200} = 0.5, \qquad AVC = ATC - AFC = 6 - 0.5 = 5.5
$$

> [!success] Answer: **c**
> MC is USD 6.00 and [[_Principles of Micro Concepts#Average Variable Cost|Average Variable Cost]] is USD 5.50.

Why the others are wrong: a swaps AFC (0.5) with AVC. d gives MC as 5.50, but MC equals the price of 6. b gives MC as 7, which contradicts $MC = P = 6$. See [[Lec_06-Firms in Competitive Markets]] for the long-run zero-profit condition.

## Q18 — Twix and Mars as substitutes

> **Question.** Consumers consider Twix bars and Mars bars to be substitutes. A significant decrease in the supply of Twix bars will affect the Mars bar market by:
> a) Increasing the demand of Mars bars which causes an increase in the price of Mars bars.
> b) Increasing the demand for Mars bars, which causes an increase in the price of Twix bars
> c) Increasing the demand for Mars bars, which causes an increase in the supply for Twix bars
> d) Decreasing the demand for Mars bars, which causes a decrease in the price of Twix bars

The chain:

1. Twix supply falls, so the Twix price rises.
2. Twix is now dearer, so consumers switch to the substitute: **demand for Mars rises**.
3. A rise in Mars demand raises the **Mars price** (and quantity).

> [!success] Answer: **a**

Why the others are wrong: b and c put the effect on the Twix market, but the question is about the Mars market, and a supply change is not "caused" by a demand shift. d has the sign wrong: substitutes move together, so Mars demand rises. See [[Lec_07-Comparative Statics]].

## Q19 — Headphones: choosing output from a cost table

> **Question.** Bose, a competitive firm, produces headphones with the variable costs shown below. Fixed costs are USD 30 per day. The market price is USD 100 per headphone. What is a possible optimal quantity and total daily profit?
> A) headphones = 2, daily profit = 130 B) headphones = 3, daily profit = 180 C) headphones = 1, daily profit = 300 D) headphones = 5, daily profit = 240

| Q | Total variable cost | Total cost (VC + 30) | Marginal cost | Revenue (100Q) | Profit |
|---|---|---|---|---|---|
| 0 | 0 | 30 | | 0 | |
| 1 | 15 | 45 | 15 | 100 | 55 |
| 2 | 45 | 75 | 30 | 200 | 125 |
| 3 | 90 | 120 | 45 | 300 | 180 |
| 4 | 130 | 160 | 40 | 400 | 240 |
| 5 | 230 | 260 | 100 | 500 | 240 |
| 6 | 340 | 370 | 110 | 600 | 230 |

A competitive firm has $MR = P = 100$ and keeps adding units while $MC \le MR$. The marginal cost is 100 at the fifth unit, exactly equal to MR, so the fifth unit adds zero profit: profit is the same (240) at 4 and at 5 units. At 6 units MC (110) exceeds MR and profit falls to 230.

> [!success] Answer: **D**
> 5 headphones per day, daily profit 240.

> [!warning] A tie
> Profit is 240 at both 4 and 5 headphones, which is why the question says "a **possible** optimal quantity". Only the 5-unit option is offered, so D is the answer. Options A, B and C give profits that do not match the table (the real profits at those quantities are 125, 180 and 55). The marginal cost column here is the change in total cost, see [[_Principles of Micro Concepts#Marginal Cost|Marginal Cost]], [[_Principles of Micro Concepts#Total Cost|Total Cost]], and [[Lec_14-Production Costs Worksheet]] for practice.

## Q20 — Removing a binding price floor

> **Question.** The government removes the binding price floor for ground meat. What is most likely to happen?
> a) The price increases and quantity demanded increases. b) The price decreases and quantity demanded increases. c) The price increases and quantity demanded decreases. d) The price remains unchanged.

A binding price floor sits **above** equilibrium, so there is a surplus. Removing it lets the price fall back to equilibrium. As the price falls, consumers move down the demand curve, so quantity demanded rises (and the surplus disappears).

> [!success] Answer: **b**

Why the others are wrong: c and a have the price rising, which would only follow from creating a floor. d ignores that the floor was binding, so it had been holding the price above equilibrium. See [[Lec_10-Price Controls]].

---

# Recap table

| Q | Topic | Key step | Answer |
|---|---|---|---|
| 1 | Equilibrium | $250+2Q = 350-2Q$ | B (25,000 at 300 NIS) |
| 2 | CS and PS | two triangles of 625 | D |
| 3 | Tax on sellers | supply up by 20, $Q=20$, pays 310 receives 290 | C |
| 4 | Deadweight loss | $\tfrac12 \cdot 20 \cdot 5$ | a (50) |
| 5 | Pigouvian tax | gap between curves at $Q=15$ | b (40 NIS) |
| 6 | Regional subsidy | south supply shifts right, total rises | C |
| 7 | Elasticity | $-14.3\%$ price | 1 (17) |
| 8 | Type of good | rival and excludable | 4 (private) |
| 9 | PPF | opp. cost of X: C 2, A 3, B 5 | 2 |
| 10 | Minimum wage | floor above equilibrium | a |
| 11 | Shifts | supply left, demand right: P up | b |
| 12 | Advantage | Russia: tables | d |
| 13 | Externality | $Q=3$ against $Q=4$ | C (1) |
| 14 | Shutdown or exit | $AVC < P < ATC$ | b |
| 15 | Revenue | $Q < 148$ | a (129) |
| 16 | Profit gap | implicit costs | D (110,000) |
| 17 | LR equilibrium | $P = MC = ATC = 6$ | c |
| 18 | Substitutes | Twix dearer, Mars demand up | a |
| 19 | Profit table | MR = MC at 5 units | D |
| 20 | Floor removed | price down, quantity demanded up | b |

## Related Notes

- Hub: [[Principles of Micro]]
- Lectures: [[Lec_02-PPF and Gains from Trade]], [[Lec_06-Firms in Competitive Markets]], [[Lec_08-Elasticity]], [[Lec_09-Welfare Consumer and Producer Surplus]], [[Lec_10-Price Controls]], [[Lec_11-Taxes]], [[Lec_12-Externalities]]
