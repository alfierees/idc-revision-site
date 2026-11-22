---
title: "PS8"
subject: principles-of-micro
source_doc: /papers/principles-of-micro/ps-8.pdf
tags:
  - principles-of-micro
  - problem-set
  - elasticity
  - price-elasticity-of-demand
  - midpoint-method
  - total-revenue
  - cross-price-elasticity-of-demand
  - income-elasticity-of-demand
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Part A, Q1. Price elasticity of demand, simple calculations.** Always use the midpoint method.

      With the midpoint method, every percentage change is the change divided by the average of the two values:

      $$\%\Delta Q = 100 \cdot \frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}, \qquad \%\Delta P = 100 \cdot \frac{P_2 - P_1}{(P_1 + P_2)/2}$$

      $$\text{Price elasticity of demand} = \frac{\%\Delta Q^d}{\%\Delta P}, \qquad \text{Price elasticity of supply} = \frac{\%\Delta Q^s}{\%\Delta P}$$

      **a)** You observe that, when the price of pizzas is 16 euros per pizza, 100 pizzas are sold per week. When the price falls to 12 euros, 120 pizzas are sold per week. Calculate the price elasticity of demand.
    solution: |
      > [!success] Answer
      > Price elasticity of demand $\approx -0.636$ (inelastic, since the absolute value is below 1).

      > [!example] Working
      > Quantity change (midpoint):
      >
      > $$\%\Delta Q = \frac{120 - 100}{(120 + 100)/2} = \frac{20}{110} = 0.1818$$
      >
      > Price change (midpoint):
      >
      > $$\%\Delta P = \frac{12 - 16}{(12 + 16)/2} = \frac{-4}{14} = -\frac{2}{7} = -0.2857$$
      >
      > $$E_d = \frac{0.1818}{-0.2857} = -0.636$$

      > [!tip] Intuition
      > Elasticity is a ratio of two percentages, so units cancel and the sign carries the story: negative price elasticity of demand (the law of demand), positive income elasticity for normal goods, negative for inferior goods, positive cross-price elasticity for substitutes, negative for complements.
    related_terms: ["price-elasticity-of-demand", "midpoint-method", "elasticity", "law-of-demand"]
    source_doc_page: 2
  - id: "1b"
    text: |
      **b)** If P = 8 dollars and $Q^d = 200$, calculate the new quantity demanded when the price rises to 10, if the price elasticity of demand is $-1.5$.
    solution: |
      > [!success] Answer (as given in the solution set)
      > The solution set ends with $Q^{d} = 155.56$.

      > [!example] Working (the solution set's set-up)
      > The percentage change in price is
      >
      > $$\%\Delta P = \frac{10 - 8}{(10 + 8)/2} = \frac{2}{9}$$
      >
      > so the required percentage change in quantity is
      >
      > $$\%\Delta Q = -1.5 \cdot \frac{2}{9} = -\frac{1}{3}$$
      >
      > The solution then sets this equal to the midpoint expression in the unknown new quantity and solves for it.

      > [!warning] The official arithmetic does not hold up
      > The solution set writes the quantity change as $(200 - Q)/((200+Q)/2)$, which is old minus new. That flips the sign, so the equation it solves is the one for a price **rise that increases** quantity. Its own "check" then uses $Q = 280$, not 155.56, and 280 is above 200, so it contradicts both its stated answer and the law of demand (a price rise must cut quantity).
      >
      > My check, with the new quantity $Q_2$ in the correct order (new minus old):
      >
      > $$\frac{Q_2 - 200}{(Q_2 + 200)/2} = -\frac{1}{3} \;\Rightarrow\; 6(Q_2 - 200) = -(Q_2 + 200) \;\Rightarrow\; 7Q_2 = 1000 \;\Rightarrow\; Q_2 \approx 142.86$$
      >
      > Verification: $(142.86 - 200)/171.43 = -0.3333$, and $-0.3333 / (2/9) = -1.5$. So I believe the correct answer is about **142.86**. The solution set's 155.56 is kept above only because it is what the source says.
    related_terms: ["price-elasticity-of-demand", "midpoint-method", "law-of-demand"]
    source_doc_page: 2
  - id: "1c"
    text: |
      **c)** Suppose that business travellers and vacationers have the following average daily demand for airline tickets from New York to Boston:

      | Price | Quantity demanded, business travellers | Quantity demanded, vacationers |
      |---|---|---|
      | 150 | 2100 | 1000 |
      | 200 | 2000 | 800 |
      | 250 | 1900 | 600 |
      | 300 | 1800 | 400 |

      **I.** As the price of tickets rises from 200 to 250, use the midpoint method to calculate the price elasticity of demand for (i) business travellers and (ii) vacationers.

      **II.** Why might vacationers and business travellers have different elasticities?
    solution: |
      > [!success] Answer to I
      > (i) Business travellers: about $0.231$ in absolute value (inelastic). (ii) Vacationers: about $-1.286$ (elastic).

      > [!example] Working
      > The price change is the same for both groups:
      >
      > $$\%\Delta P = \frac{250 - 200}{225} = 0.2222$$
      >
      > Business: $\%\Delta Q = \dfrac{1900 - 2000}{1950} = -0.05128$, so
      >
      > $$E_d = \frac{-0.05128}{0.2222} = -0.231$$
      >
      > Vacationers: $\%\Delta Q = \dfrac{600 - 800}{700} = -0.2857$, so
      >
      > $$E_d = \frac{-0.2857}{0.2222} = -1.286$$
      >
      > The solution set writes the business figure as the magnitude 0.231 (the sign is negative for both, as the law of demand requires).

      > [!success] Answer to II
      > Business travellers have to travel, so a higher fare barely changes how many go: demand is inelastic. Vacationers can switch to another destination that fits their budget, so a higher fare cuts quantity by proportionally more than the price rise: demand is elastic.

      > [!tip] Intuition
      > The determinants of elasticity from [[Lec_08-Elasticity]] at work: **need versus want** and **availability of substitutes** (another holiday destination versus no substitute for a client meeting).
    related_terms: ["price-elasticity-of-demand", "midpoint-method", "elasticity", "law-of-demand"]
    source_doc_page: 2
  - id: "2"
    text: |
      **Q2. Price elasticity of demand, different goods.** For each pair of goods, which one has the more price-elastic demand, and why?

      | | Good A | Good B |
      |---|---|---|
      | i | Ice cream | Ben & Jerry's strawberry ice cream |
      | ii | Cigarettes | Tiramisu cake |
      | iii | Orange juice | Water |
      | iv | Heating oil in 1 week | Heating oil in one year |
      | v | Bread | Caviar |
      | vi | Eggs | Apple juice |
      | vii | Insulin | Advil |
    solution: |
      The solution set marks the more elastic good in yellow.

      | | More elastic | Reason (from the solution set) |
      |---|---|---|
      | i | **Ben & Jerry's strawberry** | Easy to switch to another ice cream brand if its price rises. It is harder to leave ice cream altogether when all ice cream prices rise. |
      | ii | **Tiramisu cake** | Cigarettes are addictive, so consumption is hard to cut. For tiramisu you can simply pick another dessert. |
      | iii | **Orange juice** | It is much easier to cut orange juice than water when prices rise. |
      | iv | **Heating oil in one year** | In one week you cannot change your heating system. Over a year you can. |
      | v | **Caviar** | Bread is a necessity and caviar a luxury, which you can always drop when its price rises. |
      | vi | **Apple juice** | Eggs have few substitutes. Apple juice has many other juices. |
      | vii | **Advil** | Insulin is life-saving with few substitutes. Advil has many substitutes. |

      > [!warning] Typo in the source
      > The solution set's reason for row vii ends "we can always shift away from caviar". That is a copy-paste slip from row v. The intended point is that you can shift away from Advil.

      > [!tip] Intuition
      > Pairs i, ii, iii, v, vi, vii test **substitutes and necessity**. Pair iv tests **time horizon**: demand is more elastic the longer buyers have to adjust.
    related_terms: ["price-elasticity-of-demand", "elasticity", "substitutes"]
    source_doc_page: 3
  - id: "3"
    text: |
      **Q3. Price elasticity of demand, total revenue perspective.** Suppose an earthquake destroys large parts of toy factories in a specific market. Graph and briefly explain what is likely to happen to toy producers' revenues, assuming the demand for toys is inelastic. Hint: analyze what happens in the market as a result of the earthquake, what happens to the price and quantity, and what happens to the revenue knowing that the demand for toys is inelastic.
    solution: |
      ![](/images/principles-of-micro/ps08-q3-earthquake-toy-revenue.png)

      *Figure: a theory diagram. Supply falls from S0 to S1, the price rises from P0 to P1 and quantity falls from Q0 to q1. Curves are illustrative (the source gives no numbers). Demand is drawn steep enough to be inelastic, so the new revenue rectangle $P_1 \times q_1$ is bigger than the old one $P_0 \times Q_0$: the strip gained at the top outweighs the strip lost on the right.*

      > [!success] Answer (as written in the solution set)
      > Supply falls, so the **price rises** and quantity falls. Because demand is inelastic, the percentage change in quantity is smaller than the percentage change in price. The solution set then concludes that revenue ($P \times Q$) **decreases**.

      > [!warning] The conclusion contradicts its own reasoning
      > If the percentage fall in quantity is smaller than the percentage rise in price, then $P \times Q$ **rises**. This is the rule from [[Lec_08-Elasticity]]: with inelastic demand, price and total revenue move in the same direction. I believe the correct answer is that toy producers' revenue **increases**, and the figure is drawn that way. The source's word "decrease" is kept above only because it is what the source says.

      > [!tip] Intuition
      > Inelastic demand means buyers keep buying nearly the same amount at a higher price, so sellers lose little volume and gain a lot per unit. This is why a supply shock can raise revenue for the producers who still have goods to sell.
    related_terms: ["total-revenue", "price-elasticity-of-demand", "change-in-supply", "elasticity"]
    source_doc_page: 4
  - id: "4a"
    text: |
      **Q4. Cross-price elasticity of demand.** What can you conclude about the relationship between goods A and B in the following situations? Are they substitutes or complements? For each, calculate the cross-price elasticity of demand (assume the numbers already represent a correct percentage change, no midpoint approach needed here).

      $$E_{AB} = \frac{\%\Delta Q_B}{\%\Delta P_A}$$

      **a)** Sales of good B increase by 10% in response to a price decrease in good A of 15%.
    solution: |
      > [!success] Answer
      > The goods are **complements**. The solution set gives the cross-price elasticity as $10\%/15\% = 0.6667$.

      > [!example] Working and sign
      > Strictly, the sign is negative: $\%\Delta Q_B = +10$ and $\%\Delta P_A = -15$ give $E_{AB} = 10/(-15) = -0.667$. A negative cross-price elasticity is exactly what marks complements. The solution set quotes the magnitude, 0.6667.

      > [!tip] Intuition
      > If a cheaper A pulls B's sales **up**, you buy them together (complements). If a cheaper A pulls B's sales **down**, you are replacing B with A (substitutes). See [[Complements]] and [[Substitutes]].
    related_terms: ["cross-price-elasticity-of-demand", "complements", "substitutes"]
    source_doc_page: 4
  - id: "4b"
    text: |
      **b)** Sales of good B decrease by 30% in response to a price decrease in good A of 15%.
    solution: |
      > [!success] Answer
      > The goods are **substitutes**. Cross-price elasticity $= 30\%/15\% = 2$ (positive: $-30/-15 = +2$).
    related_terms: ["cross-price-elasticity-of-demand", "substitutes"]
    source_doc_page: 5
  - id: "4c"
    text: |
      **c)** Sales of good B remain unchanged in response to a price decrease in good A of 15%.
    solution: |
      > [!success] Answer
      > The goods are **unrelated**; the cross-price elasticity is **zero**.
    related_terms: ["cross-price-elasticity-of-demand"]
    source_doc_page: 5
  - id: "5a"
    text: |
      **Q5. Income elasticity.** Income elasticity of demand is the percentage change in quantity demanded divided by the percentage change in income, using the midpoint method for each percentage change.

      Your income rises from 1000 to 1200 pounds a month. You raise your caviar purchases from 8 to 12 cups per month, and you cut your cheese sandwiches from 15 to 10 per month.

      **a)** Calculate your income elasticity of demand for caviar (do not use absolute values).
    solution: |
      > [!example] The shared denominator
      > $$\%\Delta \text{Income} = 100 \cdot \frac{1200 - 1000}{(1200 + 1000)/2} = 100 \cdot \frac{200}{1100} = 18.18\%$$

      > [!success] Answer (as given in the solution set)
      > The solution set writes $\%\Delta Q = 100 \cdot 4/10 = 40\%$ and then divides by 9.09, giving **4.4**.

      > [!warning] Denominator slip
      > The solution set divides 40 by **9.09**, but its own income change is **18.18%** (computed just above in the same solution). The correct ratio is
      >
      > $$E_I = \frac{40}{18.18} = 2.2$$
      >
      > This is also consistent with its cheese-sandwich answer of $-2.2$ in the next part, which does use 18.18. I believe the correct value for caviar is **+2.2**, and the 4.4 is an error. Either way the sign is positive and the value is above 1.
    related_terms: ["income-elasticity-of-demand", "midpoint-method", "normal-good"]
    source_doc_page: 5
  - id: "5b"
    text: |
      **b)** Calculate your income elasticity of demand for cheese sandwiches (do not use absolute values). Same income change as in part a.
    solution: |
      > [!success] Answer
      > $\%\Delta Q = 100 \cdot \dfrac{10 - 15}{12.5} = -40\%$, so
      >
      > $$E_I = \frac{-40}{18.18} = -2.2$$
    related_terms: ["income-elasticity-of-demand", "midpoint-method", "inferior-good"]
    source_doc_page: 5
  - id: "5c"
    text: |
      **c)** What kind of goods are caviar and cheese sandwiches for you (normal or inferior)?
    solution: |
      > [!success] Answer
      > Caviar is a **[[Normal Good]]** (income up, purchases up, positive elasticity). Cheese sandwiches are an **[[Inferior Good]]** (income up, purchases down, negative elasticity).
    related_terms: ["normal-good", "inferior-good", "income-elasticity-of-demand"]
    source_doc_page: 5
  - id: "5d"
    text: |
      **d)** Using the two diagrams on the sheet (demand for caviar and demand for cheese sandwiches, price against quantity), show the effects of your increase in income on your demand for caviar and your demand for cheese sandwiches.
    solution: |
      ![](/images/principles-of-micro/ps08-q5d-income-demand-shifts.png)

      > [!success] Answer
      > Higher income **shifts the caviar demand curve to the right** and **shifts the cheese-sandwich demand curve to the left**, at every price. This matches the solution set's hand-drawn diagrams (arrow right on the caviar graph, arrow left on the cheese graph).

      *Figure: theory diagram. D0 (blue) is the original demand, D1 (orange) the demand after income rises. No numbers on the axes since the sheet gives no demand curve.*
    related_terms: ["normal-good", "inferior-good", "change-in-demand", "income-elasticity-of-demand"]
    source_doc_page: 6
  - id: "m1"
    text: |
      **Part B, MC1.** If the price elasticity of demand for a good is 4 (in absolute value), then a 12 percent decrease in price results in a:

      a. 0.33 percent increase in the quantity demanded.

      b. 3 percent increase in the quantity demanded.

      c. 30 percent increase in the quantity demanded.

      d. 48 percent increase in the quantity demanded.
    solution: |
      > [!success] Answer: (d) 48%
      > $$\frac{\%\Delta Q}{12} = 4 \;\Rightarrow\; \%\Delta Q = 48\%$$
    related_terms: ["price-elasticity-of-demand"]
    source_doc_page: 6
  - id: "m2"
    text: |
      **MC2.** The demand for Godiva pumpkin truffles is likely quite elastic because:

      a. truffles melt easily.

      b. this particular type of chocolate is viewed as a necessity by many chocolate lovers.

      c. the market is broadly defined.

      d. other types of chocolate are good substitutes for this flavour.
    solution: |
      > [!success] Answer: (d)
      > A narrowly defined good with close substitutes has elastic demand. Options (b) and (c) point the other way (necessities and broad markets are less elastic), and (a) is irrelevant.
    related_terms: ["price-elasticity-of-demand", "substitutes", "elasticity"]
    source_doc_page: 7
  - id: "m3"
    text: |
      **MC3.** Suppose that 50 shirts are demanded at a price of 100 NIS per shirt. If the price of shirts rises by 4 percent and the number demanded falls to 46, then, using the midpoint approach, demand in this range is:

      a. elastic.

      b. inelastic.

      c. unit elastic.

      d. elasticity is 0.
    solution: |
      > [!success] Answer: (a) elastic
      > $$\%\Delta Q = 100 \cdot \frac{50 - 46}{(50 + 46)/2} = 100 \cdot \frac{4}{48} = 8.33\%$$
      >
      > $$|E_d| = \frac{8.33}{4} = 2 > 1$$

      > [!warning] Mixed methods in the question
      > A 4% rise from 100 is a price of 104, and the midpoint price change would be $4/102 \approx 3.92\%$, not exactly 4%. The solution set takes the stated 4% as the price change and uses the midpoint only for quantity. The answer (elastic) is unaffected.
    related_terms: ["price-elasticity-of-demand", "midpoint-method"]
    source_doc_page: 7
  - id: "m4"
    text: |
      **MC4.** Ryan says that he would buy one cup of coffee every day regardless of the price. If he is telling the truth, Ryan's:

      a. demand for coffee is perfectly inelastic.

      b. price elasticity of demand for coffee is 1.

      c. income elasticity of demand for coffee is 0.

      d. none of the above answers is correct.
    solution: "TODO"
    related_terms: []
    source_doc_page: 7
---

*Related: [[Lec_08-Elasticity]]*

> [!info] Source
> Worked solutions come from "Solution Set #9 (Elasticity)", a TA solution set from an earlier year (Lecturer: Dr. Yael Hadass), not an official key. The solution set covers multiple-choice questions 1 to 3 only, so MC4 has no solution. Where its arithmetic looks wrong (Q1b, Q3 and Q5a) the source answer is kept and a warning gives the corrected check.
