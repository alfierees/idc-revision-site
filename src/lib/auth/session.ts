// The only browser file that talks to Clerk. Islands ask "who's signed in?" here, so swapping the
// auth provider later means changing this file, not every component.
// Loaded on every page (the nav's account control imports it), so sync starts wherever a
// signed-in student lands.
import { useEffect, useState } from "preact/hooks";
import { $clerkStore, $userStore } from "@clerk/astro/client";
import { startSync, stopSync } from "../progress/sync";

export interface AuthUser {
  id: string;
  name: string;
  imageUrl: string;
}

type Listener = (user: AuthUser | null) => void;
const listeners = new Set<Listener>();
let current: AuthUser | null = null;
let loaded = false;

if (typeof window !== "undefined") {
  $userStore.subscribe((clerkUser) => {
    if (clerkUser === undefined) return; // Clerk still loading
    const next: AuthUser | null = clerkUser
      ? {
          id: clerkUser.id,
          name: clerkUser.fullName || clerkUser.primaryEmailAddress?.emailAddress?.split("@")[0] || "",
          imageUrl: clerkUser.hasImage ? clerkUser.imageUrl : "",
        }
      : null;
    const changed = !loaded || (next?.id ?? null) !== (current?.id ?? null);
    current = next;
    loaded = true;
    if (!changed) return;
    if (current) void startSync(current.id);
    for (const listener of listeners) listener(current);
  });
}

export const isSignedIn = () => current !== null;
export const sessionLoaded = () => loaded;

export function onSessionChange(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * The signed-in student, null when signed out, undefined until Clerk has loaded.
 * Always undefined on the first render, so it matches the server-rendered HTML and hydration
 * doesn't leave stale markup behind; the real value arrives in the effect.
 */
export function useAuthUser(): AuthUser | null | undefined {
  const [user, setUser] = useState<AuthUser | null | undefined>(undefined);
  useEffect(() => {
    if (loaded) setUser(current);
    return onSessionChange(setUser);
  }, []);
  return user;
}

export function openSignIn(): void {
  $clerkStore.get()?.openSignIn({});
}

/** Sends what's still waiting, clears this student's progress from the device, then signs out. */
export async function signOut(): Promise<void> {
  await stopSync();
  await $clerkStore.get()?.signOut({ redirectUrl: "/" });
}
