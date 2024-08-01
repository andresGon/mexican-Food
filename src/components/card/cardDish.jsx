import React, { useContext } from 'react';
import { modalContext } from '../../context/modalContext';
import './cardDish.css'

const CardDish = ({ dishes }) => {
    const { modalStatus,openModal } = useContext(modalContext)
    
    const hadleClick = (content) =>{
      openModal(content)
      console.log(content)
    }
  return (
    <>
      {dishes.map((dish, index) => (
        
        <div key={index} className="card-dish"  onClick={()=>{hadleClick(dish)}}>
            <h3>{dish.name}</h3>
            <img src={dish.image} />
            <p><b>${dish.price.toLocaleString()}</b></p>
            <p>{!modalStatus ? 'modal cerrada' : 'modal abierta'}</p>
        </div>
      ))}
      
    </>
  );
};

export default CardDish;