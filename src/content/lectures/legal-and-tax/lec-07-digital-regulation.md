---
title: Digital Regulation
week: 7
semester: 1
year: 2
academic_year: "2025-26"
course: Legal and Tax Aspects of Entrepreneurship
lecture: "Session 7 — Digital Regulation: Privacy, the GDPR & the EU Digital Single Market"
instructor: "Dr. Yuval Reinfeld (course convenor) — 'Legal Product' guest session on privacy & digital regulation"
date: 2026-06-30
tags:
  - legal-and-tax
  - digital-regulation
  - privacy
  - gdpr
  - data-protection
  - eu-law
  - ai-act
  - cookies
  - legal-product
aliases:
  - Legal & Tax Session 7
  - Digital Regulation
  - GDPR
  - Data Protection
  - Privacy Regulation
  - EU Digital Single Market
  - Legal Product
subject: legal-and-tax
in_scope: true
---

# Digital Regulation

> Part of: [[Legal and Tax Aspects]] | Key concepts: [[GDPR]], [[Personally Identifiable Information]], [[Privacy by Design]], [[Data Controller]], [[Data Subject]], [[Consent (GDPR)]], [[Data Subject Rights]], [[Adequacy Decision]], [[Schrems II Case]], [[ePrivacy Directive]], [[EU AI Act]]

> [!abstract] Why this lecture matters
> Every digital product is also a **legal product**. The login form, the cookie banner, the "I agree" checkbox, the place where data is stored — each is a **legal decision rendered in UI**. For a founder this is not abstract: ship a product that touches the personal data of an EU resident and you are inside the ==General Data Protection Regulation (GDPR)==, exposed to fines of up to **€20 million or 4% of global annual turnover**, *whichever is higher*. This session maps the whole landscape of ==digital regulation==, then drills into its centrepiece — the **GDPR** — covering who it binds, the principles it imposes, the rights it gives individuals, how data may cross borders, and the landmark court cases (Google Spain, Schrems I & II, Meta) that turned the text into hard law. It closes with the next regulatory wave: the **EU AI Act**.

---

## 1. Law Lives Inside the Product — "Legal Product"

The lecture opens with a deceptively simple question: **how are contracts and legal rules reflected in product design?**

> [!info] The core idea ^legal-product
> A ==Legal Product== is the recognition that legal obligations are **implemented in the product itself**, not just in a contract filed away in a drawer. When you design a sign-up flow, a consent dialog, a privacy policy link, or a data-deletion button, you are **operationalising the law**. Compliance is a **design requirement**, on the same footing as performance or usability. ^def-legal-product

> [!tip] Intuition — the cookie banner is a statute in disguise
> That pop-up asking you to "Accept All / Reject All / Customize" cookies is not a marketing choice — it is the **ePrivacy Directive and the GDPR's consent rule made visible**. The "Forgot password?" link, the "Download your data" button, the granular ad-consent toggles: each exists because a specific article of law demands it. Once you see products this way, regulation stops being a legal afterthought and becomes part of the **spec**.

---

## 2. The Five Domains of Digital Regulation

"Digital regulation" is an umbrella. The lecture breaks it into five distinct fields, each with its own body of law.

