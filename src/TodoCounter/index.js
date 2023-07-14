import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
// const estilos = {
//   backgroundColor: 'orangered',
//   color: 'green'
// }

function TodoCounter() {
  const {
    completeTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  const congratsMessage = <h1>Great!! you have completed all your tasks</h1>;
  const defaultMessage = <h1>You have completed {completeTodos} of {totalTodos} Tasks</h1>;
  const noTodosMessage = <h1>No tasks to complete</h1>
  const message = totalTodos === 0 ? noTodosMessage:((totalTodos === completeTodos)? congratsMessage: defaultMessage);
  return message;
}

export { TodoCounter };