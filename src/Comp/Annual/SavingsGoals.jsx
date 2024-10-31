const SavingsGoals = ({ goalAmount, currentSavings }) => {
    const progressPercentage = Math.min((currentSavings / goalAmount) * 100, 100);

    return (
        <div className="savings-goals">
            <h2>Savings Goals</h2>
            <div className="savings-goal">
                <p>Goal Amount: ${goalAmount}</p>
                <p>Current Savings: ${currentSavings}</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <p>{progressPercentage.toFixed(0)}% Achieved</p>
            </div>
        </div>
    );
};

export default SavingsGoals;