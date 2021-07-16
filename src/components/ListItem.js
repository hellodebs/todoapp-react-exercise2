import "./ListItems.css";

export default function ListItem({ item }) {
  return (
    <li className={(item.isDone = false ? "listitem--is-done" : "")}>
      {item.todos}
    </li>
  );
}
