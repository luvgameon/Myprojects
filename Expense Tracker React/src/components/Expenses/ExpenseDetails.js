import "./ExpenseItem.css";
function ExpenseDetails(props) {
  return (
    <div className="mycss">
      <div className="mycss">
        {" "}
        <h1> {props.title} </h1>
      </div>
      <div className="mycss">
        {" "}
        <h2 className="expense-item-float-left h2">{props.location}</h2>
      </div>
      <div className="mycss">
        {" "}
        <h2 className="expense-item__price">{props.amount}</h2>
      </div>
    </div>
  );
}
export default ExpenseDetails;
