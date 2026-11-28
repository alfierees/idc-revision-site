---
title: "Numbers Sheet"
subject: legal-and-tax
type: reference
description: "Every number and formula the Legal & Tax MCQs test, on one page: Section 102 rates, the 24-month clock and the filing deadlines, exercise windows on leaving, GDPR articles and fines, IP terms, company-law sections, and the cap-table formulas with worked examples."
course: Legal and Tax Aspects of Entrepreneurship
semester: 1
year: 2
order: 2
pinned: true
tags:
  - legal-and-tax
  - exam-prep
  - formula-sheet
aliases:
  - Legal and Tax Numbers Sheet
  - Legal and Tax Formula Sheet
---

> The course is mostly words, but about a third of the practice MCQs turn on a number: a rate, a deadline, a section or a share count. These are the lecture values. Where a practice paper's key uses a different number, the lecture value is the one to write (see the [[Past Paper Topic Map]]).

## ESOP and Section 102 (Lecture 6)

| Rule | Value |
|---|---|
| Option term | usually **10 years** from grant |
| Vesting | usually **4 years**, **1-year cliff**, then monthly (25% at the cliff) |
| **Capital Gain Track** rate | **25%**, if held **24 months from the grant** (private company) |
| Ordinary Income Track, Non-Trustee Track, or a Capital Gain sale before 24 months | marginal rate, **up to about 59%** |
| Company deduction | **Ordinary Income Track only** |
| Trustee | Capital Gain and Ordinary Income tracks; **not** the Non-Trustee track |
| Tax event, Capital Gain Track | the **sale** (or release from the trustee); **exercise is not taxed** |
| **Section 3(i)** (consultants, controlling shareholders, service providers) | taxed **at exercise**, as ordinary income |
| Public company on the Capital Gain Track | value at grant is ordinary income, growth after grant is 25% |

**The setup clock**

| Step | Deadline |
|---|---|
| Board adopts the plan and approves a trustee; trustee files the plan with the Tax Authority | — |
| First grant | at least **30 days** after the filing |
| Board's grant approval deposited with the trustee | within **45 days** |
| Signed option agreements deposited with the trustee | within **90 days** |

**Leaving the company**

| Reason | Unvested options | Vested options |
|---|---|---|
| Without cause | expire | exercise within **3 months** |
| Death or disability | expire | exercise within **12 months** |
| For cause (fraud, wilful misconduct) | expire | **expire immediately** |

> [!example] Lecture 6: the tax on a gain
> 10,000 options at a \$1 strike, sold at \$11. Gain $= 10{,}000 \times (11 - 1) = \$100{,}000$.
> - Held 24 months from grant, Capital Gain Track: tax $0.25 \times 100{,}000 = \$25{,}000$, keep \$75,000.
> - Sold earlier: marginal rate, up to $0.59 \times 100{,}000 = \$59{,}000$, keep \$41,000.

```graph
type: legal-esop-timeline
```

## Cap tables (Lecture 8)

$$
\text{Ownership \%} = \frac{\text{shares held}}{\text{total shares}}
$$

$$
\text{Post-money} = \text{Pre-money} + \text{Investment}
\qquad
\text{Investor \%} = \frac{\text{Investment}}{\text{Post-money}}
\qquad
\text{Post-money} = \frac{\text{Investment}}{\text{Investor \%}}
$$

$$
\text{Price per share} = \frac{\text{Pre-money}}{\text{pre-round fully diluted shares}}
\qquad
\text{New shares for a target } p = \frac{S \times p}{1 - p}
$$

| Worked example | Working | Answer |
|---|---|---|
| \$2.5M for 25% (Lecture 8) | post $= 2.5 / 0.25$; pre $= 10 - 2.5$ | post **\$10M**, pre **\$7.5M** |
| \$3M for 20% (practice set Q26, Q27) | post $= 3 / 0.20$; pre $= 15 - 3$ | post **\$15M**, pre **\$12M** |
| 2% grant on 1,000,000 shares (Lecture 8) | $1{,}000{,}000 \times 0.02 / 0.98$ | **20,408** shares (20,000 gives only 1.96%) |
| 2% grant on 500,000 shares (Q25) | $500{,}000 \times 0.02 / 0.98$ | **10,204** shares |
| 10% holder, 1,000,000 shares, 250,000 new (Q24) | $100{,}000 / 1{,}250{,}000$ | **8%** |
| \$7.5M pre-money, 1,000,000 pre-round shares (Q28) | $7{,}500{,}000 / 1{,}000{,}000$ | **\$7.50** a share |

- **Issued** shares: those actually held. **Fully diluted**: issued + options (granted **and** the ungranted pool) + warrants + convertible notes. Investors negotiate on fully diluted.
- An option pool created **pre-money** is counted in the pre-round shares, so it dilutes the **existing holders only**. Post-money, the investor shares the dilution.
- The naive grant ($S \times p$) always under-delivers: asking for 20% naively gives only 16.7%.

```graph
type: legal-cap-table
```

## The other numbers

| Area | Number | What it is |
|---|---|---|
| GDPR | **25 May 2018** | in force |
| GDPR | **€20M or 4%** of global annual turnover, **whichever is higher** | top fine |
| GDPR | **Art. 3** | extraterritorial scope |
| GDPR | **Art. 5** / **Art. 6** | the principles / the **six** lawful bases |
| GDPR | Art. 22 | automated decisions (*SCHUFA*) |
| GDPR | **Art. 25** / **Art. 30** / **Art. 35** | privacy by design and default / record of processing (RoPA) / **DPIA** |
| GDPR | Arts. 37–39 | the DPO |
| GDPR | **Art. 45 / 46 / 47** | adequacy decision / **SCCs** / **BCRs** |
| GDPR | **8** | data-subject rights in Lecture 7 |
| Copyright | **life + 70 years**, no registration | software code |
| Patent | **20 years from filing**, registered | novelty, inventive step, industrial use |
| Trade secret | **no time limit**, lost on disclosure | needs reasonable efforts to keep secret |
| Companies Law | **s.4** separate legal person; **s.6** piercing the veil | |
| Companies Law | **s.15** Articles are a contract; **s.18** mandatory content; s.19 optional | |
| Companies Law | **s.57** general meeting appoints the board; **s.92** board appoints the CEO | |
| Companies Law | ss.188, 190 | shares' rights; dividends only from profits, solvency test |
| Contracts Law | **s.12** good faith in negotiation; **s.39** in performance | |
| Contracts Law | **s.25** interpretation; s.26 gaps; **s.30** illegal contract void | |
| Land Law | **s.8** | real estate needs writing |
| Sale Law | **s.34** | market overt, four conditions |
| Tax | **s.46** | donation credit to an amuta |
| Partnership | max **20** partners | |
| SLA | **99.9%** | typical uptime |
| Non-compete | — | generally **unenforceable** in Israel unless it protects a real trade secret or is paid for |
