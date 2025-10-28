import { useState } from "react";

function BeforeUseMemo() {
  console.log("컴포넌트 렌더링됨...");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const operation1 = () => {
    console.log("operation1 함수 실행");
    for (let i = 0; i < 4000000000; i++) {}
    if (!num1) return 1;

    return parseInt(num1) + 1;
  };

  const result1 = operation1();

  const operation2 = () => {
    console.log("operation2 함수 실행");
    if (!num2) return 1;

    return parseInt(num2) + 1;
  };

  const result2 = operation2();

  return (
    <>
      <h2>오버헤드 연산</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <div>
        {num1 ? num1 : 0} + 1 = {result1}
      </div>

      <h2>일반 연산</h2>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        {num2 ? num2 : 0} + 1 = {result2}
      </div>
    </>
  );
}

export default BeforeUseMemo;
