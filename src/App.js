import React, { useState, useEffect, useRef } from 'react'
import './App.css';

export default function App() {

  const [result, setResult] = useState("");
  
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, result.length - 1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }
  return (
    <div className="calc-app">
      <div><h1>Welcome to Calculator</h1></div>
      <form action="noaction.php">
        <input type="text" value={result} ref={inputRef} />
      </form>

      <div className="keypad">
        <button id="clear" onClick={clear}>C</button>
        <button id="backspace" onClick={backspace}>&larr;</button>
        <button id="percent" name="%" onClick={handleClick}>%</button>
        <button id="div" name="/" onClick={handleClick}>&divide;</button>
        <button id="num" name="7" onClick={handleClick}>7</button>
        <button id="num" name="8" onClick={handleClick}>8</button>
        <button id="num" name="9" onClick={handleClick}>9</button>
        <button id="mul" name="*" onClick={handleClick}>&times;</button>
        <button id="num" name="4" onClick={handleClick}>4</button>
        <button id="num" name="5" onClick={handleClick}>5</button>
        <button id="num" name="6" onClick={handleClick}>6</button>
        <button id="sub" name="-" onClick={handleClick}>-</button>
        <button id="num" name="1" onClick={handleClick}>1</button>
        <button id="num" name="2" onClick={handleClick}>2</button>
        <button id="num" name="3" onClick={handleClick}>3</button>
        <button id="add" name="+" onClick={handleClick}>+</button>
        <button id="zero" name="0" onClick={handleClick}>0</button>
        <button id="dec"  name="." onClick={handleClick}>.</button>
        <button id="result" onClick={calculate}>=</button>
      </div>
    </div>
  )
}

