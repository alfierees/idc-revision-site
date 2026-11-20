---
title: "Franchise FCF NPV, NPV vs IRR, Loan Effective Rate, Amortisation & Growing Cash Flows (2025 Moed B)"
type: past-paper
status: worked-solution
exam: "Fundamentals of Finance, Moed B (2025), reconstructed"
semester: 2
year: 1
course: "Financial Management & Finance"
instructor: unknown
tags:
  - financial-management
  - fundamentals-of-finance
  - past-paper
  - worked-solution
  - free-cash-flow
  - npv
  - irr
  - effective-rate
  - loans
  - amortization
  - growing-annuity
aliases:
  - Finance Moed B 2025
  - Fundamentals of Finance 2025B
  - PP02 Finance
subject: fundamentals-of-finance
in_scope: true
---

# Franchise FCF NPV, NPV vs IRR, Loan Effective Rate, Amortisation & Growing Cash Flows (2025 Moed B)

> Part of: [[Financial Management]]
> **Fundamentals of Finance, Moed B (2025).** Open-ended calculation questions, no multiple choice.
> Builds on: [[Lesson_06-Capital Budgeting & Free Cash Flow]], [[Lesson_02-Perpetuities, NPV & IRR]], [[Lesson_03-Rate Conversion, Effective Rates & EAC]], [[Lesson_05-The Four Loan Types]], [[Lesson_01-Time Value of Money]]
> Practice: [[HW_07-Free Cash Flow & Project NPV]], [[HW_02-NPV, IRR & Project Choice]], [[HW_04-Effective Interest Rates]], [[HW_06-Loans & Amortization]]

> [!warning] Whole paper reconstructed, no official key
> The question paper for this sitting is **not on disk**. The only source is a student's Excel workbook (`2025B.xlsx`) with short labels, inputs and formulas. Every question below is **reconstructed** from those cells, and every answer is **AI-written**, re-derived from the reconstructed question. The workbook is a student's own working, **not** an official solution. Check each question wording against the real paper before relying on any of it.

> [!info] Question numbering
> Only the sheet `Question 1` is clearly Q1. The other four tabs are named `1`, `2`, `Sheet4` and `7`. Two tabs cannot both be "question 1", and nothing in the cells says `2` and `7` are question numbers 2 and 7, so I **numbered them in sheet order** and show the tab name in each heading.
>
> | This note | Workbook sheet | Topic |
> |---|---|---|
> | Q1 | `Question 1` | Franchise project: free cash flow and NPV |
> | Q2 | `1` | Projects A, B, C: NPV and IRR |
> | Q3 | `2` | Loan with fees: effective annual rate |
> | Q4 | `Sheet4` | Equal-payment loan and amortisation table |
> | Q5 | `7` | Growing outflows against periodic inflows: NPV |

> [!info] AI-solved questions
> **Q1, Q2, Q3, Q4, Q5** are all AI-solved from the workbook. Q1 also corrects a workbook error (the `NPV` function), see below.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Build [[Free Cash Flow]] with [[Depreciation]] tax shield, [[Working Capital]] and tax on losses, then [[Net Present Value]] | [[Lesson_06-Capital Budgeting & Free Cash Flow]], [[HW_07-Free Cash Flow & Project NPV]] |
| Q2 | [[Net Present Value]] and [[Internal Rate of Return]] of three projects; ranking conflict, [[NPV Profile]] | [[Lesson_02-Perpetuities, NPV & IRR]], [[HW_02-NPV, IRR & Project Choice]] |
| Q3 | All-in cost of a loan with fees: IRR of the borrower's cash flows, then [[Rate Conversion]] to an [[Effective Interest Rate]] | [[Lesson_03-Rate Conversion, Effective Rates & EAC]], [[HW_04-Effective Interest Rates]] |
| Q4 | Equal-payment [[Mortgage]]: PMT, [[Amortization]] table, [[Outstanding Balance]] | [[Lesson_05-The Four Loan Types]], [[HW_06-Loans & Amortization]] |
| Q5 | Irregular cash flows with a [[Growing Annuity]] of costs, discounted to NPV | [[Lesson_01-Time Value of Money]], [[Lesson_02-Perpetuities, NPV & IRR]] |

> [!tip] Intuition: the one move behind each question
> - Q1: discount **cash**, not profit. Subtract depreciation for tax, add it back, and treat working capital as cash tied up and later released.
> - Q2: NPV says how much value a project adds; IRR is the discount rate at which it adds nothing. They can rank projects differently.
> - Q3: the real cost of a loan is the IRR of what you actually receive and pay, fees included. Fees raise it above the stated rate.
> - Q4: each payment is fixed; interest is rate times opening balance and the rest repays principal.
> - Q5: lay the cash flows on a timeline, net them year by year, discount. Excel's `NPV` starts at $t=1$.

---

## Q1 — Franchise project: free cash flow and NPV (sheet `Question 1`)

> [!warning] Reconstructed question: the question paper is not on disk. This wording was inferred from the worked spreadsheet; check it against the real paper.

A company is considering buying a franchise (cost **10,000 at $t=0$**, depreciated straight-line over **2 years**, so 5,000 per year) to sell devices alongside its screens. The discount rate is $r = 7\%$ and the tax rate is **20%**. Units in the workbook are not stated beyond a "(thousand)" label next to the purchase price.

| | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Expected device sales (units) | 9,000 | 7,000 | 14,000 |
| Devices purchased (units) | 15,000 | 5,000 | 10,000 |

Purchase price per device **2**, sales price per device **3**. Further information:

- Inventory holding cost is **0.15 per unit**, charged on inventory balances of **6,000 units at $t=0$** and **4,000 units at $t=1$** (as entered in the workbook).
- Each year, **25%** of expected device sales are lost screen sales; the expected loss (in thousands) equals 25% of the expected device sales.
- Working capital at the start of each year: inventory = 1/3 of that year's cost of purchases, receivables = 30% of that year's sales, suppliers (payables) = 10% of that year's cost of purchases. Working capital is fully recovered at the end of year 3.
- Taxes are symmetric: a negative EBIT gives a tax saving.

**a.** Compute the free cash flow for $t = 0,1,2,3$. **b.** Compute the NPV and decide whether to buy the franchise.

> [!warning] AI-written answer, not official. Check before relying on it.

### a. Free cash flow

Use the FCF build from [[Lesson_06-Capital Budgeting & Free Cash Flow]]:

$$
FCF_t = EBIT_t (1-\tau) + Dep_t - CAPEX_t - \Delta WC_t
$$


**Step 1: revenue and costs.** Sales $= 3 \times$ units: 27,000, 21,000, 42,000. The "cost of goods sold" row is the **cost of purchases** $= 2 \times$ units bought: 30,000, 10,000, 20,000 (the workbook expenses purchases as they are made). Lost screen sales: 2,250, 1,750, 3,500.

**Step 2: working capital** (balance at the start of each year, from that year's flows):

| | $t=0$ (for year 1) | $t=1$ (for year 2) | $t=2$ (for year 3) | $t=3$ |
|---|---|---|---|---|
| Inventory $=\tfrac13\times$ purchases | 10,000 | 3,333.33 | 6,666.67 | 0 |
| Receivables $=30\%\times$ sales | 8,100 | 6,300 | 12,600 | 0 |
| Suppliers $=10\%\times$ purchases | 3,000 | 1,000 | 2,000 | 0 |
| **Working capital** | **15,100** | **8,633.33** | **17,266.67** | 0 |
| **Cash flow from WC** (opening minus closing) | $-15{,}100$ | $+6{,}466.67$ | $-8{,}633.33$ | $+17{,}266.67$ |

**Step 3: the FCF table.**

| | $t=0$ | $t=1$ | $t=2$ | $t=3$ |
|---|---|---|---|---|
| Sales | | 27,000 | 21,000 | 42,000 |
| Cost of purchases | | $-30{,}000$ | $-10{,}000$ | $-20{,}000$ |
| Gross profit | | $-3{,}000$ | 11,000 | 22,000 |
| Inventory holding cost | $-900$ | $-600$ | | |
| Lost screen sales | | $-2{,}250$ | $-1{,}750$ | $-3{,}500$ |
| Depreciation | | $-5{,}000$ | $-5{,}000$ | |
| **EBIT** | $-900$ | $-10{,}850$ | 4,250 | 18,500 |
| Tax at 20% (negative EBIT gives a saving) | $+180$ | $+2{,}170$ | $-850$ | $-3{,}700$ |
| **NOPAT** | $-720$ | $-8{,}680$ | 3,400 | 14,800 |
| Add back depreciation | | $+5{,}000$ | $+5{,}000$ | |
| Cash flow from working capital | $-15{,}100$ | $+6{,}466.67$ | $-8{,}633.33$ | $+17{,}266.67$ |
| Franchise acquisition (CAPEX) | $-10{,}000$ | | | |
| **Free cash flow** | **$-25{,}820$** | **2,786.67** | **$-233.33$** | **32,066.67** |

![[PP02_q1_fcf_profile.png]]

Holding cost: $6{,}000 \times 0.15 = 900$ and $4{,}000 \times 0.15 = 600$. Depreciation: $10{,}000 / 2 = 5{,}000$ in years 1 and 2.

### b. NPV and decision

Discount each flow by $(1.07)^t$, with $t=0$ **not** discounted:

| $t$ | FCF | $FCF/(1.07)^t$ |
|---|---|---|
| 0 | $-25{,}820.00$ | $-25{,}820.00$ |
| 1 | 2,786.67 | 2,604.36 |
| 2 | $-233.33$ | $-203.80$ |
| 3 | 32,066.67 | 26,175.95 |

$$
NPV = -25{,}820 + \frac{2{,}786.67}{1.07} - \frac{233.33}{1.07^2} + \frac{32{,}066.67}{1.07^3} = \boxed{2{,}756.51}
$$


In Excel: `=C18 + NPV(C2, D18:F18)`, the $t=0$ flow added outside the function (see [[Lesson_02-Perpetuities, NPV & IRR]]).

**Decision:** $NPV > 0$, so the franchise adds value and should be bought.

> [!warning] Workbook value differs: 2,576.18 is not the NPV at $t=0$
> The workbook computes `=NPV(C2, C18:F18)` $= 2{,}576.18$. Excel's `NPV` treats the **first value as $t=1$**, so it discounts the $t=0$ flow of $-25{,}820$ by one period too many. The result is the NPV one year early: $2{,}576.18 \times 1.07 = 2{,}756.51$. The correct NPV at $t=0$ is **2,756.51**. The decision (invest) is unchanged. (Sheet `1` and sheet `7` use the function correctly.)

> [!info] The `#N/A` in cell G17
> Column G in this sheet is a set of **annotation cells**: `="<--"&FORMULATEXT(F17)` prints the formula of the cell to its left. `F17` (franchise cost in year 3) is **empty**, so `FORMULATEXT` has no formula to show and returns `#N/A`. It is a label only: no cash-flow, NPV or tax cell refers to column G, and the cash-flow row sums `C13:F17` only. So the `#N/A` **does not change any number**. The empty `F17` is also right: the franchise is bought only at $t=0$.

> [!warning] Modelling points to check against the real paper (do not change the decision)
> 1. **Purchases vs cost of goods sold.** The workbook expenses *purchases* (30,000, 10,000, 20,000) and also builds inventory into working capital. A textbook approach expenses cost of goods *sold* ($2 \times$ units sold: 18,000, 14,000, 28,000; same 60,000 total) and lets working capital carry the inventory. Using units sold with the same working-capital rules gives an NPV of about 3,709.16. Still positive.
> 2. **Timing of holding cost.** The 6,000 and 4,000 unit balances are the stocks left at the **end** of years 1 and 2 ($15{,}000 - 9{,}000 = 6{,}000$; $6{,}000 + 5{,}000 - 7{,}000 = 4{,}000$), i.e. at $t=1$ and $t=2$, yet the workbook charges their cost at $t=0$ and $t=1$. Charging 900 at $t=1$ and 600 at $t=2$ gives an NPV of about 2,832.96. Still positive.
> 3. **Tax at $t=0$.** The $+180$ saving at $t=0$ assumes the loss can be used immediately, consistent with the symmetric-tax rule in [[Lesson_06-Capital Budgeting & Free Cash Flow]].
>
> All three variants keep $NPV > 0$, so "buy the franchise" is robust.

> [!tip] Intuition
> The project looks bad in year 1 (costs 30,000 against sales of 27,000) because you stock up before you sell. The working capital you tie up at $t=0$ comes back at the end, which is why year 3 carries a 32,000 cash flow.

---

## Q2 — Projects A, B, C: NPV and IRR (sheet `1`)

> [!warning] Reconstructed question: the question paper is not on disk. This wording was inferred from the worked spreadsheet; check it against the real paper.

Three projects have the following cash flows. The discount rate is $r = 5\%$.

| Project | $t=0$ | $t=1$ | $t=2$ | $t=3$ |
|---|---|---|---|---|
| A | $-1{,}000$ | 100 | 100 | 1,100 |
| B | $-700$ | 400 | 300 | 200 |
| C | $-2{,}000$ | 0 | 0 | 2,500 |

**a.** Compute the NPV and the IRR of each project. **b.** Rank the projects by each criterion and say which you would choose if only one can be taken.

(Part b is inferred: the sheet only computes NPV and IRR side by side, which is the set-up for a ranking comparison.)

> [!warning] AI-written answer, not official. Check before relying on it.

### a. NPV and IRR

$$
NPV = CF_0 + \sum_{t=1}^{3}\frac{CF_t}{(1.05)^t}, \qquad IRR: \; NPV(IRR) = 0
$$


In Excel: `=NPV(5%, CF1:CF3) + CF0` and `=IRR(CF0:CF3)`. The workbook does this correctly.

**Project A.**

$$
NPV_A = -1000 + \frac{100}{1.05} + \frac{100}{1.05^2} + \frac{1100}{1.05^3} = -1000 + 95.24 + 90.70 + 950.22 = 136.16
$$


A pays 10% a year on a 1,000 outlay and returns the 1,000 at the end, so the IRR is exactly **10.00%**.

**Project B.**

$$
NPV_B = -700 + \frac{400}{1.05} + \frac{300}{1.05^2} + \frac{200}{1.05^3} = -700 + 380.95 + 272.11 + 172.77 = 125.83
$$


There is no closed form for B's IRR (a cubic), so use `IRR`: **15.60%**.

**Project C.** One inflow, so a closed form exists:

$$
NPV_C = -2000 + \frac{2500}{1.05^3} = -2000 + 2159.59 = 159.59, \qquad IRR_C = \left(\frac{2500}{2000}\right)^{1/3} - 1 = 7.72\%
$$


| Project | NPV at 5% | IRR |
|---|---|---|
| A | 136.16 | 10.00% |
| B | 125.83 | 15.60% |
| C | 159.59 | 7.72% |

### b. Ranking and choice

- By **NPV**: C (159.59) > A (136.16) > B (125.83).
- By **IRR**: B (15.60%) > A (10.00%) > C (7.72%). The ranking is **exactly reversed**.

![[PP02_q2_npv_profiles.png]]

All three have $NPV > 0$ and $IRR > 5\%$, so each is worth doing on its own. If only one can be chosen (mutually exclusive), use **NPV**: it measures the value added in money terms, so choose **C**.

> [!tip] Intuition: why the two criteria disagree
> IRR is a **rate of return**, blind to scale: B earns a high rate on a small 700 outlay, C a lower rate on a large 2,000 outlay but for all 3 years. NPV counts the value created in money terms, and C creates the most. The profiles also cross: C has the steepest line because its cash comes last, so it wins at low discount rates and loses at high ones. (My own check: the crossover rates are about 5.65% for A against B, 5.71% for C against B and 5.74% for C against A, all just above 5%, so C's lead at 5% is narrow.)

> [!tip] If capital were rationed
> [[Profitability Index]] (NPV per unit invested) would favour B: $125.83/700 = 0.180$ against $0.136$ for A and $0.080$ for C. This is only relevant if the question mentions a budget limit; the sheet does not.

---

## Q3 — Loan with fees: effective annual rate (sheet `2`)

> [!warning] Reconstructed question: the question paper is not on disk. This wording was inferred from the worked spreadsheet; check it against the real paper.

A bank lends **50,000** for **10 months** at a stated (nominal) annual rate of **12%**, i.e. **1% per month**. Interest is paid at the end of each month and the principal is repaid at the end of month 10. The bank charges a fee of **1,000** at the start, deducted from the amount you receive, and a further **1,200** at the end, paid with the final repayment.

**a.** What are the borrower's cash flows? **b.** What is the effective monthly rate, and what is the effective annual rate (EAR)?

> [!todo] Input missing from source
> The workbook enters the 1,200 final fee with **no label**, so what it represents (closing fee, early-repayment fee) is unknown. I treated it as a fee paid at month 10, as the cell sits there.

> [!warning] AI-written answer, not official. Check before relying on it.

### a. Cash flows (borrower's view, months 0 to 10)

| Month | Flow |
|---|---|
| 0 | $+50{,}000 - 1{,}000 = +49{,}000$ |
| 1 to 9 | $-500$ each (interest $= 1\% \times 50{,}000$) |
| 10 | $-500 - 50{,}000 - 1{,}200 = -51{,}700$ |

### b. Effective rates

The monthly cost $i$ solves

$$
49{,}000 = \sum_{t=1}^{9}\frac{500}{(1+i)^t} + \frac{51{,}700}{(1+i)^{10}}
$$


In Excel: `=IRR(B8:L8)` gives $i = \boxed{1.4410\%}$ per month. Check: at this $i$ the present value of the payments equals 49,000 (error below $10^{-10}$).

Convert to an annual effective rate ([[Lesson_03-Rate Conversion, Effective Rates & EAC]]):

$$
EAR = (1 + 0.014410)^{12} - 1 = \boxed{18.73\%}
$$


> [!tip] Intuition: why 18.73% and not 12%
> Without fees the loan costs 1% a month, an EAR of $1.01^{12} - 1 = 12.68\%$ (already above the stated 12% because of monthly compounding). The fees mean you receive only 49,000 but still owe 50,000 plus 1,200, which pushes the monthly cost from 1% to 1.44%. Do **not** multiply 1.44% by 12 (that gives 17.29%): rates compound.

> [!info] Workbook leftovers
> Cell `B10` holds `r_guess = 0.1846`, which no formula uses (a leftover starting guess for solving by hand). The workbook's 18.73% matches my result.

---

## Q4 — Equal-payment loan and amortisation table (sheet `Sheet4`)

> [!warning] Reconstructed question: the question paper is not on disk. This wording was inferred from the worked spreadsheet; check it against the real paper.

A loan of **15,000** is taken at an annual interest rate of **10%** and repaid in **5 equal annual payments**.

**a.** Find the annual payment. **b.** Build the amortisation table (interest, principal repaid and ending balance each year).

> [!warning] AI-written answer, not official. Check before relying on it.

### a. The payment

For an equal-payment loan ([[Lesson_05-The Four Loan Types]]):

$$
E = \frac{rL}{1 - (1+r)^{-n}} = \frac{0.10 \times 15{,}000}{1 - 1.1^{-5}} = \frac{1{,}500}{0.379079} = \boxed{3{,}956.96}
$$


In Excel: `=PMT(10%, 5, -15000)`. (The workbook writes `PMT(B2,B3,B1)` with the loan positive, so Excel returns $-3{,}956.96$ and the table flips the sign.)

### b. Amortisation table

Each year: interest $= r \times$ opening balance, principal $= E -$ interest, ending balance $=$ opening $-$ principal.

| Year | Opening balance | Interest | Principal repaid | Payment | Ending balance |
|---|---|---|---|---|---|
| 1 | 15,000.00 | 1,500.00 | 2,456.96 | 3,956.96 | 12,543.04 |
| 2 | 12,543.04 | 1,254.30 | 2,702.66 | 3,956.96 | 9,840.38 |
| 3 | 9,840.38 | 984.04 | 2,972.92 | 3,956.96 | 6,867.46 |
| 4 | 6,867.46 | 686.75 | 3,270.22 | 3,956.96 | 3,597.24 |
| 5 | 3,597.24 | 359.72 | 3,597.24 | 3,956.96 | 0.00 |

![[PP02_q4_amortisation_split.png]]

**Checks.**
- The final balance is 0 (to rounding), so the payment is right.
- The balance after year 3 equals the present value of the two remaining payments: $3{,}956.96 \times \frac{1 - 1.1^{-2}}{0.10} = 6{,}867.46$. ✓
- Total interest paid $= 5 \times 3{,}956.96 - 15{,}000 = 4{,}784.81$, which equals the sum of the interest column.
- Excel per-year split: `IPMT(10%, t, 5, -15000)` and `PPMT(10%, t, 5, -15000)`.

> [!tip] Intuition
> The payment is level, but early on most of it is interest (1,500 of 3,957 in year 1) because the balance is high. As the balance falls the interest share shrinks and the principal share grows.

---

## Q5 — Growing outflows against periodic inflows: NPV (sheet `7`)

> [!warning] Reconstructed question: the question paper is not on disk. This wording was inferred from the worked spreadsheet; check it against the real paper.

A project receives an inflow of **20,000 every 3 years**, at the ends of years **2, 5, 8 and 11**. It has an outflow of **6,000 at the end of year 1**, **growing at 3% a year**, paid at the end of every year from year 1 to year 11 (so 6,180 in year 2, and so on). The discount rate is $r = 10\%$. Find the NPV.

> [!warning] AI-written answer, not official. Check before relying on it.

### Method 1: net cash flow each year, then `NPV`

Outflow in year $t$ is $6{,}000 \times 1.03^{t-1}$ (6,000; 6,180; 6,365.40; ...; 8,063.50 in year 11). Net each year, then discount:

| Year | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Inflow | | 20,000 | | | 20,000 | | | 20,000 | | | 20,000 |
| Outflow | 6,000 | 6,180 | 6,365.40 | 6,556.36 | 6,753.05 | 6,955.64 | 7,164.31 | 7,379.24 | 7,600.62 | 7,828.64 | 8,063.50 |
| **Net** | $-6{,}000$ | 13,820 | $-6{,}365.40$ | $-6{,}556.36$ | 13,246.95 | $-6{,}955.64$ | $-7{,}164.31$ | 12,620.76 | $-7{,}600.62$ | $-7{,}828.64$ | 11,936.50 |

In Excel: `=NPV(10%, C8:M8)`. Here the function is used **correctly**: the first value in the range is year 1 and the $t=0$ flow is zero.

### Method 2: closed forms (cross-check)

**Outflows**, a [[Growing Annuity]] with first payment 6,000 at $t=1$, $g = 3\%$, 11 payments:

$$
PV_{out} = \frac{6{,}000}{r-g}\left[1 - \left(\frac{1+g}{1+r}\right)^{11}\right] = \frac{6{,}000}{0.07}\left[1 - \left(\frac{1.03}{1.10}\right)^{11}\right] = 44{,}128.67
$$


**Inflows**, four payments discounted one by one:

| Year | 2 | 5 | 8 | 11 |
|---|---|---|---|---|
| $20{,}000/1.1^t$ | 16,528.93 | 12,418.43 | 9,330.15 | 7,009.88 |

$$
PV_{in} = 45{,}287.38
$$


(Equivalently, treat the 3-yearly payments as an annuity at the 3-year rate $1.1^3 - 1 = 33.1\%$: $20{,}000 \times \frac{1 - 1.331^{-4}}{0.331} \times 1.1 = 45{,}287.38$, the factor 1.1 shifting the valuation date because the first payment is at year 2, not year 3.)

$$
NPV = 45{,}287.38 - 44{,}128.67 = \boxed{1{,}158.71}
$$


The workbook shows 1,158.71 with no label; it agrees with both methods. Since $NPV > 0$, the project is worth doing at 10%.

> [!tip] Intuition
> Costs arrive every year and keep growing, so they are an annuity that rises. Revenue arrives in lumps every third year. The lumps are large enough that, discounted, they just beat the stream of costs, leaving a small positive NPV.

---

## Summary

> [!success] Key takeaways
> - **FCF** $= EBIT(1-\tau) + Dep - CAPEX - \Delta WC$; depreciation is a tax shield, working capital is cash tied up then released. Use symmetric tax on losses.
> - Excel's **`NPV` starts at $t=1$**: write `=CF0 + NPV(r, CF1:CFn)`. The workbook's Q1 NPV of 2,576.18 forgot this; the correct value is 2,756.51.
> - A `#N/A` from `FORMULATEXT` on an empty cell is just a label error and changes nothing.
> - **NPV and IRR can rank projects in opposite order**; for mutually exclusive projects trust NPV.
> - The all-in cost of a loan with fees is the **IRR of the borrower's cash flows**, then convert to an annual effective rate with $(1+i)^{12} - 1$.
> - Equal-payment loan: $E = rL / (1-(1+r)^{-n})$, `PMT`; interest $= r \times$ opening balance.
> - For growing costs use the [[Growing Annuity]] formula, or net each year and use `NPV`.

## Related Notes

- [[Lesson_06-Capital Budgeting & Free Cash Flow]] · [[Lesson_02-Perpetuities, NPV & IRR]] · [[Lesson_03-Rate Conversion, Effective Rates & EAC]] · [[Lesson_05-The Four Loan Types]] · [[Lesson_01-Time Value of Money]]
- [[HW_07-Free Cash Flow & Project NPV]] · [[HW_02-NPV, IRR & Project Choice]] · [[HW_04-Effective Interest Rates]] · [[HW_06-Loans & Amortization]]
- [[Financial Management]]
