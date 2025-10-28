import { useState } from "react";
import DisplayName from "./DisplayName";
import NameButton from "./NameButton";

function NameShareApp() {
  const names = ["이영희", "김철수", "박민수", "홍길동"];
  const [selected, setSelected] = useState("홍길동");
  return (
    <>
      <h1>이름 공유 앱</h1>
      {/* 현재 선택된 이름이 보여지는 컴포넌트 */}
      <DisplayName name={selected} />
      {/* 현재 선택되는 이름을 변경시켜주는 버튼 목록 컴포넌트 */}
      <NameButton setSelected={setSelected} names={names} />
    </>
  );
}

export default NameShareApp;
