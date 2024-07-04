import ProfileNavBar from "./profilenavbar";
import "./Header.css"

export default function Header({ inicio, publicaciones, noticias }) {
  return (
    <>
      <header className="header">
        <nav className="navbar">         
          {/*si el usuario esta conectado muestra el perfil, pero si no muestra login*/}
          <img src="./src/assets/images/logobici.png" className="imglogobici" alt="logo" />         
          <ul>
            <li>
             <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Ruta</a>
            </li>
            <li>
              <a href="#">Eventos</a>
            </li>
            <li>
              <a href="#">Comunidad</a>
            </li>
          </ul>
          <ProfileNavBar name={"ClaudioCarlos"} status={"En Linea"}/>  
        </nav>
      </header>
    </>
  );
}
