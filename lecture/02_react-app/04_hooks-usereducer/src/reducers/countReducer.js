// 상태 변경 로직을 컴포넌트 외부 함수(reducer)로 관리
// state를 특정 action에 따라 관리
export function countReducer(state, action) {
  // state: 현재 상태 값, action {type: 요청 관련 타입, payload : 요청에 필요한 데이터}
  switch (action.type) {
    case "INCREASE": {
      return state + 1;
    }
    case "DECREASE": {
      return state - 1;
    }
    case "RESET": {
      return 0;
    }
    case "ADD": {
      return state + action.payload.num;
    }
    default: {
      return state;
    }
  }
}
