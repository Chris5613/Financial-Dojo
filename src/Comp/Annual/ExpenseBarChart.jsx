// src/Comp/ExpenseBarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseBarChart = ({ expenseData }) => {
    const data = {
        labels: expenseData.map(expense => expense.name),
        datasets: [
            {
                label: 'Expenses',
                data: expenseData.map(expense => expense.amount),
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
        <div className="chart-container">
            <h3>Expense Categories</h3>
            <Bar data={data} options={options} height={400} /> {/* Set height here */}
        </div>
    );
};

export default ExpenseBarChart;
