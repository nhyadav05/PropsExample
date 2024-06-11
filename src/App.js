import React, { useState } from 'react';
import './App.css';
import Component from './components/component';

function App() {
  const [showName, setShowName] = useState(false);

  const handleButtonClick = () => {
    setShowName(true);
    setTimeout(3000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleButtonClick}>Press Me</button>
        {showName && <Component name="Neha" />}
      </header>
    </div>
  );
}

export default App;
