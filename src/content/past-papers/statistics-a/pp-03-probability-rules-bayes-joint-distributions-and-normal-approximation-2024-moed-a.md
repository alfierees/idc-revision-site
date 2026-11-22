---
title: "Probability Rules, Bayes, Joint Distributions and Normal Approximation (2024 Moed A)"
type: past-paper
status: worked-solution
exam: "Statistics I for Economics, Moed A 2024"
semester: 1
year: 1
course: "Statistics A"
instructor: Asael Sklar
tags:
  - statistics-a
  - past-paper
  - worked-solution
  - multiple-choice
  - conditional-probability
  - bayes-theorem
  - expected-value
  - variance
  - joint-distribution
  - correlation
  - normal-distribution
  - central-limit-theorem
aliases:
  - Statistics A Moed A 2024
  - Stats A 2024 Moed A
  - PP03 Statistics A
subject: statistics-a
in_scope: true
---

# Probability Rules, Bayes, Joint Distributions and Normal Approximation (2024 Moed A)

> Part of: [[Statistics A]]
> **Statistics I for Economics, Moed A 2024**, Statistics A, Asael Sklar. 20 multiple-choice questions, one correct option each.
> Key concepts: [[Law of Total Probability]], [[Bayes' Theorem]], [[Inclusion-Exclusion Rule]], [[Expected Value]], [[Variance]], [[Linear Transformation]], [[Binomial Distribution]], [[Poisson Distribution]], [[Joint Distribution Table]], [[Correlation Coefficient]], [[Continuous Uniform Distribution]], [[Normal Distribution]], [[Central Limit Theorem]], [[Normal Approximation of the Binomial]]
> Builds on: [[Lec_01-Sets and the Probability Function]], [[Lec_02-Probability Function and Conditional Probability]], [[Lec_03-Conditional Probability, Bayes and Independence]], [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_07-Known Distributions]], [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]], [[Lec_10-Continuous Random Variables and the Uniform Distribution]], [[Lec_11-Uniform and Normal Distributions]], [[Lec_12-Central Limit Theorem and Normal Approximations]]

> [!info] Source and provenance
> Paper: `Moed A 2024.pdf`, with the **official letter-only answer key** printed at the end. The key has no working, so every derivation below is mine and was checked to reach the keyed letter. **All 20 keyed letters are treated as official and all 20 working-out agree with them.** The formula sheet is `Formula sheet 2024-2025.pdf` (handed out in the exam). No question is AI-solved; no tofes 0 layout.

## What this paper tests

| Block | Questions | Skill |
|---|---|---|
| Basic probability and conditioning | Q1 to Q6 | Total probability, bounds from inclusion-exclusion, disjoint events, conditional probability, Bayes, counting orderings |
| Discrete random variables | Q7 to Q12 | Expected value from a CDF, variance when adding points, linear transformations, binomial mean, Poisson PMF |
| Joint distributions | Q13 to Q15 | Conditional PMF from a table, independence versus correlation, perfect correlation |
| Continuous variables | Q16 to Q18 | Expected value by integration, uniform percentile, normal tail |
| Normal approximation | Q19 to Q20 | CLT for a sum, normal approximation of a binomial |

> [!tip] Intuition
> Almost every question is one formula from the sheet applied once. The traps are in the wording: "at least", "necessarily", "pick the closest value", and the difference between uncorrelated and independent.

---

## Q1 — Probability an athlete is excelling (total probability)

A gym teacher found out that 10% of her students are never absent, 70% are absent 1-4 times a year and the rest are absent more than 4 times a year. 30% of the never absent students are excelling athletes. 5% of the students who are absent 1-4 times a year are excelling athletes. None of the students who are absent more than 4 times a year are excelling athletes. What is the probability that a randomly chosen student is an excelling athlete?

a. 0.035  b. 0.05  c. 0.065  d. 0.1

> [!success] Answer: **C, 0.065** (official key)

The three absence groups partition the students (the rest is $1-0.10-0.70=0.20$), so the [[Law of Total Probability]] applies. Write $N$ for never absent, $S$ for absent 1-4 times, $M$ for absent more than 4 times and $A$ for excelling athlete:

$$
P(A)=P(A\mid N)P(N)+P(A\mid S)P(S)+P(A\mid M)P(M)
$$

