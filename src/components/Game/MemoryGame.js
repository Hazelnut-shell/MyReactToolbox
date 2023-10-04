import React from "react";
import { useState } from "react";

import Button from '../../components/UIElements/Button';

const cardImages = ['⛄', '🔥', '🦊', '🧊', '🌳', '🎈', '✨', '🦄'];

const MemoryGame = props => {
  const [cards, setCards] = useState([]);
  const [gameEnd, setGameEnd] = useState(true); 

  const startGameHandler = () => {
    let cardImagesDuplicate = [...cardImages, ...cardImages];
    cardImagesDuplicate.sort(() => Math.random() - 0.5);
    cardImagesDuplicate = cardImagesDuplicate.map((img, idx) => {
      return { content: img, id: idx};
    });

    setCards(cardImagesDuplicate);
    setGameEnd(false);

    console.log(cardImagesDuplicate);
  };


  return (<React.Fragment>
    <Button onClick={startGameHandler}>Start New Game</Button>
  </React.Fragment>);
};

export default MemoryGame;