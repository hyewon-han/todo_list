import "./css/App.css";
import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <Form
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          todos={todos}
          setTodos={setTodos}
        />
        <h2>Working..🔥</h2>
        <ul className="todo-list">
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => (
              <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}>
                완료
              </Todo>
            ))}
        </ul>
        <h2>Done..! 🎉</h2>
        <ul className="todo-list">
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => (
              <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}>
                취소
              </Todo>
            ))}
        </ul>
      </div>
      <footer>Hyewon's To do List &copy; All right reserved</footer>
    </div>
  );
}

export default App;
