import { useState, useEffect } from "react";
import CreateEvent from "../components/buttons/CreateEvent";
import "./EventsPage.css";
import EventCard from "../components/buttons/EventCard";
import axios from "axios";

export default function EventPage() {
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [data, setData] = useState(null);
  const [key, setKey] = useState(0);

  const handleToggleCreateEvent = () => {
    setShowCreateEvent((prevState) => !prevState);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/eventos/lista")
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="event-container" key={key}>
      <div className="event-buttons">
        <h2>Eventos</h2>
        <button
          className="create-event-button"
          onClick={handleToggleCreateEvent}
        >
          {showCreateEvent ? "Ocultar" : "Crear Evento"}
        </button>
      </div>
      <div className="eventcard-container">
        <div className="events-container-column">
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <EventCard
                  imageUrl="https://www.shutterstock.com/image-photo/cyclist-falls-off-bike-into-600nw-443827051.jpg"
                  title={item.nombre}
                  description={item.descripcion}
                  details={`${item.hora} - ${item.fecha}`}
                />
              </div>
            ))}
        </div>
        {showCreateEvent && (
          <CreateEvent
            key={key}
            setKey={setKey}
            data={data}
            setData={setData}
          />
        )}
      </div>
    </div>
  );
}
