import "./Pages.css";
import Temas from "../components/Comunity/temas";
export default function ComunityPage() {
  return (
    <div className="page">
      <div className="grid-temas">
        <div className="filter-button">
          <div className="filter">
            <strong>Ordenar por</strong>
            <button></button>
          </div>
          <button></button>
        </div>
        <Temas></Temas>
        <Temas></Temas>
        <Temas></Temas>
        <Temas></Temas>
        <Temas></Temas>
        <Temas></Temas>
        <Temas></Temas>
        <Temas></Temas>
        <Temas></Temas>
      </div>
    </div>
  );
}
