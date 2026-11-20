---
title: Employee Stock Option Plans (ESOP)
week: 6
semester: 1
year: 2
academic_year: "2025-26"
course: Legal and Tax Aspects of Entrepreneurship
lecture: "Session 6 — Employee Stock Option Plans (ESOP) & Section 102 of the Israeli Tax Ordinance"
instructor: "Guest lecture — Sarit Foox (Deputy Managing Director, IBI Capital); course convenor Dr. Yuval Reinfeld"
date: 2026-06-29
tags:
  - legal-and-tax
  - esop
  - stock-options
  - equity-compensation
  - section-102
  - israeli-tax
  - capital-gains
  - vesting
aliases:
  - Legal & Tax Session 6
  - ESOP
  - Employee Stock Option Plan
  - Stock Options
  - Equity Compensation
  - Section 102
  - Section 102 Capital Gain Track
subject: legal-and-tax
in_scope: true
---

# Employee Stock Option Plans (ESOP)

> Part of: [[Legal and Tax Aspects]] | Key concepts: [[ESOP]], [[Option (Security)]], [[Strike Price]], [[Vesting]], [[Section 102]], [[Capital Gains Tax]], [[Trustee]], [[Holding Period]], [[Section 3(i)]], [[Cause (Termination)]]

> [!abstract] Why this lecture matters
> A startup's scarcest resource is **cash**, yet it must compete with mature companies for top engineers and executives. The answer is to pay in **future upside** instead of present cash: give the employee a slice of the company through ==stock options==. This guest lecture (from **IBI Capital**, a firm that administers option plans for 3,000+ companies and 160,000+ employees) answers the two questions every founder faces: **how do you structure an option grant** (vesting, strike price, expiration, what happens when someone leaves), and **how is it taxed** — which in Israel means mastering ==Section 102== of the Tax Ordinance, the single rule that decides whether your employees keep **75%** or only **41%** of their gain.

---

## 1. Why Equity Awards? — The Economic Logic

Before the mechanics, understand *why* a startup gives away ownership instead of paying salary.

> [!info] The four motivations ^why-equity
> 1. ==Attracting senior talent== — startups can rarely match the cash salaries of established firms, but they can offer a stake in a potentially enormous outcome.
> 2. ==Long-term incentive== — options [[Vesting|vest]] over years, so the employee only fully benefits by **staying**. This is the "golden handcuffs" effect.
> 3. ==Alignment of interests== — once an employee holds options, their personal wealth rises and falls with the **company's value**, putting them on the same side as the founders and investors.
> 4. ==Cash conservation== — every shekel paid in equity is a shekel of salary the company *doesn't* have to fund out of scarce runway. Equity is "compensation the company prints itself."

> [!tip] Intuition — equity turns employees into owners
> Salary is a **cost** that is indifferent to performance: you earn it whether the company triples or dies. An option is **pure upside tied to value creation** — it is worth nothing unless the share price climbs above the price you locked in. That asymmetry is exactly what a founder wants: it motivates employees to *build value*, not just show up, and it does so without draining the bank account. The cost is **dilution** — the founders' and investors' ownership percentages shrink to make room for the option pool.

---

## 2. Anatomy of a Stock Option — Basic Terms

The entire instrument is built from a handful of defined terms. Get these precise; the tax and legal consequences hang off each one.

> [!info] Core definitions ^basic-terms
> - ==Option== — a **right (not an obligation) to purchase a fixed number of the company's shares, at a fixed price, during a specific period**. The holder will only ever exercise it if doing so is profitable. ^def-option
> - ==Employee Stock Option Plan (ESOP)== — the **umbrella plan adopted by the company** that sets the *general* terms and provisions governing all grants (pool size, vesting defaults, tax track, administration). ^def-esop
> - ==Grant / Option Agreement== — the **individual contract** between one employee and the company, granting a specific number of options under specific conditions. The plan is the rulebook; the grant agreement is the personal deal. ^def-grant

