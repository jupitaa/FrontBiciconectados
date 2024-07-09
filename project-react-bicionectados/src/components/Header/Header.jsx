import ProfileNavBar from "./profilenavbar";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonLogin from "../buttons/ButtonLogin";

export default function Header() {
  const [menu, setMenu] = useState("inicio");
  const [logged, setLogged] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <img src="./src/assets/images/logobici.png" alt="logo" />
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => setMenu("inicio")}
              className={menu === "inicio" ? "active" : ""}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/ruta"
              className={menu === "ruta" ? "active" : ""}
              onClick={() => setMenu("ruta")}
            >
              Ruta
            </Link>
          </li>
          <li>
            <Link
              to="/comunity"
              className={menu === "comunity" ? "active" : ""}
              onClick={() => setMenu("comunity")}
            >
              Comunidad
            </Link>
          </li>
          <li>
            <Link
              to="/eventos"
              className={menu === "eventos" ? "active" : ""}
              onClick={() => setMenu("eventos")}
            >
              Eventos
            </Link>
          </li>
          <li>
            <Link
              to="/perfil"
              onClick={() => setMenu("perfil")}
              className={menu === "perfil" ? "active" : ""}
            >
              Perfil
            </Link>
          </li>
        </ul>
        {logged === true ? (
          <ProfileNavBar name="Usuario" status="En línea" />
        ) : (
          <ButtonLogin />
        )}
      </nav>
    </header>
  );
}
