import React, { useReducer, useState,useEffect } from 'react';

import Card from '../UI/Card/Card';
import Input from '../UI/input/Input';
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
  // const [enteredclgname, setenteredclgname] = useState('');
  // const [clgnameIsValid, setclgnameIsValid] = useState();
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
      setFormIsValid(emailIsValid &&passwordIsValid  )
        

    },500)
    return ()=>{
      console.log('clean UP')
      clearTimeout(identifer);
    }; 
    
  },[emailIsValid,passwordIsValid])
 

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT",val:event.target.value})
    // setFormIsValid(
    //   Emailstate.Isvalid && Passstate.Isvalid && enteredclgname.trim().length>0
    // );

   
  };
  // const clgChangeHandler = (event) => {
  //   setenteredclgname(event.target.value);
  //   // setFormIsValid(
  //   //   Emailstate.Isvalid && Passstate.Isvalid && event.target.value.trim().length>0
  //   // );

   
  // };

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
  // const validateclgNameHandler = () => {
  //   setclgnameIsValid(enteredclgname.trim().length > 0);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(Emailstate.value, Passstate.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        
        <Input
        
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={Emailstate.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
       
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={Passstate.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
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