import React from 'react';

const ViewExpense = (props) => {
    return (
        <>
            <button type='button' class='btn btn-secondary' onClick={props.handleEditClick}>
                Edit
			</button>
        </>
    );
};

export default ViewExpense;