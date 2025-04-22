export interface MockUser {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
}

export const mockUsers: MockUser[] = [
    {
        id: '1',
        email: 'admin@test.com',
        password: 'admin123',
        name: 'Administrador',
        role: 'admin'
    },
    {
        id: '2',
        email: 'user@test.com',
        password: 'user123',
        name: 'Usuario',
        role: 'user'
    }
];