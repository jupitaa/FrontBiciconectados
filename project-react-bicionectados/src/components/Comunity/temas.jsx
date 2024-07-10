import "./comunity.css";

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
  return (
    <div className="tema-container">
      <div className="tema-description center">
        <h3>{item.titulo}</h3>
        <p>{item.contenido}</p>
      </div>
      <div className="tema-info center">
        <span>Comentarios:</span>
        <span>9999</span>
        <span>Visto:</span>
        <span>9999</span>
      </div>
      <div className="tema-autor center">
        <strong>Autor</strong>
        <span>jul 6, 2024, 19:58 PM</span>
      </div>
    </div>
  );
}
