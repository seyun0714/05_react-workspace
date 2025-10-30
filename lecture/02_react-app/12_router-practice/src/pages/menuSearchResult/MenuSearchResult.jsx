import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMenuSearchResult } from "../../api/menuApi";
import MenuList from "../../components/menuList/MenuList";
import "./MenuSearchResult.css";
import BackButton from "../../components/backButton/BackButton";

function MenuSearchResult() {
  const [menus, setMenus] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const condition = searchParams.get("condition");
    const keyword = searchParams.get("keyword");
    setMenus(getMenuSearchResult(condition, keyword));
  }, []);
  return (
    <div className="menusearchresult">
      <div className="menusearchresult-title">
        메뉴 검색 결과 페이지
        <BackButton />
      </div>
      <div className="separator"></div>
      {menus.length ? (
        <>
          <MenuList menus={menus} />
        </>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </div>
  );
}

export default MenuSearchResult;
