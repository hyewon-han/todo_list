import "../css/App.css";
import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <Form todos={todos} setTodos={setTodos} />
        <TodoList isDone={false} todos={todos} setTodos={setTodos} />
        <TodoList isDone={true} todos={todos} setTodos={setTodos} />
      </div>
      <footer>Hyewon's To do List &copy; All right reserved</footer>
    </div>
  );
}

export default App;
