---
title: "Probability, Distributions, Covariance and CLT (2023 Moed B)"
type: past-paper
status: worked-solution
exam: "Statistics A Final Exam, Moed B 2023"
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
  - combinatorics
  - discrete-random-variables
  - poisson-distribution
  - covariance
  - correlation
  - uniform-distribution
  - normal-distribution
  - central-limit-theorem
aliases:
  - Statistics A Moed B 2023
  - Stats A Moed B 2023
  - PP02 Statistics A
subject: statistics-a
in_scope: true
---

# Probability, Distributions, Covariance and CLT (2023 Moed B)

> Part of: [[Statistics A]]
> **Statistics A Final Exam, Moed B 2023**, Statistics A, Asael Sklar. 20 multiple-choice questions, 4 options each.
> Worked in class: [[Lec_13-Exam Structure and Practice (Moed B 2023)]] (the lecturer's board working, Q12 skipped)
> Builds on: [[Lec_01-Sets and the Probability Function]], [[Lec_02-Probability Function and Conditional Probability]], [[Lec_03-Conditional Probability, Bayes and Independence]], [[Lec_04-Symmetrical Probability Spaces and Combinatorics]], [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_07-Known Distributions]], [[Lec_09-Covariance and Correlation]], [[Lec_10-Continuous Random Variables and the Uniform Distribution]], [[Lec_11-Uniform and Normal Distributions]], [[Lec_12-Central Limit Theorem and Normal Approximations]]
> Practice: [[PS_01-Basics of Probability and Venn Diagrams]], [[PS_03-Conditional Probability, Drug Dog, Bayes & Independence]], [[PS_04-Combinatorics]], [[PS_06-Binomial Sampling, Gambles and Linear Transformations]], [[PS_07-Geometric, Hypergeometric and Poisson Distributions]], [[PS_10-Continuous Random Variables and Density Functions]], [[PS_11-Normal Distribution and National Exam Scores]]

> [!info] Source and how the answers were made
> The paper ends with an **official letter-only answer key** and has no working. Every letter below is the official one. The working, and the reason each wrong option is wrong, is **AI-written** and was checked to reach the keyed letter. The formula sheet is the 2024-2025 sheet (`Formula sheet 2024-2025`). Notation follows the lecturer: $P(X=x_i)$, $E(X)$, $Var(X)$, $SD(X)$, $Cov(X,Y)$, $\rho(X,Y)$.

> [!warning] AI-solved questions
> **Q5 and Q15**: the paper states "All answers were accepted due to low psychometric validity", so any option scored full marks. The best answer given for each is **AI-written, not official**. There is no official letter for them (the key prints B for Q5 and A for Q15, but the paper says every option was accepted).
> **Q12** is printed on the paper with the remark that it relies on Chebyshev's inequality, which "is not part of the material for 2024". The key still gives A. It was skipped in the lecture.

> [!success] Official answer key
> | Q | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
> |---|---|---|---|---|---|---|---|---|---|---|
> | Key | C | A | B | D | B* | D | A | B | D | B |
>
> | Q | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
> |---|---|---|---|---|---|---|---|---|---|---|
> | Key | D | A | D | B | A* | B | C | B | A | B |
>
> *All answers were accepted for Q5 and Q15.

## What this paper tests

| Questions | Topic | Where it is taught |
|---|---|---|
| Q1 to Q5 | Probability: bounds, conditional probability, Bayes, total probability, disjoint vs independent | [[Lec_02-Probability Function and Conditional Probability]], [[Lec_03-Conditional Probability, Bayes and Independence]] |
| Q6 | Combinatorics (order matters, no replacement) | [[Lec_04-Symmetrical Probability Spaces and Combinatorics]] |
| Q7 to Q8 | Discrete random variables: CDF table, linear transformation | [[Lec_05-Random Variables, Expected Value and Variance]] |
| Q9 to Q11 | Known distributions: Poisson, discrete uniform, Bernoulli sums | [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_07-Known Distributions]] |
| Q12 | Chebyshev's inequality (outside the material) | not taught |
| Q13 to Q15 | Joint distributions: correlation from a plot, covariance, independence | [[Lec_09-Covariance and Correlation]] |
| Q16 to Q17 | Continuous variables: valid density, uniform percentile | [[Lec_10-Continuous Random Variables and the Uniform Distribution]] |
| Q18 to Q20 | Normal distribution and the central limit theorem | [[Lec_11-Uniform and Normal Distributions]], [[Lec_12-Central Limit Theorem and Normal Approximations]] |

