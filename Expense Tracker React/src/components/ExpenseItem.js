import './ExpenseItem.css'
function ExpenseItem(props) {

  return (
    <div className='expense-item '>
      <div >
        {" "}
        <h1 > {props.title}  </h1>{" "}
      </div>
      <div>
        {" "}
        <h2 className='expense-item__description'>{props.date.toISOString()}</h2>
      </div>
      <div>
        {" "}
        <h2 className='expense-item__description'>{props.location}</h2>
      </div>
      <div>
        {" "}
        <h2 className='expense-item__price'>{props.amount}</h2>
      </div>
    </div>
  );
}
export default ExpenseItem;
