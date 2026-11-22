---
title: "Lec 03: Vectors"
semester: 2
year: 1
course: "Intro to R"
lecture: 3
tags:
  - intro-to-r
  - vectors
  - c-function
  - vectorisation
  - r-basics
subject: intro-to-r
in_scope: true
---

# Vectors

> Part of: [[Intro to R]]
> Key concepts: [[Vector]], [[c() Function]], [[Colon Operator]], [[Vectorised Operation]], [[Lec_02-Variables and Assignment|Variables and Assignment]], [[Lec_01-Data Types in R|Data Types in R]]

Source: `Vectors.R`, a short script. The whole script is covered below.

## 1. What a vector is

The script opens with three comments that define the idea:

- A **vector** is an ordered list of elements of the **same type**.
- It can contain numbers, strings or other data types (one type per vector).
- All of a vector's elements are **adjacent in memory**.

> [!info] Definition
> A [[Vector]] is R's basic container: an ordered sequence of values that share one type (see [[Lec_01-Data Types in R|Data Types in R]]). Order matters, so the first element stays first.

> [!note] Reconstructed from the code
> The comment says every element has the same type. R enforces this by **coercion**, not by raising an error: `c()` silently converts mixed input to one type (see section 4). So "same type" is a rule R imposes on your data, not a check that stops you.

## 2. Making a vector with the colon operator

```r
x <- 1:10 #this is a vector
x
x+2 #adds 2 to each element of the vector
```

`1:10` builds the sequence of whole numbers from 1 to 10 (the [[Colon Operator]]) and `<-` stores it in `x` (see [[Lec_02-Variables and Assignment|Variables and Assignment]]). Typing `x` prints it. Output, run in R:

```r
x <- 1:10
print(x)
```

```
 [1]  1  2  3  4  5  6  7  8  9 10
```

The `[1]` at the start of the line is the position of the first element printed on that line.

> [!note] Reconstructed from the code
> `1:10` has type `integer` and length `10` (`class(x)` and `length(x)` in R). The script does not state this.

## 3. Vectorised arithmetic

`x+2` adds 2 to **each element**, as the script's comment says. No loop is needed. This is a [[Vectorised Operation]].

```r
x <- 1:10
print(x+2)
```

```
 [1]  3  4  5  6  7  8  9 10 11 12
```

| Expression | Meaning | Result for `x <- 1:10` |
| --- | --- | --- |
| `x` | the whole vector | `1 2 3 ... 10` |
| `x+2` | add 2 to every element | `3 4 5 ... 12` |

> [!note] Reconstructed from the code
> The script only shows `x+2`, but other operators work the same way: `x*2` gives `2 4 6 8 10 12 14 16 18 20`. Adding two vectors of different lengths *recycles* the shorter one: `x+c(100,200)` gives `101 202 103 204 105 206 107 208 109 210`. Both were run in R, but neither is in the script.

> [!warning] `x` stays in your environment
> After `Vectors.R` runs, `x` is `1:10`, and it stays that way until something reassigns it. A later script that uses `x` without defining it (such as `a*x` in `Data types.R`) will pick up this value. See [[Lec_01-Data Types in R|Data Types in R]].

## 4. Combining with `c()`

```r
grades <- c(100,95,90,89,5) #c means concatenates
a <- 1:3
lol <- c(grades,a)
lol
```

`c()` (**c**oncatenate, or combine) joins its arguments into one longer vector. The arguments can be single values (building `grades`) or whole vectors (building `lol`). Order is preserved: `grades` first, then `a`. Output, run in R:

```r
grades <- c(100,95,90,89,5)
a <- 1:3
lol <- c(grades,a)
print(lol)
```

```
[1] 100  95  90  89   5   1   2   3
```

`lol` has 8 elements (5 from `grades`, 3 from `a`).

> [!note] Reconstructed from the code
> `lol` has type `numeric`. `grades` is numeric and `a` is integer, and R promotes to the more general type. The script does not say this.
>
> **Mixed types are coerced, not rejected.** `c(1,"a",TRUE)` gives `"1" "a" "TRUE"` (a character vector), and `c(1,TRUE,FALSE)` gives `1 1 0` (numeric). Promotion goes logical, then numeric, then character. All of these were run in R. This is the practical meaning of "all elements have the same type".

## Summary

- A [[Vector]] is an ordered sequence of same-type elements, adjacent in memory.
- `1:10` creates a sequence; [[c() Function|c()]] concatenates values or vectors.
- Arithmetic on a vector applies to every element ([[Vectorised Operation]]).
- A variable like `x` persists in the environment and can be reused by accident in later scripts.

## Related notes

- [[Intro to R]]
- [[Lec_01-Data Types in R]]
- [[Lec_02-Variables and Assignment]]
