import type { Meta, StoryObj } from '@storybook/react';
import Section from '../components/ui/Section';

const meta: Meta<typeof Section> = {
  title: 'UI/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    background: {
      control: 'select',
      options: ['white', 'gray', 'transparent'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    children: 'Contenido de la sección',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Título de la Sección',
    children: 'Contenido de la sección con título',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Sección con Subtítulo',
    subtitle: 'Descripción de la sección',
    children: 'Contenido de la sección con subtítulo',
  },
};

export const WithBackground: Story = {
  args: {
    title: 'Sección con Fondo',
    background: 'gray',
    children: 'Contenido de la sección con fondo gris',
  },
};

export const WithPadding: Story = {
  args: {
    title: 'Sección con Padding',
    padding: 'lg',
    children: 'Contenido de la sección con padding grande',
  },
}; 