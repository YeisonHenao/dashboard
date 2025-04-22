import React from 'react';
import { AppRouter } from './config/router/AppRouter';
import { useAuth } from './context/AuthContext';
import { useTheme } from './context/useTheme';

const App = () => {
  const { theme } = useTheme();
  const { isLoading } = useAuth();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  );
};

export default App;