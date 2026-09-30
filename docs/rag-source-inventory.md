# RAG source inventory

Generated from the repository, the live IDC Obsidian Semester 2 vault, and the local Semester 2 course folder on 30 September 2026. Run `python3 scripts/rag/extract-sources.py` to refresh the ignored, itemised `.rag-cache/inventory.json` and `.rag-cache/sources.jsonl` files before re-indexing. The vault and source folders are read only during extraction.

| Source | Unique text documents included |
| --- | ---: |
| Existing revision site content | 1,295 document units (713 Markdown files; question entries are split into individual units) |
| Obsidian course vault | 135 |
| Local Semester 2 course folder | 127 |
| PDFs and office files already public on the site | 37 |
| **Total for chunk comparison** | **1,594** |

The local-file scan found 629 supported files. Of these, 299 supplied unique text, 78 were byte-for-byte duplicates, 2 had duplicate extracted text, and 249 were deliberately excluded. Most exclusions (204) are course final-project folders containing student project work rather than teaching material. Other exclusions cover AppsFlyer/creative-optimisation project material, Alfie's named homework notebooks, presentation deliverables, Office temporary files, agent instructions, one very large raw spreadsheet, and a full BrandFusion textbook where assigned chapter extracts are already present. These exclusions are recorded per file in the ignored inventory and should be revisited if the tutor must answer questions about those projects.

One image-only PDF needs OCR: `Digital marketing/Past exams:exam structure/2024-B1.pdf`. The site already has the corresponding [2024 B1 exam page](../src/content/past-papers/digital-marketing/pp-05-2024-exam-b1.md), so its question text is available to retrieval through the site corpus. The PDF itself is not represented in the vector index.

This inventory proves which files were scanned and why each was included or omitted. It does not prove that PDF text extraction preserved equations, diagrams, or tables perfectly. Those remain a known retrieval limitation, particularly in quantitative courses.
