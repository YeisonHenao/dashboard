// src/components/charts/PieChart.tsx

import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                data: data.values,
                backgroundColor: data.colors,
                hoverBackgroundColor: data.colors,
            },
        ],
    };

    return (
        <div>
            <h2>Gráfico Circular</h2>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;