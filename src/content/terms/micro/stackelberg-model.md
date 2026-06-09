---
title: Stackelberg Model
subject: micro
aliases: ["Stackelberg leadership", "sequential quantity competition", "sequential pricing"]
related: ["cournot-competition", "best-response-function", "nash-equilibrium"]
source_folder: micro
ai_drafted: true
---

The **Stackelberg model** is sequential quantity competition. Firm 1 (leader) sets $q_1$ first; firm 2 (follower) observes and responds with its Cournot best-response $q_2(q_1)$. The leader internalises the follower's reaction by substituting it into its own profit and maximising. For linear demand with constant $MC = c$:
$$q_1^* = \frac{A-c}{2}, \quad q_2^* = \frac{A-c}{4}, \quad Q^* = \frac{3(A-c)}{4}.$$
The leader produces more and earns more than in Cournot; the follower produces less and earns less. **First-mover advantage**.

![](/images/micro/t2-stackelberg.png)

## When to use

Use Stackelberg whenever firms move sequentially in quantities — capacity-commitment games, industries with a dominant incumbent and a follower, sequential entry deterrence. The mechanical recipe: solve the follower's problem (the Cournot [[Best Response Function]]), substitute into the leader's profit, take the leader's FOC, then back out the follower's quantity. The commitment is the whole advantage — it only works because the leader moves first and cannot be undone.
