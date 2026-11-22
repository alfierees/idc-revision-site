---
title: "Lecture 5: Random Variables, Expected Value and Variance"
semester: 1
year: 1
course: "Statistics A"
lecture: 5
tags:
  - statistics-a
  - random-variable
  - discrete-distribution
  - pmf
  - cdf
  - expected-value
  - variance
  - standard-deviation
  - combinations-with-replacement
subject: statistics-a
in_scope: true
---

# Lecture 5: Random Variables, Expected Value and Variance

> Part of: [[Statistics A]]
> Key concepts: [[Random Variable]], [[Distribution Table]], [[Probability Mass Function]], [[Cumulative Distribution Function]], [[Discrete Random Variable]], [[Expected Value]], [[Linear Transformation]], [[Variance]], [[Standard Deviation]], [[Combination with Replacement]]

Builds on [[Lec_04-Symmetrical Probability Spaces and Combinatorics]] (counting formulas) and [[Lec_03-Conditional Probability, Bayes and Independence]] (the multiplication formula). This lecture moves from events to **random variables**, which is the language for the rest of the course.

> [!note] Source
> Class 05 deck (slides 1 to 586, animation builds collapsed to the final build of each sequence) plus Handout 5. Slide equations were read from the slide XML. Numbers marked "derived" were computed from the set-up shown, not copied. The deck is Exercise 4 review first, then new material. Slide pictures could not be rendered, so the class survey table is rebuilt from the text on the slides.

---

## 1. Exercise 4 review (permutations and the race)

The lecture opens with two [[Symmetrical Probability Space]] questions solved with the counting flowchart from [[Lec_04-Symmetrical Probability Spaces and Combinatorics]]: ask "does order matter?" then "is there replacement?".

### Kindergarten queue (Q4)

9 children (5 boys, 4 girls) form a queue at random.

- Number of queues: order matters, no replacement, $k = 9$, $n = 9$:

$$
(n)_k = \frac{n!}{(n-k)!} = \frac{9!}{0!} = 9! = 362{,}880
$$

- $P(\text{4 girls first, 5 boys last}) = \dfrac{|A|}{|\Omega|}$ with $|\Omega| = 362{,}880$.
- Count $A$ with the multiplication principle: arrange the girls in the first 4 places ($4! = 24$ ways) and the boys in the last 5 ($5! = 120$ ways), so $|A| = 24 \cdot 120 = 2880$.

$$
P(A) = \frac{2880}{362{,}880} \approx 0.0079
$$

### Race with shirts (Q5)

Five runners, shirt numbers assigned at random. Find $P(\text{shirt 2 first and shirt 3 second})$. Options on the slide: $\frac{1}{120}, \frac{1}{60}, \frac{1}{40}, \frac{1}{20}$. The answer is **$\frac{1}{20}$**.

**Counting method.** $|\Omega| = 5! = 120$ finishing orders. Shirts 2 and 3 fixed in places 1 and 2 leaves 3 runners for 3 places: $3! = 6$. So $\frac{6}{120} = \frac{1}{20}$.

**Alternative (multiplication formula).**

$$
P(\text{2 first}) = \frac15, \qquad P(\text{3 second} \mid \text{2 first}) = \frac14
$$

$$
P(\text{3 second} \cap \text{2 first}) = P(\text{2 first}) \cdot P(\text{3 second} \mid \text{2 first}) = \frac15 \cdot \frac14 = \frac{1}{20}
$$

> [!tip] Two routes, one answer
> Counting and the [[Multiplication Formula]] must agree. Use one to check the other.

---

## 2. Combinations with replacement

The fourth cell of the combinatorics flowchart (order does not matter, replacement allowed) was left as "?" in Lecture 4. Now it is filled in:

$$
\binom{n+k-1}{k}
$$

| | Permutations (order matters) | Combinations (order does not matter) |
|---|---|---|
| **Replacement** | $n^k$ | $\binom{n+k-1}{k}$ |
| **No replacement** | $(n)_k = \dfrac{n!}{(n-k)!}$ | $\binom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ |

The whole table sits on top of the **multiplication principle**: total outcomes $= n_1 \cdot n_2 \cdots n_m$.

### Example: heads in three coin flips

How many different outcomes are there for the **number of heads** in three flips? Order does not matter (only the count of heads), and a coin can land the same way repeatedly, so this is combinations with replacement with $n = 2$ (H or T) and $k = 3$ flips:

$$
\binom{2+3-1}{3} = \binom{4}{3} = \frac{4!}{(4-3)!\,3!} = \frac{4!}{1!\,3!} = 4
$$

The four outcomes are: 3 heads, 2 heads and 1 tail, 1 head and 2 tails, 3 tails.

### The catch: the space is no longer symmetrical

Listing the 8 ordered outcomes (HHH, HHT, ...), each has probability $0.125$. Grouping them into the 4 combinations gives

| Combination | Ordered outcomes inside it | Probability |
|---|---|---|
| 3 heads | 1 | $0.125$ |
| 2 heads, 1 tail | 3 | $0.375$ |
| 1 head, 2 tails | 3 | $0.375$ |
| 3 tails | 1 | $0.125$ |

(The probabilities are derived by adding the $0.125$ of each ordered outcome; they match the distribution table used later in the lecture.)

> [!warning] Counting is not enough here
> Combinations with replacement give a **non-symmetrical** probability space, even though each single flip is symmetrical. Unlike permutations (with or without replacement) and combinations without replacement, **dividing by the number of outcomes does not give probabilities**. Four outcomes does not mean each has probability $\frac14$. Work at the level of ordered outcomes to get probabilities.

---

## 3. Random variables

**Definition.** A **random variable** is a variable whose value is determined by the result of a random experiment. Examples from the slides: the age of a randomly chosen student; next year's earnings; how many times the lecturer says "guys..." in a class.

Random variables are a way to describe uncertain outcomes. They **replace the event as the mathematical framework for uncertainty**.

> [!tip] Why not just use events?
> Take 21 students from the class survey and pick one at random: what is their age? You could write $A$ = "age 18", $B$ = "age 19", and so on, but that is cumbersome. An event has only two states ("happened" / "did not happen"). A random variable can take **many** possible values, so one object captures the whole question.

Notation: $X$ is the random variable, $x_i$ its possible values. The index $i$ runs sequentially even when the values themselves skip. In the class example $x_1 = 18, x_2 = 19, \dots, x_7 = 24$. If a 29 year old were present, that would be $x_8 = 29$.

---

## 4. Distributions

A random variable is fully described by its **distribution**: all its possible values plus the probability of each.

### Distribution table and PMF

A **distribution table** has the possible values $x_i$ in the first row and their probabilities $P(X = x_i)$ in the second. The probabilities must sum to 1 (a probability space axiom):

$$
\sum_{i=1}^{n} P(X = x_i) = 1
$$

The function that returns each value's probability is the **probability mass function (PMF)**, $P(X = x_i)$. A distribution table is one way of writing down a PMF.

### Running example: age of a randomly chosen student

The 21 survey ages sorted: 18; 19, 19, 19, 19; 20 x4; 21 x6; 22 x2; 23 x2; 24 x2. (Counts derived from the sorted list on the slides.)

| $x_i$ | 18 | 19 | 20 | 21 | 22 | 23 | 24 |
|---|---|---|---|---|---|---|---|
| PMF $P(X = x_i)$ | $\frac{1}{21}$ | $\frac{4}{21}$ | $\frac{4}{21}$ | $\frac{6}{21}$ | $\frac{2}{21}$ | $\frac{2}{21}$ | $\frac{2}{21}$ |
| CDF $P(X \le x_i)$ | $\frac{1}{21}$ | $\frac{5}{21}$ | $\frac{9}{21}$ | $\frac{15}{21}$ | $\frac{17}{21}$ | $\frac{19}{21}$ | $1$ |

The slide asks: sum of all the probabilities? **1.**

### Example: three fair coins

$X$ = number of heads in three fair flips.

| $x_i$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $P(X = x_i)$ | 0.125 | 0.375 | 0.375 | 0.125 |
| $P(X \le x_i)$ | 0.125 | 0.5 | 0.875 | 1 |

