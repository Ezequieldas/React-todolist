import React from "react";
import {ToDoCounter} from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
//import './App.css';

const todo = [
  { text: "Ejercicio", completed: false },
  { text: "Curso", completed: false },
  { text: "Comida", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <ToDoCounter />

      <ToDoSearch />

      <ToDoList />
      {todo.map((todo) => (
        <ToDoItem key={todo.text} text={todo.text}/>
      ))}

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
