import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const myfun=(enteredexpensedata)=>{
    const expensedata={
      id: Math.random(),
    ...enteredexpensedata,
    
    };
    setstatus(false);
   
    props.addexpense(expensedata);

  };
  const [status, setstatus] = useState(false);
  const startediting=()=>{
    setstatus(true);

  }
  const stopediting=()=>{
    setstatus(false);
  }
  
  
  return (
    <div className='new-expense'>
      {!status && <button onClick={startediting}>Add New Expense</button>}
      {status && <ExpenseForm onsubmitexpensedata={myfun} onCancel={stopediting}/>}
    </div>
  );
  
};

export default NewExpense;