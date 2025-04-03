import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/ui/Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'tu@email.com',
    helperText: 'Ingresa un email válido',
  },
};

export const WithError: Story = {
  args: {
    label: 'Contraseña',
    type: 'password',
    error: 'La contraseña debe tener al menos 8 caracteres',
  },
};

export const Required: Story = {
  args: {
    label: 'Usuario',
    required: true,
    placeholder: 'Ingresa tu nombre de usuario',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo Deshabilitado',
    disabled: true,
    value: 'No se puede editar',
  },
}; 