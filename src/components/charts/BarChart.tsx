// src/components/charts/BarChart.tsx

import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registramos los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="h-full w-full">
      <Bar
        ref={chartRef}
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            title: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};