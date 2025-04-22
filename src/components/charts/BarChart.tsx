// src/components/charts/BarChart.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart: React.FC<{ data: any; options?: any }> = ({ data, options }) => {
    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;