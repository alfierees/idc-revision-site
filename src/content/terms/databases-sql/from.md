---
title: FROM
subject: databases-sql
aliases: []
related: ["Logical Order of Execution", "JOIN", "WHERE", "Alias"]
source_folder: databases-sql
ai_drafted: true
---

The first clause SQL evaluates: it names the source tables the rest of the query works on, and a table alias can be given here.

```sql
SELECT title
FROM film;
```

## When to use

Every query in the problem sets starts here, for example PS 03 begins `FROM film f`. PP 01 Q4.2 lists it first in the logical order: FROM, WHERE, GROUP BY, HAVING, SELECT.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
