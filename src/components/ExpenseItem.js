import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";
import { FaCar } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { IoIosShirt } from 'react-icons/io'
import { BsHouseFill } from 'react-icons/bs';

const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
                <FaCar size='1.5em'/>
                <MdFastfood size='1.5em'/>
                <IoIosShirt size='1.5em'/>
                <BsHouseFill size='1.5em'/>
                {/* need to make an if statement? so that depending on category icon can change */}
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