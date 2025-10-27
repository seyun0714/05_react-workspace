import React, { useEffect, useState } from "react";

function Example1() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  // setUp 함수가 동작되는 시점
  // 1. 처음 컴포넌트가 렌더링 될 때(Mount, componentDidMount)
  // 2. 다시 렌더링 될 때(Update, componentDidUpdate)
  useEffect(() => {
    console.log("설정 함수 실행");
  });

  function handleNowClick() {
    setNow(new Date().toLocaleTimeString());
  }

  return (
    <div>
      <button onClick={handleNowClick}>Now</button>
      <h2>현재 시간: {now}</h2>
    </div>
  );
}

export default Example1;
