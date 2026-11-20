---
title: "Practice Exam (Exam_Practice_Questions) — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Practice Set — Practice Exam (Feb 2026, authorship unclear)"
semester: 1
year: 2
course: "Legal and Tax Aspects"
instructor: Dr. Yuval Reinfeld
tags:
  - legal-and-tax
  - past-paper
  - worked-solution
  - founders-agreement
  - intellectual-property
  - gdpr
  - section-102
  - multiple-choice
aliases:
  - Legal and Tax Practice Exam
  - DataVault Case
  - PP02 Legal and Tax
subject: legal-and-tax
in_scope: true
---

# Practice Exam — DataVault Case & 20 MCQ

> Part of: [[Legal and Tax Aspects]]
> **Practice Exam** (Practice Set, PDF dated Feb 2026) — Legal and Tax Aspects, Dr. Yuval Reinfeld
> Key concepts: [[Founders' Agreement]], [[Memorandum of Understanding]], [[Serious Intention (Gmirot Da'at)]], [[Definiteness (Mesuyamut)]], [[Copyright]], [[Trade Secret]], [[GDPR]], [[Consent (GDPR)]], [[DPIA]], [[Privacy by Design]], [[Standard Contractual Clauses]], [[Section 102]], [[Capital Gain Track]], [[Vesting]], [[Piercing the Corporate Veil]]
> Builds on: [[Lec_01-Introduction & the Israeli Legal System]], [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]], [[Lec_03-Company Law & Corporate Structures]], [[Lec_04-Contract Law]], [[Lec_05-Intellectual Property]], [[Lec_06-Employee Stock Option Plans (ESOP)]], [[Lec_07-Digital Regulation]]

> [!info] Source and provenance
> The paper and its key are **in the same PDF** (`Exam_Practice_Questions.pdf`): Part 1 is followed by a "Model Answer", Part 2 is followed by an "Answer Key" with a one-line explanation per question. The PDF is machine-generated and its authorship is unclear, so it is **not** an official faculty exam. Everything below treats the in-file model answer and key as the **official answer** and reproduces them faithfully. Where an official answer conflicts with the lecture notes, the answer is **kept** and a `> [!warning]` shows the check. This is **not** a tofes 0 paper.

> [!warning] Header inconsistency in the source
> The cover line says "Part 1 (25 pts) + Part 2 (75 pts)", but Part 2 is printed as "20 questions x 5 points = 100 points". The two cannot both hold (the 20 MCQ at 5 points would already be 100). Treat the point split as unreliable; the structure (one open case, 20 MCQ) is what matters.

> [!warning] Official answers that look wrong or shaky against the lectures
> Kept as keyed, but check before relying on them:
> - **Part 1, Q4 (Section 102):** the model answer treats Oren as eligible; the lecture says Section 102 does **not** cover controlling shareholders. Several tax numbers and deadlines also differ from [[Lec_06-Employee Stock Option Plans (ESOP)]].
> - **MCQ Q10:** the key's "simplest tax treatment" for an Ltd. contradicts the lecture (a company has double taxation).
> - **MCQ Q16:** key says D (trade secret); C (copyright) is at least as defensible for "source code".
> - **MCQ Q3, Q8, Q15:** key is defensible but overstated or partly outside the lecture notes (see each).
>
> No questions were AI-solved: every question has an in-file answer.

---

## 🧰 What this paper tests

> [!info] One scenario, four legal fields
> The open case (DataVault) is a **spot-the-issue** question: one startup, three disputes, and each dispute maps to one lecture.
> 1. **No real founders' agreement** → [[Lec_01-Introduction & the Israeli Legal System]], [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]] and contract formation in [[Lec_04-Contract Law]] (is a "non-binding" memo a contract?).
> 2. **Who owns Maya's algorithm?** → [[Lec_05-Intellectual Property]] (copyright vs trade secret) plus the IP-assignment clause of the founders' agreement.
> 3. **EU user data with a cookie notice** → [[Lec_07-Digital Regulation]] (GDPR Art. 5, 6, 13/14, 25, 30, 32, 35, 37).
> 4. **Oren's promised equity** → [[Lec_06-Employee Stock Option Plans (ESOP)]] (Section 102, vesting, trustee, holding period).
>
> The 20 MCQ then sweep the same four areas plus company structures ([[Lec_03-Company Law & Corporate Structures]]) and fundraising ([[Lec_01-Introduction & the Israeli Legal System]], [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]]).

> [!tip] Intuition
> Exam answers here are built from a template: **name the rule, apply it to one scenario fact, state the remedy**. The model answer to Part 1 follows exactly that pattern in each of its four paragraphs.

---

# Part 1 — Legal Case Analysis (open question)

## The scenario

Liron, Maya and Oren co-founded **DataVault**, a fintech data analytics platform. In January they signed a short "Collaboration Memo" (titled **non-binding**) stating equal **33.3%** shares each, with **no detailed founders' agreement**. The platform collects anonymous user financial data through an API to train AI models.

By March three disputes arose:

