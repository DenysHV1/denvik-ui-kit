import type { Meta } from "@storybook/react";
import { Button } from "../button";

import { docs } from "./docs";
import { decorators } from "./decorators";
import type { ButtonStory } from "./types";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    fullWidth: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    hideSpinner: { control: "boolean" },
    leftIcon: { control: false },
    rightIcon: { control: false },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    fullWidth: false,
    loading: false,
    disabled: false,
    hideSpinner: false,
  },
};

export default meta;

export const Playground: ButtonStory = {};

export const Variants: ButtonStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </>
  ),
};

export const Sizes: ButtonStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Settings" title="Settings">
        ⚙️
      </Button>
    </>
  ),
};

export const States: ButtonStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button loading hideSpinner>
        Loading (no spinner)
      </Button>
    </>
  ),
};

export const Icons: ButtonStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <Button leftIcon={<span aria-hidden>←</span>}>Left</Button>
      <Button rightIcon={<span aria-hidden>→</span>}>Right</Button>
      <Button
        leftIcon={<span aria-hidden>←</span>}
        rightIcon={<span aria-hidden>→</span>}
      >
        Both
      </Button>
    </>
  ),
};

export const FullWidth: ButtonStory = {
  parameters: { controls: { disable: true } },
  render: () => <Button fullWidth>Full width</Button>,
};
