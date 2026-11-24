---
title: The Three Approaches to Measuring GDP
week: 2
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
lecture: "Recitation 02 — National Accounting: Value-Added, Income & Expenditure Approaches"
instructor: Yosi Ganel
date: 2026-07-14
tags:
  - macro-economics-intro
  - national-accounting
  - gdp
  - value-added
  - income-approach
  - expenditure-approach
  - uses-and-resources
aliases:
  - Intro Macro Recitation 2
  - Three Ways to Measure GDP
  - National Accounting
  - Value-Added Income Expenditure
subject: principles-of-macro
in_scope: true
---

# The Three Approaches to Measuring GDP

> Part of: [[Macro-Economics (Intro)]] | Key concepts: [[Gross Domestic Product]], [[Value-Added Approach]], [[Income Approach]], [[Expenditure Approach]], [[Uses and Resources]], [[Net Exports]], [[Depreciation]]

---

## 📚 What This Recitation Covers

> [!info] The big picture
> [[Rec_01-Nominal & Real GDP, Price Indices & GNP|Recitation 1]] answered *why* we measure output in money terms. This recitation answers *how*. There are **three independent ways to compute the same GDP number**, and — crucially — they must all give the identical answer. That is not a coincidence: it is the fundamental identity of national accounting.
>
> The three lenses are: ==value-added== (what each producer adds at its stage), ==income== (what the factors of production earn), and ==final expenditure== (what is spent on final goods). Every exam question in this chapter is some variation of "here's a profit-and-loss table, now reconcile the three approaches — or use two of them to back out the third."

The circular-flow logic behind the identity: every shekel of value a firm adds becomes income to some factor of production (wages, rent, interest, profit), and that income is ultimately spent on final goods. Production = income = expenditure, always.

$$\boxed{Y = \text{Value Added} = \text{Originated Income} = \text{Final Expenditure}}$$

---

## 🧱 A Concrete Supply Chain — The Steel-to-Cars Example

The recitation opens with a numerical economy to show the three approaches converge. Trace the transactions:

- A **steel producer** makes \$4,000 of steel. One quarter (\$1,000) is sold to a **machine producer**; three quarters (\$3,000) to a **car producer**.
- The **machine producer** turns \$1,000 of steel into machines sold to the car producer for \$2,000.
- A **tire producer** sells \$500 of tires to the car producer.
- The **car producer** buys steel (\$3,000), machines (\$2,000) and tires (\$500), pays workers \$2,000 in wages, and sells \$5,000 of cars to consumers.

> [!warning] The double-counting trap
> If you naïvely add every sale — 4,000 + 2,000 + 500 + 5,000 = 11,500 — you massively overstate output. The steel is counted once as steel, again inside the machine, again inside the car. GDP must count each unit of value **exactly once**.

### Value-Added approach

Each firm's contribution = its sales − what it bought from other firms.

| Firm | Sales | − Inputs from others | = Value added |
|------|-------|----------------------|---------------|
| Steel | 4,000 | 0 | **4,000** |
| Machines | 2,000 | 1,000 (steel) | **1,000** |
| Tires | 500 | 0 | **500** |
| Cars | 5,000 | 3,000 + 2,000 + 500 = 5,500 | **−500** |
| | | **Total** | **5,000** |

> [!tip] Negative value added is fine here
> The car firm's value added is *negative* in this stripped-down example because it paid \$5,500 for inputs but sold only \$5,000 of cars (it is running at a loss, ignoring the wage split). The approach still works: the negatives cancel the intermediate goods double-counted upstream, leaving exactly the \$5,000 of final output.

### Income approach

Sum what every factor of production earns. Here the only explicit income shown is the car workers' \$2,000 wage; the residual is firm profit. Reconciling all stages again yields:

$$\text{GDP}_{\text{income}} = 5{,}000$$

### Final Expenditure approach

