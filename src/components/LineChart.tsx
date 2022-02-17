import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

const LineChart: React.FC<LineChartInterface> = ({
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
    <Line options={options} data={data} />
  )
}

export default LineChart;