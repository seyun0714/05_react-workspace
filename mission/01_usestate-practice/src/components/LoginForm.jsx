import React from "react";
import { useState } from "react";

function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isKeepLogin, setIsKeepLogin] = useState(false);

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeKeep = (e) => {
    setIsKeepLogin(e.target.checked);
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    alert(`로그인 시도!
사용자: ${username}
기억하기: ${isKeepLogin ? "예" : "아니오"}`);
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">사용자명: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => handleChangeUsername(e)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="isKeepLogin"
            checked={isKeepLogin}
            onChange={(e) => handleChangeKeep(e)}
          />
          <label htmlFor="isKeepLogin">로그인 상태 유지</label>
        </div>
        <div>
          <button type="submit" onClick={(e) => handleClickLogin(e)}>
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
