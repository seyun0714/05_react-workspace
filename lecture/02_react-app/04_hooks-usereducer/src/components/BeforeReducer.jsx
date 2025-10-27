import React, { useState } from "react";

// Reducer 개념 사용 전 - useState를 활용한 상태 관리
// 상태 관리할 게 많아지면, 관리하기 불편, 재사용x, 확장성x
function BeforeReducer() {
  const [count, setCount] = useState(0);

  const handleClickIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleClickDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleClickReset = () => {
    setCount(0);
  };

  const handleIncreaseByNum = (num) => {
    setCount((prev) => prev + num);
  };

  return (
    <>
      <h2>카운터: {count}</h2>
      <button onClick={handleClickIncrease}>+1 증가</button>
      <button onClick={handleClickDecrease}>-1 감소</button>
      <button onClick={handleClickReset}>초기화</button>
      <button onClick={() => handleIncreaseByNum(5)}>+5 증가</button>
    </>
  );
}

export default BeforeReducer;
