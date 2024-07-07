import ProfileNavBar from "./profilenavbar";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ inicio, publicaciones, noticias }) {
  const [menu, setMenu] = useState("inicio");
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
              onClick={() => setMenu("ferfil")}
              className={menu === "perfil" ? "active" : ""}
            >
              Perfil
            </Link>
          </li>
        </ul>
        <ProfileNavBar name={"ClaudioCarlos"} status={"En Linea"} />
      </nav>
    </header>
  );
}
