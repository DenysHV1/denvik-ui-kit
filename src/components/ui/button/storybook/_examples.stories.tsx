import type { Meta } from "@storybook/react";
import { Button } from "../button";

import { docs } from "./docs";
import type { ButtonStory } from "./types";
import { ExamplesView } from "./views";

const meta: Meta<typeof Button> = {
  title: "Components/Button/Examples",
  component: Button,
  parameters: {
    controls: { expanded: false },
    docs: {
      description: {
        component: docs.complexExample,
      },
    },
  },
};

export default meta;

export const Examples: ButtonStory = {
  parameters: { controls: { exclude: /.*/ } },
  render: () => <ExamplesView />,
};
