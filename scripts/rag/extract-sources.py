"""Extract local course sources for RAG without committing their text to Git.

Run from the repository root. The output stays in ignored .rag-cache/; inventory.json
records every candidate and any extraction gap. The public site is scanned first so
identical local copies inherit a student-accessible URL.
"""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
import xml.etree.ElementTree as ET
import zipfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
VAULT = Path.home() / "Documents/Obsidian/IDC notes/Year 2/Semester 2"
SOURCE = Path.home() / "Desktop/IDC/IDC subjects/Year 2/Semester 2"
OUTPUT = ROOT / ".rag-cache"
SUBJECTS = {
    "Accounting": "accounting",
    "Econometrics": "econometrics",
    "Machine Learning": "machine-learning",
    "Data Science": "machine-learning",
    "Macro-Economics": "macro-economics",
    "Micro-Economics": "micro",
    "Digital Marketing": "digital-marketing",
}
SOURCE_NAMES = {
    "Machine learning": "machine-learning",
    "Econometrics ": "econometrics",
    "Digital marketing": "digital-marketing",
    **SUBJECTS,
}
FORMATS = {".md", ".txt", ".pdf", ".docx", ".pptx", ".xlsx", ".ipynb"}
EXCLUDED_PARTS = {
    ".venv", "node_modules", "Final project", "deliverables", "PIVOT - Creative Optimization",
    "AppsFlyer Pivot Project", "Presentation", "FINAL - Submit to Moodle",
    "Brief & Docs",
    "Raw data for assignments", "AGENTS.md", "3-BrandFusion2022-FULL_BOOK.pdf",
}


def content_hash(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def xml_text(data: bytes) -> str:
    root = ET.fromstring(data)
    paragraphs = []
    for paragraph in root.iter():
        if paragraph.tag.rsplit("}", 1)[-1] == "p":
            text = "".join(node.text or "" for node in paragraph.iter()
                           if node.tag.rsplit("}", 1)[-1] == "t")
            if text.strip():
                paragraphs.append(text)
    return "\n".join(paragraphs)


def extract(path: Path) -> str:
    suffix = path.suffix.lower()
    if suffix == ".pdf":
        process = subprocess.run(["pdftotext", "-layout", str(path), "-"],
                                 capture_output=True, timeout=120)
        if process.returncode:
            raise RuntimeError(process.stderr.decode("utf-8", "replace")[:300])
        return process.stdout.decode("utf-8", "replace")
    if suffix in {".md", ".txt"}:
        text = path.read_text(encoding="utf-8", errors="replace")
        return re.sub(r"\A---\s*\n.*?\n---\s*\n", "", text, count=1, flags=re.S)
    if suffix == ".ipynb":
        notebook = json.loads(path.read_text(encoding="utf-8"))
        return "\n\n".join("".join(cell.get("source", [])) for cell in notebook.get("cells", []))
    with zipfile.ZipFile(path) as archive:
        if suffix == ".docx":
            names = [name for name in archive.namelist() if name == "word/document.xml"]
        elif suffix == ".pptx":
            names = sorted((name for name in archive.namelist()
                            if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)),
                           key=lambda name: int(re.search(r"slide(\d+)", name).group(1)))
        elif suffix == ".xlsx":
            names = sorted(name for name in archive.namelist()
                           if re.fullmatch(r"xl/worksheets/sheet\d+\.xml", name))
            shared = []
            if "xl/sharedStrings.xml" in archive.namelist():
                strings = ET.fromstring(archive.read("xl/sharedStrings.xml"))
                shared = ["".join(n.text or "" for n in item.iter()
                                  if n.tag.rsplit("}", 1)[-1] == "t") for item in strings]
            sheets = []
            for name in names:
                root = ET.fromstring(archive.read(name))
                rows = []
                for row in root.iter():
                    if row.tag.rsplit("}", 1)[-1] != "row":
                        continue
                    cells = []
                    for cell in row:
                        if cell.tag.rsplit("}", 1)[-1] != "c":
                            continue
                        value = next((n.text or "" for n in cell
                                      if n.tag.rsplit("}", 1)[-1] == "v"), "")
                        if cell.attrib.get("t") == "s" and value.isdigit():
                            value = shared[int(value)]
                        if value.strip():
                            cells.append(value)
                    if cells:
                        rows.append(" | ".join(cells))
                sheets.append(f"Sheet {Path(name).stem}:\n" + "\n".join(rows))
            return "\n\n".join(sheets)
        else:
            return ""
        return "\n\n".join(xml_text(archive.read(name)) for name in names)


