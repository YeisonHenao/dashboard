// src/components/charts/PieChart.tsx

import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor?: string[];
    }[];
  };
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartRef = useRef<ChartJS<"pie", number[], string> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="h-full w-full">
      <Pie
        ref={chartRef}
        data={{
          ...data,
          datasets: data.datasets.map(dataset => ({
            ...dataset,
            backgroundColor: dataset.backgroundColor || [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF'
            ]
          }))
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top' as const
            }
          }
        }}
      />
    </div>
  );
};