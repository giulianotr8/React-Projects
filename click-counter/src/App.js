import { useState } from 'react';
import './App.css';
import Button from './Components/Button.jsx';
import Screen from './Components/Screen.jsx';

function App() {

  const [clicks, setClicks] = useState(0);
  
  const addToCounter = function() {
    setClicks(clicks+1);
  }

  const resetCounter = function() {
    setClicks(0);
  }
  
  return (
    <div className="App">
      <div className="logo-container">
        <img
        className="freecodecamp-logo"
        src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
        alt="freecodecamp-logo"/>
      </div>
      <div className="counter-container">
        <Screen
          clicks={clicks}/>
        <Button 
          text={"Add"}
          isCountButton={true}
          handleClick={addToCounter}/>
        <Button 
          text={"Reset"}
          isCountButton={false}
          handleClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
