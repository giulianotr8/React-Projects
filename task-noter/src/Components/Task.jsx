import "../Style-sheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({id, text, completed, completeTask, deleteTask}) {
  return (
    <div className={completed ? "task completed" : "task"}>
      <div className="text" onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className="icon-container" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="icon"/>
      </div>
    </div>
  );
}

export default Task;