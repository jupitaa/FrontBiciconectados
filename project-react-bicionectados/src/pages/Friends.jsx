import React from 'react';
import "./Friends.css"

const friendsList = [
  {
    id: 1,
    username: 'Carlos Frinch',
    photoUrl: 'src/assets/images/mono calros.png',
  },
  {
    id: 2,
    username: 'Elias Arancibia',
    photoUrl: 'src/assets/images/mono elias.png',
  },
  {
    id: 3,
    username: 'Constanza Albornoz',
    photoUrl: 'src/assets/images/mono coni.png',
  },
  {
    id: 4,
    username: 'Claudio Rojas',
    photoUrl: 'src/assets/images/monoclaudio.png',
  },
  
  
];

const Friends = () => {
  return (
    <div className="friends-page">
      <h1>Lista de Amigos</h1>
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
}

export default Friends;
