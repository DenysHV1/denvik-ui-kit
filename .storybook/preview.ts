import "@/styles/index.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: { controls: { expanded: true } },
  tags: ["autodocs"],
};

export default preview;