$$
P(A)=0.30\cdot0.10+0.05\cdot0.70+0\cdot0.20=0.030+0.035+0=0.065
$$

![[PP03_q1_athlete_tree.png|600]]

The tree shows the three paths ending in "athlete"; their branch products add to the answer. See [[Tree Diagram]].

- **a (0.035)** is only the middle group's contribution; it forgets the never-absent group.
- **b (0.05)** is the conditional probability inside the middle group, not a probability over all students.
- **d (0.1)** is the share of never-absent students, an unrelated number.

---

## Q2 — Lower bounds for the intersection and union

A and B are events in the same sample space. Given $P(A)=0.7$ and $P(B)=0.6$, the probability of the intersection is at least ___ and the probability of the union is at least ___.

a. 0.3, 0.6  b. 0.3, 0.7  c. 0.6, 0.6  d. 0.6, 0.7

> [!success] Answer: **B, 0.3 and 0.7** (official key)

From [[Inclusion-Exclusion Rule]]: $P(A\cap B)=P(A)+P(B)-P(A\cup B)$.

- The union can never exceed 1, so $P(A\cap B)\ge 0.7+0.6-1=0.3$. The minimum is reached when $A\cup B=\Omega$.
- The union contains $A$, so $P(A\cup B)\ge P(A)=0.7$, and it contains $B$, so it is also at least 0.6. The larger bound, **0.7**, is the binding one. It is reached when $B\subseteq A$.

> [!example] Check
> If $B\subseteq A$ then $P(A\cap B)=0.6$ and $P(A\cup B)=0.7$. If $A\cup B=\Omega$ then $P(A\cap B)=0.3$ and $P(A\cup B)=1$. Both extremes are possible, but the union is never below 0.7 and the intersection never below 0.3.

- **a** has union 0.6, which is below $P(A)=0.7$, impossible (a union cannot be smaller than one of its parts).
- **c** and **d** claim the intersection is at least 0.6. That fails when $A\cup B=\Omega$ (intersection 0.3).

---

## Q3 — Disjoint events: range of P(B)

A and B are disjoint events. $P(A)=0.4$. The probability of B is at least ___ and at most ___.

a. 0, 0.6  b. 0, 1  c. 0.4, 0.6  d. 0.4, 1

> [!success] Answer: **A, between 0 and 0.6** (official key)

Disjoint means $A\cap B=\varnothing$, so $B\subseteq \bar A$ and $P(B)\le P(\bar A)=1-0.4=0.6$. Nothing forces $B$ to be non-empty, so $P(B)\ge0$ (take $B=\varnothing$). See [[Disjoint Sets]] and [[Complement Rule]].

- **b** allows $P(B)$ up to 1, but then $P(A\cup B)=1.4>1$, impossible.
- **c** and **d** claim $P(B)\ge0.4$, which confuses "disjoint" with "same size". $B$ could be tiny.

---

## Q4 — Which conditional probabilities are necessarily equal

$P(A\cap B)=0.1$, $P(A\cap C)=0.2$, $P(B\cap C)=0.2$. Which is necessarily true?

a. $P(C\mid A)=P(C\mid B)$
b. $P(C\mid A)=P(B\mid C)$
c. $P(A\mid C)=P(C\mid B)$
d. $P(A\mid C)=P(B\mid C)$

> [!success] Answer: **D** (official key)

Use $P(X\mid Y)=P(X\cap Y)/P(Y)$ ([[Conditional Probability]]):

$$
P(A\mid C)=\frac{P(A\cap C)}{P(C)}=\frac{0.2}{P(C)}
\qquad
P(B\mid C)=\frac{P(B\cap C)}{P(C)}=\frac{0.2}{P(C)}
$$

Same numerator and the **same denominator** $P(C)$, so they are equal whatever $P(C)$ is.

- **a**: $P(C\mid A)=0.2/P(A)$ and $P(C\mid B)=0.2/P(B)$. Different denominators, $P(A)$ and $P(B)$, which are not given.
- **b**: $0.2/P(A)$ against $0.2/P(C)$. Equal only if $P(A)=P(C)$, not given.
- **c**: $0.2/P(C)$ against $0.2/P(B)$. Equal only if $P(B)=P(C)$, not given.

