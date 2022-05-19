import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import backFace from '../img/fondo.jpg';

const Card = ({
  name,
  number,
  frontFace,
  flipCard,
  unflipedCards,
  disabledCards,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (unflipedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 800);
    }
  }, [unflipedCards]);

  function handleClickCard(e) {
    const value = flipCard(name, number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
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
