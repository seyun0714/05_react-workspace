import { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import "./Header.css";
import NavBar from "../navBar/NavBar";
import { useNavigate } from "react-router-dom";

function Header() {
  const { isDark, setIsDark } = useContext(PageContext);
  const navigate = useNavigate();
  return (
    <header className={`header ${isDark && "dark-mode"}`}>
      <h1 className="header-logo" onClick={() => navigate("/")}>
        PotenUP
      </h1>
      <NavBar />
      <button
        className="header-modebtn"
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
