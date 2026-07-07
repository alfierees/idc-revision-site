---
title: "Lecture 9 — Emerging Platforms & Trends"
subject: digital-marketing
week: 9
lecture: "09-class"
instructor: Ofir Richman
tags:
  - digital-marketing
  - lecture
  - class-slides
  - connected-tv
  - emerging-platforms
  - ai-marketing
  - location-based
  - voice-search
  - spatial-computing
aliases:
  - "Digital Marketing Lecture 9"
  - "Lecture 9 — Ofir Richman"
  - "DigitalMarketing-2026A-Lecture-9"
in_scope: true
---

# Lecture 9 — Emerging Platforms & Trends

> Part of: [[Digital Marketing]]
> **Topic 9 — Key Shifts (Part 2): where attention is moving next** · In-class slide deck (Ofir Richman, 2026A)
> Key concepts: [[FAST]], [[Linear Viewing]], [[SEO]], [[SERP]], [[Personalization]], [[CLV]]

> [!info] About this note
> This is a reconstruction of the **in-class deck**, which is slide-heavy — many slides are a title plus a logo, screenshot or chart, so the connective explanation came from Ofir's narration in the room. Where a slide carried body text (the CTV monetization and AI-marketing slides especially), it's reproduced faithfully. Where a slide was only an image, chart or product photo, the surrounding explanation is **reconstructed from standard theory and the slide's stated data** — those passages are flagged with a *"reconstructed"* note. Charts (Statista, Gartner, PwC, Activate) are described **at the level printed on the slide** — no figures are invented beyond what's shown. Use it as a study scaffold, not a verbatim transcript.

---

## TL;DR
This is the second "key shifts" lecture, and it's a tour of where attention (and ad money) is migrating. **(1) Connected TV** — the move from *linear* broadcast to *connected*, addressable streaming, its value proposition ("Netflix: no ads"), the five streaming monetization models (**SVOD, AVOD, TVOD, HVOD, [[FAST]]**), CTV metrics (VCR, CPCV) and ad formats. **(2) Three targeting frontiers** — **location-based** (IP, GPS/proximity, geofencing), **voice-based** (voice-search optimization, question-format content), and **visual search** (Google Lens, Gen Z). **(3) Spatial computing** — VR/AR/XR headsets and AI glasses, with a healthy dose of "not yet." **(4) AI-generated marketing** — the split between AI enthusiasts and skeptics, AI assistants as a fast-growing traffic source, Gartner's 2025–2028 predictions, and how to structure content so AI search engines cite you.

---

# Part 1 — Connected TV (CTV)

## Linear vs Connected TV
The core distinction the deck hammers home:

> [!example] Linear TV vs Connected TV
> - **Linear TV** — commercials aired on cable or broadcast during **scheduled programming**. *Different users see the **same** ad during the broadcast.* Broad reach, but it lacks precise targeting, gives limited insight and frequency control, and is expensive.
> - **Connected TV (CTV)** — ads delivered to viewers **streaming** content over connected devices (smart TVs, streaming sticks, consoles). *Different users see **different** ads during streaming.* It leverages **deterministic data like IP addresses** to target specific households, and offers real-time, granular measurement.

The one-line takeaway: CTV is **addressable TV** — the lean-back experience of the big screen combined with the targeting and analytics of digital. See [[Linear Viewing]] for the term itself; the broader linear-vs-on-demand platform landscape is set up in [[Digital Marketing Lecture 2]].

## The value proposition is changing
> [!quote] From the slide — the Netflix billboard
> A blank billboard reads **"YOUR AD HERE"**. Next to it, a Netflix billboard shows a TV and the line **"NOT HERE. No ads. No distractions. Just Netflix."**

The juxtaposition makes the point: the value proposition of premium streaming was originally *the absence of advertising*. That's exactly why the shift back toward ad-supported tiers (below) is such a big deal — the platforms that sold "no ads" are now building ad businesses. The **TV OS** slide (a smart-TV home screen studded with app tiles and a banner ad) reinforces that the TV itself has become an ad-serving platform. *Reconstructed connective tissue; the slides were images.*

