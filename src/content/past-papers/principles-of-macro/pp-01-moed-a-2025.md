---
title: "Final Exam 2025, Moed A"
type: past-paper
status: official-key
exam: "Moed A, 4 August 2025"
course: Principles of Macroeconomics
instructor: Dr. Idit Kalisher, Mr. Yosi Ganel
semester: 2
year: 2025
source_doc: /papers/principles-of-macro/pp-01-moed-a-2025.pdf
tags:
  - macro-economics-intro
  - past-paper
subject: principles-of-macro
in_scope: true
questions:
  - id: "q1"
    title: "Q1 — The Shire: savings and deficit"
    text: |
      The Shire is a closed economy. Firms invested 645 in new machinery and infrastructure and sold 4,045 of final consumption goods, using 850 of intermediate goods. Intermediate producers had no purchases from other firms. Final goods firms cleared 280 from inventory, and 75 of new goods remained unsold. Depreciation was 100 for final firms and 50 for intermediate firms. Final firms paid 250 wages and 100 rent; intermediate firms paid 100 wages and 30 rent. The government spent 500 on wages, 750 on rent and 1,500 on purchases from firms. Households paid 750 in income taxes and spent 1,900 on consumption goods. Firms distribute all profits. Which statement is correct?
    solution: |
      $$
      VA_{\text{final}} = 4{,}045 - 850 + (75 - 280) = 2{,}990,\quad VA_{\text{int}} = 850,\quad VA_G = 1{,}250
      $$

      $$
      Y = 5{,}090,\qquad NDP = 5{,}090 - 150 = 4{,}940
      $$

      $$
      s_P = 4{,}940 - 750 - 1{,}900 = 2{,}290,\qquad s_G = 750 - 2{,}750 = -2{,}000,\qquad S = 290
      $$
    options:
      - label: "A"
        text: "Total savings is 290 and the government deficit is 2,000"
        correct: true
        why: "Net saving equals net investment, 290, and $G - T = 2{,}000$."
      - label: "B"
        text: "Net investment is 595"
        correct: false
        why: "Net investment is $440 - 150 = 290$."
      - label: "C"
        text: "Final firms' profit is 2,890; intermediate firms' profit is 800"
        correct: false
        why: "They are 2,540 and 670."
      - label: "D"
        text: "Net output is 5,145"
        correct: false
        why: "Net output is $5{,}090 - 150 = 4{,}940$."
    related_terms:
      - savings-identity
      - government-savings
      - net-investment
  - id: "q2"
    title: "Q2 — Opening a closed economy"
    text: |
      Consider a closed economy where household saving does not depend on the interest rate. As a result of opening to international trade:
    solution: |
      ```graph
      type: loanable-funds
      figure: open-economy
      ```

      $S = I + NX$ with $S$ fixed. A higher world rate lowers $I$ and creates $NX > 0$. A lower world rate raises $I$ and creates $NX < 0$. The official key marks **A and C**.
    options:
      - label: "A"
        text: "If net exports are positive, the closed-economy interest rate is lower than the open-economy rate"
        correct: true
        why: "$NX > 0$ means $S > I$, which happens at a higher rate."
      - label: "B"
        text: "If the open-economy rate is lower than the closed rate, exports exceed imports"
        correct: false
        why: "A lower rate raises $I$ above $S$, so $NX < 0$."
      - label: "C"
        text: "If the closed-economy rate is higher than the open rate, total savings is lower than domestic investment"
        correct: true
        why: "At the lower world rate, $I$ rises above the fixed $S$."
      - label: "D"
        text: "If the two rates are equal, there would be no international trade"
        correct: false
        why: "Trade can still happen, it just balances."
    related_terms:
      - savings-identity
      - net-exports
      - loanable-funds-market
  - id: "q3"
    title: "Q3 — Hobbiton: GDP per capita"
    text: |
      In 1435, the base year, Hobbiton's GDP in current prices was 152,448,000 gold coins. In 1440, current GDP rose to 158,545,920 and the price level fell by 5%. Population rose from 5,500 to 5,720. Between 1435 and 1440:

      I. GDP per capita decreased, due to the decrease in GDP

      II. Real GDP per capita increased by 1.03% annually, on average

      III. Population growth equals GDP growth

      Therefore:
    solution: |
      GDP and population both rose 4%, so nominal GDP per capita is unchanged.

      $$
      \frac{1}{0.95} = 1.0526,\qquad 1.0526^{1/5} - 1 \approx 1.03\%
      $$

      The options label the statements A, B and C rather than I, II and III.
    options:
      - label: "A"
        text: "Statements B and C are correct"
        correct: true
        why: "This means II and III, which are both true."
      - label: "B"
        text: "All three statements are correct"
        correct: false
        why: "Statement I is false: GDP rose."
      - label: "C"
        text: "Statements A and C are correct"
        correct: false
        why: "Statement I is false."
      - label: "D"
        text: "Statement C only is correct"
        correct: false
        why: "Statement II is also true."
    related_terms:
      - real-gdp
      - gdp-per-capita
      - growth-rate
  - id: "q4"
    title: "Q4 — Rivendell: GDP, GNP and net measures"
    text: |
      Wages paid to foreign workers in Rivendell were 1,240 silverleaves. Rivendell elves working abroad earned 846. Producers invested 244 in depreciation. Which is correct?
    solution: |
      $$
      GNP = GDP + 846 - 1{,}240 = GDP - 394,\qquad NDP = GDP - 244,\qquad NNP = GDP - 638
      $$
    options:
      - label: "A"
        text: "GDP is 638 higher than NNP, and NDP is 394 higher than NNP"
        correct: true
        why: "$394 + 244 = 638$."
      - label: "B"
        text: "GDP is 394 lower than GNP and 244 higher than NDP"
        correct: false
        why: "GDP is 394 **higher** than GNP."
      - label: "C"
        text: "NDP is 394 lower than NNP and 638 higher than GDP"
        correct: false
        why: "NDP is above NNP and below GDP."
      - label: "D"
        text: "GNP is 244 lower than NNP and 394 higher than GDP"
        correct: false
        why: "GNP is above NNP and below GDP."
    related_terms:
      - gross-national-product
      - net-domestic-product
      - net-income-from-foreign-factors
  - id: "q5"
    title: "Q5 — Savings and the trade balance"
    text: |
      Which is correct regarding an open economy?
    solution: |
      $$
      S = I + NX
      $$
    options:
      - label: "A"
        text: "If exports exceed imports, domestic savings exceed domestic investment"
        correct: true
        why: "$S - I = NX > 0$, with no net foreign factor income."
      - label: "B"
        text: "If imports exceed exports, private savings exceed domestic investment"
        correct: false
        why: "$NX < 0$ means total $S < I$."
      - label: "C"
        text: "If GDP is larger than GNP, imports exceed exports"
        correct: false
        why: "The GDP to GNP gap is about factor income, not trade."
      - label: "D"
        text: "If exports equal imports, domestic savings are zero"
        correct: false
        why: "Then $S = I$, which need not be zero."
    related_terms:
      - savings-identity
      - net-exports
  - id: "q6"
    title: "Q6 — Higher consumption"
    text: |
      Households decide to increase consumption at every level of disposable income. This would result in:
    solution: |
      Saving falls, so the supply of loanable funds shifts left, $r$ rises and investment falls.
    options:
      - label: "A"
        text: "An increase in interest rates"
        correct: true
        why: "Less saving reduces the supply of funds."
      - label: "B"
        text: "Higher private savings, if households save at least 25%"
        correct: false
        why: "More consumption means less saving."
      - label: "C"
        text: "More loanable funds without a change in rates"
        correct: false
        why: "Supply falls."
      - label: "D"
        text: "An increase in investment"
        correct: false
        why: "A higher rate lowers investment."
    related_terms:
      - loanable-funds-market
      - private-savings
  - id: "q7"
    title: "Q7 — Solow assumptions"
    text: |
      Which of the following is an assumption of the basic Solow growth model?
    solution: |
      The course's basic model assumes constant technology, constant returns to scale and a fixed savings rate.
    options:
      - label: "A"
        text: "Total factor productivity is constant"
        correct: true
        why: "The basic model has constant technology."
      - label: "B"
        text: "Capital accumulation is independent of the savings rate"
        correct: false
        why: "Saving drives accumulation."
      - label: "C"
        text: "There are increasing returns to capital and labour"
        correct: false
        why: "Returns to each are diminishing."
      - label: "D"
        text: "The production function exhibits increasing returns to scale"
        correct: false
        why: "It has constant returns to scale."
    related_terms:
      - solow-model
  - id: "q8"
    title: "Q8 — Not in steady state"
    text: |
      Which best describes an economy that is **not** in steady state according to Solow's model?
    solution: |
      Steady state means $\Delta k = 0$, so any change in $k$ means the economy is not there.
    options:
      - label: "A"
        text: "Capital per worker changes between periods"
        correct: true
        why: "In steady state $k$ is constant."
      - label: "B"
        text: "Investment equals depreciation plus equipping new workers"
        correct: false
        why: "That defines steady state."
      - label: "C"
        text: "Output per worker does not change"
        correct: false
        why: "That holds in steady state."
      - label: "D"
        text: "Total capital grows at the rate of population growth"
        correct: false
        why: "That holds in steady state."
    related_terms:
      - steady-state
  - id: "q9"
    title: "Q9 — A lower savings rate"
    text: |
      An economy is in steady state. The savings rate decreases permanently. What happens in the new steady state?
    solution: |
      ```graph
      type: solow-model
      figure: savings-shift
      ```
    options:
      - label: "A"
        text: "$k$ and $y$ both decrease permanently"
        correct: true
        why: "Lower $s$ lowers $k^*$ and $y^*$."
      - label: "B"
        text: "$k$ decreases but $y$ is unchanged"
        correct: false
        why: "$y$ depends on $k$."
      - label: "C"
        text: "The growth rate of output per worker declines permanently"
        correct: false
        why: "It is zero in both steady states."
      - label: "D"
        text: "The economy cannot reach a steady state"
        correct: false
        why: "It reaches a lower one."
    related_terms:
      - steady-state
  - id: "q10"
    title: "Q10 — What is not a poverty trap"
    text: |
      Which does **not** describe an economy in a poverty trap in the Solow framework?
    solution: |
      A trap needs savings too low to build capital. Option A has the opposite.
    options:
      - label: "A"
        text: "Low population growth and high savings, accumulating capital fast enough to raise income"
        correct: true
        why: "This economy is escaping poverty."
      - label: "B"
        text: "Low savings and low $k$, unable to raise savings, stuck at a low steady state"
        correct: false
        why: "This is a trap."
      - label: "C"
        text: "High depreciation and low savings, with a low steady state"
        correct: false
        why: "This is a trap."
      - label: "D"
        text: "All other answers describe a poverty trap"
        correct: false
        why: "Option A does not."
    related_terms:
      - poverty-trap
  - id: "q11"
    title: "Q11 — Maximising consumption"
    text: |
      An economy is in steady state, and the Ministry of Wellbeing finds the standard of living could be higher. With $Y = AK^{\alpha}L^{1-\alpha}$, which option could maximise consumption?
    solution: |
      $$
      s_{GR} = \alpha
      $$
    options:
      - label: "A"
        text: "Encourage the public to set the savings rate to $\\alpha$"
        correct: true
        why: "The Golden Rule for Cobb-Douglas."
      - label: "B"
        text: "Increase capital per worker by $\\alpha$"
        correct: false
        why: "The rule concerns the savings rate."
      - label: "C"
        text: "If in steady state, consumption is at its highest"
        correct: false
        why: "Only the Golden Rule steady state maximises it."
      - label: "D"
        text: "Increase output by $\\alpha$"
        correct: false
        why: "Not the Golden Rule condition."
    related_terms:
      - golden-rule-savings-rate
  - id: "q12"
    title: "Q12 — Bywater and Mordor"
    text: |
      Bywater and Mordor follow Solow's model. Bywater starts with lower capital per worker. Both share the same production function, population growth and depreciation. Bywater converges to a higher steady state than Mordor. What best explains this?
    solution: |
      With the same $A$, $\alpha$, $n$ and $\delta$, only $s$ can produce a different steady state. Initial capital does not affect it.
    options:
      - label: "A"
        text: "Bywater's savings rate is higher"
        correct: true
        why: "It is the only parameter left that differs."
      - label: "B"
        text: "Returns to capital fall in Mordor but rise in Bywater"
        correct: false
        why: "They share a production function."
      - label: "C"
        text: "Mordor's capital depreciates faster at higher output"
        correct: false
        why: "They share $\\delta$."
      - label: "D"
        text: "Mordor is in a poverty trap due to higher depreciation"
        correct: false
        why: "They share $\\delta$."
    related_terms:
      - steady-state
  - id: "q13"
    title: "Q13 — Gifting capital abroad"
    text: |
      Two economies start identical in production function, population size, savings rate and capital per worker. Both populations grow, with $n_1 > n_2$. Both give an equal large portion of their capital stock to another country. There is no depreciation and technology is constant. What are the expected effects?
    solution: |
      $$
      \Delta k = s f(k) - n k
      $$

      At the same $k$, the economy with smaller $n$ has a larger $\Delta k$.

      > [!warning] Doubtful premise
      > With $n_1 \neq n_2$, the two economies have different steady states, so they cannot both start in steady state at the same $k$. The official answer is kept.
    options:
      - label: "A"
        text: "$k$ and $y$ fall temporarily, then return to their original levels; Economy 2 recovers faster"
        correct: true
        why: "At the same $k$, lower $n$ leaves more saving to raise $k$."
      - label: "B"
        text: "$k$ and $y$ rise temporarily, then fall below original levels"
        correct: false
        why: "The gift lowers $k$."
      - label: "C"
        text: "$k$ and $y$ fall and remain below the original levels"
        correct: false
        why: "Parameters are unchanged, so $k$ recovers."
      - label: "D"
        text: "$k$ and $y$ remain unchanged"
        correct: false
        why: "$K$ falls while $L$ does not."
    related_terms:
      - steady-state
      - capital-dilution
  - id: "q14"
    title: "Q14 — Is the economy escaping?"
    text: |
      $Y = 10K^{0.5}L^{0.5}$. Households save 5%, depreciation is 3% and population growth is 2%. If $k = 100$, will capital per worker increase over time?
    solution: |
      $$
      y = 10\sqrt{100} = 100,\qquad sy = 5,\qquad (\delta + n)k = 0.05(100) = 5,\qquad \Delta k = 0
      $$
    options:
      - label: "A"
        text: "No, the economy is at steady state, so $k$ is constant"
        correct: true
        why: "$\\Delta k = 0$."
      - label: "B"
        text: "Yes, the net change in $k$ is positive"
        correct: false
        why: "It is zero."
      - label: "C"
        text: "No, saving is insufficient to cover depreciation and population growth"
        correct: false
        why: "It exactly covers them."
      - label: "D"
        text: "Yes, $k$ is at its highest level"
        correct: false
        why: "That is not what the model says."
    related_terms:
      - steady-state
      - poverty-trap
  - id: "q15"
    title: "Q15 — Reserves and the balance of payments"
    text: |
      Which is correct for an open economy?
    solution: |
      Each debit has a matching credit, so a current account deficit with no net capital inflow must be paid out of reserves.
    options:
      - label: "A"
        text: "A decrease in reserves reflects a current account deficit if the capital account equals zero"
        correct: true
        why: "The deficit is financed from reserves."
      - label: "B"
        text: "An increase in reserves reflects a capital account deficit if the current account is zero"
        correct: false
        why: "With a zero current account and no capital flows, reserves do not change."
      - label: "C"
        text: "The balance of payments records only capital movements"
        correct: false
        why: "It also records goods, services and transfers."
      - label: "D"
        text: "The balance of payments reflects a country's ability to lend abroad"
        correct: false
        why: "It records transactions."
    related_terms:
      - balance-of-payments
      - foreign-exchange-reserves
  - id: "q16"
    title: "Q16 — Cancelled question"
    text: |
      *This question was struck out in the official key.* This year, firms in an open economy invested 2,480 in new machinery and infrastructure. Final goods firms cleared 120 of inventory and added 225. Final firms imported 280 and exported 420; intermediate firms imported 80 and exported 100. Households spent 3,450 on consumption. The government spent 1,250 on wages, 550 on rent and 348 on purchases from firms. Depreciation was 560 for final firms and 473 for intermediate firms. Government collected 1,578 in household income tax. Which is correct?

      - A. Households' saving = 2,242
      - B. Total net output = 7,150
      - C. Government's value added is 2,148
      - D. The government's budget surplus = 570
    solution: |
      > [!warning] No official answer
      > The lecturers crossed this question out. The AI-worked figures below match none of the options.

      $$
      Y = 3{,}450 + 2{,}148 + (2{,}480 + 105) + 160 = 8{,}343,\qquad NDP = 8{,}343 - 1{,}033 = 7{,}310
      $$

      $$
      s_P = 7{,}310 - 1{,}578 - 3{,}450 = 2{,}282,\qquad VA_G = 1{,}800,\qquad T - G = -570
      $$
    related_terms:
      - savings-identity
      - value-added-approach
  - id: "q17"
    title: "Q17 — Three economists on saving"
    text: |
      With $y = k^{0.4}$, $\delta = 7\%$, $n = 3\%$ and constant TFP, economists debate the optimal savings rate. A says that because $\delta + n = 10\%$, a savings rate of 10% is sufficient to maximise consumption. B says the optimal rate is 40%. C says more saving always means more consumption, so there is no optimal rate. Which is correct?
    solution: |
      $$
      s_{GR} = \alpha = 0.4
      $$
    options:
      - label: "A"
        text: "Only Economist B is correct"
        correct: true
        why: "$s_{GR} = \\alpha = 0.4$."
      - label: "B"
        text: "B is correct, and A is correct only in the short run"
        correct: false
        why: "A's reasoning is wrong."
      - label: "C"
        text: "All three are wrong"
        correct: false
        why: "B is right."
      - label: "D"
        text: "Only Economist C is correct"
        correct: false
        why: "Saving above the Golden Rule lowers consumption."
    related_terms:
      - golden-rule-savings-rate
  - id: "q18"
    title: "Q18 — Balance of payments with aid"
    text: |
      A country received 250 in dividends from abroad and sent 160 in interest to foreign investors. Goods imports were 356 and service exports 675. Domestic investors bought 254 of foreign bonds, others sold 223 of shares in a foreign company. A domestic company invested 856 in an R&D center abroad. The government sent 594 of medical aid to a friendly country, half as a grant and half as a loan. Therefore:
    solution: |
      Medical aid sent **in goods** counts as an export of 594, offset by a grant of 297 and a loan of 297.

      $$
      CA = 250 - 160 - 356 + 675 + 594 - 297 = 706
      $$

      $$
      \text{Capital movements} = -254 + 223 - 856 - 297 = -1{,}184
      $$

      $$
      \Delta\text{Reserves} = 706 - 1{,}184 = -478
      $$
    options:
      - label: "A"
        text: "Foreign reserves decreased by 478"
        correct: true
        why: "Aid in goods has no reserve effect."
      - label: "B"
        text: "Net capital movement = 1,407"
        correct: false
        why: "It is $-254 + 223 - 856 - 297 = -1{,}184$."
      - label: "C"
        text: "The current account is in deficit"
        correct: false
        why: "It is $+706$."
      - label: "D"
        text: "All other alternatives are incorrect"
        correct: false
        why: "Option A is correct."
    related_terms:
      - balance-of-payments
      - foreign-exchange-reserves
      - unilateral-transfers
  - id: "q19"
    title: "Q19 — More capital, slower growth"
    text: |
      Economy A has more capital than Economy B, yet A's output growth rate is lower. They share the same production function. What is the best explanation?
    solution: |
      With diminishing returns to capital, an extra unit adds less output when capital is already high.

      > [!warning] Wording
      > The official option says "return to scale". The model has constant returns to scale and diminishing returns **to capital**.
    options:
      - label: "A"
        text: "Diminishing returns, so the marginal output of capital is lower at higher capital"
        correct: true
        why: "This is what the official key marks."
      - label: "B"
        text: "Economy A produces inefficiently"
        correct: false
        why: "They share a production function."
      - label: "C"
        text: "Economy B has a larger population"
        correct: false
        why: "Not enough to explain it."
      - label: "D"
        text: "Nothing can explain this"
        correct: false
        why: "Diminishing returns can."
    related_terms:
      - marginal-product-of-capital
      - solow-model
  - id: "q20"
    title: "Q20 — A smaller labour force"
    text: |
      A decrease in the supply of labour (population) would lead to:
    solution: |
      With $K$ fixed, less labour means more capital per worker and higher productivity, but less total output.
    options:
      - label: "A"
        text: "Higher capital per worker and lower total output"
        correct: true
        why: "$K/L$ rises and $Y$ falls."
      - label: "B"
        text: "Lower output per worker and lower total output"
        correct: false
        why: "Output per worker rises."
      - label: "C"
        text: "Higher capital per worker but lower output per worker"
        correct: false
        why: "More $k$ raises $y$."
      - label: "D"
        text: "A decrease in labour's marginal output"
        correct: false
        why: "MPL rises when $L$ falls."
    related_terms:
      - marginal-product-of-labor
  - id: "q21"
    title: "Q21 — Bonus: GDP, NNP, NDP and GNP"
    text: |
      *Bonus, Milluim group 3 only.* Which is correct?
    solution: |
      **Domestic** measures depend on where output is produced. **National** measures depend on who produces it. **Net** measures subtract depreciation.
    options:
      - label: "A"
        text: "GDP measures gross final output produced domestically regardless of workers' nationality; NNP measures net final output of nationals regardless of location"
        correct: true
        why: "Both definitions are right."
      - label: "B"
        text: "NDP measures net output produced by nationals domestically; GNP measures gross final output produced by nationals"
        correct: false
        why: "NDP covers all domestic production."
      - label: "C"
        text: "NDP is gross final domestic output excluding investment in depreciation"
        correct: false
        why: "NDP is net, not gross."
      - label: "D"
        text: "GNP is final national domestic output including investment in depreciation"
        correct: false
        why: "GNP is not limited to domestic output."
    related_terms:
      - gross-domestic-product
      - gross-national-product
      - net-domestic-product
  - id: "q22"
    title: "Q22 — Bonus: real GDP per capita"
    text: |
      *Bonus, Milluim group 3 only.* In 2020, the base year, GDP was 56,130 and population 224,520. Next year, GDP rose 6%, prices rose 4% and population grew 1%. Which is correct?
    solution: |
      $$
      \frac{1.06}{1.04 \times 1.01} - 1 \approx 0.9\%
      $$
    options:
      - label: "A"
        text: "Real GDP per capita increased by about 1% in 2021"
        correct: true
        why: "$1.06 / (1.04 \\times 1.01) \\approx 1.009$."
      - label: "B"
        text: "Population growth offsets GDP growth completely"
        correct: false
        why: "It does not."
      - label: "C"
        text: "Real GDP per capita growth was 5%"
        correct: false
        why: "That ignores inflation."
      - label: "D"
        text: "Data is insufficient"
        correct: false
        why: "The growth rates are enough."
    related_terms:
      - real-gdp
      - gdp-per-capita
---

> [!info] Answer key
> The marked answers come from the **official Moed A key**. The explanations are AI-written.

> [!warning] Questions to check
> - **Q2:** the official key marks **both A and C** as correct.
> - **Q13:** the question says both economies start with the same $k$ but different $n$, so they cannot both begin in steady state. The official answer is kept.
> - **Q16:** the lecturers **struck this question out** of the key. No option matches the data.
> - **Q19:** the official answer says "diminishing return to scale", but the model has constant returns to scale and diminishing returns **to capital**.
