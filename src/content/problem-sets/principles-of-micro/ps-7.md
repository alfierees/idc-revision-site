---
title: "PS7"
subject: principles-of-micro
source_doc: /papers/principles-of-micro/ps-7.pdf
tags:
  - principles-of-micro
  - problem-set
  - comparative-statics
  - shift-of-curve
  - market-equilibrium
  - simultaneous-shifts
  - ambiguity
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Q1. The market for candies.** Using supply-and-demand diagrams, show the effect of the following events on the market equilibrium in the market for candies. Label the original market equilibrium with $P_E$ and $Q_E$, identify any potential shifts of the demand and supply curves, and label the new market equilibrium with $P_N$ and $Q_N$. Write down what happened to the price and quantity of candies as the result of the described changes. Each change is unrelated to the ones before: start each from the same initial equilibrium.

      **a)** Analyze what happens in the market (changes in price and quantity compared to the initial equilibrium) as a result of an anti-sugar campaign that changes consumer preferences.
    solution: |
      > [!tip] Intuition: three questions for every event
      > 1. Which market (and which good)?
      > 2. Does the event move the **demand** curve (tastes, income, expectations, prices of related goods, number of buyers) or the **supply** curve (input costs, technology, expectations, number of sellers)? Or both?
      > 3. Which way does each curve shift? Then read off the new equilibrium ($P_N$, $Q_N$) against the old one ($P_E$, $Q_E$).
      >
      > One curve shifts: price and quantity are both determined. Two curves shift: the direction of one variable is certain and the other is **ambiguous** unless you know which shift is larger. See [[Lec_07-Comparative Statics]].

      > [!success] Answer
      > Demand falls (shifts left). Equilibrium **price falls** and equilibrium **quantity falls**.

      ![](/images/principles-of-micro/ps07-q1a-candy-demand-falls.png)

      *Theory diagram. A change in tastes is a [[Change in Demand|shift of the demand curve]]. Supply does not move, so the market slides down along the supply curve to a lower price and a lower quantity.*
    related_terms: ["comparative-statics", "change-in-demand", "market-equilibrium", "movement-along-a-curve"]
    source_doc_page: 1
  - id: "1b"
    text: |
      **b)** Analyze what happens in the market (changes in price and quantity compared to the initial equilibrium) as a result of a bumper sugar harvest that lowers the price of sugar.
    solution: |
      > [!success] Answer
      > Supply increases (shifts right) because the cost of production fell. Equilibrium **price falls** and equilibrium **quantity rises**.

      ![](/images/principles-of-micro/ps07-q1b-candy-supply-rises.png)

      *Theory diagram. Sugar is an input, so a lower input price lowers cost and is a [[Change in Supply|shift of the supply curve]]. Demand is unchanged, so the market moves down along the demand curve.*
    related_terms: ["comparative-statics", "change-in-supply", "determinants-of-supply", "market-equilibrium", "movement-along-a-curve"]
    source_doc_page: 1
  - id: "1c"
    text: |
      **c)** Analyze what happens in the market (changes in price and quantity compared to the initial equilibrium) as a result of the fact that consumer income increased and, at the same time, new technology was introduced to candy manufacturers that enabled faster and cheaper production.
    solution: |
      > [!success] Answer
      > Supply increases (cheaper production) and demand increases (higher income). Equilibrium **quantity rises**. Equilibrium **price may fall or rise**: it depends on which curve moves farther.

      ![](/images/principles-of-micro/ps07-q1c-candy-both-shift.png)

      *Theory diagram, two possible cases. Both panels show both curves moving right, so $Q_N > Q_E$ in each. The price ends up higher if demand moves more and lower if supply moves more. The source diagram draws a single case; the two panels here only illustrate the "depends which curve moves farther" statement and carry no numbers.*

      > [!tip] Intuition
      > Each shift pushes quantity the same way (up), so the effects add. They push price in opposite directions (more demand raises it, more supply lowers it), so they fight. See [[Simultaneous Shifts]].

      Quick reference for the four cases in this set:

      | Case | Demand | Supply | Price | Quantity |
      |---|---|---|---|---|
      | Demand falls | left | none | falls | falls |
      | Supply rises | none | right | falls | rises |
      | Demand right, supply right | right | right | ambiguous | rises |
      | Demand right, supply left | right | left | rises | ambiguous |
    related_terms: ["simultaneous-shifts", "change-in-demand", "change-in-supply", "market-equilibrium"]
    source_doc_page: 3
  - id: "3a"
    text: |
      **Q3. Comparative statics: the housing market in Prague.** Read the paragraph below and answer the questions.

      The paragraph: flat prices in Prague have doubled or tripled in ten years. AirBnB brings 700,000+ visitors a year, mostly through locals who rent out flats or bought a second one. The global and local economies are doing well, bringing more foreigners. Mortgage interest rates are very low. Binding rent ceilings, set well below the market price, were abandoned in 2013. The municipality was reluctant for a long time to issue building permits, so developers could not meet demand.

      **1.** Who caused the rental and real estate prices boom in Prague? Answer using supply-and-demand diagrams: find the important economic events in the paragraph and show their effect on the market equilibrium in the housing market in Prague.
    solution: |
      > [!success] Answer (the six points in the solution)
      > 1. AirBnB brought 700,000 visitors, which **increased the demand** for housing.
      > 2. The global economy is doing well, which raised the income of foreigners and so the demand of foreigners to visit Prague.
      > 3. Low interest rates and cheap mortgages **increased the demand** of buyers of real estate in Prague.
      > 4. Rent control was cancelled, so the price was free to move up.
      > 5. There is **no movement in supply** because of the government's regulations (no new permits).
      > 6. As a result, equilibrium **price and quantity increased**.

      ![](/images/principles-of-micro/ps07-q3-prague-demand-rises.png)

      *Theory diagram. Several separate demand-side events all shift demand right. Supply is held fixed by the permit policy. The solution's diagram shows $P_N > P_E$ and $Q_N > Q_E$; the exact positions on this figure are illustrative.*

      > [!tip] Intuition
      > The old binding rent ceilings (see [[Lec_10-Price Controls]]) kept the price below the market price. Removing them lets the price rise to where the market clears. Slow permits keep supply from responding, so the rise in price is larger than it would otherwise be.
    related_terms: ["comparative-statics", "change-in-demand", "price-ceiling", "rent-control", "market-equilibrium"]
    source_doc_page: 4
  - id: "3b"
    text: |
      **2.** (Same Prague paragraph as 3a.) Should we blame AirBnB, greedy wealthy citizens, the municipal authority or the overall economy?
    solution: "TODO"
    related_terms: []
    source_doc_page: 4
  - id: "3c"
    text: |
      **3.** (Same Prague paragraph as 3a.) What should the municipality do, taking efficiency and equality into account? Should it ban AirBnB, and what would follow?
    solution: "TODO"
    related_terms: []
    source_doc_page: 4
  - id: "4i"
    text: |
      **Q4. Personal computers.** Suppose that in the market for personal computers there is an increase in both the supply and the demand.

      **First scenario (size of the shifts unknown).**

      **a.** Show in the graph the original and the new equilibrium.

      **b.** Can we tell if the equilibrium price increases or decreases after the change?

      **c.** Can we tell if the equilibrium quantity increases or decreases after the change?
    solution: |
      ![](/images/principles-of-micro/ps07-q4-computers-both-increase.png)

      *Theory diagram, two possible cases, in the same form as Q1c. Both panels have $Q_N > Q_E$. The price rises in the left panel and falls in the right panel.*

      > [!success] Answer
      > - **Price:** may be higher or lower than the original equilibrium, depending on which curve shifted more. The price change is **ambiguous**.
      > - **Quantity:** the equilibrium quantity **increased** for sure.
      > - Can we tell if price rose or fell? **No.**
      > - Can we tell if quantity rose or fell? **Yes** (it rose).

      > [!warning] Sub-part labels in the source
      > The source solution's lettering for the first scenario runs a, b, c, d, while the question has a, b, c. The answers match the question by content: a (price: ambiguous), b (quantity: rises), c (price tell? No), and d (quantity tell? Yes).
    related_terms: ["simultaneous-shifts", "change-in-demand", "change-in-supply", "market-equilibrium"]
    source_doc_page: 5
  - id: "4ii"
    text: |
      **Second scenario.** Now suppose that you also know that the supply of personal computers increases more than the demand for personal computers.

      **a.** Show in the graph what will happen to the equilibrium price and quantity after the change.

      **b.** Can we tell if the equilibrium price increases or decreases after the change?

      **c.** Can we tell if the equilibrium quantity increases or decreases after the change?
    solution: |
      > [!success] Answer
      > Because supply moved more than demand, the price has **gone down** relative to the original equilibrium, and quantity has **increased**.
      > - Can we tell if price rose or fell? **Yes, it fell.**
      > - Can we tell if quantity rose or fell? **Yes, it rose.**

      The right-hand panel of the Q4 figure above is this case: supply shifts farther than demand, $P_N < P_E$ and $Q_N > Q_E$.
    related_terms: ["simultaneous-shifts", "change-in-demand", "change-in-supply", "market-equilibrium"]
    source_doc_page: 6
  - id: "5"
    text: |
      **Q5. Frost and orange juice.** Suppose a frost destroys much of the Florida orange crop. At the same time, suppose consumer tastes shift toward orange juice.

      **a.** What happens to the equilibrium price and quantity?

      **b.** Show on a graph and explain.

      **c.** Can we tell if the price rises or falls?

      **d.** Can we tell if the quantity rises or falls?
    solution: |
      > [!success] Answer
      > Supply **decreases** (less fruit) and demand **increases** (tastes). Both changes push the price **up** relative to the original situation, so price rises for sure. Quantity could have either increased or decreased: we cannot tell without more information.
      > - c. Can we tell about price? **Yes** (it rises).
      > - d. Can we tell about quantity? **No.**

      ![](/images/principles-of-micro/ps07-q5-orange-juice.png)

      *Theory diagram, two possible cases. In both panels demand shifts right and supply shifts left, so $P_N > P_E$. If supply falls more than demand rises, quantity falls (left). If demand rises more, quantity rises (right). The source draws one case; the second panel shows why quantity is ambiguous.*
    related_terms: ["simultaneous-shifts", "change-in-demand", "change-in-supply", "market-equilibrium"]
    source_doc_page: 6
  - id: "m3"
    text: |
      **Multiple choice 3.** Suppose consumer tastes shift toward the consumption of apples. Which of the following statements is an accurate description of the impact of this event on the market for apples?

      a. There is an increase in the quantity demanded of apples and in the supply of apples.

      b. There is an increase in the demand and supply of apples.

      c. There is an increase in the demand for apples and a decrease in the supply of apples.

      d. There is a decrease in the quantity demanded of apples and an increase in the supply of apples.

      e. There is an increase in the demand for apples and an increase in the quantity supplied of apples.
    solution: "TODO"
    related_terms: []
    source_doc_page: 7
  - id: "m4"
    text: |
      **Multiple choice 4.** Suppose both buyers and sellers of wheat expect the price of wheat to rise in the near future. What would we expect to happen to the equilibrium price and quantity in the market for wheat today? Think about how producers will respond today to the news. Show in a graph and explain your choice of the following options:

      a. The impact on both price and quantity is ambiguous.

      b. Price will decrease; quantity is ambiguous.

      c. Price will increase; quantity will decrease.

      d. Price will increase; quantity is ambiguous.

      e. Price will increase; quantity will increase.
    solution: |
      > [!success] Solution reasoning
      > If the price is expected to rise, consumers **increase demand today**: they prefer to buy now rather than when the price is higher. Producers **supply less today**, hoping to sell more later at the higher price, so **supply falls**.

      ![](/images/principles-of-micro/ps07-mcq4-wheat-today.png)

      *Theory diagram, two possible cases. Demand shifts right and supply shifts left, exactly as in Q5.*

      > [!tip] Intuition: which option?
      > The solution states the two shifts but does not write down a letter. Demand right and supply left is the same combination as Q5, where price rises for sure and quantity is ambiguous. That points to option **(d)**. This letter is my reading of the solution's shifts, not a printed answer.
    related_terms: ["simultaneous-shifts", "change-in-demand", "change-in-supply", "market-equilibrium"]
    source_doc_page: 8
---

*Related: [[Lec_07-Comparative Statics]], [[Lec_04-Supply and Market Equilibrium]], [[Lec_03-Perfect Competition and Demand]], [[Lec_10-Price Controls]]*

> [!warning] Numbering mismatch
> The TA solution file behind this set is headed "Problem Set #8" and starts with two cost-curve questions (Barry's golf balls), which belong to [[Lec_06-Firms in Competitive Markets]] and not to this set. Only its comparative-statics half is used here. The booklet itself numbers the questions 1, 3, 4, 5, then restarts with multiple-choice questions 3 and 4 (there is no question 2 in this topic). The site keeps the booklet's numbers and labels the multiple-choice ones "m3" and "m4". The worked solutions come from a TA recitation set for Dr. Hadass's course (earlier year), not an official key.
