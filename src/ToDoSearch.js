import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({ state, setState }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  return (
    <input
      className="ToDoSearch"
      placeholder="Nueva tarea"
      value={state}
      onChange={onSearchValueChange}
    />
  );
}
export { ToDoSearch };
