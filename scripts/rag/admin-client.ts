import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";

export const adminUrl = process.env.RAG_ADMIN_URL;

export async function adminRequest<T>(body: Record<string, unknown>): Promise<T> {
  if (!adminUrl) throw new Error("RAG_ADMIN_URL is not set");
  const secret = readFileSync(join(process.cwd(), ".rag-cache/admin-secret"), "utf8").trim();
  if (process.env.RAG_ADMIN_VERCEL_CURL === "1") {
    const configPath = join(process.cwd(), ".rag-cache/admin-curl.conf");
    writeFileSync(configPath, `header = "content-type: application/json"\nheader = "authorization: Bearer ${secret}"\n`, { mode: 0o600 });
    const stdout = await new Promise<string>((resolve, reject) => {
      const child = spawn("vercel", ["curl", `${adminUrl.replace(/\/$/, "")}/api/rag-admin`,
        "--", "--request", "POST", "--config", configPath, "--data-binary", "@-"],
      { cwd: process.cwd(), stdio: ["pipe", "pipe", "pipe"] });
      let output = "";
      let error = "";
      child.stdout.on("data", (part) => { output += part; });
      child.stderr.on("data", (part) => { error += part; });
      child.on("error", reject);
      child.on("close", (code) => code === 0 ? resolve(output) : reject(new Error(`vercel curl failed (${code}): ${error.slice(-400)}`)));
      child.stdin.end(JSON.stringify(body));
    });
    const result = JSON.parse(stdout) as T & { error?: string };
    if (result.error) throw new Error(`RAG admin request failed: ${result.error}`);
    return result;
  }
  const response = await fetch(`${adminUrl.replace(/\/$/, "")}/api/rag-admin`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${secret}` },
    body: JSON.stringify(body),
  });
  const result = await response.json() as T & { error?: string };
  if (!response.ok) throw new Error(`RAG admin request failed (${response.status}): ${result.error ?? "unknown"}`);
  return result;
}
