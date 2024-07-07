import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonLogin.css";

const ButtonLogin = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    {/*navigate("/login");*/}
  };

  return (
    <button onClick={handleLoginClick} className="button-inicio-sesion">
      Iniciar sesión
    <div className="arrow-wrapper">
        <div className="arrow"></div>

    </div>
    </button>
  );
};

export default ButtonLogin;
