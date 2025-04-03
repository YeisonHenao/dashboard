import type { Meta, StoryObj } from '@storybook/react';
import Table from '../components/ui/Table';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Admin' },
  { id: 2, nombre: 'María García', email: 'maria@example.com', rol: 'Usuario' },
  { id: 3, nombre: 'Carlos López', email: 'carlos@example.com', rol: 'Editor' },
];

const headers = ['Nombre', 'Email', 'Rol'];

export const Default: Story = {
  args: {
    headers,
    data: sampleData,
  },
};

export const WithRowClick: Story = {
  args: {
    headers,
    data: sampleData,
    onRowClick: (row) => console.log('Fila clickeada:', row),
  },
};

export const Empty: Story = {
  args: {
    headers,
    data: [],
  },
};

export const WithCustomClass: Story = {
  args: {
    headers,
    data: sampleData,
    className: 'max-w-2xl',
  },
}; 