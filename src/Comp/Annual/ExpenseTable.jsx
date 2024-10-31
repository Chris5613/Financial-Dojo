import React from 'react';

const ExpenseTable = ({ expenseData }) => {
    // Calculate total expenses
    const totalExpenses = expenseData.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <div className='table-container'>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount ($)</th>
                        <th>Percentage (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseData.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>{expense.amount}</td>
                            <td>{((expense.amount / totalExpenses) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseTable;
