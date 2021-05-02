import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { v4 as uuidv4 } from 'uuid';


const AddExpenseForm = () => {
    // name, cost are state objects, so anything changes in their respective input fields, the changes occur in the state objects too.
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');


    const { dispatch } = useContext(AppContext);


    const onSubmit = (event) => {
        event.preventDefault();
        // create an object, that'll represent an expense and it will get sent along with the dispatch action as the payload.


        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };


        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='row align-items-center justify-content-start'>
                <div className='col-sm col-lg-4'>
                    <label for='name'>Expense Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    >
                    </input>
                </div>
                <div className='p-3 col-sm col-lg-4'>
                    <label for='cost'>Cost</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    >
                    </input>
                </div>
                <div className='p-3 m-auto col-sm'>
                    <button
                        className='btn btn-info btn-block'
                        type='submit'
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>

    );
};


export default AddExpenseForm;