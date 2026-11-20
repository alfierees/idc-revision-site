---
title: LEFT JOIN
subject: databases-sql
aliases: []
related: ["INNER JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "IS NULL", "Anti-Join", "NULL"]
source_folder: databases-sql
ai_drafted: true
---

Keeps all rows of the left table and adds the matching right rows; unmatched left rows get NULLs in the right-hand columns.

```sql
SELECT p.ProductName, COUNT(o.OrderID)
FROM Products p
LEFT JOIN Orders o ON p.ProductID = o.ProductID
GROUP BY p.ProductID;
```

## When to use

PP 03 Q2.2 and PP 04 Q3 show its row count equals the left table size when each left row has at most one match. PP 04 Q1 uses it to count orders per product: `COUNT(o.OrderID)` gives 0 for an unmatched product, where `COUNT(*)` would wrongly give 1.

See [[PP_01-Constraints, ER Modelling, FULL OUTER JOIN, HAVING vs WHERE & Foreign Keys (2024 Moed A)|PP 01]].
