import "./App.css";
import InputBar from "./components/InputBar.js";
import ListItems from "./components/ListItems.js";
import { useState } from "react";
import Header from "./components/Header.js";

function App() {
  const [todo, setTodo] = useState([
    // {
    //   id: 1,
    //   todo: "clean",
    //   isDone: false,
    // },
    // {
    //   id: 2,
    //   todo: "homework",
    //   isDone: false,
    // },
    // {
    //   id: 3,
    //   todo: "read",
    //   isDone: false,
    // },
  ]);

  //create function to submit my todo input. Not dynamic yet.
  function handleSubmitButton(e) {
    e.preventDefault();
    const newTodoItem = e.target.todo.value;
    const newTodoItems = [
      ...todo,
      {
        todos: newTodoItem,
        isDone: false,
      },
    ];
    setTodo(newTodoItems);
    e.target.reset();
  }

  return (
    <div className="App">
      <Header text="Todo app" />
      <InputBar onSubmit={handleSubmitButton} name="Add" />
      <ListItems items={todo} />
    </div>
  );
}

export default App;

/* I have 2 components: Input and button */
