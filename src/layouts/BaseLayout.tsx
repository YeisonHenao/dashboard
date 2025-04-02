import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BaseLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(var(--background))] text-[oklch(var(--foreground))]">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
      <footer className="bg-[oklch(var(--primary-50))] dark:bg-[oklch(var(--primary-900))] shadow mt-auto">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-[oklch(var(--primary-600))] dark:text-[oklch(var(--primary-400))]">
            © 2024 Mi Dashboard. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout; 