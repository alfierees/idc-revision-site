---
title: "PS3"
subject: statistics-a
source_doc: /papers/statistics-a/ps-3.pdf
tags:
  - statistics-a
  - problem-set
  - conditional-probability
  - 2x2-table
  - tree-diagram
  - law-of-total-probability
  - bayes-theorem
  - independence
  - disjoint-events
  - inclusion-exclusion
ai_drafted: true
questions:
  - id: "1"
    text: |
      **The drug-sniffing dog.** To find drug smugglers, airport security uses a drug-sniffing dog. When the dog barks at an incoming traveler, security stops the traveler and searches them. Overall, the dog barks at 5% of travelers, and 40% of travelers the dog barks at do not carry drugs. Overall, 4% of incoming travelers carry drugs.

      Fill out a 2x2 table and a tree diagram for this experiment.
    solution: |
      Mark the events: $A$ is "the traveler carries drugs" and $B$ is "the traveler is stopped (the dog barks)". Given:

      $$
      P(B) = 0.05, \qquad P(\bar{A} \mid B) = 0.4, \qquad P(A) = 0.04
      $$

      **The 2x2 table.** Start from the one joint cell that can be computed directly. "Stopped and no drugs" uses the [[Multiplication Formula|multiplication formula]]:

      $$
      P(\bar{A} \cap B) = P(B)\,P(\bar{A} \mid B) = 0.05 \times 0.4 = 0.02
      $$

      The rest follow from the row and column totals ($P(\bar{B}) = 1 - 0.05 = 0.95$ and $P(\bar{A}) = 1 - 0.04 = 0.96$):

      $$
      P(A \cap B) = 0.05 - 0.02 = 0.03
      $$

      $$
      P(\bar{A} \cap \bar{B}) = 0.96 - 0.02 = 0.94
      $$

      $$
      P(A \cap \bar{B}) = 0.95 - 0.94 = 0.01
      $$

      ![](/images/statistics-a/ps03-q1-two-by-two-table.png)

      > [!tip] Intuition
      > Fill the table in the order the information arrives: one given joint cell, then subtract from the totals. A quick check is that the four cells add to 1: $0.03 + 0.02 + 0.01 + 0.94 = 1$.

      **The tree diagram.** Stage 1 is "stopped or not", stage 2 is "drugs or not". The branches after $B$ are given: $P(A \mid B) = 1 - 0.4 = 0.6$ and $P(\bar{A} \mid B) = 0.4$. The branches after $\bar{B}$ are unknown, so call $P(A \mid \bar{B}) = x$ and $P(\bar{A} \mid \bar{B}) = 1 - x$.

      ![](/images/statistics-a/ps03-q1-tree.png)

      Find $x$ from the [[Law of Total Probability|total probability law]], because we know $P(A) = 0.04$:

      $$
      0.04 = P(A) = 0.05 \times 0.6 + 0.95 \times x = 0.03 + 0.95x
      $$

      $$
      0.01 = 0.95x \quad\Rightarrow\quad x = \frac{0.01}{0.95} = 0.0105
      $$

      $$
      1 - x = 1 - 0.0105 = 0.9895
      $$

      > [!note] Rounding
      > The exact value is $x = \tfrac{1}{95} \approx 0.010526$. The key rounds to $0.0105$ and then reports $0.95 \times 0.0105 \approx 0.01$. Both routes agree with the table's $0.01$.
    related_terms: ["2x2-probability-table", "tree-diagram", "multiplication-formula", "law-of-total-probability", "conditional-probability", "complement-rule"]
    source_doc_page: 1
  - id: "1a"
    text: |
      (i) What percent of travelers are both carrying drugs and not searched?
    solution: |
      - From the table: $P(A \cap \bar{B}) = 0.01$.
      - From the tree: $P(A \cap \bar{B}) = 0.95 \times x = 0.95 \times 0.0105 = 0.01$.

      **Answer: 1% of travelers.**
    related_terms: ["2x2-probability-table", "tree-diagram", "intersection"]
    source_doc_page: 1
  - id: "1b"
    text: |
      (ii) A traveler was not stopped, what is the probability they are carrying drugs?
    solution: |
      - From the table:

      $$
      P(A \mid \bar{B}) = \frac{P(A \cap \bar{B})}{P(\bar{B})} = \frac{0.01}{0.95} = 0.0105
      $$

      - From the tree: $P(A \mid \bar{B}) = x = 0.0105$.

      **Answer: about 0.0105 (roughly 1%).**
    related_terms: ["conditional-probability", "2x2-probability-table", "tree-diagram"]
    source_doc_page: 1
  - id: "1c"
    text: |
      (iii) A traveler carries drugs, what is the probability they will not be stopped?
    solution: |
      $$
      P(\bar{B} \mid A) = \frac{P(A \cap \bar{B})}{P(A)} = \frac{0.01}{0.04} = 0.25
      $$

      **Answer: 0.25.** A quarter of smugglers walk through.

      > [!tip] Intuition
      > Parts (ii) and (iii) use the **same joint cell** ($0.01$) but divide by different totals. (ii) conditions on "not stopped" (a big group, $0.95$), so the answer is tiny. (iii) conditions on "carries drugs" (a small group, $0.04$), so the answer is large. Which event sits after the bar decides the denominator. This is the base-rate point behind [[Bayes' Theorem]].
    related_terms: ["conditional-probability", "bayes-theorem"]
    source_doc_page: 1
  - id: "1d"
    text: |
      (iv) What is the percent of travelers for whom the dog makes a mistake (either barks when they have no drugs or does not bark when they do)?
    solution: |
      A mistake is either "barks at an innocent traveler" ($\bar{A} \cap B$) or "misses a smuggler" ($A \cap \bar{B}$). These are disjoint, so add them.

      - From the table:

      $$
      P(\text{mistake}) = P(A \cap \bar{B}) + P(\bar{A} \cap B) = 0.01 + 0.02 = 0.03
      $$

      - From the tree: $P(\text{mistake}) = 0.95 \times 0.0105 + 0.05 \times 0.4 = 0.01 + 0.02 = 0.03$.

      **Answer: 3% of travelers.**

      > [!warning] Typo in the key
      > In the tree check of (iv), the key writes the bark-and-no-drugs branch as $0.05 \times 0.04$. The tree uses $0.4$, and the product is $0.02$, so it should read $0.05 \times 0.4 = 0.02$. The final answer $0.03$ is unaffected.
    related_terms: ["disjoint-sets", "2x2-probability-table", "tree-diagram"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Studying and the math test.** The probability a student who studied for a math test will do well on the test is $\tfrac{3}{4}$. The chance a student who did not study will do well on the test is $\tfrac{1}{8}$. It is known that $\tfrac{1}{10}$ of students do not study for the test. A student did well on the test, what is the probability they did not study?
    solution: |
      ![](/images/statistics-a/ps03-q2-tree.png)

      The question asks for the "reverse" conditional: we know $P(\text{passed} \mid \text{studied})$ and want $P(\text{did not study} \mid \text{passed})$. The denominator is the total probability of passing:

      $$
      P(\text{didn't study} \mid \text{passed}) = \frac{P(\text{didn't study})\,P(\text{passed} \mid \text{didn't study})}{P(\text{passed})}
      $$

      $$
      = \frac{\tfrac{1}{10} \cdot \tfrac{1}{8}}{\tfrac{9}{10} \cdot \tfrac{3}{4} + \tfrac{1}{10} \cdot \tfrac{1}{8}} = \frac{1}{55}
      $$

      > [!tip] Intuition (arithmetic)
      > Numerator: $\tfrac{1}{80} = 0.0125$. Denominator: $0.675 + 0.0125 = 0.6875$. Then $0.0125 / 0.6875 = 1/55 \approx 0.018$. Only 1 in 55 of the students who did well skipped studying, even though skipping carries a $1/8$ chance of doing well, because very few students skip.

      **Answer: $\tfrac{1}{55} \approx 0.018$.**
    related_terms: ["bayes-theorem", "tree-diagram", "law-of-total-probability", "conditional-probability"]
    source_doc_page: 1
  - id: "3"
    text: |
      **The two slot machines.** A casino has two slot machines. The probability of winning on machine A is $0.4$. The probability of winning on machine B is $0.3$. A gambler chooses randomly one machine to play on and plays once. If they won, they play once more on the same machine. If they lost, they switch to the other machine and play once. What is the probability the gambler loses both games?
    solution: |
      The second game depends on the first result: after a win, stay; after a loss, switch.

      ![](/images/statistics-a/ps03-q3-tree.png)

      There are two paths to "lose, lose":

      - Machine A, lose (0.6), switch to B, lose (0.7).
      - Machine B, lose (0.7), switch to A, lose (0.6).

      $$
      P(2\ \text{losses}) = 0.5 \times 0.6 \times 0.7 + 0.5 \times 0.7 \times 0.6 = 0.21 + 0.21 = 0.42
      $$

      > [!tip] Intuition
      > Both paths multiply the same two numbers ($0.6$ and $0.7$) in a different order, so the starting machine does not matter and the answer is simply $0.6 \times 0.7 = 0.42$.

      **Answer: 0.42.**
    related_terms: ["tree-diagram", "multiplication-formula", "law-of-total-probability"]
    source_doc_page: 1
  - id: "4"
    text: |
      **The call centre.** Due to the large amount of calls received, a direct marketing call centre answers immediately only 60% of the incoming calls. The rest of the callers are asked to leave a phone number. In 75% of cases, a representative gets back to a caller who left their number on the same day. In the rest of the cases, the representative gets back to the caller the next day. The probability that a caller makes a purchase is $0.8$ if they are answered immediately, $0.6$ if they get a call back the same day and $0.4$ if they get a call back the next day.
    solution: |
      ![](/images/statistics-a/ps03-q4-tree.png)
    related_terms: ["tree-diagram", "law-of-total-probability"]
    source_doc_page: 1
  - id: "4a"
    text: |
      (i) What is the probability that a person who called the call centre will make a purchase?
    solution: |
      Add the three paths that end in a purchase:

      $$
      P(\text{purchase}) = 0.6 \times 0.8 + 0.4 \times 0.75 \times 0.6 + 0.4 \times 0.25 \times 0.4 = 0.48 + 0.18 + 0.04 = 0.7
      $$

      **Answer: 0.7.**
    related_terms: ["law-of-total-probability", "tree-diagram", "multiplication-formula"]
    source_doc_page: 1
  - id: "4b"
    text: |
      (ii) A person made a purchase, what is the probability they left their phone number and got a call back the same day?
    solution: |
      $$
      P(\text{left number and same day} \mid \text{purchased}) = \frac{P(\text{left number and same day and purchased})}{P(\text{purchased})} = \frac{0.4 \times 0.75 \times 0.6}{0.7} = \frac{0.18}{0.7} = 0.257
      $$

      **Answer: about 0.257.** The numerator is just the middle branch from part (i).

      > [!tip] Intuition
      > Part (ii) asks "of all the purchases, what share came from the same-day-callback branch?" That share is that branch's contribution ($0.18$) divided by the total ($0.70$). The same-day branch carries 18 of every 70 purchases.
    related_terms: ["bayes-theorem", "conditional-probability"]
    source_doc_page: 1
  - id: "5"
    text: |
      **The two employees.** A manager has two employees, one senior and one junior. The probability the junior employee will miss a given day of work is $0.06$. The probability the senior employee will miss a given day of work is $0.08$. The probability both employees will miss a given day of work is $0.0048$.

      Events: $A$ is "the junior employee misses a given day"; $B$ is "the senior employee misses a given day". Given: $P(A) = 0.06$, $P(B) = 0.08$, $P(A \cap B) = 0.0048$.
    solution: |
      The three parts below use only these three given probabilities.
    related_terms: ["independent-events", "disjoint-sets", "inclusion-exclusion-rule"]
    source_doc_page: 2
  - id: "5a"
    text: |
      (i) What is the probability that on a given day at least one employee will miss work?
    solution: |
      "At least one" is the union. Use the [[Inclusion-Exclusion Rule]]:

      $$
      P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.06 + 0.08 - 0.0048 = 0.1352
      $$
    related_terms: ["inclusion-exclusion-rule", "union"]
    source_doc_page: 2
  - id: "5b"
    text: |
      (ii) Are events $A$ and $B$ independent?
    solution: |
      Independence means $P(A \cap B) = P(A)\,P(B)$:

      $$
      P(A \cap B) = 0.0048 = 0.06 \times 0.08 = P(A)\,P(B)
      $$

      **Yes, $A$ and $B$ are independent.**
    related_terms: ["independent-events"]
    source_doc_page: 2
  - id: "5c"
    text: |
      (iii) Are events $A$ and $B$ disjoint?
    solution: |
      Disjoint events cannot both happen, so $P(A \cap B)$ would be $0$. Here $P(A \cap B) = 0.0048 \neq 0$.

      **No, $A$ and $B$ are not disjoint.**

      > [!tip] Intuition
      > Independent and disjoint are different ideas. Disjoint says the events cannot overlap at all. Independent says knowing one happened does not change the probability of the other. With non-zero probabilities, an independent pair always overlaps ($P(A)P(B) > 0$), so it is never disjoint. See [[Independent Events]] and [[Disjoint Sets]].
    related_terms: ["disjoint-sets", "independent-events"]
    source_doc_page: 2
  - id: "6"
    text: |
      **Exactly one of three independent events.** Events $A$, $B$ and $C$ are all events in the sample space $\Omega$. It is known that $P(A) = P(B) = P(C) = p$. What is the probability of exactly one of $A$, $B$ and $C$ happening, if $A$, $B$ and $C$ are all independent?
    solution: |
      "Exactly one" splits into three disjoint cases, one for each event that occurs while the other two do not:

      $$
      P(\text{exactly one}) = P(A \cap \bar{B} \cap \bar{C}) + P(\bar{A} \cap B \cap \bar{C}) + P(\bar{A} \cap \bar{B} \cap C)
      $$

      Because $A$, $B$ and $C$ are independent, their complements are too, so each intersection factors into a product:

      $$
      = P(A)P(\bar{B})P(\bar{C}) + P(\bar{A})P(B)P(\bar{C}) + P(\bar{A})P(\bar{B})P(C)
      $$

      $$
      = p(1-p)(1-p) + (1-p)p(1-p) + (1-p)(1-p)p = 3p(1-p)^2
      $$

      **Answer: $3p(1-p)^2$.**

      > [!tip] Intuition
      > Each case is "one success, two failures", with probability $p(1-p)^2$. There are three ways to choose which event is the success, so multiply by 3. This is the same counting idea behind the binomial distribution later in the course.
    related_terms: ["independent-events", "complement", "disjoint-sets", "intersection"]
    source_doc_page: 2
  - id: "7"
    text: |
      **Finding $P(B)$.** Given that $P(A \cup B) = 0.8$ and $P(\bar{A}) = 0.7$, what is $P(B)$ if:
    solution: |
      From the [[Complement Rule|complement rule]]: $P(A) = 1 - 0.7 = 0.3$. Inclusion-exclusion then gives

      $$
      0.8 = P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.3 + P(B) - P(A \cap B)
      $$

      $$
      P(B) = 0.5 + P(A \cap B) \qquad (*)
      $$
    related_terms: ["complement-rule", "inclusion-exclusion-rule", "union"]
    source_doc_page: 2
  - id: "7a"
    text: |
      (i) Events $A$ and $B$ are disjoint.
    solution: |
      Disjoint means $P(A \cap B) = 0$, so from $(*)$:

      $$
      P(B) = 0.5 + 0 = 0.5
      $$

      **Answer: $P(B) = 0.5$.**
    related_terms: ["disjoint-sets", "inclusion-exclusion-rule"]
    source_doc_page: 2
  - id: "7b"
    text: |
      (ii) Events $A$ and $B$ are independent.
    solution: |
      Independent means $P(A \cap B) = P(A)P(B) = 0.3\,P(B)$. Substitute into $(*)$:

      $$
      P(B) = 0.5 + 0.3\,P(B) \quad\Rightarrow\quad 0.7\,P(B) = 0.5 \quad\Rightarrow\quad P(B) = \frac{0.5}{0.7} = 0.714
      $$

      **Answer: $P(B) = \tfrac{5}{7} \approx 0.714$.**

      > [!tip] Intuition
      > $(*)$ says $B$ must cover the $0.5$ of the sample space that $A$ leaves uncovered inside $A \cup B$, plus whatever it shares with $A$. Disjoint means no overlap, so exactly $0.5$. Independence forces some overlap, which makes $B$ larger.
    related_terms: ["independent-events", "inclusion-exclusion-rule"]
    source_doc_page: 2
  - id: "8"
    text: |
      **The job applicants.** An Israeli startup puts out a for-hire ad. 40% of applicants speak fluent English. $\tfrac{3}{4}$ of applicants who are fluent English speakers have an academic degree, and 60% of applicants who have an academic degree speak fluent English.

      Mark the events: $A$ is "speaks fluent English", $B$ is "has an academic degree".
    solution: |
      Given:

      $$
      P(A) = 0.4, \qquad P(B \mid A) = \frac{3}{4}, \qquad P(A \mid B) = 0.6
      $$
    related_terms: ["conditional-probability", "bayes-theorem"]
    source_doc_page: 2
  - id: "8a"
    text: |
      (i) What is the probability that a randomly chosen applicant has an academic degree?
    solution: |
      The two given conditionals are the same joint probability read in two directions, so use Bayes:

      $$
      \frac{3}{4} = P(B \mid A) = \frac{P(B)\,P(A \mid B)}{P(A)} = \frac{P(B) \times 0.6}{0.4}
      $$

      $$
      P(B) = \frac{\tfrac{3}{4} \times 0.4}{0.6} = 0.5
      $$

      **Answer: 0.5.**
    related_terms: ["bayes-theorem", "conditional-probability"]
    source_doc_page: 2
  - id: "8b"
    text: |
      (ii) Are the events "applicant speaks fluent English" and "applicant has an academic degree" independent?
    solution: |
      Independence would need $P(A \mid B) = P(A)$. Here $P(A \mid B) = 0.6 \neq 0.4 = P(A)$.

      **Answer: the events are dependent.** Having a degree makes fluent English more likely.
    related_terms: ["independent-events", "conditional-probability"]
    source_doc_page: 2
  - id: "8c"
    text: |
      (iii) Are the same two events disjoint?
    solution: |
      The intersection, using the multiplication formula:

      $$
      P(A \cap B) = P(B)\,P(A \mid B) = 0.5 \times 0.6 = 0.3 \neq 0
      $$

      **Answer: not disjoint.** (Check: $P(A)\,P(B \mid A) = 0.4 \times 0.75 = 0.3$ gives the same number.)
    related_terms: ["disjoint-sets", "multiplication-formula"]
    source_doc_page: 2
  - id: "8d"
    text: |
      (iv) Any applicant who either speaks fluent English or has an academic degree gets invited to an interview. What percent of applicants get invited?
    solution: |
      "Either English or a degree" is the union:

      $$
      P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.4 + 0.5 - 0.3 = 0.6
      $$

      **Answer: 60% of applicants.**
    related_terms: ["inclusion-exclusion-rule", "union"]
    source_doc_page: 2
  - id: "8e"
    text: |
      (v) An applicant speaks fluent English, what is the probability they do not have an academic degree?
    solution: |
      Conditional probabilities obey the complement rule within the conditioned world:

      $$
      P(\bar{B} \mid A) = 1 - P(B \mid A) = 1 - \frac{3}{4} = \frac{1}{4}
      $$

      **Answer: $\tfrac{1}{4}$.**
    related_terms: ["complement-rule", "conditional-probability"]
    source_doc_page: 2
---

*Related: [[Lec_02-Probability Function and Conditional Probability]], [[Lec_03-Conditional Probability, Bayes and Independence]]*
