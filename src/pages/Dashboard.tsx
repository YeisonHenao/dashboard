import React from 'react';
import StatsGrid from '../components/stats/StatsGrid';
import { BarChart } from '../components/charts/BarChart';
import { LineChart } from '../components/charts/LineChart';
import { PieChart } from '../components/charts/PieChart';
import DataTable from '../components/tables/DataTable';

const Dashboard: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            
            {/* Stats Section */}
            <section className="mb-8">
                <StatsGrid />
            </section>

            {/* Charts Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow h-[300px]">
                    <h2 className="text-lg font-semibold mb-4">Ventas Mensuales</h2>
                    <BarChart data={{ 
                        labels: ['Enero', 'Febrero', 'Marzo'], 
                        datasets: [{ 
                            label: 'Ventas', 
                            data: [10, 20, 30] 
                        }] 
                    }} />
                </div>
                <div className="bg-white p-4 rounded-lg shadow h-[300px]">
                    <h2 className="text-lg font-semibold mb-4">Tendencias</h2>
                    <LineChart />
                </div>
                <div className="bg-white p-4 rounded-lg shadow h-[300px]">
                    <h2 className="text-lg font-semibold mb-4">Distribución</h2>
                    <PieChart data={{ 
                        labels: ['A', 'B', 'C'], 
                        datasets: [{ data: [40, 30, 30] }] 
                    }} />
                </div>
            </section>

            {/* Data Table Section */}
            <section className="bg-white rounded-lg shadow">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">Datos Detallados</h2>
                    <DataTable 
                        data={[
                            { id: 1, name: 'Producto A', price: 100 },
                            { id: 2, name: 'Producto B', price: 200 },
                            { id: 3, name: 'Producto C', price: 300 },
                        ]}
                        columns={[
                            { Header: 'ID', accessor: 'id' },
                            { Header: 'Nombre', accessor: 'name' },
                            { Header: 'Precio', accessor: 'price' },
                        ]}
                    />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;