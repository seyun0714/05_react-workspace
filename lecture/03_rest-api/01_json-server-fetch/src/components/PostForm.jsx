import React from 'react';

function PostForm({ formData, handleFormChange, handleSubmit, isLoading }) {
  return (
    <div>
      <h2>게시글 등록/수정 폼</h2>
      <form>
        <input
          type="text"
          id="title"
          placeholder="제목"
          value={formData.title}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          id="content"
          placeholder="내용"
          value={formData.content}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          id="author"
          placeholder="작성자명"
          value={formData.author}
          onChange={handleFormChange}
        />
        <br />
        <button type="submit" onClick={handleSubmit} disabled={isLoading}>
          등록
        </button>
      </form>
    </div>
  );
}

export default PostForm;
