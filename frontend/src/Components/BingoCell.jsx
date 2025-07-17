import React from "react";
import "../styles/BingoCard.css";
import "../styles/BingoCell.css";

export default function BingoCell({ value, marked }) {
    return (
        <div className={`bingo-cell ${marked ? "marked" : ""}`}>
          {value}
        </div>
    );
}