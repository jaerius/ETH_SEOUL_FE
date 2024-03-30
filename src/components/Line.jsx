import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Chart.js v3 이상에서 필요

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Total Voted RAPPO',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const options = {
    maintainAspectRatio: false,
    aspectRatio: 2,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  elements: {
    line: {
      tension: 0.2, // Makes it a curved line
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
};

const MyLineChart = () => {
  return <Line data={data} options={options} />;
};

export default MyLineChart;
