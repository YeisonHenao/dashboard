import type { Meta, StoryObj } from '@storybook/react';
import FormContainer from '../components/ui/FormContainer';

const meta: Meta<typeof FormContainer> = {
  title: 'UI/FormContainer',
  component: FormContainer,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormContainer>;

export const Default: Story = {
  args: {
    children: 'Contenido del formulario',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Registro de Usuario',
    children: 'Contenido del formulario con título',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Iniciar Sesión',
    subtitle: 'Ingresa tus credenciales para acceder',
    children: 'Contenido del formulario con subtítulo',
  },
};

export const WithMaxWidth: Story = {
  args: {
    title: 'Formulario Ancho',
    maxWidth: '2xl',
    children: 'Contenido del formulario con ancho máximo',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-gray-50',
    children: 'Contenido del formulario con clase personalizada',
  },
}; 