> [!tip] Intuition: the one move behind each question
> Almost every question is **one formula from the formula sheet plus careful reading of what is given and what is asked**: which conditional, which tail, a sum or a mean, a variance or a standard deviation. Where an option set looks like it contains "traps", each trap is usually the result of one specific slip, which is named below.

---

## Q1 — Bounds on $P(B)$

> $A$ and $B$ are events in the same sample space $\Omega$. Given $P(A)=0.4$ and $P(A\cap B)=0.2$, which must be true about $P(B)$?
> a. $0\le P(B)\le 0.2$  b. $0\le P(B)\le 0.4$  c. $0.2\le P(B)\le 0.8$  d. $0.2\le P(B)\le 1$

> [!success] Official answer: C
> $0.2\le P(B)\le 0.8$

$B$ contains the overlap $A\cap B$, so $P(B)\ge 0.2$. The only part of the space that $B$ cannot use is the part of $A$ outside $B$, which has probability $P(A)-P(A\cap B)=0.4-0.2=0.2$ (that is, $A\cap\bar B$ has probability $0.2$). So

$$
P(B)\le 1-0.2=0.8.
$$

Equivalently $P(B)=P(A\cap B)+P(\bar A\cap B)=0.2+P(\bar A\cap B)$ and $P(\bar A\cap B)\le P(\bar A)=0.6$.

![[PP02_q1_bounds_on_pb.png|560]]

*The space split by $A$. Smallest $B$ is just the overlap; largest $B$ takes the overlap plus all of the outside of $A$.*

> [!example] Why the other options fail
> - **a** and **b**: they cap $P(B)$ at $0.2$ or $0.4$, but $B$ can extend outside $A$, so $P(B)$ can be as large as $0.8$.
> - **d**: it allows $P(B)=1$, which would force $B=\Omega$ and so $A\subseteq B$ and $P(A\cap B)=P(A)=0.4\ne 0.2$.

Taught in [[Lec_02-Probability Function and Conditional Probability]]; practised in [[PS_01-Basics of Probability and Venn Diagrams]].

## Q2 — Comparing $P(A\mid B)$ with $P(B\mid A)$

> $P(A)=0.7$ and $P(B)=0.5$. Which must be true?
> a. $P(A\mid B)>P(B\mid A)$  b. $P(A\mid B)=P(B\mid A)$  c. $P(A\mid B)<P(B\mid A)$  d. Not enough information.

> [!success] Official answer: A
> $P(A\mid B)>P(B\mid A)$

Both conditionals have the same numerator and differ only in the denominator:

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{P(A\cap B)}{0.5},
\qquad
P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{P(A\cap B)}{0.7}.
$$

Dividing by the larger number gives the smaller value, so $P(A\mid B)$ is the bigger one, **provided $P(A\cap B)>0$**. It is: $P(A\cup B)\le 1$ gives

$$
P(A\cap B)=P(A)+P(B)-P(A\cup B)\ge 0.7+0.5-1=0.2>0.
$$

So $P(A\mid B)=1.4\,P(B\mid A)$ with $P(B\mid A)>0$.

> [!example] Why the other options fail
> - **b**: equality would need $P(A)=P(B)$ (or a zero intersection), and $0.7\ne 0.5$.
> - **c**: it is the reverse of what the denominators give.
> - **d**: the unknown $P(A\cap B)$ cancels out of the comparison, so the information is enough. It only mattered that it is not zero.

## Q3 — Bayes' theorem

> A firm ranks loan clients as high risk or not. A client classified as high risk defaults with probability 50%. A client who ends up defaulting is classified as high risk with probability 80%. What is the probability a client defaults, given that 10% of clients are classified as high risk?
> a. $0.03125$  b. $0.0625$  c. $0.125$  d. $0.2$

> [!success] Official answer: B
> $0.0625$

Let $A$ = default and $B$ = high risk. The data say $P(A\mid B)=0.5$, $P(B\mid A)=0.8$ and $P(B)=0.1$. Bayes' theorem links the two conditionals:

$$
P(A\mid B)=\frac{P(B\mid A)\,P(A)}{P(B)}
\;\Rightarrow\;
0.5=\frac{0.8\,P(A)}{0.1}
\;\Rightarrow\;
P(A)=\frac{0.5\cdot 0.1}{0.8}=0.0625.
$$

> [!example] Why the other options fail: plug each back in
> $P(A\mid B)=0.8\,P(A)/0.1=8\,P(A)$ must equal $0.5$.
> - **a** $P(A)=0.03125$ gives $8\cdot 0.03125=0.25$, not $0.5$.
> - **c** $P(A)=0.125$ gives $1.0$, not $0.5$.
> - **d** $P(A)=0.2$ gives $1.6$, which is not even a probability.

