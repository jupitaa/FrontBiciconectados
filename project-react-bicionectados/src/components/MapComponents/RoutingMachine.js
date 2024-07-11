import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

const createRoutineMachineLayer = ({ start, end, onRouteSelected }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
      lineOptions: {
        styles: [{ color: "#566DC8", weight: 10 }],
      },
      language: "es",
      addWaypoints: false,
      routeWhileDragging: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
      show: false, // Oculta el control del itinerario
      addWaypoints: false, // Evita que se añadan puntos intermedios
    }).addTo(map);

    routingControl.on("routesfound", (e) => {
      const routes = e.routes[0]; // Assuming you want the first route
      onRouteSelected(routes);
    });
    // Eliminar el contenedor del itinerario del DOM manualmente
    const itineraryContainer = document.querySelector(
      ".leaflet-routing-container"
    );
    if (itineraryContainer) {
      itineraryContainer.style.display = "none";
    }
    const circle = L.circle([-33.433994388953856, -70.64560427481474], {
      color: "red",
      radius: 150,
    }).addTo(map);
    const circle2 = L.circle([-33.4278816465382, -70.63631736075976], {
      color: "yellow",
      radius: 200,
    }).addTo(map);
    circle.bindPopup("Zona Peligrosa.");
    circle2.bindPopup("Zona de riesgo de accidentes.");
    return () => map.removeControl(routingControl);
  }, [map, start, end, onRouteSelected]);
  return null;
};

// const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default createRoutineMachineLayer;
