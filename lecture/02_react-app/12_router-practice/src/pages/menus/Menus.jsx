import React, { useEffect, useMemo, useState } from "react";
import MenuList from "../../components/menuList/MenuList";
import { getMenus } from "../../api/menuApi";
import "./menus.css";
import MenuSearchForm from "../../components/menuSearchForm/MenuSearchForm";

function Menus() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(getMenus());
  }, []);

  return (
    <div className="menus">
      <div className="menus-title">메뉴 목록 페이지</div>
      <MenuSearchForm />
      <div className="separator"></div>
      <MenuList menus={menus} />
    </div>
  );
}

export default Menus;
