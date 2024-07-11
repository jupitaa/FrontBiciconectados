import React, { useState, useEffect } from "react";
import axios from "axios";
import Temas from "../components/Comunity/temas";
import DropdownButton from "../components/buttons/FilterButton";
import "./Pages.css";
import "/src/components/Comunity/comunity.css";

// const client = axios.create({
//   baseURL: "http://localhost:8080/publicaciones/lista",
// });

export default function ComunityPageComments() {
  // const [publicaciones, setPublicaciones] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { titulo, contenido } = location.state || {};
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await client.get();
  //       setPublicaciones(response.data.reverse());
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const [showCreateComment, setShowComment] = useState(false);

  const handleCreateComment = () => {
    setShowComment((prevState) => !prevState);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObject = {
        text: newComment,
        author: "ClaudioCarlos",
        date: new Date().toLocaleString("es-ES"),
      };
      setComentarios([newCommentObject, ...comentarios]);
      setNewComment(""); // Limpiar el textarea después de agregar el comentario
    }
  };

  return (
    <div className="adjust-page">
      <div className="grid-temas">
        <div className="filter-button"></div>
        <div className="tema-container principal moveFromBottomFade">
          <div className="tema-description comment center">
            <h3>Necesito ayuda para comprar una bicicleta nueva</h3>
            <p>
              Como les comentaba necesito comprar una bicicleta nueva , quiero
              empezar a ir al trabajo y necesito algo liviano, que sienta
              calidad al pedalear con buenos cambios
            </p>
          </div>
          <div className="tema-autor center">
            <strong>Eliasito</strong>
            <span>jul 10, 2024, 19:58 PM</span>
          </div>
        </div>
        <div className="tema-container comment moveFromBottomFade">
          <div className="tema-description comment center">
            <p>Guau! Guau!</p>
          </div>
          <div className="tema-autor center">
            <strong>Titan</strong>
            <span> jul 10, 2024, 21:00 PM</span>
          </div>
        </div>
        <div className="tema-container comment moveFromBottomFade">
          <div className="tema-description comment center">
            <p>Tengo una bici.png subida en un servidor de aws</p>
          </div>
          <div className="tema-autor center">
            <strong>Clauidos</strong>
            <span> jul 11, 2024, 14:02 PM</span>
          </div>
        </div>
        <div className="tema-container comment moveFromBottomFade">
          <div className="tema-description comment center">
            <p>
              que tontos, sean serios por favor, el hombre pobre esta
              desesperado
            </p>
          </div>
          <div className="tema-autor center">
            <strong>Jupita</strong>
            <span> jul 11, 2024, 14:15 PM</span>
          </div>
        </div>
        <div className="tema-container comment moveFromBottomFade">
          <div className="tema-description comment center">
            <p>Para que quieres saber eso, jaja saludos</p>
          </div>
          <div className="tema-autor center">
            <strong>Carlos</strong>
            <span> jul 11, 2024, 14:30 PM</span>
          </div>
        </div>
        {/* Renderizar comentarios desde el estado */}
        {comentarios.map((comentario, index) => (
          <div
            className="tema-container comment moveFromBottomFade"
            key={index}
          >
            <div className="tema-description comment center">
              <p>{comentario.text}</p>
            </div>
            <div className="tema-autor center">
              <strong>{comentario.author}</strong>
              <span>{comentario.date}</span>
            </div>
          </div>
        ))}
        <div className="tema-container comment comentariocontent moveFromBottomFade">
          <div className="tema-description comment comentario center">
            <textarea
              className="commentario"
              name="message"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>
          <div className="tema-autor center">
            <button onClick={handleAddComment}>Comentar</button>
          </div>
        </div>

        {/* {publicaciones &&
          publicaciones.map((item) => (
            <div key={item.id}>
              <Temas item={item} />
            </div>
          ))} */}
      </div>
    </div>
  );
}
