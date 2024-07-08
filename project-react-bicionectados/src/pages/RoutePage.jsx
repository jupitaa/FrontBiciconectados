import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { useEffect } from "react";
import customIconUrl from "../assets/images/descargar.png";

function RoutingMachine({ start, end, customIcon }) {
  const map = useMap();

  useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
      createMarker: (i, waypoint) => {
        return L.marker(waypoint.latLng, {
          icon: customIcon,
        });
      },
      routeWhileDragging: true,
      serviceUrl: "https://router.project-osrm.org/route/v1",
      show: false, // Ocultar el recuadro de instrucciones
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, start, end, customIcon]);

  return null;
}

export default function RoutePage() {
  // Coordenadas de inicio y fin de la ruta
  const start = [-33.459229, -70.645348]; // Ejemplo: Santiago de Chile
  const end = [-33.456942, -70.648272]; // Ejemplo: otro punto en Santiago de Chile
  const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [38, 38], // size of the icon
  });

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <MapContainer
        center={start}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine start={start} end={end} customIcon={customIcon} />
      </MapContainer>
    </div>
  );
}
