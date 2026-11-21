---
title: "HW6"
subject: fundamentals-of-finance
tags:
  - financial-management
  - loan
  - amortization
  - mortgage
  - refinancing
  - solutions
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Equal-payment loan.** A $150,000 loan at 10% per year is repaid in 5 equal annual installments.

      Find the level payment, the outstanding balance after the 3rd installment, and the principal repaid in the last payment.
    solution: |
      Level payment $= \texttt{PMT}(10\%, 5, 150{,}000) = \$39{,}569.62$.

      > [!example] Key answers
      > - Outstanding balance after the 3rd installment $= -\texttt{PV}(10\%, 2, 39{,}569.62) = \boxed{\$68{,}674.55}$ (PV of the 2 remaining payments).
      > - Principal in the **last** payment $= \$35{,}972.38$. Almost the whole final payment is principal, because interest has nearly vanished.
    related_terms: ["loan", "amortization", "outstanding-balance", "annuity", "present-value"]
  - id: "2"
    text: |
      **Mortgage with refinancing.** A $300,000 house is bought with a 20% down payment. The mortgage has a stated rate of 12% per year, compounded monthly, over 240 months.

      Find the monthly payment. Later, market rates fall to 10.8% (0.9% per month) and the borrower refinances. Find the loan's contractual (book) balance, its fair market value at the new rate over the remaining months, and the early-termination fee.
    solution: |
      Loan $= 240{,}000$, stated 12%/12 $= 1\%$ monthly, $n = 240$.

      $$
      \text{Monthly payment} = \texttt{PMT}(1\%, 240, -240{,}000) = \$2{,}642.61
      $$

      > [!example] Refinancing when rates fall to 10.8%
      > - **Fair market value** at the new 0.9% monthly rate over the remaining 120 months $= -\texttt{PV}(0.9\%, 120, 2{,}642.61) = \$193{,}427$.
      > - **Book value** (contractual balance, PV of the same 120 payments at 1%) $= \$184{,}191$.
      > - Early-termination fee $= \max(\text{fair} - \text{book},\, 0) = \$9{,}236$.

      > [!warning] Source note is inconsistent here
      > The vault note says the refinance is after 5 years, quotes a book balance of about \$232,000, and says the fee is 0 with the borrower benefiting. Those do not reconcile: after 60 payments 180 months remain, and the stated gap of about \$9,236 only appears with 120 months remaining (after 120 payments). The figures above use the 120-month numbers, which match the note's \$193,427 and \$9,236. Treat the timing and the fee direction as unverified against the original homework.

      > [!warning] Direction of the rate move decides who wins
      > When market rates have *fallen*, the loan is worth more to the bank than its book balance, so the early-termination fee $\max(\text{fair} - \text{book}, 0)$ bites and protects the **bank**. Always compare fair value with the book balance.
    related_terms: ["mortgage", "refinancing", "stated-rate", "outstanding-balance", "present-value", "amortization", "loan"]
  - id: "3"
    text: |
      **Equal-principal loan.** A $100,000 loan at 6% per year is repaid over 5 years with equal principal installments.

      Find the payment in each year and the outstanding balance after 3 years.
    solution: |
      Principal per year $= 100{,}000 / 5 = 20{,}000$. Payments fall from $\$26{,}000$ (year 1) to $\$21{,}200$ (year 5).

      Balance after 3 years is a straight-line decline:

      $$
      100{,}000 - 3 \times 20{,}000 = \boxed{\$40{,}000}
      $$

    related_terms: ["loan", "amortization", "outstanding-balance"]
  - id: "4"
    text: |
      **Interest-only loan, CPI-linked.** A $50,000 loan at 5% for 15 years is interest-only, with payments linked to CPI at 2% inflation.

      Describe the real and nominal interest and balance schedules.
    solution: |
      Interest-only: the principal stays at $\$50{,}000$ in real terms, and real interest is $\$2{,}500$ per year. But payments are **inflation-adjusted**, so the *nominal* interest grows each year:

      $$
      \text{Nominal interest}_t = 2{,}500 \times (1.02)^t
      $$

      $$
      \text{Nominal balance}_t = 50{,}000 \times (1.02)^t
      $$

      > [!tip] Real vs nominal amortization side by side
      > The **real** schedule looks like a flat interest-only loan (\$2,500 per year, balance \$50k). In **nominal** dollars both the interest payment and the outstanding balance inflate by $(1.02)^t$. By year 7 the nominal balance is about \$57,434. The CPI link shifts inflation risk onto the borrower's nominal payments.
    related_terms: ["loan", "bullet-loan", "cpi", "inflation", "real-interest-rate", "outstanding-balance"]
---

*Related: [[Lesson_05-The Four Loan Types]], [[Lesson_04-Inflation, Real Rates & Expected Inflation]]*

> [!success] Takeaways
> - Outstanding balance is the PV of remaining payments at the contract rate; the last payment is almost all principal.
> - Equal-principal balance declines linearly.
> - CPI-linked interest-only loans keep the *real* schedule flat but inflate the nominal interest and balance by $(1+\pi)^t$.
