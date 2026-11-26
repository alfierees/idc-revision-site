---
title: "Cheat Sheet (Lec 0–11)"
subject: intro-to-r
type: reference
description: "Everything the final assignment needs, with a worked example from the 2024 question pool or the 2025 sample test for each: vectors and data frames, summaries and missing values, counting and percentages, the pipe and the dplyr verbs, group summaries, ggplot2 charts and polish, and the probability functions."
course: Intro to R
semester: 2
year: 1
order: 1
pinned: true
tags:
  - intro-to-r
  - exam-prep
  - cheat-sheet
aliases:
  - Intro to R Cheat Sheet
---

> **The final assignment:** a take-home on one dataset. In 2024 every student got 24 hours and a random draw from a **pool of 190 questions** on used-car auction data ([[PP01|2024 question pool]]); each answer needed the question, a sentence answering it, the code, and its output or chart, in a Word file plus the script. The [[PP02|2025 sample test]] is 16 questions on the Ames housing data: 11 tables and 5 charts.
>
> Almost every question is one of three shapes: **one number** ("how many", "what is the mean of"), **a table by group** ("for each X, calculate"), or **a chart that matches a picture**. Start every script with:
>
> ```r
> library(tidyverse)
> theme_set(theme_minimal())
> data <- read_csv("file.csv")
> ```

---

## 0. Method picker: what does this question want?

| The question says… | Write | Section |
|---|---|---|
| "How many observations / variables" | `nrow(data)`, `ncol(data)` | §2 |
| "What is the mean / median / SD / range of x" | `mean(data$x)`, add `na.rm = TRUE` if there are NAs | §3 |
| "How many cars have…" (a condition) | `sum(data$x > 100000)` or `filter(...) \|> nrow()` | §5 |
| "What percentage of…" | `mean(data$x == "RED") * 100` | §5 |
| "How many unique…" | `n_distinct(data$x)` or `length(unique(data$x))` | §3 |
| "Mean of x for cars that…" | `filter(...) \|> summarize(mean(x))` | §4 |
| "Which value is most common" | `count(x, sort = TRUE) \|> head(1)` | §5 |
| "For each group, calculate…" | `group_by(g) \|> summarize(...)` | §4 |
| "Top 5 / bottom 5 by…" | `arrange(desc(...)) \|> head(5)` | §4 |
| A new column, or groups from a number | `mutate()`, `case_when()` | §4 |
| "Missing values in each column" | `summarize(across(everything(), ~ sum(is.na(.x))))` | §6 |
| A chart | pick the geom (§7), then match the picture (§8) | §7, §8 |
| A probability, a random draw, a simulation | `dbinom`, `pnorm`, `qnorm`, `rnorm`, `sample`, `set.seed` | §9 |

---

## 1. Values, types and vectors (Lec 1 to 3)

| Type | Example | Check / convert |
|---|---|---|
| numeric | `3.5`, `1e6` | `is.numeric()`, `as.numeric()` |
| character | `"FORD"` | `as.character()`, `paste("a", "b")` |
| logical | `TRUE`, `FALSE`, `5 > 3` | `as.logical(0)` is `FALSE` |
| factor | categories with labels | `factor(x, labels = ...)` |

- Assign with `<-`. A **vector** holds one type: `c(100, 95, 90)`, `1:10`.
- Arithmetic is **vectorised**: `x + 2` adds 2 to every element.
- **Logicals count as 0 and 1**: `sum(x > 5)` counts, `mean(x > 5)` is the share. This one trick answers a third of the pool.

---

## 2. Data frames (Lec 4, 5)

| You want | Base R |
|---|---|
| Size | `nrow(df)`, `ncol(df)`, `dim(df)` |
| Structure, first rows, names | `str(df)`, `head(df, 3)`, `names(df)` |
| One column as a vector | `df$price`, `df[["price"]]` |
| Row 3, column 4 | `df[3, 4]` |
| Rows meeting a condition | `df[df$make == "FORD", ]` |
| A new column | `df$ratio <- df$cost / df$price` |
| Delete a column | `df$ratio <- NULL` |
| Counts of each category | `table(df$color)`; shares `table(df$color) / nrow(df)` |
| Read a file | `read_csv("f.csv")` (tidyverse) or `read.csv("f.csv")` |

> [!example] Worked: the first two questions of the pool
> Q1 "How many observations?" `nrow(data)` gives **72,983**. Q5 "Range of year_made?" `range(data$year_made)` gives **2001 2010**.

---

## 3. One-number summaries (Lec 5)