Only **final** sales to consumers count — the \$5,000 of cars. Steel, machines and tires are intermediate inputs that never reach a final user directly.

$$\text{GDP}_{\text{expenditure}} = \text{Cars} = 5{,}000$$

> [!info] All three agree
> Value added (5,000) = Income (5,000) = Final expenditure (5,000). This equality is the whole point — the three approaches are three views of one economy. ^three-approaches

---

## 🧾 The Profit-and-Loss Report — Deriving Value Added Formally

To compute a firm's value added rigorously, we read its **profit-and-loss (P&L) report**. The full statement looks like:

$$\text{Profit} = \text{Sales} - \text{Inventory}_{\text{start}} + \text{Inventory}_{\text{end}} - \text{Raw materials} - \text{Depreciation} - \text{Wages} - \text{Rent \& interest}$$

The recitation rearranges this into a two-column identity by moving wages, rent and interest across to sit with profit:

| **Net Value Added** (left) | **Originated Income** (right) |
|----------------------------|-------------------------------|
| + Sales | + Wages |
| − Inventory at start of year | + Rent and interest |
| + Inventory at end of year | + Profit |
| − Payments for raw materials from other firms | |
| − Depreciation | |

Both columns are equal — that is the identity $\text{Net Value Added} = \text{Originated Income}$.

### Reading the left column (how value added is built up)

$$\underbrace{\text{Sales} + \Delta\text{Inventory}}_{\text{Production of the firm}} \;\;\xrightarrow{-\text{ raw materials}}\;\; \underbrace{\text{Gross Value Added}}_{} \;\;\xrightarrow{-\text{ depreciation}}\;\; \underbrace{\text{Net Value Added}}_{}$$

> [!info] Gross vs. Net value added
> **==Gross value added==** = production − raw materials bought from other firms.
> **==Net value added==** = gross value added − ==depreciation== (the wearing-out of capital).
> The distinction matters because output and investment must be measured *consistently* — both gross or both net. ^gross-net

### Reading the right column (the four factors of production)

The right side is total compensation paid to the factors that took part in production. There are **four** factors, each with its own income type:

| Factor of production | Income it receives |
|----------------------|--------------------|
| Workers (labour) | Wages |
| Physical-capital owners (machines, real estate) | Rent |
| Financial-capital owners (lenders) | Interest |
| Owners / shareholders | Profit |

> [!tip] Why the two columns must match
> Everything a firm *adds* to the product (left) has to be *paid out* to someone (right) — there is nowhere else for the value to go. Value created = income distributed. This is the accounting reason production and income always coincide.

$$\boxed{\text{Value added of the firm} = \text{Originated income}}$$

---

## 🏛️ Adding the Government

The steel-and-cars economy assumed only firms produce. But the **government** also contributes to output — it just behaves differently: it does **not** maximise profit, and instead provides services (health, education, security) to citizens.

The problem: government spending is a mix of things, and we must not double-count. Suppose the government spends 1m NIS on health. That money goes to:

1. **Buying products** from private firms (medicines, equipment) — *already counted* in those firms' value added.
2. **Paying salaries** to doctors and administrators.
3. **Paying rent** on health-service real estate.

> [!warning] What counts as government value added
> Only the parts *not already captured elsewhere*. Products bought from firms are already in the firms' value added, so we strip them out. What remains is:
> $$\text{Government value added} = \text{salaries} + \text{rent paid by government}$$ ^gov-value-added

This gives the two economy-wide output identities once government is included:

$$Y = \underbrace{\sum \text{firm value added}}_{\text{private sector}} + \underbrace{\text{government value added}}_{\text{salaries + rent}}$$
$$Y = \sum \text{originated income} + \text{government originated income}$$

---

## 💰 The Final Expenditure Approach — Uses & Resources

The third lens uses the ==uses-and-resources report==. **Resources** = everything the economy has available; **Uses** = everything it is spent on. They must balance.

### Closed economy (no trade)

