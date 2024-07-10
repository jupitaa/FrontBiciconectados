import React from "react";
import "./Authentication.css";
import DefaultButton from "../components/buttons/DefaultButton";
import { Link } from "react-router-dom";
const ForgotPässwordPage = () => {
  return (
    <div className="authenticaction-page moveFromRight">
      <div className="authentication-container">
        <div className="authentication-form">
          <h2>Olvidaste tu Contraseña</h2>
          <input type="email" placeholder="Email" />
          <DefaultButton button="Enviar"></DefaultButton>
        </div>
      </div>
      <div className="authentication-greenside rightside">
        <img width="700" src="src/assets/images/logobici.png" alt="logo" />
        <img width="500" src="src/assets/images/bicicleta.png" alt="bicycle" />
      </div>
    </div>
  );
};

export default ForgotPässwordPage;
