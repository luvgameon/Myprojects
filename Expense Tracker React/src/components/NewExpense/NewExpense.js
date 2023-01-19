import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const myfun=(enteredexpensedata)=>{
    const expensedata={
      id: Math.random(),
    ...enteredexpensedata,
    
    };
   
    props.addexpense(expensedata);

  };
  
  return (
    <div className='new-expense'>
      <ExpenseForm onsubmitexpensedata={myfun}/>
    </div>
  );
  
};

export default NewExpense;