> [!info] The pricing and timing terms ^pricing-terms
> - ==Exercise price== (a.k.a. [[Strike Price|strike price]]) — the price per share the employee must **pay the company** to convert an option into a share. It is **fixed at the grant date**. On exercise, the company **issues new shares** to the employee. ^def-exercise-price
> - ==Vesting dates== — the dates on which the employee *becomes entitled* to exercise the options (or a portion of them). Until an option vests, it cannot be exercised. ^def-vesting
> - ==Share== — a **regular share** of the company, issued as the result of exercising an option. It carries **all the rights of any ordinary share**, including dividends. ^def-share
> - ==Expiration date== — the date, set in advance, on which an *unexercised* option dies. The market standard is **10 years from the grant date**. ^def-expiration

> [!tip] Why a *fixed* strike price set at grant is the whole point
> The strike is locked at the company's value **on the day you join**. If the company grows, the gap between the strike and the real share value is the employee's profit. Formally, the value the employee captures per share at sale is the **option payoff**:
> $$\boxed{\;\text{Payoff per share} = \max\!\left(S - K,\; 0\right)\;}$$
> where $S$ = share value at the time of sale and $K$ = exercise (strike) price. If $S \le K$ the option is "underwater" and the employee simply doesn't exercise (hence the $\max(\cdot,0)$ — you can never lose money you didn't put in). All the incentive lives in pushing $S$ far above $K$.

---

## 3. The Life Cycle of an Option

An option moves through four stages. Knowing *where the tax event sits* (Section 7) requires first knowing this sequence cold.

```
  GRANT ───────► VESTING ───────► EXERCISE ───────► SALE
   │                │                 │               │
 strike K       right to          pay K, receive   convert shares
 fixed;         exercise          actual shares    to cash; THIS is
 10-yr clock    accrues over      (no tax event    the Section 102
 starts         time              under §102 CGT)  tax event
```

> [!example] A grant in plain numbers ^lifecycle-example
> You join a startup and are **granted 10,000 options** at a **strike of $1.00**, vesting over 4 years, expiring in 10.
> - **Grant** — nothing happens financially; you just hold the rights and the strike is locked at $1.
> - **Vesting** — after the standard *one-year cliff*, 25% (2,500 options) vest; the rest vest monthly thereafter. Leave before the cliff and you get **nothing**.
> - **Exercise** — once vested, you pay the company $1 × (number exercised) and receive real shares. Under the favourable tax track, **paying to exercise is not yet a taxable event**.
> - **Sale** — the company is acquired or IPOs and your shares are worth $11 each. *Now* you realise a gain of $10/share and the tax rules bite.

