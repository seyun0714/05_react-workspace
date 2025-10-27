import React, { useEffect, useMemo, useState } from "react";

function Example4() {
  const [timer, setTimer] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    let intervalID;
    if (status) {
      intervalID = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 10);
    }

    // cleanup 함수: 컴포넌트가 언마운트 될 때, useEffect의 설정 함수가 실행되기 전에 실행
    return () => {
      clearInterval(intervalID);
    };
  }, [status]);

  const formattedTime = useMemo(() => {
    const totalSeconds = Math.floor(timer / 100);
    const milliSeconds = timer % 100;

    const seconds = totalSeconds % 60;
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const formatted = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}:${String(milliSeconds).padStart(2, "0")}`;

    return formatted;
  }, [timer]);

  return (
    <div>
      <h2>타이머</h2>
      <h3>{formattedTime}</h3>
      <div>
        <button onClick={() => setStatus(true)}>시작</button>
        <button onClick={() => setStatus(false)}>중지</button>
        <button
          onClick={() => {
            setTimer(0);
            setStatus(false);
          }}
        >
          초기화
        </button>
      </div>
      <p>상태: {status ? "실행중" : "정지됨"}</p>
    </div>
  );
}

export default Example4;
