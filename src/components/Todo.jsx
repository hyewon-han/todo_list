import React from "react";

function Todo({ todo, todos, setTodos, children }) {
  const isDoneTodo = (id) => {
    todos.find((todo) => todo.id === id).isDone = true;
    setTodos([...todos]);
  };
  const isNotDoneTodo = (id) => {
    todos.find((todo) => todo.id === id).isDone = false;
    setTodos([...todos]);
  };
  const deleteTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <li key={todo.id} className="todo">
      <span>{todo.title}</span>
      <p>{todo.body}</p>
      <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
      <button
        onClick={
          todo.isDone === false
            ? () => isDoneTodo(todo.id)
            : () => isNotDoneTodo(todo.id)
        }
      >
        {children}
      </button>
    </li>
  );
}

export default Todo;
