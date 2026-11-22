---
title: "Lec 00: Installing R, RStudio and Basic Arithmetic"
semester: 2
year: 1
course: "Intro to R"
lecture: 0
tags:
  - intro-to-r
  - rstudio
  - console
  - script-editor
  - operator-precedence
  - modulo-operator
subject: intro-to-r
in_scope: true
---

# Installing R, RStudio and Basic Arithmetic

> Part of: [[Intro to R]]
> Key concepts: [[RStudio]], [[Console]], [[Script Editor]], [[Operator Precedence]], [[Modulo Operator]], [[Colon Operator]]

Source: Moodle deck `lesson_1_installation_ENG.pdf` (22 slides). It is numbered Lec 00 here because the existing Lec 01 covers data types from the class scripts.

## 1. What the course is about

The course teaches statistical and computational programming: writing, checking and maintaining code for applications such as econometrics. The deck gives four reasons for using R:

- It is free and open source.
- It is popular in the relevant disciplines.
- It has a large, active community.
- It is needed in later semesters, particularly for Econometrics.

> [!info] Course requirements on the slides
> Attend or watch the lectures, attend practice sessions, solve the homework (**15%**) and take the final exam (**85%**). In the years covered by the Moodle files, the exam was run as a 24-hour final assignment.

## 2. Installing R and RStudio

1. Download the latest R for your system from [CRAN](https://cran.r-project.org/).
2. Download [RStudio](https://rstudio.com/products/rstudio/download/), which detects the installed R automatically.
3. Open RStudio. On Windows, the deck recommends running it as Administrator and using a username in English only.

R is the language and engine. [[RStudio]] is the editor around it, built specifically for R.

## 3. The RStudio layout

| Area | What it does |
| --- | --- |
| [[Console]] | Runs one command at a time; `>` is the prompt |
| [[Script Editor]] | Holds longer `.R` scripts that you can save and rerun |
| Environment pane | Shows the variables in your session |
| Plots / Files / Packages / Help | Shows figures, files, packages and documentation |

### Console shortcuts

| Action | Windows | Mac |
| --- | --- | --- |
| Clear console | `Ctrl + L` | `Cmd + L` |
| Focus console | `Ctrl + Shift + 2` | `Cmd + Shift + 2` |
| Previous command | `↑` | `↑` |
| Tab completion | `Tab` | `Tab` |

### Editor shortcuts

| Action | Windows | Mac |
| --- | --- | --- |
| New script | `Ctrl + Shift + N` | `Cmd + Shift + N` |
| Run line or selection | `Ctrl + Enter` | `Cmd + Enter` |
| Run whole script | `Ctrl + Shift + Enter` | `Cmd + Shift + Enter` |
| Run all lines above | `Ctrl + Alt + B` | `Cmd + Option + B` |
| Run all lines below | `Ctrl + Alt + E` | `Cmd + Option + E` |
| Shortcut list | `Alt + Shift + K` | `Option + Shift + K` |

## 4. R as a calculator

```r
1 + 1        # 2
2^3          # 8
3 * (-2)     # -6
sqrt(3)      # 1.732051
sin(2.4*pi)  # 0.9510565
```

| Operation | Operator or function | Example |
| --- | --- | --- |
| Add, subtract | `+`, `-` | `2+2`, `1-3` |
| Multiply, divide | `*`, `/` | `2*4`, `10/5` |
| Power | `^` | `4^3` |
| Square root | `sqrt` | `sqrt(2)` |
| Exponential | `exp` | `exp(1)` |
| Natural log | `log` | `log(2)` |
| Log base 10 | `log10` | `log10(1000)` |
| [[Modulo Operator\|Modulo]] (remainder) | `%%` | `7 %% 2` |
| Absolute value | `abs` | `abs(-3)` |

The constant $\pi$ is available as `pi`. You can mark a whole number as an integer with `L`, as in `5L`.

> [!warning] Finite precision
> R computes numerically, so not every calculation that should equal zero gives an exact `0`.

## 5. Order of operations

[[Operator Precedence]] works like maths, with some R-specific cases. Use parentheses when in doubt.

```r
2 + 3 * 4     # 14
(2 + 3) * 4   # 20
7 %% 2^4      # 7, because 2^4 runs first
(7 %% 2)^4    # 1
1:3^2         # 1 2 3 4 5 6 7 8 9
(1:3)^2       # 1 4 9
```

## 6. Creating a sequence

The [[Colon Operator]] creates a sequence with step size 1, and arithmetic applies to every element.

```r
1:10        #  1  2  3  4  5  6  7  8  9 10
1:10 + 2    #  3  4  5  6  7  8  9 10 11 12
1:10 * 3    #  3  6  9 12 15 18 21 24 27 30
```

> [!example] Slide exercise: run `1:10^2`
> The power runs before the colon, so this is `1:100`, a vector of **100** numbers. Checked in R. To square each of 1 to 10, write `(1:10)^2`.

## Summary

- R is the engine and [[RStudio]] is the editor.
- Use the [[Console]] for quick commands and the [[Script Editor]] for work you want to keep.
- `^` runs before `:` and `%%`, so parentheses matter.

## Related notes

- [[Intro to R]]
- [[Lec_01-Data Types in R]]
- [[Lec_03-Vectors]]
