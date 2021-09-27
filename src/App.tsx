import React from 'react';
import './App.css';
import Greet from "./components/Greet";
import GreetParent from "./components/GreetParent";

function App() {
  return (
    <GreetParent>
      <Greet name="Sumeet" isLoggedIn={true}/>
      <Greet isLoggedIn={false}/>
    </GreetParent>
  );
}

export default App;
