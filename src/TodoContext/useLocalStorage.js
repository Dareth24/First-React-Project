import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItems = localStorage.getItem(itemName);
    
          let parsedItems;
    
          if (!localStorageItems) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItems = [];
          } else {
            parsedItems = JSON.parse(localStorageItems);
            setItems(parsedItems);
          }
          setLoading(false);
        } catch(error) {
          setError(true);
        }
      }, 2500)
    }, [itemName, initialValue]) //array de dependencias para ejecutar solo una vez el effect
  
    const saveItems = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItems(newItems);
    }
  
    return {
      items,
      saveItems,
      loading,
      error,
    }; //si debemos retornar más de 2 elementos desde un custom hook es mejor enviarlos como objeto y no como array
  }

export {useLocalStorage};

// const defaultTodos = [
//   {text: 'Estudiar', completed: false}, {text: 'manejar avión', completed: true}, {text: 'Leer', completed: false}, {text: 'Meditar', completed: true}, {text: 'Aprender a usar estados derivados', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');