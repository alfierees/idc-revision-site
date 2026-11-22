---
title: "Lec 11: Taxes"
semester: 1
year: 1
course: "Principles of Micro"
lecture: 11
instructor: Dr. Yael Hadass
tags:
  - principles-of-micro
  - taxes
  - tax-incidence
  - tax-wedge
  - subsidies
  - deadweight-loss
  - tax-revenue
  - laffer-curve
  - elasticity
subject: principles-of-micro
in_scope: true
---

# Lec 11: Taxes

> Part of: [[Principles of Micro]]
> Key concepts: [[Per-Unit Tax]], [[Tax Incidence]], [[Tax Wedge]], [[Subsidy]], [[Tax Revenue]], [[Deadweight Loss of a Tax]], [[Laffer Curve]], [[Consumer Surplus]], [[Producer Surplus]], [[Price Elasticity of Demand]], [[Price Elasticity of Supply]]

> [!info] What this lecture covers
> A tax does not hit only the person who writes the cheque. The lecture shows (1) **which curve shifts** when a per-unit tax is imposed, (2) how to solve the new equilibrium with the pizza example, (3) why it **does not matter** whether the law taxes buyers or sellers, (4) who bears the burden (it depends on **elasticity**), (5) **subsidies** as the mirror image, (6) the **welfare analysis**: consumer surplus, producer surplus, tax revenue and the **deadweight loss**, (7) what makes the deadweight loss big or small, and (8) the **Laffer curve**. Slide content is partly adapted from Mankiw, *Principles of Economics*. Builds on [[Lec_08-Elasticity]] and the surplus ideas from the welfare lecture ([[Consumer Surplus]], [[Producer Surplus]]).

## 1. Taxes: the basic setup

Governments tax goods and services to raise revenue (defence, schools, and so on). The law can make **buyers** or **sellers** hand the money over, and the tax can be a percentage of the price or a fixed amount per unit sold.

> [!info] Per-unit tax
> A **[[Per-Unit Tax]]** is a fixed amount T charged on every unit sold. For simplicity the whole lecture uses per-unit taxes only.

The key move in every problem below: a tax creates **two different prices** in the market, the one the buyer pays ($P_B$) and the one the seller keeps ($P_S$). The old single equilibrium price $P^*$ no longer describes both sides.

## 2. Which curve shifts?

### 2.1 Tax on buyers: the demand curve shifts down

If buyers must pay T to the government for each unit, then out of every price they hand over, T goes to the government. Two ways to see it, both from the slides:

- The price that buyers are willing to pay **to the seller** falls by T (part of what they were willing to pay now goes to the state).
- Paying the government leaves buyers with less disposable income, which for a normal good shifts demand to the left (down).

The result is a **second demand curve**, $D_{tax}$, lying exactly T below the original.

> [!warning] This is not a regular shift
> Both demand curves stay relevant. $D_0$ (the original) shows what buyers **pay including the tax**. $D_{tax}$ shows what the **seller receives** from the buyer at each quantity. Keep both on the diagram and label which is which.

At the old price, the sellers' supply curve and the new demand curve disagree: at the old quantity, buyers on the tax curve would only offer a lower price, so there is a **shortage** at the old price. Equilibrium forms where $D_{tax}$ meets $S_0$. That price is $P_{seller-tax}$ (what the seller receives); the buyer pays that plus T.

The effect of the tax: buyers pay **more**, sellers receive **less**, and the quantity traded **falls**.

### 2.2 Tax on sellers: the supply curve shifts up

A per-unit tax on sellers is like a rise in input costs of T per unit, so supply shifts **up** (equivalently, to the left) by exactly T, from $S_0$ to $S_1$. Again both supply curves remain relevant: $S_0$ shows what the seller **receives**, $S_1$ shows what the buyer **pays**.

