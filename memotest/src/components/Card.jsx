import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import backface from '../img/fondo.jpg';

const Card = (name, number, frontFace) => {
  const [isFlipped, setIsFliped] = useState(false);

  return (
    <div className='card'>
      <ReactCardFlip isFlipped={isFlipped}>
        <img className='card-image' src={backface} alt='back-face'></img>
        <img className='card-image' src={frontFace} alt='front-face'></img>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
