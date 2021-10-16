/* eslint-disable require-jsdoc */
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import GreetParent from "./components/GreetParent";
import LoggedIn from "./components/LoggedIn";
import User from "./components/User";
import Counter from "./components/Counter";
import Context1 from "./components/Context1";

// type css = React.CSSProperties;

function App() {
  const [count, setCount] = useState(0);

  const handleOnClick: React.MouseEventHandler = function (e) {
    setCount(count + 1);
  };

  return (
    <>
      <GreetParent>
        <Greet name="Sumeet" isLoggedIn={true} />
        <Greet isLoggedIn={false} />
      </GreetParent>
      <Button count={count} handleOnClick={handleOnClick}></Button>
      <LoggedIn></LoggedIn>
      <User />
      <Counter />
      <Context1 />
    </>
  );
}

export default App;
