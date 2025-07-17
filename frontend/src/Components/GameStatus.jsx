import React from "react";
import { useGame } from "../context/GameContext";
import "../styles/GameStatus.css";

export default function GameStatus() {
    const { hasWon } = useGame();

    if (!hasWon) 
        return null;

    return (
        <div className="game-status">
        🎉 You got Bingo!
      </div>
    );
}       

