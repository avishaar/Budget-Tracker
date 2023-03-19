import React from "react";

const ViewBudget = (props) => {
    return (
        <>
            <span id='budget'>Budget: </span> 
            <span id='amount'> ${props.budget}</span>
            <button type='button' class='btn btn-outline-success btn-sm' onClick={props.handleEditClick}>Edit</button>
        </>
    );
};

export default ViewBudget;