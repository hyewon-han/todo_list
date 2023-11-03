import React from "react";

function Form({ submitTodo, title, setTitle, body, setBody }) {
  return (
    <form onSubmit={submitTodo}>
      <label htmlFor="title">제목</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        placeholder="Write your to do title"
      />
      <label htmlFor="body">내용</label>
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        id="body"
        type="text"
        placeholder="Write your to do body"
      />
      <button>추가하기</button>
    </form>
  );
}

export default Form;
