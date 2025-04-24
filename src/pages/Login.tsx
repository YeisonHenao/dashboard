import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/router/routes';
import { mockAuthService } from '../mocks';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Login: React.FC = () => {
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

      console.log('Iniciando proceso de login...', { email });

      const { token, user } = await mockAuthService.login(email, password);
      console.log('Login exitoso, redirigiendo...', { user });
      
      login(token, user);
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      console.error('Error en login:', err);
      setError('Credenciales inválidas');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            required
            defaultValue="admin@test.com"
          />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            required
            defaultValue="admin123"
          />
          <Button
            type="submit"
            className="w-full"
            isLoading={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;