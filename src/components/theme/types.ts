export type Theme = "light" | "dark";
export type ThemeMode = Theme | "system";

export type ThemeAttribute = "data-theme" | "class";

export type ThemeProviderProps = {
  children: React.ReactNode;

  /** "light" | "dark" | "system" */
  defaultMode?: ThemeMode;

  /** localStorage key (null -> не используем storage) */
  storageKey?: string | null;

  /** Как применять тему на <html> */
  attribute?: ThemeAttribute;

  /** Только если attribute="class" */
  classNames?: { light: string; dark: string };

  /** Следовать системной теме в режиме "system" */
  enableSystem?: boolean;

  /**
   * Кастомное применение темы.
   * Если задано — вызывается вместо attribute/class.
   */
  applyTheme?: (resolvedTheme: Theme, mode: ThemeMode) => void;
};

export type ThemeContextValue = {
  /** Выбранный режим: light/dark/system */
  mode: ThemeMode;

  /** Реально активная тема (учитывает system) */
  theme: Theme;

  setMode: (mode: ThemeMode) => void;
  setTheme: (theme: Theme) => void; // alias setMode("light"|"dark")
  toggleTheme: () => void;
};
