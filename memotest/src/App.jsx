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
        {cards.map((card) => {
          return <Card />;
        })}
      </div>
    </div>
  );
}

export default App;
