import React from "react";
import "./Conocenos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Conocenos() {
  const integrantes = [
    {
      nombre: "Carlos Frinch",
      cargo: "Developer Frontend",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores autem molestias delectus adipisci, officiis quod facilis laboriosam consequuntur nesciunt possimus optio, eum neque quae? Libero quaerat praesentium quibusdam facilis?",
      foto: "./src/assets/images/mono calros.png",
      github: "https://github.com/carlosfrinch",
      linkedin: "https://www.linkedin.com/in/carlosfrinch",
    },
    {
      nombre: "Constanza Albornoz",
      cargo: "Product Owner",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores autem molestias delectus adipisci, officiis quod facilis laboriosam consequuntur nesciunt possimus optio, eum neque quae? Libero quaerat praesentium quibusdam facilis?",
      foto: "./src/assets/images/mono coni.png",
      github: "https://github.com/persona2",
      linkedin: "https://www.linkedin.com/in/persona2",
    },
    {
      nombre: "Claudio Rojas",
      cargo: "Developer Backend",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores autem molestias delectus adipisci, officiis quod facilis laboriosam consequuntur nesciunt possimus optio, eum neque quae? Libero quaerat praesentium quibusdam facilis? ",
      foto: "./src/assets/images/monoclaudio.png",
      github: "https://github.com/persona3",
      linkedin: "https://www.linkedin.com/in/persona3",
    },
    {
      nombre: "Elias Arancibia",
      cargo: "Scrum Master",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores autem molestias delectus adipisci, officiis quod facilis laboriosam consequuntur nesciunt possimus optio, eum neque quae? Libero quaerat praesentium quibusdam facilis?",
      foto: "./src/assets/images/mono elias.png",
      github: "https://github.com/persona4",
      linkedin: "https://www.linkedin.com/in/persona4",
    },
  ];

  return (
    <div>
      <section className="section">
        <h1>QUIENES SOMOS</h1>
        <p>
          "Queremos conectar con una comunidad global, compartir rutas y
          promover un estilo de vida sostenible."
        </p>
        <div className="integrantes">
          {integrantes.map((persona, index) => (
            <div key={index} className="persona">
              <img src={persona.foto} alt={persona.nombre} />
              <h3>{persona.nombre}</h3>
              <h4>{persona.cargo}</h4>
              <p>{persona.descripcion}</p>
              <div className="redes-sociales">
                <a
                  href={persona.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={persona.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Conocenos;