> [!tip] Intuition
> Equality of conditional probabilities needs the same "given" event. Only option d conditions both on $C$, and both numerators are 0.2.

---

## Q5 — Evergreen given hardwood (Bayes)

60% of trees are evergreens. 20% of trees are hardwood. The probability an evergreen tree is hardwood is 0.3. A hardwood tree is chosen at random; what is the probability it is an evergreen?

a. 0.6  b. 0.7  c. 0.8  d. 0.9

> [!success] Answer: **D, 0.9** (official key)

Let $E$ be evergreen and $H$ hardwood. We know $P(E)=0.6$, $P(H)=0.2$, $P(H\mid E)=0.3$ and want $P(E\mid H)$. This is [[Bayes' Theorem]]:

$$
P(E\mid H)=\frac{P(H\mid E)\,P(E)}{P(H)}=\frac{0.3\cdot0.6}{0.2}=\frac{0.18}{0.2}=0.9
$$

> [!example] Table check
> Out of 1000 trees: 600 evergreen, of which 30% = 180 are hardwood. Total hardwood = 200. So 180 of 200 hardwood trees are evergreen = 0.9. See [[2x2 Probability Table]].

- **a (0.6)** is the unconditional $P(E)$; it would be right only if $E$ and $H$ were independent, but $P(H\mid E)=0.3\ne P(H)=0.2$.
- **b (0.7)** and **c (0.8)** do not come from any combination of the given numbers.

---

## Q6 — Four kids in ascending order of age

4 kids randomly form a queue. Each kid has a different age. What is the probability they form the queue in ascending order of age?

a. 1/4  b. 1/6  c. 1/12  d. 1/24

> [!success] Answer: **D, 1/24** (official key)

All orderings are equally likely, a [[Symmetrical Probability Space]]. There are $4!=24$ orderings of 4 distinct kids ([[Permutation]], [[Factorial]]), and exactly one is ascending by age:

$$
P=\frac{1}{4!}=\frac{1}{24}
$$

- **a (1/4)** is the chance the youngest kid is first only.
- **b (1/6)** would be $1/3!$: it ignores one kid.
- **c (1/12)** is $2/4!$, counting two orderings (e.g. ascending and descending), but only one ordering is ascending.

---

## Q7 — Expected value from a CDF

$X$ has the cumulative distribution: $P(X\le1)=0.2$, $P(X\le2)=0.6$, $P(X\le3)=1$. What is $E(X)$?

a. 2  b. 1.8  c. 2.2  d. 4.4

> [!success] Answer: **C, E(X) = 2.2** (official key)

Convert the CDF to a PMF by differencing: $P(X=1)=0.2$, $P(X=2)=0.6-0.2=0.4$, $P(X=3)=1-0.6=0.4$ (see [[Cumulative Distribution Function]] and [[Probability Mass Function]]).

$$
E(X)=1(0.2)+2(0.4)+3(0.4)=0.2+0.8+1.2=2.2
$$

- **a (2)** is the plain average of 1, 2, 3, ignoring the probabilities.
- **b (1.8)** is the sum of the CDF values, $0.2+0.6+1=1.8$, which is not an expected value.
- **d (4.4)** uses the CDF values as weights: $1(0.2)+2(0.6)+3(1)=4.4$. The CDF values are cumulative and sum to 1.8, not 1, so they are not probabilities of single values.

> [!warning] Trap
> Never use CDF values as weights. Option d is exactly that mistake.

---

## Q8 — Adding two extreme dogs: effect on variance

Weight of a shelter dog has expected value 25 kg and SD 15 kg. Two new dogs arrive: a 5 kg Chihuahua and a 45 kg Great Pyrenees. How does the variance change?

a. Increase  b. Decrease  c. Same  d. Not enough information

> [!success] Answer: **A, the variance will increase** (official key)

The two new dogs average $(5+45)/2=25$, so the **mean stays 25**. Their deviations from 25 are $-20$ and $+20$. The shelter's existing variance is $15^2=225$, the average squared deviation. The new dogs have squared deviations $400$ and $400$, average 400, which is **above** 225. Adding observations whose squared deviation exceeds the current average pulls the average squared deviation up. With $N$ existing dogs:

$$
\text{new variance}=\frac{225N+400+400}{N+2}>225
\quad\text{because}\quad 800>2\cdot225=450
$$

See [[Variance]] and [[Standard Deviation]].

- **b**: would need new dogs closer to the mean than typical; these are 20 kg away, further than the SD of 15.
- **c**: the variance stays the same only if the new squared deviations average exactly 225.
- **d**: the information is enough, because the mean is unchanged and the deviations are given.

> [!tip] Intuition
> Variance is the average squared distance from the mean. New points further than a typical point (20 > 15) from the mean raise it.

---

## Q9 — Variance of earnings in a roulette bet

You pay 10 shekels. A wheel is spun and you receive one quarter of the number shown. The number has expected value 24 and SD 12. What is the variance of your earnings from one play?

a. 6  b. 9  c. 36  d. 144

> [!success] Answer: **B, 9** (official key)

Let $X$ be the wheel number. Earnings are $Y=\tfrac14X-10$. By the [[Linear Transformation]] rule $\operatorname{Var}(bX+a)=b^2\operatorname{Var}(X)$, the constant $-10$ does not matter:

$$
\operatorname{Var}(Y)=\left(\tfrac14\right)^2\cdot12^2=\frac{144}{16}=9
$$

- **a (6)** is not $b^2\sigma^2$; it looks like the expected value of the quarter-payout, $24/4$, mistaken for a variance.
- **c (36)** is $144/4$: the factor $1/4$ was applied once instead of being squared to $1/16$.
- **d (144)** is the variance of the wheel number itself, ignoring the scaling by 1/4. Factors inside the variance are **squared**.

---

## Q10 — Variance of a 12-sided-die bet

You pay 5 shekels, a fair 12-sided die (faces 1 to 12) is rolled and you receive 2 times the value. What is the variance of earnings?

a. 11.92  b. 23.83  c. 35.75  d. 47.67

> [!success] Answer: **D, 47.67** (official key)

The die is the discrete uniform $X\sim U(1,12)$. From the sheet, $\operatorname{Var}(X)=\dfrac{(b-a+1)^2-1}{12}$:

$$
\operatorname{Var}(X)=\frac{12^2-1}{12}=\frac{143}{12}\approx11.92
$$

Earnings $Y=2X-5$, so

$$
\operatorname{Var}(Y)=2^2\cdot\frac{143}{12}=\frac{143}{3}\approx47.67
$$

- **a (11.92)** is $\operatorname{Var}(X)$, ignoring the factor 2.
- **b (23.83)** is $2\cdot\operatorname{Var}(X)$: the factor was not squared.
- **c (35.75)** is $3\cdot\operatorname{Var}(X)$, not a valid transformation here.

See [[Uniform Distribution]] and [[Linear Transformation]].

---

## Q11 — Expected number of delayed flights

Each pre-flight check finds a delaying mechanical issue with probability 0.01. 15 planes depart; issues are independent. What is the expected number of delayed flights?

a. 0.15  b. 0.3  c. 0.45  d. 0.6

> [!success] Answer: **A, 0.15** (official key)

The number of delayed flights is $X\sim B(15,\,0.01)$ ([[Binomial Distribution]]). The sheet gives $E(X)=np$:

$$
E(X)=15\cdot0.01=0.15
$$

Options b, c and d are $0.3=30\cdot0.01$, $0.45=45\cdot0.01$ and $0.6=60\cdot0.01$: multiples of the correct value that come from using the wrong $n$ (30, 45, 60 instead of 15).

---

## Q12 — Poisson: exactly 4 lightning strikes

Strikes occur independently at a rate of 5 per hour. What is the probability exactly 4 strikes occur in a given hour?

a. 0.075  b. 0.175  c. 0.275  d. 0.375

> [!success] Answer: **B, 0.175** (official key)

$X\sim\text{Poisson}(\lambda=5)$ for a one-hour interval ([[Poisson Distribution]]). From the sheet $P(X=k)=e^{-\lambda}\lambda^k/k!$:

$$
P(X=4)=e^{-5}\cdot\frac{5^4}{4!}=0.006738\cdot\frac{625}{24}=0.006738\cdot26.04\approx0.1755
$$

The nearest option is **0.175**. The Poisson PMF with mean 5 peaks at 4 and 5 with probability about 0.175, so 0.275 and 0.375 are larger than any single value can be, and 0.075 is too small for a value right next to the mean.

> [!tip] Intuition
> The mean is 5, so 4 is right next to the peak. A peak probability near 0.18 is expected for a Poisson with mean 5.

---

## Q13 — Conditional probability from a joint table

| | X=1 | X=2 |
|---|---|---|
| **Y=1** | 0.3 | 0.1 |
| **Y=2** | 0.4 | 0.2 |

What is $P(X=1\mid Y=2)$?

a. 0.33  b. 0.4  c. 0.57  d. 0.67

> [!success] Answer: **D, 0.67** (official key)

Restrict to the row $Y=2$: $P(Y=2)=0.4+0.2=0.6$. Then

$$
P(X=1\mid Y=2)=\frac{P(X=1,Y=2)}{P(Y=2)}=\frac{0.4}{0.6}=\frac23\approx0.67
$$

See [[Joint Distribution Table]] and [[Conditional Distribution]].

- **a (0.33)** is $P(X=2\mid Y=2)=0.2/0.6$, the other cell in the row.
- **b (0.4)** is the joint probability itself, not divided by $P(Y=2)$.
- **c (0.57)** is $0.4/0.7=P(Y=2\mid X=1)$: it conditions the wrong way round ($P(X=1)=0.7$).

---

## Q14 — Independent or correlated?

| | X=1 | X=2 | X=3 |
|---|---|---|---|
| **Y=1** | 0 | 0.2 | 0 |
| **Y=2** | 0.4 | 0 | 0.4 |

X and Y are:

a. Independent but correlated
b. Independent and uncorrelated
c. Not independent but uncorrelated
d. Not independent and correlated

> [!success] Answer: **C, not independent but uncorrelated** (official key)

**Independence test.** Under independence every cell equals the product of its marginals. The marginals are $P(X=1)=0.4$ and $P(Y=1)=0.2$, so independence would need $P(X=1,Y=1)=0.4\cdot0.2=0.08$, but the table gives 0. Not independent. (Knowing $Y=1$ forces $X=2$.)

**Covariance.**

$$
E(X)=1(0.4)+2(0.2)+3(0.4)=2.0
\qquad
E(Y)=1(0.2)+2(0.8)=1.8
$$

$$
E(XY)=(2\cdot1)(0.2)+(1\cdot2)(0.4)+(3\cdot2)(0.4)=0.4+0.8+2.4=3.6
$$

$$
\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)=3.6-2.0\cdot1.8=0
$$

Zero covariance means correlation 0: uncorrelated ([[Covariance]], [[Correlation Coefficient]]).

> [!warning] Classic trap
> Independent implies uncorrelated, but **uncorrelated does not imply independent**. Here $Y$ depends on $X$ through a symmetric pattern (the outer values of $X$ share $Y=2$, the middle one has $Y=1$), a non-linear relation that correlation cannot see. This is the same idea as [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]]'s zero-covariance-but-dependent example.

