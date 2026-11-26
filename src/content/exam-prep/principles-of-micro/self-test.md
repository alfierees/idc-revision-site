---
title: "Quick Self-Test"
subject: principles-of-micro
type: self-test
description: "18 new exam-style multiple-choice questions across the whole course, with the working behind every answer. Pick an option to check it."
course: Principles of Microeconomics
semester: 1
year: 1
order: 6
tags:
  - principles-of-micro
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "Q1 · Equilibrium and surplus"
    text: |
      Demand is $P = 100 - 2Q$ and supply is $P = 20 + 2Q$. What are the equilibrium and the surpluses?
    options:
      - label: a
        text: "$Q^* = 20$, $P^* = 60$, CS = 800, PS = 800"
        why: "Right equilibrium, but each surplus is a triangle: you forgot the ½."
      - label: b
        text: "$Q^* = 20$, $P^* = 60$, CS = 400, PS = 400"
        correct: true
        why: "$80 = 4Q$ gives $Q^* = 20$, $P^* = 60$. CS $= \\tfrac12 \\cdot 20 \\cdot 40$, PS $= \\tfrac12 \\cdot 20 \\cdot 40$."
      - label: c
        text: "$Q^* = 40$, $P^* = 20$, CS = 1600, PS = 0"
        why: "$Q^* = 40$ comes from dividing by 2 instead of by $b + d = 4$."
      - label: d
        text: "$Q^* = 30$, $P^* = 40$, CS = 900, PS = 300"
        why: "Not on both curves: at $Q = 30$ demand gives 40 but supply gives 80."
    solution: |
      $$
      100 - 2Q = 20 + 2Q \;\Rightarrow\; Q^* = 20, \quad P^* = 60
      $$

      CS height $100 - 60 = 40$, PS height $60 - 20 = 40$, base 20: both are $\tfrac12 \times 20 \times 40 = 400$. Equal slopes give equal triangles.
  - id: "2"
    title: "Q2 · A tax on sellers"
    text: |
      Same market ($P = 100 - 2Q$, $P = 20 + 2Q$). The government taxes sellers 8 per unit. Which is correct?
    options:
      - label: a
        text: "$Q_T = 18$, buyers pay 64, sellers keep 56, DWL = 8"
        correct: true
        why: "New supply $P = 28 + 2Q$. $72 = 4Q$ gives 18. $P_B = 100 - 36 = 64$, $P_S = 64 - 8 = 56$. DWL $= \\tfrac12 \\cdot 8 \\cdot 2 = 8$."
      - label: b
        text: "$Q_T = 18$, buyers pay 56, sellers keep 64, DWL = 8"
        why: "Buyer and seller prices are swapped: after a tax buyers always pay more than the old 60."
      - label: c
        text: "$Q_T = 22$, buyers pay 56, sellers keep 64, DWL = 8"
        why: "Shifting supply down by 8 is a subsidy, not a tax."
      - label: d
        text: "$Q_T = 18$, buyers pay 64, sellers keep 56, DWL = 16"
        why: "16 forgets the ½ in the DWL triangle."
    solution: |
      $$
      100 - 2Q = 28 + 2Q \;\Rightarrow\; Q_T = 18, \quad P_B = 64, \quad P_S = 56
      $$

      Check $P_B - P_S = 8$. Burden: buyers $64 - 60 = 4$, sellers $60 - 56 = 4$ (equal slopes, equal split). Revenue $= 8 \times 18 = 144$. DWL $= \tfrac12 \times 8 \times (20 - 18) = 8$.
  - id: "3"
    title: "Q3 · Price ceiling"
    text: |
      Same market with no tax. The government sets a price ceiling of 50. What happens?
    options:
      - label: a
        text: "Not binding: the market stays at $Q = 20$, $P = 60$"
        why: "A ceiling of 50 is **below** the equilibrium price 60, so it binds."
      - label: b
        text: "$Q_d = 15$, $Q_s = 25$, surplus of 10"
        why: "Demand and supply are swapped. A ceiling raises quantity demanded and lowers quantity supplied."
      - label: c
        text: "$Q_d = 25$, $Q_s = 15$, shortage of 10"
        correct: true
        why: "$50 = 100 - 2Q$ gives 25; $50 = 20 + 2Q$ gives 15."
      - label: d
        text: "$Q_d = 25$, $Q_s = 15$, 25 units are traded"
        why: "Only the short side trades: 15 units."
    solution: |
      Binding because $50 < 60$. $Q_d = 25$, $Q_s = 15$, shortage $= 10$, and 15 units are actually traded.
  - id: "4"
    title: "Q4 · Midpoint elasticity and revenue"
    text: |
      A café cuts the price of a sandwich from 10 to 8 and sales rise from 40 to 50 a day. Using the midpoint method, what is the price elasticity of demand, and what happened to revenue?
    options:
      - label: a
        text: "$E_d = -1$ (unit elastic), revenue unchanged"
        correct: true
        why: "$\\%\\Delta Q = 10/45 = 22.2\\%$, $\\%\\Delta P = -2/9 = -22.2\\%$. Revenue 400 before and after."
      - label: b
        text: "$E_d = -1.25$ (elastic), revenue rises"
        why: "That's the simple % method from the start point (25% ÷ 20%). The midpoint method gives exactly −1."
      - label: c
        text: "$E_d = -0.8$ (inelastic), revenue falls"
        why: "Inverted ratio: elasticity is %ΔQ over %ΔP."
      - label: d
        text: "$E_d = -5$ (elastic), revenue rises"
        why: "That's units over units (10/2), not a ratio of percentages."
    solution: |
      $$
      \%\Delta Q = \frac{50 - 40}{45} = 0.222, \qquad \%\Delta P = \frac{8 - 10}{9} = -0.222, \qquad E_d = -1
      $$

      $TR$: $10 \times 40 = 400$ and $8 \times 50 = 400$. Unit elastic keeps revenue constant.
  - id: "5"
    title: "Q5 · New price from an elasticity"
    text: |
      Price is 10 and quantity demanded is 100. The price elasticity of demand is $-2$. Using the midpoint method, what new price raises quantity demanded to 120?
    options:
      - label: a
        text: "8.18"
        why: "This uses $E = -1$ instead of $-2$."
      - label: b
        text: "10.91"
        why: "Higher price would lower quantity demanded."
      - label: c
        text: "9.00"
        why: "That's the simple-percentage method (20% ÷ 2 = 10% cut). The midpoint method gives 9.13."
      - label: d
        text: "9.13"
        correct: true
        why: "$y = 20/110 = 0.1818$, $x = y/E = -0.0909$, $P_2 = 10 \\cdot 1.9091/2.0909 = 9.13$."
    solution: |
      $$
      y = \frac{20}{110} = 0.1818, \qquad x = \frac{0.1818}{-2} = -0.0909, \qquad P_2 = 10 \cdot \frac{2 - 0.0909}{2 + 0.0909} = 9.13
      $$

      In the real exam, check which method the options fit: past keys have used both, and they usually round to the same whole number.
  - id: "6"
    title: "Q6 · Raising the price"
    text: |
      A cinema wants more revenue and is thinking of raising ticket prices. Its demand has $\lvert E_d \rvert = 1.6$. What happens if it raises the price?
    options:
      - label: a
        text: "Revenue rises, because each ticket earns more"
        why: "That ignores the lost tickets. With elastic demand the lost quantity outweighs the higher price."
      - label: b
        text: "Revenue falls, because quantity falls by a larger percentage than price rises"
        correct: true
        why: "Elastic demand: price and total revenue move in opposite directions."
      - label: c
        text: "Revenue falls, because quantity falls by a smaller percentage than price rises"
        why: "If quantity fell by a smaller percentage, revenue would rise."
      - label: d
        text: "Not enough information"
        why: "The elasticity is all you need for the direction of revenue."
    solution: |
      $\lvert E_d \rvert > 1$ means elastic: a 1% price rise cuts quantity by 1.6%, so $TR = P \times Q$ falls. Raising price raises revenue only when demand is inelastic.
  - id: "7"
    title: "Q7 · Economic vs accounting profit"
    text: |
      Noa leaves a job paying 90,000 a year to run a bakery in a shop she owns, which she could rent out for 2,000 a month. Revenue is 300,000 a year and ingredients, wages and electricity cost 180,000 a year. What are her accounting and economic profits?
    options:
      - label: a
        text: "Accounting 120,000; economic 30,000"
        why: "This subtracts the salary but forgets the forgone rent (24,000 a year)."
      - label: b
        text: "Accounting 120,000; economic 118,000"
        why: "The rent is 2,000 a **month**, and the forgone salary is also an implicit cost."
      - label: c
        text: "Accounting 6,000; economic 120,000"
        why: "Swapped: economic profit is always the smaller one."
      - label: d
        text: "Accounting 120,000; economic 6,000"
        correct: true
        why: "Implicit costs $= 90{,}000 + 12 \\times 2{,}000 = 114{,}000$."
    solution: |
      Accounting $= 300{,}000 - 180{,}000 = 120{,}000$. Implicit $= 90{,}000 + 24{,}000 = 114{,}000$. Economic $= 120{,}000 - 114{,}000 = 6{,}000$. Positive economic profit: staying in the bakery is the better choice.
  - id: "8"
    title: "Q8 · Average fixed cost"
    text: |
      At 10 units a firm's ATC is 30 and its AVC is 22. What is its average fixed cost at 16 units?
    options:
      - label: a
        text: "8"
        why: "8 is AFC at 10 units. FC stays at 80, so AFC falls as output rises."
      - label: b
        text: "5"
        correct: true
        why: "$FC = (30 - 22) \\times 10 = 80$; $80/16 = 5$."
      - label: c
        text: "13.75"
        why: "This scales ATC − AVC by the wrong ratio."
      - label: d
        text: "Cannot be found without TC at 16 units"
        why: "Fixed cost is the same at every output, so one data point is enough."
    solution: |
      $AFC = ATC - AVC = 8$ at $Q = 10$, so $FC = 80$. At $Q = 16$: $AFC = 80/16 = 5$.
  - id: "9"
    title: "Q9 · Long-run equilibrium"
    text: |
      A perfectly competitive firm is in long-run equilibrium producing 50 units at a market price of 8. Its fixed cost is 100. Which is correct?
    options:
      - label: a
        text: "MC = 8, ATC = 8, AVC = 6"
        correct: true
        why: "$P = MR = MC = \\min ATC = 8$. $AFC = 100/50 = 2$, so $AVC = 6$."
      - label: b
        text: "MC = 8, ATC = 6, AVC = 8"
        why: "ATC is always above AVC (by AFC)."
      - label: c
        text: "MC = 6, ATC = 8, AFC = 2"
        why: "MC equals the price, 8."
      - label: d
        text: "MC = 8, ATC = 10, economic profit negative"
        why: "In long-run equilibrium economic profit is zero, so ATC = P."
    solution: |
      Long run: $P = MR = MC = \min ATC = 8$, zero economic profit. $AFC = 2$, $AVC = ATC - AFC = 6$.
  - id: "10"
    title: "Q10 · Shut down or keep going?"
    text: |
      A competitive firm faces a price of 7. Its minimum AVC is 6 and its minimum ATC is 9. What should it do?
    options:
      - label: a
        text: "Shut down now, because it makes a loss"
        why: "In the short run fixed costs are paid anyway. Price covers AVC, so producing loses less."
      - label: b
        text: "Produce in both the short and long run, since P > AVC"
        why: "In the long run all costs are avoidable, so it needs $P \\ge \\min ATC$."
      - label: c
        text: "Produce in the short run (at P = MC), and exit in the long run if the price stays at 7"
        correct: true
        why: "$\\min AVC < P < \\min ATC$: loss-making but covering variable costs."
      - label: d
        text: "Raise its price to 9 to cover costs"
        why: "A price taker can't set its price: at 9 it sells nothing."
    solution: |
      Short run: produce if $P \ge \min AVC$ (7 ≥ 6 ✓). Long run: stay only if $P \ge \min ATC$ (7 < 9 ✗), so it exits unless the price recovers.
  - id: "11"
    title: "Q11 · Comparative advantage"
    text: |
      Hours needed for one unit: Ana takes 2 hours per shirt and 4 hours per hat. Ben takes 3 hours per shirt and 9 hours per hat. Which is correct?
    options:
      - label: a
        text: "Ana has the absolute advantage in both; Ben has the comparative advantage in shirts"
        correct: true
        why: "OC(shirt): Ana $2/4 = 0.5$ hats, Ben $3/9 = 0.33$ hats. Ben's is lower."
      - label: b
        text: "Ana has the absolute and comparative advantage in both goods"
        why: "Comparative advantage can't be in both goods: the two opportunity costs are reciprocals."
      - label: c
        text: "Ben has the comparative advantage in hats"
        why: "OC(hat): Ana $4/2 = 2$ shirts, Ben $9/3 = 3$ shirts. Ana's is lower."
      - label: d
        text: "Neither should specialise, since Ana is better at everything"
        why: "Gains from trade come from comparative advantage, not absolute advantage."
    solution: |
      Absolute: Ana needs fewer hours for both. Comparative: OC of a shirt is 0.5 hats for Ana and 0.33 for Ben, so Ben specialises in shirts and Ana in hats.
  - id: "12"
    title: "Q12 · Externality gap"
    text: |
      Marginal private benefit is $P = 50 - Q$ and marginal private cost is $P = Q + 10$. Each unit causes 6 of pollution damage to bystanders. What are the market quantity, the optimal quantity, and the right policy?
    options:
      - label: a
        text: "Market 20, optimum 23, subsidy of 6"
        why: "A negative externality is overproduced, so the optimum is below the market."
      - label: b
        text: "Market 20, optimum 17, Pigouvian tax of 6"
        correct: true
        why: "MSC $= Q + 16$. $50 - Q = Q + 16$ gives 17. A tax equal to the external cost fixes it."
      - label: c
        text: "Market 20, optimum 14, Pigouvian tax of 12"
        why: "The external cost is 6 per unit; shifting by 12 overshoots."
      - label: d
        text: "Market 17, optimum 20, Pigouvian tax of 6"
        why: "Swapped: the market (private) quantity is the larger one."
    solution: |
      Market: $50 - Q = Q + 10 \Rightarrow Q = 20$. MSC $= Q + 16$. Optimum: $50 - Q = Q + 16 \Rightarrow Q = 17$. Gap 3. A Pigouvian tax of 6 moves supply onto MSC.
  - id: "13"
    title: "Q13 · Two shocks"
    text: |
      In the market for e-scooters, battery technology improves and, at the same time, city bike-share (a substitute) becomes much cheaper. What happens?
    options:
      - label: a
        text: "Price falls, quantity rises"
        why: "Quantity is pushed up by the supply shift and down by the demand shift, so it's ambiguous."
      - label: b
        text: "Price ambiguous, quantity falls"
        why: "Both shifts push the price down, so the price change is certain."
      - label: c
        text: "Price falls, quantity ambiguous"
        correct: true
        why: "Supply right (price ↓) and demand left (price ↓). Quantity goes opposite ways."
      - label: d
        text: "Price rises, quantity ambiguous"
        why: "Both shifts lower the price."
    solution: |
      Better technology: supply shifts right. Cheaper substitute: demand shifts left. Opposite shifts ⇒ price certain (down), quantity depends on which shift is bigger.
  - id: "14"
    title: "Q14 · Subsidy for one region"
    text: |
      The government pays a per-kg subsidy to tomato farmers in the north only. Farmers elsewhere get nothing. What happens?
    options:
      - label: a
        text: "Market price rises; northern farmers produce more; other farmers produce more; total rises"
        why: "Total supply shifts right, so the market price falls, not rises."
      - label: b
        text: "Market price falls; northern farmers produce less; other farmers produce more"
        why: "Subsidised farmers receive market price plus subsidy, which is above the old price, so they produce more."
      - label: c
        text: "Market price falls; northern farmers produce more; other farmers produce less; total rises"
        correct: true
        why: "National supply shifts right. Unsubsidised farmers only see the lower price."
      - label: d
        text: "Nothing changes outside the north"
        why: "All farmers sell into one national market, so the price change hits everyone."
    solution: |
      Northern supply shifts right, so national supply shifts right: price falls and total quantity rises. Others move down their supply curves (less). Northern farmers receive price + subsidy (more than before) and produce more.
  - id: "15"
    title: "Q15 · Who bears the tax?"
    text: |
      Demand is $P = 120 - 3Q$ and supply is $P = 20 + Q$. A tax of 4 per unit is imposed. How much of it do buyers bear?
    options:
      - label: a
        text: "1 per unit"
        why: "That's the sellers' share: buyers are on the steeper curve."
      - label: b
        text: "2 per unit"
        why: "An even split happens only when the two slopes are equal."
      - label: c
        text: "4 per unit"
        why: "Buyers bear all of it only if demand is perfectly inelastic."
      - label: d
        text: "3 per unit"
        correct: true
        why: "Buyers' share $= \\frac{b}{b + d} T = \\frac{3}{4} \\cdot 4 = 3$."
    solution: |
      No tax: $100 = 4Q$, $Q^* = 25$, $P^* = 45$. With tax: $96 = 4Q$, $Q_T = 24$, $P_B = 120 - 72 = 48$, $P_S = 44$. Buyers pay $48 - 45 = 3$, sellers $45 - 44 = 1$. The less elastic (steeper) side bears more.
  - id: "16"
    title: "Q16 · Types of goods"
    text: |
      Which pairing is correct?
    options:
      - label: a
        text: "A streaming subscription: club good"
        correct: true
        why: "Excludable (you need to pay), not rival (my watching doesn't stop yours)."
      - label: b
        text: "Fish in the open sea: public good"
        why: "Fish are rival (a fish caught is gone), so they're a common resource."
      - label: c
        text: "A lighthouse: private good"
        why: "Ships can't be kept from seeing it and one ship's use doesn't reduce another's: public good."
      - label: d
        text: "A free school lunch: public good"
        why: "Being free doesn't change the type. One lunch, one child: rival and excludable."
    solution: |
      Ask: excludable? rival? Streaming: yes, no → club good. Sea fish: no, yes → common resource. Lighthouse: no, no → public good. Free lunch: yes, yes → private good.
  - id: "17"
    title: "Q17 · Tariff vs quota"
    text: |
      An importing country can restrict imports to the same level with either a tariff or a quota. What's the difference between the two?
    options:
      - label: a
        text: "The tariff has a smaller deadweight loss"
        why: "Same import level, same domestic price, same two DWL triangles."
      - label: b
        text: "Only the tariff helps domestic producers"
        why: "Both give producers the same extra surplus (area C)."
      - label: c
        text: "The quota lowers the domestic price"
        why: "Both raise the domestic price above the world price."
      - label: d
        text: "With the tariff the revenue rectangle goes to the government; with the quota it goes to licence holders"
        correct: true
        why: "Everything else (price, quantities, producer gain, DWL) is the same."
    solution: |
      For the same level of imports a tariff and a quota have the same effect on price, quantities and DWL. The only difference is who collects the rectangle between the world price and the domestic price on the imported units.
  - id: "18"
    title: "Q18 · Bow-shaped PPF"
    text: |
      Three workers per day: X can make 10 chairs or 20 tables, Y can make 8 chairs or 8 tables, Z can make 5 chairs or 20 tables. Everyone starts on tables. In what order should workers move to chairs, and what's the output when one worker makes chairs?
    options:
      - label: a
        text: "Z first; 5 chairs and 28 tables"
        why: "Z has the **highest** opportunity cost of a chair (4 tables), so Z moves last."
      - label: b
        text: "X first; 10 chairs and 28 tables"
        why: "X's chair costs 2 tables, more than Y's 1 table."
      - label: c
        text: "Y first; 8 chairs and 40 tables"
        correct: true
        why: "OC(chair): Y = 1 table, X = 2, Z = 4. Y moves first; X and Z still make 20 + 20 tables."
      - label: d
        text: "Order doesn't matter: the PPF is linear"
        why: "Three different opportunity costs make the PPF bowed out."
    solution: |
      OC of a chair in tables: X $20/10 = 2$, Y $8/8 = 1$, Z $20/5 = 4$. Move the lowest OC first: Y, then X, then Z. With Y on chairs: 8 chairs, $20 + 20 = 40$ tables. The slopes 1, 2, 4 get steeper: increasing opportunity cost.
---

> Every question here is new (not from a past paper), so you can use it as a closed-book check. The working for each answer appears once you pick an option. For real exam questions, go to the [[Past Paper Topic Map]] and the past papers themselves.
