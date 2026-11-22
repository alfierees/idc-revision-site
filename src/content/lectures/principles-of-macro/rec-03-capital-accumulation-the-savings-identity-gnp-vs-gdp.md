---
title: Capital Accumulation, the Savings Identity & GNP vs GDP
week: 3
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
lecture: "Recitation 03 — Chapter 1: National Accounting & Capital Accumulation"
instructor: Yosi Ganel
date: 2026-07-16
tags:
  - macro-economics-intro
  - national-accounting
  - capital-accumulation
  - savings-identity
  - gnp-vs-gdp
  - niff
  - depreciation
aliases:
  - Intro Macro Recitation 3
  - Capital Accumulation Identity
  - Savings Identity
  - National vs Domestic Product
  - NIFF
subject: principles-of-macro
in_scope: true
---

# Capital Accumulation, the Savings Identity & GNP vs GDP

> Part of: [[Macro-Economics (Intro)]] | Key concepts: [[Savings Identity]], [[Private Savings]], [[Business Savings]], [[Government Savings]], [[Investment]], [[Net Domestic Product]], [[Net Income from Foreign Factors]], [[Gross National Product]]

---

## 📚 What This Recitation Covers

> [!info] The big picture
> [[Rec_02-The Three Approaches to Measuring GDP|Recitation 2]] showed that output can be measured three equivalent ways. This recitation pushes further and asks: once the economy has produced its output, **where does the saving come from, and how does it turn into investment?** The answer is the ==capital-accumulation (savings) identity==, which links the three sectors' savings to investment and the trade balance. The second half separates ==domestic== from ==national== product — the difference being payments to foreign factors of production (==NIFF==).

The two organising formulas of the whole recitation:

$$\boxed{S_p + S_b + S_g = I + NX}$$
$$\boxed{GNP = GDP - NIFF}$$

Every question is a variation on: build the sectors' savings from a P&L table, plug into the identity to back out the missing piece (usually investment), then convert between GDP and GNP when foreign factors appear.

The recitation also works the **second two-firm problem (PS2 Q4 to Q6)**: value added per firm, output, GDP, consumption and government savings from profit and loss statements.

---

## 🏦 The Capital-Accumulation (Savings) Identity

### Why it must hold

Start from the expenditure identity $Y = C + I + G + NX$. National income is either consumed, taxed, or saved, so it can also be decomposed from the income side. Setting the two decompositions equal and rearranging, **total savings in the economy must equal investment plus net exports**:

$$S_p + S_b + S_g = I + NX \qquad\text{where } NX = EX - IM$$

> [!info] Reading the identity
> The left side is where *funds* come from — the savings of the three domestic sectors. The right side is where they *go* — into domestic capital ($I$) or into lending abroad ($NX$). A country that saves more than it invests ($S > I$) must be running a trade surplus (lending the excess abroad); one that saves less runs a deficit (borrowing from abroad). ^savings-identity

The three savings components, each computed differently:

| Sector | Savings formula | Intuition |
|--------|-----------------|-----------|
| Private ($S_p$) | Household net income − household taxes − consumption | What households keep after spending and tax |
| Business ($S_b$) | Firms' net (undistributed) profit | Profit retained inside firms, not paid out as dividends |
| Government ($S_g$) | Taxes − government spending | Budget surplus (deficit if negative) |

> [!tip] Business saving = retained earnings
> $S_b$ is *only* the profit firms did **not** distribute. Anything paid out as dividends or interest has already left the firm and become household income — it belongs in $S_p$, not $S_b$. Double-counting dividends is the classic slip. ^business-saving

---

## 🧮 Worked Problem — The Two-Firm Open Economy (PS2 Q1–Q2)

> [!example] The data
> - Government collected **730** in taxes; paid **400** in public-sector wages and **200** on goods & services.
> - Household consumption **900**; exports **300**, imports **370**.
> - Two firms report:
>
> | Firm | Revenue | Wages paid | Payments to other firms | Interest paid | Taxes paid | Dividends paid |
> |------|---------|-----------|------------------------|---------------|-----------|----------------|
> | A | 1,600 | 800 | 400 | 30 | 100 | 60 |
> | B | 1,100 | 600 | 300 | 20 | 80 | 40 |

### Step 1 — Household income

Households receive wages (private + government), plus the interest and dividends firms pay out:

$$\text{Private wages} = 800 + 600 = 1{,}400$$
$$\text{Government wages} = 400$$
$$\text{Interest + dividends} = (30 + 20) + (60 + 40) = 150$$
$$\text{Household income} = 1{,}400 + 400 + 150 = \boxed{1{,}950}$$

> [!warning] Watch the slide's arithmetic
> The lecture slide writes the interest+dividends total as **170** and household income as **1,970**, but $30+20+60+40 = 150$, giving **1,950**. The later steps correctly use **1,950**, so treat 1,970 as a typo. Always re-add the factor payments yourself. ^slide-typo

### Step 2 — Private savings $S_p$

Households don't report their own tax directly, so infer it: total taxes collected minus the taxes the firms paid.

$$\text{Household taxes} = 730 - 100 - 80 = 550$$
$$S_p = \text{Household income} - \text{taxes} - C = 1{,}950 - 550 - 900 = \boxed{500}$$

### Step 3 — Business savings $S_b$

Retained (undistributed) profit = revenue − wages − payments to others − interest − taxes − dividends:

$$S_b^A = 1{,}600 - 800 - 400 - 30 - 100 - 60 = 210$$
$$S_b^B = 1{,}100 - 600 - 300 - 20 - 80 - 40 = 60$$
$$S_b = 210 + 60 = \boxed{270}$$

### Step 4 — Government savings $S_g$

$$G_{\text{spending}} = 400 \;(\text{wages}) + 200 \;(\text{purchases}) = 600$$
$$S_g = T - G = 730 - 600 = \boxed{130}$$

### Step 5 — Net exports and the identity → **Investment**

$$NX = EX - IM = 300 - 370 = -70$$

Now plug into the savings identity and solve for $I$:

$$S_p + S_b + S_g = I + NX$$
$$500 + 270 + 130 = I + (-70)$$
$$900 = I - 70 \;\Rightarrow\; \boxed{I = 970} \quad \textbf{(Q1 answer B)}$$

> [!tip] 🗣️ In plain English
> Add up what everyone saved (households **500**, firms **270**, government **130**, so **900**). That money has to go somewhere: some of it funds **investment** at home, and the economy is also running a trade deficit of 70 (so it is *borrowing* 70 from abroad). Saved funds of 900 plus the 70 borrowed means investment is **970**.

### Step 6 — Cross-check GDP three ways (Q2)

> [!tip] The identity is only trustworthy if GDP reconciles
> Having found $I = 970$, verify with all three GDP approaches — if they agree, the savings decomposition was correct.

**Expenditure (uses):**
$$GDP = C + G + I + EX - IM = 900 + 600 + 970 + 300 - 370 = \boxed{2{,}400}$$

**Income:** wages + interest + taxes + net profit + dividends
$$= 400 + 800 + 600 + (30+20) + (100+80) + (210+60) + (60+40) = \boxed{2{,}400}$$

**Value added:** each firm's revenue − payments to other firms, plus government value added
$$A: 1{,}600 - 400 = 1{,}200 \qquad B: 1{,}100 - 300 = 800 \qquad \text{Gov} = 400$$
$$GDP = 1{,}200 + 800 + 400 = \boxed{2{,}400} \quad \textbf{(Q2 answer C)}$$

> [!info] All three agree at 2,400
> Expenditure = Income = Value-added. This is the same reconciliation principle from Recitation 2, now used as a safety net on the harder savings problem. ^gdp-reconcile

> [!tip] 🗣️ In plain English
> GDP is one number seen from three sides: what is **spent**, what is **earned**, and what is **added** at each stage of production. All three give **2,400**, so the numbers hang together.

---

## 📉 Depreciation & Net Domestic Product (PS2 Q3)

==Net Domestic Product (NDP)== is GDP after subtracting the capital that wore out during the year:

$$\boxed{\text{Depreciation} = GDP - NDP}$$

> [!example] Q3
> Given $NDP = 1{,}850$ and $GDP = 2{,}400$:
> $$\text{Depreciation} = 2{,}400 - 1{,}850 = \boxed{550} \quad \textbf{(answer B)}$$