In a closed economy the only resource is domestic output $Y$. It can be used three ways:

| Use | Symbol | What it is |
|-----|--------|-----------|
| Private consumption | $C$ | Household spending on firms' products (food, clothing, media…) |
| Government expenditure | $G$ | Spending on services to citizens (security, health, education…) |
| Investment | $I$ | Buildings, infrastructure, machines, equipment (*firms only in this course*) |

$$\boxed{Y = C + I + G}$$

> [!warning] Measure output and investment the same way
> If output on the resources side is **net** of depreciation, then investment on the uses side must also be **net** of depreciation. Mixing gross output with net investment (or vice versa) breaks the identity. This is the single most common exam slip. ^net-consistency

### Open economy (with trade)

Now add **imports** (IM) and **exports** (EX). Imports are goods the economy *did not produce* but can *use*, so they join the **resources** side. Exports are domestic output *used abroad*, so they join the **uses** side:

$$Y + IM = C + I + G + EX$$

Rearranging to the standard form gives ==net exports== $NX = EX - IM$:

$$\boxed{Y = C + I + G + (EX - IM) = C + I + G + NX}$$

> [!info] Import surplus vs. export surplus
> - If $IM > EX$ the economy runs an **import surplus** ($IM - EX > 0$): it uses more than it produces, financed from abroad.
> - If $EX > IM$ it runs an **export surplus** ($EX - IM > 0$): it produces more than it uses domestically.
> Watch the sign the question asks for — "import surplus" and "export surplus" are negatives of each other. ^trade-surplus

---

## 🧮 Worked Problem — MacroLand (All Three Approaches)

> [!example] The data
> - Households spent **900** on consumption.
> - Firms invested **280** in new machinery/infrastructure.
> - Final-goods firms sold **1,250** using **300** of intermediate goods.
> - Final firms cleared **150** from inventory but **170** of new goods went unsold.
> - Government spent **100** on wages, **50** on rent, **70** on purchases from firms.
> - Intermediate producers sold **300** with no purchases from others.
> - Final firms paid **250** wages + **100** rent; intermediate firms paid **100** wages + **30** rent.

### (a) Expenditure approach — $Y = C + I + G$

**Investment.** Fixed investment plus the *change in inventory* (unsold new output adds to inventory; goods cleared from inventory subtract):

$$I = 280 - 150 + 170 = 300$$

**Government.** Only wages and rent are government value added on the *income/value-added* side, **but** on the *expenditure* side $G$ is total government spending including purchases from firms:

$$G = 100 + 50 + 70 = 220$$

**Output:**

$$Y = C + I + G = 900 + 300 + 220 = \boxed{1{,}420}$$

> [!tip] 🗣️ In plain English
> Add up what households, firms (including unsold stock) and the government spend, and **MacroLand's output** comes to 1,420. The twist is that **unsold goods count as investment** (inventory), and $G$ includes everything the government buys, not just its wages.

### (b) Value-added approach

$$\text{Intermediate goods VA} = 300 - 0 = 300$$
$$\Delta\text{Inventory} = 170 - 150 = 20$$
$$\text{Final goods VA} = 1{,}250 - 300 + 20 = 970$$
$$\text{Government VA} = \text{wages + rent} = 100 + 50 = 150$$
$$Y = 970 + 300 + 150 = \boxed{1{,}420}$$

> [!tip] 🗣️ In plain English
> Here you only count what each firm *adds* on top of what it bought from others, so **intermediate goods are not double-counted**. Firms add 970 and 300, the government adds 150, and you get the same 1,420.

### (c) Income approach

$$\text{Total wages} = 250 + 100 + 100 = 450$$
$$\text{Total rent} = 100 + 30 + 50 = 180$$

Profit of each firm = sales − purchases + Δinventory − wages − rent:

