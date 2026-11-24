---
title: "PP 02: Markets, Taxes, Elasticity and Costs MCQ (2021 Moed B)"
type: past-paper
status: worked-solution
exam: "Exam in Principles of Microeconomics, Moed B, 5 April 2021"
semester: 1
year: 1
course: "Principles of Micro"
instructor: Dr. Yael Hadass
tags:
  - principles-of-micro
  - past-paper
  - worked-solution
  - tax-incidence
  - deadweight-loss
  - elasticity
  - comparative-statics
  - price-controls
aliases:
  - PP02 Micro
  - Principles of Micro Moed B April 2021
  - Micro 2021 Moed B
subject: principles-of-micro
in_scope: true
---

# PP 02: Markets, Taxes, Elasticity and Costs MCQ (2021 Moed B)

> Part of: [[Principles of Micro]]
> **Exam in Principles of Microeconomics, Moed B (5 April 2021)**, Dr. Yael Hadass. 20 multiple-choice questions, no open questions.
> Builds on: [[Lec_02-PPF and Gains from Trade]], [[Lec_03-Perfect Competition and Demand]], [[Lec_04-Supply and Market Equilibrium]], [[Lec_05-Supply and Costs of Production]], [[Lec_06-Firms in Competitive Markets]], [[Lec_07-Comparative Statics]], [[Lec_08-Elasticity]], [[Lec_09-Welfare Consumer and Producer Surplus]], [[Lec_10-Price Controls]], [[Lec_11-Taxes]], [[Lec_12-Externalities]], [[Lec_13-Public Goods and International Trade]]

> [!info] Source of the answers
> The official solution file marks the correct option with a **yellow highlight**. Every answer below was read from the rendered page, then re-derived. All 20 questions have an official answer. Questions 1 and 2 are the only ones where the file also prints working (Q1); the rest are expanded here.

> [!warning] Wording quirks in the paper
> - Q3 and Q4 say "find the supply curve after the **subsidy**", but the question is about a **tax**. Treat it as a tax (the options only fit a tax).
> - Q5 options are lettered E to H in the solution file (A to D in the paper). Same wording.
> - Q13 text says "couch and bed" but the table is about **carpets and TVs**. Use the table.
> - Q15 only comes out at the official answer with the midpoint formula (see the note there).

## What this paper tests

> [!info] One paper, the whole course
> 1. **Q1 to Q4**: one linear market (cucumbers). Equilibrium, [[Consumer Surplus]] and [[Producer Surplus]], a per-unit tax, [[Deadweight Loss]]. Everything falls out of setting demand price equal to supply price.
> 2. **Q6, Q8, Q16**: government intervention (selective subsidy, tax and elasticity, [[Price Ceiling]] and [[Price Floor]]).
> 3. **Q7, Q15, Q20**: elasticity and [[Complements]] versus [[Substitutes]] (cross-price reasoning).
> 4. **Q9, Q10**: costs and profit maximisation for a price taker.
> 5. **Q11, Q12, Q14, Q19**: shifts of demand and supply, and what is ambiguous when two curves move.
> 6. **Q13, Q17, Q18, Q5**: [[Comparative Advantage]], [[Opportunity Cost]], types of goods, [[Externality]] policy.

---

## Q1 to Q4 — The cucumber market

Market for cucumbers: P is the price per kg, Q is kg sold. Demand $P = 5.25 - 0.04Q$, supply $P = 1 + 0.01Q$.

![[PP02_q1_cucumber_tax.png|640]]

*Equilibrium at Q = 85, P = 1.85. A USD 1 per kg tax moves the market to Q = 65 (buyers pay 2.65, sellers keep 1.65). The grey triangle is the deadweight loss of 10.*

### Q1. Equilibrium price and quantity

Options: A) 85 kg and USD 1.85. B) 84 kg and 1.85. C) 75 kg and 2. D) 25 kg and 1.25.

> [!success] Answer: A
> Set demand price equal to supply price (see [[Market Equilibrium]]):
>
> $$5.25 - 0.04Q = 1 + 0.01Q \Rightarrow 4.25 = 0.05Q \Rightarrow Q = 85$$
>
> $$P = 1 + 0.01 \times 85 = 1.85$$

Check with demand: $5.25 - 0.04 \times 85 = 5.25 - 3.40 = 1.85$. B changes the quantity to 84 and C, D are not on both curves.

### Q2. Consumer and producer surplus

