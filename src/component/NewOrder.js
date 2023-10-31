import React from 'react';



import FoodOrderForm from './FoodOrderForm';

const NewOrder = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
  return (
    <div className='new-expense'>
      <FoodOrderForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewOrder;