/*
  * axios의 장점

  1. 브라우저...?
  2. Promise 기반: await/async와 함꼐 사용 가능
  3. 자동 JSON 변환: 요청/응답 데이터를 자동으로 JSON으로 변환
  4. 인터셉터: 요청/응답을 가로채서 공통로직 처리 가능
  5. 에러 처리: HTTP 에러 상태 코드를 자동으로 처리

*/

import axios from 'axios';

/*
  Axios 인스턴스 생성 - axios.create()

  설정옵션
  - baseURL: 모든 요청의 기본 URL
  - headers: 모든 요청에 포함될 기본 헤더
  - timeout: 요청 타임아웃 시간(밀리초)
*/

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const postAPI = {
  getAllPosts: async () => {
    const response = await client.get('posts');
    return response.data;
  },
  getPostById: async (postId) => {
    const response = await client.get(`posts/${postId}`);
    return response.data;
  },
  addPost: async (postData) => {
    await client.post('posts', postData);
  },
  updatePost: async (postId, postData) => {
    await client.put(`posts/${postId}`, postData);
  },
  deletePost: async (postId) => {
    await client.delete(`posts/${postId}`);
  },
};

export default postAPI;
