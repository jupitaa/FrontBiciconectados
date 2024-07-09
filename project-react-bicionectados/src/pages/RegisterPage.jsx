import React from "react";
import "./Authentication.css";
import DefaultButton from "../components/buttons/DefaultButton";

function RegisterPage() {
  return (
    <div className="authenticaction-page">
      <div className="authentication-greenside leftside">
        <img width="700" src="src/assets/images/logobici.png" alt="logo" />
        <img
          width="450"
          height="450"
          src="src/assets/images/bicicleta.png"
          alt="bicycle"
        />
      </div>
      <div className="authentication-container">
        <div className="authentication-form">
          <h2>Crear Cuenta</h2>
          <input type="name" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <DefaultButton button="Registrarme"></DefaultButton>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
