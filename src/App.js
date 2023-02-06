import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import Showuser from './Components/Users/ShowUser';


function App() {
  const [userList, setuserList] = useState([]);
  const addUserHandler=(uName,uAge,clg)=>{
    setuserList((prevdetails)=>{
      return [
        ...prevdetails,
        {name:uName,age:uAge,clgName:clg,id:Math.random().toString()}
      ];
    });

  };
  const cnt=userList.length;
  if(cnt===0)
  {
    return (
      <div>
      <AddUser onAdduser={addUserHandler}/>
      </div>

    )
  }
  else{
  return (
    
    
    <div>
    <AddUser onAdduser={addUserHandler}/>
      <Showuser users={userList}/>

    </div>
  );
  }
}

export default App;
