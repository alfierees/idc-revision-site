---
title: "PP 01: Markets, Surplus, Subsidy and Tax (2021 Moed A)"
type: past-paper
status: worked-solution
exam: "Principles of Microeconomics, February 2021, Moed A"
semester: 1
year: 1
course: "Principles of Micro"
instructor: Dr. Yael Hadass
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - market-equilibrium
  - surplus
  - subsidy
  - tax
  - elasticity
  - price-controls
  - externalities
  - comparative-advantage
aliases:
  - PP01 Micro
  - Micro Exam Feb 2021
  - 2021 Moed A
subject: principles-of-micro
in_scope: true
---

# PP 01: Markets, Surplus, Subsidy and Tax (2021 Moed A)

> Part of: [[Principles of Micro]]
> **Principles of Microeconomics, February 2021 (Moed A)**, Dr. Yael Hadass. 20 multiple-choice questions, 5 points each, 3 hours.
> Builds on: [[Lec_02-PPF and Gains from Trade]], [[Lec_03-Perfect Competition and Demand]], [[Lec_04-Supply and Market Equilibrium]], [[Lec_05-Supply and Costs of Production]], [[Lec_06-Firms in Competitive Markets]], [[Lec_07-Comparative Statics]], [[Lec_08-Elasticity]], [[Lec_09-Welfare Consumer and Producer Surplus]], [[Lec_10-Price Controls]], [[Lec_11-Taxes]], [[Lec_12-Externalities]], [[Lec_13-Public Goods and International Trade]]
> Key concepts: [[Market Equilibrium]], [[Consumer Surplus]], [[Producer Surplus]], [[Subsidy]], [[Per-Unit Tax]], [[Deadweight Loss of a Tax]], [[Price Elasticity of Demand]], [[Midpoint Method]], [[Total Revenue]], [[Price Ceiling]], [[Price Floor]], [[Comparative Advantage]], [[Negative Externality]], [[Club Goods]]

> [!success] Official key, read visually
> The official solution file marks each correct answer with a yellow highlight (Q7 is written out as text, "Answer: B"). I read every mark from the rendered pages, then re-derived each answer below. All 20 re-derivations agree with the key. This is a Moed A paper with a key; it is **not** a tofes 0 paper.

> [!info] No AI-solved questions
> Every answer here is the official one. The explanations and working are expanded from terse key marks, and the intuition callouts are mine.

## What this paper tests

The paper is a one-line-per-skill sweep of the whole course. The same few ideas keep returning:

1. **Linear supply and demand algebra** (Q1 to Q3, Q17, Q19, Q20). Set the two price equations equal to get $Q^*$, then plug back for $P^*$. Surplus, subsidy, tax and price-control questions all start from that equilibrium.
2. **Triangles** for [[Consumer Surplus]], [[Producer Surplus]] and [[Deadweight Loss of a Tax]]: $\tfrac12 \times \text{base} \times \text{height}$.
3. **Shifts versus movements** (Q9, Q10, Q11, Q14). Ask first: which curve moves, and which way?
4. **Costs and firms** (Q6, Q7, Q8): the profit-and-entry story and reading a production table.
5. **Elasticity** (Q15, Q16), **comparative advantage** (Q12, Q13), **externalities and goods types** (Q4, Q5, Q18).

> [!warning] Same data, several questions
> Q1 to Q3 share the pepper market. Q19 and Q20 share the sweatshirt market. Solve the equilibrium once, write it down, and reuse it.

---

# Pepper market (Q1 to Q3)

Prices are in cents per kg, $Q$ in kg.

$$
D:\ P = 250 - 0.02Q \qquad S:\ P = -100 + 0.03Q
$$

![[PP01_q1_pepper_equilibrium_surplus.png|640]]

*Theory diagram built from the two equations in the paper. The blue triangle is consumer surplus, the red triangle is producer surplus.*

## Q1 — Equilibrium price and quantity

**Question.** What is the equilibrium price and quantity?

- A) Equilibrium quantity is 7000 and the equilibrium price is 110 cents.
- B) Equilibrium quantity is 7000 and the equilibrium price is 220 cents.
- C) Equilibrium quantity is 14,000 and the equilibrium price is 50 cents.
- D) Equilibrium quantity is 14,000 and the equilibrium price is 100 cents.

> [!success] Answer: A
> $Q^* = 7000$ kg, $P^* = 110$ cents.

Set demand price equal to supply price (see [[Market Equilibrium]]):

$$
250 - 0.02Q = -100 + 0.03Q \;\Rightarrow\; 350 = 0.05Q \;\Rightarrow\; Q^* = 7000
$$

