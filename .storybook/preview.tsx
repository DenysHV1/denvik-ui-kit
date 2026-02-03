import "@/styles/index.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    measure: { disable: true },
    outline: { disable: true },
     options: {
    initialPath: "/?path=/docs/introduction--docs",
  },
  },
  tags: ["autodocs"],
  globalTypes: {
    theme: {
      description: "UI theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      const theme = (ctx.globals.theme ?? "light") as "light" | "dark";
      document.documentElement.setAttribute("data-theme", theme);
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "var(--color-bg)",
            color: "var(--color-text)",
            padding: 24,
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