> [!tip] Size of the shift
> In both cases the vertical distance between the old and new curve is **exactly the amount of the tax**. Slide 30 shows this with a second numeric diagram (a different market from the pizza, original price 10, quantities 300, 500, 900, tax 1.50):
>
> | Tax on | Original curve at Q = 500 | Shifted curve at Q = 500 | Labelled points on the shifted curve | Gap |
> |---|---|---|---|---|
> | Buyers | $D_0$ at 10.00 | $D_1$ at 8.50 | $D_0$ at 7.50 and $D_1$ at 6.00 (Q = 900) | 1.50 |
> | Sellers | $S_0$ at 10.00 | $S_1$ at 11.50 | $S_0$ at 12.00 and $S_1$ at 13.50 (Q = 900) | 1.50 |
>
> The slide is a schematic: the dotted guides at Q = 300 and 900 only show that the gap is the same 1.50 at every quantity. It states no equations.

## 3. Worked example: the market for pizza

Demand and supply (price in USD, Q in pizzas):

$$
D_1:\; P = 20 - 0.02Q \qquad S_1:\; P = 5 + 0.01Q
$$

**Step 1: equilibrium without tax.**

$$
20 - 0.02Q = 5 + 0.01Q \;\Rightarrow\; 15 = 0.03Q \;\Rightarrow\; Q = 500, \quad P = 20 - 0.02(500) = 10
$$

### 3.1 A tax of USD 1.50 on buyers

Demand the seller sees: subtract the tax from the original demand price.

$$
D_2:\; P = 18.5 - 0.02Q
$$

At the original price of 10, the sellers would supply 500, but on $D_2$ buyers want fewer units. Reading the other way: at $Q = 500$ the price on $D_2$ is only 8.50, and at 8.50 sellers would supply just 350 (since $8.50 = 5 + 0.01Q$ gives $Q = 350$). That mismatch is the shortage the slide shows.

New equilibrium: set $D_2 = S_1$.

$$
18.5 - 0.02Q = 5 + 0.01Q \;\Rightarrow\; 13.5 = 0.03Q \;\Rightarrow\; Q = 450
$$

Price on the supply curve (what the seller receives):

$$
P_S = 5 + 0.01(450) = 9.50
$$

Price the buyer pays, read off the **original** demand curve $D_1$:

$$
P_B = 20 - 0.02(450) = 11.00
$$

Check: $P_B - P_S = 11.00 - 9.50 = 1.50$, which is the tax.

![[Lec11_tax_on_buyers.png]]

### 3.2 A tax of USD 1.50 on sellers

The tax raises the seller's cost by 1.50 per pizza, so supply moves up:

$$
S_2:\; P = 6.5 + 0.01Q
$$

At the old price 10, sellers on $S_2$ supply only 350 while buyers want 500, so there is a shortage. Sellers would supply 500 only if the price rose to 11.50.

New equilibrium: $D_1 = S_2$.

$$
20 - 0.02Q = 6.5 + 0.01Q \;\Rightarrow\; 13.5 = 0.03Q \;\Rightarrow\; Q = 450
$$

Buyers pay $P_B = 11.00$ (read on $D_1$ at 450, or $S_2$ at 450) and sellers keep $P_S = 9.50$ (read on $S_1$ at 450).

![[Lec11_tax_on_sellers.png]]

### 3.3 The recipe (slide 13)

1. Mark the original equilibrium.
2. Draw the new demand or supply curve (depending on who hands the tax to the government).
3. Write the equation of the new curve (shift by T).
4. Find the new equilibrium, remembering the buyer and seller prices now differ.
5. Mark the price buyers pay, 6. mark the price sellers receive, 7. mark the tax as the gap between them.
8. Compare each side's price change with the total tax to get the burden.

> [!tip] The quick algebra
> $P_B - P_S = T$ always. Solve $Q$ from the shifted curve, then get $P_S$ from the supply curve and $P_B$ from the demand curve, both at that $Q$.

## 4. Who pays? Tax incidence

