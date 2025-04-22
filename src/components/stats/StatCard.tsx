import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    increase: string;
    icon: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, increase, icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm">{title}</p>
                    <h3 className="text-2xl font-bold mt-1">{value}</h3>
                    <p className="text-green-500 text-sm mt-2">
                        ↑ {increase} vs mes anterior
                    </p>
                </div>
                <div className="text-3xl">{icon}</div>
            </div>
        </div>
    );
};