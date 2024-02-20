import "./ListItem.scss";

const ListItem = ({ item, toggleFoundHome, handleDelete }) => {
  return (
    <li className="list-item" key={item.id}>
      <div>
        {" "}
        <i className="fas fa-paw" aria-hidden="true"></i>
        <span>{item.name}</span>
      </div>

      <div>
        {item.goOutside && <i className="fab fa-pagelines"></i>}

        <button
          className={`new-home ${item.foundHome ? "found" : ""}`}
          onClick={() => toggleFoundHome(item.id)}
        >
          <i className="fas fa-home" title="Found home" aria-hidden="true"></i>
        </button>

        <button onClick={() => handleDelete(item.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
