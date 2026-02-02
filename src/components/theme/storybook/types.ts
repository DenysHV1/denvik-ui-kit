import type { ThemeMode } from "../types";
import type { StoryObj } from "@storybook/react";

export type Story = StoryObj<ThemeStoryArgs>;

export type ThemeStoryArgs = {
  defaultMode: ThemeMode;
  disabled: boolean;
  lightLabel: string;
  darkLabel: string;
  showThemeInLabel: boolean;
};