Options: A) CS 144.5 and PS 36.125. B) PS 1445 and CS 361.125. C) CS 36.125 and PS 144.5. D) PS 200 and CS 40.

> [!success] Answer: A
> [[Consumer Surplus]] is the triangle between the demand curve and the price. The demand intercept is 5.25, so
>
> $$CS = \tfrac{1}{2} \times 85 \times (5.25 - 1.85) = \tfrac{1}{2} \times 85 \times 3.40 = 144.5$$
>
> [[Producer Surplus]] is the triangle between the price and the supply curve. The supply intercept is 1, so
>
> $$PS = \tfrac{1}{2} \times 85 \times (1.85 - 1) = \tfrac{1}{2} \times 85 \times 0.85 = 36.125$$

> [!tip] Intuition
> Demand is four times as steep as supply (0.04 against 0.01), so the gap above the price is four times the gap below it: CS is 4 times PS (144.5 / 36.125 = 4). That alone rules out C, D (wrong ratio) and B (ten times too large).

### Q3. Tax of USD 1 per kg: prices and quantity

Options: A) buyers pay 2.65, Q = 65 kg, sellers receive 1.65. B) buyers pay 1.65, Q = 65, sellers receive 2.65. C) buyers 3, Q = 105, sellers 2. D) all wrong.

> [!success] Answer: A
> A [[Per-Unit Tax]] collected from sellers shifts supply up by the tax. Sellers now need USD 1 more per kg for each quantity:
>
> $$P_{\text{buyers}} = 1 + 0.01Q + 1 = 2 + 0.01Q$$
>
> Set equal to demand:
>
> $$5.25 - 0.04Q = 2 + 0.01Q \Rightarrow 3.25 = 0.05Q \Rightarrow Q = 65$$
>
> Buyers pay $2 + 0.01 \times 65 = 2.65$. Sellers receive $2.65 - 1 = 1.65$. The wedge (the [[Tax Wedge]]) is 2.65 - 1.65 = 1.

Why not B: buyers must pay **more** than sellers receive when there is a tax. C has quantity going **up** to 105 although a tax cuts quantity.

> [!tip] Intuition
> Buyers' price rises from 1.85 to 2.65 (up 0.80) and sellers' falls from 1.85 to 1.65 (down 0.20). Buyers carry 80 percent of the tax because demand is steeper than supply (see [[Tax Incidence]]).

### Q4. Deadweight loss of the tax

Options: a) 10. b) 20. c) 65. d) all wrong.

> [!success] Answer: a (10)
> The [[Deadweight Loss of a Tax]] is the triangle with base equal to the tax (1) and height equal to the quantity lost (85 - 65 = 20):
>
> $$DWL = \tfrac{1}{2} \times 1 \times (85 - 65) = 10$$

Cross-check through surplus: CS falls from 144.5 to $\tfrac{1}{2} \times 65 \times (5.25 - 2.65) = 84.5$, PS falls from 36.125 to $\tfrac{1}{2} \times 65 \times (1.65 - 1) = 21.125$, tax revenue is $65 \times 1 = 65$. Loss is $(144.5 - 84.5) + (36.125 - 21.125) - 65 = 60 + 15 - 65 = 10$.

---

## Q5 — Pigouvian tax versus pollution permits

Severe pollution from steel production. Options: A) a Pigouvian tax or pollution permits can achieve the **exact same** reduction. B) permits are always better because taxes create inefficiencies. C) taxes are always better than permits. D) all wrong.

> [!success] Answer: A (printed as E in the solution file)
> Both are market-based tools that [[Internalizing the Externality|internalize the externality]]. A [[Pigovian Tax]] set equal to the marginal external cost makes firms cut pollution to the efficient level. [[Tradable Pollution Permits]] fix the total quantity at that same efficient level and let the market set the price. With the right tax or the right number of permits, the outcome is the same.

B is wrong because a correctly set tax creates no extra inefficiency (it corrects one). C is wrong because "always better" fails: permits give certainty about the quantity of pollution, taxes give certainty about the price, and neither dominates in every case.

![[Lec12_tax_vs_permits.png|560]]

*Lecture 12 figure: taxes and permits reach the same point on the pollution curve.*

---

## Q6 — Housing subsidy for new immigrants only

Government of Israel subsidises housing for newly arrived immigrants only. Options:

- A) price **rises** for non-immigrants, **falls** for immigrants (relative to before). Immigrants buy **more** homes, non-immigrants **fewer**.
- B) price falls for non-immigrants, rises for immigrants. Immigrants buy more, non-immigrants fewer.
- C) price rises for non-immigrants, falls for immigrants. Immigrants buy fewer, non-immigrants more.
- D) price falls for non-immigrants, rises for immigrants. Immigrants buy fewer, non-immigrants more.

> [!success] Answer: A
> The solution file draws three panels (immigrants, non-immigrants, whole market).
>
> 1. A [[Subsidy]] to buyers who are immigrants raises their willingness to pay at each quantity: **immigrants' demand shifts right** (the file draws the shift upward).
> 2. Market demand is the horizontal sum of the two groups, so **total demand shifts right**. With upward-sloping supply the **market price rises from P0 to P1**, and market quantity rises (Q0 to Q1).
> 3. **Non-immigrants** get no subsidy, face the higher P1, and move up their own demand curve: they buy **fewer** homes.
> 4. **Immigrants** pay P1 minus the subsidy, which is lower than the original P0 in the file's picture. They are better off at the margin and buy **more** homes.

![[PP02_q6_immigrant_subsidy.png|720]]

*Qualitative sketch of the solution file's three panels. Shapes only, no numbers.*

> [!tip] Intuition
> The subsidy makes immigrants compete harder for the same housing stock. That pushes up the price everyone faces, and the group without the subsidy is crowded out. Only the subsidised group's effective price falls.

Why the others fail: B and D have non-immigrants facing a **lower** price, which cannot happen when total demand rises. C and D say immigrants buy fewer homes, which contradicts a subsidy on their purchases.

---

## Q7 — Price cut and revenue

A publisher wants to raise revenue by cutting price. For this to work best, which elasticity? a) 1.7 b) 1.2 c) 1 d) 0.2 (absolute values).

> [!success] Answer: a (1.7)
> [[Total Revenue]] rises after a price cut only when demand is **elastic**, meaning $|E_d| > 1$ (quantity rises by a bigger percentage than price falls). The more elastic, the bigger the gain, so the largest value, 1.7, is best. At 1 revenue is unchanged and at 0.2 revenue falls. See [[Price Elasticity of Demand]].

b (1.2) also raises revenue, but by less, and the question asks for the **most** successful case.

![[Lec08_total_revenue_cases.png|560]]

---

## Q8 — Which USD 1 tax has the largest deadweight loss?

Options: A) soda. B) antibiotics. C) gasoline. D) cars.

> [!success] Answer: A (soda)
> The [[Deadweight Loss of a Tax]] is bigger when demand or supply is **more elastic**, because buyers and sellers change their behaviour more and more trades disappear. Soda has many close [[Substitutes]] (water, juice, other drinks) and is not a necessity, so its demand is the most elastic. Antibiotics are a necessity with few substitutes (inelastic). Gasoline is inelastic in the short run. Cars are a big-ticket item, but the question is about one dollar, a tiny share of a car price, so the behavioural response is small.

> [!tip] Intuition
> DWL comes from quantity that disappears. The easier it is to walk away from the good, the more disappears.

---

## Q9 — Average fixed cost at ten units

Only variable input is labour, output is zero with no workers. At 4 units, total cost is USD 350 and AVC is USD 67.75. What is AFC at 10 units (rounded)? a) 8 b) 20 c) 80 d) 270

> [!success] Answer: a (USD 8)
> [[Variable Costs]] at 4 units: $VC = AVC \times Q = 67.75 \times 4 = 271$.
>
> [[Fixed Costs]]: $FC = TC - VC = 350 - 271 = 79$ (fixed cost does not change with output).
>
> $$AFC(10) = \frac{FC}{Q} = \frac{79}{10} = 7.9 \approx 8$$

Common slips: d) 270 is close to the variable cost (271), not the fixed cost, and c) 80 is near the fixed cost itself (79) without dividing by 10. See [[Average Fixed Cost]] and [[Average Variable Cost]].

---

## Q10 — Profit-maximising number of cars

Perfectly competitive car market, price USD 10,000. Total cost table: 1 car 4,000; 2 cars 7,000; 3 cars 13,000; 4 cars 23,000; 5 cars 34,000; 6 cars 48,000. Options: A) 4 B) 6 C) 1 D) 5.

