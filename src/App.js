import React from "react";
import { AppUI } from "./AppUI";

const todo = [
  { text: "Ejercitar", completed: false },
  { text: "Curso React", completed: false },
  { text: "Cocinar", completed: false },
  { text: "Organizar", completed: false },
];

function useLocalStorage(itemName, initialValue){

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifyItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
  const [todos, saveToDo] = useLocalStorage('TODOS_V1', []);

  const [state, setState] = React.useState("");

  const completedToDo = todos.filter((todo) => !!todo.completed).length;
  const totalToDo = todos.length;

  let searchToDo = [];

  if (!state.length >= 1) {
    searchToDo = todos;
  } else {
    searchToDo = todos.filter((todo) => {
      const toDoText = todo.text.toLowerCase();
      const searchText = state.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const completeToDos = (text) => {
    const toDoIndex = todos.findIndex((todo) => todo.text === text);

    const newToDo = [...todos];
    newToDo[toDoIndex].completed = true;
    saveToDo(newToDo);
  };

  const deleteToDo = (text) => {
    const toDoIndex = todos.findIndex((todo) => todo.text === text);

    const newToDo = [...todos];
    newToDo.splice(toDoIndex, 1);
    saveToDo(newToDo);
  };

  return (
    <AppUI
      totalToDo={totalToDo}
      completedToDo={completedToDo}
      state={state}
      setState={setState}
      searchToDo={searchToDo}
      completeToDos={completeToDos}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
