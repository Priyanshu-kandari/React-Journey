export const Task = (props) => (
    <div className={`task ${props.completed?"complete":null}`} >
      <h1>{props.taskname}</h1>
      <button onClick={ ()=> (props.completeTask(props.id))}>Complete</button>
      <button onClick={()=>(props.deleteTask(props.id))}>x</button>
    </div>
)

export default Task