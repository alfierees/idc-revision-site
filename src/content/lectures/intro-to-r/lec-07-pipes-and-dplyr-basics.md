---
title: "Lec 07: Pipes and dplyr Basics"
semester: 2
year: 1
course: "Intro to R"
lecture: 7
tags:
  - intro-to-r
  - pipe-operator
  - dplyr
  - tidyverse
  - tibble
  - select
  - filter
  - package-collision
subject: intro-to-r
in_scope: true
---

# Pipes and dplyr Basics

> Part of: [[Intro to R]]
> Key concepts: [[Pipe Operator]], [[dplyr]], [[tidyverse]], [[Tibble]], [[select()]], [[filter()]], [[Package Collision]]

Source: Moodle deck `lesson_7_dplyr_ENG.pdf` (22 slides).

## 1. The pipe operator

Nested code runs from the inside out, which is the opposite of how you read it. The [[Pipe Operator]] `|>` passes the result on the left into the **first argument** of the function on the right.

```r
function2(function1(data))          # nested
data |> function1() |> function2()  # piped
```

```r
x <- c(1.04, 1.21, 1.97, 0.35, 1.17, 0.36, 0.03, 1.62, 1.19, 1.1)
round(log(sqrt(x)), 2)
x |> sqrt() |> log() |> round(2)
```

Both give:

```
[1]  0.02  0.10  0.34 -0.52  0.08 -0.51 -1.75  0.24  0.09  0.05
```

The `2` is the second argument of `round()`.

> [!note] How the pipe looks on this site
> The code font draws the pipe as a small triangle. To type it, press the vertical bar and then the greater-than sign, or use the shortcut below.

> [!tip] Pipe shortcut
> `Ctrl + Shift + M` (Mac: `Cmd + Shift + M`) inserts a pipe. The course uses the native `|>`, so tick **Options → Code → Editing → Use native pipe operator**. The older `%>%` comes from the tidyverse.

## 2. The tidyverse and dplyr

R appeared in 1993 and some of its base code feels clunky. The [[tidyverse]] is a **meta package**: a bundle of packages designed to work together. [[dplyr]] is its core data-manipulation package.

```r
library(dplyr)      # just dplyr
library(tidyverse)  # the whole bundle
```

A [[Tibble]] is the tidyverse's dataframe. It behaves like a `data.frame` but prints more neatly: 10 rows, only the columns that fit, and no row names.

### The five main verbs

| Verb | Job |
| --- | --- |
| `arrange()` | Sort rows |
| [[filter()]] | Keep rows that meet a condition |
| `mutate()` | Create or change columns |
| [[select()]] | Choose columns |
| `summarize()` | Reduce columns to a statistic |

British spelling such as `summarise()` also works.

## 3. Choosing columns with `select()`

Column names do not need quotes.

```r
select(mtcars, mpg, disp)
mtcars |> select(mpg, disp)
```

Rename while selecting with `new_name = old_name`:

```r
mtcars |> select(miles_per_gallon = mpg, displacement = disp) |> head(2)
```

Select by a pattern in the name:

```r
mtcars |> select(starts_with("c")) |> head(2)  # cyl, carb
```

- Helpers: `starts_with()`, `ends_with()`, `contains()`.
- A comma combines conditions as OR. You can also use `&` and `|`.
- Column order follows the order you give.
- A minus sign drops a column, as in `select(-mpg)`.

## 4. Keeping rows with `filter()`

[[filter()]] removes the need for logical indexes and repeated dataframe names.

```r
filter(mtcars, mpg >= 30)
filter(mtcars, mpg >= 30 & carb == 2)
filter(mtcars, mpg >= 30, carb == 2)   # a comma means AND
```

```r
dat <- dplyr::starwars
dat |>
  filter(sex == "female",
         eye_color != "blue",
         species == "Human")
```

> [!example] Slide exercise: filter `mtcars`
> Keep cars with automatic transmission (`am = 0`) or weight above 2, and displacement between 100 and 300. Keep `mpg`, `wt` and `disp`.
> ```r
> mtcars |>
>   filter(am == 0 | wt > 2, disp >= 100, disp <= 300) |>
>   select(mpg, wt, disp)
>
> keep_rows <- (mtcars$am == 0 | mtcars$wt > 2) &
>   mtcars$disp >= 100 & mtcars$disp <= 300
> mtcars[keep_rows, c("mpg", "wt", "disp")]
> ```
> The `dplyr` version is shorter and easier to read. *AI-written answer. "Between" is treated as inclusive.*

## 5. Package collisions

A [[Package Collision]] happens when two loaded packages have a function with the same name: the package loaded **last** masks the earlier one. For example, `MASS` has its own `select()` that hides the one from `dplyr` if `MASS` loads later.

Fixes on the slides:

- Load `MASS` first.
- Use `::`, for example `dplyr::select()`.
- Use the British spelling where one exists, such as `summarise()`.

## Summary

- `|>` passes a result into the next function's first argument.
- [[select()]] chooses **columns** and [[filter()]] chooses **rows**.
- In `filter()`, a comma means AND.

## Related notes

- [[Intro to R]]
- [[Lec_06-Packages]]
- [[Lec_08-More dplyr]]
