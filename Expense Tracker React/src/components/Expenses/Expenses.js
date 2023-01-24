import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import FilterExpense from "./FilterExpense";

const Expenses = (props) => {
  const [FilterYear, setFilterYear] = useState("2022");
  const filterchangehandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };
  const FilteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilterYear;
  });

  let expensesContent = <h3 className="mycolor">No expenses found.<br/>Add Expense Here</h3>;
  let onlysingle;
  if (FilteredExpense.length > 0) {
    expensesContent = FilteredExpense.map((e) => (
      <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
    ));
  }
  if(FilteredExpense.length===1)
  {
    onlysingle=<p className="mycolor">Only Single Expense is Here Add More</p>
    
    
  

  }
  

  return (
    <Card className="expenses">
      <FilterExpense
        selected={FilterYear}
        onChangeFilter={filterchangehandler}
      />
      {expensesContent}{onlysingle}
     
    </Card>
  );
};

export default Expenses;
