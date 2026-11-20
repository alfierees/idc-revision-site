---
title: "ESOP, Section 102 & Cap Tables (Practice Set)"
type: past-paper
status: worked-solution
exam: "MCQ ESOP and cap tables (Practice Set, Feb 2026)"
semester: 1
year: 2
course: "Legal and Tax Aspects"
instructor: Dr. Yuval Reinfeld
tags:
  - legal-and-tax
  - past-paper
  - worked-solution
  - multiple-choice
  - esop
  - section-102
  - cap-table
  - dilution
  - valuation
  - option-pool
  - anti-dilution
aliases:
  - Legal and Tax MCQ ESOP Cap Table
  - PP04 Legal and Tax
subject: legal-and-tax
in_scope: true
---

# ESOP, Section 102 & Cap Tables (Practice Set)

> Part of: [[Legal and Tax Aspects]]
> **Practice Set** (PDF dated Feb 2026, author not stated), Legal and Tax Aspects. 40 multiple-choice questions, options A to D: Q1 to Q20 ESOP and Section 102, Q21 to Q40 cap tables.
> Builds on: [[Lec_06-Employee Stock Option Plans (ESOP)]], [[Lec_08-Capitalization Table Basics]]

> [!info] Source and provenance
> The answer key sits at the end of the same PDF (two-column layout). Its author is not stated, so each keyed answer is treated as the **official answer**. **Every question was solved independently first** from the two lectures, then compared with the key.
> The cover header says "20 Questions", but the paper has **40** (Q1 to Q40); this note follows the 40 actually printed.

> [!warning] The key cycles A, B, C, D strictly: is it wrong?
> The keyed letters run A, B, C, D, A, B, C, D... through all 40 questions, which looks artificial. I checked all 40 against the lectures: **the keyed answers match the lectures on all 40** (Q2 has a wording problem but the keyed option is still the intended one). So the cycle appears to be a by-product of how the options were shuffled, not a sign of wrong answers. Do not use "the answer is probably the next letter in the cycle" as an exam technique; the content must be right.
> The only disagreement-type flag is **Q2** (who "deposits"). Two smaller wording notes are on Q9 and Q28. All keys are kept.

> [!note] No AI-solved questions
> Every answer below is the in-file key. Added reasoning, citations and "why the wrong options are wrong" expand the key, they do not change it. There are no figures: the paper has no images and the only maths is short cap-table arithmetic, shown inline.

## What this paper tests

| Questions | Core idea | Taught in |
|---|---|---|
| Q1, Q10, Q14, Q17 | What an option, the exercise price and an ESOP are; why startups use equity | [[Lec_06-Employee Stock Option Plans (ESOP)]] |
| Q5, Q7, Q11, Q16, Q19 | Termination rules, cliff, 10-year expiry | [[Lec_06-Employee Stock Option Plans (ESOP)]] |
| Q2, Q3, Q4, Q6, Q8, Q9, Q12, Q13, Q15, Q18, Q20 | Section 102 tracks, trustee, 24-month holding period, deadlines, Section 3(i) | [[Lec_06-Employee Stock Option Plans (ESOP)]] |
| Q21 to Q23, Q34, Q35 | What a [[Cap Table]] is; issued versus fully diluted share capital | [[Lec_08-Capitalization Table Basics]] |
| Q24, Q25, Q37 to Q39 | [[Dilution]] and sizing a grant for a target percentage | [[Lec_08-Capitalization Table Basics]] |
| Q26 to Q28, Q36, Q40 | Pre-money, post-money, price per share | [[Lec_08-Capitalization Table Basics]] |
| Q29 to Q33 | Option pool, down round, full ratchet, broad-based weighted average | [[Lec_08-Capitalization Table Basics]] |

> [!tip] Intuition: the paper in one sentence
> Part 1 is "**who pays what tax, when, and what do you lose if you miss a deadline**"; Part 2 is "**count the shares correctly, then price them**". The two traps are mixing up the 45-day and 90-day deadlines, and forgetting that issuing new shares enlarges the denominator.

---

## ESOP & Section 102

