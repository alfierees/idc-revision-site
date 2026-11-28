---
title: "Quick Self-Test"
subject: legal-and-tax
type: self-test
description: "16 new exam-style questions in course order: 12 multiple-choice checks like Part 2, two worked numbers questions (vesting and tax, a round with an option pool), a contract-formation question and a full 25-point case like Part 1, each with a model answer."
course: Legal and Tax Aspects of Entrepreneurship
semester: 1
year: 2
order: 6
tags:
  - legal-and-tax
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Hard law or soft law"
    text: |
      Which of these is **soft law**?
    options:
      - label: a
        text: |
          A Knesset statute on companies.
        why: |
          A statute is the core of hard law: binding on everyone.
      - label: b
        text: |
          A startup's internal code of conduct for its employees.
        correct: true
        why: |
          Codes of conduct, guidelines and contracts bind only by agreement: soft law.
      - label: c
        text: |
          A regulation issued by a minister under a statute.
        why: |
          Secondary legislation is still hard law, just lower in the hierarchy.
      - label: d
        text: |
          A Supreme Court ruling.
        why: |
          Israel is a mixed system: precedent binds, so a ruling is hard law.
    solution: |
      **Answer (b).** Codes of conduct, guidelines and contracts bind only by agreement: soft law.
  - id: "2"
    title: "2 · What to do at incorporation"
    text: |
      Two founders are registering their company this week. Which step belongs to **incorporation**, the stage they are at?
    options:
      - label: a
        text: |
          Negotiate the term sheet.
        why: |
          That belongs to the investment round, later.
      - label: b
        text: |
          Run the investor's due diligence.
        why: |
          Also part of an investment round: the investor checks the company.
      - label: c
        text: |
          Plan the tax on an exit.
        why: |
          That is the exit stage.
      - label: d
        text: |
          Assign the founders' existing IP to the company.
        correct: true
        why: |
          Lecture 2's incorporation to-do list: register, adopt Articles, **assign IP to the company**, set up the ESOP, open a bank account. Without the assignment the IP stays with the individuals.
    solution: |
      **Answer (d).** Lecture 2's incorporation to-do list: register, adopt Articles, **assign IP to the company**, set up the ESOP, open a bank account. Without the assignment the IP stays with the individuals.
  - id: "3"
    title: "3 · What the board keeps"
    text: |
      Which of these may the board of an Israeli company **not** delegate to the CEO?
    options:
      - label: a
        text: |
          Approving the annual financial statements.
        correct: true
        why: |
          Approving the financial statements is one of the board's non-delegable powers, with appointing or dismissing the CEO, strategy and dividends.
      - label: b
        text: |
          Signing a contract with a cloud supplier.
        why: |
          Day-to-day management: exactly what the CEO is for.
      - label: c
        text: |
          Hiring a junior engineer.
        why: |
          Day-to-day management again.
      - label: d
        text: |
          Choosing an office lease.
        why: |
          An operational decision the CEO can take.
    solution: |
      **Answer (a).** Approving the financial statements is one of the board's non-delegable powers, with appointing or dismissing the CEO, strategy and dividends.
  - id: "4"
    title: "4 · Funded by loans"
    text: |
      The shareholders of a startup financed it almost entirely with **loans** from themselves and put in almost no share capital. It becomes insolvent. What can a court do with the shareholders' loans?
    options:
      - label: a
        text: |
          Cancel them, because shareholders can never lend to their own company.
        why: |
          Shareholder loans are lawful; the issue is their ranking.
      - label: b
        text: |
          Pay them first, ahead of the unsecured creditors.
        why: |
          The opposite of the rule.
      - label: c
        text: |
          Subordinate them: pay them only after the other creditors.
        correct: true
        why: |
          *Northern Chicks*: a company financed by shareholder loans instead of capital can have those loans paid after the other creditors.
      - label: d
        text: |
          Pierce the veil automatically and make the shareholders pay all the debts.
        why: |
          Piercing (s.6) needs fraud or an unreasonable risk to creditors with the shareholder's awareness; it is never automatic.
    solution: |
      **Answer (c).** *Northern Chicks*: a company financed by shareholder loans instead of capital can have those loans paid after the other creditors.
  - id: "5"
    title: "5 · The term sheet that was not signed"
    text: |
      An investor and a startup negotiate for six weeks. They exchange a term sheet headed "**Non-binding, except for the confidentiality clause**". The startup turns down another investor because of these talks. The investor then walks away, and it turns out they never meant to invest: they wanted the startup's customer list.

      a. Is there a binding investment contract? Name the test.

      b. Does the confidentiality clause bind?

      c. Does the startup have any claim over the wasted six weeks? Under which section?
    solution: |
      a. **No.** A contract needs **gmirat da'at** (an objective intention to be bound) and **mesuyamut** (definite terms). A document expressly headed "non-binding" shows no intention to be bound on the investment.

      b. **Yes.** The parties carved it out: on that clause they did show an intention to be bound, and its terms are definite. Using the customer list breaches it.

      c. **Yes, damages under s.12** of the Contracts Law: good faith in **negotiation**. Negotiating with no intention to invest, to obtain information, is bad faith, and s.12 gives damages even though no contract was formed (here, the lost alternative investor).
  - id: "6"
    title: "6 · The freelancer's code"
    text: |
      A startup paid a freelance developer, on an oral agreement, to write its app. Nothing was signed. Who owns the copyright in the code, on the course's rule?
    options:
      - label: a
        text: |
          The startup, because it paid for the work.
        why: |
          Paying is not an assignment: copyright stays with the creator.
      - label: b
        text: |
          The startup, because the app is published under its name.
        why: |
          A name on the product does not transfer ownership.
      - label: c
        text: |
          Nobody yet: code is protected only once it is registered.
        why: |
          Copyright is automatic. There is no register.
      - label: d
        text: |
          The developer, until they sign a written assignment.
        correct: true
        why: |
          Copyright vests in the **creator**; the company gets it only through a **written IP assignment**. Fix it now, before due diligence finds it.
    solution: |
      **Answer (d).** Copyright vests in the **creator**; the company gets it only through a **written IP assignment**. Fix it now, before due diligence finds it.
  - id: "7"
    title: "7 · Protecting the ranking algorithm"
    text: |
      A startup's edge is a ranking algorithm that runs on its servers. Users never see it. Which protection fits best?
    options:
      - label: a
        text: |
          A patent, because it lasts 20 years.
        why: |
          A patent publishes the invention for everyone to read, and an algorithm may not meet the patent tests at all.
      - label: b
        text: |
          A trade secret, kept with NDAs and access controls.
        correct: true
        why: |
          Confidential information with value, protected for as long as it stays secret, provided the company makes **reasonable efforts** to keep it so.
      - label: c
        text: |
          A trademark.
        why: |
          A trademark protects names and logos, not technology.
      - label: d
        text: |
          A registered design.
        why: |
          A design protects the look of a product, not how it works.
    solution: |
      **Answer (b).** Confidential information with value, protected for as long as it stays secret, provided the company makes **reasonable efforts** to keep it so.
  - id: "8"
    title: "8 · Tel Aviv users in Berlin"
    text: |
      A Tel Aviv startup with no office or staff in the EU sells a fitness app to users in Germany and collects their data. Does the GDPR apply?
    options:
      - label: a
        text: |
          Yes: it processes the data of people in the EU (Art. 3).
        correct: true
        why: |
          The GDPR is extraterritorial: it covers any organisation in the EU **or** processing data of people in the EU.
      - label: b
        text: |
          No: the company has no establishment in the EU.
        why: |
          Establishment is one route in, not the only one.
      - label: c
        text: |
          Only if the company has more than 250 employees.
        why: |
          There is no size threshold for the GDPR's scope.
      - label: d
        text: |
          Only if the data is stored on servers in the EU.
        why: |
          Where the servers are does not decide scope; whose data it is does.
    solution: |
      **Answer (a).** The GDPR is extraterritorial: it covers any organisation in the EU **or** processing data of people in the EU.
  - id: "9"
    title: "9 · The top fine"
    text: |
      A company with global annual turnover of **€1 billion** commits a serious GDPR breach. What is the maximum fine?
    options:
      - label: a
        text: |
          €20 million.
        why: |
          €20M is the floor of the cap, used only when 4% is smaller.
      - label: b
        text: |
          €4 million.
        why: |
          4% of €100M, not of €1bn.
      - label: c
        text: |
          €40 million.
        correct: true
        why: |
          The cap is €20M **or** 4% of global annual turnover, **whichever is higher**: 4% of €1bn = €40M.
      - label: d
        text: |
          €24 million.
        why: |
          The two figures are not added.
    solution: |
      **Answer (c).** The cap is €20M **or** 4% of global annual turnover, **whichever is higher**: 4% of €1bn = €40M.
  - id: "10"
    title: "10 · Noa leaves at month 20"
    text: |
      Noa, an employee (not a controlling shareholder), was granted **6,000 options** at a strike of \$2 under the Section 102 Capital Gain Track, with 4-year vesting, a 1-year cliff and monthly vesting after it. She resigns, without cause, **20 months** after the grant.

      a. How many options have vested?

      b. What happens to the rest, and how long does she have to exercise the vested ones?

      c. She exercises at month 21. Is the exercise taxed?

      d. The shares are worth \$12. Compare her tax if the trustee sells them at month 22 and at month 25.
    solution: |
      a. A quarter vests at the cliff: $6{,}000 / 4 = 1{,}500$. The remaining 4,500 vest over 36 months: 125 a month. Month 20 is 8 months after the cliff: $1{,}500 + 8 \times 125 = $ **2,500 vested**.

      b. The **3,500 unvested** options expire when she leaves. Leaving without cause, she has **3 months** to exercise the vested ones (to month 23).

      c. **No.** On the Capital Gain Track the tax event is the **sale** (or release from the trustee), not the exercise.

      d. Gain $= 2{,}500 \times (12 - 2) = \$25{,}000$.
      - **Month 22:** before 24 months from the grant, so the marginal rate, up to about 59%: up to **\$14,750**.
      - **Month 25:** past 24 months from the grant: **25%** = **\$6,250**.

      The 24 months run from the **grant**, so leaving at month 20 does not stop her qualifying if the shares stay with the trustee until month 24.
  - id: "11"
    title: "11 · Options for the consultant"
    text: |
      A startup grants options to an outside marketing **consultant**. How are they taxed?
    options:
      - label: a
        text: |
          Under Section 3(i): at exercise, as ordinary income.
        correct: true
        why: |
          Section 102 covers employees and officers only. Consultants, service providers and controlling shareholders fall under **Section 3(i)**: taxed at **exercise**, as ordinary income.
      - label: b
        text: |
          Under the Section 102 Capital Gain Track, at 25%.
        why: |
          A consultant is not eligible for Section 102.
      - label: c
        text: |
          Under the Section 102 Ordinary Income Track, through a trustee.
        why: |
          Any Section 102 track needs an employee or officer.
      - label: d
        text: |
          They are exempt until the company goes public.
        why: |
          No such exemption in the course.
    solution: |
      **Answer (a).** Section 102 covers employees and officers only. Consultants, service providers and controlling shareholders fall under **Section 3(i)**: taxed at **exercise**, as ordinary income.
  - id: "12"
    title: "12 · The first grant date"
    text: |
      The trustee filed the company's option plan with the Tax Authority on **1 March**. What is the earliest date the company can grant options under it?
    options:
      - label: a
        text: |
          1 March, the day of filing.
        why: |
          There is a waiting period after filing.
      - label: b
        text: |
          15 March.
        why: |
          No 14-day rule in the course.
      - label: c
        text: |
          31 March.
        correct: true
        why: |
          Grants can be made **30 days** after the plan is filed. Then the board's approval goes to the trustee within 45 days and the signed agreements within 90.
      - label: d
        text: |
          30 May.
        why: |
          That mixes in the 90-day deadline, which is for depositing the signed agreements.
    solution: |
      **Answer (c).** Grants can be made **30 days** after the plan is filed. Then the board's approval goes to the trustee within 45 days and the signed agreements within 90.
  - id: "13"
    title: "13 · Pre-money from a stake"
    text: |
      An investor puts in **\$4M for 20%** of the company, fully diluted. What is the **pre-money** valuation?
    options:
      - label: a
        text: |
          \$20M.
        why: |
          That is the post-money: $4 / 0.2$.
      - label: b
        text: |
          \$24M.
        why: |
          Adds the investment to the post-money, which already includes it.
      - label: c
        text: |
          \$5M.
        why: |
          $4 / 0.8$: the wrong division.
      - label: d
        text: |
          \$16M.
        correct: true
        why: |
          Post-money $= 4 / 0.2 = \$20\text{M}$; pre-money $= 20 - 4 = \$16\text{M}$.
    solution: |
      **Answer (d).** Post-money $= 4 / 0.2 = \$20\text{M}$; pre-money $= 20 - 4 = \$16\text{M}$.
  - id: "14"
    title: "14 · A 5% hire"
    text: |
      The company has **1,900,000** fully diluted shares and wants a new VP to own **exactly 5%** after the grant. How many new shares?
    options:
      - label: a
        text: |
          95,000.
        why: |
          $5\% \times 1{,}900{,}000$: gives only 4.76% of the new total.
      - label: b
        text: |
          100,000.
        correct: true
        why: |
          $\dfrac{1{,}900{,}000 \times 0.05}{0.95} = 100{,}000$. Check: $100{,}000 / 2{,}000{,}000 = 5\%$.
      - label: c
        text: |
          105,000.
        why: |
          Over-grants: about 5.2%.
      - label: d
        text: |
          90,250.
        why: |
          Multiplies by 0.95 instead of dividing: under-grants further.
    solution: |
      **Answer (b).** $\dfrac{1{,}900{,}000 \times 0.05}{0.95} = 100{,}000$. Check: $100{,}000 / 2{,}000{,}000 = 5\%$.
  - id: "15"
    title: "15 · The round with a pool"
    text: |
      Two founders hold **1,000,000** shares between them. An investor offers **\$3M for 25%** fully diluted, on the condition that a **10% option pool** (of the post-round total) is created **pre-money**.

      a. Find the post-money and the pre-money.

      b. How many shares do the pool and the investor get, and what is the price per share?

      c. What do the founders own after the round? What would they own if there were no pool?

      d. Who bears the pool's dilution, and why does the investor ask for it pre-money?
    solution: |
      a. Post-money $= 3 / 0.25 = \$12\text{M}$; pre-money $= 12 - 3 = \$9\text{M}$.

      b. After the round the founders hold $100\% - 25\% - 10\% = 65\%$, so the total is $1{,}000{,}000 / 0.65 \approx 1{,}538{,}462$ shares.
      - Pool: $0.10 \times 1{,}538{,}462 \approx$ **153,846**.
      - Investor: $0.25 \times 1{,}538{,}462 \approx$ **384,615**.
      - Price per share $= \dfrac{\text{pre-money}}{\text{pre-round fully diluted shares}} = \dfrac{9{,}000{,}000}{1{,}153{,}846} \approx$ **\$7.80**. Check: $384{,}615 \times 7.80 \approx \$3\text{M}$.

      c. **65%** (32.5% each). With no pool: price $9{,}000{,}000 / 1{,}000{,}000 = \$9$, the investor gets 333,333 shares, and the founders keep **75%**.

      d. The **founders**. A pool created pre-money sits in the pre-round share count, so it lowers the price per share and the investor still gets exactly 25%. Created post-money, the investor would be diluted too.
  - id: "16"
    title: "16 · The 25-point case: HealthLoop"
    text: |
      Yael and Tom founded **HealthLoop**, an app that tracks patients' blood pressure for clinics. Before incorporating, they signed a page headed "**Letter of Intent, not legally binding**" giving Yael 60% and Tom 40%. Tom wrote all of the app's code over the summer before the company existed. Nothing else was signed.

      A clinic in Vienna is now piloting the app and uploading patients' readings. The only privacy text is a line in the terms of service: "by using the app you agree to our use of your data".

      To save cash, the founders promised their designer, an outside freelancer, "1% in options under Section 102" by email.

      Tom has now left, says the code is his, and has offered it to a competitor.

      *Advise Yael.* Up to one page.
    solution: |
      **Diagnosis.** HealthLoop never regulated the founders' relationship, never acquired its core asset, and is processing sensitive EU data without a lawful basis.

      **1. The founders' relationship.** The letter is expressly non-binding: no **gmirat da'at**, so no contract, and the 60/40 split is not enforceable as such. A founders' agreement should have fixed the equity split with **vesting and a cliff** (Tom's departure would then leave his unvested shares with the company), roles, **decision-making thresholds**, an **IP assignment**, a non-compete (enforceable only to protect a real trade secret or if paid for), buy-back on exit and dispute resolution.

      **2. Who owns the code.** Copyright arises automatically and vests in the **creator**: Tom. He wrote it before incorporation and assigned nothing in writing, so the company owns nothing and Tom can probably license it. Yael's options: negotiate a written **assignment of all existing and future IP** to the company now (in exchange for his equity), or rebuild. Anything confidential, such as unpublished algorithms or the clinic data model, should be kept as a **trade secret** with NDAs and access control.

      **3. GDPR.** The patients are in the EU, so the GDPR applies to HealthLoop despite having no EU office (**Art. 3**). Health data is high risk. A line in the ToS is **not consent**: consent must be freely given, specific, informed and an affirmative act before collection (**Art. 6**). Fix: identify a lawful basis (explicit opt-in consent, or a contract with the clinic as controller and HealthLoop as processor), a privacy notice, a **DPIA** before continuing (**Art. 35**), privacy by design (**Art. 25**: encryption, access control), a record of processing, a DPO if required, retention limits, and SCCs if data leaves the EU. Fines reach €20M or 4% of turnover, whichever is higher.

      **4. The designer's options.** An email promise is not a grant. And a freelancer is not an employee: **Section 102 does not apply**. Options to a service provider fall under **Section 3(i)**, taxed at exercise as ordinary income. If the company wants to reward the designer, it should sign a written option agreement under 3(i) and say so honestly, or hire the designer as an employee and grant under the Capital Gain Track (trustee, 24 months from grant, the 30/45/90-day deadlines).

      **Conclusion.** Sign a founders' agreement with vesting and get Tom's written IP assignment before anything else, pause the pilot until the data handling has a lawful basis and a DPIA, and put the designer's equity in writing under the right section, before the first investor's due diligence finds all three.
---

> Twelve multiple-choice questions like Part 2 (the correct letters are spread evenly), two numbers questions, one contract question and a full case like Part 1. Write your answer before you open the solution. For the case, give yourself 25 minutes and one page, then compare paragraph by paragraph with the model answer and the [[Exam Question Playbook]].
