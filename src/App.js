// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
// import semantic from 'semantic-ui-css'
import { Button, Input, Header, Grid, GridColumn, Card } from 'semantic-ui-react';


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
      <Header as='h1'>LKMX - Front-End</Header>

      <div className="bg-color">
      <Grid centered>
        <Grid.Row>

          <GridColumn width={12} textAlign='center'>
            <Card centered fluid className="p-2">
              <div className="left">
              <Header as='h2' className="p-2">To Do List</Header>

              </div>
              <div >
                <Input onChange={handleChange} /> <Button onClick={addTask} primary >Agregar</Button>
              </div>
              <Tasks tasks={tasks} removeTask={removeTask} editTask={editTask} />
            </Card>
          </GridColumn>
        </Grid.Row>
      </Grid>
      </div>
    </div>
  );
}

export default App;
