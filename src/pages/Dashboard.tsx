import React from 'react';
import { Layout } from '../components/layout/Layout';
import StatsGrid from '../components/stats/StatsGrid';
import { BarChart } from '../components/charts/BarChart';
import { LineChart } from '../components/charts/LineChart';
import { PieChart } from '../components/charts/PieChart';
import { DataTable } from '../components/tables/DataTable';

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                
                {/* Stats Section */}
                <section className="mb-8">
                    <StatsGrid />
                </section>

                {/* Charts Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Ventas Mensuales</h2>
                        <BarChart />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Tendencias</h2>
                        <LineChart />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Distribución</h2>
                        <PieChart />
                    </div>
                </section>

                {/* Data Table Section */}
                <section className="bg-white rounded-lg shadow">
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4">Datos Detallados</h2>
                        <DataTable />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Dashboard;