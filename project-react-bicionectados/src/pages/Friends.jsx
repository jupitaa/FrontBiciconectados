import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Friends.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const friendsList = [
  { id: 1, username: 'Carlos Frinch', photoUrl: 'src/assets/images/mono calros.png' },
  { id: 2, username: 'Elias Arancibia', photoUrl: 'src/assets/images/mono elias.png' },
  { id: 3, username: 'Constanza Albornoz', photoUrl: 'src/assets/images/mono coni.png' },
  { id: 4, username: 'Claudio Rojas', photoUrl: 'src/assets/images/monoclaudio.png' },
  { id: 5, username: 'Titan Arancibia', photoUrl: 'src/assets/images/titan.jpeg' },
  { id: 6, username: 'Shrek', photoUrl: 'src/assets/images/shrek.jpeg' },
  
];

const Friends = () => {
  const navigate = useNavigate();

  const handleBackToProfile = () => {
    navigate('/perfil');
  };

  return (
    <div className="friends-page">
      <button className="back-button" onClick={handleBackToProfile}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1>Lista de Amigos</h1>
      <p>Cantidad de amigos: {friendsList.length}</p>
      <div className="friends-list">
        {friendsList.map((friend) => (
          <div key={friend.id} className="friend-card">
            <img src={friend.photoUrl} alt={friend.username} />
            <p>{friend.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
