import ListItem from "./ListItem.js";

export default function ListItems({ items, itemClickHandler }) {
  const liItem = items.map((item) => {
    return (
      <ListItem key={item.id} item={item} itemClickHandler={itemClickHandler} />
    );
  });

  return <ul>{liItem}</ul>;
}
