export const docs = {
  component: `
**Spinner** — индикатор загрузки для кнопок, форм и любых асинхронных операций.

## Features
- Размеры: xs, sm, md, lg
- Скорость вращения: slow, normal, fast
- Тон: solid, soft (легче/прозрачнее)

## Usage
\`\`\`tsx
import { Spinner } from 'denvik-ui-kit';
\`\`\`

\`\`\`tsx
<Spinner />
<Spinner size="md" />
<Spinner speed="fast" tone="soft" />
\`\`\`
`,
  complexExample: "Используется внутри Button в состоянии loading.",
} as const;
