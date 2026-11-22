---
title: "EX-8"
subject: principles-of-macro
source_doc: /papers/principles-of-macro/exercise-8.pdf
tags:
  - macro-economics-intro
  - bond
  - present-value
  - net-present-value
  - loanable-funds-market
ai_drafted: true
questions:
  - id: "1"
    text: |
      A 5-year Israeli government bond has a face value of 1,000 NIS and an annual coupon of 50 NIS, with a market rate of 5% at issue. One year later it trades at 950 NIS. What is the most plausible explanation?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      At issue, coupon rate equals market rate, so the price is 1,000. A price below face value means the market now requires a return above 5%.
    options:
      - label: "A"
        text: "A reduction in the fixed coupon"
        correct: false
        why: "Coupons are fixed."
      - label: "B"
        text: "A rise in general price inflation"
        correct: false
        why: "Possible indirectly, but the direct cause is the rate."
      - label: "C"
        text: "A decrease in the supply of savings"
        correct: false
        why: "This could raise rates, but D is the direct cause."
      - label: "D"
        text: "An increase in the market interest rate"
        correct: true
        why: "Bond prices fall when rates rise."
      - label: "E"
        text: "Stable demand for investment"
        correct: false
        why: "This would not move the price."
    related_terms:
      - bond
      - present-value
  - id: "2"
    text: |
      A fiscal stimulus creates a budget deficit of 3% of GDP, mainly through transfers to households. The economy is closed, with no further intervention. What is the most likely outcome?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      A larger deficit lowers public saving by more than household saving rises, so supply of funds falls, $r$ rises and investment falls.

      ```graph
      type: loanable-funds
      figure: deficit
      ```
    options:
      - label: "A"
        text: "Investment rises"
        correct: false
        why: "Public borrowing pushes rates up."
      - label: "B"
        text: "Investment falls due to higher interest rates"
        correct: true
        why: "Lower public saving raises $r$."
      - label: "C"
        text: "Savings rise due to higher rates"
        correct: false
        why: "Total saving falls."
      - label: "D"
        text: "Both rates and investment rise"
        correct: false
        why: "Investment falls."
      - label: "E"
        text: "Ambiguous without monetary policy"
        correct: false
        why: "The course model gives a clear answer."
    related_terms:
      - loanable-funds-market
      - fiscal-policy
  - id: "3"
    text: |
      The Ministry of Finance wants to raise national saving in a closed economy. Which is most likely to work?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      A surplus raises $s_G$, and retirement incentives raise $s_P$.
    options:
      - label: "A"
        text: "Higher income tax and higher transfers"
        correct: false
        why: "The transfers offset the extra revenue."
      - label: "B"
        text: "Lower capital gains tax and expansionary fiscal policy"
        correct: false
        why: "Expansionary policy reduces public saving."
      - label: "C"
        text: "Budget surplus and tax-deferred retirement savings incentives"
        correct: true
        why: "This raises both public and private saving."
      - label: "D"
        text: "More public investment funded by borrowing"
        correct: false
        why: "This lowers public saving."
      - label: "E"
        text: "Lower interest rates to stimulate investment"
        correct: false
        why: "Lower rates reduce the reward for saving."
    related_terms:
      - government-savings
      - private-savings
  - id: "4"
    text: |
      A project costs 800,000 NIS and returns 200,000 NIS a year for 5 years. At a 6% rate, NPV is positive. A reform significantly raises private saving in a closed economy. What is the most likely new NPV?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      NPV_{6\%} = -800{,}000 + 200{,}000 \times \frac{1 - 1.06^{-5}}{0.06} \approx 42{,}473
      $$

      More saving lowers the interest rate, so NPV should **rise** above 42,473. Only option C does.
    options:
      - label: "A"
        text: "42,000, because saving lowers demand"
        correct: false
        why: "That is about the old NPV, so it ignores the rate change."
      - label: "B"
        text: "49,200, because cash flows have not changed"
        correct: false
        why: "The discount rate changes."
      - label: "C"
        text: "65,000, because saving lowers the interest rate and raises PV"
        correct: true
        why: "More saving lowers $r$, so PV rises."
      - label: "D"
        text: "0, because investment absorbs the saving"
        correct: false
        why: "Not implied."
      - label: "E"
        text: "-25,000, due to competition"
        correct: false
        why: "A lower rate raises NPV."
    related_terms:
      - net-present-value
      - loanable-funds-market
  - id: "5"
    text: |
      A country with no population growth or technological progress wants to raise long-run output per worker. According to Solow, which policy is most likely to raise steady-state capital per worker?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      In Solow, $k^*$ rises with the savings rate.
    options:
      - label: "A"
        text: "Tax incentives that encourage household saving"
        correct: true
        why: "A higher $s$ raises $k^*$."
      - label: "B"
        text: "More transfers to low-income households"
        correct: false
        why: "This does not raise $s$."
      - label: "C"
        text: "More public investment funded by new debt"
        correct: false
        why: "Borrowing reduces national saving."
      - label: "D"
        text: "Higher minimum wages"
        correct: false
        why: "Not a Solow parameter."
      - label: "E"
        text: "Infrastructure program with no change in fiscal balance"
        correct: false
        why: "This does not change total saving."
    related_terms:
      - steady-state
      - private-savings
---

> [!warning] AI-written answers
> Moodle has no official solution for this home exercise. Every answer here is AI-written.
