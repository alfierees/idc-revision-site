---
title: Bridging Marketing Theory and Big Data Analytics — The Taxonomy of Marketing Attribution
subject: digital-marketing
week: 2
lecture: "02a"
instructor: Ofir Richman
tags:
  - digital-marketing
  - reading
  - marketing-attribution
  - customer-journey
  - multi-touch-attribution
aliases:
  - "02a-Buhalis & Volchek - Taxonomy of Marketing Attribution"
in_scope: true
---

# Bridging Marketing Theory and Big Data Analytics: The Taxonomy of Marketing Attribution

> Part of: [[Digital Marketing]]
> **Topic 2 — Media Strategy, Platforms & Channels** · Reading
> Citation: Buhalis, D., & Volchek, K. (2021). Bridging marketing theory and big data analytics: The taxonomy of marketing attribution. *International Journal of Information Management, 56*, 102253.
> Key concepts: [[Marketing Attribution]], [[Customer Journey]], [[Touchpoint]], [[Multi-Touch Attribution]], [[Data-Driven Attribution]], [[Purchase Funnel]]

---

## TL;DR
As consumers touch a brand across many channels and devices, allocating credit for a conversion to the right touchpoint becomes hard — and the *terminology* for doing so ("multi-channel," "omni-channel," "advanced," "algorithmic") has become inconsistent and overlapping. This **conceptual paper** builds a **five-dimensional taxonomy** that systematically names and describes any [[Marketing Attribution]] method. It combines a deductive conceptual framework (rooted in consumer decision-making and the capabilities of big-data analytics) with an inductive systematic literature review of 62 sources. The taxonomy's punchline: even today's "advanced" methods still fail to systematically capture the *context* of decision-making, so attribution remains imperfect.

## Why It's on the Reading List
It is the analytics backbone of **Topic 2 (Media Strategy, Platforms & Channels)**: it teaches *how marketers decide which channel/touchpoint earned a sale*, why single-touch models (first/last click) are biased, and the vocabulary (single- vs multi-touch, rule-based vs data-driven, cross-digital/platform/channel) you need to talk precisely about measurement.

## Background & Research Question
Mobile and wearable devices have exploded the number of [[Touchpoint]]s between consumers and brands. Big data and advanced analytics let firms estimate marketing ROI far more granularly — but rapid innovation has produced **heterogeneous, overlapping terms** with no unified scheme. No framework yet exhaustively summarises all available attribution methods and their capabilities. **Research aim:** develop a comprehensive tool for *naming and describing* marketing attribution methods, and assess their ability to realistically allocate value along the [[Customer Journey]].

## Key Concepts & Definitions

> [!info] Definition — Marketing attribution
> A strategy of determining the value of marketing communications and **allocating that value to the touchpoints** along a customer journey. Its distinctive feature is the use of individual-level, high-frequency big data plus advanced analytics.

> [!info] Definition — Touchpoint
> A single interaction between a customer and a brand, experienced via a channel as a marketing communication (e.g. an ad). Each touchpoint can have a **positive, negative or neutral** effect on the decision to convert.

> [!info] Definition — Carryover vs spillover effects
> **Carryover** = a prior interaction's overlapping effect *within one channel*. **Spillover** = the overlapping effect *between different channels*. Touchpoint sequences can be synergic or antagonistic — exposure is not simply cumulative.

The conceptual framework (Fig. 1) defines attribution by **facilitators** (the data and analytics that enable it) and **capabilities** (what it can account for in consumer behaviour), all assessed against the [[Marketing Mix]] and [[Purchase Funnel]] (awareness → interest → desire → action).

## Main Arguments / Findings — The Five-Dimensional Taxonomy

The taxonomy is a **second-order hierarchy**: first order = facilitating parameters + resulting capabilities; second order = mutually-exclusive classes. Any real method is described by picking one class on each of the five dimensions.

| # | Dimension | Classes | What it captures |
|---|---|---|---|
| 1 | **Number of touchpoints** (capability: sequential journey) | Single-touch vs **Multi-touch** | How many touchpoints receive credit |
| 2 | **Value allocation principle** (capability: cumulative effect) | Fractional vs **Incremental (synergic)** | Whether credit ignores or accounts for synergy between touchpoints |
| 3 | **Accounted channels** (facilitator: data infrastructure) | Cross-digital → Cross-platform → **Cross-channel** | Range of channels/devices/online-offline included |
| 4 | **Value determination technique** (facilitator: data infrastructure) | **Rule-based** (standardised) vs **Data-driven** | Whether weights are heuristic or empirically derived |
| 5 | **Computational technique** (facilitator: functionality) | **Standardised** vs **Custom** | Whether the model uses fixed formulas or is fitted to the dataset |

### Dimension detail

**1. Single- vs multi-touch.**

