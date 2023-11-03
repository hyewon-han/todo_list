import "../css/App.css";
import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";

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
