import type { Meta, StoryObj } from '@storybook/react';
import StatCard from '../components/ui/StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'UI/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    trend: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    title: 'Usuarios Activos',
    value: '1,234',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Ingresos',
    value: '$12,345',
    icon: '💰',
  },
};

export const WithTrend: Story = {
  args: {
    title: 'Ventas',
    value: '$45,678',
    trend: {
      value: 12,
      isPositive: true,
    },
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Conversión',
    value: '24%',
    description: 'Tasa de conversión en los últimos 30 días',
  },
};

export const Complete: Story = {
  args: {
    title: 'Usuarios Nuevos',
    value: '567',
    icon: '👥',
    trend: {
      value: 8,
      isPositive: true,
    },
    description: 'Usuarios registrados este mes',
  },
}; 