import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';


// AppReducer will be responsible to return the default or a new state to the useReducer
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        case 'SET_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map((expense) => {
                    if (expense.id === action.payload.id)
                        return expense.cost = action.payload.value
                    else
                        return expense
                }),
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        {
            id: uuidv4(),
            name: 'Shopping',
            cost: 40
        },
        {
            id: uuidv4(),
            name: 'Travel',
            cost: 50
        },
        {
            id: uuidv4(),
            name: 'Grocery',
            cost: 50
        },
        {
            id: uuidv4(),
            name: "Child Care",
            cost: 500
        }
    ]
};



export const AppContext = createContext();



export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
};