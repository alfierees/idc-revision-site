---
title: "Lecture 3: Conditional Probability, Bayes and Independence"
semester: 1
year: 1
course: "Statistics A"
lecture: 3
tags:
  - statistics-a
  - probability
  - conditional-probability
  - law-of-total-probability
  - bayes-theorem
  - independence
  - tree-diagram
  - monty-hall
  - symmetrical-probability-space
subject: statistics-a
in_scope: true
---

# Lecture 3: Conditional Probability, Bayes and Independence

> Part of: [[Statistics A]]
> Key concepts: [[Conditional Probability]], [[Multiplication Formula]], [[Tree Diagram]], [[Law of Total Probability]], [[Bayes' Theorem]], [[Independent Events]], [[Monty Hall Problem]], [[Symmetrical Probability Space]]

Builds on [[Lec_02-Probability Function and Conditional Probability]] (axioms, complement, intersection, disjoint events). This lecture shows how to update a probability when you learn something, and how to flip a conditional probability around.

> [!note] Source
> Class 03 deck (slides 1 to 486, with animation builds collapsed) plus Handout 3. Formulas are merged from the handout. Worked numbers marked "derived" were computed from the slide set-up, not copied.

---

## 1. Conditional probability

**Definition.** The probability that A happens, given that B is already known to have happened.

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

Everyday examples from the slides: the chance of cat fur in your food given you own a cat; if it rains today there is a 50% chance it rains tomorrow; given Tom has won three tournaments, his chance of winning the next is high.

> [!tip] Intuition: conditioned on B means the sample space becomes B
> Once you know B is true, every outcome outside B is irrelevant. So you rescale: take the part of A that lies inside B, $A \cap B$, and measure it **relative to B** rather than relative to all of $\Omega$. That is why you divide by $P(B)$.

### Conditional vs intersection

Both involve A and B happening, but they are different questions.

| | Conditional $P(A\mid B)$ | Intersection $P(A \cap B)$ |
|---|---|---|
| What it says | We already know B happened; how likely is A? | How likely are A and B both to happen, from the start? |
| Sample space | B | $\Omega$ |
| Wording cue | "given", "of those who", "among", "if" | "and", "both", "at the same time" |

The slides drill this with classification examples:

- "80% of kids like candy **and** running": **intersection**.
- "30% of lottery winners are unhappy": **conditional** (unhappy given winner).
- "75% of heart attacks before 40 are among smokers": **conditional** (smoker given heart attack).
- "You were in one car accident today, what are the chances you will be in another?": **conditional**.
- "You miss 100% of the shots you don't take" (Wayne Gretzky): **conditional** (miss given no shot).

> [!warning] Common mistake
> Do not read "75% of heart attacks are among smokers" as "75% of smokers have heart attacks". The condition is whatever comes after "of" or "given": here it is the heart-attack group. $P(A|B) \neq P(B|A)$ in general.

### Special cases

| Relationship | $P(A\mid B)$ | Why |
|---|---|---|
| $A = B$ | $1$ | $P(A \cap B)/P(B) = P(B)/P(B)$ |
| $B \subseteq A$ | $1$ | then $A \cap B = B$, same calculation |
| A and B disjoint | $0$ | $A \cap B = \emptyset$, so the numerator is $0$ |

Subset example (slides 73 to 79): "30% of plants in an area are trees."

- $P(\text{tree} | \text{plant}) = 0.3$.
- $P(\text{plant} | \text{tree}) = 1$ (derived: every tree is a plant, so tree $\subseteq$ plant). The two directions differ.

> [!example] Example
> Backing out $P(B)$ (slide 87)
>
> "The probability a student plays both soccer and basketball is 0.25; 25% of basketball players play soccer. What is $P(\text{basketball})$?" Rearranging the definition, $P(B) = P(A \cap B) / P(A|B)$.
> Derived: $P(B) = 0.25 / 0.25 = 1$, i.e. every student plays basketball. The slide set-up leads to this value; check slide 87 if you want to see the lecturer's stated answer.

### Conditional probability of the complement

$$
P(\bar{A}|B) = 1 - P(A|B)
$$

> [!note] Reconstructed from the slides
> Proof sketch (additivity axiom): inside B, the pieces $A \cap B$ and $\bar{A} \cap B$ are disjoint and together make up all of B. So $P(A \cap B) + P(\bar{A} \cap B) = P(B)$. Divide both sides by $P(B)$: $P(A|B) + P(\bar{A}|B) = 1$.

> [!info] Conditioning on the whole space changes nothing
> $P(A|\Omega) = P(A)$.

---

## 2. Multiplication formula

Rearrange the definition. The probability of the intersection is the conditional probability times the probability of the condition:

$$
P(A \cap B) = P(A|B) \cdot P(B) = P(B|A) \cdot P(A)
$$

> [!example] Getting wet (slide 138)
> $P(\text{wet} | \text{rain}) = 0.5$ and $P(\text{rain}) = 0.8$. Then $P(\text{rain} \cap \text{wet}) = 0.5 \times 0.8 = 0.4$ (derived).

---

## 3. Tree diagrams

A **tree diagram** organises probabilities and conditional probabilities of two or more events. Compared with a 2 x 2 table it is more flexible (more than two events or layers) and is built around conditional probabilities.

**How to build one**

1. Nodes are events (happened or not); lines connect them.
2. On each line write the probability of arriving at the node it leads to.
3. Extra events are added as extra layers. Probabilities on those later lines are **conditional on the path so far**.
4. At the end of each path write the probability of reaching that end node. It is the intersection of every event on the path, i.e. the **product along the path** (the [[Multiplication Formula]]).

**Four sum rules** (Handout 3)

| Rule | Why |
|---|---|
| All branches leaving one node sum to 1 | Complement rule for conditional probability |
| All end nodes sum to 1 | The end nodes partition $\Omega$ |
| End nodes below one node sum to that node's probability | The paths below it split that event |
| End nodes containing event A sum to $P(A)$ (same for B) | Every way A can happen is a path through A |

> [!tip] Use the sums as a check
> After filling in a tree, add the end nodes. If they do not total 1, an arithmetic slip happened.

### Three-level example: passing a course (slides 263 to 288)

First try pass probability $0.8$. If you fail you retake: pass probability $0.6$. If you fail again you appeal; the appeal is accepted with probability $0.5$, giving a third try with pass probability $0.4$.

$$
P(\text{pass}) = 0.8 + (0.2)(0.6) + (0.2)(0.4)(0.5)(0.4) = 0.8 + 0.12 + 0.016 = 0.936
$$

Each term is one path to "pass" (first try, second try, third try after appeal).

### Many outcomes per event (slides 290 to 315)

An "event" can have more than two outcomes: each outcome is its own node on the same level.

![[Lec03_mud_tree.png]]

Weather: sun $0.5$, cloud $0.2$, rain $0.3$. Chance of stepping in mud: $0.1$ on a sunny day, $0.2$ on a cloudy day, $0.9$ on a rainy day.

---

## 4. Law of total probability

How do we go from the conditional probabilities of B to the overall probability of B? add up every path that ends in B.

For a partition into A and $\bar{A}$:

$$
P(B) = P(B|A)\,P(A) + P(B|\bar{A})\,P(\bar{A})
$$

For the weather partition:

$$
P(\text{mud}) = P(\text{mud}|\text{sun})P(\text{sun}) + P(\text{mud}|\text{cloud})P(\text{cloud}) + P(\text{mud}|\text{rain})P(\text{rain})
$$

$$
P(\text{mud}) = 0.1(0.5) + 0.2(0.2) + 0.9(0.3) = 0.05 + 0.04 + 0.27 = 0.36
$$

> [!example] Reminder example (slides 253 to 259)
> Set a reminder 70% of the time. On time with a reminder: $0.9$; without: $0.5$.
> $P(\text{on time}) = 0.7(0.9) + 0.3(0.5) = 0.63 + 0.15 = 0.78$ (derived).

> [!note] Handout version
> Handout 3 writes it as $P(A) = P(A|B)P(B) + P(A|\bar{B})P(\bar{B})$. Same law with the letters swapped.

### Filling in a missing branch (slide 245)

A condition X affects 15% of a population. The test gives a positive result to 10% of everyone tested, and to 60% of those with X. Find $P(\text{positive} | \text{no X})$.

Let A = has X, B = positive.

- $P(A \cap B) = 0.6 \times 0.15 = 0.09$.
- Positives without X: $P(\bar{A} \cap B) = P(B) - 0.09 = 0.01$.
- $P(B|\bar{A}) = 0.01 / 0.85 \approx 0.0118$.

This is the law of total probability run in reverse, with one unknown branch.

---

## 5. Bayes' theorem

**Motivation:** how do we "flip" a conditional probability? You know $P(\text{positive test}|\text{sick})$ but want $P(\text{sick}|\text{positive test})$. Self-made millionaires being hard working with probability $0.9$ does not tell you how likely a hard-working person is to be a self-made millionaire.

> [!note] Reconstructed from the slides
> Derivation: write the intersection two ways with the [[Multiplication Formula]], $P(A \cap B) = P(A|B)P(B) = P(B|A)P(A)$, then divide by $P(B)$.

$$
\boxed{P(A|B) = \frac{P(B|A)\,P(A)}{P(B)}}
$$

In practice the denominator $P(B)$ comes from the [[Law of Total Probability]].

> [!info] Thomas Bayes (1701 to 1761)
> The theorem is named after him.

> [!example] Rare disorder screening (slide 365)
> A disorder affects 1 in a million. The test is always positive if you have it, but gives a false positive 0.1% of the time (1 in 1,000).
>
> $$
> P(\text{disorder} | \text{positive}) = \frac{1 \cdot 10^{-6}}{1 \cdot 10^{-6} + 0.001 \cdot (1 - 10^{-6})} \approx 0.000999
> $$
>
> About **0.1%**. Positive does not mean sick: when something is very rare, even a small false-positive rate means most positives are false.

> [!warning] Base-rate neglect
> A test that is "99.9% accurate" can still give a mostly wrong positive result if the condition is rare. Always include the prior $P(A)$.

---

## 6. Independence

**Definition.** A and B are independent if learning B tells you nothing about A:

$$
P(A) = P(A|B)
$$

| Property | Statement | Reason |
|---|---|---|
| Reciprocal | If A independent of B then $P(B\mid A) = P(B)$ | Bayes: $P(B\mid A) = P(A\mid B)P(B)/P(A) = P(B)$ |
| Complements | $\bar{A}$ independent of B, A independent of $\bar{B}$, $\bar{A}$ independent of $\bar{B}$ | Complement rule: $P(\bar{A}\mid B) = 1 - P(A\mid B) = 1 - P(A) = P(\bar{A})$ |
| Intersection | $P(A \cap B) = P(A)\,P(B)$ | Multiplication formula with $P(A\mid B) = P(A)$ |

> [!tip] Why independence is convenient
> Intersection probabilities of independent events are just products. Example (slide 408): three meetings, each independently cancelled with probability $0.3$. Only the third cancelled: $0.7 \times 0.7 \times 0.3 = 0.147$ (derived).

### Independent is not the same as disjoint

If A and B have non-zero probability and are independent, they **cannot** be disjoint. Disjoint means $P(A \cap B) = 0$, but independence needs $P(A)P(B) > 0$. So "independent events are never disjoint and disjoint events are never independent" (the lecturer marks this with an asterisk: it holds for non-zero probabilities).

| | Disjoint | Independent |
|---|---|---|
| Example | one coin shows heads and the same coin shows tails | coin 1 shows heads and coin 2 shows heads |
| $P(A \cap B)$ | $0$ | $P(A)P(B)$ |
| Knowing B | tells you A is impossible | tells you nothing about A |

---

## 7. The Monty Hall problem

A contestant picks one of three doors (one hides a car, two hide goats). The host, who knows where the car is, opens a different door showing a goat, then offers a switch. **Switching wins the car with probability $2/3$.**

![[Lec03_monty_hall_tree.png]]

Suppose you chose door 1 and Monty opened door 3.

- Car behind 1 (prob $1/3$): Monty may open 2 or 3, each with $1/2$. End node "opens 3" has probability $1/6$.
- Car behind 2 (prob $1/3$): Monty must open 3. End node probability $1/3$.
- Car behind 3: Monty cannot open 3, so this path is eliminated.

Given Monty opened door 3 (total probability $1/6 + 1/3 = 1/2$):

$$
P(\text{car behind 1} | \text{opened 3}) = \frac{1/6}{1/2} = \frac{1}{3}, \qquad P(\text{car behind 2} | \text{opened 3}) = \frac{1/3}{1/2} = \frac{2}{3}
$$

> [!tip] Intuition
> Monty's choice is not random: he must avoid the car. His action carries information, and it shifts the probability onto the door he did not open. Your first pick stays at $1/3$, so the other unopened door gets $2/3$. You are twice as likely to win if you switch.

---

## 8. Symmetrical probability space

**Definition.** Every possible result has the same probability: $P(\omega_i) = P(\omega_j)$ for all $i, j$. Examples: fair die, fair coin, well-shuffled deck, randomly chosen person.

$$
P(\omega_i) = \frac{1}{|\Omega|}, \qquad P(A) = \frac{|A|}{|\Omega|}
$$

Conditional probability in a symmetrical space is a counting ratio:

$$
P(A|B) = \frac{|A \cap B|}{|B|}
$$

> [!tip] Intuition
> Conditioning on B shrinks the sample space to B. Count how many of those equally likely outcomes also lie in A.

Next week: counting becomes harder, which leads to combinatorics.

---

## Summary

| Idea | Formula |
|---|---|
| Conditional probability | $P(A\mid B) = P(A \cap B)/P(B)$ |
| Complement | $P(\bar{A}\mid B) = 1 - P(A\mid B)$ |
| Multiplication | $P(A \cap B) = P(B\mid A)P(A)$ |
| Total probability | $P(A) = P(A\mid B)P(B) + P(A\mid \bar{B})P(\bar{B})$ |
| Bayes | $P(A\mid B) = P(B\mid A)P(A)/P(B)$ |
| Independence | $P(A) = P(A\mid B)$, so $P(A \cap B) = P(A)P(B)$ |
| Symmetrical space | $P(A\mid B) = \lvert A \cap B\rvert / \lvert B\rvert$ |

- Conditioning shrinks the sample space to B; multiply along tree paths, add across paths.
- Bayes flips a conditional; beware the base rate.
- Independence implies product rule; independent events with non-zero probability are never disjoint.

## Related notes

- [[Statistics A]]
- [[Lec_02-Probability Function and Conditional Probability]]
- [[Conditional Probability]], [[Law of Total Probability]], [[Bayes' Theorem]], [[Independent Events]]
- Extra credit assignment 1 (applying conditional probability to the class data: students per track and the share planning to own a business) is mentioned on slide 289 and is not reproduced here.
