import "./EventCard.css";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";


const EventCard = ({ imageUrl, title, description, details, author }) => {
  const [attend, setAttend] = useState(false); 
  const handleToggleAttend = () => {
    setAttend((prevState) => !prevState);
  };
  return (
    <div className="event-card">
      <div className="event-details">
        <h2 className="event-title">{title}</h2>
        <p>{description}</p>
        <span className="event-subtitle">{details}</span>
        <span className="event-subtitle">Organizado por: {author}</span>
        <div className="event-buttons-card">
            <button className={attend ? "option-button attend" : "option-button"} onClick={handleToggleAttend}>{attend ? "Asistiendo" : "Asistiré"} {attend && <FcCheckmark />}</button>
          <button className="option-button">Ver Ruta</button>
        </div>
      </div>
      <img src={imageUrl} alt={title} className="event-image" />
    </div>
  );
};

export default EventCard;



