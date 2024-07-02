export default function Navbar({ inicio, publicaciones, noticias }) {
  return (
    <>
      <header>
        <nav className="navbar">
          {/*si el usuario esta conectado muestra el perfil, pero si no muestra login*/}
          <div className="usuario">
            <ul>
                <li><a href="#">Usuario</a></li>
                <li>En linea</li>
            </ul>
          </div>

          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Publicaciones</a>
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
