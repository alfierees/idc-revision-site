---
title: "Lec 06: Packages"
semester: 2
year: 1
course: "Intro to R"
lecture: 6
tags:
  - intro-to-r
  - package
  - cran
  - library
  - double-colon-operator
  - describe
  - clean-names
subject: intro-to-r
in_scope: true
---

# Packages

> Part of: [[Intro to R]]
> Key concepts: [[Package]], [[CRAN]], [[library()]], [[Double Colon Operator]], [[describe()]], [[clean_names()]]

Source: Moodle deck `lesson_6_packages_ENG.pptx` (19 slides).

## 1. What packages are

Base R has hundreds of commands, but they are general and some are outdated. A [[Package]] (also called a library) bundles scripts and data for a specific purpose.

The main repository is [[CRAN]], the Comprehensive R Archive Network, with more than 20,000 packages. The deck's advice is that using a package is usually better than writing your own code.

## 2. Install once, load every session

```r
install.packages(c("janitor", "psych"))  # once per computer
library(psych)                           # in each script
```

Installing does not make a package's contents available. You must load it with [[library()]] or `require()`. These four lines all load `psych`:

```r
library("psych")
library(psych)
require("psych")
require(psych)
```

The deck says the difference between `library` and `require` is not relevant to this course.

## 3. Using a package without loading it

The [[Double Colon Operator]] takes one item directly from a package:

```r
dat <- MASS::birthwt
```

Reasons to use `::`:

- It avoids collisions when two packages have a function with the same name.
- It shows which package a function came from.

## 4. `psych`: `describe()` and `describeBy()`

[[describe()]] gives a full statistical summary of each column.

```r
library(psych)
sat <- sat.act
describe(sat)
```

```
          vars   n   mean     sd median trimmed    mad min max range  skew kurtosis   se
gender       1 700   1.65   0.48      2    1.68   0.00   1   2     1 -0.61    -1.62 0.02
education    2 700   3.16   1.43      3    3.31   1.48   0   5     5 -0.68    -0.07 0.05
age          3 700  25.59   9.50     22   23.86   5.93  13  65    52  1.64     2.42 0.36
ACT          4 700  28.55   4.82     29   28.84   4.45   3  36    33 -0.66     0.53 0.18
SATV         5 700 612.23 112.90    620  619.45 118.61 200 800   600 -0.64     0.33 4.27
SATQ         6 687 610.22 115.64    620  617.25 118.61 200 800   600 -0.59    -0.02 4.41
```

`describeBy()` repeats that summary for each category:

```r
describeBy(sat, sat$gender)
```

## 5. `janitor`: `clean_names()`

R alters column names that contain characters like `$` or `!`:

```r
dat <- data.frame(
  "UpperSnakeCaseName" = c(1, 2, 3),
  "weird_Characters$$in the$ Name, Bro!" = c(4, 5, 6))
names(dat)
```

[[clean_names()]] from `janitor` fixes them by a chosen rule:

```r
library(janitor)
clean_names(dat)                    # upper_snake_case_name, weird_characters_in_the_name_bro
clean_names(dat, case = "big_camel") # UpperSnakeCaseName, WeirdCharactersInTheNameBro
clean_names(dat, case = "title")     # Upper Snake Case Name, Weird Characters in the Name Bro
```

It returns a new dataframe, so assign the result to keep it.

## 6. Getting help

| Tool | Use |
| --- | --- |
| `?function_name` | Opens a function's help page (load the package first) |
| `??word` | Searches all help pages, e.g. `??binom` |
| `browseVignettes("janitor")` | Lists longer guides for a package |
| Search engines and Stack Overflow | Describe the task in plain language |

A help page has these sections: Description, Usage, Arguments, Details, Value, References, See Also and Examples.

## 7. Slide exercises

> [!warning] Slide error: `lower.tail` in `rnorm()`
> The slide asks you to explain the argument `lower.tail` in `rnorm()`, but `rnorm()` has **no such argument**. Its arguments are `n`, `mean` and `sd`. `lower.tail` belongs to `pnorm()` and `qnorm()`, where `lower.tail = FALSE` gives the upper tail, $P(X > x)$. Checked in R.

> [!example] `choose()` versus `lchoose()`
> `choose(n, k)` computes the binomial coefficient. `lchoose(n, k)` computes its natural logarithm, which is useful when the coefficient is too large to store. *AI-written answer.*

## Summary

- Install a [[Package]] once and load it in each script.
- Use [[Double Colon Operator|`::`]] for one item or to avoid a name collision.
- `?` and `??` are the fastest way to learn a function.

## Related notes

- [[Intro to R]]
- [[Lec_05-Exploratory Data Analysis]]
- [[Lec_07-Pipes and dplyr Basics]]
