---
title: "Labor Supply, Contracts, Slutsky & Intertemporal Mix (Extra Practice)"
type: past-paper
status: worked-solution
exam: "Micro-Economics I, Extra Practice Questions"
semester: 2
year: 1
course: "Micro-Economics I"
instructor: Ido Eisdorfer and Yosi Ganel
tags:
  - micro-i
  - past-paper
  - worked-solution
  - labor-supply
  - slutsky
  - intertemporal-choice
aliases:
  - Micro I Extra Practice
  - PP09 Micro I
subject: micro-i
in_scope: true
---

# Labor Supply, Contracts, Slutsky & Intertemporal Mix (Extra Practice)

> Part of: [[Micro-Economics I]]
> **Extra Practice Questions**, Micro-Economics I, Ido Eisdorfer and Yosi Ganel. Eight multiple-choice questions (five options each, four in Q4), no marks printed.
> Builds on: [[Lec_06-Revealed Preference]], [[Lec_07-Substitution and Income Effects]], [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]]
> Practice: [[PS_07-Labor Supply]], [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]

> [!info] Source
> The official answers are **yellow highlights** on a second copy of the paper. Each is reproduced and explained. All 8 questions have an official answer, so nothing here is AI-solved.

> [!warning] Printed footnote on Q4
> The paper carries a footnote: **"I changed the number of hours to be 7."** The question below therefore uses **7 hours** (the lecturer changed this number from an earlier version). All Q4 numbers are computed with 7.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A tax on labor income: income effect against substitution effect | [[Lec_08-Labor Supply]] |
| Q2 | [[Labor Supply]] with Cobb-Douglas utility over leisure and income | [[Lec_08-Labor Supply]], [[Lec_04-Optimal Bundle]] |
| Q3 | What a perfectly inelastic labor supply says about [[Leisure]] | [[Lec_08-Labor Supply]] |
| Q4, Q5 | Kinked wage schedules, comparing budget sets, revealed preference | [[Lec_08-Labor Supply]], [[Lec_06-Revealed Preference]] |
| Q6 | [[Slutsky Compensation]] number | [[Lec_07-Substitution and Income Effects]] |
| Q7, Q8 | Borrowers and net sellers when prices or interest rates change | [[Lec_09-Intertemporal Choice]], [[Lec_06-Revealed Preference]] |

> [!tip] Intuition: three tools cover the whole paper
> 1. **Income effect versus substitution effect** (Q1, Q3): a higher wage pulls hours both ways, and which wins is not decided by the theory alone.
> 2. **Can the old bundle still be afforded?** (Q4, Q5, Q7, Q8): if yes and the set grew, she is better off. If the old bundle is lost, utility can still rise or fall.
> 3. **Net buyer versus net seller** (Q7, Q8): a price rise helps sellers of that good and hurts buyers.

---

## Q1 — A tax on income

**Question.** If the government imposes a tax at the rate of $t$ on the consumer's income, then:

- A. The consumer will want to work less
- B. The consumer will want to work more
- C. The consumer won't change his working hours
- D. It is not possible that the consumer will want to work more
- E. **All answers are not correct**

> [!success] Answer: E

A proportional income tax lowers the **net wage** from $w$ to $(1-t)w$. That triggers two opposing effects:

- **Substitution effect:** leisure is cheaper in terms of consumption, so the consumer wants **more leisure** (works less).
- **Income effect:** the consumer is poorer, so if leisure is a normal good he wants **less leisure** (works more).

The net result depends on which effect wins, so A, B and C can each happen and D is false. Hence "all answers are not correct". See [[Income Effect]], [[Substitution Effect]] and [[Labor Supply]].

## Q2 — The 10-dollar wage and $U = L\cdot Y^{1/2}$

**Question.** The new working agreement sets the wage at 10 dollars. The utility function of each worker is $U(L, Y) = L \cdot Y^{1/2}$.

- A. The worker will work 12 hours a day
- B. The worker will work 16 hours a day
- C. **The worker will work 8 hours a day**
- D. We cannot know the amount of work hours
- E. All answers are not correct

> [!success] Answer: C (8 hours)

The paper does not state the length of the day, so the standard **24 hours** is assumed (and no income other than the wage). Income is $Y = 10\,(24 - L)$, where $L$ is leisure. The worker maximises

$$
U = L\,\bigl(10\,(24 - L)\bigr)^{1/2}
$$

Take logs (the optimum is unchanged): $\ln L + \tfrac12 \ln(240 - 10L)$. The first-order condition:

$$
\frac{1}{L} - \frac{5}{240 - 10L} = 0 \quad\Rightarrow\quad 240 - 10L = 5L \quad\Rightarrow\quad L = 16
$$

So leisure is 16 hours and work is $24 - 16 = 8$ hours.

