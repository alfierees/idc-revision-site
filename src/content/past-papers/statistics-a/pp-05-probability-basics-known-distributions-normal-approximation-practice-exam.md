---
title: "Probability Basics, Known Distributions & Normal Approximation (Practice Exam)"
type: past-paper
status: worked-solution
exam: "Statistics A Practice Exam (20 multiple-choice questions, official letter-only key)"
semester: 1
year: 1
course: "Statistics A"
instructor: Asael Sklar
tags:
  - statistics-a
  - past-paper
  - worked-solution
  - multiple-choice
  - practice-exam
  - probability
  - bayes
  - known-distributions
  - covariance
  - normal-distribution
  - central-limit-theorem
aliases:
  - Statistics A Practice Exam
  - Stats A Practice Exam
  - PP05 Statistics A
subject: statistics-a
in_scope: true
---

# Probability Basics, Known Distributions & Normal Approximation (Practice Exam)

> Part of: [[Statistics A]]
> **Statistics A Practice Exam**, Statistics A, Asael Sklar. 20 multiple-choice questions, one letter each. The paper ends with a letter-only answer key. No year is shown on the paper, and it is not a "tofes 0" master version (the correct option is not always A).
> Builds on: [[Lec_01-Sets and the Probability Function]], [[Lec_02-Probability Function and Conditional Probability]], [[Lec_03-Conditional Probability, Bayes and Independence]], [[Lec_04-Symmetrical Probability Spaces and Combinatorics]], [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_07-Known Distributions]], [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]], [[Lec_10-Continuous Random Variables and the Uniform Distribution]], [[Lec_11-Uniform and Normal Distributions]], [[Lec_12-Central Limit Theorem and Normal Approximations]]
> Practice: [[PS_01-Basics of Probability and Venn Diagrams]], [[PS_02-Probability and Conditional Probability]], [[PS_03-Conditional Probability, Drug Dog, Bayes & Independence]], [[PS_04-Combinatorics]], [[PS_05-Random Variables, Sums, Maxima and Minima]], [[PS_06-Binomial Sampling, Gambles and Linear Transformations]], [[PS_07-Geometric, Hypergeometric and Poisson Distributions]], [[PS_08-Joint Distributions, Stopping Rules and Covariance]], [[PS_09-Two Bags, Joint Distributions, Covariance and Correlation]], [[PS_10-Continuous Random Variables and Density Functions]], [[PS_11-Normal Distribution and National Exam Scores]], [[PS_12-Central Limit Theorem, Sample Averages and Proportions]]

> [!info] Source and answer provenance
> The official answer key is **letters only, with no working**. Every letter below is the official one, and **all 20 working paths below reach the keyed letter**. The working and the "why the other options are wrong" explanations are written for revision, not copied. The formula sheet used is `Formula sheet 2024-2025`; formulas below are on it unless stated.

> [!warning] Questions with a caveat
> - **Q12** uses **Markov's inequality**, which is not in the lecture notes or on the formula sheet. The paper itself says the question "is not part of the material for 2024". The explanation is **AI-written** and goes beyond the course.
> - **Q16**: in the printed paper the vertical axes of graphs c and d are labelled f(X) (a density) while the question asks about a CDF. The key still says d. See the note under Q16.
> - **Q19**: no option is exactly the right cut-off. The keyed letter is the closest option, see the check under Q19.

## What this paper tests

| Questions | Core idea | Where it is taught |
|---|---|---|
| Q1, Q2 | [[Complement Rule]], bounds on a union, [[Conditional Probability]] | [[Lec_01-Sets and the Probability Function]], [[Lec_02-Probability Function and Conditional Probability]] |
| Q3, Q4, Q5 | [[Bayes' Theorem]], [[Law of Total Probability]], [[Independent Events]] | [[Lec_03-Conditional Probability, Bayes and Independence]] |
| Q6 | Counting with [[Combination]] in a [[Symmetrical Probability Space]] | [[Lec_04-Symmetrical Probability Spaces and Combinatorics]] |
| Q7, Q8 | [[Expected Value]], [[Variance]], [[Linear Transformation]] | [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]] |
| Q9, Q10, Q11 | [[Binomial Distribution]], [[Hypergeometric Distribution]], [[Geometric Distribution]] | [[Lec_07-Known Distributions]] |
| Q12 | A tail bound from the mean (Markov, outside the course) | not taught |
| Q13, Q14, Q15 | [[Joint Distribution Table]], [[Independent Random Variables]], [[Covariance]], [[Correlation Coefficient]] | [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]] |
| Q16, Q17 | CDF shape, [[Continuous Uniform Distribution]], [[Percentile]] | [[Lec_10-Continuous Random Variables and the Uniform Distribution]] |
| Q18 | [[Normal Distribution]], [[Standardization]], [[Z Table]] | [[Lec_11-Uniform and Normal Distributions]] |
| Q19, Q20 | [[Central Limit Theorem]], [[Normal Approximation of the Binomial]], [[Sample Proportion]] | [[Lec_12-Central Limit Theorem and Normal Approximations]] |

