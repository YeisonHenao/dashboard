// src/components/layout/Sidebar.tsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const location = useLocation();

    const menuItems = [
        { path: '/', icon: '🏠', label: 'Inicio' },
        { path: '/estadisticas', icon: '📊', label: 'Estadísticas' },
        { path: '/graficos', icon: '📈', label: 'Gráficos' },
        { path: '/tablas', icon: '📋', label: 'Tablas' },
        { path: '/configuracion', icon: '⚙️', label: 'Configuración' }
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* Overlay para móvil */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed md:static inset-y-0 left-0 
                w-64 bg-[var(--primary-50)] tema-oscuro:bg-[var(--primary-900)]
                transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                transition-transform duration-300 ease-in-out
                flex flex-col h-full z-50
            `}>
                {/* Header del Sidebar */}
                <div className="p-4 border-b border-[var(--primary-200)] tema-oscuro:border-[var(--primary-700)]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[var(--primary-900)] tema-oscuro:text-[var(--primary-50)]">
                            Dashboard
                        </h2>
                        <button 
                            onClick={onClose}
                            className="md:hidden p-2 rounded-md text-[var(--primary-700)] tema-oscuro:text-[var(--primary-300)]"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menú de navegación */}
                <nav className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-2">
                        {menuItems.map(({ path, icon, label }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className={`
                                        flex items-center px-4 py-3 rounded-lg
                                        transition-colors duration-200
                                        ${isActive(path) 
                                            ? 'bg-[var(--primary-100)] tema-oscuro:bg-[var(--primary-800)] text-[var(--primary-700)] tema-oscuro:text-[var(--primary-200)]'
                                            : 'text-[var(--primary-700)] tema-oscuro:text-[var(--primary-300)] hover:bg-[var(--primary-100)] tema-oscuro:hover:bg-[var(--primary-800)]'
                                        }
                                    `}
                                >
                                    <span className="mr-3">{icon}</span>
                                    <span>{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer del Sidebar */}
                <div className="p-4 border-t border-[var(--primary-200)] tema-oscuro:border-[var(--primary-700)]">
                    <div className="flex items-center space-x-3 text-[var(--primary-700)] tema-oscuro:text-[var(--primary-300)]">
                        <span className="text-sm">© 2024 Dashboard</span>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;