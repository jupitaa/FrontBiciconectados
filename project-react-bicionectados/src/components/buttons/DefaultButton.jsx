import "./button.css";
export default function DefaultButton({ button }) {
  return (
    <button type="submit" className="btn-default">
      {button}
    </button>
  );
}