> [!example] Benefits of CTV advertising (from the deck)
> - **Precision targeting** — target specific households via IP addresses and deterministic data, not broad demographics; better efficiency and ROI.
> - **Enhanced measurement** — track viewership to a one-to-one level using streaming-specific metrics; optimise in real time.
> - **Multi-channel retargeting** — device graphs link multiple devices to one household, so CTV plugs into a multi-channel strategy (build awareness on the big screen, retarget elsewhere).
> - **Improved / incremental reach** — reach cord-cutters and younger audiences (Gen Z, millennials) who watch **less** linear TV.
> - **Easier access to premium content** — small brands can bid on premium inventory (live sports, awards shows) via Netflix, Disney+, Prime Video at a fraction of linear cost.
> - **Increased viewability** — ads are often unskippable, on a large screen, alongside fewer ads.
> - **It's cookieless** — relies on 1st-party / probabilistic signals (IP, device IDs) rather than 3rd-party cookies, which are being phased out.
> - **Flexible pricing** — no long-term contracts; scale spend up or down like other programmatic channels.

## Streaming monetization models
This is the most testable list in Part 1. Five models, each defined by *who pays and how*:

> [!example] The five CTV / streaming monetization models
> | Model | Full name | How it makes money | Examples |
> |---|---|---|---|
> | **SVOD** | Subscription VOD | Users pay a **monthly/annual subscription** for unlimited access. The most widely used model; loyal viewer base. | Netflix, Amazon Prime, Disney+, HBO Max, Hulu |
> | **AVOD** | Advertising VOD | Content is **free**; the publisher earns from **advertising** (banners, sponsorships, paid placements — advertisers pay when the ad is viewed). | YouTube, TikTok, Instagram, Facebook |
> | **TVOD** | Transactional VOD | Viewers are **charged per single piece of content**. Pay-per-view (PPV), download-to-rent (24/48h), electronic sell-through (EST = pay once, keep forever). | Prime Video, Sky Sports Box Office, iTunes, LinkedIn Learning |
> | **HVOD** | Hybrid VOD | **Combines** models (e.g. a cheaper ad-supported subscription tier). Addresses competition and stretched household budgets; widens the audience and reduces churn. | Netflix ad tier ($6.99/mo), yes+ |
> | **[[FAST]]** | Free, Ad-Supported (Streaming) TV | **Free** and ad-supported, with a **linear-like** experience — you watch over the internet but content is scheduled with ad breaks and **you can't choose what to watch**. Available across devices. | Peacock, Roku TV, Pluto-style channels, N12 |

> [!tip] [[FAST]] is the one to nail
> **FAST = Free, Ad-Supported Streaming TV.** The trap is confusing it with AVOD: both are ad-funded and free, but **FAST is linear** (scheduled channels, no on-demand choice) while AVOD is on-demand. The deck's data slide notes that on FAST services consumers gravitate heavily toward **news programming (≈42% of viewing hours)**, with entertainment, nature and movies trailing. FAST is a direct past-paper MCQ — see *Exam takeaways*.

> [!info] Where the money is going (charts, described as shown)
> - **Activate forecast:** advertising revenue across select ad-supported SVOD services is projected to grow **~25% annually through 2027** (from ~$6.2B in 2023E to ~$15.3B in 2027E), with Netflix's ad revenue growing fastest (~59% CAGR off a small base). *Figures are the ones printed on the slide (Activate / WSJ).*
> - **PwC Global Entertainment & Media Outlook 2024–2028:** **Subscription VOD** revenue is the largest and still rising, **Advertising VOD** is climbing steadily, and **Transactional VOD** is flat — the growth is in subscriptions and ads, not per-transaction rentals. *Described at the slide's stated level; no exact endpoints invented.*

## CTV metrics
> [!example] Metrics to measure a CTV campaign (from the deck)
> - **Impressions** — total number of times an ad was **displayed / served** (scale and reach of the campaign).
> - **Reach** — number of **unique viewers** who saw the campaign over a period.
> - **Incremental reach** — the **additional unique viewers** a CTV campaign reaches **beyond** linear TV.
> - **VCR — Video Completion Rate** — the **% of viewers who watch the ad from start to finish** (attention / effectiveness).
> - **CPCV — Cost Per Completed View** — how much budget is spent **per ad watched to completion** (efficiency of paying only for full views).

