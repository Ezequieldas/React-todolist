import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="alert-container">
        <h4 className="alert-container--h4">
          ¡Vaya! Parece que hubo cambios en la lista
        </h4>
        <p className="alert-container--p">
          Recarga la app para ver las novedades
        </p>
        <div className="btn-container">
          <button className="btn-change" onClick={() => toggleShow(false)}>
            Recargar
          </button>
        </div>
      </div>
    );
  }
}

export { ChangeAlert };
