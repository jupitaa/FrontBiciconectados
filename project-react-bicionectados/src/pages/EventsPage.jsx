import { useState } from "react";
import CreateEvent from "../components/buttons/CreateEvent";
import Sidebar from "../components/buttons/Sidebar";
import "./EventsPage.css";
import EventCard from "../components/buttons/EventCard";

export default function EventPage() {
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  const handleToggleCreateEvent = () => {
    setShowCreateEvent((prevState) => !prevState);
  };

  return (
    <div className="event-container">
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
      <EventCard
        imageUrl="https://www.shutterstock.com/image-photo/cyclist-falls-off-bike-into-600nw-443827051.jpg"
        title="Ciclismo en Parque Forestal"
        description="Wena los kauros nos vamoa juntar a cletear Wena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletear"
        details="Sáb 10:00 AM · 24 interesados"
      />
      <EventCard
        imageUrl="https://www.shutterstock.com/image-photo/cyclist-falls-off-bike-into-600nw-443827051.jpg"
        title="Ciclismo en Parque Forestal"
        description="Wena los kauros nos vamoa juntar a cletear Wena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletearWena los kauros nos vamoa juntar a cletear"
        details="Sáb 10:00 AM · 24 interesados"
      />
      </div>
      {showCreateEvent && <CreateEvent />}
       </div>
     
      
      
     
    </div>
  );
}
