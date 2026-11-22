---
title: "PP 06: 2023 Moed B — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Principles of Microeconomics, 2023 Moed B (25 March 2023)"
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
  - comparative-advantage
aliases:
  - PP06 Micro
  - Principles of Micro 2023 Moed B
  - March 2023 Moed B
subject: principles-of-micro
in_scope: true
---

# PP 06: 2023 Moed B — Worked Solutions

> Part of: [[Principles of Micro]]
> **Exam in Principles of Microeconomics, Moed B, March 2023** — Principles of Micro, Dr. Yael Hadass
> Builds on: [[Lec_02-PPF and Gains from Trade]], [[Lec_03-Perfect Competition and Demand]], [[Lec_04-Supply and Market Equilibrium]], [[Lec_05-Supply and Costs of Production]], [[Lec_06-Firms in Competitive Markets]], [[Lec_07-Comparative Statics]], [[Lec_08-Elasticity]], [[Lec_09-Welfare Consumer and Producer Surplus]], [[Lec_10-Price Controls]], [[Lec_11-Taxes]], [[Lec_12-Externalities]]

> [!info] Answer source
> This paper has an **official key**: the correct option is highlighted in the solution file (read from the rendered pages). All 20 answers below are the official ones, with the working expanded. The key accepts **both A and B on Q2**, because they state the same numbers. This is not a tofes 0 paper. Nothing here is AI-solved.

## What this paper tests

20 multiple-choice questions, 5 points each. Instructions say that some questions share data and are scrambled. The groups:

1. **Q1 to Q4**: one linear carrot market (demand $P = 6 - 0.03Q$, supply $P = 2 + 0.02Q$). Equilibrium, surplus, a USD 0.75 tax on producers, deadweight loss. Solve it once and reuse it.
2. **Q5, Q13**: positive externalities (education, vaccination).
3. **Q6, Q7, Q9**: elasticity and its link to revenue and to the size of the deadweight loss.
4. **Q8, Q12, Q14, Q17, Q18, Q19**: costs and the competitive firm (fixed cost from average variable cost, economic vs accounting profit, marginal product, profit from a cost table, long-run equilibrium).
5. **Q10, Q15, Q16, Q20**: shifts of supply and demand and policy (complements, substitutes, a binding ceiling, a targeted subsidy).
6. **Q11**: absolute and comparative advantage.

> [!tip] Intuition
> Nearly every question is one principle plus two lines of arithmetic: **opportunity cost** decides comparative advantage and implicit costs, **MR = MC** decides output, and **which curve a policy moves** decides everything else.

> [!warning] Money in this note
> The paper prints prices with a dollar sign. In this note the currency is written out as USD so the maths renders cleanly.

---

# Part A: The carrot market (Q1 to Q4)

Shared data: demand $P = 6 - 0.03Q$ and supply $P = 2 + 0.02Q$, with $P$ in USD per Kg and $Q$ in Kg.

![[PP06_q1_carrot_market_tax.png|640]]

The figure puts Q1 to Q4 in one picture: equilibrium (Q = 80, P = 3.6), the two surplus areas, the supply curve after the tax (dashed), the prices the buyer pays (4.05) and the seller receives (3.3), and the deadweight loss.

## Q1 — Equilibrium

> **Question.** Assume the diagram and equations represent the market for carrots. P is the price of 1 kg in USD, Q is the number of Kg sold. What is the equilibrium price and quantity?
> a. Equilibrium quantity is 80 Kg, and the equilibrium price is 3.6.
> b. Equilibrium quantity is 90 Kg, and the equilibrium price is 4.
> c. Equilibrium quantity is 85 Kg, and the equilibrium price is 2.
> d. All the other answers are wrong.

Set the demand price equal to the supply price.

$$
6 - 0.03Q = 2 + 0.02Q
$$

$$
4 = 0.05Q \quad\Rightarrow\quad Q = 80
$$

$$
P = 2 + 0.02(80) = 3.6
$$

> [!success] Answer: a
> $Q = 80$ Kg and $P = $ USD 3.6.

> [!example] Why the others fail
> b: at $Q=90$ demand is $6-2.7=3.3$ and supply is $2+1.8=3.8$, so the curves do not meet. c: at $Q=85$ demand is $3.45$, not 2. The quick check for any option is to plug $Q$ into both curves.

