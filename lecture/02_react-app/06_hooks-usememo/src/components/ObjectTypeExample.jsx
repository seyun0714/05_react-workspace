import { useEffect, useMemo, useState } from "react";

function ObjectTypeExample() {
  console.log("해당 컴포넌트 렌더링됨..");

  const [inputValue, setInputValue] = useState(""); // tv 객체와는 아무 관계 없는 state
  const [isSale, setIsSale] = useState(false); // tv 객체와 연관 있는 state

  const tv = useMemo(() => {
    return {
      brand: "samsung",
      size: 65,
      price: isSale ? "할인가 100만원" : "정가 200만원",
    };
  }, [isSale]);

  useEffect(() => {
    console.log("현재 tv 객체 정보:", tv);
  }, [tv]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={() => setIsSale((prev) => !prev)}>할인 여부 변경</button>
    </>
  );
}

export default ObjectTypeExample;
