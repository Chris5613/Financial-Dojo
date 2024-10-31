import React, { useState, useEffect } from 'react';
import '../../css/Annual.css';
import '../../css/App.css';
import Insights from '../Annual/Insights';
import Summary from '../Annual/Summary';
import IncomeBarChart from '../Annual/IncomeBarChart';
import ExpenseBarChart from '../Annual/ExpenseBarChart';
import IncomeTable from '../Annual/IncomeTable';
import ExpenseTable from '../Annual/ExpenseTable';

const Monthly = ({ totalIncome, totalExpenses }) => {
    // Get current month and year
    const getCurrentMonth = () => new Date().toLocaleString('default', { month: 'long' });
    const getCurrentYear = () => new Date().getFullYear();

    // State for selected month, year, and toggle for manual selection
    const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
    const [selectedYear, setSelectedYear] = useState(getCurrentYear());
    const [isManualSelection, setIsManualSelection] = useState(false);

    // Auto-update month and year unless manual selection is enabled
    useEffect(() => {
        if (!isManualSelection) {
            setSelectedMonth(getCurrentMonth());
            setSelectedYear(getCurrentYear());
        }
    }, [isManualSelection]);

    const handleMonthChange = (e) => setSelectedMonth(e.target.value);
    const handleYearChange = (e) => setSelectedYear(parseInt(e.target.value, 10));
    const toggleManualSelection = () => setIsManualSelection(!isManualSelection);

    // Example data with date
    const incomeSources = [
        { name: 'Rental Income', amount: 8000, date: '2023-11-01' },
        { name: 'Side Business', amount: 6000, date: '2023-11-10' },
    ];
    const expenseData = [
        { name: 'Rent', amount: 12000, date: '2023-11-05' },
        { name: 'Groceries', amount: 6000, date: '2023-11-12' },
    ];

    // Filter data by selected month and year
    const filterDataByMonthAndYear = (data) => {
        return data.filter(item => {
            const itemDate = new Date(item.date);
            return (
                itemDate.getMonth() === new Date(`1 ${selectedMonth} ${selectedYear}`).getMonth() &&
                itemDate.getFullYear() === selectedYear
            );
        });
    };

    const filteredIncomeSources = filterDataByMonthAndYear(incomeSources);
    const filteredExpenseData = filterDataByMonthAndYear(expenseData);

    return (
        <div className="dashboard-container">
            <div className="left-section">
                <h1>{selectedMonth} {selectedYear} Dashboard</h1>
                
                {/* Toggle for enabling manual selection */}
                <label>
                    <input
                        type="checkbox"
                        checked={isManualSelection}
                        onChange={toggleManualSelection}
                    />
                    Enable Manual Month and Year Selection
                </label>
                <select
                    id="month-select"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    disabled={!isManualSelection}
                    className="custom-select"
                >
                    {[
                        'January', 'February', 'March', 'April',
                        'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December'
                    ].map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
                <select
                    id="year-select"
                    value={selectedYear}
                    onChange={handleYearChange}
                    disabled={!isManualSelection}
                    className="custom-select"
                >
                    {[...Array(11)].map((_, i) => {
                        const year = getCurrentYear() - 5 + i; 
                        return <option key={year} value={year}>{year}</option>;
                    })}
                </select>
                <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} total={totalIncome - totalExpenses} />
            </div>
            <div className="right-section">
                <div className="charts-container">
                    <div className="chart-section">
                        <IncomeBarChart incomeSources={filteredIncomeSources} />
                        <IncomeTable incomeSources={filteredIncomeSources} />
                    </div>
                    <div className="chart-section">
                        <ExpenseBarChart expenseData={filteredExpenseData} />
                        <ExpenseTable expenseData={filteredExpenseData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Monthly;
