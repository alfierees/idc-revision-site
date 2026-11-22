---
title: "PS4"
subject: statistics-a
source_doc: /papers/statistics-a/ps-4.pdf
tags:
  - statistics-a
  - combinatorics
  - multiplication-principle
  - permutations
  - combinations
  - factorial
  - symmetrical-probability-space
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Three-letter passwords.** How many unique three letter passwords can be formed with only the letters A, B, C, D and E if:
    solution: |
      ![](/images/statistics-a/ps04-q1-password-slots.png)

      *Each of the 3 letter slots is a stage; the number in each box is how many letters are still available at that stage.*

      **Setting up.** There are three stages (three letters), so $k=3$. The first stage has 5 options (A to E), so $n=5$. **Order matters**: "aab" and "aba" are different passwords.
    related_terms: ["multiplication-principle"]
    source_doc_page: 1
  - id: "1a"
    text: |
      (i) Each letter can only appear once in a given password.
    solution: |
      No letter reused means no replacement, so we use the permutation without replacement:

      $$
      (5)_3 = \frac{5!}{(5-3)!} = 5 \cdot 4 \cdot 3 = 60
      $$

      Stage 1 has 5 choices, stage 2 has 4 left, stage 3 has 3 left.

      > [!success] Answer: 60
    related_terms: ["permutation", "factorial", "multiplication-principle"]
    source_doc_page: 1
  - id: "1b"
    text: |
      (ii) Each letter can appear more than once in a given password.
    solution: |
      Letters can repeat, so there is replacement and every stage has all 5 options:

      $$
      5^3 = 5 \cdot 5 \cdot 5 = 125
      $$

      > [!success] Answer: 125

      > [!tip] Intuition
      > The 60 are a subset of the 125: the 125 include passwords like "aab" and "eee" that (i) forbids. The gap is $125-60=65$ passwords with at least one repeated letter (own check, not in the source).
    related_terms: ["multiplication-principle"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Choosing a team of 3 kids from 7.** How many different outcomes can we get if we choose 3 kids out of a group of 7 to form a team if:
    solution: |
      **Setting up.** $k=3$ kids chosen out of $n=7$. The same kid cannot hold more than one position, so there is **no replacement**.
    related_terms: ["permutation", "combination"]
    source_doc_page: 1
  - id: "2a"
    text: |
      (i) There are 3 different positions on the team.
    solution: |
      Different positions are not interchangeable, so **order matters**:

      $$
      (7)_3 = \frac{7!}{(7-3)!} = \frac{7!}{4!} = 7 \cdot 6 \cdot 5 = 210
      $$

      > [!success] Answer: 210
    related_terms: ["permutation", "factorial"]
    source_doc_page: 1
  - id: "2b"
    text: |
      (ii) There are no different positions on the team.
    solution: |
      All places on the team are the same, so **order does not matter**:

      $$
      \binom{7}{3} = \frac{7!}{3!\,(7-3)!} = \frac{7!}{3!\,4!} = \frac{210}{6} = 35
      $$

      > [!success] Answer: 35

      > [!tip] Intuition
      > Each unordered team of 3 can be arranged in $3! = 6$ ways when positions are labelled, so $210 = 35 \times 6$. Dividing the ordered count by $k!$ is exactly how a combination comes from a permutation.
    related_terms: ["combination", "binomial-coefficient", "factorial"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Four-digit numbers.** How many different 4 digit numbers are there? (Numbers cannot start with 0; e.g. 0124 is not a valid number.)
    solution: |
      **Setting up.** Four digits, so $k=4$, from 10 possible digits, so $n=10$. Order matters (18 and 81 differ) and there is replacement (2222 is valid), so ignoring the restriction there are

      $$
      10^4 = 10{,}000
      $$

      strings. Now **subtract the invalid ones** that start with 0: fix the first digit as 0 and choose 3 more digits freely, so $k=3$ and

      $$
      10^3 = 1{,}000
      $$

      $$
      10{,}000 - 1{,}000 = 9{,}000
      $$

      > [!success] Answer: 9,000

      > [!tip] Intuition
      > Counting directly gives the same result: 9 options for the first digit (1 to 9) times $10^3$ for the rest, $9 \cdot 1000 = 9000$. This is a cross-check, not in the source.
    related_terms: ["multiplication-principle"]
    source_doc_page: 1
  - id: "4"
    text: |
      **The kindergarten queue.** In our kindergarten there are 9 children (5 boys and 4 girls). For breakfast, the children randomly form a queue.
    solution: |
      **Setting up.** 9 children each take one spot, so $k=9$ and $n=9$. Spots differ, so order matters; each child takes only one spot, so no replacement.
    related_terms: ["permutation", "symmetrical-probability-space"]
    source_doc_page: 1
  - id: "4a"
    text: |
      (i) How many different queues could they form?
    solution: |
      $$
      (9)_9 = \frac{9!}{(9-9)!} = 9! = 362{,}880
      $$

      > [!success] Answer: 362,880
    related_terms: ["permutation", "factorial"]
    source_doc_page: 1
  - id: "4b"
    text: |
      (ii) What is the probability that the 4 girls will be first and the 5 boys will be last?
    solution: |
      Let $A$ be the event "the 4 girls are first and the 5 boys are last". Break it into two stages:

      - **Stage 1:** the 4 girls fill the first 4 places: $(4)_4 = 4!$ orders.
      - **Stage 2:** the 5 boys fill the last 5 places: $(5)_5 = 5!$ orders.

      By the multiplication principle, $|A| = 4! \cdot 5!$. All queues are equally likely (a [[Symmetrical Probability Space]]), so

      $$
      P(A) = \frac{|A|}{|\Omega|} = \frac{(4)_4\,(5)_5}{(9)_9} = \frac{4!\,5!}{9!} = \frac{24 \cdot 120}{362{,}880} \approx 0.0079
      $$

      ![](/images/statistics-a/ps04-q4-queue-girls-first.png)

      *The favourable queues are the girl-block orders times the boy-block orders.*

      > [!success] Answer: about 0.0079

      > [!tip] Intuition
      > $\dfrac{4!\,5!}{9!} = \dfrac{1}{\binom{9}{4}} = \dfrac{1}{126} \approx 0.0079$: of the $\binom{9}{4}=126$ ways to choose which 4 spots the girls occupy, only one (the first four) works. Own check, not in the source.
    related_terms: ["symmetrical-probability-space", "multiplication-principle", "permutation", "factorial"]
    source_doc_page: 1
  - id: "5"
    text: |
      **The race (from a previous exam).** Five people are running a race. Shirt numbers (1 to 5) are assigned randomly before the race. What is the probability that the runner wearing shirt 2 will finish first and the runner wearing shirt 3 will finish second?

      a. $\frac{1}{120}$  b. $\frac{1}{60}$  c. $\frac{1}{40}$  d. $\frac{1}{20}$
    solution: |
      The number of options for first place is 5, and for second place (once first is decided) is 4. By the multiplication principle there are $5 \cdot 4 = 20$ possible outcomes for the first two places. Shirt numbers are assigned randomly, so every outcome is equally likely, and the single outcome "shirt 2 first, shirt 3 second" has probability $\frac{1}{20}$.

      > [!success] Answer
      > d, $\dfrac{1}{20}$
      >

      > [!warning] Why not 1/120?
      > $\frac{1}{120} = \frac{1}{5!}$ would be the chance of one complete ordering of all five finishers. The question only fixes the top two places, so only $(5)_2 = 20$ outcomes matter.
    related_terms: ["multiplication-principle", "permutation", "symmetrical-probability-space"]
    source_doc_page: 1
---

*Related: [[Lec_04-Symmetrical Probability Spaces and Combinatorics]]*
