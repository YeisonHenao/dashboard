import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BaseLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
      <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-500 dark:text-gray-400">© 2024 Mi Dashboard. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout; 