import React from "react";
import "./Authentication.css";
import DefaultButton from "../components/buttons/DefaultButton";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="authenticaction-page moveFromRight">
      <div className="authentication-container">
        <div className="authentication-form">
          <h2>Iniciar Sesión</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <DefaultButton button="Iniciar Sesion"></DefaultButton>
          <div className="authentication-links">
            <Link to={"/register"}>Crea tu cuenta</Link>
            <Link to="/forgotpassword">¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
      </div>
      <div className="authentication-greenside rightside">
        <img width="700" src="src/assets/images/logobici.png" alt="logo" />
        <img width="500" src="src/assets/images/bicicleta.png" alt="bicycle" />
      </div>
    </div>
  );
};

export default LoginPage;
