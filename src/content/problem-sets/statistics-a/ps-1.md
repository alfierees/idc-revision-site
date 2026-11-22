---
title: "PS1"
subject: statistics-a
source_doc: /papers/statistics-a/ps-1.pdf
tags:
  - statistics-a
  - sets
  - venn-diagram
  - sample-space
  - event
ai_drafted: true
questions:
  - id: "1"
    text: |
      **The diagnostician.** A diagnostician sees patients and, if needed, refers them to do further tests. She can refer patients to do one or more of three tests, marked as test 1, test 2 and test 3. On a given week, she saw 100 patients, and referred:

      | Quantity | Patients |
      | --- | --- |
      | Test 1 | 60 |
      | Test 2 | 40 |
      | Test 3 | 70 |
      | Both tests 1 and 2 | 32 |
      | Both tests 1 and 3 | 45 |
      | Both tests 2 and 3 | 38 |
      | All three tests | 30 |

      We mark patients referred to test 1 as set $A$, to test 2 as set $B$, and to test 3 as set $C$. Using the union, intersection and complement operators on sets $A$, $B$ and $C$, represent each of the following groups and calculate its size (the number of patients):

      - I. Patients referred to test 1 but not 2
      - II. Patients referred to test 1 and 2 but not 3
      - III. Patients referred to only one test
      - IV. Patients referred to exactly two tests
      - V. Patients referred to at least one test
      - VI. Patients referred to at most two tests
      - VII. Patients referred to all three tests
      - VIII. Patients not referred to any tests

      > [!tip] Hint from the sheet
      > Use a Venn diagram. Start by noting that 30 patients did all three tests, while 38 did both tests 2 and 3, meaning 8 patients ($38-30$) did only tests 2 and 3.
    solution: |
      **Fill the Venn diagram first.** The three circles cut $\Omega$ (all 100 patients) into **eight disjoint regions**. Every patient is in exactly one region, so the eight counts add to 100. Work from the inside out: the centre first, then each pairwise overlap minus the centre, then each single-circle region minus everything already placed, and finally the outside.

      > [!example] Working
      > | Region | Working | Count |
      > | --- | --- | --- |
      > | $A \cap B \cap C$ | given | 30 |
      > | $A \cap B \cap \bar{C}$ | $32 - 30$ | 2 |
      > | $A \cap \bar{B} \cap C$ | $45 - 30$ | 15 |
      > | $\bar{A} \cap B \cap C$ | $38 - 30$ | 8 |
      > | $A \cap \bar{B} \cap \bar{C}$ | $60 - 30 - 2 - 15$ | 13 |
      > | $\bar{A} \cap B \cap \bar{C}$ | $40 - 30 - 2 - 8$ | 0 |
      > | $\bar{A} \cap \bar{B} \cap C$ | $70 - 30 - 15 - 8$ | 17 |
      > | $\bar{A} \cap \bar{B} \cap \bar{C}$ | $100 - (30+2+15+8+13+0+17)$ | 15 |

      ![](/images/statistics-a/ps01-q1-three-test-venn.png)

      Region counts: 13, 0, 17 (single only), 2, 15, 8 (pairs only), 30 (centre), 15 (outside).

      > [!tip] Intuition
      > Never add $\lvert A\rvert + \lvert B\rvert + \lvert C\rvert$ naively: patients in overlaps are counted twice or three times. Regions are the safe unit, because they do not overlap.

      > [!note] Sanity check on the diagram
      > Each circle total recovers the given data: $\lvert A\rvert = 13+2+15+30 = 60$, $\lvert B\rvert = 0+2+8+30 = 40$, $\lvert C\rvert = 17+15+8+30 = 70$.

      | Part | Group | Expression | Size |
      | --- | --- | --- | --- |
      | I | Test 1 not 2 | $A \cap \bar{B}$ | 28 |
      | II | Tests 1, 2 not 3 | $A \cap B \cap \bar{C}$ | 2 |
      | III | Exactly one test | three single-only regions | 30 |
      | IV | Exactly two tests | three pair-only regions | 25 |
      | V | At least one | $A \cup B \cup C$ | 85 |
      | VI | At most two | $\overline{A \cap B \cap C}$ | 70 |
      | VII | All three | $A \cap B \cap C$ | 30 |
      | VIII | None | $\bar{A} \cap \bar{B} \cap \bar{C}$ | 15 |
    related_terms: ["venn-diagram", "set", "union", "intersection", "complement", "disjoint-sets"]
    source_doc_page: 1
  - id: "1a"
    text: |
      In the diagnostician problem, represent the group of patients referred to test 1 but not 2 as a set expression, and give its size.
    solution: |
      $$
      A \cap \bar{B}
      $$

      $$
      \lvert A \cap \bar{B}\rvert = \lvert A \cap \bar{B} \cap C\rvert + \lvert A \cap \bar{B} \cap \bar{C}\rvert = 15 + 13 = 28
      $$

      > [!success] Answer: 28

      The expression leaves $C$ unrestricted, so both regions inside $A$ and outside $B$ count, whatever happened with test 3.
    related_terms: ["intersection", "complement", "venn-diagram"]
    source_doc_page: 1
  - id: "1b"
    text: |
      In the diagnostician problem, represent the group of patients referred to tests 1 and 2 but not 3 as a set expression, and give its size.
    solution: |
      $$
      A \cap B \cap \bar{C}
      $$

      > [!success] Answer: 2
    related_terms: ["intersection", "complement", "venn-diagram"]
    source_doc_page: 1
  - id: "1c"
    text: |
      In the diagnostician problem, represent the group of patients referred to only one test as a set expression, and give its size.
    solution: |
      $$
      (A \cap \bar{B} \cap \bar{C}) \cup (\bar{A} \cap B \cap \bar{C}) \cup (\bar{A} \cap \bar{B} \cap C)
      $$

      $$
      13 + 0 + 17 = 30
      $$

      > [!success] Answer: 30

      The three pieces are disjoint, so their sizes add.
    related_terms: ["union", "intersection", "complement", "disjoint-sets"]
    source_doc_page: 1
  - id: "1d"
    text: |
      In the diagnostician problem, represent the group of patients referred to exactly two tests as a set expression, and give its size.
    solution: |
      $$
      (A \cap B \cap \bar{C}) \cup (\bar{A} \cap B \cap C) \cup (A \cap \bar{B} \cap C)
      $$

      $$
      2 + 8 + 15 = 25
      $$

      > [!success] Answer: 25
    related_terms: ["union", "intersection", "complement", "disjoint-sets"]
    source_doc_page: 1
  - id: "1e"
    text: |
      In the diagnostician problem, represent the group of patients referred to at least one test as a set expression, and give its size.
    solution: |
      $$
      A \cup B \cup C
      $$

      $$
      \lvert A \cup B \cup C\rvert = 13 + 2 + 15 + 30 + 17 + 8 + 0 = 85
      $$

      Or take the complement of "no test": $100 - 15 = 85$.

      > [!success] Answer: 85
    related_terms: ["union", "complement", "venn-diagram"]
    source_doc_page: 1
  - id: "1f"
    text: |
      In the diagnostician problem, represent the group of patients referred to at most two tests as a set expression, and give its size.
    solution: |
      $$
      \overline{A \cap B \cap C}
      $$

      $$
      \lvert \overline{A \cap B \cap C}\rvert = 100 - 30 = 70
      $$

      > [!success] Answer: 70

      "At most two" means everyone except those who had all three tests (including the 15 with none).
    related_terms: ["intersection", "complement"]
    source_doc_page: 1
  - id: "1g"
    text: |
      In the diagnostician problem, represent the group of patients referred to all three tests as a set expression, and give its size.
    solution: |
      $$
      A \cap B \cap C, \qquad \lvert A \cap B \cap C\rvert = 30
      $$

      > [!success] Answer: 30
    related_terms: ["intersection"]
    source_doc_page: 1
  - id: "1h"
    text: |
      In the diagnostician problem, represent the group of patients not referred to any tests as a set expression, and give its size.
    solution: |
      $$
      \bar{A} \cap \bar{B} \cap \bar{C}, \qquad \lvert \bar{A} \cap \bar{B} \cap \bar{C}\rvert = 15
      $$

      > [!success] Answer: 15

      > [!tip] Intuition
      > This region equals $\overline{A \cup B \cup C}$ (De Morgan). The check $85 + 15 = 100$ confirms the diagram is consistent.
    related_terms: ["complement", "intersection", "union"]
    source_doc_page: 1
  - id: "2"
    text: |
      **John's coin and die.** John flips a fair coin and rolls a fair six-sided die, then looks at the face showing on the coin (either heads or tails) and the number showing on the die (1 through 6).

      - I. Write out the sample space for this experiment.
      - II. Write the set of results for the following events: (a) John rolls a 4; (b) John rolls a 4 and gets heads; (c) John rolls an even number; (d) John both rolls an even number and gets heads.
      - III. Mary does the same thing as John (rolls a six-sided die and flips a coin), but she then assigns a numerical value equal to the number showing on the die if the coin shows tails, or 0 if the coin shows heads. Write out the sample space for Mary's experiment.
    solution: |
      Worked part by part below (2a, 2b, 2c).
    related_terms: ["sample-space", "event", "random-experiment"]
    source_doc_page: 2
  - id: "2a"
    text: |
      Write out the sample space for John's experiment (a fair coin flip and a fair six-sided die roll, recording both the coin face and the die number).
    solution: |
      Each outcome is a coin face paired with a die face, $2 \times 6 = 12$ outcomes.

      $$
      \Omega = \{T1, T2, T3, T4, T5, T6, H1, H2, H3, H4, H5, H6\}
      $$

      > [!success] Answer: the 12 outcomes above
    related_terms: ["sample-space", "random-experiment"]
    source_doc_page: 2
  - id: "2b"
    text: |
      Write the set of results for each event in John's experiment: (a) John rolls a 4; (b) John rolls a 4 and gets heads; (c) John rolls an even number; (d) John both rolls an even number and gets heads.
    solution: |
      An event is a subset of $\Omega$. Note that "rolls a 4" ignores the coin, so it contains both coin faces.

      | Event | Set of results |
      | --- | --- |
      | a. Rolls a 4 | $\{T4, H4\}$ |
      | b. Rolls a 4 and gets heads | $\{H4\}$ |
      | c. Rolls an even number | $\{T2, T4, T6, H2, H4, H6\}$ |
      | d. Even number and heads | $\{H2, H4, H6\}$ |

      > [!tip] Intuition
      > "And" is an intersection: (d) is (c) intersected with "heads" $= \{H1,\dots,H6\}$, and (b) is (a) intersected with "heads".
    related_terms: ["event", "intersection", "sample-space"]
    source_doc_page: 2
  - id: "2c"
    text: |
      Mary does the same thing as John (rolls a six-sided die and flips a coin), but she then assigns a numerical value equal to the number showing on the die if the coin shows tails, or 0 if the coin shows heads. Write out the sample space for Mary's experiment.
    solution: |
      Mary records only a number, so outcomes are values, not pairs. Heads always gives 0 (whatever the die shows); tails gives 1 to 6.

      $$
      \Omega_{\text{Mary}} = \{0, 1, 2, 3, 4, 5, 6\}
      $$

      > [!success] Answer
      > $\{0,1,2,3,4,5,6\}$
      >

      > [!tip] Intuition
      > The sample space depends on what you choose to record. Mary's 7 values are coarser than John's 12 outcomes: six of John's outcomes (all heads) collapse into one value, 0. This is why the outcomes of Mary's experiment are not equally likely: 0 has probability $1/2$ and each of 1 to 6 has $1/12$ (an addition, not in the official solution).
    related_terms: ["sample-space", "random-experiment"]
    source_doc_page: 2
---

*Related: [[Lec_01-Sets and the Probability Function]]*
