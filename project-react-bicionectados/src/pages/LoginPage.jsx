import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page2">
      <div className="login-container2">
        <div className="login2">
          <h1>Iniciar Sesión</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <button>Iniciar Sesión</button>
          <a href="crea-cuenta">o crea tu cuenta</a>
          <a href="olvidaste-contrasenia">¿Olvidaste tu contraseña?</a>
        </div>
      </div>

      <div className="containerDos">
        <img
          width="400"
          height="62"
          src="src/assets/images/logobici.png"
          alt="logo"
        />
       
        <img
          width="450"
          height="450"
          src="src/assets/images/bicicleta.png"
          alt="bicycle"
        />
      </div>
    </div>
  );
};

export default LoginPage;
