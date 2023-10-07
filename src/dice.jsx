
import './App.css';
import { useState } from 'react';

import DiceImage1 from "./imagelocal/Dice1.png";
import DiceImage2 from "./imagelocal/Dice2.png";
import DiceImage3 from "./imagelocal/Dice3.png";
import DiceImage4 from "./imagelocal/Dice4.png";
import DiceImage5 from "./imagelocal/Dice5.png";
import DiceImage6 from "./imagelocal/Dice6.png";

function Dice() 
{
  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]

  const [image, setNewImage] = useState(diceImages[0])
  const [image2, setNewImage2] = useState(diceImages[1])

  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
  }


  return (
    <div className="Dice">
      <center>
        <h1>Welcome to ULTIMATE DICE ROLLER</h1>
        <div className='dice-container'>
          <img className='square-dice' src={image}></img>
          <div style={{width: '5px', display: 'inline-block'}}></div>
          <img className='square-dice' src={image2}></img>
        </div>
        <button type="button" class="btn btn-outline-primary" onClick={rollDice}>Roll Dice</button>
      </center>
    </div>
  );
}

export default Dice;