import React from 'react';
import './modal.css'
const Modal = ({ isOpen, onClose, selectedDish }) => {
  const [open, setOpen] = React.useState(isOpen);

  if (!open) return null;

  return (
    <div className="modal">
        <div className="modal-inner">
            {selectedDish && <h2>{selectedDish.name}</h2>}
            <img src={selectedDish.image} alt="" />
            <p> {selectedDish.description}</p>
            <b>${selectedDish.price.toLocaleString()}</b>
            <br></br>
            <button onClick={onClose}>Cerrar</button>
        </div>
    </div>
  );
};

export default Modal;