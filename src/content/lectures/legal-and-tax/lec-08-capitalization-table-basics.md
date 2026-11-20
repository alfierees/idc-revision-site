---
title: Capitalization Table Basics for Founders
week: 8
semester: 1
year: 2
academic_year: "2025-26"
course: "Legal and Tax Aspects"
lecture: "Session 8 — Capitalization Table Basics for Founders"
instructor: "Guest lecture — Adv. Mor Kadosh (Naschitz Brandes Amir); course convenor Dr. Yuval Reinfeld"
date: 2026-01
tags:
  - legal-and-tax
  - cap-table
  - dilution
  - valuation
  - pre-money
  - post-money
  - fully-diluted
  - option-pool
  - anti-dilution
aliases:
  - Legal & Tax Session 8
  - Cap Table Basics
subject: legal-and-tax
in_scope: true
---

# Capitalization Table Basics for Founders

> Part of: [[Legal and Tax Aspects]] | Key concepts: [[Cap Table]], [[Dilution]], [[Fully Diluted Share Capital]], [[Pre-Money Valuation]], [[Post-Money Valuation]], [[Price Per Share]], [[Option Pool]], [[Anti-Dilution]]

> [!info] Source
> Guest lecture by Adv. Mor Kadosh (Naschitz Brandes Amir), January 2026. The deck is short (10 slides, image-only) and is a numeric toolkit: how to count shares, how to size a grant, and how funding-round valuation maths fits together. It builds directly on [[Lec_06-Employee Stock Option Plans (ESOP)|the ESOP lecture]], which covers the legal and tax side of the options granted here.
> The slides carry a disclaimer: informational only, not legal advice.

## 1. What is a cap table?

A **[[Cap Table]]** (capitalization table) is a table or spreadsheet that manages the company's **share capital**: who holds what. It is a **living document** that changes as the company grows (new hires, new rounds, new instruments).

$$
\text{Ownership \%} = \frac{\text{shares held by a specific shareholder}}{\text{total outstanding shares}}
$$

The slide closes by posing two open questions to the founders, without answering them: **who manages the cap table**, and **how is the initial ownership structure decided**.

