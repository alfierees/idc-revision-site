---
title: "Lecture 11: Uniform and Normal Distributions"
semester: 1
year: 1
course: "Statistics A"
lecture: 11
tags:
  - statistics-a
  - continuous-random-variable
  - pdf
  - cdf
  - continuous-uniform-distribution
  - normal-distribution
  - standard-normal-distribution
  - standardization
  - z-table
  - central-limit-theorem
  - linear-transformation
subject: statistics-a
in_scope: true
---

# Lecture 11: Uniform and Normal Distributions

> Part of: [[Statistics A]]
> Key concepts: [[Continuous Uniform Distribution]], [[Normal Distribution]], [[Standard Normal Distribution]], [[Standardization]], [[Z Table]], [[Central Limit Theorem]]

Instructor: Asael Sklar. Formula sheet: Handout 11 (merged below). Z values are looked up in the course reference table `Standard-Normal-Ztable.pdf`, the "Standard Normal Probabilities" table (cited as the **Z table** throughout). The deck's first part repeats [[Lec_10-Continuous Random Variables and the Uniform Distribution]]; the new material is the **normal distribution**, its linear transformations, **standardization**, and using the Z table.

The plan for the class: a quick review of continuous random variables, the continuous uniform distribution, then the normal distribution.

## 1. Recap of Lecture 10 (continuous random variables)

Details are in [[Lec_10-Continuous Random Variables and the Uniform Distribution]]. In one place:

| Object | Notation | What its value means | Useful for |
|---|---|---|---|
| [[Probability Density Function]] | $f(X)$ | probability **density** (not probability!) | shape, expected value, variance |
| [[Cumulative Distribution Function]] | $F(X)$ | cumulative probability $P(X \le t)$ | finding probabilities |

$$
E(X) = \int_{-\infty}^{\infty} X \cdot f(X)\,dx
$$

$$
Var(X) = E\big((X-E(X))^2\big) = \int_{-\infty}^{\infty} (X-E(X))^2 \cdot f(X)\,dx = \left(\int_{-\infty}^{\infty} X^2 \cdot f(X)\,dx\right) - \big(E(X)\big)^2
$$

## 2. Continuous uniform distribution (short recap and worked example)

$X$ is **uniform** between $a$ and $b$ if its density is constant on $a \le X \le b$ and 0 outside. The constant $c$ must make the rectangle's area equal 1, so $c \cdot (b-a) = 1$ and $c = \frac{1}{b-a}$. We write $X \sim U(a,b)$.

$$
f(X) = \begin{cases} \dfrac{1}{b-a} & a \le X \le b \\ 0 & \text{otherwise} \end{cases}
\qquad
F(X) = \begin{cases} 0 & X < a \\ \dfrac{X-a}{b-a} & a \le X \le b \\ 1 & b < X \end{cases}
$$

The CDF in the middle range is the rectangle area so far: height $\frac{1}{b-a}$ times width $(X-a)$.

**Median.** Set $F(Md) = 0.5$, i.e. $0.5 = \frac{Md-a}{b-a}$. Then $Md = a + 0.5(b-a) = \frac{a+b}{2}$.

**Expected value, lecture's proof.** Split the integral into three ranges; the two outer pieces are zero because $f=0$ there:

$$
E(X) = \int_a^b X \cdot \frac{1}{b-a}\,dx = \frac{1}{b-a} \cdot \left.\frac{X^2}{2}\right|_a^b = \frac{b^2-a^2}{2(b-a)} = \frac{(b+a)(b-a)}{2(b-a)} = \frac{a+b}{2}
$$

The step uses $b^2 - a^2 = (b+a)(b-a)$.

$$
Var(X) = \frac{(b-a)^2}{12}
$$

The slide reminds us that the **discrete** uniform has $Var(X) = \frac{(b-a+1)^2 - 1}{12}$ (see [[Lec_07-Known Distributions]]).

> [!example] Example
> $X$ is a randomly chosen number between 0 and 10 (non-integers allowed)
>
> - Continuous, so $X \sim U(0,10)$.
> - PDF: $f(X) = \frac{1}{10-0} = \frac{1}{10}$ for $0 \le X \le 10$, else 0.
> - CDF: $F(X) = 0$ for $X<0$; $\frac{X-0}{10-0} = \frac{X}{10}$ for $0 \le X \le 10$; $1$ for $X>10$.
> - $E(X) = \frac{0+10}{2} = 5$.
> - $Var(X) = \frac{(10-0)^2}{12} = \frac{100}{12} \approx 8.33$.

