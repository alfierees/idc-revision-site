---
title: "The Solow Model with Constant Technology"
week: 6
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
lecture: "Lecture 06: 3, Growth: Solow with constant technology"
instructor: Dr. Idit Kalisher
tags:
  - macro-economics-intro
  - class-slides
  - solow-model
  - steady-state
  - capital-dilution
  - depreciation
aliases:
  - Intro Macro Lecture 06
subject: principles-of-macro
in_scope: true
---

> [!info] Built from the class slides
> AI-written notes from the Moodle deck *3, Growth: Solow with constant technology*. Slide photos and data charts are not reproduced.

## Why Solow?

Income levels and growth rates differ persistently across countries. Solow's model explains how economies become more productive, why growth rates differ and how economies recover from a shock.

$$
Y = A\,F(K, L) = A K^{\alpha} L^{1-\alpha}
$$

## Assumptions

- Small, closed economy with **no government**.
- Competitive markets.
- **Constant technology** ($A$ fixed).
- **Constant returns to scale**, with diminishing returns to each input ($0 \le \alpha \le 1$).
- Output is consumed or saved, at a fixed saving rate: $S = sY$.
- Capital depreciates at a constant rate $\delta$.
- Labour grows at the population growth rate: $\Delta L / L = n$.

## Per-worker form

$$
k = \frac{K}{L},
\qquad
y = \frac{Y}{L} = f(k) = A k^{\alpha}
$$

If capital and labour grow at the same rate, $k$ stays constant and output per worker does not grow.

## Capital accumulation

Savings become investment. Part of it replaces worn-out capital, and part equips new workers (**capital dilution**). Only the rest raises $k$:

$$
\Delta k = s\,f(k) - (\delta + n)\,k
$$

> [!warning] Check this condition
> The slide writes the growth condition as $s > \delta + n$. The general condition is $s\,y > (\delta + n)\,k$, which reduces to $s > \delta + n$ only when $y = k$.

## Steady state

$k$ rises until savings per worker exactly cover the break-even line:

$$
s\,f(\bar k) = (\delta + n)\,\bar k
\quad\Longrightarrow\quad
\bar k = \left(\frac{sA}{\delta + n}\right)^{\frac{1}{1-\alpha}}
$$

Press play to watch $k$ converge, then change the parameters yourself:

```graph
type: solow-model
figure: steady-state
```

- If $k < \bar k$, savings exceed the break-even line and output per worker grows.
- If $k > \bar k$, the break-even line is above savings and output per worker falls.

## What steady state means

Without technological progress:

- **Capital per worker and output per worker are constant.**
- Total output grows only at the population growth rate $n$.
- Per capita income stagnates.

## How a change in savings moves the economy

A permanent rise in $s$ raises $\bar k$ and $\bar y$. Growth is temporary: it speeds up during the transition and returns to zero at the new steady state.

```graph
type: solow-model
figure: savings-shift
```
