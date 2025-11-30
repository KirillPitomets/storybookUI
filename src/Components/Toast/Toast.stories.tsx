import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Toast from '@/Components/Toast/Toast';

const meta = {
  component: Toast
} satisfies Meta<typeof Toast>

export default meta;
type Story = StoryObj<typeof meta>;

export const slide: Story = {
  args: {
    transitionType: "slide",
    type: 'success',
    show: true,
    duration: 3000,
    title: "SUCCESS completed!!!",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat laborum quidem, accusantium odio incidunt excepturi modi at ratione possimus reprehenderit dignissimos"
  }
}

export const fade: Story = {
  args: {
    transitionType: "fade",
    type: 'success',
    show: true,
    duration: 3000,
    title: "SUCCESS completed!!!",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat laborum quidem, accusantium odio incidunt excepturi modi at ratione possimus reprehenderit dignissimos"
  }
}

export const success: Story = {
  args: {
    transitionType: "slide",
    type: 'success',
    show: true,
    duration: 3000,
    title: "SUCCESS completed!!!",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat laborum quidem, accusantium odio incidunt excepturi modi at ratione possimus reprehenderit dignissimos"
  }
}

export const fail: Story = {
  args: {
    transitionType: "slide",
    type: 'fail',
    show: true,
    duration: 3000,
    title: "FAIL!!!",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat laborum quidem, accusantium odio incidunt excepturi modi at ratione possimus reprehenderit dignissimos"
  }
}

export const warning: Story = {
  args: {
    transitionType: "slide",
    type: 'warn',
    show: true,
    duration: 3000,
    title: "Warning!!!",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat laborum quidem, accusantium odio incidunt excepturi modi at ratione possimus reprehenderit dignissimos"
  }
}

export const longDuration: Story = {
  args: {
    transitionType: "slide",
    type: 'success',
    show: true,
    duration: 5000,
    title: "SUCCESS completed!!!",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat laborum quidem, accusantium odio incidunt excepturi modi at ratione possimus reprehenderit dignissimos"
  }
}

export const shortDuration: Story = {
  args: {
    transitionType: "slide",
    type: 'success',
    show: true,
    duration: 1000,
    title: "SUCCESS completed!!!",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat laborum quidem, accusantium odio incidunt excepturi modi at ratione possimus reprehenderit dignissimos"
  }
}
