---
title: Composite Primary Key
subject: databases-sql
aliases: []
related: [Primary Key, Junction Table, Foreign Key, Surrogate Key]
source_folder: databases-sql
ai_drafted: true
---

A [[Primary Key]] made of two or more columns, typical for a [[Junction Table]] where both columns are also [[Foreign Key]]s.

## When to use

PP 04 Q6 contrasts a composite key with a surrogate key on a many-to-many table. In PS 01 `PK(Patient_ID, Treatment_ID)` stops a patient receiving the same treatment twice, and Sakila's `film_actor` has a composite key `(actor_id, film_id)`.

See [[PP_04-Join Counts, Tour ERD, Constraints & Many-to-Many Keys (Moed B, undated)|PP 04]].
