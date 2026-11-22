---
title: "PS2"
subject: statistics-a
source_doc: /papers/statistics-a/ps-2.pdf
tags:
  - statistics-a
  - problem-set
  - probability
  - sample-space
  - inclusion-exclusion
  - complement-rule
  - two-by-two-table
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Traffic lights.** On my road to work I have to go through 4 traffic lights. Over time, I've found that the probabilities of my having to stop at different numbers of red lights are:

      | Reds stopped at | 0 | 1 | 2 | 3 | 4 |
      | --- | --- | --- | --- | --- | --- |
      | Probability | 0.05 | 0.25 | 0.35 | 0.28 | 0.07 |

      - i. What is the sample space for the experiment "how many red lights I have to stop in on a given day"?
      - ii. What is the probability that on a given day I had to stop on: (a) at least two red lights, (b) more than two red lights, (c) at most two red lights?
    solution: |
      > [!tip] Intuition
      > The five probabilities sum to $0.05+0.25+0.35+0.28+0.07=1$, as they must: exactly one of "0, 1, 2, 3, 4 reds" happens on any given day.

      Worked in parts 1i, 1iia, 1iib and 1iic below.
    related_terms: ["sample-space", "probability-function"]
    source_doc_page: 1
  - id: "1i"
    text: |
      What is the sample space for the experiment "how many red lights I have to stop in on a given day"? (4 traffic lights on the road to work.)
    solution: |
      The outcome is the **number** of red lights, so the outcomes are the possible counts. Zero is included (a green run), and 4 is the maximum because there are only 4 lights.

      $$
      \Omega = \{0, 1, 2, 3, 4\}
      $$

      > [!success] Answer
      > $\{0,1,2,3,4\}$
      >
    related_terms: ["sample-space"]
    source_doc_page: 1
  - id: "1iia"
    text: |
      Using $P(0)=0.05$, $P(1)=0.25$, $P(2)=0.35$, $P(3)=0.28$, $P(4)=0.07$ for the number of red lights, what is the probability that on a given day I had to stop at **at least two** red lights?
    solution: |
      "At least 2" means 2 or more, so $\{2,3,4\}$.

      $$
      P(\text{at least 2}) = P(2)+P(3)+P(4) = 0.35+0.28+0.07 = 0.7
      $$

      > [!success] Answer
      > $0.7$
      >

      > [!warning] Trap: "at least" vs "more than"
      > "At least 2" includes 2; "more than 2" does not. The difference between (a) and (b) is exactly $P(2)=0.35$.
    related_terms: ["probability-function", "event", "sample-space"]
    source_doc_page: 1
  - id: "1iib"
    text: |
      Using $P(0)=0.05$, $P(1)=0.25$, $P(2)=0.35$, $P(3)=0.28$, $P(4)=0.07$ for the number of red lights, what is the probability that on a given day I had to stop at **more than two** red lights?
    solution: |
      "More than 2" excludes 2 itself, so $\{3,4\}$.

      $$
      P(\text{more than 2}) = P(3)+P(4) = 0.28+0.07 = 0.35
      $$

      > [!success] Answer
      > $0.35$
      >
    related_terms: ["probability-function", "event", "sample-space"]
    source_doc_page: 1
  - id: "1iic"
    text: |
      Using $P(0)=0.05$, $P(1)=0.25$, $P(2)=0.35$, $P(3)=0.28$, $P(4)=0.07$ for the number of red lights, what is the probability that on a given day I had to stop at **at most two** red lights?
    solution: |
      "At most 2" means 2 or fewer, so $\{0,1,2\}$.

      $$
      P(\text{at most 2}) = P(0)+P(1)+P(2) = 0.05+0.25+0.35 = 0.65
      $$

      > [!success] Answer
      > $0.65$
      >

      > [!tip] Intuition
      > Parts (a) and (c) share the outcome 2 and together cover everything, so $P(a)+P(c) = 1 + P(2) = 1.35$. Indeed $0.7+0.65=1.35$. Also "at most 2" is the complement of "more than 2": $1-0.35=0.65$, matching (c) by the complement rule.
    related_terms: ["probability-function", "complement-rule", "event"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Union of two events under different assumptions.** Events $A$ and $B$ are two events in the same probability space for which $P(A)=0.2$ and $P(B)=0.4$. What is the probability that $A$, $B$ or both $A$ and $B$ happened, that is $P(A\cup B)$, if:

      - i. $P(A\cap B)=0.15$
      - ii. $A$ is included in $B$ ($A\subset B$)
      - iii. $P(B-A)=0.35$
      - iv. $A$ is included in the complement of $B$ ($A\subset \bar B$)
    solution: |
      **Common step.** The reminder is the inclusion-exclusion rule:

      $$
      P(A\cup B) = P(A)+P(B)-P(A\cap B)
      $$

      Plugging in the given values leaves a single unknown:

      $$
      P(A\cup B) = 0.2+0.4-P(A\cap B) = 0.6-P(A\cap B)
      $$

      So every part reduces to finding $P(A\cap B)$. Worked in parts 2i to 2iv below.
    related_terms: ["inclusion-exclusion-rule", "union", "intersection"]
    source_doc_page: 1
  - id: "2i"
    text: |
      With $P(A)=0.2$ and $P(B)=0.4$, find $P(A\cup B)$ if $P(A\cap B)=0.15$.
    solution: |
      Given directly:

      $$
      P(A\cup B) = 0.6-0.15 = 0.45
      $$

      > [!success] Answer
      > $0.45$
      >
    related_terms: ["inclusion-exclusion-rule", "union", "intersection"]
    source_doc_page: 1
  - id: "2ii"
    text: |
      With $P(A)=0.2$ and $P(B)=0.4$, find $P(A\cup B)$ if $A$ is included in $B$ ($A\subset B$).
    solution: |
      If $A$ is included in $B$, then every outcome in $A$ is also in $B$, so $A\cap B = A$. Hence

      $$
      P(A\cap B)=P(A)=0.2, \qquad P(A\cup B)=0.6-0.2=0.4
      $$

      > [!success] Answer
      > $0.4$
      >

      > [!tip] Intuition
      > If $A\subset B$ then $A\cup B = B$, so the answer is simply $P(B)=0.4$. Both routes agree.
    related_terms: ["inclusion-exclusion-rule", "union", "intersection", "set"]
    source_doc_page: 1
  - id: "2iii"
    text: |
      With $P(A)=0.2$ and $P(B)=0.4$, find $P(A\cup B)$ if $P(B-A)=0.35$.
    solution: |
      $B-A$ is the part of $B$ outside $A$. Split $B$ into the part outside $A$ and the part inside $A$:

      $$
      P(B)=P(B-A)+P(A\cap B) \;\Rightarrow\; P(A\cap B)=0.4-0.35=0.05
      $$

      ![](/images/statistics-a/ps02-q2-venn-b-minus-a.png)

      The figure shows the three regions. Then:

      $$
      P(A\cup B)=0.6-0.05=0.55
      $$

      > [!success] Answer
      > $0.55$
      >

      > [!tip] Intuition
      > The union is $A\cap B$ plus $B-A$ plus $A-B$. With $P(A-B)=0.2-0.05=0.15$ (an extra check): $0.05+0.35+0.15=0.55$.
    related_terms: ["set-difference", "inclusion-exclusion-rule", "venn-diagram", "union"]
    source_doc_page: 1
  - id: "2iv"
    text: |
      With $P(A)=0.2$ and $P(B)=0.4$, find $P(A\cup B)$ if $A$ is included in the complement of $B$ ($A\subset \bar B$).
    solution: |
      $A$ is included in the complement of $B$, so no outcome is in both: $A$ and $B$ are disjoint, $A\cap B=\varnothing$ and $P(A\cap B)=0$.

      $$
      P(A\cup B)=0.6-0=0.6
      $$

      > [!success] Answer
      > $0.6$
      >

      > [!tip] Intuition: the range of the union
      > Across the four cases $P(A\cup B)$ ranges from $0.4$ (nested, maximal overlap) to $0.6$ (disjoint, no overlap). The overlap only ever *subtracts* from $0.6$.
    related_terms: ["disjoint-sets", "complement", "inclusion-exclusion-rule"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Honda owners and hikers.** Your market research on a given city shows that:

      - 1% of people own a Honda
      - 0.75% both own a Honda and like to hike
      - 1.5% either own a Honda or like to hike

      What percent of people in this city like to hike?
    solution: |
      Define the events: $A$ is owns a Honda, $B$ is likes to hike. The data translate to:

      $$
      P(A)=1\%=0.01, \qquad P(A\cap B)=0.75\%=0.0075, \qquad P(A\cup B)=1.5\%=0.015
      $$

      Use inclusion-exclusion and solve for $P(B)$ (working in percent):

      $$
      1.5\% = 1\% + P(B) - 0.75\%
      $$

      $$
      P(B) = 1.5\% - 1\% + 0.75\% = 1.25\%
      $$

      > [!success] Answer
      > $P(B)=1.25\%$ of the people in the city like to hike.
      >

      > [!tip] Intuition
      > Sanity checks: $P(B)\ge P(A\cap B)=0.75\%$ and $P(A\cup B)\ge P(B)$ both hold. "Either ... or" here means the inclusive union (Honda, hiking, or both), which is why we use $P(A\cup B)$.
    related_terms: ["inclusion-exclusion-rule", "union", "intersection", "event"]
    source_doc_page: 1
  - id: "4"
    text: |
      **Cinema tickets and popcorn.** Of the people who go to watch movies in a certain cinema, 60% buy their ticket online, 35% buy popcorn, and 30% both buy tickets in person and buy popcorn. What is the probability that a random person watching a movie in this cinema:

      - i. Bought their ticket online and did not buy popcorn
      - ii. Bought their ticket in person or bought popcorn
    solution: |
      Define the events: $A$ is bought the ticket online (so $\bar A$ is in person), $B$ is bought popcorn.

      Given: $P(A)=0.6$, $P(B)=0.35$, $P(\bar A\cap B)=0.3$.

      **Build the 2x2 table.** Fill the cells in this order, using that each row and column sums to its margin:

      1. $P(A\cap B)=P(B)-P(\bar A\cap B)=0.35-0.3=0.05$
      2. $P(A\cap\bar B)=P(A)-P(A\cap B)=0.6-0.05=0.55$
      3. $P(\bar A)=1-0.6=0.4$, so $P(\bar A\cap\bar B)=0.4-0.3=0.1$
      4. $P(\bar B)=1-0.35=0.65$

      ![](/images/statistics-a/ps02-q4-two-by-two-table.png)

      > [!warning] Trap: reading the 30%
      > "30% both buy tickets in person and buy popcorn" is $P(\bar A\cap B)$, not $P(A\cap B)$. Because $A$ is defined as *online*, "in person" is $\bar A$.

      Worked in parts 4i and 4ii below.
    related_terms: ["2x2-probability-table", "complement", "intersection"]
    source_doc_page: 2
  - id: "4i"
    text: |
      In the cinema (60% buy tickets online, 35% buy popcorn, 30% both buy tickets in person and buy popcorn), what is the probability that a random person bought their ticket online and did not buy popcorn?
    solution: |
      With $A$ = online and $B$ = popcorn, this is the cell $A\cap\bar B$ of the 2x2 table:

      $$
      P(A\cap\bar B)=0.55
      $$

      > [!success] Answer
      > $0.55$
      >
    related_terms: ["2x2-probability-table", "intersection", "complement"]
    source_doc_page: 2
  - id: "4ii"
    text: |
      In the cinema (60% buy tickets online, 35% buy popcorn, 30% both buy tickets in person and buy popcorn), what is the probability that a random person bought their ticket in person or bought popcorn?
    solution: |
      This is $\bar A\cup B$. By inclusion-exclusion:

      $$
      P(\bar A\cup B)=P(\bar A)+P(B)-P(\bar A\cap B)=0.4+0.35-0.3=0.45
      $$

      > [!success] Answer
      > $0.45$
      >

      > [!tip] Intuition: a check via the complement
      > The complement of $\bar A\cup B$ is "online and no popcorn", $A\cap\bar B$, which is part (i): $1-0.55=0.45$. Both parts agree.
    related_terms: ["inclusion-exclusion-rule", "union", "complement-rule", "2x2-probability-table"]
    source_doc_page: 2
---

*Related: [[Lec_01-Sets and the Probability Function]], [[Lec_02-Probability Function and Conditional Probability]]*