> [!tip] Why options and not just shares?
> A founder could hand employees shares directly — but options are better on three fronts: (1) **no cost to the employee at grant** (you don't buy until you choose to exercise); (2) **the strike anchors the reward to future growth**, not the value already built; and (3) **tax deferral** — as we'll see, a properly structured option is taxed only when the employee finally cashes out, not when paper value appears.

---

## 4. What Happens on Termination

Options are a **retention** tool, so the plan must answer: what happens to your options when you leave? The rules turn entirely on **whether the options have vested** and **why** you left.

> [!info] The termination rules ^termination-rules
> **Unvested options → expire immediately.** You only keep what you've earned by staying; the unvested portion evaporates the moment you leave. ^termination-unvested
>
> **Vested options → a limited window to exercise**, depending on the reason for leaving:

| Reason for termination | What happens to **vested** options | Exercise window |
|---|---|---|
| **Without "Cause"** (ordinary resignation/layoff) | Survive briefly, then expire | **3 months** after termination |
| **Death or disability** | Survive longer (for the employee/estate) | **12 months** from the death/disability |
| **For "Cause"** | Forfeited entirely | **Expire immediately** |

> [!warning] "Cause" is a deliberate, narrow legal trigger ^def-cause
> ==Cause== is a **legal termination for serious wrongdoing** — fraud, willful misconduct, and similar bad-faith acts. It is defined narrowly because its consequence is severe: a "for cause" dismissal wipes out **even vested options the employee already earned**. Founders and employees negotiate this definition carefully — the broader the "Cause" clause, the more power the company has to claw back equity.

> [!tip] Why the 3-month window exists (and why it's a trap)
> When you leave on good terms, your *vested* options are yours — but you must **exercise within ~90 days** or lose them. Exercising means actually **paying the strike price in cash** for shares in a private company you may never be able to sell. Many departing employees can't afford to, or don't want to gamble, so they walk away from vested equity. This short window is one of the most consequential — and least understood — clauses in any option grant.

---

## 5. The Tax Question — Why Section 102 Exists

Everything above is contract design. The **value** of an option to an employee, though, is decided by **tax**: a gain taxed at 25% is worth far more than the same gain taxed at 59%. Israel's answer is ==Section 102 of the Income Tax Ordinance==, a purpose-built regime for employee equity.

> [!info] What Section 102 is for ^section-102-purpose
> ==Section 102== is a **statutory safe harbour** that lets employee equity gains be taxed as **capital gains (25%)** rather than as ordinary employment income (up to ~59%), *provided* the company follows specific rules (a trustee, a holding period, ITA filing). The policy goal is to **encourage broad employee ownership** in Israeli companies — a cornerstone of the startup ecosystem. ^def-section-102

> [!warning] Who Section 102 does — and does not — cover ^section-102-scope
> Section 102 applies **only to employees and officers** of the company.
> It **does *not* apply** to:
> - **Controlling shareholders** (they already own the company — no need to incentivise),
> - **Service providers and consultants** (not employees),
> - these groups fall under [[Section 3(i)]] instead (Section 9), which is far less generous.

---

## 6. Section 102 — The Three Tracks

When a company adopts a Section 102 plan it must **choose one of three tax tracks** for the whole plan. The choice is a **trade-off between the employee's tax rate and the company's tax deduction** — you generally can't have both.

> [!info] The three tracks ^three-tracks
> 1. ==Capital Gain Track (with a trustee)== — employee's gain taxed at **25%**; the company **forgoes** its corporate-tax deduction.
> 2. ==Ordinary Income Track (with a trustee)== — employee taxed at **marginal rates (up to ~59%)**; the company **gets** a deduction.
> 3. ==Non-Trustee Track== — employee taxed at **marginal rates (up to ~59%)**; the company gets **no** deduction.

| Track | Employee tax rate | Company deduction? | Trustee? |
|---|---|---|---|
| **Capital Gain** (with trustee) | **25%** capital gains* | **No** | **Yes** |
| **Ordinary Income** (with trustee) | Marginal, up to **~59%**\* | **Yes** | **Yes** |
| **Non-Trustee** | Marginal, up to **~59%**\* | **No** | No |

> *\*Surtax is added on top of the headline rates for high earners.*

> [!tip] The hidden symmetry — why you can't win on both sides ^tax-symmetry
> Look at the table: the only track where the **employee** pays the low 25% rate is also the only one where the **company loses its deduction**. This is no accident. The tax authority is willing to give up revenue *once* — either by taxing the employee lightly **or** by letting the company deduct the expense, **not both**. The Capital Gain Track shifts the benefit to the **employee**; the Ordinary Income Track shifts it to the **company**. The Non-Trustee Track is the worst of both worlds (high employee rate *and* no company deduction) and exists mainly for situations that can't meet the trustee/holding-period requirements.

> [!example] Most companies choose the Capital Gain Track ^cgt-most-common
> In practice the **Capital Gain Track dominates**. Why? Because the people the plan is meant to motivate — the **employees** — care about *their* take-home, and 25% versus 59% is a life-changing difference on a big exit. A cash-burning startup typically has **no taxable profit to shield anyway**, so the company's lost deduction is often worth little in the early years. The plan is a recruiting tool, so it's optimised for the recruit.

---

## 7. The Capital Gain Track in Detail

This is the track to know thoroughly — it is what almost every Israeli startup uses.

### 7.1 When is the tax event? (The deferral benefit)

> [!info] The tax event ^cgt-tax-event
> Under the Capital Gain Track, the **taxable event is the *sale* of the shares** (or their *release* from the trustee to the employee). Crucially:
> $$\boxed{\;\text{Exercising an option into a share is } \textbf{NOT} \text{ a tax event.}\;}$$
> Tax is deferred all the way to the moment the employee actually turns shares into **cash**.

> [!tip] Why deferral-to-sale is a massive benefit ^why-deferral
> In many regimes (and under the Non-Trustee track / US non-qualified options), **exercising** triggers tax on the paper "spread" between the share's fair value and the strike — *even though you haven't sold anything and have no cash*. Employees get hit with a tax bill on **phantom income** for an illiquid private-company share they can't sell. Section 102's Capital Gain Track eliminates this: no cash event, no tax. You are taxed **once**, at sale, when you finally have the money to pay. This single feature removes the biggest practical risk of holding startup options.

### 7.2 The holding period — the price of the 25% rate

> [!warning] The 24-month holding period ^holding-period
> To earn the **25% capital-gains rate**, the employee must **not sell or release the shares for a [[Holding Period|holding period]] of 24 months from the grant date**. ^def-holding-period
> - Sell **after** 24 months → low **25%** rate.
> - Sell **before** 24 months → you *can* still sell, but the gain is taxed at the **high marginal rate (up to ~59%)**.
>
> The clock runs from the **grant date**, not the exercise or vesting date — so it often overlaps with vesting and is satisfied by the time of a typical exit.

### 7.3 Tax rates — private vs public company

The Capital Gain Track splits depending on whether the company is **private** (no market price) or **public** (a quoted share price exists at grant).

| | **Private company** | **Public company** |
|---|---|---|
| **Held past 24 months** | Entire gain $(S-K)$ taxed at **25%*** | **Two layers:** value *at grant* = ordinary income; appreciation *after grant* = **25%** capital gain |
| **Sold before 24 months** | Whole gain at **marginal rate (up to ~59%*)** | Whole gain at **marginal rate (up to ~59%*)** |

> *\*Plus surtax.*

> [!info] Why public companies get the "two-layer" treatment ^public-two-layer
> A **private** company has no observable share price, so the law treats the *whole* gain on a qualifying sale as capital gain. A **public** company *does* have a market price at grant — so the portion of value that already existed at grant is treated as **employment income** (ordinary rates), and only the **appreciation from grant to sale** gets the 25% capital-gains rate. The logic: the embedded value on day one looks more like salary, while genuine post-grant growth is a real investment gain. This is an **anti-abuse** rule preventing public companies from re-labelling ordinary pay as capital gains.

### 7.4 A worked example — what the track is actually worth

> [!example] The 25% vs 59% gap in shekels ^cgt-worked-example
> Take the grant from §3: **10,000 options, strike $K = \$1$**, and the company is acquired at $S = \$11$/share **after** the 24-month holding period (private company).
>
> **Total gain:**
> $$(S-K)\times n = (\$11 - \$1)\times 10{,}000 = \$100{,}000$$
>
> | Scenario | Tax | Employee keeps |
> |---|---|---|
> | **Capital Gain Track**, held > 24 mo | $0.25 \times \$100{,}000 = \$25{,}000$ | **$75,000** |
> | Sold **before** 24 mo / Ordinary track | up to $0.59 \times \$100{,}000 = \$59{,}000$ | **$41,000** |
>
> **The difference is $34,000** on a $100k gain — a third of the entire payout. That gap, scaled across a whole team and a nine-figure exit, is why structuring the plan correctly and waiting out the holding period matters enormously.

---

## 8. Section 3(i) — The Regime for Everyone Else

Options granted to people **outside** Section 102's scope fall under ==Section 3(i)== of the Ordinance — a markedly less favourable regime.

> [!info] Section 3(i) in brief ^def-section-3i
> - **Who:** ==controlling shareholders, service providers, and consultants== — i.e. exactly the groups excluded from Section 102.
> - **Tax event:** **upon exercise** of the options into shares — *earlier* than Section 102, and without waiting for a cash sale.
> - **Tax rate:** the gain is **ordinary income** (marginal rates). No 25% capital-gains benefit. ^section-3i-rate

> [!warning] Why Section 3(i) is worse on two axes ^section-3i-vs-102
> Compared with the Section 102 Capital Gain Track, a consultant under 3(i) suffers **twice**:
> 1. **Earlier tax** — taxed at *exercise* (possibly on illiquid shares, no cash in hand), not deferred to sale.
> 2. **Higher rate** — ordinary income (up to ~59%) instead of 25%.

| | **Section 102** (Capital Gain Track) | **Section 3(i)** |
|---|---|---|
| **Applies to** | Employees & officers | Controlling shareholders, consultants, service providers |
| **Tax event** | Sale / release of shares | **Exercise** of options |
| **Tax character** | Capital gain (**25%**) | Ordinary income (**up to ~59%**) |
| **Trustee / holding period** | Required (24 months) | Not applicable |

> [!tip] Practical takeaway for founders
> If you want to reward a **consultant or advisor** with equity, understand they **cannot** use the generous employee track — their grant will be taxed earlier and harder under 3(i). Sometimes the cleaner solution is to bring a key advisor on as a formal **employee/officer** (where appropriate) so they qualify for Section 102, or to size the grant knowing the after-tax value is lower.

---

## 9. Implementing a Section 102 Plan — Action Items & Timeline

Section 102's benefits are **conditional on process**. Miss a deadline and the favourable treatment can be lost. The administrative sequence for the Capital Gain Track:

> [!example] The Section 102 Capital Gain Track checklist ^action-items
> 1. The company's **board of directors adopts** the stock option plan.
> 2. The board **approves a trustee** for the plan.
> 3. The **trustee submits the plan to the Israel Tax Authority (ITA)** for approval.
> 4. **Grants may begin only after 30 days** have lapsed following submission of the plan to the ITA. *(The waiting period is what locks in the capital-gains track.)*
> 5. **Board approval of each grant** must be **deposited with the trustee within 45 days**.
> 6. **Signed option agreements** must be **deposited with the trustee within 90 days**.
> 7. The trustee files **quarterly and annual reports** with the ITA (**Forms 146 / 156**).

> [!warning] Why the trustee and the deadlines are non-negotiable ^trustee-role
> The ==trustee== is the linchpin of the Capital Gain Track. The trustee **holds the options and shares** on the employee's behalf throughout the holding period, which is how the tax authority **enforces the 24-month rule** and ensures the shares aren't sold early. Without a trustee you fall into the **Non-Trustee Track** (high rate, no deduction). The **30-day pre-grant wait** and the **45/90-day deposit deadlines** are strict: grants made too early, or paperwork filed late, can **disqualify** the favourable treatment and push the grant into ordinary-income taxation. Compliance is not bureaucracy — it *is* the tax benefit.

---

## 10. The Ecosystem Context (IBI Capital)

> [!info] Who administers these plans ^ibi-context
> Option-plan administration is specialised enough that startups outsource it. The lecturer's firm, **IBI Capital**, illustrates the scale: it administers **stock-option plans for 3,000+ corporates and 160,000+ awardees**, provides **M&A** advisory (≈ $30B of deals over three years), **[[409A Valuation|409A valuations]]**, wealth management and funding (and, via Nextage, services to 300+ companies). The takeaway: a trustee + administrator (tracking grants, vesting, holding periods, ITA reporting) is a standard, necessary part of running an ESOP — not something a founder does in a spreadsheet.

---

## Summary

> [!summary] One-screen revision ^summary
> - **Why options:** startups pay in **future upside** instead of scarce cash — to **attract talent**, create **long-term retention** (vesting = golden handcuffs), **align** employee and investor interests, and **conserve cash**. The cost is **dilution**. ^s-why
> - **The instrument:** an [[Option (Security)|option]] is a *right* to buy a fixed number of shares at a **fixed strike price $K$** (set at grant), exercisable after **vesting**, expiring ~**10 years** from grant. Payoff per share $=\max(S-K,0)$. ^s-instrument
> - **Termination:** **unvested options expire immediately**; **vested** options survive **3 months** (without cause), **12 months** (death/disability), or **die instantly** (for "Cause" = fraud/willful misconduct). ^s-termination
> - **Section 102** (employees & officers only) gives a **25% capital-gains** rate via the **Capital Gain Track**, *if* you use a **trustee** and hold the shares **24 months from grant**. Selling early → marginal rate (up to ~59%). ^s-102
> - **Deferral is the killer feature:** under the Capital Gain Track, **exercising is not a tax event** — tax hits only at **sale**, avoiding phantom-income tax on illiquid shares. ^s-deferral
> - **The symmetry:** Capital Gain Track = low employee rate **but no company deduction**; Ordinary Income Track = high employee rate **but company gets the deduction**. You can't have both — and **most companies pick the Capital Gain Track** (it's a recruiting tool). ^s-symmetry
> - **Public companies** split the gain: value *at grant* = ordinary income; appreciation *after grant* = capital gain (anti-abuse). **Private** companies get capital-gains treatment on the whole qualifying gain. ^s-public
> - **[[Section 3(i)]]** covers **controlling shareholders, consultants, service providers** — taxed **earlier (at exercise)** and **harder (ordinary income)**. ^s-3i
> - **Process is the benefit:** board adopts plan → approves trustee → trustee files with ITA → **30-day wait** before grants → deposit board approvals (**45 days**) and signed agreements (**90 days**) → trustee files **Forms 146/156**. Miss a deadline, lose the rate. ^s-process

---

## 🔗 Related Notes

- [[Legal and Tax Aspects]] — subject hub
- [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]] — first introduced [[ESOP]], [[Vesting]] and [[Option (Security)]] in the founder's toolkit; **this lecture is the deep dive**
- [[Lec_03-Company Law & Corporate Structures]] — defines the underlying [[Share]], [[Option (Security)]] and [[Strike Price]] as **securities** the company issues; options become shares *within* this corporate-law framework
- [[Lec_05-Intellectual Property]] — *previous session*; like IP, an option pool is part of the **cap table** value investors price
- [[Lec_04-Contract Law]] — the **grant/option agreement** is a [[Contract]]; offer, acceptance and definiteness all apply to the equity deal
- [[_Wiki-Link Registry]] — all wiki-links used in this subject

**Concept stubs introduced/used here:** [[ESOP]], [[Option (Security)]], [[Strike Price]], [[Exercise Price]], [[Vesting]], [[Vesting Schedule]], [[Vesting Cliff]], [[Share]], [[Dividend]], [[Expiration Date (Options)]], [[Cause (Termination)]], [[Dilution]], [[Section 102]], [[Section 3(i)]], [[Israeli Tax Ordinance]], [[Capital Gains Tax]], [[Marginal Tax Rate]], [[Trustee]], [[Holding Period]], [[Capital Gain Track]], [[Ordinary Income Track]], [[Non-Trustee Track]], [[Israel Tax Authority]], [[409A Valuation]], [[Cap Table]]
