export const docs = {
  component: `
Brief description of the Button component.

## Features
- Variants: primary, secondary, outline, ghost, destructive, link
- Sizes: sm, md, lg, icon
- States: loading (auto-disabled), disabled
- Layout: fullWidth
- Icons: leftIcon / rightIcon
- Polymorphic rendering via **asChild** (e.g. render as <a>, <Link>)

## Usage
\`\`\`tsx
import { Button } from '@denvik-ui-kit';
\`\`\`

\`\`\`tsx
<Button variant="primary">Click</Button>
<Button variant="outline" loading>Saving</Button>
<Button size="icon" aria-label="Settings">⚙️</Button>

<Button asChild variant="link">
  <a href="/docs">Docs</a>
</Button>
\`\`\`
`,
  complexExample:
    "Demonstrates real-world usage patterns (toolbar actions, form submit, CTA links).",
} as const;