> [!success] Answer: A (4 cars)
> A price taker has [[Marginal Revenue]] equal to the price, 10,000. Produce while [[Marginal Cost]] is at most the price ([[Profit Maximisation]]).
>
> | Cars | Total cost | MC | Revenue (10,000 x Q) | Profit |
> |---|---|---|---|---|
> | 1 | 4,000 | 4,000 | 10,000 | 6,000 |
> | 2 | 7,000 | 3,000 | 20,000 | 13,000 |
> | 3 | 13,000 | 6,000 | 30,000 | 17,000 |
> | 4 | 23,000 | 10,000 | 40,000 | 17,000 |
> | 5 | 34,000 | 11,000 | 50,000 | 16,000 |
> | 6 | 48,000 | 14,000 | 60,000 | 12,000 |

> [!warning] A tie in the table
> Profit is 17,000 at **both** 3 and 4 cars, because the 4th car has MC exactly equal to the price (zero extra profit). The only listed option that reaches the maximum is **4** (3 is not an option), and the MR = MC rule picks 4 as well. 5 and 6 have MC above the price.

---

## Q11 — Coffee demand: movement along or shift?

Coffee and pastry are consumed together. The chart has three parallel demand lines for coffee. Point C is the current demand. Events: I) coffee shop offers a discount. II) the price of coffee decreases. III) sugar price rises so the pastry shop raises its prices. Which point is the final position? a) E b) C c) B d) F

> [!success] Answer: c (B)
> Reading the chart: the middle line holds C (high price), D (middle price) and E (low price). The left line holds A (middle price) and B (low price). The right line holds F (high) and G (low).
>
> 1. I and II: the **coffee price falls**. A fall in a good's own price is a **movement along** the demand curve ([[Movement Along a Curve]]), not a shift. From C the market moves down the middle line, towards E (the lower price).
> 2. III: pastry is a [[Complements|complement]] of coffee. When the price of a complement rises, **demand for coffee falls**: the whole curve **shifts left** ([[Shift of the Demand Curve]]).
> 3. After moving to the low price on the middle line (E) and shifting left, the point at the same low price on the left line is **B**.

![[PP02_q11_coffee_demand_points.png|560]]

*Theory sketch of the exam chart: C to D to E is the move along the middle demand line, then the shift left to B.*

> [!warning] Trap
> Events I and II are the same thing said twice (a discount is a lower price). Do not count them as two separate shifts.

Why the others fail: E ignores the complement price rise. C ignores the price cut. F is on the right-hand line, which would need demand to **rise**.

---

## Q12 — Supply of labour shifts right

Which scenario shifts the supply curve to the **right** in the US labour market? A) US accepts 10,000 immigrants eligible to work. B) 10,000 companies begin looking for workers. C) pandemic with high death rates. D) firms replace jobs with digital infrastructure.

> [!success] Answer: A
> Workers are the **sellers** of labour. More people able to work means more labour offered at each wage: [[Shift of the Supply Curve]] right ([[Change in Supply]]).
>
> B is more **demand** for labour (firms are the buyers). C **reduces** the labour force (shift left). D reduces the number of jobs on offer, which is demand for labour falling.

---

## Q13 — Comparative advantage

Hours needed:

| | 1 carpet | 1 TV |
|---|---|---|
| Adina | 1/2 | 1/3 |
| Libby | 1/4 | 2 |

Options: A) Adina has the comparative advantage in carpets. B) Libby has the comparative advantage in carpets. C) Adina has the comparative advantage in carpets and absolute advantage in both. D) Libby has the comparative advantage in TVs and absolute advantage in "couches".

> [!success] Answer: B
> [[Comparative Advantage]] goes to whoever has the lower [[Opportunity Cost]]. Opportunity cost of one carpet, in TVs:
>
> - Adina: $\tfrac{1/2}{1/3} = 1.5$ TVs.
> - Libby: $\tfrac{1/4}{2} = \tfrac{1}{8}$ TV.
>
> Libby gives up far fewer TVs per carpet, so **Libby has the comparative advantage in carpets**. Adina has it in TVs (opportunity cost of a TV: Adina 2/3 carpet, Libby 8 carpets).
>
> [[Absolute Advantage]] (fewer hours): Libby is faster at carpets (1/4 < 1/2) and Adina is faster at TVs (1/3 < 2). So nobody has absolute advantage in both.

A fails (reversed). C fails twice (wrong comparative and Adina is not better at both). D fails because Libby is not the TV specialist and the good is carpets, not couches.

