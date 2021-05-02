import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';



const ExpenseTotal = () => {

    const { expenses, budget } = useContext(AppContext);


    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0)

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-primary';

    return (
        <div className={`alert ${alertType} p-4`}>
            <span>
                Spent so Far: ${totalExpenses}
            </span>
        </div>
    );
};


export default ExpenseTotal;