- **Single-touch** (a.k.a. single-channel) assigns the *whole* conversion value to one touchpoint. Earliest forms: **first-click** and **last-click**. Simple and available, accurate for *short* journeys, but biased for long ones (ignores timing, sequence and causality).
- **Multi-touch** distributes value across several touchpoints — more realistic, generally more accurate.

**2. Fractional vs incremental.**

- **Fractional** assigns proportionate value to each touchpoint *independently* of the others (easy ROI; often equated with "rule-based"). Does not capture synergy.
- **Incremental / synergic** accounts for the cumulative effect *between* touchpoints — more realistic but needs complex modelling.

**3. Channel scope.**

| Class | Data source |
|---|---|
| Cross-digital | Several **digital** channels only (most common today) |
| Cross-platform (cross-device) | One individual's data across **multiple devices** (PC + mobile, etc.) |
| Cross-channel ("omni-channel") | **Online and offline** channels combined |

**4. Rule-based vs data-driven.**

- **Rule-based** applies predefined assumptions: e.g. **U-shape** (40% first + 40% last + 20% middle), **time-decay** (more weight the closer to conversion), **weighted/linear**. Simple, cheap, no advanced analytics — but heuristic and blind to journey dynamics.
- **Data-driven** uses individual-level data to *empirically* determine each touchpoint's role (regressions, machine learning, cooperative game theory). More accurate, especially for long journeys.

**5. Standardised vs custom (new terms proposed).** The authors propose **"standardised attribution"** (fixed/predefined computation) and **"custom attribution"** (model fitted to the specific dataset) to replace the muddled use of "rule-based," "algorithmic" and "data-driven." Custom attribution can model all events, customer heterogeneity and overlap — but is costly and sometimes performs no better than simple rules.

> [!example] Reading the map (Fig. 3)
> The five dimensions form a map: identify one parameter and the likely others follow. E.g. a **cross-device** method "will likely be multi-channel, custom-made and data-driven, but can apply either fractional or incremental value allocation."

> [!warning] What current methods still miss
> No reviewed method systematically accounts for the **context** of decision-making (internal context: demographics, culture, personality; external context: location, time, weather, social setting). "Advanced" is often used as a marketing label, not a precise capability. The full analytical capacity of attribution has **not yet been met**.

## Methodology
Conceptual paper using **taxonomy development** (Nickerson et al., 2013), combining:

- **Deductive** reasoning → conceptual framework from big-data analytics + consumer behaviour theory.
- **Inductive** reasoning → **systematic literature review**: keyword search of academic databases (Scopus, ScienceDirect, Google Scholar) plus industry white papers and vendor reports, supplemented by snowball sampling. Located 164 academic + 31 industry sources; after screening (post-2005, relevance, quality), **62 sources** were analysed via **qualitative content analysis** with two rounds of descriptive coding (by title, then by description) and triangulation.

## Framework / Model
The output is the **taxonomy (Fig. 2)** + the **five-dimensional map (Fig. 3)**. Three hypothesised customer-journey cases illustrate why context matters:

- **Health insurance** — long, multistage, emotional, credence service; company-initiated communications get over-credited because attitudinal loyalty isn't modelled.
- **Low-cost airline tickets** — short, utilitarian + relational + hedonic motives; value attributable very early at the "desire" stage.
- **Dining choice** — review/metasearch driven; external context (weather, traffic, social party) can disrupt earlier touchpoints, making allocation nearly impossible.

## Implications for Marketers
- Choose attribution by journey length: single-touch is fine for short journeys; long, multi-channel journeys need multi-touch, data-driven, cross-channel methods.
- Don't trust the word "advanced" or "omni-channel" — describe a method by all five dimensions.
- Recognise that even custom/data-driven attribution can't yet capture context, so treat outputs as estimates and complement with judgement.
- Cross-platform and cross-channel attribution improve as cloud and account-synchronisation grow; offline value attribution is still evolving.

## Exam Takeaways
> [!tip] Likely exam points
> - **Five dimensions:** (1) single vs multi-touch, (2) fractional vs incremental, (3) cross-digital/platform/channel, (4) rule-based vs data-driven, (5) standardised vs custom.
> - First-click / last-click = simplest single-touch; **U-shape** and **time-decay** are classic rule-based weightings.
> - Single-touch is biased for **long** journeys (ignores timing, sequence, causality).
> - Authors *coined* "standardised" and "custom" attribution to fix terminological overlap.
> - Key limitation: no method systematically models the **context** of decision-making.

## Summary
- Attribution = allocating conversion value across customer-journey touchpoints.
- The paper's contribution is a unifying five-dimensional taxonomy + map.
- Methods range from simple rule-based single-touch to complex custom data-driven multi-touch.
- Terminology is messy; context-awareness is the frontier attribution hasn't reached.

## Related Notes
- [[Digital Marketing]] — subject hub
- [[02b-Moorman et al - Why Marketers Are Returning to Traditional Advertising]]
- [[Marketing Attribution]]
- [[Customer Journey]]
- [[Purchase Funnel]]
- [[Multi-Touch Attribution]]
