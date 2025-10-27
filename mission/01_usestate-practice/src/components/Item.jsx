import React from "react";
import { useState } from "react";

function Item() {
  const [fruit, setFruit] = useState("");

  const handleClickFruit = (e) => {
    setFruit(e.target.value);
  };

  return (
    <div>
      <div>
        <button value="사과" onClick={(e) => handleClickFruit(e)}>
          사과
        </button>
        <button value="바나나" onClick={(e) => handleClickFruit(e)}>
          바나나
        </button>
        <button value="오렌지" onClick={(e) => handleClickFruit(e)}>
          오렌지
        </button>
        <button value="포도" onClick={(e) => handleClickFruit(e)}>
          포도
        </button>
        <button value="딸기" onClick={(e) => handleClickFruit(e)}>
          딸기
        </button>
      </div>
      <div>선택된 과일: {fruit || "없음"}</div>
      {fruit && <div>{fruit}를 선택하셨습니다!</div>}
    </div>
  );
}

export default Item;
