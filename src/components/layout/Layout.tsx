import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
    pageTitle?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar onMenuClick={toggleSidebar} pageTitle={pageTitle} />
            <div className="flex h-[calc(100vh-64px)]">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};