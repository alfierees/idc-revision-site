---
title: "National Accounting: Measuring GDP"
week: 2
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
lecture: "Lecture 02: Chapter 1, GDP in a closed economy"
instructor: Dr. Idit Kalisher
tags:
  - macro-economics-intro
  - class-slides
  - gross-domestic-product
  - expenditure-approach
  - value-added-approach
  - income-approach
aliases:
  - Intro Macro Lecture 02
subject: principles-of-macro
in_scope: true
---

> [!info] Built from the class slides
> AI-written notes from the Moodle deck *Chapter 1, GDP in a closed economy*. Slide photos and data charts are not reproduced.

## Three ways to measure output

An economy's output can be measured three ways, and all three give the same number:

1. [[Expenditure Approach|Final expenditure]]: who used the output?
2. [[Value-Added Approach|Value added]]: who produced it?
3. [[Income Approach|Income]]: who earned it?

## Final expenditure approach

In a closed economy, sources equal uses:

$$
Y = C + I + G
$$

Any output not sold goes into inventory, and **an increase in inventory counts as investment**.

In an open economy, imports are an extra source and exports an extra use:

$$
Y + IM = C + I + G + EX
\quad\Longrightarrow\quad
Y = C + I + G + NX,\qquad NX = EX - IM
$$

If $EX > IM$ there is an [[Export Surplus|export surplus]]. If $EX < IM$ there is an [[Import Surplus|import surplus]].

## Value-added approach

**Value added** is a firm's sales minus what it paid to other firms. The economy's output is the sum of all firms' value added.

The slides use a wheat firm that sells 20 to a bread firm and 5 to households, and a bread firm that sells 35 to households:

| | Wheat | Bread |
|---|---:|---:|
| Sales | 25 | 35 |
| Purchases from firms | 0 | 20 |
| **Value added** | **25** | **15** |

Output is $25 + 15 = 40$. Adding sales would give 60, which double-counts the wheat inside the bread.

**Inventories.** If the wheat firm also produces 5 more that stay unsold, its value added becomes $25 + 5 = 30$ and output becomes 45.

$$
VA = \text{sales} - \text{purchases from other firms} + \Delta\text{inventory}
$$

## Income approach

Value added is paid out as income:

$$
\text{Household income} = \text{wages} + \text{rent} + \text{profits}
$$

| | Wheat | Bread |
|---|---:|---:|
| Sales | 25 | 35 |
| Payment to other firms | 0 | 20 |
| Wages | 7 | 8 |
| Rent | 3 | 4 |
| Profit | 15 | 3 |
| **Household income** | **25** | **15** |

## The government's contribution

Government services usually have no market price, so they are **valued at cost**. The value added of government is what it pays to the factors of production:

$$
VA_G = \text{wages} + \text{rent}
$$

In the slides, government buys 5 of wheat and pays wages of 10 and rent of 2. Its "sales" are the cost of production, 17. Its value added is $17 - 5 = 12$. Its **use** of output is 17, and total output is $30 + 15 + 12 = 57$.

> [!warning] Transfers are not spending on output
> Interest on bonds and transfer payments are not purchases and are not payments to factors of production. They are treated as **negative taxes**, so net taxes $T$ are taxes minus transfers.
