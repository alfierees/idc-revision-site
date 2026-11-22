---
title: "Moed B 2024 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Moed B 2024"
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
  - bayes-theorem
  - expected-value
  - joint-distribution
  - normal-distribution
  - central-limit-theorem
aliases:
  - Statistics A Moed B 2024
  - Stats A 2024 B
  - PP04 Statistics A
subject: statistics-a
in_scope: true
---

# Moed B 2024 — Worked Solutions

> Part of: [[Statistics A]]
> **Moed B 2024** — Statistics A, Asael Sklar. 20 multiple-choice questions with an official letter-only answer key.
> Key concepts: [[Conditional Probability]], [[Bayes' Theorem]], [[Independence]], [[Disjoint Sets]], [[Expected Value]], [[Variance]], [[Hypergeometric Distribution]], [[Geometric Distribution]], [[Joint Distribution Table]], [[Correlation Coefficient]], [[Probability Density Function]], [[Continuous Uniform Distribution]], [[Normal Distribution]], [[Central Limit Theorem]], [[Normal Approximation of the Binomial]]
> Builds on: [[Lec_01-Sets and the Probability Function]], [[Lec_03-Conditional Probability, Bayes and Independence]], [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_07-Known Distributions]], [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]], [[Lec_10-Continuous Random Variables and the Uniform Distribution]], [[Lec_11-Uniform and Normal Distributions]], [[Lec_12-Central Limit Theorem and Normal Approximations]]

> [!info] Official key, working written here
> The answer key at the end of the paper gives **letters only**. Every letter below is the official one. The working is written for this note, and every working reaches the keyed letter. Where the paper has a typo, it is flagged in a `> [!warning]`.

> [!success] Answer key (official)
> | Q | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
> |---|---|---|---|---|---|---|---|---|---|----|
> | Ans | A | C | A | A | B | D | D | C | A | D |
>
> | Q | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
> |---|----|----|----|----|----|----|----|----|----|----|
> | Ans | B | A | C | B | A | A | C | C | C | D |

---

## What this paper tests

