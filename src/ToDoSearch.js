import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({ state, setState, loading }) {
  const onSearchValueChange = (event) => {
    setState(event.target.value);
  };

  return (
    <input
      className="ToDoSearch"
      placeholder="Buscar..."
      value={state}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}
export { ToDoSearch };