> [!info] Cheat table for Part 1 (from [[Lec_06-Employee Stock Option Plans (ESOP)]])
> | Rule | Value |
> |---|---|
> | Capital Gain Track rate (private company, held 24 months from grant) | 25% |
> | Ordinary Income and Non-Trustee Track rate | marginal, up to about 59% |
> | Holding period | 24 months from **grant** |
> | Vested options, ended without cause | 3 months to exercise |
> | Vested options, death or disability | 12 months |
> | Vested options, for cause | expire immediately |
> | Unvested options on leaving | expire immediately |
> | Expiry from grant | 10 years |
> | Wait after plan is filed with the [[Israel Tax Authority]] before granting | 30 days |
> | Board grant approval deposited with trustee | within 45 days |
> | Signed option agreements deposited with trustee | within 90 days |

### Q1

**What is a stock option?**

- A) A right to purchase shares at a fixed price within a set period
- B) An immediate grant of company shares to the employee
- C) A bonus paid in company stock upon reaching a target
- D) A loan convertible into shares at the company's discretion

> [!success] Answer: **A**
> Lec_06 defines an [[Option (Security)]] as a right, not an obligation, to buy a fixed number of shares at a fixed price during a specific period.

- B is wrong: shares only arrive on **exercise**; at grant nothing is issued.
- C is wrong: an option is not a performance bonus; vesting makes it exercisable, and the employee still pays the strike.
- D is wrong: it is not a loan, and the right belongs to the holder, not to the company's discretion.

### Q2

**Which party deposits the signed option agreements under the Capital Gain Track of Section 102?**

- A) The Israel Tax Authority (ITA)
- B) The trustee
- C) The employee directly
- D) The company's board of directors

> [!success] Answer (official key): **B**

> [!warning] Wording problem, key kept
> Lec_06 s.9 says the signed option agreements must be "**deposited with the trustee** within 90 days". So the trustee is the party who **receives** (holds) the agreements; the one who **deposits** them is the company (acting through its board and officers). Read literally, "which party deposits" points at D, not B. The keyed B only works if the question means "with which party are they deposited". My working: lecture text says deposit **with** the trustee, so B is the intended answer but the stem is badly worded. A is wrong either way (the ITA gets the plan from the trustee, not the agreements from the company) and C is wrong (the employee does not deposit; holding by the trustee is what lets the ITA enforce the 24-month rule).

> [!tip] Intuition
> Think "company hands, trustee holds". If an exam asks it the other way round ("with whom are they deposited?"), the answer is unambiguously the trustee.

### Q3

**What is the tax rate on gains under Section 102 Capital Gain Track (after the holding period)?**

- A) 0%, options are fully tax-exempt
- B) 17%, the standard corporate tax rate
- C) 25% (capital gains rate)
- D) 59%, marginal income tax rate plus health care

> [!success] Answer: **C**
> After the 24-month holding period the whole gain of a private company is taxed at **25%** ([[Capital Gains Tax]]). Example in the lecture: a $100,000 gain gives $25,000 tax and the employee keeps $75,000.

- A is wrong: gains are taxed, only deferred to sale.
- B is wrong: 17% is not an employee rate in the lecture and the corporate rate is irrelevant to the employee's gain.
- D is wrong: about 59% is the **marginal** rate, which applies on a sale before 24 months or under the Ordinary Income and Non-Trustee tracks.

### Q4

**Under Section 102, how long must shares be held by the trustee to qualify for the Capital Gain Track tax benefit?**

- A) 12 months from grant date
- B) 36 months from grant date
- C) 6 months from the exercise date
- D) 24 months from grant date

> [!success] Answer: **D**
> The [[Holding Period]] is **24 months from the grant date**, not from vesting or exercise.

- A and B are wrong: the lecture gives only 24 months.
- C is wrong on both counts: the length is 24 months and the clock starts at **grant**, not exercise.

### Q5

**An employee is terminated for cause. What happens to ALL of their vested options?**

- A) They expire immediately upon termination
- B) They remain exercisable for 3 months
- C) They are purchased back by the company at fair value
- D) They are transferred to unvested status and subject to new vesting