The teaching point: CTV gives "granular insights advertisers could only dream of with linear." **Incremental reach** is the argument for adding CTV *on top of* linear (net-new audience), and **VCR / CPCV** are the completion-quality metrics you can't really get on broadcast.

## CTV ad formats
> [!example] Four common CTV ad formats
> - **In-stream (linear) ads** — play **before, during or after** content (**pre-roll, mid-roll, post-roll**), like a TV ad between scenes.
> - **Non-linear (overlay) ads** — static images, text or animation **on top of** the content **without interrupting** playback.
> - **Companion ads** — appear **alongside / surrounding** the video (text, images, rich media, skins) without disrupting the viewing experience.
> - **Interactive & shoppable ads** — engage the viewer directly: choose a storyline, play a mini-game, or **buy by scanning a QR code** from the ad.

---

# Part 2 — Location, voice & visual

## Location-based marketing
> [!example] Three key methods (from the deck)
> - **1. IP-address marketing** — every server, computer or mobile device has an **IP address**; you use that location information to target. The **simplest and broadest** location method.
> - **2. GPS / proximity marketing** — set a campaign around a specific **GPS point or radius** so you market to people within a certain distance of a spot. Can target residents, commuters or tourists; combine with interests/demographics; base it on **location history**.
> - **3. Geofencing** — use GPS to draw a **virtual boundary**; when a device **enters, leaves or lingers** inside it, a software response triggers (e.g. an app push notification). You can geofence a campus, a neighbourhood, even a **lecture hall**. Example on the slide: **weather targeting** — use live weather to trigger ads/promotions.

> [!tip] The IKEA example
> The deck plays an **IKEA** case as the worked example of proximity/geofencing done well — a location-triggered campaign that reaches people when they're physically near (or inside) the relevant zone. *The slide was a video link, so the specifics are reconstructed; the point is that geofencing turns physical presence into a marketing trigger.*

## Voice-based marketing
Voice assistants (**Amazon Echo/Alexa, Siri, Google Home**) shift search from typing to speaking, and the deck frames why that changes content:

> [!example] Optimising for voice search — "people speak differently than they type"
> | When **typing** | When **speaking / AI-ing** |
> |---|---|
> | Convenience | Ask **questions** |
> | **Short**, keyword-rich phrases | **Full statements** / natural sentences |
> | → keyword content | → **Create content as answers to questions** |

The strategic move: because voice and AI queries are conversational and question-shaped, structure your content as **questions and answers** so it matches how people actually ask. The deck points to **AnswerThePublic** ("discover what people are asking about…") as the research tool for finding the real questions to answer. *(This question-format idea returns, amplified, in the AI-marketing section below.)*

> [!warning] Direct MCQ — voice search
> The "people speak differently than they type → write content as answers to questions" idea is a **past-paper MCQ**. Nail the logic: voice/AI queries are **full, natural questions**, so **question-and-answer content** wins. See *Exam takeaways* and [[2024 Exam B1]].

## Visual search
> [!example] Google Lens / visual commerce (from the deck)
> - There are now **~25bn Google Lens searches every month** — point your camera at an object and search it.
> - **~80% of Gen Z relies on Google Search** for shopping discovery, research and decisions.

The shift: search is no longer only text or voice — it's **visual**. You photograph the shoes, the lamp, the outfit, and the engine finds visual matches and shopping results. For **visual commerce** this means product imagery, structured product data and being findable *by image* matter, especially for the Gen Z audience the slide calls out. *Reconstructed strategic implication; the slide stated the two stats.*

---

# Part 3 — Spatial computing

## VR / AR / XR
Spatial computing is the "what's next" frontier: immersive **VR/AR/XR** experiences via headsets and glasses. The devices on the deck:

- **Apple Vision Pro** — the flagship spatial-computing headset ($3,499); enthusiasts on X call it "UNREAL… I don't regret ordering a Vision Pro for even a second."
- **Meta** — cheaper VR headsets plus **holographic AR glasses** prototypes; the **Ray-Ban Meta** and **Oakley Meta** AI glasses line (from ~$239) and the September 2025 **Meta Ray-Ban Display**.
- **Google** — its "comeback" with **Android XR AI glasses** (frames from Gentle Monster and Warby Parker, Gemini built in) announced for release.

