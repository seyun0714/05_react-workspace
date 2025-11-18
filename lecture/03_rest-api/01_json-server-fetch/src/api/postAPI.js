const BASE_URL = 'http://localhost:3000';

const postAPI = {
  getAllPost: async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      const posts = response.json();
      return posts;
    } catch (error) {
      console.error(error);
    }
  },
  getPostById: async (postId) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`);
      const post = response.json();
      return post;
    } catch (error) {
      console.error(error);
    }
  },
  addPost: async (postData) => {
    try {
      await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(postData),
      });
    } catch (error) {
      console.error(error);
    }
  },
  updatePost: async (postId, postData) => {
    try {
      await fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(postData),
      });
    } catch (error) {
      console.error(error);
    }
  },
  deletePost: async (postId) => {
    try {
      await fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default postAPI;
