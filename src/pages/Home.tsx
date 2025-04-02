import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[oklch(var(--primary-900))] dark:text-[oklch(var(--primary-50))] mb-6">
          Bienvenido a tu Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta de Estadísticas */}
          <div className="bg-[oklch(var(--primary-50))] dark:bg-[oklch(var(--primary-900))] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-[oklch(var(--primary-800))] dark:text-[oklch(var(--primary-200))] mb-4">
              Estadísticas
            </h2>
            <p className="text-[oklch(var(--primary-700))] dark:text-[oklch(var(--primary-300))]">
              Aquí irán tus estadísticas principales
            </p>
          </div>

          {/* Tarjeta de Actividad Reciente */}
          <div className="bg-[oklch(var(--primary-50))] dark:bg-[oklch(var(--primary-900))] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-[oklch(var(--primary-800))] dark:text-[oklch(var(--primary-200))] mb-4">
              Actividad Reciente
            </h2>
            <p className="text-[oklch(var(--primary-700))] dark:text-[oklch(var(--primary-300))]">
              Tu actividad más reciente aparecerá aquí
            </p>
          </div>

          {/* Tarjeta de Tareas Pendientes */}
          <div className="bg-[oklch(var(--primary-50))] dark:bg-[oklch(var(--primary-900))] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-[oklch(var(--primary-800))] dark:text-[oklch(var(--primary-200))] mb-4">
              Tareas Pendientes
            </h2>
            <p className="text-[oklch(var(--primary-700))] dark:text-[oklch(var(--primary-300))]">
              Tus tareas pendientes se mostrarán aquí
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[oklch(var(--primary-800))] dark:text-[oklch(var(--primary-200))] mb-4">
            Resumen
          </h2>
          <p className="text-[oklch(var(--primary-700))] dark:text-[oklch(var(--primary-300))]">
            Este es un resumen general de tu actividad y estado actual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 