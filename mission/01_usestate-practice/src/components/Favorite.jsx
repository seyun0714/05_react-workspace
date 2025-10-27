import React from "react";
import { useState } from "react";

function Favorite() {
  const [color, setColor] = useState("");
  const [fruit, setFruit] = useState("");
  return (
    <>
      <div>
        <span>좋아하는 색상: </span>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="" disabled>
            선택
          </option>
          <option value="blue">파란색</option>
          <option value="red">빨간색</option>
          <option value="yellow">노란색</option>
          <option value="green">초록색</option>
        </select>
      </div>
      <div>
        <span>좋아하는 과일: </span>
        <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
          <option value="" disabled>
            선택
          </option>
          <option value="apple">🍎 사과</option>
          <option value="banana">🍌 바나나</option>
          <option value="watermelon">🍉 수박</option>
          <option value="strawberry">🍓 딸기</option>
          <option value="orange">🍊 오렌지</option>
        </select>
      </div>
      <div>선택한 색상: {color || "선택"}</div>
      <div>선택한 과일: {fruit || "선택"}</div>
    </>
  );
}

export default Favorite;
