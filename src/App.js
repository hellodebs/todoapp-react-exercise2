import "./App.css";
import Input from "./components/Input.js";
import Button from "./components/Button.js";

function App() {
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
    </div>
  );
}

export default App;

/* I have Components: Input and button */
