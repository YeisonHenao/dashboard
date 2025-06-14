import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/useTheme';

interface NavbarProps {
  onMenuClick: () => void;
  pageTitle?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, pageTitle }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[var(--primary-50)] tema-oscuro:bg-[var(--primary-900)] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Botón de menú móvil */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-md text-[var(--primary-700)] tema-oscuro:text-[var(--primary-300)]"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Logo y Título */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-[var(--primary-900)] tema-oscuro:text-[var(--primary-50)]">
                {pageTitle || 'Mi Dashboard'}
              </h1>
            </div>
          </div>

          {/* Navegación centrada */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/')
                  ? 'bg-[var(--primary-100)] tema-oscuro:bg-[var(--primary-800)] text-[var(--primary-700)] tema-oscuro:text-[var(--primary-200)]'
                  : 'text-[var(--primary-700)] tema-oscuro:text-[var(--primary-300)] hover:bg-[var(--primary-100)] tema-oscuro:hover:bg-[var(--primary-800)]'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/login"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/login')
                  ? 'bg-[var(--primary-100)] tema-oscuro:bg-[var(--primary-800)] text-[var(--primary-700)] tema-oscuro:text-[var(--primary-200)]'
                  : 'text-[var(--primary-700)] tema-oscuro:text-[var(--primary-300)] hover:bg-[var(--primary-100)] tema-oscuro:hover:bg-[var(--primary-800)]'
              }`}
            >
              Login
            </Link>
          </div>

          {/* Botón de tema */}
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--primary-700)] tema-oscuro:text-[var(--primary-300)] hover:bg-[var(--primary-100)] tema-oscuro:hover:bg-[var(--primary-800)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-500)] transition-colors duration-200"
              aria-label="Cambiar tema"
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;