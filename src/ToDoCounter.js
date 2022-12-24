import React from "react";
import { ToDoContext } from "./ToDoContext";
import "./ToDoCounter.css";

function ToDoCounter() {
  const { totalToDo, completedToDo } = React.useContext(ToDoContext);

  return (
    <h2 className="ToDoCounter">
      {" "}
      Has completado {completedToDo} de {totalToDo} tareas
    </h2>
  );
}

export { ToDoCounter };
