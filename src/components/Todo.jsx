import React from "react";
import "../css/Todo.css";

function Todo({ todo, todos, setTodos }) {
  function toggleTodo(id) {
    // todo.isDone => true <-> false
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <li key={todo.id} className="todo">
      <p>{todo.title}</p>
      <p>{todo.body}</p>
      <div className="todo-btns">
        <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
}

export default Todo;