---

## Q14 — Peanut butter: cheaper pickers and cheaper chocolate spread

Wages of peanut pickers fall, and the price of chocolate spread (a substitute for peanut butter) falls. Options: a) price falls, quantity ambiguous. b) price rises, quantity ambiguous. c) quantity falls, price ambiguous. d) quantity rises, price ambiguous.

> [!success] Answer: a
> Use the [[Comparative Statics]] method, one shock at a time ([[Simultaneous Shifts]]):
>
> | Shock | Curve | Direction | Price | Quantity |
> |---|---|---|---|---|
> | Wages of pickers fall (input cost down) | Supply | Right | Down | Up |
> | Price of a [[Substitutes\|substitute]] falls | Demand for peanut butter | Left | Down | Down |
> | **Both** | | | **Down** | **Ambiguous** |
>
> Both shifts push price down, so price falls for sure. Quantity is pushed up by one and down by the other, so it depends on which shift is bigger.

---

## Q15 — Price needed to raise quantity demanded

Price is USD 30, quantity demanded is 704. What new price raises quantity demanded to 854 if the price elasticity is -2.4 (rounded)? a) 26 b) 18 c) 28 d) all wrong.

> [!success] Answer: c (USD 28)
> Use the [[Midpoint Method]] (the form used in the course, see [[Lec_08-Elasticity]]):
>
> $$\%\Delta Q = \frac{854 - 704}{(854 + 704)/2} = \frac{150}{779} = 19.26\%$$
>
> $$\%\Delta P = \frac{\%\Delta Q}{E_d} = \frac{19.26\%}{-2.4} = -8.02\%$$
>
> Solve for the new price $P_2$ with $\frac{P_2 - 30}{(P_2 + 30)/2} = -0.0802$:
>
> $$P_2 = 30 \times \frac{1 - 0.0401}{1 + 0.0401} \approx 27.7 \approx 28$$

> [!warning] Method matters
> With the simple (non-midpoint) formula, $\%\Delta Q = 150/704 = 21.3\%$, $\%\Delta P = -8.88\%$ and $P_2 \approx 27.3$, which rounds to 27 and would make "d) all wrong" correct. The official answer is **28**, which is the midpoint answer. Use the midpoint method on this course's exams.

---

## Q16 — Pineapples: price ceiling and price floor

Demand $Q_d = 26 - 2P$, supply $Q_s = -4 + 8P$. Effects of a ceiling at USD 2 and a floor at USD 6? A) shortage 20, surplus 60. B) shortage 10, surplus 30. C) surplus 10, shortage 20. D) surplus 20, shortage 60.

> [!success] Answer: B (shortage of 10, surplus of 30)
> Equilibrium (for reference): $26 - 2P = -4 + 8P \Rightarrow P = 3$, $Q = 20$.
>
> **Ceiling at 2** (below 3, so binding, [[Price Ceiling]]): $Q_d = 26 - 4 = 22$, $Q_s = -4 + 16 = 12$. Shortage $= 22 - 12 = 10$.
>
> **Floor at 6** (above 3, so binding, [[Price Floor]]): $Q_d = 26 - 12 = 14$, $Q_s = -4 + 48 = 44$. Surplus $= 44 - 14 = 30$.

![[PP02_q16_pineapple_controls.png|600]]

*Ceiling at 2 leaves a shortage of 10, floor at 6 leaves a surplus of 30.*

> [!tip] Intuition
> A ceiling only creates a **shortage** (price below equilibrium), a floor only a **surplus** (price above). That already removes C and D. Then only the arithmetic separates A from B.

---

## Q17 — Where is there an opportunity cost?

I) student leaves school to work. II) factory adds labour and uses machines it did not use before. III) farmer grows fewer lemons and more oranges. a) I only b) I and II c) I and III d) all.

> [!success] Answer: d (all of the above)
> [[Opportunity Cost]] is whatever you give up for the chosen option.
>
> - I: giving up studying (and the future wage it brings).
> - II: the labour and the machines have alternative uses, so the resources used have a cost. Even "unused" machines could have been rented out or used elsewhere.
> - III: land used for oranges is land not used for lemons.
>
> Every choice with scarce resources has an opportunity cost ([[Lec_01-Ten Principles of Economics]]).

---

## Q18 — Types of goods

