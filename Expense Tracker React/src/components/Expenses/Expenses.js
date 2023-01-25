import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import FilterExpense from "./FilterExpense";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [FilterYear, setFilterYear] = useState("2022");
  const filterchangehandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };
  const FilteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilterYear;
  });

  

  

  return (
    <Card className="expenses">
      <FilterExpense
        selected={FilterYear}
        onChangeFilter={filterchangehandler}
      />
      <ExpenseChart expenses={FilteredExpense}/>
      <ExpenseList items={FilteredExpense}/>
     
    </Card>
  );
};

export default Expenses;
