// bm-design-system: theme helper
import * as React from "react";

const STORAGE_KEY = "bm-ds-theme";

// A2Y Axis ships dark by default (locked 2026-05-08) — light and dark are
// dual-vibe modes, not "dark with a light fallback". This differs from the
// upstream bm-design-system template, which falls back to "system".
// The inline boot script in app/layout.tsx MUST mirror this constant, or the
// page will flip themes after hydration on a light-preferring OS.
const DEFAULT_THEME: Theme = "dark";

export type Theme = "light" | "dark" | "system";

function getSystemPreference(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system")
    return stored;
  return DEFAULT_THEME;
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const resolved = theme === "system" ? getSystemPreference() : theme;
  const root = document.documentElement;
  if (resolved === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

// localStorage is an external store, so it is read through
// useSyncExternalStore rather than useState + a mount effect. The upstream
// template used the latter, which trips `react-hooks/set-state-in-effect`
// under this repo's config and gives no correct SSR snapshot. This version
// hands React an explicit server snapshot (DEFAULT_THEME), which matches the
// `dark` class the server renders on <html>, so hydration is consistent.
const listeners = new Set<() => void>();

function emitChange() {
  for (const l of listeners) l();
}

function subscribe(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  // Another tab writing the preference.
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  // OS-level change matters while the stored value is "system".
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
    mql.removeEventListener("change", onStoreChange);
  };
}

export function useTheme() {
  const theme = React.useSyncExternalStore(
    subscribe,
    getStoredTheme,
    () => DEFAULT_THEME,
  );

  // Syncing the <html> class is external-system work, which is what an effect
  // is actually for.
  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = React.useCallback((next: Theme) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    emitChange();
  }, []);

  return [theme, setTheme] as const;
}
