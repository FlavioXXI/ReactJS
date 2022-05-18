import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import backFace from '../img/fondo.jpg';

const Card = ({ name, number, frontFace }) => {
  const [isFlipped, setIsFliped] = useState(false);

  function handleClickCard(e) {
    setIsFliped(!isFlipped);
  }

  return (
    <div className='card'>
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className='card-image'
          src={backFace}
          alt='back-face'
          onClick={handleClickCard}
        ></img>
        <img
          className='card-image'
          src={frontFace}
          alt='front-face'
          onClick={handleClickCard}
        ></img>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
