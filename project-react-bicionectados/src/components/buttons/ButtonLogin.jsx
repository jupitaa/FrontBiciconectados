import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonLogin = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <button onClick={handleLoginClick} className="inciarsesion">
      Iniciar Sesión
    </button>
  );
};

export default ButtonLogin;
