import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "bangolore",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "gurgoan",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Delhi",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Noida",
    },
    {
      id: "e5",
      title: "Game on (Wooden)",
      amount: 4500,
      date: new Date(2021, 5, 12),
      location: " Greatern Noida ",
    },
  ];
  return expenses.map((val) => { // here you return the new array created by map
    return  <div>
    <ExpenseItem
      title={val.title}
      date={val.date}
      location={val.location}
      amount={val.amount}
    ></ExpenseItem>
    </div>
    })
  // return (
  //   <div>
  //     <ExpenseItem
  //       title={expenses[0].title}
  //       date={expenses[0].date}
  //       location={expenses[0].location}
  //       amount={expenses[0].amount}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expenses[1].title}
  //       date={expenses[1].date}
  //       location={expenses[1].location}
  //       amount={expenses[1].amount}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expenses[2].title}
  //       date={expenses[2].date}
  //       location={expenses[2].location}
  //       amount={expenses[2].amount}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expenses[3].title}
  //       date={expenses[3].date}
  //       location={expenses[3].location}
  //       amount={expenses[3].amount}
  //     ></ExpenseItem>
  //   </div>
  // );
}

export default App;
