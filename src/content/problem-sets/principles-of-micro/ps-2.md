---
title: "PS2"
subject: principles-of-micro
source_doc: /papers/principles-of-micro/ps-2.pdf
tags:
  - principles-of-micro
  - problem-set
  - opportunity-cost
  - comparative-advantage
  - absolute-advantage
  - production-possibility-frontier
  - gains-from-trade
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Part A, Q1. Two economies, wheat and guns.** In the world there are two economies, A and B. Each produces wheat and guns with one factor of production: labour hours.

      - Economy A has 100 labour hours. Each hour makes 1 unit of wheat or 2 units of guns.
      - Economy B has 100 labour hours. Each hour makes 2 units of wheat or 1 unit of guns.

      At the first stage assume there is no trade between the economies. With all hours employed, the maximum production is:

      | | Wheat | Guns |
      |---|---|---|
      | Economy A | 100 | 200 |
      | Economy B | 200 | 100 |

      Parts 1a to 1e follow.
    solution: |
      > [!info] Two ideas carry the whole sheet
      > 1. **Opportunity cost** is what you give up. With one input (labour) it is the ratio of the two hourly outputs. The country with the **lower** opportunity cost of a good has the [[Comparative Advantage]] in it.
      > 2. **Trade** lets each country specialise where its opportunity cost is lower, then swap at a price between the two opportunity costs. Both can then consume **outside** their own PPF ([[Gains from Trade]]).
    related_terms: ["opportunity-cost", "comparative-advantage", "production-possibility-frontier"]
    source_doc_page: 1
  - id: "1a"
    text: |
      What is the opportunity cost of producing 1 unit of wheat in each economy?
    solution: |
      > [!success] Answer
      > | | Opportunity cost of 1 wheat (in guns) |
      > |---|---|
      > | Economy A | 2 |
      > | Economy B | 1/2 |

      > [!example] Working
      > Take the cost of the good you want and divide by the cost of the good you give up. In A one labour hour makes either 1 wheat or 2 guns, so 1 wheat costs 2 guns. In B one hour makes 2 wheat or 1 gun, so 1 wheat costs 1/2 gun.
      >
      > The same result comes from the maxima. A gives up 200 guns for 100 wheat, which is 2 guns per wheat. B gives up 100 guns for 200 wheat, which is 1/2 gun per wheat.
    related_terms: ["opportunity-cost"]
    source_doc_page: 1
  - id: "1b"
    text: |
      What is the opportunity cost of producing 1 unit of a gun in each economy?
    solution: |
      > [!success] Answer
      > | | Opportunity cost of 1 gun (in wheat) |
      > |---|---|
      > | Economy A | 1/2 |
      > | Economy B | 2 |

      > [!example] Working
      > In A one hour makes 1 wheat or 2 guns, so 1 gun costs 1/2 wheat. In B one hour makes 2 wheat or 1 gun, so 1 gun costs 2 wheat.
    related_terms: ["opportunity-cost"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Which economy has a comparative advantage in producing wheat?
    solution: |
      > [!success] Answer
      > **Economy B.** It gives up 1/2 gun per wheat, while A gives up 2 guns.
    related_terms: ["comparative-advantage", "opportunity-cost"]
    source_doc_page: 1
  - id: "1d"
    text: |
      Which economy has a comparative advantage in producing guns?
    solution: |
      > [!success] Answer
      > **Economy A.** It gives up 1/2 wheat per gun, while B gives up 2 wheat.
      >
      > So B should specialise in wheat and A in guns.

      > [!tip] Intuition
      > The two opportunity costs of a country are reciprocals of each other, so one country always has the lower cost in one good and the higher cost in the other. That is why, with two goods and two countries, whenever opportunity costs differ each country has a comparative advantage in exactly one good.
    related_terms: ["comparative-advantage", "opportunity-cost", "specialisation"]
    source_doc_page: 1
  - id: "1e"
    text: |
      In this part you will build the Production Possibility Frontier.

      1. For each economy, find the maximum quantity of wheat and the maximum quantity of guns it can produce.
      2. Show the PPF. Calculate the algebraic form of the PPF.
      3. Assume each economy decides to produce and consume half of the maximum amount of wheat it can produce. Show the consumption point.
    solution: |
      > [!success] Answer
      > - Maximum wheat: A 100, B 200. Maximum guns: A 200, B 100.
      > - PPF of A: $\text{Wheat} = 100 - \tfrac{1}{2}\,\text{Guns}$
      > - PPF of B: $\text{Wheat} = 200 - 2\,\text{Guns}$
      > - Consumption point (half of maximum wheat): A produces and consumes **50 wheat and 100 guns**. B produces and consumes **100 wheat and 50 guns**.

      > [!example] Working
      > Each PPF is a straight line from the maximum-wheat intercept to the maximum-guns intercept, so the slope is minus the opportunity cost of a gun in wheat. For A the slope is $-100/200 = -1/2$. For B it is $-200/100 = -2$.
      >
      > Half of maximum wheat is 50 in A and 100 in B. Substituting into each PPF:
      >
      > $$
      > 50 = 100 - \tfrac{1}{2}\,\text{Guns} \;\Rightarrow\; \text{Guns} = 100 \qquad (A)
      > $$
      >
      > $$
      > 100 = 200 - 2\,\text{Guns} \;\Rightarrow\; \text{Guns} = 50 \qquad (B)
      > $$

      ![](/images/principles-of-micro/ps02-q1-ppf-no-trade.png)

      > [!note] Table labelling in the source
      > The solution's table is headed "Maximum amount of wheat produced", but the entries 50 and 100 are the **half-of-maximum** wheat chosen in part e(3), not the maxima (which are 100 and 200). The graphs and the PPF equations confirm this reading.
    related_terms: ["production-possibility-frontier", "opportunity-cost"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Part A, Q2. Trade at 1 wheat for 1 gun.** Assume now that the economies can trade, and that 1 unit of wheat equals 1 unit of gun (one unit of wheat can be traded for one gun). Is it beneficial for the economies to trade?

      Instructions: calculate and draw the line that shows the consumption possibilities of each country if they are able to trade. Parts 2a, 2b, 2ii and 2iii follow.

      *Lecture section: the [[Consumption Possibility Frontier]] and [[Terms of Trade]].*
    solution: |
      > [!info] Reading the question
      > The price of 1 sits strictly between the two opportunity costs, which are 1/2 and 2 wheat per gun, so trade should help both countries. The parts below check this.
    related_terms: ["terms-of-trade", "consumption-possibility-frontier", "gains-from-trade"]
    source_doc_page: 2
  - id: "2a"
    text: |
      Find the maximum quantity of each good that each country can consume if it trades.
    solution: |
      > [!success] Answer
      > Both countries get the same line, with slope $-1$, running from 200 wheat (on the wheat axis) to 200 guns (on the guns axis):
      >
      > $$
      > \text{Wheat} = 200 - \text{Guns}
      > $$

      > [!example] Working
      > Economy A specialises in guns and produces 200. Trading all of them at 1 gun per wheat gives up to 200 wheat, so the wheat intercept is 200 (instead of 100 on its own PPF). The guns intercept stays at 200.
      >
      > Economy B specialises in wheat and produces 200. Trading all of it at 1 wheat per gun gives up to 200 guns, so the guns intercept is 200 (instead of 100). The wheat intercept stays at 200.
      >
      > The line has slope 1 in size because one gun trades for one wheat.
    related_terms: ["consumption-possibility-frontier", "terms-of-trade"]
    source_doc_page: 2
  - id: "2b"
    text: |
      Draw the line on the same graph as the PPF. You should get a line that is different from the PPF. If the new line is above the PPF, what does it mean for the benefit of trade?
    solution: |
      > [!success] Answer
      > The consumption line lies **above** the PPF in both countries (they can consume combinations they cannot produce), so trade is beneficial to both.

      ![](/images/principles-of-micro/ps02-q2-ppf-and-trade-line.png)

      > [!tip] Intuition
      > The price of 1 sits strictly between the two opportunity costs, which are 1/2 and 2 wheat per gun. A pays 1 gun per wheat instead of the 2 guns it would give up at home. B pays 1 wheat per gun instead of the 2 wheat it would give up at home. The price lies inside the range, so both sides gain.
    related_terms: ["consumption-possibility-frontier", "production-possibility-frontier", "gains-from-trade"]
    source_doc_page: 2
  - id: "2ii"
    text: |
      If it is beneficial, assume that each economy specialises in producing the good it has a comparative advantage in. How many units of each good will each economy produce?
    solution: |
      > [!success] Answer
      > Economy A produces only guns: **200 guns**. Economy B produces only wheat: **200 wheat**.

      > [!example] Working
      > At the trade price, consuming 1 wheat costs A just 1 gun instead of 2 guns, so A gains from trade. Consuming 1 gun costs B just 1 wheat instead of 2 wheat, so B gains from trade. Each therefore specialises fully in the good it has a comparative advantage in. See [[Specialisation]].
    related_terms: ["specialisation", "comparative-advantage"]
    source_doc_page: 2
  - id: "2iii"
    text: |
      Assume that the two economies trade. Assume that economy A wants to consume 75 units of wheat. Show on the graph how many units of each good economy A will produce, and how many units of each good it will consume.
    solution: |
      > [!success] Answer
      > A produces 200 guns, trades 75 guns for 75 wheat, and so consumes **75 wheat and 125 guns**.

      > [!example] Working
      > The 75 wheat cost 75 guns at the 1-for-1 price. The guns left over are $200 - 75 = 125$. The point (125 guns, 75 wheat) lies on the trade line, and it is outside A's PPF.

      ![](/images/principles-of-micro/ps02-q2-economy-a-75-wheat.png)

      > [!warning] Wording slip in the source
      > The solution's text says A "will consume 125 kg of wheat". That conflicts with its own graph and with the question: A wants 75 wheat, and 125 is the number of **guns** left (the marked value on the guns axis). The answer above follows the graph. Check: $75 + 125 = 200$ puts the point exactly on the line $\text{Wheat} = 200 - \text{Guns}$.
    related_terms: ["consumption-possibility-frontier", "terms-of-trade", "specialisation"]
    source_doc_page: 3
  - id: "3"
    text: |
      **Part A, Q3. A PPF built from three types of worker.** Build a production possibility frontier, similarly to the example you have seen in class.

      Data:

      - Type A can produce 1 unit of X or 1 unit of Y.
      - Type B can produce 2 units of X or 6 units of Y.
      - Type C can produce 4 units of X or 2 units of Y.

      | | X | Y |
      |---|---|---|
      | Workers A | 1 | 1 |
      | Workers B | 2 | 6 |
      | Workers C | 4 | 2 |

      Remember that we allocate the workers according to their opportunity costs, the most efficient worker first.

      *Lecture section: the bow-shaped PPF.*
    solution: |
      > [!success] Answer
      > Opportunity cost of 1 unit of X, in units of Y given up:
      >
      > | Worker | Opportunity cost of 1 X |
      > |---|---|
      > | C | 1/2 Y |
      > | A | 1 Y |
      > | B | 3 Y |
      >
      > Use C first for X, then A, then B. The PPF has corners at **(X, Y) = (0, 9), (4, 7), (5, 6), (7, 0)**, and it is bow-shaped (concave to the origin).

      > [!example] Working
      > If everyone makes Y, the total is $1 + 6 + 2 = 9$ units of Y, so the PPF starts at (0, 9).
      >
      > To make X, move the worker who gives up the least Y per X first:
      > - C makes 4 X and gives up 2 Y, so the point is $(4, 7)$.
      > - A adds 1 X and gives up 1 Y, so the point is $(5, 6)$.
      > - B adds 2 X and gives up 6 Y, so the point is $(7, 0)$.
      >
      > Each segment is steeper than the last because the opportunity cost of X rises as more is produced. That rising cost is what gives the PPF its bowed shape. See [[Bow-Shaped PPF]].

      ![](/images/principles-of-micro/ps02-q3-worker-ppf.png)

      > [!warning] Typo in the source
      > The solution says "the most efficient worker is C, then worker A and then worker C". The last "C" should be "B": the order is C, A, B, which matches its own graph.
    related_terms: ["production-possibility-frontier", "bow-shaped-ppf", "opportunity-cost"]
    source_doc_page: 3
  - id: "c1"
    text: |
      **Part C, MC 1.** Economists believe that production possibilities frontiers

      | Option | Statement |
      |---|---|
      | a | never have a bowed shape. |
      | b | rarely have a bowed shape. |
      | c | often have a bowed shape. |
      | d | always have a bowed shape. |
    solution: |
      > [!success] Answer: **c, often have a bowed shape.**
      > Resources are not equally suited to both goods, so opportunity cost rises along the frontier. Not "always" because a straight PPF arises when every unit of resource has the same trade-off (as in Question 1). See [[Bow-Shaped PPF]].
    related_terms: ["bow-shaped-ppf", "production-possibility-frontier"]
    source_doc_page: 4
  - id: "c2"
    text: |
      **Part C, MC 2.** A production possibilities frontier shifts outward when

      | Option | Statement |
      |---|---|
      | a | the economy experiences economic growth. |
      | b | the desires of the economy's citizens change. |
      | c | at least one of the basic principles of economics is violated. |
      | d | opportunity costs are lessened. |
    solution: |
      > [!success] Answer: **a, the economy experiences economic growth.**
      > See [[Economic Growth]]. Preferences (b) affect which point is chosen, not the set of feasible points.
    related_terms: ["economic-growth", "production-possibility-frontier"]
    source_doc_page: 4
  - id: "c3"
    text: |
      **Part C, MC 3.** A certain production possibilities frontier shows production possibilities for two goods, jewelry and clothing. Which of the following concepts **cannot** be illustrated by this model?

      | Option | Statement |
      |---|---|
      | a | the flow of dollars between sellers of jewelry and clothing and buyers of jewelry and clothing |
      | b | the tradeoff between production of jewelry and production of clothing |
      | c | the opportunity cost of clothing in terms of jewelry |
      | d | the effect of economic growth on production possibilities involving jewelry and clothing |
    solution: |
      > [!success] Answer: **a, the flow of dollars between sellers and buyers.**
      > The PPF is about physical quantities and trade-offs, not money flows. Options b, c and d are all things a PPF shows directly.
    related_terms: ["production-possibility-frontier", "opportunity-cost", "economic-growth"]
    source_doc_page: 4
  - id: "c4"
    text: |
      **Part C, MC 4.** Relate to the following claims:

      - (i) If there are two goods and two countries, each country will always have an absolute advantage in one of the goods.
      - (ii) If there are two goods and two countries, each country will always have a comparative advantage in one of the goods.
      - (iii) An economy can't have absolute advantage in producing all the goods.

      Which option is correct?

      | Option | Statement |
      |---|---|
      | a | Only claim (i) is correct. |
      | b | Only claim (ii) is correct. |
      | c | Only claim (iii) is correct. |
      | d | There is more than one correct claim. |
    solution: |
      > [!success] Answer: **b, only claim (ii) is correct.**

      > [!tip] Intuition
      > Claim (i) is false because one country can be better at both goods (absolute advantage in both, as with China below). Claim (iii) is false for the same reason. Claim (ii) holds because opportunity costs are reciprocal: if they differ, each country has the lower opportunity cost in one good. (This assumes opportunity costs actually differ; see True/False 14.)
    related_terms: ["absolute-advantage", "comparative-advantage"]
    source_doc_page: 4
  - id: "d1"
    text: |
      **Additional question (China and Russia).** Refer to the diagram of hours needed to produce one unit:

      | Country | Hours for 1 watch | Hours for 1 necklace |
      |---|---|---|
      | China | 4 | 2 |
      | Russia | 8 | 3 |

      Which of the following statements is correct?

      | Option | Statement |
      |---|---|
      | a | China has the absolute advantage in producing both goods and the comparative advantage in producing watches. |
      | b | China has the absolute advantage in producing both goods and the comparative advantage in producing necklaces. |
      | c | Russia has the absolute advantage in producing both goods and the comparative advantage in producing watches. |
      | d | All the other answers are wrong. |
    solution: |
      > [!success] Answer: **a.**
      > China needs fewer hours for both goods, so it has the [[Absolute Advantage]] in both. For the comparative advantage, compare opportunity costs:
      >
      > | Country | Opportunity cost of 1 watch (in necklaces) |
      > |---|---|
      > | China | $4/2 = 2$ |
      > | Russia | $8/3 \approx 2.67$ |
      >
      > China gives up fewer necklaces per watch, so China has the comparative advantage in **watches**, and Russia in **necklaces**. See [[Comparative Advantage]].

      > [!note] Numbering in the source
      > This question appears in the solution set as Q7, and again (with options e to h) as Q9, with the same table and the same answer. It is the same question, so there is one answer here.
    related_terms: ["absolute-advantage", "comparative-advantage", "opportunity-cost"]
    source_doc_page: 5
  - id: "d2"
    text: |
      **Additional Q5 (Drew and Sally).** Below are the hours needed to create a couch and a bed for Drew and Sally:

      | | Hours for 1 couch | Hours for 1 bed |
      |---|---|---|
      | Drew | 6 | 3 |
      | Sally | 5 | 4 |

      Which of the following statements is correct?

      | Option | Statement |
      |---|---|
      | A | Drew has the comparative advantage in producing couches. |
      | B | Sally has the comparative advantage in producing couches. |
      | C | Sally has the comparative advantage in producing couches and absolute advantage in producing both goods. |
      | D | Sally has the comparative advantage in producing beds and the absolute advantage in producing couches. |
    solution: |
      > [!success] Answer: **B, Sally has the comparative advantage in producing couches.**

      > [!example] Working
      > Opportunity cost of 1 couch, in beds:
      >
      > $$
      > \text{Drew: } \frac{6}{3} = 2 \text{ beds}, \qquad \text{Sally: } \frac{5}{4} = 1.25 \text{ beds}
      > $$
      >
      > Sally gives up fewer beds per couch, so she has the comparative advantage in couches. C is wrong because Sally is slower at beds (4 hours versus Drew's 3), so she does not have the absolute advantage in both. D is wrong because the comparative advantage in beds belongs to Drew.
    related_terms: ["comparative-advantage", "absolute-advantage", "opportunity-cost"]
    source_doc_page: 5
  - id: "tf1"
    text: |
      *The sheet's true/false and multiple-choice items below are taken from Mankiw and Taylor, Economics, Chapter 3.*

      **Mankiw and Taylor, Chapter 3, True or False 1.** Indicate whether the statement is true or false.

      If Japan has an absolute advantage in the production of an item, it must also have a comparative advantage in the production of that item.
    solution: |
      > [!success] Answer
      > **False.** Absolute advantage is about productivity, comparative about opportunity cost. A country can be better at everything yet have a higher opportunity cost in one good.
    related_terms: ["absolute-advantage", "comparative-advantage"]
    source_doc_page: 6
  - id: "tf2"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 2.** Indicate whether the statement is true or false.

      Comparative advantage, not absolute advantage, determines the decision to specialize in production.
    solution: |
      > [!success] Answer
      > **True.** Specialise where the opportunity cost is lower.
    related_terms: ["comparative-advantage", "specialisation"]
    source_doc_page: 6
  - id: "tf3"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 3.** Indicate whether the statement is true or false.

      Absolute advantage is a comparison based on productivity.
    solution: |
      > [!success] Answer
      > **True.** Who needs fewer resources to produce a unit.
    related_terms: ["absolute-advantage"]
    source_doc_page: 6
  - id: "tf4"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 4.** Indicate whether the statement is true or false.

      Self-sufficiency is the best way to increase one's material welfare.
    solution: |
      > [!success] Answer
      > **False.** Trade lets countries consume outside their PPF.
    related_terms: ["gains-from-trade", "production-possibility-frontier"]
    source_doc_page: 6
  - id: "tf5"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 5.** Indicate whether the statement is true or false.

      Comparative advantage is a comparison based on opportunity cost.
    solution: |
      > [!success] Answer
      > **True.**
    related_terms: ["comparative-advantage", "opportunity-cost"]
    source_doc_page: 6
  - id: "tf6"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 6.** Indicate whether the statement is true or false.

      If a producer is self-sufficient, the production possibilities frontier is also the consumption possibilities frontier.
    solution: |
      > [!success] Answer
      > **True.** Without trade you can only consume what you produce.
    related_terms: ["production-possibility-frontier", "consumption-possibility-frontier"]
    source_doc_page: 6
  - id: "tf7"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 7.** Indicate whether the statement is true or false.

      If a country's workers can produce 5 hamburgers per hour or 10 bags of French fries per hour, absent trade, the price of 1 bag of fries is 2 hamburgers.
    solution: |
      > [!success] Answer
      > **False.** One hour gives 5 hamburgers or 10 bags, so 1 bag costs $5/10 = 1/2$ hamburger.
    related_terms: ["opportunity-cost"]
    source_doc_page: 6
  - id: "tf8"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 8.** Indicate whether the statement is true or false.

      If producers have different opportunity costs of production, trade will allow them to consume outside their production possibilities frontiers.
    solution: |
      > [!success] Answer
      > **True.** Different opportunity costs create the gains from trade.
    related_terms: ["gains-from-trade", "opportunity-cost", "production-possibility-frontier"]
    source_doc_page: 6
  - id: "tf9"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 9.** Indicate whether the statement is true or false.

      If trade benefits one country, its trading partner must be worse off due to trade.
    solution: |
      > [!success] Answer
      > **False.** Trade is not zero-sum: both gain.
    related_terms: ["gains-from-trade"]
    source_doc_page: 6
  - id: "tf10"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 10.** Indicate whether the statement is true or false.

      Talented people that are the best at everything have a comparative advantage in the production of everything.
    solution: |
      > [!success] Answer
      > **False.** Their opportunity costs cannot all be lower than everyone else's.
    related_terms: ["comparative-advantage", "absolute-advantage"]
    source_doc_page: 6
  - id: "tf11"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 11.** Indicate whether the statement is true or false.

      The gains from trade can be measured by the increase in total production that comes from specialization.
    solution: |
      > [!success] Answer
      > **True.**
    related_terms: ["gains-from-trade", "specialisation"]
    source_doc_page: 6
  - id: "tf12"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 12.** Indicate whether the statement is true or false.

      If Germany's productivity doubles for everything it produces, this will not alter its prior pattern of specialization because it has not altered its comparative advantage.

      > [!info] Numbering
      > The solution set numbers the true/false items 1 to 11, then 13, 14, 15 (it skips 12), and the multiple-choice items 16, 17, 19, 20 (the stem of 18 appears without an answer). The booklet numbers them 1 to 14, then 16 to 20. The Germany, advanced-country and no-gains statements are booklet 12, 13 and 14, and solution 13, 14 and 15. Booklet numbers are used here.
    solution: |
      > [!success] Answer
      > **True.** Doubling both outputs leaves the opportunity-cost ratio unchanged.
    related_terms: ["comparative-advantage", "opportunity-cost"]
    source_doc_page: 6
  - id: "tf13"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 13.** Indicate whether the statement is true or false.

      If an advanced country has an absolute advantage in the production of everything, it will benefit if it eliminates trade with less developed countries and becomes completely self-sufficient.
    solution: |
      > [!success] Answer
      > **False.** It still gains by specialising where its comparative advantage lies.
    related_terms: ["comparative-advantage", "absolute-advantage", "gains-from-trade"]
    source_doc_page: 6
  - id: "tf14"
    text: |
      **Mankiw and Taylor, Chapter 3, True or False 14.** Indicate whether the statement is true or false.

      If gains from trade are based solely on comparative advantage, and if all countries have the same opportunity costs of production, then there are no gains from trade.
    solution: |
      > [!success] Answer
      > **True.** With identical opportunity costs no one can gain by specialising.
    related_terms: ["gains-from-trade", "comparative-advantage", "opportunity-cost"]
    source_doc_page: 6
  - id: "m16"
    text: |
      **Mankiw and Taylor, Chapter 3, MC 16.** If a nation has an absolute advantage in the production of a good,

      | Option | Statement |
      |---|---|
      | a | it can benefit by restricting imports of that good. |
      | b | it will specialize in the production of that good and export it. |
      | c | it can produce that good using fewer resources than its trading partner. |
      | d | none of these answers. |
      | e | it can produce that good at a lower opportunity cost than its trading partner. |
    solution: |
      > [!success] Answer: **c.**
      > It can produce that good using fewer resources than its trading partner. (Option e describes comparative advantage.)
    related_terms: ["absolute-advantage", "comparative-advantage"]
    source_doc_page: 7
  - id: "m17"
    text: |
      **Mankiw and Taylor, Chapter 3, MC 17.** If a nation has a comparative advantage in the production of a good,

      | Option | Statement |
      |---|---|
      | a | it can produce that good at a lower opportunity cost than its trading partner. |
      | b | it can benefit by restricting imports of that good. |
      | c | it can produce that good using fewer resources than its trading partner. |
      | d | it must be the only country with the ability to produce that good. |
      | e | none of these answers. |
    solution: |
      > [!success] Answer: **a.**
      > It can produce that good at a lower opportunity cost than its trading partner.
    related_terms: ["comparative-advantage", "opportunity-cost"]
    source_doc_page: 7
  - id: "m18"
    text: |
      **Mankiw and Taylor, Chapter 3, MC 18.** According to the principle of comparative advantage,

      | Option | Statement |
      |---|---|
      | a | countries should specialize in the production of goods that they enjoy consuming. |
      | b | countries with a comparative advantage in the production of every good need not specialize. |
      | c | countries should specialize in the production of goods for which they have a lower opportunity cost of production than their trading partners. |
      | d | countries should specialize in the production of goods for which they use fewer resources in production than their trading partners. |
    solution: "TODO"
    related_terms: ["comparative-advantage", "specialisation"]
    source_doc_page: 7
  - id: "m19"
    text: |
      **Mankiw and Taylor, Chapter 3, MC 19.** Which of the following statements is true?

      | Option | Statement |
      |---|---|
      | a | A self-sufficient country can, at best, consume on its production possibilities frontier. |
      | b | Only countries with an absolute advantage in the production of every good should strive to be self-sufficient. |
      | c | A self-sufficient country consumes outside its production possibilities frontier. |
      | d | Self-sufficiency is the road to prosperity for most countries. |
    solution: |
      > [!success] Answer: **a.**
      > A self-sufficient country can, at best, consume on its production possibilities frontier.
    related_terms: ["production-possibility-frontier", "gains-from-trade"]
    source_doc_page: 7
  - id: "m20"
    text: |
      **Mankiw and Taylor, Chapter 3, MC 20.** Suppose a country's workers can produce 4 watches per hour or 12 rings per hour. If there is no trade,

      | Option | Statement |
      |---|---|
      | a | the opportunity cost of 1 watch is 1/4 of a ring. |
      | b | the opportunity cost of 1 watch is 4 rings. |
      | c | the opportunity cost of 1 watch is 3 rings. |
      | d | the opportunity cost of 1 watch is 12 rings. |
      | e | the opportunity cost of 1 watch is 1/3 of a ring. |
    solution: |
      > [!success] Answer: **c.**
      > The opportunity cost of 1 watch is 3 rings, since $12/4 = 3$.
    related_terms: ["opportunity-cost"]
    source_doc_page: 7
---

*Related: [[Lec_02-PPF and Gains from Trade]]*