- **a** and **b** claim independence, which fails the product test.
- **d** claims correlation, but the covariance is exactly 0.

---

## Q15 — Sign and strength of the correlation

| | X=1 | X=2 |
|---|---|---|
| **Y=1** | a | 0 |
| **Y=2** | 0 | b |

with $a>0$, $b>0$. The sign of $\rho(X,Y)$ is ___ and its absolute value is ___ equal to 1.

a. Positive, necessarily
b. Positive, not necessarily
c. Negative, necessarily
d. Negative, not necessarily

> [!success] Answer: **A, positive, necessarily equal to 1** (official key)

Only two points have positive probability: $(X,Y)=(1,1)$ and $(2,2)$, with $a+b=1$. Both lie on the line $Y=X$. Since $Y=bX+a$ with slope $+1$, the sheet rule gives $\rho=+1$:

$$
\rho(X,Y)=+1\quad\text{for every }a>0,\ b>0
$$

> [!example] Explicit check
> $E(X)=E(Y)=a+2b$ and $E(XY)=a+4b$. $\operatorname{Cov}=a+4b-(a+2b)^2=\operatorname{Var}(X)$ because $Y=X$ exactly. So $\rho=\operatorname{Var}(X)/(SD(X)SD(Y))=1$.

- **b** would be right if the points could fall off a line, but with only two support points a line always fits.
- **c** and **d** have the wrong sign: larger X goes with larger Y, a positive relationship.