1. Maya **unilaterally decided to license** DataVault's proprietary ML algorithm to a competitor, claiming she developed it independently.
2. Liron discovered DataVault is **storing EU user data without explicit GDPR consent**, with only a generic cookie notice.
3. Oren, an **employee-founder**, was promised **Section 102** equity compensation but **no formal vesting schedule** was documented.

Liron demands an equal say in all decisions and wants to know what legal protections he should have had, what the current IP ownership really is, and what GDPR gaps must be fixed immediately. Maya argues the Memo is non-binding and she owns her work. Oren wants clarity on his equity vesting rights under Israeli tax law.

**Question.** Advise Liron on: (1) the legal role and essential contents of a founders' agreement in preventing the current disputes; (2) IP ownership of the ML algorithm under Israeli law, and why the Collaboration Memo fails to secure it; (3) GDPR compliance obligations for DataVault and how to remedy the current data handling practices; (4) Section 102 vesting requirements and Oren's legal position.

> [!tip] Intuition
> Write four headed paragraphs, one per sub-question, in the order asked. Each answer is a **gap (what the facts show) → rule → fix** chain. The paper says "up to 1 page", so aim for dense, structured points rather than essays.

---

## 1. Founders' agreement: legal role and essential contents

> [!success] Official model answer (expanded)
> A [[Founders' Agreement]] is a **binding contract between the founders** that defines **governance, ownership and dispute resolution**. The "Collaboration Memo", titled non-binding, is **insufficient and legally unenforceable**.
>
> **Essential contents:**
>
> | | Clause | What it does in this case |
> |---|---|---|
> | (a) | **Equity allocation and [[Vesting Schedule\|vesting]]**, with cliff and acceleration | Fixes who owns what and earns it over time (Oren's undocumented vesting) |
> | (b) | **Decision-making authority**: board representation, voting thresholds for material decisions such as IP licensing | Would have stopped Maya licensing the algorithm alone; gives Liron enforceable say |
> | (c) | **IP assignment**: explicit written transfer of all pre-existing and work-product IP to the company | Decides who owns the algorithm |
> | (d) | **Founder roles and responsibilities** | Defines what each founder is expected to build |
> | (e) | **Exit rights and buyback provisions** | Handles a founder who leaves |
> | (f) | **Dispute resolution** (arbitration or mediation) | Gives a route other than court |
>
> **Why it matters here:** the absence of these provisions let Maya unilaterally license the algorithm, left Oren's vesting undocumented, and left Liron without enforceable decision rights.
>
> **Contract-law point:** under Israeli contract law the parties' intent to be legally bound is essential (*gmirot da'at* and *mesuyamut*). The Memo's non-binding label defeats that intent, leaving the founders with **only default statutory rules, which give minimal protection**. A formal agreement turns an informal partnership into a **governed structure with legal recourse**.

> [!info] Lecture grounding
> - Contents of the agreement: [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]] lists vision, roles, authorities, share and profit split, protection if a founder leaves, decision-making and dispute-resolution mechanisms. [[Lec_01-Introduction & the Israeli Legal System]] puts the agreement in the **pre-incorporation** stage: "a founders' agreement skipped in week one becomes a lawsuit in year three"; no vesting means a co-founder who leaves after two months keeps 33% forever.
> - Binding or not: [[Lec_04-Contract Law]] Part 10 says an [[Memorandum of Understanding]] binds or not according to the **parties' intent**, tested with [[Serious Intention (Gmirot Da'at)]] plus [[Definiteness (Mesuyamut)]] (*Rabinai*).

> [!warning] Nuance: a label is not conclusive
> The model answer says the non-binding label "defeats" intent. The lecture is more careful: in *Rabinai* an MOU with all essential terms was held a real contract, because the **substance, not the label, controls**. Here the label is explicit and the Memo is a "brief" document, so the conclusion (not binding) is the safe exam answer, but note that the Memo's equal 33.3% statement is still **evidence of what the founders understood**. Official answer kept.

> [!tip] Intuition
> Liron's "equal say in all decisions" is a *wish*, not a *right*: equal shares give equal economic stakes, but without a written governance clause nothing says that every decision needs all three votes. That is exactly the gap clause (b) fills.

---

## 2. IP ownership of the ML algorithm

