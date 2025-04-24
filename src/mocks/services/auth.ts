import { mockUsers, MockUser } from '../data/users';

interface AuthResponse {
    token: string;
    user: Omit<MockUser, 'password'>;
}

class MockAuthService {
    async login(email: string, password: string): Promise<AuthResponse> {
        console.log('Intento de login:', { email, password });
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 500));

        const user = mockUsers.find(u => u.email === email && u.password === password);
        
        console.log('Usuario encontrado:', user ? 'Sí' : 'No');
        
        if (!user) {
            console.error('Error: Credenciales inválidas');
            throw new Error('Credenciales inválidas');
        }

        ; //eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userData } = user;
        const response = {
            token: `mock-jwt-${user.id}-${Date.now()}`,
            user: userData
        };

        console.log('Login exitoso:', response)
        return response;
    }

    async validateToken(token: string): Promise<boolean> {
        console.log('Validando token:', token);
        await new Promise(resolve => setTimeout(resolve, 200));
        const isValid = token.startsWith('mock-jwt-');
        console.log('Token válido:', isValid);
        return isValid;
    }

    async register(userData: { email: string; password: string; name: string }): Promise<AuthResponse> {
        console.log('Intento de registro:', { email: userData.email, name: userData.name });
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 500));

        // Verificar si el usuario ya existe
        const existingUser = mockUsers.find(u => u.email === userData.email);
        if (existingUser) {
            console.error('Error: Usuario ya existe');
            throw new Error('El usuario ya existe');
        }

        // Crear nuevo usuario
        const newUser: MockUser = {
            id: `${mockUsers.length + 1}`,
            email: userData.email,
            password: userData.password,
            name: userData.name,
            role: 'user'
        };

        mockUsers.push(newUser);

//eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userWithoutPassword } = newUser;
        const response = {
            token: `mock-jwt-${newUser.id}-${Date.now()}`,
            user: userWithoutPassword
        };

        console.log('Registro exitoso:', response);
        return response;
    }
}

export const mockAuthService = new MockAuthService();