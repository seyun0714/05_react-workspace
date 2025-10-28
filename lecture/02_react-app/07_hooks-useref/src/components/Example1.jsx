import { useRef, useState } from "react";

function Example1() {
  console.log("컴포넌트 렌더링됨");

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleCountChange = () => {
    setCount((prev) => prev + 1); // state 값 변경 시에 컴포넌트 리렌더링 발생
  };

  const handleCountRefChange = () => {
    countRef.current += 1; // ref 값 변경 시에는 컴포넌트 리렌더링 발생 x
  };

  return (
    <>
      <button onClick={handleCountChange}>state(count)값 변경</button>
      <button onClick={handleCountRefChange}>ref(countRef)값 변경</button>
      <h1>
        state(count)값: {count} / ref(countRef): {countRef.current}
      </h1>
    </>
  );
}

export default Example1;
