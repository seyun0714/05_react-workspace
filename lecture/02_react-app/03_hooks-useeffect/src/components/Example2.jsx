import React, { useEffect, useState } from "react";

function Example2() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  // 의존성 배열이 빈 배열인 경우 - 최초 렌더링 시에만 (Mount)
  useEffect(() => {
    console.log("설정 함수 실행");
  }, []);

  const handleNowClick = () => {
    setNow(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <button onClick={handleNowClick}>Now</button>
      <h2>현재 시간: {now}</h2>
    </div>
  );
}

export default Example2;
