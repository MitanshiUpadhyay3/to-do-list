
import React, {useState, useEffect} from 'react'
import './App.css';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import ItemMap from './components/ItemMap';

function App() {
  const [task, setTask] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem('task'));
    return storedTodos || [];
  })

  useEffect(() => {
    localStorage.removeItem('task')
    console.log(localStorage)
    const storedTodos = localStorage.getItem('task');
    if (storedTodos) {
      setTask(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
    
  }, [task]);

  const addTask = (name) =>{
    let newTask = [...task]
    newTask.push(name)
    setTask(newTask)
  }

  const editBtn = (idx, val) => {
    // const val = window.prompt("enter edited value");  
    let newTask = [...task]
    newTask[idx] = val;
    setTask(newTask)
  }

  const rmvbtn = (idx) =>{
    let newTask = [...task]
    newTask.splice(idx,1)
    setTask(newTask)
  }
  return (
    <>
    <div className="heading">
      <h2>Todo List</h2>
    </div>
    <div className="container main">
    <AddItem  addTask={addTask}/>
    <ItemMap task={task} editBtn={editBtn} rmvbtn={rmvbtn}/>
    </div>
   
    </>
  );
}

export default App;

