---
title: "Savings Tax, Implied Rate, Mortgage Prepayment, Bonds & CAPM (2025 Moed A)"
type: "past-paper"
status: "official-solution"
exam: "Finance for Economics and Entrepreneurship, Moed A (21 February 2025)"
course: "Financial Management & Finance"
instructor: "Dr. Tal Mofkadi"
semester: 1
year: 2025
source_doc: "/papers/fundamentals-of-finance/2025-moed-a.pdf"
tags:
  - financial-management
  - past-paper
  - effective-interest-rate
  - mortgage
  - bond
  - real-interest-rate
  - internal-rate-of-return
  - capital-market-line
  - security-market-line
  - net-present-value
aliases:
  - "Finance Moed A 2025"
  - "PP03 Finance"
  - "2025 Moed A"
subject: fundamentals-of-finance
in_scope: true
questions:
  - id: "q1"
    title: "Q1 — Variable-rate savings plan with tax on interest"
    text: |
      Aviv deposits NIS 100,000 once, for one year. The plan pays **0.6% a month** for the first eight months, **0.7%** for the next two and **1%** for the last two. On withdrawal he pays **25% tax on the interest only**. How much is left after tax?
    options:
      - label: "a"
        text: |
          Approx. 27,128 ₪
        correct: false
        why: |
          Smaller than the deposit; a deposit with positive interest and tax only on the interest cannot shrink.
      - label: "b"
        text: |
          Approx. 102,128 ₪
        correct: false
        why: |
          Looks like the deposit plus the tax amount (2,128) instead of the after-tax interest (6,385).
      - label: "c"
        text: |
          Approx. 106,385 ₪
        correct: true
        why: |
          $100{,}000 \times 1.006^8 \times 1.007^2 \times 1.01^2 = 108{,}513.94$; tax $= 25\% \times 8{,}513.94 = 2{,}128.49$; left $106{,}385.46$.
      - label: "d"
        text: |
          Approx. 164,611 ₪
        correct: false
        why: |
          Far too large: it would need about 4% a month, not 0.6% to 1%.
      - label: "e"
        text: |
          Approx. 190,600 ₪
        correct: false
        why: |
          Not reachable from these rates; nearly doubling the deposit in a year needs roughly 5.5% a month.
    solution: |
      Compound month by month at each rate, then tax only the interest:

      $$FV = 100{,}000 \times 1.006^8 \times 1.007^2 \times 1.01^2 = 108{,}513.94$$

      $$\text{After tax} = FV - 25\%\,(FV - 100{,}000) = 108{,}513.94 - 2{,}128.49 = \boxed{106{,}385.46}$$
    related_terms: ["future-value", "effective-interest-rate"]
  - id: "q2"
    title: "Q2 — Implied rate in a developer's payment plan"
    text: |
      An apartment ready in 4 years costs NIS 2,000,000 today plus NIS 700,000 on delivery. The developer offers instead: NIS 700,000 today and NIS 2,300,000 on delivery. What annual effective rate is implied in the developer's offer?
    options:
      - label: "a"
        text: |
          Approx. 3.67%
        correct: false
        why: |
          Too low: at 3.67% the 1.3M would grow to only about 1.5M in 4 years.
      - label: "b"
        text: |
          Approx. 23.07%
        correct: false
        why: |
          This is the total 4-year growth, $1.6/1.3 - 1 = 23.08\%$, not the annual rate.
      - label: "c"
        text: |
          Approx. 5.32%
        correct: true
        why: |
          Paying 1.3M less today and 1.6M more in year 4 is a loan: $1.6/1.3 = (1+r)^4 \Rightarrow r = 5.33\%$.
      - label: "d"
        text: |
          Approx. 5.77%
        correct: false
        why: |
          Close, but compounding 1.3M at 5.77% for 4 years gives about 1.63M, not 1.6M.
      - label: "e"
        text: |
          Approx. 6.41%
        correct: false
        why: |
          Not consistent with the 1.3M-now versus 1.6M-later exchange.
    solution: |
      Equate the PV of the two plans and solve for $r$:

      $$2{,}000{,}000 + \frac{700{,}000}{(1+r)^4} = 700{,}000 + \frac{2{,}300{,}000}{(1+r)^4} \Rightarrow 1{,}300{,}000 = \frac{1{,}600{,}000}{(1+r)^4} \Rightarrow \boxed{r = 5.328\%}$$

      In Excel: `=IRR(1300000, 0, 0, 0, -1600000)` on the difference between the two plans.
    related_terms: ["effective-interest-rate", "internal-rate-of-return"]
  - id: "q3"
    title: "Q3 — Mortgage early-repayment (discount difference) fee"
    text: |
      Michal borrows a NIS 1,000,000 mortgage at **0.4% a month** for 30 years, repaid in 360 equal monthly instalments. After 10 years she repays the outstanding balance; the monthly rate that day is **0.25%**. What discount-difference fee does the bank charge?
    options:
      - label: "a"
        text: |
          Approx. 115,203 ₪
        correct: false
        why: |
          Not the gap between the two PVs of the remaining 240 payments.
      - label: "b"
        text: |
          Approx. 33,771 ₪
        correct: false
        why: |
          Too small for a 15-basis-point monthly drop on about 830K of balance over 240 months.
      - label: "c"
        text: |
          Approx. 137,555 ₪
        correct: true
        why: |
          Market value of the 240 remaining payments at 0.25% minus the book balance at 0.4%.
      - label: "d"
        text: |
          Approx. 85,352 ₪
        correct: false
        why: |
          Does not match the PV difference of the remaining payments.
      - label: "e"
        text: |
          Approx. 67,016 ₪
        correct: false
        why: |
          Too small: the rate falls from 0.4% to 0.25% over a 20-year remaining term.
    solution: |
      **Payment:** $1{,}000{,}000 = \frac{PMT}{0.004}\left(1 - \frac{1}{1.004^{360}}\right) \Rightarrow PMT = 5{,}246.65$.

      **After 10 years** 240 payments remain. Book balance (at the loan rate 0.4%) and market value (at 0.25%):

      $$\text{Fee} = \frac{5{,}246.65}{0.0025}\left(1-\frac{1}{1.0025^{240}}\right) - \frac{5{,}246.65}{0.004}\left(1-\frac{1}{1.004^{240}}\right) = \boxed{137{,}554.72}$$

      The bank charges the fee because rates fell: it loses an above-market loan (see [[Lesson_05-The Four Loan Types]]).
    related_terms: ["mortgage", "outstanding-balance", "refinancing"]
  - id: "q4"
    title: "Q4 — Effective rate with a processing fee"
    text: |
      A NIS 100,000 loan at **6% a year calculated monthly**, principal and interest repaid in one payment after a year. A processing fee of **780 NIS** is paid immediately. What is the annual effective interest rate?
    options:
      - label: "a"
        text: |
          6.16%
        correct: false
        why: |
          This is $(1+6\%/12)^{12}-1 = 6.17\%$, the effective rate **without** the fee.
      - label: "b"
        text: |
          6.82%
        correct: false
        why: |
          Close but not the IRR of +99,220 now and −106,167.78 in a year.
      - label: "c"
        text: |
          7%
        correct: true
        why: |
          You net 99,220 and repay $100{,}000(1.005)^{12} = 106{,}167.78$: $106{,}167.78/99{,}220 - 1 = 7.0\%$.
      - label: "d"
        text: |
          6.55%
        correct: false
        why: |
          Ignores part of the cost: neither the 6.17% effective rate alone nor fee-adjusted.
      - label: "e"
        text: |
          6.36%
        correct: false
        why: |
          Treats the fee as a smaller cost than it is.
    solution: |
      $$100{,}000 - 780 = \frac{100{,}000\,(1 + 6\%/12)^{12}}{1+r} \Rightarrow 99{,}220 = \frac{106{,}167.78}{1+r} \Rightarrow \boxed{r = 7\%}$$
    related_terms: ["effective-interest-rate", "stated-rate"]
  - id: "q5"
    title: "Q5 — CPI-linked semi-annual bond"
    text: |
      An index-linked bond, face NIS 100, **8% nominal coupon paid twice a year**, 10 years. Non-linked identical bonds yield **6% a year**; expected inflation is **1.88%** a year. Actual inflation over the 10 years turned out to be 1.5% a year. What was the price on the issue day?
    options:
      - label: "a"
        text: |
          161 ₪
        correct: false
        why: |
          Too high for a 4% half-year coupon at a 2% real half-year yield.
      - label: "b"
        text: |
          154 ₪
        correct: false
        why: |
          Too high; consistent with discounting at a much lower rate.
      - label: "c"
        text: |
          121.8 ₪
        correct: false
        why: |
          Too low; it would mean discounting at more than the real rate.
      - label: "d"
        text: |
          153.19 ₪
        correct: false
        why: |
          Does not come from the real semi-annual rate of 2%.
      - label: "e"
        text: |
          132.7 ₪
        correct: true
        why: |
          Real annual rate $1.06/1.0188 - 1 = 4.044\%$, semi-annual 2%; coupon 4 for 20 periods: 132.66.
    solution: |
      A CPI-linked bond's cash flows are real, so discount at the **real** rate, which uses **expected** inflation. The actual 1.5% is irrelevant on the issue day.

      $$r_{annual} = \frac{1.06}{1.0188} - 1 = 4.044\%, \qquad r_{semi} = 1.04044^{0.5} - 1 = 2\%$$

      $$P = \frac{4}{0.02}\left(1 - \frac{1}{1.02^{20}}\right) + \frac{100}{1.02^{20}} = \boxed{132.66}$$

      See [[Lesson_07-Bond Pricing]] (semi-annual and CPI-linked bonds).
    related_terms: ["bond", "real-interest-rate", "fisher-equation"]
  - id: "q6"
    title: "Q6 — Real and nominal rate of a savings plan"
    text: |
      A non-CPI-linked savings plan paid **5%** in a year when actual inflation was **9%**. What were the real and the nominal interest rates?
    options:
      - label: "a"
        text: |
          Negative real interest rate of 5% and positive nominal interest rate of 3.67%
        correct: false
        why: |
          Swaps the two numbers.
      - label: "b"
        text: |
          Positive real interest rate of 3.67% and positive nominal interest rate of 14.45%
        correct: false
        why: |
          Wrong sign on the real rate and a nonsense nominal rate.
      - label: "c"
        text: |
          Negative real interest rate of 3.67% and negative nominal interest rate of 5%
        correct: false
        why: |
          The plan paid +5% in money terms; the nominal rate is positive.
      - label: "d"
        text: |
          Negative real interest rate of 3.67% and positive nominal interest rate of 5%
        correct: true
        why: |
          Nominal is the stated 5%; real $= 1.05/1.09 - 1 = -3.67\%$.
      - label: "e"
        text: |
          Positive real interest rate of 14.45% and positive nominal interest rate of 5%
        correct: false
        why: |
          14.45% is $1.05 \times 1.09 - 1$: multiplying instead of dividing.
    solution: |
      The plan is not linked, so its 5% is the **nominal** rate. By the [[Fisher Equation]]:

      $$r_{real} = \frac{1.05}{1.09} - 1 = \boxed{-3.67\%}$$

      Prices rose faster than the money grew, so purchasing power fell.
    related_terms: ["real-interest-rate", "nominal-rate", "fisher-equation", "inflation"]
  - id: "q7"
    title: "Q7 — Four statements about conventional projects"
    text: |
      For conventional projects, how many of these are correct?
      - The higher the discount rate, the lower the NPV.
      - The lower the discount rate, the higher the IRR.
      - The higher the discount rate, the greater the chance the project is profitable.
      - For mutually exclusive projects we always choose the project with the highest IRR.
    options:
      - label: "a"
        text: |
          None of the sentences are true
        correct: false
        why: |
          Statement 1 is true: a conventional NPV profile slopes down.
      - label: "b"
        text: |
          There is only one correct sentence
        correct: true
        why: |
          Only the first statement is right.
      - label: "c"
        text: |
          There are three correct sentences
        correct: false
        why: |
          Statements 2, 3 and 4 are all false.
      - label: "d"
        text: |
          There are four correct sentences
        correct: false
        why: |
          Statements 2, 3 and 4 are all false.
      - label: "e"
        text: |
          There are two correct statements
        correct: false
        why: |
          The IRR does not depend on the discount rate, so statement 2 is false.
    solution: |
      1. **True.** A conventional project's NPV profile falls as $r$ rises.
      2. **False.** The IRR is a property of the cash flows alone; the discount rate does not change it.
      3. **False.** A higher rate lowers the NPV, so it makes the project *less* likely to be worth doing.
      4. **False.** For mutually exclusive projects rank by **NPV**; IRR can mislead on scale and timing ([[Lesson_02-Perpetuities, NPV & IRR]]).
    related_terms: ["net-present-value", "internal-rate-of-return", "npv-profile"]
  - id: "q8"
    title: "Q8 — Pricing a bond from another bond's yield"
    text: |
      Series A: face 100, 19% coupon once a year, 1 year to maturity, issued at a **premium of 6.25%** over face. Series B: face 100, 8% annual coupon, 5 years. What is Series B's price on issue?
    options:
      - label: "a"
        text: |
          69.96 ₪
        correct: false
        why: |
          Too low: at a 12% yield the 8% bond is worth 85.58; this would need a yield of about 17.5%.
      - label: "b"
        text: |
          85.58 ₪
        correct: true
        why: |
          A's price 106.25 for 119 next year gives $r = 12\%$; B at 12%: 85.58.
      - label: "c"
        text: |
          92.29 ₪
        correct: false
        why: |
          Too high; it ignores that the market yield is 12%.
      - label: "d"
        text: |
          96.69 ₪
        correct: false
        why: |
          Too high; it would need a yield just above 8%.
      - label: "e"
        text: |
          75.57 ₪
        correct: false
        why: |
          Too low for an 8% coupon at a 12% yield.
    solution: |
      Series A pins down the market yield: $106.25 = \frac{119}{1+r} \Rightarrow r = 12\%$.

      $$P_B = \frac{8}{0.12}\left(1 - \frac{1}{1.12^5}\right) + \frac{100}{1.12^5} = \boxed{85.58}$$

      A discount bond: the 8% coupon is below the 12% yield.
    related_terms: ["bond", "yield-to-maturity", "coupon"]
  - id: "q9"
    title: "Q9 — Partial-redemption bond"
    text: |
      A 30-year bond, face NIS 100, 6% annual coupon. **40% of the principal is repaid after 5 years** and the rest at maturity. YTM is 5%. What is the issue price?
    options:
      - label: "a"
        text: |
          About ₪27.99
        correct: false
        why: |
          Far below face, although the coupon (6%) is above the yield (5%).
      - label: "b"
        text: |
          About ₪110.95
        correct: true
        why: |
          Coupons of 6 for 5 years plus 40 at year 5, then coupons of 3.6 on the remaining 60 for 25 years plus 60 at year 30: 110.96.
      - label: "c"
        text: |
          About ₪50.00
        correct: false
        why: |
          Far below face, although the coupon (6%) is above the yield (5%).
      - label: "d"
        text: |
          About ₪50.00
        correct: false
        why: |
          Same as b.
      - label: "e"
        text: |
          About ₪29.99
        correct: false
        why: |
          Far below face; a bond whose coupon exceeds its yield trades above par.
    solution: |
      Coupons are paid on the **outstanding** face: 6 a year while 100 is outstanding, then $6\% \times 60 = 3.6$.

      $$P = \frac{6}{0.05}\left(1 - \frac{1}{1.05^5}\right) + \frac{40}{1.05^5} + \frac{3.6}{0.05}\left(1 - \frac{1}{1.05^{25}}\right)\frac{1}{1.05^5} + \frac{60}{1.05^{30}} = \boxed{110.96}$$

      A premium bond, since the coupon rate exceeds the yield.
    related_terms: ["bond", "yield-to-maturity", "coupon"]
  - id: "q10"
    title: "Q10 — Three-yearly receipts against growing payments"
    text: |
      Starting at the end of year 5 you receive **four** receipts of NIS 30,000, **one every three years** (years 5, 8, 11, 14). To get them you pay NIS 7,000 from the end of this year, growing **2% a year**, for 14 years. At 10% a year, what is the NPV?
    options:
      - label: "a"
        text: |
          Positive Net Present Value of NIS 4,658
        correct: false
        why: |
          The NPV is negative: the growing payments (about 57K in PV) outweigh the receipts (about 51K).
      - label: "b"
        text: |
          Positive Net Present Value of NIS 12,047
        correct: false
        why: |
          Positive NPVs need the receipts to be worth more than the payments, which they are not.
      - label: "c"
        text: |
          Negative net present value of NIS 6,059
        correct: true
        why: |
          PV of receipts 51,037.62 minus PV of growing payments 57,097.25.
      - label: "d"
        text: |
          Negative net present value of NIS 64,686
        correct: false
        why: |
          Too negative: the receipts are worth about 51K, so the NPV cannot fall that far.
      - label: "e"
        text: |
          Positive net present value of NIS 37,998
        correct: false
        why: |
          Ignores most of the payments; with all 14 the NPV is negative.
    solution: |
      **Receipts:** a 4-payment annuity with a 3-year period, $r_{3y} = 1.1^3 - 1 = 33.1\%$. Valued one period (3 years) before the first receipt, i.e. at $t=2$, then discounted 2 years:

      $$PV_{receipts} = \frac{30{,}000}{0.331}\left(1 - \frac{1}{1.331^4}\right)\frac{1}{1.1^2} = 51{,}037.62$$

      **Payments:** a growing annuity, 14 payments, $g = 2\%$:

      $$PV_{payments} = \frac{7{,}000}{0.10 - 0.02}\left(1 - \left(\frac{1.02}{1.10}\right)^{14}\right) = 57{,}097.25$$

      $$NPV = 51{,}037.62 - 57{,}097.25 = \boxed{-6{,}059.63}$$
    related_terms: ["annuity", "growing-annuity", "rate-conversion", "net-present-value"]
  - id: "q11"
    title: "Q11 — Two efficient funds: CML, SML and a mispriced share"
    text: |
      Two mutual funds offer **efficient** portfolios. Fund A: $E(r) = 10\%$, SD $2\%$, and it invests a **quarter** of its assets in the risk-free asset. Fund B: $E(r) = 16\%$, SD $5\%$.

      - **a.** Find the risk-free rate and the market's expected return.
      - **b.** What share of fund B is in the risk-free asset?
      - **c.** Write the CML.
      - **d.** Write the SML.
      - **e.** Beta and SD of an **efficient** portfolio with $E(r) = 20\%$?
      - **f.** Beta and SD of an **inefficient** portfolio with $E(r) = 20\%$?
      - **g.** A share with beta 0.5 was issued by mistake at a price reflecting a 12% return. What will happen to its price?
    solution: |
      **a.** Both funds are on the CML, so they share its slope: $\frac{16\% - 10\%}{5\% - 2\%} = 2 = \frac{E(r_m) - r_f}{\sigma_m}$. From A: $10\% = r_f + 2(2\%) \Rightarrow \boxed{r_f = 6\%}$. A is 25% risk-free, 75% market: $10\% = 0.25(6\%) + 0.75\,E(r_m) \Rightarrow \boxed{E(r_m) = 11.33\%}$.

      **b.** $16\% = x_f(6\%) + (1 - x_f)(11.33\%) \Rightarrow \boxed{x_f = -0.875}$: fund B borrows 87.5% of its value and puts 187.5% in the market.

      **c.** $E(r_p) = 6\% + 2\,\sigma_p$.

      **d.** $E(r_i) = 6\% + \beta_i(11.33\% - 6\%) = 6\% + 5.33\%\,\beta_i$.

      **e.** SML: $20\% = 6\% + 5.33\%\,\beta \Rightarrow \beta_p = 2.63$. CML: $20\% = 6\% + 2\sigma_p \Rightarrow \sigma_p = 7\%$.

      **f.** Same expected return, so the same beta, $\beta = 2.63$ (the SML prices every asset). Its SD is **above 7%**: an inefficient portfolio carries specific risk on top.

      **g.** Fair return from the SML: $6\% + 0.5(5.33\%) = 8.67\%$. The share was priced to return 12%, more than it should, so it is too cheap: **its price will rise** until its expected return falls to 8.67%.

      See [[Lesson_09-Capital Market Line]] and [[Lesson_10-Security Market Line & CAPM]].
    related_terms: ["capital-market-line", "security-market-line", "beta", "market-portfolio"]
  - id: "q12"
    title: "Q12 — NPV, IRR and payback for three projects"
    text: |
      | | Year 0 | Year 1 | Year 2 | Year 3 |
      |---|---|---|---|---|
      | Project A | −8,000 | 9,600 | | |
      | Project B | −10,000 | | 12,996 | |
      | Project C | −5,000 | | | 6,655 |

      The cost of capital is 8%.

      - **a.** Compute NPV, IRR and payback period (PP) for each project.
      - **b.** If the projects are **not** mutually exclusive, what ranking criterion applies and what is the optimal policy?
      - **c.** If they **are** mutually exclusive?
    solution: |
      **a.**

      | | NPV at 8% | IRR | Payback |
      |---|---|---|---|
      | A | $-8{,}000 + 9{,}600/1.08 = 888.89$ | 20% | 1 year |
      | B | $-10{,}000 + 12{,}996/1.08^2 = 1{,}141.98$ | 14% | 2 years |
      | C | $-5{,}000 + 6{,}655/1.08^3 = 282.95$ | 10% | 3 years |

      **b.** Independent projects, no budget limit: take **every project with NPV > 0**, so **A, B and C**.

      **c.** Mutually exclusive: take the **highest NPV**, **project B**, even though A has the higher IRR and faster payback.
    related_terms: ["net-present-value", "internal-rate-of-return"]
---

> Part of: [[Financial Management]] · 3 hours, two formula sheets, calculator and Excel allowed · CAPM assumptions hold throughout · round to two decimals

> [!success] Official solution
> Every answer here comes from the lecturer's official solution ([question paper](/papers/fundamentals-of-finance/2025-moed-a.pdf) · [official solution](/papers/fundamentals-of-finance/2025-moed-a-solution.pdf)). The step-by-step explanations and the reasons each wrong option fails are written for this site.

> [!note] Option order
> The official solution always lists the correct answer as option **a**. The options are shuffled here so the position gives nothing away.

**Part A** (Q1 to Q10) is multiple choice; **Part B** (Q11 and Q12) is open, with working required. The lecturer worked Q1 and Q2 again in the last class, see [[Lesson_11-Final Tutorial|Lesson 11]].
