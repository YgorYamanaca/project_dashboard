import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartInterface {
  chartTitle: string,
  data: {
    labels: string[],
    datasets: any[],
  }
}

const BarChart: React.FC<LineChartInterface> = ({
  chartTitle,
  data,
}) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart;