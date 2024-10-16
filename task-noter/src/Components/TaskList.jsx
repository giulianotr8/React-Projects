import { useState } from "react";
import "../Style-sheets/TaskList.css";
import InputBox from "./InputBox";
import Task from "./Task";

function TaskList() {

  const [tasks, setTask] = useState([]);

  const addTask = function(newtask) {
    if(newtask.text.trim()) {
      setTask([newtask, ...tasks]);
    }
  };

  const deleteTask = function(id) {
    setTask(tasks.filter(function(x) {return x.id != id;}));
  };

  const completeTask = function(id) {
    setTask(tasks.map(function(x) {
      if(x.id == id) {
        x.completed = !x.completed;
      }
      return x;
    }));
  };

  return(
    <>
      <InputBox onsubmit={addTask}/>
      <div className="list">
        {tasks.map(function(x) {
          return <Task key={x.id} id={x.id} text={x.text} completed={x.completed} completeTask={completeTask} deleteTask={deleteTask}/>;
        })}
      </div>
    </>
  );
}

export default TaskList;