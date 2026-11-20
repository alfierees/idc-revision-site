// Spike for Task 7: proves the Clerk session reaches an on-demand route. Deleted in Task 12.
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({ locals }) =>
  new Response(JSON.stringify({ signedIn: locals.auth().isAuthenticated }), {
    headers: { "Content-Type": "application/json" },
  });
