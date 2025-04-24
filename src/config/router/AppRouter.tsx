import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BaseLayout from '../../layouts/BaseLayout';
import AuthLayout from '../../layouts/AuthLayout';
import { PublicRoutes } from './PublicRoutes';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from './routes';
import Dashboard from '../../pages/Dashboard';

interface RouteConfig {
    path: string;
    Component: React.ComponentType;
}

export const PrivateRoutes: RouteConfig[] = [
    {
        path: ROUTES.DASHBOARD,
        Component: Dashboard
    }
];

export const AppRouter: React.FC = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <Router>
            <Routes>
                {/* Rutas públicas */}
                <Route element={<AuthLayout />}>
                    {PublicRoutes.map(({ path, Component }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                !isAuthenticated ? (
                                    <Component />
                                ) : (
                                    <Navigate to={ROUTES.DASHBOARD} replace />
                                )
                            }
                        />
                    ))}
                </Route>

                {/* Rutas protegidas */}
                <Route element={<BaseLayout />}>
                    {PrivateRoutes.map(({ path, Component }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                isAuthenticated ? (
                                    <Component />
                                ) : (
                                    <Navigate to={ROUTES.LOGIN} replace />
                                )
                            }
                        />
                    ))}
                </Route>

                {/* Redirección por defecto */}
                <Route 
                    path="*" 
                    element={
                        <Navigate 
                            to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.LOGIN} 
                            replace 
                        />
                    } 
                />
            </Routes>
        </Router>
    );
};