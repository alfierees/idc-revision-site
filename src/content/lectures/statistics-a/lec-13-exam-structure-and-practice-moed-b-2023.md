---
title: "Lecture 13: Exam Structure and In-Class Practice (Moed B 2023)"
semester: 1
year: 1
course: "Statistics A"
lecture: 13
tags:
  - statistics-a
  - exam-prep
  - exam-structure
  - past-paper-practice
  - conditional-probability
  - bayes-theorem
  - independence
  - combinatorics
  - expected-value
  - variance
  - poisson-distribution
  - covariance
  - correlation
  - continuous-random-variable
  - uniform-distribution
  - normal-distribution
  - central-limit-theorem
subject: statistics-a
in_scope: true
---

# Lecture 13: Exam Structure and In-Class Practice (Moed B 2023)

> Part of: [[Statistics A]]
> Key concepts: [[Conditional Probability]], [[Bayes' Theorem]], [[Independence]], [[Linear Transformation]], [[Poisson Distribution]], [[Covariance]], [[Correlation Coefficient]], [[Probability Density Function]], [[Continuous Uniform Distribution]], [[Standardization]], [[Central Limit Theorem]], [[Z Table]]

Instructor: Asael Sklar. This is the **revision class**: the first half explains what the exam looks like and how many questions each topic gets, the second half works through 20 real multiple-choice questions from **Moed B 2023** (the second exam sitting) on the board. Every earlier lecture is being tested, so this note doubles as a map of the whole course: each question below is tagged with the lecture where its method was taught.

> [!note] Source
> Class 13 deck (slides 1 to 242, animation builds collapsed; the title slide says "Class 12" but this is Class 13). Text and equations were read from the slide XML, including the OMML equations. Slides 1 and 242 are picture-only (slide 242 is a cartoon, not interpreted). Question 12 is skipped in the deck. Two scatterplots (Question 13) are slide images, kept as figures.
> **Notation:** the deck sometimes writes a conditional probability with a comma, $P(A,B)$ meaning $P(A\mid B)$. This note writes $P(A\mid B)$ throughout. Reading it as "given" makes every number on the slides consistent (checked in Questions 2 and 3).

---

## 1. Exam structure

> [!abstract] The exam at a glance
> - **20 multiple-choice questions**, **4 possible answers** each
> - **5 points** per question (20 x 5 = 100)
> - **Duration: 3 hours**, i.e. 9 minutes per question on average
> - Everything taught is examinable unless the lecturer said otherwise. The topic list is **not necessarily exhaustive**.

### 1.1 Topics and number of questions

| Topic | Questions | What is covered | Taught in |
|---|---|---|---|
| **Probability** | **5** | simple probabilities, union / intersection / disjoint, conditional probability, Bayes' theorem, law of total probability, independence | [[Lec_01-Sets and the Probability Function]], [[Lec_02-Probability Function and Conditional Probability]], [[Lec_03-Conditional Probability, Bayes and Independence]] |
| **Combinatorics** | **1** | replacement + order matters: $n^k$; no replacement + order matters: $(n)_k$; no replacement + order does not matter: $\binom{n}{k}$ | [[Lec_04-Symmetrical Probability Spaces and Combinatorics]] |
| **Discrete random variables** | **3** | distribution table, PMF, CDF, expected value, variance and SD, linear transformations of $E(X)$ and $Var(X)$ | [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]] |
| **Known discrete distributions** | **3** | Bernoulli, Uniform, Binomial, Geometric, Hypergeometric, Poisson | [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_07-Known Distributions]] |
| **Joint distributions** | **3** | joint table, marginal, conditional, covariance, correlation | [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]] |
| **Continuous random variables** | **2** | PDF, percentiles and median, continuous uniform, expected value and variance of a continuous variable | [[Lec_10-Continuous Random Variables and the Uniform Distribution]] |
| **Normal distributions** | **3** | effect of $\mu$ and $\sigma$ on the curve, standardization, areas under the curve, central limit theorem for a sum and for a mean, law of large numbers, normal approximation for a binomial and for a proportion | [[Lec_11-Uniform and Normal Distributions]] and later |