> [!note] Not answered on the slides
> The deck only raises these two questions. Practical points to bring to the discussion (founders' contributions, roles, vesting) belong to the founders' agreement material, not to this deck.

## 2. Two ways to count shares

"Total shares" can mean two different numbers, and every later calculation depends on which one you use.

| | **Issued share capital** | **[[Fully Diluted Share Capital]]** |
|---|---|---|
| What it counts | Shares **actually issued** and currently held by founders, investors and employees | All issued shares **plus** every potential share that could be created from convertible securities |
| Includes | Issued shares only | Stock options (**granted and ungranted** from the option pool), warrants, convertible notes |
| Intuition | The equity "in hand" today | The equity that **could exist** once everything converts or is exercised |
| Who uses it | | Investors and lawyers negotiate on this number |

> [!tip] Key takeaway (slide 3)
> Investors and lawyers **always negotiate on the fully diluted number**. A founder quoting "I own 60%" on issued shares only may own far less fully diluted once the option pool and convertibles are counted.

## 3. Dilution

**[[Dilution]]**: when the company issues new shares, the ownership **percentage** of existing shareholders decreases.

- Dilution happens **every time new equity is created for a new stakeholder** (an investor, an employee, a convertible converting).
- Your percentage goes down, but the goal is that the **value** of your smaller slice of a **larger pie** goes up.

> [!example] The slide's scenario: granting employee options
> You want to hire a key engineer and offer **2% of the company** in stock options.
> **The challenge:** you cannot simply compute 2% of the current total shares. Doing so gives them **less than 2%** of the new, larger total once their shares are added. The grant must be calculated on a **post-issuance basis**.

## 4. Sizing a grant: shares for a target percentage

**Step 1, define the variables**

- **Total current shares**: the company's fully diluted share count **before** the new grant.
- **Target ownership %**: the percentage the new holder should own (e.g. 2% = 0.02).

**Step 2, the formula**

$$
\boxed{\text{New shares to grant} = \frac{\text{Total current shares} \times \text{Target ownership \%}}{1 - \text{Target ownership \%}}}
$$

**Step 3, why it works.** The denominator $(1 - \text{target \%})$ accounts for the total share count increasing. It makes the employee's holding equal the target percentage **of the new, larger total**.

> [!note] Reconstructed from the slides: the derivation
> Let $S$ be current shares, $p$ the target percentage and $N$ the new shares. We need
>
> $$
> \frac{N}{S + N} = p
> $$
>
> Then $N = p(S + N)$, so $N(1 - p) = pS$, giving $N = \dfrac{pS}{1 - p}$. This is exactly the slide formula. The naive answer $N = pS$ ignores that $N$ itself enlarges the denominator.

> [!example] Illustrative numbers (mine, not from the slides)
> Assume 1,000,000 fully diluted shares and a 2% target.
>
> | Method | New shares | Total after | Holder's actual % |
> |---|---|---|---|
> | Naive: $0.02 \times 1{,}000{,}000$ | 20,000 | 1,020,000 | 1.96% |
> | Correct: $\dfrac{1{,}000{,}000 \times 0.02}{0.98}$ | 20,408 (rounded) | 1,020,408 | 2.00% |

> [!warning] Common mistake
> Multiplying current shares by the target percentage under-delivers every time. The gap grows with the target: asking for 20% naively gives only 16.7% of the new total.

## 5. Valuation vocabulary: pre-money vs post-money

$$
\text{Pre-money valuation} + \text{Investment} = \text{Post-money valuation}
$$

| | **[[Pre-Money Valuation]]** | **[[Post-Money Valuation]]** |
|---|---|---|
| Meaning | The agreed value of the company **before** the new investment is added | The value of the company **immediately after** the investment |
| Role | The key number **negotiated** between founders and investors | Simply pre-money plus the new capital invested |

## 6. The three funding-round formulas

The deck presents three interconnected formulas that define a financing deal.

**1. Investor's ownership and post-money valuation**

$$
\text{Ownership \%} = \frac{\text{Investment amount}}{\text{Post-money valuation}}
$$

$$
\text{Post-money valuation} = \frac{\text{Investment amount}}{\text{Ownership \%}}
$$

**2. [[Price Per Share]]** (what the new investor pays for each share)

$$
\text{Price per share} = \frac{\text{Pre-money valuation}}{\text{Pre-round fully diluted shares}}
$$

**3. The foundational equation** (a final check that all numbers align)

$$
\text{Pre-money valuation} + \text{Investment amount} = \text{Post-money valuation}
$$

> [!tip] Why price per share uses pre-money
> Pre-money value is the value of the **existing** shares only, so dividing it by the pre-round fully diluted count prices one existing share. The new investor then buys new shares at that same price.

## 7. Case study: $2.5M for 25%

An investor offers to invest **$2.5 million** for **25%** of the company on a **fully diluted** basis. What are the pre-money and post-money valuations?

1. **Start with what you know:** the investor's $2.5M is 25% of the company's value **after** their investment.
2. **Post-money:** $2.5\text{M} / 0.25 = \$10\text{M}$.
3. **Pre-money:** post-money $-$ investment $= 10 - 2.5 = \$7.5\text{M}$.

| Pre-money | Investment | Post-money | Investor's stake |
|---|---|---|---|
| $7.5M | $2.5M | $10M | 25% |

> [!note] Reconstructed from the slides: extending the case to a price per share
> The slides stop at the valuations. Using formula 2 with an **assumed** 1,000,000 pre-round fully diluted shares (not on the slides):
>
> | Quantity | Calculation | Result |
> |---|---|---|
> | Price per share | $7{,}500{,}000 / 1{,}000{,}000$ | $7.50 |
> | New investor shares | $2{,}500{,}000 / 7.50$ | 333,333 |
> | Check: investor % | $333{,}333 / 1{,}333{,}333$ | 25% |
>
> The new-share count is the same target-percentage formula as section 4: $1{,}000{,}000 \times 0.25 / 0.75 \approx 333{,}333$.

## 8. Advanced cap-table issues (flagged only)

The last content slide names two topics and gives one line each. The lecture does not develop them on the slides.

| Issue | What the slide says |
|---|---|
| **[[Option Pool]]** (employee option pool) | Often created **pre-money** as a condition of investment |
| **[[Anti-Dilution]] protection** | Mechanisms protecting investors in **down rounds**; two types named: **Full-Ratchet** and **Broad-Based Weighted Average** |

> [!note] Why "pre-money" matters here (standard background, not on the slides)
> A pool created pre-money is counted in the pre-round fully diluted shares, so it dilutes the **existing** holders (the founders), not the new investor. Likewise a full ratchet resets the investor's price to the new lower round price, whereas the broad-based weighted average adjusts it by a blended amount. Neither mechanism is explained on the slides, so check the lecture recording or your own notes before relying on these descriptions.

## Summary

- A **cap table** tracks share capital; ownership % = holder's shares / total outstanding shares. It is a living document.
- **Issued** = equity in hand today; **fully diluted** adds options (granted and ungranted), warrants and convertible notes. Negotiations use the fully diluted number.
- **Dilution** lowers your percentage; the aim is a more valuable slice of a bigger pie.
- Grant shares for a target % with $\dfrac{S \times p}{1 - p}$, because the new shares enlarge the total.
- **Pre-money + investment = post-money**; investor % = investment / post-money; price per share = pre-money / pre-round fully diluted shares.
- Case study: $2.5M for 25% gives $10M post-money and $7.5M pre-money.
- The **option pool** (often pre-money) and **anti-dilution** (full ratchet, broad-based weighted average) are the advanced items to know by name.

## Related notes

- [[Legal and Tax Aspects]]
- [[Lec_06-Employee Stock Option Plans (ESOP)]]: legal and tax treatment of the options granted from the pool
- [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]]