> [!tip] Intuition
> Q1 to Q6 are pure probability, Q7 to Q12 are random variables and known distributions, Q13 to Q15 are two variables together, Q16 to Q20 are continuous variables and the CLT. Several questions (Q2, Q7, Q12, Q14) ask what is *necessarily* true or *possible*, so the skill is finding the one fact that holds for every allowed case, not computing a number.

---

## Q1 — Possible values of a union

**A and B are events in the same sample space Ω. Given that $P(A) = 0.5$ and $P(B) = 0.4$, which of the following is a possible value of $P(A \cup B)$?**

a. 0.2  b. 0.4  c. 0.6  d. 1

> [!success] Official answer: C (0.6)

A union is at least as big as each event and at most the sum of their sizes. The lower bound is $P(A \cup B) \ge \max(P(A), P(B)) = 0.5$. The upper bound is the case $P(A \cap B) = 0$:

$$
0.5 \le P(A \cup B) = P(A) + P(B) - P(A \cap B) \le 0.5 + 0.4 = 0.9
$$

So any value in $[0.5, 0.9]$ is possible, and only 0.6 lies in that range.

> [!warning] Why the wrong options are wrong
> - **a (0.2)** and **b (0.4)**: below $P(A) = 0.5$. A union cannot be smaller than one of its parts.
> - **d (1)**: above the maximum 0.9. Even for disjoint events the union only reaches $0.5 + 0.4 = 0.9$.

---

## Q2 — Comparing two conditional probabilities

**A and B are events in the same sample space. Given $P(A) = 0.6$ and $P(B) = 0.6$, which must be true?**

a. $P(A|B) > P(B|A)$
b. $P(A|B) = P(B|A)$
c. $P(A|B) < P(B|A)$
d. The information given is not enough to know the relationship

> [!success] Official answer: B

Both conditional probabilities share the same numerator, $P(A \cap B)$, and differ only in the denominator:

$$
P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A \cap B)}{0.6}, \qquad P(B|A) = \frac{P(A \cap B)}{P(A)} = \frac{P(A \cap B)}{0.6}
$$

Because $P(A) = P(B)$, they are equal whatever $P(A \cap B)$ is.

> [!warning] Why the wrong options are wrong
> - **a and c**: each says one is strictly larger. That could only happen if $P(A) \ne P(B)$ (the event with the smaller probability gives the larger conditional probability when the other is given).
> - **d**: the intersection is unknown, but it cancels out of the comparison, so the information *is* enough.

---

## Q3 — Fraud detection (Bayes)

**An algorithm classifies 98% of fraudulent transactions as fraudulent. 3% of transactions are fraudulent and the algorithm classifies 3.5% of transactions as fraudulent. What is the probability that a transaction classified as fraudulent is in fact fraudulent?**

a. 84%  b. 86%  c. 88%  d. 90%

> [!success] Official answer: A (84%)

Let F = fraudulent, C = classified as fraudulent. Given $P(C \mid F) = 0.98$, $P(F) = 0.03$, $P(C) = 0.035$. We want $P(F \mid C)$, so apply [[Bayes' Theorem]]; $P(C)$ is given directly, so no total-probability step is needed:

$$
P(F \mid C) = \frac{P(C \mid F) \cdot P(F)}{P(C)} = \frac{0.98 \cdot 0.03}{0.035} = \frac{0.0294}{0.035} = 0.84
$$

> [!warning] Why the wrong options are wrong
> - **b, c, d (86%, 88%, 90%)**: are nearby distractors; the formula gives exactly 0.84 and nothing rounds to these.
> - The trap behind them is answering 98%, which is $P(C \mid F)$, the chance the algorithm catches a fraud, not the chance a flagged transaction is a fraud. The two differ because 0.5 percentage points of flags (3.5% minus 3%) are false alarms among non-frauds.

> [!tip] Intuition
> Of every 10,000 transactions, 350 are flagged. Of those, $0.98 \cdot 300 = 294$ are truly fraudulent. $294/350 = 0.84$.

---

## Q4 — Probability of not mint flavored

**80% of packages do not have dents. $P(\text{mint} \mid \text{dented}) = 0.3$. $P(\text{mint} \mid \text{not dented}) = 0.4$. What is the probability a random package is not mint flavored?**

a. 0.24  b. 0.48  c. 0.62  d. 0.84

> [!success] Official answer: C (0.62)

Let D = dented, M = mint. $P(D) = 0.2$, $P(\bar D) = 0.8$. By the [[Law of Total Probability]]:

$$
P(M) = P(M \mid D) P(D) + P(M \mid \bar D) P(\bar D) = 0.3 \cdot 0.2 + 0.4 \cdot 0.8 = 0.06 + 0.32 = 0.38
$$

$$
P(\bar M) = 1 - 0.38 = 0.62
$$

> [!warning] Why the wrong options are wrong
> - **a (0.24)**: $0.8 \cdot 0.3$, mixing the 80% with the wrong flavour probability.
> - **b (0.48)**: this is $P(\bar M \cap \bar D) = 0.6 \cdot 0.8$, only the not-dented branch of "not mint". It misses the dented branch $0.7 \cdot 0.2 = 0.14$.
> - **d (0.84)**: too high. It would need only 16% of packages to be mint, but both conditional mint probabilities (0.3 and 0.4) are above that, so the overall mint share must lie between 0.3 and 0.4.

---

## Q5 — Independence and a missing probability

**$P(\text{mirror breaks}) = 0.1$. $P(\text{mirror did not break and car visited a mechanic}) = 0.45$. What is the probability a car visits a mechanic if the two events are independent?**

a. 0.045  b. 0.35  c. 0.45  d. 0.5

> [!success] Official answer: D (0.5)

Let B = mirror breaks, M = visits a mechanic. If B and M are independent, so are $\bar B$ and M. So

$$
P(\bar B \cap M) = P(\bar B) \cdot P(M) \quad\Rightarrow\quad 0.45 = 0.9 \cdot P(M) \quad\Rightarrow\quad P(M) = 0.5
$$

> [!warning] Why the wrong options are wrong
> - **a (0.045)**: $0.1 \cdot 0.45$, multiplying by $P(B)$ instead of dividing by $P(\bar B)$.
> - **b (0.35)**: $0.45 - 0.1$, subtracting as if probabilities of different events simply add.
> - **c (0.45)**: this is the joint probability $P(\bar B \cap M)$, not the marginal $P(M)$. It would equal $P(M)$ only if $P(\bar B) = 1$.

---

## Q6 — Probability of a flush

**A deck has 13 cards of each of 4 suits (52 cards). What is the probability that a random 5-card poker hand is a flush (all 5 cards from the same suit)?**

a. 0.00198  b. 0.00298  c. 0.00398  d. 0.00498

> [!success] Official answer: A (0.00198)

All hands are equally likely, so this is a [[Symmetrical Probability Space]]: favourable hands over all hands. Order does not matter and there is no replacement, so use [[Combination]].

- All hands: $\binom{52}{5} = 2{,}598{,}960$.
- Flush hands: choose the suit (4 ways), then 5 of that suit's 13 cards: $4 \cdot \binom{13}{5} = 4 \cdot 1287 = 5148$.

$$
P(\text{flush}) = \frac{4 \cdot \binom{13}{5}}{\binom{52}{5}} = \frac{5148}{2{,}598{,}960} \approx 0.00198
$$

> [!warning] Why the wrong options are wrong
> - **b, c, d (0.00298 to 0.00498)**: are 1.5, 2 and 2.5 times the correct value. Each overcounts the favourable hands; the exact count is $4 \cdot 1287 = 5148$ out of $2{,}598{,}960$, which gives 0.00198.
> - Note the count includes straight flushes, which the question does not exclude.

---

## Q7 — Distribution table with unknown probabilities

**X takes values 1, 2, 3 with probabilities $a, b, a$ where $a > 0$ and $b > 0$. Which is necessarily true?**

a. $E(X) = 2$, $SD(X) = 1$
b. $E(X) \ne 2$, $SD(X) = 1$
c. $E(X) = 2$, $SD(X) < 1$
d. $E(X) \ne 2$, $SD(X) < 1$

> [!success] Official answer: C

The probabilities sum to 1, so $2a + b = 1$.

$$
E(X) = 1 \cdot a + 2 \cdot b + 3 \cdot a = 4a + 2b = 2(2a + b) = 2
$$

The distribution is symmetric around 2, so the mean is 2 whatever $a$ is. For the variance:

$$
Var(X) = E\big((X-2)^2\big) = 1 \cdot a + 0 \cdot b + 1 \cdot a = 2a
$$

Since $b > 0$, we have $2a < 1$, so $a < 0.5$ and $Var(X) = 2a < 1$, hence $SD(X) < 1$.

> [!warning] Why the wrong options are wrong
> - **a**: $SD = 1$ would need $a = 0.5$, forcing $b = 0$, which the question excludes.
> - **b and d**: claim $E(X) \ne 2$, but the symmetry of the table fixes the mean at exactly 2.

---

## Q8 — Variance of a linear fee

**A sofa's weight has $E = 150$ kg and $SD = 20$. The fee is 20 shekels plus 4 shekels per kilo. What is the variance of the fee?**

a. 80  b. 320  c. 3200  d. 6400

> [!success] Official answer: D (6400)

Fee $= 4 \cdot W + 20$. Variance of a [[Linear Transformation]] ignores the added constant and squares the multiplier: $Var(bX + a) = b^2 \, Var(X)$.

$$
Var(\text{fee}) = 4^2 \cdot Var(W) = 16 \cdot 20^2 = 16 \cdot 400 = 6400
$$

> [!warning] Why the wrong options are wrong
> - **a (80)**: $4 \cdot 20$, the standard deviation of the fee, not its variance.
> - **b (320)**: $16 \cdot 20$, squaring the multiplier but not the SD.
> - **c (3200)**: $8 \cdot 400$, a wrong multiplier. The mean (150) and the 20-shekel constant play no role in the variance.

---

## Q9 — With or without replacement

**Harry and Jay each have a bag of 40 balls, 5 black. Each picks 3 balls and counts the black ones. Harry puts each ball back before the next pick; Jay does not. What are the distributions of the number of black balls?**

a. Binomial; Binomial
b. Uniform; Binomial
c. Binomial; Hypergeometric
d. Uniform; Hypergeometric

> [!success] Official answer: C

- **Harry (with replacement):** each pick has the same chance $5/40$ of black, independently, so the count is [[Binomial Distribution]] with $n = 3$, $p = 1/8$.
- **Jay (without replacement):** the chance changes after each pick, so picks are dependent. Sampling a fixed number from a finite population with a known number of "successes" is the [[Hypergeometric Distribution]].

> [!warning] Why the wrong options are wrong
> - **a**: Jay's picks are not independent, so his count is not binomial.
> - **b and d**: "Uniform" would mean every count from 0 to 3 is equally likely. Black balls are rare (12.5%), so 0 is by far the most likely count.

---

## Q10 — Variance of a count of ones

**Hanna rolls 36 fair six-sided dice and counts the ones. What is the variance of that count?**

a. 3  b. 4  c. 5  d. 6

> [!success] Official answer: C (5)

The count is Binomial with $n = 36$ and $p = 1/6$:

$$
Var = n p (1 - p) = 36 \cdot \frac{1}{6} \cdot \frac{5}{6} = 5
$$

> [!warning] Why the wrong options are wrong
> - **a (3)**: neither the mean nor the variance. A slip such as $36/12$.
> - **b (4)**: no natural formula gives it.
> - **d (6)**: this is the **expected value** $np = 36 \cdot \frac{1}{6}$. The variance multiplies by the extra factor $5/6$.

---

## Q11 — Matching two expected values

**A slot machine pays a prize with probability $p$. X is the number of plays a single gambler needs until he wins. Y is how many of 100 gamblers, who each play once, win. For what $p$ are $E(X)$ and $E(Y)$ equal?**

a. 1/5  b. 1/10  c. 1/50  d. 1/100

> [!success] Official answer: B (1/10)

X is [[Geometric Distribution]] (plays until the first win), so $E(X) = 1/p$. Y is [[Binomial Distribution]] with $n = 100$, so $E(Y) = 100p$.

$$
\frac{1}{p} = 100 p \quad\Rightarrow\quad p^2 = \frac{1}{100} \quad\Rightarrow\quad p = \frac{1}{10}
$$

(The negative root is not a probability.)

> [!warning] Why the wrong options are wrong
> Plug each in: $p = 1/5$ gives $E(X) = 5$, $E(Y) = 20$; $p = 1/50$ gives $50$ and $2$; $p = 1/100$ gives $100$ and $1$. Only $p = 1/10$ gives $10$ and $10$. Options c and d fall for the mistake of setting $E(Y) = 100 p$ equal to a wrong formula for $E(X)$, such as $p$ or $1/(100p)$.

---

## Q12 — Probability of a very expensive car (Markov)

**The price of a random secondhand car has expected value 40,000 shekels. Which could be the probability that a car costs more than 100,000 shekels?**

a. 0.4  b. 0.5  c. 0.6  d. 0.7

> [!success] Official answer: A (0.4)

> [!warning] AI-written answer, outside the course material
> The printed paper says this question "relies on Markov's inequality which is not part of the material for 2024". It is not in the lectures or on the formula sheet. The working below is mine and is not from the course.

Prices cannot be negative, so for a non-negative variable **Markov's inequality** says $P(X \ge c) \le E(X)/c$. Here:

$$
P(X > 100{,}000) \le \frac{40{,}000}{100{,}000} = 0.4
$$

So the probability is at most 0.4. Option a is the only one that does not exceed this bound.

> [!tip] Intuition
> Suppose 50% of cars cost more than 100,000. Those cars alone contribute at least $0.5 \cdot 100{,}000 = 50{,}000$ to the average, already above 40,000 even if the other cars were free. So no more than 40% of cars can be that expensive.

> [!warning] Why the wrong options are wrong
> **b, c, d (0.5, 0.6, 0.7)** all exceed the bound of 0.4: by the argument above they would push the mean above 40,000, which contradicts the given expected value.

---

## Q13 — Positive versus negative correlation

**The joint table of X and Y: $P(X{=}3, Y{=}1) = 0.5$, $P(X{=}5, Y{=}3) = 0.5$, others 0. The joint table of T and M: $P(T{=}3, M{=}3) = 0.5$, $P(T{=}5, M{=}1) = 0.5$, others 0. Which is true?**

a. $\rho(X,Y) > \rho(T,M)$ and $|\rho(X,Y)| = |\rho(T,M)|$
b. $\rho(X,Y) > \rho(T,M)$ and $|\rho(X,Y)| \ne |\rho(T,M)|$
c. $\rho(X,Y) < \rho(T,M)$ and $|\rho(X,Y)| = |\rho(T,M)|$
d. $\rho(X,Y) < \rho(T,M)$ and $|\rho(X,Y)| \ne |\rho(T,M)|$

> [!success] Official answer: A

In the (X, Y) table the two outcomes are (3, 1) and (5, 3) with probability 0.5 each, so $E(X) = 4$, $E(Y) = 2$, $E(XY) = 0.5 \cdot 3 + 0.5 \cdot 15 = 9$. Then

$$
Cov(X,Y) = E(XY) - E(X)E(Y) = 9 - 8 = 1, \qquad SD(X) = SD(Y) = 1
$$

$$
\rho(X,Y) = \frac{1}{1 \cdot 1} = 1
$$

In the (T, M) table the outcomes are (3, 3) and (5, 1), so $E(T) = 4$, $E(M) = 2$, $E(TM) = 0.5 \cdot 9 + 0.5 \cdot 5 = 7$:

$$
Cov(T,M) = 7 - 8 = -1, \qquad \rho(T,M) = \frac{-1}{1 \cdot 1} = -1
$$

So $\rho(X,Y) = 1 > -1 = \rho(T,M)$, and the absolute values are both 1.

> [!tip] Intuition
> In each table the two variables are exact linear functions of each other: Y moves up with X in the first, and M moves down as T rises in the second. A perfect line gives $|\rho| = 1$, and only the slope's sign differs.

> [!warning] Why the wrong options are wrong
> - **b**: claims the absolute values differ, but both are exactly 1.
> - **c and d**: reverse the inequality; the positive slope belongs to (X, Y), not (T, M).

---

## Q14 — Consequences of independence in a table

**The joint table of independent X and Y has rows X = 1, 2 and columns Y = 1, 2, 3, with entries $a, b, c$ in row 1 and $d, e, f$ in row 2. Because X and Y are independent, $\frac{a}{a+d}$ is ___ equal to $\frac{b}{b+e}$, and $a$ is ___ equal to $b$.**

a. Necessarily; necessarily
b. Not necessarily; necessarily
c. Necessarily; not necessarily
d. Not necessarily; not necessarily

> [!success] Official answer: C (necessarily; not necessarily)

**First blank.** $a + d = P(Y = 1)$ is the first column total, so $\frac{a}{a+d} = P(X = 1 \mid Y = 1)$. Likewise $\frac{b}{b+e} = P(X = 1 \mid Y = 2)$. For independent variables, $P(X = 1 \mid Y = y) = P(X = 1)$ for every $y$, so both fractions equal $P(X = 1)$. They are **necessarily** equal.

**Second blank.** Independence gives $a = P(X{=}1)P(Y{=}1)$ and $b = P(X{=}1)P(Y{=}2)$. So $a = b$ only if $P(Y{=}1) = P(Y{=}2)$, which independence does not force. For example, with $P(X{=}1) = 0.5$, $P(Y{=}1) = 0.2$, $P(Y{=}2) = 0.5$ we get $a = 0.1 \ne b = 0.25$. Not necessarily equal.

> [!warning] Why the wrong options are wrong
> - **a and b**: say $a = b$ is necessary. That would make all column probabilities in one row equal, which is a much stronger condition than independence.
> - **d**: says the conditional-probability equality is not guaranteed, but independence means exactly that conditioning on Y does not change the distribution of X.

---

## Q15 — Filling in a joint distribution

**X takes values 1, 2; Y takes values 1, 2, 3. $P(X{=}1) = 0.5$, $P(Y{=}2) = 0.4$, $P(X{=}1, Y{=}1) = 0.2$, $P(X{=}2, Y{=}2) = 0.2$. What is $P(X{=}1, Y{=}3)$?**

a. 0.1  b. 0.2  c. 0.3  d. 0.4

> [!success] Official answer: A (0.1)

Work through the [[Joint Distribution Table]] using row and column totals.

- Column $Y = 2$ totals 0.4 and contains $P(X{=}2, Y{=}2) = 0.2$, so $P(X{=}1, Y{=}2) = 0.4 - 0.2 = 0.2$.
- Row $X = 1$ totals 0.5 and contains three cells, so

$$
P(X{=}1, Y{=}3) = 0.5 - P(X{=}1, Y{=}1) - P(X{=}1, Y{=}2) = 0.5 - 0.2 - 0.2 = 0.1
$$

> [!warning] Why the wrong options are wrong
> - **b (0.2)**: this is $P(X{=}1, Y{=}2)$ (or $P(X{=}1, Y{=}1)$), a neighbouring cell, not the one asked for.
> - **c (0.3)**: $0.5 - 0.2$, subtracting only the $Y = 1$ cell.
> - **d (0.4)**: $P(Y{=}2)$, a different quantity.

---

## Q16 — Which graph could be a CDF?

**X is a continuous random variable. Which of the following could be the graph of the cumulative distribution function of X?**

The four printed graphs are redrawn below (the original is a small sketch in the paper).

![[PP05_q16_candidate_cdf_graphs.png|760]]

a. graph a: a flat segment at a positive height that starts away from the vertical axis and has nothing to its left
b. graph b: flat and then falling back to zero
c. graph c: a line rising from the origin that keeps going up
d. graph d: zero, then rising, then flat at a constant height

> [!success] Official answer: D

The [[Probability Density Function]] and its CDF follow strict rules. A CDF $F(x) = P(X \le x)$ must:

1. start at 0 on the far left and end at 1 on the far right,
2. never decrease,
3. for a continuous variable, be continuous (no jumps).

Graph d starts at 0, rises, and levels off at a constant top height. That is the shape of a valid CDF (it is the CDF of a uniform variable, for example).

> [!warning] Why the wrong options are wrong
> - **a**: the graph is not 0 on the left, and it appears out of nowhere, which needs a jump. A continuous variable cannot have a jump in its CDF.
> - **b**: the curve decreases to the right. $F$ can never go down, since probability only accumulates.
> - **c**: a line that keeps rising has no upper limit, so $F$ would exceed 1. A CDF must level off at 1.

> [!note] Printed labels
> In the paper the vertical axes of graphs c and d carry the label f(X), while a and b carry F(X). The key is still d. Read as a density, graph d would have a flat part with positive height forever, whose area is infinite, so it could not be a density either; the question and key only make sense as a CDF question.

---

## Q17 — A uniform percentile

**$X \sim U(-2, 2)$. What is the 30th percentile of X?**

a. -1.6  b. -0.8  c. 0.8  d. 1.6

> [!success] Official answer: B (-0.8)

![[PP05_q17_uniform_30th_percentile.png|560]]

The [[Percentile]] value $x$ satisfies $P(X \le x) = 0.30$. The density is $\frac{1}{2 - (-2)} = 0.25$, so the area to the left of $x$ is $0.25 \cdot (x + 2)$:

$$
0.25 \, (x + 2) = 0.30 \quad\Rightarrow\quad x + 2 = 1.2 \quad\Rightarrow\quad x = -0.8
$$

Equivalently, start at the minimum and go 30% of the way along the 4-unit range: $-2 + 0.3 \cdot 4 = -0.8$.

> [!warning] Why the wrong options are wrong
> - **a (-1.6)**: this is the 10th percentile ($-2 + 0.1 \cdot 4$).
> - **c (0.8)**: this is the 70th percentile, which is what you get measuring from the top (or flipping the sign).
> - **d (1.6)**: the 90th percentile.

---

## Q18 — A normal cut-off at 85%

**Kick distance is Normal with mean 48 m and SD 14. What distance X is such that 85% of kicks reach less than X? (pick the closest value)**

a. 32.5  b. 42.5  c. 52.5  d. 62.5

> [!success] Official answer: D (62.5)

![[PP05_q18_kick_distance_85th_percentile.png|560]]

Use the [[Z Table]] backwards: find the $z$ with $P(Z \le z) = 0.85$, which is $z \approx 1.04$. Then undo the [[Standardization]]:

$$
X = \mu + z \cdot \sigma = 48 + 1.04 \cdot 14 \approx 62.6
$$

The closest option is 62.5.

> [!warning] Why the wrong options are wrong
> - **a (32.5)**: below the mean of 48, so fewer than 50% of kicks would fall below it. Roughly the 14th percentile ($z \approx -1.1$).
> - **b (42.5)**: also below the mean, so at most about 35% of kicks fall below it.
> - **c (52.5)**: only $z \approx 0.32$, about the 63rd percentile, not the 85th.
>
> Since the target is above 50%, the cut-off must be above the mean, which already eliminates a and b.

---

## Q19 — Weight that 90% of boxes exceed

**A loaf has expected weight 750 g and SD 50 g. Boxes hold 50 random loaves. What weight do 90% of boxes weigh more than? (pick the closest value)**

a. 31,675 g  b. 36,676 g  c. 42,505 g  d. 56,915 g

> [!success] Official answer: B (36,676 g)

![[PP05_q19_box_weight_lower_10_percent.png|560]]

A box weight is a sum of 50 independent loaves. By the [[Central Limit Theorem]] the sum is approximately normal with

$$
E(\text{box}) = 50 \cdot 750 = 37{,}500, \qquad SD(\text{box}) = \sqrt{50} \cdot 50 \approx 353.6
$$

Ninety percent exceed the cut-off, so 10% lie below it: $z \approx -1.28$.

$$
\text{cut-off} = 37{,}500 - 1.28 \cdot 353.6 \approx 37{,}047
$$

The closest option is 36,676.

> [!warning] Why the wrong options are wrong
> - **a (31,675)**: about 16 standard deviations below the mean, far too low.
> - **c (42,505)**: above the mean of 37,500. The weight that *90% exceed* must be below the mean.
> - **d (56,915)**: far above the mean, and would be the answer to a very different question. A frequent slip is using SD $= 50 \cdot 50 = 2500$ (adding the SDs instead of the variances), which spreads the distribution much too wide.

> [!warning] Check of the keyed option
> The exact cut-off is about 37,047, and no option equals it. The keyed 36,676 is 371 g away, while the next nearest option (42,505) is over 5,000 g away, so B is the closest and agrees with the key. Option B itself corresponds to about 2.33 standard deviations below the mean (the 1st percentile), so the question's numbers look as if they were set up for a different percentile; the wording "pick the closest value" is what makes B correct.

---

## Q20 — Normal approximation for a sample proportion

**5% of batteries a factory makes are faulty. In a random sample of 200 batteries, what is the probability that more than 7% are faulty? (pick the closest value)**

a. 0.012  b. 0.097  c. 0.18  d. 0.23

> [!success] Official answer: B (0.097)

![[PP05_q20_faulty_proportion_above_7_percent.png|560]]

The sample proportion has mean $p = 0.05$ and standard deviation $\sqrt{p(1-p)/n}$. By the [[Normal Approximation of the Binomial]] and the CLT it is approximately normal:

$$
SD = \sqrt{\frac{0.05 \cdot 0.95}{200}} \approx 0.0154
$$

$$
z = \frac{0.07 - 0.05}{0.0154} \approx 1.30
$$

$$
P(\hat p > 0.07) = 1 - \Phi(1.30) \approx 1 - 0.9032 = 0.097
$$

> [!warning] Why the wrong options are wrong
> - **a (0.012)**: a tail beyond $z \approx 2.26$, too far out. The threshold 0.07 is only 1.3 standard deviations of the sample proportion above 0.05.
> - **c (0.18)** and **d (0.23)**: tails beyond $z \approx 0.92$ and $z \approx 0.74$, too fat. They correspond to using too large a spread. The correct SD is that of the *proportion* (0.0154), not of a single battery (0.218).

---

## Answer key recap

| Q | Official | Topic | Answer in one line |
|---|---|---|---|
| 1 | C | Bounds on a union | $0.5 \le P(A \cup B) \le 0.9$ |
| 2 | B | Conditional probability | same numerator, same denominator |
| 3 | A | Bayes | $0.98 \cdot 0.03 / 0.035 = 0.84$ |
| 4 | C | Total probability | $P(M) = 0.38$, so $0.62$ |
| 5 | D | Independence | $0.45 = 0.9 \cdot P(M)$ |
| 6 | A | Counting | $4\binom{13}{5}/\binom{52}{5} \approx 0.00198$ |
| 7 | C | Mean and SD from a table | $E = 2$, $Var = 2a < 1$ |
| 8 | D | Linear transformation | $16 \cdot 400 = 6400$ |
| 9 | C | Binomial vs hypergeometric | with vs without replacement |
| 10 | C | Binomial variance | $36 \cdot \frac{1}{6} \cdot \frac{5}{6} = 5$ |
| 11 | B | Geometric vs binomial mean | $1/p = 100p$, $p = 0.1$ |
| 12 | A | Tail bound (Markov, AI-written) | $P \le 0.4$ |
| 13 | A | Correlation from tables | $\rho = +1$ and $-1$ |
| 14 | C | Independence in a table | conditional equal, cells not |
| 15 | A | Joint table | $0.5 - 0.2 - 0.2 = 0.1$ |
| 16 | D | CDF properties | 0, non-decreasing, levels at 1 |
| 17 | B | Uniform percentile | $-2 + 0.3 \cdot 4 = -0.8$ |
| 18 | D | Normal cut-off | $48 + 1.04 \cdot 14 \approx 62.5$ |
| 19 | B | CLT for a sum | $37{,}500 - 1.28 \cdot 353.6 \approx 37{,}047$, closest 36,676 |
| 20 | B | Normal approx. of a proportion | $1 - \Phi(1.30) \approx 0.097$ |

## Related Notes

[[Statistics A]], [[Lec_13-Exam Structure and Practice (Moed B 2023)]]
