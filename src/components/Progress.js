import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const WithLabelExample = () => {

    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);


    const now = Math.ceil(((totalExpenses) / budget) * 100);
    
    return (
    
    <ProgressBar variant='success' now={now} label={`${now}%`} />);
}

export default WithLabelExample;
