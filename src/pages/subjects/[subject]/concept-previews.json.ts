import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { getConceptPreviews } from "../../../lib/concept-previews";

// One preview file per subject, fetched by HoverPreview on demand. Inlining it
// on every page cost ~50 KB a page (72 MB of a 157 MB build, Nov 2026).
export const prerender = true;

export const getStaticPaths = (async () => {
  const subjects = await getCollection("subjects");
  return subjects.map((s) => ({ params: { subject: s.data.slug } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const previews = await getConceptPreviews(params.subject as string);
  return new Response(JSON.stringify(previews), {
    headers: { "Content-Type": "application/json" },
  });
};
