---
title: "Quick Self-Test"
subject: fundamentals-of-finance
type: self-test
description: "18 new exam-style questions with full working: annuities and growing streams, effective rates with fees, real returns and expected inflation, loan balances and prepayment fees, bond prices, project choice with PI and EAC, a free-cash-flow line, portfolio risk, the CML and the SML. Six are multiple choice, like Part A."
course: Fundamentals of Finance
instructor: Dr. Tal Mofkadi
semester: 2
year: 1
order: 6
tags:
  - fundamentals-of-finance
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · An ordinary annuity"
    text: |
      You will receive 2,000 at the end of each month for 3 years. The monthly rate is 0.5%. What is the stream worth today?
    solution: |
      $$
      PV = \frac{2{,}000}{0.005}\left[1 - \frac{1}{1.005^{36}}\right] = 65{,}742
      $$

      36 monthly payments at the monthly rate; the formula lands one month before the first payment, which is today.
  - id: "2"
    title: "2 · Rent paid in advance"
    text: |
      Rent of 1,000 is paid at the **start** of each month for 12 months. The monthly rate is 1%. What is its present value?
    options:
      - label: a
        text: |
          11,255
        why: |
          That treats the payments as end-of-month.
      - label: b
        text: |
          11,368
        correct: true
        why: |
          An annuity due: the ordinary PV times $1.01$.
      - label: c
        text: |
          12,000
        why: |
          That ignores discounting.
      - label: d
        text: |
          11,143
        why: |
          That divides by $1.01$ instead of multiplying.
    solution: |
      $1{,}000\,a_{\overline{12}|1\%} = 11{,}255$, and payments a month earlier are worth $\times1.01$: $11{,}368$. **Answer (b).**
  - id: "3"
    title: "3 · A growing salary"
    text: |
      A contract pays 10,000 at the end of year 1, growing 3% a year for 10 years in all. At 8%, what is it worth today?
    solution: |
      $$
      PV = \frac{10{,}000}{0.08 - 0.03}\left[1 - \left(\frac{1.03}{1.08}\right)^{10}\right] = 75{,}501
      $$
  - id: "4"
    title: "4 · Stated to effective"
    text: |
      A bank quotes 9% a year, compounded monthly. What is the effective annual rate, and the effective quarterly rate?
    solution: |
      Monthly rate $= 9\%/12 = 0.75\%$ (a stated rate is divided).

      Effective annual: $1.0075^{12} - 1 = 9.38\%$. Effective quarterly: $1.0075^3 - 1 = 2.27\%$.
  - id: "5"
    title: "5 · A loan with a fee"
    text: |
      You borrow 20,000 for 6 months at 1% a month, repaid in one payment at the end. A fee of 300 is paid when you take the loan. What is the effective annual rate?
    options:
      - label: a
        text: |
          12.68%
        why: |
          That is the rate without the fee.
      - label: b
        text: |
          13.68%
        why: |
          Adding a percentage point for the fee is not how fees work.
      - label: c
        text: |
          1.25%
        why: |
          That is the monthly rate, not annualised.
      - label: d
        text: |
          16.14%
        correct: true
        why: |
          Receive 19,700, repay 21,230 after 6 months: 1.255% a month.
    solution: |
      Receive $20{,}000 - 300 = 19{,}700$. Repay $20{,}000\times1.01^6 = 21{,}230.40$.

      $r_m = \left(\tfrac{21{,}230.40}{19{,}700}\right)^{1/6} - 1 = 1.255\%$, so $EAR = 1.01255^{12} - 1 = 16.14\%$. **Answer (d).**
  - id: "6"
    title: "6 · A real return"
    text: |
      A non-linked deposit paid 3% in a year when inflation was 4.5%. What was the real return?
    solution: |
      Non-linked means 3% is nominal. $\tfrac{1.03}{1.045} - 1 = -1.44\%$: purchasing power fell. (The approximation $3 - 4.5 = -1.5\%$ is close but not exact.)
  - id: "7"
    title: "7 · Expected inflation from two bonds"
    text: |
      Two 3-year government zero-coupon bonds, face 100: a CPI-linked one at 91.51 and a non-linked one at 83.96. What annual inflation does the market expect?
    solution: |
      Linked (real): $(100/91.51)^{1/3} - 1 = 3\%$. Non-linked (nominal): $(100/83.96)^{1/3} - 1 = 6\%$.

      Fisher: $1 + \pi^e = \tfrac{1.06}{1.03}$, so $\pi^e = 2.91\%$.
  - id: "8"
    title: "8 · A mortgage balance"
    text: |
      A 200,000 loan at 6% a year is repaid in 10 equal annual payments. What is the balance right after the fourth payment?
    options:
      - label: a
        text: |
          133,621
        correct: true
        why: |
          The PV of the six payments that are left.
      - label: b
        text: |
          120,000
        why: |
          That assumes equal principal, 20,000 a year.
      - label: c
        text: |
          91,306
        why: |
          That subtracts four whole payments, interest included.
      - label: d
        text: |
          142,448
        why: |
          That discounts the remaining payments at 4%, not the loan rate.
    solution: |
      $PMT = \tfrac{200{,}000}{a_{\overline{10}|6\%}} = 27{,}173.59$. After 4 payments, 6 remain: $27{,}173.59\,a_{\overline{6}|6\%} = 133{,}621$. **Answer (a).**
  - id: "9"
    title: "9 · The principal in the fifth payment"
    text: |
      Same loan. How much of the fifth payment is principal?
    solution: |
      Interest in payment 5 $= 6\%\times133{,}621 = 8{,}017$. Principal $= 27{,}174 - 8{,}017 = 19{,}156$.

      Check: in an equal-payment loan the principal part grows by $(1 + r)$ each time.
  - id: "10"
    title: "10 · A prepayment fee"
    text: |
      Same loan. Right after the fourth payment the borrower repays everything; the market rate for such loans is now 4%. What fee does the bank charge?
    options:
      - label: a
        text: |
          None, because the loan is being repaid in full
        why: |
          The bank loses an above-market loan, so it charges the difference.
      - label: b
        text: |
          142,448
        why: |
          That is the total to walk away, fee included.
      - label: c
        text: |
          8,826
        correct: true
        why: |
          Remaining payments at 4% minus at 6%.
      - label: d
        text: |
          2,672
        why: |
          That is two percentage points of the balance, which is not the rule.
    solution: |
      $$
      \text{Fee} = 27{,}173.59\left(a_{\overline{6}|4\%} - a_{\overline{6}|6\%}\right) = 142{,}448 - 133{,}621 = 8{,}826
      $$

      Rates **fell**, so the loan is worth more to the bank than its book balance. **Answer (c).**
  - id: "11"
    title: "11 · A premium bond"
    text: |
      A 5-year bond pays a 7% annual coupon on a face of 1,000. Similar bonds yield 5%. What is its price, and why is it above face value?
    solution: |
      $$
      P = 70\,a_{\overline{5}|5\%} + \frac{1{,}000}{1.05^5} = 1{,}086.59
      $$

      The coupon (7%) beats the market yield (5%), so buyers pay a **premium**.
  - id: "12"
    title: "12 · Semi-annual coupons"
    text: |
      A bond with face 100 pays a 6% coupon twice a year for 4 years. The effective annual yield is 8%. Price it.
    solution: |
      Coupon $= 100\times6\%/2 = 3$ per half-year, 8 coupons. Semi-annual yield $= 1.08^{1/2} - 1 = 3.923\%$ (root the effective rate, do not halve it).

      $$
      P = 3\,a_{\overline{8}|3.923\%} + \frac{100}{1.03923^8} = 93.77
      $$
  - id: "13"
    title: "13 · Two exclusive projects"
    text: |
      Project A: $-1{,}000$ now, $+1{,}300$ in one year. Project B: $-1{,}000$ now, $+1{,}500$ in two years. Cost of capital 10%. They are mutually exclusive. Which do you choose?
    options:
      - label: a
        text: |
          A, because its IRR is higher
        why: |
          IRR ranks exclusive projects badly.
      - label: b
        text: |
          A, because it pays back sooner
        why: |
          Payback ignores the value of B's larger receipt.
      - label: c
        text: |
          Both, since both have positive NPV
        why: |
          They are mutually exclusive.
      - label: d
        text: |
          B, because its NPV is higher
        correct: true
        why: |
          239.67 against 181.82.
    solution: |
      $NPV_A = -1{,}000 + 1{,}300/1.1 = 181.82$ (IRR 30%). $NPV_B = -1{,}000 + 1{,}500/1.21 = 239.67$ (IRR 22.5%). Highest NPV wins: **B**. **Answer (d).**
  - id: "14"
    title: "14 · A budget with partial projects"
    text: |
      Budget 500. Projects (investment, NPV): A (200, 60), B (300, 75), C (250, 80). Partial investment is allowed. What do you do, and what total NPV do you get?
    solution: |
      $PI$: A $0.30$, B $0.25$, C $0.32$. Rank by PI: C (250), then A (200), leaving 50 for B: $50/300 = 1/6$ of B.

      $NPV = 80 + 60 + 75/6 = 152.5$.
  - id: "15"
    title: "15 · Machines with different lives"
    text: |
      Machine X costs 10,000 and lasts 2 years; machine Y costs 15,000 and lasts 3 years. Each is replaced forever, they do the same job, and the rate is 10%. Which is cheaper?
    solution: |
      $EAC_X = 10{,}000/a_{\overline{2}|10\%} = 5{,}762$ a year. $EAC_Y = 15{,}000/a_{\overline{3}|10\%} = 6{,}032$ a year.

      **X** is cheaper per year of use, even though Y lasts longer.
  - id: "16"
    title: "16 · One line of free cash flow"
    text: |
      In year 2 a project has revenue 500, costs 200 and depreciation 100 (a 400 machine over 4 years); tax is 25%. The project's loan costs 30 in interest. At the end of year 2 the machine is sold for 250. What is the year-2 free cash flow?
    solution: |
      EBIT $= 500 - 200 - 100 = 200$; tax 50; NOPAT 150; $+$ depreciation 100: operating cash flow 250. The interest is **financing**: leave it out.

      Sale: book value $= 400 - 2\times100 = 200$, gain 50, tax 12.5. So $+250 - 12.5$.

      $FCF = 250 + 237.5 = 487.5$.
  - id: "17"
    title: "17 · Two stocks, negative correlation"
    text: |
      Half in stock A (SD 10%) and half in stock B (SD 20%), correlation $-0.5$. What is the portfolio's SD?
    options:
      - label: a
        text: |
          8.66%
        correct: true
        why: |
          The negative cross term cuts the variance to 0.0075.
      - label: b
        text: |
          15%
        why: |
          That is the weighted average of SDs, true only for $\rho = 1$.
      - label: c
        text: |
          11.18%
        why: |
          That drops the covariance term ($\rho = 0$).
      - label: d
        text: |
          5%
        why: |
          That is half the difference; only $\rho = -1$ with the right weights removes risk.
    solution: |
      $$
      \sigma_p^2 = 0.25(0.01) + 0.25(0.04) + 2(0.5)(0.5)(0.1)(0.2)(-0.5) = 0.0025 + 0.01 - 0.005 = 0.0075
      $$

      $\sigma_p = 8.66\%$. **Answer (a).**
  - id: "18"
    title: "18 · CML and SML"
    text: |
      $r_f = 3\%$, $E(r_m) = 9\%$, $\sigma_m = 15\%$. (a) What is the expected return of an efficient portfolio with SD 10%, and how is it invested? (b) A share has $\beta = 1.5$ and analysts expect it to return 13%. Is it fairly priced?
    solution: |
      **(a)** CML slope $= \tfrac{9 - 3}{15} = 0.4$. $E(r_p) = 3\% + 0.4\times10\% = 7\%$. $\sigma_p = x_m\sigma_m$ gives $x_m = 2/3$: two thirds in the market, one third risk-free.

      **(b)** SML: $3\% + 1.5(9\% - 3\%) = 12\%$. Expected 13% is above the line: the share is **underpriced** (buy it until the price rises).
---
