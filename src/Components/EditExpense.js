import React, { useState } from 'react';

const EditExpense = (props) => {
    const [value, setValue] = useState(props.expense);
    return (
        <>
            <input
                required='required'
                type='number'
                class='form-control mr-3'
                id='name'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type='button'
                class='btn btn-primary'
                onClick={() => props.handleSaveClick(value)}
            >
                Save
			</button>
        </>
    );
};

export default EditExpense;