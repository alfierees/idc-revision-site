---
title: "Quick Self-Test"
subject: statistics-a
type: self-test
description: "A 20-question mini paper in the exam's own slot order, all new questions, with the working behind every answer. Pick an option to check it."
course: Statistics A
semester: 1
year: 1
order: 6
tags:
  - statistics-a
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "Q1 · Bounds on an intersection"
    text: |
      $P(A) = 0.5$ and $P(B) = 0.7$. Which interval must contain $P(A \cap B)$?
    options:
      - label: a
        text: "$0 \\le P(A \\cap B) \\le 0.5$"
        why: "The lower end is too loose: $0.5 + 0.7 > 1$, so the events must overlap."
      - label: b
        text: "$0.2 \\le P(A \\cap B) \\le 0.5$"
        correct: true
        why: "Lower bound $0.5 + 0.7 - 1 = 0.2$, upper bound the smaller event, $0.5$."
      - label: c
        text: "$0.2 \\le P(A \\cap B) \\le 0.7$"
        why: "The overlap can't exceed the smaller event, $P(A) = 0.5$."
      - label: d
        text: "$0.35 \\le P(A \\cap B) \\le 0.5$"
        why: "$0.35 = 0.5 \\times 0.7$ is the product, which only holds under independence."
    solution: |
      The intersection is largest when $A$ sits inside $B$: $P(A) = 0.5$. It is smallest when the union fills $\Omega$: $P(A \cap B) = P(A) + P(B) - P(A \cup B) \ge 0.5 + 0.7 - 1 = 0.2$.
  - id: "2"
    title: "Q2 · Total probability"
    text: |
      30% of a shop's customers are new. 20% of new customers return an item, and 10% of existing customers do. What is the probability a random customer returns an item?
    options:
      - label: a
        text: "0.13"
        correct: true
        why: "$0.3(0.2) + 0.7(0.1) = 0.06 + 0.07$."
      - label: b
        text: "0.15"
        why: "That is the plain average of 20% and 10%. The groups have different sizes, so weight them."
      - label: c
        text: "0.06"
        why: "Only the new-customer path. Add the existing-customer path too."
      - label: d
        text: "0.30"
        why: "That is the share of new customers, not of returns."
    solution: |
      $$
      P(R) = P(R \mid N)P(N) + P(R \mid \bar N)P(\bar N) = 0.2(0.3) + 0.1(0.7) = 0.13
      $$
  - id: "3"
    title: "Q3 · Bayes"
    text: |
      Same shop. A customer has just returned an item. What is the probability they are a new customer?
    options:
      - label: a
        text: "0.20"
        why: "That is $P(R \\mid N)$, the conditional the wrong way round."
      - label: b
        text: "0.30"
        why: "That is the base rate $P(N)$ before you knew about the return."
      - label: c
        text: "0.46"
        correct: true
        why: "$P(N \\mid R) = 0.06 / 0.13 \\approx 0.46$."
      - label: d
        text: "0.60"
        why: "$0.06/0.1$ divides by the wrong probability."
    solution: |
      $$
      P(N \mid R) = \frac{P(R \mid N)P(N)}{P(R)} = \frac{0.2 \times 0.3}{0.13} \approx 0.46
      $$

      New customers are 30% of everyone but 46% of returns, because they return twice as often.
  - id: "4"
    title: "Q4 · Disjoint or independent?"
    text: |
      $P(A) = 0.4$, $P(B) = 0.5$ and $P(A \cup B) = 0.8$. The events are:
    options:
      - label: a
        text: "disjoint and independent"
        why: "Disjoint events with positive probabilities are never independent."
      - label: b
        text: "not disjoint and independent"
        why: "$P(A \\cap B) = 0.1$ but $P(A)P(B) = 0.2$, so not independent."
      - label: c
        text: "disjoint and not independent"
        why: "$P(A \\cap B) = 0.1 \\ne 0$, so they overlap."
      - label: d
        text: "not disjoint and not independent"
        correct: true
        why: "$P(A \\cap B) = 0.4 + 0.5 - 0.8 = 0.1$: not 0, and not $0.2$."
    solution: |
      Union rule: $P(A \cap B) = 0.4 + 0.5 - 0.8 = 0.1$. Disjoint needs 0, so they are not disjoint. Independent needs $0.4 \times 0.5 = 0.2$, so they are not independent either.
  - id: "5"
    title: "Q5 · Counting a committee"
    text: |
      A committee of 4 is chosen at random from 6 women and 4 men. What is the probability it has exactly 2 women?
    options:
      - label: a
        text: "$\\tfrac37$"
        correct: true
        why: "$\\binom62\\binom42 / \\binom{10}{4} = 15 \\cdot 6 / 210 = 90/210$."
      - label: b
        text: "$\\tfrac27$"
        why: "Check the count: $\\binom62 = 15$ and $\\binom42 = 6$, so 90 of the 210 committees."
      - label: c
        text: "$\\tfrac{6}{35}$"
        why: "That uses ordered draws on top and unordered on the bottom. Use $\\binom{n}{k}$ in both."
      - label: d
        text: "$\\tfrac12$"
        why: "Half the people are not women (6 of 10), and committees are not equally split by default."
    solution: |
      Order doesn't matter and nobody is picked twice: combinations. $\lvert \Omega \rvert = \binom{10}{4} = 210$. Choose 2 of the 6 women and 2 of the 4 men: $15 \times 6 = 90$. $P = 90/210 = 3/7$.
  - id: "6"
    title: "Q6 · Expected value from a CDF table"
    text: |
      $X$ takes the values 1, 2, 4, 5 with $P(X \le 1) = 0.3$, $P(X \le 2) = 0.3$, $P(X \le 4) = 0.8$, $P(X \le 5) = 1$. What is $E(X)$?
    options:
      - label: a
        text: "3.0"
        why: "That is the plain average of the four values. Weight them by their probabilities."
      - label: b
        text: "3.3"
        correct: true
        why: "PMF from the jumps: 0.3, 0, 0.5, 0.2. $E = 0.3 + 0 + 2 + 1 = 3.3$."
      - label: c
        text: "2.3"
        why: "You left out the last jump, $P(X = 5) = 1 - 0.8 = 0.2$."
      - label: d
        text: "9.1"
        why: "That multiplies each value by the CDF, not by the probability of that value."
    solution: |
      $P(X = x_i)$ is the jump of the CDF: $P(1) = 0.3$, $P(2) = 0.3 - 0.3 = 0$, $P(4) = 0.8 - 0.3 = 0.5$, $P(5) = 1 - 0.8 = 0.2$.

      $$
      E(X) = 1(0.3) + 2(0) + 4(0.5) + 5(0.2) = 3.3
      $$
  - id: "7"
    title: "Q7 · A bet as a linear transformation"
    text: |
      You pay 8 to play. A number $X$ is drawn with $E(X) = 4$ and $SD(X) = 2$, and you are paid $3X$. What are the expected value and variance of your earnings?
    options:
      - label: a
        text: "$E = 12$, $Var = 36$"
        why: "12 is the payout. Subtract the 8 you paid."
      - label: b
        text: "$E = 4$, $Var = 18$"
        why: "$9 \\times 2$ uses the SD where the variance belongs. $Var(X) = 2^2 = 4$, so $9 \\times 4$."
      - label: c
        text: "$E = 4$, $Var = 6$"
        why: "6 is $3 \\times 2$, the SD of the earnings. The variance is its square."
      - label: d
        text: "$E = 4$, $Var = 36$"
        correct: true
        why: "$Y = 3X - 8$: $E = 12 - 8 = 4$, $Var = 9 \\times 4 = 36$."
    solution: |
      Earnings $Y = 3X - 8$.

      $$
      E(Y) = 3(4) - 8 = 4, \qquad Var(Y) = 3^2 \cdot 2^2 = 36
      $$

      The $-8$ moves the mean but never the variance.
  - id: "8"
    title: "Q8 · Geometric tail"
    text: |
      A player makes each free throw with probability 0.4, independently. She shoots until she makes one. What is the probability she needs **more than 3** throws?
    options:
      - label: a
        text: "0.144"
        why: "That is $P(X = 3)$: miss, miss, make. The question wants more than 3."
      - label: b
        text: "0.216"
        correct: true
        why: "More than 3 throws means the first 3 all miss: $0.6^3$."
      - label: c
        text: "0.064"
        why: "$0.4^3$ is three makes in a row."
      - label: d
        text: "0.36"
        why: "$0.6^2$ only covers two misses."
    solution: |
      $X \sim G(0.4)$ counts throws until the first make. The tail rule: $P(X > k) = (1 - p)^k$, so $P(X > 3) = 0.6^3 = 0.216$. Also $E(X) = 1/0.4 = 2.5$ throws.
  - id: "9"
    title: "Q9 · Poisson with a rescaled rate"
    text: |
      A help desk gets 6 calls an hour on average. What is the probability of **no** calls in a 10-minute break?
    options:
      - label: a
        text: "0.0025"
        why: "$e^{-6}$ uses the hourly rate. Rescale it to 10 minutes first."
      - label: b
        text: "0.6321"
        why: "$1 - e^{-1}$ is the probability of at least one call."
      - label: c
        text: "0.1667"
        why: "$1/6$ is the share of the hour, not a probability of the count."
      - label: d
        text: "0.3679"
        correct: true
        why: "$\\lambda = 6 \\times \\tfrac{10}{60} = 1$, $P(X = 0) = e^{-1}$."
    solution: |
      The rate scales with the interval: $\lambda = 6 \cdot \tfrac16 = 1$ per 10 minutes, so $X \sim P(1)$ and

      $$
      P(X = 0) = e^{-1}\frac{1^0}{0!} = 0.3679
      $$
  - id: "10"
    title: "Q10 · Binomial or hypergeometric?"
    text: |
      A class has 30 students, 12 of whom smoke. 5 different students are picked at random. $X$ is the number of smokers picked. Which is correct?
    options:
      - label: a
        text: "Binomial, $E = 2$, $Var = 1.2$"
        why: "Picking different students is sampling without replacement from a finite group."
      - label: b
        text: "Hypergeometric, $E = 2$, $Var = 1.2$"
        why: "Right shape and mean, but the variance needs the factor $\\tfrac{N-n}{N-1} = \\tfrac{25}{29}$."
      - label: c
        text: "Hypergeometric, $E = 2$, $Var \\approx 1.03$"
        correct: true
        why: "$HG(30, 12, 5)$: $E = 5 \\cdot 0.4 = 2$, $Var = \\tfrac{25}{29} \\cdot 5 \\cdot 0.4 \\cdot 0.6 \\approx 1.03$."
      - label: d
        text: "Binomial, $E = 2$, $Var \\approx 1.03$"
        why: "The variance is the hypergeometric one; the name doesn't match it."
    solution: |
      Without replacement from $N = 30$ with $D = 12$ successes, sample $n = 5$: $X \sim HG(30, 12, 5)$.

      $$
      E(X) = 5 \cdot \tfrac{12}{30} = 2, \qquad Var(X) = \tfrac{30 - 5}{30 - 1} \cdot 5 \cdot 0.4 \cdot 0.6 \approx 1.03
      $$

      The binomial variance $1.2$ is a little larger: a finite population leaves less room to vary.
  - id: "11"
    title: "Q11 · Variance of two independent prizes"
    text: |
      Game 1 pays 10 with probability 0.5; game 2 pays 20 with probability 0.1. The games are independent. What is the variance of your total winnings?
    options:
      - label: a
        text: "4.3"
        why: "$10(0.25) + 20(0.09)$ forgets to square the prizes."
      - label: b
        text: "0.34"
        why: "$0.25 + 0.09$ is the variance of the win indicators, before scaling by the prizes."
      - label: c
        text: "7.81"
        why: "That is the standard deviation, $\\sqrt{61}$."
      - label: d
        text: "61"
        correct: true
        why: "$10^2(0.5)(0.5) + 20^2(0.1)(0.9) = 25 + 36$."
    solution: |
      Total $= 10X + 20Y$ with independent Bernoulli $X$, $Y$.

      $$
      Var = 10^2 \cdot 0.25 + 20^2 \cdot 0.09 = 25 + 36 = 61
      $$
  - id: "12"
    title: "Q12 · Conditional expectation from a joint table"
    text: |
      The joint distribution: $P(X{=}0, Y{=}0) = 0.1$, $P(X{=}0, Y{=}1) = 0.3$, $P(X{=}1, Y{=}0) = 0.2$, $P(X{=}1, Y{=}1) = 0.4$. What is $E(X \mid Y = 1)$?
    options:
      - label: a
        text: "0.4"
        why: "That is the cell $P(X = 1, Y = 1)$. Divide it by $P(Y = 1)$."
      - label: b
        text: "0.6"
        why: "That is the unconditional $E(X) = P(X = 1)$."
      - label: c
        text: "0.57"
        correct: true
        why: "$P(Y=1) = 0.7$, $P(X=1 \\mid Y=1) = 0.4/0.7 \\approx 0.57$, and $E(X \\mid Y=1)$ equals it."
      - label: d
        text: "0.67"
        why: "$0.4/0.6$ divides by $P(X = 1)$ instead of $P(Y = 1)$."
    solution: |
      Take the $Y = 1$ column: $0.3$ and $0.4$, total $0.7$. Conditional distribution: $P(X = 0 \mid Y = 1) = 3/7$, $P(X = 1 \mid Y = 1) = 4/7$.

      $$
      E(X \mid Y = 1) = 0 \cdot \tfrac37 + 1 \cdot \tfrac47 \approx 0.57
      $$
  - id: "13"
    title: "Q13 · Covariance from the same table"
    text: |
      Same table as Q12. What is $Cov(X, Y)$?
    options:
      - label: a
        text: "$-0.02$"
        correct: true
        why: "$E(XY) = 0.4$, $E(X)E(Y) = 0.6 \\times 0.7 = 0.42$."
      - label: b
        text: "0.4"
        why: "That is $E(XY)$ alone. Subtract $E(X)E(Y)$."
      - label: c
        text: "0.02"
        why: "Right size, wrong sign: $0.4 - 0.42$ is negative."
      - label: d
        text: "0"
        why: "Not independent: $P(X=0,Y=0) = 0.1$ but $0.4 \\times 0.3 = 0.12$."
    solution: |
      $E(X) = 0.6$, $E(Y) = 0.7$, and $XY = 1$ only in the cell $(1,1)$, so $E(XY) = 0.4$.

      $$
      Cov(X,Y) = E(XY) - E(X)E(Y) = 0.4 - 0.42 = -0.02
      $$
  - id: "14"
    title: "Q14 · Correlation after rescaling"
    text: |
      $\rho(X, Y) = 0.6$. Let $U = 3 - 2X$ and $V = 5Y + 1$. What is $\rho(U, V)$?
    options:
      - label: a
        text: "$-0.6$"
        correct: true
        why: "$b \\cdot d = (-2)(5) < 0$ flips the sign; the size stays 0.6."
      - label: b
        text: "0.6"
        why: "The slope $-2$ on $X$ flips the sign."
      - label: c
        text: "$-6$"
        why: "That is how the covariance scales ($bd\\,Cov$). Correlation is unit-free."
      - label: d
        text: "$-0.12$"
        why: "Multiplying $0.6$ by $-2/10$ has no basis: only the sign of $bd$ matters."
    solution: |
      $Cov(U, V) = (-2)(5)Cov(X,Y)$ and $SD(U)SD(V) = 2 \cdot 5 \cdot SD(X)SD(Y)$. The 10s cancel and the minus stays: $\rho(U,V) = -0.6$.
  - id: "15"
    title: "Q15 · Correlation from the variance of a difference"
    text: |
      $Var(X) = 9$, $Var(Y) = 16$ and $Var(X - Y) = 13$. What is $\rho(X, Y)$?
    options:
      - label: a
        text: "$-0.5$"
        why: "For a difference the covariance enters with a minus: $Var(X - Y) = Var X + Var Y - 2Cov$."
      - label: b
        text: "0.25"
        why: "$Cov = 6$, but divide by $SD(X)SD(Y) = 3 \\times 4 = 12$, not by 24."
      - label: c
        text: "0.5"
        correct: true
        why: "$13 = 25 - 2Cov$ gives $Cov = 6$, and $\\rho = 6/12$."
      - label: d
        text: "6"
        why: "That is the covariance. A correlation lies between $-1$ and 1."
    solution: |
      $Var(X - Y) = Var(X) + Var(Y) - 2Cov(X,Y)$ (it is $Var(aX + bY)$ with $b = -1$).

      $$
      13 = 9 + 16 - 2Cov \Rightarrow Cov = 6, \qquad \rho = \frac{6}{3 \cdot 4} = 0.5
      $$
  - id: "16"
    title: "Q16 · A density with a constant"
    text: |
      $f(x) = c\,x^2$ for $0 \le x \le 3$ and 0 otherwise. What are $c$ and $P(X < 1.5)$?
    options:
      - label: a
        text: "$c = \\tfrac19$, $P = 0.125$"
        correct: true
        why: "$\\int_0^3 cx^2\\,dx = 9c = 1$, and $\\int_0^{1.5} \\tfrac{x^2}{9}dx = \\tfrac{1.5^3}{27}$."
      - label: b
        text: "$c = \\tfrac13$, $P = 0.375$"
        why: "$c = 1/3$ makes the total area 3, not 1."
      - label: c
        text: "$c = \\tfrac19$, $P = 0.5$"
        why: "1.5 is the midpoint of the range, but this density is not symmetric: most mass is on the right."
      - label: d
        text: "$c = \\tfrac{1}{27}$, $P = 0.125$"
        why: "$\\int_0^3 x^2\\,dx = 9$, so $c = 1/9$. With $1/27$ the area is only $1/3$."
    solution: |
      $$
      \int_0^3 c\,x^2\,dx = c\left[\frac{x^3}{3}\right]_0^3 = 9c = 1 \Rightarrow c = \tfrac19
      $$

      $$
      P(X < 1.5) = \int_0^{1.5} \frac{x^2}{9}\,dx = \frac{1.5^3}{27} = 0.125
      $$
  - id: "17"
    title: "Q17 · Uniform percentile"
    text: |
      $X \sim U(-4, 6)$ (continuous). What is the 20th percentile?
    options:
      - label: a
        text: "2"
        why: "$0.2 \\times 10 = 2$ is the distance from the start. Add the start, $-4$."
      - label: b
        text: "$-2$"
        correct: true
        why: "$C_{0.2} = -4 + 0.2 \\times 10$."
      - label: c
        text: "$-3.2$"
        why: "$-4 \\times 0.8$ scales the start, which isn't how a percentile works."
      - label: d
        text: "1"
        why: "That is the median, $\\tfrac{-4 + 6}{2}$."
    solution: |
      $F(x) = \dfrac{x + 4}{10}$. Set $F(C) = 0.2$: $C = -4 + 0.2 \times 10 = -2$.
  - id: "18"
    title: "Q18 · A normal cut-off"
    text: |
      Exam scores are $N(70, 8^2)$. The top 10% get an A. What is the lowest A score? (closest value)
    options:
      - label: a
        text: "59.76"
        why: "That cuts off the **bottom** 10%: $70 - 1.28 \\times 8$."
      - label: b
        text: "83.16"
        why: "$z = 1.645$ is the top 5%, not 10%."
      - label: c
        text: "78"
        why: "$\\mu + \\sigma$ leaves about 16% above it."
      - label: d
        text: "80.24"
        correct: true
        why: "Area to the left 0.90 ⇒ $z = 1.28$ ⇒ $70 + 1.28 \\times 8$."
    solution: |
      Top 10% means 90% are below. Inside the Z table, $\Phi(z) \approx 0.90$ at $z = 1.28$.

      $$
      t = \mu + z\sigma = 70 + 1.28 \times 8 = 80.24
      $$
  - id: "19"
    title: "Q19 · CLT for an average"
    text: |
      Battery life has mean 40 hours and SD 10 hours. You test 25 batteries. What is the probability their **average** life is below 37 hours? (closest value)
    options:
      - label: a
        text: "0.3821"
        why: "$z = -0.3$ uses $\\sigma = 10$. An average has SD $\\sigma/\\sqrt n = 2$."
      - label: b
        text: "0.0668"
        correct: true
        why: "$SD(\\bar X) = 10/5 = 2$, $z = -1.5$, $\\Phi(-1.5) = 0.0668$."
      - label: c
        text: "0.9332"
        why: "That is $P(\\bar X > 37)$, the opposite tail."
      - label: d
        text: "0.2266"
        why: "$z = -0.75$ uses the variance $\\sigma^2/n = 4$ as if it were the SD."
    solution: |
      $$
      \bar X \sim N\!\left(40,\ \frac{10^2}{25}\right) = N(40,\ 2^2), \qquad z = \frac{37 - 40}{2} = -1.5
      $$

      $\Phi(-1.5) = 1 - \Phi(1.5) = 1 - 0.9332 = 0.0668$.
  - id: "20"
    title: "Q20 · Normal approximation of a proportion"
    text: |
      30% of voters support a party. In a random sample of 84 voters, what is the probability that **more than 40%** support it? (closest value)
    options:
      - label: a
        text: "0.9772"
        why: "That is $\\Phi(2)$, the area below. The question asks for more than 40%."
      - label: b
        text: "0.1587"
        why: "$z = 1$ comes from a wrong SD. $\\sqrt{0.3 \\times 0.7/84} = 0.05$."
      - label: c
        text: "0.0228"
        correct: true
        why: "$SD = 0.05$, $z = (0.4 - 0.3)/0.05 = 2$, $1 - 0.9772$."
      - label: d
        text: "0.05"
        why: "0.05 is the SD of $\\hat P$, not a probability."
    solution: |
      Check $np = 25.2 \ge 5$ and $n(1-p) = 58.8 \ge 5$.

      $$
      \hat P \sim N\!\left(0.3,\ \frac{0.3 \cdot 0.7}{84}\right) = N(0.3,\ 0.05^2), \qquad z = \frac{0.4 - 0.3}{0.05} = 2
      $$

      $P(\hat P > 0.4) = 1 - \Phi(2) = 0.0228$.
---

> Twenty new questions in the same order as the real paper: Q1 to Q4 probability, Q5 counting, Q6 to Q7 random variables, Q8 to Q11 distributions, Q12 to Q15 joint distributions, Q16 to Q17 continuous, Q18 to Q20 normal and CLT. Give yourself about 9 minutes a question, the exam's pace. The working appears once you pick an option. For the real thing, see the [[Past Paper Topic Map]] and the past papers.
