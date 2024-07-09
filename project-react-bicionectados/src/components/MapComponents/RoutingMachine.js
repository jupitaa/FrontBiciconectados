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
    return () => map.removeControl(routingControl);
  }, [map, start, end, onRouteSelected]);
  return null;
};

// const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default createRoutineMachineLayer;
