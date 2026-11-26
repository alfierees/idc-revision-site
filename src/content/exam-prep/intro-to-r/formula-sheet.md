---
title: "R Syntax Sheet"
subject: intro-to-r
type: reference
description: "Every function the course uses on one page, grouped by job: setup and reading data, vectors and data frames, summaries, logical tests, the dplyr verbs and helpers, missing values, ggplot2 geoms, aesthetics, scales and themes, and the d/p/q/r probability functions."
course: Intro to R
semester: 2
year: 1
order: 2
pinned: true
tags:
  - intro-to-r
  - exam-prep
  - formula-sheet
aliases:
  - Intro to R Syntax Sheet
---

> The assignment is open book, so this page is for speed: the function for each job and the argument people forget. Worked examples are on the [[Cheat Sheet (Lec 0–11)]].

## Setup and data

```r
install.packages("tidyverse")     # once per computer
library(tidyverse)                # every script
theme_set(theme_minimal())        # default chart theme
data <- read_csv("kick.csv")      # tidyverse reader (tibble)
data <- read.csv("f.csv")         # base reader (data.frame)
load("Final_Assignment.RData")    # objects saved by R
ames <- MASS::UScereal            # a dataset from a package
janitor::clean_names(data)        # tidy column names
```

## Vectors and operators

| Job | Code |
|---|---|
| Make a vector | `c(1, 5, 9)`, `1:10`, `seq(0, 100, 10)` |
| Assign | `x <- 5` |
| Compare | `==`, `!=`, `>`, `>=`, `<`, `<=` |
| Combine conditions | `&` (and), `\|` (or), `!` (not) |
| In a set | `x %in% c("TX", "CA")` |
| Remainder, integer division | `%%`, `%/%` (decade: `year - year %% 10`) |
| Convert | `as.numeric()`, `as.character()`, `as.logical()`, `factor()` |
| Paste text | `paste("a", "b")`, `paste0("a", "b")` |
| Round | `round(x, 2)` |

## Looking at a data frame

| Job | Code |
|---|---|
| Size | `nrow()`, `ncol()`, `dim()` |
| Overview | `str()`, `glimpse()`, `summary()`, `head()`, `tail()`, `names()` |
| A column | `df$x`, `df[["x"]]`, `pull(df, x)` |
| Rows and columns | `df[rows, cols]`, `df[df$x > 5, ]` |
| Frequencies | `table(df$x)`, `count(df, x, sort = TRUE)` |

## Summaries

| Statistic | Code |
|---|---|
| Mean, median, SD, variance | `mean()`, `median()`, `sd()`, `var()` |
| Min, max, range | `min()`, `max()`, `range()` |
| Quantile, IQR | `quantile(x, 0.25)`, `IQR(x)` |
| Count, total | `length()`, `n()` (inside `summarize`), `sum()` |
| Unique values | `unique()`, `n_distinct()` |
| Count / share meeting a test | `sum(x > 5)`, `mean(x > 5)` |
| Ignore NAs | `na.rm = TRUE` in any of these |
| Is it missing | `is.na(x)`, `!is.na(x)` |

## dplyr

| Verb | Typical use |
|---|---|
| `filter(cond1, cond2)` | rows meeting every condition |
| `select(a, b)`, `select(-c)`, `select(where(is.numeric))` | columns |
| `arrange(x)`, `arrange(desc(x))` | sort |
| `mutate(new = ...)` | add or change a column |
| `group_by(g)` | per-group steps |
| `summarize(name = f(x), n = n())` | one row per group |
| `count(g, sort = TRUE)` | rows per group |
| `head(n)`, `slice(1:3)`, `slice_max(x, n = 5)` | the first, chosen or top rows |
| `pull(x)` | a column as a vector |
| `case_when(cond ~ "a", cond ~ "b", TRUE ~ "c")` | several categories |
| `ifelse(cond, "yes", "no")` | two categories |
| `across(everything(), ~ sum(is.na(.x)))` | the same summary on every column |
| `pivot_longer(everything(), names_to = "variable", values_to = "n")` | wide to long |

## ggplot2

```r
ggplot(data) + aes(x, y) + geom_*() + labs() + theme()
```

| Layer | Options |
|---|---|
| Geoms | `geom_histogram(bins =)`, `geom_density()`, `geom_bar()`, `geom_col()`, `geom_point()`, `geom_jitter()`, `geom_line()`, `geom_boxplot()`, `geom_smooth(method = "lm", se = FALSE)` |
| Lines | `geom_hline(yintercept =)`, `geom_vline(xintercept =)`, `geom_abline(intercept =, slope =)`; `linetype = "dashed"` |
| Labels on bars | `geom_text(aes(label = round(y, 1)), vjust = -0.3)`, `geom_label()` |
| Aesthetics | `x`, `y`, `color`, `fill`, `size`, `alpha`, `group`, `label` |
| Fixed look | outside `aes()`: `color = "red"`, `fill = "steelblue"`, `alpha = 0.5` |
| Bar position | `position = "dodge"` (side by side), `"stack"` (default), `"fill"` (shares) |
| Facets | `facet_wrap(~ g)`, `facet_grid(a ~ b)` |
| Order a category | `reorder(g, value)`, `reorder(g, -value)`, `reorder(g, y, FUN = median)` |
| Scales | `scale_x_continuous(breaks = seq(...))`, `scale_y_continuous(labels = scales::dollar)`, `scale_color_manual(values = c(...))`, `scale_color_brewer(palette = 2)`, `xlim(0, 100)` |
| Titles | `labs(title =, x =, y =)`, `ggtitle()`, `xlab()`, `ylab()` |
| Theme tweaks | `theme(plot.title = element_text(hjust = 0.5, size = 16))`, `theme(axis.text.x = element_text(angle = 45, hjust = 1))`, `theme(legend.position = "none")` |
| Flip | `coord_flip()` |

## Probability

| Distribution | Density / mass | Cumulative | Quantile | Random |
|---|---|---|---|---|
| Binomial | `dbinom(x, size, prob)` | `pbinom` | `qbinom` | `rbinom` |
| Poisson | `dpois(x, lambda)` | `ppois` | `qpois` | `rpois` |
| Normal | `dnorm(x, mean, sd)` | `pnorm` | `qnorm` | `rnorm` |
| Uniform | `dunif` | `punif` | `qunif` | `runif` |

`p*` gives $P(X \le q)$; for "more than", use `1 - p*(...)`. `set.seed(n)` before any random draw; `sample(x, size, replace = TRUE)`.
