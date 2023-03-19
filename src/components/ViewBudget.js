import React from "react";

const ViewBudget = (props) => {
    return (
        <div class='p-3 d-flex align-items-center justify-content-between'>
            <span id='budget'>Budget: </span> 
            <span id='amount'> ${props.budget}</span>
            <button type='button' class='btn btn-outline-success btn-sm' onClick={props.handleEditClick}>Edit</button>
        </div>
    );
};

export default ViewBudget;