def candidates():
    public = ROOT / "public/papers"
    if public.exists():
        for path in sorted(public.rglob("*")):
            if path.is_file() and path.suffix.lower() in FORMATS:
                rel = path.relative_to(public)
                yield path, rel.parts[0], "public-file", f"/papers/{rel.as_posix()}", None
    if VAULT.exists():
        for folder, subject in SUBJECTS.items():
            base = VAULT / folder
            if base.exists():
                for path in sorted(base.rglob("*")):
                    if path.is_file() and path.suffix.lower() in FORMATS:
                        parts = path.relative_to(base).parts
                        reason = next((part for part in parts if part in EXCLUDED_PARTS or part.startswith(".")), None)
                        yield path, subject, "vault", None, reason
    if SOURCE.exists():
        for folder, subject in SOURCE_NAMES.items():
            base = SOURCE / folder
            if base.exists():
                for path in sorted(base.rglob("*")):
                    if path.is_file() and path.suffix.lower() in FORMATS:
                        parts = path.relative_to(base).parts
                        reason = next((part for part in parts if part in EXCLUDED_PARTS or part.startswith((".", "~$"))), None)
                        if not reason and any("appsflyer" in part.lower() for part in parts):
                            reason = "AppsFlyer project material"
                        if not reason and folder == "Data Science" and parts[:1] == ("Homeworks",) and path.stem.lower().startswith(("alfie.", "alfie_")):
                            reason = "Personal homework"
                        yield path, subject, "local-file", None, reason


def main() -> None:
    OUTPUT.mkdir(exist_ok=True)
    records = []
    documents = []
    seen_bytes = {}
    seen_text = {}
    for path, subject, source, url, excluded_by in candidates():
        rel = (path.relative_to(ROOT) if source == "public-file" else
               path.relative_to(VAULT) if source == "vault" else path.relative_to(SOURCE))
        source_path = f"{source}/{rel.as_posix()}"
        record = {"path": source_path, "subject": subject, "format": path.suffix.lower(),
                  "source": source, "status": ""}
        if excluded_by:
            record.update(status="excluded-by-policy", reason=excluded_by)
            records.append(record)
            continue
        try:
            digest = content_hash(path.read_bytes())
            if digest in seen_bytes:
                record.update(status="duplicate-file", duplicate_of=seen_bytes[digest])
                records.append(record)
                continue
            seen_bytes[digest] = source_path
            text = extract(path).replace("\x00", "").strip()
            text_digest = content_hash(re.sub(r"\s+", " ", text).encode())
            if text_digest in seen_text:
                record.update(status="duplicate-text", duplicate_of=seen_text[text_digest])
            elif len(text) < 120:
                record.update(status="needs-ocr-or-empty", characters=len(text))
            else:
                seen_text[text_digest] = source_path
                doc = {"id": f"source/{subject}/{digest[:20]}", "title": path.stem,
                       "subject": subject, "kind": path.suffix.lower().lstrip("."),
                       "text": text, "url": url, "sourcePath": source_path, "source": source}
                documents.append(doc)
                record.update(status="included", characters=len(text), document_id=doc["id"])
        except Exception as exc:
            record.update(status="extraction-error", error=str(exc)[:300])
        records.append(record)
    (OUTPUT / "sources.jsonl").write_text(
        "".join(json.dumps(doc, ensure_ascii=False) + "\n" for doc in documents), encoding="utf-8")
    summary = {"candidates": len(records), "included": len(documents),
               "by_status": dict(Counter(r["status"] for r in records)),
               "by_source": dict(Counter(d["source"] for d in documents)),
               "by_subject": dict(Counter(d["subject"] for d in documents)),
               "records": records}
    (OUTPUT / "inventory.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({key: value for key, value in summary.items() if key != "records"}, indent=2))


if __name__ == "__main__":
    main()
