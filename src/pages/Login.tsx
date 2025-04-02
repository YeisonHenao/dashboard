import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Form submitted:', formData);
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[oklch(var(--primary-900))] dark:text-[oklch(var(--primary-50))]">
            Inicia sesión en tu cuenta
          </h2>
          <p className="mt-2 text-center text-sm text-[oklch(var(--primary-700))] dark:text-[oklch(var(--primary-300))]">
            O{' '}
            <a href="#" className="font-medium text-[oklch(var(--primary-600))] dark:text-[oklch(var(--primary-400))] hover:text-[oklch(var(--primary-500))] dark:hover:text-[oklch(var(--primary-300))]">
              crea una cuenta nueva
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[oklch(var(--primary-300))] dark:border-[oklch(var(--primary-700))] placeholder-[oklch(var(--primary-500))] dark:placeholder-[oklch(var(--primary-400))] text-[oklch(var(--primary-900))] dark:text-[oklch(var(--primary-50))] rounded-t-md focus:outline-none focus:ring-[oklch(var(--primary-500))] focus:border-[oklch(var(--primary-500))] focus:z-10 sm:text-sm bg-[oklch(var(--primary-50))] dark:bg-[oklch(var(--primary-900))]"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[oklch(var(--primary-300))] dark:border-[oklch(var(--primary-700))] placeholder-[oklch(var(--primary-500))] dark:placeholder-[oklch(var(--primary-400))] text-[oklch(var(--primary-900))] dark:text-[oklch(var(--primary-50))] rounded-b-md focus:outline-none focus:ring-[oklch(var(--primary-500))] focus:border-[oklch(var(--primary-500))] focus:z-10 sm:text-sm bg-[oklch(var(--primary-50))] dark:bg-[oklch(var(--primary-900))]"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[oklch(var(--primary-600))] focus:ring-[oklch(var(--primary-500))] border-[oklch(var(--primary-300))] dark:border-[oklch(var(--primary-700))] rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[oklch(var(--primary-700))] dark:text-[oklch(var(--primary-300))]">
                Recuérdame
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[oklch(var(--primary-600))] dark:text-[oklch(var(--primary-400))] hover:text-[oklch(var(--primary-500))] dark:hover:text-[oklch(var(--primary-300))]">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[oklch(var(--primary-600))] hover:bg-[oklch(var(--primary-700))] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[oklch(var(--primary-500))]"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 