import React, { useState } from "react";
import BingoBall from "../components/BingoBall";
import BingoCage from "../components/BingoCage";
import { Link } from "react-router-dom";
import { useGame } from "../context/GameContext";
import "../styles/Pages.css";
import "../styles/Buttons.css";

export default function DrawPage() {
  // ✅ Global state from context
  const { currentNumber, drawnNumbers, drawNumber, resetGame } = useGame();

  // ✅ Local UI-only state
  const [spinning, setSpinning] = useState(false);

  // ✅ Wrap drawNumber call with spinning animation
  const handleDraw = async () => {
    setSpinning(true);
    setTimeout(async () => {
      await drawNumber(); // ✅ Use context method
      setSpinning(false);
    }, 1500);
  };

  const handleReset = async () => {
    setSpinning(true);
    await resetGame(); // ✅ Use context method
    setSpinning(false);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Bingo Game - Draw Page</h1>

      <div className="draw-controls">
        <button className="btn btn-primary" onClick={handleDraw} disabled={spinning}>Draw Number</button>
        <button className="btn btn-secondary" onClick={handleReset} disabled={spinning}>Reset Game</button>
        <Link to="/game" className="link-button">
          <button className="btn btn-primary">Go to Game Page</button>
        </Link>
      </div>

      <BingoCage spinning={spinning} />

      <div className="current-number-display">
        {currentNumber ? <BingoBall number={currentNumber} large={true} /> : "Click Draw to start"}
      </div>

      <div className="drawn-numbers-list">
        {drawnNumbers.map((num) => (
          <BingoBall key={num} number={num} />
        ))}
      </div>
    </div>
  );
}
