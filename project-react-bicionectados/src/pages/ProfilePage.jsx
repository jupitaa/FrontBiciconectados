import React, { useState } from "react";
import "./ProfilePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUsers,
  faBicycle,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import ButtonFriends from "../components/buttons/ButtonFriends";

function ProfilePage() {
  const user = {
    name: "CarlosClaudios xxx",
    location: "Independencia, CL",
    bio: "Musica | Coffee Lover | CatLover | LOL",
    seguidores: 1,
    siguiendo: 3,
    kilometers: 0,
  };

  const [estado, setEstado] = useState("");

  function handleEstadoChange(e) {
    setEstado(e.target.value);
  }

  function handleEnviarClick() {
    console.log(`Estado enviado: ${estado}`);
  }

  function handleEmojiClick(emoji) {
    setEstado(estado + emoji);
  }

  function handleUpload(event) {
    const file = event.target.files[0];
    console.log("Subiendo archivo:", file);
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-foto">
          <img src="src/assets/images/CarloClaudio.jpeg" alt="perfil" />
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /> {user.location}
          </p>
          <ButtonFriends />
        </div>
      </div>
      <div className="profile-stats">
        <div className="profile-stat">
          <FontAwesomeIcon icon={faBicycle} size="2x" color="#000000" />
          <p>{user.kilometers}</p>
          <span>Kilómetros Recorridos</span>
        </div>
        <div className="profile-stat">
          <FontAwesomeIcon icon={faUsers} size="2x" color="#000000" />
          <p>{user.seguidores}</p>
          <span>Seguidores</span>
        </div>
        <div className="profile-stat">
          <FontAwesomeIcon icon={faUsers} size="2x" color="#000000" />
          <p>{user.siguiendo}</p>
          <span>Siguiendo</span>
        </div>
      </div>
      <div className="profile-bio">
        <p>{user.bio}</p>
      </div>
      <div className="profile-buttons">
        <button className="edit-profile-button">
          <FontAwesomeIcon icon={faEdit} /> Editar Perfil
        </button>
      </div>
      <div className="container-2">
        <input
          type="text"
          placeholder="Estado..."
          className="estado-input"
          value={estado}
          onChange={handleEstadoChange}
        />
        <button className="emoji-button" onClick={() => handleEmojiClick("🙂")}>
          🙂
        </button>
        <button className="enviar-button" onClick={handleEnviarClick}>
          Enviar
        </button>
      </div>
      <div className="image-upload-card">
        <h2>Subir Imágenes</h2>
        <input type="file" onChange={handleUpload} />
      </div>
    </div>
  );
}

export default ProfilePage;