## 3. The normal distribution

### The formula

The density of a **normal distribution** with parameters $\mu$ and $\sigma^2$ is

$$
f(X) = \frac{1}{\sqrt{2\pi\sigma^2}} \cdot e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \qquad X \sim N(\mu, \sigma^2)
$$

It is the famous **bell curve**. Its two parameters have direct meanings, the same ones as for every other distribution:

$$
E(X) = \mu, \qquad Var(X) = \sigma^2
$$

The slides verify both by integrating $\int X f(X)\,dx$ and $\int (X-\mu)^2 f(X)\,dx$ with the normal $f$ and showing they give $\mu$ and $\sigma^2$; the integrals are quoted, not worked by hand.

> [!warning] Notation: the second parameter is the variance
> $N(\mu, \sigma^2)$ takes the **variance**. $X \sim N(50, 5^2)$ has standard deviation 5. The slide that introduces Example 3 writes $N(3,5)$ with no square, but the next slide writes $N(3, 5^2)$ and every worked value ($Z = 0.8$, $\Phi = 0.7881$) only fits $\sigma = 5$ (variance 25). I read it as a typesetting slip and use $N(3,5^2)$; always check which one is meant.

### Where the normal comes from (history and why it is everywhere)

- **Abraham de Moivre (1667 to 1754)**: a gambling consultant who found the normal curve as an approximation to the binomial.
- **Carl Friedrich Gauss (1777 to 1855)**: a young maths genius. After the 1801 search for the dwarf planet Ceres, he asked what the distribution of errors in astronomers' observations of a body's location looks like, and found the same formula. This is why it is also called the *Gaussian* distribution.
- **Pierre-Simon Laplace (1749 to 1827)**: asked about the distribution shape of the mean (or sum) of many random variables. The answer is the [[Central Limit Theorem]].

> [!tip] Why is the normal so common?
> **The sum of many independent random variables is distributed (approximately) normally.** Two examples from the slides: a **binomial** variable is a sum of Bernoulli variables, and a **random error** is the result of many different small influences. Most real quantities are the sum of many influences: height, intelligence, kindness, success. So histograms of such things look bell-shaped.

The slides show real histograms of male and female height from a sample of people. Both are bell-shaped, centred in the middle bins, with thin tails.

![[Lec11_data_male_height.png]]

![[Lec11_data_female_height.png]]

*Real data from the slides (lecturer's classroom sample): "This is the distribution we normally get!"*

### Reading the bell: $\mu$ and $\sigma$

- The curve is **symmetrical around $\mu$**, so $Md = \mu$ and $P(X \le \mu) = 0.5$. Equal distances either side of $\mu$ (at $\mu - a$ and $\mu + a$) have equal density, and equal tail areas $p$.
- $\mu$ sets **where** the bell sits; $\sigma$ sets **how wide** it is. A bigger $\sigma^2$ gives a wider, flatter bell.

![[Lec11_normal_mu_sigma.png]]

Quick questions asked in class: the distribution centred on 0 has $E(X)=0$; a bell centred at 5 has $E(X)=5$; of two bells, the **wider one has the larger variance**; two bells with the same centre have the **same expected value** even when their widths differ.

### Areas under every normal curve (the 68-95-99.7 rule)

For **all** normal distributions, the area within $k$ standard deviations of $\mu$ is the same:

| Range | Exact area (slides) | Handout 11 (rounded) |
|---|---|---|
| $\mu - \sigma \le X \le \mu + \sigma$ | $0.6827$ | $\approx 0.68$ |
| $\mu - 2\sigma \le X \le \mu + 2\sigma$ | $0.9545$ | $\approx 0.95$ |
| $\mu - 3\sigma \le X \le \mu + 3\sigma$ | $0.9973$ | $\approx 0.999$ (about 99.9%) |

![[Lec11_empirical_rule.png]]

> [!example] Test scores
> On a large standardized test, scores are normal with expected value 76 and standard deviation 3. $X$ is a random test taker's score, so $X \sim N(76, 3^2)$.
>
> **What is $P(X > 82)$?**
> 1. $82 - 76 = 6 = 2 \cdot 3 = 2\sigma$, so 82 is exactly $\mu + 2\sigma$.
> 2. The area between $\mu - 2\sigma$ and $\mu + 2\sigma$ is $0.9545$, so the two tails together hold $1 - 0.9545$.
> 3. By symmetry each tail holds half of that:
>
> $$
> P(X > 82) = \frac{1 - 0.9545}{2} = 0.02275
> $$

![[Lec11_test_score_tail.png]]

This trick only works when the cutoff is a whole number of standard deviations from $\mu$. For any other value we need the CDF.

## 4. The CDF problem and the workaround

The CDF of the normal is $F(X) = \int \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}\,dx$, and this integral has **no closed-form solution**. So how do we find probabilities? The class builds a workaround in three steps: show that a linear transformation of a normal is normal, define one special normal whose CDF is tabulated, then convert any normal to it.

