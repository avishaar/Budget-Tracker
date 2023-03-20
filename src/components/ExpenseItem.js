import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";
import { FaCar } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { IoIosShirt } from 'react-icons/io'
import { BsHouseFill } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';

const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
console.log(props);
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
                {props.category === 'Travel' ? <FaCar size='1.5em'/> :
                props.category === 'Clothing' ?  <IoIosShirt size='1.5em'/> :
                props.category === 'Food' ?  <MdFastfood size='1.5em'/> :  
                props.category === 'Household Items' ? <BsHouseFill size='1.5em'/> :
                <MdAttachMoney size='1.5em'/>}
            {' '}
            {props.name}
            </div>
            <div>
                <span>
                    ${props.cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;