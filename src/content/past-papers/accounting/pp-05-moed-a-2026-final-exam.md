---
title: "Moed A 2026 — Final Exam (Official Solutions)"
label: "2026 Moed A"
topics: "SaaS adjusting entries & Rule of 40, SAFE & anti-dilution, Black-Scholes inputs, True/False"
type: past-paper
status: official-solution
exam: "Moed A 20.07.2026"
course: "Fundamentals of Accounting (5462)"
instructor: "Eran Iohan"
semester: 2
year: 2026
source_doc: /papers/accounting/moed-a-2026-exam.pdf
tags:
  - accounting
  - past-paper
  - official-solution
  - adjusting-entries
  - income-statement
  - quick-ratio
  - rule-of-40
  - safe
  - anti-dilution
  - black-scholes
  - revenue-recognition
aliases:
  - Moed A 2026
  - Accounting Moed A 2026
  - Moad A Final Exam
subject: accounting
in_scope: true
questions:
  - id: q1
    title: "Q1 — SaaSFlow Ltd: adjusting entries, income statement, Quick Ratio & Rule of 40 (40 pts)"
    text: |
      You founded **SaaSFlow Ltd.**, a cloud-based project management platform for startup founders. Below is the **trial balance at 31 December 2025, before the adjustments** in the additional information.

      | Account | Debit (NIS) | Credit (NIS) |
      |---|---:|---:|
      | Cash | 450,000 | |
      | Accounts Receivable | 120,000 | |
      | Prepaid Insurance | 24,000 | |
      | Office Equipment | 80,000 | |
      | Accrued Expenses | | 150,000 |
      | Common Stock (1 NIS par) | | 10,000 |
      | Retained Earnings | | 292,000 |
      | Subscription Revenue | | 600,000 |
      | Cost of Revenue | 78,000 | |
      | Marketing Expense | 180,000 | |
      | R&D Expense | 120,000 | |
      | **Total** | **1,052,000** | **1,052,000** |

      **Additional information at year-end:**

      1. The Prepaid Insurance balance represents a **24-month policy signed on 1 July 2025**.
      2. Subscription Revenue includes **30,000 NIS collected in advance** from a client for software updates to be completely engineered and shipped in **February 2026**.
      3. On **1 January 2023** the company took a bank loan of **600,000 NIS**. The terms mandate **3 equal annual principal repayments of 200,000 NIS** every 31 December. The contract has an **8% annual interest rate**, paid concurrently with the principal payments. *Note: the 2025 loan transaction has not yet been recorded.*
      4. The Office Equipment balance represents **100,000 NIS equipment bought on 1 January 2023**, to be depreciated over **10 years** with zero residual value.
      5. Corporate tax rate is **25%**.
      6. Your current EBITDA margin is calculated using your **adjusted** operational results. Year-over-year (YoY) revenue growth is **50%**.

      **Required:**
      1. Pass the necessary **adjusting journal entries**.
      2. Calculate **Net Income** and draft the **2025 Income Statement** (clearly indicating Gross Profit, EBITDA and Operating Income).
      3. Calculate the operational **Quick Ratio** and the **Rule of 40** using your adjusted figures. Is the company healthy by venture-capital benchmarks? Explain why.
    solution: |
      > Official solution (Moed A 2026), re-laid-out as journal entries. Theory: [[Session 2 - Accounting Fundamentals]] (cut-off accounts) and [[Session 5 - Financial Statements Analysis]] (ratios, Rule of 40).

      ### 1. Adjusting journal entries

      | Adjustment | Debit (→) | Credit (→) | Calculation |
      |---|---|---|---|
      | **(a)** Amortise prepaid insurance | G&A (insurance) expense 6,000 · **I/S** | Prepaid Insurance 6,000 · **B/S** | 24,000 ÷ 24 months = 1,000/month × 6 months (Jul-Dec) |
      | **(a)** Reclassify the long-term part | Prepaid, long-term 6,000 · **B/S** | Prepaid, short-term 6,000 · **B/S** | Remaining 18,000: 12 months of 2026 are current (12,000), the 6 months of 2027 are non-current (6,000) |
      | **(b)** Advance from client | Subscription Revenue 30,000 · **I/S** | Advances from clients (deferred revenue) 30,000 · **B/S** | Delivery is in Feb 2026, so it is **not 2025 revenue** |
      | **(c)** 2025 loan interest | Interest expense 16,000 · **I/S** | Cash 16,000 · **B/S** | 200,000 outstanding × 8% |
      | **(d)** 2025 depreciation | G&A (depreciation) expense 10,000 · **I/S** | Accumulated depreciation 10,000 · **B/S** | 100,000 ÷ 10 years. It is office equipment, so it sits in G&A |
      | **(e)** Corporate tax | Tax expense 40,000 · **I/S** | Accrued expenses (tax payable) 40,000 · **B/S** | Pre-tax income 160,000 × 25% |

      > [!tip] Two things the official solution relies on
      > **Equipment:** the question's trial balance shows 80,000 (net book value). The official solution splits it into cost 100,000 and accumulated depreciation (20,000) for 2023 and 2024. **Loan principal:** because the trial balance has no loan balance, the official solution records **no entry for the 200,000 principal** and books only the interest.

      > [!warning] Flag on the official loan treatment
      > The question says the 2025 loan transaction is "not yet recorded", and the loan terms include a 200,000 principal repayment on 31 December 2025. The official solution still leaves **cash at 434,000**: only the 16,000 interest comes out. If the principal repayment really left the bank account, cash would be 234,000 and the Quick Ratio would change. We keep the **official** figures (they are what the marking scheme uses) and flag the ambiguity.

      ### 2. Income Statement for the year ended 31 December 2025 (NIS)

      > [!example] SaaSFlow Ltd. — Income Statement 2025
      > | | Amount |
      > |---|---:|
      > | Revenue (600,000 − 30,000 deferred) | 570,000 |
      > | Cost of Revenue | (78,000) |
      > | **Gross Profit** | **492,000** |
      > | Research & Development | (120,000) |
      > | Selling & Marketing | (180,000) |
      > | General & Administrative (6,000 insurance + 10,000 depreciation) | (16,000) |
      > | Total operating expenses | (316,000) |
      > | **Operating Income** | **176,000** |
      > | Interest expense | (16,000) |
      > | **Income before taxes** | **160,000** |
      > | Tax on income (25%) | (40,000) |
      > | **NET INCOME** | **120,000** |
      > | | |
      > | **EBITDA** = Operating income 176,000 + depreciation 10,000 | **186,000** |
      > | EBITDA margin = 186,000 ÷ 570,000 | **32.63%** |

      > [!note] A label to watch
      > The official sheet labels the 492,000 line "Gross Revenue"; it is **gross profit** (revenue minus cost of revenue).

      ### 3. Quick Ratio and Rule of 40

      **Quick Ratio** (liquid assets over current liabilities; inventory and prepaids are excluded):

      $$\text{Quick Ratio} = \frac{\text{Cash} + \text{Accounts Receivable}}{\text{Current liabilities}} = \frac{434{,}000 + 120{,}000}{150{,}000 + 40{,}000 + 30{,}000} = \frac{554{,}000}{220{,}000} \approx 2.52$$

      Current liabilities are accrued expenses 150,000, tax payable 40,000 and advances from clients 30,000.

      **Rule of 40** = YoY revenue growth + EBITDA margin:

      $$50\% + 32.63\% = 82.63\%$$

      > [!tip] Verdict: healthy
      > **Rule of 40 = 82.63%**, far above the 40% benchmark investors look for: the company grows fast **and** is profitable at the EBITDA level. A **Quick Ratio of 2.52** means liquid assets cover short-term obligations about 2.5 times, so the company is well funded. Both measures are healthy by venture-capital standards.
    related_terms:
      - prepaid-expenses
      - deferred-income
      - deferred-revenue
      - depreciation
      - accrued-expenses
      - income-statement
      - ebitda
      - quick-ratio
      - rule-of-40
  - id: q2
    title: "Q2 — SAFE, valuations & anti-dilution (15 pts)"
    text: |
      You plan to raise a **Seed round**. Your cap table initially has **1,000,000 common shares** held by the founders.

      1. On **1 March 2025** you sign a **SAFE** with an angel investor for **250,000 NIS** at a **4,000,000 NIS valuation cap** or a **30% discount**. Conversion is triggered by the next round that sets a valuation.
      2. In **December 2025** a venture capital fund agrees to lead your **Series Preferred A** round, investing **1,000,000 NIS** at a **9,000,000 NIS pre-money valuation**. This investment triggers the SAFE conversion.

      **Required:**
      1. Define the difference between **pre-money** and **post-money** valuation. Calculate your **post-money valuation** after the institutional round.
      2. Explain why an angel investor **prefers a valuation cap** in a SAFE over an uncapped note.
      3. If your Series A term sheet contains a **Full Ratchet** anti-dilution clause versus a **Weighted Average** clause, which gives **heavier protection** to investors in a future down-round? How does this affect you as a founder?
    solution: |
      > Official solution (Moed A 2026). Theory: [[Session 3 - Raising Debt and Capital]] (SAFE, valuations) and [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] (anti-dilution).

      ### 1. Pre-money vs post-money

      - **[[Pre-Money Valuation]]** is the agreed value of the startup **before** the cash from the current round. It reflects the existing team, technology and traction.
      - **[[Post-Money Valuation]]** is the value **immediately after** the round closes: the new starting point for the equity structure.

      $$\text{Post-money} = 9{,}000{,}000 + 1{,}000{,}000 = 10{,}000{,}000 \text{ NIS}$$

      > [!note] What this official figure does and does not include
      > The official answer is the definitional one: pre-money plus the new cash. It does **not** add the shares the SAFE converts into, and the question does not ask for the SAFE conversion, so there is no clash with the course's SAFE pricing convention (price the new round on the **pre-SAFE** share count). The illustration at the end shows that convention applied to these numbers.

      ### 2. Why an angel prefers a valuation cap

      A **valuation cap** protects the angel from being diluted into a tiny stake if the startup scales fast before the next priced round.

      - **The mechanism:** the cap is a ceiling on the valuation used to convert the early investment into shares. If the Series A pre-money (9,000,000) is far **above the cap** (4,000,000), the SAFE converts at the **lower cap price**, giving the angel a much larger stake per NIS than the Series A investors get.
      - **The risk of an uncapped note:** with no cap (or a discount only), the earliest and riskiest investor converts on nearly the **same basis as later investors** (less a small discount), which severely limits their upside on a breakout success.

      > [!tip] Cap and discount: the investor gets the better of the two
      > A [[SAFE]] with both terms converts at whichever gives the investor the **lower price per share**. Here the cap is the stronger term because the round is priced far above it (see the illustration below).

      ### 3. Full Ratchet vs Weighted Average

      **Full Ratchet gives the heavier protection.**

      - **Full Ratchet:** in a down-round (new shares sold below the price the Series A paid) the investor's **conversion price drops instantly to the new, lower price**, ignoring how much money was raised or how many shares were issued.
      - **Weighted Average:** takes into account the **size and volume** of the down-round, so the adjustment is diluted accordingly and is much gentler.

      **Impact on the founder:** Full Ratchet is **extremely punitive**. In a down-round it triggers massive, disproportionate dilution for founders and employees, because the investor receives a large block of compensating shares to lower their average cost. The founders' stake is squeezed hard, which can destroy their motivation and control. See [[Anti-Dilution]].

      ### Illustration: the SAFE conversion on these numbers

      > [!warning] AI-written illustration, not official.
      > The exam does not ask for this. It is added so you can see the SAFE conversion, using the course's confirmed method: the new investor's price is **pre-money divided by the shares outstanding before the SAFE converts**.

      | Step | Calculation | Result |
      |---|---|---:|
      | Series A price per share | 9,000,000 ÷ 1,000,000 (pre-SAFE shares) | 9.00 NIS |
      | SAFE price at the discount | 9.00 × (1 − 30%) | 6.30 NIS |
      | SAFE price at the cap | 4,000,000 ÷ 1,000,000 | **4.00 NIS** (lower, so the cap wins) |
      | SAFE shares | 250,000 ÷ 4.00 | **62,500** |
      | VC shares | 1,000,000 ÷ 9.00 | **111,111** |

      | Shareholder | Shares | Ownership |
      |---|---:|---:|
      | Founders (common) | 1,000,000 | 85.2% |
      | Angel (SAFE converted) | 62,500 | 5.3% |
      | VC (Series A) | 111,111 | 9.5% |
      | **Total** | **1,173,611** | **100%** |
    related_terms:
      - safe
      - valuation-cap
      - pre-money-valuation
      - post-money-valuation
      - anti-dilution
      - cap-table
      - preferred-stock
  - id: q3
    title: "Q3 — Black-Scholes inputs and option value (15 pts)"
    text: |
      A company used a **Black-Scholes** calculator to determine the fair value of **Employee Stock Options (ESOs)** granted to its employees.

      For each input below, indicate how an **increase** in its value (all else equal) affects the **option value**: **Increase / Decrease / Unchanged**, and briefly justify.

      - Spot Price (S)
      - Exercise Price (K)
      - Period in Years (T)
      - Risk-Free Rate (r)
      - Volatility (σ)
    solution: |
      > Official solution (Moed A 2026). Theory: [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] ([[Black-Scholes Model]]).

      | Input | Effect of an increase | Official justification |
      |---|:--:|---|
      | **Spot price (S)** | **Increase** | The higher today's share price, the more likely the option ends up **in the money** (share price above strike), which raises its value now |
      | **Exercise price (K)** | **Decrease** | A higher strike makes it harder for the share price to climb above it, so the potential payout and the option's value fall |
      | **Period in years (T)** | **Increase** | A longer life gives the share more time to move, raising the chance of a big upward swing and boosting the option's **time value** |
      | **Risk-free rate (r)** | **Increase** | Holding the option is like owning the share with borrowed money: a higher rate raises the cost of carrying the share and lowers the present value of the strike you will pay, so the option is worth more |
      | **Volatility (σ)** | **Increase** | The holder has **unlimited upside but a floor of zero** (the most they lose is the option), so wilder swings add upside without adding downside |

      > [!tip] One to remember
      > Only the **exercise price** pushes the value **down**. The other four inputs push it **up**. Volatility is the one students most often get backwards: for an option, more risk means more value.
    related_terms:
      - black-scholes-model
      - stock-options
      - vesting
  - id: q4
    title: "Q4 — True or False and explain (30 pts)"
    text: |
      Give a concise **2-to-3 sentence** explanation for each statement. (3 points each.)

      1. "If you sign an agreement with third-party software developers for **100,000 NIS** during December 2025 to build core features for your main product, and the majority of the work will take place in 2026, the full 100,000 NIS must be expensed on your 2025 Income Statement."
      2. "Declaring a dividend instantly drains a company's cash accounts and simultaneously reduces Retained Earnings on the exact day of declaration."
      3. "External independent auditors assume ultimate legal and financial responsibility for any material misstatements or fraudulent entries within an entrepreneur's corporate financial reports."
      4. "Under ASC 606 / IFRS 15, if a sales representative signs a standard software contract but attaches a 'side letter' granting the customer a hidden 60-day penalty-free cancellation right, the full contract value can still be recognized as revenue on the day of signing."
      5. "A high inventory turnover ratio coupled with an excellent current ratio means a firm is completely safe from short-term liquidity bottlenecks and cash crunches."
      6. "Filing an institutional Prospectus during an IPO process carries severe legal and criminal penalties for corporate officers if material disclosures or operational risks are omitted or falsified."
      7. "If a company issues Preferred Shares that contain an unconditional mandatory redemption clause requiring the firm to buy back the shares for cash in 2030, this capital must be classified strictly inside Shareholders' Equity on the Balance Sheet."
      8. "Under the matching principle, when a company writes off a specific customer's 15,000 NIS, two-years-old overdue balance as a bad debt, the company's total Net Income for that period immediately drops by 15,000 NIS."
      9. "If your SaaS company has a Monthly Recurring Revenue (MRR) YoY growth rate of 35% and an adjusted EBITDA margin of 10%, your company meets the 'Rule of 40' health standard commonly looked at by venture capital investors."
      10. "When a company repurchases its own ordinary shares back from the open market, these are classified as Treasury Shares, which mathematically act as a negative contra-equity account that reduces total Shareholders' Equity."
    solution: |
      > Official answers and explanations (Moed A 2026), lightly condensed. The **explanation** earns the marks, not the True/False alone.

      1. **FALSE.** Under [[Accrual Accounting|accrual]] and matching, an expense belongs to the period in which the services are actually **consumed**. Most of the work happens in 2026, so expensing all 100,000 NIS in 2025 breaks those principles. Cost is recognised as the work is performed through 2026.

      2. **FALSE.** Declaring a dividend immediately **reduces Retained Earnings** and creates a current liability (**Dividends Payable**). The cash only leaves on the **payment date**, so declaration does not drain cash that day.

      3. **FALSE.** Responsibility for preparing the statements and their truthfulness rests with **management and the board**. The external auditor only audits and gives an **independent opinion** on whether the statements are free of material misstatement; the auditor does not absorb the company's legal or operational liabilities.

      4. **FALSE.** A contract exists only if both parties are committed to perform. A hidden penalty-free 60-day cancellation right is **[[Variable Consideration|variable consideration]]** and means control has not substantively transferred. The seller must apply the **constraint** and cannot recognise the revenue until the 60-day risk window closes. See [[ASC 606]].

      5. **FALSE.** Good ratios do not make a firm "completely safe". A long **customer collection period** (high receivables) or immediate cash debt repayments can still cause a severe cash squeeze, which neither ratio guarantees against.

      6. **TRUE.** A prospectus is a legally binding public filing meant to protect investors with full transparency. Omitting key risks or falsifying figures breaks securities law and carries **civil liability and potential criminal prosecution** for the executives who sign it. See [[IPO]].

      7. **FALSE.** By **substance over form**, an unconditional mandatory cash redemption is a binding obligation to pay cash out, so it acts like **debt**. It must be classified as a **liability** (or in the mezzanine section), not as equity. See [[Preferred Stock]].

      8. **FALSE.** Under the **allowance method**, bad debt expense was estimated and booked in the period of the sale (matching). The later write-off of a specific 15,000 NIS debt reduces **Accounts Receivable and the Allowance for Doubtful Accounts** together. It is a balance-sheet-only entry with **no effect on net income** in the write-off period.

      9. **TRUE.** Rule of 40 = YoY growth + profit margin = 35% + 10% = **45%**, which exceeds the 40% benchmark. See [[Rule of 40]].

      10. **TRUE.** [[Treasury Shares]] are the cash a company paid to buy back its own shares. In equity they are a **negative contra-equity** account, reducing both the shares outstanding and total shareholders' equity.

      > [!warning] AI-written note, not official.
      > Statement 1: the official answer rests on matching. A related point students sometimes raise is that development of a product the company will own could also be considered for **capitalisation** as an intangible asset rather than expensing; the exam answer does not go there, so stick to the official reasoning.
    related_terms:
      - accrual-accounting
      - matching-principle
      - variable-consideration
      - asc-606
      - preferred-stock
      - treasury-shares
      - rule-of-40
      - ipo
      - current-ratio
---

> [!info] About this paper
> The **real Moed A exam of 20 July 2026** (Fundamentals of Accounting 5462, instructor Eran Iohan): **Q1 (40)**, **Q2 & Q3 (15 each)**, **Q4 (30)**, 3 hours, calculator allowed, no formula sheet. The solutions below follow the **official solution** released with the exam; where the official working is ambiguous it is flagged in a callout. Reveal each answer with **Show solution**.
>
> Downloads: [exam (PDF)](/papers/accounting/moed-a-2026-exam.pdf) · [official solution (PDF)](/papers/accounting/moed-a-2026-official-solution.pdf)

<!--questions-->

## How the marks map to the syllabus

| Question | Topic | Sessions |
|---|---|---|
| Q1 | Adjusting entries (prepaids, deferred revenue, loan interest, depreciation, tax), income statement, Quick Ratio, Rule of 40 | [[Session 2 - Accounting Fundamentals]], [[Session 5 - Financial Statements Analysis]] |
| Q2 | SAFE, pre/post-money, valuation cap, anti-dilution | [[Session 3 - Raising Debt and Capital]], [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] |
| Q3 | Black-Scholes inputs | [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] |
| Q4 | Concepts across the whole course | all sessions |

## Related Notes

- [[Accounting]] — subject hub
- [[Session 9 - Recap]] — 13 worked exam-style exercises
- [[Sample Final A]] · [[Sample Final B]] · [[Sample Final C]] · [[Sample Final D]] — the practice mocks
