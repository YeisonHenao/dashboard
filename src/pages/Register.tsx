import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/router/routes';
import { mockAuthService } from '../mocks';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            const name = formData.get('name') as string;
            const confirmPassword = formData.get('confirmPassword') as string;

            // Validaciones básicas
            if (password !== confirmPassword) {
                throw new Error('Las contraseñas no coinciden');
            }

            console.log('Iniciando proceso de registro...', { email, name });

            const { token, user } = await mockAuthService.register({
                email,
                password,
                name
            });

            console.log('Registro exitoso, iniciando sesión...', { user });
            
            login(token, user);
            navigate(ROUTES.DASHBOARD);
        } catch (err) {
            console.error('Error en registro:', err);
            setError(err instanceof Error ? err.message : 'Error al registrar usuario');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nombre completo"
                        name="name"
                        type="text"
                        required
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        required
                    />
                    <Input
                        label="Contraseña"
                        name="password"
                        type="password"
                        required
                    />
                    <Input
                        label="Confirmar Contraseña"
                        name="confirmPassword"
                        type="password"
                        required
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        isLoading={isLoading}
                    >
                        {isLoading ? 'Registrando...' : 'Registrarse'}
                    </Button>

                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            ¿Ya tienes una cuenta?{' '}
                            <Link 
                                to={ROUTES.LOGIN}
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Iniciar Sesión
                            </Link>
                        </p>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Register;