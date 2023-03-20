import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// import { useContext, AppContext } from 'react';
// import ExpenseTotal from './ExpenseTotal';

const WithLabelExample = () => {
    //insert logic here to make percentage 
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);


    const now = Math.ceil(((budget-totalExpenses) / budget) * 100);
    
    console.log(expenses) 
    console.log(budget)
    
    return (
        
    <ProgressBar variant='success' now={now} label={`${now}%`} />);
}

export default WithLabelExample;
