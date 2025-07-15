import React from "react";

export default function BingoBall({ number, large }) {
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
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: bgColor,
        color: "white",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 0 8px rgba(0,0,0,0.3)",
        userSelect: "none",
      }}
    >
      <div style={{ fontSize: "1rem" }}>{letter}</div>
      <div style={{ fontSize: "1.5rem" }}>{digit}</div>
    </div>
  );
}
