---
title: INSERT INTO
subject: databases-sql
aliases: ["INSERT"]
related: ["NOT NULL Constraint", "DEFAULT Constraint", "AUTO_INCREMENT", "NULL"]
source_folder: databases-sql
ai_drafted: true
---

Adds rows to a table. Columns that are nullable, have a DEFAULT or are AUTO_INCREMENT can be left out of the column list, and the server fills them in.

```sql
INSERT INTO author (first_name, last_name)
VALUES ('Foo', 'Bar');
```

## When to use

PP 03 Q5 asks which `INSERT` statements succeed given NOT NULL, DEFAULT and AUTO_INCREMENT columns. PP 05 Q3 asks for an example of an optional column (a nullable one defaults to NULL).

See [[PP_03-ERD to Tables, JOIN Counts, Foreign Key Mechanisms, GROUP BY & INSERT Defaults (2024 Moed A)|PP 03]].