---

## Q16 — Expected value of a triangular density

$f(x)=2x$ for $0\le x\le1$ and 0 otherwise. What is $E(X)$?

a. 1/4  b. 1/3  c. 1/2  d. 2/3

> [!success] Answer: **D, E(X) = 2/3** (official key)

Using the sheet formula $E(X)=\int x\,f(x)\,dx$ ([[Probability Density Function]], [[Continuous Random Variable]]):

$$
E(X)=\int_0^1 x\cdot2x\,dx=2\int_0^1x^2\,dx=2\cdot\frac{1}{3}=\frac23
$$

![[PP03_q16_density_mean.png|520]]

The density rises with $x$, so most of the mass sits on the right; the balance point is to the right of the midpoint 1/2.

- **c (1/2)** is the mean of a flat $U(0,1)$, which would be correct only for a constant density.
- **b (1/3)** is $\int_0^1 x^2dx$, forgetting the factor 2 in the density.
- **a (1/4)** would be a mean skewed toward 0, the wrong direction for a density that rises with $x$.

---

## Q17 — 75th percentile of a continuous uniform

$X\sim U(2,14)$. What is the value of $X$ at the 75th percentile?

a. 11  b. 10  c. 9  d. 8

> [!success] Answer: **A, 11** (official key)

The CDF is $F(x)=\dfrac{x-2}{14-2}=\dfrac{x-2}{12}$. Set it to 0.75 ([[Percentile]], [[Continuous Uniform Distribution]]):

$$
\frac{x-2}{12}=0.75\ \Rightarrow\ x=2+0.75\cdot12=11
$$

Equivalently, a quarter of the range lies above the 75th percentile: $14-0.25\cdot12=11$.

- **b (10)** is the 2/3 point.
- **c (9)** is $2+7$, the 58% point; it comes from using $0.75\cdot12=9$ without adding the starting point 2.
- **d (8)** is the 50th percentile, $(2+14)/2$, the median.

---

## Q18 — Normal tail beyond 60 cm

Tail length is $N(48,12^2)$. What is the probability a random Labrador has a tail longer than 60 cm? (closest value)

a. 0.04  b. 0.08  c. 0.16  d. 0.24

> [!success] Answer: **C, 0.16** (official key)

Standardize ([[Standardization]], [[Normal Distribution]], [[Z Table]]):

$$
z=\frac{60-48}{12}=1
$$

$$
P(X>60)=P(Z>1)=1-0.8413=0.1587\approx0.16
$$

![[PP03_q18_normal_tail.png|560]]

> [!tip] Intuition
> The empirical rule says about 68% lies within one SD of the mean, so about 32% lies outside, split evenly: about 16% in each tail.

- **a (0.04)** is near $P(Z>1.75)$, a tail beyond about 1.75 SD.
- **b (0.08)** is near $P(Z>1.4)$.
- **d (0.24)** is near $P(Z>0.7)$, too much mass for a cutoff a full SD out.

---

## Q19 — Total weight of 40 cookies (CLT)

A cookie's weight has expected value 11 g and **variance** 6. A basket has 40 randomly selected cookies. What is the probability that the basket weighs less than 420 g? (closest value)

a. 0.1  b. 0.2  c. 0.3  d. 0.4

> [!success] Answer: **A, 0.1** (official key)

By the [[Central Limit Theorem]], the sum $S$ of 40 independent cookies is approximately normal with

$$
E(S)=40\cdot11=440
\qquad
\operatorname{Var}(S)=40\cdot6=240
\qquad
SD(S)=\sqrt{240}\approx15.49
$$

$$
z=\frac{420-440}{15.49}\approx-1.29
\qquad
P(S<420)=P(Z<-1.29)\approx0.098\approx0.1
$$

![[PP03_q19_sum_normal.png|560]]

> [!warning] Trap
> The question gives the **variance** (6), not the SD. Using 6 as the SD would give $SD(S)=\sqrt{40}\cdot6\approx37.9$ and $z=-0.53$, probability 0.30, which is option c.

