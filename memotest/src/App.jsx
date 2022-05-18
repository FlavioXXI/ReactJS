// https://www.youtube.com/watch?v=OpZEIxqQfIs&t=1002s

import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { images } from './imgImports';

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    shuffle(images);
    setCards(images);
  }, []);

  function shuffle(arrayCard) {
    var j, x, i;
    for (i = arrayCard.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arrayCard[i];
      arrayCard[i] = arrayCard[j];
      arrayCard[j] = x;
    }
    return arrayCard;
  }

  return (
    <div className='App'>
      <div className='cards-container'>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              name={card.animal}
              number={index}
              frontFace={card.src}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