> [!success] Official model answer (expanded)
> - **Default rule.** Under Israeli copyright law, ownership of creative works (including software and algorithms) **vests in the creator by default**, unless a **written assignment** says otherwise.
> - **Maya's claim.** That she developed it independently is a **factual question**, but without a written IP-assignment clause in a founders' agreement, DataVault has **no automatic ownership** of work created by the founders.
> - **Why the Memo fails.** The Memo's statement that IP belongs to the company is **too vague and non-binding**, so it fails the requirement of a clear **written assignment**.
> - **Possible fallbacks, uncertain.** If the algorithm was developed jointly during the company's operations using company resources, courts **may** infer a **constructive trust** in favour of the company, or apply the **work-for-hire doctrine** if there was an employment relationship. This is **uncertain and litigable**.
> - **Correct remedy.** An explicit **IP assignment agreement** (or an amendment to the founders' agreement) signed by all three founders, assigning **all existing and future IP** to DataVault. It must be **registered with the Israeli Patents, Trademarks & Designs Office if patent protection is sought**.
> - **Result without it.** Maya's independent-development argument will likely prevail, stripping the company of its most valuable asset.

> [!info] Lecture grounding
> - [[Lec_05-Intellectual Property]] §4: [[Copyright]] protects software and arises **automatically on creation**, no registration. §6: an algorithm that can be kept hidden is a natural [[Trade Secret]] (protected only while secret), and a [[Patent]] needs registration with the [[Israel Patent Authority]] and publishes the invention.
> - [[Lec_05-Intellectual Property]] closing links: IP "ownership usually sits in the company, not the founder personally", and IP is bought, sold and licensed **through contracts**, so assignment and licence agreements turn these property rights into deals.
> - [[Lec_01-Introduction & the Israeli Legal System]]: "an IP assignment never signed becomes a deal-breaker in diligence".

> [!warning] Not covered by the lecture notes
> The **constructive trust** and **work-for-hire** routes, and the rule that the creator is the default owner of copyright, are the model answer's own statements. The lecture notes do not teach them, and the notes do not discuss employer-ownership rules for employees' works. Keep the model answer's points for this paper, but do not add more doctrine than this. The point about registering the assignment with the Patents Office only matters if a patent is sought (copyright needs no registration).

> [!tip] Intuition
> Think of the algorithm as a car whose registration is in Maya's name. Unless there is a signed transfer, "I built it" plus "the company paid for the garage" produces an argument, not a title.

---

## 3. GDPR compliance and data handling

> [!success] Official model answer (expanded)
> DataVault collects EU user **financial data**, which is personal data (GDPR Art. 4(1)), so the GDPR applies. Storing it behind only a **generic cookie notice** breaches several principles:
>
> | | Gap | Rule |
> |---|---|---|
> | (a) | **Lawfulness** (Art. 6) | Processing needs a lawful basis (consent, contract, legitimate interest, legal obligation, vital interests, public task). A generic cookie notice is **not valid, informed, freely given consent** (Art. 4(11)) |
> | (b) | **Transparency** (Art. 13/14) | Users must get detailed privacy information: controller identity, purposes, recipients, retention periods, data-subject rights |
> | (c) | **Purpose limitation** (Art. 5(1)(b)) | Data collected for training ML models cannot be reused for other purposes without new consent |
> | (d) | **Security** (Art. 32) | Data should be encrypted in transit and at rest |
>
> **Immediate remediation steps:**
> 1. Obtain **explicit, informed, written consent** from all EU users via a compliant privacy notice and consent mechanism (a yes/no checkbox **before** collection).
> 2. Keep a **Data Processing Agreement (DPA)** with any EU processor.
> 3. Conduct a **[[DPIA]]** (Art. 35).
> 4. Appoint a **[[Data Protection Officer]]** if required (Art. 37).
> 5. Document the lawful basis in a **Records of Processing** (the PDF writes "RRPA"; the lecture term is [[RoPA]]).
> 6. Implement **[[Privacy by Design]]** (Art. 25): pseudonymization, encryption, access controls.
> 7. Set a **data retention schedule** (delete data when no longer necessary).
>
> **Penalty:** fines up to **4% of global annual revenue or EUR 20 million, whichever is higher**.

> [!info] Lecture grounding
> [[Lec_07-Digital Regulation]] §7: online identifiers count as [[Personally Identifiable Information]]; Art. 3 gives extraterritorial reach (no EU office needed). §8.1: the Art. 5 principles; §8.2: six lawful bases, with the warning that **consent is not the only basis** and the *Meta ruling* (terms of use cannot stand in for consent for ad-targeting). §10: DPO, DPIA (Art. 35, pre-high-risk), RoPA (Art. 30). §12: maximum fine = max(EUR 20 million, 4% of global turnover). Cookies: [[ePrivacy Directive]] needs consent before placing certain cookies.

> [!warning] Minor points beyond or against the lecture
> - "Explicit, **written**" consent overstates the lecture, which asks for explicit, informed, specific consent that is as easy to withdraw as to give. Kept as the model answer.
> - The model answer says the data is "anonymous" in the scenario yet treats it as personal data. That is consistent with the scenario facts (the platform links data to EU users), but a student should say so explicitly: truly anonymised data would fall outside the GDPR, and the paper's facts (storing EU user data) show that it is not.
> - DPA, retention schedule and the Art. 13/14 and Art. 32 references are not named in the lecture notes (the lecture lists "security" as the integrity and confidentiality principle). They are standard GDPR content and are kept as official.

> [!tip] Intuition
> The cookie notice is the wrong tool for the wrong job: it is an [[ePrivacy Directive]] device for cookies, not a legal basis or privacy notice for processing a user's **financial data**. That mismatch is the core of the answer.

---

## 4. Section 102 vesting and Oren's position

> [!success] Official model answer (expanded)
> Under the Income Tax Ordinance **Section 102 (Capital Gain Track)**, employee founders get preferential capital-gains treatment on restricted stock awards (RSAs) or options **if conditions are met**:
> - (a) a **grant agreement** is signed (absent here);
> - (b) options/RSAs are granted to an **employee or director** at below fair market value;
> - (c) a **vesting schedule** is documented (typically 4-year vesting with 1-year cliff);
> - (d) the award is **held at least 24 months** (Capital Gain Track) or **60 months** (alternative track) after grant;
> - (e) the company **elects** Section 102 treatment with the tax authority.
>
> **Oren's position is legally precarious.** Without a written vesting agreement he has only an **informal promise**, not enforceable under Israeli contract law (the answer cites a requirement of written terms for equity). Without formal Section 102 documentation he may face **ordinary income tax (50%+)** instead of capital gains (**about 30%**), sharply cutting his after-tax benefit.
>
> **Remedy:** draft a grant agreement immediately, specifying (1) number of options/RSA shares; (2) vesting schedule (the example given: 33.3% vests immediately, 33.3% at 24 months, 33.4% at 36 months); (3) exercise price (if options) at FMV; (4) election for the Capital Gain Track; (5) **filing with the tax authority within 90 days of grant**. Oren should also verify his legal status (**employee vs independent contractor**) to confirm Section 102 eligibility.

> [!info] Lecture grounding
> [[Lec_06-Employee Stock Option Plans (ESOP)]]: §5 [[Section 102]] covers **employees and officers only**; §6 three tracks; §7 the [[Capital Gain Track]] and its **24-month [[Holding Period]] from the grant date**; §9 the checklist (board adopts plan, approves a [[Trustee]], trustee files with the [[Israel Tax Authority]], 30-day wait, board approval of each grant deposited with the trustee within 45 days, signed option agreements within 90 days).

> [!warning] Conflicts with the lecture notes (official answer kept)
> | Model answer says | Lecture notes say |
> |---|---|
> | Employee **founder** Oren can use Section 102 | Section 102 does **not** cover **controlling shareholders**; they fall under [[Section 3(i)]]. Oren holds 33.3%, so the eligibility question is serious. The lecture does not state the percentage that makes someone "controlling", so this is a flag, not a conclusion |
> | Capital gain rate about **30%**, ordinary **50%+** | Capital Gain Track **25%**; ordinary rates **up to about 59%** |
> | Hold **24 months** (or **60 months** alternative) | 24-month holding period from **grant** (the lecture has no 60-month track) |
> | Company elects with the tax authority; **file within 90 days of grant** | Trustee submits the **plan** to the ITA; **30 days** before grants; grant approval to trustee within **45 days**; signed agreements to trustee within **90 days** |
> | Options "granted at below fair market value", then exercise price "at FMV" | The lecture discusses a strike price set at grant; it does not state a below-FMV requirement |
>
> The model answer also relies on a **written-terms requirement for equity** that the lecture notes do not teach (they discuss the writing requirement only for real estate, Section 8 Land Law).

> [!tip] Intuition
> The practical advice is robust even if a number is off: (i) put the grant in a signed agreement with a vesting schedule, (ii) use a trustee and file on time, (iii) check eligibility first. A good exam answer also **mentions the controlling-shareholder risk** as an extra insight.

---

# Part 2 — Multiple Choice (20 questions)

> [!info] How to read each question
> **Keyed answer** is the in-file key. Then **why**, the lecture ground, and a one-line reason for each wrong option.

## Q1 — Why founders' agreements specify equity and vesting

**Q1.** A founders' agreement typically specifies equity allocation and vesting schedules primarily to:
A) Satisfy tax authority reporting requirements
B) Prevent disputes over ownership and commitment, and define each founder's entitlement over time
C) Determine the company's market valuation
D) Establish voting rights in shareholder meetings

> [!success] Answer: B
> Official explanation: founders' agreements prevent disputes and define vesting schedules to align incentives over time.

**Why.** [[Lec_01-Introduction & the Israeli Legal System]] and [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]]: the agreement turns an informal expectation into structure, and [[Vesting]] stops a departing co-founder keeping "dead equity".
- A) Tax reporting is not the purpose; the agreement is private, between founders.
- C) Valuation comes from fundraising ([[Valuation]]), not from the founders' agreement.
- D) Voting rights are a separate governance clause (b) and are not the "primary" purpose of equity and vesting terms.

## Q2 — Who owns a founder's IP

**Q2.** Under Israeli copyright law, who owns the intellectual property created by a founder during the startup's operations?
A) Automatically the company
B) The founder who created it, unless a written assignment transfers it to the company
C) The founder and company jointly in equal shares
D) The company if it provided any resources or funding

> [!success] Answer: B
> Official explanation: Israeli copyright law vests ownership in the creator unless a written assignment transfers it.

**Why.** Matches the model answer in Part 1 Q2. [[Lec_05-Intellectual Property]]: [[Copyright]] is automatic on creation and attaches to the creator; companies get ownership through **contract** (an IP assignment), which is why [[Lec_01-Introduction & the Israeli Legal System]] stresses signing the assignment.
- A) The company gets ownership only by assignment, not automatically.
- C) No rule creates equal joint ownership.
- D) Providing resources or funding does not by itself transfer title.