```r
mean(x); median(x); sd(x); min(x); max(x); range(x)
quantile(x, 0.9); IQR(x); sum(x); length(x)
n_distinct(x)            # unique values
sum(is.na(x))            # missing values
mean(x, na.rm = TRUE)    # ignore NAs
```

**Missing values poison summaries**: `mean(c(1, NA))` is `NA`. If an answer comes out `NA`, add `na.rm = TRUE`.

> [!example] Worked: a conditional mean (pool Q16)
> "Average odometer for cars made in 2010":
> ```r
> data |> filter(year_made == 2010) |> summarize(mean(odometer))
> ```
> or in base R `mean(data$odometer[data$year_made == 2010])`.

---

## 4. The pipe and the dplyr verbs (Lec 7, 8)

`x |> f() |> g()` means `g(f(x))`: read it as "then".

| Verb | Does | Example |
|---|---|---|
| `filter()` | keep rows | `filter(price > 0, state %in% c("TX", "CA"))` (a comma is AND; `\|` is OR) |
| `select()` | keep columns | `select(make, model, cost)` |
| `arrange()` | sort | `arrange(desc(cost))` |
| `mutate()` | new column | `mutate(pct = cost / price * 100)` |
| `summarize()` | collapse to one row | `summarize(avg = mean(cost), n = n())` |
| `group_by()` | do the next step per group | `group_by(make)` |
| `count()` | rows per group | `count(make, sort = TRUE)` |
| `pull()` | a column as a vector | `pull(cost)` |
| `head()`, `slice()` | first rows, chosen rows | `head(5)` |
| `case_when()` | several categories | inside `mutate()` |

> [!example] Worked: a group table (2025 sample Q1, official solution)
> "For each neighborhood: number of houses, average price, median lot area; keep averages above 280,000; sort descending."
> ```r
> ames |>
>   group_by(neighborhood) |>
>   summarize(n_houses = n(),
>             avg_price = mean(sale_price),
>             med_area = median(lot_area)) |>
>   filter(avg_price > 280000) |>
>   arrange(desc(avg_price))
> ```
> Three neighbourhoods survive, NoRidge first. Note the **order**: filter on a summary **after** `summarize()`.

> [!example] Worked: groups from a number (2025 sample Q8)
> ```r
> ames |>
>   mutate(year_group = case_when(
>     year_built < 1950 ~ "before_1950",
>     year_built <= 1999 ~ "1950_to_1999",
>     TRUE ~ "2000_or_later")) |>
>   group_by(year_group) |>
>   summarize(avg_price = mean(sale_price), n = n(), max_price = max(sale_price))
> ```
> `case_when` checks conditions **in order**, so the second line only sees years from 1950. Match the question's cut-offs exactly: the official code used `> 2000` for the last group, which puts houses built in 2000 in the middle one.

---

## 5. Counting, shares and "most common"

| Question | Code |
|---|---|
| How many cars over 100,000 miles | `sum(data$odometer > 100000)` |
| How many with two conditions | `sum(data$odometer < 25000 & data$cost > 20000)` |
| Between 50,000 and 100,000 | `sum(data$odometer > 50000 & data$odometer < 100000)` |
| Percentage of bad buys | `mean(data$is_bad_buy) * 100` (12.3%) |
| Percentage that are red | `mean(data$color == "RED", na.rm = TRUE) * 100` |
| Most common year | `count(data, year_made, sort = TRUE) \|> head(1)` (2006) |
| Share of each group | `group_by(g) \|> summarize(prop = mean(is_bad_buy))` |
| Above the overall average | `sum(data$cost > mean(data$cost))` |

> [!example] Worked: a rate by group (pool Q110)
> "Proportion of bad buys for each color; the five worst":
> ```r
> data |>
>   group_by(color) |>
>   summarize(prop_bad = mean(is_bad_buy), n = n()) |>
>   arrange(desc(prop_bad)) |>
>   head(5)
> ```
> Keep `n` in the table: a 25% rate on 94 cars is weaker evidence than 14% on 5,231.

---

## 6. Missing values and zeros (2025 sample Q10, Q11)

```r
ames |>
  summarize(across(everything(), ~ sum(is.na(.x)))) |>
  pivot_longer(everything(), names_to = "variable", values_to = "n_missing") |>
  filter(n_missing > 0) |>
  arrange(desc(n_missing))
```

For zeros, numeric columns only: `select(where(is.numeric))` first, and `sum(.x == 0, na.rm = TRUE)` (an NA is not a zero).

---

