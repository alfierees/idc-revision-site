---
title: "Exam Question Playbook"
subject: intro-to-r
type: reference
description: "A routine for each shape of question in the final assignment: setting up the script, one-number answers, conditional counts and means, percentages, group tables, top-N lists, new categories, missing values, matching a chart to a picture, and writing the answer up."
course: Intro to R
semester: 2
year: 1
order: 4
tags:
  - intro-to-r
  - exam-prep
  - playbook
---

> Each play is a routine for one question shape, with the pool or sample-test question it comes from. Functions are on the [[R Syntax Sheet]]; how often each shape comes up is on the [[Past Paper Topic Map]].

## A. Set up once, at the top of the script

```r
library(tidyverse)
theme_set(theme_minimal())
data <- read_csv("kick.csv")
glimpse(data)                         # column names and types
summarize(data, across(everything(), ~ sum(is.na(.x))))   # where the NAs are
```

Knowing which columns have NAs up front tells you where to add `na.rm = TRUE` or `filter(!is.na(x))`.

## B. "What is the mean / median / SD of…" (one number)

1. Find the column; check its NAs.
2. `mean(data$x, na.rm = TRUE)` (or `median`, `sd`, `max`).
3. With a condition, filter first: `data |> filter(make == "FORD") |> summarize(sd(odometer))`.
4. Write the sentence with the number and its unit: "The SD of Ford cars' odometer readings is … miles."

## C. "How many…" (a count)

1. Translate the words into one logical test: "over 100,000 miles" is `odometer > 100000`; "between" is two tests joined with `&`; "neither A nor B" is `!(x %in% c("A", "B"))`.
2. `sum(test, na.rm = TRUE)`.
3. Unique values: `n_distinct(x)`. Missing values: `sum(is.na(x))`.

From the pool Q56: "How many cars cost more than their price?" `sum(data$cost > data$price, na.rm = TRUE)`.

## D. "What percentage…"

`mean(test) * 100`. A share **within** a group (bad buys among online sales) filters to the group first; a share **of each** group needs `group_by` (play E).

## E. "For each X, calculate…" (a table)

1. `group_by(X)`.
2. `summarize()` every statistic the question lists, with clear names, and add `n = n()`.
3. Conditions on the **raw rows** go in `filter()` **before** `group_by`; conditions on a **summary** ("only states with a median below 6,000") go **after** `summarize`.
4. "Top 5": `arrange(desc(stat)) |> head(5)`. "Bottom 5": `arrange(stat) |> head(5)`.
5. Drop NA groups if they are not wanted: `filter(!is.na(X))`.

From the pool Q136: makes with more than 20% bad buys, with counts:
```r
data |>
  group_by(make) |>
  summarize(prop_bad = mean(is_bad_buy), n = n()) |>
  filter(prop_bad > 0.2) |>
  arrange(desc(prop_bad))
```

## F. New categories from numbers

`mutate(group = case_when(...))`, conditions in order, then `group_by(group)` or `count(group)`. Check the boundaries against the wording: "before", "during" and "after 2005" means `< 2005`, `== 2005`, `> 2005` (pool Q144).

## G. A cut-off computed from the data

Compute it first, then filter: "more than 3 SD above the mean" (2025 sample Q9):
```r
cutoff <- mean(ames$sale_price) + 3 * sd(ames$sale_price)
ames |> filter(sale_price > cutoff) |> group_by(neighborhood) |> summarize(n = n())
```

## H. A chart that must match a picture

1. **What is on each axis?** A raw column, or a statistic per group (then `summarize` first).
2. **Pick the geom:** counts `geom_bar`, values `geom_col`, distribution `geom_histogram`, two numbers `geom_point`, over time `geom_line`, spread `geom_boxplot`.
3. **Colour:** a legend means `aes(color/fill = var)`; one fixed colour goes **outside** `aes()`.
4. **Panels:** several small plots means `facet_wrap(~ var)`.
5. **Details last:** reference lines, ordering with `reorder`, labels, title size and centring, axis text angle, legend.
6. Compare with the picture element by element before moving on.

From the 2025 sample Q14 (median price by decade):
```r
ames |>
  mutate(decade = year_built - year_built %% 10) |>
  group_by(decade) |>
  summarize(price = median(sale_price), n = n()) |>
  ggplot() +
  aes(x = decade, y = price) +
  geom_line(color = "steelblue") +
  geom_point(aes(size = n), color = "steelblue") +
  geom_hline(yintercept = median(ames$sale_price), linetype = "dashed") +
  scale_x_continuous(breaks = seq(1850, 2020, 10)) +
  labs(title = "Median sale price by decade built", x = "Decade built", y = "Median sale price") +
  theme(plot.title = element_text(hjust = 0.5, size = 16))
```

## I. Writing the answer

Each answer needs four parts: the **question**, a **sentence** that answers it in words (with units), the **code**, and the **output** or chart. Keep code that runs from a fresh session (load the data in the script, not by clicking), and round numbers in the sentence.
