import { useState } from "react";
import "../css/Form.css";

function Form({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitTodo = (e) => {
    e.preventDefault();
    const todoObj = { id: Date.now(), title, body, isDone: false };
    setTodos([...todos, todoObj]);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={submitTodo} className="form">
      <label htmlFor="title">제목</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        placeholder="Write your to do title"
        required
        maxLength={20}
      />
      <label htmlFor="body">내용</label>
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        id="body"
        type="text"
        placeholder="Write your to do body"
        required
        maxLength={20}
      />
      <button>추가하기</button>
    </form>
  );
}

export default Form;
