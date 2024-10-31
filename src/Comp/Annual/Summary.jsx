const Summary = ({total, totalExpenses, totalIncome}) => {
    return (
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
    );
};

export default Summary;