> [!tip] Intuition
> "Given" fixes which event sits on the left of the bar. The question hands you both conditionals, so swapping them is the trap.

Taught in [[Lec_03-Conditional Probability, Bayes and Independence]]; practised in [[PS_03-Conditional Probability, Drug Dog, Bayes & Independence]].

## Q4 — Law of total probability with an unknown

> 40% of painters draw abstract paintings. Of the painters whose paintings sell well, 30% draw abstract. Of the painters whose paintings do not sell well, 50% draw abstract. What is the probability that a random painter is one whose paintings sell well?
> a. $0.2$  b. $0.3$  c. $0.4$  d. $0.5$

> [!success] Official answer: D
> $0.5$

Let $A$ = sells well, $B$ = abstract, and write $x=P(A)$. The law of total probability on $B$ gives

$$
P(B)=P(B\mid A)\,P(A)+P(B\mid \bar A)\,P(\bar A)
\;\Rightarrow\;
0.4=0.3x+0.5(1-x).
$$

Solve:

$$
0.4=0.5-0.2x
\;\Rightarrow\;
x=\frac{0.1}{0.2}=0.5.
$$

> [!example] Why the other options fail
> plug each into $0.3x+0.5(1-x)$
>
> - **a** $x=0.2$ gives $0.46$.
> - **b** $x=0.3$ gives $0.44$.
> - **c** $x=0.4$ gives $0.42$.
> - **d** $x=0.5$ gives $0.40$, which matches.
>
> Intuition: $0.4$ lies exactly halfway between $0.3$ and $0.5$, so the two groups must be equally common.

## Q5 — Disjoint and independent?

> $P(A)=0.2$, $P(B)=0.5$, $P(A\cup B)=0.6$. Events $A$ and $B$ are:
> a. Disjoint and independent  b. Not disjoint and independent  c. Disjoint and not independent  d. Not disjoint and not independent

> [!warning] All answers were accepted (low psychometric validity). The answer below is AI-written, not official.
> The paper says every option received credit; the key prints **B**. The reason for the low validity is not stated.

The union rule gives the intersection:

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
\;\Rightarrow\;
0.6=0.2+0.5-P(A\cap B)
\;\Rightarrow\;
P(A\cap B)=0.1.
$$

- **Disjoint?** Disjoint needs $P(A\cap B)=0$. Here it is $0.1$, so **not disjoint**.
- **Independent?** Independence needs $P(A\cap B)=P(A)\,P(B)$. Here $0.2\cdot 0.5=0.1=P(A\cap B)$, so **independent**.

Best answer: **b, not disjoint and independent** (matches the printed key letter).

> [!example] Why the other options fail
> - **a** and **c** say "disjoint", but $P(A\cap B)=0.1\ne 0$.
> - **d** says "not independent", but the product rule holds exactly.

> [!tip] Intuition
> Disjoint events with positive probabilities are never independent: knowing $A$ happened tells you $B$ did not. Test the two properties separately.

## Q6 — A specific finishing order

> Five people run a race. Shirt numbers 1 to 5 are assigned randomly before the race. What is the probability that the runner wearing shirt 2 finishes first and the runner wearing shirt 3 finishes second?
> a. $\tfrac1{120}$  b. $\tfrac1{60}$  c. $\tfrac1{40}$  d. $\tfrac1{20}$

> [!success] Official answer: D
> $\tfrac1{20}$

Treat all finishing orders as equally likely, a symmetrical space, so $P(A)=|A|/|\Omega|$. Order matters and there is no replacement, so use $(n)_k=\frac{n!}{(n-k)!}$ from the formula sheet.

- All finishing orders of 5 runners: $|\Omega|=(5)_5=5!=120$.
- Shirt 2 first and shirt 3 second: only the other three runners are placed in places 3 to 5, so $|A|=(3)_3=3!=6$.

$$
P(A)=\frac{6}{120}=\frac1{20}.
$$

**Cross-check by conditioning:** $P(\text{shirt 2 first})=\tfrac15$, then $P(\text{shirt 3 second}\mid\text{shirt 2 first})=\tfrac14$, and $\tfrac15\cdot\tfrac14=\tfrac1{20}$.

> [!example] Why the other options fail
> - **a** $\tfrac1{120}$ is the chance of one complete finishing order (all five places fixed), not just two places.
> - **b** and **c** correspond to no correct count: $\tfrac1{60}$ would need 2 favourable orders and $\tfrac1{40}$ would need 3, but exactly $3!=6$ orders fit the event.

