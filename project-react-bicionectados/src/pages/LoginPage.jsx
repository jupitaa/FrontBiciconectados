import "./Authentication.css";
import DefaultButton from "../components/buttons/DefaultButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ setLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    axios.post("http://localhost:8080/api/auth/login", body).then((res) => {
      setLogin(true);
      /* console.log(res.data); */
      /* convertir el obj a una cadena JSON */
      const usuarioJSON = JSON.stringify(res.data);
      /* Gaurdar la cena JSON en localStorage con el método setItem() */
      localStorage.setItem("usuario", usuarioJSON);
      /* redireccionamos al la ruta '/' */
      navigate("/");
    });
  };

  return (
    <div className="authenticaction-page moveFromRight">
      <div className="authentication-container">
        <div className="authentication-form">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="username"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={(e) => setPasword(e.target.value)}
            />
            <button type="submit">Inicar Sesion</button>
          </form>
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
