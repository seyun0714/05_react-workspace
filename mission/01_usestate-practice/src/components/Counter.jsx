import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleDecrease() {
    setCount((prev) => prev - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <div>카운트: {count}</div>
      <div>
        <button onClick={handleDecrease}>-1</button>
        <button onClick={handleReset}>초기화</button>
        <button onClick={handleIncrease}>+1</button>
      </div>
    </div>
  );
}

export default Counter;
