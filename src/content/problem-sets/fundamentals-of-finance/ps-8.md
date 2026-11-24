---
title: "HW8"
subject: fundamentals-of-finance
official_solution: "/papers/fundamentals-of-finance/ps-8-official-solution.pdf"
source_doc: "/papers/fundamentals-of-finance/ps-8-bonds-questions.pdf"
tags:
  - financial-management
  - bond
  - bond-pricing
  - zero-coupon-bond
  - solutions
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Straight bond above and below par.** A bond has face value 1,000 and pays a 10% annual coupon (100 a year) for 10 years.

      Price the bond when the market yield is **14%**, and say whether it trades at a premium or a discount.
    solution: |
      Annual coupon $= 10\% \times 1{,}000 = 100$. Cash flows: 100 at the end of each of years 1 to 10, plus the 1,000 face value at year 10.

      $$
      P = \sum_{t=1}^{10} \frac{100}{1.14^t} + \frac{1{,}000}{1.14^{10}} \approx 791.36
      $$

      Spreadsheet: `NPV(14%, CFs)`.

      > [!success] Discount
      > The yield (14%) is above the coupon rate (10%), so the bond is cheap: it trades at a **discount** to its 1,000 face value.
    related_terms: ["bond", "coupon", "face-value", "yield-to-maturity", "present-value", "discount-rate"]
  - id: "1b"
    text: |
      Same bond as 1a (face value 1,000, 10% annual coupon). **Two years after issue** (right after the coupon) the market yield has dropped to **8%**. Price it, and say whether it trades at a premium or a discount.
    solution: |
      The vault note and the spreadsheet give a price of **1,114.93**:

      $$
      P = \sum_{t=1}^{8} \frac{100}{1.08^t} + \frac{1{,}000}{1.08^{8}} \approx 1{,}114.93
      $$

      Two years after issue, 8 annual coupons remain, so 8 cash flows is right; the official solution also gives 1,115.

      > [!success] Premium
      > The yield (8%) is below the coupon rate (10%), so the bond is dear: it trades at a **premium** to face value.

      > [!tip] The core rule, confirmed
      > Coupon 10%. At a 14% yield the bond is cheap (discount); at an 8% yield it is dear (premium). Price and yield move inversely, which is the price-yield curve from [[Lesson_07-Bond Pricing]].
    related_terms: ["bond", "coupon", "face-value", "yield-to-maturity", "present-value", "discount-rate"]
  - id: "2"
    text: |
      **Semi-annual coupons.** A bond has face value 1,000 and a 6% annual coupon paid semi-annually, with 8 years to maturity. The annual yield is 8%. Find its price.
    solution: |
      Coupon per period $= 6\% \times 1{,}000 \times \tfrac{1}{2} = 30$, paid every 6 months, so $n = 8 \times 2 = 16$ periods.

      Convert the annual yield to a **semi-annual effective** rate:

      $$
      r_{\text{semi}} = (1.08)^{1/2} - 1 \approx 3.923\%
      $$

      $$
      P = \sum_{t=1}^{16} \frac{30}{(1.03923)^t} + \frac{1{,}000}{(1.03923)^{16}} \approx 891.83
      $$

      > [!warning] Don't just halve the annual yield
      > Use the **effective** semi-annual rate $(1+r)^{1/2} - 1$, not $r/2$, when the quoted 8% is an effective annual yield. If 8% were a *stated* APR you would use $8\%/2 = 4\%$. Read the question carefully. (See [[Lesson_03-Rate Conversion, Effective Rates & EAC]].)

      > [!success] Answer
      > $P \approx 891.83$, a discount, since the 6% coupon is below the 8% yield.
    related_terms: ["bond", "coupon", "face-value", "rate-conversion", "effective-interest-rate", "stated-rate", "present-value"]
  - id: "3"
    text: |
      **Solve for the coupon from a given price.** A bond with face value 100 and 10 years to maturity trades at a price of 87.54. Its annual yield is 10.25%, and coupons are paid semi-annually. Find the coupon.
    solution: |
      Convert the annual yield to a semi-annual effective rate:

      $$
      r_{\text{semi}} = (1.1025)^{1/2} - 1 = 5\%, \qquad n = 10 \times 2 = 20 \text{ periods}
      $$

      Set the price equal to the present value of an annuity of coupons $C$ plus the face value, and solve for $C$ (in the spreadsheet, Goal Seek):

      $$
      87.54 = \frac{C}{0.05}\left(1 - 1.05^{-20}\right) + \frac{100}{1.05^{20}}
      $$

      $$
      C \approx 4.00 \text{ per period}
      $$

      Two coupons a year, so the annual coupon is $2 \times 4 = 8$ on a face value of 100.

      > [!success] Answer
      > Coupon about 4 per half-year, i.e. an **8% annual coupon rate**. Check: with $C = 4$ the formula gives about 87.54.
    related_terms: ["bond", "coupon", "face-value", "yield-to-maturity", "annuity", "rate-conversion"]
  - id: "5"
    text: |
      **Inflation-adjusted bond.** A CPI-linked bond has face value 100 and a 4% (real) coupon. It has 6 years to run, the real yield is 4% and inflation is 5%. The coupon of 4 due today is included in the price. Find its nominal price.
    solution: |
      Price the **real** cash flows at the **real** rate, then gross up by inflation to get the nominal price.

      Real cash flows: 4 now, 4 at the end of each of years 1 to 5, and 104 (coupon plus face value) at year 6.

      $$
      P_{\text{real}} = 4 + \sum_{t=1}^{5} \frac{4}{1.04^t} + \frac{104}{1.04^{6}} = 4 + 100 = 104
      $$

      Because the real coupon equals the real yield, the bond is worth its face value of 100 ex-coupon, plus the 4 due today.

      $$
      P_{\text{nominal}} = P_{\text{real}} \times (1 + \pi) = 104 \times 1.05 = 109.20
      $$

      > [!tip] Real first, then nominal
      > CPI-linked bonds are valued in real terms (real coupons at the real rate). The final step converts the real value to a dollar price using realised inflation, which mirrors [[Lesson_04-Inflation, Real Rates & Expected Inflation]].

      > [!success] Answer
      > $P_{\text{nominal}} = 109.20$
    related_terms: ["bond", "coupon", "face-value", "real-interest-rate", "inflation", "fisher-equation", "present-value"]
---

*Related: [[Lesson_07-Bond Pricing]] · [[Lesson_04-Inflation, Real Rates & Expected Inflation]]*

HW8 has no source PDF: it was drafted from the vault note and the Excel workbook. The source numbers skip question 4.
