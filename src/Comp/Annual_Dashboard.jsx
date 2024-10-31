import '../css/Annual.css';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import SavingsGoals from './SavingsGoals';
import Insights from './Insights';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Annual_Dashboard = ({ totalIncome, totalExpenses }) => {
    const total = totalIncome - totalExpenses;

    const data = {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'Monthly Income',
                data: [5000, 7000, 8000, 6000, 9000, 11000, 10000, 12000, 13000, 14000, 15000, 16000],
                backgroundColor: 'rgba(76, 175, 80, 0.6)', // Light teal for income
                borderColor: 'rgba(76, 175, 80, 1)', // Darker teal for income
                borderWidth: 1,
            },
            {
                label: 'Monthly Expenses',
                data: [4000, 3000, 5000, 7000, 6000, 8000, 5000, 9000, 6000, 8000, 7000, 5000],
                backgroundColor: 'rgba(255, 99, 71, 0.6)', // Light coral for expenses
                borderColor: 'rgba(255, 99, 71, 1)', // Darker coral for expenses
                borderWidth: 1,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Ensure the chart can expand beyond the default aspect ratio
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount ($)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Months',
                },
            }
        },
    };

    return (
        <div className="dashboard-container">
            <div className="left-section">
                <h1>Annual Dashboard</h1>
                <div className="dashboard-summary">
                    <div className="summary-item">
                        <h2>Total Income</h2>
                        <p className='income-p'>${totalIncome}</p>
                    </div>
                    <div className="summary-item">
                        <h2>Total Expenses</h2>
                        <p className='expenses-p'>${totalExpenses}</p>
                    </div>
                    <div className="summary-item">
                        <h2>Total Amount</h2>
                        <p>${total}</p>
                    </div>
                </div>
                <SavingsGoals goalAmount={100000} currentSavings={21000} />
                <div className="chart-container">
                    <Bar data={data} options={options} height={400} /> 
                </div>
                <Insights />
            </div>
            <div className="right-section">
                <h2>Additional Info</h2>
                {/* Add your content here */}
                <p>This section can hold additional information or charts.</p>
            </div>
        </div>
    );
};

export default Annual_Dashboard;
