---
title: GenAI in Innovation & Marketing Processes
subject: digital-marketing
week: 6
lecture: "06a"
instructor: Cillo & Rubera (2025)
tags:
  - digital-marketing
  - reading
  - generative-ai
  - innovation
  - co-creation
aliases:
  - "06a-Cillo & Rubera - Generative AI in Innovation & Marketing Processes"
in_scope: true
---

# Generative AI in Innovation and Marketing Processes: A Roadmap of Research Opportunities

> Part of: [[Digital Marketing]]
> **Topic 6 — Marketing Challenges / Startups** · Reading
> Citation: Cillo, P., & Rubera, G. (2025). Generative AI in innovation and marketing processes: A roadmap of research opportunities. *Journal of the Academy of Marketing Science, 53*, 684–701. https://doi.org/10.1007/s11747-024-01044-7
> Key concepts: [[Generative AI]], [[Foundation Model]], [[Innovation Process]], [[Co-Creation]], [[Market-Based Assets]]

---

## TL;DR
[[Generative AI]] (GenAI) is a new class of AI whose distinctive feature is the ability to create **novel and appropriate** content, which makes it a creativity tool rather than just a mechanical or analytical one. Cillo and Rubera give a plain-language technical overview of how GenAI is trained (self-supervised learning on huge unannotated datasets, producing [[Foundation Model]]s) and then build a research roadmap across the firm's four-stage [[Innovation Process]] — developing, testing, communicating, engaging. They then ask what the *repeated* use of GenAI will do to firms' [[Market-Based Assets]] and to consumers' skills, preferences and role. Validated through manager interviews, the paper's core worry is that GenAI may simultaneously empower and erode marketing's contribution to firm value.

## Why It's on the Reading List
It frames the central Topic 6 challenge — how an emerging technology disrupts marketing strategy, capabilities and the firm-consumer relationship — and is the conceptual anchor for exam questions on GenAI's opportunities, risks and the future role of marketing.

## Background & Research Question
A McKinsey estimate cited by the authors projects marketing as the firm function most affected by GenAI, with productivity gains up to 15% of total marketing spend (~$463bn annually). Prior AI-in-marketing roadmaps (Davenport et al., 2020; Huang & Rust, 2021; Puntoni et al., 2021) covered **mechanical AI** (repetitive tasks) and **thinking AI** (analytical decisions); Huang & Rust (2023) added GenAI as the most advanced **feeling AI**. The gap: no roadmap on GenAI's *innovation* implications that bridges both the consumer and firm levels. The paper aims to (a) explain the technology, (b) map how firms can harness it across the innovation process, and (c) anticipate the consequences of widespread use.

## Key Concepts & Definitions

> [!info] Definition — Generative AI
> A group of AI models — deep neural networks pre-trained on large datasets to form a [[Foundation Model]], then fine-tuned to follow human instructions — designed to produce new content (text, images, video).

> [!info] Definition — Foundation Model
> A large, pre-trained model used as a base for developing more specialised, task-specific models. **Large Language Models (LLMs)** are a subset trained to interact via natural language.

> [!info] Definition — Self-supervised learning
> Training without annotated datasets: parts of the data are removed and the model learns to *predict* the missing parts. This lets training scale to vast datasets and yields deeper contextual understanding, improving generalisation versus older **supervised** (label-dependent) AI.

> [!info] Definition — Creativity (novel + appropriate)
> GenAI output is useful because it is both **novel** (the stochastic, prompt-conditioned generation connects weakly related concepts — the *associative theory* of creativity) and **appropriate** (trained on huge data, the model has memorised what humans deem fitting).

Key technical levers users can control:

| Lever | What it does |
|---|---|
| Prompt | Conditioning input that biases which next token is selected |
| Temperature | Randomness/creativity; 0 = deterministic, higher = more diverse and verbose output |
| top_p (nucleus) sampling | Restricts selection to the top probability mass of tokens (e.g. 0.2 = top 20%) |

## Main Arguments / Findings

GenAI is inherently random and conditional on the prompt, so the same prompt yields unique outputs each time — which is why GenAI content is hard to detect. Training is hugely expensive (GPT-4 estimated >$100m), so firms no longer compete on building algorithms but on **harnessing existing foundation models**.

> [!warning] Current limitations
> GenAI produces **hallucinations** — plausible but factually wrong/nonsensical output (e.g. Google's Bard demo error wiped ~$100bn off the stock; Meta's Galactica withdrawn after 3 days). It also has weak **causal-inference** capability, attributed to the absence of physical/grounded data. It works best where there is no single right answer (artistic content, new product ideas). Multimodal models (e.g. GPT-4 Vision) may narrow this gap.

**Emergent capabilities** the authors tabulate include idea generation (GenAI ideas score higher on purchase intention than MBA students' — Girotra et al., 2023), divergent thinking (beats humans on average, not the best humans), analogical reasoning (associative, child-like), inductive reasoning (matches humans) and weak causal-inference.

## Framework / Model

The paper depicts innovation as a **circular four-stage process**, proposing consumer-level and firm-level research questions at each.

| Stage | GenAI's role & key tension |
|---|---|
| **Developing** | GenAI can *decouple* generation (it produces options) from exploration (consumer refines). Consumers either **conform** (outsource generation; risk: everyone anchors on similar ideas → low collective creativity) or **diversify** (extra effort to differ → more creative). Firms must design co-ideation platforms to reduce the **AI-conformity effect** (e.g. "response engineering" — GenAI asks questions rather than gives answers). |
| **Testing** | **Algorithmic fidelity** (Argyle et al., 2023): conditioning an LLM on a demographic profile reproduces that group's survey distributions, so GenAI can partly *replace* human subjects/experts in market research (sloped demand curves, perceptual maps, expert text labelling). Boundary conditions depend on training data; authors urge *assembling* multiple LLMs rather than picking the single best. |
| **Communicating** | Two areas: (1) **Persuading** — link objective LLM parameters (temperature, top_p) to subjective persuasiveness; verbosity may raise perceived quality. (2) **Disclosing** — governments/platforms increasingly require disclosure of AI content. **Algorithm aversion** may be *lower* for GenAI (more empathic, tailored) yet *higher* because creativity is seen as quintessentially human. Brand associations (e.g. brand innovativeness, authenticity, underdog status) moderate the effect of disclosure on brand equity. |
| **Engaging** | GenAI lowers the creativity barrier so more consumers can join **task-based customer engagement** initiatives (e.g. Coca-Cola's "Real Magic" with DALL·E). But engagement depends on the mental effort that produces **psychological ownership** — so over-use of GenAI may *reduce* engagement. Firms face a reach-vs-ownership trade-off. |

**Consequences of repeated use (second domain):**

- *Post-GenAI firm* — GenAI may make key marketing capabilities (NPD, communication) less rare and more imitable (substitution), OR require complementary, up-to-date [[Market-Based Assets]] and a "human-in-the-loop" (complementarity). Evidence is mixed. Whether a firm substitutes or complements depends on strategy: **cost leaders** use off-the-shelf GenAI to cut cost (LLMs achieved 91% saving on SEO content — Reisenbichler et al., 2022); **differentiators** may fine-tune models and give marketing a larger role.
- *Post-GenAI consumer* — delegating creativity to GenAI may, like GPS did to navigation, erode consumers' own creative cognition and shift their role away from **co-creator** (Prahalad & Ramaswamy, 2004) — raising the question of what a less-creative consumer will value.

## Methodology
Conceptual/theoretical roadmap paper (no dataset). Research questions were **validated via in-depth interviews** with managers across high-end fashion, FMCG, insurance and utilities, which surfaced the second-domain concerns about capabilities and consumer change.

## Implications for Marketers
- Compete on *prompting and orchestration* of foundation models, not on building them.
- Design co-ideation so GenAI stimulates rather than anchors consumers (response engineering).
- Use GenAI as a fast, low-cost market-research surrogate — but validate against product category, brand and involvement level.
- Treat disclosure strategically: align the framing of GenAI use with brand associations.
- Protect [[Market-Based Assets]]: balance fine-tuning on proprietary data against the privacy/competitive-advantage risk of sharing it.
- Watch three frontier risks: **privacy**, **disinformation** (cheap mass content can fuel anti-brand campaigns), and the inverse agenda — "Marketing for GenAI" (using marketing's bias-mitigation tradition to calibrate prompts).

## Exam Takeaways
> [!tip] Likely exam points
> - GenAI = **feeling AI**; its novelty is content *creation*, distinct from mechanical and thinking AI.
> - Self-supervised learning + Transformer + scale → foundation models; output is random + prompt-conditioned.
> - Creativity = novel **and** appropriate; hallucinations and weak causal reasoning are the key limits.
> - Four-stage circular innovation process: developing, testing, communicating (persuading/disclosing), engaging.
> - Key tensions to name: AI-conformity vs diversification; algorithmic fidelity in testing; algorithm aversion vs disclosure; psychological ownership vs reach.
> - Substitution vs complementarity of marketing capabilities depends on cost-leadership vs differentiation strategy.

## Summary
- GenAI creates novel, appropriate content via prompt-conditioned, stochastic foundation models.
- Firms harness it across a circular innovation process but face conformity, disclosure and ownership tensions.
- Repeated use could erode or complement marketing's contribution to firm value, and reshape the consumer's creative role.
- The paper is a roadmap of research questions validated by manager interviews, not an empirical test.

## Related Notes
- [[Digital Marketing]] — subject hub
- [[Generative AI]] — the focal technology
- [[Foundation Model]] — technical basis (LLMs, Transformers, self-supervised learning)
- [[Co-Creation]] — consumer input across the innovation process
- [[Market-Based Assets]] — link to firm value and competitive advantage
- [[Algorithm Aversion]] — consumer resistance to disclosed AI use
