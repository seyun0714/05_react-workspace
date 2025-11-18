import React from 'react';
import postAPI from '../api/postAPI';

function PostList({ posts, setSelectedPost, fetchPosts }) {
  const handlePostClick = async (e) => {
    e.stopPropagation();
    setSelectedPost(await postAPI.getPostById(e.target.dataset.postId));
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    const postId = e.target.closest('li').dataset.postId;
    await postAPI.deletePost(postId);
    setSelectedPost(null);
    fetchPosts();
  };
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} onClick={handlePostClick} data-post-id={post.id}>
              {post.title}
              <button onClick={handleDelete}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostList;
