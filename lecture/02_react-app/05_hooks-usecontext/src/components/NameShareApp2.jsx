import { useState, createContext } from "react";
import DisplayName2 from "./DisplayName2";
import NameButton2 from "./NameButton2";

export const NameContext = createContext();

function NameShareApp2() {
  const names = ["이영희", "김철수", "박민수", "홍길동"];
  const [selected, setSelected] = useState("홍길동");
  return (
    <>
      <h1>이름 공유 앱</h1>

      <NameContext.Provider value={{ names, selected, setSelected }}>
        <DisplayName2 />
        <NameButton2 />
      </NameContext.Provider>
    </>
  );
}

export default NameShareApp2;
