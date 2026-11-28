---
title: "Legal & Tax Cheat Sheet"
subject: legal-and-tax
type: reference
description: "Everything the final asks, in course order: the Israeli legal system, the startup lifecycle and its agreements, company law and the corporate veil, contract law (gmirat da'at, mesuyamut, interpretation), the five IP regimes, the GDPR, ESOPs and the Section 102 tracks, and cap tables, plus a template for the 25-point case question."
course: Legal and Tax Aspects of Entrepreneurship
instructor: Dr. Yuval Reinfeld
semester: 1
year: 2
order: 1
pinned: true
tags:
  - legal-and-tax
  - exam-prep
  - cheat-sheet
aliases:
  - Legal and Tax Cheat Sheet
---

> **The exam** (from the instructor's example exam): **Part 1**, one startup case to analyse in up to a page, **25 points**. **Part 2**, **15 multiple-choice questions** at 5 points each, **75 points**. Every case so far is the same story: founders with a "non-binding" memo instead of a founders' agreement, an IP dispute, and one of an NDA, GDPR or Section 102 problem. See the [[Past Paper Topic Map]] and the case template in §9.

---

## 0. Method picker

| The question mentions… | Reach for | Section |
|---|---|---|
| "Non-binding" memo, MOU, initial understandings | gmirat da'at + mesuyamut; a non-binding label defeats intent | §4 |
| A founder claims the code or algorithm is theirs | copyright vests in the **creator** unless a **written assignment** | §5, §9 |
| A signed NDA nobody read | a signed contract binds; check definition, purpose limitation, disclosure limits | §2 |
| EU users' data, cookie notice | GDPR: lawful basis (Art. 6), real consent, DPIA, privacy by design | §6 |
| Options, vesting, "102" | Capital Gain Track: trustee, **24 months from grant**, 25% | §7 |
| Consultant or controlling shareholder getting options | **Section 3(i)**: taxed at exercise, ordinary income | §7 |
| "$X for Y%", dilution, a 2% grant | cap-table formulas | §8 |
| Who appoints the board, what the board cannot delegate | ss.57, 92 | §3 |
| A creditor wants the shareholders' own money | piercing the veil (s.6); subordination (*Northern Chicks*) | §3 |

---

## 1. The Israeli legal system

| Legal family | Features |
|---|---|
| Common law (England, US) | precedent; passive judge; flexible |
| Continental (France, Germany) | codified statutes; active judge |
| **Mixed** (Israel) | statutes **plus** binding precedent |

**Hierarchy:** Basic Laws (quasi-constitutional) → Knesset statutes → secondary legislation (regulations, orders) → administrative decisions and judgments. **Lex specialis:** the specific law beats the general; a later law beats an earlier one.

| Idea | Meaning |
|---|---|
| Rule of law | **as the slides label it:** formal = enforcement and equality before the law; substantive = publication, clarity, non-retroactivity (many textbooks swap the labels) |
| Separation of powers | Knesset, government, independent courts: power checks power |
| *Erga omnes* | a right valid against the whole world (property, IP) |
| *Pacta sunt servanda* | agreements must be kept: the root of contract law |
| *Ratio decidendi* / *obiter dictum* | the binding reasoning / remarks in passing |
| **Hard law** | statutes, regulations, rulings, treaties: binding. A Knesset law is hard law |
| **Soft law** | contracts, codes of conduct, guidelines: binding only by agreement |

Proceedings: civil (damages, injunctions), criminal (state against individual), administrative (citizen against government).

---

## 2. The startup lifecycle and its agreements

| Stage | Legal to-do |
|---|---|
| Pre-incorporation | founders' agreement, NDAs, protect IP, avoid conflicts with an employer |
| Incorporation | register the company, Articles of Association, **assign IP to the company**, ESOP, bank account |
| Investment rounds | term sheet, investment agreement, amend Articles, due diligence |
| Exit | M&A, secondary sale or IPO; tax planning |

**Funding ladder:** bootstrapping → pre-seed (incubators, angels; idea) → **seed** (MVP and market validation; angels and seed funds) → Series A (product-market fit, VC) → B (scale) → C+ (global, pre-IPO) → IPO.

**The five core legal risks:** no founders' agreement (equity and decision disputes), no NDA (lost trade secrets), no IP assignment (IP stays with the individual), privacy violations (GDPR fines), careless open source (forced disclosure of code).

| Agreement | What it must do |
|---|---|
| **Founders' agreement** | equity split, **vesting and cliff**, roles, **decision-making and approval thresholds**, **IP assignment**, non-compete, exit and buy-back, dispute resolution |
| **NDA** | definition of confidential information, **purpose limitation**, disclosure restrictions, duration, remedies. A signed version binds even if you did not read the changes |
| Investment agreement | valuation, shares, voting and veto, pre-emptive rights, anti-dilution, liquidation preference, board seats, information and exit rights |
| Non-compete | generally **unenforceable in Israel**, unless protecting a real trade secret or paid for |
| SLA | service levels (uptime 99.9%), response times, remedies |
| Privacy policy | **legally required** (GDPR) |
| ToS / EULA | not required, strongly recommended |

| Term | Meaning |
|---|---|
| Vesting / cliff | rights earned over time / nothing vests before it (usually 1 year) |
| Angel / VC | individual's own money, early / a fund's institutional money, active in management |
| Due diligence | the investor's check of finances, contracts, IP, customers |
| Equity vs loan | equity: no repayment, dilution, investor is an owner. Loan: principal plus interest, no dilution, lender is a creditor |
| Valuation | decides how much of the company a given amount of money buys |

---

## 3. Company law

| Entity | Liability | Tax | Notes |
|---|---|---|---|
| Sole proprietor | **unlimited, personal** | pass-through, once | no separate personality |
| Partnership | joint and several | pass-through | each partner is an agent; max 20 partners |
| **Private Ltd** | **limited** to the investment | corporate tax then dividend tax (**double**) | the startup default; can issue shares and options |
| Public company | limited | double | after an IPO: disclosure, external directors |
| Association (amuta) | — | exempt on qualifying activity; donors deduct under **s.46** | non-profit |
| Cooperative | — | — | one member, one vote |

| Rule | Section |
|---|---|
| The company is a **separate legal person** (*Salomon*, 1897) | s.4 |
| Articles of Association are a **contract** between company and shareholders, and among shareholders | s.15 |
| Mandatory content: name, objectives, registered capital, limitation of liability | s.18 |
| Optional content: number of directors, governance, transfer restrictions | s.19 |
| **Piercing the veil**: fraud or deceiving creditors; unreasonable risk to creditors; shareholder awareness or wilful blindness | s.6 |
| General meeting: **appoints the board**, approves interested-party deals, changes capital, appoints the auditor | s.57 |
| Board: strategy, supervision, **appoints and dismisses the CEO**, approves financial statements | s.92 |
| Shares carry votes and dividends; dividends only from profits and without endangering solvency | ss.188, 190 |

**Board powers it cannot delegate:** appointing or dismissing the CEO, approving financial statements, strategy, dividends, major capital changes, an IPO.

**Agency problem:** shareholders vs managers (perks, empire building), majority vs minority (tunnelling), shareholders vs creditors (excess risk). Officers owe a **duty of loyalty** and a **duty of care**. **Minority rights:** information, vote, derivative suit, oppression claim, agenda items.

**Subordination (*Northern Chicks*):** a company financed by shareholder **loans** instead of capital can have those loans paid **after** other creditors. Order of payment: secured → priority (employees, tax) → unsecured → shareholders.

**Securities:** a share is ownership; a **bond** is a loan (the holder is a creditor, not an owner); an **option** is a right, not an obligation, to buy at a fixed price by a deadline.

---

## 4. Contract law

A contract is a legally enforceable agreement of two or more parties. **Consideration is not required in Israel.**

| Requirement | Rule |
|---|---|
| Offer and acceptance | specific terms; unconditional acceptance |
| ***Gmirat da'at*** (serious intention) | intention to be bound, tested **objectively** at signing |
| ***Mesuyamut*** (definiteness) | enough detail; real estate minimum: parties, asset, price, delivery date |
| Capacity | adults, not legally incompetent |
| Legality | an illegal, immoral or anti-public-policy contract is **void** (s.30) |
| Writing | only for some deals: **real estate (s.8 Land Law)**; relaxed in exceptional cases by good faith (*Kalmer v Gai*: reliance plus the other side's fault) |

**The two pillars** of a valid contract: gmirat da'at and mesuyamut. A memo **titled non-binding** shows no intention to be bound. An MOU that holds every essential term can bind despite its name (*Rabinai*): **substance beats label**.

| Section | Rule |
|---|---|
| s.12 | **good faith in negotiation**; bad faith gives damages even with no contract |
| s.24 | freedom of contract, not absolute |
| s.25 | interpretation: intent from text and circumstances (*Apropim* pendulum; 2011 amendment: clear language governs); prefer the reading that keeps the contract valid; **against the drafter** |
| s.26 | gaps filled by custom between the parties, then usage in similar contracts |
| s.39 | good faith in performing |
| s.46 | dispositive rule, e.g. a reasonable price |
| Cogent provisions | cannot be contracted out of |

Five **completion mechanisms** for gaps: agreed mechanism, dispositive law, optimal performance, custom, good faith.

**Market overt (s.34 Sale Law)**, all four: good faith, for value, good faith at transfer, bought from someone who looked like the seller **in the ordinary course of their business** (*Knaan*: a stolen Rubin at a flea market goes back to the owner).

Obligatory transaction (a future promise, carries risk) vs real transaction (immediate exchange).

---

## 5. Intellectual property

A **property right** binds everyone (*erga omnes*); a **contractual** right binds only the parties.

| Regime | Protects | Register? | Lasts | Conditions |
|---|---|---|---|---|
| **Copyright** | creative expression: text, art, **software code**, UI | **no**, automatic | life + 70 years | originality, fixed in a work |
| **Patent** | technical inventions | **yes** | **20 years from filing** (plus fees) | novelty, inventive step (non-obvious), industrial use |
| **Trade secret** | confidential info with value: recipes, processes, **algorithms** | no | while secret | secrecy, value, **reasonable efforts** (NDAs, access control) |
| **Trademark** | names, logos, signs | yes | renewable | distinctive, not descriptive or misleading, used |
| **Design** | product appearance | yes | limited | novel visual character, not function |

- **Code** → copyright (automatic). An **algorithm kept confidential** → trade secret. Patenting **publishes** the invention.
- **Ownership:** copyright vests in the **creator**. The company gets it only through a **written IP assignment** (or employment, which is litigable for founders). Registration in someone's name is not proof of ownership between founders.
- **Licence**: permission to use, the owner keeps title. **Open source** can force you to disclose proprietary code.
- **AI:** only natural persons are authors or inventors; Israel has no ruling recognising copyright in AI-generated work.

---

## 6. Digital regulation and the GDPR

In force **25 May 2018**. **Extraterritorial (Art. 3):** applies to any organisation in the EU **or** processing data of people in the EU. Fines up to **€20M or 4% of global annual turnover, whichever is higher**.

| Item | Rule |
|---|---|
| Roles | **controller** decides purposes and means (Art. 24); **processor** acts on its instructions (Art. 28); **DPO** where required (Arts. 37–39) |
| Principles (Art. 5) | lawfulness, fairness and transparency; **purpose limitation**; **data minimisation**; accuracy; storage limitation; integrity and confidentiality; accountability |
| **Six lawful bases (Art. 6)** | consent; contract; legal obligation; vital interests; public interest; legitimate interest |
| Consent | freely given, specific, informed, an **affirmative act before collection**. A cookie notice or ToS is **not** consent (*Meta*, 2023) |
| Privacy by design and default (Art. 25) | build encryption, pseudonymisation, access control in from the start; most protective setting by default |
| **DPIA (Art. 35)** | before **high-risk** processing (AI, health or financial data, brokering) |
| RoPA (Art. 30) | record of processing |
| Rights (Arts. 12–23), eight | informed, access (DSAR), rectification, object, automated decisions (Art. 22, *SCHUFA*), **erasure / to be forgotten** (*Google Spain*), portability, restriction |
| Transfers outside the EU | adequacy decision (Art. 45), **SCCs** (Art. 46), **BCRs** (Art. 47). *Schrems I* killed Safe Harbor, *Schrems II* killed Privacy Shield (SCCs survive, case by case), the **EU–US Data Privacy Framework** (2023) is the new adequacy decision |

**EU AI Act:** regulation by risk: prohibited uses → high-risk systems (strict duties) → minimal risk (light or none). **DSA** regulates platforms' content; **DMA** regulates gatekeepers.

---

## 7. ESOP and Section 102

**Option:** a right, **not an obligation**, to buy a fixed number of shares at a fixed **exercise (strike) price** within a period (usually **10 years**). The **ESOP** is the plan; the **option agreement** is each employee's contract.

**Life cycle:** grant (strike fixed) → vesting (usually 4 years, **1-year cliff**, then monthly) → exercise (pay the strike, get shares) → sale.

| On leaving | Unvested | Vested |
|---|---|---|
| Without cause | expire | exercise within **3 months** |
| Death or disability | expire | exercise within **12 months** |
| **For cause** (fraud, wilful misconduct) | expire | **expire immediately** |

| Section 102 track | Employee's tax | Company deduction | Trustee |
|---|---|---|---|
| **Capital Gain** (most common) | **25%**, if held **24 months from grant** | no | yes |
| Ordinary Income | marginal, up to ~**59%** | yes | yes |
| Non-Trustee | marginal | no | no |

- **Tax event** on the Capital Gain Track: the **sale** (or release from the trustee). **Exercise is not taxed.** Selling before 24 months: marginal rate.
- Section 102 is for **employees and officers** only. **Controlling shareholders, consultants, service providers → Section 3(i)**: taxed **at exercise**, as **ordinary income**.
- Public company: value at grant is ordinary income, growth after grant is 25%.
- **Setup:** board adopts the plan → board approves a trustee → trustee files with the Tax Authority → grants **30 days** after filing → board approval to the trustee within **45 days** → signed agreements within **90 days**.

> [!example] Lecture 6
> 10,000 options at \$1, sold at \$11 after 24 months: gain \$100,000. Capital Gain Track: tax \$25,000, keep \$75,000. Before 24 months: up to \$59,000 tax, keep \$41,000.

---

## 8. Cap tables

| Quantity | Formula |
|---|---|
| Ownership % | shares held / total shares |
| **Post-money** | pre-money + investment |
| Investor's % | investment / post-money |
| Post-money from a deal | investment / investor's % |
| Price per share | pre-money / pre-round **fully diluted** shares |
| **Shares to grant for a target $p$** | $N = \dfrac{S\,p}{1 - p}$ ($S$ = current fully diluted shares) |

- **Issued** capital = shares actually held. **Fully diluted** = issued + all options (granted **and** the ungranted pool) + warrants + convertible notes. Deals are negotiated fully diluted.
- **Dilution:** your percentage falls when shares are issued; the aim is a smaller slice of a bigger pie.
- **Option pool created pre-money** dilutes the **existing** holders, not the new investor.
- **Down round:** a round below the previous price. **Full ratchet** resets the investor's price to the new low (harshest on founders); **broad-based weighted average** blends it (founder-friendly).

> [!example] Lecture 8
> \$2.5M for 25%: post-money = 2.5M / 0.25 = \$10M, pre-money = \$7.5M. A 2% grant on 1,000,000 shares: $20{,}000/0.98 \approx 20{,}408$ shares, not 20,000 (which gives only 1.96%).

---

## 9. The 25-point case: a template

Every model answer follows the same frame. Name the issue, state the rule, apply it to the facts, give the remedy.

1. **Diagnosis (one line).** "The founders never regulated their relationship or the ownership of the core asset."
2. **Founders' agreement.** The memo is non-binding: no gmirat da'at, so no contract and only default rules. List what was missing **and tie each clause to a fact**: decision thresholds (Dana licensed alone), IP assignment (the algorithm), vesting and cliff (the departing founder), non-compete, dispute resolution.
3. **IP.** Copyright vests in the creator; the company owns nothing without a **written assignment**; registration in one founder's name does not settle it between founders; jointly created work and use of company resources make it litigable. Remedy: sign an assignment of **all existing and future IP** to the company.
4. **The third issue:**
   - **NDA:** a signed altered NDA binds (gmirat da'at is objective); essential clauses were the definition, purpose limitation and disclosure limits; the remedy is negotiation, or good faith (s.12, s.39) at best.
   - **GDPR:** applies to EU users' data; a cookie notice is not consent (Art. 6); fix with explicit opt-in consent, a privacy notice, DPIA, DPO if needed, RoPA, privacy by design, retention limits; fines up to 4% or €20M.
   - **Section 102:** a promise is not a grant; needs a written grant agreement, vesting schedule, trustee, Capital Gain Track election, 24 months from grant, filing deadlines; otherwise ordinary income tax.
5. **Conclusion.** "Sign a founders' agreement with an IP assignment now, and fix the [NDA / data handling / grant] before the next round's due diligence finds it."
