export const docs = {
  component: `
Checkbox — универсальный компонент для выбора (вкл/выкл).

## Как использовать
\`\`\`tsx
<Checkbox
  label="Получать уведомления"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
\`\`\`

## Управление состояниями через пропсы
- \`checked\` + \`onChange\` — контролируемый чекбокс
- \`defaultChecked\` — неконтролируемый чекбокс
- \`disabled\` — выключенное состояние
- \`readOnly\` — только чтение (менять нельзя, но выглядит активно)
- \`indeterminate\` — "неопределённое" состояние (обычно для "выбрать все")
- \`status\` — визуальный статус: \`default | success | warning | error\`
- \`errorText\` — текст ошибки (показывается под label)
- \`helperText\` — подсказка (показывается, если нет errorText)
- \`size\` — размер: \`sm | md | lg\`
- \`requiredMark\` — показывает звёздочку \`*\` рядом с label
- \`view\` — есть 2 варианта "circle" и "square". Вид может быть квадратным и круглым                                   
 
Также можно передавать \`className\` и любые стандартные props от \`<input type="checkbox" />\` через \`...props\`.
`,
  stories: {
    playground: 'Интерактивный пример: меняйте пропсы и смотрите результат.',
    states: 'Короткий набор основных состояний.',
  },
} as const;
