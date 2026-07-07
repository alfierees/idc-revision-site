---
title: "Lecture 10 — Data & Measurement"
subject: digital-marketing
week: 10
lecture: "10-class"
instructor: Ofir Richman
tags:
  - digital-marketing
  - lecture
  - class-slides
  - analytics
  - measurement
  - app-economy
  - metrics
  - attribution
  - biases
aliases:
  - "Digital Marketing Lecture 10"
  - "Lecture 10 — Ofir Richman"
in_scope: true
---

# Lecture 10 — Data & Measurement

> Part of: [[Digital Marketing]]
> **Topic 10 — "It's all about Data & Measurement"** · In-class slide deck (Ofir Richman, 2026A)
> Key concepts: [[KPI]], [[OMTM]], [[CTR]], [[CPA]], [[CLV]], [[ROI]], [[Opt-out Rate]], survivorship bias, correlation vs causation, mean vs median, the app-economy funnel, CPI / CAC / ARPU / LTV, attribution

> [!info] About this note
> This is a reconstruction of the **in-class deck**, which is slide-heavy — many slides are a title plus an image, a logo, or a video link, so the meaning came from Ofir's narration in the room. Where a slide already carried definitions or formulae (the app-economy metric slides, the biases slides, the attribution slides) those are reproduced **faithfully**. Where a slide was only a photo, chart or logo, the surrounding explanation is **reconstructed from standard statistics / marketing theory** to fill in what was likely said — those passages are flagged with a *"reconstructed"* note. Statistical concepts (survivorship bias, correlation-vs-causation, mean-vs-median) and metric definitions are **established knowledge** and are explained fully. Use it as a study scaffold, not a verbatim transcript.

---

