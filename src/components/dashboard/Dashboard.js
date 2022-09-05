import { useState } from "react";
import './Dashboard.css';
const Dashboard = () => {

    const [accountBalance, setAccountBalance] = useState(345);
    const [depositsAndWithdrawals, setDepositsAndWithdrawals] = useState(0);


    const handleValueOfDepositsAndWithdrawals = event => {

        setDepositsAndWithdrawals(event.target.value);
        console.log('depositsAndWithdrawals : ', event.target.value);

    };

    const fnArrAdd = () => {
        setAccountBalance(Number(accountBalance) + Number(depositsAndWithdrawals));
        setDepositsAndWithdrawals(0);
    }

    const fnArrSub = () => {

        setAccountBalance(Number(accountBalance) - Number(depositsAndWithdrawals));
        setDepositsAndWithdrawals(0);

    }

    return (
        <>
            <h1>Banking App</h1>

            <div className="clsDivParent">
                <h2>Your account</h2>
                <input type="number" className="clsAccountBalance" value={accountBalance} />
                <br />
                <input type="number" className="clsDepositsAndWithdrawals" onChange={handleValueOfDepositsAndWithdrawals} value={depositsAndWithdrawals} defaultValue={depositsAndWithdrawals} />

                <div className="divBtn">
                    <button onClick={fnArrAdd}>Einzahlen</button>
                    <button onClick={fnArrSub}>Auszahlen</button>
                </div>
            </div>

        </>
    );

}

export default Dashboard;