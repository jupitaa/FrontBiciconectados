import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

const createRoutineMachineLayer = ({ start, end }) => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;

    const instance = L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
      lineOptions: {
        styles: [{ color: "#566DC8", weight: 10 }],
      },
      language: "es",
      show: true,
      addWaypoints: false,
      routeWhileDragging: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map);

    return () => map.removeControl(instance);
  }, [map, start, end]);
  return null;
};

// const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default createRoutineMachineLayer;
