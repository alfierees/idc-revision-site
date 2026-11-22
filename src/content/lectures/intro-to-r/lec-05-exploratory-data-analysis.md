---
title: "Lec 05: Exploratory Data Analysis"
semester: 2
year: 1
course: "Intro to R"
lecture: 5
tags:
  - intro-to-r
  - exploratory-data-analysis
  - head-and-tail
  - str
  - ifelse
  - frequency-table
  - factor
subject: intro-to-r
in_scope: true
---

# Exploratory Data Analysis

> Part of: [[Intro to R]]
> Key concepts: [[Exploratory Data Analysis]], [[head() and tail()]], [[str()]], [[ifelse()]], [[Frequency Table]], [[Factor]], [[Dataframe]]

Source: Moodle deck `lesson_5_EDA_ENG.pdf` (15 slides). A few bullets are in Hebrew on the slides and are translated here.

## 1. Why summarise data?

Datasets are too large to understand by reading them. [[Exploratory Data Analysis]] (EDA) uses summaries to answer questions such as whether one car brand is cheaper than another or holds its value better.

The examples use the birthweight data:

```r
dat <- MASS::birthwt
?MASS::birthwt
```

## 2. First look at a dataset

```r
head(dat, 3)    # first 3 rows (default is 6)
tail(dat, 2)    # last 2 rows
head(dat$age)   # works on one column too
ncol(dat)       # 10
nrow(dat)       # 189
dim(dat)        # 189 10
str(dat)        # structure of the object
```

[[str()]] is described on the slides as one of the strongest and most useful commands. For a dataframe it shows each column's name, type and first values.

```
'data.frame':   189 obs. of  10 variables:
 $ low  : int  0 0 0 0 0 0 0 0 0 0 ...
 $ age  : int  19 33 20 21 18 21 22 17 29 26 ...
 $ lwt  : int  182 155 105 108 107 124 118 103 123 113 ...
 ...
```

> [!warning] Slide inconsistency
> The slide's `str()` output shows `race` as a Factor, but in `MASS::birthwt` it is an **integer** until you convert it (section 6). Checked in R.

## 3. Creating a binary column

[[ifelse()]] takes a condition, the value for `TRUE`, and the value for `FALSE`.

```r
dat$age_group <- ifelse(dat$age > 20, "adult", "teen")
head(dat$age_group)
```

```
[1] "teen"  "adult" "teen"  "adult" "teen"  "adult"
```

## 4. Summarising a binary column

When a column is coded 1 and 0, `sum` counts the ones and `mean` gives their proportion.

```r
sum(dat$smoke)    # 74 smokers
mean(dat$smoke)   # 0.3915344
```

> [!tip] Check the coding
> This only works if the column contains nothing but 0 and 1.

## 5. Summarising a numeric column

```r
mean(dat$age)                    # 23.2381
median(dat$age)                  # 23
sd(dat$age)                      # 5.298678
c(min(dat$age), max(dat$age))    # 14 45
```

## 6. Summarising qualitative data

`table()` builds a [[Frequency Table]]. The top row is the values and the bottom row is their counts. This makes it easy to see the most common value, the minimum and the maximum.

```r
table(dat$ftv)
```

```
  0   1   2   3   4   6
100  47  30   7   4   1
```

Convert coded categories to a [[Factor]] so the table is readable:

```r
dat$race <- factor(dat$race, labels = c("white", "black", "other"))
table(dat$race)
```

```
white black other
   96    26    67
```

### Proportions

A frequency table can be divided like a vector. Divide by the number of observations to answer the slide's exercise:

```r
table(dat$race) / nrow(dat)
```

```
    white     black     other
0.5079365 0.1375661 0.3544974
```

> [!example] Slide exercise: `first_trimester_visit`
> ```r
> dat$first_trimester_visit <- ifelse(dat$ftv > 0, 1, 0)
> table(dat$first_trimester_visit)
> ```
> This gives **100** mothers with no visit and **89** with at least one, which matches `table(dat$ftv)`. The new column is simpler to analyse but loses how many visits each mother made. *AI-written answer, checked in R.*

> [!example] Slide exercise: `table(dat$bwt)`
> Birth weight has many distinct values, so most counts are tiny and the table is not very useful. A numeric summary or histogram is better. *AI-written answer.*

## Summary

- Start every analysis with [[head() and tail()|`head()`]], `dim()` and [[str()]].
- `sum` and `mean` of a 0/1 column give a count and a proportion.
- Use `mean`, `median`, `sd`, `min` and `max` for numeric columns.
- Use `table()` for categories, and convert codes to [[Factor|factors]].

## Related notes

- [[Intro to R]]
- [[Lec_04-Dataframes]]
- [[Lec_06-Packages]]