> [!warning] Scope note
> The lecture notes do not teach the separate rule for works made by **employees**. The key's answer is fine for the "founder with no assignment" fact pattern of this paper.

## Q3 — A "non-binding" MOU

**Q3.** An MOU titled 'non-binding' is generally:
A) A legally binding contract under Israeli law regardless of its title
B) Unenforceable because the parties' intent (gmirat da'at) was explicitly not to be bound
C) Valid if signed by all parties, even if labeled non-binding
D) A preliminary step that automatically becomes binding when parties act in reliance

> [!success] Answer: B
> Official explanation: Israeli contract law requires gmirat da'at; a non-binding label negates this intent.

**Why.** [[Lec_04-Contract Law]] Part 10: an [[Memorandum of Understanding]] binds or not depending on the **parties' intent**, and may show "non-binding intent". If both sides expressly say it does not bind, [[Serious Intention (Gmirot Da'at)]] is missing.
- A) "Regardless of its title" is wrong: title is not decisive, but an explicit non-binding intent is relevant.
- C) Signature does not override a stated lack of intent.
- D) Reliance does not "automatically" create a contract (but see good faith in negotiation, s.12, which can create liability for damage).

> [!warning] Nuance
> In the lecture, *Rabinai* shows a "memorandum" with all essential terms was binding, so the label is **evidence, not a rule**. B is the best of the four options, and the key is kept. In an open answer, say "generally unenforceable as a contract, **but** courts look at substance".

## Q4 — Which clause is NOT essential

**Q4.** Which of the following is NOT an essential clause in a founders' agreement?
A) IP assignment to the company
B) Founder roles and decision-making authority
C) Detailed marketing strategy for the first 12 months
D) Vesting schedule and cliff period

> [!success] Answer: C
> Official explanation: detailed marketing strategy is not typically an essential clause.

**Why.** [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]] and Part 1 Q1 list roles and authorities, share split, vesting, IP and exit terms. Marketing plans are business planning, not founder relationship terms.
- A) IP assignment is the core of ownership (Part 1 Q2).
- B) Roles and decision authority prevent the dispute in the case.
- D) [[Vesting Cliff]] and vesting are central to commitment.

## Q5 — Valid GDPR lawful basis

**Q5.** Under GDPR, collection of personal data from EU users requires a lawful basis. Which of the following is a valid GDPR lawful basis?
A) A generic 'Terms of Service' page visible on the website
B) A general cookie notice without explicit opt-in consent
C) Explicit, informed, freely given consent via a clear affirmative action (e.g., checkbox) before collection
D) No lawful basis is required if the data is anonymized after collection

> [!success] Answer: C
> Official explanation: GDPR requires explicit, informed, freely given consent via affirmative action before collection.

**Why.** [[Lec_07-Digital Regulation]] §8.2: [[Consent (GDPR)]] is one of the six bases and must be explicit, informed and specific.
- A) The *Meta ruling* says terms of use cannot substitute for a valid basis.
- B) A cookie notice with no opt-in is the exact fact pattern in the case; it is not valid consent.
- D) The lawful basis is needed at **collection**; anonymising later does not cure unlawful collection.

> [!tip] Intuition
> Consent is not the *only* basis (contract, legitimate interest and others exist, [[Lec_07-Digital Regulation]] "consent myth"), but among these four options only C is a basis at all.

## Q6 — When a DPIA is needed

**Q6.** A DPIA under GDPR Article 35 must be conducted when:
A) Processing personal data of any EU resident
B) Processing is likely to result in high risk to data subject rights and freedoms
C) A company collects more than 1,000 records of personal data
D) Any controller processes data in the EU, regardless of risk

> [!success] Answer: B
> Official explanation: Art. 35 requires a DPIA when processing is likely to result in high risk to data subject rights.

**Why.** [[Lec_07-Digital Regulation]] §10: a [[DPIA]] is a mandatory risk assessment **before high-risk processing** (e.g. continuous AI processing, data brokering, health or financial data).
- A) and D) Too broad: they ignore the "high risk" trigger.
- C) The lecture sets no 1,000-record threshold.

## Q7 — Privacy by Design

**Q7.** The 'Privacy by Design' principle under GDPR Article 25 requires:
A) Privacy policies written in plain language
B) Data protection measures (encryption, pseudonymization, access controls) built into systems from the start of product design
C) An annual privacy audit by an external firm
D) Obtaining explicit consent before collecting any data

> [!success] Answer: B
> Official explanation: Art. 25 requires data protection measures built in from the design stage.

**Why.** [[Lec_07-Digital Regulation]] §5: [[Privacy by Design]] means privacy is engineered in from the start, not bolted on (and "by default" gives the most protective settings out of the box).
- A) Plain language relates to transparency, not Art. 25.
- C) No external annual audit requirement is in the lecture.
- D) Consent is one lawful basis, not Art. 25, and not required for "any" data.

## Q8 — Section 102 holding period

