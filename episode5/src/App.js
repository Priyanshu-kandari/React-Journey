import { useState } from 'react';
import './App.css';
import {Task} from './task';

function App() {
  const [toDoList,setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e)=>{
    setNewTask(e.target.value)
  }
  const addTask = () => {
    if(newTask.trim() === "")return alert("add some Task");
    const task = {
      id : Date.now(),
      taskname: newTask,
      completed: false
    }
    setToDoList([...toDoList,task]);
    setNewTask("")
  }

  const deleteTask =(id) => {
    const newList = toDoList.filter(task=> task.id !== id)
    setToDoList(newList)
  }

  const completeTask = (id) => {
    const updatedList = toDoList.map(task =>
      task.id === id?{...task,completed:!task.completed}:task
    );
    setToDoList(updatedList);
  }


  return (
    <div className="App">
      <div className='addTask'>
        <input type='Text' value={newTask} onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
        
      </div>
      <div className='list'>
        {
          toDoList.map((task)=>(
            <Task taskname = {task.taskname} id={task.id} deleteTask={deleteTask} completed= {task.completed} completeTask={completeTask}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
