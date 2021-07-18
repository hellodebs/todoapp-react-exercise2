import "./ListItem.css";

export default function ListItem({
  item,
  itemClickHandler,
  buttonClickHandler,
}) {
  return (
    <li
      onClick={() => {
        itemClickHandler(item.id);
      }}
      className={item.isDone === true ? "listitem--is-done" : ""}
    >
      {item.todos}
      <button
        onClick={(clickEvent) => {
          clickEvent.stopPropagation();
          buttonClickHandler(item.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