See [[Lec_04-Supply and Market Equilibrium]].

## Q2 — Consumer and producer surplus

> **Question.** Same market. What are the consumer surplus and the producer surplus?
> a. The consumer's surplus is 96 and the producer's surplus is 64.
> b. The producer's surplus is 64 and the consumer's surplus is 96.
> c. The consumer's surplus is 46 and the producer's surplus is 69.
> d. All the other answers are wrong.

Surplus is the triangle between the curve and the price, out to the equilibrium quantity. The demand curve hits the vertical axis at 6 and the supply curve at 2.

$$
CS = \tfrac{1}{2}\,(80)\,(6 - 3.6) = 96
$$

$$
PS = \tfrac{1}{2}\,(80)\,(3.6 - 2) = 64
$$

> [!success] Answer: a and b (both accepted)
> $CS = 96$, $PS = 64$. Options a and b say the same thing in a different order, so the official key states that both are accepted.

See [[Lec_09-Welfare Consumer and Producer Surplus]].

## Q3 — A USD 0.75 tax on producers

> **Question.** The government taxes the producers of carrots, USD 0.75 per Kg. Find the supply curve after the tax algebraically. Which is correct?
> a. The buyer pays 4.05, the quantity is 65 Kg and the seller receives 3.3.
> b. The buyer pays 3.3, the quantity is 75 and the seller receives 4.05.
> c. The buyer pays 5, the quantity is 105 and the seller receives 3.3.
> d. All the other answers are wrong.

A tax on producers raises what they must be paid by the tax, so the supply curve shifts **up** by 0.75 (equivalently, left).

$$
P_{\text{after tax supply}} = 2 + 0.02Q + 0.75 = 2.75 + 0.02Q
$$

Set equal to demand. This price is what the **buyer pays**.

$$
6 - 0.03Q = 2.75 + 0.02Q
$$

$$
3.25 = 0.05Q \quad\Rightarrow\quad Q = 65
$$

$$
P_{\text{buyer}} = 6 - 0.03(65) = 4.05
$$

$$
P_{\text{seller}} = 4.05 - 0.75 = 3.3
$$

Check: the seller price must also lie on the original supply curve, $2 + 0.02(65) = 3.3$. It does.

> [!success] Answer: a
> Buyer pays 4.05, quantity 65 Kg, seller receives 3.3.

> [!warning] Trap
> Option b swaps the two prices: the buyer must pay more than the seller receives, because the tax is the wedge between them. Option c has a quantity above the pre-tax 80, but a tax always reduces quantity.

> [!tip] Intuition
> The buyer's price rose by 0.45 (3.6 to 4.05) and the seller's fell by 0.30 (3.6 to 3.3). The two add to the 0.75 tax. Demand is steeper than supply in price terms, so the buyer bears the larger share.

See [[Lec_11-Taxes]].

## Q4 — Deadweight loss of the tax

> **Question.** Same tax. Which is correct about the deadweight loss?
> a. The deadweight loss is 5.625.
> b. The deadweight loss is 6.256.
> c. The deadweight loss is 7.25.
> d. All the other answers are wrong.

The deadweight loss is the triangle whose height is the tax (the wedge) and whose base is the quantity lost.

$$
DWL = \tfrac{1}{2}\,(\text{tax})\,(Q_{\text{before}} - Q_{\text{after}}) = \tfrac{1}{2}\,(0.75)\,(80 - 65) = 5.625
$$

> [!success] Answer: a
> $DWL = 5.625$.

Check with surpluses: before the tax $CS + PS = 160$. After the tax, $CS = \tfrac12(65)(6-4.05) = 63.375$ and $PS = \tfrac12(65)(3.3-2) = 42.25$, and the government collects $0.75 \times 65 = 48.75$. Total $= 154.375$, and $160 - 154.375 = 5.625$.

---

# Part B: Externalities and policy

## Q5 — Encouraging education

> **Question.** The government wants to encourage education because of its positive spillovers. Which claim is correct?
> a. The government can put a Pigouvian tax.
> b. The government can offer a scholarship program and that would increase welfare.
> c. If the government offers a scholarship program, there would be a deadweight cost involved.
> d. All the other answers are wrong.