- **b (0.2)** matches $z\approx-0.84$, an SD of about 24, which is not what the data give.
- **c (0.3)** is the SD-versus-variance slip above.
- **d (0.4)** is close to the median ($z\approx-0.25$), but 420 is more than a full SD below the mean.

---

## Q20 — 10 or fewer sixes in 50 dice (binomial by normal)

Tammy rolls 50 fair six-sided dice. What is the probability 10 dice or fewer land on 6? (closest value)

a. 0.44  b. 0.54  c. 0.64  d. 0.74

> [!success] Answer: **D, 0.74** (official key)

$X\sim B(50,\tfrac16)$ ([[Binomial Distribution]]). The sheet gives

$$
E(X)=np=\frac{50}{6}\approx8.33
\qquad
\operatorname{Var}(X)=np(1-p)=50\cdot\frac16\cdot\frac56\approx6.94
\qquad
SD\approx2.64
$$

With $n=50$ the distribution is approximately normal ([[Normal Approximation of the Binomial]], [[Central Limit Theorem]]). Standardizing the cutoff 10:

$$
z=\frac{10-8.33}{2.64}\approx0.63
\qquad
P(X\le10)\approx P(Z\le0.63)\approx0.74
$$

![[PP03_q20_binomial_normal.png|600]]

> [!note] Continuity correction and the exact value
> Using the continuity correction ($10.5$ instead of 10) gives $z=0.82$ and about $0.79$. The exact binomial probability is about $0.80$. Either way the closest option is still **0.74**, so the answer is robust. The exam's "pick the closest value" wording is what makes d correct regardless of the method.

- **a (0.44)** and **b (0.54)** are at or below about 0.5, which cannot be right: the cutoff 10 is above the mean 8.33, so more than half the probability lies at or below it.
- **c (0.64)** corresponds to a cutoff only about 0.36 SD above the mean, but 10 is about 0.63 SD above it.

---

## Answer key recap

| Q | Key | Topic | One-line reason |
|---|---|---|---|
| 1 | C | Total probability | 0.03 + 0.035 + 0 = 0.065 |
| 2 | B | Bounds | $P(A\cap B)\ge0.3$, $P(A\cup B)\ge0.7$ |
| 3 | A | Disjoint | $0\le P(B)\le1-0.4$ |
| 4 | D | Conditional | Same denominator $P(C)$, same numerator 0.2 |
| 5 | D | Bayes | $0.3\cdot0.6/0.2=0.9$ |
| 6 | D | Orderings | $1/4!$ |
| 7 | C | E from CDF | PMF 0.2, 0.4, 0.4 gives 2.2 |
| 8 | A | Variance | New deviations 20 exceed SD 15 |
| 9 | B | Linear transform | $(1/4)^2\cdot144=9$ |
| 10 | D | Linear transform | $4\cdot143/12=47.67$ |
| 11 | A | Binomial mean | $15\cdot0.01$ |
| 12 | B | Poisson | $e^{-5}5^4/4!=0.175$ |
| 13 | D | Conditional PMF | 0.4/0.6 |
| 14 | C | Independence | Dependent, covariance 0 |
| 15 | A | Correlation | Points on $Y=X$, so $\rho=+1$ |
| 16 | D | Continuous E | $\int2x^2=2/3$ |
| 17 | A | Percentile | $2+0.75\cdot12=11$ |
| 18 | C | Normal tail | $P(Z>1)=0.16$ |
| 19 | A | CLT sum | $z=-1.29$, 0.098 |
| 20 | D | Normal approx. | $z=0.63$, 0.74 |

## Related notes

- [[Statistics A]]
- Teaching notes: [[Lec_03-Conditional Probability, Bayes and Independence]], [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_09-Covariance and Correlation]], [[Lec_12-Central Limit Theorem and Normal Approximations]]
- Practice: [[PS_03-Conditional Probability, Drug Dog, Bayes & Independence]], [[PS_06-Binomial Sampling, Gambles and Linear Transformations]], [[PS_07-Geometric, Hypergeometric and Poisson Distributions]], [[PS_09-Two Bags, Joint Distributions, Covariance and Correlation]], [[PS_10-Continuous Random Variables and Density Functions]], [[PS_11-Normal Distribution and National Exam Scores]]
