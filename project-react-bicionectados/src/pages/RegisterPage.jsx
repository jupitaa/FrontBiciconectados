  import React from "react";
  import "./RegisterPage.css";
  
  function RegisterPage() {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login">
            <h1>Crear Cuenta</h1>
            <input type="name" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Iniciar Sesión</button>
          </div>
        </div>
  
        <div className="container-2">
          <h2>Bienvenidos</h2>
          <h3>
            <span class="color1">Bici</span>
            <span class="color2">Conectados</span>
          </h3>
          <img
            width="450"
            height="450"
            src="src/assets/images/bicicleta.png"
            alt="bicycle"
          />
        </div>
      </div>
    );
  }
  
  export default RegisterPage;
  