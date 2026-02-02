import type { ThemeMode } from "./types";

function isBrowser() {
  return typeof window !== "undefined";
}

export function readStoredMode(storageKey: string | null | undefined): ThemeMode | null {
  if (!storageKey || !isBrowser()) return null;

  try {
    const raw = window.localStorage.getItem(storageKey);
    if (raw === "light" || raw === "dark" || raw === "system") return raw;
    return null;
  } catch {
    return null;
  }
}

export function writeStoredMode(storageKey: string | null | undefined, mode: ThemeMode) {
  if (!storageKey || !isBrowser()) return;

  try {
    window.localStorage.setItem(storageKey, mode);
  } catch {
    // ignore
  }
}