5 + 1 + 3 + 3 + 3 + 2 + 3 = 20.

> [!warning] Two things the lecturer flagged
> - **"Replacement, order does not matter" is NOT in the exam material.** Only three of the four counting cases are examined.
> - An earlier version of the list showed independence and the law of large numbers under different headings; in the final version independence sits inside Probability (5 questions) and the law of large numbers sits inside Normal distributions (3 questions).

### 1.2 What the deck teaches about exam technique

> [!tip] Technique that shows up on the board
> 1. **Name the events first.** In every word problem the lecturer writes "A = default, B = high risk" (Q3) or "A = sell well, B = abstract" (Q4) before any number. Then translate each sentence into a probability statement.
> 2. **Write the formula, then substitute, then solve** (Q3, Q4, Q9, Q10, Q14). Each line changes one thing, so a sign slip is easy to find.
> 3. **Use the structure of the question.** Q1 and Q5 are solved by a picture or by checking a definition, not by long algebra.
> 4. **"Pick the closest value"** (Q18 to Q20) means the options are rounded. Do not expect an exact match, and do not hunt for an arithmetic error because of it.
> 5. **Skip what you cannot do quickly.** Question 12 (a Chebyshev's inequality question) is explicitly skipped in class.
> 6. **With 9 minutes per question there is time to check:** plug your answer back into the question.

---

## 2. Practice paper: Moed B 2023

Questions 1 to 5 are probability, 6 combinatorics, 7 to 8 discrete random variables, 9 to 11 known distributions and sums, 13 to 15 joint distributions, 16 to 17 continuous variables, 18 to 20 normal distributions and the central limit theorem. (Question 12 was skipped.)

### Question 1: bounds on $P(B)$ &nbsp; (probability; [[Lec_02-Probability Function and Conditional Probability]])

> $A$ and $B$ are events in the same sample space $\Omega$. Given $P(A)=0.4$ and $P(A\cap B)=0.2$, which must be true about $P(B)$?
> Options: $0\le P(B)\le 0.2$ ; $0\le P(B)\le 0.4$ ; $0.2\le P(B)\le 0.8$ ; $0.2\le P(B)\le 1$.

**Answer: $0.2\le P(B)\le 0.8$.**

Draw a Venn diagram with $A$ and $B$. The overlap $A\cap B$ is $0.2$, so $A$ alone is $0.4-0.2=0.2$.

- **Minimum:** $B$ contains its overlap with $A$, so $P(B)\ge 0.2$. (Minimal $B$ is just the overlap.)
- **Maximum:** $B$ can fill everything outside $A$, which is $1-0.4=0.6$, plus the overlap $0.2$. Equivalently, the slide writes this as $1-0.2=0.8$: the only region $B$ cannot use is the part of $A$ outside the overlap, which has probability $0.2$.

> [!tip] Technique
> For "must be true" bounds, draw the two circles and push $B$ to its smallest and biggest size.

### Question 2: comparing $P(A\mid B)$ with $P(B\mid A)$ &nbsp; (probability; [[Lec_03-Conditional Probability, Bayes and Independence]])

> $P(A)=0.7$ and $P(B)=0.5$. Which must be true?
> Options: $P(A\mid B)>P(B\mid A)$ ; $=$ ; $<$ ; not enough information.

**Answer: $P(A\mid B)>P(B\mid A)$.**

Both conditionals share the same numerator $P(A\cap B)$ and differ in the denominator:

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{P(A\cap B)}{0.5},\qquad
P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{P(A\cap B)}{0.7}
$$

Multiply out: $P(A\mid B)\cdot 0.5 = P(A\cap B) = P(B\mid A)\cdot 0.7$, so

$$
P(A\mid B)=P(B\mid A)\cdot\frac{0.7}{0.5}=1.4\cdot P(B\mid A).
$$

> [!example] Why not "equal" or "not enough information"?
> $1.4\,x > x$ only if $x>0$. If $P(A\cap B)$ could be $0$, the two would both be $0$ and equal. But $P(A)+P(B)=1.2>1$, so the events **cannot be disjoint**: $P(A\cap B)\ge 0.2>0$. That is why the strict inequality is guaranteed. (This justification is added here; the slide only shows the $1.4$ factor.)

### Question 3: Bayes' theorem &nbsp; ([[Lec_03-Conditional Probability, Bayes and Independence]])

> A firm ranks loan clients as high risk or not. A client classified as high risk defaults with probability 50%. A client who ends up defaulting is classified as high risk with probability 80%. What is the probability a client defaults if 10% of clients are classified as high risk?
> Options: $0.03125$ ; $0.0625$ ; $0.125$ ; $0.2$.

Let $A$ = default, $B$ = high risk. The data translate to

- $P(A\mid B)=0.5$ (default, given high risk)
- $P(B\mid A)=0.8$ (high risk, given default)
- $P(B)=0.1$

Bayes' theorem links them:

$$
P(A\mid B)=\frac{P(B\mid A)\,P(A)}{P(B)}
\;\Rightarrow\;
0.5=\frac{0.8\,P(A)}{0.1}
\;\Rightarrow\;
0.5\cdot 0.1=0.8\,P(A)
\;\Rightarrow\;
P(A)=\frac{0.05}{0.8}=0.0625.
$$

**Answer: 0.0625.**

> [!tip] Technique
> The wording "probability that X given Y" fixes which event is on the left of the bar. Reading the two conditionals in the wrong direction is the classic trap, and options like $0.125$ and $0.03125$ are the wrong-direction answers.

### Question 4: law of total probability with an unknown &nbsp; ([[Lec_03-Conditional Probability, Bayes and Independence]])

> 40% of painters draw abstract paintings. Of painters whose paintings sell well, 30% draw abstract. Of painters whose paintings do not sell well, 50% draw abstract. What is the probability a random painter is one whose paintings sell well?
> Options: $0.2$ ; $0.3$ ; $0.4$ ; $0.5$.

Let $A$ = sells well, $B$ = abstract, and call the unknown $X=P(A)$. Draw the two-branch tree: $A$ with probability $X$, $\bar A$ with probability $1-X$; below each, $B$ with probability $0.3$ and $0.5$ respectively. The law of total probability gives

$$
P(B)=P(B\mid A)\,P(A)+P(B\mid \bar A)\,P(\bar A)
\;\Rightarrow\;
0.3X+0.5(1-X)=0.4.
$$

Solve:

$$
0.3X+0.5-0.5X=0.4
\;\Rightarrow\;
-0.2X=-0.1
\;\Rightarrow\;
X=0.5.
$$

**Answer: 0.5.** Check: $0.3(0.5)+0.5(0.5)=0.15+0.25=0.40$. ✓

### Question 5: disjoint and independent? &nbsp; ([[Lec_03-Conditional Probability, Bayes and Independence]])

> $P(A)=0.2$, $P(B)=0.5$, $P(A\cup B)=0.6$. Events $A$ and $B$ are: disjoint and independent; not disjoint and independent; disjoint and not independent; not disjoint and not independent.

Use the union rule to find the intersection:

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
\;\Rightarrow\;
0.6=0.2+0.5-P(A\cap B)
\;\Rightarrow\;
P(A\cap B)=0.1.
$$

- **Disjoint?** Disjoint needs $P(A\cap B)=0$. Here it is $0.1$, so the events are **not disjoint**.
- **Independent?** Independence needs $P(A\cap B)=P(A)\,P(B)$. Here $0.2\cdot 0.5=0.1=P(A\cap B)$, so they **are independent**.

**Answer: not disjoint and independent.**

> [!warning] Common confusion
> Disjoint events with positive probabilities are never independent (the intersection is $0$ but the product is positive). Disjoint and independent are different ideas; test them separately.

### Question 6: counting a specific finish order &nbsp; (combinatorics; [[Lec_04-Symmetrical Probability Spaces and Combinatorics]])

> Five people run a race; shirt numbers 1 to 5 are assigned randomly. What is the probability that the runner in shirt 2 finishes first and the runner in shirt 3 finishes second?
> Options: $\tfrac1{120}$ ; $\tfrac1{60}$ ; $\tfrac1{40}$ ; $\tfrac1{20}$.

In a symmetrical space $P(A)=\dfrac{|A|}{|\Omega|}$. Choose the counting case from the table:

| | Order matters (permutation) | Order does not matter (combination) |
|---|---|---|
| **Replacement** | $n^k$ | not examined |
| **No replacement** | $(n)_k=\dfrac{n!}{(n-k)!}$ | $\dbinom{n}{k}=\dfrac{n!}{k!\,(n-k)!}$ |

- **Sample space:** all finishing orders of 5 runners: order matters, no replacement, $n=5$, $k=5$:

$$
|\Omega|=\frac{5!}{(5-5)!}=5!=120.
$$

- **Event:** shirts 2 and 3 are fixed in places 1 and 2, so only the other three runners are arranged in places 3 to 5: $n=3$, $k=3$:

$$
|A|=\frac{3!}{(3-3)!}=3!=6.
$$

$$
P(A)=\frac{6}{120}=\frac{1}{20}.
$$

**Answer: $\tfrac1{20}$.**

### Question 7: reading a CDF table &nbsp; (discrete random variables; [[Lec_05-Random Variables, Expected Value and Variance]])

> $X$ has a cumulative distribution table, with $a,b>0$:
>
> | $x_i$ | 1 | 2 | 3 |
> |---|---|---|---|
> | $P(X\le x_i)$ | $a$ | $a$ | $b$ |
>
> Given this table, $P(X=2)$ is ______ zero, and $b$ is ______ one.
> Options: equal to; equal to ; equal to; less than ; greater than; equal to ; greater than; less than.

- At $x=1$ the cumulative probability is $a$, so $P(X=1)=a$. At $x=2$: $P(X=1)+P(X=2)=a$. Subtract:

$$
P(X=1)=P(X=1)+P(X=2)\;\Rightarrow\; P(X=2)=0.
$$

The CDF does not move between 1 and 2, so there is no probability at 2.

- The last value of the table collects all probability: $b=P(X=1)+P(X=2)+P(X=3)=1$.

**Answer: equal to; equal to.**

> [!tip] Technique
> A CDF value that repeats means zero probability at that point; the last CDF value must be 1 if the table lists every possible value.

### Question 8: linear transformation of a bet &nbsp; ([[Lec_05-Random Variables, Expected Value and Variance]])

> You pay 20 shekels; a roulette wheel is spun and you are paid twice the number that comes up. The number has expected value 18 and variance 16. What are the expected value and variance of your earnings?
> Options: (16, 32) ; (16, 64) ; (36, 32) ; (36, 64).

Let $X$ be the roulette result: $E(X)=18$, $Var(X)=16$. Earnings are $Y=2X-20$ (payout minus the 20 paid).

$$
E(Y)=2\cdot 18-20=16,
\qquad
Var(Y)=2^2\cdot 16=64.
$$

The $-20$ shifts the mean but does **not** change the variance; the factor $2$ is **squared** in the variance. **Answer: expected value 16, variance 64.**

### Question 9: Poisson, at least one taxi &nbsp; (known distributions; [[Lec_07-Known Distributions]])

> Taxis pass at a rate of 3 per hour. Sandy is in a coffee shop for 15 minutes. What is the probability at least 1 taxi passes, assuming independence?
> Options: $0.2276$ ; $0.3276$ ; $0.4276$ ; $0.5276$.

The count of taxis in a fixed time window is Poisson, and **$\lambda$ must match the window**: 3 per hour means $\lambda=3\cdot\tfrac14=\tfrac34$ per 15 minutes, so $X\sim \text{Poisson}\!\left(\tfrac34\right)$. With $P(X=k)=e^{-\lambda}\dfrac{\lambda^k}{k!}$:

$$
P(X\ge 1)=1-P(X=0)=1-e^{-3/4}\frac{(3/4)^0}{0!}=1-e^{-3/4}=0.5276.
$$

**Answer: 0.5276.** ("At least one" is almost always solved through the complement $1-P(X=0)$.)

### Question 10: variance of a fair 20-sided die &nbsp; ([[Lec_06-Expected Value, Variance and Known Distributions]])

> Kate rolls a fair 20-sided die numbered 1 to 20. What is the variance of the number she gets?
> Options: $30\tfrac18$ ; $33\tfrac14$ ; $34\tfrac58$ ; $36\tfrac34$.

The die is a discrete uniform variable, $X\sim U(1,20)$, with

$$
Var(X)=\frac{(b-a+1)^2-1}{12}=\frac{(20-1+1)^2-1}{12}=\frac{399}{12}=33.25=33\tfrac14.
$$

**Answer: $33\tfrac14$.**

### Question 11: variance of a sum of independent prizes &nbsp; ([[Lec_06-Expected Value, Variance and Known Distributions]])

> Mary plays two independent roulette wheels. The first wins with probability 0.1 and pays 5 shekels; the second wins with probability 0.2 and pays 8. What is the variance of her total winnings?
> Options: $1.73$ ; $3.53$ ; $10.89$ ; $12.49$.

Each wheel's win indicator is Bernoulli: $X\sim \text{Bernoulli}(0.1)$, $Y\sim \text{Bernoulli}(0.2)$ with $Var=p(1-p)$:

$$
Var(X)=0.1\cdot 0.9=0.09,\qquad Var(Y)=0.2\cdot 0.8=0.16.
$$

Total winnings are $S=5X+8Y$. Because the wheels are independent the covariance term is zero:

$$
Var(S)=5^2\cdot 0.09+8^2\cdot 0.16=2.25+10.24=12.49.
$$

**Answer: 12.49.**

### Question 12 (skipped)

A question on **Chebyshev's inequality**. The lecturer says to skip it in class.

### Question 13: reading correlation from scatterplots &nbsp; (joint distributions; [[Lec_09-Covariance and Correlation]])

> Below are scatterplots of two pairs of variables, $(X,Y)$ and $(M,T)$. Based on the plots, $\rho(X,Y)$ and $\rho(M,T)$ have ______ sign, and $|\rho(X,Y)|$ is ______ than $|\rho(M,T)|$.
> Options: the same; smaller ; a different; smaller ; the same; larger ; a different; larger.

![[Lec13_data_scatter_xy.png]]

![[Lec13_data_scatter_mt.png]]

- $(X,Y)$: points fall almost exactly on a downward line, so $\rho(X,Y)$ is a **strong negative** correlation (close to $-1$).
- $(M,T)$: an upward slope with a wide band of scatter, so $\rho(M,T)$ is a **weaker positive** correlation.

Signs differ, and $|\rho(X,Y)|$ is larger. **Answer: a different; larger.**

### Question 14: covariance from correlation &nbsp; ([[Lec_09-Covariance and Correlation]])

> $E(X)=5$, $E(Y)=3$, $Var(X)=4$, $Var(Y)=9$, $\rho(X,Y)=0.5$. What is $Cov(X,Y)$?
> Options: $2$ ; $3$ ; $4.5$ ; $7.5$.

Start from the definition of the correlation coefficient and substitute $SD(X)=\sqrt4=2$, $SD(Y)=\sqrt9=3$:

$$
\rho(X,Y)=\frac{Cov(X,Y)}{SD(X)\,SD(Y)}
\;\Rightarrow\;
0.5=\frac{Cov(X,Y)}{2\cdot 3}
\;\Rightarrow\;
Cov(X,Y)=0.5\cdot 6=3.
$$

**Answer: 3.** The expected values $5$ and $3$ are distractors here; they are not needed.

### Question 15: standardized, independent, identically distributed &nbsp; ([[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]])

> $X$ and $Y$ are standardized, independent and identically distributed. Which is necessarily true?
> Options: $Cov(X,Y)=E(X)E(Y)$ ; $Cov(X,Y)=E(X^2)E(Y^2)$ ; $Cov(X,Y)=SD(X)SD(Y)$ ; $Cov(X,Y)=Var(X)Var(Y)$.

Write down what each word gives:

- **Standardized:** $E(X)=E(Y)=0$ and $Var(X)=Var(Y)=1$.
- **Independent:** $Cov(X,Y)=0$.

Test each option: $E(X)E(Y)=0\cdot 0=0=Cov$ is true. The others equal $1$ ($E(X^2)=Var(X)+E(X)^2=1$, $SD\cdot SD=1$, $Var\cdot Var=1$), which is not $0$.

**Answer: $Cov(X,Y)=E(X)\,E(Y)$.**

### Question 16: finding the constant of a density &nbsp; (continuous variables; [[Lec_10-Continuous Random Variables and the Uniform Distribution]])

> What value of $a$ makes $f$ a valid density of a continuous variable $X$, where
> $f(x)=\dfrac{x}{4.5}$ for $0\le x\le a$ and $0$ otherwise?
> Options: $1.5$ ; $3$ ; $4.5$ ; $9$.

A valid density integrates to $1$. The antiderivative of $x/4.5$ is $x^2/9$, so

$$
\int_0^a \frac{x}{4.5}\,dx=\frac{a^2}{9}-\frac{0^2}{9}=1
\;\Rightarrow\;
a^2=9
\;\Rightarrow\;
a=\sqrt{9}=3.
$$

($a$ is positive, since $0\le x\le a$.) **Answer: 3.**

### Question 17: a percentile of the uniform distribution &nbsp; ([[Lec_10-Continuous Random Variables and the Uniform Distribution]])

> $X\sim U(1,21)$. What is the value at the 35th percentile?
> Options: $6$ ; $7$ ; $8$ ; $9$.

The CDF of a continuous uniform $U(a,b)$ is

$$
F(x)=
\begin{cases}
0 & x<a\\[2pt]
\dfrac{x-a}{b-a} & a\le x\le b\\[4pt]
1 & b<x
\end{cases}
$$

With $a=1$, $b=21$, $b-a=20$. The 35th percentile $C_{0.35}$ satisfies $F(C_{0.35})=0.35$:

$$
\frac{C_{0.35}-1}{20}=0.35
\;\Rightarrow\;
C_{0.35}-1=7
\;\Rightarrow\;
C_{0.35}=8.
$$

**Answer: 8.**

### Question 18: one normal value &nbsp; (normal distribution; [[Lec_11-Uniform and Normal Distributions]])

> Tree-trunk weight is normal with mean 20 tons and standard deviation 5. What percent of trunks weigh more than 26 tons? (closest value)
> Options: $8.5\%$ ; $11.5\%$ ; $28.5\%$ ; $31.5\%$.

$X\sim N(20,5^2)$. Standardize and use the table ($\Phi$ is the standard-normal CDF):

$$
Z(26)=\frac{26-20}{5}=\frac65=1.2,
\qquad
\Phi(1.2)=0.8849,
$$

$$
P(X>26)=1-P(X\le 26)=1-0.8849=0.1151\approx 11.5\%.
$$

**Answer: 11.5%.** The slide reads $\Phi(1.2)$ at row 1.2, column .00 of the [[Z Table]]. Tables give the area to the **left**, so for "more than" subtract from 1.

### Question 19: the central limit theorem for a sum &nbsp; ([[Central Limit Theorem]])

> A stride has expected value 0.85 m and standard deviation 0.12. What is the probability a person who takes 100 independent steps travels more than 90 metres? (closest value)
> Options: $0.01$ ; $0.02$ ; $0.03$ ; $0.04$.

Let $S=\sum_{i=1}^{100}X_i$ with $E(X_i)=0.85$ and $SD(X_i)=0.12$. For a sum of $n$ independent identical variables the CLT gives

$$
S\sim N\!\left(n\mu,\; n\sigma^2\right)=N\!\left(100\cdot 0.85,\; 100\cdot 0.12^2\right)=N\!\left(85,\;1.44\right)=N\!\left(85,\;1.2^2\right).
$$

$$
Z(90)=\frac{90-85}{1.2}=4.17,
\qquad
\Phi(4.17)=0.9998,
\qquad
P(S>90)=1-0.9998=0.0002.
$$

This is essentially zero, so among the options the **closest value is $0.01$** (the slide's table-rounded $0.0002$; the exact tail is smaller still). The $Z$ table only reaches $\Phi\approx 0.9998$ to $0.9999$ at the far right, which is the signal that the answer is "about zero".

> [!tip] Technique
> A $Z$ of more than about 3.5 means the event is almost impossible. Pick the smallest option. The variance of a **sum** grows with $n$ (here $100\cdot 0.0144$); the standard deviation grows only with $\sqrt n$.

> [!note] Reconstructed from the slides
> The slide shows a stray, momentary line "$SD(X_i)=12$" while the numbers are being rewritten; the working that follows uses $0.12$, which gives $SD(S)=1.2$ and is the consistent reading.

### Question 20: the central limit theorem for a mean &nbsp; ([[Central Limit Theorem]])

> A factory worker's monthly earnings have expected value 8,900 shekels and standard deviation 2,500. What is the probability the **average** monthly salary in a sample of 100 workers is more than 9,000? (closest value)
> Options: $0.2456$ ; $0.3446$ ; $0.6554$ ; $0.7544$.

For a sample **mean** $\bar X$ the variance is divided by $n$:

$$
\bar X\sim N\!\left(\mu,\;\frac{\sigma^2}{n}\right)=N\!\left(8900,\;\frac{2500^2}{100}\right)=N\!\left(8900,\;250^2\right).
$$

$$
Z(9000)=\frac{9000-8900}{250}=\frac{100}{250}=0.4,
\qquad
\Phi(0.4)=0.6554,
$$

$$
P(\bar X>9000)=1-0.6554=0.3446.
$$

**Answer: 0.3446.** Note that $0.6554$ is the trap: it is $P(\bar X\le 9000)$, the answer to the opposite question.

---

## 3. Answer key and map back to the lectures

| Q | Answer | Topic | Main tool |
|---|---|---|---|
| 1 | $0.2\le P(B)\le 0.8$ | Probability | Venn diagram, min and max |
| 2 | $P(A\mid B)>P(B\mid A)$ | Probability | same numerator, smaller denominator |
| 3 | $0.0625$ | Probability | Bayes' theorem |
| 4 | $0.5$ | Probability | law of total probability, solve for $X$ |
| 5 | not disjoint and independent | Probability | union rule, then $P(A\cap B)=P(A)P(B)$ |
| 6 | $\tfrac1{20}$ | Combinatorics | $(n)_k$ in the sample space and the event |
| 7 | equal to; equal to | Discrete RV | differences of a CDF |
| 8 | $E=16$, $Var=64$ | Discrete RV | $Var(aX+b)=a^2Var(X)$ |
| 9 | $0.5276$ | Poisson | scale $\lambda$ to the window, $1-P(0)$ |
| 10 | $33\tfrac14$ | Discrete uniform | $\frac{(b-a+1)^2-1}{12}$ |
| 11 | $12.49$ | Bernoulli, sums | independent variances add |
| 12 | skipped | Chebyshev | none |
| 13 | a different; larger | Correlation | read slope and tightness |
| 14 | $3$ | Covariance | $\rho\,SD(X)\,SD(Y)$ |
| 15 | $Cov=E(X)E(Y)$ | Independence | independent gives $Cov=0$ |
| 16 | $3$ | Continuous | density integrates to 1 |
| 17 | $8$ | Continuous uniform | invert the CDF |
| 18 | $11.5\%$ | Normal | standardize, use $\Phi$, subtract from 1 |
| 19 | $0.01$ | CLT for a sum | $N(n\mu,n\sigma^2)$ |
| 20 | $0.3446$ | CLT for a mean | $N(\mu,\sigma^2/n)$ |

> [!summary] Takeaways for the exam
> - 5 of 20 questions are probability and 3 more are on each of discrete RVs, known distributions, joint distributions and the normal: do not neglect the early lectures.
> - Almost every question reduces to **one formula plus careful reading of what is given and what is asked** (which conditional, which tail, sum versus mean).
> - **Standard error check:** for a single value use $\sigma$; for a sum use $\sqrt n\,\sigma$; for a mean use $\sigma/\sqrt n$.
> - Replacement with no order is not examined, and the Chebyshev question was skipped in class.
