---
title: "Lecture 10: Continuous Random Variables and the Uniform Distribution"
semester: 1
year: 1
course: "Statistics A"
lecture: 10
tags:
  - statistics-a
  - continuous-random-variable
  - pdf
  - cdf
  - expected-value
  - variance
  - percentile
  - median
  - continuous-uniform-distribution
  - correlation
subject: statistics-a
in_scope: true
---

# Lecture 10: Continuous Random Variables and the Uniform Distribution

> Part of: [[Statistics A]]
> Key concepts: [[Correlation]], [[Continuous Random Variable]], [[Probability Density Function]], [[Cumulative Distribution Function]], [[Expected Value]], [[Variance]], [[Percentile]], [[Median]], [[Continuous Uniform Distribution]]

Instructor: Asael Sklar. Up to now every random variable took a countable list of values and had a [[Probability Mass Function]]. This lecture moves to **continuous** variables, where probability becomes **area under a curve**, and then meets the simplest continuous family, the uniform. The discrete tools it generalises are in [[Lec_05-Random Variables, Expected Value and Variance]] and [[Lec_06-Expected Value, Variance and Known Distributions]]. The lecture ends with the plan for Tuesday: review, continuous random variables, Exercise 10.

## 1. Correlation: benchmarks, examples and extra credit

The lecture opens with a short correlation add-on (the extra-credit task: 2 points, open on Moodle, due 7 January 2025). The slides use real country-level data from Our World in Data and quote these correlations $\rho$:

| Pair of variables | Correlation |
| --- | --- |
| Extreme poverty and fertility rate | $\rho \approx 0.78$ |
| Fertility rate and child mortality | $\rho \approx 0.83$ |
| Extreme poverty and years in school | $\rho \approx -0.79$ |
| Population growth and CO2 emissions per capita | $\rho \approx -0.2$ |

- Strong positive: places with more extreme poverty tend to have more children per woman, and fertility moves almost in step with child mortality.
- Strong negative: more schooling goes with less extreme poverty.
- Weak negative ($-0.2$): population growth tells you very little about per-capita emissions.

Students are also pointed to *guessthecorrelation.com*, a game where you guess $\rho$ from a scatter plot, to build intuition for what each value looks like.

> [!warning] Correlation is not causation
> The section closes with the reminder that a high $\rho$ only says two variables move together. It does not say one causes the other (a third factor, such as national income, can drive both fertility and child mortality).

> [!note] Reconstructed from the slides
> The "correlation benchmarks" slide (slide 5) and the scatter plots are pictures I could not read. Only the four quoted correlations and the sign interpretations above are from the text; the weak/strong wording is my reading of the numbers. See [[Correlation]] in the earlier lectures for the definition.

## 2. What is a continuous random variable?

A variable is **continuous** if between any two possible values there is always another possible value. Height, time, temperature and weight are theoretically continuous. In practice we cannot measure them exactly (we round to a centimetre or a second), but the model treats them as continuous.

> [!info] Formal definition (Handout 10)
> A random variable is continuous if for each pair of values $x_i < x_j$ there exists another possible value $x_k$ so that $x_i < x_k < x_j$.

### Why the discrete method fails: the dice factory

The lecture tells a story. You work in a die factory and must find the probability of each number.

1. A normal die: 6 outcomes, probabilities $\tfrac16$ each.
2. Make a die with more and more faces (the slides keep adding numbers through the day). Each outcome's probability keeps shrinking.
3. "Now, an infinite die": a line has infinitely many dots.

With infinitely many equally "spread out" outcomes, the probability of any single exact value must shrink to 0. So $P(X = x) = 0$ for every single $x$ and a probability mass function is useless: it would be zero everywhere.

> [!tip] The fix
> Do not ask "what is the probability of exactly $x$?". Ask "what is the probability of landing in an **interval**?", for example $P(X \le t)$. That question has a sensible, non-zero answer.

## 3. The CDF

The [[Cumulative Distribution Function]] gives exactly that probability:

$$
F(t) = F(X) = P(X \le t)
$$

It is defined for every real $t$, is non-decreasing, starts at 0 on the far left and ends at 1 on the far right.

> [!example] Running example 1 (uniform between 2 and 8)
> A variable with
>
> $$
> F(t) = \begin{cases} 0 & t < 2 \\ \dfrac{t-2}{6} & 2 \le t \le 8 \\ 1 & 8 < t \end{cases}
> $$
>
> It is 0 up to $t=2$, rises in a straight line, and is 1 from $t=8$. For example $F(5) = \tfrac{3}{6} = 0.5$.

## 4. The PDF

