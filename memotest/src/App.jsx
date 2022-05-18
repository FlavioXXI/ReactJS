// https://www.youtube.com/watch?v=OpZEIxqQfIs&t=1002s

import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { images } from './imgImports';

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(images);
  }, []);

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
