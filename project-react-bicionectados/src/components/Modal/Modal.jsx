import React from "react";

function Modal({ title, text, setModal }) {
  return (
    <div className="modal-container" onClick={() => setModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content-card">
          <div className="modal-content-card-title">{title && title}</div>
          <div className="modal-content-card-text">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
