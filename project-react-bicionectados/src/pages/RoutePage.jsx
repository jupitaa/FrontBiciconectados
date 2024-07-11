import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import "./Pages.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet-routing-machine";
import RoutingMachine from "../components/MapComponents/RoutingMachine";
import DefaultButton from "../components/buttons/DefaultButton";
import RouteDetails from "../components/MapComponents/RouteDetails";
import { useLocation } from "react-router-dom";

export default function RoutePage() {
  const location = useLocation();
  const defaultstart = [-33.42535557964055, -70.64013933574407];
  const defaultend = [-33.434635397659996, -70.64255738453193];
  const { inicio, destino } = location.state || {};

  const [startCoordinates, setStartCoordinates] = useState(
    inicio || defaultstart
  );
  const [endCoordinates, setEndCoordinates] = useState(destino || defaultend);
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");
  const [route, setRoute] = useState(null);

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
      <div className="map-page-container scaleUp">
        <MapContainer
          center={inicio}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
        >
          <form className="form-map moveFromTop" onSubmit={handleGeocode}>
            <label>Dirección de inicio:</label>
            <input
              type="text"
              value={startAddress}
              onChange={(e) => setStartAddress(e.target.value)}
              required
            />
            <label>Dirección de destino:</label>
            <input
              type="text"
              value={endAddress}
              onChange={(e) => setEndAddress(e.target.value)}
              required
            />
            <DefaultButton button="Buscar ruta"></DefaultButton>
          </form>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <RoutingMachine
            start={startCoordinates}
            end={endCoordinates}
            onRouteSelected={setRoute}
          />
        </MapContainer>
        <RouteDetails route={route} />
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
