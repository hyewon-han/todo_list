import React from "react";

function Todo({ todo, deleteTodo, isDoneTodo, children }) {
  return (
    <li key={todo.id} className="todo">
      <span>{todo.title}</span>
      <p>{todo.body}</p>
      <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
      <button onClick={() => isDoneTodo(todo.id)}>{children}</button>
    </li>
  );
}

export default Todo;
