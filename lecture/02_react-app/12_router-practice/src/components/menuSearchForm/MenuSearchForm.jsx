import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuSearchForm.css";

function MenuSearchForm() {
  const [searchInput, setSearchInput] = useState({
    condition: "menuName",
    keyword: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setSearchInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClickSearch = () => {
    if (!searchInput.keyword) {
      alert("검색어를 입력해주세요.");
      return;
    }
    navigate(
      `/menus/search?condition=${searchInput.condition}&keyword=${searchInput.keyword}`
    );
  };

  return (
    <div className="menusearchform">
      <select name="condition" onChange={(e) => handleChangeInput(e)}>
        <option value="menuName" defaultChecked>
          메뉴 명
        </option>
        <option value="category">카테고리 명</option>
      </select>
      <input
        type="search"
        name="keyword"
        placeholder="검색어를 입력해주세요."
        value={searchInput.keyword}
        onChange={(e) => handleChangeInput(e)}
      />
      <button onClick={handleClickSearch}>검색</button>
    </div>
  );
}

export default MenuSearchForm;
