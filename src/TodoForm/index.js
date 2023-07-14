import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm () {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const [newTodoValue, setNewTodoValue] = React.useState('');//estado local

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue.trim());
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new task</label>
            <textarea placeholder="Study Math" value={newTodoValue} onChange={onChange} required/>
            <div className="TodoForm-buttonContainer">
                <button type="button" className="Todo-Form-button Todo-Form-button--cancel" onClick={onCancel} >Cancel</button>
                <button type="submit" className="Todo-Form-button Todo-Form-button--add">Add</button>
            </div>
        </form>
    )
}

export { TodoForm };