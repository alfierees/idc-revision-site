import { describe, it, expect } from "vitest";
import { decodeHtmlEntities } from "../src/lib/html-entities";

describe("decodeHtmlEntities", () => {
  it("decodes hex entities", () => {
    expect(decodeHtmlEntities("Summary &#x26; Quick")).toBe("Summary & Quick");
  });
  it("decodes numeric entities", () => {
    expect(decodeHtmlEntities("a &#38; b")).toBe("a & b");
  });
  it("decodes named entities", () => {
    expect(decodeHtmlEntities("&amp; &lt; &gt; &quot; &apos;")).toBe("& < > \" '");
  });
  it("leaves plain text untouched", () => {
    expect(decodeHtmlEntities("plain text")).toBe("plain text");
  });
});
