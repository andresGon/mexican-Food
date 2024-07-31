import React, { useState } from 'react';
import './cardDish.css'
import Modal from '../modal/modal';

const CardDish = ({ dishes }) => {
  const [isOpen, setIsOpen] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);

    const handleOpen = (dish) => {
        
        setSelectedDish(dish);
        console.log(dish.index)
        setIsOpen(true);
      };
    const handleClose = () => {
        setIsOpen(false);
        setSelectedDish(null)
    }
    
  return (
    <>
      {dishes.map((dish, index) => (
        
        <div key={index} className="card-dish"  onClick={() => handleOpen(dish)}>
            <h3>{dish.name}</h3>
            <img src={dish.image} />
            <p><b>${dish.price.toLocaleString()}</b></p>
        </div>
      ))}
      {isOpen && <Modal isOpen={isOpen} onClose={handleClose} selectedDish={selectedDish} />}
    </>
  );
};

export default CardDish;