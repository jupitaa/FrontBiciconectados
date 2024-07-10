import "./CreateEvent.css";

const CreateEventForm = () => {
  return (
    <form className="create-event-form">
      <h3>Crear evento</h3>
      <input type="text" placeholder="Nombre Evento" className="form-input" />
      <input type="text" placeholder="Descripción" className="form-input" />
      <input type="text" placeholder="Lugar" className="form-input" />
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

      
      

      <button type="submit" className="form-button">
        Publicar
      </button>
    </form>
  );
};

export default CreateEventForm;
