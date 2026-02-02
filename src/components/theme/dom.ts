import type { Theme, ThemeAttribute } from "./types";

function hasDocument() {
  return typeof document !== "undefined";
}

export function applyThemeToDocument(params: {
  theme: Theme;
  attribute: ThemeAttribute;
  classNames: { light: string; dark: string };
}) {
  if (!hasDocument()) return;

  const { theme, attribute, classNames } = params;
  const root = document.documentElement;

  if (attribute === "data-theme") {
    root.setAttribute("data-theme", theme);
    return;
  }

  root.classList.remove(classNames.light, classNames.dark);
  root.classList.add(theme === "light" ? classNames.light : classNames.dark);
}
