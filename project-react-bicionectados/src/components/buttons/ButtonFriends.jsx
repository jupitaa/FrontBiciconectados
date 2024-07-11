import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './ButtonFriends.css';

function ButtonFriends() {
  const navigate = useNavigate();

  function goToFriends() {
    navigate('/amigos');
  }

  return (
    <button className="friends-button" onClick={goToFriends}>
      <FontAwesomeIcon icon={faUsers} size="2x" />
     </button>
  );
}

export default ButtonFriends;
