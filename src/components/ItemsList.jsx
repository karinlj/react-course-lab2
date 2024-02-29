import styled from "styled-components";
import { colors } from "../styles/variables";
import ListItem from "./ListItem";

const ItemsList = ({ items, toggleFoundHometoUI, handleMovedFromUI }) => {
  return (
    <StyledItemsList>
      {items &&
        items.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              toggleFoundHometoUI={toggleFoundHometoUI}
              handleMovedFromUI={handleMovedFromUI}
            />
          );
        })}
    </StyledItemsList>
  );
};
export default ItemsList;

const StyledItemsList = styled.ul.attrs({
  className: "styled-items-list",
})`
  box-shadow: ${colors.themeBoxShadow};
  width: 100%;
  margin: 1.2rem 0;
`;
