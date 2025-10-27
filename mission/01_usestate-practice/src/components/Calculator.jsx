import React from "react";
import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(5);

  const handleChangeInput = (e) => {
    const target = e.target.name;
    switch (target) {
      case "num1":
        setNum1(e.target.value);
        break;
      case "num2":
        setNum2(e.target.value);
        break;
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="num1">숫자 1: </label>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label htmlFor="num2">숫자 2: </label>
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        덧셈: {num1} + {num2} = {num1 + num2}
      </div>
      <div>
        뺄셈: {num1} - {num2} = {num1 - num2}
      </div>
      <div>
        곱셈: {num1} x {num2} = {num1 * num2}
      </div>
      <div>
        나눗셈: {num1} / {num2} = {num1 / num2}
      </div>
    </div>
  );
}

export default Calculator;