> [!info] The five domains ^five-domains
> 1. ==Privacy== — protection of personal data (the GDPR's home turf; the bulk of this lecture).
> 2. ==Cyber & Information Security== — obligations to keep systems and data secure.
> 3. ==Platform Transparency== — duties of online platforms to be open about content, ranking, and ads (the **DSA**'s domain).
> 4. ==Artificial Intelligence== — governance of AI systems (the **AI Act / AIA**).
> 5. ==Digital Competition== — antitrust for digital gatekeepers (the **DMA**'s domain).

> [!tip] Why split it this way?
> Each domain answers a *different* failure of the digital economy. Privacy law answers the **loss of control over personal data**; security law answers **breaches and attacks**; transparency law answers **opaque platforms and algorithms**; AI law answers **automated harm and discrimination**; competition law answers **monopoly gatekeeping**. A single product (say, a social network) can be regulated under *all five at once* — which is why founders need the map, not just one corner of it.

---

## 3. The EU Digital Single Market — Three Generations of Law

The EU is the world's most aggressive digital regulator. Its strategy is to do for *data and digital services* what the original Single Market did for *goods*: replace 27 national rulebooks with **one mandatory, uniform standard**.

> [!info] The Digital Single Market ^digital-single-market
> Launched in ==2015==, the ==EU Digital Single Market== aims to create **mandatory and uniform rules and standards** across all member states — the same logic as the traditional Single Market for goods, applied to the digital economy. Its legislation arrives in three "generations": ^def-dsm

| Generation | Instrument(s) | What it governs | Status |
|---|---|---|---|
| **First** | ==GDPR== (General Data Protection Regulation) | Personal **data protection** | In force since 2018 |
| **Second** | ==DSA== (Digital Services Act) + ==DMA== (Digital Markets Act) | Platform **transparency** (DSA) & **digital competition** (DMA) | Adopted 2022 |
| **Third** | ==AIA== (AI Act) | **Artificial intelligence** governance | Adopted 2024 |

> [!tip] Why "uniform and mandatory" is the whole strategy
> Fragmented national rules are a tax on cross-border business: a startup would need 27 different privacy compliance regimes to sell across Europe. By forcing **one** standard, the EU lowers the internal cost of doing digital business *and* exports that standard outward (see §4). A ==Regulation== (like the GDPR) is **directly binding** in every member state without national transposition — unlike a ==Directive== (like ePrivacy), which each state must enact into its own law. That distinction is why the "GDPR" is uniform but national cookie rules still vary slightly.

---

## 4. The Global Reach of the GDPR — The "Brussels Effect"

The GDPR did not stay in Europe. It became the **template the world copied**.

> [!info] GDPR-inspired laws worldwide ^brussels-effect
> - **United States** — no single federal law, but **19 state privacy laws** (California [CCPA/CPRA], Virginia, Colorado, Connecticut, Utah, Texas, Oregon, and more).
> - **Brazil** — ==LGPD== (Lei Geral de Proteção de Dados).
> - **China** — ==PIPL== (Personal Information Protection Law).
> - **Japan** — ==APPI== (Act on Protection of Personal Information).
> - **India** — the ==DPDPA 2023== (Digital Personal Data Protection Act).
> - **Canada** — PIPEDA (federal) and Québec's Law 25.
> - **South Africa** — the POPI Act.
> - **Israel** — ==Amendment 13== to the Privacy Protection Law.

> [!tip] Why one EU law reshaped global products — the Brussels Effect ^def-brussels-effect
> When the largest single market in the world sets a standard, it is **cheaper for global companies to apply that standard everywhere** than to build a separate, weaker product for each region. So a US startup builds GDPR-grade privacy into its product *by default* — and other governments, seeing their citizens already protected by EU rules and wanting "adequacy" status (§9), copy the text. This export of EU standards through market power is the ==Brussels Effect==. For a founder it means: **build to GDPR and you are largely compliant worldwide**; ignore it and you're locked out of Europe.

---

## 5. Before the GDPR — Why Privacy Law Had to Change

To understand *why* the GDPR is so strict, you need the problem it was built to solve: technology shifted the **balance of power** decisively toward the companies that hold our data.

> [!info] The data explosion that broke the old model ^data-explosion
> ==Cloud computing== let firms process data at **massive, centralised scale** for almost no marginal cost. The numbers (as of 2024) make the point:
> - Facebook reports **~3 billion** active users; TikTok **~1 billion**.
> - Google handles **>99,000 searches per second** (~8.5 billion/day).
> - In 2020, fitness-tracker companies alone generated **~28 petabytes** of data (≈14× the entire US academic library system).
>
> Modern society leaves a permanent **digital trace** — and inside that traffic "lie our rights and our personal information."

> [!warning] The conceptual shift — privacy is no longer a property right ^privacy-shift
> The old model treated privacy as **personal control** over your own information — something you "owned" and could fence off. That model collapsed once tech giants began holding **astronomical** volumes of personal data that individuals cannot realistically monitor or control. The regulatory response reframes the problem: privacy can no longer be left to individual vigilance, so the **burden shifts to the companies**. They must "take privacy into account" structurally — the doctrine of ==Privacy by Design & by Default==. ^def-privacy-by-design

> [!tip] Why "by Design & by Default" is the keystone idea
> ==Privacy by Design== means privacy protections are **engineered into the product from the start**, not bolted on after launch. ==Privacy by Default== means the **most privacy-protective settings are the out-of-the-box state** — the user shouldn't have to hunt through menus to *not* be tracked. This is codified in **Article 25** of the GDPR and it is the deepest link back to §1: privacy compliance is a **product-design discipline**, the responsibility of engineers and PMs, not only lawyers.

---

## 6. GDPR Fundamentals — What, When, and Who

> [!info] The GDPR at a glance ^gdpr-basics
> - **What:** the ==General Data Protection Regulation== — the first comprehensive global framework for protecting **personal data**. ^def-gdpr
> - **When:** adopted **April 2016**, in force from **25 May 2018**.
> - **Territorial scope (Article 3):** applies to any organisation **established in the EU**, *and* to any organisation anywhere that **processes the personal data of EU residents** (e.g. offering goods/services to them or monitoring their behaviour). This is its ==extraterritorial reach==. ^def-extraterritorial
> - **Material scope:** covers the **processing of personal data** of individuals — including **direct identifiers** (your name) and **indirect identifiers** (data that, combined, can single you out).
> - **Who is bound:** *every* entity that processes personal data — **companies, public institutions, and other bodies alike**. This is broader than the US sectoral model, which regulates only specific industries (health, finance, etc.).

> [!warning] Extraterritoriality is the trap founders fall into ^extraterritorial-trap
> You do **not** need an office, a server, or a single employee in Europe to be bound by the GDPR. If an EU resident can sign up for your app, you are processing EU personal data and you are **in scope** — full stop. A startup in Tel Aviv or San Francisco with EU users is as exposed as one in Berlin. Article 3 is what makes the GDPR a **global** law rather than a European one.

---

## 7. Personally Identifiable Information (PII)

The GDPR only bites on **personal data** — so the definition of what counts is the gateway to everything else. It is far broader than most people assume.

> [!info] Categories of PII ^pii-categories
> **Basic identifiers** — name, surname, email, phone number, postal address, government IDs (SSN, driver's licence, passport).
>
> **Online identifiers** — ==IP address, cookies, browsing history==, device info, location data. *(Crucially, these count as personal data even without your name attached.)*
>
> **Financial & professional data** — bank account, credit-card numbers, employment information.
>
> **Sensitive ("special category") data** — biometric data (fingerprints, voiceprints), genetic and health data, cultural/social/psychological identity, precise geolocation. These get **extra protection** under the GDPR.

> [!tip] Why online identifiers are the controversial part
> Most people accept that their passport number is "personal." Fewer realise that a **cookie ID or an IP address** is too — yet these are exactly what the ad-tech industry runs on. By classifying them as PII, the GDPR pulls the entire **tracking-and-targeting economy** into its scope. This is the legal hook behind cookie banners (§13) and the Meta ruling (§12).

---

## 8. The Guiding Principles — Articles 3, 5 & 6

The GDPR's substance sits in a handful of articles. Three are foundational: **who** it reaches (Art. 3, above), **how** data must be handled (Art. 5), and **when** processing is even allowed (Art. 6).

### 8.1 Article 5 — The Principles of Processing

Every act of processing must satisfy **all** of these principles simultaneously. They are the GDPR's ten commandments.

> [!info] The Article 5 principles ^article-5
> | Principle | What it requires |
> |---|---|
> | ==Lawfulness== | Processing needs a **lawful basis** (see Art. 6) and must follow all relevant law. |
> | ==Fairness== | Data is collected/processed **fairly** toward the subject, with a duty to inform and enable them. |
> | ==Transparency== | The purpose and scope are **clear, concise, and easy to understand**, as is how to exercise one's rights. |
> | ==Purpose limitation== | Purposes are **specified, explicit, legitimate, and limited** — you can't repurpose data freely. |
> | ==Data minimisation== | Collect only what is **relevant and adequate** for the purpose — no hoarding "just in case." |
> | ==Accuracy== | Data must be **accurate and kept up to date**, with extra care when profiling. |
> | ==Storage limitation== | Keep identifiable data **no longer than necessary** for the purpose. |
> | ==Integrity & confidentiality== | **Secure** the data against breach, unlawful processing, loss, or damage. |
> | ==Accountability== | The **controller is responsible** for compliance *and must be able to demonstrate it*. |

> [!tip] Why "accountability" changes everything ^why-accountability
> The first eight principles tell you *what* to do; **accountability** says you must **prove** you did it. Good intentions are not a defence — if a regulator asks, you must produce the records, the impact assessments, the consent logs (§10). This flips compliance from "don't get caught" to "**maintain a continuous evidentiary trail**." It is why GDPR compliance generates so much documentation.

### 8.2 Article 6 — The Six Lawful Bases for Processing

Under Article 5's "lawfulness" principle, you may **only** process personal data if you can point to **at least one** of six legal bases in Article 6.

> [!info] The six lawful bases ^article-6
> 1. ==Consent== — the subject gave **explicit, informed consent** for a **specific** purpose.
> 2. ==Contract== — processing is **necessary to perform a contract** with the subject (or pre-contract steps at their request).
> 3. ==Legal obligation== — processing is required to **comply with the law**.
> 4. ==Vital interests== — needed to protect someone's **life** (e.g. emergency medical care).
> 5. ==Public interest== — a task carried out in the **public interest**.
> 6. ==Legitimate interest== — the controller's **legitimate interests**, balanced against the subject's rights.

> [!warning] Consent is not the only basis — and often not the best ^consent-myth
> A common founder mistake is assuming you always need **consent**. You don't: if processing is genuinely **necessary to deliver the service the user signed up for**, the "contract" basis (No. 2) covers it without a separate consent click. **Consent** is fragile — it must be freely given, specific, informed, and *as easy to withdraw as to give*. Relying on consent where another basis fits creates needless legal risk. The choice of basis is a strategic legal-product decision, not a formality. The **Meta ruling** (§12) is precisely a fight over *which* basis ad-targeting can use.

---

## 9. Data Subject Rights (Articles 12–23) — The Eight Rights

The flip side of the controller's duties is a bundle of **enforceable individual rights**. A founder must design the product so a user can actually *exercise* each one.

> [!info] The eight data subject rights ^data-subject-rights
> 1. ==Right to be informed== — to know **what** data is collected and **why** (privacy notices).
> 2. ==Right of access== — to obtain a copy of one's data (the ==DSAR==, Data Subject Access Request).
> 3. ==Right to rectification== — to correct **inaccurate** data.
> 4. ==Right to object to processing== — to **stop** certain processing (e.g. direct marketing).
> 5. ==Rights re. automated decision-making & profiling== — protection against **purely automated** decisions with significant effects (Article 22).
> 6. ==Right to be forgotten== — to have one's data **erased** (the "right to erasure").
> 7. ==Right to data portability== — to **take one's data** to another provider in a usable format.
> 8. ==Right to restrict processing== — to **pause** processing while a dispute is resolved.

> [!tip] Why these rights are product features, not legal paperwork
> Each right implies a **thing you must build**: a privacy notice (informed), a "download my data" export (access + portability), an edit-profile flow (rectification), an unsubscribe/opt-out (objection), a "delete my account" that *truly* erases (forgotten). The ==right to be forgotten== — established in the **Google Spain** case (§12) before being codified — is the most famous, but ==Article 22== (automated decisions) is the one rising fastest, because it directly constrains **AI-driven** scoring and ranking (see the SCHUFA case, §12).

---

## 10. Roles, Governance & Operational Obligations

The GDPR assigns **named roles** and demands specific **governance artefacts**. This is where "accountability" (§8.1) becomes concrete paperwork.

> [!info] The key roles ^gdpr-roles
> - ==Data Controller== — the entity that **decides the purposes and means** of processing (Arts. 24, 26). The controller carries primary responsibility. ^def-controller
> - ==Data Processor== — a party that **processes data on the controller's behalf** (Art. 28), e.g. a cloud vendor. Bound by a **data-processing agreement**. ^def-processor
> - ==Data Protection Officer (DPO)== — an appointed privacy officer required of certain organisations (Arts. 37–39), responsible for oversight and liaison with regulators. ^def-dpo
> - ==Privacy by Design== — engineering privacy in from the start (Art. 25; see §5).

> [!info] The governance documents you must maintain ^governance-docs
> - ==DPIA== — **Data Protection Impact Assessment** (Art. 35): a mandatory risk assessment **before** starting any **high-risk** processing (e.g. continuous AI processing, data brokering, health or financial data). ^def-dpia
> - ==RoPA== — **Records of Processing Activities** (Art. 30): a living register of *what* data you process, *why*, *which* categories of subjects, *how long* you keep it, and *how* it's protected. ^def-ropa
> - **Technical & organisational measures** (Art. 32): concrete security controls.
> - Plus: vendor-audit management, **data-breach notification**, a **privacy policy**, DPO appointment, a **DSAR** process, and training/awareness records.

> [!tip] Why the DPIA is the founder's early-warning system
> A ==DPIA== forces you to ask, *before you build*, "could this processing seriously harm people's rights?" — and to document mitigations. It is most relevant exactly where startups innovate hardest: **AI features, large-scale tracking, sensitive data**. Skipping it is both a legal breach *and* a missed chance to catch a reputational landmine early. The DPIA is Privacy by Design (§5) turned into a procedure.

---

## 11. International Data Transfers — Getting Data Out of the EU

A global startup inevitably moves EU data to servers or teams **outside** the EU (often the US). The GDPR restricts this: you may only transfer to a country that offers **adequate protection**, or via an approved safeguard.

> [!info] The four transfer mechanisms ^transfer-mechanisms
> | Mechanism | Article | What it is |
> |---|---|---|
> | ==Adequacy decision== | Art. 45 | The EU Commission **declares a country's laws adequate**; data flows freely. |
> | ==Standard Contractual Clauses (SCC)== | Art. 46 | Pre-approved **contract terms** binding the importer to EU-level protection. |
> | ==Binding Corporate Rules (BCR)== | Art. 47 | Internal rules for transfers **within a multinational group**. |
> | ==Codes of Conduct (CoC)== | Arts. 40, 46 | Approved **industry codes** as a transfer safeguard. |

> [!warning] Why this section matters to Israel — Amendment 13 ^israel-adequacy
> Article 45 lists EU **values** among the parameters for judging "adequacy." Israel currently enjoys an **adequacy recognition**, which lets EU data flow to Israeli companies freely — a major competitive advantage for the local tech industry. ==Amendment 13== to Israel's Privacy Protection Law is the legislative effort to **keep Israel's regime aligned with the GDPR standard** so that adequacy is *not lost*. Losing adequacy would force every Israeli company handling EU data onto cumbersome SCCs — a real commercial threat. (This is the **Brussels Effect**, §4, operating directly on Israeli law.)

---

## 12. Enforcement & Fines — Who Polices the GDPR

A principle with no penalty is just advice. The GDPR's teeth are its **enforcement architecture** and the size of its **fines**.

> [!info] The enforcement bodies ^enforcement-bodies
> - ==Supervisory Authorities== (Art. 51) — each member state has its own **national data-protection regulator** with investigation and enforcement powers (e.g. Ireland's DPC, which oversees many US tech firms' EU HQs). ^def-supervisory-authority
> - ==European Data Protection Board (EDPB)== (Arts. 68–76) — the **EU-level body** that coordinates the national authorities, issues guidance, and ensures the GDPR is applied **consistently** across all 27 states. ^def-edpb

> [!warning] The fine that makes boards pay attention ^max-fine
> For the most serious breaches the GDPR caps fines at:
> $$\boxed{\;\text{Max fine} = \max\!\left(\text{EUR 20 million},\; 4\%\times\text{global annual turnover}\right)\;}$$
> The **"whichever is higher"** is the crucial design choice: for a startup, €20 million is the binding ceiling; for a tech giant, **4% of *worldwide* revenue** dwarfs €20 million. Tying the penalty to **global turnover** means the deterrent **scales with the size of the offender** — a flat fine would be a rounding error for a trillion-dollar company. This is why GDPR compliance is a **board-level** risk, not a back-office one. *(A lower tier — €10 million or 2% of turnover — applies to less severe, more procedural breaches.)*

> [!tip] Why the regulator/court split matters
> The **Supervisory Authority** *enforces* (investigates, fines); the **CJEU** (§13) *interprets* what the law means. The big fines flow from authorities, but their power is defined and constrained by the court's rulings — so to predict your exposure you have to watch **both**.

---

## 13. Landmark CJEU Cases — How the Text Became Hard Law

The ==Court of Justice of the European Union (CJEU)== is where the GDPR's words are turned into binding reality. Four cases define the field.

> [!info] Google Spain (2014) — the Right to be Forgotten ^case-google-spain
> *Google Spain SL v AEPD & Mario Costeja González.* The CJEU held that individuals can require search engines to **de-list** links to outdated or irrelevant personal information. This **created the right to be forgotten** — later codified in the GDPR (§9). Search engines became **controllers** responsible for the personal data they index.

> [!info] SCHUFA (7 Dec 2023) — Article 22 & Automated Scoring ^case-schufa
> Concerning Germany's largest **credit-rating** agency. The CJEU ruled that **automated credit scoring is "automated decision-making" under Article 22** when the score effectively determines an outcome. The decision demands **transparency** about, and human accountability for, algorithmic assessments — a direct constraint on **AI-driven** scoring.

> [!info] Meta / Article 6 (4 Jul 2023) — Can Terms of Use = Consent? ^case-meta
> One of the most consequential post-GDPR rulings. It asked whether burying data-processing in **Terms of Use** is a valid **legal basis** for ad-targeting. The court's answer threw the ==ad-tech== industry into upheaval: a contract/terms basis **cannot** be stretched to justify pervasive behavioural advertising — genuine **consent** (or another valid basis) is needed. This ties straight back to the Article 6 "consent myth" (§8.2).

> [!info] The Schrems Saga — EU↔US Transfers ^case-schrems
> The longest-running drama, all about getting data to the US:
> - **The Snowden Affair (2013):** leaks revealed US firms (Google, Facebook, Microsoft) gave the **NSA** access to user data via programs like **PRISM** — undermining trust in US data protection.
> - ==Schrems I== (6 Oct 2015): Max Schrems' challenge **invalidated "Safe Harbor"** (the 2000 EU–US transfer framework). Companies scrambled to **SCCs** instead.
> - ==Schrems II== (16 Jul 2020): **invalidated the "Privacy Shield"** (Safe Harbor's 2016 replacement). It upheld **SCCs as valid** *but* required a **case-by-case assessment** of whether the destination country's surveillance laws undermine them — placing the burden on **both** the EU exporter and the importer.
> - **Resolution — the EU–US Data Privacy Framework (Jul 2023):** a **new adequacy decision** restoring a lawful EU→US transfer route.

> [!tip] Why founders should care about a 10-year court saga
> The Schrems cases are not legal trivia — they decide whether you can **legally host EU user data on US cloud infrastructure** (AWS, Google Cloud, Azure). Each invalidation forced thousands of companies to re-paper their transfers overnight. The lesson: **data residency and transfer mechanics are an architecture decision** with direct legal exposure — make it early, and watch the adequacy status of your providers' jurisdictions.

---

## 14. The ePrivacy Directive & Cookies

Separate from (and older than) the GDPR is the ==ePrivacy Directive== (2002/58/EC) — the source of the ubiquitous **cookie banner**.

> [!info] Cookies and consent ^cookies
> A ==cookie== is a small file a website places on your device to remember information about your visit (language, login status, and — critically — **tracking** data). The ePrivacy Directive requires websites (in the EU) to obtain **user consent before placing certain cookies**, giving users **control** over what is collected while browsing. ^def-cookie

> [!warning] The four privacy risks of cookies ^cookie-risks
> 1. ==Tracking== — cookies follow your browsing **across multiple sites**, building a detailed behavioural profile.
> 2. ==Targeted advertising== — that profile powers **highly specific** ad targeting, which many regard as invasive.
> 3. ==Data sharing== — cookie data can be **sold/shared** with third-party advertisers and **data brokers**.
> 4. ==Security== — cookies can be **stolen by attackers** to hijack accounts or access personal data.

> [!tip] Why cookies sit at the intersection of two laws
> A tracking cookie is both an **ePrivacy** matter (consent to *place* the cookie) **and** a **GDPR** matter (the cookie ID is **PII**, §7, so its *processing* needs an Article 6 basis). That double regulation, plus the Meta ruling on consent, is why cookie banners became so elaborate — and why the EU keeps trying (so far without success) to replace the ageing ePrivacy Directive with a modern ePrivacy *Regulation*.

---

## 15. The Next Wave — The EU AI Act (AIA)

The "third generation" of EU digital law governs **artificial intelligence** — the frontier most relevant to today's startups.

> [!info] The AI Act timeline ^aia-timeline
> - **April 2021** — legislative proposal introduced as part of the AI Package.
> - **Nov 2023** — French/Italian/German lobbying (protecting their own foundation-model firms) nearly **derailed** the law.
> - **Dec 2023** — broad political agreement on an expanded version.
> - **March 2024** — approved by the **European Parliament**.
> - **May 2024** — approved by the **European Council**.
> - **July 2024** — official publication.

> [!info] New regulated players ^aia-players
> The AIA assigns roles up and down the AI supply chain:
> - ==Providers== (Art. 16) — those who **develop/place an AI system on the market**. Carry the heaviest duties.
> - ==Deployers== (Art. 26) — those who **use** an AI system in a professional capacity.
> - ==Importers==, ==Manufacturers==, and **users** of AI products/services within the EU.

> [!info] The risk-based approach ^aia-risk
> The AIA regulates AI in proportion to **risk** — the higher the potential harm, the heavier the obligations (from outright **prohibited** uses, through **high-risk** systems with strict requirements, down to **minimal-risk** systems with light or no duties). ^def-aia-risk

> [!tip] Why the AIA echoes the GDPR's design
> Notice the pattern repeating: the AIA borrows the GDPR's **extraterritorial reach** (it binds anyone serving the EU market), its **role-based** allocation of duties (Provider/Deployer mirror Controller/Processor), and its **Brussels-Effect** ambition to set the global default. For founders, the AI Act is the GDPR's lesson applied to models: **bake compliance into the system from the design stage**, because the law follows your product wherever your users are. It also connects to [[Lec_05-Intellectual Property]], where AI-and-copyright cases raised the *ownership* side of the same AI-governance question.

---

## Summary

> [!summary] One-screen revision ^summary
> - **Legal Product:** legal rules are **implemented in the product** — the cookie banner, consent dialog, and "delete account" button *are* the law in UI. Compliance is a **design requirement**. ^s-legal-product
> - **Five domains** of digital regulation: **Privacy, Cyber/Security, Platform Transparency, AI, Digital Competition**. The EU governs them via the **Digital Single Market** (2015): Gen 1 = **GDPR**, Gen 2 = **DSA + DMA**, Gen 3 = **AI Act**. ^s-domains
> - **GDPR** (adopted 2016, in force 25 May 2018): protects **personal data**; **extraterritorial** (Art. 3) — binds *anyone* processing EU residents' data, no EU presence needed. Applies to **all entities**, not just one sector. ^s-gdpr
> - **PII** is broad: includes **IP addresses and cookies**, not just names — which pulls the whole **ad-tech economy** into scope. ^s-pii
> - **Article 5** = the principles (lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity/confidentiality, **accountability** — you must *prove* compliance). **Article 6** = six lawful bases; **consent is not the only one**, and contract often fits better. ^s-principles
> - **8 data subject rights** (Arts. 12–23): informed, access (DSAR), rectification, object, automated-decision protection (Art. 22), **be forgotten**, portability, restrict. Each is a **feature to build**. ^s-rights
> - **Roles & governance:** **Controller** (decides purposes) vs **Processor** (acts for controller) vs **DPO**; mandatory **DPIA** (Art. 35, pre-high-risk) and **RoPA** (Art. 30, processing register). ^s-governance
> - **Transfers** out of the EU need: **adequacy** (Art. 45), **SCC** (Art. 46), **BCR** (Art. 47), or **CoC**. Israel relies on **adequacy**; **Amendment 13** keeps Israel aligned to preserve it. ^s-transfers
> - **Enforcement:** national **Supervisory Authorities** (Art. 51) fine; the **EDPB** (Arts. 68–76) ensures consistency. Max fine = **higher of €20 M or 4% of global turnover** — so the deterrent scales with company size. ^s-enforcement
> - **Cases:** **Google Spain** (right to be forgotten), **SCHUFA** (Art. 22 automated scoring), **Meta** (terms ≠ valid consent for ad-targeting), and **Schrems I & II** (killed Safe Harbor then Privacy Shield; **Data Privacy Framework** 2023 restored EU→US transfers). ^s-cases
> - **ePrivacy Directive** (2002/58/EC) governs **cookies** — consent before placing them; risks = tracking, targeted ads, data sharing, security. Cookies are regulated by **both** ePrivacy and GDPR. ^s-cookies
> - **AI Act** (adopted 2024): **risk-based**, role-based (**Providers** Art. 16, **Deployers** Art. 26), extraterritorial — the GDPR playbook applied to AI. ^s-aia

---

## 🔗 Related Notes

- [[Legal and Tax Aspects]] — subject hub
- [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]] — introduced [[Regulatory Compliance]], [[Privacy Policy]], [[Terms of Service]] and [[Cloud Computing]] in the founder's toolkit; **this lecture is the deep dive** on the privacy/regulation pillar
- [[Lec_01-Introduction & the Israeli Legal System]] — the [[Soft Law vs Hard Law]] distinction; the GDPR is **hard law** (a directly-binding Regulation), the ePrivacy **Directive** needs national transposition
- [[Lec_05-Intellectual Property]] — *two sessions back*; AI-and-copyright cases raise the **ownership** side of the AI-governance question the **AI Act** raises from the **safety/rights** side
- [[Lec_06-Employee Stock Option Plans (ESOP)]] — *previous session*
- [[_Wiki-Link Registry]] — all wiki-links used in this subject

**Concept stubs introduced/used here:** [[GDPR]], [[Legal Product]], [[EU Digital Single Market]], [[Digital Services Act]], [[Digital Markets Act]], [[EU AI Act]], [[Brussels Effect]], [[Personally Identifiable Information]], [[Privacy by Design]], [[Cloud Computing]], [[Data Controller]], [[Data Processor]], [[Data Protection Officer]], [[Data Subject]], [[Data Subject Rights]], [[Consent (GDPR)]], [[Legitimate Interest]], [[Purpose Limitation]], [[Data Minimization]], [[Right to be Forgotten]], [[Data Portability]], [[Data Subject Access Request]], [[Article 22 GDPR]], [[DPIA]], [[RoPA]], [[Adequacy Decision]], [[Standard Contractual Clauses]], [[Binding Corporate Rules]], [[Amendment 13]], [[Extraterritoriality]], [[CJEU]], [[Google Spain Case]], [[SCHUFA Case]], [[Meta Ruling]], [[Schrems I Case]], [[Schrems II Case]], [[Safe Harbor]], [[Privacy Shield]], [[Data Privacy Framework]], [[Snowden Affair]], [[ePrivacy Directive]], [[Cookies]], [[LGPD]], [[PIPL]], [[APPI]], [[DPDPA 2023]], [[Supervisory Authority]], [[EDPB]]
