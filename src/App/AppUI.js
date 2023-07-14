import React from 'react';
import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../TodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
// import { TodoCounterLoading } from '../;TodoCounterLoading';
import { TodoContext } from '../TodoContext';

function AppUI () {
  const {
    loading, 
    error, 
    searchedTodos, 
    todos, 
    checkTodos, 
    deleteTodos,
    openModal,
  } = React.useContext(TodoContext);
    return (
        <React.Fragment>
          {/* <TodoContext.Consumer>
          {loading ? <TodoCounterLoading /> : <TodoCounter/>}
          </TodoContext.Consumer> */}
          
          <TodoCounter/>
          <TodoSearch/>

          <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/> }

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                todos={todos}
                checkTodos={checkTodos}
                deleteTodos={deleteTodos}
              />
            ))}
          </TodoList>

          <CreateTodoButton />

          {openModal && (
            <Modal>
              <TodoForm></TodoForm>
            </Modal>
          )}
        </React.Fragment>
      );
}

export { AppUI };