> [!info] Tax incidence
> **[[Tax Incidence]]** is how the burden of a tax is shared between buyers and sellers. The burden on a group is the extra cost it suffers because of the tax, measured against the **original** equilibrium price.

In the pizza example:

| Group | Original price | New price | Burden per pizza |
|---|---|---|---|
| Buyers | 10.00 | 11.00 | **1.00** (pays 1.00 more) |
| Sellers | 10.00 | 9.50 | **0.50** (gets 0.50 less) |
| Total | | | **1.50** = the tax |

Buyers bear two thirds of the tax and sellers one third.

$$
(P_B - P^*) + (P^* - P_S) = P_B - P_S = T
$$

### 4.1 Statutory incidence does not matter

> [!warning] Common mistake
> It is irrelevant whether the **law** says buyers or sellers pay. Compare 3.1 and 3.2: both give $Q = 450$, $P_B = 11.00$, $P_S = 9.50$. The effects on prices and quantity, and the incidence, are the same.

What matters is that a tax drives a **[[Tax Wedge]]** between what leaves the buyer's pocket ($P_B$) and what reaches the seller's pocket ($P_S$). The wedge is the tax that goes to the government.

### 4.2 Elasticity decides the split

Total tax is the same, but the burden is shared according to how easily each side can walk away.

| Situation | Who bears more of the tax |
|---|---|
| Supply more **inelastic** (steeper) than demand | **Sellers** |
| Demand more **inelastic** (steeper) than supply | **Buyers** |

![[Lec11_incidence_elasticity.png]]

> [!tip] Intuition from the slides
> Those who are more flexible (more able to adapt or leave the market) pay less; those who are less flexible pay more. See [[Price Elasticity of Demand]] and [[Price Elasticity of Supply]].

**Extreme cases** (tax levied on sellers, slides 34, 35 and 53 to 54):

| Demand | $P_B$ | $P_S$ | Burden |
|---|---|---|---|
| Perfectly inelastic | rises by the **full tax** | stays at $P^*$ | buyers pay all of it |
| Perfectly elastic | stays at $P^*$ | falls by the **full tax** | sellers pay all of it |

The diagrams (slides 34 and 35) read as follows. With a **vertical** $D_0$ (fully inelastic), the quantity does not change: $S_1$ crosses $D_0$ higher up, the slide labels $P_s = P^*$ and $P_b$ above it. With a **horizontal** $D_0$ (fully elastic), $S_1$ crosses $D_0$ at a lower quantity, and the slide labels $P^* = P_b$ with $P_s$ below.

On slide 54 (fully inelastic demand, surplus analysis) the shaded areas are a rectangle between $P_s = P^*$ and $P_b$ out to the unchanged quantity (the **tax revenue**, all paid by buyers) and the producer-surplus triangle below $P_s$. Because quantity does not fall, there is **no deadweight loss**; this follows from the rule in section 7 (inelastic demand, small DWL, taken to its limit).

## 5. Subsidies: the opposite of a tax

A **[[Subsidy]]** is a per-unit payment from the government. Treat it as a negative tax.

- Paid to **buyers**: like an increase in income, demand shifts **right (up)**.
- Paid to **sellers**: like a fall in production costs (new technology, cheaper inputs), supply shifts **right (down)**.

Example: a cooking-gas subsidy of 4 per tank to consumers. Before: $P^* = 5$, $Q = 500$. After: buyers pay $P_B = 3$, sellers receive $P_S = 7$, $Q = 600$.

$$
(P^* - P_B) + (P_S - P^*) = P_S - P_B = \text{subsidy}
$$

so with the numbers: buyers enjoy $5 - 3 = 2$, sellers enjoy $7 - 5 = 2$, total $= 4$.

![[Lec11_subsidy_buyers.png]]

> [!note] Same logic as taxes
> As with taxes, it does not matter by law whether the subsidy goes to buyers or sellers; the split of the benefit depends on the relative elasticities. Slide 39 compares the same 4 subsidy for two supply curves, the flatter $S_0$ (elastic) and a steeper $S_1$ (relatively inelastic):