### Distribution graph

A **distribution graph** puts the possible values on the horizontal axis and the PMF on the vertical axis. It helps most when there are many possible values (the age example).

![[Lec05_three_coins_pmf_cdf.png]]

*Left: the PMF of the heads count. Right: its CDF, a staircase that jumps at each value and ends at 1. (Theory diagram, redrawn.)*

### Cumulative distribution function (CDF)

The **CDF** gives, for each value, the probability of getting that value **or less**:

$$
\text{CDF}(x_i) = P(X \le x_i)
$$

Build it by running-totalling the PMF. Slide question: probability that a student is less than 21 years old?

$$
P(X \le 20) = \frac{9}{21}
$$

> [!warning] Warning
> "Less than 21" means $\le 20$
>
> With whole-number ages, strictly less than 21 is the same as at most 20. Read the inequality carefully before choosing the CDF cell.

### Example: children until a daughter

A couple keeps having children until they have a daughter, but stops at 4 children at most. Each pregnancy is independent, girl or boy with probability 0.5. $X$ = number of children.

| $x$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $P(X = x)$ | 0.5 | 0.25 | 0.125 | 0.125 |
| $P(X \le x)$ | 0.5 | 0.75 | 0.875 | 1 |

Why: $P(X=1)$ = girl first = 0.5; $P(X=2)$ = boy then girl = $0.5^2$; $P(X=3) = 0.5^3$; and $X = 4$ happens whenever the first three are boys, probability $0.5^3 = 0.125$, **regardless of the fourth child** (the cap stops them). That is why 3 and 4 share the same 0.125.

![[Lec05_children_pmf_cdf.png]]

*The PMF falls with each extra child, while the CDF climbs to 1. (Theory diagram, redrawn.)*

### Discrete vs continuous

| | Discrete | Continuous |
|---|---|---|
| Values | Whole numbers, e.g. 3, 7, -4, 0 | Any real number, e.g. 0.34, -2.6, $\sqrt{12}$ |
| Formal test | In ascending order, there are neighbouring values with **no possible value between them** (1, 2, 4, 5: nothing between 4 and 5) | No such gaps |

For the next few weeks the course focuses on **discrete random variables** (Unit 2 of the semester plan: discrete distributions, expected value, variance, then uniform, binomial and so on, then joint distributions, then continuous distributions and the normal distribution).

> [!tip] Lecturer's framing
> "Math today, intuition next week." Treat this lecture's formulas as the machinery; the meaning of expected value and variance is developed in Lecture 6.

---

## 5. Expected value

The **expected value** is the single number that best summarizes what we should expect from a distribution: the sum of each possible value times its probability.

$$
E(X) = \sum_{i=1}^{n} x_i \cdot P(X = x_i)
$$

> [!info] Sigma reminder
> $\sum_{i=1}^{n} x_i = x_1 + x_2 + \dots + x_n$.

### Example: expected age in class

| $x_i$ | 18 | 19 | 20 | 21 | 22 | 23 | 24 |
|---|---|---|---|---|---|---|---|
| $x_i \cdot P(X = x_i)$ | $\frac{18}{21}$ | $\frac{76}{21}$ | $\frac{80}{21}$ | $\frac{126}{21}$ | $\frac{44}{21}$ | $\frac{46}{21}$ | $\frac{48}{21}$ |

$$
E(X) = \frac{18+76+80+126+44+46+48}{21} = \frac{438}{21} \approx 20.86
$$

If we randomly choose a student we should expect them to be 20.86 years old. (It need not be a possible value: no one is 20.86.)

### Sigma rules (needed for the expected value rules)

| Rule | Why |
|---|---|
| $\sum_{i=1}^{n} c = n \cdot c$ | $c$ added $n$ times |
| $\sum_{i=1}^{n} (x_i + c) = \sum_{i=1}^{n} x_i + n \cdot c$ | split into the $x$'s and $n$ copies of $c$ |
| $\sum_{i=1}^{n} c \cdot x_i = c \sum_{i=1}^{n} x_i$ | factor $c$ out |
| $\sum_{i=1}^{n} (x_i + y_i) = \sum_{i=1}^{n} x_i + \sum_{i=1}^{n} y_i$ | regroup terms |