With a **positive externality** the market produces too little, because buyers ignore the benefit to others. The fix is a **subsidy** that moves private benefit up to social benefit, which is what a scholarship does.

> [!success] Answer: b
> A scholarship raises quantity toward the social optimum, so welfare rises.

> [!example] Why the others fail
> a: a Pigouvian **tax** is for a negative externality. It would cut education further. c: a correctly sized subsidy removes the deadweight loss that exists in the free market. It does not create one. (An oversized subsidy would, but the claim as stated is not generally true.)

See [[Lec_12-Externalities]].

## Q13 — Vaccination: market vs social optimum

> **Question.** In the vaccination market: marginal private benefit $P = 120 - 20Q$, marginal private cost $P = 20Q$, marginal social benefit $P = 160 - 20Q$. What is the difference between the free-market quantity and the socially optimal quantity?
> a. 1  b. 2  c. 3  d. All the other answers are wrong.

![[PP06_q13_vaccine_externality.png|640]]

The market uses the **private** curves, the social optimum uses the **social** curves.

$$
\text{Market: } 120 - 20Q = 20Q \;\Rightarrow\; Q = 3
$$

$$
\text{Social optimum: } 160 - 20Q = 20Q \;\Rightarrow\; Q = 4
$$

The difference is $4 - 3 = 1$.

> [!success] Answer: a
> The market produces 3, the social optimum is 4, so the gap is 1.

> [!tip] Intuition
> The social benefit curve sits 40 above the private one (the spillover to other people), so the efficient quantity is higher. The market under-provides vaccines.

See [[Lec_12-Externalities]].

## Q20 — Subsidy for young couples only

> **Question.** The government announces subsidised apartments for young couples. People who already bought or own an apartment are not eligible. What is the impact on price and quantity for each group?
> a. The price rises for the non-eligible group and falls for the eligible young couples. The eligible buy more, the non-eligible buy fewer.
> b. The price falls for both groups. The eligible buy more, the non-eligible buy fewer.
> c. The price rises for the non-eligible group and does not change for the eligible. The eligible buy fewer, the non-eligible buy more.
> d. All the other answers are wrong.

The subsidy raises demand from the eligible group. With the same supply, that pushes the **market price up**. Eligible buyers pay that higher price minus the subsidy, so their **net price falls** and they buy more. Non-eligible buyers face the higher market price with no subsidy, so their price rises and they buy less.

> [!success] Answer: a
> Non-eligible: higher price, smaller quantity. Eligible: lower net price, bigger quantity.

> [!example] Why the others fail
> b: the non-eligible price cannot fall when demand has increased and supply is unchanged. c: a subsidy cannot raise the eligible group's net price or lower their quantity.

See [[Lec_10-Price Controls]] and [[Lec_11-Taxes]] for subsidies as the mirror image of taxes.

---

# Part C: Elasticity

## Q6 — Raising price to raise revenue

> **Question.** To raise revenue by raising price, on which assumption about the price elasticity of demand (absolute values) should the recommendation be based, for the plan to be most successful?
> a. Elasticity 0.5. b. Elasticity 3. c. Elasticity 1.6. d. All the other answers are wrong.

Revenue is $P \times Q$. If demand is **inelastic** (elasticity below 1), a price rise lowers quantity by a smaller percentage, so revenue rises. The smaller the elasticity, the larger the gain.

> [!success] Answer: a
> Elasticity 0.5 is the only inelastic option, and the most inelastic, so it gives the biggest revenue gain.

> [!example] Why the others fail
> b and c are both above 1 (elastic), so a price rise cuts quantity proportionally more and revenue falls.

See [[Lec_08-Elasticity]].

## Q7 — Which tax has the lowest deadweight loss?

> **Question.** a. USD 2 tax on soda. b. USD 2 tax on antibiotics. c. USD 2 tax on gasoline. d. All the other answers are wrong.

Deadweight loss is smaller when demand (or supply) is **less elastic**, because the tax changes the quantity traded less. Antibiotics are a necessity with no close substitutes, so demand is the least elastic. Soda has many substitutes (very elastic). Gasoline is a necessity in the short run but has more substitutes than antibiotics.

> [!success] Answer: b
> A tax on antibiotics distorts quantity the least.

See [[Lec_08-Elasticity]] and [[Lec_11-Taxes]].

## Q9 — Raising the milk price

> **Question.** Milk sellers raised the price because of higher production costs. They then saw an increase in revenue. The original price was 27 NIS and the original quantity was 100. The new price is 35. What is a possible new quantity?
> a. Q = 129. b. All the other answers are wrong. c. Q = 80. d. Not enough information to determine a possible new quantity.

Original revenue: $27 \times 100 = 2{,}700$. Two conditions pin down the answer:

1. **Law of demand.** The price rose along the demand curve, so quantity must **fall** below 100.
2. **Revenue rose.** The new quantity must satisfy $35 \times Q > 2{,}700$, so $Q > 77.1$.

$Q = 80$ meets both: $35 \times 80 = 2{,}800 > 2{,}700$.

> [!success] Answer: c
> $Q = 80$.

> [!example] Why the others fail
> a: $Q = 129$ would give revenue of 4,515, which is higher, but it needs quantity to rise when price rises, which breaks the law of demand. The reason for the price rise was a cost increase, a **supply** shift, so the move is along demand. d: the two conditions above are enough to test each option.

> [!tip] Intuition
> Revenue rising after a price rise tells you demand is inelastic in this range: here the price rose about 30 percent and quantity fell about 20 percent.

See [[Lec_08-Elasticity]].

---

# Part D: Costs and the competitive firm

## Q8 — Average fixed cost (first version)

> **Question.** The only variable input is labour, and output is zero with no workers. When 4 units are produced, total cost is USD 1000 and average variable cost is USD 50. What is average fixed cost at 10 units? Round the answer.
> a. 80. b. 250. c. 200. d. All the other answers are wrong.

Variable cost at 4 units: $AVC \times Q = 50 \times 4 = 200$. Fixed cost is whatever total cost does not vary: $1000 - 200 = 800$. Fixed cost does not change with output, so at 10 units:

$$
AFC = \frac{FC}{Q} = \frac{800}{10} = 80
$$

> [!success] Answer: a
> USD 80.

> [!example] Why the others fail
> 250 is $1000 / 4$, which is average total cost at 4 units. 200 is the variable cost, not a per-unit fixed cost.

See [[Fixed Costs]], [[Variable Costs]], [[Average Fixed Cost]], [[Lec_05-Supply and Costs of Production]].

## Q17 — Average fixed cost (second version)

> **Question.** Same set-up. At 6 units, total cost is USD 600 and average variable cost is USD 87.75. What is average fixed cost at 10 units? Round the answer.
> a. 7. b. 22. c. 82. d. All the other answers are wrong.

$$
VC = 87.75 \times 6 = 526.5
$$

$$
FC = 600 - 526.5 = 73.5
$$

$$
AFC_{10} = \frac{73.5}{10} = 7.35 \approx 7
$$

> [!success] Answer: a
> USD 7 (rounded from 7.35).

## Q12 — Economic vs accounting profit

> **Question.** Guy gave up a food manager job paying 60,000 NIS a year to open a panini truck. Price is 10 NIS per panini, fixed cost is 500 NIS, and variable cost is 2 NIS per panini. In his first month he sold 700 paninis. What is the difference between his monthly economic and accounting profit?
> a. 500. b. 200. c. 100. d. All the other answers are wrong.

Accounting profit counts only explicit costs. Economic profit also subtracts the **implicit cost**: the forgone salary.

$$
\text{Difference} = \text{implicit cost per month} = \frac{60{,}000}{12} = 5{,}000
$$

For reference, accounting profit is $700 \times 10 - 500 - 700 \times 2 = 5{,}100$, so economic profit is $5{,}100 - 5{,}000 = 100$. The question asks for the difference, not for economic profit itself.

> [!success] Answer: d
> The difference is 5,000 NIS, which is not among a to c.

> [!warning] Trap
> Option c (100) is Guy's economic profit, not the difference between the two profits.

See [[Lec_05-Supply and Costs of Production]].

## Q14 — Marginal product with fixed machinery

> **Question.** A new bagel shop starts with a fixed amount of machinery and hires more workers. The marginal product is expected to:
> a. Fall initially, but eventually rise. b. Rise initially, but eventually fall. c. Rise consistently due to diminishing returns. d. All the other answers are wrong.

At first extra workers specialise and use the machines better, so the [[Marginal Product of Labour]] **rises**. Past some point the machines are crowded and each extra worker adds less: [[Diminishing Marginal Product]].