## Adoption scepticism — "not yet"
> [!warning] The deck's honest verdict: NOT YET
> For all the hype, the slides deliberately puncture it. Headlines shown: *"Report: Apple may stop producing Vision Pro"* (production cut), *"Please Don't Make Me Wear Mark Zuckerberg's Ugly Glasses — no one wants to wear a computer on their face."* The framing (**"It happens to the best…"**, **"NOT YET!"**) is that spatial computing is a **real but not-yet-mainstream** channel — worth watching, not yet worth betting the marketing budget on. The **human-premium / AI-fatigue** counter-current — why people push back on the always-on tech future — is developed in [[Digital Marketing Lecture 8]].

---

# Part 4 — AI-generated marketing

## Consumers in the AI age: enthusiasts vs skeptics
The deck uses **Statista's "4 types of consumers in the AI age"** to show the market is split:

> [!example] AI enthusiasts vs AI skeptics (Statista, described as shown)
> | AI **Enthusiasts** | AI **Skeptics** |
> |---|---|
> | "Now is the time to purchase" (~66% of US enthusiasts) | Low trust in news/media (~11%) and government |
> | Social media **is a shopping channel** (~42% use social commerce) | **Suspicious of personalization** (only ~22% feel AI offers match them) |
> | Open to **AI-generated influencers** (~52% of UK fans would buy on their recommendation) | "**Exhaustion prevails**" (~26% of German skeptics feel "exhausted") |
> | Correlate with wellness / GLP-1 use, "omni wellness" | Prefer sports/wellness **offline, in nature**, not virtual |

The marketing implication: **the same message won't land on both groups.** Enthusiasts reward convenience, social commerce and AI-generated creative; skeptics distrust personalization and want the human/offline. *(This maps onto the [[Personalization]] tension — powerful for enthusiasts, off-putting to skeptics.)*

## AI assistants as a growing traffic source
> [!info] E-commerce AI referral traffic (Statista chart, as shown)
> AI-assisted shopping "has officially arrived." Monthly e-commerce traffic **from AI sources** rose from just over **100,000 visits (Jan 2024)** to **more than 4 million (June 2025)** — described on the slide as a **~35-fold increase in under 18 months**, driven by ChatGPT, Perplexity and new e-commerce integrations. The discovery phase of shopping is **migrating from search engines and social to AI assistants.**

The strategic consequence runs straight into **AI search**: if buyers now start their journey inside an AI assistant, you need your brand to be the thing the assistant surfaces and cites.

## Gartner's marketing predictions (2025–2028)
> [!example] Gartner "Top marketing predictions" (from the deck)
> - **By 2026** — over a **third of web content** will be developed **exclusively for AI / search-engine consumption**.
> - **By 2027** — **mobile app usage will decrease by 25%** as audiences shift to using **AI assistants**.
> - **By 2027** — **85% of customer data** will be collected from automated interactions or ones led by **AI agents**.
> - **By 2028** — **half of B2C companies** using **dynamic pricing algorithms** will abandon them (to protect trust/brand differentiation).
> - **By 2028** — **30% of digital marketers' paid social budgets** will go to **subscription-based channels**.
> - **By 2028** — mass **"digital detoxing"** will push CMOs to spend **70% of marketing budgets on offline channels** to better engage consumers.

*These are Gartner's stated predictions, reproduced at the slide's level — not forecasts of my own.* The app-usage and offline-channel predictions tie directly back to the AI-assistant traffic trend above.

## Areas of AI application in marketing
> [!example] Where AI plugs into marketing (Statista AI Compass, 2025)
> **Content creation** (generate quality content fast) · **Personalized emails** (tailor to the individual) · **[[CLV]] forecasting** (predict future customer value) · **[[SEO]] optimization** (optimise content for search) · **Data analysis** (enhanced analytics) · **Sentiment analysis** (gauge public sentiment toward brands).

