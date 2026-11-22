---
title: "EX-7"
subject: principles-of-macro
source_doc: /papers/principles-of-macro/exercise-7.pdf
tags:
  - macro-economics-intro
  - solow-model
  - golden-rule-savings-rate
  - poverty-trap
ai_drafted: true
questions:
  - id: "1"
    text: |
      An economy is in steady state with no population growth. If the savings rate doubles from 20% to 40% and depreciation doubles from 5% to 10%, the new steady state will have:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \frac{s}{\delta} = \frac{0.2}{0.05} = \frac{0.4}{0.1} = 4
      $$

      So $k^*$ and $y^*$ do not change, and $c = (1 - s)y$ falls from $0.8y$ to $0.6y$.
    options:
      - label: "A"
        text: "No change in $k$, $y$ and $c$"
        correct: false
        why: "$c$ falls."
      - label: "B"
        text: "No change in $k$ and $y$; $c$ higher"
        correct: false
        why: "Saving more of the same output lowers $c$."
      - label: "C"
        text: "No change in $k$ and $y$; $c$ lower"
        correct: true
        why: "$s/\\delta$ is unchanged and $c = (1 - s)y$."
      - label: "D"
        text: "No change in $k$ and $c$; $y$ higher"
        correct: false
        why: "$y$ depends only on $k$."
      - label: "E"
        text: "No change in $y$ and $c$; $k$ higher"
        correct: false
        why: "$k$ is unchanged."
    related_terms:
      - steady-state
      - golden-rule-savings-rate
  - id: "2"
    text: |
      If depreciation rises from 5% to 6% while population growth falls from 3% to 2%, the new steady state will have:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $n + \delta$ stays at 8%, so $k^*$ and $y^*$ are unchanged. Total output grows at $n$, which falls from 3% to 2%.
    options:
      - label: "A"
        text: "No change in $y$, lower $k$"
        correct: false
        why: "$k$ does not change."
      - label: "B"
        text: "No change in $k$; total output growth up from 2% to 4%"
        correct: false
        why: "Total output growth falls to 2%."
      - label: "C"
        text: "Lower growth of output per worker"
        correct: false
        why: "It is zero in both steady states."
      - label: "D"
        text: "No change in $y$; total output growth falls"
        correct: true
        why: "$n + \\delta = 8\\%$ in both, and total output grows at $n$."
      - label: "E"
        text: "Lower $y$ and lower total output growth"
        correct: false
        why: "$y$ does not change."
    related_terms:
      - steady-state
      - growth-rate
  - id: "3"
    text: |
      Two economies are in steady state with identical parameters, except that their savings rates are unknown. Which is correct?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      y^* = A\left(\frac{sA}{n + \delta}\right)^{\frac{\alpha}{1 - \alpha}}
      $$

      This rises with $s$. Consumption does not: it rises up to the Golden Rule and falls after it.
    options:
      - label: "A"
        text: "If $c$ is higher in A, its savings rate is necessarily lower"
        correct: false
        why: "It could be on either side of the Golden Rule."
      - label: "B"
        text: "If $c$ is the same, savings rates must be the same"
        correct: false
        why: "Two rates either side of the Golden Rule can give the same $c$."
      - label: "C"
        text: "If $c$ is higher in A, its savings rate is necessarily higher"
        correct: false
        why: "Same reason as option A."
      - label: "D"
        text: "If $c$ is the same, savings per capita must be the same"
        correct: false
        why: "Different $s$ can give equal $c$ with different $y$."
      - label: "E"
        text: "If A has a higher savings rate, its GDP per capita is necessarily greater"
        correct: true
        why: "$k^*$ and $y^*$ rise with $s$."
    related_terms:
      - steady-state
      - golden-rule-savings-rate
  - id: "4"
    text: |
      With $Y = AK^{0.25}L^{0.75}$ under Solow, the king wants to maximise long-run consumption. Which policy would help?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      For Cobb-Douglas, the savings rate that maximises steady-state consumption equals the capital share, so $s = 0.25$.
    options:
      - label: "A"
        text: "Mandate a savings rate of 25%"
        correct: true
        why: "For Cobb-Douglas, $s_{GR} = \\alpha = 0.25$."
      - label: "B"
        text: "Encourage emigration"
        correct: false
        why: "This does not set the Golden Rule savings rate."
      - label: "C"
        text: "Encourage immigration"
        correct: false
        why: "This does not set the Golden Rule savings rate."
      - label: "D"
        text: "Encourage lower savings"
        correct: false
        why: "Only right if saving is above 25%, which is not given."
      - label: "E"
        text: "Mandate savings at 75% of the capital share"
        correct: false
        why: "That is $0.1875$, not $\\alpha$."
    related_terms:
      - golden-rule-savings-rate
  - id: "5"
    text: |
      $Y = 5K^{0.5}L^{0.5}$, $s = 20\%$, $\delta = 10\%$, $n = 0$. If $k = 1$, will capital per worker increase?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      y = 5\sqrt{1} = 5,\qquad \Delta k = 0.2(5) - 0.1(1) = 0.9 > 0
      $$
    options:
      - label: "A"
        text: "No, savings are insufficient"
        correct: false
        why: "Savings are 1 and depreciation is 0.1."
      - label: "B"
        text: "Yes, the net change in $k$ is positive"
        correct: true
        why: "$\\Delta k = 0.9$."
      - label: "C"
        text: "No, output per worker is less than 1"
        correct: false
        why: "$y = 5$."
      - label: "D"
        text: "Yes, $k$ is at its highest level"
        correct: false
        why: "That is not the reason."
      - label: "E"
        text: "No, depreciation is too high regardless of savings"
        correct: false
        why: "It is not."
    related_terms:
      - poverty-trap
  - id: "6"
    text: |
      Production has strong diminishing returns at low capital, and savings is a fixed share of income. Which condition is most likely to lead to a poverty trap?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      A trap needs savings per worker to fall short of what is needed to hold $k$ constant.
    options:
      - label: "A"
        text: "MPK increases as $k$ decreases"
        correct: false
        why: "That is ordinary diminishing returns."
      - label: "B"
        text: "Savings are high enough to accumulate at low income"
        correct: false
        why: "That avoids a trap."
      - label: "C"
        text: "Savings out of low income cannot maintain the capital stock, so $k$ declines"
        correct: true
        why: "This is $sf(k) < (n + \\delta)k$."
      - label: "D"
        text: "Depreciation is constant"
        correct: false
        why: "Standard assumption."
      - label: "E"
        text: "Technology is labour-augmenting and raises growth"
        correct: false
        why: "That helps escape."
    related_terms:
      - poverty-trap
---

> [!warning] AI-written answers
> Moodle has no official solution for this home exercise. Every answer here is AI-written.
