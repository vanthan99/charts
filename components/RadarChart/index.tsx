import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options:any = {
  scale: {
    ticks: { beginAtZero: true },
  },
};

const RadarChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Radar Chart</h1>
    </div>
    <Radar data={data} options={options} />
  </>
);

export default RadarChart;