> [!success] Answer: b
> Rise initially, then eventually fall.

> [!example] Why the others fail
> a reverses the order. c is self-contradictory: diminishing returns means marginal product falls.

## Q18 — Profit-maximising output from a table

> **Question.** The couch market is perfectly competitive and the price is USD 500. According to Table 5.1, profit is maximised at how many couches?

| Couches | Total cost |
|---|---|
| 1 | 100 |
| 2 | 400 |
| 3 | 800 |
| 4 | 1300 |
| 5 | 2400 |
| 6 | 3800 |

> a. 4. b. 6. c. All other answers are wrong. d. 5.

![[PP06_q18_couch_profit.png|640]]

A price taker has $MR = P = 500$. Revenue is $500Q$, profit is revenue minus total cost, and marginal cost is the change in total cost.

| Q | Revenue | Total cost | Profit | Marginal cost |
|---|---|---|---|---|
| 1 | 500 | 100 | 400 | 100 |
| 2 | 1000 | 400 | 600 | 300 |
| 3 | 1500 | 800 | 700 | 400 |
| 4 | 2000 | 1300 | 700 | 500 |
| 5 | 2500 | 2400 | 100 | 1100 |
| 6 | 3000 | 3800 | -800 | 1400 |

> [!success] Answer: a
> Produce 4 couches. At Q = 4, $MC = 500 = P$, so the rule $MR = MC$ holds.

> [!warning] Tie
> Profit is 700 at both 3 and 4 couches, because the fourth couch has $MC = MR = 500$ and adds nothing. Only 4 appears among the options, which is why the key picks it. Five and six lose money on the extra units ($MC$ of 1100 and 1400 above the price of 500).

See [[Lec_06-Firms in Competitive Markets]] and [[Marginal Cost]].

## Q19 — Long-run equilibrium

> **Question.** What is true regarding long-term equilibrium?
> a. No firm will want to exit the market. b. No firm will want to enter the market. c. Economic profit is zero. d. All the other answers are correct.

In the long run, entry and exit continue until economic profit is zero. With zero economic profit, no firm wants to leave (it earns as much as in its next best use) and no outsider wants to join. All three statements are true, so d.

> [!success] Answer: d
> All of a, b and c hold.

See [[Lec_06-Firms in Competitive Markets]].

---

# Part E: Shifts and comparative advantage

## Q10 — Burgers, fries and raw meat

> **Question.** Burgers and French fries are complements. October 2019: $Q_s = -8 + 18P$ and $Q_d = 40 - 6P$. February 2020: the price of raw meat rose, and the price of French fries suddenly fell. What can be said about the February 2020 equilibrium for burgers?
> a. Equilibrium price is greater than 2. b. Equilibrium price is less than 2. c. Equilibrium quantity is less than 28. d. All the other answers are wrong.

Start with the October equilibrium.

$$
-8 + 18P = 40 - 6P \;\Rightarrow\; 24P = 48 \;\Rightarrow\; P = 2,\quad Q = 28
$$

Then work out the two shifts.

- **Raw meat is a burger input**, so costlier meat shifts **supply left**: price up, quantity down.
- **Fries are a complement**, and cheaper fries raise demand for burgers, so **demand shifts right**: price up, quantity up.

![[PP06_q10_burger_shifts.png|640]]

The dashed lines show the direction of the shifts, not their size. Price rises in both cases. Quantity is pushed down by one shift and up by the other, so its direction is ambiguous without sizes.

> [!success] Answer: a
> The equilibrium price is greater than 2.

> [!example] Why the others fail
> b: price cannot fall when both shifts push it up. c: quantity might be above or below 28, so the claim cannot be made.

See [[Lec_07-Comparative Statics]].

## Q11 — Absolute and comparative advantage

> **Question.** Hours to produce one unit:
>
> | Country | 1 watch | 1 necklace |
> |---|---|---|
> | China | 4 | 2 |
> | Russia | 8 | 3 |
>
> a. China has the absolute advantage in both goods and the comparative advantage in watches. b. China has the absolute advantage in both and the comparative advantage in necklaces. c. Russia has the absolute advantage in both and the comparative advantage in watches. d. All the other answers are wrong.

