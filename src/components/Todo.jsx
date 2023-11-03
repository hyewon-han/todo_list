import React from "react";
import "../css/Todo.css";

function Todo({ todo, todos, setTodos }) {
  const isDoneTodo = (id) => {
    todos.find((todo) => todo.id === id).isDone = true;
    setTodos([...todos]);
  };
  const isNotDoneTodo = (id) => {
    todos.find((todo) => todo.id === id).isDone = false;
    setTodos([...todos]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <li key={todo.id} className="todo">
      <p>{todo.title}</p>
      <p>{todo.body}</p>
      <div className="todo-btns">
        <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
        <button
          onClick={
            todo.isDone === false
              ? () => isDoneTodo(todo.id)
              : () => isNotDoneTodo(todo.id)
          }
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
}

export default Todo;
