---
title: "PS1"
subject: databases-sql
source_doc: /papers/databases-sql/ps-1.pdf
tags:
  - databases
  - sql
  - problem-set
  - erd
  - conceptual-model
  - logical-model
  - weak-entity
  - associative-entity
  - many-to-many
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Hospital Patient Management System.** Design an ERD for a system that tracks patients, doctors, medical appointments, treatments and hospital rooms.

      Define the entities and relationships below, then draw the **conceptual ERD** (professional tool, e.g. draw.io or Lucidchart) with all four entities and clear cardinalities (1:M, 1:1, M:N).

      | Requirement | Count asked |
      | --- | --- |
      | Entities, each with a PK and at least 5 attributes with data types | exactly 4 |
      | [[One-to-Many Relationship]] (1:M) | 2 |
      | [[One-to-One Relationship]] (1:1) | 1 |
      | [[Many-to-Many Relationship]] (M:N) | 3 |
      | [[Weak Entity]] with an identifying relationship | 1 |
      | [[Associative Entity]] derived from an M:N relationship, with attributes | 1 |

      Deliverable: one PDF, conceptual ERD plus the logical ERD as an extra page, drawn in a tool such as draw.io or Lucidchart.
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      ### The student's drawn diagram (typed draw.io ERD)

      The original page, conceptual ERD on top and logical ERD below:

      ![](/images/databases-sql/ps01-q1-student-erd.png)

      ### Redrawn as a mermaid ERD (conceptual, as the student drew it)

      Crow's foot marks the end the student drew. Both ends of `schedules`, `attends`, `Held in`, `undergoes` and `performs` carry a crow's foot in the drawing, so they are shown as many-to-many here. Spelling (`Speicalization`, `Insurence_number`, `Requiers_followup`, `Equirment_required`) is as in the student file.

      ```mermaid
      erDiagram
          PATIENT }o--o{ APPOINTMENTS : schedules
          DOCTOR }o--o{ APPOINTMENTS : attends
          APPOINTMENTS }o--o{ ROOM : "held in"
          PATIENT }o--o{ TREATMENT : undergoes
          DOCTOR }o--o{ TREATMENT : performs
          PATIENT ||--|| MEDICAL_RECORD : has
          DEPARTMENT ||--o{ DOCTOR : "works in"

          PATIENT {
              int Patient_ID PK
              string First_name
              string Last_name
              date Date_of_birth
              string Address
              int Insurence_number
          }
          DOCTOR {
              int Doctor_ID PK
              int Department_ID FK
              string First_name
              string Last_name
              string Speicalization
              string Phone_number
          }
          APPOINTMENTS {
              int Appointment_ID PK
              int Patient_ID FK
              int Doctor_ID FK
              int Room_ID FK
              date Appointment_date
              string Reason
              string Doctor_notes
          }
          ROOM {
              int Room_ID PK
              string Room_type
              int Floor
              int Capacity
              boolean Is_available
              string Equipment
          }
          TREATMENT {
              int Treatment_ID PK
              string Treatment_name
              string description
              int cost
              boolean Requiers_followup
              string Equirment_required
          }
          MEDICAL_RECORD {
              int Patient_ID PK
              date Record_date
              string Blood_type
              string Allergies
              string Medical_history
              date Last_updated
          }
          DEPARTMENT {
              int Department_ID PK
              string Department_head
              int Number_of_staff
              string Description
              int Bed_capacity
              string Operating_hours
              string Department_name
          }
      ```

      `MEDICAL_RECORD` has `Patient_ID` as both PK and FK in the drawing (shown as PK here, since mermaid takes one key marker per attribute).

      ### The handwritten draft, for comparison

      The handwritten draft is a conceptual ERD only. It has **five entities** (Patient, Doctor, Room, Treatment, Medical record), draws **Appointment** as a double-bordered diamond between Patient, Doctor and Room, links Patient and Doctor to Treatment (`undergoes`, `performs`), and joins Patient to Medical record with a double diamond (`has`). It has **no Department** and **no cardinality marks** on any line, so it does not meet the "clear cardinalities" requirement. The typed version supersedes it.

      ### Checking the student's conceptual ERD against the sheet

      | Requirement | Typed ERD | Met? |
      | --- | --- | --- |
      | Exactly 4 entities | 7 boxes: Patient, Doctor, Room, Treatment, Appointments, Medical Record, Department | No (see warning) |
      | Each entity has a PK and at least 5 attributes | Patient 5 plus PK, Room 5 plus PK, Treatment 5 plus PK, Medical Record 5 plus PK, Doctor 4 plus PK plus a FK | Yes, Doctor only if the FK counts |
      | 2 x 1:M | `works in` (Department to Doctor) is the only clean 1:M; `Held in` has crow's feet at both ends | No |
      | 1 x 1:1 | `has` (Patient to Medical Record), bars on both ends | Yes |
      | 3 x M:N | `undergoes`, `performs`, and Patient to Doctor through Appointments; but `schedules`, `attends` and `Held in` are also drawn many-to-many | Three intended, five drawn |
      | 1 weak entity with identifying relationship | Medical Record: double border, double diamond `has`, PK is the borrowed `Patient_ID` | Yes |
      | 1 associative entity from an M:N, with attributes | Appointments (date, reason, doctor notes) sits between Patient and Doctor | Yes, in intent |

      > [!warning] Gaps in the student answer
      > - **Seven entities, not four.** The sheet asks for exactly 4 entities. The student has the four core entities (Patient, Doctor, Room, Treatment) plus Appointments, Medical Record and Department. The sheet is itself ambiguous, because a weak entity and an associative entity are extra boxes by nature, but Department is unrequested and its `works in` line is the only reason the 1:M count looks met.
      > - **Associative entity drawn as an ordinary M:N.** `schedules` is labelled M to N between Patient and Appointments, and `attends` between Appointments and Doctor. If Appointments is the associative entity, each side should be **1:M** (one patient has many appointments, each appointment has one patient), and the diamonds are redundant.
      > - **`Held in` is inconsistent.** Both ends have a crow's foot (many-to-many) in the conceptual diagram, but the logical ERD puts `Room_ID` as a single FK in Appointments, which makes it Room 1 to Appointments M.
      > - **Keys in a conceptual model.** The conceptual ERD already shows FK columns and `PK + FK`, which belongs to the logical step.
      > - **Relationship counts do not match the sheet as drawn:** more than 2 x 1:M and more than 3 x M:N depending on how the diagram is read.
      > - **Typos** in the file (`Speicalization`, `Insurence_number`, `Requiers_followup`, `Equirment_required`).

      > [!todo] No solution in source
      > There is no official or model answer that meets every count on the sheet (4 entities, exactly 2 x 1:M, 1 x 1:1, 3 x M:N). Neither student file is a full match, so no clean reference ERD is given here.
    related_terms: ["entity-relationship-diagram", "entity", "attribute", "conceptual-model", "one-to-many-relationship", "one-to-one-relationship", "many-to-many-relationship", "weak-entity", "associative-entity", "cardinality", "primary-key"]
    source_doc_page: 1
  - id: "2"
    text: |
      Transform your conceptual ERD into a **logical ERD**, using tables, primary keys (PK) and foreign keys (FK). Submit it as an additional page in the same PDF.
    solution: |
      *Related: [[Entity-Relationship Diagram]], [[Junction Table]], [[Weak Entity]]*

      > [!warning] Student answer, not official. Check before relying on it.

      The logical half of the typed ERD (bottom of the image above) resolves the many-to-many relationships into tables:

      ```mermaid
      erDiagram
          PATIENT ||--o{ APPOINTMENTS : books
          DOCTOR ||--o{ APPOINTMENTS : attends
          ROOM ||--o{ APPOINTMENTS : hosts
          PATIENT ||--o{ PATIENT_TREATMENT : undergoes
          TREATMENT ||--o{ PATIENT_TREATMENT : "given in"
          DOCTOR ||--o{ DOCTOR_TREATMENT : performs
          TREATMENT ||--o{ DOCTOR_TREATMENT : "performed in"
          PATIENT ||--o| MEDICAL_RECORD : has
          DEPARTMENT ||--o{ DOCTOR : "works in"

          PATIENT {
              int Patient_ID PK
              string First_name
              string Last_name
              date Date_of_birth
              string Address
              int Insurence_number
          }
          DOCTOR {
              int Doctor_ID PK
              int Department_ID FK
              string First_name
              string Last_name
              string Speicalization
              string Phone_number
          }
          APPOINTMENTS {
              int Appointment_ID PK
              int Patient_ID FK
              int Doctor_ID FK
              int Room_ID FK
              date Appointment_date
              string Reason
              string Doctor_notes
          }
          ROOM {
              int Room_ID PK
              string Room_type
              int Floor
              int Capacity
              boolean Is_available
              string Equipment
          }
          TREATMENT {
              int Treatment_ID PK
              string Treatment_name
              string description
              int cost
              boolean Requiers_followup
              string Equirment_required
          }
          MEDICAL_RECORD {
              int Patient_ID PK
              date Record_date
              string Blood_type
              string Allergies
              string Medical_history
              date Last_updated
          }
          PATIENT_TREATMENT {
              int Patient_ID PK
              int Treatment_ID PK
              date Treatment_date
              int Duration_minutes
              string result
          }
          DOCTOR_TREATMENT {
              int Doctor_ID PK
              int Treatment_ID PK
              int Years_of_experience
              int Success_rate
              int Number_performed
          }
          DEPARTMENT {
              int Department_ID PK
              string Department_head
              int Number_of_staff
              string Description
              int Bed_capacity
              string Operating_hours
              string Department_name
          }
      ```

      In `PATIENT_TREATMENT` and `DOCTOR_TREATMENT` both key columns are PK and FK at once (a [[Composite Primary Key]] made of two [[Foreign Key]]s), which is the standard [[Junction Table]] pattern. `MEDICAL_RECORD.Patient_ID` is PK and FK, which enforces the 1:1 and the weak entity's dependence on Patient.

      > [!tip] Intuition
      > A many-to-many relationship cannot be stored directly in a relational table. Each M:N becomes its own table whose key is the pair of foreign keys, and any attribute that belongs to the *pairing* (date, duration, result) lives there. A weak entity borrows its key from its owner, so its PK is also an FK.

      ### Checking the student's logical ERD

      | Check | Result |
      | --- | --- |
      | Every M:N resolved into a table with a composite PK | Yes: `Patient_Treatment`, `Doctor_Treatment`, and Appointments for Patient to Doctor |
      | 1:1 and weak entity carried through | Yes, `Medical_Record.Patient_ID` is PK + FK |
      | 1:M by FK on the many side | Yes: `Doctor.Department_ID`, `Appointments.Room_ID` |
      | The associative entity has its own attributes | Yes (date, reason, doctor notes) |

      > [!warning] Gaps in the student answer
      > - **`Doctor_Treatment` attributes belong to Doctor, not the pairing.** `Years_of_experience` and `Number_performed` describe the doctor in general (only `Success_rate` plausibly depends on the doctor and treatment together). These would be better in `Doctor` or recomputed.
      > - **Composite PKs block repeats.** `PK(Patient_ID, Treatment_ID)` means a patient can receive a given treatment only once, even though `Treatment_date` is stored. Adding `Treatment_date` to the key (or a surrogate key) would allow repeat treatments.
      > - **No link from Appointments to Treatment**, so a treatment cannot be tied to the visit where it happened.
      > - The logical page still has 7 tables for a brief that asked for 4 entities (see Question 1).
      > - **Crow's feet in the drawing** appear on the table side but the "one" end is unmarked on most lines, so the cardinalities have to be inferred from the FK columns.
    related_terms: ["logical-model", "primary-key", "foreign-key", "composite-primary-key", "junction-table", "many-to-many-relationship", "weak-entity", "one-to-one-relationship"]
    source_doc_page: 2
---
