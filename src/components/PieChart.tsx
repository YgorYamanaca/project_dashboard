import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartInterface {
  data: {
    labels: string[],
    datasets: any[],
  }
}

const PieChart: React.FC<PieChartInterface> = ({
  data,
}) => {

  return (
    <Pie data={data} />
  )
}

export default PieChart;