$$\text{Final firms} = 1{,}250 - 300 + 20 - 250 - 100 = 620$$
$$\text{Intermediate firms} = 300 - 0 - 100 - 30 = 170$$
$$\text{Total profit} = 620 + 170 = 790$$
$$Y = \text{Wages} + \text{Rent} + \text{Profit} = 450 + 180 + 790 = \boxed{1{,}420}$$

> [!tip] The reconciliation is the answer key
> All three routes land on **1,420**. On an exam, if two approaches disagree you have made an arithmetic error — most often forgetting the inventory change (+20) or mixing gross/net investment. Use the third approach as a self-check.

> [!tip] 🗣️ In plain English
> Every bit of value created gets paid out to someone as **wages, rent or profit**. Add those up (450 + 180 + 790) and you land on 1,420 again, so the **three approaches always agree**.

---

## 📐 The Standard Exam Recipe (Ex. 2 Question Type)

Every "Ex. 2" question follows the same three-step machine. Given firms' P&L tables and some trade/government facts, they ask you to back out one missing piece (usually $C$ or the trade surplus).

> [!info] The three-step method
> **Step 1 — Value added of each firm.** Build the value-added column: $\text{Sales} + \Delta\text{Inv} - \text{Payments to others} - \text{Depreciation}$.
> **Step 2 — Output $Y$.** Aggregate firm value added + government value added (= government wages + rent).
> **Step 3 — Uses & resources.** Plug into $Y = C + I + G + NX$, converting **gross** investment to **net** by subtracting depreciation, then solve for the unknown. ^exam-recipe

### Ex. 2 Q1 — export surplus (open economy, no government)

| | Firm A | Firm B |
|---|--------|--------|
| Sales | 100 | 200 |
| Raw materials | 70 | 80 |
| Wages & rent | 40 | 20 |
| Depreciation | 10 | 20 |
| Dividends | 60 | 0 |

**Step 1 — value added** (Sales − raw materials − depreciation, no inventory change):
$$\text{A} = 100 - 70 - 10 = 20 \qquad \text{B} = 200 - 80 - 20 = 100$$

**Step 2 — output:** $Y = 20 + 100 + 0 = 120$.

**Step 3 — net investment.** Firm B's gross investment is 40, A invested nothing; net = gross − depreciation:
$$I = 40 + 0 - (10 + 20) = 40 - 30 = 10$$
With $C = 130$, no government, solve $Y = C + I + NX$:
$$120 = 130 + 10 + NX \Rightarrow NX = -20$$

> [!warning] Sign check
> $NX = EX - IM = -20$ means an *import* surplus of 20, i.e. an **export surplus of −20**. Answer **E**. Read the question's wording — it asks for the export surplus, which is negative here.

> [!tip] 🗣️ In plain English
> Firms produce 120 but the country wants to use 130 on consumption plus 10 on net investment, so it must **import the 20 gap**. That makes the **export surplus negative (-20)**, which is the same thing as an import surplus of 20.

### Ex. 2 Q2 — back out consumption (closed, no government)

| | Firm A | Firm B |
|---|--------|--------|
| Sales | 3,000 | 4,000 |
| Raw materials | 1,400 | 800 |
| Depreciation | 150 | 400 |

$$\text{VA}_A = 3{,}000 - 1{,}400 - 150 = 1{,}450 \qquad \text{VA}_B = 4{,}000 - 800 - 400 = 2{,}800$$
$$Y = 1{,}450 + 2{,}800 = 4{,}250$$

Gross investment 1,500 → net $= 1{,}500 - (150 + 400) = 950$. Then:
$$4{,}250 = C + 950 + 0 + 0 \Rightarrow C = 3{,}300 \quad \textbf{(answer A)}$$

> [!tip] 🗣️ In plain English
> Work out what the firms really add (4,250), take off the **net investment** of 950, and everything left over must be **consumption**, which is 3,300. Remember to subtract depreciation from investment first.

### Ex. 2 Q3 — closed economy *with* government

