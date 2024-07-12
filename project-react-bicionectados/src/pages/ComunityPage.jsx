import "./Pages.css";
import Temas from "../components/Comunity/temas";
import axios from "axios";
import { useState, useEffect } from "react";
import DropdownButton from "../components/buttons/FilterButton";

const client = axios.create({
  baseURL: "http://localhost:8080/api/publicaciones/lista",
});

export default function ComunityPage() {
  const [publicaciones, setPublicaciones] = useState(null);
  useEffect(() => {
    client.get().then((response) => {
      setPublicaciones(response.data.reverse());
    });
  }, []);

  return (
    <div className="adjust-page">
      <div className="grid-temas">
        <div className="filter-button">
          <div className="filter">
            <DropdownButton />
          </div>
          <div className="create-thread-btn">
            <button>Nueva publicación</button>
          </div>
        </div>

        <Temas
          item={{
            titulo: "Necesito consejos para una bicicleta",
            contenido: "por favor te chupáre el pene amigo",
          }}
        ></Temas>
        {publicaciones &&
          publicaciones.map((item) => (
            <div key={item.id}>
              <Temas item={item} />
            </div>
          ))}
      </div>
    </div>
  );
}
