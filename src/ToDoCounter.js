import React from "react";
import './ToDoCounter.css';

function ToDoCounter({total, completed}){

  return(
      <h2 className="ToDoCounter"> Has completado {completed} de {total} tareas</h2>
  )
}

export { ToDoCounter }