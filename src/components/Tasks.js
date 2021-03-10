import { useState } from 'react';
import '../assets/css/Tasks.css';
import { ReactComponent as Trash } from '../assets/icons/icon-trash.svg';
import { ReactComponent as Disk } from '../assets/icons/icon-disk.svg';
import { ReactComponent as Pen } from '../assets/icons/icon-pen.svg';
import { Button, Input, Header, Grid, GridColumn, Card } from 'semantic-ui-react';



const Tasks = (props) => {
    console.log(props);
    const [edittingTask, setEdittingTask] = useState(false);
    const [editText, setEditText] = useState('');

    const handleChange = (event) => {
        setEditText(event.target.value);

    }
    const edditingTask = () => {
        setEdittingTask(true);
    }
    return (
        <div className="tasks" >
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            id
                    </th>
                        <th>
                            Task
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tasks.map(task => {
                            return (
                                <tr key={task.id} >
                                    <td>
                                        {task.text}
                                    </td>
                                    <td>
                                        {(() => {
                                            if (edittingTask === true) {
                                                return <div>
                                                    <Input onChange={handleChange} /> <button onClick={() => { props.editTask(task.id, task.text, editText, setEdittingTask(false)) }}><Disk></Disk></button>
                                                </div>
                                            } else {
                                                return <div>
                                                    <button onClick={edditingTask} className="mr"><Pen></Pen></button>
                                                    <button onClick={() => { props.removeTask(task.id) }} className="ml"> <Trash></Trash></button>
                                                </div>
                                            }
                                        })()}

                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>

    );
}
export default Tasks;