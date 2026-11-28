---
title: "Exam Question Playbook"
subject: legal-and-tax
type: reference
description: "How to answer each kind of Legal & Tax question, with a past-paper example: the 25-point case (founders' agreement, IP, NDA, GDPR, Section 102), and the MCQ families: legal system, contract formation, company law, IP regime, GDPR, Section 102 and cap-table arithmetic."
course: Legal and Tax Aspects of Entrepreneurship
semester: 1
year: 2
order: 4
tags:
  - legal-and-tax
  - exam-prep
  - playbook
---

> Part 1 scores on **issue → rule → fact → fix**, once per issue. Part 2 scores on knowing which lecture word the question is fishing for. The traps are on the [[Common Mistakes]] page; the numbers on the [[Numbers Sheet]].

## A. The 25-point case

**Budget:** up to one page, so three or four headed paragraphs of four or five lines. Use the sub-questions as headings, in the order asked.

For each issue write four moves:

1. **Issue:** name the gap in the facts. "There is no binding founders' agreement."
2. **Rule:** the lecture rule, with its name. "A contract needs gmirat da'at and mesuyamut; a document titled non-binding shows no intention to be bound."
3. **Apply:** tie the rule to **one fact** from the case. "So Dana's 'non-binding' defence probably works, and the parties fall back on default rules."
4. **Fix:** the remedy. "Sign a founders' agreement now, with an IP assignment and decision thresholds."

**The issues and the lines that score**

| Issue | Rule to state | The fix |
|---|---|---|
| Founders' agreement | non-binding memo: no gmirat da'at; substance can beat label (*Rabinai*) but not an explicit "non-binding"; s.12 good faith in negotiation at most | a founders' agreement: equity, **vesting and cliff**, roles, **decision thresholds**, **IP assignment**, non-compete, exit and buy-back, dispute resolution. Tie each clause to a fact |
| IP ownership | copyright vests in the **creator**; the company owns nothing without a **written assignment**; registration is not proof between founders; a joint work or use of company resources makes it litigable | assign **all existing and future IP** to the company; a confidential algorithm is also a **trade secret** (NDAs, access control) |
| NDA | a signed contract binds even if unread (gmirat da'at is objective); the essentials are the **definition**, the **purpose limitation** and the **disclosure limits** | renegotiate; s.39 good faith in performance at best; next time read the counter-signed version |
| GDPR | applies to EU users (Art. 3); needs a **lawful basis** (Art. 6); a cookie notice is **not consent**; financial data is high risk | explicit opt-in consent, privacy notice, **DPIA** (Art. 35), DPO if required, RoPA (Art. 30), privacy by design (Art. 25), retention limits, SCCs for transfers; fines up to €20M or 4% |
| Section 102 | a promise is not a grant; needs a **written grant**, vesting schedule, **trustee**, Capital Gain Track, **24 months from grant**, the 30/45/90-day deadlines; employees and officers only | sign a grant agreement and deposit it with the trustee; check whether the person is a **controlling shareholder** (then Section 3(i), taxed at exercise) |

**Close** in one sentence: "Sign a founders' agreement with an IP assignment now, and fix the [NDA / data handling / grant] before the next investor's due diligence finds it."

> [!example] Example exam, Part 1 (SmartMeal)
> **Founders' agreement:** the "Initial Understandings – Non-Binding" lacks gmirat da'at, so Amir cannot enforce the equal split, the IP clause or the non-compete. A founders' agreement would have set decision thresholds (Dana approved NutriLabs' use alone), an IP assignment (the algorithm) and a non-compete. **NDA:** Dana and Amir signed NutriLabs' altered version; a signed contract binds, and the purpose limitation was the clause that failed. **IP:** copyright vests in the creators; the algorithm was built **jointly**, so Dana's registration does not settle ownership between them, and without a written assignment the company owns nothing. **Fix:** an assignment of all IP to the company and a proper founders' agreement.

## B. The legal system

| You see | Answer |
|---|---|
| Israel's legal family | **mixed**: statutes plus binding precedent |
| A Knesset law, a regulation, a treaty | **hard law** |
| A contract, a code of conduct, guidelines | **soft law**: binding only by agreement |
| Two laws conflict | the specific beats the general (*lex specialis*); the later beats the earlier |
| Formal vs substantive rule of law | follow the **slides**: formal = enforcement and equality; substantive = publication, clarity, non-retroactivity |
| *Erga omnes* | a right against the whole world: property, IP |

