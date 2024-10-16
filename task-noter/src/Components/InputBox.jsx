import { useState } from "react";
import "../Style-sheets/InputBox.css";
import { v4 as uuidv4 } from "uuid";

function InputBox({onsubmit}) {

  const [text, setText] = useState("");

  const handleChange = function(event) {
    setText(event.target.value);
  };

  const createTaskObject = function(event) {
    event.preventDefault();
    let newTask = {
      id: uuidv4(),
      text: text,
      completed: false
    };
    onsubmit(newTask);
    setText("");
  };

  return(
    <form className="form" onSubmit={createTaskObject}>
      <input
        className="input-box"
        type="text"
        value={text}
        placeholder="Write your task here"
        name="text"
        onChange={handleChange}/>
      <button className="enter-button">Enter Task</button>  
    </form>
  );
}

export default InputBox;