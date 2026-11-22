---
title: "Lecture 6: Expected Value, Variance and Known Distributions"
semester: 1
year: 1
course: "Statistics A"
lecture: 6
tags:
  - statistics-a
  - random-variable
  - expected-value
  - variance
  - standard-deviation
  - linear-transformation
  - uniform-distribution
  - bernoulli-distribution
  - binomial-distribution
subject: statistics-a
in_scope: true
---

# Lecture 6: Expected Value, Variance and Known Distributions

> Part of: [[Statistics A]]
> Key concepts: [[Random Variable]], [[Distribution]], [[Expected Value]], [[Linear Transformation]], [[Variance]], [[Standard Deviation]], [[Uniform Distribution]], [[Bernoulli Distribution]], [[Binomial Distribution]]

Instructor: Asael Sklar. This lecture takes a random variable from "what values can it take?" to two summary numbers (centre and spread), then introduces three **named distributions** whose formulas let you skip the table-building. The counting tools it leans on are in [[Lec_04-Symmetrical Probability Spaces and Combinatorics]].

> [!note] Source
> Class 06 deck (slides 1 to 527, animation builds collapsed) plus Handout 6, whose formulas are merged below. Text and equations were read from the slide XML. Four picture-only slides (1, 252, 370, 527) could not be viewed and are skipped. Algebra the slides only sketch is marked as reconstructed.

---

## 1. Recap: random variables and distributions

A **[[Random Variable]]** is a variable whose value is determined by the result of a random experiment. Slide examples: how many coffees are sold in the cafeteria before class; how many red balls you pull from a bag of red and yellow balls; how many medals Israel wins at the Los Angeles 2028 Olympics.

A random variable is described by its **[[Distribution]]**, which specifies two things:

1. all the possible values of the variable;
2. the probability of each possible value.

The notation is $P(X = x_i)$ for the probability that $X$ takes the value $x_i$. A distribution is a whole table; the rest of the lecture asks which **one or two numbers** summarise it best.

---

## 2. Expected value

> [!info] Definition
> The **[[Expected Value]]** is the value you should expect to get from a random variable: each possible value weighted by its probability.

$$
E(X) = \sum_{i=1}^{n} x_i \cdot P(X = x_i)
$$

The slides write it as $EV$ or $E(X)$; use $E(X)$.

> [!example] Expected age in the class
> The class ages and their probabilities (21 students) are:
>
> | $x_i$ | 18 | 19 | 20 | 21 | 22 | 23 | 24 |
> |---|---|---|---|---|---|---|---|
> | $P(X=x_i)$ | 1/21 | 4/21 | 4/21 | 6/21 | 2/21 | 2/21 | 2/21 |
> | $x_i \cdot P(X=x_i)$ | 18/21 | 76/21 | 80/21 | 126/21 | 44/21 | 46/21 | 48/21 |
>
> $$
> E(X) = \frac{18+76+80+126+44+46+48}{21} = \frac{438}{21} \approx 20.86
> $$
>
> If you pick a student at random, you should expect them to be about 20.86 years old. Note that 20.86 is not itself a possible age: the expected value need not be a value the variable can take.

### Balance point intuition

> [!tip] Expected value is the balance point of the distribution
> Picture the distribution as weights on a board. The **place** of each weight is the value $x_i$; the **size** of each weight is its probability. $E(X)$ is where you put the pivot so the board balances.

The slide's salary simulation: a company has 20 employees on 5 pay levels.

| Salary | 1000 | 2000 | 3000 | 4000 | 5000 |
|---|---|---|---|---|---|
| Employees | 2 | 2 | 12 | 2 | 2 |
| $P(X=x_i)$ | 0.1 | 0.1 | 0.6 | 0.1 | 0.1 |

$X$ is the salary of a randomly chosen employee. The distribution is symmetric around 3000, so $E(X) = 3{,}000$, the balance point.

![[Lec06_balance_point.png]]

### Rules for expected value

A **[[Linear Transformation]]** applies a linear function to a random variable: multiply by a constant and/or add a constant, $Y = a + b \cdot X$. (More generally, "transforming" a variable means doing some operation to each of its possible values.)

| Rule | Formula | In words |
|---|---|---|
| Constant | $E(c) = c$ | A constant's expectation is itself. |
| Add a constant | $E(X + c) = E(X) + c$ | Shifting every value shifts the centre. |
| Multiply by a constant | $E(X \cdot c) = c \cdot E(X)$ | Scaling every value scales the centre. |
| Linear transformation | $E(a + b \cdot X) = a + b \cdot E(X)$ | The two rules combined. |
| Sum of variables | $E(X + Y + Z) = E(X) + E(Y) + E(Z)$ | Expectation of a sum is the sum of expectations. |

