import React, { useContext } from 'react';
import { modalContext } from '../../context/modalContext';
import emptyStarIcon from '../../assets/star-icon.svg';
import fullStarIcon from '../../assets/star-full-icon.svg';
import './cardDish.scss';

const CardDish = ({ dishes }) => {
  const { modalStatus, openModal } = useContext(modalContext);
  
  const handleClick = (content) => {
    openModal(content);
    console.log(content);
  };

  const renderRatingStars = (rating) => {
    const filledStars = Array(rating).fill(fullStarIcon); // Usa la imagen de estrella llena
    const emptyStars = Array(5 - rating).fill(emptyStarIcon); // Usa la imagen de estrella vacía

    return (
      <span className="rating-stars">
        {filledStars.map((icon, index) => (
          <img key={`filled-${index}`} src={icon} alt="Full star" className="filled-star" />
        ))}
        {emptyStars.map((icon, index) => (
          <img key={`empty-${index}`} src={icon} alt="Empty star" className="empty-star" />
        ))}
      </span>
    );
  };
  return (
    <>
      {dishes.map((dish, index) => (
        <div key={index} className="card-dish" onClick={() => handleClick(dish)}>
          <img 
            src={dish.image} 
            alt={dish.name} 
            loading="lazy"
            width="100%"
            height="auto"
          />
          <div className="card-colTxt">
            <h3>{dish.name}</h3>
            <span>{renderRatingStars(dish.rating)}</span>
            <p>${dish.price.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardDish;
