---
title: "Past Paper Topic Map"
subject: intro-to-r
type: reference
description: "What the 2024 pool of 190 questions and the 2025 sample test actually ask, sorted into the handful of question shapes, with how many of each, the question numbers to practise and the chart types by geom."
course: Intro to R
semester: 2
year: 1
order: 3
tags:
  - intro-to-r
  - exam-prep
  - past-papers
---

> Two sources: the [[PP01|2024 question pool]] (190 questions on used-car auction data, answers worked here) and the [[PP02|2025 sample test]] (16 questions on Ames housing; the course's partial solution covers 6 of them). In 2024 each student got a random draw from the pool, so practising by **shape** beats memorising answers.

## The pool by question shape

| Shape | How many | The move | Practise |
|---|---|---|---|
| One summary of a column, maybe after a filter | about 50 | `mean()`, `median()`, `sd()`, `range()`, `n_distinct()`; filter first | Q3, Q5, Q16, Q19, Q21, Q28, Q51 |
| Count rows meeting a condition | about 37 | `sum(condition)` or `filter() \|> nrow()` | Q6, Q7, Q14, Q20, Q30, Q46, Q56, Q94, Q99 |
| A table by group (counts, means, rates, top 5) | about 46 | `group_by() \|> summarize() \|> arrange() \|> head()` | Q101 to Q150 |
| Percentages | about 7 | `mean(condition) * 100` | Q24, Q38, Q53, Q68, Q76, Q92 |
| Most or least common value | about 6 | `count(x, sort = TRUE)` | Q18, Q34, Q65, Q88, Q133 |
| Size of the data | 2 | `nrow()`, `ncol()` | Q1, Q2 |
| **Charts** | 40 | pick the geom, then match the picture | Q151 to Q190 |

(The counts are by the shape of the worked answer, so they are approximate.)

## Charts by geom (pool Q151 to Q190)

| Geom | How many | Questions |
|---|---|---|
| `geom_col` (a computed value per category) | 12 | 155, 156, 157, 158, 162, 163, 169, 175, 176, 180, 183, 186 |
| `geom_point` / `geom_jitter` (two numbers) | 8 | 152, 161, 164, 167, 173, 179, 182, 188 |
| `geom_line` (a trend over years) | 7 | 154, 159, 170, 177, 184, 189, 190 |
| `geom_bar` (counts) | 6 | 153, 160, 165, 168, 172, 181 |
| `geom_histogram` / `geom_density` | 5 | 151, 166, 174, 185, 187 |
| `geom_boxplot` | 2 | 171, 178 |

Extras that come up inside those charts: **facets** (152, 161, 166, 172, 174, 179, 182, 185, 187), a **reference line** (170, 175), a **regression line** (152, 164), **top-10 bars** (155, 163), **sorted bars** (180), **labels on bars** (186), **fixed colours** (160, 171, 186), **transparency** (167, 188), **dollar axis** (161).

## The 2025 sample test

| Q | Asks | Skills |
|---|---|---|
| 1 | per neighbourhood: count, mean price, median lot area; keep mean > 280,000 | `group_by`, `summarize`, `filter` after, `arrange(desc())` |
| 2 | per house style: count, mean price, share with central air | `mean(central_air == "Y")` |
| 3 | small lots above 200,000: one-row summary | `filter` with two conditions, `sum(x > 300000)` |
| 4 | share of total sales, small ones lumped into "Other" | `mutate` a share, `ifelse`, group again |
| 5 | top 100 by a new ratio, excluding one neighbourhood | `mutate`, `filter(!=)`, `head(100)`, `select` |
| 6, 7 | median and IQR; mean, SD and SD/mean by lot shape | `IQR()`, `sd()`, a ratio in `mutate` |
| 8 | year groups, then mean, count, max | `case_when` |
| 9 | houses more than 3 SD above the mean, by neighbourhood | a cut-off from `mean + 3 * sd` |
| 10, 11 | missing values and zeros in every column | `across`, `pivot_longer`, `where(is.numeric)` |
| 12 | boxplot ordered by median, dashed median line, slanted labels, centred title | `reorder(FUN = median)`, `geom_hline`, `theme` |
| 13 | scatter, top quality in red, regression line, facets, no legend | `scale_color_manual`, `geom_smooth`, `facet_wrap` |
| 14 | median price by decade, point size by count, breaks every 10 years | `year %% 10`, `aes(size = n)`, `scale_x_continuous` |
| 15 | per neighbourhood ratio, coloured by a quality group | `summarize` then `case_when` on a median |
| 16 | bar chart with value labels on top and counts at the bottom | `geom_col`, `geom_text`, `geom_label` |

## Topics in the lectures but not in either source

Base R indexing (`df[r, c]`), factors, writing files, `psych::describe`, and the probability functions (Lec 11). They are worth knowing for a verbal answer or a quick check, but no question in either source turns on them.
