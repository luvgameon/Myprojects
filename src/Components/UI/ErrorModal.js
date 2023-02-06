import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Card from "./Card";

export default function ErrorModal(props) {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  };
  const Modal = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };
  return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<Modal title={props.title} msg={props.msg} onConfirm={props.onConfirm}/>, document.getElementById('overlay'))}
    

  </React.Fragment>;
}