> [!success] Answer: **A**
> For [[Cause (Termination)]] (fraud, wilful misconduct) even **vested** options are forfeited at once. That is what makes the clause so heavily negotiated.

- B is wrong: 3 months is for termination **without** cause.
- C is wrong: nothing in the lecture gives a buyback.
- D is wrong: vested options do not revert to unvested.

### Q6

**Section 102 tax arrangements apply to which group?**

- A) All shareholders regardless of role
- B) Employees and officers of the company
- C) Controlling shareholders and service providers
- D) Only the CEO and CFO

> [!success] Answer: **B**
> Section 102 covers **employees and officers only**.

- A is wrong: shareholders as such are not covered.
- C is wrong: those are exactly the groups **excluded**; they fall under [[Section 3(i)]].
- D is wrong: not limited to two named officers.

### Q7

**What is the "cliff" in a vesting schedule?**

- A) The date on which all remaining unvested options vest at once
- B) The date the option plan is submitted to the tax authority
- C) The minimum period before any options begin to vest
- D) The maximum number of options an employee can hold

> [!success] Answer: **C**
> The [[Vesting Cliff]]: with the standard one-year cliff, nothing vests until month 12, then 25% vests at once and the rest vests monthly. Leave before the cliff and you get nothing.

- A is wrong: that describes **acceleration**, a different concept.
- B is wrong: unrelated to vesting; the plan is filed with the ITA by the trustee.
- D is wrong: a cap on holdings is not a cliff.

### Q8

**Under Section 102 Ordinary Income Track, which of the following is TRUE?**

- A) The employee pays only 25% capital gains tax on any gain
- B) No trustee is required to hold the shares
- C) The employee is exempt from health care contributions on the gain
- D) The company CAN deduct the equity expense for tax purposes

> [!success] Answer: **D**
> The [[Ordinary Income Track]] is the one where the company **gets** its deduction, in exchange for the employee being taxed at marginal rates. This is the "you cannot have both" symmetry.

- A is wrong: 25% is the Capital Gain Track.
- B is wrong: the Ordinary Income Track is "with a trustee"; only the [[Non-Trustee Track]] has none.
- C is wrong: the lecture gives no health-care exemption, and the 59% figure explicitly includes it.

### Q9

**How many days after a board grant approval must the signed option agreements be deposited with the trustee under Section 102?**

- A) 90 days
- B) 30 days
- C) 45 days
- D) 60 days

> [!success] Answer: **A**
> Signed option agreements: deposited with the [[Trustee]] within **90 days**. (The 45-day figure is for the board approval itself, see Q18.)

> [!note] Wording caveat
> Lec_06 states the 90 days without saying from which event it runs. The question ties it to the board approval, which fits the lecture's order of steps; nothing in the lectures contradicts it. Key kept.

- B is wrong: 30 days is the wait after filing the plan with the ITA before grants may start.
- C is wrong: 45 days is for depositing the **board approval**.
- D is wrong: 60 days appears nowhere in the lecture.

### Q10

**What is the exercise price of a stock option?**

- A) The market price of the share at the time the option is exercised
- B) The pre-agreed price at which the employee can purchase shares upon exercising the option
- C) The price the company pays to repurchase the option if the employee leaves
- D) The price per option charged to the employee at grant date

> [!success] Answer: **B**
> The [[Exercise Price]] (strike) is fixed at grant and is what the employee pays the company per share on exercise. The employee's profit is the gap between the later share value and this price: $\max(S-K,\,0)$.

- A is wrong: the market price is $S$, not $K$. If the strike floated with the market there would be no gain.
- C is wrong: nothing in the lecture gives a repurchase price.
- D is wrong: options cost the employee nothing at grant.

### Q11

**An employee with options dies. Within what period may their vested options be exercised?**

- A) 3 months from the date of death
- B) Immediately, options expire at death
- C) 12 months from the date of death
- D) 24 months, equivalent to the holding period

> [!success] Answer: **C**
> Death or disability: **12 months** from the event.

