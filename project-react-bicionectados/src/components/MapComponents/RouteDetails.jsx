import "./mapComponents.css";
import { IconContext } from "react-icons";
import { FaRoute, FaFingerprint } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

function calculateCarbonFootprint(distanceKm, transportMode) {
  const carEmissionsPerKm = 150; // g CO2/km
  const bikeCaloriesPerKm = 35; // cal/km
  const emissionsPerCalorie = 0.02; // g CO2/cal

  if (transportMode === "car") {
    return (distanceKm * carEmissionsPerKm) / 1000; // kg CO2
  } else if (transportMode === "bike") {
    return (distanceKm * bikeCaloriesPerKm * emissionsPerCalorie) / 1000; // kg CO2
  } else {
    return 0;
  }
}

// Ejemplo de uso:// km

const RouteDetails = ({ route }) => {
  if (!route) {
    return null;
  }

  const kmformat = route.summary.totalDistance / 1000;
  const timeformat = route.summary.totalTime / 60;
  const carFootprint = calculateCarbonFootprint(kmformat, "car");
  return (
    <div className="map-route-details scaleUp">
      <IconContext.Provider value={{ size: "3em" }}>
        <div className="detail-block">
          <FaRoute />
          <p>Distancia: {kmformat.toFixed(2)} km</p>
        </div>
        <div className="detail-block">
          <MdOutlineTimer />
          <p>Duración: {timeformat.toFixed(2)} minutos</p>
        </div>
        <div className="detail-block">
          <FaFingerprint />
          <p>Huella de carbono : {carFootprint.toFixed(3)} Kilogramos</p>
        </div>
      </IconContext.Provider>
      {/* <ul>
        {route.instructions.map((instruction, idx) => (
          <li key={idx}>{instruction.text}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RouteDetails;
