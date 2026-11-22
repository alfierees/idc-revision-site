---
title: "Lec 02: PPF and Gains from Trade"
semester: 1
year: 1
course: "Principles of Micro"
lecture: 2
instructor: Dr. Yael Hadass
tags:
  - principles-of-micro
  - production-possibility-frontier
  - opportunity-cost
  - absolute-advantage
  - comparative-advantage
  - gains-from-trade
  - specialisation
  - economic-growth
subject: principles-of-micro
in_scope: true
---

# Lec 02: PPF and Gains from Trade

> Part of: [[Principles of Micro]]
> Key concepts: [[Economic Model]], [[Factors of Production]], [[Production Possibility Frontier]], [[Opportunity Cost]], [[Absolute Advantage]], [[Comparative Advantage]], [[Specialisation]], [[Gains from Trade]], [[Consumption Possibility Frontier]], [[Terms of Trade]], [[Bow-Shaped PPF]], [[Economic Growth]]

> [!info] What this lecture does
> The whole lecture is one running example with oranges and pears. It starts with one country and one input, builds the [[Production Possibility Frontier]] (PPF), reads the [[Opportunity Cost]] off it, adds a second country, shows that both countries can consume more than they could produce alone, and finishes with a curved PPF and economic growth. Slides 1 to 9 are housekeeping and motivation.

## 1. Why economists use models

A **model** is a deliberate simplification, like a map (which lets you find your way without showing every tree) or a model of the human body (which shows how it is built inside). An [[Economic Model]] is expressed with maths and graphs. Here the model is used to analyse how a country uses scarce resources to produce goods it then consumes, and later to show how countries gain from trade.

**The problem.** A country has a limited quantity of [[Factors of Production]] (workers, machines, technology). It must decide how to allocate them, and different allocations give different output. The model answers: *how many goods can the country produce with the resources it has?*

> [!tip] Baby steps
> The lecturer builds the model from "extremely simplified assumptions" and relaxes them one at a time. Expect each section below to start by stating its assumptions.

The deck also links two videos on opportunity cost (slide 8, not readable from the PDF) and a lecture-introduction slide on the lecturer. Neither is exam content.

## 2. One country: the PPF

### 2.1 Assumptions (Home)

1. One country, called **Home**.
2. One factor of production: labour, measured in **hours of work**.
3. Home has **10 hours** of work in total.
4. All workers are identical.
5. Two goods only: **oranges and pears**.
6. 1 hour of work makes **1 orange**; 0.5 hours of work makes **1 pear** (so 1 hour makes 2 pears).

### 2.2 Output for each split of the 10 hours

If $h$ hours go to oranges, then $10-h$ hours go to pears, so oranges $=h$ and pears $=2(10-h)$.

| Hours on oranges | Hours on pears | Oranges | Pears |
|---|---|---|---|
| 0 | 10 | 0 | 20 |
| 1 | 9 | 1 | 18 |
| 2 | 8 | 2 | 16 |
| 3 | 7 | 3 | 14 |
| 4 | 6 | 4 | 12 |
| 5 | 5 | 5 | 10 |
| 6 | 4 | 6 | 8 |
| 7 | 3 | 7 | 6 |
| 8 | 2 | 8 | 4 |
| 9 | 1 | 9 | 2 |
| 10 | 0 | 10 | 0 |

> [!note] Reconstructed from the slides
> Slide 11 shows this table with the two output columns left blank for the class to fill in. The numbers above are computed from the stated assumptions, not copied from a filled slide.

### 2.3 The two Moodle checks (slides 12 and 13)

Both are multiple choice, answered in class. The slides do not print the answers, so these are worked from the table.

- **Maximum oranges, and pears in that case.** All 10 hours on oranges gives **10 oranges and 0 pears**.
- **Maximum pears, and oranges in that case.** All 10 hours on pears gives **20 pears and 0 oranges**.

### 2.4 The PPF and its equation

The **Production Possibility Frontier** is the set of combinations of the two goods that the country can produce when it uses all of its resources. Plot pears on the horizontal axis (X) and oranges on the vertical axis (Y):

![[Lec02_home_ppf.png]]

The line has intercept 10 and slope $-10/20 = -1/2$, so

$$
Y = 10 - 0.5X
$$

where $Y$ is oranges and $X$ is pears. The slides write the line as $Y=b-aX$ with $b$ the intercept and $a$ the slope.

### 2.5 Feasible versus efficient

