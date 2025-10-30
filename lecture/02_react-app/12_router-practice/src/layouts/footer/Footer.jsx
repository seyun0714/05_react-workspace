import { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import "./Footer.css";

function Footer() {
  const { isDark } = useContext(PageContext);
  return (
    <footer className={`footer ${isDark && "dark-mode"}`}>
      <div className="footer-copyright">
        ⓒ Copyright 2025. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
