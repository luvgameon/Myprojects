import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);
  const [btn,setbtn]=useState('Asending Order');
  const changebtnHandler = () => {
    if(btn==='Desending Order'){
    setbtn('Asending Order');
    }
    else{
      setbtn('Desending Order');
    }
  };


  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} btn={btn}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changebtnHandler}>{btn}</Button>
    </div>
  );
}

export default App;
