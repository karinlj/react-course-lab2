import styled from "styled-components";
import { colors } from "../styles/variables";

const ListItem = ({ item, toggleFoundHometoUI, handleMovedFromUI }) => {
  const catUrl = "http://localhost:9000/cats/" + item.id;

  //update foundHome property in db
  const toggleFoundHome = (id) => {
    fetch(catUrl, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ foundHome: !item.foundHome }),
    })
      .then(() => {
        //update item locally
        toggleFoundHometoUI(id);
      })
      .catch((err) => console.log(err.message));
  };

  //delete item from db if has moved to new home
  const handleMoved = (id) => {
    fetch(catUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ foundHome: !item.foundHome }),
    })
      .then(() => {
        //update item locally
        handleMovedFromUI(id);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <StyledListItem key={item.id}>
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
        <button className="moved" onClick={() => handleMoved(item.id)}>
          <i
            className="fas fa-home"
            title="Moved to home"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </StyledListItem>
  );
};
export default ListItem;

const StyledListItem = styled.li.attrs({
  className: "styled-list-item ",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  line-height: 1.5rem;
  padding: 15px 20px;
  margin: 0;
  border-bottom: 1px solid ${colors.themeBorderColor};
  color: $themecolor;
  &:first-of-type {
    border-radius: ${colors.themeBorderRadius} ${colors.themeBorderRadius} 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 ${colors.themeBorderRadius} ${colors.themeBorderRadius};
  }
  span {
    color: ${colors.themecolor};
  }
  button,
  i {
    padding: 5px 6px;
    background: transparent;
    border: 2px solid transparent;
  }
  .fa-paw {
    color: ${colors.themecolorBlueLight};
  }
  .fa-pagelines {
    font-size: 1.3rem;
    color: ${colors.themecolorGreen};
  }
  .new-home {
    color: #ccc;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      border: 2px solid ${colors.themeBorderColor};
    }
    &.found {
      color: ${colors.themecolorLila};
    }
  }
  .moved {
    color: ${colors.themecolorPinkDark};
    &:hover {
      border: 2px solid ${colors.themeBorderColor};
    }
  }
`;
