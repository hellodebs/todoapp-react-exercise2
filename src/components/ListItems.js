import ListItem from "./ListItem.js";
import uuid from "react-uuid";

export default function ListItems({ items }) {
  const liItem = items.map((item) => {
    return <ListItem key={uuid()} item={item} />;
  });

  return <ul>{liItem}</ul>;
}
