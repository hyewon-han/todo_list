import React from "react";
import Todo from "./Todo";

function TodoList({ isDone, state, todos, setTodos }) {
  const filteredTodos = isDone
    ? todos.filter((todo) => todo.isDone === true)
    : todos.filter((todo) => todo.isDone === false);
  return (
    <div>
      <h2>{state}</h2>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
