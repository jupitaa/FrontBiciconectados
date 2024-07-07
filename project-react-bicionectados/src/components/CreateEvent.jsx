import React from "react";
import "./CreateEvent.css";

const CreateEventForm = () => {
  return (
    <form className="create-event-form">
      <input type="text" placeholder="Nombre Evento" className="form-input" />
      <div className="form-row">
        <input
          type="date"
          placeholder="Fecha"
          className="form-input half-width"
        />
        <input
          type="time"
          placeholder="Hora"
          className="form-input half-width"
        />
      </div>
      <input type="text" placeholder="Lugar" className="form-input" />
      <input type="text" placeholder="Ruta" className="form-input" />
      <div className="form-checkbox-row">
        <span className="form-label">Recurrente</span>
        <input type="checkbox" className="form-checkbox" />
      </div>
      <div className="form-row">
        <button type="submit" className="form-button primary">
          Publicar
        </button>
        <button type="button" className="form-button secondary">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default CreateEventForm;
