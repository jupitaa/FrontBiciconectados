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
        "Especializado en crear interfaces de usuario atractivas y funcionales utilizando HTML, CSS y JavaScript. Experiencia en frameworks como React y Vue.js, enfocado en mejorar la experiencia del usuario y colaborar efectivamente con equipos multidisciplinarios para desarrollar aplicaciones web impactantes.",
      foto: "src/assets/images/Carlos Frinch.jpg",
      github: "https://github.com/Xhairo",
      linkedin: "https://www.linkedin.com/in/carlos-frinch/",
    },
    {
      nombre: "Constanza Albornoz",
      cargo: "Product Owner",
      descripcion:
        "Lidero la estrategia y dirección del desarrollo web , asegurando que nuestro producto cumpla con las expectativas de los uaurios y los objetivos del negocio. Priorizo eficazmente y colaboro estrechamente en el trabajo del equipo técnico para garantizar soluciones digitales innovadoras y orientadas al usuario final.",
      foto: "src/assets/images/Constanza Albornoz.jpg",
      github: "https://github.com/jupitaa",
      linkedin: "https://www.linkedin.com/in/constanza-albornoz-torres-843918179/",
    },
    {
      nombre: "Claudio Rojas",
      cargo: "Developer Backend",
      descripcion:
        "Desarrollo sistemas robustos y eficientes para aplicaciones web y móviles, especializado en APIs escalables y optimización de bases de datos. Apasionado por resolver desafíos técnicos y colaborar en equipos interdisciplinarios para impulsar el éxito del proyecto.",
      foto: "src/assets/images/Claudio Rojas.jpg",
      github: "https://github.com/Claudioandres22",
      linkedin: "https://www.linkedin.com/in/claudio-rojas-figueroa-028544233/",
    },
    {
      nombre: "Elias Arancibia",
      cargo: "Scrum Master",
      descripcion:
        "Aseguro que el equipo desarrolle productos web de alta calidad de manera colaborativa y eficiente. Mi enfoque en la mejora continua y la resolución de impedimentos permite al equipo adaptarse rápidamente a los cambios y cumplir con los objetivos del proyecto.",
      foto: "src/assets/images/Elias Arancibia.jpg",
      github: "https://github.com/eliasaurio",
      linkedin: "https://www.linkedin.com/in/arancibiaelias/",
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
              <div className="img">
                <img src={persona.foto} alt={persona.nombre}/>
                </div>
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
