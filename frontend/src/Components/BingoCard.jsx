import React, { useEffect, useState } from "react";
import BingoCell from "./BingoCell";
import "../styles/BingoCard.css";
import { useGame } from "../context/GameContext";

export default function BingoCard() {
  /*const [card, setCard] = useState([]);*/
  const { card, drawnNumbers } = useGame();

  /*useEffect(() => {
    const newCard = generateBingoCard();
    setCard(newCard);
  }, []);*/

  /*useEffect(() => {
    // Auto-mark cells if drawn number is in card
    setCard(prev =>
      prev.map(row =>
        row.map(cell =>
          cell.number != "FREE" && drawnNumbers.includes(`BINGO-${cell.number}`)
            ? { ...cell, marked: true }
            : cell
        )
      )
    );
  }, [drawnNumbers]);*/

  return (
    <div className="bingo-card">
      {['B', 'I', 'N', 'G', 'O'].map(letter => (
        <div className="bingo-header" key={letter}>{letter}</div>
      ))}

      {card.flat().map((cell, idx) => (
        <BingoCell key={idx} value={cell.number} marked={cell.marked} />
      ))}
    </div>
  );
}