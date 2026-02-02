import { useSyncExternalStore } from "react";
import type { Theme } from "./types";

function getMql(): MediaQueryList | null {
  if (typeof window === "undefined" || !window.matchMedia) return null;
  return window.matchMedia("(prefers-color-scheme: dark)");
}

function subscribe(callback: () => void) {
  const mql = getMql();
  if (!mql) return () => {};
  if (typeof mql.addEventListener === "function") {
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  }
  return () => {};
}

function getSnapshot(): Theme {
  const mql = getMql();
  return mql?.matches ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export function useSystemTheme(enabled: boolean): Theme {
  const systemTheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return enabled ? systemTheme : "light";
}
