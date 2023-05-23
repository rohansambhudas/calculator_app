import React, { useState } from 'react';
import './Calculator.css';

const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      setDisplayValue(prevValue => prevValue + value);
    }
  };

  const calculateResult = () => {
    try {
      const evaluatedResult = eval(displayValue);
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
    setResult('');
  };

  return (
    <div className="calculator-app">
      <h1>Calculator</h1>
      <div className="calculator">
        <input
          type="text"
          className="display"
          value={displayValue}
          onChange={(e) => setDisplayValue(e.target.value)}
        />
        <div className="button-grid">
          <button className="btn" onClick={() => handleClick('7')}>7</button>
          <button className="btn" onClick={() => handleClick('8')}>8</button>
          <button className="btn" onClick={() => handleClick('9')}>9</button>
          <button className="btn operator" onClick={() => handleClick('/')}>/</button>
          <button className="btn" onClick={() => handleClick('4')}>4</button>
          <button className="btn" onClick={() => handleClick('5')}>5</button>
          <button className="btn" onClick={() => handleClick('6')}>6</button>
          <button className="btn operator" onClick={() => handleClick('*')}>*</button>
          <button className="btn" onClick={() => handleClick('1')}>1</button>
          <button className="btn" onClick={() => handleClick('2')}>2</button>
          <button className="btn" onClick={() => handleClick('3')}>3</button>
          <button className="btn operator" onClick={() => handleClick('-')}>-</button>
          <button className="btn" onClick={() => handleClick('0')}>0</button>
          <button className="btn" onClick={() => handleClick('.')}>.</button>
          <button className="btn operator" onClick={() => handleClick('+')}>+</button>
          <button className="btn equal" onClick={calculateResult}>=</button>
          <button className="btn clear" onClick={clearDisplay}>C</button>
        </div>
      </div>
      <p className="result">Result: {result}</p>
    </div>
  );
};

export default CalculatorApp;
