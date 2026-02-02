export const docs = {
  component: `
Этот пример показывает **как работает смена темы** и что именно делает \`ThemeProvider\`.

---

## Что здесь происходит простыми словами

1. **ThemeProvider** — это обёртка всего приложения  
   Он хранит текущую тему и отвечает за её применение.

2. **Тема бывает трёх видов**
   - \`light\` — светлая тема
   - \`dark\` — тёмная тема
   - \`system\` — тема берётся из настроек операционной системы

3. **Как применяется тема**
   ThemeProvider добавляет атрибут \`data-theme\` на тег \`<html>\`:

   - \`<html data-theme="light">\`
   - \`<html data-theme="dark">\`

   Стили компонентов реагируют на это значение.

4. **useTheme** — хук для управления темой  
   Он позволяет:
   - узнать текущую тему
   - узнать активный режим (light / dark / system)
   - переключить тему программно

---

## Как использовать в коде

### 1. Оберни приложение в ThemeProvider
\`\`\`tsx
import { ThemeProvider } from 'denvik-ui-kit';

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <AppContent />
    </ThemeProvider>
  );
}
\`\`\`

### 2. Используй useTheme для переключения темы
\`\`\`tsx
import { useTheme } from 'denvik-ui-kit';

function ThemeToggleButton() {
  const { theme, mode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Текущая тема: {theme} (режим: {mode})
    </button>
  );
}
\`\`\`

После клика тема переключится между **light** и **dark**.

---

## Зачем это нужно

- единый источник темы для всего приложения
- автоматическая поддержка системной темы
- удобное переключение темы в любом компоненте
- стили легко писать через \`[data-theme="dark"]\`

`,
  providerExample:
    "Пример показывает, как ThemeProvider управляет темой, а useTheme позволяет читать и переключать её из любого компонента.",
} as const;
