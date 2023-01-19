import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  const [amt, setAmt] = useState(props.amount);
  
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
  const amountHandler = () => {
    setAmt('100$');
    
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amt}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;
