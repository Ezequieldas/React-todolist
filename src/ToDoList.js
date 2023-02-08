import React from "react";
import "./ToDoList.css";

function ToDoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalToDo && props.onEmptyTodos()}

      {!!props.totalToDo &&
        !props.searchToDo.length &&
        props.onEmptySearchResults(props.searchText)}

      {!props.loading && !props.error && props.searchToDo.map(renderFunc)}
    </section>
  );
}

export { ToDoList };
