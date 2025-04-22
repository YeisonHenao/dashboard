// filepath: /dashboard-app/dashboard-app/src/components/stats/StatsGrid.tsx

import React from 'react';
import { StatCard } from './StatCard';

const StatsGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
                title="Total Ventas"
                value="$23,456"
                increase="12%"
                icon="💰"
            />
            <StatCard 
                title="Usuarios"
                value="1,234"
                increase="8%"
                icon="👥"
            />
            <StatCard 
                title="Órdenes"
                value="456"
                increase="24%"
                icon="📦"
            />
            <StatCard 
                title="Ingresos"
                value="$12,345"
                increase="16%"
                icon="📈"
            />
        </div>
    );
};

export default StatsGrid;