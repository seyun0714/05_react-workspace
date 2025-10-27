import React from "react";
import { useState } from "react";

function Hobby() {
  const [hobbies, setHobbies] = useState([]);

  const handleChangeHobby = (e) => {
    const target = e.target.value;
    if (hobbies.includes(target)) {
      setHobbies((prev) => prev.filter((hobby) => hobby !== target));
    } else {
      setHobbies((prev) => [...prev, target]);
    }
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="checkbox"
            name="reading"
            value="reading"
            onChange={(e) => handleChangeHobby(e)}
          />
          <label htmlFor="reading">독서</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="music"
            value="music"
            onChange={(e) => handleChangeHobby(e)}
          />
          <label htmlFor="reading">음악</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="sports"
            value="sports"
            onChange={(e) => handleChangeHobby(e)}
          />
          <label htmlFor="reading">운동</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="coding"
            value="coding"
            onChange={(e) => handleChangeHobby(e)}
          />
          <label htmlFor="reading">코딩</label>
        </div>
      </div>
      <h3>선택된 취미</h3>
      <div>{hobbies.join(", ")}</div>
    </div>
  );
}

export default Hobby;
