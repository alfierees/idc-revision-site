---
title: "Lec 11: Probability and Random Numbers"
semester: 2
year: 1
course: "Intro to R"
lecture: 11
tags:
  - intro-to-r
  - probability-function
  - distribution-function
  - quantile-function
  - random-seed
  - pseudo-random-numbers
  - monte-carlo-simulation
  - sample
subject: intro-to-r
in_scope: true
---

# Probability and Random Numbers

> Part of: [[Intro to R]]
> Key concepts: [[Probability Function]], [[Distribution Function]], [[Quantile Function]], [[Pseudo-Random Numbers]], [[Random Seed]], [[sample()]], [[Monte Carlo Simulation]]

Source: Moodle deck `lesson_11_Probability_and_RNG_ENG.pdf` (16 slides). The numeric results below were rerun in R and match the slides.

## 1. The four function prefixes

Every distribution in R uses the same naming pattern:

| Prefix | Gives | Normal | Binomial | Poisson |
| --- | --- | --- | --- | --- |
| `d` | [[Probability Function\|Probability or density]] | `dnorm` | `dbinom` | `dpois` |
| `p` | [[Distribution Function\|Cumulative probability]] | `pnorm` | `pbinom` | `ppois` |
| `q` | [[Quantile Function\|Quantile]] | `qnorm` | `qbinom` | `qpois` |
| `r` | Random draws | `rnorm` | `rbinom` | `rpois` |

## 2. Probability and density: `d`

**Example:** each of 12 students passes with probability 0.9. What is the probability that exactly 10 pass?

$$
P(X = x) = \binom{n}{x} p^x (1-p)^{n-x}
$$

```r
dbinom(x = 10, size = 12, prob = 0.9)
```

```
[1] 0.2301278
```

Arguments can be vectors:

```r
dbinom(x = 9:12, size = 12, prob = 0.9)
dbinom(x = 10, size = 12, prob = c(0.5, 0.7, 0.9))
```

```
[1] 0.08523251 0.23012777 0.37657272 0.28242954
[1] 0.01611328 0.16779030 0.23012777
```

**Poisson example:** mothers arrive at a ward at a rate of 10 per day. What is the probability of 20 arrivals in one day?

```r
dpois(x = 20, lambda = 10)
```

```
[1] 0.001866081
```

Other functions on the slides are `dgeom()` (which counts failures, not trials), `dnorm()` and `dexp()`.

## 3. Cumulative probability: `p`

The [[Distribution Function]] is:

$$
F_X(x) = P(X \le x)
$$

Height is distributed $N(170, 15^2)$.

```r
pnorm(q = 190, mean = 170, sd = 15)      # shorter than a 190 cm door frame
1 - pnorm(q = 169, mean = 170, sd = 15)  # taller than 169 cm
```

```
[1] 0.9087888
[1] 0.5265765
```

![[intro-r-l11-normal-density.png|640]]

The probability of **more than** 15 arrivals when the rate is 10:

```r
1 - ppois(q = 15, lambda = 10)
```

```
[1] 0.0487404
```

> [!tip] Upper tails
> `lower.tail = FALSE` gives $1 - F_X(x)$ directly, as in `ppois(15, 10, lower.tail = FALSE)`.

> [!warning] "More than" with discrete variables
> For a discrete variable, $P(X > 15) = 1 - P(X \le 15)$, but $P(X \ge 15) = 1 - P(X \le 14)$.

## 4. Quantiles: `q`

The [[Quantile Function]] takes a probability and returns the value below which that share of observations falls. What height are only 1% of people taller than?

```r
qnorm(p = 0.99, mean = 170, sd = 15)
```

```
[1] 204.8952
```

## 5. Random numbers

Computers generate [[Pseudo-Random Numbers]]: a deterministic algorithm produces values that pass tests of randomness. The algorithm starts from a [[Random Seed]], and the seed determines the whole series.

> [!tip] Always set a seed
> `set.seed()` makes results exactly reproducible. If you do not set one, R chooses one for you.

## 6. Sampling with `sample()`

[[sample()]] has four main arguments: `x`, `size`, `replace` and `prob`.

```r
dreidel <- c("Nes", "Gadol", "Haya", "Po")
set.seed(420)
sample(dreidel, size = 1)
```

```
[1] "Nes"
```

```r
sample(dreidel, size = 10, replace = TRUE)
```

> [!example] Slide exercise: reproducible sampling
> ```r
> set.seed(1)
> sample(c("H", "T"), size = 1)                                   # fair coin
> sample(c("H", "T"), size = 2, replace = TRUE, prob = c(0.6, 0.4)) # biased coin
> sample(1:6, size = 10, replace = TRUE)                          # ten die rolls
> sample(c("AB", "B", "A", "O"), size = 10000, replace = TRUE,
>        prob = c(0.04, 0.11, 0.40, 0.45))                        # blood types
> ```
> *AI-written answer.*

## 7. Sampling from a distribution

Use the `r` prefix:

```r
rnorm(n = 13, mean = 100, sd = 15) |> round()
```

## 8. Monte Carlo example: a "deadly weekend"

Road deaths average about 1 per day. Is a weekend with 7 deaths really extreme? A three-day weekend is modelled as Poisson(3).

```r
set.seed(1)
n_dead <- rpois(1e6, lambda = 1 * 3)
(p_many <- mean(n_dead >= 7))
```

```
[1] 0.033482
```

Solving a problem by repeated sampling is called [[Monte Carlo Simulation]]. The number of extreme weekends per year is $\text{Bin}(52, 0.033482)$, so the expected number is:

$$
52 \times 0.033482 \approx 1.74
$$

> [!note] Worked answer
> The slide leaves this calculation as a question. About **1.7** such weekends are expected each year, so a 7-death weekend is not very extreme. The exact Poisson probability is `1 - ppois(6, 3)` = 0.03350854, close to the simulated value. *AI-written answer, checked in R.*

## Summary

- `d`, `p`, `q` and `r` give density, cumulative probability, quantile and random draws.
- Use `1 - p...()` or `lower.tail = FALSE` for upper tails.
- Set a [[Random Seed]] so random results can be reproduced.

## Related notes

- [[Intro to R]]
- [[Lec_10-Advanced ggplot2]]
