import React from 'react'
import './FilterExpense.css';

export default function FilterExpense(props) {
    const dropdownhandler=(event)=>{
        props.onChangeFilter(event.target.value);

    };
  return (
    <div className='expenses-filter expenses-filter__control'>Filter Expense By Year
        <select value={props.selected} onChange={dropdownhandler}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>

    </div>
  )
}