$$
P^* = 250 - 0.02(7000) = 250 - 140 = 110
$$

Check on supply: $-100 + 0.03(7000) = -100 + 210 = 110$. Both curves agree.

- **B** has the right quantity but 220 is neither curve's price at 7000.
- **C and D** use 14,000. Quantities that big would need the price to be far from where the curves cross.

## Q2 — Consumer and producer surplus

**Question.** What is the consumer surplus and the producer's surplus?

- A) The consumer's surplus is 490,000 and the producer's surplus is 735,000.
- B) The producer's surplus is 1,470,000 and the consumer's surplus is 1,540,000.
- C) The consumer's surplus is 490,000 and the producer's surplus is 15,580,000.
- D) The producer's surplus is 1,050,000 and the consumer's surplus is 7,790,000.

> [!success] Answer: A
> $CS = 490{,}000$ and $PS = 735{,}000$ (cents).

**Consumer surplus** is the triangle between the demand curve and the price line, out to $Q^*$. Demand hits the price axis at 250 (the choke price), and the price is 110, so the height is $250 - 110 = 140$:

$$
CS = \tfrac12 \times 7000 \times (250 - 110) = \tfrac12 \times 7000 \times 140 = 490{,}000
$$

**Producer surplus** is the triangle between the price line and the supply curve. Supply starts at $P = -100$ when $Q = 0$ (a negative intercept, so the height is $110 - (-100) = 210$):

$$
PS = \tfrac12 \times 7000 \times (110 - (-100)) = \tfrac12 \times 7000 \times 210 = 735{,}000
$$

> [!warning] The negative intercept is the trap
> Using 100 instead of $-100$ as the supply intercept gives a height of 10 and a PS far too small. Always read the intercept with its sign. The area is still a triangle, because the triangle is measured from the supply curve all the way down to $Q = 0$.

- **B** has the right shape of numbers but wrong magnitudes (1,470,000 is exactly twice 735,000, and 1,540,000 is not a triangle area here).
- **C and D** have values that come from using the wrong base or height.

> [!tip] Intuition
> Surplus is the gap between what people were willing to pay (or accept) and what they actually paid (or got). Here sellers' gap is bigger than buyers' because the supply curve starts so far below the price.

See also [[Lec_09-Welfare Consumer and Producer Surplus]].

## Q3 — Subsidy to producers

**Question.** The government gives pepper producers a subsidy of 10 cents per kg produced, to increase consumption of this healthy product. Find the supply curve after the subsidy algebraically. Which is correct?

- A) The price that the buyer pays is 106, the quantity is 7200 and the price that the seller receives is 116.
- B) The price that the buyer pays is 116, the quantity is 7200 and the price that the seller receives is 106.
- C) The price that the buyer pays is 116, the quantity is 7000 and the price that the seller receives is 106.
- D) All the answers a, b, c are wrong.

> [!success] Answer: A
> Buyer pays 106, quantity 7200, seller receives 116.

A [[Subsidy]] lowers sellers' cost by 10 cents per kg, so at each quantity the price the **market** needs to charge is 10 lower. The supply curve shifts down by 10:

$$
S_{\text{after}}:\ P = -110 + 0.03Q
$$

Here $P$ is the price the **buyer pays**. Equate with demand:

$$
250 - 0.02Q = -110 + 0.03Q \;\Rightarrow\; 360 = 0.05Q \;\Rightarrow\; Q = 7200
$$

$$
P_{\text{buyer}} = 250 - 0.02(7200) = 250 - 144 = 106
$$

The seller gets the buyer's price **plus** the subsidy:

$$
P_{\text{seller}} = 106 + 10 = 116
$$

Check on the original supply curve: $-100 + 0.03(7200) = 116$. Good.

![[PP01_q3_pepper_subsidy.png|640]]

*Theory diagram: the dashed supply curve is 10 cents lower. Quantity rises from 7000 to 7200, the buyer's price falls from 110 to 106, the seller's rises from 110 to 116.*

- **B** swaps the buyer and seller prices. A subsidy cannot make the buyer pay more than before.
- **C** keeps quantity at 7000, but a subsidy increases quantity.
- **D** is wrong because A is correct.

> [!tip] Intuition
> The buyer's price falls (110 to 106) and the seller's rises (110 to 116). The gap of 10 is the subsidy. The split (4 to the buyer, 6 to the seller) depends on the slopes: the steeper supply curve is where more of the benefit lands.

See [[Lec_11-Taxes]] for the same wedge logic with a tax.

---

