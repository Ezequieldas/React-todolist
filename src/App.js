import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "./TodoHeader";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import { Modal } from "./Modal";
import { ToDoForm } from "./ToDoForm";
import { TodosError } from "./TodoError";
import { TodosLoading } from "./ToDosLoading";
import { EmptyTodos } from "./EmptyTodos";
import { ChangeAlert } from "./ChangeAlert";

function App() {
  const {
    error,
    loading,
    completeToDos,
    deleteToDo,
    openModal,
    setOpenModal,
    totalToDo,
    completedToDo,
    state,
    setState,
    addToDo,
    searchToDo,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <ToDoCounter totalToDo={totalToDo} completedToDo={completedToDo} />
        <ToDoSearch state={state} setState={setState} />
      </TodoHeader>
      <ToDoList
        error={error}
        loading={loading}
        searchToDo={searchToDo}
        totalToDo={totalToDo}
        searchText={state}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
        // render={(todo) => (
        //   <ToDoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeToDos(todo.text)}
        //     onDelete={() => deleteToDo(todo.text)}
        //   />
        // )}
      >
        {(todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDos(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        )}
      </ToDoList>

      {!!openModal && (
        <Modal>
          <ToDoForm addTodo={addToDo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateToDoButton setOpenModal={setOpenModal} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