> [!warning] Common mistake
> The sum rule for expected value needs **no** independence. The sum rule for variance (section 3) **does**.

---

## 3. Worked example: Exercise 5, question 5 (Monopoly dice)

A Monopoly player throws two fair 6-sided dice and moves a number of steps equal to the sum. Find $E(X)$, $Var(X)$ and $SD(X)$ for the number of steps $X$.

**Sample space and probabilities.** The slides draw a 6 by 6 table of outcomes (Die 1 by Die 2). The space is symmetric with 36 equally likely cells, each with probability $1/36$ (see [[Lec_04-Symmetrical Probability Spaces and Combinatorics]]). Counting how many cells give each sum:

| $x_i$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $P(X=x_i)$ | 1/36 | 2/36 | 3/36 | 4/36 | 5/36 | 6/36 | 5/36 | 4/36 | 3/36 | 2/36 | 1/36 |

![[Lec06_dice_sum_distribution.png]]

**Expected value.**

$$
E(X) = 2\cdot\frac{1}{36} + 3\cdot\frac{2}{36} + \dots + 12\cdot\frac{1}{36} = 7
$$

**Variance** (using the working formula from section 5):

$$
E(X^2) = 2^2\cdot\frac{1}{36} + 3^2\cdot\frac{2}{36} + \dots + 12^2\cdot\frac{1}{36} = 54.8333
$$

$$
Var(X) = E(X^2) - \big(E(X)\big)^2 = 54.8333 - 7^2 = 5.8333
$$

**Standard deviation:**

$$
SD(X) = \sqrt{5.8333} = 2.415
$$

> [!note] Reconstructed from the slides
> The exact fractions are $E(X^2) = 329/6$ and $Var(X) = 35/6$; the slides show only the decimals. The slides also have the 6 by 6 table appear cell by cell and ask "what is the probability of each cell?" before the table of sums.

---

## 4. Why we need a second number: deviations

> [!tip] First attempt: the expected deviation
> "What is the expected deviation from the expected value?" Define $D = X - E(X)$. Then

$$
E(D) = E\big(X - E(X)\big) = \sum_{i=1}^{n} \big(x_i - E(X)\big) \cdot P(X = x_i) = 0
$$

> [!example] Three coin flips
> Josey flips three fair coins; $X$ is the number of heads.
>
> | $x_i$ | 0 | 1 | 2 | 3 |
> |---|---|---|---|---|
> | $P(X=x_i)$ | 0.125 | 0.375 | 0.375 | 0.125 |
> | $x_i - E(X)$ | -1.5 | -0.5 | 0.5 | 1.5 |
>
> $E(X) = 1.5$ and
> $E(D) = -1.5(0.125) + (-0.5)(0.375) + 0.5(0.375) + 1.5(0.125) = 0$.

The positive and negative deviations cancel exactly, because $E(X)$ is the balance point. So the plain expected deviation is always $0$ and tells us nothing about spread. The fix is to **square** the deviations before averaging.

---

## 5. Variance and standard deviation

> [!info] Definition
> The **[[Variance]]** is the expected squared deviation from the expected value.

$$
Var(X) = E\Big(\big(X - E(X)\big)^2\Big) = \sum_{i=1}^{n} \big(x_i - E(X)\big)^2 \cdot P(X = x_i)
$$

Metaphorically, variance is the **balance point of the distribution of squared differences** from $E(X)$.

> [!example] Three coin flips, by the definition
> Squared deviations $d_i^2 = (x_i - 1.5)^2$ are $2.25,\ 0.25,\ 0.25,\ 2.25$. Weighting by the probabilities gives $0.28125 + 0.09375 + 0.09375 + 0.28125$, so
> $Var(X) = 0.75$. (The slide shows the weighted terms rounded: 0.25 and 0.75 as partial sums.)

### Working formula

The definition is long to compute. The shortcut:

$$
\boxed{Var(X) = E(X^2) - \big(E(X)\big)^2}
$$

Here $E(X^2) = \sum x_i^2 \cdot P(X = x_i)$: square the values first, then take the expected value. Do not confuse it with $\big(E(X)\big)^2$.

> [!warning] Common mistake
> $E(X^2) \neq \big(E(X)\big)^2$. Their difference is exactly the variance, which is why it is never negative.

