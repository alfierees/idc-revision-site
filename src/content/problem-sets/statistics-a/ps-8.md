---
title: "PS8"
subject: statistics-a
source_doc: /papers/statistics-a/ps-8.pdf
tags:
  - statistics-a
  - joint-distribution
  - marginal-distribution
  - conditional-distribution
  - conditional-expected-value
  - independence
  - covariance
  - variance-of-a-sum
ai_drafted: true
questions:
  - id: "1"
    text: |
      A couple decide to have children until they have two boys, but to stop at 4 children regardless of how many boys they have.

      The probability of having a boy is the same as the probability of having a girl, $P(boy) = P(girl) = 0.5$, and the couple can have exactly as many children as they choose to have.

      Mark:

      - $X$: number of children the couple has
      - $Y$: number of boys the couple has
    solution: |
      The couple stops as soon as one of two things happens: they reach two boys, or they reach 4 children. So the possible values are $X \in \{2,3,4\}$ and $Y \in \{0,1,2\}$. Each child is a boy or a girl with probability 0.5, independently, so every branch of the tree carries 0.5 and a path of length $n$ has probability $(1/2)^n$.

      ![](/images/statistics-a/ps08-q1-stopping-rule-tree.png)

      The tree has 11 stopping points. Group them by $(X, Y)$:

      | Outcome (B = boy, G = girl) | $(X, Y)$ | Probability |
      |---|---|---|
      | BB | $(2, 2)$ | $(1/2)^2 = 4/16$ |
      | BGB, GBB | $(3, 2)$ | $2 \cdot (1/2)^3 = 4/16$ |
      | BGGB, GBGB, GGBB | $(4, 2)$ | $3 \cdot (1/2)^4 = 3/16$ |
      | BGGG, GBGG, GGBG, GGGB | $(4, 1)$ | $4 \cdot (1/2)^4 = 4/16$ |
      | GGGG | $(4, 0)$ | $(1/2)^4 = 1/16$ |

      > [!warning] Why the 4-child cases differ
      > After 4 children the couple stops whatever the genders. So $(4,1)$ and $(4,0)$ exist, but $(3,1)$ and $(3,0)$ cannot: a couple with 3 children has stopped early, which only happens on the second boy.
    related_terms: ["tree-diagram", "joint-distribution", "random-variable"]
    source_doc_page: 1
  - id: "1a"
    text: |
      What is the joint distribution of $X$ and $Y$?
    solution: |
      > [!success] Answer
      > | $Y \backslash X$ | 2 | 3 | 4 | $P(Y = y_j)$ |
      > |---|---|---|---|---|
      > | 0 | 0 | 0 | $(1/2)^4 = 1/16$ | $1/16$ |
      > | 1 | 0 | 0 | $4(1/2)^4 = 4/16$ | $4/16$ |
      > | 2 | $(1/2)^2 = 1/4$ | $2(1/2)^3 = 2/8$ | $3(1/2)^4 = 3/16$ | $11/16$ |
      > | $P(X = x_i)$ | $1/4$ | $1/4$ | $1/2$ | 1 |

      The marginals come from adding along rows and columns:

      $$
      P(X=4) = \frac{1}{16} + \frac{4}{16} + \frac{3}{16} = \frac{8}{16} = \frac{1}{2}
      $$

      $$
      P(Y=2) = \frac{1}{4} + \frac{2}{8} + \frac{3}{16} = \frac{4 + 4 + 3}{16} = \frac{11}{16}
      $$

      Check: the whole table sums to $(4 + 4 + 1 + 4 + 3)/16 = 1$.
    related_terms: ["joint-distribution", "joint-distribution-table", "marginal-distribution", "tree-diagram"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Are $X$ and $Y$ independent?
    solution: |
      > [!success] Answer
      > No, $X$ and $Y$ are dependent.

      Independence needs $P(X=x, Y=y) = P(X=x)P(Y=y)$ in **every** cell. One counterexample is enough:

      $$
      P(X=2)\,P(Y=0) = \frac{1}{4} \cdot \frac{1}{16} = \frac{1}{64} \neq 0 = P(X=2, Y=0)
      $$

      > [!tip] Intuition
      > Knowing the couple has only 2 children tells you for certain they have 2 boys, so $Y=0$ becomes impossible. Information about $X$ changes what you believe about $Y$.
    related_terms: ["independent-random-variables", "joint-distribution-table", "marginal-distribution"]
    source_doc_page: 1
  - id: "1c"
    text: |
      If we know the couple has 3 children, what is the probability they have 2 boys?
    solution: |
      > [!success] Answer
      > $P(Y=2 \mid X=3) = 1$

      Use the [[Conditional Probability]] definition on the joint table:

      $$
      P(Y=2 \mid X=3) = \frac{P(X=3, Y=2)}{P(X=3)} = \frac{1/4}{1/4} = 1
      $$

      The solution adds the logical shortcut: $X=3$ means the couple stopped before reaching 4 children, and by their rule that only happens on the second boy.
    related_terms: ["conditional-probability", "conditional-distribution", "joint-distribution-table"]
    source_doc_page: 1
  - id: "1d"
    text: |
      If we know the couple has 4 children, what is the probability they have one boy?
    solution: |
      > [!success] Answer
      > $P(Y=1 \mid X=4) = \tfrac{1}{2}$

      $$
      P(Y=1 \mid X=4) = \frac{P(X=4, Y=1)}{P(X=4)} = \frac{1/4}{1/2} = \frac{1}{2}
      $$
    related_terms: ["conditional-probability", "conditional-distribution", "joint-distribution-table"]
    source_doc_page: 1
  - id: "2"
    text: |
      We roll two fair 6-sided dice. Mark:

      - $X$: the lowest number rolled (if both dice show the same number, that number is the lowest)
      - $Y$: the number of dice that show either 1 or a number greater than 4
    solution: |
      Rolling two fair dice gives a [[Symmetrical Probability Space]] of 36 equally likely pairs, so each probability is a count divided by 36. A die counts towards $Y$ when it shows 1, 5 or 6. The grid below labels every pair with its $(X, Y)$ values.

      ![](/images/statistics-a/ps08-q2-dice-x-y-grid.png)
    related_terms: ["symmetrical-probability-space", "random-variable"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Write a joint distribution table and the marginal distributions of $X$ and $Y$.
    solution: |
      > [!success] Answer
      > | $Y \backslash X$ | 1 | 2 | 3 | 4 | 5 | 6 | $P(Y = y_i)$ |
      > |---|---|---|---|---|---|---|---|
      > | 0 | 0 | 5/36 | 3/36 | 1/36 | 0 | 0 | 9/36 = 1/4 |
      > | 1 | 6/36 | 4/36 | 4/36 | 4/36 | 0 | 0 | 18/36 = 1/2 |
      > | 2 | 5/36 | 0 | 0 | 0 | 3/36 | 1/36 | 9/36 = 1/4 |
      > | $P(X = x_i)$ | 11/36 | 9/36 | 7/36 | 5/36 | 3/36 | 1/36 | 1 |

      Counting from the grid, for example the column $X=2$:

      - $Y=0$: the pairs $(2,2), (2,3), (3,2), (2,4), (4,2)$, which is 5 cells.
      - $Y=1$: the pairs $(2,5), (5,2), (2,6), (6,2)$, which is 4 cells.
      - $Y=2$: none, because one die is the 2 itself, which does not count, so at most one die can count.

      > [!tip] Intuition
      > $X = k$ means one die shows $k$ and the other shows at least $k$. The count of such pairs is $2(6-k) + 1 = 13 - 2k$, giving $11, 9, 7, 5, 3, 1$ out of 36.
    related_terms: ["joint-distribution", "joint-distribution-table", "marginal-distribution", "symmetrical-probability-space"]
    source_doc_page: 1
  - id: "2b"
    text: |
      What is $E(X)$?
    solution: |
      > [!success] Answer
      > $E(X) = 2\tfrac{19}{36}$

      $$
      E(X) = 1 \cdot \frac{11}{36} + 2 \cdot \frac{9}{36} + 3 \cdot \frac{7}{36} + 4 \cdot \frac{5}{36} + 5 \cdot \frac{3}{36} + 6 \cdot \frac{1}{36} = \frac{91}{36} = 2\frac{19}{36}
      $$
    related_terms: ["expected-value", "marginal-distribution"]
    source_doc_page: 1
  - id: "2c"
    text: |
      What is $E(Y)$?
    solution: |
      > [!success] Answer
      > $E(Y) = 1$

      Use the $Y$ marginal:

      $$
      E(Y) = 0 \cdot \frac{1}{4} + 1 \cdot \frac{1}{2} + 2 \cdot \frac{1}{4} = 1
      $$
    related_terms: ["expected-value", "marginal-distribution"]
    source_doc_page: 1
  - id: "2d"
    text: |
      What is $E(Y \mid X = 2)$?
    solution: |
      > [!success] Answer
      > $E(Y \mid X = 2) = \tfrac{4}{9}$

      First build the conditional distribution: take the $X=2$ column and divide by its total $P(X=2) = 9/36$.

      | $Y \mid X=2$ | $P(Y \mid X=2)$ |
      |---|---|
      | 0 | $\dfrac{5/36}{9/36} = \dfrac{5}{9}$ |
      | 1 | $\dfrac{4/36}{9/36} = \dfrac{4}{9}$ |

      $$
      E(Y \mid X = 2) = 0 \cdot \frac{5}{9} + 1 \cdot \frac{4}{9} = \frac{4}{9}
      $$

      > [!tip] Intuition
      > Given $X=2$ (the lowest die is a 2), one die is a 2 and does not count, so $Y$ can be at most 1. That is why $E(Y \mid X=2) = 4/9$ is below the unconditional $E(Y) = 1$.
    related_terms: ["conditional-expected-value", "conditional-distribution", "expected-value"]
    source_doc_page: 1
  - id: "3"
    text: |
      A student takes two tests, one in statistics and one in math. The probability of passing the math test is 0.5, the probability of passing the statistics test is 0.7. The probability of passing both tests is 0.35.

      $X = 1$ if the student passed the math test, $X = 0$ if not. $Y = 1$ if the student passed the statistics test, $Y = 0$ if not.
    solution: |
      Both variables take only the values 0 and 1, so everything can be read off a 2x2 table.
    related_terms: ["joint-distribution-table", "bernoulli-distribution"]
    source_doc_page: 1
  - id: "3a"
    text: |
      Write a joint distribution table for $X$ and $Y$.
    solution: |
      > [!success] Answer
      > | $Y \backslash X$ | 0 | 1 | $P(Y = y_j)$ |
      > |---|---|---|---|
      > | 0 | $0.3 - 0.15 = 0.15$ | $0.5 - 0.35 = 0.15$ | $1 - 0.7 = 0.3$ |
      > | 1 | $0.7 - 0.35 = 0.35$ | $0.35$ | $0.7$ |
      > | $P(X = x_i)$ | $1 - 0.5 = 0.5$ | $0.5$ | 1 |

      With only two values each, this is the same 2x2 table used for events in [[Lec_03-Conditional Probability, Bayes and Independence]]: enter the three given numbers ($P(X=1) = 0.5$, $P(Y=1) = 0.7$, $P(X=1, Y=1) = 0.35$), then complete the rest by subtraction from the margins.
    related_terms: ["joint-distribution-table", "marginal-distribution", "2x2-probability-table"]
    source_doc_page: 2
  - id: "3b"
    text: |
      Find the expected value and variance of $X$ and $Y$.
    solution: |
      > [!success] Answer
      > $E(X) = 0.5$, $E(Y) = 0.7$, $Var(X) = 0.25$, $Var(Y) = 0.21$

      Both marginals are [[Bernoulli Distribution|Bernoulli]]: $X \sim Bernoulli(0.5)$ and $Y \sim Bernoulli(0.7)$. For a Bernoulli variable $E = p$ and $Var = p(1-p)$:

      $$
      E(X) = 0.5, \qquad E(Y) = 0.7
      $$

      $$
      Var(X) = 0.5 \cdot 0.5 = 0.25, \qquad Var(Y) = 0.7 \cdot 0.3 = 0.21
      $$

      > [!note] Typo in the official working
      > The solution prints "$Var(X)$" on both variance lines. The second line is $Var(Y) = 0.21$, which is the value used in part (e).
    related_terms: ["bernoulli-distribution", "expected-value", "variance"]
    source_doc_page: 2
  - id: "3c"
    text: |
      Are $X$ and $Y$ independent?
    solution: |
      > [!success] Answer
      > Yes, $X$ and $Y$ are independent.

      Check every cell against the product of its marginals:

      $$
      P(X=0, Y=0) = 0.15 = 0.5 \cdot 0.3 = P(X=0)\,P(Y=0)
      $$

      $$
      P(X=1, Y=0) = 0.15 = 0.5 \cdot 0.3 = P(X=1)\,P(Y=0)
      $$

      $$
      P(X=0, Y=1) = 0.35 = 0.5 \cdot 0.7 = P(X=0)\,P(Y=1)
      $$

      $$
      P(X=1, Y=1) = 0.35 = 0.5 \cdot 0.7 = P(X=1)\,P(Y=1)
      $$

      All four cells match, so the variables are independent. Contrast this with Question 1, where one cell was enough to break independence.
    related_terms: ["independent-random-variables", "joint-distribution-table", "marginal-distribution"]
    source_doc_page: 2
  - id: "3d"
    text: |
      What is the covariance of $X$ and $Y$? Are they correlated?
    solution: |
      > [!success] Answer
      > $Cov(X, Y) = 0$, so $X$ and $Y$ are not correlated.

      Independent variables have no relationship at all, including no linear one, so the covariance is 0. The solution confirms it from the definition:

      $$
      Cov(X,Y) = (0-0.5)(0-0.7)(0.15) + (1-0.5)(0-0.7)(0.15) + (0-0.5)(1-0.7)(0.35) + (1-0.5)(1-0.7)(0.35)
      $$

      $$
      = 0.35 \cdot 0.15 - 0.35 \cdot 0.15 - 0.15 \cdot 0.35 + 0.15 \cdot 0.35 = 0
      $$

      > [!warning] One direction only
      > Independent implies $Cov = 0$, but $Cov = 0$ does not imply independent (see [[Lec_09-Covariance and Correlation]]). Here we have the independence from part (c), so the implication applies.
    related_terms: ["covariance", "correlation-coefficient", "independent-random-variables"]
    source_doc_page: 2
  - id: "3e"
    text: |
      $W = X + Y$. What are the expected value and variance of $W$?
    solution: |
      > [!success] Answer
      > $E(W) = 1.2$, $Var(W) = 0.46$

      $$
      E(W) = E(X) + E(Y) = 0.5 + 0.7 = 1.2
      $$

      Because $X$ and $Y$ are independent, the variances add:

      $$
      Var(W) = Var(X) + Var(Y) = 0.25 + 0.21 = 0.46
      $$

      The general [[Variance of a Sum]] formula gives the same result, since the covariance term vanishes:

      $$
      Var(X+Y) = Var(X) + Var(Y) + 2\,Cov(X,Y) = 0.25 + 0.21 + 2 \cdot 0 = 0.46
      $$
    related_terms: ["variance-of-a-sum", "expected-value", "variance", "covariance"]
    source_doc_page: 2
---

*Related: [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]], [[Lec_05-Random Variables, Expected Value and Variance]]*
