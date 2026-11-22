---
title: "PS9"
subject: statistics-a
source_doc: /papers/statistics-a/ps-9.pdf
tags:
  - statistics-a
  - joint-distribution
  - marginal-distribution
  - covariance
  - correlation-coefficient
  - independence
  - hypergeometric-distribution
  - variance-of-a-sum
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Two bags.** We have two bags. In bag 1 there is one white ball and one black ball. In bag 2 there are two white balls and two black balls. We randomly pick one of the two bags, and then pull two balls out of the bag. Mark:

      $X$ is the number of the chosen bag. $Y$ is the number of white balls pulled out of the bag.
    solution: |
      Every question in this set has the same shape.

      1. **Build the joint distribution** of two random variables from one experiment: a [[Tree Diagram]] (Q1, Q3), counting with combinations (Q2) or listing the 36 dice outcomes (Q4).
      2. **Marginals** are row and column sums of the [[Joint Distribution Table]].
      3. **Covariance and correlation**, using the shortcut

      $$
      \mathrm{Cov}(X,Y) = E(XY) - E(X)\,E(Y)
      $$

      $$
      \rho(X,Y) = \frac{\mathrm{Cov}(X,Y)}{SD(X)\cdot SD(Y)}
      $$

      4. **Sums and linear combinations**, using

      $$
      \mathrm{Var}(X+Y) = \mathrm{Var}(X) + \mathrm{Var}(Y) + 2\,\mathrm{Cov}(X,Y)
      $$

      > [!warning] Zero covariance is not independence
      > Q1 is the textbook trap: $\mathrm{Cov}(X,Y)=0$ and yet $X$ and $Y$ are dependent. Independence needs $P(X=x,Y=y)=P(X=x)P(Y=y)$ in **every** cell, and one failing cell is enough to prove dependence.

      Notation follows the lecturer: $E(X)$, $\mathrm{Var}(X)$, $\mathrm{Cov}(X,Y)$ (the official solution writes $V(X)$ for the variance).
    related_terms: ["joint-distribution", "joint-distribution-table", "marginal-distribution", "covariance", "correlation-coefficient", "variance-of-a-sum"]
    source_doc_page: 1
  - id: "1a"
    text: |
      What is the joint distribution of $X$ and $Y$?
    solution: |
      Describe the experiment with a tree: pick the bag, then the first ball, then the second ball (no replacement, so the second-ball probabilities change).

      ![](/images/statistics-a/ps09-q1-tree.png)

      *Theory diagram. Bag 1 has two balls, so both are drawn and $Y=1$ always. In bag 2 the second draw is from 3 balls: after a black first draw, white has probability $\tfrac23$; after a white first draw, white has probability $\tfrac13$.*

      Multiply along each branch.

      | Branch | $X$ | $Y$ | Probability |
      |---|---|---|---|
      | Bag 1, any order | 1 | 1 | $\tfrac12\cdot\tfrac12\cdot 1 + \tfrac12\cdot\tfrac12\cdot 1 = \tfrac12$ |
      | Bag 2, black then black | 2 | 0 | $\tfrac12\cdot\tfrac24\cdot\tfrac13 = \tfrac1{12}$ |
      | Bag 2, black then white | 2 | 1 | $\tfrac12\cdot\tfrac24\cdot\tfrac23 = \tfrac2{12}$ |
      | Bag 2, white then black | 2 | 1 | $\tfrac12\cdot\tfrac24\cdot\tfrac23 = \tfrac2{12}$ |
      | Bag 2, white then white | 2 | 2 | $\tfrac12\cdot\tfrac24\cdot\tfrac13 = \tfrac1{12}$ |

      The two branches with $X=2,Y=1$ are added: $\tfrac2{12}+\tfrac2{12}=\tfrac4{12}$.

      > [!success] Answer: joint distribution table
      > | $Y \backslash X$ | 1 | 2 | $P(Y=l)$ |
      > |---|---|---|---|
      > | 0 | 0 | $\tfrac1{12}$ | $\tfrac1{12}$ |
      > | 1 | $\tfrac12$ | $\tfrac4{12}$ | $\tfrac{10}{12}$ |
      > | 2 | 0 | $\tfrac1{12}$ | $\tfrac1{12}$ |
      > | $P(X=k)$ | $\tfrac12$ | $\tfrac12$ | 1 |

      ![](/images/statistics-a/ps09-q1-joint-table.png)

      *Theory diagram of the table above. Darker cells are more likely.*
    related_terms: ["tree-diagram", "joint-distribution", "joint-distribution-table", "marginal-distribution", "conditional-probability"]
    source_doc_page: 1
  - id: "1b"
    text: |
      What is the correlation of $X$ and $Y$?
    solution: |
      Expected values, from the marginals:

      $$
      E(X) = 0.5\cdot 1 + 0.5\cdot 2 = 1.5
      $$

      $$
      E(Y) = \tfrac1{12}\cdot 0 + \tfrac{10}{12}\cdot 1 + \tfrac1{12}\cdot 2 = 1
      $$

      For $E(XY)$ list the values of the product $XY$ and their probabilities (cell by cell: $XY=0$ only from $X=2,Y=0$; $XY=1$ from $X=1,Y=1$; $XY=2$ from $X=2,Y=1$; $XY=4$ from $X=2,Y=2$).

      | $XY$ | 0 | 1 | 2 | 4 |
      |---|---|---|---|---|
      | $P(XY)$ | $\tfrac1{12}$ | $\tfrac12$ | $\tfrac4{12}$ | $\tfrac1{12}$ |

      $$
      E(XY) = 0\cdot\tfrac1{12} + 1\cdot\tfrac12 + 2\cdot\tfrac4{12} + 4\cdot\tfrac1{12} = 1.5
      $$

      $$
      \mathrm{Cov}(X,Y) = E(XY) - E(X)E(Y) = 1.5 - 1.5\cdot 1 = 0
      $$

      > [!success] Answer
      > $\rho(X,Y) = 0$
      >
      > The covariance is 0, so the [[Correlation Coefficient]] (covariance divided by the two standard deviations) is 0 too.
    related_terms: ["expected-value", "covariance", "correlation-coefficient", "marginal-distribution"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Are $X$ and $Y$ dependent?
    solution: |
      > [!success] Answer
      > $X$ and $Y$ are dependent
      >
      > Compare one cell with the product of its marginals:
      >
      > $$
      > P(X=1)\,P(Y=0) = \tfrac12\cdot\tfrac1{12} \neq 0 = P(X=1,Y=0)
      > $$

      > [!tip] Intuition
      > If we know the chosen bag is bag 1, then $Y$ must be 1 (both balls come out, one of each colour). If it is bag 2, $Y$ can be 0, 1 or 2. So $X$ clearly tells us something about $Y$, but only about how **spread out** $Y$ is, not its direction. The average of $Y$ is 1 in both bags, which is why there is no linear relationship and the covariance is 0. See the zero-covariance counter-example in [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]].
    related_terms: ["independent-random-variables", "joint-distribution-table", "marginal-distribution", "covariance"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Dan's shirts.** Dan has 9 shirts, 3 red, 2 blue and the rest black. Dan randomly chooses 5 shirts to pack in his suitcase for a trip. Mark:

      $X$ is the number of red shirts in the suitcase. $Y$ is the number of blue shirts in the suitcase.

      Hint from the sheet: if $X=k$ and $Y=l$, the number of combinations is $\binom{3}{k}\binom{2}{l}\binom{4}{5-k-l}$.
    solution: |
      Solved part by part below.
    related_terms: ["hypergeometric-distribution", "combination", "joint-distribution"]
    source_doc_page: 1
  - id: "2a"
    text: |
      What is the joint distribution of $X$ and $Y$?
    solution: |
      Random choice means every set of 5 shirts is equally likely. The number of sets is

      $$
      \binom{9}{5} = 126
      $$

      (order does not matter and there is no replacement). Choose $k$ of the 3 red, $l$ of the 2 blue, and fill the rest of the 5 slots from the 4 black shirts:

      $$
      P(X=k,\,Y=l) = \frac{\binom{3}{k}\binom{2}{l}\binom{4}{5-k-l}}{\binom{9}{5}}
      $$

      > [!example] Two cells worked out
      > $$
      > P(X=1,\,Y=0) = \frac{\binom31\binom20\binom44}{126} = \frac{3\cdot 1\cdot 1}{126} = \frac{3}{126}
      > $$
      >
      > $$
      > P(X=2,\,Y=1) = \frac{\binom32\binom21\binom42}{126} = \frac{3\cdot 2\cdot 6}{126} = \frac{36}{126}
      > $$

      The cell $X=0,Y=0$ is impossible: 5 of the 9 shirts are red or blue, so 5 shirts cannot all come from the 4 black ones, and $P(X=0,Y=0)=0$.

      > [!success] Answer: joint distribution table
      > | $Y \backslash X$ | 0 | 1 | 2 | 3 | $P(Y=l)$ |
      > |---|---|---|---|---|---|
      > | 0 | 0 | $\tfrac3{126}$ | $\tfrac{12}{126}$ | $\tfrac6{126}$ | $\tfrac{21}{126}$ |
      > | 1 | $\tfrac2{126}$ | $\tfrac{24}{126}$ | $\tfrac{36}{126}$ | $\tfrac8{126}$ | $\tfrac{70}{126}$ |
      > | 2 | $\tfrac4{126}$ | $\tfrac{18}{126}$ | $\tfrac{12}{126}$ | $\tfrac1{126}$ | $\tfrac{35}{126}$ |
      > | $P(X=k)$ | $\tfrac6{126}$ | $\tfrac{45}{126}$ | $\tfrac{60}{126}$ | $\tfrac{15}{126}$ | 1 |

      ![](/images/statistics-a/ps09-q2-joint-table.png)

      *Theory diagram of the table. The most likely packing is 2 red and 1 blue ($\tfrac{36}{126}$).*
    related_terms: ["joint-distribution", "joint-distribution-table", "marginal-distribution", "combination", "symmetrical-probability-space"]
    source_doc_page: 1
  - id: "2b"
    text: |
      What is the covariance of $X$ and $Y$?
    solution: |
      Each marginal is hypergeometric (draw 5 without replacement from 9 shirts, count those of one colour):

      $$
      X \sim HG(9,3,5), \qquad Y \sim HG(9,2,5)
      $$

      Using $E = n\,\tfrac{D}{N}$ (see [[Hypergeometric Distribution]]):

      $$
      E(X) = 5\cdot\tfrac39 = \tfrac{15}{9}, \qquad E(Y) = 5\cdot\tfrac29 = \tfrac{10}{9}
      $$

      Now the product $XY$. It is 0 when $X=0$ or $Y=0$ (27 of the 126 sets), and otherwise:

      | $XY$ | 0 (everything else) | 1 | 2 | 3 | 4 | 6 |
      |---|---|---|---|---|---|---|
      | Cells | any cell with $X=0$ or $Y=0$ | $(1,1)$ | $(1,2)$ and $(2,1)$ | $(3,1)$ | $(2,2)$ | $(3,2)$ |
      | $P(XY=m)$ | $\tfrac{27}{126}$ | $\tfrac{24}{126}$ | $\tfrac{54}{126}$ | $\tfrac{8}{126}$ | $\tfrac{12}{126}$ | $\tfrac{1}{126}$ |

      The $XY=2$ entry adds $\tfrac{18}{126}+\tfrac{36}{126}$. The probabilities sum to $\tfrac{126}{126}$.

      $$
      E(XY) = 0\cdot\tfrac{27}{126} + 1\cdot\tfrac{24}{126} + 2\cdot\tfrac{54}{126} + 3\cdot\tfrac{8}{126} + 4\cdot\tfrac{12}{126} + 6\cdot\tfrac{1}{126} = \tfrac{210}{126}
      $$

      $$
      \mathrm{Cov}(X,Y) = E(XY) - E(X)E(Y) = \tfrac{210}{126} - \tfrac{15}{9}\cdot\tfrac{10}{9} = -0.185
      $$

      > [!success] Answer
      > $\mathrm{Cov}(X,Y) = -0.185$ (exactly $-\tfrac{5}{27}$)
      >
    related_terms: ["covariance", "hypergeometric-distribution", "expected-value", "joint-distribution-table"]
    source_doc_page: 1
  - id: "2c"
    text: |
      What is the correlation coefficient of $X$ and $Y$? What does it mean?
    solution: |
      Hypergeometric variance: $\mathrm{Var} = n\,\tfrac DN\left(1-\tfrac DN\right)\tfrac{N-n}{N-1}$.

      $$
      \mathrm{Var}(X) = 5\cdot\tfrac39\cdot\tfrac69\cdot\tfrac{9-5}{9-1} = \tfrac59
      $$

      $$
      \mathrm{Var}(Y) = 5\cdot\tfrac29\cdot\tfrac79\cdot\tfrac{9-5}{9-1} = \tfrac{35}{81}
      $$

      $$
      \rho(X,Y) = \frac{-0.185}{\sqrt{\tfrac59}\cdot\sqrt{\tfrac{35}{81}}} = -0.378
      $$

      > [!success] Answer
      > $\rho(X,Y) = -0.378$
      >
      > A small to moderate **negative** correlation: with fewer red shirts in the suitcase we expect slightly more blue ones.

      > [!tip] Intuition
      > The suitcase has only 5 places. Each red shirt takes a place that a blue shirt could have used, so the counts compete, which is a mild negative link. It is mild because the 4 black shirts also compete for the same places.
    related_terms: ["correlation-coefficient", "hypergeometric-distribution", "variance", "standard-deviation", "covariance"]
    source_doc_page: 1
  - id: "2d"
    text: |
      What is the expected value of the sum of $X$ and $Y$?
    solution: |
      $$
      E(X+Y) = E(X) + E(Y) = \tfrac{15}{9} + \tfrac{10}{9} = 2\tfrac79
      $$

      > [!success] Answer
      > $2\tfrac79$
      >
    related_terms: ["expected-value", "hypergeometric-distribution"]
    source_doc_page: 1
  - id: "2e"
    text: |
      What is the variance of the sum of $X$ and $Y$?
    solution: |
      $$
      \mathrm{Var}(X+Y) = \mathrm{Var}(X) + \mathrm{Var}(Y) + 2\,\mathrm{Cov}(X,Y) = \tfrac59 + \tfrac{35}{81} + 2\cdot(-0.185) = 0.6177
      $$

      > [!success] Answer
      > $0.6177$
      >

      Alternative check from the official solution: $X+Y$ counts the red-or-blue shirts, so $X+Y \sim HG(9,5,5)$ and

      $$
      E(X+Y) = 5\cdot\tfrac59 = 2\tfrac79
      $$

      $$
      \mathrm{Var}(X+Y) = 5\cdot\tfrac59\cdot\tfrac49\cdot\tfrac{9-5}{9-1} = 0.6177
      $$

      Both routes agree.
    related_terms: ["variance-of-a-sum", "covariance", "variance", "hypergeometric-distribution"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Choosing representatives.** Out of a team of 3 male employees and 3 female employees, two were randomly chosen to represent the team at a meeting. Mark:

      $X$ is the number of female employees chosen. $Y$ is the number of male employees chosen.
    solution: |
      Solved part by part below.

      > [!note] Typos on the question sheet
      > Part 2 says "A and Y"; it means $X$ and $Y$. Part 5 has no blank for the formula.
    related_terms: ["joint-distribution", "tree-diagram"]
    source_doc_page: 2
  - id: "3a"
    text: |
      What is the joint distribution of $X$ and $Y$?
    solution: |
      Pick the first person, then the second (no replacement, so after one male is gone 2 of the remaining 5 are male).

      - Male then male: $\tfrac36\cdot\tfrac25 = \tfrac15$, giving $X=0,\,Y=2$.
      - Male then female: $\tfrac36\cdot\tfrac35 = \tfrac{3}{10}$, giving $X=1,\,Y=1$.
      - Female then male: $\tfrac36\cdot\tfrac35 = \tfrac{3}{10}$, giving $X=1,\,Y=1$.
      - Female then female: $\tfrac36\cdot\tfrac25 = \tfrac15$, giving $X=2,\,Y=0$.

      The two mixed branches add to $\tfrac{3}{10}+\tfrac{3}{10}=\tfrac35$.

      > [!success] Answer: joint distribution table
      > | $Y \backslash X$ | 0 | 1 | 2 | $P(Y=l)$ |
      > |---|---|---|---|---|
      > | 0 | 0 | 0 | $\tfrac15$ | $\tfrac15$ |
      > | 1 | 0 | $\tfrac35$ | 0 | $\tfrac35$ |
      > | 2 | $\tfrac15$ | 0 | 0 | $\tfrac15$ |
      > | $P(X=k)$ | $\tfrac15$ | $\tfrac35$ | $\tfrac15$ | 1 |

      ![](/images/statistics-a/ps09-q3-joint-table.png)

      *Theory diagram of the table. All the probability sits on the anti-diagonal.*
    related_terms: ["joint-distribution", "joint-distribution-table", "tree-diagram", "marginal-distribution"]
    source_doc_page: 2
  - id: "3b"
    text: |
      Are $X$ and $Y$ dependent? (The sheet says "A and Y"; it means $X$ and $Y$.)
    solution: |
      > [!success] Answer
      > $X$ and $Y$ are dependent
      >
      > $$
      > P(X=0,\,Y=0) = 0 \neq \tfrac15\cdot\tfrac15 = P(X=0)\,P(Y=0)
      > $$
    related_terms: ["independent-random-variables", "joint-distribution-table", "marginal-distribution"]
    source_doc_page: 2
  - id: "3c"
    text: |
      Before calculating, what do you expect the correlation of $X$ and $Y$ to be? Is it 0? Is it positive or negative? If so, how strong?
    solution: |
      Two people are always chosen, so the total is fixed:

      $$
      X + Y = 2
      $$

      This means $Y = -X + 2$, a linear transformation of $X$ with slope $-1$.

      > [!success] Answer
      > perfect negative correlation, $\rho(X,Y) = -1$
      >
      > A perfect linear relationship with a negative slope gives the strongest possible negative correlation.

      ![](/images/statistics-a/ps09-q3-perfect-line.png)

      *Theory diagram. Every possible outcome sits on the line $Y=2-X$, so the correlation is exactly $-1$.*
    related_terms: ["correlation-coefficient", "linear-transformation"]
    source_doc_page: 2
  - id: "3d"
    text: |
      Calculate the correlation coefficient of $X$ and $Y$.
    solution: |
      $$
      E(X) = \tfrac15\cdot 0 + \tfrac35\cdot 1 + \tfrac15\cdot 2 = 1, \qquad E(Y) = \tfrac15\cdot 0 + \tfrac35\cdot 1 + \tfrac15\cdot 2 = 1
      $$

      $$
      \mathrm{Var}(X) = \mathrm{Var}(Y) = 0^2\cdot\tfrac15 + 1^2\cdot\tfrac35 + 2^2\cdot\tfrac15 - 1^2 = \tfrac25
      $$

      The product $XY$ is nonzero only when $X=Y=1$:

      | $XY$ | 0 | 1 |
      |---|---|---|
      | $P(XY)$ | $\tfrac25$ | $\tfrac35$ |

      $$
      E(XY) = 0\cdot\tfrac25 + 1\cdot\tfrac35 = \tfrac35
      $$

      $$
      \mathrm{Cov}(X,Y) = \tfrac35 - 1\cdot 1 = -\tfrac25
      $$

      $$
      \rho(X,Y) = \frac{-\tfrac25}{\sqrt{\tfrac25}\cdot\sqrt{\tfrac25}} = -1
      $$

      > [!success] Answer
      > $\rho(X,Y) = -1$, matching the expectation in part (c)
      >
    related_terms: ["correlation-coefficient", "covariance", "expected-value", "variance"]
    source_doc_page: 2
  - id: "3e"
    text: |
      Calculate $\mathrm{Var}(X+Y)$ based on the formula $\mathrm{Var}(X+Y) = \mathrm{Var}(X)+\mathrm{Var}(Y)+2\,\mathrm{Cov}(X,Y)$.
    solution: |
      $$
      \mathrm{Var}(X+Y) = \tfrac25 + \tfrac25 + 2\cdot\left(-\tfrac25\right) = 0
      $$

      > [!success] Answer: 0
    related_terms: ["variance-of-a-sum", "covariance", "variance"]
    source_doc_page: 2
  - id: "3f"
    text: |
      Could you figure out the value of $\mathrm{Var}(X+Y)$ without calculation? Explain.
    solution: |
      > [!success] Answer: yes, it is 0
      > $X+Y$ is always equal to 2 (two people are always chosen). A constant has no variability, so its variance is 0.

      > [!tip] Intuition
      > The covariance term $2\,\mathrm{Cov}(X,Y)=-\tfrac45$ exactly cancels the two variances ($\tfrac25+\tfrac25=\tfrac45$). A perfect negative correlation is what makes the variance of the sum vanish.
    related_terms: ["variance-of-a-sum", "variance", "correlation-coefficient"]
    source_doc_page: 2
  - id: "4"
    text: |
      **Two dice.** We roll 2 fair 6-sided dice. Mark:

      $X$ is the number of dice showing 1. $Y$ is the number of dice showing 2.
    solution: |
      Solved part by part below.
    related_terms: ["joint-distribution", "binomial-distribution"]
    source_doc_page: 2
  - id: "4a"
    text: |
      What is the joint distribution of $X$ and $Y$?
    solution: |
      The probability space is symmetric: 36 equally likely outcomes, each with probability $\tfrac1{36}$. Count outcomes by $(X,Y)$:

      - $X=2,Y=0$: both dice show 1, 1 outcome.
      - $X=0,Y=2$: both dice show 2, 1 outcome.
      - $X=1,Y=1$: one die 1 and the other 2, 2 outcomes.
      - $X=1,Y=0$: one die is 1, the other is in $\{3,4,5,6\}$: $2\cdot 4 = 8$ outcomes.
      - $X=0,Y=1$: likewise 8 outcomes.
      - $X=0,Y=0$: both dice in $\{3,4,5,6\}$: $4\cdot 4 = 16$ outcomes.

      > [!success] Answer: joint distribution table
      > | $Y \backslash X$ | 0 | 1 | 2 | $P(Y=l)$ |
      > |---|---|---|---|---|
      > | 0 | $\tfrac{16}{36}$ | $\tfrac{8}{36}$ | $\tfrac{1}{36}$ | $\tfrac{25}{36}$ |
      > | 1 | $\tfrac{8}{36}$ | $\tfrac{2}{36}$ | 0 | $\tfrac{10}{36}$ |
      > | 2 | $\tfrac{1}{36}$ | 0 | 0 | $\tfrac{1}{36}$ |
      > | $P(X=k)$ | $\tfrac{25}{36}$ | $\tfrac{10}{36}$ | $\tfrac{1}{36}$ | 1 |

      ![](/images/statistics-a/ps09-q4-joint-table.png)

      *Theory diagram of the table. Cells with $X+Y>2$ are impossible with only two dice.*
    related_terms: ["joint-distribution", "joint-distribution-table", "marginal-distribution", "symmetrical-probability-space"]
    source_doc_page: 2
  - id: "4b"
    text: |
      Before calculating, what do you expect the correlation of $X$ and $Y$ to be? Is it 0? Is it positive or negative? If so, how strong?
    solution: |
      > [!success] Answer
      > negative, but weaker than $-1$
      >
      > A die that shows a 1 cannot show a 2, and vice versa, so the counts compete and we expect a negative correlation. But $Y$ is not a linear function of $X$ (unlike Q3, the dice can also show 3 to 6), so the correlation should be less than perfect.
    related_terms: ["correlation-coefficient", "covariance"]
    source_doc_page: 2
  - id: "4c"
    text: |
      What is the correlation coefficient of $X$ and $Y$? Compare it with your expectation.
    solution: |
      Each count is binomial (2 independent dice, success probability $\tfrac16$):

      $$
      X \sim B\left(2,\tfrac16\right), \qquad Y \sim B\left(2,\tfrac16\right)
      $$

      $$
      E(X) = E(Y) = np = 2\cdot\tfrac16 = \tfrac13
      $$

      $$
      \mathrm{Var}(X) = \mathrm{Var}(Y) = np(1-p) = 2\cdot\tfrac16\cdot\tfrac56 = \tfrac{5}{18}
      $$

      $XY$ is nonzero only when $X=Y=1$ (probability $\tfrac2{36}$):

      | $XY$ | 0 | 1 |
      |---|---|---|
      | $P(XY)$ | $\tfrac{17}{18}$ | $\tfrac{2}{36}=\tfrac1{18}$ |

      $$
      E(XY) = 0\cdot\tfrac{17}{18} + 1\cdot\tfrac1{18} = \tfrac1{18}
      $$

      $$
      \mathrm{Cov}(X,Y) = \tfrac1{18} - \tfrac13\cdot\tfrac13 = -\tfrac1{18}
      $$

      $$
      \rho(X,Y) = \frac{-\tfrac1{18}}{\sqrt{\tfrac5{18}}\sqrt{\tfrac5{18}}} = -\tfrac15 = -0.2
      $$

      > [!success] Answer
      > $\rho(X,Y) = -0.2$
      >
      > A weak negative correlation, as expected in part (b).
    related_terms: ["correlation-coefficient", "covariance", "binomial-distribution", "expected-value", "variance"]
    source_doc_page: 2
  - id: "4d"
    text: |
      Suppose you make a bet where you earn 3 shekels for each die that comes up 1, and lose 2 shekels for each die that comes up 2. What is the expected number of shekels you earn?
    solution: |
      Let $R = 3X - 2Y$ be the shekels earned. By additivity and the linear rules for expected value:

      $$
      E(R) = 3E(X) - 2E(Y) = 3\cdot\tfrac13 - 2\cdot\tfrac13 = \tfrac13
      $$

      > [!success] Answer
      > $\tfrac13$ shekel
      >

      > [!tip] Intuition
      > The covariance does not matter for an expected value: $E$ of a sum is always the sum of the $E$'s, dependent or not. It would matter for $\mathrm{Var}(R)$.
    related_terms: ["expected-value", "linear-transformation"]
    source_doc_page: 2
  - id: "4e"
    text: |
      Mark $W$, the number of dice showing a number greater than 2. Express $W$ using $X$ and $Y$ and calculate the expected value and variance of $W$.
    solution: |
      A die either shows 1, shows 2, or shows more than 2. So of the 2 dice, the ones that are not 1 or 2 are the rest:

      $$
      W = 2 - (X+Y)
      $$

      $$
      E(X+Y) = \tfrac13 + \tfrac13 = \tfrac23
      $$

      $$
      E(W) = E\big(2-(X+Y)\big) = 2 - \tfrac23 = 1\tfrac13
      $$

      For the variance, first the variance of the sum, including the covariance from part (c):

      $$
      \mathrm{Var}(X+Y) = \tfrac5{18} + \tfrac5{18} + 2\cdot\left(-\tfrac1{18}\right) = \tfrac8{18} = \tfrac49
      $$

      A constant does not change the variance, and multiplying by $-1$ squares to $+1$:

      $$
      \mathrm{Var}(W) = \mathrm{Var}\big(2-(X+Y)\big) = (-1)^2\,\mathrm{Var}(X+Y) = \tfrac49
      $$

      > [!success] Answer
      > $W = 2-(X+Y)$, $E(W)=1\tfrac13$, $\mathrm{Var}(W)=\tfrac49$
      >

      Check from the official solution: $W$ counts dice above 2, each with probability $\tfrac46$, so $W \sim B\left(2,\tfrac46\right)$:

      $$
      E(W) = 2\cdot\tfrac46 = 1\tfrac13, \qquad \mathrm{Var}(W) = 2\cdot\tfrac46\cdot\tfrac26 = \tfrac49
      $$
    related_terms: ["variance-of-a-sum", "linear-transformation", "binomial-distribution", "expected-value", "variance"]
    source_doc_page: 2
---

*Related: [[Lec_08-Joint Distributions, Conditional Distributions and Covariance]], [[Lec_09-Covariance and Correlation]], [[Lec_03-Conditional Probability, Bayes and Independence]] (tree diagrams), [[Lec_07-Known Distributions]] (hypergeometric and binomial)*