Taught in [[Lec_04-Symmetrical Probability Spaces and Combinatorics]]; practised in [[PS_04-Combinatorics]].

## Q7 — Reading a CDF table

> $X$ has the cumulative table below, where $0<a$ and $0<b$ are probabilities.
>
> | $x_i$ | 1 | 2 | 3 |
> |---|---|---|---|
> | $P(X\le x_i)$ | $a$ | $a$ | $b$ |
>
> Given this table, $P(X=2)$ is ______ zero, and $b$ is ______ one.
> a. Equal to; equal to  b. Equal to; less than  c. Greater than; equal to  d. Greater than; less than

> [!success] Official answer: A
> Equal to; equal to

- At $x=2$ the CDF equals its value at $x=1$:

$$
P(X\le 2)-P(X\le 1)=P(X=2)=a-a=0.
$$

A CDF that does not rise between two values puts no probability on the later one.

- The table lists every value $X$ can take, and $3$ is the largest, so the CDF reaches 1 there:

$$
b=P(X\le 3)=1.
$$

> [!example] Why the other options fail
> - **c** and **d** need $P(X=2)>0$, which would make the CDF rise at $x=2$.
> - **b** needs $b<1$, which would leave probability $1-b$ unassigned to any value.

> [!note] Assumption
> The table shows only the values 1, 2 and 3, so the argument takes $X$ to be supported on those three values. That is the standard reading of a distribution table.

Taught in [[Lec_05-Random Variables, Expected Value and Variance]].

## Q8 — Linear transformation of a bet

> You pay 20 shekels and a roulette wheel is spun. You are paid twice as many shekels as the number that comes up. The number has expected value 18 and variance 16. What are the expected value and variance of your earnings?
> a. $E=16$, $Var=32$  b. $E=16$, $Var=64$  c. $E=36$, $Var=32$  d. $E=36$, $Var=64$

> [!success] Official answer: B
> Expected value 16, variance 64

Let $X$ be the number on the wheel. Earnings are payout minus stake, $Y=2X-20$. The formula sheet gives $E(bX+a)=b\,E(X)+a$ and $Var(bX+a)=b^2\,Var(X)$:

$$
E(Y)=2\cdot 18-20=16,
\qquad
Var(Y)=2^2\cdot 16=64.
$$

> [!example] Why the other options fail
> - **a** and **c** give variance $32=2\cdot 16$: the multiplier must be **squared** in a variance (and $SD$ would scale by $2$, not the variance).
> - **c** and **d** give $E=36=2\cdot 18$: they forget that you paid 20 first. The $-20$ shifts the mean but never changes the variance.

Taught in [[Lec_05-Random Variables, Expected Value and Variance]]; practised in [[PS_06-Binomial Sampling, Gambles and Linear Transformations]].

## Q9 — Poisson: at least one taxi

> Taxis pass at a rate of 3 per hour. Sandy is in a coffee shop for 15 minutes. What is the probability that at least 1 taxi passes, assuming each taxi is independent?
> a. $0.2276$  b. $0.3276$  c. $0.4276$  d. $0.5276$

> [!success] Official answer: D
> $0.5276$

The number of taxis in a fixed window is Poisson, and **$\lambda$ must match the window**. 3 per hour means $\lambda=3\cdot\tfrac14=0.75$ for 15 minutes, so $X\sim P(0.75)$ with $P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}$. "At least one" is the complement of "none":

$$
P(X\ge 1)=1-P(X=0)=1-e^{-0.75}\frac{0.75^0}{0!}=1-e^{-0.75}=1-0.4724=0.5276.
$$

> [!example] Why the other options fail
> They are the same kind of number with the second digit changed, so the check is the arithmetic itself: $e^{-0.75}=0.4724$ gives $0.5276$ exactly. Common slips are using $\lambda=3$ (the hourly rate), which gives $1-e^{-3}=0.9502$, or stopping at $P(X=0)=0.4724$, the chance of no taxi. Neither of those is on the list, so the list is only separated by the final digits.

Taught in [[Lec_07-Known Distributions]]; practised in [[PS_07-Geometric, Hypergeometric and Poisson Distributions]].

## Q10 — Variance of a fair 20-sided die

> Kate rolls a fair 20-sided die with sides numbered 1 to 20. What is the variance of the number she gets?
> a. $30\tfrac18$  b. $33\tfrac14$  c. $34\tfrac58$  d. $36\tfrac34$

> [!success] Official answer: B
> $33\tfrac14$

The die is a discrete uniform variable $X\sim U(1,20)$. The formula sheet gives

