import React from "react";
import bingo_cage from "../assets/bingo_cage.png";
import "../styles/BingoCage.css";

export default function BingoCage({ spinning }) {
  return (
    <div className="cage-container">
      <img
        src={bingo_cage}
        alt="Bingo Cage"
        className={`cage-image ${spinning ? "spinning" : ""}`}
      />
    </div>
  );
}