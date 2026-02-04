import type { Meta } from "@storybook/react";
import { Spinner } from "../spinner";

import { docs } from "./docs";
import { decorators } from "./decorators";
import type { SpinnerStory } from "./types";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  decorators: [...decorators],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: docs.component,
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    speed: { control: "select", options: ["slow", "normal", "fast"] },
    tone: { control: "select", options: ["solid", "soft"] },
  },
  args: {
    size: "sm",
    speed: "normal",
    tone: "neutral",
  },
};

export default meta;

export const Playground: SpinnerStory = {};

export const Sizes: SpinnerStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <Spinner size="sm" /> <Spinner size="sm" /> <Spinner size="md" />
      <Spinner size="lg" />
    </>
  ),
};

export const Speeds: SpinnerStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <Spinner speed="slow" /> <Spinner speed="normal" />
      <Spinner speed="fast" />
    </>
  ),
};

export const Tones: SpinnerStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <Spinner tone="neutral" /> <Spinner tone="muted" />
    </>
  ),
};
