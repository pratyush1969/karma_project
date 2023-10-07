import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function FrogGame() {
  const [frogPosition, setFrogPosition] = useState(0);

  const moveFrog = (direction) => {
    // Implement logic to move the frog left or right
    if (direction === 'left') {
      setFrogPosition(frogPosition - 50);
    } else if (direction === 'right') {
      setFrogPosition(frogPosition + 50);
    }
  };

  return (
    <div className="frog-game-container">
      <div className="frog" style={{ left: frogPosition }}></div>
      <button onClick={() => moveFrog('left')}>Move Left</button>
      <button onClick={() => moveFrog('right')}>Move Right</button>
    </div>
  );
}

export default FrogGame;
