import styled from "styled-components";
import { colors, themeSettings } from "../styles/variables";
import ListItem from "./ListItem";

const StyledItemsList = styled.ul.attrs({
  className: "styled-items-list",
})`
  box-shadow: ${colors.themeBoxShadow};
  width: 100%;
  margin: 1.2rem 0;
`;
const ItemsList = ({ items, toggleFoundHome }) => {
  return (
    <StyledItemsList>
      {items &&
        items.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              toggleFoundHome={toggleFoundHome}
            />
          );
        })}
    </StyledItemsList>
  );
};

export default ItemsList;
