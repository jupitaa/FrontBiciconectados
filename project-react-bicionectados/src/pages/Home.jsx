import "./Pages.css";
import { TbWorldHeart } from "react-icons/tb";
import { IconContext } from "react-icons";
import ButtonConocenos from "../components/buttons/ConocenosButton";
import ConocenosButton from "../components/buttons/ConocenosButton";
export default function Home() {
  return (
    <div className="home-background">
      <div class="background-image"></div>
      <div className="home-page">
        <div className="home-infoapp">
          <img src="./src/assets/images/8tVa.gif" alt="" />
          <IconContext.Provider value={{ size: "4em" }}>
            <p>
              <TbWorldHeart />
              Impacto positivo al reducir las emisiones de CO2 utilizando
              vehiculos
            </p>
          </IconContext.Provider>
          <div className="info-details">
            <strong>300,040 km</strong>
            <strong>1,200,321 kg</strong>
            <span>KM recorridos</span>
            <span>CO2 que evitamos</span>
          </div>
          <span>Este contador se actualiza cada semana</span>
        </div>
        <div className="home-msg-container">
          <h2>
            Pedalea, comparte, inspira: La red social donde cada kilómetro
            cuenta.
          </h2>
          <h5>UNETE, CONOCE AMIGOS Y DESCUBRE EL MUNDO</h5>
        </div>
        <div className="conocenos-container">
          <ConocenosButton />
        </div>
      </div>
    </div>
  );
}