> [!example] Ben's bet
> Ben flips a coin. Heads, he pays 100 shekels; tails, he pays nothing. $X \in \{0, 100\}$ each with probability $0.5$.
>
> - $E(X) = 0 \cdot 0.5 + 100 \cdot 0.5 = 50$
> - $E(X^2) = 0^2 \cdot 0.5 + 100^2 \cdot 0.5 = 5{,}000$
> - $Var(X) = 5{,}000 - 50^2 = 5{,}000 - 2{,}500 = 2{,}500$
> - $SD(X) = \sqrt{2{,}500} = 50$

### Standard deviation

The variance has a **units problem**: if $X$ is in shekels, $Var(X)$ is in shekels squared. Taking the root restores the original units.

$$
SD(X) = \sqrt{Var(X)}
$$

For the salary example (variance computed from the definition: $0.1\cdot 2000^2 + 0.1\cdot 1000^2 + 0.1\cdot 1000^2 + 0.1 \cdot 2000^2 = 1{,}000{,}000$), $SD(X) = 1{,}000$.

---

## 6. Rules for variance and standard deviation

The slides derive each rule by plugging into $Var(X) = E\big((X-E(X))^2\big)$.

| Rule | Formula | Intuition |
|---|---|---|
| Constant | $Var(a) = 0$ | A constant never varies. |
| Add a constant | $Var(X + a) = Var(X)$ | Shifting the whole distribution along the axis does not change its spread. |
| Multiply by a constant | $Var(b \cdot X) = b^2 \cdot Var(X)$ | Scaling stretches deviations by $b$, so squared deviations by $b^2$. |
| Linear transformation | $Var(b \cdot X + a) = b^2 \cdot Var(X)$ | Only the multiplier matters. |
| Sum of **independent** variables | $Var(X + Y) = Var(X) + Var(Y)$ | Needs independence (see [[Independent Events]]). |
| SD of linear transformation | $SD(b \cdot X + a) = \lvert b \rvert \cdot SD(X)$ | The root of $b^2$ is $\lvert b \rvert$. |
| SD, add a constant | $SD(X + c) = SD(X)$ | Same as variance. |

> [!note] Reconstructed from the slides
> **Derivations.** Constant: $Var(c) = E(c^2) - (E(c))^2$, and $E(c) = c$, so this is $c^2 - c^2 = 0$. Add a constant: $E(X + c) = E(X) + c$, so $\big(X + c - E(X) - c\big)^2 = \big(X - E(X)\big)^2$ and the $c$ cancels. Multiply: $E\big((cX - cE(X))^2\big) = E\big(c^2 (X - E(X))^2\big) = c^2 E\big((X-E(X))^2\big) = c^2 Var(X)$, using $(a \cdot b)^2 = a^2 \cdot b^2$ and taking constants out of the expectation. SD: $\sqrt{b^2 \cdot Var(X)} = \sqrt{b^2}\sqrt{Var(X)} = \lvert b \rvert \cdot SD(X)$.

> [!warning] Why the absolute value
> $b$ can be negative, but spread cannot. $SD(-3X) = 3 \cdot SD(X)$, not $-3 \cdot SD(X)$. Also note the contrast with expected value: **adding a constant moves the centre but not the spread**.

---

## 7. Known distributions

Some random variables recur so often that they have names and ready-made formulas. If a situation matches one (or is a linear transformation of one), you skip building the table and computing $E(X)$ and $Var(X)$ from scratch. The slides open with an extra credit task (flip a coin 10 times, submit the number of heads) to motivate this: with the right distribution we can **predict** the class results before collecting them.

A distribution written as a function states its **shape**, its **parameters**, and a PMF in terms of those parameters. The notation is $X \sim \text{Shape}(\text{parameters})$: $X$ is the random variable, $\sim$ reads "is distributed", then the shape name and its parameters.

### 7.1 Uniform distribution

Three tables the slides compare: values 1 to 4 each with probability 0.25; values 1 to 6 each 0.166; values 1 to 10 each 0.1. What they share is **equal (uniform) probability**; what differs is the **range of values**. So:

$$
X \sim U(a, b)
$$

where $a$ is the minimum and $b$ the maximum (integer steps). The $U(1,4)$, $U(1,6)$ and $U(1,10)$ tables above are all instances.

$$
P(X = x_i) = \frac{1}{b - a + 1}
$$

The count of values from $a$ to $b$ is $b - a + 1$, so each gets an equal share.