## AI-generated / AI-adjusted content: how to get cited by AI search
As AI Overviews reshape the [[SERP]], the deck's biggest practical block is a checklist for making content that **AI search engines can read, trust and cite**. The framing: bots aren't human — they can't skim; they need structure, clarity and authority.

> [!example] Optimising content for AI search (condensed from the deck)
> **Structure it for machines**
> - Old **[[SEO]]** principles still apply: a clean **site tree**, well-ordered headings (**H1 → H2 → H3 → H4**), and **detailed image alt-text**.
> - **Use FAQs / Q&A** — the single most effective move. AI **strongly prefers question-and-answer content** because it mirrors how people use AI (they ask; it answers). Put questions as **subheadings**.
> - Open the article with a **legend/summary** of topics; use **open tables and charts** (built in the editor, **not** uploaded as images) so AI can actually read the data.
> - **Clear categories** and a structured **"About" page** — otherwise AI may **fabricate** facts about you.
>
> **Differentiate & answer directly**
> - **Stand out** — say something with a unique angle; answer questions competitors under-serve.
> - **AI prefers clarity** — give **direct answers without jargon**; cover **follow-up questions** so AI links you to the whole query chain.
>
> **Build authority (E-E-A-T-style)**
> - Earn **brand mentions on authoritative sites** (Wikipedia, gov, academic, news); **model-training sources** (Wikipedia, Reddit, Quora) carry extra weight.
> - Support claims with **research and explicit citations** (name the source, link it).
> - Prefer **in-depth articles (600–700+ words)** over thin 250-word ones; **update frequently** (both Google and AI favour freshness).
> - An **authentic, first-person tone** ("I checked", "I researched") reads as more trustworthy.
> - Include **rich media with transcripts** (captions/SRT so crawlers know what's in a video) and **statistics in every article** — data makes you a source AI wants to cite.

> [!tip] The through-line of this lecture
> Voice search, visual search and AI search all point the **same way**: content should be structured as **clear, question-shaped, well-cited answers**. The "write content as answers to questions" idea from the voice-search slide is the same idea AI search rewards — that's why it shows up twice.

---

## Exam takeaways
> [!warning] Direct MCQ themes from this lecture
> - **[[FAST]]** — *Free, Ad-Supported Streaming TV*: **free + ad-supported + linear** (scheduled, no on-demand choice). Don't confuse with AVOD (free + ads but **on-demand**). Direct MCQ — see [[2024 Exam B1]].
> - **[[Linear Viewing]]** — linear TV = **same ad to everyone during a scheduled broadcast**; CTV = **different ads to different households while streaming**. The linear-vs-on-demand contrast is a recurring MCQ theme, set up in [[Digital Marketing Lecture 2]] and tested in [[2024 Exam B1]].
> - **Voice-based search** — people **speak in full questions**, so optimise with **question-and-answer content** ("create content as answers to questions"). Direct MCQ in [[2024 Exam B1]].
> - **Monetization models** — know **SVOD / AVOD / TVOD / HVOD / FAST** by *who pays and how*.
> - **CTV metrics** — **VCR** = video completion rate; **CPCV** = cost per completed view; **incremental reach** = net-new audience beyond linear.
> - **AI search** — structure content as **Q&A**, keep it **clear and cited**, build **authority** (brand mentions, freshness) so AI surfaces you.

## Related notes
- [[Digital Marketing]] — subject hub
- [[Digital Marketing Lecture 2]] — foundations, platforms & linear viewing (the linear-vs-on-demand groundwork)
- [[Digital Marketing Lecture 8]] — market shifts, engagement, native, STEPPS & AI fatigue (the human-premium counter-current)
- [[2024 Exam B1]] — the past paper that tests FAST, linear viewing and voice search
- [[FAST]] · [[Linear Viewing]] · [[SEO]] · [[SERP]] · [[Personalization]] · [[CLV]]

> [!info] Cross-links to the rest of the deck series
> [[Digital Marketing Lecture 3]] (POEM / media metrics / personas) · [[Digital Marketing Lecture 4]] (campaign strategy / funnel) · [[Digital Marketing Lecture 5]] (brand) · [[Digital Marketing Lecture 7]] (content marketing / journey) · [[Digital Marketing Lecture 10]] (data & measurement / OMTM / app metrics).