- A is wrong: 3 months is the without-cause window.
- B is wrong: that is the for-cause rule, and death is not wrongdoing.
- D is wrong: 24 months is the Section 102 holding period, a different concept.

### Q12

**Which Section 102 track is LEAST favourable (ordinary income tax AND no corporate deduction)?**

- A) Capital Gain Track (with trustee)
- B) Ordinary Income Track (with trustee)
- C) Section 3(i) Track
- D) Non-Trustee Track

> [!success] Answer: **D**
> The [[Non-Trustee Track]] has marginal rates for the employee **and** no company deduction: "the worst of both worlds".

- A is wrong: 25% for the employee (only the company loses its deduction).
- B is wrong: marginal rates for the employee, but the company **does** deduct.
- C is wrong as a Section 102 track: Section 3(i) is a **separate** regime outside Section 102, so it is not one of "the Section 102 tracks" the question asks about.

### Q13

**Which section of the Israeli Income Tax Ordinance governs options granted to controlling shareholders and consultants?**

- A) Section 3(i)
- B) Section 102
- C) Section 46
- D) Section 18

> [!success] Answer: **A**
> [[Section 3(i)]] covers controlling shareholders, service providers and consultants: tax at **exercise**, as ordinary income.

- B is wrong: Section 102 excludes exactly these people.
- C and D are wrong: not mentioned in the lectures (distractors).

### Q14

**An ESOP is best described as:**

- A) A single option agreement between the company and one employee
- B) A company-adopted framework setting general terms for all equity grants
- C) A government-regulated pension fund invested in company shares
- D) An insurance product replacing salary if the company fails

> [!success] Answer: **B**
> The [[ESOP]] is the umbrella plan (pool size, vesting defaults, tax track, administration). The **grant agreement** is the individual contract.

- A is wrong: that is the grant/option agreement, "the plan is the rulebook; the grant is the personal deal".
- C and D are wrong: an ESOP is neither a pension fund nor insurance; it is an equity-compensation plan.

### Q15

**Why do most Israeli startups choose the Capital Gain Track under Section 102?**

- A) It allows the company to deduct the equity compensation expense
- B) It removes the need for a trustee, simplifying administration
- C) It offers employees a significantly lower tax rate (25%) on gains compared to ordinary income
- D) It exempts the employee from all taxes for the first 10 years

> [!success] Answer: **C**
> 25% versus up to about 59% is life-changing on an exit, and the plan is a recruiting tool. A cash-burning startup usually has no taxable profit to shield, so the lost deduction costs little.

- A is wrong: this track gives the company **no** deduction.
- B is wrong: it **requires** a trustee.
- D is wrong: no 10-year exemption exists; 10 years is the usual option expiry.

### Q16

**What is the typical expiration period for unexercised stock options from the grant date?**

- A) 2 years
- B) 5 years
- C) 7 years
- D) 10 years

> [!success] Answer: **D**
> Market standard: **10 years from grant** ([[Expiration Date (Options)]]).

- A, B, C are wrong: none is the lecture's standard (2 years is only the holding period, a different thing).

### Q17

**Why are equity awards particularly attractive for early-stage startups?**

- A) They align employee and investor interests while conserving cash
- B) They are tax-free for both the company and employee
- C) They guarantee employees a fixed return regardless of company performance
- D) They are legally required for all companies with more than 10 employees

> [!success] Answer: **A**
> Two of the four motivations in Lec_06: alignment of interests and cash conservation (the others are attracting talent and long-term retention via [[Vesting]]).

- B is wrong: gains are taxed (25% or more) and the company may lose its deduction.
- C is wrong: an option is pure upside; it is worth nothing if the share price stays at or below the strike.
- D is wrong: no such legal requirement.

### Q18

**Under Section 102, when must the board grant approval be deposited with the trustee?**

- A) Within 30 days of submitting the plan to the ITA
- B) Within 45 days of approval
- C) Within 90 days of the grant date
- D) Before the start of the financial year

> [!success] Answer: **B**
> Board approval of each grant: deposited with the trustee within **45 days**.

