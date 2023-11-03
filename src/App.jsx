import "./css/App.css";
import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

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
        <TodoList
          isDone={false}
          state="Working..🔥"
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          isDone={true}
          state="Done..! 🎉"
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <footer>Hyewon's To do List &copy; All right reserved</footer>
    </div>
  );
}

export default App;
