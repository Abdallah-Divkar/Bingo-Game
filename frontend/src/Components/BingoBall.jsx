import React from "react";
import "../styles/BingoBall.css";

export default function BingoBall({ number, large = false }) {
  // Extract letter and digit parts
  const [letter, digit] = number.split("-");

  // Color based on letter
  const colors = {
    B: "#007bff",
    I: "#28a745",
    N: "#ffc107",
    G: "#dc3545",
    O: "#6f42c1",
  };
  const bgColor = colors[letter] || "#333";
  const size = large ? 120 : 60;

  return (
    <div
      className={`bingo-ball ${large ? "large" : ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="letter">{letter}</div>
      <div className="digit">{digit}</div>
    </div>
  );
}
