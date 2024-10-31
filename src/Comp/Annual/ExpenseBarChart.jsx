// src/Comp/IncomeBarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseBarChart = ({ expenseData }) => {
    const data = {
        labels: expenseData.map(source => source.name),
        datasets: [
            {
                label: 'Expense Sources',
                data: expenseData.map(source => source.amount),
                backgroundColor: 'rgba(255, 99, 71, 0.6)', // Light color for expenses
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
            <h3>Expense Sources</h3>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default ExpenseBarChart;
