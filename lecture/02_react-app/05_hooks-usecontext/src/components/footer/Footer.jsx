import { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import "./Footer.css";

function Footer() {
  const { isDark, setIsDark } = useContext(PageContext);
  return (
    <footer className={`footer ${isDark && "dark-mode"}`}>
      <button
        className="footer-mode-btn"
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="footer-copyright">
        ⓒ Copyright 2025. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
