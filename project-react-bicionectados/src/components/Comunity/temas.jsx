import "./comunity.css";
import { useNavigate } from "react-router-dom";
/*
{
  "id": 1,
  "titulo": "Mi primera publicación",
  "contenido": "Contenido de mi publicación",
  "likes": [],
  "comentarios": [],
  "usuario": null
},

*/

export default function Tema({ item }) {
  const navigate = useNavigate();

  const handleCommentsClick = () => {
    navigate("/comments");
  };

  return (
    <div
      onClick={handleCommentsClick}
      className="tema-container moveFromBottomFade"
    >
      <div className="tema-description center">
        <h3>{item.titulo}</h3>
        <p>{item.contenido}</p>
      </div>
      <div className="tema-info center">
        <span>Comentarios</span>
        <span>4</span>
        <span>Visto</span>
        <span>25</span>
      </div>
      <div className="tema-autor center">
        <strong>Autor</strong>
        <span>jul 6, 2024, 19:58 PM</span>
      </div>
    </div>
  );
}
