import menus from "../data/menus.json";

// 메뉴 전체 목록 조회용
function getMenus() {
  return menus;
}

// 메뉴 상세 조회용 / id === 조회할 메뉴 코드값(전달값)
function getMenuDetail(id) {
  return menus.find((menu) => menu.menuCode === parseInt(id));
}

// 메뉴 검색 결과 목록 조회용 (검색 조건, 검색어 필요) / conditon === 검색 조건(메뉴 명, 카테고리 명) / keyword === 키워드
function getMenuSearchResult(condition, keyword) {
  return menus.filter((menu) => menu[condition].includes(keyword));
}

export { getMenus, getMenuDetail, getMenuSearchResult };
