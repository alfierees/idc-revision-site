import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildTotals } from "../lib/progress/totals";

export const GET: APIRoute = async () => {
  const totals = buildTotals({
    subjects: (await getCollection("subjects")).map((s) => s.data),
    lectures: await getCollection("lectures"),
    problemSets: await getCollection("problem-sets"),
    pastPapers: await getCollection("past-papers"),
  });
  return new Response(JSON.stringify(totals), { headers: { "Content-Type": "application/json" } });
};
