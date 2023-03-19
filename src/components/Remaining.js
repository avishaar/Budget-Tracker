import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert ${alertType}, alert alert-success p-3 d-flex align-items-center justify-content-between`}>
			<span>Remaining: ${budget - totalExpenses}</span>
		</div>
	);
};

export default RemainingBudget;