export const docs = {
  component: `
Textarea — универсальный компонент для ввода многострочного текста.

## Как использовать
\`\`\`tsx
<Textarea
  label="Комментарий"
  placeholder="Напишите текст..."
  helperText="Можно до 500 символов"
  rows={4}
/>
\`\`\`

## Основные пропсы
- \`label\` — текст над полем (если не передать, label не покажется)
- \`helperText\` — подсказка под полем
- \`errorText\` — текст ошибки (показывается вместо helperText)
- \`status\` — состояние поля: \`default | success | warning | error\`
- \`size\` — размер: \`sm | md | lg\`
- \`variant\` — стиль: \`default | soft\`
- \`disabled\`, \`readOnly\` — стандартные состояния HTML
- \`noResize\` — отключить изменение размера пользователем
- \`className\` — дополнительные классы для textarea
- \`wrapperClassName\` — дополнительные классы для обёртки

Остальные свойства (\`rows\`, \`value\`, \`onChange\` и т.д.) можно передавать через \`...props\`.
`,
  stories: {
    playground: 'Интерактивный пример: меняйте пропсы и смотрите результат.',
    states: 'Быстрые примеры основных состояний: success / warning / error / disabled / readOnly.',
  },
} as const;
