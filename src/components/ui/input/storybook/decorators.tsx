import * as React from "react";

export const decorators = [
  (Story: React.ComponentType) => (
    <div style={{ padding: 16, maxWidth: 520 }}>
      <Story />
    </div>
  ),
];
