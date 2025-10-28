import { useEffect, useRef } from "react";

function Example2() {
  // DOM 요소 직접 접근 사용 예시

  // 컴포넌트 렌더링 시 해당 텍스트 상자에 focusing 효과 주기
  const inputRef = useRef(); // 1. { current: undefined }

  useEffect(() => {
    inputRef.current.focus(); // 3.
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />{" "}
      {/* 2. inputRef: { current: input DOM 요소 객체} */}
    </>
  );
}

export default Example2;