**Q8.** Under Section 102, if an employee founder receives RSAs with a vesting schedule, the 'Capital Gain Track' treatment applies if the award is held for a minimum of:
A) 6 months after vesting
B) 12 months after grant
C) 24 months from grant (or vest date, whichever is later)
D) 36 months from grant

> [!success] Answer: C
> Official explanation: Section 102 Capital Gain Track requires a minimum 24-month holding period from grant date.

**Why.** [[Lec_06-Employee Stock Option Plans (ESOP)]] §7.2: the 25% rate requires **24 months from the grant date**; selling earlier means the gain is taxed at the marginal rate (up to about 59%).
- A) and B) Too short.
- D) Too long; the lecture has no 36-month requirement.

> [!warning] Parenthesis in option C
> The option adds "(or vest date, whichever is later)", but the key's own explanation and the lecture both say **from the grant date**. The 24-month figure is correct; the extra parenthesis is not supported by the lecture. Key kept.

## Q9 — Why document the Section 102 grant

**Q9.** A key reason Section 102 vesting is documented in a formal grant agreement is:
A) To avoid double taxation of the same equity
B) To ensure the employee receives ordinary income tax treatment instead of capital gains
C) To define the vesting schedule and allow the company to elect Section 102 treatment with the tax authority for preferential capital gains rates
D) To prevent the employee from selling shares before the vesting period ends

> [!success] Answer: C
> Official explanation: formal documentation allows the company to elect Section 102 treatment for preferential capital-gains rates.

**Why.** [[Lec_06-Employee Stock Option Plans (ESOP)]] §9: the benefits are **conditional on process**: signed agreements deposited with the trustee within 90 days, with deadlines strict. Missing paperwork can push the grant into ordinary-income taxation.
- A) Section 102 is not about avoiding double taxation.
- B) Backwards: the aim is capital gains, not ordinary income.
- D) What restricts early sale is the trustee and the holding period, not the document.

> [!warning] Wording
> "Elect Section 102 treatment with the tax authority" simplifies the lecture's process (plan approved via the trustee). C is still the only option that fits.

## Q10 — Limited liability plus simple tax

**Q10.** Which of the following corporate structures provides both limited liability to founders AND the simplest tax treatment in Israel?
A) Sole proprietorship
B) General partnership (partnership contract)
C) Private limited company (Ltd.)
D) Association without limited liability

> [!success] Answer: C
> Official explanation: a private limited company (Ltd.) provides limited liability and straightforward tax treatment.

**Why.** Only the Ltd. gives **limited liability** among the options ([[Lec_03-Company Law & Corporate Structures]], [[Limited Liability]]), and it is the startup default ([[Lec_02-Legal Entrepreneurship — Fundamental Concepts]]).
- A) Sole proprietor has simple tax but **personal** liability.
- B) Partners are personally liable for everything.
- D) Stated to lack limited liability.

> [!warning] "Simplest tax" is wrong per the lecture
> [[Lec_03-Company Law & Corporate Structures]] says the Ltd. has **double taxation** (corporate tax plus dividend tax) and heavier books (double-entry, audited report), whereas a sole proprietor has **simple, single-layer** tax. So the "simplest tax" half of the question is false for any structure that has limited liability. Key C is still the only option satisfying "limited liability", so keep it, and in an exam answer for the limited-liability part, stress that it is the **trade-off** (more admin and tax in exchange for liability protection).

## Q11 — Piercing the corporate veil

**Q11.** The 'corporate veil' can typically be pierced when:
A) The company has been operating for less than 2 years
B) The founder personally guarantees a company debt
C) The company is a mere shell with no real business substance, or founders use it for fraud or illegal purposes
D) The company takes out a loan without board approval

> [!success] Answer: C
> Official explanation: the veil can be pierced if the company is a shell, used for fraud, or lacks real business substance.

**Why.** [[Lec_03-Company Law & Corporate Structures]] s.6 [[Piercing the Corporate Veil]]: allowed on **abuse** of separate personality, e.g. fraud or wronging creditors, unreasonable risk about repaying debts, or willful blindness. Piercing is exceptional (*Salomon* is protected).
- A) The company's age is irrelevant.
- B) A personal guarantee is the founder's own contract; liability arises without any piercing.
- D) A loan lacking board approval is an internal governance matter, not abuse.

> [!warning] Wording
> The lecture's grounds are fraud, wronging creditors, unreasonable risk and willful blindness. "Mere shell with no business substance" is not one of those listed terms, but C is clearly the closest fit.

## Q12 — The two pillars of a contract

**Q12.** Under Israeli contract law, what are the two essential requirements for a valid contract (the 'two pillars')?
A) Written form and signatures
B) Consideration and a 10-day waiting period
C) Gmirat da'at (intent to be bound) and mesuyamut (definiteness/clarity of essential terms)
D) Oral agreement followed by performance

> [!success] Answer: C
> Official explanation: gmirat da'at and mesuyamut are the two essential pillars.

