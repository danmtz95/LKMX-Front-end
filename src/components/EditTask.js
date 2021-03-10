
const EditTask = (props) => {
    console.log(props);
    const handleChange = (event) => {
        setTask(event.target.value);
        
      }
    return (
        <div>
            <intput/> <button></button>
        </div>
    );
}
export default EditTask;