import ProfileNavBar from "./profilenavbar";
import "./Header.css"
import { useState } from "react";

export default function Header({ inicio, publicaciones, noticias }) {
  const [menu, setMenu] = useState("inicio");
  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "rutas", label: "Rutas" },
    { id: "comunidad", label: "Comunidad" },
    { id: "eventos", label: "Eventos" },
    { id: "perfil", label: "Perfil" }
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <img src="./src/assets/images/logobici.png" alt="logo" />
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <input
                type="radio"
                id={item.id}
                name="menu"
                checked={menu === item.id}
                onChange={() => setMenu(item.id)}
              />
              <label
                htmlFor={item.id}
                className={menu === item.id ? "menu active" : "menu"}
              >
                {item.label}
              </label>
            </li>
          ))}
        </ul>
        <ProfileNavBar name={"ClaudioCarlos"} status={"En Linea"} />
      </nav>
    </header>
  );
}