$$
Var(X)=\frac{(b-a+1)^2-1}{12}=\frac{(20-1+1)^2-1}{12}=\frac{399}{12}=33.25=33\tfrac14.
$$

> [!example] Why the other options fail
> They match no version of the formula: with $n=20$ values, $(n^2-1)/12=399/12=33.25$ is the only one. Using $(b-a)^2/12=361/12\approx 30.08$ (forgetting the $+1$ inside the bracket) is close to **a** but is not equal to $30\tfrac18=30.125$, so **a** is not that slip either. The key is the only option that equals the formula exactly.

Taught in [[Lec_06-Expected Value, Variance and Known Distributions]].

## Q11 — Variance of two independent prizes

> Mary plays two independent roulette wheels. The first has a 0.1 chance of winning and pays 5 shekels. The second has a 0.2 chance of winning and pays 8 shekels. What is the variance of her total winnings?
> a. $1.73$  b. $3.53$  c. $10.89$  d. $12.49$

> [!success] Official answer: D
> $12.49$

Let $X\sim\text{Bernoulli}(0.1)$ and $Y\sim\text{Bernoulli}(0.2)$ be the win indicators, with $Var=p(1-p)$:

$$
Var(X)=0.1\cdot 0.9=0.09,
\qquad
Var(Y)=0.2\cdot 0.8=0.16.
$$

Total winnings are $S=5X+8Y$. The wheels are independent, so $Cov(X,Y)=0$ and the formula $Var(X+Y)=Var(X)+Var(Y)+2\,Cov(X,Y)$ keeps only the variances. Each prize is **squared** when it comes out:

$$
Var(S)=5^2\cdot 0.09+8^2\cdot 0.16=2.25+10.24=12.49.
$$

> [!example] Why the other options fail
> The correct value is exactly $12.49$, and the independent-sum structure leaves no room for another answer: dropping the squares gives $5\cdot0.09+8\cdot0.16=1.73$ (that is **a**), the classic slip of scaling a variance by $b$ instead of $b^2$.

Taught in [[Lec_06-Expected Value, Variance and Known Distributions]]; practised in [[PS_06-Binomial Sampling, Gambles and Linear Transformations]].

## Q12 — Chebyshev's inequality (outside the material)

> The weight of a randomly chosen apple has expected value 320 grams and variance 400. Which of the following **could not** be the probability that a randomly chosen apple weighs between 280 and 360 grams?
> a. $0.65$  b. $0.75$  c. $0.85$  d. $0.95$
>
> The paper adds: "This question relies on Chebyshev's inequality which is not part of the material for 2024."

> [!success] Official answer: A
> $0.65$

$SD=\sqrt{400}=20$ grams, and the interval $280$ to $360$ is $320\pm 40$, that is $k=2$ standard deviations either side of the mean. Chebyshev's inequality says that for any distribution

$$
P\big(|X-E(X)|<k\cdot SD(X)\big)\ge 1-\frac{1}{k^2}
\;\Rightarrow\;
P(280<X<360)\ge 1-\frac14=0.75.
$$

So a probability of $0.65$ is impossible. The options $0.75$, $0.85$ and $0.95$ are all at least $0.75$, so none is ruled out. For example a normal distribution gives about $0.95$ here.

> [!note] Outside the lectures
> Chebyshev's inequality is not on the 2024-2025 formula sheet and was not taught. The lecturer skipped this question in [[Lec_13-Exam Structure and Practice (Moed B 2023)]]. It is included here because the key gives A, and the working above reaches A.

## Q13 — Correlation from scatter plots

> Below are scatter plots of two pairs of random variables, $X$ and $Y$, and $M$ and $T$. Based on these plots, $\rho(X,Y)$ and $\rho(M,T)$ have ______ sign, and $|\rho(X,Y)|$ is ______ than $|\rho(M,T)|$.
> a. The same; smaller  b. A different; smaller  c. The same; larger  d. A different; larger

![[PP02_q13_scatter_plots.png|640]]

*Real data: the two scatter plots as printed on the paper.*

> [!success] Official answer: D
> A different; larger

- $(X,Y)$: the points drop steadily from top left to bottom right and sit almost on a straight line, so $\rho(X,Y)$ is **negative and close to $-1$**.
- $(M,T)$: the points trend upward but spread widely around the trend, so $\rho(M,T)$ is **positive and weak to moderate**.

The signs differ and $|\rho(X,Y)|$ is the larger one.

> [!example] Why the other options fail
> - **a** and **c** say the signs are the same, but one slope is down and one is up.
> - **a** and **b** say $|\rho(X,Y)|$ is smaller, but tight scatter around a line means $|\rho|$ near 1, and wide scatter means $|\rho|$ well below 1.

