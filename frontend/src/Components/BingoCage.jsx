import React from "react";
import "./BingoCage.css";

export default function BingoCage({ spinning }) {
  return (
    <div className={`cage ${spinning ? "spinning" : ""}`}>
      <div className="crossbar vertical"></div>
      <div className="crossbar horizontal"></div>
      <div className="ball"></div>
    </div>
  );
}