- A is wrong: the 30 days is the waiting period before grants may start, not a deposit deadline.
- C is wrong: 90 days is for the **signed option agreements** (Q9).
- D is wrong: no fiscal-year deadline in the lecture.

> [!tip] Intuition: Q9 and Q18 are a matched pair
> Think "**45 for the approval, 90 for the paper**": the board decision is deposited first and fast; the signed agreements get longer.

### Q19

**An employee is terminated without cause. What happens to their vested options?**

- A) They expire immediately like a termination for cause
- B) They remain exercisable indefinitely until the plan expiry date
- C) They may be exercised within 3 months of the termination date
- D) They convert to restricted stock units automatically

> [!success] Answer: **C**
> **3 months** after termination, then they lapse. Practical trap: exercising means paying the strike in cash for illiquid shares, so many leavers walk away from vested equity.

- A is wrong: that is for cause.
- B is wrong: the window is short, not open until expiry.
- D is wrong: nothing converts automatically.

### Q20

**Under the Capital Gain Track, what triggers a tax event?**

- A) Receiving the original grant from the company
- B) The vesting date when options become exercisable
- C) Exercising the option and converting it into a share
- D) Selling the shares or releasing them from the trustee

> [!success] Answer: **D**
> The tax event is the **sale** or the **release** from the trustee. Exercise is explicitly **not** a tax event, which avoids tax on phantom income for illiquid shares.

- A and B are wrong: neither is taxed.
- C is wrong: this is the classic trap; exercise triggers tax under [[Section 3(i)]] and the Non-Trustee Track, but not on the Capital Gain Track.

---

## Cap Tables

**Formula sheet** (from [[Lec_08-Capitalization Table Basics]]):

$$
\text{New shares} = \frac{\text{Current shares} \times p}{1 - p}
$$

$$
\text{Pre-money} + \text{Investment} = \text{Post-money}
$$

$$
\text{Investor \%} = \frac{\text{Investment}}{\text{Post-money}}
$$

$$
\text{Price per share} = \frac{\text{Pre-money}}{\text{Pre-round fully diluted shares}}
$$

### Q21

**What is a capitalization table (cap table)?**

- A) A document tracking the company's full share capital structure showing who owns what
- B) A table calculating company profits and losses per quarter
- C) A legal document replacing the articles of association
- D) A government-mandated tax filing listing all shareholders

> [!success] Answer: **A**
> A [[Cap Table]] manages the company's share capital: who holds what.

- B is wrong: that is a financial statement.
- C is wrong: it is a working record, not a constitutional document.
- D is wrong: the lecture presents it as a management tool, not a mandatory filing.

### Q22

**Fully diluted share capital includes which of the following?**

- A) Only shares actually issued and held by current shareholders
- B) Issued shares plus all potential shares from options, warrants, and convertible notes
- C) Only shares held by investors, excluding founder shares
- D) Issued shares minus any shares subject to vesting restrictions

> [!success] Answer: **B**
> [[Fully Diluted Share Capital]] = issued shares plus every potential share: granted **and ungranted** options from the [[Option Pool]], warrants, convertible notes.

- A is wrong: that is **issued** share capital.
- C is wrong: founders' shares are included.
- D is wrong: it adds potential shares, it never subtracts.

### Q23

**An investor negotiating a deal will most commonly base ownership percentages on:**

- A) Issued share capital only
- B) Authorized share capital
- C) Fully diluted share capital
- D) The number of shares held by founders only

> [!success] Answer: **C**
> Investors and lawyers always negotiate on the fully diluted number. A founder quoting "60%" on issued shares may own much less fully diluted.

- A, B and D are wrong: each leaves out potential shares or is the wrong base altogether.

### Q24

**A company has 1,000,000 shares outstanding. It issues 250,000 new shares. What is an existing 10% shareholder's new ownership percentage?**

- A) 10%, dilution does not affect percentage
- B) 12.5%, the new shares increase overall value
- C) 7.5%, dilution is calculated differently
- D) 8%

> [!success] Answer: **D** (my working agrees)

