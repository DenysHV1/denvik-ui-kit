// docs.ts
export const docs = {
  title: "Input",
  description: `
**Input** — универсальный инпут для UI-kit. Управляется пропсами и поддерживает основные состояния.

### Быстрый старт
\`\`\`tsx
import { Input } from "@/components/ui/input";

<Input label="Email" type="email" placeholder="name@example.com" />
\`\`\`

### Основные пропсы
- **label**: подпись над полем.
- **helperText**: подсказка под полем (например, “Мы не будем отправлять спам”).
- **message**: сообщение под полем (обычно для ошибок/статуса).
- **variant**: внешний вид поля: \`solid | soft | ghost\`.
- **size**: размер поля: \`sm | md | lg\`.
- **tone**: тон (состояние): \`default | success | warning | danger\`.
- **disabled**: выключает поле.
- **readOnly**: режим только чтение.
- **loading**: показывает индикатор загрузки справа.
- **clearable**: показывает кнопку очистки, когда есть значение.
- **onClear**: вызывается при клике на очистку (полезно для controlled-режима).
- **leftIcon / rightIcon**: кастомные иконки слева/справа.
- **showTypeIcon**: если \`true\`, по \`type\` может добавляться стандартная иконка (email/search/tel/url/date/time/number).
- **type="password" + allowPasswordToggle**: для пароля появляется кнопка показать/скрыть.
- **className**: можно передать свои классы контейнеру.
- **...props**: любые нативные пропсы input (placeholder, required, value, onChange и т.д.).

### Controlled vs Uncontrolled
- **Uncontrolled**: используйте \`defaultValue\`.
\`\`\`tsx
<Input defaultValue="Hello" clearable />
\`\`\`
- **Controlled**: используйте \`value\` + \`onChange\`. Для очистки — \`onClear\`.
\`\`\`tsx
const [v, setV] = useState("");
<Input value={v} onChange={(e) => setV(e.target.value)} clearable onClear={() => setV("")} />
\`\`\`

### Ошибки
Самый простой способ — \`tone="danger"\` и \`message\`.
\`\`\`tsx
<Input tone="danger" message="Неверный формат" aria-invalid />
\`\`\`
  `.trim(),
};
