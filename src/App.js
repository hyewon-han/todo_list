import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <span>My Todo List</span>
        <span>React</span>
      </header>
      <Form
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        todos={todos}
        setTodos={setTodos}
      />
      <h2>Working..🔥</h2>
      <ul>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}>
              완료
            </Todo>
          ))}
      </ul>
      <h2>Done..! 🎉</h2>
      <ul>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}>
              취소
            </Todo>
          ))}
      </ul>
    </div>
  );
}

export default App;
