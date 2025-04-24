import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockAuthService } from '../mocks';

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;
    login: (token: string, userData: User) => void;
    logout: () => void;
}

interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = localStorage.getItem('token');
                const userData = localStorage.getItem('user');

                console.log('Iniciando autenticación:', { hasToken: !!token, hasUser: !!userData });
                
                if (token && userData) {
                    const isValid = await mockAuthService.validateToken(token);
                    if (isValid) {
                        setIsAuthenticated(true);
                        setUser(JSON.parse(userData));
                        console.log('Autenticación restaurada:', { user: JSON.parse(userData) });
                    } else {
                        console.log('Token inválido, limpiando sesión');
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                    }
                }
            } catch (error) {
                console.error('Error al inicializar auth:', error);
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, []);

    const login = (token: string, userData: User) => {
        console.log('Login exitoso:', { userData });
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
    };

    const logout = () => {
        console.log('Cerrando sesión');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ 
            isAuthenticated, 
            isLoading, 
            user, 
            login, 
            logout 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};