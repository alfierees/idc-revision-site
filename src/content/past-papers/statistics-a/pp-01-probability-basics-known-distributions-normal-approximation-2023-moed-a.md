---
title: "Probability Basics, Known Distributions & Normal Approximation (2023 Moed A)"
type: past-paper
status: worked-solution
exam: "Statistics A Final Exam, Moed A 2023 (20 multiple-choice questions)"
semester: 1
year: 1
course: "Statistics A"
instructor: Asael Sklar
tags:
  - statistics-a
  - past-paper
  - worked-solution
  - multiple-choice
  - probability
  - conditional-probability
  - known-distributions
  - covariance
  - continuous-random-variable
  - normal-distribution
  - central-limit-theorem
aliases:
  - Statistics A Moed A 2023
  - Stats A Moed A 2023
  - PP01 Statistics A
subject: statistics-a
in_scope: true
---

# Probability Basics, Known Distributions & Normal Approximation (2023 Moed A)

> Part of: [[Statistics A]]
> **Statistics A Final Exam, Moed A 2023**, Statistics A, Asael Sklar. 20 multiple-choice questions, one letter each. The paper ends with a letter-only answer key.
> Builds on: [[Lec_01-Sets and the Probability Function]], [[Lec_02-Probability Function and Conditional Probability]], [[Lec_03-Conditional Probability, Bayes and Independence]], [[Lec_04-Symmetrical Probability Spaces and Combinatorics]], [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_07-Known Distributions]], [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]], [[Lec_10-Continuous Random Variables and the Uniform Distribution]], [[Lec_11-Uniform and Normal Distributions]], [[Lec_12-Central Limit Theorem and Normal Approximations]]
> Practice: [[PS_01-Basics of Probability and Venn Diagrams]], [[PS_02-Probability and Conditional Probability]], [[PS_03-Conditional Probability, Drug Dog, Bayes & Independence]], [[PS_04-Combinatorics]], [[PS_05-Random Variables, Sums, Maxima and Minima]], [[PS_06-Binomial Sampling, Gambles and Linear Transformations]], [[PS_07-Geometric, Hypergeometric and Poisson Distributions]], [[PS_08-Joint Distributions, Stopping Rules and Covariance]], [[PS_10-Continuous Random Variables and Density Functions]]

> [!info] Source and answer provenance
> The official answer key is **letters only, with no working**. Every letter below is the official one. The working and the "why the other options are wrong" explanations are **written for revision, not copied**, and each was checked to reach the keyed letter. The formula sheet used in the course is `Formula sheet 2024-2025`; formulas below are on it unless stated.

> [!warning] Questions with a caveat
> - **Q6**: the paper states that **all answers were accepted** because the question lacked psychometric validity. The keyed letter is B; the working there is **AI-written**.
> - **Q12**: relies on **Markov's inequality**, which is not in the lecture notes or on the formula sheet (the paper itself says it is not part of the 2024 material). The explanation is **AI-written** from outside the course material.
> - **Q5** was modified from the question used in the live 2023 exam (an error was found), so the printed version is the corrected one.
>
> Every question's working is written by me because the key has no working, but only Q6 and Q12 deserve extra scepticism.

## What this paper tests

| Questions | Core idea | Where it is taught |
|---|---|---|
| Q1, Q2 | [[Complement Rule]], [[Disjoint Sets]], [[Conditional Probability]] | [[Lec_01-Sets and the Probability Function]], [[Lec_02-Probability Function and Conditional Probability]] |
| Q3, Q4, Q5 | [[Bayes' Theorem]], [[Law of Total Probability]], [[Independent Events]] | [[Lec_03-Conditional Probability, Bayes and Independence]] |
| Q6 | Counting with [[Combination]] in a [[Symmetrical Probability Space]] | [[Lec_04-Symmetrical Probability Spaces and Combinatorics]] |
| Q7, Q8 | [[Expected Value]] and [[Variance]], [[Linear Transformation]] | [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]] |
| Q9, Q10, Q11 | [[Geometric Distribution]], [[Binomial Distribution]], [[Hypergeometric Distribution]] | [[Lec_07-Known Distributions]] |
| Q12 | A tail bound from the mean (Markov, outside the course) | not taught |
| Q13, Q14, Q15 | [[Joint Distribution Table]], [[Conditional Distribution]], [[Covariance]], [[Correlation Coefficient]] | [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]] |
| Q16, Q17 | [[Probability Density Function]], [[Continuous Uniform Distribution]], [[Percentile]] | [[Lec_10-Continuous Random Variables and the Uniform Distribution]] |
| Q18 | [[Normal Distribution]], [[Standardization]], [[Z Table]] | [[Lec_11-Uniform and Normal Distributions]] |
| Q19, Q20 | [[Central Limit Theorem]], [[Normal Approximation of the Binomial]] | [[Lec_12-Central Limit Theorem and Normal Approximations]] |

> [!tip] Intuition
> Roughly: Q1 to Q6 are pure probability (counting and conditioning), Q7 to Q12 are random variables and known distributions, Q13 to Q15 are two variables together, Q16 to Q20 are continuous variables and the CLT. Q18 to Q20 each need a normal table lookup, so budget time for them.

---

## Q1 — Complement of a union of disjoint events

**A and B are disjoint events in the sample space Ω. Given that $P(A) = 0.3$ and $P(B) = 0.2$, what is $P(\bar A \cap \bar B)$?**

a. 0  b. 0.3  c. 0.5  d. 0.6

> [!success] Official answer: C (0.5)

By De Morgan, $\bar A \cap \bar B$ is the complement of $A \cup B$. Because A and B are disjoint, $P(A \cap B) = 0$, so

$$
P(A \cup B) = P(A) + P(B) = 0.3 + 0.2 = 0.5
$$

$$
P(\bar A \cap \bar B) = 1 - P(A \cup B) = 1 - 0.5 = 0.5
$$

> [!warning] Why the wrong options are wrong
> - **a (0)**: would mean A and B cover the whole sample space. They only cover 50%.
> - **b (0.3)**: this is just $P(A)$, nothing in the question picks it out.
> - **d (0.6)**: no clean slip produces it; $P(A) + P(B) = 0.5$, so a value above 0.5 is a sign you misapplied the complement (for example $1 - 0.4$).

---

## Q2 — Conditional probability and the complement

**A and B are events in the same sample space. Given $P(A|B) = 0.6$ and $P(B) = 0.6$, what is $P(\bar A \cap B)$?**

a. 0.12  b. 0.24  c. 0.36  d. 0.48

> [!success] Official answer: B (0.24)

Use $P(\bar A \mid B) = 1 - P(A \mid B) = 0.4$ and the multiplication formula $P(\bar A \cap B) = P(\bar A \mid B) \cdot P(B)$:

$$
P(\bar A \cap B) = 0.4 \cdot 0.6 = 0.24
$$

> [!warning] Why the wrong options are wrong
> - **a (0.12)**: $0.2 \cdot 0.6$, from using a wrong complement.
> - **c (0.36)**: this is $P(A \cap B) = 0.6 \cdot 0.6$, the intersection with A rather than with the complement $\bar A$.
> - **d (0.48)**: $0.8 \cdot 0.6$, again a wrong complement.
>
> The trap is answering with $P(A \cap B)$ instead of $P(\bar A \cap B)$.

---

## Q3 — Reversing a conditional probability (Bayes)

**A model predicts "green" for 60% of stocks, and 50% of stocks in fact rise. Given that for stocks which rose the model said "green" in 80% of cases, what is the probability that a stock the model called "green" rises?**

a. 1/3  b. 1/2  c. 2/3  d. 3/4

> [!success] Official answer: C (2/3)