# Externalities and goods (Q4, Q5, Q18)

## Q4 — Pollution from steel

**Question.** There is severe pollution emitted in the production of steel. Which claim is correct?

- A) The government can improve welfare by increasing the cost of production.
- B) The government can improve welfare by decreasing the cost of production.
- C) The government can improve welfare by increasing the demand for steel.
- D) The government can improve welfare by increasing the supply for steel.

> [!success] Answer: A
> Raise the cost of production, for example with a Pigovian tax.

Pollution is a [[Negative Externality]] in production: the [[Marginal Social Cost]] is above the [[Marginal Private Cost]], so the market produces too much steel. To fix that, the government wants steel producers to bear the full social cost, which means **raising their cost** (a [[Pigovian Tax]]). That shifts supply left and cuts output toward the [[Socially Optimal Quantity]].

- **B and D** push in the wrong direction: they increase output, which is already too high.
- **C** also raises output.

## Q5 — Tuition subsidy

**Question.** In Israel, public university tuition is about 10,000 NIS per year, while private colleges charge about 35,000 to 45,000 NIS. Which statement is true?

- A) The government subsidizes tuition since the marginal social cost of education is higher than the marginal private cost of education.
- B) The government subsidizes tuition since the marginal social benefit of education is higher than the marginal private benefit of education.
- C) We can't infer from the paragraph if the marginal social benefit is above the marginal private benefits.
- D) The government subsidizes tuition because the marginal private benefit is above the marginal social benefit.

> [!success] Answer: B
> Education has a positive externality: $MSB > MPB$.

A subsidy is the standard cure for a [[Positive Externality]]. Education benefits others (a more productive workforce, informed citizens), so [[Marginal Social Benefit]] exceeds [[Marginal Private Benefit]]. Without help, the market under-provides it, and a [[Corrective Subsidy]] moves quantity toward the efficient level.

- **A** says social cost above private cost, which is the negative externality case (a tax would be the fix).
- **C** ignores that a government choosing to subsidize is evidence of a positive externality, which is exactly the inference the question wants.
- **D** reverses the inequality: a private benefit above the social benefit would justify a tax, not a subsidy.

See [[Lec_12-Externalities]].

## Q18 — Privatising air traffic control

**Question.** The US government considers privatising Air Traffic Control (ATC), financed by user fees. If this becomes law, what happens to the ATC good?

- a) ATC would become non-rival and non-excludable.
- b) ATC would remain non-rival and become excludable.
- c) ATC would become non-rival and remain non-excludable.
- d) ATC would remain non-rival and remain non-excludable.

> [!success] Answer: b
> Remains non-rival, becomes excludable. It is a [[Club Goods|club good]].

Rivalry is a property of the good: one more aircraft being guided does not reduce the guidance available to others, so ATC stays **non-rival**. Excludability depends on whether non-payers can be kept out. Under user fees, an airline that does not pay can be denied the service, so it becomes **excludable**. Non-rival plus excludable is a club good. (Before privatisation, with no fees, it was closer to a public good.)

- **a** has it become non-excludable, which fees contradict.
- **c** and **d** keep it non-excludable, which fees contradict.

See [[Lec_13-Public Goods and International Trade]].

---

# Costs and firms (Q6, Q7, Q8)

## Q6 — Sneakers: price 10, ATC 5, AVC 3

**Question.** A pair of sneakers sells for USD 10 (the market price). Average total cost is USD 5 and average variable cost is USD 3. Which statements are true?

- A) The market price as well as the economic profit will fall in the long run.
- B) The number of firms that manufacture sneakers will not change in the long run.
- C) The economic profit in this situation is zero.
- D) The economic profit is equal to the accounting profit.

> [!success] Answer: A
> Positive profit attracts entry, which pushes price (and profit) down.

Profit per pair is $P - ATC = 10 - 5 = 5 > 0$. In a [[Competitive Market]], positive [[Economic Profit]] attracts new firms, market supply shifts right, and the price falls until $P = ATC$ and economic profit is zero (see [[Lec_06-Firms in Competitive Markets]]). So both price and profit fall in the long run.

- **B** is false: entry changes the number of firms.
- **C** is false: the profit is 5 per pair, not zero (zero is the long-run result).
- **D** is false: [[Economic Profit]] subtracts [[Implicit Costs]] too, so it is smaller than [[Accounting Profit]] unless implicit costs are zero.

## Q7 — Output from average costs

**Question.** With a fixed cost of USD 600, a firm has average total cost of USD 4 and average variable cost of USD 2.50. Its output is:

- A) 200 units
- B) 400 units
- C) 800 units
- D) 1600 units

> [!success] Answer: B (written out in the key)
> $Q = 400$ units.

$ATC = AFC + AVC$, so $AFC = 4 - 2.50 = 1.50$. Since $AFC = FC / Q$:

$$
Q = \frac{600}{1.50} = 400
$$

Check: $FC/Q = 600/400 = 1.5$.

- **A** would give $AFC = 3$, **C** would give $0.75$, **D** would give $0.375$. None matches 1.50.

## Q8 — Diminishing marginal product

**Question.** Using the table below, diminishing marginal product begins with the ___ employee.

| Workers | Pillows per day | Marginal product |
|---|---|---|
| 1 | 7 | 7 |
| 2 | 14 | 7 |
| 3 | 22 | 8 |
| 4 | 28 | 6 |
| 5 | 24 | -4 |
| 6 | 23 | -1 |

- A) Fourth
- B) Second
- C) Third
- D) Fifth

> [!success] Answer: A (Fourth)
> The fourth worker is the first whose marginal product (6) falls below the one before (8).

[[Marginal Product]] is the change in total output from one more worker. It runs 7, 7, 8, 6, then turns negative. [[Diminishing Marginal Product]] begins when marginal product starts to fall, which is the fourth worker (6 is less than 8).

> [!warning] Do not pick the first lower number you see
> The second worker adds 7, the same as the first, so it is not diminishing. The third *rises* to 8 (increasing returns). The first fall is at worker four. The fifth worker is where marginal product is *negative*, a different and later event.

- **B** (second): marginal product is flat at 7, not falling.
- **C** (third): marginal product rises to 8.
- **D** (fifth): marginal product is already falling since the fourth worker. The fifth is the first to be negative.

See [[Lec_05-Supply and Costs of Production]] and [[Lec_14-Production Costs Worksheet]].

---

# Shifts and comparative statics (Q9, Q10, Q11, Q14)

## Q9 — Subsidy for only some egg farmers

**Question.** The government subsidises egg producers who live close to the border with Lebanon. Egg farmers elsewhere in Israel are not eligible. Which claim is true?

- A) The price of eggs in the market will **decrease** for the buyer. Farmers at the border will increase production and receive a **higher** price than before. Farmers elsewhere will receive a **lower** price than before.
- B) The price for the buyer will **increase**. Border farmers increase production and receive the **same** price as before. Others receive a **lower** price.
- C) The price for the buyer will **increase**. Border farmers receive the **same** price. Others receive a **higher** price.
- D) The price for the buyer will **decrease**. Border farmers increase production and receive a **lower** price. Others receive a **lower** price.

> [!success] Answer: A
> Buyer price falls. Subsidised farmers receive more per egg (market price plus the subsidy). Unsubsidised farmers receive less.

The key diagram has three panels: other farmers, border farmers, and the whole market.

1. **Border farmers' supply shifts** (the subsidy lowers their cost), so **market supply shifts right** ($S_0$ to $S_1$).
2. A larger market supply at the same demand means the **market price falls**, from $P_0$ to $P_B$. That is the price buyers pay, and it is also the price every farmer sells at in the market.
3. **Other farmers** (not eligible) see the lower market price $P_B$, move down their own supply curve and **cut production**. They receive less per egg.
4. **Border farmers** sell at the lower market price but also receive the subsidy on every egg. Their total per-egg revenue is $P_B + \text{subsidy}$, which in the key diagram sits above the old price $P_0$ (the label $P_{\text{seller}}$). They expand production.

- **B and C** claim the buyer's price rises. A shift of supply to the right cannot raise the price.
- **D** says border farmers receive a lower price. They get the market price *plus* the subsidy, and the key's diagram shows this is above $P_0$.

> [!tip] Intuition
> A subsidy is a gift to a **subset** of sellers, but it lowers the price that everyone faces. The un-subsidised sellers are hurt: same costs, lower price.

## Q10 — Pizza demand, three events

**Question.** Burger and pizza restaurants both deliver. Consumers are indifferent between pizza and burgers. The chart shows potential pizza demand curves, and point D is the current demand. Three events occur consecutively:

- I. The burger restaurant offers a discount on burgers.
- II. Consumer income increases.
- III. The price of pizza decreases.

Which of points A to G shows the quantity demanded and price after all three?

- a) Point F
- b) Point C
- c) Point E
- d) Point G

> [!success] Answer: c (Point E)
> I shifts demand left. II shifts it back right. III is a movement down the demand curve.

