import React, { useState } from "react";
import "./ProfilePage.css";
import DefaultButton from "../components/buttons/DefaultButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUsers,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [user] = useState({
    name: "CarlosClaudios xxx",
    location: "Independencia, CL",
    bio: "Musica | Coffee Lover | CatLover | LOL",
    seguidores: 1,
    siguiendo: 3,
    kilometers: 3500,
  });


  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-foto">
          <img src="src/assets/images/CarloClaudio.jpeg" alt="perfil" />
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /> {user.location}
          </p>
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
        <DefaultButton button="Seguir" />
        <DefaultButton button="Bloquear" />
      </div>
    </div>
  );
};

export default Profile;
