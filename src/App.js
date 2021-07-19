import "./App.css";
import InputBar from "./components/InputBar.js";
import ListItems from "./components/ListItems.js";
import { useState } from "react";
import Header from "./components/Header.js";
import uuid from "react-uuid";

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
    if (newTodoItem === "") {
      return;
    }
    const newTodoItems = [
      ...todo,
      {
        id: uuid(),
        todos: newTodoItem,
        isDone: false,
      },
    ];

    // console.log(newTodoItems);
    setTodo(newTodoItems);
    e.target.reset();
  }

  //create function to map through current state (todo) and create new variable. Add possibility to click on todo item for linethrough.
  function handleItemClick(id) {
    // console.log(id);
    const editedItems = todo.map((item) => {
      if (id === item.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setTodo(editedItems);
  }

  //create function to filter through todo items so selected todo-items get deleted.
  function handleButtonClick(id) {
    const deletedItems = todo.filter((item) => {
      return id !== item.id;
    });
    setTodo(deletedItems);
  }

  return (
    <div className="app">
      <Header text="Todo App" />
      <InputBar onSubmit={handleSubmitButton} name="Add" />
      <main>
        <ListItems
          items={todo}
          itemClickHandler={handleItemClick}
          buttonClickHandler={handleButtonClick}
        />
      </main>
      <footer>Made with 🖤 by Debora</footer>
    </div>
  );
}

export default App;