**Why.** [[Lec_04-Contract Law]] Part 8-9: an offer needs [[Serious Intention (Gmirot Da'at)]] (mental element) and [[Definiteness (Mesuyamut)]] (factual element), under s.1 and s.2 of the Contracts Law. Courts have five completion mechanisms for gaps.
- A) Writing is required only for specific transactions (real estate, Section 8 Land Law).
- B) The lecture does not make consideration or a waiting period an essential pillar.
- D) Oral agreement followed by performance is not the legal test.

## Q13 — A Knesset law

**Q13.** In the Israeli legal system, a law passed by the Knesset is part of which source of law?
A) Soft law (non-binding guidance)
B) Hard law (binding legislation)
C) Common law precedent
D) Customary practice in the business community

> [!success] Answer: B
> Official explanation: legislation passed by the Knesset is hard law.

**Why.** [[Lec_01-Introduction & the Israeli Legal System]] [[Soft Law vs Hard Law]]: statutes, regulations and court rulings are hard law; contracts are the soft-law side. Hard law prevails over soft law.
- A) Soft law is contract-type, private arrangements.
- C) Precedent comes from courts, not the Knesset.
- D) Custom is a gap-filler (s.26) and not a Knesset law.

## Q14 — When an NDA fails

**Q14.** An NDA fails to protect trade secrets if it:
A) Is not signed by all parties who receive confidential information
B) Lacks clear definition of confidential information, purpose limitation clause, and disclosure restrictions
C) Does not specify a time period longer than 5 years
D) Is not notarized by a lawyer

> [!success] Answer: B
> Official explanation: an NDA fails without clear definition of confidential info, purpose limitation and disclosure restrictions.

**Why.** [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]] [[NDA]]: obligates parties to keep information confidential. For that to work, the contract must say what is confidential and what the recipient may do with it ([[Lec_05-Intellectual Property]]: a [[Trade Secret]] needs reasonable efforts to keep it secret).
- A) A person who has not signed is not bound, but the question asks about the NDA's content ("fails to protect"); A is a weaker fit than the definition and use limits.
- C) No 5-year minimum appears in the lecture.
- D) No notarisation requirement.

> [!warning] Beyond the lecture
> The lecture defines an NDA only in one sentence. The three-part content test in B is the key's own; it is plausible and kept.

## Q15 — The seed stage

**Q15.** The 'seed' fundraising stage is typically characterized by:
A) Launching a public offering on the stock exchange
B) Building and validating the MVP, with funding from founders, angel investors, and seed funds (up to ~\$500K to \$2M)
C) Series A investment from institutional venture capital firms
D) Profitability and acquisition of a strategic buyer

> [!success] Answer: B
> Official explanation: seed stage focuses on MVP development and early funding (founders, angels, seed funds).

**Why.** [[Lec_01-Introduction & the Israeli Legal System]] [[Startup Lifecycle]]: **Seed** finances the MVP and market/concept validation, funded by angels and (relatively small) seed funds.
- A) That is an [[IPO]] (exit stage).
- C) Series A comes after seed.
- D) Profitability and acquisition are the exit stage.

> [!warning] Dollar range not in lecture
> The "\$500K to \$2M" figure is **not** in the lecture notes ("relatively small" is all they say). Treat it as a rule of thumb from the PDF and do not memorise it as law.

## Q16 — Protecting an algorithm as source code

**Q16.** Which intellectual property right would primarily protect a software algorithm implemented as source code?
A) Patent (for the algorithm's process)
B) Trademark (for the algorithm's name)
C) Copyright (for the code expression)
D) Trade secret (if kept confidential and the algorithm is novel)

> [!success] Answer: D (as keyed)
> Official explanation: trade secret protection is strongest for algorithms kept confidential; copyright protects code expression.

**Why (official reading).** [[Lec_05-Intellectual Property]] §3 and §6: algorithms are a classic [[Trade Secret]] use ("Best for: advantages you can genuinely keep hidden (recipes, processes, algorithms)"), and patenting publishes the invention.
- A) A [[Patent]] requires registration, novelty, inventive step and disclosure; the question does not say the owner wants that.
- B) A [[Trademark]] protects a brand sign, not the algorithm.
- C) [[Copyright]] protects the code's **expression** (see the warning).

> [!warning] C is at least as defensible
> The question says "implemented as **source code**". The lecture says software and code are copyright-protected automatically from the first commit, and the key's own explanation concedes "copyright protects code expression". Option D adds conditions ("if kept confidential and the algorithm is novel") that the stem does not give. If you see this on a real exam, **write both** and justify: copyright for the code as written, trade secret for the underlying algorithm if secret. Key D kept.

## Q17 — Purpose of a vesting schedule

**Q17.** A vesting schedule (e.g., 4-year vesting with 1-year cliff) serves which primary purpose in a startup context?
A) To reduce the company's payroll tax obligations
B) To ensure employees and founders maintain long-term commitment and to prevent them from immediately leaving with full equity
C) To determine the dividend payments owed to shareholders
D) To set the employee's base salary

> [!success] Answer: B
> Official explanation: vesting ensures long-term commitment and prevents immediate exit with full equity.

