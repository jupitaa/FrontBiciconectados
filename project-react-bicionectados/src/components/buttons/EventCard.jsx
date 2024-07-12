import "./EventCard.css";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const EventCard = ({ imageUrl, title, description, details, author }) => {
  const [attend, setAttend] = useState(false);
  const handleToggleAttend = () => {
    setAttend((prevState) => !prevState);
  };
  const navigate = useNavigate();

  const handleRouteClick = () => {
    const propsToSend = {
      inicio: [-33.43058650550647, -70.63628515146523],
      destino: [-33.41848237374808, -70.6205352201352],
    };
    navigate("/ruta", { state: propsToSend });
  };

  return (
    <div className="event-card moveFromBottomFade">
      <div className="event-details">
        <h2 className="event-title">{title}</h2>
        <p>{description}</p>
        <span className="event-subtitle">{details}</span>
        <span className="event-subtitle">Organizado por: {author}</span>
        <div className="event-buttons-card">
          <button
            className={attend ? "option-button attend" : "option-button"}
            onClick={handleToggleAttend}
          >
            {attend ? "Asistiendo" : "Asistiré"} {attend && <FcCheckmark />}
          </button>
          <button className="option-button" onClick={handleRouteClick}>
            Ver Ruta
          </button>
        </div>
      </div>
      <img src={imageUrl} alt={title} className="event-image" />
    </div>
  );
};

export default EventCard;
