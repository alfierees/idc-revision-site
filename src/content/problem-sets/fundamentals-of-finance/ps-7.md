---
title: "HW7"
subject: fundamentals-of-finance
tags:
  - financial-management
  - free-cash-flow
  - capital-budgeting
  - opportunity-cost
  - solutions
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Full FCF build with opportunity cost** (corporate tax 35%, discount rate $r = 10\%$, all amounts in USD, 5-year project).

      A project needs:

      - **Equipment:** 50,000 at $t=0$, depreciated straight-line over 5 years.
      - **Swamp B penalty:** 40,000 at $t=0$.
      - **Consulting fee:** 1,500 at $t=0$.
      - **Working capital:** 50,000 tied up at $t=0$; a further 10,000 is invested in year 4; 60,000 is recovered in year 5.
      - **Revenue:** 100,000 in year 1, growing 7% a year.
      - **Labour cost:** 50,000 in year 1, growing 6% a year.
      - **Opportunity cost** of using swamp B: 38,000 a year in years 1 to 5.

      Build the free cash flows, compute the NPV and decide whether to accept the project.
    solution: |
      Build FCF top-down: **EBIT, less tax, gives NOPAT; add back depreciation; then subtract working-capital investment and CAPEX.** (See [[Free Cash Flow]].)

      > [!example] The traps this question sets
      > - **Opportunity cost** of swamp B (38,000 a year) is a real cost even though no cash changes hands. It is the forgone alternative use, so it goes in EBIT and gets taxed like any other cost.
      > - **Depreciation** (50,000 / 5 = 10,000 a year) is subtracted for tax, then added back because it is not a cash flow.
      > - **Working capital:** the 50,000 at $t=0$ and the 10,000 in year 4 are outflows; the 60,000 recovered in year 5 is an inflow.
      > - The **penalty** is a $t=0$ cost that is tax-deductible: negative EBIT of 40,000 gives a tax credit of $0.35 \times 40{,}000 = 14{,}000$.
      > - The **consulting fee** is added to $t=0$ after tax in the source spreadsheet (no tax shield taken).

      | Item | $t=0$ | $t=1$ | $t=2$ | $t=3$ | $t=4$ | $t=5$ |
      |---|---|---|---|---|---|---|
      | Sales | 0 | 100,000 | 107,000 | 114,490 | 122,504.30 | 131,079.60 |
      | Labour cost | 0 | 50,000 | 53,000 | 56,180 | 59,550.80 | 63,123.85 |
      | Gross profit | 0 | 50,000 | 54,000 | 58,310 | 62,953.50 | 67,955.75 |
      | Depreciation | 0 | -10,000 | -10,000 | -10,000 | -10,000 | -10,000 |
      | Opportunity cost / penalty | -40,000 | -38,000 | -38,000 | -38,000 | -38,000 | -38,000 |
      | EBIT | -40,000 | 2,000 | 6,000 | 10,310 | 14,953.50 | 19,955.75 |
      | Tax at 35% | +14,000 | -700 | -2,100 | -3,608.50 | -5,233.73 | -6,984.51 |
      | NOPAT | -26,000 | 1,300 | 3,900 | 6,701.50 | 9,719.78 | 12,971.24 |
      | Add back depreciation | 0 | 10,000 | 10,000 | 10,000 | 10,000 | 10,000 |
      | Change in working capital | -50,000 | 0 | 0 | 0 | -10,000 | +60,000 |
      | Consulting fee | -1,500 | 0 | 0 | 0 | 0 | 0 |
      | CAPEX | -50,000 | 0 | 0 | 0 | 0 | 0 |
      | **Free cash flow** | **-127,500** | **11,300** | **13,900** | **16,701.50** | **9,719.78** | **82,971.24** |

      **NPV.** Discounting each cash flow by its own year:

      $$
      NPV = -127{,}500 + \frac{11{,}300}{1.1} + \frac{13{,}900}{1.1^2} + \frac{16{,}701.5}{1.1^3} + \frac{9{,}719.78}{1.1^4} + \frac{82{,}971.24}{1.1^5} \approx -35{,}034
      $$

      > [!warning] Spreadsheet figure differs
      > The source spreadsheet (and the vault note) report **-31,849**. That comes from `NPV(10%, t0:t5)` over all six cells, and Excel's `NPV` discounts the first cell by one period, so the $t=0$ outflow is wrongly discounted. Written correctly as $CF_0 + NPV(10\%,\ CF_{1..5})$ the answer is about **-35,034**. Both are negative, so the decision is the same.

      > [!success] Decision
      > NPV is negative, so **reject**. The opportunity cost and tax drag sink an otherwise positive-looking revenue stream.
    related_terms: ["free-cash-flow", "opportunity-cost", "working-capital", "depreciation", "net-present-value", "discount-rate", "capital-budgeting"]
  - id: "2"
    text: |
      **R&D project and the sunk-cost trap** (corporate tax 40%, $r = 10\%$, amounts as in the source workbook).

      A project involves:

      - **Final research investment:** 100,000, depreciated over 10 years.
      - **Equipment:** 25,000, depreciated over 10 years, no salvage value.
      - **Working capital:** 15,000, recovered at the end of the project.
      - **Sales:** 50,000 a year for 10 years.
      - **Operating costs:** 16,000 a year for 10 years.

      The firm has **already spent 300M** on this project so far. Compute the NPV of the remaining project and decide whether to continue.
    solution: |
      **Depreciation.** Total depreciable investment is $100{,}000 + 25{,}000 = 125{,}000$, so depreciation is $125{,}000 / 10 = 12{,}500$ a year (10,000 from research plus 2,500 from equipment).

      **Yearly operating cash flow (years 1 to 10):**

      | Item | Amount |
      |---|---|
      | Sales | 50,000 |
      | Operating costs | -16,000 |
      | Gross profit | 34,000 |
      | Depreciation | -12,500 |
      | EBIT | 21,500 |
      | Tax at 40% | -8,600 |
      | NOPAT | 12,900 |
      | Add back depreciation | +12,500 |
      | **Free cash flow** | **25,400** |

      **Time 0:** investment $-125{,}000$ and working capital $-15{,}000$, so $FCF_0 = -140{,}000$.

      **Year 10:** the 15,000 of working capital comes back, so $FCF_{10} = 25{,}400 + 15{,}000 = 40{,}400$.

      $$
      NPV = -140{,}000 + \sum_{t=1}^{10} \frac{25{,}400}{1.1^t} + \frac{15{,}000}{1.1^{10}} \approx +21{,}855
      $$

      > [!warning] The "300M already spent" framing
      > Prior sunk spending is **irrelevant**. Only the incremental future cash flows matter. Since the *marginal* NPV is positive, proceed despite the past spend.

      > [!success] Decision
      > NPV $\approx +21{,}855 > 0$, so **accept** (continue the project).
    related_terms: ["free-cash-flow", "depreciation", "working-capital", "net-present-value", "capital-budgeting", "opportunity-cost"]
  - id: "3"
    text: |
      **Machine replacement with tax shields** (corporate tax 40%, $r = 10\%$).

      Compare two machines:

      | Machine | Upfront cost | Life span | Annual maintenance cost | Sale price at end |
      |---|---|---|---|---|
      | Benzi | 110,000 | 11 years | 25,000 | 59,792 |
      | Yuddle | 210,000 | 14 years | 10,000 | none given |

      Use **after-tax** maintenance and the **depreciation tax shield** on the upfront cost, and compare the machines on a like-for-like basis given their different lifespans. Which machine should be bought?
    solution: |
      > [!warning] AI-written answer, not official. The homework workbook stops before the comparison, so check this before relying on it.

      **Assumptions:** straight-line depreciation to zero over each machine's life, maintenance paid at the end of each year, and Benzi's resale price fully taxed because its book value is zero by then.

      **Step 1: net annual cash flow.**

      | | Benzi | Yuddle |
      |---|---|---|
      | Annual depreciation | 10,000 | 15,000 |
      | After-tax maintenance | $-15{,}000$ | $-6{,}000$ |
      | Depreciation tax shield | $+4{,}000$ | $+6{,}000$ |
      | **Net annual cash flow** | **$-11{,}000$** | **0** |

      **Step 2: present value of each machine's costs.** The annuity factors at 10% are 6.4951 for 11 years and 7.3667 for 14 years.

      $$PV_{Benzi} = -110{,}000 - 11{,}000(6.4951) + \frac{59{,}792(1 - 0.4)}{1.1^{11}} \approx -168{,}872$$

      $$PV_{Yuddle} = -210{,}000 + 0 = -210{,}000$$

      **Step 3: equivalent annual cost,** because the lives differ.

      $$EAC_{Benzi} = \frac{168{,}872}{6.4951} \approx 26{,}000 \qquad EAC_{Yuddle} = \frac{210{,}000}{7.3667} \approx 28{,}507$$

      > [!success] Decision
      > **Choose Benzi.** It costs about 26,000 a year against 28,507 for Yuddle.

      > [!note] Does the resale assumption matter?
      > No. If the resale price is not taxed, Benzi's EAC is about 24,709. If you ignore the resale completely, it is about 27,936. Both are still below Yuddle's 28,507.
    related_terms: ["equivalent-annual-cost", "depreciation", "net-present-value", "discount-rate"]
---

*Related: [[Lesson_06-Capital Budgeting & Free Cash Flow]] · [[Lesson_03-Rate Conversion, Effective Rates & EAC]]*

HW7 has no source PDF: it was drafted from the vault note and the Excel workbook. Part 3 has no worked answer in the source (the workbook working is unfinished), so its answer here is AI-written and flagged.
