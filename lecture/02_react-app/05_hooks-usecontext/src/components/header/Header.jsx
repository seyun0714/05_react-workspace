import { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import "./Header.css";

function Header() {
  const { isDark } = useContext(PageContext);
  return (
    <header className={`header ${isDark && "dark-mode"}`}>
      <h1>헤더 영역</h1>
    </header>
  );
}

export default Header;
