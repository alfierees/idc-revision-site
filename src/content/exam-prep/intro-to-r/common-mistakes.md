---
title: "Common Mistakes"
subject: intro-to-r
type: reference
description: "The slips that give a wrong number or a chart that does not match, each with the fix: = vs ==, NAs in summaries, filtering before or after a summary, geom_bar vs geom_col, colour inside vs outside aes, unordered bars, case_when boundaries and the pipe."
course: Intro to R
semester: 2
year: 1
order: 5
tags:
  - intro-to-r
  - exam-prep
  - mistakes
---

## Syntax

| Mistake | Fix |
|---|---|
| `filter(make = "FORD")` | Compare with `==`; a single `=` names an argument |
| `filter(color == "RED" \| "BLUE")` | Repeat the column, or use `%in%`: `color %in% c("RED", "BLUE")` |
| `"Ford"` when the data says `"FORD"` | Text matching is exact and case-sensitive; check with `unique()` |
| Using `&&` or `\|\|` inside `filter` | Single `&` and `\|` work element by element |
| A pipe at the start of a new line | End the line with `\|>` (or `+` in ggplot), never start the next one with it |
| `+` between dplyr steps, `\|>` between ggplot layers | dplyr uses the pipe; ggplot layers use `+` |
| Forgetting `library(tidyverse)` | Every function from dplyr or ggplot fails with "could not find function" |

## Numbers

| Mistake | Fix |
|---|---|
| An answer of `NA` | The column has missing values: `na.rm = TRUE` |
| `mean(x > 5)` read as a mean of $x$ | It is the **share** above 5; multiply by 100 for a percentage |
| `length(x)` for unique values | `n_distinct(x)` or `length(unique(x))` |
| `nrow()` after `summarize` | That counts groups, not rows; use `n()` inside `summarize` |
| `sd()` with `na.rm` forgotten | Same as the mean: NA in, NA out |
| A percentage out of the wrong total | "Of all cars" divides by every row; "of bad buys" filters first |
| `select(x) \|> mean()` | `select` returns a table; use `pull(x)` or `summarize(mean(x))` |

## Tables

| Mistake | Fix |
|---|---|
| Filtering on a summary before `summarize()` | The summary does not exist yet; filter **after** it |
| Filtering raw rows after `summarize()` | The rows are gone; filter **before** `group_by` |
| `arrange(x)` for "top 5" | Ascending by default: `arrange(desc(x))` |
| Leaving an NA group in "each category" | `filter(!is.na(g))` if the question wants real categories only |
| `case_when` boundaries off by one | "Between 1950 and 1999" is `>= 1950 & <= 1999`; check the edges |
| `case_when` with no catch-all | Rows that match nothing become `NA`; end with `TRUE ~ "other"` |
| Showing the whole table when asked for the top | `head(n)` at the end |

## Charts

| Mistake | Fix |
|---|---|
| `geom_bar(aes(y = mean_cost))` | `geom_bar` counts rows; a computed value needs `geom_col` |
| `aes(color = "red")` | Inside `aes` it becomes a legend called "red"; put `color = "red"` outside |
| `color` on bars | Bars and histograms are filled: `fill =`; `color` is only the outline |
| Bars in alphabetical order when the picture sorts them | `reorder(g, -value)` |
| A mean per group plotted from the raw data | `group_by` and `summarize` first |
| Lines joining every point | Summarise per year first, then `geom_line` |
| A title that is not centred | `theme(plot.title = element_text(hjust = 0.5))` |
| A reference line from a typed number | Compute it: `yintercept = median(df$y)` |
| Overplotted points | `alpha = 0.3` or `geom_jitter()` |
| Labels overlapping | `theme(axis.text.x = element_text(angle = 45, hjust = 1))` |

## Probability

| Mistake | Fix |
|---|---|
| `pnorm(q)` for "more than $q$" | `1 - pnorm(q, ...)` |
| `ppois(15)` for "more than 15" | $P(X > 15) = 1 -$ `ppois(15, ...)` (15 is included in `ppois`) |
| Different random numbers each run | `set.seed()` before drawing |
| `sample(x, 10)` for dice rolls | `replace = TRUE`, or it cannot repeat a value |