> [!tip] 🗣️ In plain English
> **Depreciation** is the capital that wore out during the year. GDP counts it as if it were still there, NDP takes it off, so the gap between the two (**550**) is the wear and tear.

> [!warning] Gross vs. net must stay consistent
> If you work with **net** output (NDP), investment must be **net** ($I_{\text{net}} = I_{\text{gross}} - \text{depreciation}$) too. Mixing a gross output figure with a net investment figure — or vice versa — is the single most common exam error, carried over from Recitation 2. ^gross-net-consistency


---

## 🧮 Worked Problem — Two Firms and a Government (PS2 Q4–Q6)

> [!example] The data (profit and loss statements for 2000, in shekels)
> There are two business companies and a government. Exports are **15** and imports **25**, all carried out by the two firms. There was no investment in inventory, and gross fixed investment was **20** (Firm A) and **30** (Firm B).
>
> | | Firm A | Firm B |
> |---|--------|--------|
> | Sales (including overseas sales) | 100 | 200 |
> | Payments for raw materials (including purchases from abroad) | 30 | 70 |
> | Wages | 20 | 50 |
> | Interest, rent and profit payments (dividends) | 40 | 55 |
> | Depreciation | 10 | 25 |
> | Net profit not distributed | 0 | 0 |
>
> **Government budget:**
>
> | Revenue | Spending |
> |---------|----------|
> | Income tax on individuals: 180 | Salary payments: 50 |
> | | Purchases from companies: 90 |
> | | Transfer payments: 10 |

> [!todo] No solution in source (Q4)
> The slides are titled "Q4 and Q5" but no separate Q4 question text or answer appears in the source. The solution slides move directly to Q5 and Q6, so only those are answered below.

### Q5 — Which statement is correct?

> [!question] Options
> - A. Gross domestic product is equal to 340.
> - B. Net national income is 130.
> - C. Gross national product is equal to 250.
> - D. Gross national product is equal to 340.
> - E. Gross domestic product is equal to 300.

### Step 1 — Value added of each firm

Value added = sales + inventory change − payments to other firms − depreciation (there is no inventory change here):

| | Firm A | Firm B |
|---|--------|--------|
| + Sales | 100 | 200 |
| + Increase in inventory | 0 | 0 |
| − Payment to other firms | −30 | −70 |
| − Depreciation | −10 | −25 |
| **Value added** | **60** | **105** |

### Step 2 — Output (net of depreciation) in the economy

The government's value added is its salary bill (the purchases from firms are already inside the firms' output):

$$y = \underbrace{60 + 105}_{\text{firms}=165} + \underbrace{50}_{\text{government}} = \boxed{215}$$

With no information on payments to foreign factors or to local factors abroad, the slide assumes $NIFF = 0$.

### Step 3 — Add back depreciation for GDP

$$GDP = y + \text{depreciation} = 215 + (10 + 25) = 215 + 35 = \boxed{250}$$

Since $NIFF = 0$, $GNP = GDP - NIFF = 250$. **Q5 answer: C.**

> [!info] Why the others are wrong
> - **A** (GDP = 340) and **E** (GDP = 300): GDP is 250, not 340 or 300.
> - **B** (net national income = 130): net national income is $y - NIFF = 215$, not 130.
> - **D** (GNP = 340): GNP equals GDP here, which is 250.

> [!tip] 🗣️ In plain English
> Work out what each firm really **adds** (sales minus what it bought from other firms and minus wear and tear): 60 and 105. Add the government's 50 and you get **215** of net output. Put the wear and tear back (35) and **GDP is 250**. With no foreign income to worry about, **GNP is the same 250**.

### Q6 — Further to the data of Question 5

> [!question] Options
> - A. Private consumption is 70 and net investment of the economy is 15.
> - B. Private consumption is 70, government savings are minus 20.
> - C. Private consumption is 70 and government savings is minus 10.
> - D. Private consumption equals 50 and government savings equals 20.
> - E. Private consumption equals 70 and government savings equals 20.

### Step 4 — Net investment

$$I_{\text{net}} = \text{gross investment} - \text{depreciation} = (20 + 30) - (10 + 25) = \boxed{15}$$

### Step 5 — Back out private consumption

Government purchases are $G = 50 + 90 = 140$ (salaries plus purchases; transfers are not spending on output) and $NX = 15 - 25 = -10$:

$$y = C + I + G + (EX - IM)$$
$$215 = C + 15 + 140 - 10 \;\Rightarrow\; \boxed{C = 70}$$

### Step 6 — Government savings

Net taxes are taxes minus transfer payments, and government savings are net taxes minus government spending:

$$T_n = T - \text{transfer payments} = 180 - 10 = 170$$
$$S_g = T_n - G = 170 - 140 = \boxed{30}$$

**Q6 answer: A** (consumption 70 and net investment 15).

> [!info] Why the others are wrong
> - **B** and **C**: government savings are $+30$, not $-20$ or $-10$ (the government runs a surplus).
> - **D**: consumption is 70, not 50, and government savings are 30, not 20.
> - **E**: consumption of 70 is right, but government savings are 30, not 20.

> [!tip] 🗣️ In plain English
> Investment after wear and tear is $50 - 35 = 15$. Plug that, government spending of 140 and the trade deficit of 10 into $y = C + I + G + NX$ and consumption has to be **70**. The government collects 180 but hands 10 straight back as transfers, so it keeps 170 and spends 140, leaving **30 saved**. Only option A matches.

---

## 🌍 National vs Domestic Product & NIFF

The second theme distinguishes *where* production happens from *who* owns the factors doing it.

> [!info] Two different questions
> - **Domestic product (GDP):** value produced *inside the borders*, regardless of who owns the factors.
> - **National product (GNP):** value produced by the country's *own factors*, wherever they are located.

The bridge between them is ==NIFF — Net Income from Foreign Factors==:

$$NIFF = \underbrace{\text{income of foreign factors producing here}}_{\text{leaves the country}} - \underbrace{\text{income of our factors producing abroad}}_{\text{comes in}}$$

$$\boxed{GNP = GDP - NIFF}$$

> [!tip] Sign intuition
> $NIFF$ is what *leaks out* to foreigners net of what *flows in* from our nationals abroad. If foreigners earn more here than our people earn abroad, $NIFF > 0$ and national product falls short of domestic product. ^niff-sign

### Ex. 3 Q1 — GDP > GNP implies what about NIFF?

$$GNP = GDP - NIFF \;\Rightarrow\; GDP > GNP \iff NIFF > 0$$

So if $GDP > GNP$, the net payment to foreign factors producing in the economy is **positive** — foreign-owned factors here earn more than domestic factors abroad. **(answer C.)**

> [!tip] 🗣️ In plain English
> If GDP is bigger than GNP, then **foreigners working or owning things here earn more** than our own people earn abroad. Money is leaking out, so $NIFF$ is positive. It is about who gets the *income*, not about exports.

> [!warning] GDP > GNP is about factor payments, not trade
> A tempting wrong answer links $GDP > GNP$ to exports vs imports. It does **not** — the wedge between domestic and national product is *factor income* (NIFF), a completely separate channel from the trade balance ($NX$). ^gdp-gnp-trap

---

## 🧮 Worked Problem — Ex. 3 Q2–Q4 (Adding Foreign Factors)

> [!example] The data
> Open economy, balanced government budget, **export surplus 500**. Government buys 1,000 of goods & services and pays 700 in wages+rent. All profit distributed, no inventory change, combined gross investment 3,000.
>
> | | Firm A | Firm B |
> |---|--------|--------|
> | Sales | 10,000 | 9,000 |
> | Raw materials | 1,000 | 2,000 |
> | Wages & rent | 2,000 | 3,000 |
> | Depreciation | 1,500 | 900 |
> | Dividends | 5,500 | 3,100 |

### Output (Q2)

**Value added** = Sales − payments to other firms − depreciation:
$$\text{VA}_A = 10{,}000 - 1{,}000 - 1{,}500 = 7{,}500$$
$$\text{VA}_B = 9{,}000 - 2{,}000 - 900 = 6{,}100$$

Government value added = its wages+rent = 700 (purchases are already inside the firms' output):
$$Y = 7{,}500 + 6{,}100 + 700 = \boxed{14{,}300}$$

### Back out consumption (Q2 cont.)

Net investment = gross − depreciation:
$$I_{\text{net}} = 3{,}000 - (1{,}500 + 900) = 600$$

With $G = 1{,}700$ (purchases 1,000 + wages 700) and $NX = +500$:
$$Y = C + I + G + NX \;\Rightarrow\; 14{,}300 = C + 600 + 1{,}700 + 500$$
$$C = \boxed{11{,}500}$$

> [!tip] 🗣️ In plain English
> Add up each firm's **value added** (sales minus inputs minus wear and tear) plus the government's wage bill to get output of **14,300**. Then everything else that output is spent on (investment, government, net exports) is subtracted, and what is left over, **11,500**, must be consumption.

### Savings & investment (Q3)

Using the identity in aggregate savings form, $S = I + NX$:
$$S = 600 + 500 = \boxed{1{,}100} \quad \textbf{(answer C)}$$

> [!tip] 🗣️ In plain English
> The economy's total saving is what it **invests at home** (600) plus what it **lends abroad** through the export surplus (500). That gives **1,100**.

> [!info] Net vs. "of the economy"
> The question distinguishes **net investment** ($I = 600$, capital added domestically) from **net investment of the economy** ($S = 1{,}100$, total national saving including the 500 lent abroad via the export surplus). The export surplus *is* foreign investment by the country. ^net-vs-national-invest

### Foreign workers shift GNP but not GDP (Q4)

Suppose 1,000 of the wage bill is paid to **foreign workers employed here**.

$$GDP:\ \text{unchanged} \;(\text{production still happens inside the borders})$$
$$GNP = 14{,}300 - 1{,}000 = 13{,}300 \;(\text{1,000 accrues to foreign, not national, factors})$$

Local (domestic) product stays the same; national product falls by 1,000. This is exactly $NIFF = +1{,}000$ pushing $GNP$ below $GDP$. **(answer C.)**

> [!tip] 🗣️ In plain English
> Foreign workers still produce **inside our borders**, so GDP does not change. But their pay goes to foreigners, not to our own factors, so **GNP drops by 1,000**.

---

## 📐 The Standard Exam Recipe

> [!info] Savings-identity questions in four steps
> **Step 1 — Sector savings.** Build $S_p$ (household income − household taxes − $C$), $S_b$ (undistributed profit), $S_g$ ($T - G$). Infer household taxes as *total taxes − firms' taxes* when not given directly.
> **Step 2 — Net exports.** $NX = EX - IM$ (watch import vs export *surplus* wording).
> **Step 3 — Apply the identity.** $S_p + S_b + S_g = I + NX$; solve for the unknown (usually $I$).
> **Step 4 — Reconcile.** Cross-check with the three GDP approaches, and convert GDP↔GNP with $GNP = GDP - NIFF$ whenever foreign factors appear. ^exam-recipe

---

## 🎯 Summary — Recitation 3 in Five Ideas

1. **Saving finances investment and lending abroad.** The identity $S_p + S_b + S_g = I + NX$ says total domestic saving equals domestic capital formation plus the trade balance.
2. **Three sectors, three savings rules.** Private = income − taxes − consumption; business = undistributed profit; government = taxes − spending. Don't count dividends twice.
3. **NDP strips out depreciation.** $\text{Depreciation} = GDP - NDP$, and gross/net figures must never be mixed.
4. **Domestic ≠ national product.** $GNP = GDP - NIFF$; the wedge is *factor income* to/from abroad, not the trade balance.
5. **GDP > GNP ⇔ NIFF > 0.** Foreign factors earning here outweigh our factors earning abroad — production location and factor ownership are different questions.

---

## 📎 Related Notes

- Previous: [[Rec_02-The Three Approaches to Measuring GDP]] — value-added, income & expenditure approaches, government, uses & resources
- Earlier: [[Rec_01-Nominal & Real GDP, Price Indices & GNP]] — real vs. nominal GDP, CPI/PPI, GDP vs. GNP intro
- Reference: [[Key Terms and Definitions]] (course glossary)
- Concepts introduced here: [[Savings Identity]], [[Private Savings]], [[Business Savings]], [[Government Savings]], [[Net Domestic Product]], [[Net Income from Foreign Factors]]
- Builds on: [[Gross Domestic Product]], [[Depreciation]], [[Net Exports]] · Builds toward: [[Investment]], [[Aggregate Demand]]
