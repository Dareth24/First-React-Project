import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {//se pone el children porque los componentes hijos del provider son los que usarán las props
    const {items: todos, //sintaxis para renombrar propiedades de un objeto :
    saveItems: saveTodos,
    loading,
    error} = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const addTodo = (text) => {
        let newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    };

    const completeTodos = todos.filter(todo => !!todo.completed).length;//estado derivado
    const totalTodos = todos.length;//estado derivado

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });

    const checkTodos = (props) => {
        let newTodos = [...todos];//aqui usamos el spread operator porque si solo ponemos todos sería una referencia al original, no una copia, y no podemos mutar todos, debido a las reglas de inmutabilidad de react, para actualizar todos debemos usar setState en este caso setTodos

        let todoCheck = newTodos.find((todo)=> todo.text === props.text);

        todoCheck.completed = !todoCheck.completed;
    
        saveTodos(newTodos);
    }

    const deleteTodos = (props) => {
        const updateTodos = todos.filter((todo)=> todo.text !== props.text);
        saveTodos(updateTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading, 
            error, 
            completeTodos, 
            totalTodos, 
            searchValue, 
            setSearchValue, 
            searchedTodos, 
            todos, 
            checkTodos, 
            deleteTodos,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };