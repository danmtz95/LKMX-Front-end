// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.css';

// import { Button, Input, Header, Grid, GridColumn, Card } from 'semantic-ui-react';


function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([{ id: '1', text: 'task 1' }, { id: '2', text: 'task 2' }]);

  const handleChange = (event) => {
    setTask(event.target.value);

  }

  const addTask = () => {
    const tasksCopy = tasks.map(task => ({ ...task }));
    tasksCopy.push({ id: new Date().toISOString(), text: task });
    setTasks(tasksCopy);
  }

  const editTask = (id, text, editText) => {
    const tasksCopy = tasks.map(task => {
      if (task.id === id) {
        task.text = editText;
        return task;
      } else {
        return task
      }
    });

    setTasks(tasksCopy);

    // setEdittingTask(false)
    // const tasksCopy = tasks.map(task=>( {...task}));
    // tasksCopy.push({id:(new Date()).getTime(),text:task});
    // setTasks(tasksCopy);
  }

  const removeTask = (id) => {
    const tasksCopy = tasks.map(task => ({ ...task })).filter(task => { return task.id !== id });
    console.log(tasks, id);
    // tasksCopy.({id:new Date().toString(),text:task});
    setTasks(tasksCopy);
  }

  return (

    <div className="App">
      <h1>LKMX - Front-End</h1>

      <div className="bg-color">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <div  className="card p-2">
              <div className="">
              <h2 className="p-2">To Do List</h2>

              </div>
              <div className="row p-2 m-0">
                <div className="col-10">
                <input onChange={handleChange} className="form-control" /> 
                </div>
                <div className="col-2 text-left">
               <button onClick={addTask} className="btn btn-primary" >Agregar</button>
                </div>
              </div>
              <Tasks tasks={tasks} removeTask={removeTask} editTask={editTask} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
