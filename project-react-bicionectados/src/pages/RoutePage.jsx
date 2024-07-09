import "leaflet/dist/leaflet.css";
import { useState } from "react";
import "./Pages.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-routing-machine";
import RoutingMachine from "../components/MapComponents/RoutingMachine";

export default function RoutePage() {
  // Coordenadas predeterminadas (Santiago de Chile)
  const defaultStart = [-33.459229, -70.645348];
  const defaultEnd = [-33.456942, -70.648272];

  const [startCoordinates, setStartCoordinates] = useState(defaultStart);
  const [endCoordinates, setEndCoordinates] = useState(defaultEnd);
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");

  const handleGeocode = async (e) => {
    e.preventDefault();
    try {
      const startCoords = await getCoordinates(startAddress);
      const endCoords = await getCoordinates(endAddress);
      setStartCoordinates([startCoords.lat, startCoords.lon]);
      setEndCoordinates([endCoords.lat, endCoords.lon]);
    } catch (error) {
      console.error("Error obteniendo coordenadas:", error);
    }
  };

  return (
    <div className="map-page">
      <form onSubmit={handleGeocode}>
        <div>
          <label>
            Dirección de inicio:
            <input
              type="text"
              value={startAddress}
              onChange={(e) => setStartAddress(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Dirección de destino:
            <input
              type="text"
              value={endAddress}
              onChange={(e) => setEndAddress(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Buscar ruta</button>
      </form>
      <div className="map-page-container">
        <MapContainer
          center={defaultStart}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <RoutingMachine start={startCoordinates} end={endCoordinates} />
        </MapContainer>
      </div>
    </div>
  );
  async function getCoordinates(address) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await response.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
    } else {
      throw new Error("No se encontraron coordenadas para esta dirección");
    }
  }
}
