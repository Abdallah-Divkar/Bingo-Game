import React, { useState } from "react";
import { Link } from "react-router-dom";
import BingoCard from "../Components/BingoCard";
import { useGame } from "../context/GameContext";
import GameStatus from "../Components/GameStatus";
import "../styles/Pages.css";
import "../styles/Buttons.css";

export default function GamePage() {
    const { drawnNumbers, hasWon, card, drawNumber, resetGame, setHasWon } = useGame();
    /*const [drawnNumbers, setDrawnNumbers] = useState([]);*/

    // Remove checkWin and setHasWon(true) logic


    return (
        <div className="page-container">
            <h1 className="page-title">Bingo Game</h1>
            <GameStatus />
            <BingoCard />
            <div className="button-group mt-4">
            <Link to="/draw">
                    <button className="btn btn-secondary">Back to Draw</button>
                </Link>
            </div>
        </div>
    );
  
}

