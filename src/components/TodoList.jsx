import React from "react";
import Todo from "./Todo";

function TodoList({ isDone, todos, setTodos }) {
  return (
    <div>
      <h2>{isDone ? "Working..🔥" : "Done..! 🎉"}</h2>
      <ul className="todo-list">
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
