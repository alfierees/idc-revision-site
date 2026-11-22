---
title: "PS5"
subject: statistics-a
source_doc: /papers/statistics-a/ps-5.pdf
tags:
  - statistics-a
  - random-variable
  - distribution-table
  - expected-value
  - variance
  - standard-deviation
  - geometric-style-waiting-time
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Sum, maximum and minimum of two draws.** We randomly choose two numbers out of 1, 2 and 3. Each number can be chosen more than once, and we write down the resulting two numbers in the order we chose them. Based on this experiment, we define three random variables:

      - $X$ is the sum of the two numbers.
      - $Y$ is the maximum of the two numbers (the larger of the two).
      - $Z$ is the minimum of the two numbers (the smaller of the two).
    solution: |
      Every question in this set follows the same four steps:

      1. List the **possible values** of the [[Random Variable]].
      2. Find $P(X=k)$ for each value, giving the [[Distribution Table]] (the probabilities must add to 1).
      3. Compute $E(X)=\sum k\cdot P(X=k)$.
      4. Compute $Var(X)=\sum (k-E(X))^2\cdot P(X=k)$, or use the working formula, then $SD(X)=\sqrt{Var(X)}$.

      **Setup: the sample space.** Order matters and repeats are allowed, so there are $3\cdot 3=9$ ordered pairs:

      $$
      \Omega=\begin{pmatrix}(1,1)&(1,2)&(1,3)\\(2,1)&(2,2)&(2,3)\\(3,1)&(3,2)&(3,3)\end{pmatrix}
      $$

      This is a [[Symmetrical Probability Space]], so each pair has probability $\dfrac{1}{9}$.

      ![](/images/statistics-a/ps05-q1-outcome-grids.png)

      *The same nine pairs, each labelled with the value of $X$, $Y$ and $Z$. Distribution tables are just a count of how many cells carry each value.*
    related_terms: ["random-variable", "distribution-table", "symmetrical-probability-space"]
    source_doc_page: 1
  - id: "1a"
    text: |
      Write the distribution tables of $X$, $Y$ and $Z$.
    solution: |
      > [!success] Answer
      > | $X=k$ | 2 | 3 | 4 | 5 | 6 |
      > |---|---|---|---|---|---|
      > | $P(X=k)$ | $\frac{1}{9}$ | $\frac{2}{9}$ | $\frac{3}{9}$ | $\frac{2}{9}$ | $\frac{1}{9}$ |
      >
      > | $Y=l$ | 1 | 2 | 3 |
      > |---|---|---|
      > | $P(Y=l)$ | $\frac{1}{9}$ | $\frac{3}{9}$ | $\frac{5}{9}$ |
      >
      > | $Z=n$ | 1 | 2 | 3 |
      > |---|---|---|
      > | $P(Z=n)$ | $\frac{5}{9}$ | $\frac{3}{9}$ | $\frac{1}{9}$ |

      **Why.** Count cells in the grid above.

      - Sum $=3$ comes from $(1,2)$ and $(2,1)$, so $\frac{2}{9}$. Sum $=4$ comes from $(1,3),(2,2),(3,1)$, so $\frac{3}{9}$. And so on.
      - Maximum $=1$ only for $(1,1)$. Maximum $=2$ for $(1,2),(2,1),(2,2)$. Maximum $=3$ for the other five pairs, which all contain a 3.
      - Minimum is the mirror image: minimum $=1$ for the five pairs containing a 1, minimum $=2$ for $(2,2),(2,3),(3,2)$, minimum $=3$ only for $(3,3)$.

      > [!tip] Intuition
      > The maximum is pushed up towards 3 and the minimum down towards 1, because the max of two draws is at least as large as either draw. The tables for $Y$ and $Z$ are exact mirror images, which is why they will share a variance.
    related_terms: ["distribution-table", "random-variable", "discrete-random-variable", "symmetrical-probability-space"]
    source_doc_page: 1
  - id: "1b"
    text: |
      What are the expected values of $X$, $Y$ and $Z$?
    solution: |
      > [!success] Answer
      > $E(X)=4$, $E(Y)=2.444$, $E(Z)=1.555$

      $$
      E(X)=2\cdot\tfrac19+3\cdot\tfrac29+4\cdot\tfrac39+5\cdot\tfrac29+6\cdot\tfrac19=4
      $$

      $$
      E(Y)=1\cdot\tfrac19+2\cdot\tfrac39+3\cdot\tfrac59=\tfrac{22}{9}=2.444
      $$

      $$
      E(Z)=1\cdot\tfrac59+2\cdot\tfrac39+3\cdot\tfrac19=\tfrac{14}{9}=1.555
      $$

      > [!tip] Intuition
      > A single draw has mean 2, so $E(X)=2+2=4$ (the mean of a sum is the sum of the means). Also $E(Y)+E(Z)=\frac{22}{9}+\frac{14}{9}=4=E(X)$, because the max plus the min of two numbers is always their sum.
    related_terms: ["expected-value"]
    source_doc_page: 1
  - id: "1c"
    text: |
      What are the variances of $X$, $Y$ and $Z$?
    solution: |
      > [!success] Answer
      > $Var(X)=1.333$, $Var(Y)=0.469$, $Var(Z)=0.469$

      $$
      Var(X)=(2-4)^2\tfrac19+(3-4)^2\tfrac29+(4-4)^2\tfrac39+(5-4)^2\tfrac29+(6-4)^2\tfrac19
      $$

      $$
      =4\cdot\tfrac19+1\cdot\tfrac29+0\cdot\tfrac39+1\cdot\tfrac29+4\cdot\tfrac19=\tfrac{12}{9}=1.333
      $$

      $$
      Var(Y)=(1-2.444)^2\tfrac19+(2-2.444)^2\tfrac39+(3-2.444)^2\tfrac59=0.469
      $$

      $$
      Var(Z)=(1-1.555)^2\tfrac59+(2-1.555)^2\tfrac39+(3-1.555)^2\tfrac19=0.469
      $$

      > [!example] Check with the working formula
      > $E(Y^2)=1\cdot\frac19+4\cdot\frac39+9\cdot\frac59=\frac{58}{9}$, so $Var(Y)=\frac{58}{9}-\left(\frac{22}{9}\right)^2=\frac{38}{81}=0.469$. $Z$ is the same by symmetry (the table is $Y$'s reflected).
    related_terms: ["variance", "expected-value"]
    source_doc_page: 1
  - id: "1d"
    text: |
      What is the standard deviation of $X$, $Y$ and $Z$?
    solution: |
      > [!success] Answer
      > $SD(X)=\sqrt{1.333}=1.155$, $SD(Y)=\sqrt{0.469}=0.685$, $SD(Z)=\sqrt{0.469}=0.685$
    related_terms: ["standard-deviation", "variance"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Red traffic lights.** On my way to work I go through three traffic lights. The probability the first will be red is 0.4, the probability the second will be red is 0.7 and the probability the third will be red is 0.5. The traffic lights are independent of each other. Let $X$ be a random variable equal to the number of red lights I encounter on the way.
    solution: |
      The lights are independent, so each colour pattern has the product of its three probabilities. The green probabilities are $0.6,\ 0.3,\ 0.5$.
    related_terms: ["random-variable", "independent-events"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Write the distribution table of $X$.
    solution: |
      > [!success] Answer
      > | $X=k$ | 0 | 1 | 2 | 3 |
      > |---|---|---|---|---|
      > | $P(X=k)$ | 0.09 | 0.36 | 0.41 | 0.14 |

      **Why.** The lights are independent, so each colour pattern has the product of its three probabilities ([[Independent Events]]). The green probabilities are $0.6,\ 0.3,\ 0.5$. Write g for green and r for red, in order of the lights.

      > [!example] Adding up the patterns for each value
      > - $X=0$ (ggg): $0.6\cdot0.3\cdot0.5=0.09$
      > - $X=1$ (grg-type, three patterns): $0.4\cdot0.3\cdot0.5+0.6\cdot0.7\cdot0.5+0.6\cdot0.3\cdot0.5=0.06+0.21+0.09=0.36$
      > - $X=2$ (three patterns): $0.4\cdot0.7\cdot0.5+0.4\cdot0.3\cdot0.5+0.6\cdot0.7\cdot0.5=0.14+0.06+0.21=0.41$
      > - $X=3$ (rrr): $0.4\cdot0.7\cdot0.5=0.14$
      >
      > Check: $0.09+0.36+0.41+0.14=1$.

      > [!warning] Don't multiply by a binomial coefficient
      > The three lights have different red probabilities, so the patterns with the same number of reds are **not** equally likely and this is not a binomial. You must add the separate products.
    related_terms: ["distribution-table", "independent-events", "binomial-distribution"]
    source_doc_page: 1
  - id: "2b"
    text: |
      What is $E(X)$?
    solution: |
      > [!success] Answer
      > $E(X)=1.6$

      $$
      E(X)=0\cdot0.09+1\cdot0.36+2\cdot0.41+3\cdot0.14=1.6
      $$

      > [!tip] Intuition
      > $0.4+0.7+0.5=1.6$: the expected number of reds is the sum of the three individual red probabilities.
    related_terms: ["expected-value"]
    source_doc_page: 1
  - id: "2c"
    text: |
      What is $Var(X)$?
    solution: |
      > [!success] Answer
      > $Var(X)=0.7$

      $$
      Var(X)=(0-1.6)^2\cdot0.09+(1-1.6)^2\cdot0.36+(2-1.6)^2\cdot0.41+(3-1.6)^2\cdot0.14=0.7
      $$
    related_terms: ["variance"]
    source_doc_page: 1
  - id: "2d"
    text: |
      What is $SD(X)$?
    solution: |
      > [!success] Answer
      > $SD(X)=\sqrt{0.7}=0.8366$
    related_terms: ["standard-deviation"]
    source_doc_page: 1
  - id: "3"
    text: |
      **The cook and the omelet.** A cook is making a 5 eggs omelet. He breaks the eggs one by one into a bowl. If he breaks a bad egg into the bowl, he throws out all of the eggs in the bowl and stops cooking. Each egg costs 30 Agorot, and the probability that an egg will be bad is 0.05. Let $X$ be the amount of money lost on the omelet making (note, no money is lost if all 5 eggs are good). What is the expected value of $X$?
    solution: |
      > [!success] Answer
      > $E(\text{eggs lost})=0.656$, so $E(X)=30\cdot0.656=19.68$ Agorot.

      **Step 1: eggs lost.** Let the random variable be the number of eggs thrown away. If the first bad egg is the $j$-th one, the bowl holds $j$ eggs and all $j$ are thrown away. If none is bad, nothing is lost.

      | Eggs lost | 0 (all 5 good) | 1 | 2 | 3 | 4 | 5 |
      |---|---|---|---|---|---|---|
      | Event | all good | first is bad | second is bad | third is bad | fourth is bad | fifth is bad |
      | Probability | $0.95^5=0.774$ | $0.05$ | $0.95\cdot0.05=0.047$ | $0.95^2\cdot0.05=0.045$ | $0.95^3\cdot0.05=0.043$ | $0.95^4\cdot0.05=0.041$ |

      $$
      E(\text{eggs lost})=0\cdot0.774+1\cdot0.05+2\cdot0.047+3\cdot0.045+4\cdot0.043+5\cdot0.041=0.656
      $$

      **Step 2: convert to money.** Each egg costs 30 Agorot, so the loss is a [[Linear Transformation]] of the egg count, $X=30\cdot(\text{eggs lost})$, and $E(aW)=a\,E(W)$:

      $$
      E(X)=E(30\cdot\text{eggs lost})=30\cdot E(\text{eggs lost})=30\cdot0.656=19.68
      $$

      > [!warning] Rounding
      > The solution rounds the probabilities to 3 decimals. With unrounded probabilities, $E(\text{eggs lost})=0.65548$ and $E(X)=19.66$ Agorot. The official answer $19.68$ is kept above; the difference is only rounding.
    related_terms: ["expected-value", "linear-transformation", "random-variable"]
    source_doc_page: 1
  - id: "4"
    text: |
      **The telemarketer.** A telemarketer is selling tickets to a women's only retreat. He has 6 phone numbers, from which he randomly picks one to call. If he is answered by a man, he crosses the number out and randomly picks another number to call. He continues until he calls one woman. Let $X$ be the number of calls the telemarketer makes. If 2 of the 6 numbers belong to women and the other 4 belong to men:
    solution: |
      ![](/images/statistics-a/ps05-q4-call-tree.png)

      *Each call removes one number, so the denominators shrink $6,5,4,3$. A man crosses out one of the 4 men; a woman stops the process.*
    related_terms: ["tree-diagram", "random-variable"]
    source_doc_page: 2
  - id: "4a"
    text: |
      What is the distribution of $X$?
    solution: |
      > [!success] Answer
      > | $X=k$ | 1 | 2 | 3 | 4 | 5 |
      > |---|---|---|---|---|
      > | $P(X=k)$ | $\frac{5}{15}$ | $\frac{4}{15}$ | $\frac{3}{15}$ | $\frac{2}{15}$ | $\frac{1}{15}$ |

      Multiply along each branch ([[Multiplication Formula]]). Every term but the last "woman" factor is a man:

      $$
      P(X=1)=\tfrac26=\tfrac{5}{15},\qquad P(X=2)=\tfrac46\cdot\tfrac25=\tfrac{4}{15},\qquad P(X=3)=\tfrac46\cdot\tfrac35\cdot\tfrac24=\tfrac{3}{15}
      $$

      $$
      P(X=4)=\tfrac46\cdot\tfrac35\cdot\tfrac24\cdot\tfrac23=\tfrac{2}{15},\qquad P(X=5)=\tfrac46\cdot\tfrac35\cdot\tfrac24\cdot\tfrac13\cdot1=\tfrac{1}{15}
      $$

      > [!warning] Not a geometric distribution
      > The numbers are crossed out, so the success probability changes from call to call (it is sampling **without** replacement). The calls are not independent. The most he can need is 5 calls (all 4 men, then a woman).
    related_terms: ["multiplication-formula", "tree-diagram", "distribution-table", "geometric-distribution"]
    source_doc_page: 2
  - id: "4b"
    text: |
      What is the expected number of calls the telemarketer will make?
    solution: |
      > [!success] Answer
      > $E(X)=2.333$

      $$
      E(X)=1\cdot\tfrac{5}{15}+2\cdot\tfrac{4}{15}+3\cdot\tfrac{3}{15}+4\cdot\tfrac{2}{15}+5\cdot\tfrac{1}{15}=\tfrac{35}{15}=2.333
      $$
    related_terms: ["expected-value"]
    source_doc_page: 2
  - id: "5"
    text: |
      **Monopoly dice.** In the game monopoly, a player throws two fair 6-sided dice and moves their piece a number of steps equal to the sum of the numbers they got on the two dice.
    solution: |
      The sample space has $6\cdot6=36$ ordered pairs, all equally likely ($\frac{1}{36}$ each, a [[Symmetrical Probability Space]]). Tabulating the sum in each cell:

      | Die 1 \ Die 2 | 1 | 2 | 3 | 4 | 5 | 6 |
      |---|---|---|---|---|---|---|
      | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
      | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
      | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
      | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
      | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
      | 6 | 7 | 8 | 9 | 10 | 11 | 12 |

      | $X=k$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
      |---|---|---|---|---|---|---|---|---|---|---|---|
      | $P(X=k)$ | $\frac{1}{36}$ | $\frac{2}{36}$ | $\frac{3}{36}$ | $\frac{4}{36}$ | $\frac{5}{36}$ | $\frac{6}{36}$ | $\frac{5}{36}$ | $\frac{4}{36}$ | $\frac{3}{36}$ | $\frac{2}{36}$ | $\frac{1}{36}$ |

      ![](/images/statistics-a/ps05-q5-dice-sum-pmf.png)

      *The sum is symmetric about 7, so the mean sits at the peak.*
    related_terms: ["symmetrical-probability-space", "distribution-table", "random-variable"]
    source_doc_page: 2
  - id: "5a"
    text: |
      What is the expected value of the number of steps a player makes?
    solution: |
      > [!success] Answer
      > $E(X)=7$

      $$
      E(X)=2\cdot\tfrac1{36}+3\cdot\tfrac2{36}+4\cdot\tfrac3{36}+5\cdot\tfrac4{36}+6\cdot\tfrac5{36}+7\cdot\tfrac6{36}+8\cdot\tfrac5{36}+9\cdot\tfrac4{36}+10\cdot\tfrac3{36}+11\cdot\tfrac2{36}+12\cdot\tfrac1{36}=7
      $$

      > [!tip] Intuition
      > One die has mean 3.5, so two dice give $3.5+3.5=7$; the symmetry also puts the mean in the middle.
    related_terms: ["expected-value"]
    source_doc_page: 2
  - id: "5b"
    text: |
      What is the variance of the number of steps a player makes?
    solution: |
      > [!success] Answer
      > $Var(X)=5.8333$

      The solution uses the working formula $Var(X)=E(X^2)-E(X)^2$ with $E(X)^2=7^2=49$:

      $$
      E(X^2)=2^2\cdot\tfrac1{36}+3^2\cdot\tfrac2{36}+4^2\cdot\tfrac3{36}+5^2\cdot\tfrac4{36}+6^2\cdot\tfrac5{36}+7^2\cdot\tfrac6{36}+8^2\cdot\tfrac5{36}+9^2\cdot\tfrac4{36}+10^2\cdot\tfrac3{36}+11^2\cdot\tfrac2{36}+12^2\cdot\tfrac1{36}=54.8333
      $$

      $$
      Var(X)=E(X^2)-E(X)^2=54.8333-49=5.8333
      $$
    related_terms: ["variance", "expected-value"]
    source_doc_page: 2
  - id: "5c"
    text: |
      What is the standard deviation of the number of steps a player makes?
    solution: |
      > [!success] Answer
      > $SD(X)=\sqrt{5.8333}=2.415$
    related_terms: ["standard-deviation", "variance"]
    source_doc_page: 2
---

*Related: [[Lec_05-Random Variables, Expected Value and Variance]], [[Lec_06-Expected Value, Variance and Known Distributions]]*
