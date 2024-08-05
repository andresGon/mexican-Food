import React, { useContext} from 'react';
import { modalContext } from '../../context/modalContext';
import './modal.scss';
import iconClose from '../../assets/close-icon.svg';

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
            <div className='modal-btnBack' onClick={()=>{handleClose()}}>
              <img src={iconClose} alt="" />
            </div>
            <img src={modalContent.image} alt={modalContent.name} />
            <div className="modal-colTxt">
              <h2>{modalContent.name}</h2>
              <p>{modalContent.description}</p>
              <b>${modalContent.price}</b> 
              <br></br>
              
            </div>
        </div>
    </div>
  );
};

export default Modal;