Let G = "predicted green", U = "stock rose". We know $P(G) = 0.6$, $P(U) = 0.5$, $P(G \mid U) = 0.8$. We want $P(U \mid G)$, so apply [[Bayes' Theorem]]:

$$
P(U \mid G) = \frac{P(G \mid U) \cdot P(U)}{P(G)} = \frac{0.8 \cdot 0.5}{0.6} = \frac{0.4}{0.6} = \frac{2}{3}
$$

> [!warning] Why the wrong options are wrong
> - **a (1/3)**: $1 - 2/3$, the chance a green call turns out wrong.
> - **b (1/2)**: this is the unconditional $P(U)$. Being told "green" must change the probability, because $P(G \mid U) = 0.8 \neq P(G) = 0.6$.
> - **d (3/4)**: $0.6 / 0.8$, which divides the wrong way round.

> [!tip] Intuition
> The model says "green" more often on risers (80%) than overall (60%), so a "green" call is good news and the probability of a rise goes up from 0.5 to 2/3.

---

## Q4 — Law of total probability

**75% of mice like cheese. 60% of mice who like cheese are clever. 20% of mice who do not like cheese are not clever. What is the probability a random mouse is clever?**

a. 0.2  b. 0.45  c. 0.65  d. 0.75

> [!success] Official answer: C (0.65)

Let C = likes cheese, K = clever. Given: $P(C) = 0.75$, $P(K \mid C) = 0.6$, and $P(\bar K \mid \bar C) = 0.2$, so $P(K \mid \bar C) = 1 - 0.2 = 0.8$. By the [[Law of Total Probability]]:

$$
P(K) = P(K \mid C) P(C) + P(K \mid \bar C) P(\bar C) = 0.6 \cdot 0.75 + 0.8 \cdot 0.25 = 0.45 + 0.20 = 0.65
$$

> [!warning] Why the wrong options are wrong
> - **a (0.2)**: this is $P(\bar K \mid \bar C)$, the number given in the question, which is the wrong conditional (it is about the mice that are *not* clever).
> - **b (0.45)**: only the "likes cheese and clever" branch, $P(K \cap C)$. You must add the other branch.
> - **d (0.75)**: this is $P(C)$, a different event.

---

## Q5 — Independence and a quadratic

**A gardener plants two plants independently, each a flower or a shrub. The probability of two flowers is 0.49. What is the probability of two shrubs?**

a. 0.09  b. 0.21  c. 0.3  d. 0.49

> [!success] Official answer: A (0.09)

Let p be the probability a plant is a flower. By [[Independent Events]], $P(\text{two flowers}) = p^2 = 0.49$, so $p = 0.7$. A plant is a shrub with probability $1 - 0.7 = 0.3$, so

$$
P(\text{two shrubs}) = 0.3^2 = 0.09
$$

> [!warning] Why the wrong options are wrong
> - **b (0.21)**: $0.7 \cdot 0.3$, the probability of one flower and one shrub in a *given order*.
> - **c (0.3)**: the probability of a single shrub, not two.
> - **d (0.49)**: the probability of two flowers.

> [!note] The paper says Q5 was modified from the live exam because of an error in the original question. The corrected version above is the one the key refers to.

---

## Q6 — Drawing red and blue from seven balls

**A bag has 7 balls, one of each colour of the rainbow. Barak pulls 4 without replacement. What is the probability he pulls the red and blue balls?**

a. 1/7  b. 2/7  c. 3/7  d. 4/7

> [!success] Official answer: B (2/7). **All answers were accepted** because the question lacked psychometric validity.

> [!warning] AI-written answer, not official. Check before relying on it.
> The paper gives no reason beyond "lacking psychometric validity", so this is my own best reading: "the red and blue balls" means **both** are in the 4 drawn.

All $\binom{7}{4} = 35$ draws of 4 balls are equally likely ([[Symmetrical Probability Space]]). The favourable draws contain red and blue plus 2 more balls from the other 5:

$$
P = \frac{\binom{2}{2}\binom{5}{2}}{\binom{7}{4}} = \frac{10}{35} = \frac{2}{7}
$$

Check by sequential draws: the chance red and blue are both among the 4 equals $\frac{4}{7} \cdot \frac{3}{6} = \frac{12}{42} = \frac{2}{7}$ (pick which 4 of 7 positions are drawn; the chance both specific balls land in them).

So the best answer is **B**, which agrees with the keyed letter. Since every answer was accepted, any letter scored.

> [!warning] Why the wrong options are wrong (best-answer reading)
> - **a (1/7)**: no natural counting gives it; the probability of one named ball being drawn first is $1/7$, which is a different event.
> - **c (3/7)**: no natural counting gives it either.
> - **d (4/7)**: this is the chance that *one* specific ball (say red) is among the 4, $4/7$. Both balls needs the extra factor $3/6$.

---

## Q7 — Adding employees paid exactly the mean

**Salaries have expected value 5,000 and standard deviation 2,000. The CEO hires 100 new employees, each paid 5,000. After this, the expected value will ____ and the variance will ____.**

a. Change; change  b. Change; stay the same  c. Stay the same; change  d. Stay the same; stay the same

(The paper's option list is mislabelled in places, with a stray "e." and later options typeset as f, g, h, i in Q8. The four options above are the intended ones.)

> [!success] Official answer: C (stay the same; change)

**Mean.** Let the original company have N employees. The new total pay is $5000N + 100 \cdot 5000$ over $N + 100$ people, so the average is still 5,000:

$$
E_{\text{new}} = \frac{5000N + 5000 \cdot 100}{N + 100} = 5000
$$

**Variance.** The 100 new salaries sit exactly at the mean, so they contribute **zero** squared deviation but they increase the headcount, which shrinks the average squared deviation:

$$
\text{Var}_{\text{new}} = \frac{N \cdot 2000^2 + 100 \cdot 0}{N + 100} = \frac{N}{N + 100} \cdot 4{,}000{,}000 < 4{,}000{,}000
$$

so the variance goes **down**, hence it changes.

> [!warning] Why the wrong options are wrong
> - **a and b (mean changes)**: the new hires earn exactly the existing mean, so the mean cannot move.
> - **d (variance stays the same)**: the common mistake. Staying at the mean does not mean no change to spread: adding observations with deviation 0 makes the group more concentrated.

> [!tip] Intuition
> Variance is an *average* of squared distances from the mean. Adding 100 people at distance zero dilutes the average, so spread falls while the centre stays put.

---

## Q8 — Expected earnings from a dice bet

**Gini pays Sarah 1 shekel, rolls a fair die, and Sarah pays Gini (die value divided by 3) shekels. What is Gini's expected earning?**

a. 1/6  b. 1/3  c. 5/6  d. 1

(The paper typesets these options as f, g, h, i because of a numbering glitch; they are A to D in order.)

> [!success] Official answer: A (1/6)

Earnings are $Y = D/3 - 1$ where D is the die roll. Use $E(bX + a) = bE(X) + a$ and $E(D) = 3.5$:

$$
E(Y) = \frac{3.5}{3} - 1 = \frac{7}{6} - 1 = \frac{1}{6}
$$

> [!warning] Why the wrong options are wrong
> - **b (1/3), c (5/6), d (1)**: none equals $E(D)/3 - 1$. They are distractors from slips such as dividing the stake by 3 or mishandling the average of the die. Note that $E(D/3) = 7/6$ alone is not an option, which is a reminder to subtract the stake.
>
> The key step is subtracting the stake, which is paid whatever the roll.

---

## Q9 — Standard deviation of a geometric waiting time

**Benjamin rolls two fair dice repeatedly until double 6. What is the standard deviation of the number of rolls?**

a. 35.496  b. 36  c. 70.992  d. 72

> [!success] Official answer: A (35.496)

Each roll is an independent attempt with success probability $p = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$, so the number of rolls is [[Geometric Distribution]] $G(1/36)$ with

$$
\text{Var}(X) = \frac{1 - p}{p^2} = \frac{35/36}{1/1296} = 35 \cdot 36 = 1260
$$

$$
\text{SD}(X) = \sqrt{1260} \approx 35.496
$$

> [!warning] Why the wrong options are wrong
> - **b (36)**: this is the **expected value** $1/p = 36$, not the standard deviation.
> - **c (70.992)**: twice the correct SD, from mis-simplifying $\sqrt{4 \cdot 1260}$.
> - **d (72)**: twice the mean.
>
> Roughly, for small p the SD is just under the mean, so an answer slightly below 36 is the sanity check.

---

## Q10 — Bullseyes in five darts

**Each dart hits the bullseye with probability 0.1, independently. What is the probability of exactly two bullseyes in 5 darts?**

a. 0.81  b. 0.729  c. 0.081  d. 0.0729

> [!success] Official answer: D (0.0729)

The number of bullseyes is $X \sim B(5, 0.1)$ ([[Binomial Distribution]]):

$$
P(X = 2) = \binom{5}{2} \cdot 0.1^2 \cdot 0.9^3 = 10 \cdot 0.01 \cdot 0.729 = 0.0729
$$

> [!warning] Why the wrong options are wrong
> - **a (0.81)**: $0.9^2$, nothing to do with this event.
> - **b (0.729)**: $0.9^3$, the probability of three specific misses only, missing the $\binom{5}{2} \cdot 0.1^2$ factors.
> - **c (0.081)**: equals $0.1 \cdot 0.9^2$, which has the wrong exponents and no binomial coefficient.

---

## Q11 — Expected aces in a 7-card hand

**Tal draws 7 cards from a standard 52-card deck. What is the expected number of aces?**

a. 4/13  b. 7/13  c. 4/52  d. 7/52

> [!success] Official answer: B (7/13)

This is a [[Hypergeometric Distribution]] with $N = 52$, $D = 4$ aces, $n = 7$, and $E(X) = n \cdot \frac{D}{N}$:

$$
E(X) = 7 \cdot \frac{4}{52} = \frac{28}{52} = \frac{7}{13}
$$

> [!tip] Intuition
> Each of the 7 cards is an ace with probability $4/52$ by symmetry, and expectation is additive even though draws are not independent.

> [!warning] Why the wrong options are wrong
> - **a (4/13)**: $16/52$, as if drawing 16 cards, or $4 \cdot 4/52$.
> - **c (4/52)**: the probability a *single* card is an ace; you must multiply by the 7 cards.
> - **d (7/52)**: the probability of drawing one *particular* card in 7 draws, not the expected number of aces.

---

## Q12 — Which probability is impossible? (Markov's inequality)

**Adult fish have mean length 100 cm. Which of these could NOT be the probability that a random fish is at least 300 cm?**

a. 0.1  b. 0.2  c. 0.3  d. 0.4

> [!success] Official answer: D (0.4)

> [!warning] AI-written explanation, outside the course material
> The paper notes this question uses **Markov's inequality**, which is not in the 2024 syllabus, the lectures, or the formula sheet. The letter is official; the reasoning below is mine.

For a non-negative variable X with mean $\mu$ and any $c > 0$, **Markov's inequality** says

$$
P(X \ge c) \le \frac{\mu}{c}
$$

Lengths are non-negative, so

$$
P(X \ge 300) \le \frac{100}{300} = \frac{1}{3} \approx 0.333
$$

Probabilities 0.1, 0.2 and 0.3 are all at most $1/3$, so each is possible. **0.4 exceeds $1/3$**, so it is impossible.

> [!tip] Intuition (no formula needed)
> If 40% of fish were at least 300 cm, those fish alone would contribute at least $0.4 \cdot 300 = 120$ cm to the average, which is already more than the mean of 100 cm. Lengths cannot be negative, so the rest cannot cancel it out.

> [!warning] Why the wrong options are wrong
> 0.1, 0.2 and 0.3 each give a contribution of at most $0.3 \cdot 300 = 90 \le 100$, so a distribution with that tail probability and mean 100 exists.

---

## Q13 — Reading a joint distribution table

**Joint distribution of X (rows) and Y (columns):**

| X \ Y | 1 | 2 | 3 |
|---|---|---|---|
| 1 | 0.1 | 0.2 | 0.2 |
| 2 | 0.1 | 0.15 | 0 |
| 3 | 0.1 | 0.15 | 0 |

**$P(X=1 \mid Y=2)$ is ____ than $P(X=2 \mid Y=2)$, and $P(X=1 \mid Y=2)$ is ____ than $P(X=1)$.**

a. Smaller; smaller  b. Smaller; larger  c. Larger; smaller  d. Larger; larger

> [!success] Official answer: C (larger; smaller)

Marginals first. Column Y = 2 sums to $0.2 + 0.15 + 0.15 = 0.5$. Row X = 1 sums to $0.1 + 0.2 + 0.2 = 0.5$, so $P(X=1) = 0.5$.

$$
P(X=1 \mid Y=2) = \frac{0.2}{0.5} = 0.4, \qquad P(X=2 \mid Y=2) = \frac{0.15}{0.5} = 0.3
$$

- $0.4 > 0.3$, so the first blank is **larger**.
- $0.4 < P(X=1) = 0.5$, so the second blank is **smaller**.

> [!warning] Why the wrong options are wrong
> - **a and b**: say $P(X=1 \mid Y=2)$ is smaller than $P(X=2 \mid Y=2)$. Compare the cells $0.2$ vs $0.15$ in the same column.
> - **d**: says conditioning on $Y=2$ makes $X=1$ more likely than before. It makes it *less* likely (0.4 against 0.5). That also shows X and Y are **not** independent.

---

## Q14 — Zero covariance

**$E((X - E(X))(Y - E(Y))) = 0$. X and Y are ____ uncorrelated and ____ independent.**

a. Necessarily; necessarily  b. Not necessarily; necessarily  c. Necessarily; not necessarily  d. Not necessarily; not necessarily

> [!success] Official answer: C (necessarily; not necessarily)

The expression is exactly $\text{Cov}(X, Y)$, so zero covariance means $\rho = 0$: the variables are **necessarily uncorrelated** (that is the definition). But [[Independent Random Variables]] imply zero covariance, **not the other way round**.

> [!example] Counter-example
> Let X be $-1, 0, 1$ with probability $1/3$ each and $Y = X^2$. Then $E(X) = 0$ and $E(XY) = E(X^3) = 0$, so $\text{Cov}(X, Y) = 0$, yet Y is completely determined by X, so they are dependent.

> [!warning] Why the wrong options are wrong
> - **a and b (independent necessarily)**: confuse "uncorrelated" with "independent".
> - **b and d (not necessarily uncorrelated)**: the stated expression is the covariance itself, so there is no wiggle room.

---

## Q15 — Correlation after a negative linear transformation

**$\rho(X, Y) = 0.3$ and $T = -2Y$. What is $\rho(X, T)$?**

a. 0.15  b. -0.15  c. 0.3  d. -0.3

> [!success] Official answer: D (-0.3)

$\text{Cov}(X, -2Y) = -2\text{Cov}(X, Y)$ and $\text{SD}(-2Y) = 2\,\text{SD}(Y)$, so

$$
\rho(X, T) = \frac{-2\,\text{Cov}(X, Y)}{\text{SD}(X) \cdot 2\,\text{SD}(Y)} = -\rho(X, Y) = -0.3
$$

Correlation is **unit-free**: the size of the scale factor (2) cancels, only its **sign** flips the result.

> [!warning] Why the wrong options are wrong
> - **a and b (±0.15)**: wrongly divide by 2, as if correlation scaled with the constant.
> - **c (0.3)**: forgets the minus sign.

---

## Q16 — Valid density from a triangle graph

**For which value of $a$ does the following graph represent a valid density function of X?**

![[PP01_q16_density_graph.png|520]]

The graph is an isosceles triangle on $[-a, a]$ with peak height $a$ at $x = 0$.

a. $1/\sqrt{2}$  b. 1  c. $\sqrt{2}$  d. 2

> [!success] Official answer: B (1)

A [[Probability Density Function]] must be non-negative (it is) and have **total area 1**. Triangle area is $\frac{1}{2} \cdot \text{base} \cdot \text{height}$ with base $2a$ and height $a$:

$$
\text{Area} = \frac{1}{2} \cdot 2a \cdot a = a^2 = 1 \quad \Rightarrow \quad a = 1
$$

(Only the positive root makes sense since $a$ is a length and a height.)

> [!warning] Why the wrong options are wrong
> - **a ($1/\sqrt{2}$)**: gives total area $a^2 = 1/2$, half of what is needed.
> - **c ($\sqrt{2}$)**: gives total area $a^2 = 2$, twice too large.
> - **d (2)**: gives total area $a^2 = 4$. The height is also $a$, so doubling $a$ quadruples the area.

> [!note] Source figure. The graph is cropped from the rendered paper page, since it is the question's own picture.

---

## Q17 — A percentile of a uniform distribution

**$X \sim U(6, 10)$. What is the 70th percentile?**

a. 2.8  b. 4.8  c. 6.8  d. 8.8

> [!success] Official answer: D (8.8)

For a [[Continuous Uniform Distribution]] on $[6, 10]$ the CDF is $F(x) = \frac{x - 6}{4}$. Set $F(x) = 0.7$:

$$
\frac{x - 6}{4} = 0.7 \quad \Rightarrow \quad x = 6 + 0.7 \cdot 4 = 8.8
$$

> [!warning] Why the wrong options are wrong
> - **a (2.8)**: $0.7 \cdot 4$, the distance without adding the start, 6.
> - **b (4.8)**: not within the support $[6, 10]$, so impossible. A percentile of a variable on $[6, 10]$ must lie in $[6, 10]$.
> - **c (6.8)**: $6 + 0.2 \cdot 4$, using 0.2 in place of 0.7.

---

## Q18 — Proportion of gnomes shorter than 32 cm

**Heights are normal with mean 35 and standard deviation 10. What percent of gnomes are shorter than 32 cm?**

a. 38.2%  b. 48.2%  c. 58.2%  d. 68.2%

> [!success] Official answer: A (38.2%)

[[Standardization]]:

$$
z = \frac{32 - 35}{10} = -0.3
$$

$$
P(X < 32) = \Phi(-0.3) = 1 - \Phi(0.3) \approx 1 - 0.6179 = 0.3821
$$

So about **38.2%**, using the [[Z Table]].

> [!warning] Why the wrong options are wrong
> - **b (48.2%)**: close to 50% would mean 32 is almost at the mean; it is 0.3 standard deviations below.
> - **c (58.2%) and d (68.2%)**: above 50%, impossible, since 32 is **below** the mean of 35, so under half the gnomes are shorter.
>
> Quick check: any value below the mean has a probability of being exceeded under 0.5.

---

## Q19 — Average electricity spending (CLT)

**Spending per household has mean 625 and SD 180. What is the probability the average of 81 households is below 630?**

a. 0.5987  b. 0.6878  c. 0.7578  d. 0.9878

> [!success] Official answer: A (0.5987)

By the [[Central Limit Theorem]] the sample average is approximately normal with mean 625 and standard error $\frac{180}{\sqrt{81}} = \frac{180}{9} = 20$:

$$
z = \frac{630 - 625}{20} = 0.25, \qquad P(\bar X < 630) \approx \Phi(0.25) \approx 0.5987
$$

> [!warning] Why the wrong options are wrong
> - **b (0.6878)**: corresponds to $z \approx 0.49$, which needs a standard error of about 10 (not 20).
> - **c (0.7578)**: corresponds to $z \approx 0.70$, no natural slip.
> - **d (0.9878)**: corresponds to $z \approx 2.25$, which is $5 / (180/81)$: dividing by $n$ instead of $\sqrt{n}$. The slip to avoid: standard error is $\sigma/\sqrt{n}$.

---

## Q20 — Proportion of MBA managers (normal approximation)

**15% of Israeli managers have an MBA. In a random sample of 50 managers, what is the probability that fewer than 10% have an MBA?**

a. 0.10  b. 0.12  c. 0.14  d. 0.16

> [!success] Official answer: D (0.16)

The sample proportion has mean $p = 0.15$ and standard error

$$
\sqrt{\frac{p(1 - p)}{n}} = \sqrt{\frac{0.15 \cdot 0.85}{50}} \approx 0.0505
$$

$$
z = \frac{0.10 - 0.15}{0.0505} \approx -0.99, \qquad P(\hat p < 0.10) \approx \Phi(-0.99) \approx 0.161
$$

This is the [[Normal Approximation of the Binomial]] for a [[Sample Proportion]], and 0.161 is closest to **0.16**.

> [!warning] Why the wrong options are wrong
> - **a (0.10), b (0.12), c (0.14)**: correspond to $z \approx -1.28$, $-1.17$ and $-1.08$. Our $z \approx -0.99$ is nearest to 0.16 (which is $z \approx -0.99$), so none of these is the closest.
>
> The question says "pick the closest value", so the table lookup is expected to land on 0.16.

---

## Answer key recap

| Q | Official | Topic | Answer in one line |
|---|---|---|---|
| 1 | C | Complement of disjoint union | $1 - 0.5 = 0.5$ |
| 2 | B | Conditional probability | $0.4 \cdot 0.6 = 0.24$ |
| 3 | C | Bayes | $0.8 \cdot 0.5 / 0.6 = 2/3$ |
| 4 | C | Total probability | $0.45 + 0.20 = 0.65$ |
| 5 | A | Independence | $0.3^2 = 0.09$ |
| 6 | B (all accepted) | Counting | $\binom{5}{2}/\binom{7}{4} = 2/7$ (AI-written) |
| 7 | C | Mean and variance | mean same, variance falls |
| 8 | A | Expected value | $3.5/3 - 1 = 1/6$ |
| 9 | A | Geometric SD | $\sqrt{1260} \approx 35.496$ |
| 10 | D | Binomial | $10 \cdot 0.01 \cdot 0.729 = 0.0729$ |
| 11 | B | Hypergeometric mean | $7 \cdot 4/52 = 7/13$ |
| 12 | D | Tail bound (Markov) | $P \le 1/3$, so 0.4 impossible (AI-written) |
| 13 | C | Joint table | $0.4 > 0.3$ and $0.4 < 0.5$ |
| 14 | C | Covariance | uncorrelated, not necessarily independent |
| 15 | D | Correlation | sign flips, $-0.3$ |
| 16 | B | Density | $a^2 = 1$ |
| 17 | D | Uniform percentile | $6 + 0.7 \cdot 4 = 8.8$ |
| 18 | A | Normal | $\Phi(-0.3) \approx 0.382$ |
| 19 | A | CLT average | $\Phi(0.25) \approx 0.5987$ |
| 20 | D | Normal approx. of a proportion | $\Phi(-0.99) \approx 0.161$ |

## Related Notes

[[Statistics A]], [[Lec_13-Exam Structure and Practice (Moed B 2023)]]
