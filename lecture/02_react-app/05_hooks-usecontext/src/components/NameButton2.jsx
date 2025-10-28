import { useContext } from "react";
import { NameContext } from "./NameShareApp2";

function NameButton2() {
  const { names, setSelected } = useContext(NameContext);
  return (
    <>
      {names.map((name, idx) => (
        <button key={idx} onClick={() => setSelected(name)}>
          {name}
        </button>
      ))}
    </>
  );
}

export default NameButton2;
