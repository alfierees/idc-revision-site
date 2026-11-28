---
title: "Graph Gallery"
subject: legal-and-tax
type: reference
description: "The course as pictures, two of them interactive: a funding round on a cap table (pre-money, post-money, price per share, the option pool pre or post money, sizing a grant) and an option grant over time (cliff, vesting, leaving, the Section 102 clock), plus decision trees for Section 102, the IP regimes and the GDPR."
course: Legal and Tax Aspects of Entrepreneurship
semester: 1
year: 2
order: 7
tags:
  - legal-and-tax
  - exam-prep
  - graphs
---

> Step through each explorer with the arrows (or press play), then use the last step to change the numbers. The decision trees are the order to ask the questions in an MCQ or a case.

## 1. A funding round on the cap table (cheat sheet §8)

Lecture 8's case study: \$2.5M for 25%, fully diluted. The bar's length is the share count, so the founders' slices keep their length while their percentages fall. In the last step, flip the pool between pre-money and post-money and watch who pays for it.

```graph
type: legal-cap-table
```

## 2. An option grant over time (cheat sheet §7)

4,800 options with a 4-year vesting schedule and a 1-year cliff. The green zone starts **24 months after the grant**, not after vesting or exercise. In the last step, move the leaving and sale dates and switch the reason for leaving.

```graph
type: legal-esop-timeline
```

## 3. Which tax rule?

```mermaid
flowchart TD
    A[Options granted] --> B{Employee or officer?}
    B -- "No: consultant, service provider" --> S3["Section 3(i): taxed at exercise, ordinary income"]
    B -- Yes --> C{Controlling shareholder?}
    C -- Yes --> S3
    C -- No --> D{Trustee and Capital Gain Track elected?}
    D -- No --> OI["Ordinary Income or Non-Trustee track: marginal rate, up to ~59%"]
    D -- Yes --> E{Sold 24 months or more after the grant?}
    E -- Yes --> CG["25% capital gains tax, at sale"]
    E -- No --> OI2["Marginal rate on the gain"]
```

## 4. Which IP right?

```mermaid
flowchart TD
    A[What do you want to protect?] --> B{A name, logo or sign?}
    B -- Yes --> TM["Trademark: registered, renewable"]
    B -- No --> C{The look of a product?}
    C -- Yes --> DS["Design: registered, limited term"]
    C -- No --> D{Creative expression: code, UI, text?}
    D -- Yes --> CR["Copyright: automatic, life + 70"]
    D -- No --> E{"A technical invention, and fine to publish it?"}
    E -- Yes --> PT["Patent: registered, 20 years from filing"]
    E -- No --> TS["Trade secret: while it stays secret, with reasonable efforts"]
```

Whichever it is, the **creator** owns it until a **written assignment** to the company.

## 5. Does the GDPR bite, and what do you need?

```mermaid
flowchart TD
    A[Personal data] --> B{"Established in the EU, or data of people in the EU?"}
    B -- No --> X[GDPR does not apply]
    B -- Yes --> C{"A lawful basis under Art. 6?"}
    C -- No --> F["Unlawful: fines up to €20M or 4%, whichever is higher"]
    C -- Yes --> D{"Relying on consent?"}
    D -- Yes --> G["Freely given, specific, informed, an affirmative act before collection: not a cookie notice"]
    D -- No --> H{"High risk: AI, health, financial data?"}
    G --> H
    H -- Yes --> I["DPIA first (Art. 35)"]
    H -- No --> J["Privacy by design (Art. 25), RoPA (Art. 30), DPO if required"]
    I --> J
    J --> K{"Data leaves the EU?"}
    K -- Yes --> L["Adequacy decision, SCCs or BCRs"]
```

## 6. Is it a contract?

```mermaid
flowchart TD
    A[A signed document] --> B{"Gmirat da'at: an objective intention to be bound?"}
    B -- "No: titled non-binding" --> N["No contract. At most s.12 damages for bad-faith negotiation"]
    B -- Yes --> C{"Mesuyamut: the essential terms are definite?"}
    C -- No --> N2["No contract (gaps can be filled only if the core is there: s.26)"]
    C -- Yes --> D{"Writing required? (real estate, s.8 Land Law)"}
    D -- "Required and missing" --> W["Not enforceable, unless good faith saves it (Kalmer v Gai)"]
    D -- "Not required, or present" --> E{"Legal and not against public policy?"}
    E -- No --> V["Void (s.30)"]
    E -- Yes --> OK["A binding contract. No consideration needed in Israel"]
```

## 7. The startup lifecycle and its legal to-dos

```mermaid
flowchart LR
    P["Pre-incorporation: founders' agreement, NDAs, protect the IP"] --> I["Incorporation: register, Articles, assign IP to the company, ESOP"]
    I --> R["Rounds: term sheet, due diligence, investment agreement, amend the Articles"]
    R --> E["Exit: M&A, secondary sale or IPO; tax planning"]
```

## 8. Who gets paid first in an insolvency

```mermaid
flowchart TD
    S[Secured creditors] --> P["Priority creditors: employees, tax"]
    P --> U[Unsecured creditors]
    U --> L["Subordinated shareholder loans (Northern Chicks)"]
    L --> SH[Shareholders]
```
