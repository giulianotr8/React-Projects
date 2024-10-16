import { useState } from 'react';
import './App.css';
import Button from './Components/Button.jsx';
import ClearButton from './Components/ClearButton.jsx';
import Display from './Components/Display.jsx';
import { evaluate } from 'mathjs';

function App() {
    
  const [input,setInput] = useState("");

  const print = function(key) {
    setInput(input+key);
  };

  const clear = function() {
    setInput("");
  };

  const calculate = function() {
    if(input) {
      setInput(evaluate(input).toString());
    } else {
      alert("Type an input");
    }
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
          alt="freecodecamp-logo"/>
      </div>
      <div className="calculator">
        <Display input={input}/>
        <div className="row">
          <Button handleClick={print}>1</Button>
          <Button handleClick={print}>2</Button>
          <Button handleClick={print}>3</Button>
          <Button handleClick={print}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={print}>4</Button>
          <Button handleClick={print}>5</Button>
          <Button handleClick={print}>6</Button>
          <Button handleClick={print}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={print}>7</Button>
          <Button handleClick={print}>8</Button>
          <Button handleClick={print}>9</Button>
          <Button handleClick={print}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calculate}>=</Button>
          <Button handleClick={print}>0</Button>
          <Button handleClick={print}>.</Button>
          <Button handleClick={print}>/</Button>
        </div>
        <div className="row">
          <ClearButton handleClick={clear}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
