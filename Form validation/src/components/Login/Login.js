import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredclgname, setenteredclgname] = useState('');
  const [clgnameIsValid, setclgnameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(()=>{
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredclgname.trim().length>0
    );

  },[enteredEmail,enteredPassword,enteredclgname])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

   
  };
  const clgChangeHandler = (event) => {
    setenteredclgname(event.target.value);

   
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

  
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const validateclgNameHandler = () => {
    setclgnameIsValid(enteredclgname.trim().length > 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword,enteredclgname);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
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
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
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