Taught in [[Lec_09-Covariance and Correlation]].

## Q14 — Covariance from correlation

> $E(X)=5$, $E(Y)=3$, $Var(X)=4$, $Var(Y)=9$ and $\rho(X,Y)=0.5$. What is $Cov(X,Y)$?
> a. $2$  b. $3$  c. $4.5$  d. $7.5$

> [!success] Official answer: B
> $Cov(X,Y)=3$

Use $\rho(X,Y)=\dfrac{Cov(X,Y)}{SD(X)\,SD(Y)}$ with $SD(X)=\sqrt4=2$ and $SD(Y)=\sqrt9=3$:

$$
0.5=\frac{Cov(X,Y)}{2\cdot 3}
\;\Rightarrow\;
Cov(X,Y)=0.5\cdot 6=3.
$$

The means $5$ and $3$ are not needed.

> [!example] Why the other options fail
> - **a** $2=0.5\cdot Var(X)$ and **c** $4.5=0.5\cdot Var(Y)$ use a variance where a **standard deviation** belongs.
> - **d** $7.5$ is not $0.5$ times any product of the given numbers that the formula asks for.

Taught in [[Lec_09-Covariance and Correlation]].

## Q15 — Standardized, independent, identically distributed

> $X$ and $Y$ are two standardized, independent and identically distributed random variables. Which of the following is necessarily true?
> a. $Cov(X,Y)=E(X)\,E(Y)$  b. $Cov(X,Y)=E(X^2)\,E(Y^2)$  c. $Cov(X,Y)=SD(X)\,SD(Y)$  d. $Cov(X,Y)=Var(X)\,Var(Y)$

> [!warning] All answers were accepted (low psychometric validity). The answer below is AI-written, not official.
> The paper says every option received credit; the key prints **A**. The reason for the low validity is not stated.

"Standardized" means $E(X)=E(Y)=0$ and $Var(X)=Var(Y)=1$. Independent variables have $Cov(X,Y)=0$. Test each option:

- **a** $E(X)\,E(Y)=0\cdot 0=0=Cov(X,Y)$. True.
- **b** $E(X^2)=Var(X)+E(X)^2=1+0=1$, so the right side is $1\cdot 1=1\ne 0$. False.
- **c** $SD(X)\,SD(Y)=1\cdot 1=1\ne 0$. False.
- **d** $Var(X)\,Var(Y)=1\cdot 1=1\ne 0$. False.

Best answer: **a** (matches the printed key letter).

> [!tip] Intuition
> Independence forces the covariance to zero. Only option **a** also evaluates to zero, and it does so because the means are zero. In general $Cov(X,Y)=E(XY)-E(X)E(Y)$ equals zero when independent, which is not the same statement as $Cov(X,Y)=E(X)E(Y)$.

Taught in [[Lec_09-Covariance and Correlation]].

## Q16 — Constant of a density

> What is the value of the constant $a$ for which $f(X)$ is a valid density function of the continuous random variable $X$, given that
> $f(X)=\dfrac{X}{4.5}$ for $0\le X\le a$ and $0$ otherwise?
> a. $1.5$  b. $3$  c. $4.5$  d. $9$

> [!success] Official answer: B
> $a=3$

A valid density integrates to $1$. An antiderivative of $\frac{x}{4.5}$ is $\frac{x^2}{9}$, so

$$
\int_0^a \frac{x}{4.5}\,dx=\frac{a^2}{9}=1
\;\Rightarrow\;
a^2=9
\;\Rightarrow\;
a=3,
$$

taking the positive root because $0\le X\le a$.

![[PP02_q16_density_a_equals_3.png|520]]

*The density is a triangle with base $a=3$ and height $3/4.5$, so its area is $\tfrac12\cdot 3\cdot\tfrac{3}{4.5}=1$.*

> [!example] Why the other options fail
> the area under $x/4.5$ is $a^2/9$
>
> - **a** $a=1.5$ gives area $0.25$.
> - **c** $a=4.5$ gives area $2.25$.
> - **d** $a=9$ gives area $9$.
>
> Only $a=3$ gives $1$.

Taught in [[Lec_10-Continuous Random Variables and the Uniform Distribution]]; practised in [[PS_10-Continuous Random Variables and Density Functions]].

## Q17 — A percentile of the uniform distribution

> $X$ is continuous and uniform between 1 and 21, $X\sim U(1,21)$. What is the value at the 35th percentile of the distribution?
> a. $6$  b. $7$  c. $8$  d. $9$

