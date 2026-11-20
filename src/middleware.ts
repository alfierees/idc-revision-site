// Clerk reads the session cookie on on-demand routes (src/pages/api/) and exposes locals.auth().
// Prerendered pages never run middleware at request time.
import { clerkMiddleware } from "@clerk/astro/server";

export const onRequest = clerkMiddleware();
