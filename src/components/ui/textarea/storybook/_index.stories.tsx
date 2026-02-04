import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../textarea';
import type { TextareaStoryArgs } from './types';
import { docs } from './docs';
import { decorators } from './decorators';

function DemoTextarea(args: TextareaStoryArgs) {
  const { controlled = false, initialValue = '', ...props } = args;

  const [value, setValue] = React.useState(initialValue);

  if (!controlled) {
    return <Textarea {...props} />;
  }

  return (
    <Textarea
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

const meta: Meta<TextareaStoryArgs> = {
  title: 'UI/Textarea',
  component: DemoTextarea,
  decorators,
  parameters: {
    docs: {
      description: {
        component: docs.component,
      },
    },
  },
  args: {
    label: 'Комментарий',
    labelHint: '',
    requiredMark: false,
    placeholder: 'Введите текст...',
    helperText: 'Подсказка под полем',
    errorText: '',
    status: 'default',
    size: 'md',
    variant: 'default',
    disabled: false,
    readOnly: false,
    noResize: false,
    rows: 4,
    controlled: false,
    initialValue: '',
  },
  argTypes: {
    status: { control: 'select', options: ['default', 'success', 'warning', 'error'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'soft'] },
    rows: { control: { type: 'number', min: 2, max: 12, step: 1 } },
    requiredMark: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    noResize: { control: 'boolean' },
    controlled: { control: 'boolean' },
    initialValue: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TextareaStoryArgs>;

export const Playground: Story = {
  parameters: {
    docs: { description: { story: docs.stories.playground } },
  },
};

export const States: Story = {
  render: (args) => (
    <>
      <DemoTextarea {...args} status="success" helperText="Успешное состояние" />
      <DemoTextarea {...args} status="warning" helperText="Предупреждение" />
      <DemoTextarea {...args} status="error" errorText="Текст ошибки" />
      <DemoTextarea {...args} disabled helperText="Disabled" />
      <DemoTextarea {...args} readOnly helperText="Read only" />
    </>
  ),
  parameters: {
    docs: { description: { story: docs.stories.states } },
  },
  args: {
    label: 'Описание',
    placeholder: 'Введите текст...',
    rows: 3,
    controlled: false,
    initialValue: '',
    variant: 'default',
    size: 'md',
    noResize: false,
  },
};
