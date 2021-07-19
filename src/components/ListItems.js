import ListItem from "./ListItem.js";

export default function ListItems({
  items,
  itemClickHandler,
  buttonClickHandler,
}) {
  const liItem = items.map((item) => {
    return (
      <ListItem
        key={item.id}
        item={item}
        itemClickHandler={itemClickHandler}
        buttonClickHandler={buttonClickHandler}
      />
    );
  });

  return <ol>{liItem}</ol>;
}
