import '../../css/Annual.css';
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
import Summary from './Summary';
import IncomeBarChart from './IncomeBarChart';
import ExpenseBarChart from './ExpenseBarChart';

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

    const incomeSources = [
        { name: 'Salary', amount: 50000 },
        { name: 'Investments', amount: 15000 },
        { name: 'Freelance', amount: 12000 },
        { name: 'Rental Income', amount: 8000 },
        { name: 'Side Business', amount: 6000 },
        { name: 'Dividends', amount: 4000 },
        { name: 'Royalties', amount: 3000 },
        { name: 'Interest', amount: 2000 },
        { name: 'Gifts', amount: 1000 },
        { name: 'Other', amount: 500 },
    ];

    const expenseData = [
        { name: 'Rent', amount: 12000 },
        { name: 'Groceries', amount: 6000 },
        { name: 'Utilities', amount: 3000 },
        { name: 'Transportation', amount: 4000 },
        { name: 'Entertainment', amount: 2000 },
        { name: 'Insurance', amount: 1500 },
        { name: 'Healthcare', amount: 2500 },
        { name: 'Other', amount: 3000 },
    ];


    const options = {
        responsive: true,
        maintainAspectRatio: false,
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
                <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} total={total}/>
                <SavingsGoals goalAmount={100000} currentSavings={21000} />
                <div className="chart-container">
                    <Bar data={data} options={options} height={400}/> 
                </div>
                <Insights />
            </div>
            <div className="right-section">
                <IncomeBarChart incomeSources={incomeSources}/>
                <ExpenseBarChart expenseData={expenseData} />
            </div>
        </div>
    );
};

export default Annual_Dashboard;