## 7. ggplot2: the pattern and the geoms (Lec 9)

```r
data |>
  ggplot() +
  aes(x = ..., y = ..., color = ..., fill = ..., size = ...) +
  geom_...()
```

| Chart | Geom | Needs |
|---|---|---|
| Distribution of one number | `geom_histogram()`, `geom_density()` | `x` |
| Count of each category | `geom_bar()` | `x` only (it counts) |
| A value per category (a mean you computed) | `geom_col()` | `x` and `y` |
| Two numbers | `geom_point()`, `geom_jitter()` | `x`, `y` |
| A trend over years | `geom_line()` (+ `geom_point()`) | summarise per year first |
| Spread by group | `geom_boxplot()` | `x` group, `y` number |
| Stacked or side-by-side bars | `geom_bar()` + `fill = g`, `position = "dodge"` | |

**`geom_bar` counts rows; `geom_col` plots a `y` you give it.** A mean per group: `summarize()` first, then `geom_col()`.

> [!example] Worked: a summary chart (pool Q186)
> "Average car age by size, labels on top, orange bars":
> ```r
> data |>
>   filter(!is.na(size)) |>
>   group_by(size) |>
>   summarize(mean_age = mean(age)) |>
>   ggplot() +
>   aes(x = size, y = mean_age) +
>   geom_col(fill = "orange") +
>   geom_text(aes(label = round(mean_age, 1)), vjust = -0.3)
> ```

---

## 8. Making the chart match the picture (Lec 10)

| The picture has | Add |
|---|---|
| A fixed colour on every bar or point | `geom_col(fill = "steelblue")`: **outside** `aes()` |
| Colour by a variable, with a legend | `aes(color = g)` or `aes(fill = g)` |
| A dashed reference line | `geom_hline(yintercept = median(df$y), linetype = "dashed", color = "red")` |
| A regression or smooth line | `geom_smooth(method = "lm", se = FALSE)` |
| One panel per group | `facet_wrap(~ g)` |
| Bars sorted by value | `aes(x = reorder(g, -n), y = n)` (or `reorder(g, value)` for ascending) |
| Slanted axis labels | `theme(axis.text.x = element_text(angle = 45, hjust = 1))` |
| A centred, bigger title | `labs(title = "...")` + `theme(plot.title = element_text(hjust = 0.5, size = 16))` |
| Axis names | `labs(x = "...", y = "...")` |
| No legend | `theme(legend.position = "none")` |
| Every 10 years on the axis | `scale_x_continuous(breaks = seq(1850, 2020, 10))` |
| Dollar labels | `scale_y_continuous(labels = scales::dollar)` |
| Horizontal bars | `coord_flip()` |
| Transparency | `geom_point(alpha = 0.5)` |
| Highlight a subset in red | `mutate(top = overall_qual >= 9)`, `aes(color = top)`, `scale_color_manual(values = c("FALSE" = "grey60", "TRUE" = "red"))` |

> [!example] Worked: 2025 sample Q12 (official solution, completed)
> Boxplot of price by house style, ordered by median, a red dashed median line, slanted labels, a centred size-16 title:
> ```r
> ames |>
>   ggplot() +
>   aes(x = reorder(house_style, sale_price, FUN = median), y = sale_price) +
>   geom_boxplot() +
>   geom_hline(yintercept = median(ames$sale_price), color = "red", linetype = "dashed") +
>   labs(title = "Sale Price by House Style", x = "House Style", y = "Sale Price") +
>   theme(axis.text.x = element_text(angle = 45, hjust = 1),
>         plot.title = element_text(hjust = 0.5, size = 16))
> ```
> The official code left out the ordering; `reorder(..., FUN = median)` adds it.

---

## 9. Probability and random numbers (Lec 11)

| Prefix | Gives | Example |
|---|---|---|
| `d` | $P(X = x)$ or a density | `dbinom(10, size = 12, prob = 0.9)` |
| `p` | $P(X \le q)$ | `pnorm(190, mean = 170, sd = 15)`; above: `1 - pnorm(...)` |
| `q` | the quantile | `qnorm(0.99, 170, 15)` |
| `r` | random draws | `rnorm(13, 100, 15)`, `rpois(1e6, 3)` |

```r
set.seed(420)                              # same random numbers every run
sample(1:6, 10, replace = TRUE)            # ten dice rolls
mean(rpois(1e6, lambda = 3) >= 7)          # Monte Carlo: P(X >= 7)
```

`ppois(15, 10)` is $P(X \le 15)$, so "more than 15" is `1 - ppois(15, 10)`.