The chart has three parallel demand curves. Points A and B are on the left curve, C, D and E are on the middle curve, and F and G are on the right curve.

![[PP01_q10_pizza_demand_shifts.png|640]]

*Theory diagram, reconstructed from the chart in the paper. The red arrow is event I, the green arrow is the combination of II and III.*

- **I.** Burgers become cheaper. Burgers are a [[Substitutes|substitute]] for pizza (consumers are indifferent between them), so demand for pizza **falls**: a shift **left**, from D to the left curve (point A, at the same price).
- **II.** Income rises. Pizza is assumed to be a [[Normal Good]], so demand **rises**: a shift **right**, back to the middle curve.
- **III.** The price of pizza itself falls. That is a **movement along** the curve (a [[Change in Quantity Demanded]]), not a shift. On the middle curve it moves down and to the right: from D to **E**.

> [!warning] Own price does not shift the curve
> Only the *other* factors (substitute prices, income, tastes, expectations) shift a demand curve. A change in the good's own price moves you along it.

- **F and G** are on the right curve, which would need a net rightward shift. The two shifts cancel.
- **C** is on the middle curve but at a *higher* price, so it would follow a price rise, not a fall.

See [[Lec_03-Perfect Competition and Demand]] and [[Lec_07-Comparative Statics]].

## Q11 — Increase in supply versus quantity supplied

**Question.** Economist A says supply of bananas increased. Economist B says quantity supplied increased. In which scenario is Economist A correct?

- A) An increase in the price of fertiliser for growing bananas.
- B) An increase in the price of bananas.
- C) Sellers expect the price of bananas to increase in the coming year.
- D) A decrease in the price of banana-picking machinery.

> [!success] Answer: D
> Cheaper machinery lowers costs and shifts supply right.

An **increase in supply** (the whole curve shifts right) comes from a change in one of the [[Determinants of Supply]]: input prices, technology, number of sellers, expectations. An **increase in quantity supplied** (movement along the curve) comes only from a change in the good's own price.

- **D:** cheaper machinery lowers input costs, so supply shifts right. Economist A is right.
- **B:** the banana price rising is a movement along the curve. Economist B is right, not A.
- **A:** dearer fertiliser raises costs, so supply **decreases** (shifts left).
- **C:** if sellers expect higher prices *next year*, they hold back some supply now, so current supply **decreases**.

See [[Change in Supply]] and [[Change in Quantity Supplied]] in [[Lec_04-Supply and Market Equilibrium]].

## Q14 — Both curves shift: Q up, P ambiguous

**Question.** In the market for milk, both supply and demand shifted. The result was a higher equilibrium quantity and an ambiguous equilibrium price. Which events could have occurred?

- A) Consumer preferences move in favour of milk, and milk-production technology improves.
- B) A successful advertising campaign for the health benefits of milk, and a cow plague that killed many cows.
- C) A decrease in consumer income, and cows become cheaper to buy.
- D) All answers are correct.

> [!success] Answer: A
> Demand right and supply right: $Q$ certainly rises, $P$ is ambiguous.

Use the [[Simultaneous Shifts]] rule. Work out each shift, then see which variable is determined.

| Option | Demand | Supply | Effect on Q | Effect on P |
|---|---|---|---|---|
| A | right (preferences) | right (technology) | up | ambiguous |
| B | right (advertising) | left (cow plague) | ambiguous | up |
| C | left (if milk is a normal good) | right (cheaper cows) | ambiguous | down |

Both curves shifting right raises the quantity for sure. The price depends on which shift is bigger, so it is ambiguous. That is exactly the stated outcome.

- **B** gives a *higher price* with an ambiguous quantity: the opposite pattern.
- **C** gives a *lower price* with an ambiguous quantity.
- **D** fails because B and C do not match.

> [!tip] Intuition
> When shifts agree on a direction for a variable, that variable is sure. When they disagree, it is ambiguous. Both-right fixes quantity and leaves price open. Demand-right with supply-left fixes price (up) and leaves quantity open.

See [[Lec_07-Comparative Statics]].

---

# Trade (Q12, Q13)

Comparative advantage is the lower [[Opportunity Cost]]. With hours per unit, the opportunity cost of one couch is (hours per couch) divided by (hours per bed), measured in beds.

## Q12 — Drew and Sally

| | Hours per couch | Hours per bed |
|---|---|---|
| Drew | 6 | 3 |
| Sally | 5 | 4 |

**Question.** Which statement is correct?

- A) Drew has the comparative advantage in producing couches.
- B) Sally has the comparative advantage in producing couches.
- C) Sally has the comparative advantage in producing couches and absolute advantage in producing both goods.
- D) Sally has the comparative advantage in producing beds and the absolute advantage in producing couches.

