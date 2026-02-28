import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="calculator">
      <h2 className="title">Quick-Calc</h2>

      <div className="inputs">
        <input type="number" placeholder="First number" />
        <input type="number" placeholder="Second number" />
      </div>

      <div className="buttons">
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>÷</button>
        <button className="clear">C</button>
      </div>

      <div className={`result`}>0</div>
    </div>
  );
}
