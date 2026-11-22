---
title: "Lec 01: Data Types in R"
semester: 2
year: 1
course: "Intro to R"
lecture: 1
tags:
  - intro-to-r
  - r-basics
  - data-types
  - logical
  - character
  - assignment
subject: intro-to-r
in_scope: true
---

# Data Types in R

> Part of: [[Intro to R]]
> Key concepts: [[Data Type]], [[Numeric]], [[Character]], [[Logical]], [[Factor]], [[Type Coercion]], [[paste()]], [[sample()]], [[rm()]], [[R Environment]]

> [!info] Source
> This lecture is a single short script, `Data types.R`, not a slide deck. Everything below follows the script's code and comments in order. Anything that goes beyond the script is in a `> [!note] Reconstructed from the code` callout, so you can tell it was not shown in class. The example name strings are placeholders (`"Ada"` and `"Lovelace"`), not the values in the original script.

## The four data types

The script opens with a comment listing the basic [[Data Type]]s in R:

| Type | What it holds | Example |
| ---- | ------------- | ------- |
| [[Numeric]] | numbers | `2`, `0.43` |
| [[Character]] | strings (text) | `"Ada"` |
| [[Logical]] | Boolean values, `TRUE` / `FALSE` | `5>3` |
| [[Factor]] | categorical data | named groups such as "low", "high" |

The script only works through the logical and character types in code. Factors are named in the opening comment but never used.

> [!note] Reconstructed from the code
> `class()` reports an object's type. Run in R:
>
> ```r
> class(2)
> class("a")
> class(5>3)
> class(factor("a"))
> ```
>
> ```
> [1] "numeric"
> [1] "character"
> [1] "logical"
> [1] "factor"
> ```

## Boolean (logical) type

```r
5>3 
r_is_awesome <- T #can also use T for True or F for False
r_is_awesome
```

```
[1] TRUE
[1] TRUE
```

- `5>3` is a comparison. It returns a [[Logical]] value, here `TRUE`.
- `<-` stores a value under a name (see [[Lec_02-Variables and Assignment]]).
- The comment says `T` is shorthand for `TRUE` and `F` for `FALSE`.

> [!note] Reconstructed from the code
> The comment is right that `T` works, but `T` and `F` are ordinary variables, so they can be overwritten (`T <- 0` makes `T` equal to `0`). `TRUE` and `FALSE` are reserved words and cannot be changed: `TRUE <- 1` gives `Error in TRUE <- 1 : invalid (do_set) left-hand side to assignment`. In scripts you want to trust, write `TRUE` and `FALSE` in full.

## Converting between types

```r
as.numeric(TRUE)
as.logical(0) #This gives false
as.logical(5<4)
```

```
[1] 1
[1] FALSE
[1] FALSE
```

This is [[Type Coercion]] done on purpose with `as.*()` functions.

| Call | Result | Why |
| ---- | ------ | --- |
| `as.numeric(TRUE)` | `1` | `TRUE` is stored as 1 |
| `as.logical(0)` | `FALSE` | 0 counts as false |
| `as.logical(5<4)` | `FALSE` | `5<4` is already `FALSE`, so nothing changes |

> [!note] Reconstructed from the code
> The rule behind this: `TRUE` is 1 and `FALSE` is 0, and in the other direction 0 becomes `FALSE` and any other number becomes `TRUE`. Run in R: `as.logical(5)` gives `TRUE`, `as.logical(-2)` gives `TRUE`, `as.numeric(FALSE)` gives `0`. A handy consequence: `sum(c(TRUE,TRUE,FALSE))` gives `2`, so you can count how many conditions are true by summing.

## Character type and `paste()`

```r
name <- "Ada"
surname <- "Lovelace"
name
surname
paste(name,surname) #This concatenates our 2 variables
```

```
[1] "Ada"
[1] "Lovelace"
[1] "Ada Lovelace"
```

- Text goes in quotes, and makes a [[Character]] value.
- [[paste()]] joins (concatenates) its arguments into one string.

> [!note] Reconstructed from the code
> `paste()` puts a single space between its arguments by default, which is why the result reads `"Ada Lovelace"`.

## Random dice rolls with `sample()`

```r
die_rolls <- sample(1:6,10, replace=TRUE) # 10 dice rolls with numbers 1-6
die_rolls
```

- `1:6` is the set of values to pick from (the numbers 1 to 6).
- `10` is how many to draw.
- `replace=TRUE` allows the same number to come up more than once, like a real die.

> [!warning] The output changes every time
> [[sample()]] is random, so `die_rolls` is different on each run. There is no single correct answer to show. What is always true is that it holds 10 whole numbers, each between 1 and 6. (Checked in R with a fixed seed: length `10`, class `"integer"`, all values in `1:6`.)

## Removing a variable with `rm()`

```r
rm("name") #removes variable name until we run it again
```

[[rm()]] deletes `name` from the [[R Environment]]. The comment says it stays removed "until we run it again", meaning re-running the line `name <- "Ada"` recreates it. Asking for `name` after `rm("name")` gives:

```
Error: object 'name' not found
```

## Variables from outside the script

```r
a <- 2
a*x #even though x isn't in this script, its still saved in the environment
```

This is the real lesson of the line. `x` is never defined in `Data types.R`. R looks for it in the [[R Environment]], the shared workspace of everything created in the current session. So the result depends on whatever `x` was left there by something run earlier:

| What ran last | Value of `x` | `a*x` gives |
| ------------- | ------------ | ----------- |
| `Variables.R` | `0.43` | `0.86` |
| `Vectors.R` | `1:10` | `2 4 6 8 10 12 14 16 18 20` |
| nothing defines `x` | missing | `Error: object 'x' not found` |

All three rows were run in R by setting `x` first (`x <- 0.43`, `x <- 1:10`) and then evaluating `a*x`; the last row is `a*x` in a fresh session.

> [!warning] Hidden dependency
> A script that relies on leftover variables works on your machine and breaks on someone else's, or on yours after a restart. Define everything a script needs inside the script. See [[Lec_02-Variables and Assignment]] and [[Lec_03-Vectors]] for where `x` comes from.

## Quick arithmetic helpers

```r
prod(1:5) #calculates 1*2*3*4*5
sum(1:10) #calculates 1+2+3...+10
```

```
[1] 120
[1] 55
```

- `prod()` multiplies all the elements together.
- `sum()` adds them.
- `1:5` and `1:10` build the whole-number ranges (more in [[Lec_03-Vectors]]).

## Summary

- R's basic types: [[Numeric]], [[Character]], [[Logical]], [[Factor]]. The script exercises logical and character.
- Comparisons like `5>3` return [[Logical]] values. `TRUE` is 1 and `FALSE` is 0 when converted with `as.numeric()`.
- `as.numeric()` and `as.logical()` convert between types ([[Type Coercion]]).
- `paste()` joins strings. `sample(..., replace=TRUE)` draws random values with repeats, so its output varies.
- `rm()` removes a variable. Variables live in the [[R Environment]], so a script can silently use values it never created.

## Related notes

- [[Intro to R]]
- [[Lec_02-Variables and Assignment]]
- [[Lec_03-Vectors]]
