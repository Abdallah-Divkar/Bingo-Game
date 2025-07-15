import React from "react";
import bingo_cage from "../assets/bingo_cage.png";

export default function BingoCage({ spinning }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px auto" }}>
      <img
        src={bingo_cage}
        alt="Bingo Cage"
        style={{
          width: 240,
          height: 240,
          transition: "transform 0.3s",
          animation: spinning ? "spin 1.5s linear infinite" : "none"
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}