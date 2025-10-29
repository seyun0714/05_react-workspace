import { useSearchParams } from "react-router-dom";

function Info() {
  const [params] = useSearchParams();
  const name = params.get("name") || "GUEST";
  const age = parseInt(params.get("age")) || 0;

  return (
    <div>
      <h3>Info 페이지</h3>
      <p>안녕하세요! {name}님!</p>
      {age > 0 && (
        <p>
          {name}님의 나이는 {age}살 입니다.
        </p>
      )}
    </div>
  );
}

export default Info;
