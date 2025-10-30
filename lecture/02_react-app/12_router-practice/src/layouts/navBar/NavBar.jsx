import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { PageContext } from "../../context/pageContext";

function NavBar() {
  const { isDark } = useContext(PageContext);

  return (
    <nav className={`navbar ${isDark && "dark-mode"}`}>
      <ul className="navbar-list">
        <li>
          <NavLink to="/">홈</NavLink>
        </li>
        <li>
          <NavLink to="/about">소개</NavLink>
        </li>
        <li>
          <NavLink to="/menus">메뉴 목록</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
