import { useState } from "react";
import CreateEvent from "../components/buttons/CreateEvent";
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
        title="Cicletada en Parque Forestal"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi facilis laboriosam consectetur dolor culpa consequuntur quod, aperiam in sint ea magni dolores. Nihil consectetur vero labore, laborum eius nemo."
        details="Sáb 10:00 AM · 24 interesados"
      />
      <EventCard
        imageUrl="https://www.shutterstock.com/image-photo/cyclist-falls-off-bike-into-600nw-443827051.jpg"
        title="Cicletada en Parque Forestal"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi facilis laboriosam consectetur dolor culpa consequuntur quod, aperiam in sint ea magni dolores. Nihil consectetur vero labore, laborum eius nemo."
        details="Sáb 10:00 AM · 24 interesados"
      />
      </div>
      {showCreateEvent && <CreateEvent />}
       </div>

       
     
      
      
     
    </div>
  );
}
