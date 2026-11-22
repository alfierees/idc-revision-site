---
title: "Lec 12: Externalities"
semester: 1
year: 1
course: "Principles of Micro"
lecture: 12
instructor: Dr. Yael Hadass
tags:
  - principles-of-micro
  - externality
  - negative-externality
  - positive-externality
  - marginal-social-cost
  - marginal-social-benefit
  - pigovian-tax
  - corrective-subsidy
  - tradable-pollution-permits
  - command-and-control
  - coase-theorem
  - transaction-costs
  - market-failure
subject: principles-of-micro
in_scope: true
---

# Lec 12: Externalities

> Part of: [[Principles of Micro]]
> Key concepts: [[Market Failure]], [[Externality]], [[Negative Externality]], [[Positive Externality]], [[Marginal Private Cost]], [[Marginal Social Cost]], [[Marginal Private Benefit]], [[Marginal Social Benefit]], [[Socially Optimal Quantity]], [[Internalizing the Externality]], [[Pigovian Tax]], [[Corrective Subsidy]], [[Command-and-Control Policy]], [[Tradable Pollution Permits]], [[Coase Theorem]], [[Transaction Costs]]

> [!info] What this lecture covers
> Earlier lectures showed that a competitive market maximises total surplus, so long as the price reflects every cost and benefit. This lecture asks what happens when it does not. When a transaction hurts or helps a **bystander** who is not paid or charged for it, the market quantity is wrong: too much of a polluting good, too little of an educating one. The lecture draws the two diagrams (negative and positive externality), then compares the policy fixes: regulation, corrective taxes and subsidies, and tradable permits. It ends with the private fix, the **Coase theorem**, and why it often fails. Slide content is partly adapted from Mankiw, *Principles of Economics*.

## 1. Where this fits: Principle 7 and market failure

The lecture reopens with Principle 7 from [[Lec_01-Ten Principles of Economics]]: **governments can sometimes improve market outcomes**. The slides list what a government is for: protecting **property rights**, fixing **market failures**, and promoting **equality**.

> [!info] Market failure
> A **[[Market Failure]]** is a failure of the market to produce an efficient allocation of resources. The slides list three sources:
> - **Externalities** (pollution), this lecture
> - **Market power** (monopoly)
> - **Public goods and common resources** (see the next lecture)

The "last class" recap on the agenda is the link: the market equilibrium maximises **social surplus** (consumer plus producer surplus), a binding price floor or a tax creates **deadweight loss**. Externalities are a different reason the market fails: here the equilibrium itself is not the best outcome, because the surplus being maximised leaves out someone's well-being.

## 2. Motivating example: air pollution

The lecture opens with pollution as the standard case.

- **Scale (World Bank, 2022, as quoted on the slides):** air pollution from fine particulate matter caused **6.4 million premature deaths** and 93 billion days lived with illness in 2019; the global cost of the health damage is estimated at USD 8.1 trillion, about **6.1 percent of global GDP**. Low- and middle-income countries are hit hardest.
- **Sources:** residential pollution (cooking and heating with biomass, power generated from fossil fuels for homes) and transport are the main human-made sources of fine particles. Windblown dust is a major natural source near deserts.
- **The point of the photos** (a power station chimney, Hong Kong under smog): while producing, a firm emits pollution into the air, and **those who pollute do not take this cost into account**.

## 3. What is an externality?

> [!info] Definition
> An **[[Externality]]** is the **uncompensated impact of one person's actions on the well-being of a bystander**.

Key points from the slides:

- Self-interested buyers and sellers **neglect the external costs or benefits** of their actions. So costs and benefits to **society** differ from the costs and benefits to the **individuals in the transaction**, and the market outcome is **not efficient**.
- Externalities are classified on two axes:

| | **Production externality** (supply side) | **Consumption externality** (demand side) |
|---|---|---|
| **Negative** (bystander is harmed) | Factory pollution | Smoking or loud music near others (not on the slides, our illustration) |
| **Positive** (bystander benefits) | Innovation that others copy (our illustration) | Education |

The agenda lists all four combinations; the slides develop **negative production** (pollution) and **positive** (education, patents) in detail.

- In the presence of externalities, **public policy can improve efficiency**.

> [!tip] "Production" vs "consumption" means supply vs demand
> A **production** externality arises on the supplier's side, so it shifts the **cost** (supply) curve to the social cost curve. A **consumption** externality arises on the buyer's side, so it shifts the **benefit** (demand) curve to the social benefit curve. "Negative" and "positive" just tell you whether the bystander loses or gains.

## 4. Private versus social cost and benefit

The slides build the language in two steps.

**Costs (supply side)**

