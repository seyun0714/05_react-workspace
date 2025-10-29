import React from "react";
import { useParams } from "react-router-dom";

/*
  /practice/it/2
  /practice/it/5
  /practice/history/1
  /practice/art/5
*/

function Practice() {
  const { category, id } = useParams();

  return (
    <div>
      <h5>연습 페이지</h5>
      <p>
        {category}의 {id}번째 페이지입니다.
      </p>
    </div>
  );
}

export default Practice;
