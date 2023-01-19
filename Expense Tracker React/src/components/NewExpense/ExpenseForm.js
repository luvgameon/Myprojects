import React,{useState} from 'react'
import './ExpenseForm.css';


export default function ExpenseForm() {
  const [entertitle, setentertitle] = useState('');
  const [enterAmt, setenterAmt] = useState('');
  const [enterdate, setenterdate] = useState('');
    const titleChangeHandler=(event)=>{
        setentertitle(event.target.value);
        
    };
    const amountChangeHandler=(event)=>{
      setenterAmt(event.target.value);

    };
    const dateChangeHandler=(event)=>{
      setenterdate(event.target.value);
    };
   
    

    
   
  return (
    <form >
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={titleChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input
          type='number'
          min='0.01'
          step='0.01'
          onChange={amountChangeHandler}
        />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input
          type='date'
          min='2019-01-01'
          max='2022-12-31'
          onChange={dateChangeHandler}
        />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>

  
  );
}
