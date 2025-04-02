const Home = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Bienvenido al Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Esta es la página principal de tu dashboard. Aquí puedes agregar el contenido que necesites.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Estadísticas</h3>
            <p className="text-indigo-600 dark:text-indigo-400">Visualiza tus datos importantes aquí.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Actividad</h3>
            <p className="text-green-600 dark:text-green-400">Sigue tu actividad reciente.</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">Notificaciones</h3>
            <p className="text-purple-600 dark:text-purple-400">Mantente al día con las actualizaciones.</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Actividad Reciente</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 dark:text-indigo-300">1</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Nueva actualización</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Hace 5 minutos</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-300">2</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Tarea completada</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Hace 1 hora</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 