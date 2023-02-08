import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({ totalToDo, completedToDo, loading }) {
  return (
    <h2 className={`ToDoCounter ${!!loading && "ToDoCounter--loading"}`}>
      {" "}
      Has completado {completedToDo} de {totalToDo} tareas
    </h2>
  );
}

export { ToDoCounter };