> [!info] Course order, left to right
> 1. **Q1 to Q5** — basic probability: [[Law of Total Probability]], union bounds, disjoint versus independent, independence, and [[Bayes' Theorem]].
> 2. **Q6, Q11, Q12** — counting and named discrete distributions: [[Combination]], [[Hypergeometric Distribution]], [[Geometric Distribution]].
> 3. **Q7 to Q10** — [[Expected Value]] and [[Variance]] of discrete variables and of [[Linear Transformation|linear transformations]] (bets and gambles).
> 4. **Q13 to Q15** — a [[Joint Distribution Table]]: conditional expectation, independence, and correlation from [[Variance of a Sum]].
> 5. **Q16, Q17** — continuous variables: area under a [[Probability Density Function]], and a percentile of a uniform.
> 6. **Q18 to Q20** — the [[Normal Distribution]], the [[Central Limit Theorem]] for an average, and the [[Normal Approximation of the Binomial]] for a proportion.
>
> The formula sheet for 2024-2025 is allowed in the exam. Each question below names the formula it uses.

---

## Q1 — Woman who studies liberal arts

A university has 40% women. 30% of students study social sciences, 40% exact sciences, the rest liberal arts. Each student studies one topic. 50% of social sciences students and 50% of exact sciences students are women. What is the probability that a random student is a woman studying liberal arts?

- a. 0.05
- b. 0.25
- c. 0.5
- d. 0.83

Liberal arts is the rest: $1-0.30-0.40=0.30$. The three topics partition the students, so total women is the sum over topics of $P(\text{woman}\cap\text{topic})$, with $P(\text{woman}\cap T)=P(\text{woman}\mid T)\cdot P(T)$. This is the [[Law of Total Probability]].

| Topic | $P(T)$ | $P(\text{woman}\mid T)$ | $P(\text{woman}\cap T)$ |
|---|---|---|---|
| Social sciences | 0.30 | 0.5 | 0.15 |
| Exact sciences | 0.40 | 0.5 | 0.20 |
| Liberal arts | 0.30 | unknown | **?** |

Women overall: $0.40=0.15+0.20+P(\text{woman}\cap\text{liberal arts})$, so the unknown cell is $0.40-0.35=0.05$.

> [!success] Answer — **A. 0.05**

- **b (0.25)** and **c (0.5)** are not any cell of the table: women are at most 0.40 of all students, and the other two topics already use 0.35 of that.
- **d (0.83)** is $0.25/0.30$, which does not correspond to anything in the data.

> [!warning] Trap
> The 0.05 is a **joint** probability (woman and liberal arts among all students). The share of women within liberal arts would be $0.05/0.30\approx0.17$.

---

## Q2 — Bounds on a union

$P(A)=0.1$ and $P(B)=0.8$. $P(A\cup B)$ is at least ___ and at most ___.

- a. 0.1, 0.9
- b. 0.1, 1
- c. 0.8, 0.9
- d. 0.8, 1

From the formula sheet:

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
$$

**Lower bound.** A union contains each of its parts ([[Monotonicity of Probability]]), so $P(A\cup B)\ge P(B)=0.8$. This is reached when $A\subseteq B$.

**Upper bound.** $P(A\cap B)\ge 0$ gives $P(A\cup B)\le 0.1+0.8=0.9$. This is reached when $A$ and $B$ are [[Disjoint Sets|disjoint]]. (The bound 1 is never needed because 0.9 is already below it.)

> [!success] Answer — **C. 0.8, 0.9**

- **a** has the wrong lower bound: 0.1 is only $P(A)$, but the union also contains all of $B$.
- **b** has both bounds wrong, and 1 cannot be reached since $0.1+0.8<1$.
- **d** has the right lower bound but 1 is too high: even with no overlap the union is only 0.9.

---

## Q3 — Union equals the sum

$P(A),P(B)>0$ and $P(A\cup B)=P(A)+P(B)$. Events $A$ and $B$ are therefore:

- a. Disjoint
- b. Independent
- c. Both disjoint and independent
- d. Not disjoint and not independent

Compare with $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. Equality with the sum forces $P(A\cap B)=0$, so the events are **disjoint** (up to probability-zero overlap).

Are they also independent? Independence needs $P(A\cap B)=P(A)\cdot P(B)$. Here the left side is 0 but the right side is a product of two positive numbers, so it is positive. They are **not** independent.

> [!success] Answer — **A. Disjoint**

- **b** and **c** claim independence, which fails because $0\ne P(A)P(B)>0$.
- **d** says not disjoint, which contradicts $P(A\cap B)=0$.

> [!tip] Intuition
> Disjoint events with positive probability are strongly **dependent**: if $A$ happens, $B$ cannot, so $P(B\mid A)=0\neq P(B)$. See [[Independence]] and [[Disjoint Sets]].

---

## Q4 — Not rainy and traffic jam, independent events

60% of days are rainy. Given rain, the probability of a traffic jam is 50%. If "rainy day" and "traffic jam" are independent, what is the probability that a random day is not rainy and has a traffic jam?

- a. 20%
- b. 40%
- c. 50%
- d. 70%

Independence means $P(J\mid R)=P(J)$, so $P(J)=0.5$. Independence also passes to the complement, so

$$
P(\bar R\cap J)=P(\bar R)\cdot P(J)=0.4\cdot 0.5=0.2
$$

> [!success] Answer — **A. 20%**

- **b (40%)** is $P(\bar R)$ alone, forgetting the traffic-jam factor.
- **c (50%)** is $P(J)$ alone, forgetting that the day must be non-rainy.
- **d (70%)** is not produced by any sensible combination of 0.6, 0.4 and 0.5.

---

## Q5 — Broken leg given surgery

25% of people break a leg bone. Given a broken leg bone, the probability of orthopedic surgery is 0.1. 20% of people need orthopedic surgery for any reason. What is the probability that a person broke a leg bone given they had orthopedic surgery?

- a. 0.0625
- b. 0.125
- c. 0.25
- d. 0.5

Let $L$ be "broke a leg bone" and $S$ "had surgery". Given: $P(L)=0.25$, $P(S\mid L)=0.1$, $P(S)=0.2$. [[Bayes' Theorem]] from the formula sheet:

$$
P(L\mid S)=\frac{P(S\mid L)\cdot P(L)}{P(S)}=\frac{0.1\cdot0.25}{0.2}=\frac{0.025}{0.2}=0.125
$$

> [!success] Answer — **B. 0.125**

- **a (0.0625)** is half the correct value. It is what you get by dividing by 0.4 instead of 0.2.
- **c (0.25)** is the prior $P(L)$. It would be right only if surgery were independent of a broken leg.
- **d (0.5)** would need $P(S)$ to be 0.05.

> [!tip] Intuition
> The posterior 0.125 is **below** the prior 0.25 because leg breaks account for only $0.025$ of the $0.20$ of people who have surgery. Most surgeries are for other reasons.

---

## Q6 — Three balls, all above 5

10 balls numbered 1 to 10 are in a bag. Draw 3 without replacement. What is the probability that all have numbers greater than 5?

- a. 1/3
- b. 1/5
- c. 1/6
- d. 1/12

This is a [[Symmetrical Probability Space]] of unordered draws, $P(A)=|A|/|\Omega|$. There are $\binom{10}{3}=120$ equally likely sets, and $\binom{5}{3}=10$ of them use only the five balls 6 to 10.

$$
P=\frac{\binom{5}{3}}{\binom{10}{3}}=\frac{10}{120}=\frac1{12}
$$

Check with sequential draws: $\frac{5}{10}\cdot\frac{4}{9}\cdot\frac{3}{8}=\frac{60}{720}=\frac1{12}$.

> [!success] Answer — **D. 1/12**

- **a (1/3), b (1/5), c (1/6)** are all too large. Each draw has to be above 5, and the chance shrinks at every step: $\frac5{10},\frac49,\frac38$. With replacement the answer would be $0.5^3=1/8$, which is also not an option.

---

## Q7 — Unknown value from the mean

| $X_i$ | 1 | 2 | $a$ |
|---|---|---|---|
| $P(X=X_i)$ | 0.25 | 0.3 | 0.45 |

$E(X)=4$. What is $a$?

- a. 4
- b. 5
- c. 6
- d. 7

$E(X)=\sum x_i\,P(X=x_i)$, so

$$
4=1(0.25)+2(0.3)+a(0.45)=0.25+0.6+0.45a
$$

$$
0.45a=3.15\quad\Rightarrow\quad a=7
$$

> [!success] Answer — **D. 7**

- **a (4)** gives $E(X)=0.85+1.8=2.65$.
- **b (5)** gives $0.85+2.25=3.10$.
- **c (6)** gives $0.85+2.70=3.55$.

None of these reaches 4. Only $a=7$ gives $0.85+3.15=4$.

---

## Q8 — Carnival game earnings

Each toss costs \$2. Bucket A: probability 50%, prize \$2. Bucket B: 30%, prize \$6. Bucket C: 20%, prize \$10. Expected value of the **earnings** from one play?

- a. 0.4
- b. 2.4
- c. 2.8
- d. 4.8

Earnings are prize minus the \$2 cost, so the outcomes are $0$, $4$ and $8$:

| Bucket | Probability | Earnings | Contribution |
|---|---|---|---|
| A | 0.5 | $2-2=0$ | 0 |
| B | 0.3 | $6-2=4$ | 1.2 |
| C | 0.2 | $10-2=8$ | 1.6 |

$$
E(\text{earnings})=0+1.2+1.6=2.8
$$

Equivalent shortcut: $E(\text{prize})=1+1.8+2=4.8$, and subtracting the cost, $E(\text{prize}-2)=E(\text{prize})-2=2.8$ ([[Linear Transformation]] rule $E(X+a)=E(X)+a$).

> [!success] Answer — **C. 2.8**

- **d (4.8)** is the expected **prize**: it forgets the \$2 entry fee.
- **a (0.4)** and **b (2.4)** do not match the earnings of any combination of the three outcomes.

---

## Q9 — Roulette bet

Benjamin charges 15 shekels and pays you "one third (1/4)" of the number on the wheel. $E(\text{number})=24$, $SD=12$. Expected value of your earnings from one play?

- a. -9
- b. -6
- c. 6
- d. 10

> [!warning] Typo in the paper
> The text says "one third (1/4)". With $\tfrac13$ the answer would be $24/3-15=-7$, which is not an option. With $\tfrac14$ it is $-9$, which **is** option a, matching the official key. So the intended payout is **one quarter**.

Let $N$ be the number. Earnings are $\tfrac14N-15$. By the linear rule $E(bX+a)=b\,E(X)+a$:

$$
E\!\left(\tfrac14N-15\right)=\tfrac14\cdot24-15=6-15=-9
$$

The standard deviation (12) is a distractor: expected value does not depend on it.

> [!success] Answer — **A. -9**

- **c (6)** is the expected payout, forgetting the 15 shekel price.
- **b (-6)** and **d (10)** do not follow from $\tfrac14\cdot24$ and the price of 15.

---

## Q10 — Number of jobs

Probability of job 1 is 0.3, of job 2 is 0.5, independent. $X$ is the number of jobs Yuval gets. $Var(X)$?

- a. 0.21
- b. 0.25
- c. 0.37
- d. 0.46

$X=X_1+X_2$ with independent [[Bernoulli Distribution|Bernoulli]] variables. Independence means $Cov(X_1,X_2)=0$, so $Var(X)=Var(X_1)+Var(X_2)$ ([[Variance of a Sum]]), and $Var=p(1-p)$:

$$
Var(X)=0.3\cdot0.7+0.5\cdot0.5=0.21+0.25=0.46
$$

Direct check: $P(X=0)=0.7\cdot0.5=0.35$, $P(X=1)=0.3\cdot0.5+0.7\cdot0.5=0.5$, $P(X=2)=0.15$. $E(X)=0.8$, $E(X^2)=0.5+0.6=1.1$, and $Var=1.1-0.64=0.46$.

> [!success] Answer — **D. 0.46**

- **a (0.21)** is the variance of job 1 alone.
- **b (0.25)** is the variance of job 2 alone.
- **c (0.37)** does not match any combination of the two variances.

> [!warning] Trap
> $X$ is **not** binomial because the two probabilities differ (the binomial needs a common $p$).

---

## Q11 — Damaged cars in an inspection

50 cars: 40 perfect, 10 damaged. 10 cars are chosen at random. Probability that exactly 3 are damaged?

- a. 0.12
- b. 0.22
- c. 0.32
- d. 0.42

Sampling without replacement from a finite population with a known number of "successes" is the [[Hypergeometric Distribution]], $X\sim HG(N=50,D=10,n=10)$:

$$
P(X=3)=\frac{\binom{10}{3}\binom{40}{7}}{\binom{50}{10}}
$$

Numerically $\binom{10}{3}=120$, $\binom{40}{7}=18{,}643{,}560$, $\binom{50}{10}=10{,}272{,}278{,}170$, giving $\approx0.2178$.

> [!success] Answer — **B. 0.22**

- **a, c, d** are other decimals that the hypergeometric formula does not produce. A binomial $B(10,0.2)$ would give $P(X=3)\approx0.2013$, close to b, but the draws are without replacement so the hypergeometric is the right model.

> [!tip] Intuition
> The expected number damaged is $10\cdot\frac{10}{50}=2$, so 3 is slightly above the mean and has a probability a little over one fifth.

---

## Q12 — Shots until a bullseye

Tim shoots until he hits a bullseye. $p=0.01$ per shot, independent. Expected number of shots?

- a. 100
- b. 40
- c. 20
- d. 5

The number of tries until the first success is [[Geometric Distribution|geometric]], $X\sim G(p)$, with $E(X)=1/p$:

$$
E(X)=\frac1{0.01}=100
$$

> [!success] Answer — **A. 100**

- **b, c, d** would be right only for much larger success probabilities (0.025, 0.05 and 0.2). A success rate of 1 in 100 needs about 100 tries.

---

## Q13 — Conditional expectation from a joint table

| | $X=1$ | $X=2$ |
|---|---|---|
| $Y=1$ | 0.3 | 0.1 |
| $Y=2$ | 0.4 | 0.2 |

> [!warning] Typo in the paper
> The question says "given that $Y=1$ (i.e., $E(X\mid Y=2)$)". The two parts disagree. Computing for $Y=2$ gives $4/3\approx1.33$, which is not an option. Computing for $Y=1$ gives **1.25**, which is option c and matches the key. So the intended quantity is $E(X\mid Y=1)$.

$P(Y=1)=0.3+0.1=0.4$. Conditional distribution ([[Conditional Distribution]]), $P(X=x\mid Y=1)=P(X=x,Y=1)/P(Y=1)$:

$$
P(X=1\mid Y=1)=\frac{0.3}{0.4}=0.75,\qquad P(X=2\mid Y=1)=\frac{0.1}{0.4}=0.25
$$

$$
E(X\mid Y=1)=1(0.75)+2(0.25)=1.25
$$

> [!success] Answer — **C. 1.25**

- **a (0.75)** is only $P(X=1\mid Y=1)$, not the weighted average.
- **b (1)** is the smallest value of $X$.
- **d (1.5)** is the midpoint of 1 and 2, which assumes equal weights.

See [[Conditional Expected Value]].

---

## Q14 — Independent or correlated?

| | $X=1$ | $X=2$ |
|---|---|---|
| $Y=1$ | 0.3 | 0.45 |
| $Y=2$ | 0.1 | 0.15 |

Are $X$ and $Y$:

- a. Independent but correlated
- b. Independent and uncorrelated
- c. Not independent but uncorrelated
- d. Not independent and correlated

Marginals: $P(X=1)=0.4$, $P(X=2)=0.6$, $P(Y=1)=0.75$, $P(Y=2)=0.25$. Test every cell for $P(X=x,Y=y)=P(X=x)P(Y=y)$ ([[Independent Random Variables]]):

| Cell | Joint | Product of marginals |
|---|---|---|
| $(1,1)$ | 0.3 | $0.4\cdot0.75=0.3$ |
| $(2,1)$ | 0.45 | $0.6\cdot0.75=0.45$ |
| $(1,2)$ | 0.1 | $0.4\cdot0.25=0.1$ |
| $(2,2)$ | 0.15 | $0.6\cdot0.25=0.15$ |

All four match, so $X$ and $Y$ are **independent**. Independence implies $Cov(X,Y)=0$, hence correlation 0, so they are also **uncorrelated**. Check: $E(X)=1.6$, $E(Y)=1.25$, $E(XY)=0.3+0.9+0.2+0.6=2.0=1.6\cdot1.25$, so $Cov=0$.

> [!success] Answer — **B. Independent and uncorrelated**

- **a** is impossible: independent variables always have zero covariance.
- **c** and **d** claim dependence, but every cell factorizes.

> [!tip] Intuition
> Each row has the same ratio $0.3:0.45=0.1:0.15=2:3$, so knowing $Y$ tells you nothing about $X$.

---

## Q15 — Correlation from the variance of a sum

$Var(X)=16$, $Var(Y)=25$, $Var(X+Y)=51$. Correlation of $X$ and $Y$?

- a. 0.25
- b. 0.5
- c. 0.75
- d. 1

From the formula sheet, $Var(X+Y)=Var(X)+Var(Y)+2\,Cov(X,Y)$:

$$
51=16+25+2\,Cov(X,Y)\quad\Rightarrow\quad Cov(X,Y)=5
$$

$$
\rho(X,Y)=\frac{Cov(X,Y)}{SD(X)\cdot SD(Y)}=\frac{5}{4\cdot5}=0.25
$$

> [!success] Answer — **A. 0.25**

- **b (0.5)** would need $Cov=10$ and $Var(X+Y)=61$ (it is also what you get by forgetting the factor 2).
- **c (0.75)** would need $Cov=15$.
- **d (1)** is a perfect positive line, which would give $SD(X+Y)=4+5=9$, so $Var(X+Y)=81$.

> [!warning] Trap
> Forgetting the factor 2 gives $Cov=10$ and the wrong answer 0.5.

---

## Q16 — Probability under a cubic-ish density

$f(x)=3x^2$ on $0\le x\le1$, and 0 otherwise. $P(X<0.7)$?

- a. 0.343
- b. 0.443
- c. 0.543
- d. 0.643

For a [[Probability Density Function]], probability is area:

$$
P(X<0.7)=\int_0^{0.7}3x^2\,dx=\left[x^3\right]_0^{0.7}=0.7^3=0.343
$$

Sanity check: the full area is $1^3=1$, as a density requires.

![[PP04_q16_cubic_density_area.png|640]]

The shaded area under $3x^2$ up to 0.7 is 0.343. The density is small near 0 and large near 1, so less than half of the mass lies below 0.7 (the median is $0.5^{1/3}\approx0.79$).

> [!success] Answer — **A. 0.343**

- **b, c, d** are not the integral. A uniform on $[0,1]$ would give 0.7, but this density is not flat, so the mass sits to the right.

---

## Q17 — 75th percentile of a uniform

$X\sim U(5,13)$. Value of $X$ at the 75th percentile?

- a. 8
- b. 9
- c. 11
- d. 12

The uniform CDF on $[a,b]$ is $F(x)=\frac{x-a}{b-a}$. The 75th percentile $C_{0.75}$ solves $F(C)=0.75$:

$$
\frac{C-5}{8}=0.75\quad\Rightarrow\quad C=5+6=11
$$

> [!success] Answer — **C. 11**

- **a (8)** is the 37.5th percentile.
- **b (9)** is the median $(5+13)/2$, the 50th percentile.
- **d (12)** is the 87.5th percentile.

See [[Percentile]] and [[Continuous Uniform Distribution]].

---

## Q18 — Barista under 5 minutes

Time to make a coffee is normal with mean 4 and standard deviation 1.5 minutes. $P(\text{time}<5)$ (closest value)?

- a. 0.25
- b. 0.5
- c. 0.75
- d. 1

[[Standardization]]: $X\sim N(4,1.5^2)$, so

$$
z=\frac{5-4}{1.5}=0.67,\qquad P(X<5)=P(Z<0.67)\approx0.749
$$

(The exact value for $z=2/3$ is 0.7475.) The closest option is 0.75.

![[PP04_q18_barista_normal.png|640]]

The shaded area is everything left of 5 minutes: the whole left half plus the slice between the mean 4 and 5.

> [!success] Answer — **C. 0.75**

- **b (0.5)** is the probability below the mean 4, not below 5.
- **a (0.25)** is the probability above roughly $z=0.67$, the wrong tail.
- **d (1)** is impossible: a normal never reaches probability 1 at a finite point, and 5 is only 0.67 standard deviations above the mean.

---

## Q19 — Average number of nails

Nails per packet: expected value 100, variance 5. A carpenter buys 50 randomly chosen packets. $P(\text{average}>99.5)$ (closest value)?

- a. 0.88
- b. 0.91
- c. 0.94
- d. 0.99

By the [[Central Limit Theorem]], the [[Sample Average]] of $n=50$ packets is approximately normal with mean $\mu=100$ and variance $\sigma^2/n$:

$$
\bar X\sim N\!\left(100,\ \frac{5}{50}\right)=N(100,\,0.1),\qquad SD(\bar X)=\sqrt{0.1}\approx0.316
$$

$$
z=\frac{99.5-100}{0.316}\approx-1.58
$$

$$
P(\bar X>99.5)=P(Z>-1.58)=P(Z<1.58)\approx0.943
$$

![[PP04_q19_nails_average.png|640]]

The shaded region is everything to the right of 99.5. The cutoff is 1.58 standard errors below the centre, so only the small left tail is left out.

> [!success] Answer — **C. 0.94**

- **a (0.88)** and **b (0.91)** correspond to $z\approx1.2$ and $1.35$, smaller than the true 1.58.
- **d (0.99)** would need $z\approx2.3$.

> [!warning] Trap
> The standard deviation of one packet is $\sqrt5\approx2.24$. Using it instead of the **standard error** $\sqrt{5/50}$ gives $z=-0.22$ and probability about 0.59.

---

## Q20 — Cellphones breaking within 3 years

85% of a manufacturer's phones break within 3 years. A company buys 100. $P(\text{more than 90\% break})$ (closest value)?

- a. 0.02
- b. 0.04
- c. 0.06
- d. 0.08

Let $\hat p$ be the [[Sample Proportion]] of broken phones. By the [[Normal Approximation of the Binomial]] (both $np=85$ and $n(1-p)=15$ are large enough for the lecture's rule of thumb), with $p=0.85$ and $n=100$:

$$
E(\hat p)=0.85,\qquad SD(\hat p)=\sqrt{\frac{0.85\cdot0.15}{100}}=\sqrt{0.001275}\approx0.0357
$$

$$
z=\frac{0.90-0.85}{0.0357}\approx1.40,\qquad P(\hat p>0.90)=1-P(Z<1.40)=1-0.9192=0.0808
$$

Equivalent count version: $X\sim B(100,0.85)$, $\mu=85$, $\sigma=3.57$, and $P(X>90)$ gives the same $z=1.40$.

![[PP04_q20_phone_proportion.png|640]]

The shaded region is the right tail beyond 0.90.

> [!success] Answer — **D. 0.08**

- **a (0.02)**, **b (0.04)**, **c (0.06)** are smaller tail areas, corresponding to $z$ values of about 2.05, 1.75 and 1.55.

> [!warning] Continuity correction
> The lecture uses the plain approximation with no continuity correction ([[Lec_12-Central Limit Theorem and Normal Approximations]]), which gives 0.08 as the key says. A continuity-corrected value (treating "more than 90" as 90.5 or more, $z\approx1.54$) would give about 0.06, option c. The official key is D, so follow the course method.

---

## One-page recap

| Q | Tool | Key step | Answer |
|---|---|---|---|
| 1 | [[Law of Total Probability]] | $0.40-0.15-0.20$ | A (0.05) |
| 2 | Union bounds | $\max=0.8$, $\min(1,0.1+0.8)=0.9$ | C |
| 3 | Disjoint vs independent | $P(A\cap B)=0\ne P(A)P(B)$ | A |
| 4 | Independence | $0.4\cdot0.5$ | A (20%) |
| 5 | [[Bayes' Theorem]] | $\frac{0.1\cdot0.25}{0.2}$ | B (0.125) |
| 6 | [[Combination]] | $\binom53/\binom{10}3$ | D (1/12) |
| 7 | [[Expected Value]] | $0.85+0.45a=4$ | D ($a=7$) |
| 8 | Expected value minus fee | $0.3(4)+0.2(8)$ | C (2.8) |
| 9 | Linear transformation | $24/4-15$ | A (-9) |
| 10 | Variance of independent sum | $0.21+0.25$ | D (0.46) |
| 11 | [[Hypergeometric Distribution]] | $\binom{10}3\binom{40}7/\binom{50}{10}$ | B (0.22) |
| 12 | [[Geometric Distribution]] | $1/p$ | A (100) |
| 13 | Conditional expectation | $1(0.75)+2(0.25)$ | C (1.25) |
| 14 | Joint table independence | every cell = product of marginals | B |
| 15 | [[Variance of a Sum]] | $Cov=5$, $\rho=5/20$ | A (0.25) |
| 16 | Integrate the density | $0.7^3$ | A (0.343) |
| 17 | Uniform percentile | $5+0.75\cdot8$ | C (11) |
| 18 | Standardize | $z=0.67$ | C (0.75) |
| 19 | CLT, average | $SE=\sqrt{5/50}$, $z=-1.58$ | C (0.94) |
| 20 | Normal approximation | $z=1.40$ | D (0.08) |

## Related notes

- [[Statistics A]]
- Problem sets: [[PS_02-Probability and Conditional Probability]], [[PS_03-Conditional Probability, Drug Dog, Bayes & Independence]], [[PS_06-Binomial Sampling, Gambles and Linear Transformations]], [[PS_07-Geometric, Hypergeometric and Poisson Distributions]], [[PS_09-Two Bags, Joint Distributions, Covariance and Correlation]], [[PS_10-Continuous Random Variables and Density Functions]], [[PS_11-Normal Distribution and National Exam Scores]], [[PS_12-Central Limit Theorem, Sample Averages and Proportions]]
