import "./ListItem.css";
import { GiTrashCan } from "react-icons/gi";

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
        className="delete-button"
        onClick={(clickEvent) => {
          clickEvent.stopPropagation();
          buttonClickHandler(item.id);
        }}
      >
        <GiTrashCan />
      </button>
    </li>
  );
}
