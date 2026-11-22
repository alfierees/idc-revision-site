---
title: "PS9"
subject: principles-of-micro
source_doc: /papers/principles-of-micro/ps-9.pdf
tags:
  - principles-of-micro
  - problem-set
  - welfare-economics
  - consumer-surplus
  - producer-surplus
  - total-surplus
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Areas on a lettered graph.** Look at the graph and select the correct area for the questions that follow. An area can be described with letters, for instance AKMN is a rectangle.

      ![](/images/principles-of-micro/ps09-q1-surplus-areas.png)

      *Redrawn from the question sheet. On the price axis: B is the demand intercept, A is the price at K on demand, P is the equilibrium price at L, N is the price at M on supply, R is the supply intercept. The vertical through K and M is at a quantity below the equilibrium. X is the point where that vertical meets the price line P (see the note under part 4). Axis levels are illustrative; the letters are those in the source.*

      Which area represents:

      1. Consumer surplus at price P.
      2. Producer surplus at price P.
      3. The loss of consumer surplus if price rises from P to A.
      4. The change in producer surplus if price rises to A.
      5. The economic welfare to society at price P.
    solution: |
      Parts 1 to 5 are answered one by one below.

      > [!warning] Numbering and wording in the source
      > The question sheet numbers the Uber video as "5" (it follows the directions "3." and "4." of the producer surplus part). Here it is called **Q4**. In the Q1 solution, the point **X** is used but is not labelled on the printed graph; see the note under part 4.
    related_terms: ["consumer-surplus", "producer-surplus", "total-surplus"]
    source_doc_page: 1
  - id: "1a"
    text: |
      Which area represents the consumer surplus at price P?
    solution: |
      > [!success] Answer
      > **PLB**

      Below the demand curve and above the price P, up to the equilibrium quantity: the triangle with corners P, L and B. See [[Consumer Surplus]].
    related_terms: ["consumer-surplus", "demand-curve", "market-equilibrium"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Which area represents the producer surplus at price P?
    solution: |
      > [!success] Answer
      > **PLR**

      Above the supply curve and below the price P, up to the equilibrium quantity: the triangle P, L, R. See [[Producer Surplus]].
    related_terms: ["producer-surplus", "supply-curve", "market-equilibrium"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Which area represents the loss of consumer surplus if price rises from P to A?
    solution: |
      > [!success] Answer
      > **AKPL** (a trapezoid)

      At price A buyers only buy the quantity at K. Their surplus shrinks to the triangle above A (corners A, K, B). The lost part is the strip between the two prices: AKLP.
    related_terms: ["consumer-surplus", "demand-curve"]
    source_doc_page: 1
  - id: "1d"
    text: |
      Which area represents the change in producer surplus if price rises to A?
    solution: |
      > [!success] Answer
      > **AKPX minus MLX**, that is AKPX - MLX

      When price rises to A, sellers would like to sell more, but buyers only take the quantity at K, so quantity falls to the vertical through K and M. Producers then gain and lose at the same time:

      - **Gain:** a higher price on the units still sold, the rectangle AKXP (corners A, K, X, P).
      - **Loss:** the units between the new quantity and the equilibrium quantity are no longer sold, so their surplus is gone: the triangle MLX.

      The net change is the gain minus the loss. Whether it is positive depends on the sizes of the two areas.

      > [!warning] X is not labelled on the printed graph
      > The solution writes AKPX and MLX, but the graph in the question sheet and in the solution has no point X. From the letters, X can only be the point where the vertical line through K and M crosses the horizontal line at price P, which is how it is drawn in the figure above. This is my reading, not stated in the source.
    related_terms: ["producer-surplus", "supply-curve", "price-floor"]
    source_doc_page: 1
  - id: "1e"
    text: |
      Which area represents the economic welfare to society at price P?
    solution: |
      > [!success] Answer
      > **BLR**

      Total surplus is consumer surplus plus producer surplus: PLB + PLR = BLR, the whole triangle between the demand and supply curves up to the equilibrium quantity. See [[Total Surplus]].
    related_terms: ["total-surplus", "market-efficiency", "consumer-surplus", "producer-surplus"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Learning to calculate the consumer surplus.** The graph shows a straight demand curve with intercept 100 on the price axis, and the prices 40 and 70 marked, with quantities Q2 and Q1 respectively. The demand function is

      $$
      P = 100 - 3Q
      $$

      Calculate the consumer surplus when P = 40. Calculate the consumer surplus when P = 70. What happened to the consumer surplus when the price increased from 40 to 70?

      Directions:

      1. Mark the consumer surplus on the graph when P = 40. This is the area of a triangle, so use base times height divided by 2. To find the base, find the quantity demanded at P = 40.
      2. Mark the consumer surplus on the graph when P = 70. Again a triangle; find the quantity demanded at P = 70 for the base.

      ![](/images/principles-of-micro/ps09-q2-consumer-surplus-p40-p70.png)

      *Shaded: consumer surplus at P = 40 (left) and P = 70 (right). All numbers are from the solution.*
    solution: |
      Parts a to c are answered below. The shaded triangles in the figure show the areas the sheet's two directions ask for: corners (0, 100), (0, 40) and (20, 40) for P = 40, and (0, 100), (0, 70) and (10, 70) for P = 70. The solution file prints the graph without shading and gives no further text.

      *Related: [[Lec_09-Welfare Consumer and Producer Surplus]], and [[Lec_03-Perfect Competition and Demand]] for the demand curve.*
    related_terms: ["consumer-surplus", "demand-function", "willingness-to-pay"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Calculate the consumer surplus when P = 40.
    solution: |
      First find the quantity demanded at the price:

      $$
      40 = 100 - 3Q \quad\Rightarrow\quad Q = 20
      $$

      The triangle has base 20 and height 100 - 40 = 60:

      $$
      CS = \frac{20 \times (100 - 40)}{2} = 600
      $$

      > [!success] Answer
      > Consumer surplus at P = 40 is **600**.
    related_terms: ["consumer-surplus", "demand-function"]
    source_doc_page: 2
  - id: "2b"
    text: |
      Calculate the consumer surplus when P = 70.
    solution: |
      $$
      70 = 100 - 3Q \quad\Rightarrow\quad Q = 10
      $$

      $$
      CS = \frac{10 \times (100 - 70)}{2} = 150
      $$

      > [!success] Answer
      > Consumer surplus at P = 70 is **150**.
    related_terms: ["consumer-surplus", "demand-function"]
    source_doc_page: 2
  - id: "2c"
    text: |
      What happened to the consumer surplus when the price increased from 40 to 70?
    solution: |
      > [!success] Answer
      > Consumer surplus **fell by 600 - 150 = 450**.

      > [!tip] Intuition
      > A higher price hurts buyers twice: they pay more on the units they still buy, and the marginal buyers drop out (the quantity falls from 20 to 10). Both effects shrink the triangle. This is the effect in [[Lec_09-Welfare Consumer and Producer Surplus]] on how a price rise changes [[Consumer Surplus]].
    related_terms: ["consumer-surplus", "law-of-demand"]
    source_doc_page: 2
  - id: "3"
    text: |
      **Learning to calculate the producer surplus.** The graph shows a straight supply curve with intercept 10 on the price axis, and the prices 40 and 70 marked, with quantities Q1 and Q2 respectively. The supply function is

      $$
      P = 10 + 3Q
      $$

      Calculate the producer surplus when P = 40. Calculate the producer surplus when P = 70. What happened to the producer surplus when the price increased from 40 to 70?

      Directions:

      1. Mark the producer surplus on the graph when P = 40. This is the area of a triangle, so use base times height divided by 2. To find the base, find the quantity supplied at P = 40.
      2. Mark the producer surplus on the graph when P = 70. Again a triangle; find the quantity supplied at P = 70 for the base.

      ![](/images/principles-of-micro/ps09-q3-producer-surplus-p40-p70.png)

      *Shaded: producer surplus at P = 40 (left) and P = 70 (right). All numbers are from the solution.*
    solution: |
      Parts a to c are answered below. As in Q2, the solution prints the unshaded graph and no further text. The shaded triangles in the figure show the areas: corners (0, 10), (0, 40) and (10, 40) for P = 40, and (0, 10), (0, 70) and (20, 70) for P = 70.

      *Related: [[Lec_09-Welfare Consumer and Producer Surplus]], and [[Lec_04-Supply and Market Equilibrium]] for the supply curve.*
    related_terms: ["producer-surplus", "supply-curve"]
    source_doc_page: 2
  - id: "3a"
    text: |
      Calculate the producer surplus when P = 40.
    solution: |
      Quantity supplied at the price:

      $$
      Q = \frac{40 - 10}{3} = 10
      $$

      The triangle has base 10 and height 40 - 10 = 30:

      $$
      PS = \frac{(40 - 10) \times 10}{2} = 150
      $$

      > [!success] Answer
      > Producer surplus at P = 40 is **150**.
    related_terms: ["producer-surplus", "supply-curve"]
    source_doc_page: 3
  - id: "3b"
    text: |
      Calculate the producer surplus when P = 70.
    solution: |
      $$
      Q = \frac{70 - 10}{3} = 20
      $$

      $$
      PS = \frac{(70 - 10) \times 20}{2} = 600
      $$

      > [!success] Answer
      > Producer surplus at P = 70 is **600**.
    related_terms: ["producer-surplus", "supply-curve"]
    source_doc_page: 3
  - id: "3c"
    text: |
      What happened to the producer surplus when the price increased from 40 to 70?
    solution: "TODO"
    related_terms: ["producer-surplus", "law-of-supply"]
    source_doc_page: 3
  - id: "4"
    text: |
      **The consumer surplus of Uber (video).** Numbered 5 on the sheet. Watch the movie about the consumer surplus of Uber and answer the following questions:

      1. What kind of demand curve for Uber, elastic or inelastic, according to the movie?
      2. What is the value of Uber's users' consumer surplus that the researchers found?
    solution: "TODO"
    related_terms: ["consumer-surplus", "price-elasticity-of-demand"]
    source_doc_page: 3
---

*Related: [[Lec_09-Welfare Consumer and Producer Surplus]], [[Lec_03-Perfect Competition and Demand]], [[Lec_04-Supply and Market Equilibrium]]*