The holder has $0.10 \times 1{,}000{,}000 = 100{,}000$ shares. The total becomes $1{,}250{,}000$.

$$
\frac{100{,}000}{1{,}250{,}000} = 0.08 = 8\%
$$

- A is wrong: that is the definition of dilution being ignored.
- B is wrong: new shares enlarge the denominator, so the percentage falls, never rises.
- C is wrong: 7.5% has no derivation from the numbers; the arithmetic gives 8%.

### Q25

**You want to grant a new employee 2% of the company. Currently there are 500,000 fully diluted shares. Using the post-issuance formula, approximately how many new shares should you issue?**

- A) 10,204 shares
- B) 10,000 shares
- C) 9,800 shares
- D) 12,000 shares

> [!success] Answer: **A** (my working agrees)

$$
N = \frac{500{,}000 \times 0.02}{1 - 0.02} = \frac{10{,}000}{0.98} \approx 10{,}204
$$

Check: $\dfrac{10{,}204}{500{,}000 + 10{,}204} = \dfrac{10{,}204}{510{,}204} \approx 2.00\%$.

- B is wrong: the naive $0.02 \times 500{,}000$ gives only 1.96% of the new total (the lecture's "common mistake").
- C is wrong: $0.98 \times 10{,}000$ is multiplying by the wrong factor; it under-delivers even more.
- D is wrong: 12,000 would give about 2.34%, an over-grant.

### Q26

**An investor invests $3M for 20% of a company. What is the post-money valuation?**

- A) $12 million
- B) $15 million
- C) $18 million
- D) $3 million

> [!success] Answer: **B** (my working agrees)

$$
\text{Post-money} = \frac{\$3\text{M}}{0.20} = \$15\text{M}
$$

- A is wrong: that is the **pre-money** (Q27).
- C is wrong: it is $15M + $3M, adding the investment to the post-money, which already includes it.
- D is wrong: that is just the investment.

### Q27

**An investor invests $3M for 20% of a company. What is the pre-money valuation?**

- A) $15 million
- B) $18 million
- C) $12 million
- D) $3 million

> [!success] Answer: **C** (my working agrees)

$$
\text{Pre-money} = \text{Post-money} - \text{Investment} = \$15\text{M} - \$3\text{M} = \$12\text{M}
$$

- A is wrong: that is the post-money.
- B is wrong: $15\text{M} + 3\text{M}$ adds the investment to the wrong number.
- D is wrong: that is only the cheque size.

> [!tip] Intuition: the usual slip
> Do not compute $3 / 0.20$ and call it pre-money. The 20% is a share of the company **after** the money lands, so that division gives the **post**-money; subtract the investment to get the pre.

### Q28

**How is price per share in a funding round calculated?**

- A) Post-money valuation divided by total shares after investment
- B) Investment amount divided by the number of new shares issued
- C) Pre-money valuation divided by the number of founder shares only
- D) Pre-money valuation divided by the pre-round fully diluted share count

> [!success] Answer: **D**
> The lecture's formula for [[Price Per Share]]: $\dfrac{\text{Pre-money}}{\text{pre-round fully diluted shares}}$. Pre-money values only the **existing** shares, so dividing by the existing fully diluted count prices one share; the investor then buys new shares at that price.

> [!note] Wording caveat
> A and B give the same number in a clean round (post-money over post-round shares, and investment over new shares, both equal the price per share), so they are arithmetic consequences rather than wrong. D is the **lecture's definition** and is therefore the intended answer; for the exam, quote D.

Case-study check with the lecture's $7.5M pre-money and an assumed 1,000,000 pre-round shares: price $= 7{,}500{,}000 / 1{,}000{,}000 = \$7.50$.

- C is wrong: the base is the full fully diluted count, not founders' shares alone.

### Q29

**What is the purpose of an option pool in a cap table?**

- A) To reserve shares for future employee grants before they are formally issued
- B) To hold shares on behalf of investors during a lock-up period
- C) To record shares that have been repurchased by the company
- D) To protect existing shareholders from dilution in future rounds