> [!tip] Intuition
> This is Cobb-Douglas with exponents 1 on leisure and $\tfrac12$ on income. The weight on leisure is $1/(1 + \tfrac12) = \tfrac23$, so the worker spends two thirds of her 24 hours on leisure: 16 hours of leisure, 8 of work. The wage does not matter (the income and substitution effects cancel for Cobb-Douglas). See [[Cobb-Douglas Utility]].

> [!warning] Assumption
> The answer relies on a 24-hour day. With a different day length $T$ the answer would be $T/3$ hours of work.

## Q3 — Completely inelastic labor supply

**Question.** Roger has a completely inelastic labor supply. We can know that:

- A. Leisure is a neutral good
- B. **Leisure is a normal good**
- C. Leisure is an inferior good
- D. We cannot know if leisure is a normal or inferior good
- E. Leisure can be an inferior good

> [!success] Answer: B

"Completely inelastic" means his hours do not change at all when the wage changes. A higher wage always creates two effects on hours:

- the **substitution effect** pushes hours **up** (leisure gets more expensive);
- the **income effect** pushes hours **down** if leisure is normal (richer people take more leisure), and **up** if leisure is inferior.

For the two to cancel exactly, the income effect must work against the substitution effect, which requires **normal** leisure. If leisure were inferior, both effects would raise hours and labor supply would slope upward, not stand still. That rules out C, D and E. A is wrong because a good with a zero income effect would leave the substitution effect alone, and then hours would rise with the wage.

See [[Lec_08-Labor Supply]] and [[Income Effect]].

## Q4 — Two wage contracts (7-hour version)

**Question.** Roger has 16 hours in a day that he can either work or rest. According to his working contract, for every hour of the first **7** hours he gets 20 dollars, and if he works extra hours he gets 30 dollars per hour. A new CEO decides to change the working agreement, so that Roger can choose between the old one or instead get 25 dollars an hour for every hour.

*(Printed footnote: "I changed the number of hours to be 7".)*

- A. Roger will choose the new contract
- B. Roger will choose the old contract
- C. **It is possible that Roger will be indifferent between the two options**
- D. All the answers are not correct

> [!success] Answer: C

Compare the daily income each contract pays for $h$ hours of work:

- Old: $20h$ for $h \le 7$; $140 + 30\,(h - 7)$ for $h > 7$.
- New: $25h$.

At $h = 7$ the old pays 140 and the new 175, so the new is better. At $h = 16$ the old pays $140 + 270 = 410$ and the new 400, so the old is better. The two lines cross where $140 + 30(h - 7) = 25h$, that is $5h = 70$, $h = 14$ (income 350).

![[PP09_q4_two_contracts.png|600]]

*The new contract pays more for fewer than 14 hours, the old contract pays more beyond 14 hours, and they pay the same at exactly 14 hours.*

Neither contract's budget set contains the other, so which one Roger prefers depends on his preferences: he picks the new contract if he wants to work fewer than 14 hours, the old if more. And it is **possible** to be exactly indifferent. That is why only C is a safe statement. A and B would hold only for particular preferences.

> [!warning] Printed number
> The 7 comes from the lecturer's footnote. With the original (unprinted) number the crossing point would be different; the structure of the argument is the same.

## Q5 — A higher extra wage and unchanged welfare

**Question.** The extra wage per hour that Roger gets for every hour working **above 9 hours** has increased, but his welfare (utility) did not change. What is correct?

- A. Because his welfare didn't change, his working hours also didn't change
- B. **Before the raise, Roger did not work more than 9 hours a day.**
- C. It is not possible that after the raise his welfare didn't change
- D. Roger will increase his working hours every day
- E. All answers are not correct

> [!success] Answer: B

The raise only changes the budget line for hours **above 9**. Two cases:

- If Roger worked **more than 9 hours** before, his old bundle sits on the part that moved up, so the old bundle is now strictly inside the budget set (he could get more consumption for the same hours). With monotonic preferences, he must be **strictly better off**. That contradicts "welfare unchanged".
- If he worked **9 hours or fewer**, the part of the budget line that matters to him did not move, so his choice and welfare stay the same.

So the only consistent case is that he worked at most 9 hours.

- **A) false:** welfare can stay the same while hours change (here they would not, but the claim "because welfare didn't change" is not a valid deduction in general).
- **C) false:** it is possible, and B describes exactly when.
- **D) false:** nothing says he will work more every day; if he worked 9 hours or fewer, his hours stay the same.

See [[Lec_06-Revealed Preference]] and [[Lec_08-Labor Supply]].

## Q6 — Slutsky compensation number

**Question.** The consumer's utility is $U(X,Y) = XY$. Her income is 1,000. $P_X = 2$ and $P_Y = 6$. The price of good $X$ increased to 4. The Slutsky compensation should be:

