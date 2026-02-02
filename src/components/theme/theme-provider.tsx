import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from "react";

import type { Theme, ThemeContextValue, ThemeMode, ThemeProviderProps } from "./types";
import { readStoredMode, writeStoredMode } from "./storage";
import { applyThemeToDocument } from "./dom";
import { useSystemTheme } from "./system-store";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function resolveTheme(mode: ThemeMode, systemTheme: Theme, enableSystem: boolean): Theme {
  if (mode === "system") return enableSystem ? systemTheme : "light";
  return mode;
}

export function ThemeProvider({
  children,
  defaultMode = "system",
  storageKey = "ui-theme",
  attribute = "data-theme",
  classNames = { light: "light", dark: "dark" },
  enableSystem = true,
  applyTheme,
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return readStoredMode(storageKey) ?? defaultMode;
  });

  const systemTheme = useSystemTheme(enableSystem);
  const theme = resolveTheme(mode, systemTheme, enableSystem);

  const setMode = useCallback(
    (next: ThemeMode) => {
      setModeState(next);
      writeStoredMode(storageKey, next);
    },
    [storageKey]
  );

  const setTheme = useCallback(
    (t: Theme) => {
      setMode(t);
    },
    [setMode]
  );

  const toggleTheme = useCallback(() => {
    const current = resolveTheme(mode, systemTheme, enableSystem);
    setMode(current === "dark" ? "light" : "dark");
  }, [mode, systemTheme, enableSystem, setMode]);

  // Только синхронизация с DOM (внешняя система). Никаких setState тут нет.
  useEffect(() => {
    if (applyTheme) {
      applyTheme(theme, mode);
      return;
    }

    applyThemeToDocument({ theme, attribute, classNames });
  }, [theme, mode, applyTheme, attribute, classNames]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      theme,
      setMode,
      setTheme,
      toggleTheme,
    }),
    [mode, theme, setMode, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
