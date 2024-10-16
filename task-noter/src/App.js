import './App.css';
import TaskList from './Components/TaskList.jsx';

function App() {
  return (
    <div className="task-noter">
      <div className="logo-container">
        <img className="logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"/>
      </div>
      <div className="task-list">
        <h1>To Do</h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
