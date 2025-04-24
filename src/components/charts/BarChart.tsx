// src/components/charts/BarChart.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { useId } from 'react';

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  };
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartId = useId(); // Genera un ID único

  return (
    <Bar
      id={chartId}
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};