> [!example] Using the PMF
> - $X \sim U(3,6)$: values 3, 4, 5, 6, so $P(X=x_i) = \frac{1}{6-3+1} = \frac{1}{4}$.
> - $X \sim U(-10, 10)$: $P(X=0) = \frac{1}{10-(-10)+1} = \frac{1}{21}$.

**Expected value** (the midpoint of the range):

$$
E(X) = \frac{a + b}{2}
$$

Check: $X \sim U(1,6)$ gives $(1+2+3+4+5+6)/6 = 21/6 = 3.5 = (1+6)/2$. For $U(11,16)$: $(16+11)/2 = 13.5$.

**Variance:**

$$
Var(X) = \frac{(b - a + 1)^2 - 1}{12}
$$

Check with $U(1,6)$ by hand: $E(X^2) = 91/6 = 15.1667$, so $Var(X) = 15.1667 - 3.5^2 = 15.1667 - 12.25 = 2.9167$. By the formula: $(6^2 - 1)/12 = 35/12 = 2.9167$. They agree.

> [!tip] Classic symmetric spaces
> The die roll is the model uniform variable, and uniform variables sit on the same ground as the [[Symmetrical Probability Space]] from earlier lectures: all outcomes equally likely.

#### Shortcut: transformations of a known distribution

> [!example] Tony's bet
> You pay 20 shekels. Tony rolls a fair 6-sided die and pays you 5 times the number shown. $Y$ is your earnings. What is $E(Y)$?
>
> - **Is $Y$ uniformly distributed?** No: $Y = 5X - 20$ takes the values $-15, -10, -5, 0, 5, 10$, with steps of 5, not 1.
> - **Is $Y$ a linear transformation of a uniform variable?** Yes. With $X$ the die roll, $X \sim U(1,6)$ and $Y = 5 \cdot X - 20$.
> - $E(X) = (6+1)/2 = 3.5$, so
>
> $$
> E(Y) = 5 \cdot E(X) - 20 = 5 \cdot 3.5 - 20 = -2.5
> $$
>
> On average you lose 2.5 shekels per play.

Knowing a variable is a linear transformation of a variable with a known distribution lets you apply the linear-transformation rules (sections 2 and 6) to the known $E(X)$ and $Var(X)$.

### 7.2 Bernoulli distribution

The simplest possible variable has just two values. A **[[Bernoulli Distribution]]** variable takes the value 1 ("success") or 0 ("failure"):

$$
X \sim \text{Bernoulli}(p), \qquad P(X=1) = p, \quad P(X=0) = 1-p
$$

where $p$ is the probability of success. Example: a basketball shot with success probability 0.8 gives $X \sim \text{Bernoulli}(0.8)$.

**Expected value:**

$$
E(X) = 0 \cdot (1-p) + 1 \cdot p = p
$$

**Variance:** expand $(0-p)^2 (1-p) + (1-p)^2 p$ (the slides expand $(a-b)^2 = a^2 + b^2 - 2ab$ here):

$$
Var(X) = p^2 (1-p) + (1-p)^2 p = p(1-p)\big[p + (1-p)\big] = p \cdot (1-p)
$$

> [!note] Reconstructed from the slides
> The slides expand the algebra term by term to reach $p - p^2 = p(1-p)$. The factorised route above is a shorter equivalent.

> [!example] Bernoulli with a payoff
> $X \sim \text{Bernoulli}(0.8)$ and $Y = 1000 \cdot X$ (you win 1000 on success).
> - $E(Y) = 1000 \cdot E(X) = 1000 \cdot 0.8 = 800$
> - $Var(X) = 0.8 \cdot 0.2 = 0.16$
> - $Var(Y) = 1000^2 \cdot 0.16 = 160{,}000$
> - $SD(Y) = \sqrt{160{,}000} = 400$

### 7.3 Binomial distribution

Take $n$ **independent** Bernoulli variables with the same success probability $p$, and add them up. The sum $X$ counts the successes.

$$
X \sim B(n, p)
$$

with $n$ the number of tries and $p$ the success probability on each try.

**Building it by hand** ($n = 3$ shots, $p = 0.8$ hit): there are 3 ways to get exactly one hit (hit-miss-miss, miss-hit-miss, miss-miss-hit), each with the same probability, so:

| $x$ | Ways | Calculation | $P(X=x)$ |
|---|---|---|---|
| 0 | 1 | $0.2^3$ | 0.008 |
| 1 | 3 | $3 \cdot 0.8 \cdot 0.2^2$ | 0.096 |
| 2 | 3 | $3 \cdot 0.8^2 \cdot 0.2$ | 0.384 |
| 3 | 1 | $0.8^3$ | 0.512 |

