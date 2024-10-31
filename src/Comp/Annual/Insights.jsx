const SavingsGoals = ({ goalAmount, currentSavings }) => {
    const progressPercentage = Math.min((currentSavings / goalAmount) * 100, 100);

    return (
    <div className="insights">
        <h2>Insights</h2>
        <div className="insights-boxes">
            <div className="insight-item">
                <h3>Biggest Expenses</h3>
                <p>$X,XXX</p>
            </div>
            <div className="insight-item">
                <h3>Dominant Category</h3>
                <p>Category Name</p>
            </div>
            <div className="insight-item">
                <h3>Minimal Category</h3>
                <p>Category Name</p>
            </div>
        </div>
    </div> 
    );
};

export default SavingsGoals;