**Why.** [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]]: [[Vesting]] means rights are granted gradually, so retention and alignment follow. [[Lec_06-Employee Stock Option Plans (ESOP)]]: with a one-year [[Vesting Cliff]], leaving before the cliff gives nothing.
- A) Vesting is not a payroll-tax tool.
- C) Dividends depend on shares held, not on vesting.
- D) Base salary is separate from equity.

## Q18 — Transfers without an adequacy decision

**Q18.** Under GDPR, if a company transfers personal data from the EU to a non-EU country without an adequacy decision, it must use:
A) Standard Contractual Clauses (SCCs) or Binding Corporate Rules (BCRs) to ensure an adequate level of protection
B) Only the user's explicit written consent, which must be renewed annually
C) No additional safeguard if the data is encrypted
D) A bilateral trade agreement between the two countries

> [!success] Answer: A
> Official explanation: GDPR requires SCCs or BCRs for transfers to non-adequate jurisdictions.

**Why.** [[Lec_07-Digital Regulation]] §11: transfers need an [[Adequacy Decision]] (Art. 45), [[Standard Contractual Clauses]] (Art. 46) or [[Binding Corporate Rules]] (Art. 47). *Schrems II* upheld SCCs but required a case-by-case assessment.
- B) The "annual renewal of consent" rule is not in the lecture.
- C) Encryption is a security measure, not a transfer mechanism.
- D) Trade agreements are not a GDPR transfer tool.

> [!tip] Intuition
> The lecture also lists "CoC" (codes of conduct) as another route, so "SCCs or BCRs" is not the only list in law; among the four options only A is correct.

## Q19 — Investment agreement contents

**Q19.** An investment agreement between a startup and a venture capital fund typically covers:
A) Only the purchase price and number of shares acquired
B) Terms including purchase price, anti-dilution protection, liquidation preferences, board rights, and governance provisions
C) Only tax implications for the investor
D) Only employee stock option plans (ESOPs)

> [!success] Answer: B
> Official explanation: investment agreements cover price, anti-dilution, liquidation preferences, board rights and governance.

**Why.** [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]] [[Investment Agreement]] (valuation, shares, rights, influence) and [[Anti-Dilution]]; [[Lec_01-Introduction & the Israeli Legal System]] adds [[Liquidation Preference]] and the [[Term Sheet]].
- A), C), D) Each says "only" a narrow slice of a much wider document.

## Q20 — Why valuation matters

**Q20.** Why is valuation important in a startup raising equity financing?
A) It determines the founder's personal wealth
B) It establishes the company's value and therefore how much equity is sold to achieve a target fundraising goal
C) It is required by the Israeli Securities Authority
D) It directly affects the employee benefits budget

> [!success] Answer: B
> Official explanation: valuation determines how much equity is sold to achieve a fundraising target.

**Why.** [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]] [[Valuation]]:

$$
\text{Ownership \%} = \frac{\text{Investment amount}}{\text{Post-money valuation}}
$$

$$
\text{Post-money} = \text{Pre-money} + \text{Investment}
$$

A higher valuation means the same raise buys a smaller slice (less dilution, [[Dilution]]).
- A) Paper wealth follows from valuation but is not why it matters in a raise.
- C) No such requirement is in the lecture.
- D) Not connected to benefits budgets.

---

## ✅ Recap: answer key

| Q | Key | One-line reason | Flag |
|---|---|---|---|
| 1 | B | Prevent disputes, define entitlement over time | |
| 2 | B | Creator owns unless written assignment | Employee-works rule not in lectures |
| 3 | B | Explicit non-binding intent negates gmirot da'at | Label is evidence, not conclusive (*Rabinai*) |
| 4 | C | Marketing plan is not a founders' clause | |
| 5 | C | Explicit, informed, affirmative consent | |
| 6 | B | DPIA for likely high risk | |
| 7 | B | Privacy built in from design | |
| 8 | C | 24 months from grant | "or vest date" parenthesis unsupported |
| 9 | C | Documentation preserves Section 102 election | |
| 10 | C | Only Ltd. gives limited liability here | "Simplest tax" contradicts lecture |
| 11 | C | Shell, fraud, abuse | |
| 12 | C | Gmirat da'at + mesuyamut | |
| 13 | B | Knesset law is hard law | |
| 14 | B | NDA needs definition, purpose, restrictions | Content test beyond lecture |
| 15 | B | Seed funds MVP and validation | Dollar range not in lecture |
| 16 | D | Algorithm kept secret = trade secret | C (copyright) arguably better |
| 17 | B | Vesting keeps commitment | |
| 18 | A | SCCs or BCRs when no adequacy | |
| 19 | B | Price, anti-dilution, liquidation pref, board | |
| 20 | B | Valuation sets equity sold per raise | |

## Related notes

- [[Legal and Tax Aspects]] (hub)
- [[Lec_01-Introduction & the Israeli Legal System]], [[Lec_02-Legal Entrepreneurship — Fundamental Concepts]], [[Lec_03-Company Law & Corporate Structures]], [[Lec_04-Contract Law]], [[Lec_05-Intellectual Property]], [[Lec_06-Employee Stock Option Plans (ESOP)]], [[Lec_07-Digital Regulation]]
