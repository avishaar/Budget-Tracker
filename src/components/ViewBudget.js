import React from "react";

const ViewBudget = (props) => {
    return (
        <>
            <h3 id='budget-text'>Budget: </h3>
            <h1 id='budget'>${props.budget}</h1>
            <button type='button' class='btn btn-outline-success' onClick={props.handleEditClick}>Edit</button>
        </>
    );
};

export default ViewBudget;