The "ways" are binomial coefficients (see [[Lec_04-Symmetrical Probability Spaces and Combinatorics]]), which gives the general **PMF**:

$$
P(X = k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}
$$

Check: $P(X=0) = \binom{3}{0} \cdot 0.8^0 \cdot 0.2^3 = 0.008$ and $P(X=1) = \binom{3}{1} \cdot 0.8 \cdot 0.2^2 = 0.096$.

![[Lec06_binomial_pmf.png]]

The right panel is the coin-flip extra credit: heads in 10 flips is $B(10, 0.5)$. The slide's predicted share of students per outcome (0 to 10 heads) is 0%, 1%, 4%, 12%, 21%, 25%, 21%, 12%, 4%, 1%, 0%, which matches the PMF rounded.

**Expected value** (reconstructed from the slides' sum-of-Bernoulli argument): a binomial is a sum, $X = Br_1 + Br_2 + \dots + Br_n$, and the expectation of a sum is the sum of expectations, each equal to $p$:

$$
E(X) = p + p + \dots + p = n \cdot p
$$

**Variance:** the Bernoulli variables are independent, so variances add, each $p(1-p)$:

$$
Var(X) = n \cdot p \cdot (1-p)
$$

> [!example] Shots again
> $X \sim B(3, 0.8)$: $E(X) = 3 \cdot 0.8 = 2.4$ and $Var(X) = 3 \cdot 0.8 \cdot 0.2 = 0.48$.

> [!warning] Condition for the variance formula
> The variance shortcut relies on **independence** between the tries. The expected value formula would still hold without it.

---

## 8. Comparison of the three distributions

| | Uniform $U(a,b)$ | Bernoulli$(p)$ | Binomial $B(n,p)$ |
|---|---|---|---|
| Values | $a, a+1, \dots, b$ | 0 or 1 | $0, 1, \dots, n$ |
| PMF | $\dfrac{1}{b-a+1}$ | $P(1)=p$, $P(0)=1-p$ | $\binom{n}{k}p^k(1-p)^{n-k}$ |
| $E(X)$ | $\dfrac{a+b}{2}$ | $p$ | $n \cdot p$ |
| $Var(X)$ | $\dfrac{(b-a+1)^2-1}{12}$ | $p(1-p)$ | $n \cdot p \cdot (1-p)$ |
| Typical story | One die roll | One shot or coin flip | Hits in $n$ shots |

> [!tip] What known distributions are for
> When a situation matches a known distribution (or a linear transformation of one), the formulas let you skip working out every probability and computing $E(X)$ and $Var(X)$ from the table. **The trick is recognising which distribution, if any, fits.**

---

## Summary

- A random variable is described by its distribution (values plus probabilities). $E(X) = \sum x_i P(X = x_i)$ is its balance point.
- $E(a + bX) = a + bE(X)$; $E(X+Y) = E(X) + E(Y)$ always.
- The plain expected deviation is always 0, so spread is measured by $Var(X) = E\big((X-E(X))^2\big) = E(X^2) - (E(X))^2$, and $SD(X) = \sqrt{Var(X)}$ restores the original units.
- $Var(a) = 0$, $Var(X+a) = Var(X)$, $Var(bX+a) = b^2 Var(X)$, $SD(bX+a) = |b| SD(X)$; $Var(X+Y) = Var(X) + Var(Y)$ only for independent variables.
- $U(a,b)$: $E = (a+b)/2$, $Var = ((b-a+1)^2-1)/12$. Bernoulli$(p)$: $E = p$, $Var = p(1-p)$. $B(n,p)$: $E = np$, $Var = np(1-p)$.
- Worked results to remember: two dice sum $E = 7$, $Var = 5.8333$, $SD = 2.415$; Ben's bet $Var = 2500$, $SD = 50$; Tony's bet $E = -2.5$; $B(3, 0.8)$ has $E = 2.4$, $Var = 0.48$.
- Next on the slides: Exercise 6 on Tuesday.

## Related notes

- [[Statistics A]]
- [[Lec_04-Symmetrical Probability Spaces and Combinatorics]]
- [[Random Variable]], [[Expected Value]], [[Variance]], [[Standard Deviation]], [[Linear Transformation]]
- [[Uniform Distribution]], [[Bernoulli Distribution]], [[Binomial Distribution]]
