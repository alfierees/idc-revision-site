---
title: "Practice Questions"
type: past-paper
status: official-key
exam: "Practice questions"
course: Principles of Macroeconomics
instructor: Dr. Idit Kalisher, Mr. Yosi Ganel
semester: 2
year: 2025
source_doc: /papers/principles-of-macro/pp-03-practice-questions.pdf
tags:
  - macro-economics-intro
  - past-paper
subject: principles-of-macro
in_scope: true
questions:
  - id: "q1"
    title: "Q1 — Productivia: savings"
    text: |
      *Questions 1 and 2.* In Productivia, a closed economy, households spent 720 on consumption goods and firms invested 224 in new machinery and infrastructure. Firms sold 1,000 of final consumption goods, using 240 of intermediate goods. Final firms cleared 120 from inventory, and 136 of new goods remained unsold. The government spent 80 on wages, 40 on rent and 56 on purchases from firms. Intermediate producers had no purchases from other firms. Final firms paid 200 wages and 80 rent; intermediate firms paid 80 wages and 24 rent. There is no depreciation or tax, and firms distribute all profits. Which is correct?
    solution: |
      | | Final | Intermediate |
      |---|---:|---:|
      | Sales | 1,000 | 240 |
      | Purchases | 240 | 0 |
      | Inventory change | 16 | |
      | **Value added** | **776** | **240** |

      $$
      VA_G = 120,\qquad Y = 776 + 240 + 120 = 1{,}136
      $$

      $$
      s_P = 1{,}136 - 720 = 416,\qquad s_G = -176,\qquad S = I = 240
      $$
    options:
      - label: "A"
        text: "Private savings is 416; public savings is 0"
        correct: false
        why: "Public savings is -176."
      - label: "B"
        text: "Public savings is 176; total investment is 224"
        correct: false
        why: "Public savings is -176, and investment is 240."
      - label: "C"
        text: "Public savings is -176; investment is 16"
        correct: false
        why: "Investment is 240."
      - label: "D"
        text: "Total savings is 240; private savings is 416"
        correct: true
        why: "$416 - 176 = 240$."
      - label: "E"
        text: "Total savings is 1,120; total investment is 240"
        correct: false
        why: "Total savings is 240."
    related_terms:
      - savings-identity
      - private-savings
      - government-savings
  - id: "q2"
    title: "Q2 — Productivia: profits"
    text: |
      Using the same Productivia data, which is correct?
    solution: |
      $$
      \pi_{\text{final}} = 776 - 200 - 80 = 496,\qquad \pi_{\text{int}} = 240 - 80 - 24 = 136
      $$
    options:
      - label: "A"
        text: "Final firms' profit is 496; intermediate firms' profit is 136"
        correct: true
        why: "Value added minus wages and rent."
      - label: "B"
        text: "Final firms' value added is 1,000; intermediate profit is 136"
        correct: false
        why: "Final value added is 776."
      - label: "C"
        text: "Profits cannot be calculated"
        correct: false
        why: "They can."
      - label: "D"
        text: "Inventory changes reduce GDP by 16; total household income is 992"
        correct: false
        why: "Inventories **add** 16."
      - label: "E"
        text: "Claims A and B are correct"
        correct: false
        why: "B is wrong."
    related_terms:
      - factor-payments
      - value-added-approach
  - id: "q3"
    title: "Q3 — Valoria: value added"
    text: |
      *Questions 3 and 4.* In Valoria, a closed economy, firms invested 336 in new machinery and infrastructure. Final firms paid 300 wages and 120 rent and sold 1,500 of final goods, using 360 of intermediate goods. They cleared 180 of old inventory and added 204 of new goods. Intermediate firms had no purchases from other firms and paid 120 wages and 36 rent. Households spent 1,080 on consumption. The government spent 64 on wages, 32 on rent and 84 on purchases from firms. There is no depreciation or taxation, and firms distribute all profits. Which is correct?
    solution: |
      $$
      VA_{\text{final}} = 1{,}500 - 360 + (204 - 180) = 1{,}164,\qquad \pi_{\text{final}} = 1{,}164 - 300 - 120 = 744
      $$
    options:
      - label: "A"
        text: "Final firms' value added is 1,140; total output is 1,620"
        correct: false
        why: "Final value added is 1,164."
      - label: "B"
        text: "Intermediate value added is 204; final firms' profit is 1,164"
        correct: false
        why: "Intermediate value added is 360."
      - label: "C"
        text: "Total output is 1,524; government value added is 180"
        correct: false
        why: "Output is 1,620, and government value added is 96."
      - label: "D"
        text: "Final firms' profit is 744; intermediate value added is 360"
        correct: true
        why: "$1{,}164 - 420 = 744$."
      - label: "E"
        text: "None of these claims is correct"
        correct: false
        why: "D is correct."
    related_terms:
      - value-added-approach
  - id: "q4"
    title: "Q4 — Valoria: savings"
    text: |
      Using the same Valoria data, which is correct?
    solution: |
      $$
      Y = 1{,}080 + 180 + (336 + 24) = 1{,}620
      $$

      $$
      s_P = 1{,}620 - 1{,}080 = 540,\qquad s_G = -180,\qquad S = 360
      $$
    options:
      - label: "A"
        text: "Total savings 360; private savings 540; public savings -180"
        correct: true
        why: "$540 - 180 = 360$."
      - label: "B"
        text: "Private savings 360; total investment 336; public savings -180"
        correct: false
        why: "Private savings are 540."
      - label: "C"
        text: "Public savings zero; private savings 720; total investment 360"
        correct: false
        why: "Public savings are -180."
      - label: "D"
        text: "Public savings -540; total savings 336; private savings 180"
        correct: false
        why: "These are swapped."
      - label: "E"
        text: "Total investment 336; public savings 180; total savings 360"
        correct: false
        why: "Investment is 360, and public savings are negative."
    related_terms:
      - savings-identity
  - id: "q5"
    title: "Q5 — Open economy identities"
    text: |
      In Valoria, now an open economy, firms invested 360 in new machinery and infrastructure. Final firms cleared 240 of inventory and added 175. Final firms imported 100 and exported 200; intermediate firms imported 50 and exported 30. Households spent 1,100. Government spent 180 on wages, 120 on rent and 130 on purchases from firms. There is no depreciation or taxation, and firms distribute all profits. Depreciation totaled 85 for final firms and 40 for intermediate firms. Government collected 210 in household income tax. Which is correct?
    solution: |
      $$
      S = I + NX
      $$
    options:
      - label: "A"
        text: "Investment equals total domestic savings exactly"
        correct: false
        why: "Only if $NX = 0$."
      - label: "B"
        text: "Investment could exceed domestic savings if exports exceed imports"
        correct: false
        why: "$NX > 0$ means $S > I$."
      - label: "C"
        text: "Domestic savings could exceed investment if imports exceed exports"
        correct: false
        why: "$NX < 0$ means $S < I$."
      - label: "D"
        text: "Domestic savings equals net exports"
        correct: false
        why: "$S = I + NX$."
      - label: "E"
        text: "None of the above"
        correct: true
        why: "All four misstate the identity."
    related_terms:
      - savings-identity
      - net-exports
  - id: "q6"
    title: "Q6 — Econoria: value added"
    text: |
      *Questions 6 to 8.* In Econoria, a closed economy, households spent 900 million on consumption goods and firms invested 280 million in new machinery and infrastructure. Final firms sold 1,250 of consumption goods, using 300 of intermediate inputs. They cleared 150 from inventory and added 170 of new goods. The government spent 100 on wages, 50 on rent and 70 on purchases from firms. Intermediate producers sold 300 with no input purchases. Final firms paid 250 wages and 100 rent; intermediate firms paid 100 wages and 30 rent. Depreciation was 50 for final firms and 10 for intermediate firms. Government collected 100 in household income tax. Which is correct?
    solution: |
      $$
      VA_{\text{final}} = 1{,}250 - 300 + 20 - 50 = 920,\qquad VA_G = 150,\qquad VA_{\text{int}} = 300 - 10 = 290
      $$

      Value added here is **net of depreciation**.
    options:
      - label: "A"
        text: "Intermediate value added is 290; total output is 1,210"
        correct: false
        why: "Total output is 1,360."
      - label: "B"
        text: "Final firms' value added is 920; government value added is 150"
        correct: true
        why: "Both are net of depreciation."
      - label: "C"
        text: "Total output is 1,360; government value added is 220"
        correct: false
        why: "Government value added is 150."
      - label: "D"
        text: "Final firms' profit is 570; intermediate value added is 160"
        correct: false
        why: "Profit is 570, but intermediate value added is 290."
      - label: "E"
        text: "None of these claims is correct"
        correct: false
        why: "B is correct."
    related_terms:
      - value-added-approach
  - id: "q7"
    title: "Q7 — Econoria: savings"
    text: |
      Using the same Econoria data, which is correct?
    solution: |
      $$
      Y = 900 + 220 + (280 + 20 - 60) = 1{,}360,\qquad s_P = 1{,}360 - 100 - 900 = 360
      $$

      $$
      s_G = 100 - 220 = -120,\qquad S = 240
      $$

      > [!warning] Option B also looks true
      > Households' savings of 360 and total savings of 240 are both correct, so **B and C** both hold. The official key marks C.
    options:
      - label: "A"
        text: "Total savings is 360 and equals households' savings"
        correct: false
        why: "Total savings is 240."
      - label: "B"
        text: "Households' savings is 360, total savings 240"
        correct: false
        why: "These figures are right, so read the warning below."
      - label: "C"
        text: "The government deficit is 120; households' savings is 360"
        correct: true
        why: "$220 - 100 = 120$."
      - label: "D"
        text: "The public deficit is -220; total savings is 280"
        correct: false
        why: "Both are wrong."
      - label: "E"
        text: "Total investment is 280; public savings is -120"
        correct: false
        why: "Investment is 240."
    related_terms:
      - savings-identity
  - id: "q8"
    title: "Q8 — Econoria opens up"
    text: |
      Following the data for Questions 6 and 7, the economy opens to trade. Final firms exported 180 and imported 100. Intermediate firms exported 50 and imported 50. Therefore:
    solution: |
      $$
      NX = (180 + 50) - (100 + 50) = 80,\qquad Y = 1{,}360 + 80 = 1{,}440,\qquad s_P = 440
      $$
    options:
      - label: "A"
        text: "Net export is -80, total output is 1,780"
        correct: false
        why: "NX is +80."
      - label: "B"
        text: "Total investment is 250, total domestic savings is 170"
        correct: false
        why: "Investment is 240."
      - label: "C"
        text: "Total output is 1,700, net export is 80"
        correct: false
        why: "Output is 1,440."
      - label: "D"
        text: "Households' savings is 440, net export is 80"
        correct: true
        why: "$1{,}440 - 100 - 900 = 440$."
      - label: "E"
        text: "Total investment is 170, government's savings is 220"
        correct: false
        why: "Both are wrong."
    related_terms:
      - net-exports
      - private-savings
  - id: "q9"
    title: "Q9 — Not a Solow assumption"
    text: |
      Which is **not** an assumption of the basic Solow growth model?
    solution: |
      The model allows the labour force to grow at rate $n$.
    options:
      - label: "A"
        text: "Diminishing returns to capital and labour"
        correct: false
        why: "This is an assumption."
      - label: "B"
        text: "The savings rate is exogenous and constant"
        correct: false
        why: "This is an assumption."
      - label: "C"
        text: "The economy experiences exogenous technological progress"
        correct: false
        why: "The official key does not mark it, though the course's basic model has constant technology."
      - label: "D"
        text: "Constant returns to scale"
        correct: false
        why: "This is an assumption."
      - label: "E"
        text: "The labour force is fixed and does not grow"
        correct: true
        why: "Solow allows population growth $n$."
    related_terms:
      - solow-model
  - id: "q10"
    title: "Q10 — Higher steady-state capital"
    text: |
      Which change would lead to a higher steady-state capital per worker?
    solution: |
      $$
      k^* = \left(\frac{sA}{n + \delta}\right)^{\frac{1}{1 - \alpha}}
      $$
    options:
      - label: "A"
        text: "Higher depreciation"
        correct: false
        why: "Lowers $k^*$."
      - label: "B"
        text: "Higher population growth"
        correct: false
        why: "Lowers $k^*$."
      - label: "C"
        text: "Lower savings rate"
        correct: false
        why: "Lowers $k^*$."
      - label: "D"
        text: "Higher savings rate"
        correct: true
        why: "Raises $k^*$."
      - label: "E"
        text: "Lower TFP"
        correct: false
        why: "Lowers $k^*$."
    related_terms:
      - steady-state
  - id: "q11"
    title: "Q11 — Golden Rule"
    text: |
      $y = k^{0.4}$, $\delta = 0.05$, $n = 0$, constant TFP. What savings rate maximises steady-state consumption per worker?
    solution: |
      $$
      s_{GR} = \alpha = 0.4
      $$
    options:
      - label: "A"
        text: "0.2"
        correct: false
        why: "Not the capital share."
      - label: "B"
        text: "0.4"
        correct: true
        why: "$s_{GR} = \\alpha$."
      - label: "C"
        text: "0.5"
        correct: false
        why: "Not the capital share."
      - label: "D"
        text: "0.6"
        correct: false
        why: "That is the labour share."
      - label: "E"
        text: "Cannot be determined without output"
        correct: false
        why: "It can."
    related_terms:
      - golden-rule-savings-rate
  - id: "q12"
    title: "Q12 — Emigration with capital"
    text: |
      A country in steady state has a large wave of emigration. Emigrants are identical to those who remain and take their share of the capital stock. What is the effect on capital and output per worker?
    solution: |
      $K$ and $L$ fall by the same proportion, so $k = K/L$ and $y$ stay the same.
    options:
      - label: "A"
        text: "$k$ rises temporarily to a higher steady state"
        correct: false
        why: "$k$ does not change."
      - label: "B"
        text: "$k$ rises permanently"
        correct: false
        why: "$k$ does not change."
      - label: "C"
        text: "$k$ rises temporarily, then returns"
        correct: false
        why: "$k$ does not change."
      - label: "D"
        text: "$k$ and $y$ remain unchanged"
        correct: true
        why: "$K$ and $L$ fall in proportion."
      - label: "E"
        text: "$k$ rises, and savings match depreciation"
        correct: false
        why: "$k$ does not change."
    related_terms:
      - steady-state
  - id: "q13"
    title: "Q13 — Poverty trap check"
    text: |
      $Y = 5K^{0.5}L^{0.5}$, savings rate 20%, depreciation 10%, population growth 5%. If $k = 100$, will capital per worker increase?
    solution: |
      $$
      y = 5\sqrt{100} = 50,\qquad sy = 10,\qquad (\delta + n)k = 15,\qquad \Delta k = -5
      $$
    options:
      - label: "A"
        text: "No, savings are insufficient to cover depreciation at this level"
        correct: true
        why: "$10 < 15$."
      - label: "B"
        text: "Yes, the net change is positive"
        correct: false
        why: "It is $-5$."
      - label: "C"
        text: "No, because output per worker is less than capital per worker"
        correct: false
        why: "That is not the test."
      - label: "D"
        text: "Yes, $k$ is at its highest level"
        correct: false
        why: "That is not the test."
      - label: "E"
        text: "No, depreciation is too high regardless of savings"
        correct: false
        why: "It depends on savings."
    related_terms:
      - poverty-trap
  - id: "q14"
    title: "Q14 — More demand for funds"
    text: |
      In a closed economy, household saving does not depend on the interest rate. As a result of an increase in demand for loanable funds:
    solution: |
      With vertical savings, higher demand only raises $r$. Investment still equals $S$.
    options:
      - label: "A"
        text: "Interest rate rises and savings decrease"
        correct: false
        why: "Savings are fixed."
      - label: "B"
        text: "Interest rate rises, resulting in lower investment"
        correct: false
        why: "$I$ must equal the fixed $S$."
      - label: "C"
        text: "Interest rate falls because savings are unchanged"
        correct: false
        why: "It rises."
      - label: "D"
        text: "Investment remains unchanged"
        correct: true
        why: "$I = S$, and $S$ is fixed."
      - label: "E"
        text: "Insufficient information"
        correct: false
        why: "The model gives the answer."
    related_terms:
      - loanable-funds-market
  - id: "q15"
    title: "Q15 — Balance of payments"
    text: |
      A country imports goods of 120 and exports services of 90. It receives 10 in dividends from abroad and sends 25 in interest to foreign investors. A domestic company buys 40 of foreign bonds, while another sold its 35 of shares in a foreign company. Therefore:
    solution: |
      $$
      CA = 90 - 120 + 10 - 25 = -45,\qquad \text{Capital} = -40 + 35 = -5,\qquad \Delta\text{Reserves} = -50
      $$
    options:
      - label: "A"
        text: "Current account = 45"
        correct: false
        why: "It is $-45$."
      - label: "B"
        text: "Net export = -45"
        correct: false
        why: "$NX = -30$."
      - label: "C"
        text: "Foreign reserves decrease by 50"
        correct: true
        why: "$-45 - 5 = -50$."
      - label: "D"
        text: "Net capital movement = 5"
        correct: false
        why: "It is $-5$."
      - label: "E"
        text: "Goods and services account is in surplus"
        correct: false
        why: "It is in deficit."
    related_terms:
      - balance-of-payments
      - foreign-exchange-reserves
  - id: "q16"
    title: "Q16 — GDP to NNP"
    text: |
      Consumption is 800 billion, private investment 300, government spending 200 and net exports 50. The country pays 40 in income to foreign investors and receives 25 from citizens working abroad. Depreciation is 100. Which is correct?
    solution: |
      $$
      GDP = 1{,}350,\qquad GNP = 1{,}350 + 25 - 40 = 1{,}335,\qquad NNP = 1{,}235
      $$
    options:
      - label: "A"
        text: "GDP is 1,350 and NNP is lower by 115"
        correct: true
        why: "$15 + 100 = 115$."
      - label: "B"
        text: "GDP is 1,350 and NDP is higher by 100"
        correct: false
        why: "NDP is lower."
      - label: "C"
        text: "GNP is 1,365 and NNP is lower by 100"
        correct: false
        why: "GNP is 1,335."
      - label: "D"
        text: "GDP is 1,350 and NNP is 1,250"
        correct: false
        why: "NNP is 1,235."
      - label: "E"
        text: "GNP is 1,335 and NNP is 1,250"
        correct: false
        why: "NNP is 1,235."
    related_terms:
      - gross-national-product
      - net-domestic-product
---

> [!info] Answer key
> The marked answers come from the **official practice answers**. The explanations are AI-written where the file gives no working.

> [!warning] Questions to check
> - **Q4:** the official working writes government spending as $120 + 60 + 84$. The data gives $64 + 32 + 84 = 180$, which is what the right total of 1,620 needs.
> - **Q5:** the question says "no depreciation or taxation", then gives depreciation and a tax.
> - **Q9:** the official answer is E, but the basic model in the slides also has **constant** technology, so option C is not an assumption either.