Firms A and B each have value added 700 (sales 1,400/1,300 − raw 600/500 − depreciation 100/100). Government purchased 600 from firms and paid 400 in wages+rent.

$$Y = 700 + 700 + \underbrace{400}_{\text{gov VA = wages+rent}} = 1{,}800$$
$$I_{\text{net}} = (400 + 300) - (100 + 100) = 500$$
$$G = \underbrace{600}_{\text{purchases}} + \underbrace{400}_{\text{wages+rent}} = 1{,}000$$
$$1{,}800 = C + 1{,}000 + 500 \Rightarrow C = 300 \quad \textbf{(answer A)}$$

> [!warning] Government enters twice — but in different roles
> Government wages+rent (400) is added to **output** $Y$ as government *value added*. Government *total spending* (purchases 600 + wages+rent 400 = 1,000) is the $G$ on the **uses** side. Do not confuse the two: value added ≠ expenditure for the government. ^gov-double-role

> [!tip] 🗣️ In plain English
> The government's **wages and rent** (400) count towards output, but its **total spending** (1,000) is what counts as $G$ when you use up the output. Once you plug in 1,800 and 1,000, **consumption** is left at 300.

### Ex. 2 Q4 — open economy with government and trade

| | Firm A | Firm B |
|---|--------|--------|
| Sales | 4,000 | 3,000 |
| Raw materials | 800 | 1,400 |
| Depreciation | 400 | 150 |

$$\text{VA}_A = 4{,}000 - 800 - 400 = 2{,}800 \qquad \text{VA}_B = 3{,}000 - 1{,}400 - 150 = 1{,}450$$

Government pays 300 wages (balanced budget), so government VA = 300:
$$Y = 2{,}800 + 1{,}450 + 300 = 4{,}550$$
$$I_{\text{net}} = 800 - (400 + 150) = 250 \qquad G = 500 + 300 = 800 \qquad NX = +400$$
$$4{,}550 = C + 800 + 250 + 400 \Rightarrow C = 3{,}100 \quad \textbf{(answer D)}$$

> [!tip] 🗣️ In plain English
> Output is 4,550, and **government spending** (800), **net investment** (250) and **net exports** (+400) all take a slice of it. Whatever is left is **consumption**, which is 3,100.

---

## 🎯 Summary — Recitation 2 in Five Ideas

1. **One GDP, three lenses.** Value added, originated income, and final expenditure are three views of the same number and must reconcile: $Y = \text{VA} = \text{Income} = C + I + G + NX$.
2. **Value added avoids double-counting.** Each firm contributes sales + Δinventory − inputs from others − depreciation. Summing these counts every unit of value once.
3. **Income = value added because value must be paid out.** Wages, rent, interest and profit exhaust what a firm adds — the four factors of production absorb it all.
4. **Government is special.** Its value added is only *wages + rent* (purchases are already in firms' value added), but its expenditure $G$ on the uses side includes everything it spends.
5. **The exam machine has three steps.** (1) firm value added, (2) aggregate to $Y$ adding government wages+rent, (3) plug into $Y = C + I + G + NX$ with **net** (not gross) investment, and solve for the unknown.

---

## 📎 Related Notes

- Previous: [[Rec_01-Nominal & Real GDP, Price Indices & GNP]] — real vs. nominal GDP, CPI/PPI, GDP vs. GNP
- Next: [[Rec_03-Capital Accumulation, the Savings Identity & GNP vs GDP|Rec 03]]
- Reference: [[Key Terms and Definitions]] (course glossary)
- Concepts introduced here: [[Value-Added Approach]], [[Income Approach]], [[Expenditure Approach]], [[Uses and Resources]], [[Net Exports]], [[Depreciation]], [[Gross Value Added]], [[Factors of Production]]
- Builds on: [[Gross Domestic Product]] · Builds toward: [[Aggregate Demand]], [[Aggregate Supply]]