- **[[Marginal Private Cost]] (MPC):** what it costs the **producer** to make the last unit. This is the ordinary supply curve. It includes the cost of all inputs, taxes and finance, but **not** the cost inflicted on bystanders by the pollution.
- **[[Marginal Social Cost]] (MSC):** the cost of the last unit to the producer **plus** society.

$$
MSC = MPC + \text{external cost}
$$

How is the external cost measured? The slide's suggestion for pollution: the **average additional health cost per person per year**, summed over those affected.

**Benefits (demand side)**

- **[[Marginal Private Benefit]] (MPB):** the benefit the **buyer** gets from the last unit. This is the ordinary demand curve.
- **[[Marginal Social Benefit]] (MSB):** MPB **plus** the external benefit (the value of the positive impact on bystanders from consumption).

$$
MSB = MPB + \text{external benefit}
$$

> [!info] The socially optimal quantity
> The **[[Socially Optimal Quantity]]** is where the **social** marginal benefit equals the **social** marginal cost. The market, looking only at private values, settles somewhere else.

## 5. Negative externality (production): pollution

![[Lec12_negative_externality.png]]

> [!note] Reconstructed from the slides
> The slide shows the same picture with unlabelled numbers: demand D, supply S0 (private cost) and a higher supply curve S1 (social cost), with the optimal quantity left of the market quantity. The numbers in the figure above (market quantity 4, optimum 3) are **our illustration** with linear curves, not data from the slides.

**Reading the diagram**

- The market equilibrium is where demand meets the **private** supply curve (MPC): quantity $Q_{MARKET}$.
- Because the factory ignores the pollution, the **social** cost curve (MSC) lies **above** the private one by the external cost per unit.
- The **optimal** quantity is where demand meets **MSC**: $Q_{OPTIMUM}$.
- For a negative production externality:

$$
Q_{OPTIMUM} < Q_{MARKET}
$$

The market **overproduces** the polluting good, and for the units between the two quantities the social cost exceeds the buyers' value. That wedge is the **deadweight loss** (the shaded triangle).

> [!tip] Intuition
> Each extra unit between $Q_{OPTIMUM}$ and $Q_{MARKET}$ is worth less to the buyer than it costs society to make it. Producing it destroys value, but the producer does not feel that, because the bystander pays.

**Solving the market failure with a tax.** The social planner can put a **tax on the product** that shifts the supply curve up from MPC to MSC. Then the **equilibrium quantity equals the socially optimal quantity**. The slide mentions the **carbon tax** as the real-world example.

## 6. Positive externality: education and innovation

> [!info] Definition
> A **[[Positive Externality]]** is a positive impact of one person's actions on the well-being of a bystander.

The slide's example: a society that is **more educated** reaches a better standard of living. One person getting an education benefits not only themselves but their community too.

![[Lec12_positive_externality.png]]

> [!note] Reconstructed from the slides
> The slide labels the private demand D0, the higher social demand D1, supply S0, and marks that $Q_{OPTIMUM} > Q_{MARKET}$. The figure above is our linear illustration of that picture (market quantity 4, optimum 5), drawn with the **demand-side** curves, since education is a consumption externality.

**Reading the diagram**

- The market equilibrium uses the **private** demand curve (MPB): quantity $Q_{MARKET}$.
- The **social** demand curve (MSB) lies **above** it by the external benefit per unit.
- The optimum is where MSB meets supply:

$$
Q_{OPTIMUM} > Q_{MARKET}
$$

The market **underproduces** (or underconsumes) the good. The shaded triangle is again deadweight loss: units between the two quantities are worth more to society than they cost, but nobody captures the bystander's gain.

**Policy:** the government can correct this by inducing market participants to **internalize** the externality. A positive externality calls for a **subsidy**. Examples on the slides: **education**, and **patents**, which encourage firms to innovate (the innovation spills over to others, so without protection there would be too little of it).

## 7. Public policy: internalizing the externality

> [!info] Internalizing the externality
> **[[Internalizing the Externality]]** means altering incentives so that people **take account of the external effects** of their actions.

| Situation | Problem | Remedy |
|---|---|---|
| Negative externality | Over-production or over-consumption | **Tax** the good |
| Positive externality | Under-production or under-consumption | **Subsidise** the good |

The government has three broad toolkits, covered in sections 8 to 10: **regulation**, **market-based** tools (corrective taxes and subsidies, tradable permits), and, in the background, the **private** solution (Coase, section 11).

## 8. Command-and-control policy: regulation

> [!info] Command-and-control
> **[[Command-and-Control Policy]]** means the government tells firms directly what to do. The slides give two forms:
> - Setting a **maximum level of pollution** that a factory may emit.
> - **Forcing firms to adopt a particular technology** to reduce emissions.