> [!success] Answer: B
> Sally has the comparative advantage in couches.

Opportunity cost of one couch, in beds:

| | Opportunity cost of 1 couch | Opportunity cost of 1 bed |
|---|---|---|
| Drew | $6/3 = 2$ beds | $3/6 = 0.5$ couch |
| Sally | $5/4 = 1.25$ beds | $4/5 = 0.8$ couch |

Sally gives up less to make a couch (1.25 against 2), so she has the [[Comparative Advantage]] in couches. Drew gives up less to make a bed (0.5 against 0.8), so he has it in beds.

- **A** is backwards.
- **C** is wrong on absolute advantage: Sally is faster at couches (5 against 6 hours), but Drew is faster at beds (3 against 4). Sally does not have the [[Absolute Advantage]] in both.
- **D** says Sally has the comparative advantage in beds, which is false.

## Q13 — Bob and Leslie

| | Hours per couch | Hours per bed |
|---|---|---|
| Bob | 3 | 6 |
| Leslie | 4 | 5 |

**Question.** Which statement is correct?

- A) Bob has the comparative advantage in producing couches.
- B) Leslie has the comparative advantage in producing couches.
- C) Bob has the comparative advantage in producing couches and absolute advantage in producing both goods.
- D) Bob has the comparative advantage in producing beds and the absolute advantage in producing couches.

> [!success] Answer: A
> Bob has the comparative advantage in couches.

| | Opportunity cost of 1 couch | Opportunity cost of 1 bed |
|---|---|---|
| Bob | $3/6 = 0.5$ bed | $6/3 = 2$ couches |
| Leslie | $4/5 = 0.8$ bed | $5/4 = 1.25$ couches |

Bob gives up 0.5 bed per couch against Leslie's 0.8, so he has the comparative advantage in couches. Leslie has it in beds.

- **B** is backwards.
- **C** is false: Leslie needs 5 hours per bed against Bob's 6, so Leslie has the absolute advantage in beds. Bob is only better at couches.
- **D** says Bob's comparative advantage is in beds, which is false.

> [!tip] Intuition
> Absolute advantage compares hours. Comparative advantage compares what you give up. You can be faster at everything and still not have the comparative advantage in everything. Q12 and Q13 test exactly this.

See [[Lec_02-PPF and Gains from Trade]].

---

# Elasticity (Q15, Q16)

## Q15 — New price for a bigger quantity

**Question.** The price is 15 and quantity demanded is 350. Find the new price that increases quantity demanded by 75 units, if the price elasticity is $-1.2$. Round to the nearest whole number.

- a. 13
- b. 9
- c. 7
- d. 16

> [!success] Answer: a (13)
> $P \approx 13$ using the [[Midpoint Method]].

Elasticity is the percentage change in quantity divided by the percentage change in price. The new quantity is $350 + 75 = 425$.

$$
\%\Delta Q = \frac{425 - 350}{(425 + 350)/2} = \frac{75}{387.5} \approx 0.1935
$$

$$
\%\Delta P = \frac{\%\Delta Q}{-1.2} = \frac{0.1935}{-1.2} \approx -0.1613
$$

Let the new price be $P_2$. The midpoint percentage change in price is:

$$
\frac{P_2 - 15}{(P_2 + 15)/2} = -0.1613
$$

Solving gives $P_2 \approx 12.76$, which rounds to **13**.

> [!warning] Only the midpoint method gives an option on the list
> A simple percentage change from the starting point ($75/350 \approx 21.4\%$, so a price fall of about $17.9\%$) gives $P_2 \approx 12.3$, which rounds to 12. That is **not** an option. The key answer 13 matches the midpoint method used in [[Lec_08-Elasticity]]. If a question asks for a rounded whole-number price, check which method the answer list fits.

- **b (9)** and **c (7)** are far too low: the price would need to fall by 40% or more.
- **d (16)** is a price *rise*, but a higher price lowers quantity demanded.

## Q16 — Raising price to raise revenue

**Question.** A hotel owner wants to increase revenue, and an employee suggests raising room prices. For this plan to be the most successful, it should be based on the assumption that demand for hotel rooms has a price elasticity of:

- a) $-1.2$
- b) $-1.5$
- c) $-0.5$
- d) $-0.2$

> [!success] Answer: d ($-0.2$)
> The most inelastic demand, so quantity falls least.

