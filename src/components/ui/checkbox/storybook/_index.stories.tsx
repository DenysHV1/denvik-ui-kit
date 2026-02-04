import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../checkbox';
import { decorators } from './decorators';
import { docs } from './docs';
import type { CheckboxStoryArgs } from './types';

function DemoCheckbox(args: CheckboxStoryArgs) {
  const { controlled = false, initialChecked = false, ...props } = args;
  const [checked, setChecked] = React.useState(initialChecked);

  if (!controlled) {
    return <Checkbox {...props} />;
  }

  return (
    <Checkbox
      {...props}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

const meta: Meta<CheckboxStoryArgs> = {
  title: 'UI/Checkbox',
  component: DemoCheckbox,
  decorators,
  parameters: {
    docs: {
      description: { component: docs.component },
    },
  },
  args: {
    label: 'Согласен с условиями',
    helperText: 'Это пример подсказки',
    errorText: '',
    size: 'md',
    status: 'default',
    disabled: false,
    readOnly: false,
    indeterminate: false,
    requiredMark: false,
    controlled: true,
    initialChecked: false,
    view:"circle",
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    status: { control: 'select', options: ['default', 'success', 'warning', 'error'] },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    requiredMark: { control: 'boolean' },
    controlled: { control: 'boolean' },
    initialChecked: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<CheckboxStoryArgs>;

export const Playground: Story = {
  parameters: {
    docs: { description: { story: docs.stories.playground } },
  },
};

export const States: Story = {
  render: (args) => (
    <>
      <DemoCheckbox {...args} status="success" helperText="Success" />
      <DemoCheckbox {...args} status="warning" helperText="Warning" />
      <DemoCheckbox {...args} status="error" errorText="Ошибка: нужно согласиться" />
      <DemoCheckbox {...args} indeterminate helperText="Indeterminate" />
      <DemoCheckbox {...args} disabled helperText="Disabled" />
      <DemoCheckbox {...args} readOnly helperText="Read only" />
    </>
  ),
  parameters: {
    docs: { description: { story: docs.stories.states } },
  },
  args: {
    label: 'Статусы',
    controlled: false,
    initialChecked: false,
    size: 'md',
    requiredMark: false,
  },
};
