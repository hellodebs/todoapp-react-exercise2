import "./App.css";
import Input from "./components/Input.js";
import Button from "./components/Button.js";
import ListItems from "./components/ListItems.js";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const todoItem = [
    {
      id: 1,
      todo: "clean",
      isDone: false,
    },
    {
      id: 2,
      todo: "homework",
      isDone: false,
    },
    {
      id: 3,
      todo: "read",
      isDone: false,
    },
  ];
  console.log(todoItem);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Input />
      <Button />
      <ListItems />
    </div>
  );
}

export default App;

/* I have 2 components: Input and button */