[[Total Revenue]] $= P \times Q$. Raising price raises revenue only if demand is **inelastic** ($|\varepsilon| < 1$), because the percentage fall in quantity is smaller than the percentage rise in price. The more inelastic, the bigger the revenue gain.

- **a, b** ($-1.2$, $-1.5$): elastic. Quantity falls proportionally more than price rises, so revenue **falls**.
- **c** ($-0.5$): inelastic, so revenue rises, but less than with $-0.2$.
- **d** ($-0.2$): quantity barely responds, so the price rise is almost pure gain.

See [[Lec_08-Elasticity]].

---

# Price controls (Q17)

## Q17 — Avocados: ceiling and floor

**Question.** In the avocado market, demand is $Q_d = 20 - 2P$ and supply is $Q_s = -10 + 2P$. If a price ceiling is placed at 5, ______; if a price floor is placed at 10, ______.

- A) nothing will change, nothing will change
- B) there will be a shortage of 10 units, there will be a surplus of 10 units
- C) there will be a surplus of 10 units, there will be a shortage of 10 units
- D) there will be a surplus of 2 units, there will be a shortage of 6 units

> [!success] Answer: B
> Ceiling at 5: shortage of 10. Floor at 10: surplus of 10.

First find the free-market equilibrium:

$$
20 - 2P = -10 + 2P \;\Rightarrow\; 30 = 4P \;\Rightarrow\; P^* = 7.5,\quad Q^* = 5
$$

A [[Price Ceiling]] only binds if it is **below** equilibrium, a [[Price Floor]] only binds if it is **above**. Here 5 is below 7.5 and 10 is above 7.5, so both bind.

**Ceiling at 5:**

$$
Q_d = 20 - 2(5) = 10 \qquad Q_s = -10 + 2(5) = 0 \qquad \text{shortage} = 10 - 0 = 10
$$

**Floor at 10:**

$$
Q_d = 20 - 2(10) = 0 \qquad Q_s = -10 + 2(10) = 10 \qquad \text{surplus} = 10 - 0 = 10
$$

![[PP01_q17_avocado_ceiling_floor.png|640]]

*Theory diagram from the two equations in the paper (here the axes are Q horizontal, P vertical). Each dashed line is a control.*

- **A** would be true only if neither constraint were binding (a ceiling above 7.5 or a floor below).
- **C** reverses the cases: a ceiling creates a shortage, never a surplus.
- **D** gives numbers that do not follow from either calculation.

> [!tip] Intuition
> Ceiling below equilibrium: buyers want a lot, sellers offer little, so there is a shortage. Floor above equilibrium: sellers offer a lot, buyers want little, so there is a surplus.

See [[Lec_10-Price Controls]].

---

# Tax on sweatshirts (Q19, Q20)

Prices are in NIS.

$$
D:\ P = 500 - 0.4Q \qquad S:\ P = -50 + 0.1Q
$$

The government taxes the **producers** 10 NIS per sweatshirt sold.

**Pre-tax equilibrium:**

$$
500 - 0.4Q = -50 + 0.1Q \;\Rightarrow\; 550 = 0.5Q \;\Rightarrow\; Q = 1100,\quad P = 500 - 0.4(1100) = 60
$$

![[PP01_q19_sweatshirt_tax_dwl.png|640]]

*Theory diagram from the two equations in the paper. The dashed supply curve is shifted up by the tax. The grey triangle at the right is the deadweight loss.*

## Q19 — Who pays, and how much does quantity fall

**Question.** Which statement is true?

- a. The price before tax is 60. The seller receives 58 NIS after tax, the buyer pays 68 NIS after tax, and the equilibrium quantity declined by 20 units due to the tax.
- b. The price before tax is 60. The seller receives 68 NIS after tax, the buyer pays 58 NIS after tax, and the equilibrium quantity declined by 20 units due to the tax.
- c. The tax is divided between the buyer and the seller, but it is impossible to say whether the buyer or the seller shares a bigger burden.
- d. The equilibrium quantity before tax is 1080, the equilibrium price before tax is 60.

> [!success] Answer: a
> Pre-tax price 60. After tax: buyer pays 68, seller keeps 58, quantity falls by 20 (1100 to 1080).

A [[Per-Unit Tax]] on sellers raises each seller's cost by 10, so the supply curve (in terms of the buyer's price) shifts up by 10:

$$
S_{\text{tax}}:\ P = -50 + 10 + 0.1Q = -40 + 0.1Q
$$

Equate with demand:

$$
500 - 0.4Q = -40 + 0.1Q \;\Rightarrow\; 540 = 0.5Q \;\Rightarrow\; Q = 1080
$$