**Absolute advantage** means fewer hours: China needs fewer hours for both goods (4 vs 8, 2 vs 3).

**Comparative advantage** means lower opportunity cost. The opportunity cost of one watch is how many necklaces are given up:

$$
\text{China: } \frac{4}{2} = 2 \text{ necklaces},\qquad \text{Russia: } \frac{8}{3} \approx 2.67 \text{ necklaces}
$$

China gives up fewer necklaces per watch, so it has the comparative advantage in watches (and Russia in necklaces).

> [!success] Answer: a
> China: absolute advantage in both, comparative advantage in watches.

See [[Lec_02-PPF and Gains from Trade]].

## Q15 — Substitute goods

> **Question.** Mei Eden and Neviot water are substitutes. If Mei Eden raises its price, what is most likely to happen?
> a. Demand for Neviot will increase, quantity demanded for Mei Eden will decrease. b. Demand for Neviot will decrease, quantity demanded for Mei Eden will increase. c. Demand for Mei Eden will increase, demand for Neviot will increase. d. All the other answers are wrong.

A price change of a good moves **along its own demand curve** (a change in quantity demanded) and **shifts the demand for its substitute**. A higher Mei Eden price lowers the quantity of Mei Eden demanded, and buyers switch to Neviot, so demand for Neviot increases.

> [!success] Answer: a

> [!tip] Intuition
> Own price: change in **quantity demanded**. Another good's price: change in **demand**. This distinction is a classic exam trap.

See [[Lec_03-Perfect Competition and Demand]].

## Q16 — A binding price ceiling

> **Question.** The government sets a binding price ceiling on oranges. What is most likely to happen?
> a. The price decreases and the quantity demanded increases. b. The price increases and the quantity demanded decreases. c. The price remains unchanged. d. All the other answers are wrong.

A binding ceiling sits below the equilibrium price. The price falls to the ceiling, buyers demand more at the lower price, and sellers supply less, so there is a shortage.

> [!success] Answer: a

> [!example] Why the others fail
> b describes a binding price floor. c would be true only for a non-binding ceiling (one set above equilibrium).

See [[Lec_10-Price Controls]].

---

# Recap table

| Q | Topic | Key tool | Answer |
|---|---|---|---|
| 1 | Equilibrium | $D = S$ | a: Q = 80, P = 3.6 |
| 2 | CS and PS | Triangles | a or b: CS 96, PS 64 |
| 3 | Producer tax | Shift supply up by 0.75 | a: 4.05, 65, 3.3 |
| 4 | DWL | Half wedge times quantity lost | a: 5.625 |
| 5 | Education | Subsidy for positive externality | b |
| 6 | Revenue and price | Inelastic demand | a: 0.5 |
| 7 | Lowest DWL | Least elastic good | b: antibiotics |
| 8 | AFC | $FC = TC - AVC \cdot Q$ | a: 80 |
| 9 | Milk | Law of demand plus revenue | c: 80 |
| 10 | Burgers | Two shifts | a: price above 2 |
| 11 | Advantage | Opportunity cost | a: China, watches |
| 12 | Profit gap | Implicit cost | d: 5,000 |
| 13 | Vaccines | Private vs social curves | a: 1 |
| 14 | Marginal product | Rises then falls | b |
| 15 | Substitutes | Own price vs other price | a |
| 16 | Ceiling | Binding below equilibrium | a |
| 17 | AFC | $FC = 73.5$ | a: 7 |
| 18 | Couches | $MR = MC$ at 500 | a: 4 |
| 19 | Long run | Zero economic profit | d |
| 20 | Targeted subsidy | Demand shift, net price | a |

# Related notes

- Hub: [[Principles of Micro]]
- Lectures: [[Lec_04-Supply and Market Equilibrium]], [[Lec_05-Supply and Costs of Production]], [[Lec_06-Firms in Competitive Markets]], [[Lec_07-Comparative Statics]], [[Lec_08-Elasticity]], [[Lec_09-Welfare Consumer and Producer Surplus]], [[Lec_10-Price Controls]], [[Lec_11-Taxes]], [[Lec_12-Externalities]]
- Problem sets: [[PS_04-Supply]], [[PS_05-Costs of Production]], [[PS_08-Elasticity]], [[PS_09-Welfare]], [[PS_11-Taxes]], [[PS_12-Externalities]]
