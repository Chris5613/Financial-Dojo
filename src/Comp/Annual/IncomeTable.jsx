import React from 'react';

const IncomeTable = ({ incomeSources }) => {
    // Calculate total income
    const totalIncome = incomeSources.reduce((acc, source) => acc + source.amount, 0);

    return (
        <div className='table-container'>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Amount ($)</th>
                        <th>Percentage (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {incomeSources.map((source, index) => (
                        <tr key={index}>
                            <td>{source.name}</td>
                            <td>{source.amount}</td>
                            <td>{((source.amount / totalIncome) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IncomeTable;
