import "./Pages.css";
import Temas from "../components/Comunity/temas";
import axios from "axios";
import { useState, useEffect } from "react";

const client = axios.create({
  baseURL: "http://localhost:8080/publicaciones/lista",
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
            <strong>Ordenar por</strong>
            <button></button>
          </div>
          <button></button>
        </div>
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
