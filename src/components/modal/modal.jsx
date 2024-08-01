import React, { useContext} from 'react';
import { modalContext } from '../../context/modalContext';
import './modal.css'
const Modal = () => {
  const{closeModal,modalContent} = useContext(modalContext)
  if (!open) return null;

  return (
    <div className="modal">
        <div className="modal-inner">
            <h2>{modalContent.name}</h2>
            <img src={modalContent.image} alt={modalContent.name} />
            <p>{modalContent.description}</p>
            <b>${modalContent.price}</b> 
            <br></br>
            <button onClick={()=>{closeModal()}}>Cerrar</button>
        </div>
    </div>
  );
};

export default Modal;