> [!success] Official answer: C
> $8$

For $X\sim U(a,b)$ the CDF on $[a,b]$ is $F(x)=\dfrac{x-a}{b-a}$. Here $b-a=20$. The 35th percentile $c$ satisfies $F(c)=0.35$:

$$
\frac{c-1}{20}=0.35
\;\Rightarrow\;
c-1=7
\;\Rightarrow\;
c=8.
$$

![[PP02_q17_uniform_35th_percentile.png|520]]

*Read the CDF backwards: height $0.35$ corresponds to $x=8$.*

> [!example] Why the other options fail
> $F(x)=(x-1)/20$
>
> - **a** $x=6$ gives $0.25$.
> - **b** $x=7$ gives $0.30$.
> - **d** $x=9$ gives $0.40$.

> [!tip] Intuition
> A uniform spreads probability evenly, so the 35th percentile sits 35% of the way along: $1+0.35\cdot 20=8$.

Taught in [[Lec_10-Continuous Random Variables and the Uniform Distribution]].

## Q18 — One normal tail

> The weight of tree trunks is normally distributed with expected value 20 tons and standard deviation 5. What percent of trunks weigh more than 26 tons? (pick the closest value)
> a. $8.5\%$  b. $11.5\%$  c. $28.5\%$  d. $31.5\%$

> [!success] Official answer: B
> $11.5\%$

$X\sim N(20,5^2)$. Standardize and use the standard normal table, which gives the area to the **left**:

$$
Z=\frac{26-20}{5}=1.2,
\qquad
P(X\le 26)=\Phi(1.2)=0.8849,
$$

$$
P(X>26)=1-0.8849=0.1151\approx 11.5\%.
$$

![[PP02_q18_normal_tail_above_26.png|560]]

*The shaded area above $Z=1.2$ is the share of trunks heavier than 26 tons.*

> [!example] Why the other options fail
> The exact tail is $11.51\%$, so only **b** is close. **a** $8.5\%$, **c** $28.5\%$ and **d** $31.5\%$ are each at least 3 percentage points away. Be careful with the direction of the tail: $88.5\%$ is the share **below** 26 tons and is not an option here.

Taught in [[Lec_11-Uniform and Normal Distributions]]; practised in [[PS_11-Normal Distribution and National Exam Scores]].

## Q19 — Central limit theorem for a sum

> The length of an adult human's stride has expected value 0.85 meters and standard deviation 0.12. What is the probability that a person who takes 100 steps will travel more than 90 meters, assuming each step is independent of all the others? (pick the closest value)
> a. $0.01$  b. $0.02$  c. $0.03$  d. $0.04$

> [!success] Official answer: A
> $0.01$

Let $S=X_1+\dots+X_{100}$. With $E(X_i)=0.85$ and $SD(X_i)=0.12$, the CLT gives $S\approx N(n\mu,\,n\sigma^2)$:

$$
E(S)=100\cdot 0.85=85,
\qquad
Var(S)=100\cdot 0.12^2=1.44,
\qquad
SD(S)=\sqrt{1.44}=1.2.
$$

$$
Z=\frac{90-85}{1.2}=4.17,
\qquad
P(S>90)=1-\Phi(4.17)\approx 0.00002.
$$

The exact tail is about $1.5\cdot 10^{-5}$, which is essentially zero. Among the options the **closest to zero is $0.01$**, which is the keyed answer.

![[PP02_q19_sum_of_steps_far_tail.png|560]]

*The value 90 m is more than 4 standard deviations above the mean 85 m, so the tail area is invisible.*

> [!warning] Check of the lecture working (Lec_13)
> The lecture note ends with $1-0.9998=0.0002$ against the keyed $0.01$. This is **not a conflict in the answer**, only in the rounding:
> - The slide reads $\Phi(4.17)=0.9998$ from the $Z$ table, whose last entries are rounded, so $1-0.9998=0.0002$. The true tail is $0.0000155$.
> - The slide briefly shows "$SD(X_i)=12$" while rewriting the line (slides 218 and 219 of the Class 13 deck), but every other line uses $0.12$ and gives $SD(S)=1.2$. The value $12$ is a typo and the $0.12$ reading is the consistent one: with $12$ the question would not match any option either.
> - Both $0.0002$ and $0.0000155$ are closest to $0.01$ among $0.01$, $0.02$, $0.03$, $0.04$, so the letter agrees with the key. The wording "pick the closest value" is what makes A correct.

