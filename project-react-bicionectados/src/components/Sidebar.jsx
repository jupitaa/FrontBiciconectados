import React from "react";
import EventCard from "./EventCard";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="filter-buttons">
        <button className="filter-button">Todos</button>
        <button className="filter-button">Recientes</button>
      </div>
      <div className="event-list">
        <EventCard
          imageUrl="https://placehold.co/600x400"
          title="Ciclismo en EL Parque Forestal"
          details="Sáb 10:00 AM · 24 interesados"
        />
        <EventCard
          imageUrl="https://placehold.co/600x400"
          title="Ciclovia en la playa"
          details="Dom, 11:00 AM · 15 interesados"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
