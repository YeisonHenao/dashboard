import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BaseLayout from '../../layouts/BaseLayout';
import AuthLayout from '../../layouts/AuthLayout';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { useAuth } from '../../hooks/useAuth'; // Asegúrate de crear este hook
import { ROUTES } from './ROUTES';

export const AppRouter: React.FC = () => {
    const { isAuthenticated } = useAuth(); // Hook personalizado para manejar la autenticación

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