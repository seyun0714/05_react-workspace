import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { uid } = useParams(); // { uid: "1", ...}
  return (
    <div>
      <h5>프로필 페이지</h5>
      <p>현재 페이지는 {uid} 회원 번호의 사용자 프로필 페이지 입니다.</p>
    </div>
  );
}

export default Profile;
