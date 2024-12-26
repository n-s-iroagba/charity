import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register necessary elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const CategoryBreakdownChart: React.FC<{ filters: any }> = ({ filters }) => {
  // Mock data (replace this with data fetched using filters if needed)
  const data = {
    labels: ['Food', 'Shelter', 'Medicine', 'Education'],
    datasets: [
      {
        data: [15000, 8000, 5000, 2000], // Replace with API data
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Spending by Category',
      },
    },
  };

  return (
    <div className="category-breakdown-chart">
      <h3>Spending by Category</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CategoryBreakdownChart;

