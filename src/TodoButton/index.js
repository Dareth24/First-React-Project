import React from 'react';
import './TodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {setOpenModal, openModal} = React.useContext(TodoContext)
    return (
        <button className='New-Todo' onClick={() => {
            setOpenModal(!openModal);
            console.log(openModal);
            console.log('Diste click');
            }}>
            New Task
        </button>
    );
  }

  export { CreateTodoButton };