import React from "react";
import { ToDoContext } from "./ToDoContext";
import "./ToDoSearch.css";

function ToDoSearch() {
  const { state, setState } = React.useContext(ToDoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  return (
    <input
      className="ToDoSearch"
      placeholder="Buscar..."
      value={state}
      onChange={onSearchValueChange}
    />
  );
}
export { ToDoSearch };
