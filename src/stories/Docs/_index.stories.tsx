import type { Meta, StoryObj } from "@storybook/react";

const Dummy = () => null;

const meta: Meta<typeof Dummy> = {
  title: "Introduction",
  component: Dummy,
  tags: ["autodocs"],
  parameters: {
    viewMode: "docs",
    previewTabs: { canvas: { hidden: true } },
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      page: () => (
        <div style={{ maxWidth: 820 }}>
          <h1>denvik-ui-kit</h1>
          <p>
            UI-библиотека компонентов на React + TypeScript, предназначенная для использования в разных проектах.
            Библиотека собирается как ESM / CJS + типы, разрабатывается и документируется через Storybook.
            Стили написаны на TailwindCSS.
          </p>

          <h2>Требования</h2>
          <ul>
            <li>Node.js 18+</li>
            <li>React &gt;=18 &lt;20</li>
            <li>ReactDOM &gt;=18 &lt;20</li>
          </ul>

          <h2>Установка</h2>
          <pre>
            <code>npm i github:DenysHV1/denvik-ui-kit#v1.0.0</code>
          </pre>
        </div>
      ),
    },
  },
};

export default meta;

export const Docs: StoryObj<typeof Dummy> = {
  render: () => <div />,
};
