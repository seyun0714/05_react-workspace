import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [inputValue, setInputValue] = useState({
    category: "",
    id: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInputValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClickLookup = () => {
    navigate(`/practice/${inputValue.category}/${inputValue.id}`);
  };

  return (
    <div>
      <h5>Home</h5>
      {/* location.href = "요청할 URL" === <a>  (서버사이드 요청, 깜빡거림 발생) */}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        소개 페이지
      </button>
      <button onClick={() => navigate("/profile/1")}>1번 회원프로필</button>
      <button onClick={() => navigate("/profile/2")}>2번 회원프로필</button>

      <br />
      <br />

      <div>
        카테고리:{" "}
        <input
          type="text"
          name="category"
          value={inputValue.category}
          onChange={handleChangeInput}
        />
        <br />
        아이디:{" "}
        <input
          type="'text'"
          name="id"
          value={inputValue.id}
          onChange={handleChangeInput}
        />
        <br />
        <button onClick={handleClickLookup}>조회</button>
      </div>
    </div>
  );
}

export default Home;
