import React, { useReducer, useState,useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
//---------------------------------------------------> Email
const Emailreduce = (state,action)=>{
  if(action.type==='USER_INPUT')
  {
    return {value:action.val,Isvalid:action.val.includes('@')};
  }
  if(action.type==="TYPE_BLUR")
  {
        return {value:state.value,Isvalid:state.value.includes('@')}
  }

  return { value:'', Isvalid:null,};
}

//-------------------------------------------------------->PassWord
const Passreduce = (state,action)=>{
  if(action.type==='USER_INPUT')
  {
    return {value:action.val,Isvalid:action.val.trim().length > 6};
  }
  if(action.type==="TYPE_BLUR")
  {
        return {value:state.value,Isvalid:state.value.trim().length > 6}
  }

  return { value:'', Isvalid:null,};
}


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredclgname, setenteredclgname] = useState('');
  const [clgnameIsValid, setclgnameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [Emailstate,dispatchEmail]=useReducer(Emailreduce,{
    value:'',
    Isvalid:null,
  });
  const [Passstate,dispatchPass]=useReducer(Passreduce,{
    value:'',
    Isvalid:null,
  });
  const {Isvalid:emailIsValid}=Emailstate;
  const {Isvalid:passwordIsValid}=Passstate;
  useEffect(()=>{
    const identifer= setTimeout(()=>{
      console.log('setform Running')
      setFormIsValid(emailIsValid &&passwordIsValid && enteredclgname.trim().length>0)
        

    },500)
    return ()=>{
      console.log('clean UP')
      clearTimeout(identifer);
    }; 
    
  },[emailIsValid,passwordIsValid,enteredclgname])
 

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT",val:event.target.value})
    // setFormIsValid(
    //   Emailstate.Isvalid && Passstate.Isvalid && enteredclgname.trim().length>0
    // );

   
  };
  const clgChangeHandler = (event) => {
    setenteredclgname(event.target.value);
    // setFormIsValid(
    //   Emailstate.Isvalid && Passstate.Isvalid && event.target.value.trim().length>0
    // );

   
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type:"USER_INPUT",val:event.target.value})
    // setFormIsValid(
    //   Emailstate.Isvalid && Passstate.Isvalid && enteredclgname.trim().length>0
    // );

  
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"TYPE_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchPass({type:"TYPE_BLUR"});
  };
  const validateclgNameHandler = () => {
    setclgnameIsValid(enteredclgname.trim().length > 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(Emailstate.value, Passstate.value,enteredclgname);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            Emailstate.Isvalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={Emailstate.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            clgnameIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="clgname">College Name</label>
          <input
            type="text"
            id="clgname"
            value={enteredclgname}
            onChange={clgChangeHandler}
            onBlur={validateclgNameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            Passstate.Isvalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={Passstate.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;