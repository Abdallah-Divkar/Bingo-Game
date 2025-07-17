import { Routes, Route, Navigate } from "react-router-dom";
import DrawPage from "./pages/DrawPage";
import GamePage from "./pages/GamePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/draw" />} />
      <Route path="/draw" element={<DrawPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}



/*import React, { useState } from "react";
import BingoBall from "./Components/BingoBall";
import BingoCage from "./Components/BingoCage";
import "./App.css";

export default function App() {
  // State for current drawn number and all drawn numbers
  const [currentNumber, setCurrentNumber] = useState(null);
  const [allNumbers, setAllNumbers] = useState([]);
  const [spinning, setSpinning] = useState(false);

  // Function to call your backend and draw a number
  const drawNumber = async () => {
    try {
      setSpinning(true);            // start spinning
      // simulate cage spin duration (~1.5 sec)
      setTimeout(async () => {
        const response = await fetch("http://127.0.0.1:5000/draw");
        const data = await response.json();
        setCurrentNumber(data.current_drawn_number);
        setAllNumbers(data.all_drawn_numbers);
        setSpinning(false);         // stop spinning
      }, 1500);
    } catch (error) {
      console.error("Error fetching draw:", error);
      setSpinning(false);
    }
  };
  
  // Function to reset the game state
  const resetGame = async () => {
    setCurrentNumber(null);
    setAllNumbers([]);
    setSpinning(false);
    try {
      await fetch("http://127.0.0.1:5000/reset", { method: "POST" });
    } catch (error) {
      console.error("Error resetting game:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Bingo Game</h1>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={drawNumber} disabled={spinning}>Draw Number</button>
        <button onClick={resetGame} disabled={spinning}>Reset Game</button>
      </div>
  
      {/* Bingo cage with spinning animation *//*}
      <BingoCage spinning={spinning} />
  
      <div style={{
        margin: "2rem",
        fontSize: "6rem",
        fontWeight: "bold",
        color: "#007bff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {currentNumber ? <BingoBall number={currentNumber} large={true} /> : "Click Draw to start"}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
        {allNumbers.map((num) => (
          <BingoBall key={num} number={num} />
        ))}
      </div>
    </div>
  );
  
}*/