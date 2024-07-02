import React from "react";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login">
          <h1>Iniciar Sesión</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="crea-cuenta">o crea tu cuenta</a>
          <button>Iniciar Sesión</button>
          <a href="olvidaste-contrasenia">¿Olvidaste tu contraseña?</a>
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

export default LoginPage;
