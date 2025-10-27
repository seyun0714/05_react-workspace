import React from "react";
import { useState } from "react";

function ToggleSwitch() {
  const [isShow, setIsShow] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={isShow}
          onChange={(e) => setIsShow(e.target.checked)}
        />
        <span>콘텐츠표시: {isShow ? "켜짐" : "꺼짐"}</span>
      </div>
      <div>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        <span>다크모드: {isDark ? "🌙" : "☀️"}</span>
      </div>
      {isShow && (
        <div>
          <span>🎉 이 메시지는 조건부로 표시됩니다!</span>
        </div>
      )}
    </div>
  );
}

export default ToggleSwitch;
