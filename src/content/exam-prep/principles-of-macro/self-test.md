---
title: "Quick Self-Test"
subject: principles-of-macro
type: self-test
description: "18 new exam-style questions in the paper's order, each with the full working: value added and savings, real per-capita growth, GNP, opening the economy, loanable funds, Solow steady states, the Golden Rule, growth accounting, a bond price and the balance of payments. Six are multiple choice, like the real exam."
course: Principles of Macroeconomics
instructor: Dr. Idit Kalisher and Mr. Yosi Ganel
semester: 2
year: 1
order: 6
tags:
  - principles-of-macro
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Value added, savings and the deficit"
    text: |
      A closed economy. Households spend 1,200 on consumption; firms invest 300 in new machinery; the government buys 200 from firms and pays 150 in wages and 50 in rent. Final goods firms sell 1,700 in total, using 500 of intermediate goods, add 90 of new goods to inventory and clear 30 of old stock. Intermediate firms buy nothing from other firms. Depreciation is 60 for final firms and 20 for intermediate firms. Households pay 300 in taxes. Find GDP, net output, private, public and total savings, and check them against net investment.
    solution: |
      $VA_{final} = 1{,}700 - 500 + (90 - 30) = 1{,}260$, $VA_{int} = 500$, $VA_G = 150 + 50 = 200$.

      $Y = 1{,}960$. Check by expenditure: $C + I + G = 1{,}200 + (300 + 60) + (150 + 50 + 200) = 1{,}960$.

      Net output $= 1{,}960 - 80 = 1{,}880$.

      $s_P = 1{,}880 - 300 - 1{,}200 = 380$, $s_G = 300 - 400 = -100$ (a deficit of 100), $S = 280$.

      Net investment $= 360 - 80 = 280$. **It matches.**
  - id: "2"
    title: "2 · Final firms' profit"
    text: |
      Same economy. Final firms pay 500 in wages and 100 in rent, and their depreciation is 60. What is their profit?
    options:
      - label: a
        text: |
          660
        why: |
          That forgets depreciation.
      - label: b
        text: |
          600
        correct: true
        why: |
          $VA - \text{wages} - \text{rent} - \text{depreciation} = 1{,}260 - 500 - 100 - 60$.
      - label: c
        text: |
          540
        why: |
          That leaves the inventory change out of value added.
      - label: d
        text: |
          1,260
        why: |
          That is their value added, before paying anyone.
    solution: |
      Profit $= 1{,}260 - 500 - 100 - 60 = 600$. **Answer (b).**
  - id: "3"
    title: "3 · Real per-capita growth per year"
    text: |
      Over three years nominal GDP rises 10%, the price level 6% and population 2%. What is the average annual growth of real GDP per capita?
    solution: |
      $$
      1 + g_{total} = \frac{1.10}{1.06 \times 1.02} = \frac{1.10}{1.0812} = 1.0174
      $$

      Per year: $1.0174^{1/3} - 1 \approx 0.58\%$. Not $1.74\%/3$, and not $10 - 6 - 2 = 2\%$.
  - id: "4"
    title: "4 · GDP, GNP, NDP and NNP"
    text: |
      GDP is 2,000. Foreign workers employed here are paid 120, and residents working abroad earn 70. Depreciation is 90. Find GNP, NDP and NNP.
    solution: |
      $GNP = 2{,}000 + 70 - 120 = 1{,}950$.

      $NDP = 2{,}000 - 90 = 1{,}910$.

      $NNP = 1{,}950 - 90 = 1{,}860$, which is 140 below GDP.
  - id: "5"
    title: "5 · An import surplus"
    text: |
      In an open economy, imports exceed exports. Which is correct?
    options:
      - label: a
        text: |
          Domestic savings exceed domestic investment
        why: |
          That is an export surplus: $S - I = NX > 0$.
      - label: b
        text: |
          GNP must be below GDP
        why: |
          The GDP-GNP gap is factor income from abroad, not trade.
      - label: c
        text: |
          Domestic savings are negative
        why: |
          Savings can be positive; they are just smaller than investment.
      - label: d
        text: |
          Domestic investment exceeds domestic savings, and the gap is borrowed abroad
        correct: true
        why: |
          $S - I = NX < 0$.
    solution: |
      $S - I = NX$. With $NX < 0$, $I > S$: the economy borrows the difference from abroad. **Answer (d).**
  - id: "6"
    title: "6 · Opening to trade"
    text: |
      A closed economy saves 400 whatever the interest rate. Investment demand is $I = 600 - 50r$ ($r$ in %). Find the closed-economy rate. Then the economy opens: what happens to investment and net exports if the world rate is 6%? If it is 2%?
    solution: |
      Closed: $400 = 600 - 50r$, so $r = 4\%$.

      World rate 6%: $I = 300$, $NX = S - I = 100 > 0$. The country **lends** 100 abroad.

      World rate 2%: $I = 500$, $NX = -100$. It **borrows** 100 from abroad.
  - id: "7"
    title: "7 · Households consume less"
    text: |
      In a closed economy, households decide to consume less at every level of disposable income. What happens to saving, the interest rate and investment?
    solution: |
      Saving rises, so the supply of loanable funds shifts right. The interest rate **falls** and investment **rises** along the demand curve, until $S = I$ again.
  - id: "8"
    title: "8 · A Solow assumption"
    text: |
      Which is an assumption of the basic Solow model?
    options:
      - label: a
        text: |
          The saving rate and technology are constant
        correct: true
        why: |
          $s$ is fixed and $A$ does not change in the basic model.
      - label: b
        text: |
          Increasing returns to scale
        why: |
          The model has constant returns to scale.
      - label: c
        text: |
          Technology grows with the saving rate
        why: |
          $A$ is constant, and saving does not affect it.
      - label: d
        text: |
          The labour force is fixed
        why: |
          Labour grows at rate $n$.
    solution: |
      Closed economy, no government, constant returns with diminishing returns to each input, constant $s$, $\delta$, $n$ and $A$. **Answer (a).**
  - id: "9"
    title: "9 · Will $k$ grow?"
    text: |
      $Y = 4K^{0.5}L^{0.5}$, households save 15%, depreciation is 4% and population growth 1%. If $k = 225$, will capital per worker rise? Where does it settle?
    solution: |
      $y = 4\sqrt{225} = 60$, so $sy = 9$. Break-even: $(\delta + n)k = 0.05 \times 225 = 11.25$.

      $\Delta k = 9 - 11.25 = -2.25 < 0$: **$k$ falls**.

      $\bar k = \left(\tfrac{0.15 \times 4}{0.05}\right)^2 = 12^2 = 144$, so $k$ falls from 225 to 144.
  - id: "10"
    title: "10 · Steady state and Golden Rule consumption"
    text: |
      $y = 2k^{0.5}$, $s = 0.2$ and $\delta + n = 0.1$. Find the steady-state $k$, $y$ and $c$. Then find the Golden Rule saving rate and its consumption.
    solution: |
      $\bar k = \left(\tfrac{0.2 \times 2}{0.1}\right)^2 = 16$, $\bar y = 2 \times 4 = 8$, $\bar c = 0.8 \times 8 = 6.4$.

      Golden Rule: $s_{GR} = \alpha = 0.5$. $k_{GR} = \left(\tfrac{0.5 \times 2}{0.1}\right)^2 = 100$, $y = 20$, $c = 0.5 \times 20 = 10$.

      Check: $f'(100) = \tfrac{1}{\sqrt{100}} = 0.1 = \delta + n$. Saving more would raise consumption from 6.4 to 10.
  - id: "11"
    title: "11 · A permanent rise in saving"
    text: |
      An economy is in steady state. Its saving rate rises permanently. What happens in the long run?
    options:
      - label: a
        text: |
          Capital and output per worker grow faster forever
        why: |
          Growth is faster only during the transition.
      - label: b
        text: |
          Nothing changes in the long run
        why: |
          The steady-state level changes.
      - label: c
        text: |
          Capital and output per worker settle at permanently higher levels, with zero growth per worker
        correct: true
        why: |
          A new, higher steady state.
      - label: d
        text: |
          Capital per worker rises but output per worker does not
        why: |
          $y = f(k)$ rises with $k$.
    solution: |
      $s\,f(k)$ shifts up, so it meets $(\delta + n)k$ at a higher $\bar k$. $k$ and $y$ grow during the transition, then stop. **Answer (c).**
  - id: "12"
    title: "12 · Three economists on saving"
    text: |
      $y = k^{0.3}$, $\delta = 5\%$, $n = 1\%$, current saving 25%. A says saving should be 6% because $\delta + n = 6\%$. B says it should be 30%. C says raising it to 40% would raise long-run consumption even more. Who is right?
    solution: |
      $s_{GR} = \alpha = 0.3$. **Only B.** A confuses the saving rate with $\delta + n$, which is the slope $f'(k)$ must equal at the Golden Rule. C is wrong: beyond 30%, extra saving lowers steady-state consumption.
  - id: "13"
    title: "13 · An earthquake destroys capital"
    text: |
      An economy in steady state loses half its capital stock in an earthquake; nobody is hurt. $s$, $\delta$, $n$ and $A$ are unchanged. Describe the path of $k$ and $y$.
    solution: |
      $k$ and $y$ fall at once. Now $s\,f(k) > (\delta + n)k$ (diminishing returns make saving per unit of capital high), so $k$ grows, fast at first and then more slowly, back to the **same** $\bar k$. Output per worker follows. Growth is temporarily above normal while it recovers.
  - id: "14"
    title: "14 · A lower marginal product of capital"
    text: |
      Economies A and B share a production function, $n$ and $\delta$, and are both in steady state. The marginal product of capital is lower in A. What is the best explanation?
    options:
      - label: a
        text: |
          A is in a poverty trap
        why: |
          A trap means low $k$, which would mean a **high** $MPK$.
      - label: b
        text: |
          B has increasing returns to capital
        why: |
          The same production function has diminishing returns in both.
      - label: c
        text: |
          Nothing can explain this
        why: |
          Different saving rates can.
      - label: d
        text: |
          A saves more, so its steady-state $k$ is higher, and diminishing returns lower its $MPK$
        correct: true
        why: |
          $MPK$ falls as $k$ rises.
    solution: |
      With the same function, $n$ and $\delta$, only $s$ can differ. Higher $s$ gives higher $\bar k$, and with diminishing returns a lower $MPK$. **Answer (d).**
  - id: "15"
    title: "15 · Growth accounting"
    text: |
      $\alpha = 0.35$. Output grows 3%, capital 4% and labour 1%. What is productivity (TFP) growth?
    solution: |
      $$
      \frac{\Delta A}{A} = 3 - 0.35 \times 4 - 0.65 \times 1 = 3 - 1.4 - 0.65 = 0.95\%
      $$
  - id: "16"
    title: "16 · A bond price"
    text: |
      A two-year bond pays a 6% coupon on a face value of 1,000. The market rate is 8%. What is its price? Is it above or below face value, and why?
    solution: |
      $$
      P = \frac{60}{1.08} + \frac{1{,}060}{1.08^2} = 55.56 + 908.78 = 964.33
      $$

      **Below** face value: the coupon (6%) is less than the market rate (8%), so buyers pay less. If the market rate falls, the price rises.
  - id: "17"
    title: "17 · Reserves"
    text: |
      A country exports goods of 400 and imports services of 250. It receives 30 in interest from abroad, pays 50 in dividends to foreign shareholders and sends 20 in cash remittances. A local firm builds a plant abroad for 120, and foreigners buy 90 of local bonds. Which is correct?
    options:
      - label: a
        text: |
          Reserves rise by 80
        correct: true
        why: |
          $CA = 110$, capital account $= -30$, total $+80$.
      - label: b
        text: |
          The current account is 130
        why: |
          That leaves out the 20 of remittances.
      - label: c
        text: |
          Reserves fall by 80
        why: |
          The sign is reversed: a positive total adds to reserves.
      - label: d
        text: |
          The capital account is +30
        why: |
          The plant abroad (−120) outweighs the bonds sold (+90).
    solution: |
      $CA = 400 - 250 + 30 - 50 - 20 = 110$. Capital account $= -120 + 90 = -30$. Reserves change $= 110 - 30 = +80$. **Answer (a).**
  - id: "18"
    title: "18 · Aid sent as goods"
    text: |
      A country sends 200 of medical equipment as aid: half is a grant, half a loan to be repaid. How does it enter the balance of payments, and what happens to reserves?
    solution: |
      The equipment is an **export** of 200 (current account $+200$). The grant is a transfer sent ($-100$, current account). The loan is lending abroad ($-100$, capital account).

      Current account $+100$, capital account $-100$, so reserves are **unchanged**: no money crossed the border.
---
