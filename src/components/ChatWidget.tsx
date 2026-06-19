import { useState, useRef, useEffect } from "preact/hooks";
import { marked } from "marked";
import renderMathInElement from "katex/contrib/auto-render";

interface Source { title: string; url: string; kind: string; subject: string; sourceDoc?: string }
interface Msg { role: "user" | "assistant"; content: string; sources?: Source[] }

const STARTERS = [
  "Explain a concept",
  "How do I answer this type of question?",
  "Find past papers on…",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
    if (bodyRef.current) {
      renderMathInElement(bodyRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
      });
    }
  }, [msgs]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    setInput("");
    const history: Msg[] = [...msgs, { role: "user", content: q }, { role: "assistant", content: "" }];
    setMsgs(history);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(0, -1).map((m) => ({ role: m.role, content: m.content })) }),
      });
      if (res.status === 429) {
        const { error } = await res.json();
        patchLast((m) => { m.content = error === "rate_limited"
          ? "You're sending messages too fast — give it a moment."
          : "The tutor has hit its monthly usage limit. Try again next month."; });
        return;
      }
      if (!res.body) throw new Error("no stream");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const ln of lines) {
          if (!ln.trim()) continue;
          const evt = JSON.parse(ln);
          if (evt.type === "delta") patchLast((m) => { m.content += evt.text; });
          else if (evt.type === "sources") patchLast((m) => { m.sources = evt.sources; });
          else if (evt.type === "error") patchLast((m) => { m.content = evt.message; });
        }
      }
    } catch {
      patchLast((m) => { m.content = "Something went wrong. Please try again."; });
    } finally {
      setBusy(false);
    }
  }

  function patchLast(fn: (m: Msg) => void) {
    setMsgs((prev) => {
      const next = prev.map((m) => ({ ...m }));
      fn(next[next.length - 1]);
      return next;
    });
  }

  return (
    <div class="chat-widget">
      {!open && (
        <button class="chat-fab" onClick={() => setOpen(true)} aria-label="Ask the tutor">Ask</button>
      )}
      {open && (
        <div class="chat-panel">
          <header class="chat-head">
            <span>Revision tutor</span>
            <button onClick={() => setOpen(false)} aria-label="Close">×</button>
          </header>
          <div class="chat-body" ref={bodyRef}>
            {msgs.length === 0 && (
              <div class="chat-starters">
                {STARTERS.map((s) => (
                  <button onClick={() => send(s === "Find past papers on…" ? "Find past papers on " : s)}>{s}</button>
                ))}
              </div>
            )}
            {msgs.map((m) => (
              <div class={`chat-msg chat-${m.role}`}>
                {m.role === "assistant"
                  ? (
                    <>
                      {/* Model output is grounded in our own vetted content and the audience is trusted;
                          marked does not sanitize, so pipe through DOMPurify before widening the audience. */}
                      <div dangerouslySetInnerHTML={{ __html: marked.parse(m.content || "…") as string }} />
                    </>
                  )
                  : <p>{m.content}</p>}
                {m.sources && m.sources.length > 0 && (
                  <div class="chat-sources">
                    <span>Sources</span>
                    <ul>
                      {m.sources.map((s) => (
                        <li>
                          <a href={s.url}>{s.title}</a>
                          {s.sourceDoc && <a class="chat-doc" href={s.sourceDoc}>PDF</a>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <form class="chat-input" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <input value={input} disabled={busy} placeholder="Ask anything…"
              onInput={(e) => setInput((e.target as HTMLInputElement).value)} />
            <button type="submit" disabled={busy}>{busy ? "…" : "Send"}</button>
          </form>
        </div>
      )}
    </div>
  );
}
