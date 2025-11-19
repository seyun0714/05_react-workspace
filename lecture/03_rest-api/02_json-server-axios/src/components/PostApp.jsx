import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import postAPI from '../api/postAPI';

const DEFAULT_FORM_DATA = {
  title: '',
  content: '',
  author: '',
};

function PostApp() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    setPosts(await postAPI.getAllPosts());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      setFormData({
        title: selectedPost.title,
        content: selectedPost.content,
        author: selectedPost.author,
      });
    } else {
      setFormData({
        title: '',
        content: '',
        author: '',
      });
    }
  }, [selectedPost]);

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postAPI.addPost(formData);
    fetchPosts();
    setFormData(DEFAULT_FORM_DATA);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    await postAPI.updatePost(selectedPost.id, formData);
    fetchPosts();
    setFormData(DEFAULT_FORM_DATA);
  };

  return (
    <div>
      {isLoading ? (
        <>로딩 중...</>
      ) : (
        <PostList
          posts={posts}
          setSelectedPost={setSelectedPost}
          fetchPosts={fetchPosts}
        />
      )}
      {selectedPost ? (
        <PostForm
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          handleSubmit={handleUpdateSubmit}
          isLoading={isLoading}
        />
      ) : (
        <PostForm
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default PostApp;
