import { createContext, useState, useContext, useEffect } from "react";
import { generateBingoCard } from "../utils/generateBingoCard";
import { checkForWin } from "../utils/checkForWin";

//Creating context
const GameContext = createContext();

//hook to access context
export const useGame = () => useContext(GameContext);

// 3. GameProvider component
export const GameProvider = ({ children }) => {
    // Game state will go here
    const [drawnNumbers, setDrawnNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(null);
    const [hasWon, setHasWon] = useState(false);
    const [card, setCard] = useState(generateBingoCard());

    const drawNumber = async () => {
        try {
            const res = await fetch("http://localhost:5000/draw");
            const data = await res.json();

            setCurrentNumber(data.current_drawn_number);
            setDrawnNumbers(data.all_drawn_numbers);
        } catch (err) {
            console.error("Error drawing number:", err);
        }
    };

    const resetGame = async () => {
        try {
            await fetch("http://localhost:5000/reset", { method: "POST" });
            setCurrentNumber(null);
            setDrawnNumbers([]);
            setHasWon(false);
            setCard(generateBingoCard());
        } catch (err) {
            console.error("Error resetting game:", err);
        }
    };

    useEffect(() => {
        // Mark cells if their number is in drawnNumbers
        const updatedCard = card.map(row =>
          row.map(cell => {
            if (cell.number === "FREE") return { ...cell, marked: true };
            // drawnNumbers are in the format 'BINGO-12', so extract the number part
            const cellNumStr = typeof cell.number === 'number' ? cell.number.toString() : cell.number;
            const isDrawn = drawnNumbers.some(dn => dn.endsWith(`-${cellNumStr}`));
            return isDrawn ? { ...cell, marked: true } : { ...cell, marked: false };
          })
        );
        console.log("[DEBUG] Drawn Numbers:", drawnNumbers);
        console.log("[DEBUG] Updated Card:", updatedCard);
        const win = checkForWin(updatedCard);
        console.log("[DEBUG] checkForWin Result:", win);
        setCard(updatedCard);
        setHasWon(win);
    }, [drawnNumbers]);
    



    return (
      <GameContext.Provider 
      value={{
        card,
        drawnNumbers,
        currentNumber,
        hasWon,
        drawNumber,
        resetGame,
        setHasWon,
      }}>
        {children}
      </GameContext.Provider>
    );
};
