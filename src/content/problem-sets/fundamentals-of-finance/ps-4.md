---
title: "HW4"
subject: fundamentals-of-finance
official_solution: "/papers/fundamentals-of-finance/ps-4-official-solution.pdf"
tags:
  - financial-management
  - effective-interest-rate
  - irr
  - fees
  - solutions
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Same stated rate, different compounding.** You borrow \$100k, repaid after one year, at a 12% stated rate. Find the effective annual rate when the 12% is compounded (1) annually, (2) quarterly, (3) monthly.
    solution: |
      The effective cost depends on how the stated 12% is compounded.

      | Case | Compounding | Effective rate |
      |---|---|---|
      | 1 | annual | 12.00% |
      | 2 | quarterly | $(1+0.12/4)^4-1 =$ **12.55%** |
      | 3 | monthly | $(1+0.12/12)^{12}-1 =$ **12.68%** |

      > [!tip] More frequent compounding means a higher effective cost
      > Same headline rate, but the lender collects interest sooner and compounds it. The effective rate is the IRR of the actual cash flows.
    related_terms: ["effective-interest-rate", "stated-rate", "rate-conversion"]
  - id: "2"
    text: |
      **Fees baked into the effective rate.** A \$50k loan, repaid after 2 months, has a stated rate of 12% (monthly, so 1% per month), plus a \$1,000 upfront fee and a \$500 closing fee paid at repayment. Find the effective annual borrowing cost.
    solution: |
      Interest over the two months is $50{,}000(1.01^2 - 1) = 1{,}005$, so the amount repaid at month 2 is $50{,}000 + 1{,}005 + 500 = 51{,}505$. Net received at the start is $49{,}000$. The return over the two months is

      $$
      \frac{51{,}505}{49{,}000}-1 = 5.11\%
      $$

      A year has six 2-month periods, so annualised:

      $$
      (1.0511)^6-1 = \boxed{34.87\%}
      $$

      > [!warning] Fees devastate the effective rate
      > A "12%" loan becomes a ~35% effective borrowing cost once fees are included and the principal is reduced. **Always compute the effective rate from net cash received vs total repaid**, not the quoted rate.
    related_terms: ["effective-interest-rate", "internal-rate-of-return", "stated-rate"]
  - id: "3"
    text: |
      **Quarterly loan with commission.** A loan is drawn in tranches at 12% and 15% annual rates, plus a 2% quarterly commission. Build the quarterly cash flows and find the effective quarterly and annual rates.
    solution: |
      Build the quarterly cash flows and take the IRR.

      - Effective **quarterly** rate $= \text{IRR} = 5.56\%$
      - Effective **annual** rate:

      $$
      (1.0556)^4-1 = \boxed{24.17\%}
      $$
    related_terms: ["effective-interest-rate", "internal-rate-of-return", "rate-conversion"]
  - id: "4"
    text: |
      **Lump sum vs instalments: find the indifference rate.** You owe a \$1,000 tax bill. **Option 1:** pay now with a 10% discount, so \$900. **Option 2:** pay six bi-monthly instalments of \$166.67.

      At what discount rate are you indifferent between the two options?
    solution: |
      The present value of Option 2 depends on the discount rate, while Option 1 is fixed at \$900.

      ![](/images/fundamentals-of-finance/hw4-pv-indifference.png)

      | $r$ | PV of instalments | vs \$900 cash |
      |---|---|---|
      | 4% | $908.64 | instalments dearer, so **pay cash** |
      | 6% | $868.73 | instalments cheaper, so **instalments** |

      > [!success] Indifference rate is about 4.42%
      > Below about 4.42% the PV of the instalments exceeds the \$900 cash price (pay cash). Above it, spreading payments is cheaper. Found by Goal-Seek, setting PV(instalments) = 900.
    related_terms: ["present-value", "annuity", "discount-rate", "internal-rate-of-return"]
---

*Related: [[Lesson_03-Rate Conversion, Effective Rates & EAC]] · [[Lesson_01-Time Value of Money]]*
