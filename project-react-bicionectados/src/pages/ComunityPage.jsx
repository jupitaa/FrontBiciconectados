import React, { useState, useEffect } from "react";
import axios from "axios";
import Temas from "../components/Comunity/temas";
import DropdownButton from "../components/buttons/FilterButton";
import "./Pages.css";

const client = axios.create({
  baseURL: "http://localhost:8080/publicaciones/lista",
});

export default function ComunityPage() {
  const [publicaciones, setPublicaciones] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get();
        setPublicaciones(response.data.reverse());
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="adjust-page">
      <div className="grid-temas">
        <div className="filter-button">
          <div className="filter">
            <DropdownButton />
            <div className="create-thread-btn">
              <button>Nueva publicación</button>
            </div>
          </div>
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
