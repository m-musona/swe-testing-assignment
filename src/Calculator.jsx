import React, { useState } from "react";
import { add, subtract, multiply, divide } from "./CalculatorLogic";
import "./Calculator.css";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(0);

  // Clear Inputs and Result
  const clear = () => {
    setA("");
    setB("");
    setResult(0);
  };

  return (
    <div className="calculator">
      <h2 className="title">Quick-Calc</h2>

      <div className="inputs">
        <input
          type="number"
          placeholder="First number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          type="number"
          placeholder="Second number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setResult(add(+a, +b))}>+</button>
        <button onClick={() => setResult(subtract(+a, +b))}>-</button>
        <button onClick={() => setResult(multiply(+a, +b))}>x</button>
        <button onClick={() => setResult(divide(+a, +b))}>÷</button>
        <button className="clear" onClick={clear}>
          C
        </button>
      </div>

      <div
        className={`result ${String(result).includes("Error") ? "error" : ""}`}
      >
        {result}
      </div>
    </div>
  );
}