## TL;DR
The lecture is about **measuring digital marketing properly**. It opens with the *data-first* argument — why [[ROI]] alone is a weak metric (the CFO cartoon) and why goals should be **SMART**. It then teaches the **biases and hazards** that make data lie: **survivorship bias** (Abraham Wald's WWII plane armour), **correlation vs causation** (ice-cream & sunglasses), **mean vs median** (the salary example), and the family of **selection / sampling biases**. Good data should be **contextualized, relevant and real-time**. The strategic idea is **[[OMTM]]** — the one metric that matters — with the famous Facebook / Dropbox / Twitter examples. The back half is the **app-economy metric stack**: the funnel from impression to in-app event, **User Acquisition (UA)** and **ASO**, the KPIs (conversion / deposit / churn), and the four cost-and-value metrics — **CPI, CAC, ARPU, CLTV/LTV** — used together to judge campaign efficiency. It closes on **retention / re-engagement**, **growth hacking**, and the hard problem of **attribution**.

---

# Part 1 — Why data, and how to frame goals

## The data-first argument: ROI's limits (the CFO view)
The deck opens with a Marketoon comic: a CFO keeps asking *"What's the ROI of our marketing?"* — and the marketer explains why **[[ROI]] is not the best metric** to lead with:

> [!quote] Why ROI is a weak headline metric (from the cartoon)
> - **It's too short-term focused.**
> - **There are attribution issues** — you can't cleanly credit a sale to one channel.
> - **It doesn't capture indirect revenue** (brand, word-of-mouth, future value).
> - So what *should* you look at? Half-jokingly: *"random comments I find on social media"* — i.e. no single number tells the whole story.

The teaching point: **ROI matters but is insufficient.** Digital marketing needs a *portfolio* of metrics ([[KPI|KPIs]]) at the right level, plus an eye on the biases that distort them — which is the rest of the lecture. *(The Chipotle "Doppelgänger" video slide that follows is a lead-in example of using data creatively; the slide was just the video link — intent reconstructed.)*

## KPIs — what they are
> [!example] KPI
> **[[KPI]] = Key Performance Indicators** — *the metrics you should follow and improve in order to succeed.* Not every number is a KPI; a KPI is one you actively steer by.

**What we measure, by channel** (reproduced from the deck's table):

| Channel | Metrics on the slide |
|---|---|
| **Email** | Opening rate · [[CTR]] (click-through rate) · Bounce rate · **[[Opt-out Rate|Opt-out rate]]** |
| **Websites** | Bounce rate · Traffic mix (new vs. returning) · Time on site · Pages visited |
| **Display** (banners) | [[CTR]] · [[CPA]] – cost per acquisition (action) · CPL – cost per lead |
| **Social** | Exposure / Reach · [[CTR]] · Engagement |

**Traffic types** (also from a slide): **Direct** (typed URL / undefined channel), **Referral** (a link on another site), **Organic** (found via a search-engine keyword), **Campaign** (a dedicated link with tracking parameters). Google Analytics is the tool shown for pulling all of this — audience & traffic, acquisition channels, behaviour, conversions, real-time, and custom dashboards.

## SMART goals
Before you measure, you set goals. The deck uses the classic **SMART** framework (credited to Mark Smiciklas):

> [!example] SMART
> - **S — Specific** — a single, clearly-defined objective.
> - **M — Measurable** — you can attach a number to it.
> - **A — Attainable** — realistic given resources.
> - **R — Relevant** — tied to the actual business goal.
> - **T — Time-based** — a deadline / window.

The link to the rest of the lecture: a goal is only "Measurable" if you've picked the **right metric at the right level** — which is exactly what OMTM and the app-economy KPIs are about.

---

# Part 2 — Biases and hazards (why data lies)

Data is only as good as the way it was collected and read. The deck walks through the classic traps. **These are established statistics concepts and are explained in full.**

## Survivorship bias — Abraham Wald and the WWII planes
> [!example] The plane-armour story
> During WWII, the US military looked at bombers **returning** from missions and mapped where they were riddled with bullet holes — concentrated on the **wings, fuselage and tail**, while the **engines** were relatively clean (the deck's table: engine 1.11 holes/ft², fuselage 1.73, fuel system 1.55, rest 1.8). The intuitive answer: *armour the areas with the most holes.*
>
> Statistician **Abraham Wald** gave the counter-intuitive — and correct — answer: **armour the areas with the fewest holes** (the engines). The planes in the sample were the ones that **survived**; planes hit in the engines never made it back to be counted. The holes you *can* see are on the non-fatal areas.

> [!quote] Definition on the slide
> **Survivorship bias** = concentrating on the people or things that made it past some selection process, and overlooking those that did not — typically because of their lack of visibility.

In marketing this is everywhere: studying only your **current customers** (not the ones who churned), only **successful campaigns**, only **users who completed onboarding**. The ones who dropped out carry the most important lesson, and they're invisible in your dataset.

## Correlation vs causation — ice-cream & sunglasses
> [!example] The classic confounder
> **Ice-cream sales** and **sunglasses sold** move together (a tight upward scatter). But neither *causes* the other — a hidden **third variable**, the **sun / hot weather**, drives both. Concluding "sell more sunglasses to boost ice-cream sales" would be nonsense.

The rule: **correlation does not imply causation.** Two metrics rising together may share a common cause, or be coincidental. Before you act on a relationship in your marketing data, ask what the **confounding variable** might be — and, ideally, run an experiment (A/B test) to establish cause.

## Mean vs median — the salary example
> [!example] Why the "average" can mislead
> Israeli salary data (Israel Institute of Social Security, Sept 2023) on the deck:
> - **Mean (average) salary: 13,267 NIS**
> - **Median salary: 8,045 NIS**
>
> The mean is **far above** the median because a small number of very high earners **drag the average up**. The median — the middle person — better describes what a *typical* person earns.

The hazard the deck highlights ("What does it Mean?"): headline changes in the **mean** can be driven by the tails, not the typical case. A slide shows the mean salary rising 10,873 → 11,373 NIS year-on-year — but a rise in the average doesn't necessarily mean the *typical* worker is better off. For skewed distributions (income, revenue-per-user, session length), **prefer the median** or report both.

## Selection / sampling biases
> [!example] Sampling bias
> **Sampling bias** = when randomization is not properly achieved during data collection — the data is **not selected in a representative manner**, so the sample doesn't reflect the population.

The deck maps the **types of sample selection bias**:
- **Self-selection** — participants opt in themselves (e.g. only enthusiastic users answer the survey).
- **Pre-screening** — the way subjects are filtered before the study skews who's included.
- **Selection from a specific area** — sampling from one region/segment and generalising to all.
- **Exclusion** — systematically leaving certain groups out.
- **Survivorship bias** — (as above) only the "survivors" are in the sample.

The common thread: if *who ends up in your data* is not random, every downstream conclusion is suspect.

## What good data looks like
> [!tip] The deck's three-word answer
> Good marketing data should be:
> - **> Contextualized** — interpreted against the situation it came from.
> - **> Relevant** — actually tied to the decision at hand.
> - **> Real-time** — fresh enough to act on now.

---

# Part 3 — OMTM: the One Metric That Matters

> [!example] OMTM
> **[[OMTM]] = the One Metric That Matters** — *a number today that becomes an important metric tomorrow (for growth).* The idea: at any given stage, focus the whole team on the **single metric** that best predicts future success, rather than drowning in a dashboard.

Its purpose (from the slide): **identifying which actions separate retained customers from lost ones** — to know **what drives customer value**, and therefore what drives business success.

> [!quote] Famous OMTMs (from the deck)
> - **Facebook** — a user reaching **7 friends within 10 days** of signing up.
> - **Dropbox** — a user who puts **at least 1 file in 1 folder on 1 device**.
> - **Twitter** — a user who visits Twitter **at least 7 times a month**.
>
> Each is a leading indicator of retention: hit that early behaviour and the user is far more likely to stick.

> [!note] Metric levels — don't confuse them
> **[[CTR]]** is a *campaign* metric; **[[KPI|KPIs]]** are the metrics you steer by; **OMTM** is the *one strategic-focus* metric for your current growth stage. Knowing which level a metric sits at is exactly what an exam "analyse a sponsored campaign" question tests.

---

# Part 4 — The app-economy metric stack

*The app-economy is the deck's worked domain for all of the above. The market-size charts (Sensor Tower / Statista) show it's huge — ~149 Bn new app downloads and ~$167 Bn in-app-purchase revenue in 2025, ~3.6 hours/day per user — but the exam-relevant content is the **funnel and the metrics**, below.*

## The funnel of the app economy
Each step converts a fraction of the previous one; each transition has its own rate (from the AppsFlyer funnel slide):

| Step | Conversion metric to the next step |
|---|---|
| **Impression** | → |
| **Click** | **[[CTR]]** click-through rate (a.k.a. TTR, tap-through rate) |
| **App Store** | Click-to-app-store rate |
| **Download** | App-store-to-download rate |
| **Install** | Click-to-install rate (**CTI**) |
| **In-app event** | Event conversion rate (**Event CVR**) |

The funnel is where **[[CTR]]** and conversion rates live — you optimise each transition to get more users to the bottom (a paying, engaged user).

## User Acquisition (UA) and ASO
> [!example] UA
> **UA = User Acquisition** — the process of **attracting new users** to a website, service, platform or app through marketing activity. *(In other industries this is called "customer acquisition".)*

Common UA strategies: **Paid media**, **Owned media**, and **ASO**.

> [!example] ASO
> **ASO = App Store Optimization** (the *organic* acquisition lever) — optimizing your app-store listing (headline, description, keywords, screenshots, etc.) to **boost store rankings** and make the app more discoverable and appealing. **Goal: maximise organic downloads.**
>
> ASO elements from the deck: **App name/title** (primary keywords), **subtitle/short description** (keyword-rich), **keywords field (iOS)**, **long description** (features/benefits/use-cases), **screenshots & preview videos**, **app icon** (memorable), and **ratings & reviews** (crucial for credibility and ranking).

## KPIs for UA
> [!example] The three UA rates (from the slide)
> - **Conversion rate** — the % of people exposed to your ad who go on to **download** the app.
> - **Deposit rate** — the % of users who made a deposit (in-app purchase) out of total installers. *Worked example on the slide:* 100 exposed → 10 install (**10%** conversion) → 2 deposit (**20%** deposit rate of installers).
> - **Churn rate** — the % of users who **uninstall** within a time frame. If it's high, maybe you're **attracting the wrong users**, or the app doesn't live up to the hype.

## Cost & value: CPI, CAC, ARPU, CLTV/LTV
These four are the heart of the exam-relevant content. **The first two are what a user *costs* you; the second two are what a user is *worth*.** You compare them to judge whether acquisition pays off.

> [!example] The four metrics (formulae from the deck)
> - **CPI — Cost Per Install** = `total campaign spend ÷ number of installs`. Per-campaign cost of one install.
> - **CAC — Customer (User) Acquisition Cost** = **everything you spend** to attract new users (*not just a single campaign*) ÷ number of acquisitions. Broader than CPI.
> - **ARPU — Average Revenue Per User** = `total revenue in period X ÷ number of users in period X`. A **short-term** metric — revenue over a specific window (a month, or N days post-install), not lifetime. *Netflix example: ARPU ≈ **$14.50/month** in the US (total monthly revenue ÷ subscribers).*
> - **CLTV / LTV — (Customer) Lifetime Value** = `total revenue generated since install date ÷ total number of users who installed on that date`. A **long-term / ongoing** metric — the total revenue a customer brings over their whole time with you. *Netflix example: $15/month × 12 × 5-year retention = **$900** lifetime value.*

> [!tip] Comparing CPI/CAC with ARPU/CLTV — the efficiency test
> **Does a high CAC mean bad news? Not necessarily.** Compare your **CPI and CAC** against **ARPU and CLTV** to see how profitable your installs really are. If a user's lifetime value comfortably exceeds what you paid to acquire them (**LTV > CAC**), a high CAC can be perfectly healthy. This ratio is the core of judging campaign efficiency. *(The Playtika slide — sponsoring a basketball team, a marathon, the RUNI "Game Changers" programme, artist collabs — is the case study of a company spending heavily on acquisition and brand; the slide was images only, so the specific CPI/CAC figures are not given.)*

---

# Part 5 — Retention, re-engagement, growth hacking, attribution

## Improving retention & re-engagement
Acquiring a user is wasted if they churn. The deck's best practices:

> [!example] Improving retention (best practices)
> - **Onboarding** — an outstanding first impression: effective first-time UX, clear expectations, intuitive design.
> - **Deep linking** — guide users straight to relevant content from the UA campaign (seamless ad → install → conversion).
> - **Owned media** — push notifications, email and SMS to drive engagement.
> - **Re-engagement campaigns** — consistent, value-adding, tailored messages across the lifecycle, starting within a **week** of installation.
> - **Benchmark comparison** — use benchmark reports (e.g. AppsFlyer) to build retention strategies.

> [!example] Bringing users back (re-engagement)
> - **Timely intervention** — start within a **week** of inactivity.
> - **Value-add** — incentives, new features, exclusive content.
> - **Segmentation** — tailor by *reason* for churn (didn't finish onboarding, abandoned cart…).
> - **Multi-channel** — combine push, email, SMS and even retargeting ads.
> - Message archetypes: *"We miss you"* discounts, *"New level unlocked"*, *"Reminders"* of incomplete actions.

## Growth hacking — the "Don't Delete Menu"
> [!example] Growth hacking to reduce churn
> **Growth hacking** = creative, low-cost tactics to increase retention and **reduce churn rate**. The deck's example is the **"Don't Delete Menu"** — the little interstitial an app shows *at the moment a user goes to uninstall*, offering a reason to stay (a discount, a fix, a reminder of value) instead of letting them leave silently. It intercepts churn at the exact decision point.

## The challenge: attribution
When many channels touch a user before they convert, **which one gets the credit?** That's the attribution problem — and there's *no easy answer.* Attribution tools shown: AppsFlyer, Adjust, Singular, Branch, Tenjin, Kochava, AppMetrica, Firebase.

> [!example] Attribution approaches (from the deck)
> **Touch-based** (simple, one touchpoint gets 100%):
> - **First Click** — 100% credit to the first contact. *Simple; but ignores everything after the first click and all offline activity.*
> - **Last Click** — 100% to the last click before conversion. *Simple; but ignores all earlier online + offline activity, and treats all clicks as equal.*
> - **Last View** — credit to the **last advert viewed**, not clicked. *Simple; but a view may be off-screen and the user may never have actually seen the "winning" ad.*
>
> **Model-based** (spread the credit):
> - **Fair / Weighted Share** — every touchpoint gets some credit. *Closer to reality (every touchpoint can add value); but interactions aren't equally valuable, and which channels are included is often a subjective/availability call.*

> [!note] The bigger taxonomy (summary slides, Buhalis & Volchek 2021)
> - **Touch-based** (first/last click or view) — simple to implement; insight per touchpoint; **not always accurate**.
> - **Model-based** (fair/weighted share) — more accurate estimates; insight across the journey; **needs high-quality data**.
> - **Experiment-based** (A/B testing, control groups) — gives **causal** evidence; but not always possible, and expensive/slow.
> - **Machine-learning-based (AI)** — scans marketing data for complex patterns; surfaces answers the team didn't think to ask; but needs large high-quality data and is complex to implement.
>
> Recurring challenges across all of them: **data accuracy, data integration, privacy and compliance**. Bottom line: *No easy answer.*

---

## What this note owns vs. the rest of the course

This note owns **data, measurement, biases, OMTM, the app-economy metric stack, retention/growth-hacking, and attribution**. The related pieces live elsewhere — one line each:

- **Media-acquisition metrics (CPM / [[CPC]] / [[CPA]]) and the POEM model** → [[Digital Marketing Lecture 3]].
- **The marketing funnel & conversion (strategy side)** → [[Digital Marketing Lecture 4]].
- **[[CLV]] as loyalty / relationship value** → [[Digital Marketing Lecture 8]].

---

## Exam takeaways
> [!tip] Direct MCQ themes from this lecture — study these hard
> - **[[OMTM]]** — "the one metric that matters"; know the definition *and* the Facebook (7 friends / 10 days), Dropbox (1 file / 1 folder / 1 device) and Twitter (7 visits / month) examples. **Direct MCQ.**
> - **[[CTR]]** — clicks ÷ impressions; know it sits at the **campaign / funnel** level (Click step). **Direct MCQ**, incl. the *"analyse a sponsored campaign"* metric-level question in [[2024 Exam B1]].
> - **Growth hacking** — creative, low-cost churn-reduction (the "Don't Delete Menu"). **Direct MCQ.**
> - **ARPU** — average revenue per user, a **short-term** metric; vs **CLTV/LTV**, the long-term one. Know the formulae and the CPI/CAC-vs-ARPU/CLTV **efficiency comparison** (LTV > CAC = healthy). **Direct MCQ.**
> - **Bounce rate & [[Opt-out Rate|opt-out rate]]** — bounce = single-page/quick-exit sessions (websites, email); opt-out = unsubscribes (email). **Direct MCQ.**
> - **Biases** — survivorship (Wald's planes: armour where there are *no* holes), correlation ≠ causation (ice-cream/sunglasses → common cause = sun), mean vs median (skew pulls the mean up).
> - **[[ROI]]** — know *why it's a weak headline metric* (short-term, attribution issues, misses indirect revenue).

## Related notes
- [[Digital Marketing]] — subject hub
- [[2024 Exam B1]] — the past paper this lecture most directly feeds (metric-level MCQs)
- [[Digital Marketing Lecture 3]] — POEM / media metrics (CPM · [[CPC]] · [[CPA]])
- [[Digital Marketing Lecture 4]] — campaign strategy / funnel / conversion
- [[Digital Marketing Lecture 8]] — engagement & relationship marketing / [[CLV]] / loyalty
- [[KPI]] · [[OMTM]] · [[CTR]] · [[CPA]] · [[CLV]] · [[ROI]] · [[Opt-out Rate]]
