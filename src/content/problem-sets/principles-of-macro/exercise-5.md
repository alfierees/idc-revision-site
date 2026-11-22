---
title: "EX-5"
subject: principles-of-macro
source_doc: /papers/principles-of-macro/exercise-5.pdf
tags:
  - macro-economics-intro
  - production-function
  - cobb-douglas
  - marginal-product-of-labor
  - factor-payments
ai_drafted: true
questions:
  - id: "1"
    text: |
      The production function is $Y = AK^{\alpha}L^{1-\alpha}$. Which is correct?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      Multiply both inputs by $\lambda$:

      $$
      A(\lambda K)^{\alpha}(\lambda L)^{1-\alpha} = \lambda\,AK^{\alpha}L^{1-\alpha}
      $$
    options:
      - label: "A"
        text: "For every $\\alpha > 0.5$ there are increasing returns to scale"
        correct: false
        why: "The exponents always sum to 1."
      - label: "B"
        text: "For every $\\alpha < 0.5$, MPL increases when labour increases"
        correct: false
        why: "MPL always falls with $L$."
      - label: "C"
        text: "There are constant returns to scale for every $0 < \\alpha < 1$"
        correct: true
        why: "$\\alpha + (1 - \\alpha) = 1$."
      - label: "D"
        text: "If $\\alpha = 0.2$, MPK decreases when labour increases"
        correct: false
        why: "More labour raises MPK."
      - label: "E"
        text: "If $\\alpha = 0.8$, MPK increases as capital increases"
        correct: false
        why: "MPK always falls with $K$."
    related_terms:
      - cobb-douglas-production-function
      - returns-to-scale
  - id: "2"
    text: |
      In a perfectly competitive labour market with $Y = 4K^{0.5}L^{0.5}$, $K = 100$ and $L = 25$, what is the real wage?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \frac{w}{P} = MPL = 0.5 \cdot 4 \cdot K^{0.5}L^{-0.5} = 2\sqrt{\frac{100}{25}} = 4
      $$
    options:
      - label: "A"
        text: "4"
        correct: true
        why: "$MPL = 2(100/25)^{0.5} = 4$."
      - label: "B"
        text: "6"
        correct: false
        why: "Arithmetic slip."
      - label: "C"
        text: "8"
        correct: false
        why: "This forgets the exponent 0.5 in the derivative."
      - label: "D"
        text: "10"
        correct: false
        why: "That is the square root of $K$."
      - label: "E"
        text: "12"
        correct: false
        why: "Not the MPL."
    related_terms:
      - marginal-product-of-labor
      - real-wage
  - id: "3"
    text: |
      Cobb-Douglas with constant returns, capital share $\alpha = 0.5$. Workers increase by 4% with capital unchanged. As a result:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \%\Delta Y \approx 0.5 \times 4\% = 2\%
      $$

      Each factor receives a fixed share of output, so payments to workers and to capital both rise by about 2%.
    options:
      - label: "A"
        text: "GDP increased by about 4%"
        correct: false
        why: "About 2%."
      - label: "B"
        text: "MPK declined by about 2%"
        correct: false
        why: "MPK rises about 2%."
      - label: "C"
        text: "MPL increased by about 2%"
        correct: false
        why: "MPL falls about 2%."
      - label: "D"
        text: "Total payments to capital declined by about 2%"
        correct: false
        why: "They rise with GDP."
      - label: "E"
        text: "Total payments to workers increased by about 2%"
        correct: true
        why: "Labour's share is fixed, so they move with GDP."
    related_terms:
      - factor-income-shares
      - marginal-product-of-capital
  - id: "4"
    text: |
      Cobb-Douglas with constant returns, capital share one quarter. Workers decline by 8%. As a result:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \%\Delta Y \approx 0.75 \times (-8\%) = -6\%
      $$

      $$
      \%\Delta MPL \approx -6\% + 8\% = +2\%,\qquad \%\Delta MPK \approx -6\%
      $$
    options:
      - label: "A"
        text: "MPK increased by about 6%"
        correct: false
        why: "MPK falls about 6%."
      - label: "B"
        text: "MPL declined by about 2%"
        correct: false
        why: "MPL rises about 2%."
      - label: "C"
        text: "Total payments to workers declined by about 6%"
        correct: true
        why: "Labour's share is fixed, and GDP falls about 6%."
      - label: "D"
        text: "Total payments to capital declined by about 2%"
        correct: false
        why: "They fall about 6%."
      - label: "E"
        text: "GDP declined by about 2%"
        correct: false
        why: "About 6%."
    related_terms:
      - factor-income-shares
      - marginal-product-of-labor
  - id: "5"
    text: |
      In the capital market diagram, the area below the demand curve to the left of capital supply represents:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \int_0^{K} MPK\,dK = F(K, L) - F(0, L) = Y
      $$

      Output is zero with no capital in Cobb-Douglas, so the full area is GDP.
    options:
      - label: "A"
        text: "Total GDP in the economy"
        correct: true
        why: "The area under MPK up to $K$ is $F(K,L)$."
      - label: "B"
        text: "Total payments to capital"
        correct: false
        why: "That is only the rectangle below the rental rate."
      - label: "C"
        text: "Total wage payments"
        correct: false
        why: "That is the triangle above the rental rate."
      - label: "D"
        text: "GDP minus company profits"
        correct: false
        why: "Not this area."
      - label: "E"
        text: "Integral of MPL minus MPK"
        correct: false
        why: "Not meaningful here."
    related_terms:
      - capital-market
      - marginal-product-of-capital
  - id: "6"
    text: |
      Cobb-Douglas with $\alpha = 1/3$. Workers, capital and technology each rise 3%. As a result:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \%\Delta Y \approx 3\% + \tfrac{1}{3}(3\%) + \tfrac{2}{3}(3\%) = 6\%
      $$

      $$
      \%\Delta (Y/L) \approx 6\% - 3\% = 3\%
      $$

      > [!warning] Two options are correct
      > **A and D are both true** on this reading. The exercise has no official key, so ask which one was intended.
    options:
      - label: "A"
        text: "GDP per worker increased by about 3%"
        correct: true
        why: "Capital per worker is unchanged, so only TFP adds."
      - label: "B"
        text: "GDP per worker increased by about 1%"
        correct: false
        why: "About 3%."
      - label: "C"
        text: "GDP increased by about 3%"
        correct: false
        why: "About 6%."
      - label: "D"
        text: "GDP increased by about 6%"
        correct: true
        why: "Inputs add 3% and TFP adds 3%."
      - label: "E"
        text: "GDP increased by about 9%"
        correct: false
        why: "The inputs' 3% is not counted twice."
    related_terms:
      - growth-accounting
      - total-factor-productivity
---

> [!warning] AI-written answers
> Moodle has no official solution for this home exercise. Every answer here is AI-written.