| Point | Feasible? | Efficient? | Why |
|---|---|---|---|
| Inside the line, e.g. 1 pear and 8 oranges | Yes | No | Home has enough labour hours left to make more of both goods |
| On the line | Yes | Yes | You cannot get more of one good without giving up some of the other |
| Outside the line, e.g. 12 pears and 8 oranges | No | n/a | Not enough resources to reach it |

> [!info] Efficient
> A point is efficient when the quantity of one good cannot be increased without reducing the quantity of the other. Only points **on** the PPF are both feasible and efficient. The model tells us which combinations Home can both produce and consume: any single point on the frontier.

## 3. Opportunity cost

> [!info] Opportunity Cost
> The cost of something is what you give up to get it.

Home can produce **1 orange or 2 pears** in one hour. Moving one hour of labour from one good to the other therefore gives:

- **1 more orange** costs **2 pears** (the pears that hour would have made).
- **1 more pear** costs **1/2 orange** (the hour makes 2 pears, so each pear uses half an hour, i.e. half an orange).

| Opportunity cost of 1 unit | Oranges | Pears |
|---|---|---|
| Home | 2 pears | 1/2 orange |

### The Moodle checks on slides 17 and 18

Both ask about moving a whole **hour**, not a single unit.

- **Slide 17.** Home adds one hour to oranges (taken from pears). It gains 1 orange and gives up **2 pears**.
- **Slide 18.** Home adds one hour to pears (taken from oranges). It gains 2 pears and gives up **1 orange**.

> [!warning] Hour versus unit
> Slide 18's question is about one extra **hour** of pear-making, which costs **1 orange**. The opportunity cost of one extra **pear** is 1/2 orange. Read whether the question says "one hour" or "one more unit".

> [!note] Reconstructed from the slides
> The slides do not print the answers to the slide 17 and 18 questions. They are worked here from the Home assumptions.

### The slope of the PPF is an opportunity cost

The slope $0.5$ in $Y=10-0.5X$ is no accident. Producing one more pear (one more unit of $X$) means giving up half an orange. So:

> [!tip] Rule
> The slope of the PPF, in absolute value, is the opportunity cost of producing one more unit of the good on the **X axis**. Here X is pears, so the slope is oranges given up per extra pear.

## 4. Two countries: Home and Foreign

Release one assumption: there are now **two** countries, Home and **Foreign**, with different worker productivity. Everything else is unchanged (10 hours of labour each, identical workers, oranges and pears).

- Home: 1 hour per orange, 0.5 hours per pear (as before).
- Foreign: **0.5 hours per orange**, **1 hour per pear**.

So Foreign makes 2 oranges or 1 pear in an hour.

### 4.1 Foreign's output table

| Hours on oranges | Hours on pears | Oranges | Pears |
|---|---|---|---|
| 0 | 10 | 0 | 10 |
| 1 | 9 | 2 | 9 |
| 2 | 8 | 4 | 8 |
| 3 | 7 | 6 | 7 |
| 4 | 6 | 8 | 6 |
| 5 | 5 | 10 | 5 |
| 6 | 4 | 12 | 4 |
| 7 | 3 | 14 | 3 |
| 8 | 2 | 16 | 2 |
| 9 | 1 | 18 | 1 |
| 10 | 0 | 20 | 0 |

Foreign's PPF has intercept 20 (oranges) and slope $-20/10=-2$:

$$
Y = 20 - 2X
$$

### 4.2 Foreign's opportunity costs

| Opportunity cost of 1 unit | Oranges | Pears |
|---|---|---|
| Home | 2 pears | 1/2 orange |
| Foreign | 1/2 pear | 2 oranges |

Foreign's slope is 2 because one more pear costs 2 oranges.

## 5. Absolute versus comparative advantage

> [!info] Absolute Advantage
> A producer has an [[Absolute Advantage]] in a good if it needs a **smaller quantity of inputs** to produce it. This compares productivity. Test: *how many hours does one unit take?*

> [!info] Comparative Advantage
> A producer has a [[Comparative Advantage]] in a good if its [[Opportunity Cost]] of producing that good is **smaller** than the other producer's. Test: *how much of the other good must be given up?*

| Hours needed for 1 unit | Oranges | Pears |
|---|---|---|
| Home | 1 hour | 1/2 hour |
| Foreign | 1/2 hour | 1 hour |

| Goods per hour | Oranges | Pears |
|---|---|---|
| Home | 1 | 2 |
| Foreign | 2 | 1 |

Reading the two tables:

- **Absolute advantage:** Foreign needs fewer hours for oranges, Home for pears. So Foreign has it in oranges, Home in pears.
- **Comparative advantage:** Foreign gives up only 1/2 pear per orange (Home gives up 2), so Foreign has it in oranges. Home gives up only 1/2 orange per pear (Foreign gives up 2), so Home has it in pears.

In this example the two kinds of advantage **coincide**, but "it is not always the case" (slide 29). The lecture's point is that even a country with an absolute advantage in everything still gains from trade, because it still has a comparative advantage in something.

> [!warning] Slide wording error
> Slide 29 says "the country who need minimum hours to produce a good has a **comparative** advantage". That is the definition of **absolute** advantage; the next sentence on the slide correctly defines comparative advantage through opportunity cost. Use the table above, not that sentence.

| | Absolute advantage | Comparative advantage |
|---|---|---|
| Question asked | Who needs fewer hours per unit? | Who gives up less of the other good? |
| Compares | Productivity | Opportunity cost |
| Can one country have it in both goods? | Yes | No (with two goods it is split, unless the two opportunity costs are identical) |

> [!note] Reconstructed from the slides
> The last row of the table is a standard consequence rather than something the slides state. If one country has the lower opportunity cost of oranges, it must have the higher opportunity cost of pears, because the two costs are reciprocals.

## 6. Gains from trade

> [!info] Gains from Trade
> Trade is beneficial if it lets countries **consume more goods** than they could produce on their own. Graphically, trade must let a country reach a consumption point **above its own PPF**.

### 6.1 Specialise where you have comparative advantage

- Foreign has a comparative advantage in oranges: it produces **20 oranges** (all 10 hours on oranges).
- Home has a comparative advantage in pears: it produces **20 pears** (all 10 hours on pears).

Together they produce 20 of each, more of both goods than either could achieve alone at the same time. This is [[Specialisation]].

### 6.2 The Consumption Possibility Frontier

If the two countries trade, the set of combinations they can consume is the [[Consumption Possibility Frontier]] (CPF). With specialisation it runs from 20 oranges (all Foreign) to 20 pears (all Home):

$$
Y = 20 - 1\cdot X
$$

Intercept 20, slope $-20/20 = -1$.

![[Lec02_ppf_cpf.png]]

The CPF lies outside both individual PPFs, so both countries can consume more of both goods.

### 6.3 The trade price and who gains

With the CPF slope of 1, the two countries trade **1 orange for 1 pear**. Compare with each country's own opportunity cost:

| Country | Getting 1 unit of the other good | Own cost without trade | Cost through trade | Gain |
|---|---|---|---|---|
| Home | 1 orange | 2 pears | 1 pear | Pays 1 pear instead of 2 |
| Foreign | 1 pear | 2 oranges | 1 orange | Pays 1 orange instead of 2 |

> [!tip] Terms of trade
> The [[Terms of Trade]] (here 1 orange per pear, an "opportunity cost of 1") must lie **between the two countries' opportunity costs**. For oranges priced in pears that range is 1/2 to 2. At 1 it sits strictly inside, so both sides gain. At exactly 1/2 or 2, one country would gain nothing.

> [!note] Reconstructed from the slides
> Slide 30 says countries specialise "if they can trade the good in a ratio between the opportunity costs of both countries". The explanation of why the range must be strict (at the ends one side gains nothing) is added here.

> [!warning] Which axis is the "price"?
> The 1/2 to 2 range is measured in **pears per orange**. If you measure in oranges per pear, the range is the reciprocal (1/2 to 2 again, by symmetry in this example). Always state which good is the unit.

## 7. A bow-shaped PPF

A straight-line PPF assumes every unit of labour moves between goods at the same cost. If workers differ in ability, the PPF bends. Slides 31 and 32 first sketch the guns-and-butter version: workers who are less efficient in guns are moved out first when butter production rises.

### 7.1 Neverland

New assumptions: one country, **Neverland**; labour is the only factor; oranges and pears; workers are **not identical**. Three workers, one hour each, so 3 hours in total.

| Worker | Oranges per hour | Pears per hour |
|---|---|---|
| Type A | 1 | 2 |
| Type B | 2 | 3 |
| Type C | 4 | 1 |

Opportunity cost for each worker (what is given up per unit gained):

