import "./ListItems.css";

export default function ListItem({ item, itemClickHandler }) {
  return (
    <li
      onClick={() => {
        itemClickHandler(item.id);
      }}
      className={item.isDone === true ? "listitem--is-done" : ""}
    >
      {item.todos}
    </li>
  );
}
