import React from "react";  
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";


function AppUI({
  totalToDo,
  completedToDo,
  state,
  setState,
  searchToDo,
  completeToDos,
  deleteToDo,
}) {
  return (
    <React.Fragment>
    <ToDoCounter 
    total={totalToDo} 
    completed={completedToDo} 
    />

    <ToDoSearch 
    state={state} 
    setState={setState} 
    />

    <ToDoList />
    {searchToDo.map((todo) => (
      <ToDoItem 
      key={todo.text} 
      text={todo.text} 
      completed={todo.completed} 
      onComplete={()=> completeToDos(todo.text)}
      onDelete={()=> deleteToDo(todo.text)}
      />
    ))}

    <CreateToDoButton />
  </React.Fragment>
  )
}

export {AppUI}