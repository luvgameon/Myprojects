import React,{useState} from 'react'
import './ExpenseForm.css';



export default function ExpenseForm(props) {
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
   
    const submithandler=(event)=>{
          event.preventDefault();
          const Expensedata={
            title: entertitle,
            amount: enterAmt,
            date: new Date(enterdate)
          }
     props.onsubmitexpensedata(Expensedata);
     setentertitle('');
     setenterAmt('');
     setenterdate('');

       
           
     
    };

    
   
  return (
    <>
    <form onSubmit={submithandler} >
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={entertitle} onChange={titleChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input
          type='number'
          min='0.01'
          step='0.01'
          onChange={amountChangeHandler}
          value={enterAmt}
        />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input
          type='date'
          min='2019-01-01'
          max='2024-12-31'
          value={enterdate}
          onChange={dateChangeHandler}
        />
      </div>
    </div>
    <div className='new-expense__actions'>
    <button type='button' onClick={props.onCancel}>Cancel</button>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
    
    </>
  
  );
}
