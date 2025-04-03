import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/ui/Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Contenido básico de la tarjeta',
  },
};

export const WithPadding: Story = {
  args: {
    padding: 'lg',
    children: 'Tarjeta con padding grande',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Título de la Tarjeta',
    children: 'Contenido de la tarjeta con título',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Tarjeta con Footer',
    children: 'Contenido principal',
    footer: 'Footer de la tarjeta',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-blue-50',
    children: 'Tarjeta con clase personalizada',
  },
}; 