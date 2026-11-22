---
title: "Lec 01: Sets and the Probability Function"
semester: 1
year: 1
course: "Statistics A"
lecture: 1
instructor: Asael Sklar
tags:
  - statistics-a
  - probability
  - set-theory
  - sample-space
  - events
  - probability-axioms
subject: statistics-a
in_scope: true
---

# Lec 01: Sets and the Probability Function

> Part of: [[Statistics A]]
> Key concepts: [[Set]], [[Venn Diagram]], [[Union]], [[Intersection]], [[Complement]], [[Set Difference]], [[Disjoint Sets]], [[Random Experiment]], [[Sample Space]], [[Event]], [[Probability Function]], [[Probability Axioms]], [[Symmetrical Probability Space]]

Statistics for Economists I, Class 1 (lecturer: Asael Sklar). The lecture has two jobs: set up the course, and build the **mathematical language of probability**. Step 0 is set theory. Then a random experiment is defined by three ingredients: results, events and a probability function.

## 1. Course set-up

> [!info] Course goal
> Learn the foundations of probability theory and the distributions of random variables that your later statistics courses rely on.

- **Semester plan:** Unit 1 (weeks 1 to 4) is probability: sets and events, probability operations, conditional probability, symmetrical probability, combinatorics. Unit 2 (weeks 5 to 12) is random variables: discrete distributions, expected value, variance, specific distributions (uniform, binomial, ...), joint distributions, continuous distributions, the normal distribution and the central limit theorem.
- **Statistics concepts map:** this semester covers probability up to the normal distribution and linear regression basics; semester B covers point estimation, hypothesis tests, effect size and power, confidence intervals, maximum likelihood and multiple regression; year 2 and specialisations cover advanced regression, A/B testing, experimental design and machine-learning algorithms.
- **Approach:** both concepts and justifications ("why this is true"), mathematical and intuitive.
- **Format:** weekly lecture (Monday), weekly recitation (Tuesday), weekly exercises that are not graded or submitted, full solutions on Moodle. Slides and handouts are posted before class.
- **Final exam:** 20 multiple-choice questions; past exams are on Moodle.
- **Extra credit:** up to 5 points in total, but the maximum course grade stays 100.
- **Books:** Pishro-Nik, *Introduction to Probability, Statistics, and Random Processes* (free at probabilitycourse.com); Freedman, Pisani and Purves, *Statistics* (4th ed.).

## 2. Why bother: intuition fails

### Warm-up: Linda

Linda is 31, single, outspoken and very bright; she majored in philosophy and cared about discrimination and social justice. Which is more probable?

1. Linda is a bank teller.
2. Linda is a bank teller **and** a feminist.

Many people pick option 2, but it is a subset of option 1, so it cannot be more probable. The slides name the cause: the **representativeness heuristic** (we judge by how well the story fits, not by the set logic). Once you have [[Event]]s and [[Probability Axioms]] (below), this is just "a subset has no larger probability".

> [!warning] Common mistake
> Adding detail makes a story more *vivid*, never more *probable*.

### The Sally Clark case

Sally Clark (1964 to 2007) lost two infant sons, first ruled sudden infant death syndrome (SIDS), then was charged with and convicted of murdering them. The statistical evidence was misused through the **Prosecutor's Fallacy**: confusing "how likely is this evidence if the person is guilty/innocent" with "how likely is guilt given the evidence". In symbols (previewing conditional probability, which comes later in the course):

$$
P(\text{evidence} \mid \text{hypothesis}) \neq P(\text{hypothesis} \mid \text{evidence})
$$

> [!tip] Takeaway
> Misunderstanding probability has real costs, which is why we build it carefully.

## 3. What is probability?

- **Working definition:** the mathematical expression of how certain a result is, how likely something is to be true ("quantified certainty").
- Everyday uses include insurance pricing.
- **Why numbers rather than "unlikely", "probably", "almost certain"?** Two reasons from the slides: **precision**, and **compoundability** (numbers can be combined by rules; words cannot).

The plan for building it mathematically:

| Question | Mathematical object |
| --- | --- |
| What are we uncertain about? | Results, collected in the [[Sample Space]] |
| What do we care about? | [[Event]]s (sets of results) |
| How do we assign numbers? | The [[Probability Function]] |

Step 0 is set theory, the language needed for all three.

## 4. Set theory

> [!info] Definitions
> **Set theory** is the mathematical theory of sets. A **[[Set]]** is a collection of elements (its members).

### Notation

- Members go between curly brackets: $A = \{1, 2, 3\}$, $C = \{\text{red}, \text{green}, \text{blue}, \text{yellow}\}$.
- A set can be named by a letter, just as a number can ($X = 3$).
- **Empty set:** $\varnothing = \{\}$.
- **Size** (number of elements): $|A| = 3$, $|\varnothing| = 0$.

### Set relations

| Relation | Meaning | Notation |
| --- | --- | --- |
| Equal | exactly the same members | $A = B$ |
| Inclusion | every member of $A$ is a member of $B$ | $A \subseteq B$ |
| [[Disjoint Sets\|Disjoint]] | no member of one is a member of the other | $A \cap B = \varnothing$ |

A [[Venn Diagram]] draws each set as a circle; the overlap of circles mirrors the relationship between the sets.

### Set operations

Operations on sets play the role that addition and multiplication play for numbers. The universe of all possible elements is $\Omega$.

| Operation | Definition | Notation | Everyday phrasing |
| --- | --- | --- | --- |
| [[Union]] | every element in either set (or both) | $A \cup B$ | "or", "is either" |
| [[Intersection]] | every element in both sets | $A \cap B$ | "and", "is both" |
| [[Set Difference\|Difference]] | elements of $A$ that are not in $B$ | $A - B$ | "A but not B" |
| [[Complement]] | everything in $\Omega$ not in $A$ | $\bar{A}$ | "not" |

![[Lec01_set_operations.png]]

Facts shown on the slides:

- **Union is symmetric:** $A \cup B = B \cup A$.
- If $A \subseteq C$, then $A \cup C = C$ (the smaller set adds nothing).
- If $A \subseteq C$ and $B$, $C$ are disjoint, then $A \cup B \neq C$ in general (the union is smaller than $C$ unless $A = C$; $B$ sits entirely outside $C$).
- If $A \subseteq B$, then $A \cap B = A$.
- If $A$ and $B$ are disjoint, then $A \cap B = \varnothing$, and **conversely** $A \cap B = \varnothing$ means they are disjoint (this is the definition).
- **Difference is redundant:** $A - B = A \cap \bar{B}$, so it can be expressed with intersection and complement. Also $B - A = B - (A \cap B)$.
- The complement of $\Omega$ is the empty set: $\bar{\Omega} = \varnothing$.

> [!example] Size of a difference
> Given $|A| = 50$, $|B| = 30$, $|A \cap B| = 15$:
>
> $$
> |A - B| = |A| - |A \cap B| = 50 - 15 = 35, \qquad |B - A| = |B| - |A \cap B| = 30 - 15 = 15
> $$
>
> Subtract the overlap, because the overlap is the part of $A$ that *is* in $B$.

> [!note] Four disjoint pieces
> The intersections of two sets and their complements split $\Omega$ into **four disjoint sets**: $A \cap B$, $A \cap \bar{B}$, $\bar{A} \cap B$ and $\bar{A} \cap \bar{B}$. Every element of $\Omega$ is in exactly one. This is the key to Venn-diagram counting problems.

> [!example] Translating to words
> "Everything that is A and not B" is $A \cap \bar{B}$. The slide's cat example: "all the not white cats" is the complement of the white cats.

### More than two sets and order of operations

All relations and operations extend to three or more sets. Order of operations: **intersection before union**, but parentheses override and are clearer:

$$
A \cup B \cap C = A \cup (B \cap C) \quad \neq \quad (A \cup B) \cap C
$$

> [!warning] Use parentheses
> $A \cup B \cap C$ and $(A \cup B) \cap C$ are different sets (the handout draws both). Always write the brackets.

### Recitation example: the diagnostician (Exercise 1, Q1)

A diagnostician saw 100 patients and referred them to tests 1, 2 and 3 (sets $A$, $B$, $C$): $|A| = 60$, $|B| = 40$, $|C| = 70$, $|A \cap B| = 32$, $|A \cap C| = 45$, $|B \cap C| = 38$, $|A \cap B \cap C| = 30$.

**Method:** fill the Venn diagram from the **inside out**. Start with the triple intersection (30), then each pairwise region minus 30, then each single region minus everything already placed, and finally the outside.

| Region | Working | Count |
| --- | --- | --- |
| $A \cap B \cap C$ | given | 30 |
| $A \cap B$ only | $32 - 30$ | 2 |
| $A \cap C$ only | $45 - 30$ | 15 |
| $B \cap C$ only | $38 - 30$ | 8 |
| $A$ only | $60 - 30 - 15 - 2$ | 13 |
| $B$ only | $40 - 30 - 8 - 2$ | 0 |
| $C$ only | $70 - 30 - 8 - 15$ | 17 |
| Outside all three | $100 - 30 - 8 - 2 - 15 - 13 - 17$ | 15 |

![[Lec01_three_set_venn.png]]

The eight questions then read off the diagram (my reading of the diagram, not worked on the slides):

| Group | Set expression | Size |
| --- | --- | --- |
| Test 1 but not 2 | $A \cap \bar{B}$ | $13 + 15 = 28$ |
| Tests 1 and 2 but not 3 | $A \cap B \cap \bar{C}$ | 2 |
| Exactly one test | $\text{A only} + \text{B only} + \text{C only}$ | $13 + 0 + 17 = 30$ |
| Exactly two tests | three pairwise-only regions | $2 + 15 + 8 = 25$ |
| At least one test | $A \cup B \cup C$ | $100 - 15 = 85$ |
| At most two tests | $\overline{A \cap B \cap C}$ | $100 - 30 = 70$ |
| All three | $A \cap B \cap C$ | 30 |
| No test | $\bar{A} \cap \bar{B} \cap \bar{C}$ | 15 |

> [!note] Reconstructed from the slides
> The slides show only the region counts (13, 0, 17, 15, 2, 8, 30). The final table of expressions and sizes for the eight questions is reconstructed here from those counts; check it against the official Exercise 1 solution.

## 5. Random experiments

> [!info] Random experiment
> A **[[Random Experiment]]** is an occurrence with uncertain outcomes. Examples: rolling a die, flipping a coin, a company's yearly earnings in 2023, a child's height next year.

An experiment is defined by three things:

1. **All the possible results**, the [[Sample Space]] $\Omega$.
2. **The sets of results we care about**, the [[Event]]s.
3. **A [[Probability Function]]** assigning each event a probability $P(A)$.

### Sample space $\Omega$

The set of all possible results. The **granularity is flexible**: we choose it to suit our needs. For a coin flip:

$$
\Omega = \{\text{Heads}, \text{Tails}\} \quad \text{or, if we care about landing on its edge,} \quad \Omega = \{\text{Heads}, \text{Tails}, \text{middle}\}
$$

### Events

> [!info] Event
> An **[[Event]]** is any subset of results from the sample space $\Omega$.

Rolling a six-sided die, possible events:

| Event | As a set |
| --- | --- |
| Even number | $\{2, 4, 6\}$ |
| Prime number | $\{2, 3, 5\}$ |
| Six | $\{6\}$ |
| Four | $\{4\}$ |

Since events are sets, everything from section 4 applies:

- **Equality** $A = B$: the events contain exactly the same results.
- **Inclusion** $A \subseteq B$: if $A$ happens, $B$ also happens. If $B$ happens, $A$ need not (slide question). Example: "four" is included in "even number".
- **Union:** the union of "even number" and "six" is $\{2, 4, 6\}$, because six is already inside "even".
- **Disjoint** events cannot both happen in one run, e.g. "five" and "six".

## 6. The probability function

> [!info] Probability function
> A **[[Probability Function]]** assigns each event $A$ a number $P(A)$ showing how probable it is in this experiment.

It is defined by **three axioms** ([[Probability Axioms]]):

1. **Non-negativity:** for every event $A$, $P(A) \geq 0$.
2. **Certainty:** the event containing all results has probability one, $P(\Omega) = 1$.
3. **Additivity:** if $A$ and $B$ are **disjoint**, $P(A \cup B) = P(A) + P(B)$.

The intuition (slide): these fix the range of probability as between 0 and 1.

> [!warning] Additivity needs disjointness
> $P(A \cup B) = P(A) + P(B)$ is only an axiom when $A \cap B = \varnothing$. Otherwise you double count the overlap.

### Worked example: a fair die

A **fair** die has equal probability for every result: $P(1) = P(2) = \dots = P(6) = X$. Each result is an event disjoint from every other, so by additivity and axiom 2:

$$
P(\Omega) = P(1) + P(2) + \dots + P(6) = 6X = 1 \quad \Rightarrow \quad X = \tfrac{1}{6}
$$

**Rolling 5 or more:** $\{5, 6\}$ is the union of the disjoint events $\{5\}$ and $\{6\}$:

$$
P(5 \text{ or more}) = P(5 \cup 6) = P(5) + P(6) = \tfrac{1}{6} + \tfrac{1}{6} = \tfrac{1}{3}
$$

### Symmetrical probability space

> [!info] Symmetrical probability space
> A **[[Symmetrical Probability Space]]** is an experiment where every result has equal probability. Examples: fair die, fair coin flip, well-shuffled deck, randomly chosen person.

The same argument as the die gives, for any symmetrical space with finitely many results:

$$
P(\text{one result}) = \frac{1}{|\Omega|}
$$

## Summary

- Probability is quantified certainty; numbers give **precision** and **compoundability**. Intuition can mislead (Linda, the Prosecutor's Fallacy).
- Sets: members in $\{\ \}$; relations are equality, inclusion $\subseteq$ and disjointness ($A \cap B = \varnothing$); operations are union ($\cup$, "or"), intersection ($\cap$, "and"), complement ($\bar{A}$, "not") and difference ($A - B = A \cap \bar{B}$). Intersection binds before union.
- Venn counting: split into disjoint regions and fill in from the middle out.
- A random experiment = [[Sample Space]] $\Omega$ + [[Event]]s (subsets of $\Omega$) + [[Probability Function]] $P$.
- Axioms: $P(A) \geq 0$, $P(\Omega) = 1$, additivity for disjoint events. In a symmetrical space each result has probability $1/|\Omega|$.

## Handout 1 recap

The official one-page handout covers exactly this lecture: set definitions and notation (including $\bar{\Omega} = \varnothing$ and operation order with the two worked pictures $A \cup B \cap C$ versus $(A \cup B) \cap C$), then experiment, sample space, event, "events space" (all sets of results defined for the experiment), the probability function and the three axioms. Its one term not stressed in the slides is **events space**.

## Related notes

- [[Statistics A]] (course hub)
- Next lecture: Lec 02 (probability operations; link added in the later merge step)
- Concept notes: [[Set]], [[Venn Diagram]], [[Event]], [[Sample Space]], [[Probability Function]], [[Probability Axioms]]
