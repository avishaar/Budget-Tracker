import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {

	const { expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='p-3 d-flex align-items-center justify-content-between'>
			<span id='spent'>Spent so far: </span>
			<span id='spent-amount'>${totalExpenses}</span>
		</div>
	);
};



export default ExpenseTotal;