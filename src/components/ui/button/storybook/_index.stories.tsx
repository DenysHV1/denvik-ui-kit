import type { Meta } from "@storybook/react";
import { Button } from "../button";

import { docs } from "./docs";
import { argTypes } from "./arg-types";
import type { ButtonStory } from "./types";
import {
  PlaygroundView,
  VariantsAndSizesView,
  StatesView,
  IconsView,
  LayoutView,
  AsChildView,
} from "./views";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: docs.component,
      },
    },
  },
  argTypes,
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    fullWidth: false,
    loading: false,
    disabled: false,
    hideSpinner: false,
    asChild: false,
  },
};

export default meta;

export const Playground: ButtonStory = {
  render: (args) => PlaygroundView(args),
};

export const VariantsAndSizes: ButtonStory = {
  parameters: { controls: { exclude: /.*/ } },
  render: () => <VariantsAndSizesView />,
};

export const States: ButtonStory = {
  parameters: { controls: { exclude: /.*/ } },
  render: () => <StatesView />,
};

export const Icons: ButtonStory = {
  parameters: { controls: { exclude: /.*/ } },
  render: () => <IconsView />,
};

export const Layout: ButtonStory = {
  parameters: { controls: { exclude: /.*/ } },
  render: () => <LayoutView />,
};

export const AsChild: ButtonStory = {
  parameters: { controls: { exclude: /.*/ } },
  render: () => <AsChildView />,
};