### Linear transformation of a normal

A linear transformation of a normal distribution is also a normal distribution. If $X \sim N(\mu, \sigma^2)$ and $Y = b \cdot X + a$, then

$$
Y \sim N\big(b\mu + a,\; b^2\sigma^2\big)
$$

The parameters follow the usual rules for linear transformations of any variable: $E(Y) = b\,E(X) + a = b\mu + a$ and $Var(Y) = b^2\,Var(X) = b^2\sigma^2$. What is special is that the **shape stays normal**.

Because the transformation just relabels the axis, a probability is preserved: for any value $t$,

$$
P(X \le t) = P(Y \le b \cdot t + a)
$$

The point $t$ on the $X$ axis lands on $bt + a$ on the $Y$ axis, and the area to its left is unchanged. So **if we know the CDF of one normal distribution, we can find probabilities for any normal by linearly transforming.**

### The standard normal distribution, $Z$

The normal with $E(X)=0$ and standard deviation 1 is the **standard normal** distribution, also called the **Z distribution**:

$$
Z \sim N(0,1)
$$

Its CDF gets its own symbol, $\Phi$:

$$
\Phi(t) = P(Z \le t)
$$

Because $Z$ is a single fixed distribution, $\Phi$ has been calculated once and for all and written in a table.

### Standardization

**Standardization** is the linear transformation of any distribution into one with $E=0$ and $Var=1$: subtract the expected value and divide by the standard deviation.

$$
Z = \frac{X - \mu}{\sigma}
$$

Standardizing any normal variable gives the standard normal $Z$. (This is the transformation above with $b = \frac{1}{\sigma}$ and $a = -\frac{\mu}{\sigma}$, which sends the mean to 0 and the variance to $\frac{\sigma^2}{\sigma^2}=1$.)

> [!note] Reconstructed from the slides
> The slides state the result of standardization; the choice of $b$ and $a$ above is my own link back to the linear transformation rule.

### The Z table

The Z table gives $\Phi(Z) = P(Z \le z)$, the area under the standard normal curve **to the left of $z$**. How to read it:

- **Row**: the integer part and first decimal of $z$.
- **Column**: the second decimal of $z$.

> [!example] Reading the table
> $\Phi(-2.85)$: row $-2.8$, column $.05$, giving $\Phi(-2.85) = 0.0022$.

### The workaround (the recipe)

To find $P(X < t)$ for $X \sim N(\mu, \sigma^2)$:

1. **Standardize** $t$.
2. Find $\Phi(Z)$ in the Z table.

$$
P(X < t) = P\left(Z < \frac{t - \mu}{\sigma}\right) = \Phi\left(\frac{t-\mu}{\sigma}\right)
$$

Because the normal is continuous, $P(X<t)$ and $P(X \le t)$ are the same.

### Rules for the Z table (Handout 11)

| Rule | Meaning |
|---|---|
| $P(Z > t) = 1 - \Phi(t)$ | the table gives left areas, so right tails use the complement |
| $P(s < Z < t) = \Phi(t) - \Phi(s)$ | area between two points |
| $\Phi(-t) = 1 - \Phi(t)$ | symmetry: the table is often printed for one side only |
| $Z_a$ is the Z value with $\Phi(Z) = a$ | notation for the $a$-quantile |
| $Z_a = -Z_{1-a}$ | symmetry of quantiles, e.g. the 5% and 95% points mirror each other |

