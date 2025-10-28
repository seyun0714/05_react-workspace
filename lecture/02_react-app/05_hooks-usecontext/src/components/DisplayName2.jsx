import { useContext } from "react";
import { NameContext } from "./NameShareApp2";

function DisplayName2() {
  const { selected } = useContext(NameContext);
  return <h2>현재 선택된 이름: {selected}</h2>;
}

export default DisplayName2;
