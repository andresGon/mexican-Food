import React, { useContext } from 'react';
import { modalContext } from '../../context/modalContext';
import './cardDish.scss'

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
            <img src={dish.image} />
            <div className="card-colTxt">
              <h3>{dish.name}</h3>
              <p>${dish.price.toLocaleString()}</p>
            </div>
        </div>
      ))}
      
    </>
  );
};

export default CardDish;