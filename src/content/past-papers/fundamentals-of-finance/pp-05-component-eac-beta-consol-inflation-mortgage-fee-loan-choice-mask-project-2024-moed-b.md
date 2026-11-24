---
title: "Component EAC, Beta, Consol Inflation, Mortgage Fee, Loan Choice & Mask Project (2024 Moed B)"
type: "past-paper"
status: "official-answers"
exam: "Financial Management & Finance, Moed B (2024)"
course: "Financial Management & Finance"
instructor: "Dr. Tal Mofkadi"
semester: 2
year: 2024
source_doc: "/papers/fundamentals-of-finance/2024-moed-b-solution.pdf"
tags:
  - financial-management
  - past-paper
  - equivalent-annual-cost
  - beta
  - perpetuity
  - fisher-equation
  - portfolio-risk
  - mortgage
  - effective-interest-rate
  - annuity
  - profitability-index
  - free-cash-flow
  - working-capital
aliases:
  - "Finance Moed B 2024"
  - "PP05 Finance"
  - "2024 Moed B"
subject: fundamentals-of-finance
in_scope: true
questions:
  - id: "q1"
    title: "Q1 — USA vs China component, replaced forever"
    text: |
      A new machine component saves NIS 40,000 a year in production costs. **USA:** costs 120,000, straight-line depreciation over 3 years, used for 5 years. **China:** costs 50,000, depreciated over 2 years, used for 2 years. Cost of capital 12%, tax 25%, the firm is profitable, and the chosen line is renewed **forever**. Which component?
    options:
      - label: "a"
        text: |
          The firm is indifferent between the plans
        correct: false
        why: |
          Their equivalent annual costs differ.
      - label: "b"
        text: |
          A decision cannot be made because the components have a different duration
        correct: false
        why: |
          Different lives with renewal is exactly what EAC handles.
      - label: "c"
        text: |
          Made in the USA
        correct: false
        why: |
          Its after-tax cost per year of use is higher.
      - label: "d"
        text: |
          A decision cannot be made because the components have a different investment amount
        correct: false
        why: |
          EAC puts both on a per-year basis.
      - label: "e"
        text: |
          Ingredient Made in China
        correct: true
        why: |
          Equivalent annual cost 23,335 vs 26,626 for the US component (savings are the same for both).
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      The 40,000 saving is the same every year for either choice, so compare after-tax **costs** per year of use ([[Equivalent Annual Cost]]).

      - USA: $PV = 120{,}000 - 25\%(40{,}000)\,a_{\overline{3}|12\%} = 95{,}982$; $EAC = 95{,}982 / a_{\overline{5}|12\%} = 26{,}626$.
      - China: $PV = 50{,}000 - 25\%(25{,}000)\,a_{\overline{2}|12\%} = 39{,}437$; $EAC = 39{,}437 / a_{\overline{2}|12\%} = 23{,}335$.

      **China** is cheaper per year.
    related_terms: ["equivalent-annual-cost", "depreciation"]
  - id: "q2"
    title: "Q2 — A portfolio with beta above 1"
    text: |
      An investment portfolio has a beta greater than 1. Then:
    options:
      - label: "a"
        text: |
          It is possible that the portfolio consists of 10% risk-free asset and 90% market portfolio
        correct: false
        why: |
          That mix has $\beta = 0.9$.
      - label: "b"
        text: |
          It may be an efficient portfolio
        correct: true
        why: |
          A levered efficient portfolio ($x_m > 1$) has $\beta = x_m > 1$.
      - label: "c"
        text: |
          Necessarily the correlation coefficient of the investment portfolio with the market portfolio M is greater than 1
        correct: false
        why: |
          A correlation can never exceed 1.
      - label: "d"
        text: |
          Necessarily the portfolio is inefficient
        correct: false
        why: |
          Borrowing to hold more than 100% of M is efficient with beta above 1.
      - label: "e"
        text: |
          This may be the M market portfolio
        correct: false
        why: |
          The market's beta is exactly 1.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      For an efficient portfolio $\beta_p = x_m$. Borrowing at $r_f$ to put more than 100% in $M$ gives $\beta_p > 1$ while staying on the CML. So it **may** be efficient. See [[Lesson_10-Security Market Line & CAPM]].
    related_terms: ["beta", "capital-market-line", "market-portfolio"]
  - id: "q3"
    title: "Q3 — Expected inflation from a consol and a zero"
    text: |
      An Israeli government **consol**, face 100, **CPI-linked**, 6% coupon, issued today at 300. A **non-linked** zero-coupon bond, face 1,000, 8 years, trades at 703.19. Rates and expectations are constant. What is expected inflation?
    options:
      - label: "a"
        text: |
          2%
        correct: false
        why: |
          That is the real yield of the indexed consol.
      - label: "b"
        text: |
          5%
        correct: false
        why: |
          Not implied by these prices.
      - label: "c"
        text: |
          2.50%
        correct: false
        why: |
          The simple difference $4.5\% - 2\%$, not the Fisher relation.
      - label: "d"
        text: |
          2.45%
        correct: true
        why: |
          Real yield $6/300 = 2\%$; nominal $(1000/703.19)^{1/8} - 1 = 4.5\%$; $1.045/1.02 - 1 = 2.45\%$.
      - label: "e"
        text: |
          4.5%
        correct: false
        why: |
          That is the nominal yield of the zero.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Linked consol (a [[Perpetuity]]): $300 = 6/r_{real} \Rightarrow r_{real} = 2\%$. Non-linked zero: $703.19 = 1{,}000/(1+r_{nom})^8 \Rightarrow r_{nom} = 4.5\%$. Fisher: $\pi^e = 1.045/1.02 - 1 = \boxed{2.45\%}$.
    related_terms: ["perpetuity", "zero-coupon-bond", "fisher-equation"]
  - id: "q4"
    title: "Q4 — Two stocks and the risk-free asset"
    text: |
      Two stocks have SDs of 16% and 20% and correlation 0.6. An investor puts 30% in each stock and the rest in the risk-free asset. Portfolio SD?
    options:
      - label: "a"
        text: |
          8.43%
        correct: false
        why: |
          Drops part of the covariance term.
      - label: "b"
        text: |
          9.67%
        correct: true
        why: |
          $\sigma^2 = 0.3^2(0.16^2) + 0.3^2(0.2^2) + 2(0.3)(0.3)(0.16)(0.2)(0.6) = 0.00936$.
      - label: "c"
        text: |
          16.12%
        correct: false
        why: |
          Treats the 60% in stocks as if it were 100%.
      - label: "d"
        text: |
          9.01%
        correct: false
        why: |
          Not the square root of 0.00936.
      - label: "e"
        text: |
          10.28%
        correct: false
        why: |
          Overstates the covariance term.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      The risk-free asset adds no variance and no covariance:
      $$\sigma_p^2 = 0.3^2(0.16)^2 + 0.3^2(0.20)^2 + 2(0.3)(0.3)(0.16)(0.20)(0.6) = 0.00936 \Rightarrow \sigma_p = \boxed{9.67\%}$$
    related_terms: ["portfolio-risk", "correlation"]
  - id: "q5"
    title: "Q5 — Mortgage prepayment fee after rates fall"
    text: |
      A NIS 1,500,000 mortgage for 30 years at a fixed, non-indexed **4.8%** a year, repaid in equal monthly payments. After 3 years the borrower repays everything; the nominal annual rate is now **3.6%**. What discount-difference fee (if any) is charged?
    options:
      - label: "a"
        text: |
          About NIS129,409
        correct: false
        why: |
          Too small for this rate drop over 27 remaining years.
      - label: "b"
        text: |
          About NIS1,426,490
        correct: false
        why: |
          This is an outstanding balance (with monthly rates from effective conversion), not a fee.
      - label: "c"
        text: |
          About NIS201,662
        correct: true
        why: |
          Monthly rates 0.4% and 0.3%: market value of the 324 remaining payments minus the balance.
      - label: "d"
        text: |
          The borrower will not be charged a capitalization difference fee at all since the interest rate has decreased from 4.8% to 3.6% and has not increased.
        correct: false
        why: |
          Backwards: the fee arises precisely because rates fell.
      - label: "e"
        text: |
          About NIS72,253
        correct: false
        why: |
          Too small for this rate drop over 27 remaining years.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Monthly rates: $4.8\%/12 = 0.4\%$ and $3.6\%/12 = 0.3\%$.
      $PMT = 1{,}500{,}000 / a_{\overline{360}|0.4\%} = 7{,}869.98$. After 36 payments, 324 remain.
      Balance at the loan rate: $7{,}869.98\,a_{\overline{324}|0.4\%} = 1{,}427{,}747$. Market value at 0.3%: $7{,}869.98\,a_{\overline{324}|0.3\%} = 1{,}629{,}410$.
      $$\text{Fee} = 1{,}629{,}410 - 1{,}427{,}747 = \boxed{201{,}662}$$
    related_terms: ["mortgage", "outstanding-balance", "refinancing"]
  - id: "q6"
    title: "Q6 — The cheapest one-year loan"
    text: |
      Which loan alternative is the most worthwhile for a one-year loan?
    options:
      - label: "a"
        text: |
          Loan at an annual interest rate of 12.5% + portfolio opening fee (paid on the day the loan is taken) at a rate of 2%
        correct: false
        why: |
          $1.125/0.98 - 1 = 14.80\%$.
      - label: "b"
        text: |
          Loan at an effective quarterly interest rate of 3.5%
        correct: true
        why: |
          $1.035^4 - 1 = 14.75\%$, the lowest effective annual rate.
      - label: "c"
        text: |
          A loan with an annual interest rate of 13.2% is paid in advance
        correct: false
        why: |
          Interest paid up front: $1/(1 - 0.132) - 1 = 15.21\%$.
      - label: "d"
        text: |
          Loan at an annual interest rate of 14% annually is calculated monthly
        correct: false
        why: |
          $(1 + 0.14/12)^{12} - 1 = 14.93\%$.
      - label: "e"
        text: |
          A loan with an annual interest rate of 14% is calculated continuously
        correct: false
        why: |
          $e^{0.14} - 1 = 15.03\%$.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Convert each to an effective annual rate ([[Lesson_03-Rate Conversion, Effective Rates & EAC]]): a 14.75%, b 14.93%, c 15.21%, d 14.80%, e 15.03%. The cheapest is **a**.
    related_terms: ["effective-interest-rate", "stated-rate"]
  - id: "q7"
    title: "Q7 — Monthly saving for a retirement allowance"
    text: |
      Ilana (30) deposits a fixed amount at the end of each month for 37 years (444 deposits). From age 67 she withdraws ₪15,000 at the **start** of each month for 18 years (216 withdrawals). The effective annual rate is 6.168%. Monthly deposit?
    options:
      - label: "a"
        text: |
          NIS1,210.
        correct: false
        why: |
          Close, but not the result of the exact 0.5% monthly calculation.
      - label: "b"
        text: |
          NIS1,204.
        correct: false
        why: |
          Close, but not the result of the exact 0.5% monthly calculation.
      - label: "c"
        text: |
          NIS1,213.
        correct: false
        why: |
          Close, but not the result of the exact 0.5% monthly calculation.
      - label: "d"
        text: |
          NIS1,195.
        correct: false
        why: |
          Close, but not the result of the exact 0.5% monthly calculation.
      - label: "e"
        text: |
          NIS1,219.
        correct: true
        why: |
          Need at 67: 1,988,360; deposit = need / FV factor of 444 monthly deposits at 0.5%.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Monthly rate: $1.06168^{1/12} - 1 = 0.5\%$.
      Needed at 67 (withdrawals at the start of each month, an annuity due): $15{,}000\,a_{\overline{216}|0.5\%}(1.005) = 1{,}988{,}360$.
      Deposits: $PMT \cdot \frac{1.005^{444} - 1}{0.005} = 1{,}988{,}360 \Rightarrow PMT = \boxed{1{,}218.87}$.
    related_terms: ["annuity", "future-value", "rate-conversion"]
  - id: "q8"
    title: "Q8 — Budget-constrained choice when every PI is equal"
    text: |
      | Project | Investment | NPV |
      |---|---|---|
      | A | 100,000 | 30,000 |
      | B | 200,000 | 60,000 |
      | C | 300,000 | 90,000 |
      | D | 400,000 | 120,000 |

      Projects are not mutually exclusive, the budget is NIS 400,000 and partial investment is allowed. How much did the company invest in D?
    options:
      - label: "a"
        text: |
          100,000 NIS
        correct: false
        why: |
          One of many equally good choices, not a forced one.
      - label: "b"
        text: |
          400,000 NIS
        correct: false
        why: |
          One of many equally good choices, not a forced one.
      - label: "c"
        text: |
          We cannot say for certain
        correct: true
        why: |
          Every project has PI = 0.3, so any way of spending 400,000 gives NPV 120,000.
      - label: "d"
        text: |
          200,000 NIS
        correct: false
        why: |
          One of many equally good choices, not a forced one.
      - label: "e"
        text: |
          300,000 NIS
        correct: false
        why: |
          One of many equally good choices, not a forced one.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      With a budget constraint rank by the [[Profitability Index]]. Here every project has $PI = 0.3$, so every combination that spends the 400,000 earns the same NPV of 120,000. The amount put into D is **not determined**.
    related_terms: ["profitability-index"]
  - id: "q9"
    title: "Q9 — Second payment of a CPI-linked mortgage"
    text: |
      NIS 100,000 for 10 years, CPI-linked, real rate 5%, repaid in 10 payments equal in **real** terms at the end of each year. Inflation was the same in each of the first 3 years, 8% cumulative over the three. What is the second payment in NIS?
    options:
      - label: "a"
        text: |
          15,107 NIS
        correct: false
        why: |
          Too high for two years of 2.6% inflation.
      - label: "b"
        text: |
          15,567 NIS
        correct: false
        why: |
          Too high for two years of 2.6% inflation.
      - label: "c"
        text: |
          14,006 NIS
        correct: false
        why: |
          Not the real payment indexed by two years of inflation.
      - label: "d"
        text: |
          13,987 NIS
        correct: false
        why: |
          This is about $12{,}950 \times 1.08$, i.e. the **third** payment (all three years of inflation).
      - label: "e"
        text: |
          13,632 NIS
        correct: true
        why: |
          Real payment 12,950.46; annual inflation $1.08^{1/3} - 1 = 2.6\%$; $12{,}950.46 \times 1.026^2 = 13{,}632$.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Real payment: $100{,}000 / a_{\overline{10}|5\%} = 12{,}950.46$. Each year's inflation: $1.08^{1/3} - 1 = 2.598\%$. The second payment is indexed by two years: $12{,}950.46 \times 1.02598^2 = \boxed{13{,}632}$.
    related_terms: ["mortgage", "inflation", "real-interest-rate"]
  - id: "q10"
    title: "Q10 — Effective rate in a two-instalment purchase"
    text: |
      Jeans cost 700 NIS today, or two monthly instalments of 350, each with a 5 NIS processing fee. What is the annual effective rate in the credit?
    options:
      - label: "a"
        text: |
          5.84%
        correct: false
        why: |
          Not the IRR of +700, −355, −355.
      - label: "b"
        text: |
          14.44%
        correct: false
        why: |
          Not the IRR of +700, −355, −355.
      - label: "c"
        text: |
          12.03%
        correct: true
        why: |
          Solve $700 = 355/(1+i) + 355/(1+i)^2$: $i = 0.951\%$ a month, $1.00951^{12} - 1 = 12.03\%$.
      - label: "d"
        text: |
          0.95%
        correct: false
        why: |
          That is the monthly rate, not the annual one.
      - label: "e"
        text: |
          0%
        correct: false
        why: |
          Ignores the 5 NIS fees, which make the credit cost something.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      The credit gives you 700 now against 355 in each of the next two months:
      $$700 = \frac{355}{1+i} + \frac{355}{(1+i)^2} \Rightarrow i = 0.951\% \text{ a month} \Rightarrow (1.00951)^{12} - 1 = \boxed{12.03\%}$$
    related_terms: ["effective-interest-rate", "internal-rate-of-return"]
  - id: "open1"
    title: "Open question 1 (25%) — Cloth face masks: FCF, NPV and the price of walking away"
    text: |
      - Machine \$480,000 now, straight-line over 6 years (no salvage), used 4 years, sold for \$100,000 at the end.
      - Financed with a 5% loan repaid in equal annual instalments over 4 years (interest is tax-deductible).
      - Revenue \$700,000 in year 1, falling 50% a year. Materials and production 20% of sales. Online marketing \$10,000 a year.
      - Existing production workers who are under-used are allocated \$300,000 a year; management and bookkeeping are allocated \$400,000 a year.
      - The project uses 100 m² that the company rents at $240/m²; otherwise it could sublet it at $120/m².
      - Inventory and suppliers during each year (from the start of the year) are 20% and 10% of that year's cost of sales; customers' debt is 10% of that year's sales; all liquidated at the end.
      - Corporate tax 25%, capital-gains tax 20%. Cost of capital 8%; otherwise the money would sit in a 1% risk-free deposit.

      **I.** (20 pts) Forecast the cash flows (in thousands). Is the project worthwhile? **II.** (5 pts) What amount at the end of the last year would make the company indifferent to dropping the project?
    solution: |
      **Official solution.** Leave out the loan (financing), the existing workers' salaries and the management allocation (no incremental cost). The space costs its **opportunity cost**, the 120/m² sublet income: $12{,}000$ a year. Discount at **8%** (the project's risk), not the 1% deposit.

      | | 0 | 1 | 2 | 3 | 4 |
      |---|---|---|---|---|---|
      | Revenue | | 700,000 | 350,000 | 175,000 | 87,500 |
      | Cost of sales (20%) | | −140,000 | −70,000 | −35,000 | −17,500 |
      | Marketing | | −10,000 | −10,000 | −10,000 | −10,000 |
      | Rent (lost sublet income) | | −12,000 | −12,000 | −12,000 | −12,000 |
      | Depreciation (480,000/6) | | −80,000 | −80,000 | −80,000 | −80,000 |
      | **EBIT** | | 458,000 | 178,000 | 38,000 | −32,000 |
      | Tax (25%) | | −114,500 | −44,500 | −9,500 | +8,000 |
      | **NOPAT** | | 343,500 | 133,500 | 28,500 | −24,000 |
      | Add back depreciation | | 80,000 | 80,000 | 80,000 | 80,000 |
      | CAPEX | −480,000 | | | | |
      | Proceeds from sale (net of tax) | | | | | 112,000 |
      | Investment in working capital | −84,000 | 42,000 | 21,000 | 10,500 | 10,500 |
      | **FCF** | **−564,000** | **465,500** | **234,500** | **119,000** | **178,500** |

      Working capital (balance from the start of each year): inventory $20\%$ and suppliers $10\%$ of cost of sales, customers $10\%$ of sales: $28{,}000 + 70{,}000 - 14{,}000 = 84{,}000$ at $t=0$, then 42,000, 21,000, 10,500, 0.
      Sale of the machine: book value $480{,}000 - 4(80{,}000) = 160{,}000$; sold for 100,000, a capital **loss** of 60,000, which saves $20\% \times 60{,}000 = 12{,}000$ tax: net $112{,}000$.

      $$NPV = -564{,}000 + \frac{465{,}500}{1.08} + \frac{234{,}500}{1.08^2} + \frac{119{,}000}{1.08^3} + \frac{178{,}500}{1.08^4} = \boxed{293{,}733}$$

      Positive: the project is worthwhile.

      **II.** The company would give up the project only if paid at least the NPV, moved to the end of year 4: $X = 293{,}733 \times 1.08^4 \approx \boxed{399{,}621}$ received at the end of the last year.

      > [!warning] Two slips in the official file
      > Its NPV formula lists 234,500 twice (the result 293,733 uses the right flows). Part II starts from 293,620.96 but its answer, 399,620.96, is $293{,}733 \times 1.08^4$. It also says the company would agree to **pay** this amount; it is the amount the company would need to **receive** to give up a positive-NPV project.
    related_terms: ["free-cash-flow", "working-capital", "opportunity-cost", "net-present-value", "depreciation"]
  - id: "open2"
    title: "Open question 2 (25%) — Danny's trip to Australia"
    text: |
      In a year and a half (18 months) Danny leaves for a 15-month trip and wants \$10,000 in his pocket at the **start** of each month there. Before the trip: his father gives him \$15,000 in 10 months; he works 11 months for a salary of \$7,000 at the end of month 1, growing 1.5% a month. The bank pays 0.5% a month.

      **a.** (10 pts) How much does Danny need on the day he leaves? **b.** (15 pts) What fixed amount must he deposit at the **start** of each month (for 18 months) to have it?
    solution: |
      **Official solution.**

      **a.** 15 withdrawals at the start of each month (an annuity due):
      $$PV = \frac{10{,}000}{0.005}\left[1 - \frac{1}{1.005^{15}}\right] \times 1.005 = \boxed{144{,}887}$$

      **b.** Value his other sources on the departure day (month 18):
      - Father's gift (month 10, grows 8 months): $15{,}000 \times 1.005^8 = 15{,}611$.
      - Salary, a growing annuity with $g = 1.5\% > r$: $PV_0 = \frac{7{,}000}{0.005 - 0.015}\left[1 - \left(\frac{1.015}{1.005}\right)^{11}\right] = 80{,}545$, so at month 18: $80{,}545 \times 1.005^{18} = 88{,}110$.

      The shortfall $144{,}887 - (15{,}611 + 88{,}110) = 41{,}166$ comes from 18 deposits at the start of each month:
      $$41{,}166 = \frac{PMT}{0.005}\left[1.005^{18} - 1\right] \times 1.005 \Rightarrow \boxed{PMT = 2{,}180}$$
    related_terms: ["annuity", "growing-annuity", "future-value"]
---

> Part of: [[Financial Management]] · Moed B 2024 · [official solution file](/papers/fundamentals-of-finance/2024-moed-b-solution.pdf) (it contains the full questions)

> [!info] What is official here
> - **Section 1 (Q1 to Q10, multiple choice):** the official file marks the correct option (it always lists it first; the options are shuffled here) but gives **no working**. The working and the reasons other options fail are **AI-written**, and each was recomputed to agree with the official option.
> - **Section 2 (two open questions, 50%):** the numbers are the **official** solution.
