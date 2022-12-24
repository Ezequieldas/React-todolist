import React from "react";
import { ToDoContext } from "./ToDoContext";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import { Modal } from "./Modal";
import { ToDoForm } from "./ToDoForm";
import "./AppUI.css"

function AppUI() {
  const {
    error,
    loading,
    searchToDo,
    completeToDos,
    deleteToDo,
    openModal,
    setOpenModal,
  } = React.useContext(ToDoContext);

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
        {error && <p>Hubo un error...</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searchToDo.length && <p className="center">Ingresa tu primer tarea</p>}
        {searchToDo.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDos(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        ))}
      </ToDoList>
      {!!openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}

      <CreateToDoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
