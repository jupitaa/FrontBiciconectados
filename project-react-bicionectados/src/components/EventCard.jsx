import React from "react";
import "./EventCard.css";

const EventCard = ({ imageUrl, title, details }) => {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={title} className="event-image" />
      <div className="event-details">
        <div>
          <div className="event-title">{title}</div>
          <div className="event-subtitle">{details}</div>
        </div>
        <button className="event-button">Interesado</button>
      </div>
    </div>
  );
};

export default EventCard;
