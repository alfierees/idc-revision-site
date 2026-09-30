import { useEffect, useRef, useState } from "preact/hooks";
import "../styles/tutor.css";

type Source = { title: string; url: string | null; section: string };
type Message = { role: "user" | "assistant"; content: string; sources?: Source[] };

const EXAMPLES: Record<string, string[]> = {
  accounting: ["How do I apply the five-step revenue model?", "How do I calculate goodwill?"],
  econometrics: ["What does parallel trends mean in DiD?", "When do I use fixed effects?"],
  "machine-learning": ["Why is 86% loan accuracy misleading?", "How do I avoid leakage?"],
  "macro-economics": ["Why does a temporary income rise have a small consumption effect?", "How does immigration affect robot demand?"],
  micro: ["How can fair insurance still be rejected?", "How do I find a mixed-strategy equilibrium?"],
  "digital-marketing": ["Why can last-click attribution mislead?", "What makes connected TV different?"],
};

export default function TutorPanel({ subject }: { subject?: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [messages, busy]);
  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); launcherRef.current?.focus(); }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  async function send(value = question) {
    const text = value.trim();
    if (!text || busy || text.length > 600) return;
    setError("");
    const history = messages.slice(-6).map(({ role, content }) => ({ role, content }));
    setMessages((current) => [...current, { role: "user", content: text }]);
    setQuestion("");
    setBusy(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: text, subject, history }),
      });
      const result = await response.json() as { answer?: string; sources?: Source[]; error?: string };
      if (!response.ok || !result.answer) throw new Error(result.error || "The tutor could not answer. Please try again.");
      setMessages((current) => [...current, { role: "assistant", content: result.answer!, sources: result.sources ?? [] }]);
    } catch (cause) {
      setMessages((current) => current.slice(0, -1));
      setQuestion(text);
      setError(cause instanceof Error ? cause.message : "The tutor could not answer. Please try again.");
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  const examples = EXAMPLES[subject ?? ""] ?? ["Explain the difference between two concepts", "Help me approach an exam question"];
  return (
    <div class="tutor-root">
      {!open && <button ref={launcherRef} class="tutor-launcher" type="button" onClick={() => setOpen(true)} aria-label="Open revision tutor">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h6.5c1.6 0 2.7.6 3.5 1.5.8-.9 1.9-1.5 3.5-1.5H20v13h-2.5c-1.8 0-2.7.5-3.5 1.5-.8-1-1.7-1.5-3.5-1.5H4z"/><path d="M14 7v13M7 9h3M7 12h3"/></svg>
        Ask the notes
      </button>}
      {open && <section class="tutor-panel" role="dialog" aria-modal="true" aria-label="Revision tutor">
        <header class="tutor-header">
          <div><span class="tutor-eyebrow">Revision companion</span><h2>Ask the notes</h2></div>
          <div class="tutor-header-actions">
            {messages.length > 0 && <button type="button" class="tutor-text-button" onClick={() => { setMessages([]); setError(""); }} disabled={busy}>New chat</button>}
            <button type="button" class="tutor-close" aria-label="Close revision tutor" onClick={() => { setOpen(false); launcherRef.current?.focus(); }}>×</button>
          </div>
        </header>
        <div class="tutor-messages" aria-live="polite" aria-relevant="additions">
          {messages.length === 0 && <div class="tutor-empty">
            <p class="tutor-empty-title">Stuck on a topic?</p>
            <p>Ask about a concept, a worked solution, or how to approach an exam question. Answers come from the course material.</p>
            <div class="tutor-examples">{examples.map((example) => <button type="button" onClick={() => send(example)}>{example}<span aria-hidden="true">↗</span></button>)}</div>
          </div>}
          {messages.map((message, index) => <div class={`tutor-message tutor-message-${message.role}`} key={index}>
            <span class="tutor-speaker">{message.role === "user" ? "You" : "Tutor"}</span>
            <p>{message.content}</p>
            {message.role === "assistant" && !!message.sources?.length && <div class="tutor-sources">
              <span class="tutor-sources-label">Sources in the notes</span>
              <ol>{message.sources.map((source, sourceIndex) => <li>
                <span class="tutor-source-number">{sourceIndex + 1}</span>
                {source.url ? <a href={source.url}>{source.title}</a> : <span>{source.title}</span>}
                {source.section && <small>{source.section}</small>}
              </li>)}</ol>
            </div>}
          </div>)}
          {busy && <div class="tutor-thinking" role="status"><span class="tutor-thinking-dot"/>Looking through the notes…</div>}
          <div ref={bottomRef}/>
        </div>
        <form class="tutor-compose" onSubmit={(event) => { event.preventDefault(); send(); }}>
          {error && <p class="tutor-error" role="alert">{error}</p>}
          <label class="sr-only" for="tutor-question">Ask a revision question</label>
          <div class="tutor-input-row">
            <textarea id="tutor-question" ref={inputRef} rows={2} maxLength={600} value={question} placeholder="Ask a question about the course…" onInput={(event) => setQuestion(event.currentTarget.value)} onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); send(); }
            }}/>
            <button type="submit" disabled={!question.trim() || busy} aria-label="Send question">↑</button>
          </div>
          <p class="tutor-footnote">Check the course material before relying on an answer.</p>
        </form>
      </section>}
    </div>
  );
}
