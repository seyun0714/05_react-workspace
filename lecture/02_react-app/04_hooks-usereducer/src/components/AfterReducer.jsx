import React, { useReducer } from "react";
import { countReducer } from "../reducers/countReducer";

// // 상태 변경 로직을 컴포넌트 외부 함수(reducer)로 관리
// // state를 특정 action에 따라 관리
// function countReducer(state, action) {
//   // state: 현재 상태 값, action {type: 요청 관련 타입, payload : 요청에 필요한 데이터}
//   switch (action.type) {
//     case "INCREASE": {
//       return state + 1;
//     }
//     case "DECREASE": {
//       return state - 1;
//     }
//     case "RESET": {
//       return 0;
//     }
//     case "ADD": {
//       return state + action.payload.num;
//     }
//     default: {
//       return state;
//     }
//   }
// }

function AfterReducer() {
  const [count, dispatch] = useReducer(countReducer, 0); //
  return (
    <>
      <h2>카운터: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+1 증가</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-1 감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
      <button onClick={() => dispatch({ type: "ADD", payload: { num: 5 } })}>
        +5 증가
      </button>
    </>
  );
}

export default AfterReducer;
