import React from "react";
import MenuItem from "../menuItem/MenuItem";
import "./MenuList.css";

// 렌더링 시킬 메뉴 목록 데이터 전달 받음
function MenuList({ menus }) {
  return (
    <div className="menulist">
      {menus.map((menu) => (
        <MenuItem key={menu.menuCode} menu={menu} />
      ))}
    </div>
  );
}

export default MenuList;
