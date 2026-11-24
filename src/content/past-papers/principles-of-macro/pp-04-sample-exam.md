---
title: "Sample Exam"
topics: "Output, opening to trade, savings & the trade balance, Solow model, Golden Rule"
type: past-paper
status: official-key
exam: "Sample exam"
course: Principles of Macroeconomics
instructor: Dr. Idit Kalisher, Mr. Yosi Ganel
semester: 2
year: 2025
source_doc: /papers/principles-of-macro/pp-04-sample-exam.pdf
tags:
  - macro-economics-intro
  - past-paper
subject: principles-of-macro
in_scope: true
questions:
  - id: "q1"
    title: "Q1 — Productivia: output"
    text: |
      In Productivia, a closed economy, households spent 720 on consumption goods and firms invested 224 in new machinery and infrastructure. Firms sold 1,000 of final consumption goods, using 240 of intermediate goods. Final firms cleared 120 from inventory, and 136 of new goods remained unsold. The government spent 80 on wages, 40 on rent and 56 on purchases from firms. Intermediate producers had no purchases from other firms. Final firms paid 200 wages and 80 rent; intermediate firms paid 80 wages and 24 rent. There is no depreciation or tax, and firms distribute all profits. Which is correct?
    solution: |
      $$
      VA_{\text{final}} = 1{,}000 - 240 + 16 = 776,\qquad VA_{\text{int}} = 240,\qquad VA_G = 120,\qquad Y = 1{,}136
      $$
    options:
      - label: "A"
        text: "Total output is 1,120; final firms' value added is 760"
        correct: false
        why: "They are 1,136 and 776."
      - label: "B"
        text: "Government value added is 120; total output is 1,136"
        correct: true
        why: "$776 + 240 + 120$."
      - label: "C"
        text: "Intermediate value added is 264; total value added is 1,176"
        correct: false
        why: "They are 240 and 1,136."
      - label: "D"
        text: "Final firms' value added is 496; total output is 1,136"
        correct: false
        why: "496 is profit."
      - label: "E"
        text: "Government value added is 176; total output is 1,160"
        correct: false
        why: "176 includes purchases from firms."
    related_terms:
      - value-added-approach
  - id: "q2"
    title: "Q2 — Opening to trade"
    text: |
      Consider a closed economy where saving does not depend on the interest rate. As a result of opening to trade:
    solution: |
      $$
      S = I + NX
      $$
    options:
      - label: "A"
        text: "If the open rate is higher than the closed rate, exports exceed imports"
        correct: true
        why: "$I$ falls, so $S > I$ and $NX > 0$."
      - label: "B"
        text: "If the closed rate is higher than the open rate, net exports are positive"
        correct: false
        why: "That gives $NX < 0$."
      - label: "C"
        text: "If domestic savings exceed investment, the closed rate is higher than the open rate"
        correct: false
        why: "$S > I$ means the open rate is higher."
      - label: "D"
        text: "If net exports are positive, the closed rate equals that of the closed economy"
        correct: false
        why: "The statement is circular."
      - label: "E"
        text: "There is no reason for the rate to change"
        correct: false
        why: "It moves to the world rate."
    related_terms:
      - savings-identity
      - net-exports
  - id: "q3"
    title: "Q3 — Per capita growth"
    text: |
      In 2000, the base year, GDP per capita in current prices was 87,160. In 2005, it rose to 104,148, while real GDP per capita reached 95,232. Between 2000 and 2005:

      I. GDP per capita total growth was 19.5%

      II. Real GDP per capita annual average growth was 1.8%

      III. The data does not allow calculating the average annual price inflation

      Therefore:
    solution: |
      $$
      \frac{104{,}148}{87{,}160} = 1.195,\qquad \left(\frac{95{,}232}{87{,}160}\right)^{1/5} - 1 \approx 1.8\%
      $$

      Inflation **can** be calculated, since nominal divided by real gives the price level: $104{,}148 / 95{,}232 \approx 1.094$.
    options:
      - label: "A"
        text: "All three are correct"
        correct: false
        why: "III is false."
      - label: "B"
        text: "Statements A and C are correct"
        correct: false
        why: "II is true and III is false."
      - label: "C"
        text: "Statements A and B are correct"
        correct: true
        why: "This means I and II."
      - label: "D"
        text: "Statement C only is correct"
        correct: false
        why: "III is false."
      - label: "E"
        text: "All three are incorrect"
        correct: false
        why: "I and II are true."
    related_terms:
      - gdp-per-capita
      - growth-rate
      - inflation
  - id: "q4"
    title: "Q4 — Imports after opening"
    text: |
      A previously closed economy opens to trade. Domestic production is unchanged, household consumption rises by 50, firms export 80 and raise investment by 15. What are imports and the goods and services balance?
    solution: |
      $$
      \Delta Y + IM = \Delta C + \Delta I + EX \;\Rightarrow\; IM = 50 + 15 + 80 = 145,\qquad NX = 80 - 145 = -65
      $$
    options:
      - label: "A"
        text: "IM = 0, NX = 65"
        correct: false
        why: "Imports must fund the extra uses."
      - label: "B"
        text: "IM = -145, NX = 80"
        correct: false
        why: "Imports cannot be negative."
      - label: "C"
        text: "IM = 145, NX = -65"
        correct: true
        why: "$50 + 80 + 15 = 145$."
      - label: "D"
        text: "IM = -15, NX = 95"
        correct: false
        why: "Imports cannot be negative."
      - label: "E"
        text: "IM = 65, NX = 130"
        correct: false
        why: "Both are wrong."
    related_terms:
      - net-exports
      - uses-and-resources
  - id: "q5"
    title: "Q5 — Lower consumption"
    text: |
      Households decide to decrease consumption at every level of disposable income. This would result in:
    solution: |
      Saving rises, supply of funds shifts right, $r$ falls and investment rises.
    options:
      - label: "A"
        text: "An increase in investment"
        correct: true
        why: "More saving lowers $r$, so investment rises."
      - label: "B"
        text: "An increase in interest rates"
        correct: false
        why: "Rates fall."
      - label: "C"
        text: "More total savings, provided households save at least 50%"
        correct: false
        why: "No such condition applies."
      - label: "D"
        text: "More loanable funds without a change in rates"
        correct: false
        why: "Rates fall."
      - label: "E"
        text: "All other alternatives are incorrect"
        correct: false
        why: "A is correct."
    related_terms:
      - loanable-funds-market
  - id: "q6"
    title: "Q6 — Savings and the trade balance"
    text: |
      Which is correct regarding an open economy?
    solution: |
      $$
      NX = S - I
      $$
    options:
      - label: "A"
        text: "If savings exceed net exports, investment is negative"
        correct: false
        why: "$I = S - NX > 0$."
      - label: "B"
        text: "If investment exceeds private savings, imports exceed exports"
        correct: false
        why: "Public saving also matters."
      - label: "C"
        text: "If imports exceed exports, GDP exceeds GNP"
        correct: false
        why: "Trade does not determine that gap."
      - label: "D"
        text: "If savings are positive, exports exceed imports"
        correct: false
        why: "Not necessarily."
      - label: "E"
        text: "If savings are smaller than investment, net exports are negative"
        correct: true
        why: "$NX = S - I < 0$."
    related_terms:
      - savings-identity
  - id: "q7"
    title: "Q7 — Solow assumptions"
    text: |
      Which is an assumption of the basic Solow growth model?
    solution: |
      The basic model assumes diminishing returns to each input and constant returns to scale overall.
    options:
      - label: "A"
        text: "Increasing returns to scale"
        correct: false
        why: "It has constant returns to scale."
      - label: "B"
        text: "The savings rate depends on capital per worker"
        correct: false
        why: "It is fixed."
      - label: "C"
        text: "There are diminishing returns to capital and labour"
        correct: true
        why: "This is an assumption."
      - label: "D"
        text: "TFP growth is a function of savings"
        correct: false
        why: "TFP is exogenous."
      - label: "E"
        text: "The labour force is fixed in steady state"
        correct: false
        why: "It can grow at $n$."
    related_terms:
      - solow-model
  - id: "q8"
    title: "Q8 — Steady state"
    text: |
      Which best describes the economy in steady state according to Solow's model?
    solution: |
      $$
      sy^* = (\delta + n)k^*
      $$
    options:
      - label: "A"
        text: "$k$ and $y$ grow at the same rate as the savings rate"
        correct: false
        why: "They are constant."
      - label: "B"
        text: "The marginal product of capital becomes zero"
        correct: false
        why: "It stays positive."
      - label: "C"
        text: "Investment equals depreciation plus the amount needed to equip new workers"
        correct: true
        why: "$sy = (\\delta + n)k$."
      - label: "D"
        text: "Total output stops growing"
        correct: false
        why: "It grows at rate $n$."
      - label: "E"
        text: "Capital per worker grows at the rate of TFP"
        correct: false
        why: "TFP is constant here."
    related_terms:
      - steady-state
  - id: "q9"
    title: "Q9 — A higher savings rate"
    text: |
      An economy is in steady state. The savings rate increases permanently. What happens in the new steady state?
    solution: |
      ```graph
      type: solow-model
      figure: savings-shift
      ```
    options:
      - label: "A"
        text: "$k$ and $y$ both increase permanently"
        correct: true
        why: "Higher $s$ raises $k^*$."
      - label: "B"
        text: "$k$ rises but $y$ is unchanged"
        correct: false
        why: "$y$ depends on $k$."
      - label: "C"
        text: "The growth rate of output per worker remains unchanged"
        correct: false
        why: "True as a steady-state comparison, but A is the main result."
      - label: "D"
        text: "Steady state is higher in the short run, with no long-run change"
        correct: false
        why: "The change is permanent."
      - label: "E"
        text: "The steady state is unchanged"
        correct: false
        why: "It rises."
    related_terms:
      - steady-state
  - id: "q10"
    title: "Q10 — Poverty trap"
    text: |
      Which best illustrates a poverty trap within the Solow framework?
    solution: |
      A poverty trap is a cycle of low income, low saving and low investment.

      ```graph
      type: solow-model
      figure: poverty-trap
      ```
    options:
      - label: "A"
        text: "High population growth prevents capital accumulating fast enough"
        correct: false
        why: "This can contribute, but C describes the mechanism."
      - label: "B"
        text: "Diminishing returns prevent long-run growth"
        correct: false
        why: "That applies to all economies."
      - label: "C"
        text: "Low savings and low $k$ cannot generate enough output to raise savings, keeping it at a low steady state"
        correct: true
        why: "The self-reinforcing cycle."
      - label: "D"
        text: "Rapid technological progress continues without bound"
        correct: false
        why: "The opposite."
      - label: "E"
        text: "A high savings rate accumulates excessive capital"
        correct: false
        why: "That is over-accumulation."
    related_terms:
      - poverty-trap
  - id: "q11"
    title: "Q11 — GDP growth over a decade"
    text: |
      In 2005, the base year, GDP per capita in current prices was 104,184, and GDP was 752,688 million. In 2015, GDP per capita rose to 139,369, while GDP reached 1,074,953 million. Between 2005 and 2015:

      I. GDP per capita growth was 33.8% in total

      II. GDP growth was, on average, 3.6% annually

      III. The data does not allow calculating the average annual price inflation

      Therefore:
    solution: |
      $$
      \frac{139{,}369}{104{,}184} = 1.338,\qquad \left(\frac{1{,}074{,}953}{752{,}688}\right)^{1/10} - 1 \approx 3.6\%
      $$

      All figures are nominal, so inflation cannot be separated out.
    options:
      - label: "A"
        text: "All three are correct"
        correct: true
        why: "I and II check out, and no real series is given."
      - label: "B"
        text: "Statements A and C are correct"
        correct: false
        why: "II is also true."
      - label: "C"
        text: "Statements A and B are correct"
        correct: false
        why: "III is also true."
      - label: "D"
        text: "Statement C only is correct"
        correct: false
        why: "I and II are also true."
      - label: "E"
        text: "All three are incorrect"
        correct: false
        why: "All are correct."
    related_terms:
      - gdp-per-capita
      - growth-rate
  - id: "q12"
    title: "Q12 — The Golden Rule"
    text: |
      In the Solow model, what characterises the **Golden Rule level of capital per worker**?
    solution: |
      $$
      \max_k\; c^* = f(k) - (\delta + n)k \;\Rightarrow\; f'(k_{GR}) = \delta + n
      $$
    options:
      - label: "A"
        text: "The capital level that maximises total output"
        correct: false
        why: "It maximises consumption."
      - label: "B"
        text: "The steady-state capital where savings equal investment"
        correct: false
        why: "True of every steady state."
      - label: "C"
        text: "The savings rate that maximises output per worker"
        correct: false
        why: "Output would rise with $s$ up to 100%."
      - label: "D"
        text: "The steady-state capital level where depreciation is zero"
        correct: false
        why: "Depreciation is not zero."
      - label: "E"
        text: "The savings rate that maximises steady-state consumption per worker"
        correct: true
        why: "This is the Golden Rule."
    related_terms:
      - golden-rule-savings-rate
  - id: "q13"
    title: "Q13 — GNP and NNP"
    text: |
      Wages paid to foreign workers employed domestically are 60 billion, while domestic residents working abroad earn 40 billion. Depreciation is 120 billion. Which is correct?
    solution: |
      $$
      GNP = GDP + 40 - 60 = GDP - 20,\qquad NNP = GDP - 140
      $$
    options:
      - label: "A"
        text: "GNP is 20 higher than GDP"
        correct: false
        why: "GNP is 20 lower."
      - label: "B"
        text: "GNP is 20 lower than GDP, and NDP is 120 higher than GDP"
        correct: false
        why: "NDP is lower."
      - label: "C"
        text: "GNP equals GDP"
        correct: false
        why: "They differ by 20."
      - label: "D"
        text: "GNP is 20 lower than GDP, and NNP is 140 lower than GDP"
        correct: true
        why: "$20 + 120 = 140$."
      - label: "E"
        text: "GNP is 100 higher than GDP"
        correct: false
        why: "GNP is 20 lower."
    related_terms:
      - gross-national-product
      - net-domestic-product
  - id: "q14"
    title: "Q14 — Alpha and Beta"
    text: |
      Alpha and Beta begin with the same capital per worker and share population growth and depreciation. Alpha converges to a higher steady state than Beta. What best explains this?
    solution: |
      $$
      k^* = \left(\frac{sA}{n + \delta}\right)^{\frac{1}{1 - \alpha}}
      $$
    options:
      - label: "A"
        text: "Beta faces diminishing returns and Alpha does not"
        correct: false
        why: "Both have them."
      - label: "B"
        text: "Alpha benefits from a lower MPK"
        correct: false
        why: "Lower MPK is a result, not a cause."
      - label: "C"
        text: "Beta's capital depreciates faster at higher output"
        correct: false
        why: "They share $\\delta$."
      - label: "D"
        text: "Alpha has a higher savings rate"
        correct: true
        why: "This raises $k^*$."
      - label: "E"
        text: "Alpha has a smaller labour force"
        correct: false
        why: "Size does not set $k^*$."
    related_terms:
      - steady-state
  - id: "q15"
    title: "Q15 — Giving capital away"
    text: |
      A country with constant population in steady state gives a large portion of its capital stock to another country. Population and technology do not change. What are the expected effects?
    solution: |
      Below $k^*$, savings exceed the break-even line, so the economy rebuilds back to the original steady state.
    options:
      - label: "A"
        text: "$k$ falls temporarily, then returns; $y$ follows the same path"
        correct: true
        why: "Below $k^*$, savings exceed depreciation."
      - label: "B"
        text: "$k$ rises temporarily"
        correct: false
        why: "The gift lowers $k$."
      - label: "C"
        text: "$k$ falls and stays low"
        correct: false
        why: "Parameters have not changed."
      - label: "D"
        text: "$k$ is unchanged"
        correct: false
        why: "$K$ fell."
      - label: "E"
        text: "$k$ falls temporarily, but total output rises permanently"
        correct: false
        why: "Output returns to its old level."
    related_terms:
      - steady-state
  - id: "q16"
    title: "Q16 — Poverty trap check"
    text: |
      $Y = K^{0.4}L^{0.6}$, savings rate 20%, depreciation 10%, no population growth. If $k = 1$, will capital per worker increase?
    solution: |
      $$
      y = 1,\qquad sy = 0.2,\qquad \delta k = 0.1,\qquad \Delta k = 0.1 > 0
      $$
    options:
      - label: "A"
        text: "No, savings are insufficient"
        correct: false
        why: "$0.2 > 0.1$."
      - label: "B"
        text: "Yes, the net change in $k$ is positive"
        correct: true
        why: "$\\Delta k = 0.1$."
      - label: "C"
        text: "No, because output per worker is less than 1"
        correct: false
        why: "$y = 1$, and that is not the test."
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
  - id: "q17"
    title: "Q17 — Balance of payments"
    text: |
      Consider an open economy. Which is correct?
    solution: |
      Every transaction has a debit and a credit.
    options:
      - label: "A"
        text: "A current account surplus must be matched by a surplus in the financial account"
        correct: false
        why: "It is offset by a deficit."
      - label: "B"
        text: "The balance of payments records only trade in goods and services"
        correct: false
        why: "It records all transactions."
      - label: "C"
        text: "The balance of payments always sums to zero"
        correct: true
        why: "Each transaction has two sides."
      - label: "D"
        text: "A capital account deficit reflects an inability to borrow"
        correct: false
        why: "Not what it means."
      - label: "E"
        text: "An increase in reserves is a credit in the current account"
        correct: false
        why: "It is a debit in the capital account."
    related_terms:
      - balance-of-payments
  - id: "q18"
    title: "Q18 — Current and capital account"
    text: |
      A country exports goods of 150 billion and imports services of 80 billion. Interest received from abroad is 20 billion, and interest paid to foreign lenders is 15 billion. A foreign firm invests 30 billion in a domestic company. Local investment in foreign firms is 10 billion. Therefore:
    solution: |
      $$
      CA = 150 - 80 + 20 - 15 = 75,\qquad \text{Capital} = 30 - 10 = 20,\qquad \Delta\text{Reserves} = +95
      $$
    options:
      - label: "A"
        text: "The current account = 20"
        correct: false
        why: "It is 75."
      - label: "B"
        text: "Net export = -80"
        correct: false
        why: "NX is 70."
      - label: "C"
        text: "Net capital movements = 20"
        correct: true
        why: "$30 - 10$."
      - label: "D"
        text: "Decrease in foreign reserves = 95"
        correct: false
        why: "Reserves **increase** by 95."
      - label: "E"
        text: "None of the above"
        correct: false
        why: "C is correct."
    related_terms:
      - balance-of-payments
      - current-account
  - id: "q19"
    title: "Q19 — Valoria in full"
    text: |
      In Valoria, an open economy, firms invested 360 in new machinery and infrastructure. Final firms cleared 240 of inventory and added 175. Final firms imported 100 and exported 200; intermediate firms imported 50 and exported 30. Households spent 1,100. Government spent 180 on wages, 120 on rent and 130 on purchases from firms. There is no depreciation or taxation, and firms distribute all profits. Depreciation totaled 85 for final firms and 40 for intermediate firms. Government collected 210 in household income tax. Which is correct?
    solution: |
      $$
      I = 360 + 175 - 240 = 295,\qquad G = 430,\qquad NX = 230 - 150 = 80
      $$

      $$
      Y = 1{,}100 + 430 + 295 + 80 = 1{,}905,\qquad NDP = 1{,}905 - 125 = 1{,}780
      $$

      $$
      Y^d = 1{,}780 - 210 = 1{,}570,\qquad G - T = 430 - 210 = 220
      $$
    options:
      - label: "A"
        text: "Total output is 1,780"
        correct: false
        why: "True, but so are B, C and D."
      - label: "B"
        text: "Net export is 80"
        correct: false
        why: "True, but so are A, C and D."
      - label: "C"
        text: "Households' disposable income is 1,570"
        correct: false
        why: "True, but so are A, B and D."
      - label: "D"
        text: "The government's deficit is 220"
        correct: false
        why: "True, but so are A, B and C."
      - label: "E"
        text: "All is correct"
        correct: true
        why: "All four statements hold."
    related_terms:
      - savings-identity
      - net-exports
      - disposable-income
  - id: "q20"
    title: "Q20 — Golden Rule rate"
    text: |
      $y = k^{0.5}$, $\delta = 5\%$, population growth 2%, constant TFP. What savings rate maximises steady-state consumption per worker?
    solution: |
      $$
      s_{GR} = \alpha = 0.5
      $$
    options:
      - label: "A"
        text: "0.2"
        correct: false
        why: "Not the capital share."
      - label: "B"
        text: "0.4"
        correct: false
        why: "Not the capital share."
      - label: "C"
        text: "0.5"
        correct: true
        why: "$s_{GR} = \\alpha$."
      - label: "D"
        text: "0.6"
        correct: false
        why: "Not the capital share."
      - label: "E"
        text: "Cannot be determined without output"
        correct: false
        why: "It can."
    related_terms:
      - golden-rule-savings-rate
---

> [!info] Answer key
> The marked answers come from the **official sample exam answers**. The explanations are AI-written.

> [!warning] Questions to check
> - **Q1:** the highlight in the source also touches option C. Only **B** is consistent with the data.
> - **Q12:** the highlight also touches the letter D. **E** is the answer. Strictly, it describes the Golden Rule *savings rate*, not the capital level.
> - **Q19:** the question says "no depreciation or taxation", then gives depreciation and a tax.