> [!warning] Drawback
> Regulation **requires the government to understand the industry**: what a sensible cap is, which technology is best. A uniform rule also ignores that some firms can cut pollution cheaply and others cannot (see the glop example below).

## 9. Market-based policy 1: corrective taxes and subsidies

- A **[[Pigovian Tax]]** (corrective tax) should **equal the cost of the externality**.
- A **[[Corrective Subsidy]]** should **equal the benefit of the externality**.

In the diagrams above, setting the tax or subsidy equal to the gap between the private and social curve moves the market to the optimal quantity.

Why economists like corrective taxes (slides):

- The tax gives factories an **incentive to develop cleaner technologies**: every unit of pollution costs money, so cutting it saves money.
- Corrective taxes **enhance** economic activity: unlike most taxes, which create deadweight loss, they push the market towards efficiency.

> [!example] Taxes on gasoline
> The slides' example: a gasoline tax addresses **congestion**, **accidents** and **pollution**, which are all external costs of driving. The revenue could also be used to **reduce other taxes that hurt welfare** (see [[Lec_11-Taxes]] for why most taxes do).

### Worked example: the paper mill and the steel mill

> [!example] Glop
> A paper mill and a steel mill each currently emit **300 tons of glop** per year into a river. The slide asks the class, in small groups, to analyse two policies:
>
> 1. **Regulation:** allow pollution up to 300 tons per year for **each** mill. How will the mills respond?
> 2. **Corrective tax:** the EPA levies a tax of **USD 50,000 for each ton of glop** emitted. How will the mills respond? Show the effect with a supply and demand diagram.

The slides give no numbers for the mills' abatement costs, so the answers are the lecture's logic, not a calculation:

- **Under the cap**, both mills are allowed what they emit now, so they have **no reason to change**. A cap set at the current level does nothing, and a cap that forces both to cut the same amount ignores who can cut more cheaply.
- **Under the tax**, each ton of glop now costs USD 50,000. A mill cuts emissions as long as cutting a ton costs **less than the tax**. A mill with cheap abatement cuts a lot; a mill with expensive abatement cuts less and pays the tax. Each mill's **demand for the right to pollute** slopes down, and the tax is a price on that right (see the diagram in section 10).

The slides then state the three lessons:

- A corrective tax **places a price on the right to pollute**.
- It **allocates pollution to the factories that face the highest cost of reducing it**: those who can cut cheaply cut, those who cannot pay.
- So the EPA can achieve **any given level of pollution at the lowest total cost** by using a tax.

> [!tip] Cap versus tax on incentives
> A fixed **target pollution quantity** gives firms **no reason to develop better technologies** once they are under the cap. A **tax** keeps rewarding every extra bit of abatement, so it **gives firms an incentive to develop better technologies**.

## 10. Market-based policy 2: tradable pollution permits

> [!info] Tradable pollution permits
> **[[Tradable Pollution Permits]]** are rights to emit a fixed amount of pollution that firms may buy and sell. The government fixes the **total quantity** and lets the market set the **price**.

**The slide's example.** Total emissions of glop are 600 tons.

| | Steel mill | Paper mill | Total |
|---|---|---|---|
| Total 1 | 300 | 300 | 600 |
| Total 2 | 400 | 200 | 600 |

The paper mill agrees to cut its emissions (300 to 200) in return for **USD 5 million** paid by the steel mill, which emits 400. Total emissions **stay at 600 tons**. Should the EPA allow the deal? The lecture's logic says **yes**: the total pollution is unchanged, and both mills agree voluntarily, so each must be better off. The steel mill values the extra 100 tons by more than USD 5 million, the paper mill can cut by less than USD 5 million. Pollution moves to the firm that values it most, which is the same result as the corrective tax.

> [!note] Slide typo
> The slide's table header says "Still Mill"; it means the steel mill.

The same logic applies to **any voluntary transfer of the right to pollute** from one firm to another. If the EPA allows such deals, it **creates a new scarce resource: pollution permits**, and a **market in permits will develop**, governed by supply and demand.

### Permits versus corrective taxes

![[Lec12_tax_vs_permits.png]]

> [!note] Reconstructed from the slides
> The slide shows the two panels qualitatively (no numbers). The figure redraws them with a linear demand for pollution rights.

- In **(a)**, the EPA **sets the price** of pollution with a tax and the demand curve for pollution rights **determines the quantity**.
- In **(b)**, the EPA **limits the quantity** by issuing a fixed number of permits (a vertical supply curve) and the market **determines the price**.
- If the tax is set at the price the permit market would reach, **the price and the quantity of pollution are the same** in both cases. The two tools are equivalent.

> [!warning] When they differ: uncertainty
> If the government **cannot work out what tax would achieve the exact amount of pollution** it wants (it does not know the demand curve for pollution rights well), it is **better to sell a fixed number of permits**. Fixing the quantity guarantees the pollution level; fixing the price does not.

