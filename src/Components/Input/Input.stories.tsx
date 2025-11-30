import type { Meta, StoryObj } from '@storybook/nextjs-vite';


import Input from '@/Components/Input/Input';

const meta = {
  component: Input
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>;

export const WithClearble: Story = {
  args: {
    clearble: true
  }
}

export const WithoutClearble: Story = {
  args: {
    clearble: false
  }
}


export const Text: Story = {
  args: {
    clearble: false,
    type: "text"
  }
}

export const Password: Story = {
  args: {
    clearble: false,
    type: "password",
  }
}

export const Number: Story = {
  args: {
    clearble: false,
    type: "number",
    max: 32,
    min: 0
  }
}