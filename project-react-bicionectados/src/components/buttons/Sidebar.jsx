import EventCard from "./EventCard";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <strong>Filtrar eventos</strong>
        <div className="filter-buttons"> 
         <button className="filter-button">Todos</button>
          <button className="filter-button">Recientes</button>
        </div>
        <div className="event-list">
        <EventCard
          imageUrl="https://www.shutterstock.com/image-photo/cyclist-falls-off-bike-into-600nw-443827051.jpg"
          title="Ciclismo en Parque Forestal"
          details="Sáb 10:00 AM · 24 interesados"
        />
        <EventCard
          imageUrl="https://cooperativa.cl/noticias/site/artic/20200112/imag/foto_0000001720200112182956.jpg"
          title="Cicletada en la ciudad"
          details="Dom, 11:00 AM · 15 interesados"
        />
        </div>
    </div>
  );
};

export default Sidebar;
