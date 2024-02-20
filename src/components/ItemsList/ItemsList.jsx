import "./ItemsList.scss";
import ListItem from "../ListItem/ListItem";

const ItemsList = ({ items, toggleFoundHome, handleDelete }) => {
  return (
    <ul className="item-list">
      {items &&
        items.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              toggleFoundHome={toggleFoundHome}
            />
          );
        })}
    </ul>
  );
};

export default ItemsList;