For a discrete variable the PMF says how much probability sits at each point, and the CDF is the running total. For a continuous variable the analogue of the PMF is the **[[Probability Density Function]]** $f(x)$, the **rate of change of the CDF**: how fast $F$ rises as $x$ increases.

$$
f(x) = F'(x), \qquad F(t) = \int_{-\infty}^{t} f(x)\,dx
$$

> [!info] Handout definition
> The PDF is a function of $X$ such that for every $t$, $P(X < t)$ equals the area under the curve from $-\infty$ to $t$.

Differentiating the CDF of running example 1:

$$
f(x) = \begin{cases} 0 & x < 2 \\ \dfrac16 & 2 \le x \le 8 \\ 0 & 8 < x \end{cases}
$$

### Probability is area

The slides ask: what is the probability $P(3 \le X \le 5)$? The region under $f$ between 3 and 5 is a rectangle with width $5 - 3 = 2$ and height $\tfrac16$, so its area is

$$
P(3 \le X \le 5) = 2 \cdot \tfrac16 = \tfrac13
$$

In general the area under the curve between $a$ and $b$ is the definite integral:

$$
P(a \le X \le b) = \int_a^b f(x)\,dx = F(b) - F(a)
$$

> [!warning] Key properties
> - A density can exceed 1 (it is a height, not a probability). Only the **area** has to be at most 1.
> - The total area under $f$ is 1.
> - Because single points have area 0, $P(X \le t) = P(X < t)$ for continuous variables, and the endpoints of an interval do not matter.

![[Lec10_uniform_pdf_cdf.png]]

## 5. Worked example: a triangle density

> [!example] Example
> $f(x) = x$ on $0 \le x \le \sqrt2$, and 0 otherwise
>
> The graph is a triangle with base $\sqrt2$ and height $f(\sqrt2)=\sqrt2$.
>
> **Check it is a density.** Area $= \tfrac{\text{base} \times \text{height}}{2} = \tfrac{\sqrt2 \cdot \sqrt2}{2} = 1$. ✔
>
> **CDF.** $F(x) = \int_0^x u\,du = \dfrac{x^2}{2}$ for $0 \le x \le \sqrt2$, with $F = 0$ below 0 and $F = 1$ above $\sqrt2$.
>
> **A probability.** $P(X < 0.5) = F(0.5) - F(-\infty) = \dfrac{0.5^2}{2} = 0.125$.

![[Lec10_pdf_cdf_triangle.png]]

## 6. Expected value of a continuous variable

Discrete: $E(X) = \sum x_i \, P(X = x_i)$. For a continuous variable the sum becomes an integral and the PMF becomes the PDF:

$$
E(X) = \int_{-\infty}^{\infty} x \, f(x)\,dx
$$

> [!example] Triangle density
> $$
> E(X) = \int_0^{\sqrt2} x \cdot x\,dx = \left[\frac{x^3}{3}\right]_0^{\sqrt2} = \frac{2\sqrt2}{3} \approx 0.943
> $$

## 7. Variance of a continuous variable

$$
\mathrm{Var}(X) = \int_{-\infty}^{\infty} \bigl(x - E(X)\bigr)^2 f(x)\,dx
$$

The handout notes that the shortcut is usually easier:

$$
\mathrm{Var}(X) = E(X^2) - E(X)^2, \qquad E(X^2) = \int_{-\infty}^{\infty} x^2 f(x)\,dx
$$

> [!example] Triangle density
> $$
> E(X^2) = \int_0^{\sqrt2} x^2 \cdot x\,dx = \left[\frac{x^4}{4}\right]_0^{\sqrt2} = \frac{4}{4} = 1
> $$
>
> $$
> \mathrm{Var}(X) = 1 - \left(\frac{2\sqrt2}{3}\right)^2 = 1 - \frac{8}{9} = \frac{1}{9}
> $$

## 8. Percentiles and the median

The **[[Percentile]]** $C_{n/100}$ is the value of $X$ below which $n\%$ of the probability lies. So $C_{0.15}$, the 15th percentile, is the value where $F(X) = 0.15$. The slides' picture example: if $C_{0.77} = 49$, then 77% of the area lies to the left of 49 and 23% to the right.

> [!info] How to find a percentile
> Solve $F\bigl(C_{n/100}\bigr) = \dfrac{n}{100}$ for $C$. In words: set the CDF equal to the target probability and invert.

The **[[Median]]** is the 50th percentile, $Md = C_{0.5}$, where $F(X) = 0.5$.

