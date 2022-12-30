import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className='expense-item '>
      <div >
        {" "}
        <h1 > 04 oct  </h1>{" "}
      </div>
      <div>
        {" "}
        <h2 className='expense-item__description'>Food</h2>
      </div>
      <div>
        {" "}
        <h2 className='expense-item__price'>100Rs</h2>
      </div>
    </div>
  );
}
export default ExpenseItem;
