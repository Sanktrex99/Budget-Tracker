import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../Context/AppContext';
import ViewExpense from './ViewExpense';
import EditExpense from './EditExpense';

const ExpenseItem = (props) => {


    const { expense, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);


    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_EXPENSE',
            payload: [props.id, value]
        });
        setIsEditing(false);
    };

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <div className='p-3 mb-2 badge badge-primary badge-pill mr-3'>
                    <span className='col mt-sm-auto'>
                        ${props.cost}
                    </span>
                </div>
                {isEditing ? (
                    <EditExpense handleSaveClick={handleSaveClick} budget={expense} />
                ) : (
                    <ViewExpense handleEditClick={handleEditClick} budget={expense} />
                )}
                <TiDelete size='2.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};


export default ExpenseItem;