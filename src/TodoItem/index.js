import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li>
      <CompleteIcon 
        completed={props.completed}
        onComplete={() => (props.checkTodos(props))}
      />
      {/* <span onClick={() => (props.checkTodos(props))}>
        <i className={`fa-solid fa-circle-check ${props.completed ? "Icon-check--active" : ""}`}></i>
      </span> */}
      <p className={`${props.completed ? "TodoItem-p--completed" : ""}`}>{props.text}</p>

      <DeleteIcon 
        onDelete={() => (props.deleteTodos(props))}
      />
      {/* <span onClick={() => (props.deleteTodos(props))}>
        <i className="fa-solid fa-circle-xmark"></i>
      </span> */}
    </li>
  );
}

export { TodoItem };

// () => deletee(props.text)
// {console.log(`jala el check ${props.text}`)}