import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [category, setCategory] = useState('');


	const onSubmit = (event) => {
		event.preventDefault();

		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
			category: category,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label for='category'>Category</label>
					<select class="form-select" aria-label="Default select example" id='category' value={category} onChange={(event) => setCategory(event.target.value)}>
						<option selected disabled>Choose an expense category</option>
						<option value="Food">Food</option>
						<option value="Travel">Travel</option>
						<option value="Clothing">Clothing</option>
						<option value="Household Items">Household Items</option>
					</select>
				</div>
				<div className='col-sm'>
					<button type='submit' className='btn btn-success mt-3'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;