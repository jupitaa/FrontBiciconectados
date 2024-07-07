import "./comunity.css";

export default function Tema() {
  return (
    <div className="tema-container">
      <div className="tema-description center">
        <h3>Titulo</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="tema-info center">
        <span>Comentarios:</span>
        <span>9999</span>
        <span>Visto:</span>
        <span>9999</span>
      </div>
      <div className="tema-autor center">
        <strong>Autor</strong>
        <span>jul 6, 2024, 19:58 PM</span>
      </div>
    </div>
  );
}
