import { mockUsers, MockUser } from '../data/users';

interface AuthResponse {
    token: string;
    user: Omit<MockUser, 'password'>;
}

class MockAuthService {
    async login(email: string, password: string): Promise<AuthResponse> {
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 500));

        const user = mockUsers.find(u => u.email === email && u.password === password);
        
        if (!user) {
            throw new Error('Credenciales inválidas');
        }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: userPassword, ...userData } = user;
        return {
            token: `mock-jwt-${user.id}-${Date.now()}`,
            user: userData
        };
    }

    async validateToken(token: string): Promise<boolean> {
        await new Promise(resolve => setTimeout(resolve, 200));
        return token.startsWith('mock-jwt-');
    }
}

export const mockAuthService = new MockAuthService();