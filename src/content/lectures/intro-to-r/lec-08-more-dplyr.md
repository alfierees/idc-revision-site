---
title: "Lec 08: More dplyr"
semester: 2
year: 1
course: "Intro to R"
lecture: 8
tags:
  - intro-to-r
  - arrange
  - mutate
  - summarize
  - group-by
  - pull
  - slice
  - dplyr
subject: intro-to-r
in_scope: true
---

# More dplyr

> Part of: [[Intro to R]]
> Key concepts: [[arrange()]], [[mutate()]], [[summarize()]], [[group_by()]], [[pull()]], [[slice()]], [[dplyr]]

Source: Moodle deck `lesson_8_more_dplyr_ENG.pdf` (21 slides).

## 1. Sorting with `arrange()`

[[arrange()]] sorts rows and is simpler than base R's `order()`.

```r
mtcars |> arrange(mpg) |> head()        # lowest mpg first
mtcars |> arrange(desc(mpg)) |> head()  # highest mpg first
```

With several columns, the first is the main sort and the next breaks ties:

```r
mtcars |> select(mpg, carb, cyl) |> arrange(carb, cyl) |> head(8)
mtcars |> select(mpg, carb, cyl) |> arrange(cyl, carb) |> head(8)
```

## 2. Creating columns with `mutate()`

[[mutate()]] adds or changes columns.

```r
mtcars |> mutate(kpl = mpg / 2.352)
```

New columns go on the right by default. Use `.before` or `.after` to place them:

```r
mtcars |>
  mutate(ratio_power_weight = hp / (1000 * wt), .before = 1) |>
  head(2)
```

## 3. Summaries with `summarize()`

[[summarize()]] reduces columns to single values and returns a dataframe.

```r
mtcars |> summarize(mean(mpg), sd(mpg))
mtcars |> summarize(Memutsa = mean(mpg), Stiyat_Teken = sd(mpg))
```

```
   Memutsa Stiyat_Teken
1 20.09062     6.026948
```

### Group summaries

[[group_by()]] makes `summarize()` run once per group.

```r
dat <- MASS::birthwt
dat |>
  group_by(smoke) |>
  summarize(birth_weight = mean(bwt),
            mother_weight = mean(lwt))
```

```
  smoke birth_weight mother_weight
  <int>        <dbl>         <dbl>
1     0        3056.          131.
2     1        2772.          128.
```

Group by several columns and count rows with `n()`:

```r
dat |>
  group_by(race, smoke) |>
  summarize(birth_weight = mean(bwt),
            mother_weight = mean(lwt),
            subjects = n())
```

```
   race smoke birth_weight mother_weight subjects
  <int> <int>        <dbl>         <dbl>    <int>
1     1     0        3429.          139.       44
2     1     1        2827.          126.       52
3     2     0        2854.          149.       16
4     2     1        2504           143.       10
5     3     0        2816.          119.       55
6     3     1        2757.          124        12
```

## 4. `pull()` and `slice()`

`select()` always returns a dataframe, so this fails:

```r
dat |> select(bwt) |> mean()   # NA, with a warning
```

[[pull()]] extracts a column as a vector. These all do the same thing:

```r
dat |> pull(bwt)
dat |> pull("bwt")
dat |> pull(10)
dat |> pull(which(names(dat) == "bwt"))
```

> [!warning] Slide output does not match
> The slide shows `dat |> select(bwt) |> pull() |> head()` returning `2622 2600 2594 2557 2551 2523`. On a fresh `MASS::birthwt`, R returns **`2523 2551 2557 2594 2600 2622`**. Checked in R.

[[slice()]] retrieves rows by number:

```r
dat |> slice(1, 2, 3)
```

> [!example] Slide exercise: every 5th row
> ```r
> dat |> slice(seq(5, n(), by = 5))
> ```
> This returns 37 rows. *AI-written answer, checked in R.*

## 5. Real data: diamonds

```r
dat <- ggplot2::diamonds
dim(dat)     # 53940 10
names(dat)
```

**Average and maximum price by cut:**

```r
dat |>
  group_by(cut) |>
  summarize(avg = mean(price), max = max(price))
```

```
  cut         avg   max
  <ord>     <dbl> <int>
1 Fair      4359. 18574
2 Good      3929. 18788
3 Very Good 3982. 18818
4 Premium   4584. 18823
5 Ideal     3458. 18806
```

**How many of the 100 most expensive diamonds have an Ideal cut?**

```r
dat |>
  arrange(desc(price)) |>
  head(100) |>
  pull(cut) |>
  table()
```

```
     Fair      Good Very Good   Premium     Ideal
        4         9        21        33        33
```

**The 10 best carat-to-price ratios:**

```r
dat |>
  mutate(carat_to_dollar = carat / price) |>
  arrange(desc(carat_to_dollar)) |>
  select(carat, price, carat_to_dollar, cut, color) |>
  head(10)
```

To repeat this for colors D or E only, add `filter(color %in% c("D", "E"))` before `mutate()`.

## Summary

- [[arrange()]] sorts, [[mutate()]] creates and [[summarize()]] reduces.
- [[group_by()]] plus `summarize()` is the core pattern for exam questions.
- Use [[pull()]] when the next function needs a vector.

## Related notes

- [[Intro to R]]
- [[Lec_07-Pipes and dplyr Basics]]
- [[Lec_09-ggplot2 Foundations]]
