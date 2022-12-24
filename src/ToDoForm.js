import React from "react";
import { ToDoContext} from "./ToDoContext"
import "./ToDoForm.css"

function ToDoForm() {
  const [newValue, setNewValue] = React.useState('')

  const {
    addToDo,
    setOpenModal,
  } = React.useContext(ToDoContext)

  const onChange = (e) => {
    setNewValue(e.target.value)
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onAdd = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(newValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>NUEVA TAREA</label>
      <textarea 
      value={newValue}
      onChange={onChange}
      placeholder="Añade una nueva tarea..." />
      <div className="TodoForm-buttonContainer">
        <button 
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}>Cancelar</button>
        <button 
        type="submit"
        className="TodoForm-button TodoForm-button--add"
        onClick={onAdd}>Añadir</button>
      </div>
    </form>
  );
}

export { ToDoForm };
