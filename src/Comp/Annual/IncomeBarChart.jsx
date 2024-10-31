// src/Comp/IncomeBarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeBarChart = ({ incomeSources }) => {
    const data = {
        labels: incomeSources.map(source => source.name),
        datasets: [
            {
                label: 'Income Sources',
                data: incomeSources.map(source => source.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Light color for income
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Horizontal bars
        scales: {
            x: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: '500px', height: '400px' }}>
            <h3>Income Sources</h3>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default IncomeBarChart;