- A. 900
- B. 800
- C. 600
- D. 400
- E. **None of the above**

> [!success] Answer: E

Cobb-Douglas spends half of income on each good, so 500 goes to each:

$$
X_0 = \frac{500}{2} = 250 \qquad Y_0 = \frac{500}{6} \approx 83.3
$$

Slutsky compensation is the income change that lets her afford the **old bundle** at the new prices. At $P_X = 4$ the old bundle costs

$$
4 \cdot 250 + 6 \cdot 83.3 = 1000 + 500 = 1500
$$

so the compensation is $1500 - 1000 = \mathbf{500}$. This equals $\Delta P_X \cdot X_0 = (4 - 2) \times 250$: only the price of $X$ changed, so only the extra cost of the 250 units of $X$ has to be compensated.

500 is not among 900, 800, 600 or 400, so the answer is **E**, matching the official highlight. Options like 600 would result from using the wrong bundle.

See [[Slutsky Compensation]] and [[Lec_07-Substitution and Income Effects]].

## Q7 — A borrower and a higher interest rate

**Question.** It is known that the consumer is borrowing ($C_1 > Y_1$). The interest rate has increased.

- A. It is not possible that the consumer's welfare has increased
- B. It is possible that his welfare has increased
- C. His welfare might not change
- D. **B and C are correct**
- E. All answers are not correct

> [!success] Answer: D (B and C)

A higher interest rate pivots the budget line around the **endowment point** $(Y_1, Y_2)$. On the borrowing side (above $Y_1$ for period-1 consumption) the line gets **worse**: the old borrowing bundle is no longer affordable. On the saving side the line gets better.

- If he **stays a borrower**, he is worse off: the old bundle is lost and the new set on his side is smaller.
- If the rise is large enough that he **switches to saving**, he moves onto the improved side of the line. Then he **may** be better off than before (B), and by continuity there is a case where he ends up exactly as well off as before (C). Utility first falls as the rate rises, bottoms out when he is at the endowment point, and then climbs again as a saver, so it can cross the old level.

So A is wrong (it is possible for welfare to increase), and B and C are both possible.

> [!tip] Intuition
> This is the mirror of the "net seller of $X$, price of $X$ rises" argument: raising a price helps people who sell the good. A borrower is a buyer of present consumption. But a big enough rise turns him into a seller (saver), who gains.

## Q8 — Net seller of X, net buyer of Y

**Question.** A consumer's income is 24 units of $X$ and 16 units of $Y$. In the first period he sells 6 units of $X$ and buys 12 units of $Y$.

- A. If in the second period both $X$ and $Y$ prices increase by 10%, he will still consume 28 units of $Y$ and 18 units of $X$.
- B. If in the second period $P_X$ has increased, his welfare has increased.
- C. If in the second period $P_X$ has decreased, it is possible that his welfare increased.
- D. Answers A and B are correct
- E. **All answers are correct**

> [!success] Answer: E

His consumption in period one is $(X, Y) = (24 - 6,\ 16 + 12) = (18, 28)$. He is a **net seller of $X$** and a **net buyer of $Y$**.

- **A true.** If both prices rise by the same 10%, the relative price is unchanged and so is the value of his endowment relative to prices. The **budget set is identical**, so he consumes the same bundle: 18 units of $X$ and 28 units of $Y$.
- **B true.** When $P_X$ rises, a net seller of $X$ earns more from what he sells. His old bundle stays affordable and the set grows, so he is better off.
- **C true.** When $P_X$ falls, the old bundle becomes unaffordable, so he is worse off **if he stays a net seller** of $X$. But if the fall is large enough, he may become a net buyer of $X$ and then do better than before. Only "possible" is claimed, which is true.

Since A, B and C are all correct, so is E. See [[Lec_06-Revealed Preference]].

---

## Recap

| Question | Tool | Answer |
|---|---|---|
| Q1 | Income versus substitution effect | E |
| Q2 | Cobb-Douglas labor-leisure (24-hour day) | C (8 hours) |
| Q3 | Inelastic supply means effects cancel | B (normal) |
| Q4 | Compare two wage schedules (crossing at 14 hours) | C |
| Q5 | Old bundle on the moved part of the line | B |
| Q6 | Slutsky: $\Delta P_X \cdot X_0 = 500$ | E |
| Q7 | Borrower, rate rise, switching to saver | D (B and C) |
| Q8 | Net seller of $X$, net buyer of $Y$ | E |

## Related notes

[[Micro-Economics I]] · [[Lec_07-Substitution and Income Effects]] · [[Lec_08-Labor Supply]] · [[Lec_09-Intertemporal Choice]] · [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]] · [[PS_07-Labor Supply]]
