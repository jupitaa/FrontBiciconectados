import React, { useState } from "react";
import "./FilterButton.css";

const DropdownButton = () => {
  const [Open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!Open);
  };

  return (
    <div className="dropdown">
      <span>Ordenar por </span>
      <button className="dropbtn" onClick={toggleDropdown}>
        Selecionar
      </button>
      {Open && (
        <div className="dropdown-content">
          <a href="#">Más recientes</a>
          <a href="#">Más antiguos</a>
          <a href="#">Sugerencias</a>
        </div>
      )}
      
    </div>
  );
};

export default DropdownButton;
