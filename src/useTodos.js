import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveToDo,
    sincronize: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [state, setState] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

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

  const addToDo = (text) => {
    const newToDo = [...todos];
    newToDo.push({
      completed: false,
      text,
    });
    saveToDo(newToDo);
  };

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

  return {
    error,
    loading,
    totalToDo,
    completedToDo,
    state,
    setState,
    searchToDo,
    completeToDos,
    deleteToDo,
    addToDo,
    openModal,
    setOpenModal,
    sincronizeTodos,
  };
}

export { useTodos };