| Worker | OC of 1 more orange | OC of 1 more pear |
|---|---|---|
| Type A | 2 pears | 1/2 orange |
| Type B | 3/2 pears | 2/3 orange |
| Type C | 1/4 pear | 4 oranges |

Ranking: Type C is best at oranges (lowest cost of an orange). Type A is best at pears (lowest cost of a pear), then B, then C.

### 7.2 Building the curve

1. **Endpoints.** All three on oranges: $1+2+4=7$ oranges, 0 pears. All three on pears: $2+3+1=6$ pears, 0 oranges.
2. **Start from 7 oranges and shift workers into pears**, always the one who gives up the fewest oranges per pear.
3. **Shift A first:** lose 1 orange, gain 2 pears, reaching 6 oranges and 2 pears.
4. **Then B:** lose 2 more oranges, gain 3 more pears, reaching 4 oranges and 5 pears.
5. **Last C:** lose 4 oranges, gain only 1 pear, reaching 0 oranges and 6 pears. This is why C goes last: you give up 4 (!!) oranges for 1 pear.

![[Lec02_neverland_bow_ppf.png]]

### 7.3 The slope changes along the curve

Remember the slope is the OC of one more unit of the good on the X axis (pears):

| Pears produced | Worker being shifted | Slope (oranges given up per pear) |
|---|---|---|
| 0 to 2 | Type A | 1/2 |
| 2 to 5 | Type B | 2/3 |
| 5 to 6 | Type C | 4 |

The frontier gets steeper as more pears are produced. This is the **increasing opportunity cost** that makes the PPF bow outwards. With many different resources with many different opportunity costs, the kinked line becomes a smooth round curve. The lecturer says the bow shape is discussed more thoroughly next week.

> [!warning] Slide typo
> Slide 38 says "maximum number of **oranges**" for the case where everyone makes pears. It means pears (6).

## 8. Economic growth

> [!info] Economic Growth
> [[Economic Growth]] is the ability to produce more. On the PPF diagram it is an **outward movement** of the frontier (for example from new technology).

Back to Home ($Y=10-0.5X$, 10 hours, 1 orange or 2 pears per hour).

- **Slide 44: pear productivity rises by 1.** Each hour now makes 3 pears. Maximum pears become $10\times 3 = 30$; maximum oranges stay at 10. The line pivots outwards on the pear axis: $Y=10-\tfrac13X$.
- **Slide 45: both pear and orange productivity rise by 1.** Each hour now makes 2 oranges or 3 pears. Maximum oranges become 20 and maximum pears 30: the whole line moves out, $Y=20-\tfrac23X$.

![[Lec02_growth_shift.png]]

> [!note] Reconstructed from the slides
> The slides draw the new frontiers (intercepts 10 and 30 on slide 44, 20 and 30 on slide 45) but pose the "what happens to the PPF?" question without writing the equations. The equations are derived here from the intercepts.

> [!tip] Reading the shift
> Raising productivity in only one good moves only that intercept, so the frontier **pivots** on the other axis. Raising it in both moves both intercepts and the whole frontier shifts out. Here the slope also changes (1/2 to 2/3) because the pear and orange gains are not in the same proportion as before.

## Summary

- A **PPF** shows the combinations of two goods an economy can produce with its resources. Points inside are feasible but inefficient, points on it are feasible and efficient, points outside are infeasible.
- Home (10 hours, 1 orange or 2 pears per hour): $Y=10-0.5X$. Foreign (1/2 hour per orange, 1 hour per pear): $Y=20-2X$.
- The **slope** of the PPF is the opportunity cost of one more unit of the good on the X axis.
- **Absolute advantage** is about fewer inputs per unit; **comparative advantage** is about lower opportunity cost. Gains from trade come from comparative advantage, even if one country is better at everything.
- If each specialises (Home pears, Foreign oranges) and they trade at 1:1, the consumption frontier is $Y=20-X$, outside both PPFs.
- With workers of different abilities, the PPF is **bow shaped**: shift the cheapest-in-opportunity-cost workers first, so the slope rises along the curve (1/2, 2/3, 4 in the Neverland example).
- **Growth** moves the frontier outward.

## Related notes

- [[Principles of Micro]]
- [[Lec_14-Production Costs Worksheet]] (later, for costs and marginal cost)
- [[Production Possibility Frontier]], [[Opportunity Cost]], [[Comparative Advantage]], [[Gains from Trade]]