> [!success] Answer: **A**
> The [[Option Pool]] holds shares set aside for future employee grants. It counts in fully diluted capital even before the options are granted.

- B is wrong: lock-ups are a different mechanism.
- C is wrong: repurchased shares are treasury shares.
- D is wrong: a pool is itself a source of dilution, not protection from it.

### Q30

**An investor requires that the option pool be created pre-money. Who bears the dilution from this pool?**

- A) The investor, because they are the most recent entrant
- B) The existing founders and shareholders
- C) All shareholders equally, including the new investor
- D) Only the employees who receive grants from the pool

> [!success] Answer: **B**
> A pool created pre-money is counted in the pre-round fully diluted shares, so it reduces the **existing** holders; the investor's percentage is fixed by investment over post-money and is not diluted by it. (The lecture slide only says the pool is "often created pre-money"; the who-bears-it reasoning is the standard background the lecture note records.)

- A is wrong: the pre-money condition is precisely to keep the investor out of it.
- C is wrong: it would be shared only if the pool were created post-money.
- D is wrong: employees receive the grants, they do not bear dilution.

### Q31

**What is a "down round"?**

- A) A round in which the company repurchases shares from investors
- B) The first funding round after the seed stage
- C) A new funding round at a lower valuation than the previous round
- D) A reduction in the number of authorized shares

> [!success] Answer: **C**
> A down round prices shares below the previous round. It is the trigger for [[Anti-Dilution]] protection.

- A is wrong: a repurchase is a buyback.
- B is wrong: that is just a later round (often Series A).
- D is wrong: it concerns authorised capital, not valuation.

### Q32

**Under Full-Ratchet anti-dilution protection, what happens to an existing investor's conversion price if a down round occurs?**

- A) It is adjusted using a weighted average of all rounds
- B) It remains unchanged to protect founders
- C) It doubles to compensate for the down round loss
- D) It resets to the lower price of the new round

> [!success] Answer: **D**
> Full ratchet resets the investor's price **all the way down** to the new round's lower price, however few shares the down round sells.

- A is wrong: that is the broad-based weighted average.
- B is wrong: no protection at all.
- C is wrong: the conversion price moves **down**, not up (a higher price would protect the investor less).

### Q33

**Which anti-dilution mechanism is considered most founder-friendly?**

- A) Broad-Based Weighted Average
- B) Full-Ratchet
- C) Double-trigger acceleration
- D) Pay-to-play provisions

> [!success] Answer: **A**
> Of the two mechanisms the lecture names, broad-based weighted average adjusts the price by a **blended** amount, so it hurts founders far less than the full ratchet's complete reset.

- B is wrong: the harshest on founders (Q32).
- C is wrong: double-trigger acceleration is a vesting concept, not an anti-dilution mechanism.
- D is wrong: pay-to-play is not covered in the lecture.

> [!note] Source note
> The lecture names the two mechanisms but does not rank them; the founder-friendliness ranking follows from how each one works (Q32) and is standard background. Key kept.

### Q34

**A cap table is described as a "living document" because:**

- A) It is stored online and accessible to all employees at all times
- B) It must be updated with every equity event such as new rounds, grants, and conversions
- C) It automatically calculates valuations using live market data
- D) It is replaced entirely at each funding round

> [!success] Answer: **B**
> It changes as the company hires, raises and issues new instruments.

- A is wrong: it is about change, not access.
- C is wrong: it does not compute valuations from market data.
- D is wrong: it is updated, not replaced.

### Q35

**What does "issued share capital" refer to?**

- A) The total number of shares the company is authorised to issue
- B) Shares that have been authorised but not yet distributed
- C) Shares that have actually been issued and are currently held by shareholders
- D) Shares reserved for future option grants

> [!success] Answer: **C**
> Issued capital = shares actually issued and held by founders, investors and employees: "equity in hand today".

- A is wrong: that is **authorised** capital.
- B is wrong: authorised but undistributed shares are not issued.
- D is wrong: reserved shares are the [[Option Pool]], counted only in fully diluted capital.

### Q36

**Post-money valuation equals:**