| Supply curve | Without subsidy | With subsidy: buyers pay | With subsidy: sellers receive | Quantity |
|---|---|---|---|---|
| $S_0$ (elastic) | $P^* = 5$, Q = 500 | 3 | 7 | 600 |
| $S_1$ (inelastic) | 8, Q = 350 | 7.50 | 11.50 | 400 |

With the steep curve, buyers gain only $8 - 7.50 = 0.50$ per tank while sellers gain $11.50 - 8 = 3.50$, so the less elastic side captures more of the subsidy (total $0.50 + 3.50 = 4$). The slide labels the values 11.5, 8, 7.5, 350 and 400 on the axes; pairing them as above is my reading of the diagram (it is consistent with the 4 gap), as the slide gives no table.

**Who gains and loses?** In a competitive market consumers (more consumption at a lower price) and producers (more units, higher price received) both gain. The government pays. Who "loses" depends on the best alternative use (the opportunity cost) of the money spent on the subsidy.

## 6. Welfare analysis of a tax

Use the surplus tools from earlier: [[Consumer Surplus]], [[Producer Surplus]], and now [[Tax Revenue]]. Tax revenue is counted as a gain because it funds services (education, roads, police).

$$
\text{Tax revenue} = T \times Q_T
$$

Label the areas on the diagram: A, B, C above the no-tax price $P_E$ (up to the demand curve) and D, E, F below it (down to the supply curve). A is the part above $P_B$; B is the rectangle between $P_B$ and $P_E$ out to $Q_T$; C is the small triangle between $Q_T$ and $Q_E$ above $P_E$; D, E, F mirror this below $P_E$.

![[Lec11_welfare_areas.png]]

| | Before tax | After tax |
|---|---|---|
| Consumer surplus | A + B + C | **A** |
| Producer surplus | D + E + F | **F** |
| Tax revenue | 0 | **B + D** |
| Total surplus | A + B + C + D + E + F | A + B + D + F |

Total surplus falls by **C + E**.

> [!info] Deadweight loss
> The **[[Deadweight Loss of a Tax]]** (DWL) is the fall in total surplus caused by the tax (a market distortion). It is the area C + E. Units between $Q_T$ and $Q_E$ are no longer traded, even though buyers value them **more than they cost to produce**. The tax blocks mutually beneficial trades, and nobody (not the government either) gets the surplus they would have created.

The slides draw the case with the tax on buyers; the areas are the same if the tax is on sellers (see 4.1).

> [!warning] Source versions
> I cross-checked the corrected PPTX against the pre-correction PDF of the same deck. Slides 30, 34, 35, 39 and 51 to 54 agree on every number and label I use. The only difference: in the PPTX the slide 51 graph is an empty grid, while the PDF shows the shaded curves, which is where the airplane equations are read from.

### 6.1 Exercise: airplane tickets

Slide 51 asks for the surplus before and after a USD 100 tax per ticket; the solution is on slide 52. The slide's graph shows demand from 400 at Q = 0 through (75, 250) to (100, 200), and supply from the origin through (100, 200); a second supply line starting at 100 on the price axis is the supply curve shifted up by the tax. Read from the axes, these are $P = 400 - 2Q$ and $P = 2Q$ (the slide itself prints no equations). It shades CS (top triangle), PS (bottom triangle), the tax-revenue rectangle between 150 and 250 out to Q = 75, and the DWL triangle.

**Without tax:** $P^* = 200$, $Q^* = 100$.

$$
CS = \frac{100 \times (400 - 200)}{2} = 10{,}000, \qquad PS = \frac{100 \times 200}{2} = 10{,}000, \qquad \text{Total} = 20{,}000
$$

**With the tax:** $Q = 75$, $P_B = 250$, $P_S = 150$.

$$
CS = \frac{75 \times (400 - 250)}{2} = 5{,}625, \qquad PS = \frac{75 \times 150}{2} = 5{,}625
$$

$$
\text{Tax revenue} = 100 \times 75 = 7{,}500, \qquad \text{Total} = 5{,}625 + 5{,}625 + 7{,}500 = 18{,}750
$$

$$
DWL = \frac{100 \times (100 - 75)}{2} = 1{,}250 \quad (= 20{,}000 - 18{,}750)
$$

The DWL is a triangle: base equals the tax (100), height equals the fall in quantity (25).

> [!example] Extension: pizza surplus (not on the slides)
> Applying the same method to the pizza market of section 3 (my own calculation, using the lecture's curves): CS before $= \tfrac12 \times 500 \times 10 = 2{,}500$, PS before $= \tfrac12 \times 500 \times 5 = 1{,}250$. After the tax: $CS = \tfrac12 \times 450 \times 9 = 2{,}025$, $PS = \tfrac12 \times 450 \times 4.5 = 1{,}012.5$, revenue $= 1.5 \times 450 = 675$. Total after $= 3{,}712.5$ against 3,750 before, so $DWL = 37.5$, which equals $\tfrac12 \times 1.5 \times 50$.

## 7. What determines the size of the DWL?

If the government wants revenue, the sensible target is a good with a **small DWL**. It depends on elasticity: the more easily buyers or sellers can leave the market, the more quantity falls below the surplus-maximising level.

| | Inelastic | Elastic |
|---|---|---|
| **Supply** | Hard for firms to leave, $Q$ barely falls, **small** DWL | Easy to leave, $Q$ falls a lot, **large** DWL |
| **Demand** | Hard for buyers to leave, $Q$ barely falls, **small** DWL | Easy to leave, $Q$ falls a lot, **large** DWL |

![[Lec11_dwl_elasticity.png]]

> [!example] The slide's discussion questions
> The lecture poses three choices (no answers are given on the slides, so the reasoning below follows from the rules above):
> - **To cut consumption as much as possible:** tax the good with the more **elastic** demand (luxury fur handbags), since quantity responds most. A very inelastic good (morphine) barely changes.
> - **To maximise revenue:** one big per-unit tax on one good versus several small taxes on many goods. DWL grows more than proportionally with the tax (the triangle has both base and height growing), so spreading the tax thinly over many goods costs less in DWL for the same revenue.
> - **To minimise DWL for a given revenue:** the good with the more inelastic demand (cigarettes) rather than the more elastic one (soda).

## 8. The Laffer curve

The **[[Laffer Curve]]** plots tax revenue (vertical) against the tax rate (horizontal). At first a higher rate raises revenue. Beyond some point the higher rate discourages work (and other taxed activity), the taxable base shrinks, and revenue **falls**.

![[Lec11_laffer_curve.png]]

> [!note] Figure
> The slide shows a picture of a hump-shaped Laffer curve from an external website. The figure above is a schematic I drew; it carries no real data.

## Summary

- A per-unit tax shifts **demand down** (tax on buyers) or **supply up** (tax on sellers) by exactly T; both curves stay relevant.
- The tax creates a **wedge**: $P_B - P_S = T$. Buyers pay $P_B$, sellers keep $P_S$, and quantity falls.
- **Statutory incidence is irrelevant**: taxing buyers or sellers gives the same $P_B$, $P_S$ and $Q$.
- **Economic incidence** depends on elasticity: the less elastic side bears more of the tax.
- A **subsidy** is a negative tax; its benefit is shared by the same elasticity logic.
- Welfare: tax revenue is $T \times Q_T$; CS and PS fall by more than revenue gained, and the shortfall is the **deadweight loss** (a triangle with base T).
- DWL is **larger** when supply or demand is more elastic, which is why efficient taxes target inelastic goods.
- The **Laffer curve** warns that very high tax rates can lower revenue.

## Related notes

- [[Principles of Micro]]
- [[Lec_08-Elasticity]]
- [[Lec_10-Price Controls]]
