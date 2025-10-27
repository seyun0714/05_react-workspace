import React, { useEffect, useState } from "react";

function Example5() {
  const [posts, setPosts] = useState([]);

  /*
    ## useEffect를 통해서 데이터 불러오기
      1. 초기 state - 빈 배열로 설정
      2. 컴포넌트 초기 렌더링
        - return 문 실행
        - 화면에 빈 배열로 렌더링 (아무것도 안보임)
      3. useEffect setUp 함수 실행
        - fetch 시작
      4. (잠시 후) fetch 완료
        - 받은 데이터를 기반으로 setPosts로 상태 업데이트
      5. 리렌더링
        - return 문 실행
        - 응답된 데이터가 담겨있는 posts 기반으로 렌더링 됨
  */
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    console.log("실행");
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
    });
    const postsData = await response.json();
    setPosts(postsData);
  }

  return (
    <>
      {/* 현재 게시글 목록 데이터 출력 */}
      <h2 style={{ textAlign: "center" }}>전체 게시글 목록</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "0",
        }}
      >
        {posts.map((post, idx) => {
          return (
            <li
              key={post.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                width: "500px",
                border: "1px solid black",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div>번호: {idx + 1}</div>
              <div>제목: {post.title}</div>
              <div>내용: {post.body}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Example5;

/**
 * # 컴포넌트 본문에 바로 외부 API 통신하는 코드 작성 시 문제점
 * 1. 비동기 타이밍 문제 (fetch는 비동기)
 *    1) let arr = []; (빈배열)
 *    2) fetch 시작 ((데이터 요청 보내놓기), 백그라운드에서 실행)
 *    3) const [posts, setPosts] = useState(arr)에서 아직 arr이 빈배열임
 *    4) 렌더링
 *    5) 나중에 fetch가 완료됨 => arr = jsonData
 *
 * 2. 무한 반복 문제
 *    컴포넌트가 렌더링 될 때마다(초기, 상태 변화) 컴포넌트 함수 전문이 실행됨
 *    즉, 렌더링 될 때마다 계속 fetch 구문이 실행됨 => 불필요한 네트워크 요청 지속
 */