## C. Is there a contract?

1. **Gmirat da'at:** an objective intention to be bound at signing. "Non-binding" in the title is strong evidence against it.
2. **Mesuyamut:** are the essential terms there (for real estate: parties, asset, price, date)?
3. **Writing:** only where the law asks (real estate, s.8 Land Law).
4. **Consideration:** **not required** in Israel.
5. **Good faith:** s.12 in negotiation (damages even with no contract), s.39 in performance.
6. **Interpretation (s.25):** intent from text and circumstances; clear language governs; against the drafter.

> [!example] DataVault MCQ Q3, Q12
> A memo titled "non-binding" is not a contract: no gmirat da'at (Q3, key B). The two pillars of a valid contract: gmirat da'at and mesuyamut (Q12, key C).

## D. Company law

| You see | Answer |
|---|---|
| Who appoints the board? | the **general meeting** (s.57) |
| Who appoints the CEO? | the **board** (s.92) |
| A power the board cannot delegate | appointing or dismissing the CEO, approving financial statements, strategy, dividends |
| Why a limited company? | **limited liability**: owners risk only their investment; can issue shares and options. It is taxed twice |
| Piercing the veil (s.6) | fraud or deceiving creditors, unreasonable risk to creditors, with the shareholder's awareness |
| Shareholder loans instead of capital | **subordination** (*Northern Chicks*): paid after the other creditors |
| Agency problem | managers vs shareholders, majority vs minority, shareholders vs creditors |

## E. Which IP right?

| The thing | Regime | Why |
|---|---|---|
| Source code, UI, text | **copyright** | automatic, life + 70 |
| A new technical process or device | **patent** | registered, 20 years, but published |
| A confidential algorithm, recipe, customer list | **trade secret** | no time limit while secret; needs reasonable efforts |
| A name, logo | **trademark** | registered, renewable |
| A product's look | **design** | registered, limited term |

Ownership: the **creator**, unless a written assignment. A licence lets someone use it; the owner keeps title.

## F. GDPR

1. **Does it apply?** Any organisation in the EU **or** processing data of people in the EU (Art. 3).
2. **Lawful basis (Art. 6):** consent, contract, legal obligation, vital interests, public interest, legitimate interest.
3. **Consent:** freely given, specific, informed, an **affirmative act before** collection. Not a cookie notice, not buried in the ToS.
4. **High risk** (AI, health, financial, profiling) → **DPIA** before processing (Art. 35).
5. **Privacy by design and by default** (Art. 25): built in from the start, most protective setting by default.
6. **Transfers** outside the EU without an adequacy decision → **SCCs** or **BCRs**.

## G. Section 102

| Question | Answer |
|---|---|
| Purpose of Section 102 | a tax benefit for employee options: capital-gains rate instead of income tax |
| Most common track | **Capital Gain Track** (with a trustee) |
| Its condition | held by the trustee **24 months from the grant** |
| Tax at exercise? | no: at **sale** or release from the trustee |
| A consultant or a controlling shareholder | not 102: **Section 3(i)**, taxed at exercise as income |
| Why document the grant | without the written grant, trustee and filing, the 102 election is lost: ordinary income tax |

## H. Cap-table arithmetic

1. **Which number is given?** A stake and a cheque → post-money $= \text{investment} / \text{stake}$. Then pre $=$ post $-$ investment.
2. **Never** divide and call it pre-money: the stake is a share of the company **after** the money lands.
3. **Grant for a target $p$:** $S \times p / (1 - p)$, with $S$ the **fully diluted** count.
4. **Dilution:** your shares stay the same, the total grows: new % $=$ your shares / new total.
5. **Price per share:** pre-money / pre-round fully diluted shares.

> [!example] ESOP set Q26, Q27
> \$3M for 20%: post-money $= 3 / 0.2 = \$15\text{M}$, pre-money $= 15 - 3 = \$12\text{M}$. The trap options are \$12M as the post-money and \$18M ($15 + 3$).
