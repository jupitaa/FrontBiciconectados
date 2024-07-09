import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section-comunidad">
        <h2>Síguenos en nuestras redes</h2>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-section-contacto">
        <h2>Contacto</h2>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
          contacto@biciconectados.cl
        </p>
        <p>
          <FontAwesomeIcon icon={faPhoneAlt} className="icon" /> 600 600 6000
        </p>
      </div>
      <div className="footer-section-newsletter">
        <h2>BiciConectados</h2>
        <p>Suscríbete a nuestro Newsletter</p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Introduce tu email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Enviar
          </button>
        </div>
      </div>
      <div className="footer-section derechos">
        <p>© 2024 BiciConectados. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
