import React, { useState } from "react";
import axios from "axios";
import "./CreateEvent.css";

const CreateEventForm = ({ key, setKey, data, setData }) => {
  // Estado para manejar los valores del formulario
  const [nombre, setnombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [lugar, setLugar] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const evento = {
      nombre: nombre,
      descripcion: descripcion,
      lugar: lugar,
      fecha: fecha,
      hora: hora,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/eventos",
        evento
      );
      console.log("Evento creado:", response.data);
      setData([...data, response.data]);
      setKey(key + 1);
    } catch (error) {
      console.error("Error al crear el evento:", error);
    }
  };

  return (
    <form
      className="create-event-form moveFromRightPanel"
      onSubmit={handleSubmit}
    >
      <h3>Crear evento</h3>
      <input
        type="text"
        placeholder="Nombre Evento"
        className="form-input"
        value={nombre}
        onChange={(e) => setnombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        className="form-input"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lugar"
        className="form-input"
        value={lugar}
        onChange={(e) => setLugar(e.target.value)}
      />
      <div className="form-row">
        <input
          type="date"
          placeholder="Fecha"
          className="form-input half-width"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <input
          type="time"
          placeholder="Hora"
          className="form-input half-width"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </div>

      <button type="submit" className="form-button">
        Publicar
      </button>
    </form>
  );
};

export default CreateEventForm;