> [!example] Why the other options fail
> A probability of $0.02$, $0.03$ or $0.04$ would need $Z$ of about $2.05$, $1.88$ or $1.75$, i.e. the total's standard deviation would have to be roughly 2.4 to 2.9 meters, not 1.2. The common slip is $SD(S)=\sqrt n\,\sigma$ mistaken for $n\sigma$, or treating $0.12$ as a variance. Treating $0.12$ as a variance gives $SD(S)=3.46$ and $Z=1.44$, a tail of $0.075$, which is far from every option.

> [!tip] Intuition
> A sum of 100 steps is about $85\pm 1.2$ meters. Reaching 90 meters is a freak event. Whenever $Z$ is beyond about 3.5, choose the smallest option.

Taught in [[Lec_12-Central Limit Theorem and Normal Approximations]].

## Q20 — Central limit theorem for a mean

> A randomly chosen Israeli factory worker earns in a month an amount with expected value 8,900 shekels and standard deviation 2,500. What is the probability that the **average** monthly salary in a sample of 100 randomly chosen workers will be more than 9,000 shekels? (pick the closest value)
> a. $0.2456$  b. $0.3446$  c. $0.6554$  d. $0.7544$

> [!success] Official answer: B
> $0.3446$

For a sample mean the variance is divided by $n$, so the standard deviation of $\bar X$ is $\sigma/\sqrt n=2500/10=250$:

$$
\bar X\approx N\!\left(8900,\;250^2\right),
\qquad
Z=\frac{9000-8900}{250}=0.4.
$$

$$
P(\bar X>9000)=1-\Phi(0.4)=1-0.6554=0.3446.
$$

> [!example] Why the other options fail
> - **c** $0.6554$ is $\Phi(0.4)=P(\bar X\le 9000)$, the answer to the opposite question (a tail slip).
> - **a** $0.2456$ and **d** $0.7544=1-0.2456$ do not come from $Z=0.4$. A related slip, using $\sigma=2500$ instead of $250$, gives $Z=0.04$ and $P\approx 0.484$, which is not on the list either.

Taught in [[Lec_12-Central Limit Theorem and Normal Approximations]].

---

## Recap table

| Q | Key | Topic | One-line answer |
|---|---|---|---|
| 1 | C | Probability | $0.2\le P(B)\le 0.8$ from the Venn picture |
| 2 | A | Conditional probability | same numerator, smaller denominator, and the intersection is $\ge 0.2$ |
| 3 | B | Bayes | $0.5\cdot 0.1/0.8=0.0625$ |
| 4 | D | Total probability | $0.3x+0.5(1-x)=0.4$ gives $x=0.5$ |
| 5 | B* | Disjoint / independent | $P(A\cap B)=0.1=0.2\cdot 0.5$ (AI-written) |
| 6 | D | Combinatorics | $3!/5!=\tfrac1{20}$ |
| 7 | A | CDF table | flat CDF gives $P(X=2)=0$; last CDF value is 1 |
| 8 | B | Linear transformation | $E=2\cdot18-20=16$, $Var=4\cdot16=64$ |
| 9 | D | Poisson | $\lambda=0.75$, $1-e^{-0.75}=0.5276$ |
| 10 | B | Discrete uniform | $(20^2-1)/12=33\tfrac14$ |
| 11 | D | Sums of Bernoullis | $25(0.09)+64(0.16)=12.49$ |
| 12 | A | Chebyshev | at $k=2$, probability $\ge 0.75$, so $0.65$ is impossible |
| 13 | D | Correlation | negative and strong vs positive and weak |
| 14 | B | Covariance | $0.5\cdot 2\cdot 3=3$ |
| 15 | A* | Independence | $Cov=0=E(X)E(Y)$ (AI-written) |
| 16 | B | Density | $a^2/9=1$ gives $a=3$ |
| 17 | C | Uniform percentile | $1+0.35\cdot 20=8$ |
| 18 | B | Normal | $Z=1.2$, tail $0.1151$ |
| 19 | A | CLT, sum | $Z=4.17$, tail about $0$, closest is $0.01$ |
| 20 | B | CLT, mean | $SD=250$, $Z=0.4$, tail $0.3446$ |

*Q5 and Q15: all answers were accepted on the paper.*

## Agreement with the lecture working

The lecturer's board working in [[Lec_13-Exam Structure and Practice (Moed B 2023)]] reaches **the same letter as the key and as this note for every question** (Q12 is skipped there). The only differences are presentation: Q19 (table-rounded $0.0002$ versus exact $0.0000155$, same closest option, see the callout in Q19) and the lecture's slide typo "$SD=12$".

## Related notes
- [[Statistics A]]
- [[Lec_13-Exam Structure and Practice (Moed B 2023)]]
