import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function ProfileNavBar({ name, status }) {
  const navigate = useNavigate();

  const handlePerfilClick = () => {
    navigate("/perfil");
  };

  return (
    <div className="profile-navbar" onClick={handlePerfilClick}>
      <div className="profile-info">
        <strong>ClaudioCarlos</strong>
        <span>{status}</span>
      </div>
      <div className="profile-img-container">
        <img
          src="/src/assets/images/CarloClaudio.jpeg"
          alt="mono con cigarro"
        />
      </div>
    </div>
  );
}

/*export default function ProfileNavBar({name,status}){
    return(
        <div className="profile-navbar">
        <div className="profile-img">
            <img src="https://th.bing.com/th/id/OIP.90J8DhjWP4iox25fbgoY_AHaEK?rs=1&pid=ImgDetMain" alt="mono con cigarro" />
        </div>  
        <div className="profile-info">
            <strong>{name}</strong>
            <span>{status}</span>
            </div>
        </div>
    );*/
