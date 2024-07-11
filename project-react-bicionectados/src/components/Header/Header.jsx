import ProfileNavBar from "./profilenavbar";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import ButtonLogin from "../buttons/ButtonLogin";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menu, setMenu] = useState("inicio");
  const [logged, setLogged] = useState(false);
  const [navbar, setnavbar] = useState(false);
  const location = useLocation();
  const handleToggleNavBar = () => {
    setnavbar((prevState) => !prevState);
  };

  useEffect(() => {
    const path = location.pathname;
    if (
      path !== "/" &&
      path !== "/ruta" &&
      path !== "/comunity" &&
      path !== "/eventos" &&
      path !== "/perfil"
    ) {
      setMenu("");
    }
  }, [location]);
  return (
    <header className="header">
      <IconContext.Provider value={{ size: "2em" }}>
        <nav className="navbar">
          <img src="./src/assets/images/logobici.png" alt="logo" />

          <ul className="navbar-ul">
            <li>
              <Link
                to="/"
                onClick={() => setMenu("inicio")}
                className={menu === "inicio" ? "active" : ""}
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                to="/ruta"
                className={menu === "ruta" ? "active" : ""}
                onClick={() => setMenu("ruta")}
              >
                RUTA
              </Link>
            </li>
            <li>
              <Link
                to="/comunity"
                className={menu === "comunity" ? "active" : ""}
                onClick={() => setMenu("comunity")}
              >
                COMUNIDAD
              </Link>
            </li>
            <li>
              <Link
                to="/eventos"
                className={menu === "eventos" ? "active" : ""}
                onClick={() => setMenu("eventos")}
              >
                EVENTOS
              </Link>
            </li>
          </ul>
          <ul
            className={
              navbar
                ? "navbar-ul-responsive visible moveFromTop "
                : "navbar-ul-responsive"
            }
          >
            <button className="menu-hambur-close" onClick={handleToggleNavBar}>
              <IoMdClose />
            </button>
            <li>
              <Link to="/" onClick={() => setMenu("inicio")}>
                INICIO
              </Link>
            </li>
            <li>
              <Link to="/ruta" onClick={() => setMenu("ruta")}>
                RUTA
              </Link>
            </li>
            <li>
              <Link to="/comunity" onClick={() => setMenu("comunity")}>
                COMUNIDAD
              </Link>
            </li>
            <li>
              <Link to="/eventos" onClick={() => setMenu("eventos")}>
                EVENTOS
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setMenu("iniciarsesion")}>
                INICIAR SESION
              </Link>
            </li>
          </ul>

          <div className="login-home-btn">
            {logged === true ? (
              <ProfileNavBar name="Usuario" status="En línea" />
            ) : (
              <ButtonLogin />
            )}
          </div>

          <button className="menu-hambur" onClick={handleToggleNavBar}>
            <FaBars />
          </button>
        </nav>
      </IconContext.Provider>
    </header>
  );
}