### Comparison of the policy tools

| Tool | What the government fixes | Who decides the pollution cut | Incentive to innovate | Needs info on firms' costs |
|---|---|---|---|---|
| **Command-and-control** (cap or technology rule) | Quantity or method, firm by firm | The regulator | None beyond the rule | **Yes**, a lot |
| **Corrective tax** | The **price** of pollution | The market (demand for pollution rights) | **Yes**, every unit is taxed | Needs the right tax rate |
| **Tradable permits** | The **quantity** of pollution | The market (permit price) | **Yes**, permits can be sold if emissions fall | Needs the right total |

## 11. Private solutions and the Coase theorem

Not every externality needs the government. The slides give examples of **private solutions**:

- **Norms:** "do not litter" is enforced by social pressure, not law.
- **Charities:** the Sierra Club works to protect the environment.
- **Donations:** alumni give to their university, funding education, a positive externality.
- **Contracts or mergers:** firms buy each other, or sign contracts, to internalize the externality. Mankiw's example is the **apple grower and the beekeeper**: bees help the orchard and the orchard feeds the bees, so the two can merge or contract.

> [!info] The Coase theorem
> **[[Coase Theorem]]:** if private parties can **bargain without cost** over the allocation of resources, they can solve the problem of externalities **on their own**. **Whatever the initial distribution of rights**, the interested parties can reach a bargain in which everyone is better off and the outcome is **efficient**.

> [!tip] Reading the theorem
> Efficiency does **not** depend on who is given the right (the factory may pollute, or the neighbours may demand clean air). Who gets the right affects who **pays whom**, not whether the efficient quantity is reached. The theorem is a statement about what bargaining could achieve **if it were free**, which leads to the next point.

### Why private solutions do not always work

- **[[Transaction Costs]]:** reaching an agreement is difficult, and **negotiating can itself be costly** (lawyers, time, information).
- **Many parties and cooperation problems:** the slide's example is a group of **fishermen** who could pay a factory not to pollute the river. Getting every fisherman to agree and to pay their share is hard, and each may hope the others pay (a free-rider problem). The deal may never happen.
- In such cases **the government can act on behalf of the fishermen** (by a tax, a cap or permits).

## 12. Current events: the 2022 US climate and tax package

The lecture closes with a NYT article (28 July 2022) on a USD 369 billion US climate and tax package. The points on the slides:

- It uses **billions of dollars in tax incentives** to expand wind, solar, geothermal and battery industries over the next decade, i.e. **subsidies for activities with positive externalities** (section 6).
- Firms get incentives to keep open nuclear plants and to **capture emissions** from industrial facilities.
- Buyers below an income threshold get a **USD 7,500 tax credit** for a new electric car and **USD 4,000** for a used one; households get **rebates** for heat pumps and energy-efficiency work.
- The Senate Democrats estimated that it would cut US greenhouse-gas emissions by **40 percent below 2005 levels by 2030**.

> [!note] Connecting to the theory
> This is the **corrective subsidy** in practice: the subsidy on clean energy and electric vehicles moves the market towards a larger quantity of low-pollution activity. The package mostly uses incentives rather than a carbon tax or permits.

## Summary

- An **externality** is the uncompensated effect of a transaction on a bystander. Private decision-makers ignore it, so the market outcome is **inefficient** (a market failure).
- **Negative** externality: $MSC = MPC + \text{external cost}$, so $Q_{OPTIMUM} < Q_{MARKET}$ (overproduction). **Positive** externality: $MSB = MPB + \text{external benefit}$, so $Q_{OPTIMUM} > Q_{MARKET}$ (underproduction).
- **Internalize** the externality: **tax** negative ones, **subsidise** positive ones, with the corrective tax or subsidy equal to the external cost or benefit.
- **Regulation** (command-and-control) needs detailed government knowledge. **Corrective taxes** and **tradable permits** are market-based: they cut pollution at the **lowest total cost** and give firms an incentive to find cleaner technology. Tax and permits are **equivalent** when set consistently, but permits are better when the government cannot pick the right tax.
- The **Coase theorem**: with costless bargaining, private parties reach the efficient outcome whatever the initial rights. **Transaction costs** and many parties often block this, which is where the government steps in.

## Related notes

- [[Principles of Micro]]
- [[Lec_01-Ten Principles of Economics]] (Principle 7 and market failure)
- [[Lec_11-Taxes]] (ordinary taxes versus corrective taxes, deadweight loss)
- [[Marginal Cost]] and [[Lec_05-Supply and Costs of Production]] (private cost and the supply curve)
- Next: public goods and common resources, the other market failure in the lecture's list
