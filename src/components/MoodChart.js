import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MoodChart = ({ entries }) => {
  const moodData = entries.map((entry) => (entry.sentiment === 'positive' ? 1 : entry.sentiment === 'negative' ? -1 : 0));
  const dates = entries.map((entry) => entry.date);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Mood Trend',
        data: moodData,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Your Mood Trend</h2>
      <Line data={data} />
    </div>
  );
};

export default MoodChart;