a) aspirin from the same bottle, club good. b) TV show watched in two cities, private good. c) police protection, public good. d) bottled water delivered across Israel, common resource.

> [!success] Answer: c
> The key table is excludable versus rival ([[Excludability]], [[Rivalry]]):
>
> | | Rival | Non-rival |
> |---|---|---|
> | **Excludable** | [[Private Goods]] | [[Club Goods]] |
> | **Not excludable** | [[Common Resources]] | [[Public Goods]] |
>
> - c) Police protection of a city is **non-rival** (one more resident does not reduce it) and **non-excludable** (you cannot easily keep one resident out): a [[Public Goods|public good]].
> - a) Aspirin is **rival** (once Shauna takes a pill, it is gone) and excludable: a private good, not a club good.
> - b) A TV show watched by many is **non-rival** and can be made excludable (subscription): closer to a club good than a private good.
> - d) Bottled water is sold, rival and excludable: a private good. A common resource would be something like open-access fishing water.

---

## Q19 — Peanut butter: dearer jelly and a peanut drought

Price of jelly rises and a drought hits the peanut crop (an input). a. price falls, quantity ambiguous. b. price rises, quantity ambiguous. c. quantity falls, price ambiguous. d. quantity rises, price ambiguous.

> [!success] Answer: c
> | Shock | Curve | Direction | Price | Quantity |
> |---|---|---|---|---|
> | Jelly price rises (jelly is a [[Complements\|complement]] of peanut butter) | Demand | Left | Down | Down |
> | Drought raises input cost | Supply | Left | Up | Down |
> | **Both** | | | **Ambiguous** | **Down** |
>
> Both shifts reduce quantity, so quantity falls for sure. They push the price in opposite directions, so the price effect is ambiguous. Compare with Q14: there the shifts agree on price and disagree on quantity.

---

## Q20 — Substitutes or complements?

I) demand for B rose after the price of A rose. II) demand for D fell after the price of C fell. III) demand for F rose after the price of E fell. Options: a) A,B substitutes; C,D substitutes; E,F complements. b) all complements, complements, substitutes. c) substitutes, complements, substitutes. d) other.

> [!success] Answer: a
> Use the sign of the cross-price effect ([[Cross-Price Elasticity of Demand]]):
>
> - **Substitutes**: price of one up leads to demand for the other **up** (same direction of price and demand change in the other good). Price of one down leads to demand for the other **down**.
> - **Complements**: price of one down leads to demand for the other **up** (opposite directions).
>
> | Statement | Price change | Demand change in the other | Relationship |
> |---|---|---|---|
> | I | A up | B up | Substitutes |
> | II | C down | D down | Substitutes |
> | III | E down | F up | Complements |

---

## Recap table

| Q | Topic | Answer | Key step |
|---|---|---|---|
| 1 | Equilibrium | A | Q = 85, P = 1.85 |
| 2 | CS and PS | A | 144.5 and 36.125 |
| 3 | Tax of 1 | A | Q = 65, pay 2.65, receive 1.65 |
| 4 | DWL | a | 0.5 x 1 x 20 = 10 |
| 5 | Tax vs permits | A | Same outcome if set right |
| 6 | Selective subsidy | A | Market price up, immigrants buy more |
| 7 | Price cut and revenue | a | Elastic demand, 1.7 |
| 8 | Biggest DWL | A | Most elastic good (soda) |
| 9 | AFC | a | FC = 79, AFC = 7.9 |
| 10 | Profit max | A | Produce while MC <= 10,000 |
| 11 | Coffee demand | c | Move along, then shift left to B |
| 12 | Labour supply | A | More workers, supply right |
| 13 | Comparative advantage | B | Libby: 1/8 TV per carpet |
| 14 | Peanut butter (1) | a | Price down, quantity ambiguous |
| 15 | New price | c | Midpoint, 27.7 rounds to 28 |
| 16 | Ceiling and floor | B | Shortage 10, surplus 30 |
| 17 | Opportunity cost | d | Every choice has one |
| 18 | Goods | c | Police: non-rival, non-excludable |
| 19 | Peanut butter (2) | c | Quantity down, price ambiguous |
| 20 | Substitutes or complements | a | Sign of cross-price effect |

## Related notes

[[Principles of Micro]] · [[Lec_07-Comparative Statics]] · [[Lec_08-Elasticity]] · [[Lec_10-Price Controls]] · [[Lec_11-Taxes]] · [[Lec_12-Externalities]]
