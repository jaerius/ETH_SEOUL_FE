import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Chart.js v3 이상에서 필요

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Total Voted RAPPO',
      data: [40, 50, 45, 65, 50, 75, 85],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // y축의 격자선 숨기기
        },
        ticks: {
          display: false, // y축의 레이블 숨기기
        }
      },
      x: {
        grid: {
          display: false, // x축의 격자선 숨기기
        },
        ticks: {
          display: false, // x축의 레이블 숨기기
        }
      },
    },
    elements: {
      line: {
        tension: 0.2, // Makes it a curved line
      },
    },
    plugins: {
      legend: {
        display: false, // 범례 숨기기
      },
    },
  };

const MyLineChart = () => {
  return <Line data={data} options={options} />;
};

export default MyLineChart;
