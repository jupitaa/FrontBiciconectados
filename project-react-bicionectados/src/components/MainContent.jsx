import React from "react";
import CreateEventForm from "./CreateEvent";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="header-row">
        <h2 className="title">Crear Evento</h2>
        <button className="close-button">&times;</button>
      </div>
      <CreateEventForm />
    </main>
  );
};

export default MainContent;
