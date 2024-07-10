import "./EventCard.css";

const EventCard = ({ imageUrl, title, description, details, author }) => {
  return (
    <div className="event-card">
      <div className="event-details">
        <h2 className="event-title">{title}</h2>
        <p>{description}</p>
        <span className="event-subtitle">{details}</span>
        <span className="event-subtitle">Organizado por: {author}</span>
        <div className="event-buttons-card">
          <button className="option-button">Asistiré</button>
          <button className="option-button">Ver Ruta</button>
        </div>
      </div>
      <img src={imageUrl} alt={title} className="event-image" />
    </div>
  );
};

export default EventCard;
