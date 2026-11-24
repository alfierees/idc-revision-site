---
title: "Final Exam 2025, Moed B"
topics: "Living standards, capital accumulation, trade balance, Solow model, poverty traps"
type: past-paper
status: ai-solved
exam: "Moed B, 7 September 2025"
course: Principles of Macroeconomics
instructor: Dr. Idit Kalisher, Mr. Yosi Ganel
semester: 2
year: 2025
source_doc: /papers/principles-of-macro/pp-02-moed-b-2025.pdf
tags:
  - macro-economics-intro
  - past-paper
subject: principles-of-macro
in_scope: true
questions:
  - id: "q1"
    title: "Q1 — Three economists on living standards"
    text: |
      In 2023, the base year, GDP per capita in current prices was 45,377.5 USD. In 2024, GDP rose to 99,907 million USD in current prices. Population rose from 2,071,520 to 2,112,950.

      Economist A: if inflation in 2023 was 5%, the standard of living, measured by real GDP per capita, decreased.

      Economist B: GDP growth in 2023 was about 6.3%.

      Economist C: as long as GDP growth exceeds population growth, the standard of living will increase.

      Therefore:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      GDP_{2023} = 45{,}377.5 \times 2{,}071{,}520 \approx 94{,}000\text{ million},\qquad \frac{99{,}907}{94{,}000} - 1 \approx 6.3\%
      $$

      $$
      \frac{GDP^{pc}_{2024}}{GDP^{pc}_{2023}} = \frac{1.0628}{1.02} \approx 1.042 < 1.05
      $$

      The claims say 2023, but the growth is between 2023 and 2024.
    options:
      - label: "a"
        text: "Only C is correct"
        correct: false
        why: "C ignores inflation."
      - label: "b"
        text: "All three are incorrect"
        correct: false
        why: "A and B hold."
      - label: "c"
        text: "A and B are correct"
        correct: true
        why: "Nominal per capita growth of about 4.2% is below 5% inflation, and GDP grew about 6.3%."
      - label: "d"
        text: "All three are correct"
        correct: false
        why: "C is wrong."
    related_terms:
      - real-gdp
      - gdp-per-capita
  - id: "q2"
    title: "Q2 — Negative capital accumulation"
    text: |
      An economy in the Solow model is not in steady state, and its capital accumulation is negative. What can explain that?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \Delta k = sy - (\delta + n)k < 0
      $$
    options:
      - label: "a"
        text: "Savings are insufficient to compensate for depreciation and population growth"
        correct: true
        why: "$sy < (n + \\delta)k$."
      - label: "b"
        text: "Output per worker is too high compared to depreciation"
        correct: false
        why: "That would raise saving."
      - label: "c"
        text: "The production function is inefficient"
        correct: false
        why: "Not part of the model."
      - label: "d"
        text: "Capital per worker exceeds depreciation and the cost of new equipment"
        correct: false
        why: "Not the condition."
    related_terms:
      - steady-state
  - id: "q3"
    title: "Q3 — The Golden Wood"
    text: |
      The Golden Wood is a closed economy. Households paid 245 in income taxes and spent 2,100 on final goods. Firms invested 320 in new machinery and infrastructure and sold 3,095 of final consumption goods, using 1,934 of intermediate goods. Intermediate producers had no purchases from other firms. Final goods firms had 142 in inventory at the start of the year and 452 of newly produced goods unsold at the end. Depreciation was 254 for final firms and 73 for intermediate firms. Final firms paid 802 wages and 145 rent; intermediate firms paid 458 wages and 300 rent. Government spent 350 on wages, 325 on rent and 675 on purchases from firms. Firms distribute all profits. Which is correct?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      VA_{\text{final}} = 3{,}095 - 1{,}934 + (452 - 142) = 1{,}471,\qquad \text{net} = 1{,}471 - 254 = 1{,}217
      $$

      $$
      \pi_{\text{int}} = 1{,}934 - 73 - 458 - 300 = 1{,}103
      $$
    options:
      - label: "a"
        text: "Net investment is 630"
        correct: false
        why: "$320 + 310 - 327 = 303$."
      - label: "b"
        text: "Final firms' net value-added is 1,217 and intermediate firms' profit is 1,103"
        correct: true
        why: "Both match."
      - label: "c"
        text: "Government has a surplus of 1,105 and households saved 1,408"
        correct: false
        why: "Government has a deficit of 1,105."
      - label: "d"
        text: "Gross output is 3,753"
        correct: false
        why: "Gross output is 4,080."
    related_terms:
      - value-added-approach
      - net-investment
      - government-savings
  - id: "q4"
    title: "Q4 — Opening to trade"
    text: |
      Consider a closed economy with no depreciation, where saving does not depend on the interest rate. As a result of opening to trade:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      S = I + NX
      $$
    options:
      - label: "a"
        text: "If net exports are positive, the closed rate is higher than the open rate"
        correct: false
        why: "$NX > 0$ needs a higher open rate."
      - label: "b"
        text: "If imports exceed exports, the closed rate is lower than the open rate"
        correct: false
        why: "$NX < 0$ needs a lower open rate."
      - label: "c"
        text: "If the open rate is lower than the closed rate, exports exceed imports"
        correct: false
        why: "A lower rate gives $NX < 0$."
      - label: "d"
        text: "If the two rates are equal, total savings equals domestic investment"
        correct: true
        why: "Then nothing has moved, so $S = I$."
    related_terms:
      - savings-identity
      - net-exports
  - id: "q5"
    title: "Q5 — Will living standards fall?"
    text: |
      $Y = 625K^{0.25}L^{0.75}$. Households save 10%, depreciation is 2%, population growth is 3%. If $k = 256$, is the standard of living expected to decrease over time?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      y = 625 \cdot 256^{0.25} = 625 \cdot 4 = 2{,}500,\qquad sy = 250,\qquad (\delta + n)k = 0.05 \cdot 256 = 12.8
      $$
    options:
      - label: "a"
        text: "No, because capital per worker is at its highest level"
        correct: false
        why: "That is not the reason."
      - label: "b"
        text: "Yes, because the net change in $k$ is negative"
        correct: false
        why: "It is positive."
      - label: "c"
        text: "Yes, because population growth exceeds depreciation"
        correct: false
        why: "That comparison does not matter."
      - label: "d"
        text: "No, because saving covers depreciation and equipping new workers"
        correct: true
        why: "$250 > 12.8$."
    related_terms:
      - steady-state
  - id: "q6"
    title: "Q6 — Real GDP per capita over two years"
    text: |
      At the start of 1980, the base year, GDP in current prices was 537,652,100 and population 10,530. Two years later, GDP was 4% higher, the price level 4% lower and population 4% higher. Between 1980 and 1982:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \frac{1.04}{1.04} = 1,\qquad \frac{1}{0.96} - 1 \approx 4.17\% \text{ in total}
      $$
    options:
      - label: "a"
        text: "Real GDP per capita increased by about 4.17% annually"
        correct: false
        why: "4.17% is the two-year total."
      - label: "b"
        text: "Population growth offsets GDP growth, so real GDP per capita is unchanged"
        correct: false
        why: "Falling prices raise it."
      - label: "c"
        text: "No change in GDP per capita, but real GDP per capita increased due to the price decrease"
        correct: true
        why: "$1.04/1.04 = 1$, and $1/0.96 \\approx 1.0417$."
      - label: "d"
        text: "Data is insufficient"
        correct: false
        why: "The growth rates are enough."
    related_terms:
      - real-gdp
      - gdp-per-capita
  - id: "q7"
    title: "Q7 — A gift of capital"
    text: |
      An economy in steady state receives a large gift of capital. There is no depreciation. Population growth, the savings rate and technology are constant. What are the expected effects?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      With $\delta = 0$, the break-even line is $nk$. Above $k^*$, it exceeds savings, so $k$ returns. This needs $n > 0$.
    options:
      - label: "a"
        text: "$k$ and $y$ rise and stay high, due to constant saving and population growth"
        correct: false
        why: "Above $k^*$, $k$ falls."
      - label: "b"
        text: "A one-time gift does not affect $k$"
        correct: false
        why: "It raises $k$ at first."
      - label: "c"
        text: "$k$ and $y$ rise and stay high, as no depreciation is needed"
        correct: false
        why: "New workers still dilute capital."
      - label: "d"
        text: "$k$ and $y$ rise temporarily, then fall back because savings are too low for the new $k$"
        correct: true
        why: "Above $k^*$, $sy < nk$."
    related_terms:
      - steady-state
  - id: "q8"
    title: "Q8 — Poverty trap"
    text: |
      Which describes an economy in a poverty trap within the Solow framework?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      A trap requires $sf(k) \le (n + \delta)k$ at a low level of $k$. None of a, c or d describes that.
    options:
      - label: "a"
        text: "Low savings and low $k$ generate enough output to raise savings, bouncing from a low steady state"
        correct: false
        why: "That is escaping."
      - label: "b"
        text: "All other answers do not describe a poverty trap"
        correct: true
        why: "None shows capital shrinking or stuck."
      - label: "c"
        text: "Low depreciation and low savings, with slow capital accumulation"
        correct: false
        why: "Slow accumulation is still growth."
      - label: "d"
        text: "Low population growth and high savings that accumulate capital fast"
        correct: false
        why: "That is growth."
    related_terms:
      - poverty-trap
  - id: "q9"
    title: "Q9 — Not a Solow assumption"
    text: |
      Which is **not** an assumption of the basic Solow growth model?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      > [!warning] Two options qualify
      > **Both a and d** are not assumptions of the basic model. There is no official key, so ask which was intended.
    options:
      - label: "a"
        text: "TFP is constantly increasing"
        correct: true
        why: "The basic model has constant TFP."
      - label: "b"
        text: "Capital accumulation depends on savings, depreciation and population growth"
        correct: false
        why: "That is the model."
      - label: "c"
        text: "Decreasing returns to labour and to capital"
        correct: false
        why: "That is the model."
      - label: "d"
        text: "The marginal product of capital per worker increases when capital per worker increases"
        correct: true
        why: "The model has diminishing returns."
    related_terms:
      - solow-model
  - id: "q10"
    title: "Q10 — Open economy accounts"
    text: |
      In an open economy, final goods firms imported 280, exported 356, sold 4,172 domestically to households, cleared 213 from inventory and added 432, with 324 depreciation. Intermediate firms sold 1,478 to final goods firms, exported 146, imported 100, had no inventory change and had 153 depreciation. Total investment in new machinery and equipment was 763. Households also imported 1,145 of goods. Income tax was 537. The government paid 4,520 in wages, 1,753 in rent and purchased 536 of goods. Which is correct?

      - a. Net output = 10,871
      - b. Gross investment = 505
      - c. Intermediate firms' net value-added = 1,524
      - d. Households' savings = 6,291
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      > [!warning] No option matches
      > The AI working below gets none of the four values. **505 is net investment**, so b may be a labelling error, and **1,524 is gross value added**, so c may be too. Ask which answer was accepted.

      $$
      C = 4{,}172 + 1{,}145 = 5{,}317,\quad G = 6{,}809,\quad I = 763 + 219 = 982
      $$

      $$
      NX = (356 + 146) - (280 + 100 + 1{,}145) = -1{,}023
      $$

      $$
      Y = 5{,}317 + 6{,}809 + 982 - 1{,}023 = 12{,}085,\qquad NDP = 12{,}085 - 477 = 11{,}608
      $$

      $$
      \text{Net investment} = 982 - 477 = 505,\qquad VA^{\text{net}}_{\text{int}} = 1{,}524 - 153 = 1{,}371
      $$

      $$
      s_P = 11{,}608 - 537 - 5{,}317 = 5{,}754
      $$
    related_terms:
      - value-added-approach
      - net-exports
  - id: "q11"
    title: "Q11 — Savings and trade"
    text: |
      Which is correct regarding an open economy?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      S - I = NX
      $$
    options:
      - label: "a"
        text: "If NX is negative, domestic savings is at its lowest level"
        correct: false
        why: "NX says nothing about that."
      - label: "b"
        text: "If domestic savings equals domestic investment, imports equal exports"
        correct: true
        why: "$S = I \\Rightarrow NX = 0$."
      - label: "c"
        text: "If savings exceed investment, imports exceed exports"
        correct: false
        why: "$S > I$ means $NX > 0$."
      - label: "d"
        text: "If NX is positive, investment exceeds savings"
        correct: false
        why: "$NX > 0$ means $S > I$."
    related_terms:
      - savings-identity
      - net-exports
  - id: "q12"
    title: "Q12 — National account definitions"
    text: |
      Which is correct?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      **Domestic** means where it is produced, **national** means who produces it, and **net** means after depreciation.
    options:
      - label: "a"
        text: "NDP is net final domestic output, including investment in depreciation"
        correct: false
        why: "Net measures exclude it."
      - label: "b"
        text: "GNP is the final gross national domestic output including investment in depreciation"
        correct: false
        why: "GNP is not limited to domestic output."
      - label: "c"
        text: "NDP measures net output produced domestically regardless of nationality; GNP measures gross final output by nationals regardless of location"
        correct: true
        why: "Both are right."
      - label: "d"
        text: "GNP measures net final output; NNP measures net output nationals produce domestically"
        correct: false
        why: "GNP is gross, and NNP is not domestic."
    related_terms:
      - net-domestic-product
      - gross-national-product
  - id: "q13"
    title: "Q13 — Lower consumption"
    text: |
      Households decide to decrease consumption at every level of disposable income. This would result in:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      Saving rises, supply of funds shifts right, $r$ falls and investment rises.
    options:
      - label: "a"
        text: "More loanable funds, and a lower interest rate"
        correct: true
        why: "More saving shifts supply right."
      - label: "b"
        text: "More investment due to a higher interest rate"
        correct: false
        why: "The rate falls."
      - label: "c"
        text: "Lower household savings and a higher rate"
        correct: false
        why: "Saving rises."
      - label: "d"
        text: "More loanable funds and lower investment"
        correct: false
        why: "A lower rate raises investment."
    related_terms:
      - loanable-funds-market
      - private-savings
  - id: "q14"
    title: "Q14 — Three economists on saving"
    text: |
      $y = 25k^{0.2}$, $\delta = 4\%$, $n = 2\%$, constant TFP, savings rate 10%.

      Economist A: for $k = 32$, consumption would be maximised if the savings rate were double the current one.

      Economist B: therefore, given depreciation and population growth, the current savings rate would support capital accumulation but will not maximise consumption.

      Economist C: since depreciation plus population growth is 6%, a savings rate of 10% is higher than the lower bound for maximising consumption.

      Which is correct?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      s_{GR} = \alpha = 0.2 = 2 \times 10\%
      $$

      $$
      y(32) = 25 \cdot 2 = 50,\qquad sy = 5 > (\delta + n)k = 0.06 \cdot 32 = 1.92
      $$

      > [!warning] Economist C
      > "Lower bound for maximising consumption" is not defined in the course. It is treated as incorrect here.
    options:
      - label: "a"
        text: "All three are correct"
        correct: false
        why: "C's condition has no basis in the Golden Rule."
      - label: "b"
        text: "A and B are correct"
        correct: true
        why: "$s_{GR} = 0.2$, and $\\Delta k > 0$ at $k = 32$."
      - label: "c"
        text: "All three are incorrect"
        correct: false
        why: "A and B hold."
      - label: "d"
        text: "B and C are correct"
        correct: false
        why: "A also holds, and C does not."
    related_terms:
      - golden-rule-savings-rate
      - steady-state
  - id: "q15"
    title: "Q15 — Different steady states"
    text: |
      Two economies follow Solow's model. Both begin with equal capital per worker and share the same production function, population growth and depreciation. Economy A converges to a higher steady state than B. What best explains this?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      With the same technology, $n$ and $\delta$, only $s$ can differ.
    options:
      - label: "a"
        text: "A's savings rate is higher"
        correct: true
        why: "It is the only parameter left."
      - label: "b"
        text: "Returns to capital rise in A and fall in B"
        correct: false
        why: "They share a production function."
      - label: "c"
        text: "A is more productive than B"
        correct: false
        why: "They share a production function."
      - label: "d"
        text: "B accumulates capital faster than A"
        correct: false
        why: "That would not give A the higher level."
    related_terms:
      - steady-state
  - id: "q16"
    title: "Q16 — Different marginal products"
    text: |
      *Reservists' adapted exam.* Economies A and B share a production function and are both in steady state. The marginal output of capital per worker is lower in A than in B. What is the best explanation?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      With diminishing returns, $f'(k)$ falls as $k$ rises.
    options:
      - label: "a"
        text: "B's steady state has lower $k$ and increasing returns to labour"
        correct: false
        why: "Returns to labour are not increasing."
      - label: "b"
        text: "A must be in a poverty trap"
        correct: false
        why: "Lower MPK means more capital."
      - label: "c"
        text: "Nothing can explain this"
        correct: false
        why: "Diminishing returns can."
      - label: "d"
        text: "A's steady state has higher $k$, with diminishing returns to capital"
        correct: true
        why: "More capital means lower MPK."
    related_terms:
      - marginal-product-of-capital
      - steady-state
  - id: "q17"
    title: "Q17 — Lower marginal output"
    text: |
      *Reservists' adapted exam.* A decrease in the marginal output per worker in a closed economy could be explained by:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      MPL = (1 - \alpha)A k^{\alpha}
      $$

      > [!warning] Ambiguous wording
      > This reads "marginal output per worker" as MPL. If it means the marginal product of capital per worker $f'(k)$, option c would be true.
    options:
      - label: "a"
        text: "A decrease in total output"
        correct: false
        why: "Not by itself."
      - label: "b"
        text: "An increase in labour supply"
        correct: true
        why: "More labour lowers MPL."
      - label: "c"
        text: "An increase in capital per worker"
        correct: false
        why: "This raises MPL."
      - label: "d"
        text: "Statements b and c are correct"
        correct: false
        why: "c does not lower MPL."
    related_terms:
      - marginal-product-of-labor
  - id: "q18"
    title: "Q18 — Reserves and trade"
    text: |
      Which is correct for an open economy?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      > [!warning] Two options qualify
      > **b and d** are both true statements. There is no official key, so ask which was intended.
    options:
      - label: "a"
        text: "A decrease in reserves means the economy cannot lend abroad"
        correct: false
        why: "It does not."
      - label: "b"
        text: "If the balance of trade is in deficit, net exports must be negative"
        correct: true
        why: "True by definition."
      - label: "c"
        text: "If exports exceed imports, transfers are in deficit and the capital account is balanced, reserves rise"
        correct: false
        why: "It depends on the size of the transfers."
      - label: "d"
        text: "If imports exceed exports, with no transfers and a balanced capital account, reserves fall"
        correct: true
        why: "The deficit is paid from reserves."
    related_terms:
      - balance-of-payments
      - foreign-exchange-reserves
  - id: "q19"
    title: "Q19 — Steady state"
    text: |
      Which best describes an economy at steady state according to Solow's model?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \Delta k = 0
      $$
    options:
      - label: "a"
        text: "Total capital and output are constant"
        correct: false
        why: "They grow at rate $n$."
      - label: "b"
        text: "Output per worker increases with capital accumulation"
        correct: false
        why: "That is the transition."
      - label: "c"
        text: "Investment exceeds depreciation and equipping new workers"
        correct: false
        why: "Then $k$ would rise."
      - label: "d"
        text: "Capital per worker and output per worker are constant"
        correct: true
        why: "That defines it."
    related_terms:
      - steady-state
  - id: "q20"
    title: "Q20 — GDP, GNP and net measures"
    text: |
      In 2020, local residents employed abroad were paid 7,560 USD. Foreign workers employed domestically were paid 8,650 USD. Depreciation was 4,160 USD. Which is correct?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      GNP = GDP - 1{,}090,\qquad NNP = GDP - 1{,}090 - 4{,}160 = GDP - 5{,}250
      $$
    options:
      - label: "a"
        text: "NDP is 4,160 lower than GNP, and 3,070 higher than GNP"
        correct: false
        why: "These contradict each other."
      - label: "b"
        text: "GDP is 4,160 lower than NDP; GNP is 1,090 lower than NNP"
        correct: false
        why: "GDP is above NDP, and GNP is above NNP."
      - label: "c"
        text: "NNP is 5,250 lower than GDP; GDP is 1,090 higher than GNP"
        correct: true
        why: "$1{,}090 + 4{,}160 = 5{,}250$."
      - label: "d"
        text: "Data is insufficient"
        correct: false
        why: "The gap can be calculated."
    related_terms:
      - gross-national-product
      - net-domestic-product
  - id: "q21"
    title: "Q21 — Consumption at its maximum"
    text: |
      An economy is in steady state, and the Ministry of Wellbeing finds consumption could not be higher. With $Y = AK^{\alpha}L^{1-\alpha}$, $0 < \alpha < 1$, what can you assume?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      s_{GR} = \alpha \;\Rightarrow\; \frac{c}{y} = 1 - \alpha
      $$
    options:
      - label: "a"
        text: "The proportion of consumption out of each output unit is $1 - \\alpha$"
        correct: true
        why: "At the Golden Rule, $s = \\alpha$."
      - label: "b"
        text: "Capital accumulation is at risk due to high consumption"
        correct: false
        why: "It is at steady state."
      - label: "c"
        text: "Capital per worker is increasing by $\\alpha$ each period"
        correct: false
        why: "$k$ is constant."
      - label: "d"
        text: "Savings are insufficient to increase consumption"
        correct: false
        why: "It is already at the maximum."
    related_terms:
      - golden-rule-savings-rate
  - id: "q22"
    title: "Q22 — Delayed payment and aid"
    text: |
      In 2020, firms exported 846 of goods, received payment for half and the rest was delayed for one year. Imports were 582, all paid that year. Local investors bought 385 of foreign bonds and received 794 in dividends from foreign firms, while local firms paid foreign investors dividends of 583. A major pharmaceutical firm invested 1,042 in a local medical research center, and the government sent 465 of medical aid in cash to a friendly country. Therefore:
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      CA = 846 - 582 + 794 - 583 - 465 = 10
      $$

      The delayed 423 is credit to foreigners, so it is a capital outflow. The local research center is a domestic transaction.

      $$
      \text{Capital movements} = -385 - 423 = -808,\qquad \Delta\text{Reserves} = 10 - 808 = -798
      $$
    options:
      - label: "a"
        text: "All other alternatives are incorrect"
        correct: false
        why: "Option b is correct."
      - label: "b"
        text: "Current account surplus = 10"
        correct: true
        why: "$846 - 582 + 794 - 583 - 465$."
      - label: "c"
        text: "Foreign reserves decreased by 244"
        correct: false
        why: "They fell by 798."
      - label: "d"
        text: "Net capital movement = -234"
        correct: false
        why: "It is $-385 - 423 = -808$."
    related_terms:
      - balance-of-payments
      - current-account
---

> [!warning] AI-solved questions: ALL 22
> Moodle has the Moed B question paper but **no official answer key**. Every answer here is AI-worked and needs checking.

> [!warning] Questions to check first
> - **Q1:** the claims say "2023", but the data implies they mean 2024.
> - **Q9:** both a and d are not Solow assumptions.
> - **Q10:** no option matches the data.
> - **Q14:** Economist C's "lower bound" claim is unclear.
> - **Q17:** the answer depends on what "marginal output per worker" means.
> - **Q18:** both b and d are true statements.
