export const docs = {
  component: `
**Button** — базовый UI-компонент для выполнения действий пользователем.

Используется для отправки форм, подтверждения действий, навигации и любых интерактивных сценариев.

## Features
- **Варианты оформления**: primary, secondary, outline, ghost, destructive, link
- **Размеры**: sm, md, lg, icon
- **Состояния**:
  - loading — показывает индикатор и автоматически отключает кнопку
  - disabled — блокирует взаимодействие
- **Дополнительно**:
  - fullWidth — кнопка на всю ширину контейнера
  - leftIcon / rightIcon — иконки
  - hideSpinner — скрыть индикатор загрузки

## Usage
\`\`\`tsx
import { Button } from 'denvik-ui-kit';

<Button>Primary</Button>

<Button variant="outline">Outline</Button>

<Button loading>Saving</Button>

<Button size="icon" aria-label="Settings">
  ⚙️
</Button>
\`\`\`

## Accessibility
- Использует нативный \`<button>\`
- Поддерживает \`disabled\` и \`aria-busy\`
- Для icon-only кнопок требуется \`aria-label\`

`,
  complexExample:
    "Примеры реального использования: toolbar, формы, destructive-действия, кнопки с иконками.",
} as const;
