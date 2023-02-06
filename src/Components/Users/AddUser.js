import React,{useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';


const AddUser = (props) => {
  const [username, setusername] = useState('');
  const [age, setage] = useState('');
  const [error,seterror]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(username.trim().length===0 || age.trim().length===0){
      seterror({
        title:"Enter A Valid Input",
        msg:'Please Enter correct age and Name'
      })
      return;
    }
    if(+age < 1){
      seterror({
        title:"Enter A Valid Age",
        msg:'Age must be postive'
      })
      return; 
    }
    props.onAdduser(username,age);
    setusername('');
    setage('');
    
   
   
  
  };
  const changeusername=(event)=>{
    setusername(event.target.value);

  }
  const changeage=(event)=>{
    setage(event.target.value);

  }
  const errorhandler=()=>{
    seterror(null);
  }
  

  return (
    <Wrapper>
    { error && <ErrorModal title={error.title} msg={error.msg} onConfirm={errorhandler}></ErrorModal>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={changeusername}/>
        <label htmlFor="age" >Age Years</label>
        <input id="age" type="number" value={age} onChange={changeage}/>
        <Button type='submit' > Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;