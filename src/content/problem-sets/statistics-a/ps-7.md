---
title: "PS7"
subject: statistics-a
source_doc: /papers/statistics-a/ps-7.pdf
tags:
  - statistics-a
  - geometric-distribution
  - hypergeometric-distribution
  - poisson-distribution
  - expected-value
  - variance
  - linear-transformation
ai_drafted: true
questions:
  - id: "1"
    text: |
      A man is picking apples from a large apple tree. 20% of the apples on the tree are bad. He will keep picking apples until he has a good apple. $X$ is the number of apples he picks.
    solution: |
      Each question here is a "which distribution?" decision, then plugging into the formulas.

      Formulas used for the geometric distribution:

      $$
      X \sim G(p): \quad P(X=k) = (1-p)^{k-1}\,p, \quad P(X>k) = (1-p)^k, \quad E(X) = \frac{1}{p}, \quad Var(X) = \frac{1-p}{p^2}
      $$

      > [!tip] Intuition
      > Geometric: "how long until it happens?" (unbounded, $1,2,3,\dots$). Hypergeometric: "how many successes in a sample taken from a finite pile?" (bounded). Poisson: "how many arrivals in a stretch of time?" (unbounded, $0,1,2,\dots$).
    related_terms: ["geometric-distribution"]
    source_doc_page: 1
  - id: "1a"
    text: |
      What is the distribution of $X$?
    solution: |
      > [!success] Answer
      > $X \sim G(0.8)$

      The tree is "large", so removing one apple barely changes the share of bad ones: every pick is an independent try with the same success probability. "Success" here is a **good** apple, so $p = 1 - 0.2 = 0.8$, and $X$ counts picks up to and including the first success. That is the [[Geometric Distribution]].

      > [!warning] Trap
      > The parameter is the probability of *success* (a good apple, $0.8$), not the 20% quoted in the question.
    related_terms: ["geometric-distribution", "independent-and-identically-distributed"]
    source_doc_page: 1
  - id: "1b"
    text: |
      What is the probability he will pick 3 apples?
    solution: |
      > [!success] Answer
      > $P(X=3) = 0.032$

      Two bad apples, then a good one:

      $$
      P(X=3) = 0.2^2 \cdot 0.8 = 0.04 \cdot 0.8 = 0.032
      $$
    related_terms: ["geometric-distribution"]
    source_doc_page: 1
  - id: "1c"
    text: |
      What is the probability he will pick more than 2 apples?
    solution: |
      > [!success] Answer
      > $P(X>2) = 0.04$

      More than 2 picks means the first two apples were both bad, so the tail formula gives

      $$
      P(X>2) = 0.2^2 = 0.04
      $$

      > [!example] Check by summing
      > $1 - P(X=1) - P(X=2) = 1 - 0.8 - 0.16 = 0.04$. Same result.

      ![](/images/statistics-a/ps07-q1-geometric-pmf.png)

      *The geometric pmf for $p=0.8$ falls fast. The red bar is part (b); red and blue bars together (all $k \ge 3$) add up to part (c).*
    related_terms: ["geometric-distribution", "complement-rule"]
    source_doc_page: 1
  - id: "1d"
    text: |
      What is the expected value of the number of apples he picks?
    solution: |
      > [!success] Answer
      > $E(X) = 1.25$

      $$
      E(X) = \frac{1}{p} = \frac{1}{0.8} = 1.25
      $$
    related_terms: ["geometric-distribution", "expected-value"]
    source_doc_page: 1
  - id: "1e"
    text: |
      What is the standard deviation of the number of apples he picks?
    solution: |
      > [!success] Answer
      > $Var(X) = 0.3125$, so $SD(X) \approx 0.559$

      $$
      Var(X) = \frac{1-p}{p^2} = \frac{1-0.8}{0.8^2} = \frac{0.2}{0.64} = 0.3125
      $$

      $$
      SD(X) = \sqrt{0.3125} \approx 0.559
      $$
    related_terms: ["geometric-distribution", "variance", "standard-deviation"]
    source_doc_page: 1
  - id: "2"
    text: |
      An entrepreneur invested in 20 companies over the last 10 years. If we know that 9 of the companies she invested in succeeded, what is the probability that 3 of the last 5 companies were successful?
    solution: |
      > [!success] Answer
      > $X \sim HG(20, 9, 5)$ and $P(X=3) \approx 0.2979$ (the official solution's value)

      Formula used:

      $$
      X \sim HG(N, D, n): \quad P(X=k) = \frac{\binom{D}{k}\binom{N-D}{n-k}}{\binom{N}{n}}
      $$

      Let $X$ be the number of successful companies among the last 5. Treat the last 5 as a sample drawn **without replacement** from the 20 companies, of which $D = 9$ are successes, so $N = 20$, $D = 9$, $n = 5$:

      $$
      P(X=3) = \frac{\binom{9}{3}\binom{11}{2}}{\binom{20}{5}} = \frac{84 \cdot 55}{15504} = \frac{4620}{15504} \approx 0.2979
      $$

      > [!example] The three binomial coefficients
      > - Choose which 3 of the 9 successes sit in the last 5: $\binom{9}{3} = 84$.
      > - Choose which 2 of the 11 failures fill the remaining slots: $\binom{11}{2} = 55$.
      > - All ways to choose 5 positions out of 20: $\binom{20}{5} = 15504$.

      > [!tip] Intuition
      > We are given the total (9 successes) and ask how they are split between the "last 5" and the "first 15" slots. Which companies succeeded is treated as equally likely to be any of the $\binom{20}{9}$ arrangements, so the question is pure counting ([[Lec_04-Symmetrical Probability Spaces and Combinatorics]]).

      > [!note] Rounding
      > The exact fraction is $4620/15504 = 0.29799\ldots$, which rounds to $0.2980$. The official solution writes $0.2979$ (truncated). Same value to within rounding; the source's figure is kept.
    related_terms: ["hypergeometric-distribution", "binomial-coefficient", "combination", "symmetrical-probability-space"]
    source_doc_page: 1
  - id: "3"
    text: |
      A stack of 20 cards has 6 club cards in it. We draw 7 cards from the deck.
    solution: |
      Let $X$ be the number of clubs drawn. Drawing 7 cards from 20 without replacement, with 6 clubs in the stack, gives $X \sim HG(20, 6, 7)$. The sample space has $\binom{20}{7} = 77520$ equally likely hands.
    related_terms: ["hypergeometric-distribution"]
    source_doc_page: 1
  - id: "3a"
    text: |
      What is the probability we drew 3 club cards?
    solution: |
      > [!success] Answer
      > $P(X=3) \approx 0.258$

      $$
      P(X=3) = \frac{\binom{6}{3}\binom{14}{4}}{\binom{20}{7}} = \frac{20 \cdot 1001}{77520} = \frac{20020}{77520} \approx 0.258
      $$
    related_terms: ["hypergeometric-distribution", "binomial-coefficient", "combination"]
    source_doc_page: 1
  - id: "3b"
    text: |
      What is the probability we draw at most 5 club cards?
    solution: |
      > [!success] Answer
      > $P(X \le 5) \approx 0.9998$

      The complement is much shorter than summing $P(X=0),\dots,P(X=5)$: "at most 5" fails only for 6 or 7 clubs.

      $$
      P(X \le 5) = 1 - \big(P(X=6) + P(X=7)\big)
      $$

      $$
      P(X=6) = \frac{\binom{6}{6}\binom{14}{1}}{\binom{20}{7}} = \frac{14}{77520} \approx 0.00018
      $$

      $P(X=7) = 0$, because there are only 6 clubs in the stack, so 7 cannot be drawn. Therefore

      $$
      P(X \le 5) = 1 - (0.00018 + 0) \approx 0.9998
      $$

      ![](/images/statistics-a/ps07-q3-hypergeometric-pmf.png)

      *The pmf of $HG(20,6,7)$. Red is part (a). The bar at $k=6$ is tiny and there is no bar at $k=7$: the support stops at 6 (the number of clubs), which is why the complement trick is so quick.*

      > [!warning] Support check
      > For $HG(N,D,n)$ the value $k$ cannot exceed $D$ (or $n$). Here $D = 6 < n = 7$, so $P(X=7)=0$. The formula also gives this: $\binom{6}{7} = 0$.
    related_terms: ["hypergeometric-distribution", "complement-rule", "binomial-coefficient"]
    source_doc_page: 1
  - id: "4"
    text: |
      The number of shoppers that enter our store in an hour has a Poisson distribution, with a rate of 10 visitors per hour.
    solution: |
      Let $X$ be the number of visitors in a given hour: $X \sim P(10)$.

      $$
      X \sim P(\lambda): \quad P(X=k) = e^{-\lambda}\,\frac{\lambda^k}{k!}, \quad E(X) = \lambda
      $$
    related_terms: ["poisson-distribution", "poisson-rate"]
    source_doc_page: 1
  - id: "4a"
    text: |
      What is the probability we will not have any visitors on a given hour?
    solution: |
      > [!success] Answer
      > $P(X=0) = e^{-10} \approx 0.0000454$

      $$
      P(X=0) = e^{-10} \cdot \frac{10^0}{0!} = e^{-10} \approx 0.0000454
      $$
    related_terms: ["poisson-distribution", "poisson-rate", "factorial"]
    source_doc_page: 1
  - id: "4b"
    text: |
      What is the probability we will have at least 3 visitors on a given hour?
    solution: |
      > [!success] Answer
      > $P(X \ge 3) \approx 0.9972$

      Again use the complement: "at least 3" is everything except $0, 1, 2$.

      $$
      P(X \ge 3) = 1 - \big(P(X=0) + P(X=1) + P(X=2)\big)
      $$

      $$
      = 1 - \left(e^{-10}\frac{10^0}{0!} + e^{-10}\frac{10^1}{1!} + e^{-10}\frac{10^2}{2!}\right)
      $$

      $$
      = 1 - e^{-10}\,(1 + 10 + 50) = 1 - 61e^{-10} \approx 0.9972
      $$

      ![](/images/statistics-a/ps07-q4-poisson-pmf.png)

      *The pmf of $P(10)$ peaks around 9 and 10. The red bars ($k=0,1,2$) carry only about 0.0028 of the probability, so part (b) is almost 1.*
    related_terms: ["poisson-distribution", "poisson-rate", "complement-rule"]
    source_doc_page: 1
  - id: "4c"
    text: |
      How many visitors should we expect to get over a workday of 12 hours?
    solution: |
      > [!success] Answer
      > $E(12X) = 120$

      $$
      E(12 \cdot X) = 12 \cdot E(X) = 12 \cdot 10 = 120
      $$

      > [!tip] Intuition
      > A rate of 10 per hour over 12 hours is simply 120 visitors on average. (The source applies the linear-transformation rule $E(aX) = aE(X)$ to one hour's count multiplied by 12.) Strictly, the 12-hour total is itself Poisson with rate $12 \cdot 10 = 120$, which agrees on the expected value; see "Changing the interval" in [[Lec_07-Known Distributions]].
    related_terms: ["poisson-distribution", "expected-value", "linear-transformation"]
    source_doc_page: 1
  - id: "5"
    text: |
      To get a driver's license, a person must pass a practical driving test. The probability of passing on a given try is 0.6, and different tries are independent. There is a one-time cost of 200 shekels to register, and each practical driving test costs 150 shekels. Jenny takes the test as many times as it takes to get a driver's license.
    solution: |
      Let $X$ be the number of tests Jenny takes until she passes: $X \sim G(0.6)$. Its moments are

      $$
      E(X) = \frac{1}{p} = \frac{1}{0.6} = 1\tfrac{2}{3}
      $$

      $$
      Var(X) = \frac{1-p}{p^2} = \frac{1-0.6}{0.6^2} = \frac{0.4}{0.36} \approx 1.111
      $$
    related_terms: ["geometric-distribution", "independent-events"]
    source_doc_page: 2
  - id: "5a"
    text: |
      What is the probability Jenny will need to do the test more than 3 times?
    solution: |
      > [!success] Answer
      > $P(X>3) = 0.064$

      She needs more than 3 tests exactly when the first three all fail:

      $$
      P(X>3) = (1-0.6)^3 = 0.4^3 = 0.064
      $$
    related_terms: ["geometric-distribution"]
    source_doc_page: 2
  - id: "5b"
    text: |
      What is the expected cost of getting a driver's license?
    solution: |
      > [!success] Answer
      > $E(Y) = 450$ shekels

      Let $Y$ be the total cost: 200 once, plus 150 per test taken, so $Y = 150X + 200$. By the [[Linear Transformation]] rule for expected value:

      $$
      E(Y) = 150\,E(X) + 200 = 150 \cdot 1\tfrac{2}{3} + 200 = 250 + 200 = 450
      $$
    related_terms: ["geometric-distribution", "expected-value", "linear-transformation"]
    source_doc_page: 2
  - id: "5c"
    text: |
      What is the standard deviation of the cost of getting a driver's license?
    solution: |
      > [!success] Answer
      > $SD(Y) \approx 158.1$ shekels

      Adding the constant 200 does not change spread; the multiplier 150 scales the standard deviation by $|150|$:

      $$
      SD(Y) = SD(150X + 200) = |150| \cdot SD(X) = 150 \cdot \sqrt{1.111} \approx 158.1
      $$

      > [!warning] Trap
      > Do not add 200 to the standard deviation. For $Y = aX + b$: $E(Y) = aE(X) + b$ but $SD(Y) = |a|\,SD(X)$, and $Var(Y) = a^2\,Var(X)$.
    related_terms: ["geometric-distribution", "variance", "standard-deviation", "linear-transformation"]
    source_doc_page: 2
---

*Related: [[Lec_07-Known Distributions]], [[Lec_06-Expected Value, Variance and Known Distributions]], [[Lec_04-Symmetrical Probability Spaces and Combinatorics]]*
