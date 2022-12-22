import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(){
  const onClickButton = (msg) => {
    alert(msg)
  }

    return(
        <button 
        className="CreateTodoButton"
        onClick={() =>onClickButton('modal')}
        >

          +
          
          </button>
    );
}

export { CreateToDoButton};