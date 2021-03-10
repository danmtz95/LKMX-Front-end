import { useState } from 'react';
import '../assets/css/Tasks.css';
import { ReactComponent as Trash } from '../assets/icons/icon-trash.svg';
import { ReactComponent as Disk } from '../assets/icons/icon-disk.svg';
import { ReactComponent as Pen } from '../assets/icons/icon-pen.svg';



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
        <div className="col-12" >
            <table className="table bg-color rounded">
                <thead >
                    <tr>
                        <th>
                            Task
                    </th>
                        <th>
                            Options
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
                                                    <div className="row">
                                                        <div className="col-10"><input onChange={handleChange} className="form-control" /></div>
                                                        <div className="col-2 text-left"> <button className=" btn-light" onClick={() => { props.editTask(task.id, task.text, editText, setEdittingTask(false)) }}><Disk></Disk></button></div>

                                                    </div>
                                                    
                                                </div>
                                            } else {
                                                return <div>
                                                    <button onClick={edditingTask} className="mr btn-light rounded"><Pen></Pen></button>
                                                    <button onClick={() => { props.removeTask(task.id) }} className="ml btn-light rounded"> <Trash></Trash></button>
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