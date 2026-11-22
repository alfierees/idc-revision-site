---
title: "PS6"
subject: statistics-a
source_doc: /papers/statistics-a/ps-6.pdf
tags:
  - statistics-a
  - binomial-distribution
  - bernoulli-distribution
  - uniform-distribution
  - expected-value
  - variance
  - linear-transformation
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Guavas.** We randomly choose 6 people out of a very large population. Market research shows that the probability that a person in this population likes guavas is 0.4. What is the probability that the following hold (parts a to c), and what are the expected value and variance of $X$, the number of people who like guavas out of the 6 people we chose (parts d and e)?
    solution: |
      Two moves repeat in every question of this set.

      1. **Name the distribution.** A fixed number of independent trials with the same success probability gives a [[Binomial Distribution]] $X \sim B(n,p)$. One trial gives a [[Bernoulli Distribution]]. A fair die with $m$ faces gives a [[Uniform Distribution]] $U(1,m)$.
      2. **Transform.** Money questions define the payoff $Y$ as a linear function of $X$, so use the [[Linear Transformation]] rules:

      $$
      E[aX+b] = aE[X] + b
      $$

      $$
      Var[aX+b] = a^2\,Var[X]
      $$

      > [!warning] The constant never moves the variance
      > Paying an entry fee shifts the expected value but leaves the variance untouched. Multiplying scales the variance by the **square** of the multiplier.

      | Distribution | PMF | $E[X]$ | $Var[X]$ |
      |---|---|---|---|
      | $B(n,p)$ | $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
      | Bernoulli$(p)$ | $P(X=1)=p$ | $p$ | $p(1-p)$ |
      | $U(a,b)$ | $\frac{1}{b-a+1}$ on each integer | $\frac{a+b}{2}$ | $\frac{(b-a+1)^2-1}{12}$ |

      > [!tip] Why binomial?
      > The population is "very large", so each person chosen is (almost exactly) independent of the others with the same $p=0.4$. Taking a small sample from a huge population is the binomial situation. For a small population we would sample without replacement and the [[Hypergeometric Distribution]] would be the right model.

      Let $X$ be the number of chosen people who like guavas. Then

      $$
      X \sim B(6,\,0.4)
      $$

      ![](/images/statistics-a/ps06-q1-guava-binomial.png)

      *The distribution of $X$. Bars for $X<4$ are blue, bars for $X \ge 4$ are orange; the dashed line is $E[X]=2.4$.*
    related_terms: ["binomial-distribution", "linear-transformation", "bernoulli-distribution", "uniform-distribution", "hypergeometric-distribution"]
    source_doc_page: 1
  - id: "1a"
    text: |
      4 of the people we randomly chose like guavas.
    solution: |
      $$
      P(X=4) = \binom{6}{4}\,0.4^4\,0.6^2 = \frac{6!}{4!\,2!}\,0.4^4\,0.6^2 = 15 \cdot 0.4^4 \cdot 0.6^2 = 0.138
      $$

      > [!success] Answer: 0.138

      $\binom{6}{4}=15$ counts which 4 of the 6 people are the guava fans; each such arrangement has probability $0.4^4\cdot 0.6^2$.
    related_terms: ["binomial-distribution", "binomial-coefficient"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Less than 4 of the people we randomly chose like guavas.
    solution: |
      "Less than 4" means $X \in \{0,1,2,3\}$. Adding four terms is slow, so use the **complement**: the other values are 4, 5 and 6.

      $$
      P(X<4) = 1 - P(X=4) - P(X=5) - P(X=6)
      $$

      $$
      = 1 - 0.138 - \binom{6}{5}\,0.4^5\,0.6^1 - \binom{6}{6}\,0.4^6\,0.6^0
      $$

      $$
      = 1 - 0.138 - 6\cdot 0.4^5\cdot 0.6 - 1\cdot 0.4^6 = 0.821
      $$

      > [!success] Answer: 0.821
    related_terms: ["binomial-distribution", "complement-rule", "binomial-coefficient"]
    source_doc_page: 1
  - id: "1c"
    text: |
      At least 4 of the people we randomly chose like guavas.
    solution: |
      "At least 4" is the complement of "fewer than 4":

      $$
      P(X \ge 4) = 1 - P(X<4) = 1 - 0.821 = 0.179
      $$

      > [!success] Answer: 0.179
    related_terms: ["complement-rule", "binomial-distribution"]
    source_doc_page: 1
  - id: "1d"
    text: |
      What is the expected value of $X$, where $X$ is the number of people who like guavas out of the 6 people we chose?
    solution: |
      $$
      E[X] = np = 6 \cdot 0.4 = 2.4
      $$

      > [!success] Answer: 2.4
    related_terms: ["expected-value", "binomial-distribution"]
    source_doc_page: 1
  - id: "1e"
    text: |
      What is the variance of $X$?
    solution: |
      $$
      Var[X] = np(1-p) = 6 \cdot 0.4 \cdot 0.6 = 1.44
      $$

      > [!success] Answer: 1.44
    related_terms: ["variance", "binomial-distribution"]
    source_doc_page: 1
  - id: "2"
    text: |
      **The slot machine.** A gambler plays 10 independent games on a slot machine. Each game costs him 1 shekel. The probability he wins any single game is 0.25, and the prize for winning is 4 shekels, while the prize for losing is nothing.
    solution: |
      Let $X$ be the number of games won, and $Y$ the money earned overall.

      $$
      X \sim B(10,\,0.25)
      $$

      $$
      Y = 4X - 10
      $$

      > [!tip] Intuition
      > The prize is 4 shekels per win, so $4X$ is the total prize. The cost is 1 shekel per game over 10 games, so 10 shekels leave the pocket whatever happens. Net earnings are $4X-10$. This is exactly a [[Linear Transformation]] of a binomial.

      ![](/images/statistics-a/ps06-q2-slot-binomial.png)

      *The distribution of $X$ (games won). Orange bars are the "at most 1 win" cases of part (c); the green sliver is $X=7$ from part (a).*
    related_terms: ["binomial-distribution", "linear-transformation"]
    source_doc_page: 1
  - id: "2a"
    text: |
      What is the probability he earns 18 shekels overall?
    solution: |
      Translate the money event into a statement about $X$:

      $$
      Y = 18 \iff 4X - 10 = 18 \iff X = 7
      $$

      $$
      P(Y=18) = P(X=7) = \binom{10}{7}\,0.25^7\,0.75^3 = \frac{10!}{7!\,3!}\,0.25^7\,0.75^3 = 120\cdot 0.25^7\cdot 0.75^3 = 0.0031
      $$

      > [!success] Answer: 0.0031
    related_terms: ["binomial-distribution", "binomial-coefficient", "linear-transformation"]
    source_doc_page: 1
  - id: "2b"
    text: |
      What is the probability he will win:

      - a. all 10 games
      - b. 8 games
      - c. at most 1 game
      - d. at least 1 game
    solution: |
      **a. All 10 games**

      $$
      P(X=10) = \binom{10}{10}\,0.25^{10}\,0.75^0 = 1\cdot 0.25^{10} = 9.5\cdot 10^{-7}
      $$

      > [!success] Answer
      > $9.5\cdot 10^{-7}$
      >

      **b. Exactly 8 games**

      $$
      P(X=8) = \binom{10}{8}\,0.25^8\,0.75^2 = \frac{10!}{8!\,2!}\,0.25^8\,0.75^2 = 45\cdot 0.25^8\cdot 0.75^2 = 0.000386
      $$

      > [!success] Answer: 0.000386

      **c. At most 1 game**

      $$
      P(X \le 1) = P(X=0) + P(X=1) = \binom{10}{0}\,0.25^0\,0.75^{10} + \binom{10}{1}\,0.25^1\,0.75^9 = 0.244
      $$

      > [!success] Answer: 0.244

      **d. At least 1 game.** The complement of "at least 1" is "none":

      $$
      P(X \ge 1) = 1 - P(X=0) = 1 - 0.75^{10} = 0.9437
      $$

      > [!success] Answer: 0.9437
    related_terms: ["binomial-distribution", "binomial-coefficient", "complement-rule"]
    source_doc_page: 1
  - id: "2c"
    text: |
      What is the expected value of the number of games he will win?
    solution: |
      $$
      E[X] = np = 10 \cdot 0.25 = 2.5
      $$

      > [!success] Answer: 2.5
    related_terms: ["expected-value", "binomial-distribution"]
    source_doc_page: 1
  - id: "2d"
    text: |
      What is the variance of the number of games he will win?
    solution: |
      $$
      Var[X] = np(1-p) = 10 \cdot 0.25 \cdot 0.75 = 1.875
      $$

      > [!success] Answer: 1.875
    related_terms: ["variance", "binomial-distribution"]
    source_doc_page: 1
  - id: "2e"
    text: |
      What is the expected value of the amount of money he will earn overall?
    solution: |
      $$
      E[Y] = E[4X-10] = 4\,E[X] - 10 = 4\cdot 2.5 - 10 = 0
      $$

      > [!success] Answer: 0

      > [!tip] Intuition
      > The game is exactly **fair**: on average he wins back what he pays. Each game costs 1 and pays $4\cdot 0.25 = 1$ in expectation.
    related_terms: ["expected-value", "linear-transformation"]
    source_doc_page: 1
  - id: "2f"
    text: |
      What is the variance of the amount of money he will earn overall?
    solution: |
      $$
      Var[Y] = Var[4X-10] = Var[4X] = 4^2\,Var[X] = 16\cdot 1.875 = 30
      $$

      > [!success] Answer: 30

      The $-10$ drops out; the 4 is squared.
    related_terms: ["variance", "linear-transformation"]
    source_doc_page: 1
  - id: "3"
    text: |
      **A 20-sided die bet.** John offers you a bet: you pay him 10 shekels and he will roll a fair 20-sided die and pay you as many shekels as the number that comes up on the die.
    solution: |
      Let $X$ be the number on the die and $Y$ the shekels earned:

      $$
      X \sim U(1,20)
      $$

      $$
      Y = X - 10
      $$
    related_terms: ["uniform-distribution", "linear-transformation"]
    source_doc_page: 1
  - id: "3a"
    text: |
      What is the expected value of the number of shekels you will earn from this bet?
    solution: |
      $$
      E[X] = \frac{1+20}{2} = 10.5
      $$

      $$
      E[Y] = E[X-10] = E[X] - 10 = 10.5 - 10 = 0.5
      $$

      > [!success] Answer: 0.5
    related_terms: ["uniform-distribution", "expected-value", "linear-transformation"]
    source_doc_page: 1
  - id: "3b"
    text: |
      What is the variance of the number of shekels you will earn from this bet?
    solution: |
      $$
      Var[X] = \frac{(20-1+1)^2 - 1}{12} = \frac{20^2-1}{12} = \frac{399}{12} = 33.25
      $$

      $$
      Var[Y] = Var[X-10] = Var[X] = 33.25
      $$

      > [!success] Answer: 33.25

      Subtracting the 10-shekel entry fee shifts the mean but not the spread.
    related_terms: ["uniform-distribution", "variance", "linear-transformation"]
    source_doc_page: 1
  - id: "4"
    text: |
      **Jenny's bet.** Jenny offers you a bet: you pay her 2 shekels and she will roll a 6-sided die. If the number on the die is 6, she will pay you 20 shekels, otherwise she will pay you nothing.
    solution: |
      Let $X$ be 0 if the die rolls 5 or less and 1 if it rolls a 6. Let $Y$ be the shekels earned:

      $$
      X \sim \text{Bernoulli}\!\left(\tfrac16\right)
      $$

      $$
      Y = 20X - 2
      $$
    related_terms: ["bernoulli-distribution", "linear-transformation"]
    source_doc_page: 2
  - id: "4a"
    text: |
      What is the expected value of the number of shekels you will earn from this bet?
    solution: |
      $$
      E[X] = p = \tfrac16
      $$

      $$
      E[Y] = E[20X-2] = 20\,E[X] - 2 = 20\cdot\tfrac16 - 2 = 3\tfrac13 - 2 = 1\tfrac13
      $$

      > [!success] Answer
      > $1\tfrac13$
      >
    related_terms: ["bernoulli-distribution", "expected-value", "linear-transformation"]
    source_doc_page: 2
  - id: "4b"
    text: |
      What is the variance of the number of shekels you will earn from this bet?
    solution: |
      $$
      Var[X] = p(1-p) = \tfrac16\cdot\tfrac56 = \tfrac{5}{36}
      $$

      $$
      Var[Y] = Var[20X-2] = 20^2\,Var[X] = 400\cdot\tfrac{5}{36} = 55.555\ldots
      $$

      > [!success] Answer
      > $55.\overline{5}$ (that is, $\tfrac{500}{9}$)
      >
    related_terms: ["bernoulli-distribution", "variance", "linear-transformation"]
    source_doc_page: 2
---

*Related: [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_07-Known Distributions]]*