- A) Investment amount minus company debt
- B) Pre-money valuation divided by the investor's ownership percentage
- C) Total assets of the company after investment
- D) Pre-money valuation plus the investment amount

> [!success] Answer: **D**
> $\text{Post-money} = \text{Pre-money} + \text{Investment}$, the lecture's foundational equation ([[Post-Money Valuation]], [[Pre-Money Valuation]]). Case study: $7.5\text{M} + 2.5\text{M} = \$10\text{M}$.

- A is wrong: debt has no role in this formula.
- B is wrong: it is **investment** divided by the ownership percentage that gives post-money.
- C is wrong: valuation is not book assets.

### Q37

**What is dilution in the context of a cap table?**

- A) The decrease in an existing shareholder's ownership percentage when new shares are issued
- B) The reduction in share value due to poor company performance
- C) The process of converting debt into equity
- D) The buyback of shares by the company from existing shareholders

> [!success] Answer: **A**
> [[Dilution]]: new shares lower existing holders' **percentage**; the aim is that the smaller slice of a larger pie is worth more.

- B is wrong: that is a fall in value, not in percentage.
- C is wrong: conversion can cause dilution but is not what dilution means.
- D is wrong: a buyback does the opposite (it raises the remaining holders' percentage).

### Q38

**Why can't you simply multiply the target ownership percentage by the current number of shares to determine how many new shares to grant?**

- A) Because the target percentage must first be approved by the Israel Tax Authority
- B) Because the total share count increases after the grant, so the percentage must be calculated on the new larger total
- C) Because warrants and convertible notes change the calculation retroactively
- D) Because option pool shares are excluded from all ownership calculations

> [!success] Answer: **B**
> The new shares are part of the total they are measured against, so the grant is computed **post-issuance**. Derivation:

$$
\frac{N}{S + N} = p \;\Rightarrow\; N(1 - p) = pS \;\Rightarrow\; N = \frac{pS}{1 - p}
$$

- A is wrong: no ITA approval of a target percentage exists.
- C is wrong: these matter for the base count, but not retroactively.
- D is wrong: pool shares are **included** in fully diluted capital.

### Q39

**In the formula for granting new shares: New Shares = (Current Shares x Target%) / (1 - Target%), what does the denominator (1 - Target%) account for?**

- A) The vesting schedule of the new shares over time
- B) The tax liability on the shares at grant date
- C) The increase in total share count after the new shares are issued
- D) The anti-dilution adjustment for previous investors

> [!success] Answer: **C**
> The denominator corrects for the total growing, so the holder reaches the target percentage of the **new, larger** total.

- A and B are wrong: vesting and tax do not appear in the formula.
- D is wrong: the formula has no anti-dilution term.

### Q40

**An investor receives 20% ownership in a company for a $4M investment. What was the post-money valuation?**

- A) $16 million
- B) $24 million
- C) $4 million
- D) $20 million

> [!success] Answer: **D** (my working agrees)

$$
\text{Post-money} = \frac{\$4\text{M}}{0.20} = \$20\text{M}
$$

Check: pre-money $= 20 - 4 = \$16\text{M}$, and $4 / 20 = 20\%$.

- A is wrong: that is the **pre**-money.
- B is wrong: $20 + 4$, adding the investment to the post-money.
- C is wrong: that is just the investment.

---

## Disagreement log

| Q | Key | My view | Detail |
|---|---|---|---|
| Q2 | B (trustee) | Wording flaw | Agreements are deposited **with** the trustee, by the company; "which party deposits" literally points at the company. Key kept. |
| Q9 | A (90 days) | Agrees, minor caveat | Lec_06 does not say what the 90 days run from. |
| Q28 | D | Agrees, minor caveat | A and B are numerically equivalent in a clean round; D is the lecture's formula. |

Everything else (37 questions) agrees with my independent solution.

## Related notes

- [[Lec_06-Employee Stock Option Plans (ESOP)]]
- [[Lec_08-Capitalization Table Basics]]
- [[PS_01-Midterm Assignment — Venture Legal Plan]]: the group project where the venture's own ESOP and cap table choices would apply
