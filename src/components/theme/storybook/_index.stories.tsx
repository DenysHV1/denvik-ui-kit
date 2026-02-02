import type { Meta } from "@storybook/react";
import { docs } from "./docs";
import type { Story, ThemeStoryArgs } from "./types";
import { ThemeProvider, useTheme } from "../theme-provider";
import { Button } from "@/components/ui/button";

const meta: Meta<ThemeStoryArgs> = {
  title: "Theme/ThemeProvider",
  component: DemoToggleButton,
  parameters: {
    docs: {
      description: { component: docs.component },
    },
  },
  args: {
    defaultMode: "light",
    disabled: false,
    lightLabel: "Светлая тема",
    darkLabel: "Тёмная тема",
    showThemeInLabel: true,
  },
  argTypes: {
    defaultMode: { control: "select", options: ["light", "dark", "system"] },
    disabled: { control: "boolean" },
    lightLabel: { control: "text" },
    darkLabel: { control: "text" },
    showThemeInLabel: { control: "boolean" },
  },

  decorators: [
    (Story, ctx) => {
      const defaultMode = ctx.args.defaultMode;

      return (
        <ThemeProvider
          key={String(defaultMode)}
          defaultMode={defaultMode}
          storageKey={null}
          attribute="data-theme"
          enableSystem
        >
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

function DemoToggleButton(args: ThemeStoryArgs) {
  const { theme, mode, toggleTheme } = useTheme();
  const baseLabel = theme === "dark" ? args.darkLabel : args.lightLabel;
  const label = args.showThemeInLabel ? `${baseLabel} (theme: ${theme}, mode: ${mode})` : baseLabel;

  return (
    <Button onClick={toggleTheme} disabled={args.disabled}>
      {label}
    </Button>
  );
}


export const Default: Story = {
  parameters: {
    docs: {
      description: { story: docs.providerExample },
    },
  },
};

export const DarkStart: Story = {
  args: { defaultMode: "dark" },
};

export const SystemMode: Story = {
  args: { defaultMode: "system" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

//---------------------
export default meta;