### Expected value rules

**1. Constant.** $E(c) = c$. Proof: the constant takes value $c$ with probability 1, so $E(c) = c \cdot 1 = c$. Example: a light-train fare is 6.8 shekels, so expect a ride to cost 6.8.

**2. Adding a constant.** A **transformation** of a random variable applies an operation to each possible value (e.g. add 2 to a die roll: 1..6 becomes 3..8).

$$
E(X + c) = \sum (x_i + c) P(X = x_i) = E(X) + c \sum P(X = x_i) = E(X) + c \cdot 1 = E(X) + c
$$

**3. Multiplying by a constant.**

$$
E(c \cdot X) = c \cdot E(X)
$$

**4. Linear transformation.** A [[Linear Transformation]] is $Y = a + b X$ ($a$, $b$ constants, $X$ a random variable). Combining 2 and 3:

$$
\boxed{E(a + bX) = a + b \cdot E(X)}
$$

The same linear transformation applied to the values is applied to the expected value.

**5. Sum of random variables.**

$$
\boxed{E(X + Y) = E(X) + E(Y)}
$$

The slide defers the proof to Class 8 (joint distributions). It holds whether or not $X$ and $Y$ are independent (stated here as in the course, proof later).

### Worked examples

> [!example] The three-coin bet
> Josey flips three fair coins and pays you \$1 per head, if you pay her \$1. Expected gain?
> $X$ = payout (heads), $E(X) = 1.5$. $Y = X - 1$ is your earnings, so $E(Y) = 1.5 - 1 = \mathbf{0.5}$. You should expect to gain \$0.50.

> [!example] Pricing insurance
> A \$1,000,000 life policy costs \$2,500 for the year. The company estimates $P(\text{death}) = \frac{150}{100{,}000}$. Payout is 1,000,000 on death and 0 otherwise, so
> $E(\text{Payout}) = 1{,}000{,}000 \cdot \frac{150}{100{,}000} = 1{,}500$. Earnings $= 2{,}500 - \text{Payout}$, so expected earnings are $2{,}500 - 1{,}500 = \mathbf{1{,}000}$.

> [!example] The lottery
> $P(\text{win}) = \frac{1}{16{,}273{,}488}$, prize 50,000,000 shekels, ticket costs 6. Rachel buys 50 tickets a year.
> - $X$ = winnings per ticket: $E(X) = \frac{50{,}000{,}000}{16{,}273{,}488} \approx 3.07$
> - $Y = X - 6$ = earnings per ticket: $E(Y) \approx -2.93$
> - $Z = 50 \cdot Y$ = earnings from 50 tickets: $E(Z) \approx -146.5$
>
> Rachel should expect to lose about 146.5 shekels a year.

> [!example] Temperature conversion
> $^\circ F = \frac{9}{5} \cdot {}^\circ C + 32$. If $E({}^\circ C) = 26.4$ then $E({}^\circ F) = \frac95 \cdot 26.4 + 32 = \mathbf{79.52}$. This is the linear rule with $a = 32$, $b = \frac95$.

> [!example] Sum of a coin and a die
> John flips a fair coin and writes 1 for heads, 2 for tails ($E(X) = 1.5$). Mary rolls a fair die ($E(Y) = 3.5$). The expected sum is $E(S) = 1.5 + 3.5 = \mathbf{5}$.

> [!warning] Linearity does not extend to non-linear functions
> $E(a + bX) = a + bE(X)$ only because the transformation is linear. For $X^2$ you cannot write $E(X^2) = (E(X))^2$. The next section shows the two differ, and the difference **is** the variance.

---

## 6. Variance and standard deviation

### Why a second number?

The expected value gives the **central tendency** (where the distribution is centred). A second number should give the **spread** around it. Options discussed:

| Candidate | Verdict |
|---|---|
| Range (max minus min) | Ignores the spread of the values in between |
| Expected deviation $E(x_i - E(X))$ | Intuitive, but always equals **0** (positives and negatives cancel). More next week |
| Expected **squared** deviation $E\big((x_i - E(X))^2\big)$ | Cancellation removed: this is the variance |

### Definition

$$
\text{Var}(X) = E\big((x_i - E(X))^2\big) = \sum_{i=1}^{n} \big(x_i - E(X)\big)^2 \cdot P(X = x_i)
$$

The larger the variance, the more spread out the distribution.

### Example: three coins (definition method)

$E(X) = 1.5$. Squared deviations $(x_i - 1.5)^2$: 2.25, 0.25, 0.25, 2.25 with probabilities 0.125, 0.375, 0.375, 0.125.

$$
\text{Var}(X) = 2.25(0.125) + 0.25(0.375) + 0.25(0.375) + 2.25(0.125) = 0.75
$$

### Working formula

The definition gets long. The shortcut:

$$
\boxed{\text{Var}(X) = E(X^2) - \big(E(X)\big)^2}
$$

**Proof** (using the expected value rules above, with $E(X)$ a constant):

$$
\text{Var}(X) = E\big((X - E(X))^2\big) = E\big(X^2 + (E(X))^2 - 2X\,E(X)\big)
$$

$$
= E(X^2) + (E(X))^2 - 2\,E(X)\,E(X) = E(X^2) - (E(X))^2
$$

The steps use $E(a + bX)$ pulling out the constants $E(X)$ and $(E(X))^2$, and the sum rule.

**Same example, shortcut.** Square each value, $x_i^2 = 0, 1, 4, 9$:

$$
E(X^2) = 0(0.125) + 1(0.375) + 4(0.375) + 9(0.125) = 3
$$

$$
\text{Var}(X) = 3 - 1.5^2 = 3 - 2.25 = 0.75
$$

Same answer as the definition. Note the gap between $E(X^2) = 3$ and $(E(X))^2 = 2.25$.

> [!tip] Exam habit
> Compute $E(X)$, then $E(X^2)$ from a row of $x_i^2$ values, then subtract. Do not square $E(X)$ by mistake in place of $E(X^2)$.

### Standard deviation

The variance has a **units problem**: it is an expected squared deviation, so it is in units of $X^2$ (years squared, shekels squared). The **standard deviation** fixes this:

$$
SD(X) = \sqrt{\text{Var}(X)}
$$

It is in the same units as $X$ and roughly tells you what deviation from the expected value to expect.

Three coins: $SD(X) = \sqrt{0.75} \approx 0.87$ heads.

| | Variance | Standard deviation |
|---|---|---|
| Formula | $E\big((X-E(X))^2\big)$ or $E(X^2)-(E(X))^2$ | $\sqrt{\text{Var}(X)}$ |
| Units | $X^2$ | same as $X$ |
| Use | easier algebra | easier to interpret |

---

## Summary

- A [[Random Variable]] assigns a number to each outcome of a random experiment; its **distribution** lists values and probabilities (PMF), and probabilities sum to 1.
- The [[Cumulative Distribution Function]] is the running total of the PMF: $P(X \le x_i)$.
- [[Combination with Replacement]] has $\binom{n+k-1}{k}$ outcomes but they are **not equally likely**, so counting them does not give probabilities.
- $E(X) = \sum x_i P(X = x_i)$. Rules: $E(c) = c$; $E(a + bX) = a + bE(X)$; $E(X + Y) = E(X) + E(Y)$.
- $\text{Var}(X) = E\big((X-E(X))^2\big) = E(X^2) - (E(X))^2$; $SD(X) = \sqrt{\text{Var}(X)}$.
- Next week: intuition for expected value and variance, then known distributions. Exercise 5 follows this class.

## Related notes

- [[Statistics A]] (hub)
- [[Lec_04-Symmetrical Probability Spaces and Combinatorics]] (counting formulas, symmetrical spaces)
- [[Lec_03-Conditional Probability, Bayes and Independence]] (multiplication formula used in the race example)
- [[Lec_01-Sets and the Probability Function]] (probabilities sum to 1)
