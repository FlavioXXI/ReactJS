import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='cards-container'>
        <Cards />
      </div>
    </div>
  );
}

export default App;
