import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import FilterExpense from './FilterExpense';

const Expenses = (props) => {
  const [FilterYear,setFilterYear]=useState('2022');
  const filterchangehandler=(selectedyear)=>{
    setFilterYear(selectedyear);
  };
  const FilteredExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()=== FilterYear;
  });

  return (
    <Card className="expenses">
      <FilterExpense
      selected={FilterYear}
      onChangeFilter={filterchangehandler}/>

      {FilteredExpense.map((e) => (
            <ExpenseItem
            key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
              
            />
          ))}
    </Card>
  );
}

export default Expenses;
