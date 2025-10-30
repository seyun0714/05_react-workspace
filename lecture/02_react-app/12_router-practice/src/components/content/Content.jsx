import { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import "./Content.css";

function Content() {
  const { isDark } = useContext(PageContext);
  return (
    <div className={`content ${isDark && "dark-mode"}`}>
      <p>본문 영역</p>
    </div>
  );
}

export default Content;
