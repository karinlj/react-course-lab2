import styled from "styled-components";
import { colors, themeSettings } from "../styles/variables";

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
  }
  .fa-paw {
    color: ${colors.themecolorBlueLight};
  }
  .fa-pagelines {
    font-size: 1.3rem;

    color: ${colors.themecolorGreen};
  }
  .new-home {
    &:hover {
      filter: brightness(70%);
    }
    color: #b3b3b3;
    cursor: pointer;
    transition: all 0.3s ease;
    &.found {
      color: ${colors.themecolorLila};
    }
  }
`;

const ListItem = ({ item, toggleFoundHome }) => {
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
      </div>
    </StyledListItem>
  );
};

export default ListItem;
