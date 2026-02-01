import * as React from "react";

export const decorators = [
  (Story: React.ComponentType) => (
    <div style={{ padding: 24 }}>
      <Story />
    </div>
  ),
] as const;
