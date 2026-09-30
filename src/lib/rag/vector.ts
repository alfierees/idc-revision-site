import { Index } from "@upstash/vector";

export function vectorIndex() {
  const url = process.env.RAG_VECTOR_UPSTASH_VECTOR_REST_URL;
  const token = process.env.RAG_VECTOR_UPSTASH_VECTOR_REST_TOKEN;
  if (!url || !token) throw new Error("Vector database is not configured.");
  return new Index({ url, token });
}
