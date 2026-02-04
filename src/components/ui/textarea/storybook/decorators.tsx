import type { Decorator } from '@storybook/react';

export const decorators: Decorator[] = [
  (Story) => (
    <div style={{ maxWidth: 520 }}>
      <Story />
    </div>
  ),
];
