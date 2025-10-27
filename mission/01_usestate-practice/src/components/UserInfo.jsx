import React, { useState } from "react";

function UserInfo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAge(e) {
    setAge(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <div>
        <label htmlFor="name">이름: </label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => handleChangeName(e)}
        />
      </div>
      <div>
        <label htmlFor="age">나이: </label>
        <input
          name="age"
          type="text"
          value={age}
          onChange={(e) => handleChangeAge(e)}
        />
      </div>
      <div>
        <label htmlFor="email">이메일: </label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
        />
      </div>
      <h3>프로필</h3>
      <div>
        {name || "이름"} ({age || "나이"})
      </div>
      <div>📷{email || "이메일"}</div>
    </div>
  );
}

export default UserInfo;
