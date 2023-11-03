import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([]);

  const submitTodo = (e) => {
    e.preventDefault();
    const todoObj = { id: todos.length, title, body, isDone: false };
    setTodos([...todos, todoObj]);
    setTitle("");
    setBody("");
  };
  const isDoneTodo = (id) => {
    todos.find((todo) => todo.id === id).isDone = true;
    console.log(todos);
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
    <div className="App">
      <header className="App-header">
        <span>My Todo List</span>
        <span>React</span>
      </header>
      <Form
        submitTodo={submitTodo}
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
      />
      <h2>Working..🔥</h2>
      <ul>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              isDoneTodo={isDoneTodo}
            >
              완료
            </Todo>
          ))}
      </ul>
      <h2>Done..! 🎉</h2>
      <ul>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              isDoneTodo={isDoneTodo}
            >
              취소
            </Todo>
          ))}
      </ul>
    </div>
  );
}

export default App;
