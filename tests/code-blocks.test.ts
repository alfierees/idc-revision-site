import { describe, it, expect } from "vitest";
import { renderMarkdownString } from "../src/lib/render-markdown-string";

const render = (md: string, subject: string) => renderMarkdownString(md, subject, new Map());

const fence = (info: string, body: string) => "```" + info + "\n" + body + "\n```";

/** Text of the `.out-bar` label, or null when the block has no bar. */
const barLabel = (html: string) =>
  html.match(/<div class="out-bar">([^<]*)<\/div>/)?.[1] ?? null;

const REPL_OUTPUT = "accuracy = 0.9871\nprecision = 0.42";

describe("console-output blocks — label", () => {
  it("labels a language-less fence 'R output' in econometrics", async () => {
    const html = await render(fence("", REPL_OUTPUT), "econometrics");
    expect(html).toContain('class="outblock"');
    expect(barLabel(html)).toBe("R output");
  });

  it("labels a language-less fence 'Output' in machine learning", async () => {
    const html = await render(fence("", REPL_OUTPUT), "machine-learning");
    expect(html).toContain('class="outblock"');
    expect(barLabel(html)).toBe("Output");
    expect(html).not.toContain("R output");
  });

  it("labels a language-less fence 'Output' in every other subject", async () => {
    for (const subject of ["accounting", "macro-economics", "micro", "digital-marketing"]) {
      const html = await render(fence("", REPL_OUTPUT), subject);
      expect(barLabel(html), subject).toBe("Output");
    }
  });

  it("falls back to 'Output' when the subject is unknown", async () => {
    const html = await render(fence("", REPL_OUTPUT), "underwater-basket-weaving");
    expect(barLabel(html)).toBe("Output");
  });
});

describe("console-output blocks — explicit fence languages", () => {
  it("honours ```routput regardless of subject", async () => {
    const html = await render(fence("routput", REPL_OUTPUT), "machine-learning");
    expect(html).toContain('class="outblock"');
    expect(barLabel(html)).toBe("R output");
  });

  it("honours ```output regardless of subject", async () => {
    const html = await render(fence("output", REPL_OUTPUT), "econometrics");
    expect(html).toContain('class="outblock"');
    expect(barLabel(html)).toBe("Output");
  });

  it("does not fall through to the syntax-highlighted codeblock", async () => {
    const html = await render(fence("routput", REPL_OUTPUT), "econometrics");
    expect(html).not.toContain("codeblock");
    expect(html).not.toContain("code-bar");
  });

  it("keeps an explicit output fence an output block even when it holds arrows", async () => {
    const html = await render(fence("output", "step 1 --> step 2"), "econometrics");
    expect(html).toContain('class="outblock"');
    expect(html).not.toContain("asciiblock");
  });
});

describe("code fences — unchanged behaviour", () => {
  it("renders an ASCII diagram fence as an unlabelled asciiblock", async () => {
    for (const subject of ["econometrics", "machine-learning"]) {
      const html = await render(fence("", "Train --> Validate --> Test"), subject);
      expect(html, subject).toContain('class="asciiblock"');
      expect(barLabel(html), subject).toBeNull();
    }
  });

  it("still renders ```r as a syntax-highlighted codeblock", async () => {
    const html = await render(fence("r", 'lm(y ~ x, data = df)'), "econometrics");
    expect(html).toContain('class="codeblock"');
    expect(html).toContain('class="lang">r<');
    expect(html).toContain("tok-fn");
  });

  it("still renders ```python as a syntax-highlighted codeblock", async () => {
    const html = await render(fence("python", "model.fit(X, y)"), "machine-learning");
    expect(html).toContain('class="codeblock"');
    expect(html).toContain('class="lang">python<');
  });

  it("leaves mermaid and graph fences for the client-side mounters", async () => {
    for (const info of ["mermaid", "graph"]) {
      const html = await render(fence(info, "a --> b"), "machine-learning");
      expect(html, info).toContain(`language-${info}`);
      expect(html, info).not.toContain("outblock");
      expect(html, info).not.toContain("asciiblock");
    }
  });
});
