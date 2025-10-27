import React, { useEffect, useState } from "react";

function Example3() {
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  // 설정 함수 동작 시점
  // 1. 초기 렌더링 시
  // 2. 의존성 배열에 있는 의존성 값 변경될 시
  useEffect(() => {
    console.log("설정 함수 실행");
  }, [date.month, date.day]);

  const handleChangeDate = (e) => {
    const target = e.target.id;

    setDate((date) => {
      return {
        ...date,
        [target]: e.target.value,
      };
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="년"
        id="year"
        value={date.year}
        onChange={(e) => handleChangeDate(e)}
      />
      <input
        type="text"
        placeholder="월"
        id="month"
        value={date.month}
        onChange={(e) => handleChangeDate(e)}
      />
      <input
        type="text"
        placeholder="일"
        id="day"
        value={date.day}
        onChange={(e) => handleChangeDate(e)}
      />
      <div>
        현재 날짜: {date.year}.{date.month}.{date.day}
      </div>
    </div>
  );
}

export default Example3;
