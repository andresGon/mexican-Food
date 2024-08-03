import React, { useContext} from 'react';
import { modalContext } from '../../context/modalContext';
import './modal.css'
const Modal = () => {
  const{closeModal,modalContent} = useContext(modalContext)
  if (!open) return null;

  const handleClose = ()=>{
    const modalWrap = document.querySelector('.modal')
    modalWrap.classList.add('slideOutDown')
    setTimeout(() => {
      closeModal()
    }, 450);
  }
  return (
    <div className="modal slideInUp">
        <div className="modal-inner">
            <h2>{modalContent.name}</h2>
            <img src={modalContent.image} alt={modalContent.name} />
            <p>{modalContent.description}</p>
            <b>${modalContent.price}</b> 
            <br></br>
            <button onClick={()=>{handleClose()}}>Cerrar</button>
        </div>
    </div>
  );
};

export default Modal;