$$
P_{\text{buyer}} = 500 - 0.4(1080) = 500 - 432 = 68 \qquad P_{\text{seller}} = 68 - 10 = 58
$$

Quantity fell from 1100 to 1080, a drop of 20.

**Incidence** ([[Tax Incidence]]): the buyer's price rose from 60 to 68, so the buyer pays 8 of the 10. The seller's net price fell from 60 to 58, so the seller pays 2. Demand is steeper than supply (slope 0.4 against 0.1), so the buyer bears more.

- **b** swaps the buyer and seller prices. A tax *on the seller* cannot make the buyer pay less.
- **c** is false: the shares can be computed (8 and 2), and the buyer's is bigger.
- **d** has the pre-tax quantity wrong: it is 1100, not 1080 (1080 is the post-tax quantity).

## Q20 — Deadweight loss

**Question.** Which statement is true about the deadweight loss?

- a. The deadweight loss is 50.
- b. The deadweight loss is 25.
- c. The deadweight loss is 100.
- d. The deadweight loss is 175.

> [!success] Answer: c (100)
> $DWL = \tfrac12 \times 10 \times 20 = 100$ NIS.

The [[Deadweight Loss of a Tax]] is the triangle whose **height** is the tax wedge (10) and whose **base** is the fall in quantity (20):

$$
DWL = \tfrac12 \times \text{tax} \times \Delta Q = \tfrac12 \times 10 \times (1100 - 1080) = 100
$$

- **a (50)** forgets that the triangle needs both $\tfrac12$ and the full 20-unit base (it would come from $\tfrac12 \times 10 \times 10$).
- **b (25)** and **d (175)** do not come from the wedge and quantity change.

> [!warning] Common slip
> Using the *new* equilibrium quantity (1080) or the old one (1100) as the base. The base is the **change** in quantity, 20, because those 20 units are the trades that no longer happen.

> [!tip] Intuition
> The 20 units not traded each had a buyer's value above the seller's cost (a gap of up to 10), and the tax stopped them. The triangle sums those lost gains.

See [[Lec_11-Taxes]] and [[Lec_09-Welfare Consumer and Producer Surplus]].

---

# Recap table

| Q | Topic | Key step | Answer |
|---|---|---|---|
| 1 | Equilibrium | $250 - 0.02Q = -100 + 0.03Q$ | A: 7000, 110 |
| 2 | CS and PS | two triangles, heights 140 and 210 | A: 490,000 and 735,000 |
| 3 | Producer subsidy | shift S down 10, $Q = 7200$ | A: buyer 106, seller 116 |
| 4 | Pollution | negative externality, raise cost | A |
| 5 | Tuition | positive externality, $MSB > MPB$ | B |
| 6 | Sneakers | $P > ATC$ so entry, price falls | A |
| 7 | Output | $AFC = 1.5$, $Q = 600/1.5$ | B: 400 |
| 8 | Production table | MP: 7, 7, 8, 6 | A: fourth |
| 9 | Targeted subsidy | market price falls, subsidised farmers gain | A |
| 10 | Pizza demand | I left, II right, III along | c: E |
| 11 | Supply vs quantity supplied | input price shifts supply | D |
| 12 | Comparative advantage | Sally 1.25 against Drew 2 | B |
| 13 | Comparative advantage | Bob 0.5 against Leslie 0.8 | A |
| 14 | Double shift | demand right, supply right | A |
| 15 | Elasticity | midpoint, new price near 12.76 | a: 13 |
| 16 | Elasticity and revenue | inelastic demand | d: $-0.2$ |
| 17 | Price controls | $P^* = 7.5$, both bind | B |
| 18 | Goods | non-rival, now excludable | b |
| 19 | Tax incidence | $S$ up 10, $Q = 1080$ | a |
| 20 | Deadweight loss | $\tfrac12 \times 10 \times 20$ | c: 100 |

## Related notes

- Hub: [[Principles of Micro]]
- Lectures: [[Lec_02-PPF and Gains from Trade]], [[Lec_03-Perfect Competition and Demand]], [[Lec_04-Supply and Market Equilibrium]], [[Lec_05-Supply and Costs of Production]], [[Lec_06-Firms in Competitive Markets]], [[Lec_07-Comparative Statics]], [[Lec_08-Elasticity]], [[Lec_09-Welfare Consumer and Producer Surplus]], [[Lec_10-Price Controls]], [[Lec_11-Taxes]], [[Lec_12-Externalities]], [[Lec_13-Public Goods and International Trade]]
- Worksheet: [[Lec_14-Production Costs Worksheet]]
