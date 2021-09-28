import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Greet from "./components/Greet";
import GreetParent from "./components/GreetParent";

function App() {
  const [count, setCount] = useState(0);

  const handleOnClick:React.MouseEventHandler = function(e){
      setCount(count+1)
  }

  return (
    <>
      <GreetParent>
        <Greet name="Sumeet" isLoggedIn={true}/>
        <Greet isLoggedIn={false}/>
      </GreetParent>
      <Button  count={count} handleOnClick={handleOnClick}></Button>
    </>
  );
}

export default App;
