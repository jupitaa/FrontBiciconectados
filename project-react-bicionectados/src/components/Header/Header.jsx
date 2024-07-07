import ProfileNavBar from "./profilenavbar";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ inicio, publicaciones, noticias }) {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          {/*si el usuario esta conectado muestra el perfil, pero si no muestra login*/}
          <img
            src="./src/assets/images/logobici.png"
            className="imglogobici"
            alt="logo"
          />
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/rutas">Ruta</Link>
            </li>
            <li>
              <Link to="/eventos">Eventos</Link>
            </li>
            <li>
              <Link to="/comunity">Comunidad</Link>
            </li>
          </ul>
          <ProfileNavBar name={"ClaudioCarlos"} status={"En Linea"} />
        </nav>
      </header>
    </>
  );
}
