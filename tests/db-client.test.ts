import { describe, expect, it } from "vitest";
import { strictSsl } from "../src/lib/db/client";

describe("strictSsl", () => {
  it("pins full certificate checks for Neon's sslmode=require", () => {
    expect(strictSsl("postgresql://u:p@host/db?sslmode=require&channel_binding=require"))
      .toBe("postgresql://u:p@host/db?sslmode=verify-full&channel_binding=require");
    expect(strictSsl("postgresql://u:p@host/db?x=1&sslmode=prefer")).toBe("postgresql://u:p@host/db?x=1&sslmode=verify-full");
  });
  it("leaves other URLs alone", () => {
    expect(strictSsl("postgresql://u:p@host/db?sslmode=verify-full")).toBe("postgresql://u:p@host/db?sslmode=verify-full");
    expect(strictSsl("postgresql://localhost/db")).toBe("postgresql://localhost/db");
  });
});