## 5. Worked examples

> [!example] Example 1: a left-tail probability
> $X \sim N(50, 5^2)$. Find $P(X \le 42)$.
>
> $$
> Z(42) = \frac{42 - E(X)}{SD(X)} = \frac{42 - 50}{5} = -\frac{8}{5} = -1.6
> $$
>
> Table: row $-1.6$, column $.00$:
>
> $$
> P(X \le 42) = \Phi(-1.6) = 0.0548
> $$

![[Lec11_standardization.png]]

*The same area, before and after standardizing: the shape is unchanged, only the axis is relabelled.*

> [!example] Example 2: a right-tail probability
> $X \sim N(10, 2^2)$. Find $P(X > 11)$.
>
> The table gives left areas, so use the complement:
>
> $$
> P(X > 11) = 1 - P(X \le 11) = 1 - \Phi(Z(11))
> $$
>
> $$
> Z(11) = \frac{11 - 10}{2} = \frac{1}{2} = 0.5
> $$
>
> $$
> P(X > 11) = 1 - \Phi(0.5) = 1 - 0.6915 = 0.3085
> $$

> [!example] Example 3
> $P(X<7)$
>
> $X \sim N(3, 5^2)$. Find $P(X < 7)$.
>
> $$
> Z(7) = \frac{7 - \mu}{\sigma} = \frac{7 - 3}{5} = \frac{4}{5} = 0.8, \qquad P(X<7) = \Phi(0.8) = 0.7881
> $$

> [!example] Example 4: working backwards from a probability (admission cutoff)
> An elite program has 2,000 applicants but only 80 places. It uses a standardized test with $score \sim N(527, 88^2)$ to decide. What cutoff score should it use?
>
> 1. Acceptance rate: $\frac{80}{2000} = 0.04$, so we need $P(score > cutoff) = 0.04$.
> 2. The table gives left areas: $P(score < cutoff) = 1 - 0.04 = 0.96$.
> 3. Look **inside** the table for the area closest to $0.96$ and read off the Z value: $Z(cutoff) = 1.75$ (the table entry for $1.75$ is $0.9599$).
> 4. Un-standardize by solving $Z = \frac{cutoff - \mu}{\sigma}$:
>
> $$
> \frac{cutoff - 527}{88} = 1.75 \;\Rightarrow\; cutoff - 527 = 88 \cdot 1.75 = 154 \;\Rightarrow\; cutoff = 154 + 527 = 681
> $$
>
> Applicants scoring above **681** are admitted.

![[Lec11_cutoff_example.png]]

> [!tip] Two directions, one recipe
> - **Value to probability**: standardize $t$, then read $\Phi$ (Examples 1 to 3).
> - **Probability to value**: read $Z$ from inside the table, then un-standardize with $X = \mu + \sigma Z$ (Example 4).

## 6. Summary (the lecture's two summary slides)

**Uniform, $X \sim U(a,b)$:**

$$
f(X) = \frac{1}{b-a} \;(a \le X \le b), \quad F(X) = \frac{X-a}{b-a}, \quad E(X) = Md = \frac{a+b}{2}, \quad Var(X) = \frac{(b-a)^2}{12}
$$

**Normal, $X \sim N(\mu, \sigma^2)$:**

$$
f(X) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad E(X) = \mu, \quad Var(X) = \sigma^2, \quad Z = \frac{t-\mu}{\sigma}
$$

$$
P(X<t) = P\left(Z < \frac{t-\mu}{\sigma}\right) = \Phi(Z)
$$

Homework flagged at the end of the deck: **Exercises 10 and 11** (due the following Tuesday). The final slide, "Normal distribution in the gym", is a picture only; it carries no extra content.

## Related notes

- [[Statistics A]]
- [[Lec_10-Continuous Random Variables and the Uniform Distribution]]
- [[Lec_07-Known Distributions]]
- [[Lec_06-Expected Value, Variance and Known Distributions]]
- [[Lec_05-Random Variables, Expected Value and Variance]]