> [!example] Triangle density
> - 5th percentile: $\dfrac{C^2}{2} = 0.05 \Rightarrow C^2 = 0.1 \Rightarrow C_{0.05} \approx 0.316$.
> - 8th percentile of the slide: $F(0.4) = \dfrac{0.4^2}{2} = \dfrac{0.16}{2} = 0.08$, so $0.4 = C_{0.08}$.
> - Median: $\dfrac{C^2}{2} = 0.5 \Rightarrow C^2 = 1 \Rightarrow Md = 1$.
>
> Here $Md = 1 \ne E(X) \approx 0.943$.

> [!warning] Median versus mean
> In general $E(X) \ne Md$. They coincide only for symmetric distributions (like the uniform in the next section).

### Summary of continuous random variables

| Object | Meaning | Formula |
| --- | --- | --- |
| [[Probability Density Function]] | Density (height) at $x$ | $f(x) = F'(x)$ |
| [[Cumulative Distribution Function]] | $P(X \le t)$ | $F(t) = \int_{-\infty}^t f(x)\,dx$ |
| Interval probability | Area under $f$ | $P(a \le X \le b) = F(b) - F(a)$ |
| [[Expected Value]] | Centre | $\int x f(x)\,dx$ |
| [[Variance]] | Spread | $E(X^2) - E(X)^2$ |
| [[Percentile]] | Value with $n\%$ below it | solve $F(C) = n/100$ |

### Discrete versus continuous

| | Discrete | Continuous |
| --- | --- | --- |
| Probability of one value | $P(X = x) > 0$ possible | always 0 |
| Distribution described by | PMF | PDF |
| Probability of a range | sum of PMF | area under PDF |
| $E(X)$ | $\sum x\,P(x)$ | $\int x f(x)\,dx$ |

## 9. The continuous uniform distribution

$X$ is **uniform** on $[a,b]$, written $X \sim U(a,b)$, if its density is constant on $[a,b]$ and 0 elsewhere. Every sub-interval of the same length is equally likely.

**Finding the constant.** Call the height $c$. The area is a rectangle of width $b-a$ and height $c$, which must equal 1, so $c = \dfrac{1}{b-a}$.

$$
f(x) = \begin{cases} \dfrac{1}{b-a} & a \le x \le b \\ 0 & \text{otherwise} \end{cases}
\qquad
F(x) = \begin{cases} 0 & x < a \\ \dfrac{x-a}{b-a} & a \le x \le b \\ 1 & b < x \end{cases}
$$

$$
E(X) = \frac{a+b}{2}, \qquad Md = \frac{a+b}{2}, \qquad \mathrm{Var}(X) = \frac{(b-a)^2}{12}
$$

The mean and median are the midpoint, by symmetry.

> [!note] Reconstructed from the slides
> The slides state the variance as $(b-a)^2/12$. Derivation: $E(X^2) = \int_a^b \frac{x^2}{b-a}dx = \frac{a^2+ab+b^2}{3}$, and subtracting $\left(\frac{a+b}{2}\right)^2$ gives $\frac{(b-a)^2}{12}$.

> [!example] Example
> $X \sim U(0,10)$
>
> - Density: $f(x) = \tfrac{1}{10}$ on $[0,10]$.
> - CDF: $F(x) = \dfrac{x}{10}$ on $[0,10]$ (0 below, 1 above).
> - $E(X) = \dfrac{0+10}{2} = 5$.
> - $\mathrm{Var}(X) = \dfrac{(10-0)^2}{12} = \dfrac{100}{12} \approx 8.33$.

> [!tip] Compare with the discrete uniform
> The discrete [[Uniform Distribution]] from [[Lec_06-Expected Value, Variance and Known Distributions]] puts equal mass on a list of integers. The continuous version spreads equal density over an interval; the same "equally likely" idea, with area replacing counting.

## Summary

- A continuous variable has infinitely many values, so $P(X=x)=0$; we describe it by intervals, using the **CDF** $F(t)=P(X\le t)$.
- The **PDF** is the derivative of the CDF; probability is the **area** under it, total area 1.
- $E(X)=\int x f(x)\,dx$; $\mathrm{Var}(X)=E(X^2)-E(X)^2$.
- Percentiles solve $F(C)=n/100$; the median is the 50th percentile and need not equal the mean.
- $X\sim U(a,b)$: $f=\tfrac1{b-a}$, $E=\tfrac{a+b}2$, $\mathrm{Var}=\tfrac{(b-a)^2}{12}$.
- Correlation measures co-movement, not causation.

## Related notes

- [[Statistics A]]
- [[Lec_05-Random Variables, Expected Value and Variance]]
- [[Lec_06-Expected Value, Variance and Known Distributions]]
