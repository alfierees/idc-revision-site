---
title: "Lec 02: Variables and Assignment"
semester: 2
year: 1
course: "Intro to R"
lecture: 2
tags:
  - intro-to-r
  - variables
  - assignment-operator
  - r-basics
  - bmi
subject: intro-to-r
in_scope: true
---

# Variables and Assignment

> Part of: [[Intro to R]]
> Key concepts: [[Variable]], [[Assignment Operator]], [[Expression Evaluation]], [[Body Mass Index]]
> Source: the course script `Variables.R` (a short script, no slides). Everything in the code blocks is from the script; anything else is flagged.

Previous: [[Lec_01-Data Types in R]]. Next: [[Lec_03-Vectors]].

## 1. Making a variable

A [[Variable]] is a name that points to a stored value. In R you create one with the [[Assignment Operator]] `<-` (the script's comment says it is typed with **Option and -** on a Mac).

```r
x <- 0.43
```

Read it as "x gets 0.43". The value goes on the right, the name on the left, and the arrow points at the name.

## 2. Reading a variable

Typing the name alone prints its value.

```r
x
```

```
[1] 0.43
```

The `[1]` is R's index marker: it says the first element on this line is element 1. Here there is only one element.

## 3. Using a variable in expressions

Once `x` exists, it can stand in for 0.43 anywhere ([[Expression Evaluation]]).

```r
x*10
```

```
[1] 4.3
```

This only prints the result. It does **not** change `x`, because there is no assignment.

## 4. Variables built from other variables

The script stores a result in a new variable.

```r
y <- x*10^3 #y will be 430 even if we change the x value until we run it again
y
```

```
[1] 430
```

Order of operations: `10^3` is evaluated first (1000), then multiplied by `x`, so `0.43 * 1000 = 430`.

> [!warning] A variable stores a value, not a formula
> The script's own comment makes the key point: `y` is **430 even if we change `x`**, until the `y <-` line is run again. R computes `x*10^3` once, at the moment of assignment, and stores the number. It does not keep a live link to `x`.

> [!note] Reconstructed from the code
> To see this concretely, I ran these expressions together in one R session:
> ```r
> x <- 0.43
> y <- x*10^3
> x <- 0.5
> y
> ```
> ```
> [1] 430
> ```
> `y` is still 430 although `x` is now 0.5. Re-running `y <- x*10^3` would give 500.

## 5. Worked example: BMI

The script applies this to a player's body measurements.

```r
height_of_player <- 183
weight_of_player <- 88
bmi <- weight_of_player/(height_of_player/100)^2
bmi
```

```
[1] 26.27729
```

[[Body Mass Index]] is weight in kilograms divided by height in metres squared:

$$
\text{BMI} = \frac{\text{weight (kg)}}{\text{height (m)}^2}
$$

The height is given in centimetres (183), so the code divides by 100 to get metres (1.83). The brackets matter: `(height_of_player/100)^2` squares the height in metres. Without them, `^` would bind only to `100`.

| Step | Expression | Value |
| --- | --- | --- |
| 1 | `height_of_player/100` | 1.83 |
| 2 | `(height_of_player/100)^2` | 3.3489 |
| 3 | `weight_of_player/3.3489` | 26.27729 |

> [!tip] Why use variables here
> Naming the inputs makes the formula readable and reusable. To change the player, edit two lines and re-run the `bmi` line. Remember from section 4 that `bmi` will not update by itself.

> [!note] Reconstructed from the code
> The units (kg and cm) are not stated in the script. They are assumed because the formula only makes sense in those units.

## 6. Extra notes (not from class)

> [!note] Reconstructed from the code
> - `=` and `->` also assign in R (`x = 7`, `9 -> z`), but `<-` is the convention the script uses, so stick with it.
> - Asking for a name that was never assigned gives the error `object 'nothing_here' not found`.
> - Names are case sensitive, so `bmi` and `BMI` are different variables.
> - `x` persists in the session after this script runs. A later script that uses `x` without defining it will silently pick up `0.43`. This matters for `a*x` in [[Lec_01-Data Types in R]].

## Comparison: a variable versus a printed result

| | `y <- x*10^3` | `x*10` |
| --- | --- | --- |
| Stores a value | Yes, in `y` | No |
| Prints output | No (until you type `y`) | Yes |
| Changes if `x` changes later | No, until re-run | Only when re-evaluated |

## Summary

- `<-` assigns; the name goes on the left.
- Typing a variable's name prints its value.
- Expressions can use variables; the result is a number computed at that moment.
- A variable built from another is a **snapshot**, not a live formula.
- Use brackets to control order of operations, as in the BMI formula.

## Related notes

- [[Intro to R]]
- [[Lec_01-Data Types in R]]
- [[Lec_03-Vectors]]
